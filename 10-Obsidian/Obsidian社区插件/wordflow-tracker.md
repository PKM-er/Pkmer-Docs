---
uid: 20250504234003
title: Obsidian 插件：Wordflow Tracker 实时跟踪每个笔记中的编辑数据的轻量插件
tags: ['文件管理', '效率工具', '编辑工具', 'obsidian插件']
description: 自动追踪你编辑过的笔记文件的更改情况和统计数据。把修改过的笔记和统计信息记录到你的每日笔记里。
author: OS
type: other
draft: false
editable: false
modified: 20250509114411
---

# Obsidian 插件：Wordflow Tracker 实时跟踪每个笔记中的编辑数据的轻量插件

## 概述

Wordflow Tracker 是一款轻量级 Obsidian 插件，能自动追踪笔记编辑次数、修改字数等数据，并将统计结果记录到周期性笔记（如每日笔记）中。核心功能包括：在状态栏实时显示当前笔记的编辑数据；通过关闭笔记、切换模式或手动触发等方式自动记录修改内容；支持以柱状图形式展示原始内容与修改内容的比例；可将统计数据写入每日笔记的 YAML 前端属性，供热力图等插件分析使用。该插件通过直接读取 Obsidian 编辑器历史数据实现统计，无需创建额外数据库，几乎不占用性能。适用于需要量化写作进度、追踪内容迭代或进行写作习惯分析的用户，尤其适合长期使用 Obsidian 进行知识管理或日志记录的场景。用户可自定义记录格式（表格/列表）、数据字段（如 ${editedWords}）及存储位置，还能实现动态文件夹存储和多维度统计（如同时记录日/月维度数据）。插件提供中文文档，支持通过 Obsidian 社区市场或手动安装。

> [!Note] 插件名片
> - 插件名称：Wordflow Tracker
> - 插件作者：LeCheenaX
> - 插件说明：自动追踪你编辑过的笔记文件的更改情况和统计数据。把修改过的笔记和统计信息记录到你的每日笔记里。
> - 插件分类：[' 文件管理 ', ' 效率工具 ', ' 编辑工具 ', 'obsidian 插件 ']
> - 项目地址：[点我访问](https://github.com/LeCheenaX/WordFlow-Tracker)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?wordflow-tracker)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/LeCheenaX/WordFlow-Tracker/main/README.md)

## 效果&特性

![428397344-e323477d-d38e-4a6c-8d98-83bda5818a07.gif](https://cdn.pkmer.cn/images/428397344-e323477d-d38e-4a6c-8d98-83bda5818a07.gif!pkmer)

- 跟踪每个笔记的编辑次数和编辑字数。这将在笔记底部的状态栏中显示。
![image.png](https://cdn.pkmer.cn/images/20250509112749.png!pkmer)
- 在笔记关闭时自动记录修改的数据。或者，使用命令或按钮记录所有笔记。记录后，跟踪器将重置为 0。
- 以比例条样式显示更改，展示原始内容 (黄色) 与修改内容 (红色、绿色) 的比例。
![image.png](https://cdn.pkmer.cn/images/20250509112801.png!pkmer)
- 将编辑统计数据（例如你今天编辑的总字数）记录到日记的 YAML（Frontmatter）中。其他插件（如热图）可以使用这些元数据生成分析。
![image.png](https://cdn.pkmer.cn/images/20250509112814.png!pkmer)
- 自定义要记录的数据，使用 ${dataName}语法，详见下方支持的字符串插值。
- 自定义数据记录的方式，例如将表格或列表插入到笔记的指定位置。

## 使用

1. 安装插件
2. 启用插件
3. 在 Wordflow Tracker 设置中，指定你的周期笔记文件夹 (Periodic Note Folder)，编辑统计数据将在此文件夹中的周期笔记中保存。

好了！现在插件会自动跟踪你所做的编辑，并显示在状态栏中。当以下任一情况发生时，编辑统计数据将被记录到周期笔记中：

1. 从 Obsidian 的编辑模式切换到预览模式。
2. 在编辑笔记后关闭笔记所在的标签页。
3. 手动点击 Obsidian 左侧功能区的“Record wordflows from edited notes”按钮。
4. 手动在 Obsidian 中运行“Record wordflows from edited notes to periodic notes”命令。
5. 自动记录间隔达到设置的时间，该时间可以在 Wordflow Tracker 插件设置中设定，以定期记录所有编辑过的笔记。

## 原理

### 此插件如何收集数据？

通过访问 Obsidian 编辑器的历史字段 (Historic Field) 来获取编辑统计数据，历史字段即 Obsidian 本体存储撤销/重做历史的地方。

- 此插件以轻量化为目的开发，不创建额外的历史数据库，因此在大仓库中的负担。
- 追踪数据过程不创建临时文件，也不会暴露数据，因此不用担心隐私问题。

> - 所有统计数据都是通过直接读取 Obsidian 数据获取的，没有添加额外的线程来记录数据，这意味着启用跟踪几乎不会带来性能损失或额外的内存占用。
> - 该插件收集的临时数据在记录到指定的周期笔记中后即自动销毁，Obsidian 本体也会在关闭应用后清理所有历史数据。

### 高级自定义指南

#### 在记录之前将模板应用到新创建的笔记

确保你的设置的笔记模板将应用到同一个 周期笔记文件夹 (Periodic Note Folder) 下。

如果你新创建的笔记会被其他插件重命名，例如核心插件“模板”或社区插件“Templater”，请确保其他插件指定的名称与周期笔记文件夹 (Periodic Note Folder) 相同。

#### 自定义要记录的数据

在 Wordflow 记录语法中，你可以使用以下格式之一添加或删除数据：

- **表格：**

    在 Obsidian 中打开任意一个笔记，并通过以下方式添加一个空白表格：

    ```
    | |
    |-|
    | |
    ```

    然后，在标题中为 ${modifiedNote}指定名称，例如“Note Name”，并在行中添加“${modifiedNote}”。

    ![image.png](https://cdn.pkmer.cn/images/20250509113843.png!pkmer)

    点击“在之后添加列”按钮，为新列指定标题名称和任何你想要添加的 字符串插值)。

    ![image.png](https://cdn.pkmer.cn/images/20250509113809.png!pkmer)

    最后，选择并复制整个表格，然后粘贴到 Wordflow Tracker 设置中。

    ![image.png](https://cdn.pkmer.cn/images/20250509113757.png!pkmer)

    注意：${modifiedNote} 必须存在于表格语法中，否则记录器将无法合并笔记的现有数据与新数据。

- **无序列表：**

    添加一个换行符，按 tab 键进行适当的空格间隔，并输入你希望显示的数据名称。随后，添加形如“${docWords}”的 字符串插值。

    ![image.png](https://cdn.pkmer.cn/images/20250509113955.png!pkmer)

    注意：${modifiedNote} 必须存在于无序列表语法中，否则记录器将无法合并笔记的现有数据与新数据。

- **元数据：**

    就像在“源代码模式下”添加元数据一样，添加一个以冒号结尾的属性名称，并在其后添加“字符串插值，例如“${totalWords}”。

#### 将编辑统计同时记录到正文和元数据（YAML）中

在插件设置中，通过单击添加按钮来创建一个新的记录器：

![image.png](https://cdn.pkmer.cn/images/20250509114019.png!pkmer)

然后，将周期笔记文件夹和笔记格式调整到与其他记录器相同，以便记录到同一个笔记。

最后，将记录内容类型调整为不同类型。

注意，你应该避免将针对同一笔记的两个记录器的记录内容类型设置为相同。例如，避免一个记录器将表格插入到今日日记的底部，而另一个记录器将表格插入到今日日记的自定义位置。

#### 将编辑统计数据记录到动态文件夹

你可以将编辑统计数据记录到不仅是一个静态文件夹，例如“Daily Notes/2025-03-23.md”，还可以记录到一个动态文件夹，例如：“Daily Notes/2025-03/2025-03-23.md”。

具体实现方法详见 [开启动态文件夹](https://github.com/LeCheenaX/WordFlow-Tracker/blob/main/README_ZH_CN.md#%E5%9F%BA%E7%A1%80%E8%AE%BE%E7%BD%AE)。

## 设置

### 记录器设置

- **创建新记录器**: 创建新记录器来额外记录需要的功能，常用情况如下：
	- 为不同的周期笔记创建: 假设当前记录器会记录编辑数据到日记中，你可以添加一个新记录器使编辑数据还能记录到每周笔记，或者每月笔记中。
 	- 为不同的记录数据创建: 假设当前记录器会在日记中记录你编辑过的每条笔记，并以表格形式呈现, 你可以添加一个新记录器使编辑数据会汇总并记录到 YAML(Frontmatter) 中.
![image.png](https://cdn.pkmer.cn/images/20250509113731.png!pkmer)

- **重命名**: 重命名记录器以便区分。
- **删除**: 删除现在的记录器。

### 基础设置

- **周期笔记文件夹 (Periodic note folder)**：设置每日笔记、周记等周期笔记的存放文件夹路径。需与以下插件配置保持完全一致:
	- Obsidian 原生「日记」插件
	- Templater 模板插件（若已安装）
- **开启动态周期笔记文件夹 (Enable dynamic folder)**: 每日笔记、周记等周期笔记的存放文件夹将变为动态路径。 该路径需要使用 [moment 兼容格式](https://momentjs.com/docs/#/displaying/format/) 设置。 开启之后效果可见如下表格：

    | 周期笔记文件夹（开启动态文件夹） | 对应 Obsidian 的文件夹 | 周期笔记格式 | 对应 Obsidian 的文件 |

	| ---------------------------------- | -------------------- | ------------- | --------------------------------- |

	| [Daily Notes/]YYYY-MM | Daily Notes/2025-03 | YYYY-MM-DD | Daily Notes/2025-03/2025-03-21.md |

	| [Monthly Notes/]YYYY | Monthly Notes/2025 | MMM YYYY | Monthly Notes/2025/Mar 2025.md |

- **周期笔记格式 (Periodic note format)**：设置新创建的周期笔记（如日/周记）的文件名格式。需与以下插件配置保持完全一致:
	- Obsidian 原生「日记」插件
	- Templater 模板插件（若已安装）

### 记录设置

- 记录内容类型 (Record content type)：选择在周期笔记中插入内容的格式类型。当前支持:
	- 表格 (Table) : 以表格形式记录（⚠️ 使用表格时，modifiedNote 必须位于第一列）
	- 无序列表 (Bullet List) : 以列表形式记录
- 插入位置 (Insert to position)：支持底部插入和自定义插入
	- ⚠️ 若选择「自定义位置」需满足: 起始标记 (start position) 和结束标记 (end position) 必须在周期笔记中存在且唯一
	- 确保创建新周期笔记时模板已正确应用这些标记
- Wordflow 记录语法 (Wordflow recording syntax)：通过字符串插值自定义记录内容，如使用 ${modifiedNote} 获取修改笔记的路径，或使用 [[${modifiedNote}]] 格式生成笔记链接。

### 支持的字符串插值

| 字符串插值               | 描述                                                     | 支持记录类型  | 示例                                                                 | 备注                                                                                                 |
| ------------------- | ------------------------------------------------------ | ------- | ------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------- |
| ${modifiedNote}     | 修改后的笔记的笔记路径                                            | 表格、无序列表 | Daily Notes/2025-03-23.md                                          | 表格中始终应放在第一列，无序列表中应放在父元素中。                                                                          |
| ${editedTimes}      | 笔记在一段时间内的编辑次数                                          | 表格、无序列表 | 100                                                                | 根据 Obsidian 规则，输入间隔小于 0.5 秒的所有输入被视为一次编辑。每次编辑都可以通过按 `ctrl` + `z` 撤销或者按 `ctrl` + `shift` + `z` 重做操作。 |
| ${editedWords}      | 笔记在一段时间内的编辑字数                                          | 表格、无序列表 | 550                                                                | 等于 addedWords + deletedWords                                                                       |
| ${changedWords}     | 笔记中字数的净变化                                              | 表格、无序列表 | 150                                                                | 等于 addedWords - deletedWords                                                                       |
| ${deletedWords}     | 笔记在一段时间内删除的字数                                          | 表格、无序列表 | 200                                                                |                                                                                                    |
| ${addedWords}       | 笔记在一段时间内添加的字数                                          | 表格、无序列表 | 350                                                                |                                                                                                    |
| ${docWords}         | 文档的总字数(截止上次记录)                                         | 表格、无序列表 | 1000                                                               | 包括 YAML（Frontmatter）中的字数，而 Obsidian 的字数统计核心插件不包括这部分。                                               |
| ${editedPercentage} | （beta）一段时间内编辑字数占总字数（编辑字数 + 原始字数）的比率，用于判断编辑是微调还是较大更改    | 表格、无序列表 | 55%                                                                | 内容是 HTML 格式，但样式会自动转为文字样式。（直接使用字符串因记录器更新字符串而导致准确性逐步降低而被弃用。）                                         |
| ${statBar}          | （beta）以 HTML 格式展示原始字数、删除字数和添加字数的比例。用于判断编辑是否为微调还是还是较大更改 | 仅表格     | ![image.png](<https://cdn.pkmer.cn/images/20250509114137.png!pkmer>) | 自动转化样式为 SVG 比例条，颜色可以在 styles.css 中自定义。示例中的比例为 450:200:150。                                         |
| ${lastModifiedTime} | 笔记的最后修改时间，你可以在插件设置中指定此项目的格式                            | 表格、无序列表 | 2025-03-23 16:00                                                   |                                                                                                    |
| ${totalEdits}       | 所有笔记在一段时间内的总编辑次数                                       | 元数据     | 200                                                                | 可供其他插件使用，例如生成热力图。                                                                                  |
| ${totalWords}       | 所有笔记在一段时间内的总编辑字数                                       | 元数据     | 2000                                                               | 可供其他插件使用，例如生成热力图。                                                                                  |
