---
uid: 20240819010803
title: 自定义 Excalidraw 脚本 - 保存局部视图至 Eagle 并实现二次编辑功能
tags: [Excalidraw脚本, Eagle]
description: 可选中 Excalidraw 中局部元素发送到 Eagle()，导入 Eagle 里面的格式是 SVG，导入时可设置 SVG 名称，标签，Obsidian 文档链接，Eagle 中的 SVG 可在官方 Excalidraw 中还原。
author: 熊猫别熬夜
type: other
draft: false
editable: false
modified: 20240819011249
---

# 自定义 Excalidraw 脚本 - 保存局部视图至 Eagle 并实现二次编辑功能

可选中 Excalidraw 中局部元素发送到 Eagle()，导入 Eagle 里面的格式是 SVG，导入时可设置 SVG 名称，标签，Obsidian 文档链接，Eagle 中的 SVG 可在官方 Excalidraw 中还原。

![自定义Excalidraw脚本-保存局部视图至Eagle并实现二次编辑功能](https://cdn.pkmer.cn/images/202408190108348.png!pkmer)

> 注：该脚本已集合到 EagleToExcalidraw 脚本中，选中多个 Excalidraw 画板中的元素再运行既可触发。

## 脚本安装

> 详细步骤参考：[熊猫别熬夜 Excalidraw 脚本汇总介绍](https://pkmer.cn/show/20240323225915 )

安装链接及代码块：

````md
```excalidraw-script-install
https://raw.githubusercontent.com/PandaNocturne/ExcalidrawScripts/master/PandaScripts/ShareToEagle.md
```
````

## 功能演示

![PixPin_2024-08-18_12-37-11.gif](https://cdn.pkmer.cn/images/202408190108100.gif!pkmer)

在 Excalidraw 画布中框选中你想要保存的区域后，运行该脚本，就会弹出对话框，可以设置 SVG 名称，注释，标签，Ob 文档链接 (需要 Advanced URI 插件)，确认后既可发送至 Eagle 中。

![自定义Excalidraw脚本-保存局部视图至Eagle并实现二次编辑功能](https://cdn.pkmer.cn/images/202408190108348.png!pkmer)

### Tip：Excalidraw 的 SVG 格式可在官方 Excalidraw 中二次编辑

保存在 Eagle 中的 Excalidraw 的局部视图格式为 SVG 格式，可以拖到官方 Excalidraw 还原为原 Excalidraw 数据来二次编辑。

![自定义Excalidraw脚本-保存局部视图至Eagle并实现二次编辑功能](https://cdn.pkmer.cn/images/202408190108220.gif!pkmer)

## 拓展文档

- [[自定义Excalidraw脚本-建立库外Eagle素材库的连接]]
- [[自定义Excalidraw脚本-将选中元素为PNG或者SVG格式文件到本地]]
- [[Quicker动作之发送Zotero图片标注至Eagle素材库]]

## 源代码

```js
/*
 * @Author: 熊猫别熬夜 
 * @Date: 2024-08-19 00:32:03 
 * @Last Modified by:   熊猫别熬夜 
 * @Last Modified time: 2024-08-19 00:32:03 
 */
// 获取选中元素否则为全部元素
let elements = ea.getViewSelectedElements();
const allEls = ea.getViewElements();

if (elements.length === 0) {
  elements = allEls;
  ea.selectElementsInView(elements);
}

// 如果选中元素中包含frame，则自动选择内部元素
var frameEls = [];
for (let el of elements) {
  if (el.type === "frame") {
    for (let i of allEls) {
      if (i.frameId === el.id) {
        frameEls.push(i);
      }
    }
  }
}
ea.selectElementsInView([...elements, ...frameEls]);

// 获取笔记的基本路径
const basename = app.workspace.getActiveFile().basename;
let date = window.moment().format("YYYYMMDDHHmmss");

let base64 = "";
await ea.targetView.svg(ea.targetView.getScene(true), undefined, true).then(svg => {
  base64 = `data:image/svg+xml;base64,${btoa(
    unescape(encodeURIComponent(svg.outerHTML)),
  )}`;
});

// =========== 配置 =========== //
const data = {
  "url": base64,
  "name": `EX-${date}`,
  "website": "",
  "tags": ["Excalidraw→Eagle"],
  "annotation": "",
  "folderId": "" // 图片将会添加到指定文件夹的Eagle的FolderID
};
let returnLinkEnabled = true;
// 配置按钮
const customControls = (container) => {
  new ea.obsidian.Setting(container)
    .setName(`SVG名称`)
    .addText(text => {
      text
        .setValue(data.name)
        .onChange(value => {
          data.name = value;
        });
    });
  new ea.obsidian.Setting(container)
    .setName(`Eagle标签`)
    .setDesc(`用英文逗号(,)分隔标签`) // 添加描述
    .addText(text => {
      text
        .setValue(data.tags.join(',')) // 数组转逗号分隔的字符串
        .onChange(value => {
          data.tags = value.split(','); // 逗号分隔的字符串转数组
        });
    });
  new ea.obsidian.Setting(container)
    .setName(`返回链接`)
    .setDesc(`启用或禁用Ob链接，需要Advanced URI插件`)
    .addToggle(toggle => {
      toggle
        .setValue(returnLinkEnabled) // 默认值为true
        .onChange(value => {
          returnLinkEnabled = value; // 更新data对象中的属性

        });
    });

};

if (returnLinkEnabled) {
  const vaultName = app.vault.getName();
  const activeFile = app.workspace.getActiveFile();
  const ctime = await app.vault.getAbstractFileByPath(activeFile.path).stat["ctime"];
  const uidFormat = "YYYYMMDDhhmmssSSS";
  let adURI = "";
  await app.fileManager.processFrontMatter(activeFile, fm => {
    adURI = fm.uid ? fm.uid : moment(ctime).format(uidFormat);
    fm.uid = moment(ctime).format(uidFormat);
  });
  await ea.addElementsToView();
  data.website = `obsidian://advanced-uri?vault=${vaultName}&uid=${adURI}`;
}

let isSend = false;
data.annotation = await utils.inputPrompt(
  "导入Eagle的注释",
  "发送至Eagle的SVG的注释",
  "",
  [
    {
      caption: "Confirm",
      action: () => { isSend = true; return; }
    },
  ],
  5,
  false,
  customControls
);
if (!isSend) return;


const requestOptions = {
  method: 'POST',
  body: JSON.stringify(data),
  redirect: 'follow'
};

let response;
fetch("http://localhost:41595/api/item/addFromURL", requestOptions)
  .then(response => response.json())
  .then(result => {
    console.log(result);
    new Notice("📤已成功发送到Eagle！"); // 成功后显示通知
  })
  .catch(error => console.log('error', error));

```