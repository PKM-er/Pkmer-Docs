---
uid: 19840124160000
title: QuickAdd脚本：为图片添加题注
tags:
  - quickadd
  - 图片
  - 题注
description: 使用QuickAdd脚本为图片添加题注
author: ProudBenzene
type: advanced
draft: false
editable: false
modified: 20240330184210
---

# QuickAdd 脚本：为图片添加题注

## 需求

由于目前我着手的库中有许多笔记经由同一个模板，且其中的图片都需要以固定格式进行题注命名，并通过图片的 metadata 控制图片大小保持一致，因此我撰写了这个脚本。

## 功能

- 将图片的文件名填入到图片题注中，例如 `![](assets/请保持平衡｜Balance,%20Please.assets/心相%20请保持平衡.png)` 在经过脚本转换后变为 `![心相 请保持平衡](assets/请保持平衡｜Balance,%20Please.assets/心相%20请保持平衡.png)`
- 这是一个可选功能，在执行脚本后为图片添加上固定的 metadata 参数，如 `![心相 请保持平衡|inlL|300](assets/请保持平衡｜Balance,%20Please.assets/心相%20请保持平衡.png)`

> [!warning] 注意
> 本脚本仅限**非 Wiki 链接**形式的图片使用。

效果展示：

![](https://cdn.pkmer.cn/images/202403301830078.gif!pkmer)

## 脚本

```javascript
// autoImageCaption.js by @ProudBenzene
let editor;
let activeLeaf = this.app.workspace.activeLeaf;
if (activeLeaf.view.getViewType() === 'markdown') {
	editor = activeLeaf.view.sourceMode.cmEditor;
}
// 现在你可以在这个作用域内使用editor对象了
const { exec } = require('child_process');
const path = require("path");

let QuickAdd;
module.exports = async function autoImageCaptions(params) {
	QuickAdd = params;
	new Notice(`题注自动生成完毕`, 5000);
};

// 获取笔记的基本路径
const filePath = app.workspace.getActiveFile().path;
const fileFullPath = app.vault.adapter.getFullPath(filePath)

// 获取选中的文本
const editors = app.workspace.activeLeaf.view.sourceMode.cmEditor;
const selection = editors.getSelection();
console.log(selection);
// 分情况讨论（选中的是链接本身还是链接中的文件名）
let selectionEmbed;
if (selection.includes("[[")) { // 如果选中的是Wiki链接本身
    selectionEmbed = matchSelectionEmbed(selection);
} else { // 如果选中的是Wiki链接中的文件名
    selectionEmbed = selection;
}
console.log(selectionEmbed)
// 分情况讨论（wiki链接或是标准markdown链接）
if (!selection.includes("(")) {
    // Wiki: 获取库所有文件列表
	const regex = /\/([^\/]*?)\./g;
	let decodedSelection = decodeURIComponent(selectionEmbed);
	let matches;
	let wikiName;
	while ((matches = regex.exec(decodedSelection)) !== null) {
		wikiName = matches[1];
	}
	console.log(wikiName)
	// 用wikiName替换[]中的内容
	if (!selection.includes("]]")) {
		const newSelection = `${selectionEmbed}|${wikiName}`;
		console.log(newSelection);
		editor.replaceSelection(newSelection);
	} else {
		const newSelection = selectionEmbed.replace(/\]\]/, `|${wikiName}]]`);
		console.log(newSelection);
		editor.replaceSelection(newSelection);
	}

} else {
    // 通过正则依次获取图片路径、图片名称并将其解码为文本
    const regex1 = /\((.*?)\)/;
    const matches1 = regex1.exec(selection);
    const selectionPath = matches1[1]; //去掉嵌入语法后的图片路径
    console.log(selectionPath);
	const regex = /.*\/(.*?)\./;
	const decodedSelection = decodeURIComponent(selectionPath);
	const matches2 = regex.exec(decodedSelection);
	let imageName = '';
	if (matches2 && matches2[1]) {
		imageName = matches2[1]/* + "|inlL|300"*/; /*修改此处可以为图片增加固定metadata控制大小*/
	}
	console.log(imageName);
	// 用imageName替换[]中的内容
	const newSelection = selection.replace(/\[.*?\]/, `[${imageName}]`);
	editor.replaceSelection(newSelection);

}

// 获取Wiki路径
function getFilePath(files, link) {
    let files2 = files.filter(f => path.basename(f.path).endsWith(link.replace(/\[\[/, "").replace(/\|.*]]/, "").replace(/\]\]/, "")));
    let filePath = files2.map((f) => f.path)[0];
    console.log(filePath);
    return filePath;
}

function matchSelectionEmbed(text) {
    const regex = /(\[\[.*\]\])/;
    const matches = text.match(regex);
    return matches ? matches[1] : "";
}


```