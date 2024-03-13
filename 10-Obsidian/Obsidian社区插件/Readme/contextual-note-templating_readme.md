---
uid: 2024031219301743
title: Obsidian 插件：【Readme】Contextual note templating
tags: ['obsidian插件', 'readme']
description: Prompts for values and templates to create notes.
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】Contextual note templating

> [!Note] 插件名片
> - 插件名称：Contextual note templating
> - 插件作者：Roman Kubiv
> - 插件说明：Prompts for values and templates to create notes.
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/Balibaloo/obsidian-local-template-configuration)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?contextual-note-templating)

## 概述

Prompts for values and templates to create notes.

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/Balibaloo/obsidian-local-template-configuration/master/README.md)

---

## Readme(翻译）

下面是 [[contextual-note-templating]] 插件的自述翻译

在前置元数据中本地配置笔记模板，并使用提示插入值。

这个 [Obsidian](https://obsidian.md) 插件适合你吗？[如果你应该使用这个插件](#you-should-use-this-plugin-if)

<img src="assets/main.gif" width=800px>

注意：GIF 中的配置使用了旧的 YAML 属性名称。本文档中的所有其他 YAML 都是最新的。

通过运行意图来创建笔记。

# 意图

意图将模板分组，并是此插件中配置的核心单元。

它们代表了创建笔记的不同意图。

例如：" 我打算创建一个会议笔记 "。

任何笔记的 frontmatter 可以保存意图列表。

编辑 frontmatter 的最简单方法是在 Obsidian 设置中启用 [source属性显示模式](https://help.obsidian.md/Editing+and+formatting/Properties#Display+modes)。

示例：简单意图

```yaml
---
intents_to:
- make_a: task ✅
- make_a: meeting 🤝
- make_a: person 🙋‍♂️
---
```

## 运行意图

### 本地意图

`运行本地意图` 命令是运行意图的最简单方式。

<img src="assets/simple.gif" width=800px>

要运行本地意图，您必须选择包含该意图的笔记。

### 选择一个笔记

需要另一个名为“Filtered Opener”的插件来从您的保险库中选择一个笔记。

要选择一个笔记，Filtered Opener 会显示您的保险库中的每个笔记的列表。

Filtered Opener 也可以配置为使用过滤器显示您笔记的子集。

请安装 [Filtered Opener插件](https://github.com/Balibaloo/obsidian-filtered-opener)，因为这是使用此插件所必需的。

选择一个笔记后，您将看到其可供选择的意图列表。

如果一个笔记只有一个意图，那个意图将会被自动选择。

### 全局意图

全局意图是在全局意图笔记中的意图。

全局意图可以在任何其他笔记作为上下文下运行。

上下文笔记用于解析相对路径，并在运行全局意图之前，[导入和合并](#importing-intents) 全局意图，然后运行生成的合并意图。

`运行全局意图` 命令在全局上下文中运行全局意图。

全局上下文是包含全局意图的笔记。

相对于全局上下文的路径将相对于您的存储库的根文件夹解析。

当配置全局意图时，为每个全局意图创建一个名为 `创建本地{{intent_name}}笔记` 的命令。

此命令允许您在本地上下文中运行全局意图。

配置全局意图

通过在插件设置中设置全局意图注释路径来配置全局意图注释。

必须使用“重新加载全局意图”命令重新加载此注释，以使更改生效。

# 模板

意图可以有许多笔记模板。

一个笔记模板包含一个指向笔记的路径。

新笔记将包含此模板笔记的内容。

<img src="assets/templates.gif" width=800px>

示例：带有模板的意图

```yaml
---
intents_to:
  - make_a: "task ✅"
    with_templates: 
      - called: "default"
        at_path: "Templates/task template.md"
      - called: "graded"
        at_path: "Templates/graded task template.md"
      - called: "worksheet"
        at_path: "Templates/worksheet task template.md"
  - make_a: "meeting 🤝"
    with_templates: 
      - called: "default"
        at_path: "Templates/meeting template.md"
      - called: "project review"
        at_path: "Templates/project review meeting template.md"
      - called: "standup"
        at_path: "Templates/standup meeting template.md"
  - make_a: "person 🙋‍♂️"
    with_templates: 
      - called: "default"
        at_path: "Templates/person template.md"
      - called: "work colleague"
        at_path: "Templates/work colleague person template.md" 
---
```

# 新笔记属性

意图和模板都可以有一个新的笔记路径名和一个变量列表。

模板的新笔记属性会覆盖意图的新笔记属性。

示例：任务意图有 3 个不同模板，具有不同的输出文件夹和笔记名称。

<img src="assets/new-note-properties.gif" width=800px>

新笔记的属性是：

| 属性名称 | 必需 | 默认值 | 描述 |
| ---- | ---- | ---- | ---- |
| `outputs_to_pathname` | 否 | 与上下文笔记相同文件夹中名为 `new_note_name` 的笔记 | 新笔记的输出位置和名称 |
| `outputs_to_templated_pathname` | 否 | `./{{new_note_name}}` 是上述的模板表示 | 用于 `outputs_to_pathname` 的替代方法，允许 [使用变量值](#using-variable-values)。下面的示例使用 [new_note_name](#new_note_name) 变量来格式化新笔记的名称 |
| `with_variables` | 否 |  | 一个 [变量](#variables) 列表 |
| `is_disabled` | 否 | false | 参见 [禁用意图、模板和变量](#disabling-intents-templates-and-variables) |

示例：

- 一个 `outputs_to_templated_pathname` 的任务意图。
- 一个带有额外 `date_released` 变量和自定义输出路径名的“评分任务”模板。
- 一个带有额外 `worksheet_number` 变量和自定义输出路径名的“工作表任务”模板。

```yaml
---
intents_to:
  - make_a: task ✅
    outputs_to_templated_pathname: ./✔ tasks/✅ {{new_note_name}}
    with_variables:
      - called: deadline
        of_type: natural_date
    with_templates:
      - called: default ✅
        at_path: Templates/task template.md
      - called: graded 🎓
        at_path: Templates/graded task template.md
        outputs_to_templated_pathname: ./✔ tasks/🎓 {{new_note_name}}
        with_variables:
          - called: date_released
            of_type: natural_date
          - called: percent
      - called: worksheet 📃
        at_path: Templates/worksheet task template.md
        outputs_to_templated_pathname: "./📃 worksheets/📃 Worksheet #{{worksheet_number}} - {{new_note_name}}"
        with_variables:
          - called: worksheet_number
            of_type: number
            is_over: 1
---
```

# 变量

有多种类型的变量，但所有变量都包含一组共同的属性：

| 属性名称 | 必需 | 默认值 | 描述 |
| ---- | ---- | ---- | ---- |
| `called` | 是 |  | 变量的名称，在将值插入模板时使用。参见 [使用变量值](#using-variable-values)。<br>为了演示目的，此属性使用小写字母和下划线代替空格，但可以包含任何字符，例如表情符号。 |
| `of_type` | 否 | [text](#text) | 变量的类型。参见 [变量类型](#variable-types)。 |
| `is_required` | 否 | false | 如果为 `true`，当输入无效值时，笔记创建过程将停止，并显示错误消息。 |
| `that_prompts` | 否 |  | 提示时显示的文本。 |
| `described_as` | 否 |  | 在提示下方显示的文本。 |
| `is_initially` | 否 |  | 最初在提示中显示的值。 |
| `uses_selection` | 否 | false | 参见 [使用选择预填提示](#prepopulating-prompts-using-selection)。 |
| `replaces_selection_with_templated` | 否 | \[\[{{[new_note_name](#new_note_name)}}\]\] | 如果启用 `uses_selection`，则替换选择的模板文本 |
| `hinted_as` | 否 |  | 当提示为空时显示的值。 |
| `is_disabled` | 否 | false | 参见 [禁用意图、模板和变量](#disabling-intents-templates-and-variables) |

有多种使用变量值的方法。参见 [使用变量值](#using-variable-values)。

## 变量类型

每种类型的变量都有自己的参数和验证。

### 文本

一个简单的文本提示。

文本是默认的变量类型。

| 属性名称 | 必需 | 默认值 | 描述 |
| ---- | ---- | ---- | ---- |
| `matches_regex`| 否| |用于验证文本的正则表达式

示例:

```yaml
---
with_variables:
  - called: word_starting_with_auto
    of_type: text
    matches_regex: ^auto
---
```

### 数字

一个简单的数字提示。

任何数字，包括整数和浮点数。

| 属性名称 | 必需 | 默认值 | 描述 |
| ---- | ---- | ---- | ---- |
|`is_over`| 否|| 允许的最小值|
|`is_under`| 否|| 允许的最大值|

示例:

```yaml
---
with_variables:
  - called: a_number
    of_type: number
    is_over: -10.8
    is_under: 11.22
---
```

### 自然日期

由 [natural language dates](https://github.com/argenos/nldates-obsidian) 插件提供的自然日期。

| 属性名称 | 必需 | 默认值 | 描述 |
| ---- | ---- | ---- | ---- |
|`is_after` | 否 | | 日期必须在此日期之后。自然语言日期 |
|`is_before` | 否 | | 日期必须在此日期之前。自然语言日期 |

示例:

```yaml
---
with_variables:
  - called: some_date
    of_type: natural_date
    is_after: yesterday # 今天或之后
    is_before: next year
---
```

### 注意

从笔记列表中选择的笔记的路径。 使用与 [选择笔记](#selecting-a-note) 时相同的 Filtered Opener 插件。

Filtered Opener 插件使用过滤器集的名称（`note_filter_set_name`）来显示可选择的笔记列表。

| 属性名称 | 必需 | 默认值 | 描述 |
| ---- | ---- | ---- | ---- |
|`folder_filter_set_name`| 否| 允许所有笔记| 笔记过滤器集的名称。|

示例：

```yaml
---
with_variables:
  - called: some_note
    of_type: note
    note_filter_set_name: maps of content
---
```

### 文件夹

从文件夹列表中选择的文件夹的路径。使用与 [选择笔记](#selecting-a-note) 时相同的 Filtered Opener 插件。

Filtered Opener 插件使用过滤器集的名称（`folder_filter_set_name`）来显示可选择的文件夹列表。

| 属性名称 | 必需 | 默认值 | 描述 |
| ---- | ---- | ---- | ---- |
|`in_folder`| 否| Vault 根文件夹 |要从中开始搜索的文件夹，默认为 vault 文件夹。|
|`at_depth`| 否| Filtered Opener 中配置的深度  |要包括的文件夹深度，对于文件夹结构为 `root/inner/leaf`，深度为 2 将显示直到 `leaf` 级别的笔记。|
|`includes_roots`|否| `false` | 当为 `false` 时，仅显示指定深度的笔记。当为 `true` 时，显示所有级别直到指定深度的笔记。|
|`folder_filter_set_name`| 否 |允许所有文件夹 | 文件夹过滤器集的名称。|

示例:

```yaml
---
with_variables:
  - called: a_project_folder
    of_type: folder
    in_folder: "/🏗 projects"
    at_depth: 1
    includes_roots: false
    folder_filter_set_name: default
---
```

## 使用变量值

当使用变量时，格式为 `{{variable_name}}` 的文本将被替换为变量的值。

如果名为 `variable_name` 的变量不在当前意图中，则 `{{variable_name}}` 文本将不会被更改。

在创建新笔记时，[模板](#templates) 中的变量也会在创建新文件之前被替换。

如果您已经熟悉 [Templater](https://github.com/SilentVoid13/Templater) 插件，它将在此插件的变量被替换后运行其模板化。

## 高级变量使用

### new_note_name

这是一个 [text](#text) 变量，会自动添加到每个意图中。

它保存了新笔记的名称，并可以在 `outputs_to_templated_pathname` 中使用其他文本，包括其他变量，来添加到新笔记的名称中。

请参阅 [new note properties](#new-note-properties)

它也可以与 [folder](#folder) 变量一起使用，选择新笔记的输出文件夹，例如 [创建一个项目](#project)

如果一个意图 [禁用](#disabling-intents-templates-and-variables)`new_note_name` 并且没有设置 `outputs_to_pathname`，那么新笔记的名称默认将是意图的名称，并且将在上下文笔记所在的相同文件夹中创建。

### 禁用意图、模板和变量

通过将 `is_disabled` 设置为 `true`，可以禁用意图、模板和变量。

- 禁用的意图和模板将被忽略，在需要选择时不会显示。
- 禁用的变量将被忽略，其提示不会显示，并且在 [使用变量值](#using-variable-values) 时不会被替换。

禁用的项目仍然会被 [导入](#importing-intents)，并且可以通过将它们的 `is_disabled` 属性设置为 `false` 来取消隐藏。

### 使用选择预填充提示

运行意图时，可以使用所选文本来预填充变量的提示。

所选内容将使用插件设置中配置的分隔符进行拆分，然后按照它们在变量列表中出现的顺序分配给变量。

要为变量启用此功能，请将 `uses_selection` 设置为 `true`。

如果从选择中为变量分配了有效值，则该值将被接受，并且变量提示将被跳过。

如果值无效，则提示将显示为预填充的选择值。

# 导入意图

Notes 可以使用 `intents_imported_from` 属性从其他笔记中导入意图。

`intents_imported_from` 属性接受任意数量的配置笔记路径。

示例：导入单个笔记

```yaml
---
intents_imported_from: "some/configuration note.md"
---
```

示例：导入一组笔记

```yaml
---
intents_imported_from: ["some/configuration note.md", "other/configuration note.md" ]
---
```

导入笔记的意图首先被加载，然后与本地意图合并。

**如果导入的意图与本地意图具有相同的名称，则导入的意图属性将被本地意图属性覆盖。**

覆盖导入意图的属性是有用的：

- 添加本地意图
- 添加本地模板
  - 使用相对本地路径覆盖路径
- 启用和 [禁用意图、模板和变量](#disabling-intents-templates-and-variables)
- 向意图和模板添加变量

# 如果您满足以下条件，您应该使用此插件

- 您使用模板来创建笔记
- 您希望将变量插入您的模板中，并使用提示来捕获它们的值
- 您希望按意图对模板进行分组
	- 例如：一个任务，一个会议，...
- 您的一些意图具有多个模板
	- 一个普通任务，一个评分任务，一个研究任务
	- 每日站立会议，项目跟进会议，与同事交流
- 您希望在本地扩展/覆盖您的意图和模板以
	- 使用模板的本地版本
	- 向意图/模板添加变量
	- 添加更多意图/模板
	- ...

## 附加功能

- 使用选定的文本预填充变量提示
	- [ ] (WIP) 选择多行以创建多个注释
  - 用模板化文本替换选择内容
- 支持多种变量类型，如文本、数字
	- 以及其他类型的变量提供者，例如：自然日期、注释、文件夹
- 导入其他配置注释

## 具有重叠功能的其他插件

与上下文注释模板（CNT）功能相比：

- [Note from template](https://github.com/mo-seph/obsidian-note-from-template)：这两个插件都显示提示，并使用选择内容预填充可以插入到许多笔记属性中的字段，例如输出文件夹、名称、笔记标题和正文。
  - 主要区别在于 CNT 一次显示一个字段，并扩展了单个字段的功能。
  - CNT 将字段扩展为 [Variables](#variables)。
    - 每个变量都有自己可配置的提示，其类型添加了验证和后处理。
- [Hotkeys for templates](https://github.com/Vinzent03/obsidian-hotkeys-for-templates)：
  - 该插件不是为每个模板创建热键（命令），而是为每个 [Intent](#intents) 创建命令。
<!-- 我不理解[Metatemplates](https://github.com/avirut/obsidian-metatemplates)的作用 -->

Examples

## 最简单的可运行意图

```yaml
---
intents_to:
  - make_a: task
---
```

## 在文件夹中创建

在名为 `tasks` 的文件夹中创建一个空笔记，与上下文笔记相邻。

```yaml
---
intents_to:
  - make_a: task
    outputs_to_templated_pathname: "./tasks/{{new_note_name}}"
---
```

在存储库根目录中名为 `vault tasks` 的文件夹中创建一个空笔记。

```yaml
---
intents_to:
  - make_a: task
    outputs_to_templated_pathname: "/vault tasks/{{new_note_name}}"
---
```

选择一个文件夹，并在该文件夹中创建一个独立的文件夹中的任务。

```yaml
---
intents_to:
  - make_a: task
    with_variables:
      - called: output_folder
        is_required: true
        of_type: folder
        in_folder: ✅ tasks
        at_depth: 1
        includes_roots: false
        folder_filter_set_name: default
    outputs_to_templated_pathname: "{{output_folder}}/{{new_note_name}}/{{new_note_name}}"
---
```

## 添加模板

添加一个简单的模板。

```yaml
---
intents_to:
  - make_a: task
    with_templates:
      - called: simple task
        at_path: "/path /to /templates folder /simple task template.md"
---
```

在上下文注释旁边使用模板。

```yaml
---
intents_to:
  - make_a: task
    with_templates:
      - called: simple task
        at_path: "./simple task template.md"
---
```

```yaml
---
意图为：
  - 创建一个：项目
    带有变量：
      - 名称为：new_note_name
        禁用：true
      - 名称为：new_project_name
    输出到模板路径名："./{{new_project_name}}/🏗 {{new_project_name}}"
    使用模板：
      - 名称为：default
        在路径："/path /to /templates /project template.md"
---
```

```yaml
---
意图为：
  - 创建一个：任务
    输出到模板路径名："./tasks/{{new_project_name}}-{{new_note_name}}"
    使用模板：
      - 名称为：simple task
        在路径："./simple task template.md"
---
```

# {{new_note_name}} 项目的注意事项

项目笔记模板的内容！

```
## 项目
这个意图创建一个项目笔记，其中包含项目名称的意图名称，在类别文件夹中创建自己的文件夹。

在这种情况下，`🏗 项目` 文件夹包含对项目进行分类的子文件夹。
这个意图禁用了 `new_note_name`，并用 `new_project_name` 变量替换它，以便它不会在项目笔记中替换 `new_note_name`。
```yaml
---
intents_to:
  - make_a: project
    with_variables:
      - called: new_note_name
        is_disabled: true
      - called: new_project_name
      - called: output_folder
        is_required: true
        of_type: folder
        in_folder: 🏗 项目
        at_depth: 1
        includes_roots: false
    outputs_to_templated_pathname: "{{output_folder}}/{{new_project_name}}/🏗 {{new_project_name}}"
    with_templates:
      - called: default
        at_path: "/路径 /到 /模板 /项目模板.md"
---
```

因为 `new_note_name` 被禁用了，它不会被替换，但 `new_project_name` 会被替换。

项目笔记模板:

```yaml
---
intents_to:
  - make_a: task
    outputs_to_templated_pathname: "./tasks/{{new_project_name}}-{{new_note_name}}"
    with_templates:
      - called: simple task
        at_path: "./简单任务模板.md"
---
# {{new_project_name}} 项目的注意事项！
# 归属
该存储库使用了以下项目的代码：
- https://github.com/chhoumann/quickadd

代码贡献者也在代码上方的注释中标明。



