---
uid: 20230818002059
title: Obsidian 插件：O2
tags: ['obsidian插件', 'readme']
description: 这是一个语法转换插件，用于使Obsidian Markdown语法与其他Markdown语法兼容。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：O2

> [!Note] 插件名片
> - 插件名称：O2
> - 插件作者：haril song
> - 插件说明：这是一个语法转换插件，用于使 Obsidian Markdown 语法与其他 Markdown 语法兼容。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/songkg7/o2)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?o2)

## 概述

这是一个语法转换插件，用于使 Obsidian Markdown 语法与其他 Markdown 语法兼容。

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/songkg7/o2/main/README.md)

---

## Readme(翻译）

下面是 [[o2]] 插件的自述翻译

# O2

[![GitHub发布（按日期排序）](https://img.shields.io/github/v/release/songkg7/O2)](https://github.com/songkg7/o2/releases)

[![CI](https://github.com/songkg7/o2/actions/workflows/ci.yml/badge.svg)](https://github.com/songkg7/o2/actions/workflows/node.js.yml)

[![CodeFactor](https://www.codefactor.io/repository/github/songkg7/o2/badge)](https://www.codefactor.io/repository/github/songkg7/o2)

[![codecov](https://codecov.io/gh/songkg7/o2/branch/main/graph/badge.svg?token=AYQGNW0SWR)](https://codecov.io/gh/songkg7/o2)

[![GitHub许可证](https://img.shields.io/github/license/songkg7/O2)](https://github.com/songkg7/o2/blob/main/LICENSE)

[![Obsidian下载量](https://img.shields.io/badge/dynamic/json?logo=Obsidian&color=%238b6cef&label=downloads&query=o2.downloads&url=https://raw.githubusercontent.com/obsidianmd/obsidian-releases/master/community-plugin-stats.json)][community-plugin]

[community-plugin]: <https://obsidian.md/plugins?id=o2>

一次编写，转换为多个平台。

O2 是一个将 Obsidian Markdown 文件转换为其他 Markdown 平台（如 Jekyll）的工具。

但目前仅支持 Jekyll。将来我会添加更多平台。

如果您有任何建议，请告诉我。

先决条件

### 您的保险库结构

您应该有一个类似这样的文件夹结构。（当然，您可以在设置中更改文件夹名称）

```html
您的保险库
├── ready（放置您想要转换的笔记的位置）
├── backup（放置转换前的原始笔记的位置）
└── attachments（放置附件的位置）
```

其他文件夹将被忽略。

如何使用

如果您想要转换您的笔记，您应该将它们移动到 `ready` 文件夹中。

然后，通过 Obsidian 的 `cmd + p` 快捷键执行命令 `O2: convert to Jekyll Chirpy`。

如果发生异常，您可以在 `backup` 文件夹中看到原始笔记。

（我将来会实现事务功能，这样当发生异常时，您可以在 `ready` 文件夹中看到原始笔记。）

支持的平台

### Jekyll Chirpy

#### 设置

```html
你的Jekyll项目（例如：/Users/user1/Documents/GitHub/user1.github.io）
├── _posts（转换后的笔记存放的位置）
└── assets
    └── img
        └── yyyy-MM-dd-title（附件存放的位置。yyyy-MM-dd将被转换的日期替换）
```

- jekyllPath 是你的 Jekyll 项目的路径（例如：/Users/user1/Documents/GitHub/user1.github.io）。
- 附件将按照日期复制到 `assets/img/<yyyy-MM-dd>` 文件夹下。

#### 语法

| 功能                  | Obsidian (AS-IS)                | Jekyll Chirpy (TO-BE)                                                                  | 描述                                        |
|----------------------|---------------------------------|----------------------------------------------------------------------------------------|----------------------------------------------------|
| Wiki 链接              | [[What is Obsidian?]]           | What is Obsidian?                                                                      |
| 图片                  | ![[NewJeans.png]]               | `![image](/assets/img/<yyyy-MM-dd>-<title>/NewJeans.png)`                              | `yyyy-MM-dd` 将被转换的日期替换 |
| 调整图片大小（宽度）  | ![[NewJeans.png&#124;100]]      | `![image](/assets/img/<yyyy-MM-dd>-<title>/NewJeans.png){: width="100" }`              |
| 调整图片大小（宽度和高度） | ![[NewJeans.png&#124;100x200]]  | `![image](/assets/img/<yyyy-MM-dd>-<title>/NewJeans.png){: width="100" height="200" }` |
| 嵌入                  | ![[Obsidian#This is Obsidian!]] | Obsidian                                                                               |
| 注释                  | %% This is a comment %%         | `<!-- This is a comment -->`                                                           |
| 脚注                  | [^1]                            | `[^fn-nth-1]`                                                                          | 目前仅支持简单语法         |
| 大括号                | {{ content }}                   | `{% raw %}{{ content }}{% endraw %}`                                                   | 可选的                                           |

表格中未列出的语法将被忽略。如果您想要转换的语法，请在问题中告诉我。

## 支持的其他插件

- [在编辑时更新前置元数据时间](https://github.com/beaussan/update-time-on-edit-obsidian)

## 贡献

欢迎随时提交拉取请求。对于重大更改，请先打开一个问题来讨论您想要进行的更改。

## 许可证

该项目以 [MIT](https://choosealicense.com/licenses/mit/) 许可证发布。

[![ko-fi](https://ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/V7V8KX38Q)
