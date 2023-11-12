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

> [!cite|wide-3]+ 演示效果
> ![20231112](https://cdn.pkmer.cn/images/20231112.gif!pkmer)
> 对 Excalidraw 的图片进行 OCR，并保留文本信息在图片中，可以编辑修改、重新 OCR 和进行批量识别。

## 脚本思路

- 对图片添加弹窗，如果不存在 OCR 文本则进行 OCR，然后保留在 ocrText 的属性中，弹窗可以添加。
- 对图片进行 OCR，并保存数据为到指定 Cache 文件夹为 Json 数据 (参考 Text Extractor 的数据存储结构)
	- OCR 借助的 [Text Extractor插件的API](https://github.com/scambier/obsidian-text-extractor#using-text-extractor-as-a-dependency-for-your-plugin)

> [!note] Text Extractor 设置参数如下：
> ![Pasted image 20231113025247](https://cdn.pkmer.cn/images/Pasted%20image%2020231113025247.png!pkmer)

在控制台的使用 Text Extractor 的 API 案例：

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

> 不过如果你不想要 Text Extractor 的自动识别，可以在脚本设置里面进行设置
> ![Pasted image 20231113025405](https://cdn.pkmer.cn/images/Pasted%20image%2020231113025405.png!pkmer)

## 脚本代码：Text Extractor

> [!tip]+ 选中多个图片可以进行批量识别但不会弹窗

```js
await ea.addElementsToView(); //to ensure all images are saved into the file

const fs = require('fs');
const path = require('path');

let settings = ea.getScriptSettings();
//set default values on first run
if (!settings["TextCachePath"]) {
	settings = {
		"TextExtractor": {
			value: false,
			description: "是否调用Text Extractor 插件API自动对图片进行OCR<br>安装Text Extractor 插件即可，注意设置识别语言"
		},
		"TextCachePath": {
			value: "",
			description: "图片OCR的文本数据存储位置"
		}
	};
	ea.setScriptSettings(settings);
}

// 获取库的基本路径
const basePath = (app.vault.adapter).getBasePath();
const textCachePath = `${basePath}/${settings["TextCachePath"].value}`;

if (!fs.existsSync(textCachePath)) {
	fs.mkdirSync(textCachePath, { recursive: true });
	console.log('路径已创建');
} else {
	console.log('路径已存在');
}

const img = ea.getViewSelectedElements().filter(el => el.type === "image");

const nums = img.length;

let batchRecognition = false;

if (nums === 0) {
	new Notice("No image is selected");
	return;
} else if (nums > 2) {
	new Notice(`检测到${nums}张图片\n进行批量识别`, 500);
	batchRecognition = true;
}

// 图片计数
let n = 0;

for (let i of img) {
	let data = {
		filePath: "",
		fileId: "",
		ocrText: "",
	};

	const currentPath = ea.plugin.filesMaster.get(i.fileId).path;
	const file = app.vault.getAbstractFileByPath(currentPath);
	const jsonPath = path.join(textCachePath, `${i.fileId}.json`);

	jsonData = readJsonData(jsonPath, data);

	console.log(jsonData.valueOf());

	let ocrText = "";
	// 计数器加一
	n++;

	if (jsonData.ocrText) {
		new Notice(`图片已存在OCR文本`, 500);
		ocrText = jsonData.ocrText;

	} else if (settings["TextExtractor"].value) {
		new Notice(`图片OCR中......`);
		const text = await getTextExtractor().extractText(file);
		new Notice(`第${n}张片已完成OCR`, 500);
		ocrText = processText(text);
	} else {
		ocrText = "";
	}

	if (!batchRecognition) {
		const { insertType, ocrTextEdit } = await openEditPrompt(ocrText);
		// 不管复制还是修改，都会保存
		ocrText = ocrTextEdit;

		if (insertType == "copyText") {
			copyToClipboard(ocrTextEdit);
			new Notice(`已复制：\n${ocrTextEdit}`, 1000);
		} else if (insertType) {
			new Notice(`完成修改`, 500);
		}
	}

	data.filePath = file.path;
	data.fileId = i.fileId;
	data.ocrText = ocrText;

	fs.writeFileSync(jsonPath, JSON.stringify(data));

	await ea.copyViewElementsToEAforEditing([i]);
	await ea.addElementsToView(false, true, true);
}

if (batchRecognition) new Notice(`✅已完成批量OCR`, 3000);
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
		"可以自行修改文字保存在图片的属性中，输入一个空格会重新识别，注意清空并不会清除数据",
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
			}
		],
		10,
		true
	);

	if (!ocrTextEdit) {
		ocrTextEdit = ocrText
	} else if (ocrTextEdit == " ") {
		ocrTextEdit = ""
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

function readJsonData(jsonPath, data) {
	if (!fs.existsSync(jsonPath)) {
		console.log('文件不存在');
		fs.writeFileSync(jsonPath, JSON.stringify(data));
	} else {
		console.log('文件已存在');
	}
	const existingDataString = fs.readFileSync(jsonPath, 'utf8');
	let jsonData = JSON.parse(existingDataString);
	return jsonData;
}
```
