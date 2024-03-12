---
uid: 20231220112631
title: Obsidian 插件：【Readme】Obsidian Attendance
tags: ['obsidian插件', 'readme']
description: 帮助你在笔记中直接记录出勤情况。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】Obsidian Attendance

> [!Note] 插件名片
> - 插件名称：Obsidian Attendance
> - 插件作者：Tiim
> - 插件说明：帮助你在笔记中直接记录出勤情况。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/Tiim/obsidian-attendance)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsidian-attendance)

## 概述

帮助你在笔记中直接记录出勤情况。

![Obsidian Attendance](https://cdn.pkmer.cn/covers/obsidian-attendance.png!pkmer)

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/Tiim/obsidian-attendance/master/README.md)

---

## Readme(翻译）

下面是 [[obsidian-attendance]] 插件的自述翻译

# Obsidian 考勤

这个插件为 [Obsidian.md](https://obsidian.md/) 帮助你在笔记中进行考勤。

如果你喜欢这个插件，请考虑给我买杯咖啡。

[!["Buy Me A Coffee"](https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png)](https://www.buymeacoffee.com/Tiim)

**⚠ 这个插件仍处于早期开发阶段，可能会有一些 bug，请确保定期备份你的 vault！**

如何使用此插件

创建一个带有 `attendance` 类型的代码块：

````markdown
```attendance
date: 2022-03-26
title: 历史课
query: #person
```
````

`date`、`title` 和 `query` 字段都是必需的。

![考勤列表](https://cdn.pkmer.cn/covers/obsidian-attendance_2_0.png!pkmer)

> ⚠ 如果在同一个笔记中创建多个考勤列表，请确保它们具有不同的“date”或“title”属性。否则，当您想要更新第二个考勤列表时，插件将覆盖第一个列表。

### 日期字段

*目前未使用*

日期字段允许您指定您想要记录出勤的事件的日期。目前尚未使用此字段，但将来将用于导出出勤名单。

### 标题字段

*目前未使用*

标题字段允许您指定事件的标题。目前尚未使用此字段，但将来将用于仅导出特定事件。例如，如果您正在为一个班级进行考勤，可以将此字段设置为特定的班级名称。

### 查询字段

查询字段允许您指定哪些笔记被视为事件的可能参与者。列表将包括与查询字段匹配的所有笔记。

目前支持以下查询字段：

#### 标签

示例：

```
查询：#person/class-a
```

此查询将匹配所有带有 `#person/class-a` 标签的笔记。

#### 文件夹

示例：

```
查询："people"
```

此查询将匹配 `people` 文件夹中的所有笔记。

链接

示例：

```
查询：[[PersonMOC]]
```

此查询将匹配所有链接自 `[[PersonMOC]]` 笔记或链接到它的笔记。

组合查询（and，or）

示例：

```
query: #class-a and [[Students]]
```

这将仅匹配具有标签 `#class-a` 并且链接到 `[[Students]]` 笔记或从中链接的笔记。

括号

当组合超过两个查询时，建议使用括号来保持查询的可读性。如果没有明确设置括号，插件将自动按照以下方式放置括号：

```
查询：(#tag-a and (#tag-b and (#tag-c or #tag-d)))
```

### 保存出勤状态

当您点击三个按钮之一（"present"、"absent"、"excused"）时，列表后面的代码块将被修改以保存您选择的出勤状态。以下是一个带有一个出勤和一个请假出席者的代码块示例：

````markdown
```attendance
date: 2022-03-26
title: 历史课
query: #person
* [[Ray M. Smart.md]], "present", ""
* [[Winona Philpott.md]], "excused", ""
```
````

![带有一个出勤和一个请假出席者的出勤列表](https://cdn.pkmer.cn/covers/obsidian-attendance_2_1.png!pkmer)

### 手动安装插件

* 从 [最新版本](https://github.com/Tiim/obsidian-attendance/releases/latest) 下载 `main.js`、`styles.css` 和 `manifest.json` 文件。
* 创建文件夹 `MyVault/.obsidian/plugins/obsidian-attendance`，并将下载的文件放入其中。
* 在设置的社区插件页面中启用插件。

## 贡献

非常欢迎您对这个插件进行贡献！您可以通过以下方式进行贡献：

* 提交您遇到的错误问题
* 增加文档内容
* 提出功能需求
* 提交代码的拉取请求

### 如何处理代码

- 将此存储库克隆到文件夹 `MyTestVault/.obsidian/obsidian-attendance` 中
- 运行 `npm i` 安装依赖项
- 运行 `npm run dev` 以启动监视模式下的编译。

为了在每次更改时方便地重新加载插件，请使用 [hot-reload插件](https://github.com/pjeby/hot-reload)。

使用 eslint 提高代码质量

运行 `npm run lint` 以查看所有错误，并运行 `npm run lint -- --fix` 以修复所有可以自动修复的错误。

### 发布新版本

- 在 `manifest.json` 中更新最低 Obsidian 版本。
- 运行 `npm run build && npm run test`。
- 运行 `npm version [patch, minor, major]` 来更新版本。
- 运行 `git push && git push --tags`。
- 运行 `gh release create $(cat manifest.json | jq ".version" -r) --generate-notes` 来创建 GitHub 发布。
- 运行 `gh release upload $(cat manifest.json | jq ".version" -r) manifest.json styles.css main.js`。

### 将您的插件添加到社区插件列表中

- 检查 <https://github.com/obsidianmd/obsidian-releases/blob/master/plugin-review.md>
- 发布一个初始版本。
- 确保您的存储库的根目录中有一个 `README.md` 文件。
- 在 <https://github.com/obsidianmd/obsidian-releases> 上发起一个拉取请求，以添加您的插件。

### API 文档

请参阅<https://github.com/obsidianmd/obsidian-api>

### 来自其他插件的代码

该插件受到以下插件的启发并使用了其代码：

* Obsidian Dataview
