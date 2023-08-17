---
uid: 2023080322134326
title: Obsidian 插件：【Readme】Advanced Cursors
tags: ['obsidian插件', 'readme']
description: 更强大地使用多个光标。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Advanced Cursors

> [!Note] 插件名片
> - 插件名称：Advanced Cursors
> - 插件作者：SkepticMystic
> - 插件说明：更强大地使用多个光标。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/SkepticMystic/advanced-cursors)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?advanced-cursors)

## 概述

更强大地使用多个光标。

![Advanced Cursors](https://cdn.pkmer.cn/covers/advanced-cursors.png!pkmer)

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/SkepticMystic/advanced-cursors/master/README.md)
>

---

## Readme(翻译）

下面是 [[advanced-cursors]] 插件的自述翻译

# 高级光标

Advanced Cursors 在 Obsidian 中添加了新的命令，让您更好地利用 [多个光标](https://help.obsidian.md/How+to/Working+with+multiple+cursors)。

这个插件与 `@spslater` 的 [Cursor Position 插件](https://github.com/spslater/obsidian-cursor-location-plugin) 配合使用效果非常好。

## 命令

### 移动到当前选择的下一个实例

该命令将当前选中的文本（如果没有选中任何内容，则选择光标下的单词）并将光标移动到该相同文本的下一个实例。

![](Assets/cursors-readme1.gif)

如果找不到下一个实例，则会循环回到笔记的开头。

### 将当前选择的下一个实例添加到选择中

该命令与前一个命令大致相同，只是它保留了先前的光标选择。

同样，如果没有找到下一个实例，它将循环回到笔记的开头。

这与在 VS Code 中使用 `Ctrl + d` 执行的操作相同。

![](Assets/cursors-readme2.gif)

### 移动到当前选择的上一个实例

与 [移动到当前选择的下一个实例](https://github.com/SkepticMystic/advanced-cursors/blob/master/README.md#Move-to-next-instance-of-current-selection) 相同，只是向后移动。

### 将当前选择的上一个实例添加到选择中

与 [将当前选择的下一个实例添加到选择中](https://github.com/SkepticMystic/advanced-cursors/blob/master/README.md#Add-next-instance-of-current-selection-to-selections) 相同，只是向后移动。

### 复制行上/下

该命令根据您选择的选项，将当前选定的行向上或向下复制。

就像在 VS Code 中使用 `Alt + Shift + ↑/↓` 一样。

### 在每个光标位置插入递增值

运行此命令将打开一个模态框，让您选择一个“起始”数字和一个递增值“inc”。提交后，高级光标将使用从“start”开始并以“inc”递增的递增值覆盖您当前的每个选择。

“start”和“inc”都可以是任意实数。结果数字将四舍五入为 4 位小数。

![](Assets/AC-IncrementingI.gif)

### 打开正则表达式匹配模态框

该命令允许更精细地控制光标的放置位置。

打开模态框后，您将看到一个文本输入框、一个提交按钮和一个切换“正则表达式”的选项。

![image](https://user-images.githubusercontent.com/70717676/138410766-7c3b2843-5761-4c57-a09f-e0edceb4cc41.png)

在输入框中输入搜索查询，并且高级光标将在当前文档中与查询匹配的每个位置放置一个光标。

切换“正则表达式？”以将查询视为正则表达式或字符串字面值。

![](Assets/cursors2.gif)

您现在还可以使用 [保存的查询](https://github.com/SkepticMystic/advanced-cursors/blob/master/README.md#saved-queries) 快速运行查询。

## 保存的查询

在高级光标的设置选项卡中，您将看到一个界面，允许您“添加新查询”。这允许您设置一个查询（正则表达式或文字），以便从 [匹配模态框](https://github.com/SkepticMystic/advanced-cursors/blob/master/README.md#open-regex-match-modal) 快速访问，或者从命令面板中运行为 Obsidian 命令。

在“添加新查询”模态框中，您有 4 个选项：

1. 查询的“名称”，
2. 实际的“查询”本身，
3. 任何要应用于查询的 [正则表达式标志](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions#advanced_searching_with_flags)（如果它是一个正则表达式），
   - “g”标志会自动添加，但如果您自己添加它也不会出错。
4. 一个切换按钮，用于指示“查询”应该被解释为正则表达式还是文字字符串。

![image](https://user-images.githubusercontent.com/70717676/138410689-e0846afa-3f9e-4bcd-9fa0-27679416a2e1.png)

### 运行保存的查询

在添加查询后，它将出现在设置中的保存查询列表中：

![image](https://user-images.githubusercontent.com/70717676/138498450-03d966e6-4f90-4165-944f-64a1e8380610.png)

在匹配模态中（只需点击查询即可运行）：

![image](https://user-images.githubusercontent.com/70717676/138410277-b3b0ebb0-15f0-45a2-ac1e-54578bc68c9b.png)

以及在命令面板中：

![image](https://user-images.githubusercontent.com/70717676/138410368-bc063007-f3a6-4c4c-b7a4-2f24ebcd3748.png)

查询示例

以下是插件用户创建的查询列表：

#### 未完成的任务

```reg
/^- \[ ] .*$/m
```

#### 已完成的任务

```reg
/^- \[x] .*$/m
```

#### 项目符号列表后跟编号列表

```reg
/^- +[\d\w][\.\)] /m
```

匹配以项目符号开头，后跟编号项目符号的情况：

- `- 1. `
- `- 1) `
- `- a. `
- `- a)`

通常同时使用两者是多余的，因此您可以删除其中一个。

#### 不相交的项目符号

```reg
/\n\n>? ?[-\d]+\.?/
```

如果您希望项目符号之间没有额外的空行，请使用此方法查找有问题的项目符号。

```md
- 1
- 2
- 3
```

```reg
/\b.*?\.(?=\s|$)/m
```

选择在单词边界 `\b` 和句号 `\.` 之间的最短字符串。

#### DOIs

```reg
/10\.[^\s]+\/[^\s]*\w/
```

/\b((?:[a-z][\w-]+:(?:/{1,3}|[a-z0-9%])|www\d{0,3}[.]|[a-z0-9.-]+[.][a-z]{2,4}/)(?:[^\s()<>]+|(([^\s()<>]+|(([^\s()<>]+)))))+(?:(([^\s()<>]+|(([^\s()<>]+))))|[^\s`!()[]{};:'".,<>?«»“”‘’]))/

#### 将 DEVONthink 链接复制到剪贴板

```reg
/\[Line\s\d{1,2}\]\(x-devonthink-item:\/\/\w{8}-\w{4}-\w{4}-\w{4}-\w{12}\?line=\d{1,2}\)/
```

- 查找笔记中的所有 DT 链接并将其复制到剪贴板；
- 删除 `\(x-devonthink-item:\/\/\w{8}-\w{4}-\w{4}-\w{4}-\w{12}\?line=\d{1,2}\)`
- 粘贴到笔记的末尾。

#### 捕获所有的亮点

```reg
/==.*?==/
```

#### 捕获特定的 HTML 标签

```reg
/(?<=id="green">).*?(?=\<)/
```

### 导航查询

#### 在标题之间导航

```reg
/^#+.*?$/m
```

#### 在反向链接之间导航（不包括块引用）

```reg
/(?<=\[\[)(?!.*#\^).*(?=\]\])/
```

#### 导航到特定的标签

```reg
/#标签/
```