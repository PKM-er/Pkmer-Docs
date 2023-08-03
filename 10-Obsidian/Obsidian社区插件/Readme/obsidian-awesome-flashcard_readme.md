---
uid: 20230803203519
title: Obsidian 插件：【Readme】Awesome Flashcard
tags: ['obsidian插件', 'readme']
description: 为Obsidian提供方便的Anki集成。
author: AwesomeDog
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Awesome Flashcard

> [!Note] 插件名片
> - 插件名称：Awesome Flashcard
> - 插件作者：AwesomeDog
> - 插件说明：为Obsidian提供方便的Anki集成。
> - 插件分类：['obsidian插件', 'readme']
> - 项目地址：[点我访问](https://github.com/AwesomeDog/obsidian-awesome-flashcard)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsidian-awesome-flashcard)

## 概述

为Obsidian提供方便的Anki集成。



> [!tip] 原文出处
> 
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/AwesomeDog/obsidian-awesome-flashcard/main/README.md)
> 

---

## Readme(翻译）

下面是 [[obsidian-awesome-flashcard]] 插件的自述翻译


# 令人惊叹的记忆卡片

将你的 Obsidian 笔记中的记忆卡片与 Anki 同步的插件。

## 设计理念

- **单一真相来源**。仅在一个方向上同步闪卡：从你的Obsidian笔记到Anki。
- **简单至关重要**。只有一种简单的定义闪卡的方式。
- **坚持开放性**。标准的Markdown作为闪卡格式，不引入任何私有语法。
- **最小化占用**。在你的笔记中不存储私有数据。不会影响你的Anki学习进度。

## 特点

- ♳ 将您的保险库中的所有闪卡同步到Anki，单向同步
- ✍ 保留Anki的学习进度
- ✒ 完全支持Markdown语法：🖼️图片，🎤音频，🎞️视频，📟代码块，🔢LaTeX，📋表格...
- 🎴 支持在整个保险库和文件范围内定义牌组名称
- #️⃣ 支持在闪卡和文件范围内定义标签
- ⚡ 增量扫描的速度较快
- 🔗 快速链接到对应的Obsidian笔记

## 闪卡示例

在你的Obsidian笔记中：

```markdown
---
一个简单的闪卡：问题在前面 #闪卡
答案在后面
---
```

将生成一个Anki闪卡，如下所示：

| 一个简单的闪卡：问题在前面 |
|------------------------|
| 答案在后面             |

在[sample.md](tests/files/sample.md)中查看更多示例。

## 一次性设置

这些步骤只需要执行一次。之后，只需确保Anki正在运行即可使用插件扫描存储库。

1. 启动[Anki](https://apps.ankiweb.net/)，并导航到所需的配置文件。
2. 确保已安装[AnkiConnect](https://github.com/FooSoft/anki-connect)。
3. 安装[Obsidian](https://obsidian.md/)。
4. 在“Community plugins”列表中搜索此插件。
5. 安装插件。
6. 在Anki中，导航到`工具->插件->AnkiConnect->配置`，将其更改为以下内容，然后重新启动Anki以应用更改：

```
{
    "apiKey": null,
    "apiLogPath": null,
    "webBindAddress": "127.0.0.1",
    "webBindPort": 8765,
    "webCorsOrigin": "http://localhost",
    "webCorsOriginList": [
        "http://localhost",
        "app://obsidian.md"
    ]
}
```

如何使用

确保Anki正在运行，在左侧边栏的[Ribbon](https://help.obsidian.md/User+interface/Workspace/Ribbon)上有一个Anki图标，如下所示：

<svg transform="scale(0.2)">
<path fill="currentColor" stroke="currentColor" d="M 27.00,3.53 C 18.43,6.28 16.05,10.38 16.00,19.00 16.00,19.00 16.00,80.00 16.00,80.00 16.00,82.44 15.87,85.73 16.74,88.00 20.66,98.22 32.23,97.00 41.00,97.00 41.00,97.00 69.00,97.00 69.00,97.00 76.63,96.99 82.81,95.84 86.35,88.00 88.64,82.94 88.00,72.79 88.00,67.00 88.00,67.00 88.00,24.00 88.00,24.00 87.99,16.51 87.72,10.42 80.98,5.65 76.04,2.15 69.73,3.00 64.00,3.00 64.00,3.00 27.00,3.53 27.00,3.53 Z M 68.89,15.71 C 74.04,15.96 71.96,19.20 74.01,22.68 74.01,22.68 76.72,25.74 76.72,25.74 80.91,30.85 74.53,31.03 71.92,34.29 70.70,35.81 70.05,38.73 67.81,39.09 65.64,39.43 63.83,37.03 61.83,36.00 59.14,34.63 56.30,35.24 55.08,33.40 53.56,31.11 56.11,28.55 56.20,25.00 56.24,23.28 55.32,20.97 56.20,19.35 57.67,16.66 60.89,18.51 64.00,17.71 64.00,17.71 68.89,15.71 68.89,15.71 Z M 43.06,43.86 C 49.81,45.71 48.65,51.49 53.21,53.94 56.13,55.51 59.53,53.51 62.94,54.44 64.83,54.96 66.30,56.05 66.54,58.11 67.10,62.74 60.87,66.31 60.69,71.00 60.57,74.03 64.97,81.26 61.40,83.96 57.63,86.82 51.36,80.81 47.00,82.22 43.96,83.20 40.23,88.11 36.11,87.55 29.79,86.71 33.95,77.99 32.40,74.18 30.78,70.20 24.67,68.95 23.17,64.97 22.34,62.79 23.39,61.30 25.15,60.09 28.29,57.92 32.74,58.49 35.44,55.57 39.11,51.60 36.60,45.74 43.06,43.86 Z" />
</svg>

点击它，插件将为您完成其余的工作。
过程将显示在通知中，并在[Obsidian开发者控制台](https://forum.obsidian.md/t/how-to-access-the-console/16703/9)中显示。

同步机制澄清

为了实现这些目标：

- 从你的Obsidian笔记到Anki的单向同步，而不是反过来。自动添加新的、删除已删除的和更新过时的闪卡
- 不影响你自己的闪卡（不是来自你的Obsidian笔记的闪卡）
- 在你的笔记中不存储任何私人数据。

同步设计如下：

- 闪卡的牌组名称和正面文本被组合在一起以获得唯一的哈希值
- 每个来自Obsidian的闪卡都被标记上哈希值，以区分你自己的闪卡
- 在扫描vault时，它将根据唯一的哈希值对Obsidian中的闪卡（动态计算）和Anki中的闪卡进行差异比较，相应地创建牌组和CRUD闪卡。



