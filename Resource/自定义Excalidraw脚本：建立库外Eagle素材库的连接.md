---
uid: 20231004031654
title: 自定义 Excalidraw 脚本：建立库外 Eagle 素材库的连接
tags: []
description: 该脚本的主要功能是通过拖拽将 Eagle 中素材拖入 Excalidraw 画板中时，会自动复制素材到 Obsidian 笔记库中，同时读取 Eagle 素材文件下的 metadata.json 文件中的信息，将存储的 url 连接随着素材嵌入到 Excalidraw 画板中。
author: 熊猫别熬夜
type: other
draft: false
editable: false
modified: 20231004031913
---

# 自定义 Excalidraw 脚本：建立库外 Eagle 素材库的连接

![[Pasted image 20231004031740.png]]

这个脚本在 [硬核工作流：实现以图搜图]( https://pkmer.cn/show/20230925114907 ) 中提到过，这里就单独提出来，脚本的初始目的是为了建立对 PDF 的图片做笔记时，同时保留图片的回链来定位到具体的 PDF 所在的页面，其中涉及到了一些 PDF 提取图片的操作。

该脚本的主要功能是通过拖拽将 Eagle 中素材拖入 Excalidraw 画板中时，会自动复制素材到 Obsidian 笔记库中，同时读取 Eagle 素材文件下的 metadata.json 文件中的信息，将存储的 url 连接随着素材嵌入到 Excalidraw 画板中，这样就可以让存放的图片、HTML、PDF、PPT 等素材嵌入到 Excalidraw 画板同时可以打开对应的外部链接。

![[EagleToExcalidraw.gif]]

> [!tip]+ Eagle 的外部回链
> Eagle 也存在外部链接，默认为 `eagle://item/{文件名}`，文件会在 Eagle 中打开。

## EagleToExcalidraw 脚本

> [!caution]+ 需要修改的路径 (`${file_name}` 和 `${folder}` 不修改)
> ![[Pasted image 20231004031813.png]]
> - 第一个为 Obsidian 中存放素材的路径 (已创建的路径)
> - 第二个为 Eagle 的素材 images 的路径

该脚本可能并不适应每个人的习惯，这里只供参考借鉴，请大家根据自己需求来适当修改代码。

```javascript
const path = require('path');
const fs = require("fs");

let api = ea.getExcalidrawAPI();
let el = ea.targetView.containerEl.querySelectorAll(".excalidraw-wrapper")[0];

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
                let folder = directoryPath.match(/([^\\]+)\.info/i);
                // let file_name = directoryPath.match(/([^\\]+)\.(png|jpg|jpeg|html|mhtml|pdf|ppt|pptx)/i);
                let file_name = directoryPath.match(/([^\\]+)(\.[^\\]*)?$/i);
                if (folder && file_name) {
                    eagle_id = folder[0].replace('.info', '');
                    folder = folder[0];                    
                    file_name = file_name[0];
                    console.log(`folder: ${folder};file_name:${file_name};eagle_id:${eagle_id}`);

                    // 将图片文件移动到指定文件夹
                    let sourcePath = directoryPath;

                    // 📌定义附件保存的地址
                    let destinationPath = `D:\\PandaNotes\\Y-图形文件存储\\EagleImages\\${file_name}`;
                    // 📌读取metadata.json文件
                    const metadataPath = `E:\\PandaMemos.library\\images\\${folder}\\metadata.json`; // 替换为实际的文件路径

                    fs.copyFileSync(sourcePath, destinationPath);
                    // 让默认插入文本为文件名
                    let insert_txt = file_name;

                    // 清空插入的环境变量
                    event.stopPropagation();
                    ea.clear();

                    await new Promise((resolve) => setTimeout(resolve, 300)); // 暂停一会儿                    
                    
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
                        let id = await ea.addText(0, 0, `[[${insert_txt}]]`, { width: 400, box: true, wrapAt: 50, textAlign: "center", textVerticalAlign: "middle", box: "box" });
                        let el = ea.getElement(id);
                        el.link = `eagle://item/${eagle_id}`;
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
                        let id = await ea.addImage(0, 0, insert_txt);
                        let el = ea.getElement(id);

                        if (metadata.url) {
                            // 将el.link的值设置为metadata.json中的url
                            el.link = metadata.url;
                        } else {
                            // 将el.link的值设置为Eagle的回链
                            el.link = `eagle://item/${eagle_id}`;
                        }
                        
                        await ea.addElementsToView(true, false, false);
                        if (ea.targetView.draginfoDiv) {
                            document.body.removeChild(ea.targetView.draginfoDiv);
                            delete ea.targetView.draginfoDiv;
                        }
                    } else if (file_name.toLowerCase().endsWith(".url")) {
                        // 对url文件采用文本加入json的连接形式
                        link = metadata.url;
                        let id = await ea.addText(0, 0, `🌐[${insert_txt.replace(".url", "")}](${link})`, { width: 400, box: true, wrapAt: 50, textAlign: "center", textVerticalAlign: "middle", box: "box" });

                        let el = ea.getElement(id);
                        // 将el.link的值设置为Eagle的回链
                        el.link = `eagle://item/${eagle_id}`;
                        await ea.addElementsToView(true, false, false);
                        if (ea.targetView.draginfoDiv) {
                            document.body.removeChild(ea.targetView.draginfoDiv);
                            delete ea.targetView.draginfoDiv;
                        }
                    } else {
                        // 其余统一插入eagle连接
                        let id = await ea.addText(0, 0, `[[${insert_txt}]]`, { width: 400, box: true, wrapAt: 50, textAlign: "center", textVerticalAlign: "middle", box: "box" });
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