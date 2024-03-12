---
uid: 20230817224055
title: Obsidian 插件：Recipe Grabber
tags: ['obsidian插件', 'readme']
description: 快速获取任何在线食谱的重要内容。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Recipe Grabber

> [!Note] 插件名片
> - 插件名称：Recipe Grabber
> - 插件作者：seethroughdev
> - 插件说明：快速获取任何在线食谱的重要内容。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/seethroughdev/obsidian-recipe-grabber)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?recipe-grabber)

## 概述

快速获取任何在线食谱的重要内容。

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/seethroughdev/obsidian-recipe-grabber/master/README.md)

---

## Readme(翻译）

下面是 [[recipe-grabber]] 插件的自述翻译

这个插件允许你将任何食谱的 URL 粘贴到你的 Obsidian 页面中，并以简洁的食谱格式获取内容，同时包括图片和链接返回原始页面。

它是为那些只想保存食谱而不是完整的饼干历史以及作者在缅因州家庭旅行中有多喜欢制作它们的人而构建的。

<https://github.com/seethroughdev/obsidian-recipe-grabber/assets/203779/88e3977c-fbb8-4bc6-a770-06071af154d1>

### 自定义模板

喜欢自己的布局？没问题。只需将 [自定义的handlebars字符串模板](https://handlebarsjs.com/guide/#simple-expressions) 粘贴到设置中。

我们假设页面上有一个 [json食谱](https://developers.google.com/search/docs/appearance/structured-data/recipe#guided-example)。请确保查看 [示例食谱](https://developers.google.com/search/docs/appearance/structured-data/recipe#guided-example) 以获取可以提取的字段列表。请记住，许多食谱似乎并不完全符合规范。因此，可能需要额外的努力来使它们符合规范。

与此同时，我尽力使大多数食谱能够直接使用。如果您对改进有建议，请 [创建工单](#)！
