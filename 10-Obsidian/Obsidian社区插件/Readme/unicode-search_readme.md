---
uid: 20230803213409
title: Obsidian 插件：【Readme】Unicode Search
tags: ['obsidian插件', 'readme']
description: 搜索并插入Unicode字符到您的编辑器中
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Unicode Search

> [!Note] 插件名片
> - 插件名称：Unicode Search
> - 插件作者：BambusControl
> - 插件说明：搜索并插入Unicode字符到您的编辑器中
> - 插件分类：['obsidian插件', 'readme']
> - 项目地址：[点我访问](https://github.com/BambusControl/obsidian-unicode-search)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?unicode-search)

## 概述

搜索并插入Unicode字符到您的编辑器中

![Unicode Search](https://cdn.pkmer.cn/covers/unicode-search.png!pkmer)

> [!tip] 原文出处
> 
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/BambusControl/obsidian-unicode-search/main/README.md)
> 

---

## Readme(翻译）

下面是 [[unicode-search]] 插件的自述翻译



# Obsidian Unicode 搜索

轻松搜索 [Unicode 字符数据库](https://www.unicode.org/ucd/) 索引，并将任何字符插入到您的编辑器中。

> 这是一个 [Obsidian](https://obsidian.md) 的插件

## 使用方法

该插件添加了一个用于搜索Unicode字符的命令。

![搜索命令预览](./assets/command.png)

只需描述您要搜索的字符，然后按下<kbd>↵</kbd>将其插入到编辑器中。

![搜索"wave"预览](./assets/search-wave.png)

字符被插入到编辑器中。

![插入的波浪符号](./assets/wave-inserted.png)

## 开发

提供了Docker compose以便更轻松地设置环境。

安装依赖项。

```console
docker-compose run --rm npm install
```

构建项目。

```console
docker-compose run --rm npm run build
```



