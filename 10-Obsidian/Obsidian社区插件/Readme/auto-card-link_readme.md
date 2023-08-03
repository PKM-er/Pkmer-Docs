---
uid: 2023080322142587
title: Obsidian 插件：Auto Card Link
tags: ['obsidian插件', 'readme']
description: 自动从网址获取元数据，并将其作为卡片样式的链接。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Auto Card Link

> [!Note] 插件名片
> - 插件名称：Auto Card Link
> - 插件作者：Nekoshita Yuki
> - 插件说明：自动从网址获取元数据，并将其作为卡片样式的链接。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/nekoshita/obsidian-auto-card-link)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?auto-card-link)

## 概述

自动从网址获取元数据，并将其作为卡片样式的链接。

![Auto Card Link](https://cdn.pkmer.cn/covers/auto-card-link.gif!pkmer)

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/nekoshita/obsidian-auto-card-link/main/README.md)
>

---

## Readme(翻译）

下面是 [[auto-card-link]] 插件的自述翻译

# 自动卡片链接

- 自动从 URL 获取元数据，并将其作为卡片样式的链接。
- 卡片样式的链接是通过代码块生成的，不会像 HTML 标签一样混乱你的 Markdown 文件！

![](demo.gif)

# 功能

- 粘贴并增强复制的 URL
- 增强选定的 URL
- 设置默认粘贴增强的选项

# `cardlink` 语法

代码块 `cardlink` 使用 YAML 语法来显示卡片样式的链接。

## 属性

|名称|必需|描述|
|---|---|---|
|url|true|点击链接时要打开的 URL|
|title|true|链接的标题|
|description|false|链接的描述|
|host|false|链接的主机|
|favicon|false|链接的网站图标|
|image|false|卡片链接中要显示的缩略图|

```
​```cardlink
url: https://obsidian.md/
title: "Obsidian"
description: "Obsidian：一个基于本地Markdown文件的知识库。"
host: obsidian.md
favicon: https://obsidian.md/favicon.ico
image: https://obsidian.md/images/banner.png
​```
```

# 自定义样式

卡片样式的链接是由 [styles.css](./styles.css) 进行样式设置的。要进行自定义，您可以尝试制作 [CSS片段](https://help.obsidian.md/How+to/Add+custom+styles#Use+Themes+and+or+CSS+snippets)。

# 动机

- 想要在我的笔记中展示漂亮的链接
- 不想用 HTML 标签弄乱我的笔记



