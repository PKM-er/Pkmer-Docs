---
uid: 20230609143349
title: Zotero 组件安装
tags: [zotero, 教程]
description: 
author: darkluna999
type: other
draft: false
editable: false
modified: 20230725145454
---

# Zotero 组件安装

Zotero 本身是由程序本体（Zotero APP）与浏览器插件（Zotero Connector）二者构成

## Zotero 程序本体

支持 Windows Mac Linux 全平台，是 Zotero 的真身本体

- 稳定发行版：[Zotero Stable](https://www.zotero.org/download/)
- Beta 测试版：[Zotero Beta builds](https://www.zotero.org/support/beta_builds)（注意，时下正值 6/7 交替，Beta 为 7 版，不建议新手直接使用）
- 亦可以使用命令行进行安装（不推荐）如 `winget` `brew` 及 `apt`（需要额外配置源），这里不加赘述

### 安装

![[source/Pasted image 20230709022000.png]]

![[source/Pasted image 20230709022011.png]]

![[source/Pasted image 20230709022020.png]]

#### Standard

常规使用推荐

![[source/Pasted image 20230709022029.png]]

~~因为我这里是覆盖安装，因此是 upgrade~~

#### Custom

可选择程序安装地址，同时安装多个版本时有奇效

比如时下正值 6/7 交替之际，有些插件不支持 7，就可以分装两个版本，共同使用一个数据库，既能体验到 7 的风驰电掣，又能使用仅支持 6 的一些插件，当然每次切换的时候都需要打开对应插件的开关，但临时能用，也还不错

![[source/Pasted image 20230709022043.png]]

这里应该还有一张询问创建快捷方式的图，默认即可

![[source/Pasted image 20230709023742.png]]

## Zotero Connector

作为 Zotero 一大核心功能，Connecter 插件可以安装在各个浏览器上以实现网页快照，元数据抓取，题录抓取等功能

[Zotero Connector 官方](https://www.zotero.org/download)

支持 Edge，Chrome，Firefox，Safari

### Firefox

这里以 FireFox 举例

![[source/Pasted image 20230711001723.png]]

![[source/Pasted image 20230711001757.png]]

![[source/Pasted image 20230711001822.png]]

![[source/Pasted image 20230711001905.png]]

建议选择 pin in tool bar 便于使用时点击，当然也可以设置对应的快捷键

这里 Edge 对应的是眼睛图标，显示到工具栏 Chrome 是图钉标识，固定

### Chrome

[Google Chrome | 官方](https://chrome.google.com/webstore/detail/zotero-connector/ekhagklcjbdpajgpjgmbionohlpdbjgc?hl=zh)

至于不擅长魔法，或希望使用某些其他 Chromium 内核的浏览器的话，也可以使用第三方安装方式

[Chrome 类替代源：极简插件](https://chrome.zzzmh.cn/info/ekhagklcjbdpajgpjgmbionohlpdbjgc)

#### 常规使用方法

1. 等待下载完成，找到下载好的压缩包 `xxx.zip`
2. 将其解压到文件夹
3. 进入文件夹，可见 crx 文件
4. 回到 Chrome 类浏览器打开地址 `chrome://extensions`
5. 打开右上角 `开发者模式`
6. 将上文中的 crx 文件拖动到浏览器当前页面中
7. 此时将弹出一个确认安装的提示框，点击 `添加扩展程序` 完成安装即可

#### 强制安装

如果你在安装过程中出现下图中的错误：

1. 程序包无效 CRX_HEADER_INVALID
2. 无法从该网站添加应用、扩展程序和用户脚本

请执行本操作流程：

1. 将上文中的 crx 文件的扩展名 `.crx` 改成 `.zip`
2. zip 包拖动到 chrome 扩展程序页面安装即可，需要手动打开插件开关

（以上方式同样适用于其余第三方源的 crx 插件安装）

### Edge

虽然上方 Chrome 的安装方式和安装包均适用于 Edge，但 Edge 官方商店会提供更好的更新、优化等体验，如无特殊情况，建议使用此方案

[Microsoft Edge | 官方](https://microsoftedge.microsoft.com/addons/detail/zotero-connector/nmhdhpibnnopknkmonacoephklnflpho)

### Safari

[官方](https://www.zotero.org/download)

需要注意的是，Safari 插件仅适配 Zotero 6 以上版本（应该没有人还在用 5 吧）

另外，Safari 对 Connector 插件的支持似乎有些小问题，条件允许的话还是建议使用 Chrome 或者 Edge😀

本页仅包括安装流程，具体使用方式请看:

[[0_3ZoteroConnector]]

[[11-Zotero/0_基础使用/0_2Zotero基础配置]]