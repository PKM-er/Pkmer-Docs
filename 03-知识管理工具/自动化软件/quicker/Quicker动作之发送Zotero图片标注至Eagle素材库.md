---
uid: 20240313014614
title: Quicker 动作之发送 Zotero 图片标注至 Eagle 素材库
tags: [zotero, Eagle, 文献, 学术研究]
description: 利用Quicker在阅读文献时将里面的经典图片和重要信息整理起来，建立一个图片素材库
author: 熊猫别熬夜,ImmortalSty
type: other
draft: false
editable: false
modified: 20240317212958
---

# Quicker 动作之发送 Zotero 图片标注至 Eagle 素材库

## 效果

![2024-03-06_Quicker-发送Zotero图片标注至Eagle素材库_IMG-1](https://cdn.pkmer.cn/images/202403130151304.gif!pkmer)

## 背景

为了在阅读文献时将里面的经典图片和重要信息整理起来，建立一个图片素材库而制作的该动作。有时候需要参考相关文献的介绍和描述，就发现单纯的 md 笔记管理难以做到快速预览或者说是全局查阅去快速定位。于是就想以图片为基准的卡片式查阅，图片不局限于科研绘图，还可以是经典的流程图，关键词的文本描述之类的，这样可以让我很快速定位到具体文献的章节，我个人是使用 Eagle 来管理平时的图片素材的，就想以 Eagle 为基础建立一个 Zotero 文献素材库。

> Eagle 是一款图片素材管理软件，可帮助用户有效组织、管理和使用图片素材。它提供直观易用的界面，让用户能快速浏览和搜索图片素材库。此外，Eagle 还提供强大的标签和分类功能，让用户按需整理和归类图片素材，创建自己的图片素材库。[^1]

为了更加便捷地导入和管理 Zotero 的文献图片，我尝试使用 Quicker 来实现 Zotero 和 Eagle 的联动。因为我对 Quicker 并不很熟悉，这个动作主要是通过 JS 实现的。在遇到一些问题无法解决时，我向群友 @槑头脑 寻求帮助，最终才顺利完成了该动作的制作，再次非常感谢 @槑头脑 😘。

以下是 Quicker 动作的分享、设计思路、参考资料，以及 Quicker 相关的帮助文档记录。

> [!tip] 如果想将已有的标注图片一次性导入可以参考如下：
> - [[通过Python脚本实现Eagle管理Zotero标注的图片]]
> - [[工作流-以图搜图]]

## Quikcer 动作分享

> [!note]+ Quicker 动作：[ZoteroToEagle](https://getquicker.net/Sharedaction?code=85b92307-2003-47bd-afea-08dc426a44c3)
> ![2024-03-06_Quicker-发送Zotero图片标注至Eagle素材库_IMG-2](https://cdn.pkmer.cn/images/202403130151305.png!pkmer)

### 使用方法

只需要最开始的时候配置 Zotero 的数据存储位置 `ZoteroPath` ，可能会要 node.js 的环境：

![2024-03-06_Quicker-发送Zotero图片标注至Eagle素材库_IMG-3](https://cdn.pkmer.cn/images/202403130151306.png!pkmer)

## 制作思路

由 Quicker 来执行 `Ctrl + C` 复制标注信息 `{ZoteroText}`，`Ctrl + Shift + C` 复制条目 `{ZoteroItem}`，以及 Zotero 的数据存储位置 `{ZoteroPath}`，通过 node.js 来发送参数到 `Zotero2Eagle.js` 中：

```js
node Zotero2Eagle.js "{ZoteroPath}" "{ZoteroText}" "{ZoteroItem}"
```

该 `Zotero2Eagle.js` 脚本文件已整合到 Quicker 中，第一次会加载 Quicker 动作会在 `{ZoteroPath}` 文件夹下 (eg: `D:/Zotero`) 生成该脚本文件：

![2024-03-06_Quicker-发送Zotero图片标注至Eagle素材库_IMG-4](https://cdn.pkmer.cn/images/202403130151307.png!pkmer)

### Zotero2Eagle.js 源码

```js
const process = require('process');
const zoteroPath = process.argv[2] ? process.argv[2] : "";

if (!zoteroPath) {
    console.log("No zoteroPath found");
    process.exit(0);
}

const ZoteroText = process.argv[3] ? process.argv[3] : "";
const ZoteroItem = process.argv[4] ? process.argv[4] : "";

const { log } = console;
log({ ZoteroText, ZoteroItem });

const { zotero_link, zotero_comment, zotero_image, zotero_year } = match_zotero_data(ZoteroText);
log({ zotero_link, zotero_comment, zotero_image, zotero_year });
if (!zotero_image) {
    console.log("No image found");
    process.exit(0);
}

// Zotero Library 路径
const zotero_image_path = `${zoteroPath}/cache/library/${zotero_image}`;

const { zotero_title, zotero_author } = match_zotero_item(ZoteroItem);

const data = {
    "path": zotero_image_path,
    "website": zotero_link,
    "tags": [zotero_author, zotero_year, zotero_title].filter(Boolean),
    "annotation": zotero_comment,
    "folderId": "KEHB8I2C9F23H",
};

const requestOptions = {
    method: 'POST',
    body: JSON.stringify(data),
    redirect: 'follow'
};

fetch("http://localhost:41595/api/item/addFromPath", requestOptions)
    .then(response => response.json())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));

function match_zotero_data(text) {
    const regex_link = /\[pdf\]\((.*)\)\)/;
    const regex_comment = /.*\)\).*\)\)([\s\S]*)/;
    const regex_image = /annotation=(\w*)/;
    const regex_year = /,\s(\d{4})/;

    const zotero_link = text.match(regex_link) ? text.match(regex_link)[1] : "";
    const zotero_comment = text.match(regex_comment) ? text.match(regex_comment)[1] : "";
    const zotero_image = text.match(regex_image) ? text.match(regex_image)[1] + ".png" : "";
    const zotero_year = text.match(regex_year) ? text.match(regex_year)[1] : "";


    return { zotero_link, zotero_comment, zotero_image, zotero_year };
}

function match_zotero_item(text) {
    const regex_title = /(《.*》)/;
    const regex_author = /\]\s(.*?),/;

    const zotero_title = text.match(regex_title) ? text.match(regex_title)[1] : "";
    const zotero_author = text.match(regex_author) ? text.match(regex_author)[1] : "";

    return { zotero_title, zotero_author };
}

```

### 修改参数

```js
const data = {
    "path": zotero_image_path, // 本地图片路径
    "website": zotero_link, // Zotero外部回链
    "tags": [zotero_author, zotero_year, zotero_title].filter(Boolean),  // 条目的作者，年份，标题信息，如果提取成功(布尔值)则添加
    "annotation": zotero_comment, // Zotero的图片注释信息
    "folderId": "KEHB8I2C9F23H", // 随便填的，如果想指定Eagle的文件夹,请将文件夹的ID替换一下就行
};
```

> 还有一些参数，比如 `name` 图片名的设置，不设置则保持默认的图片名称，还有 `token` 的设置，详细可参考：[EagleAPI-添加本地文件](https://www.yuque.com/augus-gsjgn/eagle-api/suaf2q)

## 参考资料

- [如何将命令行参数传递给 Node.js 应用程序？](https://ivwv.netlify.app/posts/technology/node/how-to-pass-cmd-line-args-to-node.html#%E5%B0%86%E5%8F%82%E6%95%B0%E4%BC%A0%E9%80%92%E7%BB%99-node-js-%E5%BA%94%E7%94%A8%E7%A8%8B%E5%BA%8F)
- [EagleAPI-添加本地文件(api、item、addFromPath)](https://www.yuque.com/augus-gsjgn/eagle-api/suaf2q)
- [[工作流-以图搜图]]

### Quicker 的一些帮助文档

- [Quicker用户手册 - Quicker](https://getquicker.net/KC/Help)
- [Tiny文本编辑器 - by 龙少 - 动作信息 - Quicker](https://getquicker.net/Sharedaction?code=679da246-89af-4a67-f467-08d8f95763cd)
	- 用于编辑 Quicker 动作的介绍文本编辑器，非常推荐

[^1]: [[通过Python脚本实现Eagle管理Zotero标注的图片]]