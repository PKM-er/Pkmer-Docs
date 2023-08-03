---
uid: 20230803204238
title: Obsidian 插件：【Readme】Link Server
tags: ['obsidian插件', 'readme']
description: 该插件将在端口3333上打开一个反向代理服务器以获取Obsidian API的wikiLink信息。
author: moelody
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Link Server

> [!Note] 插件名片
> - 插件名称：Link Server
> - 插件作者：moelody
> - 插件说明：该插件将在端口3333上打开一个反向代理服务器以获取Obsidian API的wikiLink信息。
> - 插件分类：['obsidian插件', 'readme']
> - 项目地址：[点我访问](https://github.com/moelody/link-to-obsidian)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?link-info-server)

## 概述

该插件将在端口3333上打开一个反向代理服务器以获取Obsidian API的wikiLink信息。



> [!tip] 原文出处
> 
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/moelody/link-to-server/master/README.md)
> 

---

## Readme(翻译）

下面是 [[link-info-server]] 插件的自述翻译


# 链接服务器插件
该插件将在端口3333上打开一个反向代理服务器，用于从Obsidian API中获取Wiki链接的文件信息。
```
// 该插件将会返回obsidian api的筛选结果 `plugin.app.metadataCache.getFirstLinkpathDest(<string>fileLink, <string>sourcePath);`
// 通过使用 http://localhost:3333/?fileLink=<wiki原链接>&sourcePath=<md文件路径> 获取TFile类型的json数据
type TFile = {
    basename: string,
    extension: string
    name: string, 
    parent: {
        name: string,
        path: string
    },
    path: string,
    vault: {
        adapter: {
            basePath: string
        }
    },
    content: string
}
```

该插件将在端口3333上打开一个反向代理服务器，用于从Obsidian API中获取Wiki链接的文件信息。
```
// 该插件将会返回obsidian api的筛选结果 `plugin.app.metadataCache.getFirstLinkpathDest(<string>fileLink, <string>sourcePath);`
// 通过使用 http://localhost:3333/?fileLink=<wikiLink>&sourcePath=<mdFilePath> 获取基于下面TFile的json数据
type TFile = {
    basename: string,
    extension: string
    name: string, 
    parent: {
        name: string,
        path: string
    },
    path: string,
    vault: {
        adapter: {
            basePath: string
        }
    },
    content: string
}
```

## 如何使用

注意：该插件默认会在端口3333上打开一个反向代理服务器。如果该端口已被占用，请前往Link Server的设置选项卡中设置另一个端口。

***

1. 安装该插件
2. 在`第三方插件`中启用该插件
3. 开始使用插件

兼容性

所需的API功能仅适用于Obsidian v0.12.2+。

安装

### 来自Obsidian

1. 打开`设置`>`第三方插件`
2. 确保安全模式为**关闭**
3. 点击`浏览社区插件`
4. 搜索此插件
5. 点击`安装`
6. 安装完成后，启用该插件并关闭社区插件窗口，插件即可使用。

### 来自GitHub

1. 从GitHub仓库的Releases部分下载最新版本
2. 将文件放入您的vault的插件文件夹中：`<vault>/.obsidian/plugins/link-info-server`
3. 重新加载Obsidian
4. 如果提示安全模式，请禁用安全模式并启用插件。否则，请前往设置，第三方插件，确保关闭安全模式，并从那里启用插件。

> 注意：`.obsidian`文件夹可能是隐藏的。在macOS上，您可以按`Command+Shift+Dot`来在Finder中显示该文件夹。

***



