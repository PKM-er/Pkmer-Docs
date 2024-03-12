---
uid: 20231220115812
title: Obsidian 插件：【Readme】Better Search Views
tags: ['obsidian插件', 'readme']
description: 升级全局搜索、反向链接和查询，使用类似大纲的上下文树。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】Better Search Views

> [!Note] 插件名片
> - 插件名称：Better Search Views
> - 插件作者：Ivan Lednev
> - 插件说明：升级全局搜索、反向链接和查询，使用类似大纲的上下文树。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/ivan-lednev/better-search-views)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?better-search-views)

## 概述

升级全局搜索、反向链接和查询，使用类似大纲的上下文树。

![Better Search Views](https://cdn.pkmer.cn/covers/better-search-views.gif)

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/ivan-lednev/better-search-views/master/README.md)

---

## Readme(翻译）

下面是 [[better-search-views]] 插件的自述翻译

# 更好的搜索视图

> **警告**
>
> - 在**安装/更新/启用/禁用**插件后，您需要重新加载 Obsidian
> - 该插件会涉及 Obsidian 的内部操作，因此在更新后可能会出现故障。如果您注意到了这一点，请 [创建一个问题](https://github.com/ivan-lednev/better-search-views/issues)

## 安装

在插件添加到社区插件列表之前，您可以通过 [BRAT](https://github.com/TfTHacker/obsidian42-brat) 来尝试它，下载代码是 `ivan-lednev/better-search-views`。

## 它的功能

该插件将更多的大纲功能引入到 Obsidian 中：它改进了搜索视图，以在每个匹配项周围创建类似大纲的上下文。

- **它修补了原生搜索、反向链接视图、嵌入式反向链接和嵌入式查询**
- 它将匹配项中的 Markdown 渲染为 HTML
- 它通过链接所有上方的祖先标题和列表项来构建匹配项的结构面包屑
- 如果匹配项在列表项中，它会显示列表项下面的所有子列表项
- 如果匹配项在标题中，它会显示标题下面的第一个部分（你知道的，为了提供上下文）
全局搜索的样子是这样的

![image](https://cdn.pkmer.cn/covers/better-search-views_1_0.png!pkmer)

![image](https://cdn.pkmer.cn/covers/better-search-views_1_1.png!pkmer)

### 这是文档中的反向链接

![image](https://cdn.pkmer.cn/covers/better-search-views_1_2.png!pkmer)

### 嵌入式查询

![image](https://cdn.pkmer.cn/covers/better-search-views_1_3.png!pkmer)

点击面包屑的效果与您所期望的一样。

### 按住控制键悬停在任何元素上会触发一个弹出窗口

![image](https://cdn.pkmer.cn/covers/better-search-views_2_0.gif)

如何使用它

只需安装并重新加载 Obsidian 即可。

## 贡献

如果您发现了一个错误或者有一个改进的想法，请 [创建一个问题](https://github.com/ivan-lednev/better-search-views/issues)。

欢迎提交拉取请求！如果您想要贡献但不知道从何开始，您可以创建一个问题或给我发送电子邮件：<bishop1860@gmail.com>。

您也可以直接支持开发：

# 致谢

- 感谢 [TFTHacker](https://tfthacker.com/) 提供的 [插件](https://github.com/TfTHacker/obsidian42-strange-new-worlds)，帮助我解决了许多小改进的实现问题
- 感谢 [NothingIsLost](https://github.com/nothingislost) 提供的出色插件，帮助我了解如何修补 Obsidian 内部问题
- 感谢 [PJEby](https://github.com/pjeby) 提供的 [修补库](https://github.com/pjeby/monkey-around)



