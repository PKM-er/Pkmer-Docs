---
uid: 2024070516100558
title: Obsidian 插件：Medium Importer
tags: ['文件管理', '第三方工具集成', '导入工具', 'obsidian插件']
description: 将Medium文章导入您的保险库。
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Medium Importer

> [!Note] 插件名片
> - 插件名称：Medium Importer
> - 插件作者：David Zachariae
> - 插件说明：将Medium文章导入您的保险库。
> - 插件分类：['文件管理', '第三方工具集成', '导入工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/arumie/obsidian-medium-importer-plugin)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?medium-importer)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/arumie/obsidian-medium-importer-plugin/main/README.md)



## 概述

Obsidian插件"Medium Importer"可以将Medium文章导入到你的Obsidian vault中。它使用[非官方的Medium API](https://mediumapi.com/)来获取文章，并将其保存为markdown文件到你的vault中。

使用方法如下：
1. 使用"Set RapidAPI API Key"命令设置RapidAPI密钥。
   - 在RapidAPI上注册并订阅Medium API，链接在[这里](https://rapidapi.com/nishujain199719-vgIfuFHZxVZ/api/medium2)。
   - 目前免费计划每月提供150个免费请求。
2. 复制你想导入的Medium文章的URL。
3. 使用"Import Medium Article"命令导入文章。

此外，你还可以手动安装插件：
1. 将该仓库克隆到Obsidian vault的插件文件夹中。
2. 运行`npm i`安装依赖。
3. 运行`npm run build`以启动编译并监视模式。
4. 运行`npm run build:css`以构建CSS。
5. 重新加载Obsidian。

请注意，该插件将API密钥保存在Obsidian vault的设置中，请确保保管好你的API密钥。如果使用Git插件，请在vault中添加.gitignore文件，内容为`.obsidian/plugins/medium-importer/data.json`，以避免将RapidAPI密钥推送到你的代码库中。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---



