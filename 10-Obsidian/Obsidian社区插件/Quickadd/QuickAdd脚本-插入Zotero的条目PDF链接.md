---
uid: 20240106235048
title: QuickAdd 脚本 - 插入 Zotero 的条目 PDF 链接
tags:
  - zotero
  - Obsidian
  - quickadd
  - quickadd脚本
description: 通过 Quickadd 和 Modal Forms 这 2 个插件的 API 完成的用于引用 Zotero 中已有 PDF 的条目链接
author: 熊猫别熬夜
type: other
draft: false
editable: false
modified: 20240106235443
---

# QuickAdd 脚本 - 插入 Zotero 的条目 PDF 链接

分享一个自己折腾玩的脚本，用于引用 Zotero 中已有 PDF 的条目链接。

![QuickAdd 脚本 - 插入 Zotero 的条目 PDF 链接](https://cdn.pkmer.cn/images/202401062354586.png!pkmer)

通过 Quickadd 和 Modal Forms 这 2 个插件的 API 完成的，其中里面的通过文本识别是通过询问 GPT 采用的一个 `Levenshtein距离计算相似度` 计算条目名称之间的相似度来选择的。

## 背景

因为 Zutilo 并没有适配 Zotero 7，无法通过快捷键复制条目的链接，所以写了一个通过 Zotero 引用或者手动选择条目名称来识别转换为条目链接。

> [!tip] Zotero 的 Actions Tags 插件也可以复制条目链接
> 其实 [Zotero 的 Actions Tags 插件](https://github.com/windingwind/zotero-actions-tags) 可以自定义脚本：
> ![QuickAdd 脚本 - 插入 Zotero 的条目 PDF 链接](https://cdn.pkmer.cn/images/202401062354588.png!pkmer)

> [!caution] 使用 Zotero 的 Actions Tags 插件更方便，以下脚本的都是瞎折腾的。

## 演示

### 模式 1：通过拖拽条目进行识别

![QuickAdd 脚本 - 插入 Zotero 的条目 PDF 链接](https://cdn.pkmer.cn/images/202401062354589.gif!pkmer)

### 模式 2：通过题目名称选择

![QuickAdd 脚本 - 插入 Zotero 的条目 PDF 链接](https://cdn.pkmer.cn/images/202401062354590.gif!pkmer)

### 模式 3：通过选中文本识别 (文献名称需要被《》包裹)

![QuickAdd 脚本 - 插入 Zotero 的条目 PDF 链接](https://cdn.pkmer.cn/images/202401062354591.gif!pkmer)

## Quickadd 脚本配置

- 前提：需要安装 Quickadd 和 Modal Forms 这 2 个插件。
	- 配置：需要配置 Zotero 的 storage 文件夹路径，默认是 `D:/Zotero/storage`。

```js
// 🔴修改Zotero路径即可
const folderPath = 'D:/Zotero/storage';
```

### 配置 Capture 动作

![QuickAdd 脚本 - 插入 Zotero 的条目 PDF 链接](https://cdn.pkmer.cn/images/202401062354592.png!pkmer)

### 脚本代码

````md
```js quickadd
// 🔴修改Zotero路径即可
const folderPath = 'D:/Zotero/storage';
const fs = require('fs');
const modalForm = app.plugins.plugins.modalforms.api;
const files = fs.readdirSync(folderPath);
const zoteroItems = [];

let selection = window.getSelection();
selection = selection.toString();

files.forEach((file) => {
	const filePath = `${folderPath}/${file}`;
	const stat = fs.statSync(filePath);
	if (stat.isDirectory()) {
		const subFiles = fs.readdirSync(filePath);
		const pdfFiles = subFiles.filter((subFile) => subFile.endsWith('.pdf')).map((pdfFile) => pdfFile.replace('.pdf', ''));

		if (pdfFiles.length > 0) {
			const zoteroItem = {};
			zoteroItem["item"] = file;
			zoteroItem["link"] = `zotero://open-pdf/library/items/${file}`;
			zoteroItem["file"] = pdfFiles[0];
			zoteroItems.push(zoteroItem);
		}
	}
});

console.log(zoteroItems);
let zoteroItemNames = [];

zoteroItems.forEach((item) => {
	zoteroItemNames.push(item["file"]);
});

// console.log(zoteroItemNames)
const values = {
	ZoteroCites: selection,
};

const result = await modalForm.openForm({
	title: "zoteroModalForms",
	name: "zoteroModalForms",
	version: "1",
	fields: [
		{
			name: "ZoteroCites",
			label: "通过引用匹配对应的Items",
			description: "引用格式需要IEEE格式",
			input: {
				type: "textarea"
			}
		},
		{
			name: "ZoteroItems",
			label: "",
			description: "",
			input: {
				type: "multiselect",
				source: "fixed",
				multi_select_options: zoteroItemNames,
			}
		},

	]
}, {values:values});

let getZoteroItems = result.getValue('ZoteroItems').value;
let getZoteroCites = result.getValue('ZoteroCites').value;

if (getZoteroCites) {
	getZoteroItems = getZoteroItems.concat(matchZoteroItems(getZoteroCites));

}
console.log(getZoteroItems);

let zoteroItemsLinks = [];

getZoteroItems.forEach((item) => {
	// const foundItem = zoteroItems.find((zoteroItem) => zoteroItem["file"].includes(item.substring(0, 10)));
	const foundItem = zoteroItems.find((zoteroItem) => {
		const similarityThreshold = 0.3; // 相似度阈值
		const similarity = 1 - levenshteinDistance(zoteroItem["file"], item) / Math.max(zoteroItem["file"].length, item.length);
		return similarity >= similarityThreshold;
	});
	if (foundItem) {
		const zoteroLink = `[《${item}》](${foundItem["link"]})`;
		zoteroItemsLinks.push(zoteroLink);
	}
});

if (zoteroItemsLinks.length) {
	const output = "- " + zoteroItemsLinks.join("\n- ");
	console.log(output);
	return output;
}

function matchZoteroItems(text) {
	const regex = /《(.*?)》/gm;
	const matches = text.match(regex);
	return matches ? matches.map(match => match.slice(1, -1)) : "";
}

function levenshteinDistance(a, b) {
	// Levenshtein距离计算相似度 by ChatGPT @2024-01-04 
	const m = a.length;
	const n = b.length;
	const dp = Array.from(Array(m + 1), () => Array(n + 1).fill(0));

	for (let i = 0; i <= m; i++) {
		dp[i][0] = i;
	}

	for (let j = 0; j <= n; j++) {
		dp[0][j] = j;
	}

	for (let i = 1; i <= m; i++) {
		for (let j = 1; j <= n; j++) {
			if (a[i - 1] === b[j - 1]) {
				dp[i][j] = dp[i - 1][j - 1];
			} else {
				dp[i][j] = Math.min(
					dp[i - 1][j] + 1, // 删除操作
					dp[i][j - 1] + 1, // 插入操作
					dp[i - 1][j - 1] + 1 // 替换操作
				);
			}
		}
	}

	return dp[m][n];
}
```
````

## References

1. [zotero的快速复制功能 - 知乎 (zhihu.com)](https://zhuanlan.zhihu.com/p/630323537)
2. [Windingwind/zotero-actions-tags：操作、标记、排序。 --- windingwind/zotero-actions-tags: Action it, tag it, sorted. (github.com)](https://github.com/windingwind/zotero-actions-tags)
