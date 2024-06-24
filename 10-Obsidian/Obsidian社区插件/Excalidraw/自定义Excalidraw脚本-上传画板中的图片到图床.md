---
uid: 20240221010558
title: 自定义 Excalidraw 脚本 - 上传画板中的图片到图床
tags: [图床, Excalidraw脚本]
description: Excalidraw 画板中引用的图片直接上传到 PicGo 的 Server 转为在线图片
author: 熊猫别熬夜
type: other
draft: false
editable: false
modified: 20240221010700
---

# 自定义 Excalidraw 脚本 - 上传画板中的图片到图床

![2024-02-16_自定义Excalidraw脚本-上传画板中的图片到图床_IMG-1](https://cdn.pkmer.cn/images/202402210107269.gif!pkmer)

## 背景

该需求来源于 [Excalidraw文件里面的图片怎样才能默认上传到图床？ - 疑问解答 - Obsidian 中文论坛](https://forum-zh.obsidian.md/t/topic/30153)：

![2024-02-16_自定义Excalidraw脚本-上传画板中的图片到图床_IMG-2](https://cdn.pkmer.cn/images/202402210107270.png!pkmer)

如果是 Markdown 笔记的话，直接使用 `Image auto upload Plugin`(作者：renmu) 插件就可以了，但是在 Excalidraw 画板中，图片是无法上传的，目前 (2024-02-20) 在该插件没有适配的。

## 方法

既然是上传图床，就应该会用到 PicGo 或者 PicList 软件，那就将 Excalidraw 画板中引用的图片直接上传到 PicGo 的 Server 后删除并将 Excalidraw 画板中的本地图片的应用改为图床连接。

## 脚本

![2024-02-16_自定义Excalidraw脚本-上传画板中的图片到图床_IMG-3](https://cdn.pkmer.cn/images/202402210107271.png!pkmer)

```js
await ea.addElementsToView();
const fs = require('fs');

let settings = ea.getScriptSettings();
//set default values on first run
if (!settings["UploadImageToPicGo"]) {
    settings = {
        "上传图片后移除原文件": {
            value: true,
        },
        "PicGo Server接口": {
            value: "http://127.0.0.1:36677/upload",
        }
    };
    ea.setScriptSettings(settings);
}

const url = settings["PicGo Server接口"].value;

// 获取笔记的基本路径
const file = app.workspace.getActiveFile();
// 获取绝对路径
const fileFullPath = app.vault.adapter.getFullPath(file.path);
let content = fs.readFileSync(fileFullPath, 'utf8');

let imgs = ea.getViewSelectedElements().filter(el => el.type === "image");
const allImgs = ea.getViewElements().filter(el => el.type === "image");

if (Object.keys(imgs).length === 0) {
    const isAll = confirm("是否上传全部图片到图床？");
    if (isAll) {
        imgs = allImgs;
    }
}

for (i of imgs) {
    // 是否为超链接
    if (ea.plugin.filesMaster.get(i.fileId).isHyperLink) {
        new Notice("该图片已上传");
        continue;
    }

    const currentPath = ea.plugin.filesMaster.get(i.fileId).path;
    const imgFile = app.vault.getAbstractFileByPath(currentPath);

    if (!imgFile) {
        new Notice("Can't find file: " + currentPath);
        continue;
    }

    // 获取绝对路径
    const imgFullPath = app.vault.adapter.getFullPath(imgFile.path);
    await uploadFiles([imgFullPath], url, content).then(data => {
        console.log(data);
        if (data.success) {
            const imgWiki = `${i.fileId}: [[${imgFile.name}]]`;
            const imgLink = `${i.fileId}: ${data.result}`;
            content = content.replace(imgWiki, imgLink);
            const fs = require('fs');

            if (settings["上传图片后移除原文件"].value) {
                try {
                    fs.unlinkSync(imgFullPath);
                    new Notice(`✅已上传${imgFile.name}，并删除本地文件`);
                } catch (err) {
                    new Notice(`✅已上传${imgFile.name}，💔删除本地文件失败`);
                }
            }

        } else {
            new Notice(`❌上传${imgFile.name}图片失败`);
        }
    }).catch(error => {
        console.error(error);
        new Notice(`❌上传${imgFile.name}图片失败`);
    });
}

// 修改Excalidraw对应的图片键值
let markdownFile = app.vault.getAbstractFileByPath(file.path);
if (markdownFile) {
    app.vault.modify(markdownFile, content);
}

async function uploadFiles(imagePathList, url, content) {
    const length = imagePathList.length;
    const response = await requestUrl({
        url: url,
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ list: imagePathList }),
    });
    data = await response.json;
    return data;
};

```

## References

- [[自定义Excalidraw脚本-默认应用打开图片]]
- [PicGo is Here | PicGo](https://picgo.github.io/PicGo-Doc/zh/guide/)
