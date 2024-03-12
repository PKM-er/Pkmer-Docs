---
uid: 20240227160841
title: Obsidian 插件：【Readme】Note Gallery
tags: ['obsidian插件', 'readme']
description: 一个砌体画廊，将可视化您的笔记，类似于Craft笔记视图。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】Note Gallery

> [!Note] 插件名片
> - 插件名称：Note Gallery
> - 插件作者：Pash Shocky
> - 插件说明：一个砌体画廊，将可视化您的笔记，类似于 Craft 笔记视图。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/pashashocky/obsidian-note-gallery)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?note-gallery)

## 概述

一个砌体画廊，将可视化您的笔记，类似于 Craft 笔记视图。

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/pashashocky/obsidian-note-gallery/main/README.md)

---

## Readme(翻译）

下面是 [[note-gallery]] 插件的自述翻译

【机翻】

![笔记库示例](https://cdn.pkmer.cn/covers/note-gallery_2_0.png!pkmer)

# 它是什么？

Note Gallery 是一个砌体风格的笔记库，适用于 [Obsidian](https://obsidian.md/)。

- 此插件目前处于早期 alpha 测试阶段。它是功能性的，但可能包含一些错误。
- 请随时在问题中留下任何错误或功能请求。

[![GitHub赞助商](https://img.shields.io/github/sponsors/pashashocky?style=social)](https://github.com/sponsors/pashashocky)

[<img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="BuyMeACoffee" width="100">](https://www.buymeacoffee.com/pashashocky)

# 功能性

## 当前

- 通过在笔记中定义一个代码块来显示笔记或图片，类似于“Safari 概览模式”或“类似 Craft 的文件夹视图”。
  - [x] 通过缓存优化了加载 markdown 卡片的速度。
  - [x] CRUD 操作会更新图库。
- 提供各种过滤和搜索选项
  - [x] `query` 支持原生的 obsidian 搜索语法！例如：
    - `query: '/(Regex: \d)/'`
    - `query: tag:#mytag`
    - `query: 'path: abc/deb OR path: atlas/notes'`
    - `query: path:abc/deb OR path:atlas/notes` - 注意没有引号时的空格差异
  - [x] `path` 可以用来选择单个文件夹或递归收集它
- 有排序、结果数量限制和递归扫描文件夹的选项。

## 正在进行的工作

- 积极解决问题。
- 单击文件切换器中的文件夹时显示交互式视图。
- 将当前打开的标签显示为砌体画廊。

```
~~~~note-gallery     #           default | options
query: 'tag:#mytag'  # optional: anything you'd put into an obsidian search query
                     # make sure to wrap into single quotes for any regex e.g.: '/\d/'
debugQuery: false    # optional: false | true - display native search results to debug
path: atlas          # optional: current note folder | path/to/folder - you don't **need**
                     # to use path if you are using query, path will source additional notes
recursive: true      # optional: true | false
limit: 10            # optional: 0 | any number
sort: desc           # optional: desc | asc
sortBy: mtime        # optional: mtime | ctime | name
fontSize: 6pt        # optional: 6pt | NUMBERpt | NUMBERpx
showTitle: true      # optional: true | false
~~~~
```

# 安装说明

## 社区插件

我已经提交了一个申请，希望能够被包括在 obsidian 社区插件中 - [show some love](https://github.com/obsidianmd/obsidian-releases/pull/2684)

## BRAT

1. 从 Obsidian 的 Community Plugins 中安装 BRAT
  1.1 在设置中启用 BRAT 插件
2. 打开命令面板（CMD/CTRL + P）并运行命令 BRAT: `Add a beta plugin for testing`
3. 输入以下 URL：`https://github.com/pashashocky/obsidian-note-gallery`
4. 在设置的 `Community Plugins` 选项卡中启用 `Note Gallery` 插件
5. 在任何一个笔记中创建类似下面的代码块



