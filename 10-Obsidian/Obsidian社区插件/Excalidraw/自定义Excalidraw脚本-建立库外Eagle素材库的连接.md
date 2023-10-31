---
uid: 20231014173618
title: 自定义 Excalidraw 脚本-建立库外 Eagle 素材库的连接
tags: [Eagle, Excalidraw, 工作流, 工作流搭建]
description: 自定义 Excalidraw 脚本 - 建立库外 Eagle 素材库的连接
author: 熊猫别熬夜
type: other
draft: false
editable: false
modified: 20231020215808
---

# 自定义 Excalidraw 脚本 - 建立库外 Eagle 素材库的连接

![](https://cdn.pkmer.cn/images/202310202158767.png!pkmer)

> [!caution]+ 温馨提醒
> 这个脚本是作用在 Obsidian 笔记库外的 Eagle 库，Eagle 在导入文件时会创建很多其他数据文件，并不适应于在 Obsidian 中建立，可以尝试用 Billfish 管理 Obsidian 内部的图片。
>
> 这脚本联动 Obsidian 笔记外的好处就是当你删除 Eagle 库中素材时 (素材库定期整理)，Obsidian 的内部笔记并不受影响，而且 Eagle 作为素材管理器非常优秀，可以快速预览和编辑图片，管理很多类型的文档，包括用浏览器拓展插件剪藏网页，批量收集网页画板或者图片，以图搜图，用标签和标星管理文件等等，具体功能可以看看相关介绍。

这个脚本在 [硬核工作流：实现以图搜图]( https://pkmer.cn/show/20230925114907 ) 中也提到过，这里就单独提出来，脚本的初始目的是为了建立对 PDF 的图片做笔记时，同时保留图片的回链来定位到具体的 PDF 所在的页面，其中涉及到了一些 PDF 提取图片的操作。

## 功能演示

该脚本的主要功能是通过拖拽将 Eagle 中素材拖入 Excalidraw 画板中时，会自动复制素材到 Obsidian 笔记库中，同时读取 Eagle 素材文件下的 metadata.json 文件中的信息，将存储的 url 连接随着素材嵌入到 Excalidraw 画板中，这样就可以让存放的图片、HTML、PDF、PPT 等素材嵌入到 Excalidraw 画板同时可以打开对应的外部链接。

<iframe src="https://player.bilibili.com/player.html?aid=234651352&bvid=BV14841167do&cid=1232824646&page=1&autoplay=false" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" width="80%" height="500"> </iframe>


### 针对 Office 和 PDF 的嵌入

> [!tip]+ 针对 Office 三件套和 PDF 的优化
> 如果嵌入的是 Office 三件套或者 PDF 的话，会出现弹窗选择插入缩略图还是链接：确定则插入缩略图附加文件回链，取消则只插入连接：
> ![](https://cdn.pkmer.cn/images/202310202201169.png!pkmer)

### 通过图片跳转 Eagle 原文件

> [!tip]+ Eagle 的外部回链
> Eagle 也存在外部链接，默认为 `eagle://item/{文件名}`，文件会在 Eagle 中打开。
> 故当你选择一个图片时，再次单击这个脚本，就会在 Eagle 中打开这个图片。
> ![](https://cdn.pkmer.cn/images/202310202201951.gif)

## OpenSelectImage 脚本

> [!tip]+ OpenSelectImage
> 默认软件打开画板中选中的图片，适用于当您想用默认软件编辑笔记画板中的图片时，采用的一个快捷方式。
> ![](https://cdn.pkmer.cn/images/202310202201572.png!pkmer)

![](https://cdn.pkmer.cn/images/202310202201415.gif)

```JavaScript
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
  let filePath = `${fileBasePath}/${fileName}`

  // 使用默认应用打开文件
  exec(`start "" "${filePath}"`, (error, stdout, stderr) => {
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

### 保存为 md 文件保存到指定文件夹

修改完路径后将下面代码保存为 md 文件，修改放入 Excalidraw 指定的 Scripts 的文件夹中，在 Excalidraw 的画板中的工具面板中就会出现一个齿轮按钮，需要时点击运行就可以了。

![](https://cdn.pkmer.cn/images/202310202201799.png!pkmer)

## EagleToExcalidraw 脚本

同样需要保存为 md 文件保存到指定文件夹

> [!caution]+ 需要修改的路径 (`${file_name}` 和 `${folder}` 不修改)
> ![](https://cdn.pkmer.cn/images/202310202203076.png!pkmer)
> - 第一个为 Obsidian 中存放素材的路径 (已创建的路径)
> - 第二个为 Eagle 的素材 images 的路径

该脚本可能并不适应每个人的习惯，这里只供参考借鉴，请大家根据自己需求来适当修改代码。

```javascript
function processText(text) {
    // 替换英文之间的多个空格为一个空格
    text = text.replace(/([a-zA-Z])([\u4e00-\u9fa5])/g, '$1 $2');
    // 删除中文之间的空格
    text = text.replace(/([\u4e00-\u9fa5])\s+([\u4e00-\u9fa5])/g, '$1$2');
    text = text.replace(/([\u4e00-\u9fa5])\s+/g, '$1');
    text = text.replace(/\s+([\u4e00-\u9fa5])/g, '$1');
    // 将全角字符转换为半角字符
    text = text.replace(/[\uFF01-\uFF5E]/g, function (match) { return String.fromCharCode(match.charCodeAt(0) - 65248); });

    // // 在中英文之间添加空格
    // text = text.replace(/([\u4e00-\u9fa5])([a-zA-Z])/g, '$1 $2');
    // text = text.replace(/([a-zA-Z])([\u4e00-\u9fa5])/g, '$1 $2');

    return text;
}

function match_zotero_txt(text) {
    const regex = /“(.*)” \(/;
    const matches = text.match(regex);
    return matches ? matches[1] : "";
}

function match_zotero_author(text) {
    const regex = /\(\[(.*\d+)]\(/;
    const matches = text.match(regex);
    return matches ? matches[1] : "";
}

function match_zotero_link(text) {
    const regex = /\[pdf\]\((.*)\)\)/;
    const matches = text.match(regex);
    return matches ? matches[1] : "";
}

function match_zotero_comment(text) {
    const regex = /\)\)([^ ].*)/;
    const matches = text.match(regex);
    return matches ? matches[1] : "";
}

function match_zotero_image(text) {
    const regex = /annotation=(\w*)/;
    const matches = text.match(regex);
    return matches ? matches[1] : "";
}

const path = require('path');
const fs = require("fs");

let api = ea.getExcalidrawAPI();
let el = ea.targetView.containerEl.querySelectorAll(".excalidraw-wrapper")[0];

el.ondrop = async function (event) {
    console.log("ondrop");
    event.preventDefault();
    let insert_txt = event.dataTransfer.getData("Text");

    // 清空原本投入的文本
    event.stopPropagation();
    ea.clear();
    // 格式化文本(去空格、全角转半角)  

    insert_txt = processText(insert_txt)

    if (insert_txt.includes("zotero://")) {
        console.log("Zotero");

        zotero_txt = match_zotero_txt(insert_txt);
        zotero_author = match_zotero_author(insert_txt);
        if (zotero_author) {
            zotero_author = `(${zotero_author})`;
        };
        zotero_comment = match_zotero_comment(insert_txt);
        if (zotero_comment) {
            zotero_comment = `\n\n📝：${zotero_comment}`;
        };
        zotero_link = match_zotero_link(insert_txt);

        if (zotero_txt) {
            console.log("ZoteroText");

            ea.style.strokeStyle = "solid";
            ea.style.backgroundColor = "#ffffff";
            ea.style.fillStyle = 'solid';
            ea.style.roughness = 0;
            // ea.style.roundness = { type: 3 };
            ea.style.strokeWidth = 2;
            ea.style.fontFamily = 4;
            ea.style.fontSize = 20;

            let id = await ea.addText(0, 0, `📖：${zotero_txt}${zotero_author}${zotero_comment}`, { width: 600, box: true, wrapAt: 80, textAlign: "left", textVerticalAlign: "middle", box: "box" });
            let el = ea.getElement(id);
            el.link = zotero_link;
            await ea.addElementsToView(true, false, false);
            if (ea.targetView.draginfoDiv) {
                document.body.removeChild(ea.targetView.draginfoDiv);
                delete ea.targetView.draginfoDiv;
            };
        } else {
            console.log("ZoteroImage");
            zotero_image = match_zotero_image(insert_txt);
            zotero_image_name = `${zotero_image}.png`;

            // 📌修改到Zotero的library文件夹
            zotero_image_path = `D:\\Zotero\\cache\\library\\${zotero_image}.png`;
            // 📌定义附件保存的地址，修改到你定义的笔记文件夹
            let Obsidian_image_Path = `D:\\PandaNotes\\Y-图形文件存储\\ZoteroImages\\${zotero_image}.png`

            // 复制zotero的图片到Obsidian的笔记库
            fs.copyFileSync(zotero_image_path, Obsidian_image_Path);

            await new Promise((resolve) => setTimeout(resolve, 200)); // 暂停0.2秒，等待复制文件的过程

            let id = await ea.addImage(0, 0, zotero_image_name);
            let el = ea.getElement(id);
            el.link = zotero_link;
            await ea.addElementsToView(true, false, false);
            if (ea.targetView.draginfoDiv) {
                document.body.removeChild(ea.targetView.draginfoDiv);
                delete ea.targetView.draginfoDiv;
            };
        };

    } else {
        let id = await ea.addText(0, 0, `${insert_txt} `, { width: 400, box: true, wrapAt: 50, textAlign: "left", textVerticalAlign: "middle", box: "box" });
        let el = ea.getElement(id);
        await ea.addElementsToView(true, false, false);
        if (ea.targetView.draginfoDiv) {
            document.body.removeChild(ea.targetView.draginfoDiv);
            delete ea.targetView.draginfoDiv;
        };

    };
};

```
