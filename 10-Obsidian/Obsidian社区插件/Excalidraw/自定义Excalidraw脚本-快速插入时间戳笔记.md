---
uid: 20231110155136
title: 自定义 Excalidraw 脚本 - 快速插入时间戳笔记
tags: [Excalidraw脚本, Excalidraw, 自动化]
description: 当笔记名不重要时，该脚本可以帮助您在画板中可以更加快速添加时间戳笔记。
author: 熊猫别熬夜
type: other
draft: false
editable: false
modified: 20231110160509
---

# 自定义 Excalidraw 脚本 - 快速插入时间戳笔记

## 脚本设置

![Pasted image 20231110152901](https://cdn.pkmer.cn/images/Pasted%20image%2020231110152901.png!pkmer)

## 快速添加时间戳笔记

![Pasted image 20231110153740](https://cdn.pkmer.cn/images/Pasted%20image%2020231110153740.png!pkmer)

> 按时间戳形式命名，利用 quickaddApi.date.now("YYYY-MM-DD") 等命名建立的，请根据需求来设置

![Pasted image 20231110153706](https://cdn.pkmer.cn/images/Pasted%20image%2020231110153706.png!pkmer)

配置好路径后，可以设置笔记名

输入框中添加笔记别名为 `20231110153740_别名.md`，不输入则为：`20231110153740.md`

## 不同模式下的嵌入形式

![Pasted image 20231110154454](https://cdn.pkmer.cn/images/Pasted%20image%2020231110154454.png!pkmer)

Card(图标类型卡片)、Frame(嵌入式 Frame)、Link(笔记 WiKi 链接)、Image(SVG 文档图片)

> Card 模式下会嵌入图标 (配置路径下的图标)
> 无：ESC 或回车退出，其他类型则直接创建 (bug)

### 设置 Card 模式下图标

![Pasted image 20231110154422](https://cdn.pkmer.cn/images/Pasted%20image%2020231110154422.png!pkmer)

## 快速删除本地笔记

选择或框选笔记后，再次运行脚本就可以删除本地笔记和画板元素了。

## JS 脚本

```js
const quickaddApi = this.app.plugins.plugins.quickadd.api;
// const ea = ExcalidrawAutomate;
const path = require("path");
const fs = require("fs");

ea.setView("active");
const trashFiles = ea.getViewSelectedElements().filter(el => el.link);

// 获取库所有文件列表
const files = app.vault.getFiles();

// 获取库的基本路径
const basePath = (app.vault.adapter).getBasePath();

if (Object.keys(trashFiles).length) {
	if (!confirm(`是否删除本地文件`)) return;
	for (let trashFile of trashFiles) {
		let files2 = files.filter(f => path.basename(f.path).includes(trashFile.link.replace(/\[\[/, "").replace(/\]\]/, "")));

		let filePaths = files2.map((f) => f.path)[0];

		if (confirm(`是否删除：\n${filePaths}`)) {
			// 删除元素
			ea.deleteViewElements(ea.getViewSelectedElements().filter(el => el.id == trashFile.id));
			ea.clear();
			await ea.addElementsToView(false, false);
			await ea.getExcalidrawAPI().history.clear(); //避免撤消/重做扰乱

			// 删除文件
			let absFilePath = `${basePath}/${filePaths}`;
			fs.unlink(absFilePath, (err) => {
				if (err) {
					console.error(err);
					return;
				}
				console.log("文件已成功删除");
			});
		}

	}

} else {

	// 设置quickerInsetNote模板设置
	let settings = ea.getScriptSettings();
	//set default values on first run
	if (!settings["QuickerInsertZKCardPath"]) {
		settings = {
			"QuickerInsertZKCardPath": {
				value: "D-每日生活记录/QuickNotes",
				description: "TimeStampNote的存放路径(相对路径)<br>eg：D-每日生活记录/QuickNotes<br>空值：默认为当前笔记路径"
			},
			"QuickerInsertZKCardTemplate": {
				value: "YYYY/YYYYMM/YYYYMMDD/YYYYMMDDHHMMSS",
				description: "TimeStampNote默认名称，若为存储路径用/隔开<br>eg：YYYYMM/YYYYMMDDHHMMSS"
			},
			"QuickerInsertZKCardYaml": {
				value: "---\ncssclasses:\n  - Excalidraw-Markdown\n---\n\n",
				height: "250px",
				description: "设定笔记模板"
			},
			"QuickerInsertZKCardImagePath": {
				value: "Y-图形文件存储/Excalidraw图形/Icons",
				description: "配置图标的文件夹",
			},
			"Default Insert Type": {
				value: "无",
				valueset: ["Card", "Frame", "Link", "Image", "无"],
				description: "Card(图标类型卡片)、Frame(嵌入式Frame)、Link(笔记链接)、Image(SVG图片)<br>无：ESC或回车退出，其他类型则直接创建",
			}
		};
		ea.setScriptSettings(settings);
	}

	// 存储路径
	const folderPath = settings["QuickerInsertZKCardPath"].value ? settings["QuickerInsertZKCardPath"].value : path.dirname(app.workspace.getActiveFile().path);

	console.log(folderPath);

	// 调用函数生成时间戳
	const timestamp = quickaddApi.date.now(settings["QuickerInsertZKCardTemplate"].value);
	console.log(timestamp);

	// 创建文件夹路径下的Markdown文件，fname为文件名
	const Yaml = settings["QuickerInsertZKCardYaml"].value;


	// 设置默认值
	let fileAlistName = "";
	let InsertType = settings["Default Insert Type"].value;

	listFiles = fileListByPath(settings["QuickerInsertZKCardImagePath"].value);
	listFiles.sort((a, b) => a.localeCompare(b));
	let listFileNames = [];
	for (i of listFiles) {
		listFileNames.push(path.basename(i));
	}
	console.log(listFileNames);

	let insertImageName = listFileNames[0];
	console.log(insertImageName);

	const customControls = (container) => {
		new ea.obsidian.Setting(container)
			.setName(`插入笔记图标`)
			.addDropdown(dropdown => {
				listFileNames.forEach(fileName => dropdown.addOption(fileName, fileName));
				dropdown
					.setValue(insertImageName)
					.onChange(value => {
						insertImageName = value;
					});
			});
	};

	fileAlistName = await utils.inputPrompt(
		"时间戳笔记别名",
		"输入文件名别名，默认为📝",
		"",
		[
			{
				caption: "Card",
				action: () => {
					InsertType = "Card";
					return;
				}
			},
			{
				caption: "Link",
				action: () => {
					InsertType = "Link";
					return;
				}
			},
			{
				caption: "Frame",
				action: () => { InsertType = "Frame"; return; }
			},
			{
				caption: "Image",
				action: () => { InsertType = "Image"; return; }
			}
		],
		1,
		false,
		customControls
	);


	// 时间戳笔记路径
	const filePath = fileAlistName ? `${folderPath}/${timestamp}_${fileAlistName}.md` : `${folderPath}/${timestamp}.md`;

	console.log(filePath);

	const fileName = path.basename(filePath).replace(/\.md/, "");
	console.log([filePath, fileName]);

	// 获取Obsidian文件对象
	const rootFolder = app.vault.getRoot();
	console.log(rootFolder);


	// 设置默认输入文本
	let inputText = "";

	// 添加Markdown文件为图片到当前文件
	if (InsertType == "Card") {
		inputText = await quickaddApi.wideInputPrompt("输入笔记内容", "输入笔记内容，ESC退出输入，Ctrl + Enter结束并插入文档");
		await app.fileManager.createNewFile(rootFolder, filePath, "md", inputText ? `${Yaml}\n${inputText}` : `${Yaml}`);

		let id = await ea.addImage(0, 0, insertImageName);
		let el = ea.getElement(id);
		el.link = `[[${fileName}]]`;
		await ea.addElementsToView(true, true);

	} else if (InsertType == "Link") {
		inputText = await quickaddApi.wideInputPrompt("输入笔记内容", "输入笔记内容，ESC退出输入，Ctrl + Enter结束并插入文档");
		await app.fileManager.createNewFile(rootFolder, filePath, "md", inputText ? `${Yaml}\n${inputText}` : `${Yaml}`);

		let id = await ea.addText(0, 0, fileAlistName ? `[[${fileName}|${fileAlistName}]]` : `[[${fileName}|📝]]`);

		let el = ea.getElement(id);
		el.link = `[[${fileName}]]`;
		await ea.addElementsToView(true, true);

	} else if (InsertType == "Frame") {
		inputText = await quickaddApi.wideInputPrompt("输入笔记内容", "输入笔记内容，ESC退出输入，Ctrl + Enter结束并插入文档");

		// 设定固定Yaml
		let file = await app.fileManager.createNewFile(rootFolder, filePath, "md", inputText ? `${Yaml}\n${inputText}` : `${Yaml}`);

		// 设置Frame样式
		ea.style.strokeColor = "#FFFFFF";
		ea.style.strokeStyle = "solid";
		ea.style.fillStyle = "solid";
		ea.style.backgroundColor = "#ced4da";
		ea.style.roughness = 0;
		// ea.style.roundness = { type: 3 };
		ea.style.strokeWidth = 2;

		let id = await ea.addIFrame(0, 0, 400, 200, 0, file);
		let el = ea.getElement(id);
		el.link = `[[${fileName}]]`;
		await ea.addElementsToView(true, true);

	} else if (InsertType == "Image") {
		inputText = await quickaddApi.wideInputPrompt("输入笔记内容", "输入笔记内容，ESC退出输入，Ctrl + Enter结束并插入文档");

		// 插入图片建议不用Yaml
		let file = await app.fileManager.createNewFile(rootFolder, filePath, "md", inputText ? `${Yaml}\n${inputText}` : "");

		let id = await ea.addImage(0, 0, file);
		let el = ea.getElement(id);
		el.link = `[[${fileName}]]`;
		await ea.addElementsToView(true, true);

	} else if (fileStyles == 'Note') {

	};

}

function fileListByPath(filePath) {
	// const path = require("path");
	let files = app.vault.getFiles().filter(f => path.dirname(f.path) == filePath);
	let fileNames = files.map((f) => f.path);

	return fileNames;
}
```
