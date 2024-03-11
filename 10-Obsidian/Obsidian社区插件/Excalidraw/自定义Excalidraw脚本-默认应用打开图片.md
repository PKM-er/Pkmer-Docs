---
uid: 20231128000314
title: 自定义 Excalidraw 脚本 - 默认应用打开图片
tags: [Excalidraw, Excalidraw脚本, 图片处理]
description: 默认软件打开画板中选中的图片，适用于当您想用默认软件编辑笔记画板中的图片时，采用的一个快捷方式。
author: 熊猫别熬夜
type: other
draft: false
editable: false
modified: 20240311234354
---

# 自定义 Excalidraw 脚本 - 默认应用打开图片

> 该片段在 [[自定义Excalidraw脚本-建立库外Eagle素材库的连接]] 中有过介绍，这里单独分离出一篇文章来介绍了。

## OpenSelectImage 脚本

> [!tip] OpenSelectImage
> 默认软件打开画板中选中的图片，适用于当您想用默认软件编辑笔记画板中的图片时，采用的一个快捷方式。
> ![Pasted image 20231014171319](https://cdn.pkmer.cn/images/Pasted%20image%2020231014171319.png!pkmer)

## 设置不同软件打开

在 Excalidraw 插件设置里面可以设置参数，除了默认应用打开外，还可以自定义多个不同软件打开：

![2023-11-24_自定义Excalidraw脚本-默认应用打开图片_IMG-2](https://cdn.pkmer.cn/images/202403112344315.png!pkmer)

![2023-11-24_自定义Excalidraw脚本-默认应用打开图片_IMG-3](https://cdn.pkmer.cn/images/202403112344316.png!pkmer)

## 脚本安装

脚本安装可以根据源码来安装，也可以通过 Excalidraw 插件提供的脚本安装代码块来安装

- 代码块链接方法：
	- 优点：一键安装脚本和图标，操作方便，后续脚本更新可以检测
	- 缺点：国内需要可访问 GitHub 的网络
- 源码拷贝方式：
	- 优点：不需要特殊网络
	- 缺点：需要手动复制源码，这个过程很容易出问题，没有图标，脚本更新无法检测…

> PS：之后我的脚本更新或者 BUG 修复，可能不会更新到网站，而是直接更新到 GitHub，因为这样对我来说比较方便点而且快速点。

### 代码块链接方法

````
```excalidraw-script-install
https://raw.githubusercontent.com/PandaNocturne/ExcalidrawScripts/master/PandaScripts/OpenSelectImage.md
```
````

将上述代码块放到一个 **md 文件**，阅读模式下该代码块会显示为 <kbd>安装脚本</kbd>的按钮，点击安装之后，更新为<kbd>脚本已是最新 - 点击重新安装</kbd>，即当前脚本已经安装，在 Excalidraw 画布界面的侧边**Obsidian 工具面板**中可以查看。

## 源码拷贝方式

```javascript
/*
 * @Author: 熊猫别熬夜 
 * @Date: 2024-03-11 23:41:55 
 * @Last Modified by:   熊猫别熬夜 
 * @Last Modified time: 2024-03-11 23:41:55 
 */

await ea.addElementsToView();
const { exec } = require('child_process');

// 设置 quickerInsetNote 模板设置
let settings = ea.getScriptSettings();
//set default values on first run
if (!settings["OpenSelectImage"]) {
  settings = {
    "OpenSelectImage": {
      value: "D:\\FastStone Image Viewer\\FSViewer.exe",
      height: "250px",
      description: "其他默认图片编辑软件路径，以换行分隔"
    },
  };
  ea.setScriptSettings(settings);
}

const img = ea.getViewSelectedElements().filter(el => el.type === "image");
if (img.length === 0) {
  new Notice("No image is selected");
  return;
}

let choices = settings["OpenSelectImage"].value.split("\n");
choices.unshift("默认", "打开文件夹");
const choice = await utils.suggester(choices.map(i => i.split("\\").at(-1).replace("\.exe", "")), choices, "图片打开的方式");
if (!choice) return;

for (i of img) {
  const currentPath = ea.plugin.filesMaster.get(i.fileId).path;
  const file = app.vault.getAbstractFileByPath(currentPath);
  if (!file) {
    new Notice("Can't find file: " + currentPath);
    continue;
  }

  const filePath = file.path;
  if (choice === choices[0]) {
    // 用默认应用打开
    app.openWithDefaultApp(filePath);
  } else if (choice === choices[1]) {
    // 使用打开当前笔记文件夹
    app.showInFolder(filePath);
  } else {
    // 获取库的基本路径
    const fileBasePath = file.vault.adapter.basePath;
    // 获取文件的完整路径
    const fileFullPath = `${fileBasePath}/${filePath}`;
    exec(`"${choice}" "${fileFullPath}"`, (error, stdout, stderr) => {
      if (error) {
        new Notice(`Error opening file: ${error.message}`);
        return;
      }
      if (stderr) {
        new Notice(`Error opening file: ${stderr}`);
        return;
      }
      new Notice(`File opened with ${choice}`);
    });
  }
}
```

## ChangeLog

- 2024-03-11：设置选项框，除了默认应用打开外，还可以自定义多个不同软件打开
