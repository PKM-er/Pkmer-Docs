---
uid: 20231112215320
title: 自定义 Excalidraw 脚本 -OCR 自动提取图片文字 (可批量可修改)
tags:
  - Excalidraw
  - Excalidraw脚本
  - OCR
description: 对 Excalidraw 的图片进行 OCR，并保留文本信息在图片中，可以编辑修改、重新 OCR 和进行批量识别。
author: 熊猫别熬夜
type: other
draft: false
editable: false
modified: 20231112215527
---

# 自定义 Excalidraw 脚本 -OCR 自动提取图片文字 (可批量可修改)

> [!note] [[Draw-202311120936演示画板|演示画板]]
> ![20231112](https://github.com/PandaNocturne/Pkmer-Docs/assets/84729049/cc0d6c64-106e-44bc-9d83-6ca8de20b1e2)


> 对 Excalidraw 的图片进行 OCR，并保留文本信息在图片中，可以编辑修改、重新 OCR 和进行批量识别。

## 脚本思路

- 对图片添加弹窗，如果不存在 OCR 文本则进行 OCR，然后保留在 ocrText 的属性中，弹窗可以添加。
- 对图片进行 OCR，并保存数据为 el.ocrText(对象的属性值)
	- OCR 借助的 [Text Extractor插件的API](https://github.com/scambier/obsidian-text-extractor#using-text-extractor-as-a-dependency-for-your-plugin)

在控制台的使用：

```js

function getTextExtractor() {
	return app.plugins.plugins['text-extractor'].api;
}
// Example usage
let file={
    path:'Y-图形文件存储/ZoteroImages/JPQENLZK.png',
};

const text = await getTextExtractor().extractText(file)

console.log(text)
```

> 不过如果你不想要 Text Extractor 的自动识别，可以在脚本设置里面管理
> 默认是关闭的，请手动开启。
> ![7495104f04a6cd479a17dcc21dedfa8](https://cdn.pkmer.cn/images/7495104f04a6cd479a17dcc21dedfa8.png!pkmer)

## 脚本代码：Text Extractor

> [!tip]+ 选中多个图片可以进行批量识别但不会弹窗

```js
await ea.addElementsToView(); //to ensure all images are saved into the file
// // 在Obsidian中导入QuickAdd的API
// const quickaddApi = this.app.plugins.plugins.quickadd.api;

let settings = ea.getScriptSettings();
//set default values on first run
if (!settings["TextExtractor"]) {
	settings = {
		"TextExtractor": {
			value: false,
			description: "是否调用Text Extractor 插件API自动对图片进行OCR<br>安装Text Extractor 插件即可，注意设置识别语言"
		}
	};
	ea.setScriptSettings(settings);
}

const img = ea.getViewSelectedElements().filter(el => el.type === "image");
const nums = img.length;
let batchRecognition = false;
if (nums === 0) {
	new Notice("No image is selected");
	return;
} else if (nums > 1) {
	new Notice(`检测到${nums}张图片\n进行批量识别`, 500);
	batchRecognition = true;
}

// 图片计数
let n = 0;

for (let i of img) {
	const currentPath = ea.plugin.filesMaster.get(i.fileId).path;
	const file = app.vault.getAbstractFileByPath(currentPath);
	let ocrText = "";

	// 计数器加一
	n++;

	if (i.ocrText) {
		new Notice(`第${n}张图片已存在OCR文本`, 500);
		ocrText = i.ocrText;
	} else if (settings["TextExtractor"].value) {
		new Notice(`第${n}张图片OCR中......`);
		const text = await getTextExtractor().extractText(file);
		ocrText = processText(text);
		// console.log(ocrText);
		new Notice(`第${n}张片已完成OCR`, 500);
	} else {
		ocrText = "";
	}

	if (!batchRecognition) {
		const { insertType, ocrTextEdit } = await openEditPrompt(ocrText);

		// 不管复制还是修改，都会保存
		i.ocrText = ocrTextEdit;

		if (insertType == "copyText") {
			copyToClipboard(ocrTextEdit);
			new Notice(`已复制：\n${ocrTextEdit}`, 1000);
		} else if (insertType) {
			new Notice(`完成修改`, 500);
		}
	} else {
		i.ocrText = ocrText;
	}

	await ea.copyViewElementsToEAforEditing([i]);
	await ea.addElementsToView(false, true);
}

if (batchRecognition) new Notice(`✅已完成批量OCR`, 1000);
await ea.addElementsToView();

function getTextExtractor() {
	return app.plugins.plugins['text-extractor'].api;
}

function processText(text) {
	// 替换特殊空格为普通空格
	text = text.replace(/[\ue5d2\u00a0\u2007\u202F\u3000\u314F\u316D\ue5cf]/g, ' ');
	// 将全角字符转换为半角字符
	text = text.replace(/[\uFF01-\uFF5E]/g, function (match) { return String.fromCharCode(match.charCodeAt(0) - 65248); });
	// 替换英文之间的多个空格为一个空格
	text = text.replace(/([a-zA-Z])([\u4e00-\u9fa5])/g, '$1 $2');

	// 删除中文之间的空格
	text = text.replace(/([0-9\.\u4e00-\u9fa5])\s+([0-9\.\u4e00-\u9fa5])/g, '$1$2');
	text = text.replace(/([0-9\.\u4e00-\u9fa5])\s+([0-9\.\u4e00-\u9fa5])/g, '$1$2');
	text = text.replace(/([\u4e00-\u9fa5])\s+/g, '$1');
	text = text.replace(/\s+([\u4e00-\u9fa5])/g, '$1');

	// 在中英文之间添加空格
	text = text.replace(/([\u4e00-\u9fa5])([a-zA-Z])/g, '$1 $2');
	text = text.replace(/([a-zA-Z])([\u4e00-\u9fa5])/g, '$1 $2');

	return text;
}

async function openEditPrompt(ocrText) {
	// 打开编辑窗口
	let insertType = "";
	let ocrTextEdit = await utils.inputPrompt(
		"OCR文本",
		"可以自行修改文字保存在图片的属性中，单个空格会重新识别，其他符号如换行则不会自动识别，默认退出为识别的文字",
		ocrText,
		[
			{
				caption: "复制文本",
				action: () => {
					insertType = "copyText";
					return;
				}
			},
			{
				caption: "修改文本",
				action: () => {
					insertType = "insertImage";
					return;
				}
			},
		],
		10
	);
	if (!ocrTextEdit) {
		ocrTextEdit = ocrText;
	} else if (ocrTextEdit == " ") {
		ocrTextEdit = "";
	}

	return { insertType, ocrTextEdit };
}

function copyToClipboard(extrTexts) {
	const txtArea = document.createElement('textarea');
	txtArea.value = extrTexts;
	document.body.appendChild(txtArea);
	txtArea.select();
	if (document.execCommand('copy')) {
		console.log('copy to clipboard.');
	} else {
		console.log('fail to copy.');
	}
	document.body.removeChild(txtArea);
}

```
