---
uid: 2023120719422860
title: Obsidian 插件：【Readme】Screwdriver
tags: ['obsidian插件', 'readme']
description: 您的保险库中放入和取出任何文件的实用程序。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】Screwdriver

> [!Note] 插件名片
> - 插件名称：Screwdriver
> - 插件作者：vorotamoroz
> - 插件说明：您的保险库中放入和取出任何文件的实用程序。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/vrtmrz/obsidian-screwdriver)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsidian-screwdriver)

## 概述

您的保险库中放入和取出任何文件的实用程序。

![Screwdriver](https://cdn.pkmer.cn/covers/obsidian-screwdriver_new.gif)

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/vrtmrz/obsidian-screwdriver/main/README.md)
>

---

## Readme(翻译）

下面是 [[obsidian-screwdriver]] 插件的自述翻译

## 螺丝刀

用于选择和放置隐藏文件的插件。

![屏幕截图](https://cdn.pkmer.cn/covers/obsidian-screwdriver_1_0.gif)

您可以转储存储在指定目录中的文件，或将转储文件放置在您的保险库下的任何路径中。

### 如何使用

#### 安装

通过 [BRAT](https://github.com/TfTHacker/obsidian42-brat) 安装此插件。

准备一个用于保存转储的文件。

就像这样：

```md
---

# --- 选择要导出的目录。 ---
目标：.obsidian/snippets

# --- 忽略的前缀。 ---
忽略:
- /node_modules
- /.git

# --- 用于过滤文件的正则表达式
过滤器：

不用担心。您可以通过在空文件中使用`Ctrl+P` -> `Screwdriver: Create dump template`来创建此文件。您只需要选择目标目录即可。

#### 转储

`Ctrl+P` -> `转储文件` 将文件转储到笔记中。

```md
---

# --- 选择要导出的目录。 ---
目标：.obsidian/snippets

# --- 或者，指定要获取的URL。
urls:

- https://gist.githubusercontent.com/vrtmrz/8b638347f56d1dad25414953bb95d7b6/raw/77f2965f79e9390b88dd17d5f23475b1f8b8085a/ninja-cursor-snippets.css

# --- 忽略的前缀。 ---
忽略:
- /node_modules
- /.git

# --- 用于过滤文件的正则表达式
过滤器：

# - \.js
---

# .obsidian/snippets/fonts_jp.css
- 创建时间：2021/4/01 04:11:10
- 修改时间：2022/1/10 06:34:03

```.obsidian/snippets/fonts_jp.css
:root {
    --default-font: -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji;
    --editor-font: ui-monospace, SFMono-Regular, SF Mono, Menlo, Consolas, Liberation Mono, monospace;
    --override-font: "HackGen35";

    ：
    ：
```

注意：通过编辑文档可以修改转储的文件。

#### 恢复

`Ctrl+P` -> `恢复文件` 将文件恢复到您的存储空间中。

注意：按照 ``` 后面的文件名编写

如果您正在使用 [自托管的LiveSync](https://github.com/vrtmrz/obsidian-livesync) 或 [remotely-save](https://github.com/fyears/remotely-save)，同步配置可能会很有用。
