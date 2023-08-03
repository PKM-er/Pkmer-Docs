---
uid: 2023080322202792
title: Obsidian 插件：【Readme】Importer
tags: ['obsidian插件', 'readme']
description: 从其他应用程序（如Evernote）导入笔记。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Importer

> [!Note] 插件名片
> - 插件名称：Importer
> - 插件作者：Obsidian
> - 插件说明：从其他应用程序（如Evernote）导入笔记。
> - 插件分类：['obsidian插件', 'readme']
> - 项目地址：[点我访问](https://github.com/obsidianmd/obsidian-importer)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsidian-importer)

## 概述

从其他应用程序（如Evernote）导入笔记。

![Importer](https://cdn.pkmer.cn/covers/obsidian-importer.png!pkmer)

> [!tip] 原文出处
> 
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/obsidianmd/obsidian-importer/master/README.md)
> 

---

## Readme(翻译）

下面是 [[obsidian-importer]] 插件的自述翻译


![Obsidian导入器截图](/images/social.png)

这个Obsidian插件允许你将来自其他应用和文件格式的笔记导入到你的Obsidian vault中。笔记会被转换为纯文本的Markdown文件。
## 支持的格式

目前支持HTML文件和Evernote的`.enex`格式，还有更多格式正在开发中。您可以帮助我们！请参阅我们的[贡献指南](/CONTRIBUTING.md)。

计划中的格式：

- [x] Evernote的`.enex`格式（由[Yarle](https://github.com/akosbalasko/yarle)提供支持）
- [x] HTML，文件夹中的文件
- [ ] Notion
- [ ] Apple Notes
- [ ] Microsoft OneNote
- [ ] Google Keep
- [ ] Roam Research
- [ ] 其他Markdown风格

## 使用方法

首先在Obsidian中安装Importer插件→社区插件

### 从Evernote导入笔记

- 将你的Evernote文件导出为`.enex`格式。你可以通过在桌面客户端中转到笔记本屏幕，点击**更多操作**（`...`图标），然后选择**导出笔记本...**来导出整个笔记本。
- 在Obsidian中通过命令面板或功能区图标打开**导入器**插件
- 在**文件格式**下选择**Evernote (.enex)**
- 选择要导入的`.enex`文件
- 可选地，选择一个用于导入的文件夹 - 你的Markdown文件将在这个文件夹中创建在你的保险库中。
- 点击**导入**

目前，导入没有任何特殊设置，如果你想对输出有更多的控制，请考虑使用[Yarle](https://github.com/akosbalasko/yarle)。

![Obsidian导入器截图](/images/screenshot.png)

## 贡献

该仓库接受贡献。一些问题已经被标记为[#bounty](https://github.com/obsidianmd/obsidian-importer/labels/bounty)。有关更多信息，请参阅[贡献指南](/CONTRIBUTING.md)。

## 鸣谢

该插件依赖于以下重要贡献：

- [Yarle](https://github.com/akosbalasko/yarle) (MIT) 由[@akosbalasko](https://github.com/akosbalasko)开发，用于`.enex`文件的转换，[支持他的工作](https://www.buymeacoffee.com/akosbalasko)。



