---
uid: 20231014173618
title: 自定义 Excalidraw 脚本 - 建立库外 Eagle 素材库的连接
tags: [Eagle, Excalidraw, 工作流, 工作流搭建]
description: 自定义 Excalidraw 脚本 - 建立库外 Eagle 素材库的连接
author: 熊猫别熬夜
type: other
draft: false
editable: false
modified: 20231107231913
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

> [!caution]+ 需要修改的路径
> ![Pasted image 20231029203630](https://cdn.pkmer.cn/images/Pasted%20image%2020231029203630.png!pkmer)
> - 第一次安装改脚本时，单击运行脚本一下，然后在 Excalidraw 插件设置中会出现这个选项
> - 修改为 Obsidian 中存放素材的路径 (已创建的路径)
> 	- 注意使用 `/` 来转义路径，采用相对路径。

该脚本可能并不适应每个人的习惯，这里只供参考借鉴，请大家根据自己需求来适当修改代码。

```javascript
let settings = ea.getScriptSettings();
//set default values on first run
if (!settings["Eagle Images Path"]) {
    settings = {
        "Eagle Images Path": {
            value: "Y-图形文件存储/EagleImages",
            description: "Obsidian库内存放Eagle的图片的相对路径，比如：Y-图形文件存储/EagleImages"
        }
    };
    ea.setScriptSettings(settings);
}

const path = require('path');
const fs = require("fs");
let api = ea.getExcalidrawAPI();
let el = ea.targetView.containerEl.querySelectorAll(".excalidraw-wrapper")[0];

// 获取库的基本路径
const basePath = (app.vault.adapter).getBasePath();
// 设置相对路径
const relativePath = settings["Eagle Images Path"].value;

// 对于选中的项目，则通过文件名来创建Eagle的回链并打开

let selectedEls = ea.getViewSelectedElements()

for (selectedEl of selectedEls) {
    let embeddedFile = ea.targetView.excalidrawData.getFile(selectedEl.fileId);
    if (!embeddedFile) {
        new Notice("Can't find file: " + selectedEl.fileId);
        continue;
    }
    let abstractPath = path.join(embeddedFile.file.vault.adapter.basePath, embeddedFile.file.path);
    const eagle_id = path.basename(abstractPath, path.extname(abstractPath));
    let EagleLink = `eagle://item/${eagle_id}`;
    // 打开链接
    window.open(EagleLink);
}

new Notice("EagleToExcalidraw脚本已启动！");
// 对于从Eagle拖拽过来的文件，以Eagle文件夹名命名，根据后缀名来创建不同的拖拽形式
el.ondrop = async function (event) {
    console.log("ondrop");
    event.preventDefault();
    if (event.dataTransfer.types.includes("Files")) {
        console.log("文件类型判断");
        for (let file of event.dataTransfer.files) {
            let directoryPath = file.path;
            console.log(directoryPath);
            if (directoryPath) {
                console.log("获取路径");
                // 清空插入的环境变量
                event.stopPropagation();
                ea.clear();
                ea.style.strokeStyle = "solid";
                ea.style.backgroundColor = "#ffec99";
                ea.style.fillStyle = 'solid';
                ea.style.roughness = 0;
                // ea.style.roundness = { type: 3 };
                ea.style.strokeWidth = 1;
                ea.style.fontFamily = 4;
                ea.style.fontSize = 20;

                // 判断是否为Eagle文件，不是这不执行
                let folderPath = path.dirname(directoryPath).split("\\").pop();
                console.log(folderPath)
                if (!folderPath.match(".info")) {
                    console.log("不为Eagle文件夹文件");
                    continue;
                }
                console.log("为Eagle文件夹文件");                

                let file_name = path.basename(directoryPath);
                if (folderPath && file_name) {
                    eagle_id = folderPath.replace('.info', '');
                    console.log(eagle_id)
                    console.log(`folder: ${folderPath};file_name:${file_name};eagle_id:${eagle_id}`);                   

                    // 获取原文件名，不带后缀
                    let insertFilename = file_name.split(".").slice(0, -1).join(".");

                    // 获取文件名后缀
                    const fileExtension = file_name.split('.').pop();

                    // 将图片文件移动到指定文件夹
                    let sourcePath = directoryPath;

                    // 📌定义附件保存的地址
                    var destinationName = `${eagle_id}.${fileExtension}`;
                    let destinationPath = `${basePath}/${relativePath}/${destinationName}`;
                    console.log(destinationPath)
                    // 读取metadata.json文件
                    let Eaglefolder = path.dirname(directoryPath);
                    const metadataPath = `${Eaglefolder}\\metadata.json`; // 替换为实际的文件路径
                    // 缩略图的路径
                    let ThumbnailImage = `${Eaglefolder}\\${insertFilename}_thumbnail.png`;

                    fs.copyFileSync(sourcePath, destinationPath);
                    await new Promise((resolve) => setTimeout(resolve, 300)); // 暂停一会儿

                    // 让默认插入文本为文件名
                    let insert_txt = file_name;

                    // new Notice("插入Eagle素材：" + file_name);

                    const metadataContent = fs.readFileSync(metadataPath, 'utf8');
                    // 解析为JSON对象
                    const metadata = JSON.parse(metadataContent);

                    // 设置不同文件类型的导入方式ea.addText为文本、ea.addImage为图片
                    if (
                        //   对网页统一用内部链接的形式
                        file_name.toLowerCase().endsWith(".html") ||
                        file_name.toLowerCase().endsWith(".mhtml") ||
                        file_name.toLowerCase().endsWith(".htm")
                    ) {
                        let id = await ea.addText(0, 0, `[[${destinationName}|${insert_txt}]]`, { width: 300, box: true, wrapAt: 100, textAlign: "center", textVerticalAlign: "middle", box: "box" });

                        await ea.addElementsToView(true, false, false);

                        if (ea.targetView.draginfoDiv) {
                            document.body.removeChild(ea.targetView.draginfoDiv);
                            delete ea.targetView.draginfoDiv;
                        }

                    } else if (
                        //   对图片统一用导入图片后附加链接的形式
                        file_name.toLowerCase().endsWith(".png") ||
                        file_name.toLowerCase().endsWith(".jpg") ||
                        file_name.toLowerCase().endsWith(".jpeg") ||
                        file_name.toLowerCase().endsWith(".icon") ||
                        file_name.toLowerCase().endsWith(".svg")
                    ) {
                        let id = await ea.addImage(0, 0, destinationName);
                        let el = ea.getElement(id);

                        if (metadata.url) {
                            // 将el.link的值设置为metadata.json中的url
                            el.link = metadata.url;
                        } else {
                            // 将el.link的值设置为Eagle的回链
                            el.link = ``;
                        }

                        await ea.addElementsToView(true, false, false);

                        if (ea.targetView.draginfoDiv) {
                            document.body.removeChild(ea.targetView.draginfoDiv);
                            delete ea.targetView.draginfoDiv;
                        }

                    } else if (file_name.toLowerCase().endsWith(".url")) {
                        // 对url文件采用文本加入json的连接形式
                        link = metadata.url;
                        let id = await ea.addText(0, 0, `🌐[${insert_txt.replace(".url", "")}](${link})`, { width: 400, box: true, wrapAt: 100, textAlign: "center", textVerticalAlign: "middle", box: "box" });

                        let el = ea.getElement(id);
                        // 将el.link的值设置为Eagle的回链
                        el.link = `eagle://item/${eagle_id}`;
                        await ea.addElementsToView(true, false, false);
                        if (ea.targetView.draginfoDiv) {
                            document.body.removeChild(ea.targetView.draginfoDiv);
                            delete ea.targetView.draginfoDiv;
                        }
                    } else if (
                        //   针对Office三件套
                        file_name.toLowerCase().endsWith(".pptx") ||
                        file_name.toLowerCase().endsWith(".ppt") ||
                        file_name.toLowerCase().endsWith(".xlsx") ||
                        file_name.toLowerCase().endsWith(".xls") ||
                        file_name.toLowerCase().endsWith(".docx") ||
                        file_name.toLowerCase().endsWith(".doc") ||
                        file_name.toLowerCase().endsWith(".xmind") ||
                        file_name.toLowerCase().endsWith(".pdf")
                    ) {
                        let InsertPDFImage = confirm("是否插入附件缩略图？");

                        if (InsertPDFImage) {
                            let destinationPath = `${basePath}/${relativePath}/${eagle_id}.png`;
                            fs.copyFileSync(ThumbnailImage, destinationPath)
                            await new Promise((resolve) => setTimeout(resolve, 200)); // 暂停一会儿
                            var id = await ea.addImage(0, 0, `${eagle_id}.png`);

                        } else {
                            var id = await ea.addText(0, 0, `[[${insert_txt}]]`, { width: 400, box: true, wrapAt: 100, textAlign: "center", textVerticalAlign: "middle", box: "box" });
                        }


                        let el = ea.getElement(id);
                        el.link = `[[${destinationName}]]`;

                        await ea.addElementsToView(true, false, false);
                        if (ea.targetView.draginfoDiv) {
                            document.body.removeChild(ea.targetView.draginfoDiv);
                            delete ea.targetView.draginfoDiv;
                        }

                    } else if (
                        //   对gif、mp4等动态进行设置(可根据需要的格式自行添加)
                        file_name.toLowerCase().endsWith(".gif") ||
                        file_name.toLowerCase().endsWith(".mp4")
                    ) {
                        // 清空插入的环境变量
                        event.stopPropagation();
                        ea.clear();
                        ea.style.strokeStyle = "solid";
                        ea.style.strokeColor = "transparent";
                        ea.style.backgroundColor = "transparent";
                        ea.style.fillStyle = 'solid';
                        ea.style.roughness = 0;
                        ea.style.strokeWidth = 1;
                        ea.style.fontFamily = 4;

                        let eagleGifFile = app.vault.getAbstractFileByPath(`${relativePath}/${destinationName}`);
                        let id = await await ea.addIFrame(0, 0, 500, 280, 0, eagleGifFile);
                        let el = ea.getElement(id);

                        // ea.style.fillStyle = "solid";
                        el.link = `[[${destinationName}]]`;

                        await ea.addElementsToView(true, false, false);
                        if (ea.targetView.draginfoDiv) {
                            document.body.removeChild(ea.targetView.draginfoDiv);
                            delete ea.targetView.draginfoDiv;
                        }
                    } else if (
                        //   对mp3等音频进行设置(可根据需要的格式自行添加)
                        file_name.toLowerCase().endsWith(".mp3") ||
                        file_name.toLowerCase().endsWith(".WAV")
                    ) {
                        // 清空插入的环境变量
                        event.stopPropagation();
                        ea.clear();
                        ea.style.strokeStyle = "solid";
                        ea.style.strokeColor = "transparent";
                        ea.style.backgroundColor = "transparent";
                        ea.style.fillStyle = 'solid';
                        ea.style.roughness = 0;
                        ea.style.strokeWidth = 1;
                        ea.style.fontFamily = 4;

                        let eagleGifFile = app.vault.getAbstractFileByPath(`${relativePath}/${destinationName}`);
                        let id = await await ea.addIFrame(0, 0, 400, 80, 0, eagleGifFile);
                        let el = ea.getElement(id);

                        // ea.style.fillStyle = "solid";
                        el.link = `[[${destinationName}]]`;

                        await ea.addElementsToView(true, false, false);
                        if (ea.targetView.draginfoDiv) {
                            document.body.removeChild(ea.targetView.draginfoDiv);
                            delete ea.targetView.draginfoDiv;
                        }
                    } else {
                        // 其余统一插入eagle连接
                        let id = await ea.addText(0, 0, `[[${insert_txt}]]`, { width: 400, box: true, wrapAt: 100, textAlign: "center", textVerticalAlign: "middle", box: "box" });
                        let el = ea.getElement(id);
                        // 将el.link的值设置为Eagle的回链
                        el.link = `eagle://item/${eagle_id}`;
                        await ea.addElementsToView(true, false, false);
                        if (ea.targetView.draginfoDiv) {
                            document.body.removeChild(ea.targetView.draginfoDiv);
                            delete ea.targetView.draginfoDiv;
                        }
                    }
                }
            }
        }
    }
};


```
