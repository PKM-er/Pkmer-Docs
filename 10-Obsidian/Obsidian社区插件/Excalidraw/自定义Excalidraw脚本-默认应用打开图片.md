---
uid: 20231128000314
title: 自定义 Excalidraw 脚本 - 默认应用打开图片
tags: [Excalidraw, Excalidraw脚本, 图片处理]
description: 默认软件打开画板中选中的图片，适用于当您想用默认软件编辑笔记画板中的图片时，采用的一个快捷方式。
author: 熊猫别熬夜
type: other
draft: false
editable: false
modified: 20231206204934
---

# 自定义 Excalidraw 脚本 - 默认应用打开图片

> 该片段在 [[自定义Excalidraw脚本-建立库外Eagle素材库的连接]] 中有过介绍，这里单独分离出一篇文章来介绍了。

## OpenSelectImage 脚本

> [!tip] OpenSelectImage
> 默认软件打开画板中选中的图片，适用于当您想用默认软件编辑笔记画板中的图片时，采用的一个快捷方式。
> ![Pasted image 20231014171319](https://cdn.pkmer.cn/images/Pasted%20image%2020231014171319.png!pkmer)

## 代码示意

```javascript
await ea.addElementsToView(); //to ensure all images are saved into the file
const { exec } = require('child_process');

const img = ea.getViewSelectedElements().filter(el => el.type === "image");
if (img.length === 0) {
  new Notice("No image is selected");
  return;
}

for (i of img) {
  const currentPath = ea.plugin.filesMaster.get(i.fileId).path;
  const file = app.vault.getAbstractFileByPath(currentPath);
  if (!file) {
    new Notice("Can't find file: " + currentPath);
    continue;
  }
  const pathNoExtension = file.path.substring(0, file.path.length - file.extension.length - 1);
  let fileName = file.path;
  let fileBasePath = file.vault.adapter.basePath;
  let filePath = `${fileBasePath}/${fileName}`;

  // 根据操作系统使用默认应用打开文件
  let openCommand;
  if (navigator.platform.includes("Win")) {
    openCommand = `start "" "${filePath}"`;
  } else if (navigator.platform.includes("Mac")) {
    openCommand = `open "" "${filePath}"`;
  } else {
    new Notice("不支持该平台");
    return;
  }

  // 使用默认应用打开文件
  exec(openCommand, (error, stdout, stderr) => {
    if (error) {
      console.error(`打开文件时出错: ${error.message}`);
      return;
    }
    if (stderr) {
      console.error(`打开文件时出错: ${stderr}`);
      return;
    }
    console.log(`文件已成功打开`);
  });
}
```