---
uid: 20231026111420
title: Obsidian 插件：【Readme】AnkiSync+
tags: ['obsidian插件', 'readme']
description: Obsidian与Anki之间的集成。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】AnkiSync+

> [!Note] 插件名片
> - 插件名称：AnkiSync+
> - 插件作者：RochaG0
> - 插件说明：Obsidian 与 Anki 之间的集成。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/RochaG07/anki-sync-plus)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?anki-sync-plus)

## 概述

Obsidian 与 Anki 之间的集成。

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/RochaG07/anki-sync-plus/master/README.md)

---

## Readme(翻译）

下面是 [[anki-sync-plus]] 插件的自述翻译

# AnkiSync+

解锁 [Obsidian](https://obsidian.md/) 和 [Anki](https://apps.ankiweb.net/) 之间无缝集成的强大功能，使用 AnkiSync+ 插件，提升您的卡片创建体验。

![](https://github.com/RochaG07/anki-sync-plus/blob/master/media/demo.gif)

## ✨ 主要特点

- 🗃️ *自动化卡片管理:* 轻松扫描选定的文件夹，添加新卡片或更新现有卡片。轻松保持知识的最新状态。
- 📃 *基于笔记的卡片操作:* 直接从当前选择的笔记中选择添加、更新或删除单个卡片。根据您不断变化的学习需求定制您的闪卡。
- 🏷️ *使用标签进行组织:* 使用标签作为卡组名称，将您的闪卡组织成卡组。笔记上找到的第一个标签将成为卡组名称，简化您的卡片组织。
- ❌ *标签排除:* 通过排除特定标签来自定义卡组名称。确保您的卡组反映出您独特的学习偏好。
- 🌫️ *标签过滤:* 定义在文件扫描期间要排除的标签，防止不需要的标签混乱您的闪卡收藏。
- 🗑️ *自动清理:* 告别杂乱。在更新期间从 Anki 中删除卡片时，自动删除笔记上的 "anki-id" 属性。
- 🖼️ *图片支持:* 无缝集成图片到您的闪卡和笔记中，增强视觉学习效果。
- ✏️ *Excalidraw 集成:* 使用嵌入式 [Excalidraw](https://github.com/zsviczian/obsidian-excalidraw-plugin) 绘图支持，将您的图表和视觉解释提升到一个新的水平。
- 🔡 *可自定义的正则表达式:* 通过使用正则表达式来调整卡片创建，省略匹配的文本，确保您的闪卡简明而专注。

## 👨‍🔧 设置

1. 启动 Anki 并访问您首选的配置文件。
2. 确认已安装 [AnkiConnect](https://ankiweb.net/shared/info/2055492159)。
3. 在 Anki 中，转到工具 -> 插件 -> AnkiConnect -> 配置，并将其修改为与以下设置相匹配的内容。

```json
{
    "apiKey": null,
    "apiLogPath": null,
    "ignoreOriginList": [],
    "webBindAddress": "127.0.0.1",
    "webBindPort": 8765,
    "webCorsOriginList": [
        "http://localhost",
        "app://obsidian.md"
    ]
}
```

## 💖 支持

如果您觉得这个插件有价值，并希望为其持续开发做出贡献，您可以选择在 Ko-fi 上表达您的支持。

[<img style="float:left" src="https://user-images.githubusercontent.com/14358394/115450238-f39e8100-a21b-11eb-89d0-fa4b82cdbce8.png" width="200">](https://ko-fi.com/rochag07)
