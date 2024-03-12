---
uid: 20231220115812
title: Obsidian 插件：【Readme】From Template
tags: ['obsidian插件', 'readme']
description: 从模板创建新笔记 - 为每个模板提供一个触发它的命令，以及一个填写模板中任何变量的表单。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】From Template

> [!Note] 插件名片
> - 插件名称：From Template
> - 插件作者：mo-seph
> - 插件说明：从模板创建新笔记 - 为每个模板提供一个触发它的命令，以及一个填写模板中任何变量的表单。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/mo-seph/obsidian-note-from-template)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsidian-notes-from-template)

## 概述

从模板创建新笔记 - 为每个模板提供一个触发它的命令，以及一个填写模板中任何变量的表单。

![From Template](https://cdn.pkmer.cn/covers/obsidian-notes-from-template.gif)

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/mo-seph/obsidian-note-from-template/master/README.md)

---

## Readme(翻译）

下面是 [[obsidian-notes-from-template]] 插件的自述翻译

# 模板笔记

该插件添加了基于模板文件创建笔记的命令。它将遍历设置中的 `templates` 目录中的每个文件，并为每个文件创建一个名为 'From Template: <X>' 的命令。每个命令将根据给定的模板创建一个笔记，并使用弹出窗口请求模板中的每个变量的值，该模板使用 [Mustache](https://github.com/janl/mustache.js) 语法。

![模板演示](https://cdn.pkmer.cn/covers/obsidian-notes-from-template_1_0.gif)

Obsidian 论坛上的讨论帖子：<https://forum.obsidian.md/t/plugin-create-notes-from-templates/23452>

# 快速入门

一个示例模板文件可能是：

```
---
template-output: People
tags: person, {{tags}}
template-replacement: "[[{{title}}]] ![[{{title}}#^overview]]"
template-input: title, overview, body
template-should-replace: "sometimes"
template-should-create: "open-pane"
---

# {{标题}}

{{概述：区域}}
^概述

组织：{{组织}}

{{正文}}
```

这将会：

- 弹出一个窗口，要求输入一个笔记标题、一个概述（在文本框中）、一个组织（文本字段）和一些标签。
- 如果编辑器中的选择是“Joe Blogs - Weissman Heiss 的经理 -（很多细节）”，则弹出窗口将以 Joe Blogs 作为标题，“Weissman Heiss 的经理”作为概述，并在正文字段中填入很多细节。
- 基于 People 目录中的模板创建一个笔记。
- 用替换字符串替换选择的文本 - 在这种情况下，是一个指向该笔记的链接，并且概述段落的引用。如果没有选择文本，则不会将任何内容放入文档中。
- 在新窗口中打开新的笔记

```

# 详情

## YAML 标签
模板可以包含 YAML 标签，这些标签将与模板的其余部分一样被填充。因此，以下内容将按预期工作：
```

---
organsiation: "{{organisation}}"
---

{{name}} works at {{organisation}}

```

为了符合 YAML 的规范，值不能以 `{` 开头，否则它们将被视为字典。因此，请确保在前置元数据中使用 `organisation: "{{org}}"` 而不是 `organisation: {{org}}`。

## 来自模板YAML标签

| 名称 | 值 | 默认值 |
| ---- | ----- | ------- |
| template-id | 模板的唯一ID | 基本名称的小写版本 |
| template-name | 命令的名称 | 文件的基本名称 |
| template-output | 保存输出的目录 | 测试 |
| template-filename | 创建笔记的文件名。将添加`.md`。注意：如果您设置了不同的文件名，请确保在`template-replacement`字符串中使用`{{filename}}`以便链接到该文件。 | `{{title}}` |
| template-replacement | 用于替换编辑器中所选文本的Mustache模板。可以传递一个列表，它将显示为创建者中的按钮。 | `{{[[title]]}}` |
| template-input | 如果使用某些选定的文本调用命令，则使用插件的拆分模式将其拆分并将值放入这些字段中 | title,body |
| template-should-replace | 模板是否应将文本写回文档？"always"，"sometimes" = 仅在选择文本时，"never"=从不 | "sometimes" |
| template-should-create | 模板是否应创建并打开一个笔记？"none"=不创建笔记，"create"=创建但不打开，"open"=创建并在当前编辑器中打开，"open-pane"=创建并在新窗格中打开 | "create" |

### 示例
- 使用复杂的文件名创建一个新的笔记，然后通过概述的引用插入标题：
``` 

template-filename: "{{title}} - autocreated"

template-replacement: "{{title}} - ![[{{filename#^overview}}]]"

```
- 模板将始终将结果放回当前文档：
```

template-should-create: "none"

template-should-replace: "always"

template-replacement: "{{templateResult}}"

```

## 字段类型
| 类型 | 参数 | 描述 | 示例 |
| ---- | ----- | ------- | ---- |
| text | 无 | 文本输入字段 - 默认类型 |  {{name}}, {{country:text}}, {{country:text:Belgium}} |
| area | 无 | 文本区域 - 如果字段名为 'body' 则为默认类型 | {{description:area}}, {{body}} |
| currentDate | 格式 | 当前日期，使用 Luxon 格式 (https://moment.github.io/luxon/#/formatting) (不应在新项目中使用 Moment.js，dayjs 与构建系统不兼容) | {{now:currentdate:dd-MM-yyyy}} |

## 非字段标签
（实验性的，在开发中）
| 字段 | 描述 | 用法示例 |
| ----- | ----------- | ----- |
| currentTitle | 模板触发时活动笔记的标题 | `parent: [[{currentTitle}]]` 在前置元数据中创建层次结构 |
| currentPath | 模板触发时活动笔记的路径 |

## 快捷键
定义了一些快捷键：
- Mod + enter：提交模板
- Mod + (1-9)：跳转到字段
- Ctrl + (1-9)：选择替换字符串 N

# 开发
非常愿意合作 - 给我留言或提交PR

## 更新日志

### 0.1.11
- 为模态框添加了CSS类以进行样式设置
- 添加了`multi`字段类型，允许多选和切换
- 添加了字段描述：`{fieldname:text:default:description}`或`{fieldname:area:description}`

### 0.1.7 
- 添加了`currentdate`字段类型，例如`{{now:currentdate:dd-MM-yyyy}}`
- 添加了`currentPath`和`currentTitle`字段名称，例如`[[{{currentTitle}}]]`以链接回当前笔记

### 0.1.6 
- 模板现在可以动态加载，不再需要重新启动！（还有：更改了模板文件夹选择为下拉菜单，添加了重新索引的命令）
- 添加了一个选择类型，例如 `{{suit:choice:hearts:spades:diamonds:clubs}}`
- 注意，文件名现在是从模板字符串生成的，可以在配置中或模板中的 `template-filename` 中设置。默认为 `{{title}}`，但所有模板字段都可用。
- 添加了多个替换文本的可能性 - 如果给出了 `template-replacement` 的数组，则这些都将是模板对话框中的选项
- 进行了许多用户界面调整，修复了 YAML 解析问题

### 0.1.5
大的改变 - 完全重构，新的选项，新的字段，大多数默认设置在设置中，应该对模板的更改更具响应性。



