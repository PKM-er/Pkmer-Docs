---
uid: 20240508220235
title: Obsidian 达人成长之路_1：使用终极工具 Dataview 释放笔记库的潜力 · DQL 查询语言
tags: [Obsidian, Dataview]
description: 使用终极工具 Dataview 释放笔记库的潜力 · DQL 查询语言
author: jenemy
type: other
draft: false
editable: false
modified: 20240508235724
---

# Obsidian 达人成长之路 1使用终极工具 Dataview 释放笔记库的潜力 · DQL 查询语言

️DataView 是 Obsidian 社区中的热门插件，它为用户提供了一个强大的实时索引和查询引擎。通过在文档中设置属性（或称为元数据），DataView 能够检索并处理这些数据。借助 DataView，用户可以轻松列出、筛选、排序和分组数据，这与使用数据库查询语言类似。

在 Obsidian 中，我们使用“属性”来描述文档中由官方或第三方插件提供的描述变量，这些变量也被称为“元数据”。在 DataView 的语境下，虽然名称有所差异，但它们实际上指的是同一实体。为了保持一致性，后续文章中我们将统一使用“属性”来描述这些变量。

考虑到不同读者拥有的 Obsidian 文档数量和内容的多样性，文章中将主要以当前文档的数据作为示例，展示 Dataview 的使用案例。为了避免过于复杂和需要额外构造数据的用例，我们将尽量基于实际文档数据进行演示。在文章中，我们将使用“文档”一词特指 Obsidian 中的笔记，即具有 `.md` 后缀的 Markdown 文档，而非其他类型的文件。这样的定义旨在明确文章的语境和对象，方便读者理解和跟随。

文章中复杂的示例我们将以 [Dataview Example Vault](https://s-blu.github.io/obsidian_dataview_example_vault/) 这个开源示例库为数据源进行演示，读者可自行去 Github 上克隆到本地进行操作。

本文基于 [[dataview]] 0.5.66 版本撰写，如果发现文章与官方内容有所出入，请以官方最新文档为参考。

## 快速入门

为了更顺畅地使用 DataView 插件，你可以直接在 Obsidian 的官方插件商店中搜索“DataView”并安装它。安装完成后，请按照以下步骤进行配置：

1. 打开 DataView 的插件设置选项。
2. 启用【Enable JavaScript Queries】和【Enable Inline JavaScript Queries】选项，以允许在 DataView 中使用 JavaScript 查询。
3. 将【Date Format】选项设置为 `yyyy-MM-dd`，这将确保日期以“年 - 月 - 日”的格式显示，更符合我们的使用习惯。
4. 同时，将【Date + Time Format】选项设置为 `yyyy-MM-dd HH:MM:ss`，以便在需要同时显示日期和时间时，按照“年 - 月 - 日 时: 分: 秒”的格式呈现。

完成这些设置后，你就可以开始使用 DataView 插件来索引、查询和整理你的 Obsidian 文档了。

接下来，在 Obsidian 中新建一个文档然为其添加一个标签属性。在 Obsidian 中，可以使用快捷键 `CMD+;`（在 macOS 上）或 `CTRL+;`（在 Windows/Linux 上）来触发属性编辑面板。这个面板允许你为文档添加、编辑或删除属性。

下面是当前文档的属性值，以 YAML 展示：

```yaml
---
tags:
  - Blog
  - Obsidian
  - Dataview
---
```

要在 Obsidian 中使用 DataView 查询语言（DQL）来读取当前文档（或选定文档）的标签属性并以列表形式显示，我们需要编写一个 DataView 查询，下面我们编写的第一个查询示例：

````
```dataview
LIST tags
WHERE file = this.file
```
````

结果：

![](https://cdn.pkmer.cn/images/202405082208235.png!pkmer)

**注意**：这里我们遵循官方的写法，将查询语法的关键词以大写方式表示。

对于大多数日常任务，Dataview 查询语言已足够应对。然而，当需要执行复杂的逻辑和数据操作时，Dataview 的 JavaScript API 便派上了用场。借助这一 API，我们可以充分利用编程语言的强大功能以及 Dataview 提供的丰富函数，不仅可以自由定义输出的格式和内容，还能加载外部脚本和样式，极大地提升了查询的灵活性和扩展性。

这是上一个示例采用 JavaScript API 实现的重写：

````
```dataviewjs
dv.list(dv.pages("").file.tags.distinct())
```
````

结果：

![](https://cdn.pkmer.cn/images/202405082208236.png!pkmer)

## YAML 简介

在 Obsidian 中，YAML 是一种用于配置文件和元数据的标记语言。YAML 语法简洁明了，易于阅读和编写，使得在 Obsidian 中描述属性变得更为便捷。

在 Obsidian 中，YAML 通常用于为笔记添加元数据，如标题、标签、别名等。这些元数据可以帮助你更好地组织和管理笔记。具体来说，YAML 在 Obsidian 中的使用方式如下：

在笔记的开头使用三个短横线（`---`）来定义一个 YAML 区域，也称之为 Front Matter。在这个区域内，你可以使用 YAML 语法为笔记添加各种元数据，例如，使用 `tags` 来添加标签，使用 `aliases` 来设置别名，使用 `cssclasses` 来设置文档样式等。

```yaml
---
title: Obsidian 达人成长之路 #1：使用终极工具 Dataview 释放笔记库的潜力 · DQL查询语言
date: 2024-05-08
tags: ['Blog', 'Obsidian', 'Dataview']
alias: 别名
---

主体内容
```

### 基本语法

在 YAML 语言中变量名是区分大小写的，因此 `one` 与 `One` 是不同的实体。

使用 `#` 来表示注释。

使用缩进来表示层级关系，并且只能使用空格来缩进，同一层级在空格数量上需要保持一致。

一个文件中是可以包含多个 `---` 区域的。

```yaml
# 这是注释
one:
    two: 2
    three:
    four: 4
    five: 5

// JSON
{
    "one": {
        "two": 2,
        "three": {
            "four": 4,
            "five": 5
        }
    }
}
```

### 数据结构与类型

YAML 支持数字、布尔、字符串、数组和对象这几种常见类型，以及空值和时间缀。

#### 字符串

字符串一般不需要用引号（不区分单/双引号，但必须成对）包裹，但是如果字符串中包含转义字符（以反斜杠 `\` 开头，如换行：`\n`）就必须引号包裹。

字符串分为单行和多行文本，在多行文本中还可能包含空白行（是否保留？），因此会有不同的语法扶持。

```yaml
strings:
    - Hello Dataview
    - 'Hello Dataview with single quotes'
    - "Hello Dataview with double quotes"
    - "Include Unicode. \u263A"
    - "Include Hex code. \r\n"
    - 'Nested "quotes"'

// JSON:
{
    "strings": [
        "Hello Dataview",
        "Hello Dataview with single quotes",
        "Hello Dataview with double quotes",
        "Include Unicode. ☺",
        "Include Hex code. \r\n",
        "Nested \"quotes\""
    ]
}
```

使用 `|` 来保留数据的换行，每行的缩进和行尾空白都会被去掉，而额外的缩进会被保留。

```yaml
lines: |
    line 1
    line 2

    line 3
        line 4
    line 5
    line 6

// JSON:
{
    "lines": "line 1\nline 2\n\nline 3\n    line 4\nline 5\nline 6\n"
}
```

使用 `>` 来表示折叠换行，只有空白行才识别为换行。

```yaml
lines: >
    line 1
    line 2

    line 3
        line 4
    line 5
    line 6

// JSON:
{
    "lines": "line 1 line 2\nline 3\n    line 4\nline 5 line 6\n"
}
```

#### 布尔值

在 YAML 中我们统一使用 `true` 和 `false` 表示真值与假值，此外 `True` / `TRUE` 同样可以表示真值，同理还有 `False` / `FALSE` 表示假值。

```yaml
boolean:
    - true
    - true
    - TRUE
    - false
    - False
    - FALSE

// JSON:
{
    "boolean": [
        true,
        true,
        true,
        false,
        false,
        false
    ]
}
```

注意在 Obsidian 属性面板中输入布尔值时需要将【属性类型】设置为【复选框】。

#### 数字

数字分为整数、浮点数，表示方法有科学表示法，进制表示法（二进制、八进制、十进制和十六进制）。

```yaml
Integers: [ 0, 0o7, 0x3A, -19 ]
Floats: [0., -0.0, .5, +12e03, -2E+05]

// JSON:
{
    "Integers": [
        0,
        7,
        58,
        -19
    ],
    "Floats": [
        0,
        0,
        0.5,
        12000,
        -200000
    ]
}
```

注意在 Obsidian 属性面板中输入数字时需要将【属性类型】设置为【数字】。

#### 空值

`null`、`Null` 和 `~` 以及不指定值默认都为空。

```yaml
nulls:
    - null
    - Null
    -
    - ~
// JSON:
{
    "nulls": [
        null,
        null,
        null,
        null
    ]
}
```

#### 时间缀

YAML 支持 ISO 8601 格式的时间数据。但是在 Obsidian 中使用时只支持部分格式，建议使用 `xxxx-xx-xx xx:xx:xx` 这种格式来输入日期和时间，或者在属性面板中将【属性类型】设置为【日期】或【日期 & 时间】然后在日期或时间选择器中选择想要的值。

>[Tips] 在 Obsidian 的【选项】中的【编辑器】将【文档属性】显示方式切换为【源码】模式就可以显示属性的 YAML 源码。

```yaml
date1: 2024-04-20T11:32:00.000-04:00
date2: 2017-04-20
date3: 2017-W17-7
date4: 11:32:00.000-04:00
```

#### 数组

YAML 中数组有 2 种语法格式，一种是区块格式（即：`- 属性值`），另一种是内联格式（`[属性值]`）。多维数组则通过缩进来表示层级关系。

```yaml
Inline arrays: ["a", "b", 1, 2]
Block arrays:
    - a
    - b
    - 1
    - 2
Multiple arrays:
    -
        - a
        - b
    -
        - c
        - d

// JSON:
{
    "Inline arrays": [
        "a",
        "b",
        1,
        2
    ],
    "Block arrays": [
        "a",
        "b",
        1,
        2
    ],
    "Multiple arrays": [
        [
            "a",
            "b"
        ],
        [
            "c",
            "d"
        ]
    ]
}
```

#### 对象

对象是以键值对（`key: value`）的形式来表示数据。

```yaml
key: value
key: { key1: value1, key2: value2 }
key:
  key2: value2
  key3: value3

// JSON:
{
    "key": "value",
    "key2": {
        "key1": "value1",
        "key2": "value2"
    },
    "key3": {
        "key2": "value2",
        "key3": "value3"
    }
}
```

## 认识属性

Obsidian 官方为属性描述提供了 6 种数据类型：

- 文本（Text）：普通的文本以及文档链接（示例：`link: "[[Link]]"`）文本。
- 列表（List）：包含多个普通文本的数组。
- 数字（Number）：包含整数，小数及负数。
- 布尔值（Checkbox）：要么是 `true` 或者 `false`，空值默认为 `false`。
- 日期（Date）和时间（Time）：以格式 `YYYY-MM[-DDTHH:mm:ss.nnn+ZZ]` 的形式表示，比如：`2024-04-25`。

Dataview 在则在此基础上额外提供了 2 种数据类型持续时间（`Duration` ）和对象（`Object`）。

持续时间的语法为 `<time> <unit>`，例如：`6 hours` 或者 `4 minutes`，下面是更多的表达场景：

```
Example:: 7 hours
Example:: 16days
Example:: 4min
Example:: 6hr7min
Example:: 9 years, 8 months, 4 days, 16 hours, 2 minutes
Example:: 9 yrs 8 min
```

对象就是在一个父字段下多个字段的映射，只能定义在 YAML 中，例如：

```yaml
---
obj:
  key1: "Val"
  key2: 3
  key3: 
    - "List1"
    - "List2"
    - "List3"
---
```

### 内联字段

Dataview 提供了一种内联字段，让我们可以在文档内容中任意位置定义数据。这种内联字段的语法允许你在不干扰文档主要内容的同时，为文档添加额外的元数据或信息。这些内联字段可以被 Dataview 插件识别并用于查询、过滤、排序等操作。

```
Basic Field:: Some random Value
**Bold Field**:: Nice!
带❤变量:: 我是表情+非拉丁字母
I would rate this a [rating:: 9]! It was [mood:: acceptable].

- [ ] Send an mail to David about the deadline [due:: 2022-04-05].

This will not show the (longKeyIDontNeedWhenReading:: key).

基础字段：`= this.basic-field`
加粗字段：`= this.bold-field`
在语句中：Rating: `= this.rating`, Mood: `= this.mood`
在任务列表中：`= this.due`
不显示变量名：`= this.longKeyIDontNeedWhenReading`
非常规变量：`= this.带❤变量`
```

结果：

![](https://cdn.pkmer.cn/images/202405082208237.png!pkmer)

下以是 Dataview 内联字段的一些基本规则和用法：

1. **内联字段的定义**

内联字段可以使用 `字段名:: 字段值` 的形式在文档内容中定义。

1. **独占一行与位于文本内**

如果内联字段是独占一行的，通常不需要加任何包裹字符。但如果内联字段在文本内部，确保它被 Dataview 正确识别，要将其放在方括号 `[]` 中。

1. **变量名的命名规则**

对于变量名，Dataview 允许使用英文、中文或表情符号来命名，建议尽可能使用英文来命名变量和字段。如果变量名使用空格来分隔的（例如：`Foo bar`），在内部会被表示成小写字母 + 连字符的方式（`foo-bar`），当然我们也可以直接使用 `this["Foo bar"]` 的方式来读取，但需要注意的是这里必须使用双引号。

1. **渲染时隐藏变量名**

如果您想在渲染时只显示值而不显示变量名，可以使用圆括号 `()` 包裹整个内联字段。但请注意，这并不会影响 Dataview 的查询功能，只是改变了它在文档中的显示方式。

### 文档中的默认属性

Obsidian 中每个文档都有一系列默认的属性，最常见的就是 `tags`, `aliases` 和 `cssclasses`，分别表示页面的标签、别名和样式类名。此外，还有一些和发布相关的，暂时我们不关注，可自行查阅官方文档。

Dataview 为每个文档自动生成了一个 `file` 的属性，用于访问文件相关的信息。

| 文件属性               | 字段类型           | 属性说明                                                                             |
| :----------------- | :------------- | :------------------------------------------------------------------------------- |
| `file.name`        | Text           | 文件名                                                                              |
| `file.folder`      | Text           | 所在文件夹                                                                            |
| `file.path`        | Text           | 文件路径（包含文件名）                                                                      |
| `file.ext`         | Text           | 扩展名                                                                              |
| `file.link`        | Link           | 文件的链接地址                                                                          |
| `file.size`        | Number         | 文件大小 (bytes)                                                                     |
| `file.ctime`       | Date with Time | 创建时间                                                                             |
| `file.cday`        | Date           | 创建日期                                                                             |
| `file.mtime`       | Date with Time | 最后修改时间                                                                           |
| `file.mday`        | Date           | 最后修改日期                                                                           |
| `file.tags`        | List           | 文档中所有标签的数组。子标签按每个级别细分，因此 `#Tag/1/A` &nbsp; 将存储在数组中，作为 `[#Tag, #Tag/1, #Tag/1/A]`。 |
| `file.etags`       | List           | 同上，但是只存储最终的 `[#Tag/1/A]`                                                         |
| `file.inlinks`     | List           | 反向链接                                                                             |
| `file.outlinks`    | List           | 正向链接                                                                             |
| `file.tasks`       | List           | 文中的任务列表                                                                          |
| `file.lists`       | List           | 文中的列表 (包含任务列表)                                                                   |
| `file.frontmatter` | List           | 文件中的 YAML 块内容                                                                    |
| `file.day`         | Date           | 如果文件名使用日期定义（格式为 `yyyy-mm-dd`&nbsp; 或者 `yyymmdd`），则返回其日期值。                         |
| `file.starred`     | Boolean        | 是否使用核心插件 "Bookmarks"&nbsp; 标记过。                                                   |

示例：

````
```dataview
TABLE file.name AS 文件名, file.ctime AS 创建时间, file.mtime AS 修改时间, file.tags AS 标签
WHERE file = this.file
```
````

结果：

![](https://cdn.pkmer.cn/images/202405082208238.png!pkmer)

结果截图中由于标题中带有 `#` 字符所以在渲染时被当成了标签。

### 任务相关属性

使用 `TASK` 查询类型，我们可以查询所有文档中的任务（又叫待办事项）。下面我们创建几个不同类型的任务，并使用内联属性指定创建日期（`created`），开始日期（`start`），计划日期 （`scheduled`），截止日期（`due`），取消日期（`cancelled`）和完成日期（` completion `）几个属性。

```
- [ ] 任务创建 [created:: 2024-04-25]
- [ ] 任务开始 [start:: 2024-04-26]
- [ ] 任务开始2 [start:: 2024-04-22]
- [x] 任务完成
	- [x] 子任务完成 1 
	- [ ] 子任务未完成 1
	- [x] 子任务完成 2 [completion:: 2024-04-28]
- [x] 任务全部完成
	- [x] 完成 1
	- [x] 完成 2
```

下面我们来查询任务开始日期为 `2024-04-22` 的任务：

````
```dataview
TASK
WHERE start = date("2024-04-22")
```
````

结果：

![](https://cdn.pkmer.cn/images/202405082208239.png!pkmer)

在 Obsidian 的 Dataview 插件中，`completed` 和 `fullyCompleted` 是两个与任务（即使用复选框的待办事项）相关的属性。这两个属性在查询和过滤任务时非常有用，但它们具有不同的含义和用途。

- `completed`

`completed` 属性是一个布尔值（`true` 或 `false`），用于指示任务是否已被标记为完成。如果一个任务项（即一个带有复选框的列表项）被勾选（即标记为完成），则 `completed` 属性将为 `true`；如果未被勾选，则为 `false`。

````
```dataview
TASK
WHERE file = this.file AND completed
```
````

结果：

![](https://cdn.pkmer.cn/images/202405082208240.png!pkmer)

- `fullyCompleted`

`fullyCompleted` 属性也用于指示任务是否完成，但它考虑的是嵌套任务（即嵌套在另一个任务下的子任务）的完成情况。如果一个任务及其所有子任务都已被标记为完成，则 `fullyCompleted` 属性将为 `true`。即使主任务被标记为完成，但如果它有任何子任务尚未完成，`fullyCompleted` 仍将为 `false`。

````
```dataview
TASK
WHERE file = this.file AND fullyCompleted
```
````

结果：

![](https://cdn.pkmer.cn/images/202405082208241.png!pkmer)

下面给出 Dataview 为列表和任务提供的内置属性，更多操作参考后面的综合实例部分。

| 字段名              | 数据类型    | 描述                                                                       |
| :--------------- | :------ | :----------------------------------------------------------------------- |
| `status`         | Text    | 返回完成状态文本（`[]` 中的文本）`" "`&nbsp; 表示未完成，`[x]`&nbsp; 表示已完成，也支持自定状态来替代默认的。       |
| `checked`        | Boolean | 用于判断当前状态是否为空，也就是说 `[]`&nbsp; 中有内容，但不一定是 `x`，也排除 `[ ]`                     |
| `completed`      | Boolean | 判断任务是否完成，不要求所有子任务都完成，如果使用非 `[x]`&nbsp; 来标记完成，例如 `[-]` ，那么不会被包含在结果中。       |
| `fullyCompleted` | Boolean | 同上，但要求所有子任务完成才算完成。                                                       |
| `text`           | Text    | 任务的纯文本，包含属性和批注。                                                          |
| `visual`         | Text    | 由 Dataview&nbsp; 渲染出的任务文本，可以使用 Dataviewjs&nbsp; 来覆盖实现自定义渲染效果，同时保留验证逻辑的正确性。 |
| `line`           | Number  | 任务在文档中所在的行数。                                                             |
| `lineCount`      | Number  | 任务占据的行数，包含子任务的任务会占用多行。                                                   |
| `path`           | Text    | 任务所在的文档路径。                                                               |
| `section`        | Link    | 任务所在章节链接。                                                                |
| `tags`           | List    | 任务中包含的标签。                                                                |
| `outlinks`       | Link    | 任务中定义的任何链接。                                                              |
| `link`           | Link    | 指向任务最近可被链接的区域的链接，对于通过链接指向到当前任务十分有用。                                      |
| `children`       | List    | 当前任务的子任务列表。                                                              |
| `task`           | Boolean | 通过这个属性来判断当前项是否为任务。                                                       |
| `annotated`      | Boolean | 用于判断当前任务项是否包含属性。                                                         |
| `parent`         | Number  | 用于获取子任务的父任务所在行号，如果当前任务为根任务则为空值。                                          |
| `blockId`        | Text    | 如果使用 `^blockId`&nbsp; 语法定义了块 ID，则返回其对应的任务或者列表。                             |

### Tasks 插件提供的属性

[obsidian-tasks](https://github.com/obsidian-tasks-group/obsidian-tasks) 是一个流行的 Obsidian 插件，用于增强 Obsidian 中的任务管理功能。后续文章会专门探讨，现在我们只需要关注它提供的任务分类状态表情速记符（emoji-shorthands），让我们不用自己来使用内联属性定义任务状态，它直接开箱即用提供了以下几种速记语法：

| 属性名       | 速记语法       | 解释     |
|:------------ |:-------------- |:-------- |
| `due`        | `🗓️YYYY-MM-DD` | 截止日期 |
| `completion` | `✅YYYY-MM-DD` | 完成日期 |
| `created`    | `➕YYYY-MM-DD` | 创建日期 |
| `start`      | `🛫YYYY-MM-DD` | 开始日期 |
| `scheduled`  | `⏳YYYY-MM-DD` | 计划日期 |

除此之外，还有优先级等速记符，这里不再展开。

我们下载插件后，使用 【Ctrl/CMD + P】打开命令面板，然后输入命令 `Tasks: Create or edit`，会弹出一个对话框让你输入任务描述，优先级，是否循环等，下面是我创建的 3 个任务：

```
- [ ] 早上跑步 🔁 every day ➕ 2024-04-26 🛫 2024-04-27 📅 2024-04-27
- [x] 早上跑步 🔁 every day ➕ 2024-04-26 🛫 2024-04-26 📅 2024-04-26 ✅ 2024-04-26
- [ ] 看书 ➕ 2024-04-26
- [ ] 上班 ⏫ ➕ 2024-04-26 🛫 2024-04-26 📅 2024-04-26
```

现在我们来查询当前文档中 4 月 26 日完成的任务：

````
```dataview
TASK
WHERE completion = date("2024-04-26") AND file = this.file
```
````

结果：

![](https://cdn.pkmer.cn/images/202405082208242.png!pkmer)

## 数据查询方式

上一章节我们了解了如何使用 YAML 和内联属性来定义属性，现在我们来看一下 Dataview 中如何查询这些属性。

### DQL 查询语言

Dataview 插件为 Obsidian 提供了强大的数据查询和可视化功能。通过使用 Dataview 查询语言（DQL），用户可以创建复杂的查询来检索、处理和展示 Obsidian 笔记库中的信息。DQL 支持四种主要的查询类型：`TABLE`、`LIST`、`TASK` 和 `CALENDAR`，每种类型都有其特定的用途和语法。

#### `TABLE` 类型

`TABLE` 查询类型用于生成表格形式的输出。你可以指定要显示的列和它们的排序方式。

````
```dataview
TABLE WITHOUT ID file.name AS 文件名, file.cday AS 创建时期
WHERE file = this.file
```
````

结果：

![](https://cdn.pkmer.cn/images/202405082208243.png!pkmer)

#### `LIST` 类型

`LIST` 查询类型用于生成列表形式的输出。你可以指定要显示的字段和它们的排序方式。

````
```dataview
LIST WITHOUT ID file.name
WHERE file = this.file
```
````

结果：

![](https://cdn.pkmer.cn/images/202405082208244.png!pkmer)

#### `TASK` 类型

`TASK` 查询类型专门用于检索和展示任务。你可以根据任务的完成状态、截止日期等属性进行筛选和排序。

````
```dataview
TASK
FROM "10 Example Data/dailys"
WHERE "#journal" AND completed
LIMIT 5
```
````

结果：

![](https://cdn.pkmer.cn/images/202405082208245.png!pkmer)

#### `CALENDAR` 类型

`CALENDAR` 查询类型用于生成日历视图，展示具有日期属性（如截止日期或开始日期）的任务或事件。

````
```dataview
CALENDAR file.day
FROM "10 Example Data/dailys"
```
````

结果：

![](https://cdn.pkmer.cn/images/202405082208246.png!pkmer)

### 内联 DQL 查询

这种方式使用内联块格式（而不是代码块）和可配置的前缀来将内联代码块标记为 DQL 块，语法如下：

```
`= <变量名>`
```

>注意：这里的 ` = ` 是可以在 DataView 选项中指定为其它符号的，例如：`dv:` 或者 `~`，但通常我们保持默认。

我们可以在文档中任意位置插入内联 DQL：

```
今天是：`= date(today)` 我还有 < `= [[打造极致体验笔记：Obsidian Meta Bind 插件使用]].file.name` > 计划要去写！
```

结果：

```
今天是：2024-04-26 我还有 <打造极致体验笔记：Obsidian Meta Bind 插件使用> 计划要去写！
```

> 注意：DataView 提供的各种函数我们同样也可以在内联 DQL 中使用，后续会介绍各种函数的使用。

### 使用 Dataview JS 查询

使用 DataView 提供的 JavaScript API 可以实现复杂的功能，结合 `DataView` 和 Obsidian API，你可以实现一些有趣且复杂的功能。

在使用时只需要将代码块的类型设置为 `dataviewjs` 即可：

````
```dataviewjs
let currentFilename = dv.current().file.name
dv.list([currentFilename])
```
````

上面的示例直接将当前文档的文件名作为列表查询结果显示。

### 使用内联 Dataview JS 查询

内联 JavaScript 的写法如下，同样也可以通过选项来更改语法前缀为 `dvjs:` 或 `$~`。

```
`$= dv.current().file.name`
```

下面是一个显示当前任务进度的进度条代码：

```
[任务完成度:: `$= const value = Math.round(((dv.page("Obsidian 达人成长之路 #1：使用终极工具 Dataview 释放笔记库的潜力 · DQL查询语言").file.tasks.where(t => t.completed).length) / (dv.page("Obsidian 达人成长之路 #1：使用终极工具 Dataview 释放笔记库的潜力 · DQL查询语言").file.tasks).length || 0) * 100); "<progress value='" + value + "' max='100'></progress>" + " " + value + "%"`]
```

结果：

![](https://cdn.pkmer.cn/images/202405082208247.png!pkmer)

## DQL 查询语言详解

从现在开始，我们将踏上一段深入探索 Dataview 查询语言（DQL）的旅程。不论你是初次接触 DQL 的小白，还是渴望进一步挖掘其潜力的熟练工，这个旅程都将为你带来丰富的知识和无尽的乐趣。

通过不断的学习和实践，你将逐渐掌握 DQL 的精髓，并能够将其应用到实际的场景中，提高你的工作效率和创造力。让我们一起踏上这段充满挑战和机遇的旅程吧！

### 语法结构

DQL 查询语言的语法定义如下：

````
```dataview
TABLE or LIST or TASK or CALENDER [WITHOUT ID] <field> or <field AS alias>
FROM <source>
WHERE <clause>
SORT field1 [ASCENDING/DESCENDING/ASC/DESC], ..., fieldN [ASC/DESC]
GROUP BY <value> [AS <name>]
LIMIT <value>
FLATTEN <value> [AS <name>]
...
```
````

> **注意**：这个语法定义非官方提供，在文章中仅为了方便描述。除了查询类型和 `FROM` 语句位置固定外，其它语句统称数据命令（Data Command），可以多次使用，位置不固定。

#### 查询类型 `TABLE` / `LIST` / `TASK` / `CALENDAR`

 官方提供了 4 种类型：

- `TABLE`: 以表格方式显示结果。
- `LIST`: 以列表方式显示结果。
- `TASK`: 显示满足过滤条件的交互式任务（对过滤结果的操作状态会同步到原始文档中对应的任务）。
- `CALENDAR`：在日历中对应的日期中标记点。

#### 排除默认值 `WITHOUT ID`

`<WITHOUT ID>` 用于 `LIST` 类型中，表示在查询的结果中不显示文件名或者分组名。

![](https://cdn.pkmer.cn/images/202405082208248.png!pkmer)

`<WITHOUT ID>` 用于 `TABLE` 类型中，表示在查询的结果中不显示第一列链接文件名。

![](https://cdn.pkmer.cn/images/202405082208249.png!pkmer)

如果用于分组后的数据，则不显示分组名。

![](https://cdn.pkmer.cn/images/202405082208250.png!pkmer)

#### `FROM` 语句

`<FROM>` 语句表示查询来源，如果不指定则查询当前 Obsidian 仓库中的所有文档。

如果指定在当前文档中进行查询，可以将 `<FROM>` 来源指定为文档的路径：

````
```dataview
TABLE file.name, file.ctime
FROM "博客/Obsidian/打造极致体验笔记：Obsidian Dataview 插件使用"
```
````

上面我们从指定的**文档**获取数据源，当然也可以指定**目录**，例如：`FROM "博客/Obsidian"`，此外，也可以指定**标签**，再结合运算符来过滤数据源，例如：`FROM #博客 AND "Go"`，结果为博客中 Go 目录下的所有文件。

除了从标签、文档和目录中获取内容外，还可以从 Obsidian 的双向**链接**中获取数据源，这里我们简单的补充一下链接的知识。

在文档中插入的 URL 图片地址，网页 URL 地址，我们称之为**外部链接**。如果在 Obsidian 文档中想要引用其它文档，或者其文档中的标题，部分段落，我们需要创建**内部链接**。在 Obsidian 中我们通常将内部链接称作**双链**或者**双向链接**，然后在 Obsidian 环境中我们使用**链接**（Link）指代内部链接，如果有特殊情况会单独说明。

在文档中创建链接的语法为 `[[文档名称]]`，当我们输入前两个中括号后，Obsidian 界面中会弹出文档选择下拉列表，然后自动插入文档名称和补全后面的两个中括号。一个文档内部可能会引用多个外部文档的链接，同时文档也会被别的文档引用为链接，这样就行成了一个双向的链接。我们将当前文档引入的链接称之为**出链**（Outgoing links），如果有其它文档引用了当前文档，则将其它文档称之为**外链**（Backlinks）。

在引入其它文档内容时我们可以选择指向整个文档，也可以引用文档标题，进一步还可以引用某个段落（块），此外还可以对引用的内容指定别名。下面是 4 种链接引用方式举例，其中 `x` 用来指代任意符合链接规范的文本，在 Obsidian 中输入 `[[` 后全是可视化操作选择，例如在选择文档后，在文档后输入 `|` 会加载文档内容让你选择要引用的段落。

- 链接到文档 (`[[x]]`)：` [[打造极致体验笔记：Obsidian Dataview 插件使用]] `
- 链接到文档中的标题 (`[[x#x]]`)：` [[打造极致体验笔记：Obsidian Dataview 插件使用#` FROM `语句]] `
- 链接到文档中的段落 (`[x#^x]`)：` [[打造极致体验笔记：Obsidian Dataview 插件使用#^065c03]] `
- 链接到文档中的段落并使用别名 (`[x#^x|x]`)：` [[打造极致体验笔记：Obsidian Dataview 插件使用#^065c03|这是别名，会替换原文档名]]`

然后我们来看一下如何查询外链和出链。通常在 `FROM [[x]]` 查询的结果为外链，如果要查询出链则需要调用 `outgoing()` 函数：

````
```dataview
LIST file.name
FROM outgoing([[打造极致体验笔记：Obsidian Dataview 插件使用]])
```
````

#### `WHERE` 语句

`WHERE` 语句用于过滤数据，这里我们再次实现在 `<FROM>` 语句中查询当前文档的操作。

````
```dataview
TABLE file.name, file.ctime
WHERE file = this.file
```
````

#### `SORT` 语句

`SORT` 语句用于对结果进行排序，排序方式有升序 (`ASC` | `ASCENDING`) 和降序（`DESC` | `DESCENDING`）二种方式，如果不指定则默认按升序排序。下面的查询结果以创建时间升序显示。

````
```dataview
TABLE file.name, file.ctime
SORT file.ctime ASC
```
````

#### `GROUP BY` 语句

`GROUP BY` 语句用于对查询的结果进行分组显示，需要注意的是它的用法，如果我们在上面 `SORT` 语句示例中添加按 `file.cday` 分组的话，除了加上 `GROUP BY file.cday` 外，还需要将 `file.name, file.ctime` 修改成 `rows.file.name, rows.file.ctime`，因为我们需要从分组后的结果中获取文档信息，这个匹配的结果存储在属性 `rows` 数组中。这里我们不需要自己来处理索引，如果你想要获取分组结果数组中第 3 项的结果，可以直接这样写 `rows[2].file.name`。

````
```dataview
TABLE WITHOUT ID rows.file.name, rows.file.ctime
SORT file.ctime ASC // 使用分组时，默认会对数据进行排序，这里可以不写。
GROUP BY file.cday
```
````

结果：

![](https://cdn.pkmer.cn/images/202405082208251.png!pkmer)

如果我们相要获取第 3 个分组中第 3 项数据，可以写成 `TABLE WITHOUT ID rows[2].file.name, rows[2].file.ctime`

![](https://cdn.pkmer.cn/images/202405082208252.png!pkmer)

#### `FLATTEN` 语句

`FLATTEN` 语句的作用是展开（扁平）数组，举个例子：`[1, [2, [3, 4], 5]]` 展开后：`[1, 2, 3, 4, 5]`，但是这里并不一定恰当，因为在 DataView 中我们区分查询类型，比如说多级嵌套的任务就比较贴合前面说的展开数组的情况。现在我们就利用前面章节 [[博客/Obsidian/Obsidian 达人成长之路#1：使用终极工具 Dataview 释放笔记库的潜力 · DQL查询语言#任务相关属性]] 中的任务数据来举例。

````
```dataview
TABLE WITHOUT ID T.text as "任务名称"
FLATTEN file.tasks as T
WHERE T.completed AND file = this.file
```
````

结果：

![](https://cdn.pkmer.cn/images/202405082208253.png!pkmer)

> [!note] 
> `FLATTEN` 语句的所有使用都需要结合 `TABLE` 查询类型来输出结果。

现在再来演示另一种使用 `FLATTEN` 的场景，这刚好与 `GROUP BY` 语句结果相反。现在有一个目录 `books` 放置了很多书籍，每一个文档代表一本书，文档中设置 `genres` 属性来作为分类（`Children`, `Romance`, `Magic` 等等），当我们使用 `TABLE genres` 查询时，结果是每个分类占据表格的一行，而默认文档链接会根据分类数量自动合并行，现在想要相同行不合并显示，这时就需要使用 `FLATTEN genres` 来实现。

````
```dataview
TABLE genres
FROM "10 Example Data/books"
FLATTEN genres
```
````

>[!Tip] 数据来源于网络，在【参考】中有给出链接，请自行查阅。

结果：

![](https://cdn.pkmer.cn/images/202405082208254.png!pkmer)

接着上面书籍的案例，现在想要根据阅读页数（`pageRead`）和总页数（`totalPages`）来计算出阅读进度，并且过滤掉进度少于 50% 的书籍，这里我们可以使用 `FLATTEN` 来声明一个新的字段 `progress` 来实现：

````
```dataview
TABLE pagesRead, totalPages, percentage
FROM "10 Example Data/books"
FLATTEN round((pagesRead / totalPages) * 100) AS progress
WHERE progress > 50
FLATTEN progress + "%" AS percentage
```
````

结果：

![](https://cdn.pkmer.cn/images/202405082208255.png!pkmer)

#### `LIMIT` 语句

`LIMIT` 语句的作用很简单，就是限制结果的数量，例如将结果限制为最多 5 个值：`LIMIT 5`。

### 查询类型

因为上一章基体将 DataView 提供的查询类型介绍了一遍，这里就不再细说，只补充部分内容。

1. 对于 `LIST` 和 `TASK ` 类型如果不指定 ` FROM ` 或 ` WHERE ` 条件则获取整个 Obsidian 仓库中所有列表或任务。
2. `LIST` 后面提供额外的信息来自定义输出结果，例如：`LIST "File Path: " + file.folder + " _(created: " + file.cday + ")_"`。
3. 使用 `GROUP BY` 分组后，我们获取分组后的数据需要从 `rows` 属性中读取。
4. `WITHOUT ID` 只适用于 `LIST` 和 `TABLE` 类型。

### 表达式

在 DataView 中除了查询类型和数据命令外，其它数据统称表达式。

如果会 JavaScript 语言，那么对于数字（Number）、布尔值（Boolean）、字符串（String）、数组（Array）和对象（Object）的概念不会感到陌生，DataView 进一步提供了日期和时间（Date）、持续时间（Duration）和链接（Link）三种类型，下面举例说明：

- `1`, `0.5`, `-5` ：数字
- `true`, `false`：布尔值
- `"Lorem ..."`：文本，JavaScript 中为字符串
- `date(2024-04-28)`：日期值
- `dur(1 day)`, `dur(3 minutes)`：持续时间
- `[[Link]]`, `[[Link#xx]]`, `[[Link#^xx]]` `[[Link#xx|xx]]`：链接
- `[1, 2, 3]`：列表，JavaScript 中为数组
- `{a: 1, b: 2, c: [1, 2, 3]}`：对象

在 JavaScript 中不提供函数名称的函数称之为**匿名函数**，比如在函数中返回一个函数：`function foo() {return function() {console.log("Hello Dataview")}}`，在使用数组过滤时我们通常这样写：`arr.filter(function(item) {return item.xx > 0})`，进一步我们可以简写为 `arr.filter(item => item.xx > 0)`，这里的写法称之为**箭头函数**，它与普通函数的区别就不作说明了，对应于 DataView 中称之为 **Lambdas 表达式**，作用是一样的，唯一需要注意的是变量名必需加括号，例如 `(item) => item.xx > 0`。

在 DataView 中读取变量值或者属性值，调用函数语法和 JavaScript 中是一样的，例如通过对象名 + 属性名（`obj.prop`），对象名 + 计算属性（obj[`item_${index}`]），函数调用 （`f(a, b)`）。

对于数字最常见就是四则运算：加（`+`）、减（`-`）、乘（`*`）和除（`/`），然后再加一个除余（`%`）运算，比较运算则为大于（`>`），小于（`<`），等于（` = `，注意在 JavaScript 中是区分 `\==` 和 `\===` 的），不等于（`!= `），大于等于（` >= `）和小于等于（` <= `）。对于文本可使用加号（` + `）来拼接字符，使用 ` 文本 * 数字 ` 可重复文本指定次数，例如：`"a" * 5 ` 结果为：`"aaaaa"`。

最后对于链接的文件中的属性我们直接使用 `[[Link]].value` 读取即可。

#### 日期类型（Dates）

日期类型的值格式需要满足 Data ISO format 规则，我们通常以 `2024-04-29 11:11:23` 或者 `2024/04/29 11:11:23` 的格式来表示日期 + 时间，这更符合国人的习惯。

DataView 提供了一个 `date()` 函数来构造一个日期对象，这个函数有 2 种签名：`date(any)` 和 `date(text, format)`。

##### `date(any)` 使用

需要注意的是传入 ` date() ` 函数的日期是可以不加引号的，例如：` date(2024-04-29) `，对于有具体时间的日期我们不能以：` date(2024-04-29 11:20:20) ` 这种形式传入，正确的姿势是：` date(2024-04-29T11:20:20) `，这里的 ` T ` 为日期分隔符。DataView 为 ` date() ` 函数预定义了很多具有描述性质的常量参数，例如：` date(now) ` 表示当前日期和时间，具体如下：

- `today`：表示当前日期
- `now`：表示当前日期 + 时间
- `tomorrow`：表示明天的日期
- `yesterday`：表示昨天的日期
- `sow` / `eow`：表示当前周的开始日期和结束日期
- `som` / `eom`：表示当前月的开始日期和结束日期
- `soy` / `eoy`：表示当前年份的开始日期和结束日期

> 注：`so` 为 `start of` 的缩写, `eo` 为 `end of` 的缩写。

下面使用内联 DQL 查询来演示：

```
日期:: 2024-04-29
时间:: 2024/04/29 11:01:20
`= this.日期` %% 2024-04-29 %%
`= this.时间` %% 2024/04/29 11:01:20 %%
现在时间：`= date(now)` %% 现在时间：2024-04-29 13:04:05 %%
指定日期1：`= date(2024-04-29)` %% 2024-04-29 %%
指定日期2：`= date("2020-04-18")` %% 2024-04-18 %%
指定日期3：`= date([[2024-04-23]])` %% 2024-04-23 %%
指定时间4：`= date(2024-04-29T11:20:20)` %% 2024-04-29 11:04:20 %%
指定日期5：`= date([[Place|2021-04]])` %% 结果 %%
昨天：`= date(yesterday)`，明天：`= date(tomorrow)` %% 昨天：2024-04-28，明天：2024-04-30 %%
周开始与结束日期：`= date(sow)` / `= date(eow)` %% 周开始与结束日期：2024-04-29 / 2024-05-05 11:05:59 %%
月开始与结束日期：`= date(som)` / `= date(eom)` %% 2024-04-01 / 2024-04-30 11:04:59 %%
年开始与结束日期：`= date(soy)` / `= date(eoy)` %%0 2024-01-01 / 2024-12-31 11:12:59 %%
```

>注：`%% %%` 部分为 Obsidian 中的注释

上面的代码中我们始终以 `xxxx-xx-xx` 或 `xxxx-xx-xxTxx:xx:xx` 的格式传入 `date()` 函数中，这也是**唯一合法的格式**，其它例如：`date(2024/04/29)`, `date(Mon Apr 29 2024 14:45:46 GMT+0800 (中国标准时间))` 以及 `data(1714366864889)` 都是不合法的。如果相要使用这些格式作为输入就需要使用第二种形式了。此外，我们在前面【快速入门】中有提过修改 Obsidian 日期输出的默认格式，如果没有修改可能得到的结果日期为 `MMMM dd, yyyy` 格式，时间为 `h:mm a - MMMM dd, yyy` 格式。

##### `date(text, format)` 使用

`date()` 函数的这种使用方式设计是有点让人产生歧义，初看以为是一种类似日期 `format` 类似的作用，实则不是。它的第 1 个参数必须是文本，不可传入变量，然后第 2 个参数你以为可以使用任何满足 Luxon 时间库格式化的字符，那就理解错了，它真正的作用是为了解决上面我们说的除唯一合法格式以外的输入，请看下面的示例：

```
日期1：`= date("12/31/2022 12:12:12", "MM/dd/yyyy HH:mm:s")` %% 2022-12-31 12:12:12 %%
日期2：`= date("2023/10/12", "yyyy/MM/dd")` %% 2023/10/12 %%
日期3：`= date("210313", "yyMMdd")` %% 2021/03/13 %%
时间缀（毫秒）：`= date("1714366864889", "x")` %% 2024-04-29 01:04:04 %%
时间缀（秒）：`= date("1407287224", "X")` %% 2014-08-06 09:08:04 %%
```

前面说的中国标准时间，暂时作者也不知道怎么来写这个 Format，所以这种格式尽量别用。

>[Tips] 日期格式化有专门的函数 `dateformat(date|datetime, string)` 来处理，后面会讲解。

#### 持续时间类型（Durations）

要表示持续时间类型需要调用 `dur(any)` 函数传入描述字面量，可以描述年、月、日、时、分、秒和周，例如：`dur(1 h)` 根据当前的语言环境会解析成：`1小时`。

- `s` / `sec` / `secs` / `second` / `seconds`：表示 `x秒钟`。
- `m` / `min` / `mins` / `minute` / `minutes`：表示 `x分钟`。
- `h` / `hr` / `hrs` / `hour` / `hours`：表示 `x小时`。
- `d` / `day` / `days`：表示 `x天`。
- `w` / `wk` / `wks` / `week` / `weeks`：表示 `x周`。
- `mo` / `month` / `months`：表示 `x个月`。
- `yr` / `yrs` / `year` / `years`：表示 `x年`。

下面是一些基础示例：

```
年：`= dur(5 yr)` %% 5年 %%
月：`= dur(5 mo)` %% 5个月 %%
日：`= dur(5 d)` %% 5天 %%
小时：`= dur(5 h)` %% 5小时 %%
分钟：`= dur(5 m)` %% 5分钟 %%
秒数：`= dur(5 s)` %% 5秒钟 %%
周：`= dur(3 w)` %% 3周 %%
```

接下来看一下复杂的组合示例，我们会发现 Dataview 会自动推算出合适的表达：

```
100天：`= dur(100 d)` %% 3个月、2周、2天 %%
36个月：`= dur(36 mo)` %% 3年 %%
50周：`= dur(50 w)` %% 1年、2周 %%
160分钟：`= dur(160 m)` %% 2小时、40分钟 %%
1500秒：`= dur(1500 s)` %% 25分钟 %%
100分钟12秒：`= dur(100 m, 12 s)` %% 1小时、40分钟、12秒钟 %%
3年5个月12天：`= dur(3 yr, 5 mo, 12 d)` %% 3年、5个月、1周、5天 %%
```

除了单独使用外，更多的场景是结合 `date()` 函数一起使用：

```
过去5天：`= date(now) - dur(5 d)` %% 2024-04-24 17:04:02 %%
过去2周：`= date(now) - dur(2 w)` %% 2024-04-15 17:04:02 %%
明天：`= date(now) + dur(1 d)` %% 2024-04-30 17:04:02 %%
往后3年：`= date(now) + dur(3 yr)` %% 2027-04-29 17:04:02 %%
十秒前：`= date(now) - dur(10 m)` %% 2024-04-29 16:04:02 %%
```

### 内置函数

DataView 提供了大量的函数来提高处理文档的效率，这里的函数官方文档将其分为：构造函数、数字计算函数、对象，数组和字符串操作函数以及工具（辅助）函数。

#### 构造函数

构造函数用于构建对象的实例，这里的对象可以是普通 JavaScript 中的对象、字符串和数字，也可以是 DataView 中的列表、日期、持续时间和链接等。接下来我们通过实例来辅助理解每个函数，就不再一一列举讲解了。

对于函数 `date(any)`，`date(text, format)` 以及 `dur(any)` 我们在章节【表达式】中有详细介绍，请自行回顾。

下面我们举例来说明 `object(key1, value1, ...)`, `list(value1, value2, ...)`, `number(string)` 和 `string(any)` 的使用，需要注意的是通过内联 DQL 查询后显示结果，对象显示为：`key: key2: key3: value` 的形式，而列表不分是否嵌套统一显示成 `value, value, ...` 的形式。

```
普通对象：`= object("a", 123)` %% a: 123 %%
获取对象的值1：`= object("a", 123).a` %% 123 %%
获取对象的值2：`= extract(object("a", 123), "a")` %% a: 123 %%
嵌套对象：`= object("a", object("b", object("c", 123)))` %% a: b: c: 123 %%

普通列表：`= list(1, 2, 3)` %% 1, 2, 3 %%
嵌套列表：`= list(list(1, 2, 3), list(4, 5, 6))` %% 1, 2, 3, 4, 5, 6 %%
对象列表：`= list(object("a", 1), object("a", 2))` %% a: 1, a: 2 %%

普通数字：`= number(123)` %% 123 %%
负数：`= number(-123)` %% -123 %%
小数：`= number(1.34)` %% 1.34 %%
字符串中包含数字1：`= number("12hhh34")` %% 12 %%
字符串中包含数字2：`= number("hhh34wer123")` %% 34 %%
字符串中包含数字3：`= number("wer123")` %% 123 %%
非数字：`= number("nonnum")` %% - %%

普通字符串：`= string("hello world")` %% hello world %%
数字字符串：`= string(123)` %% 123 %%
日期：`= string(dur(3 h))` %% 3小时 %%
```

上面的示例我们使用内联 DQL 查询，对于一个普通的对象如何在 DQL 显示呢？这里我们需要借助 `FLATTEN` 语句来实现：

````
```dataview
TABLE WITHOUT ID T.name AS 姓名, T.age AS 年龄
FLATTEN object("name", "jenemy", "age", 33) AS T
WHERE file = this.file
```
````

结果：

![](https://cdn.pkmer.cn/images/202405082208256.png!pkmer)

如果是列表对象，写成 `FLATTEN list(object("name", "jenemy", "age", 33), object("name", "lulu", "age", 26)) AS T` 就可以了。

接下来我们来看一下通过 `link(path, [display])` 函数如何来创建链接，有些什么需要注意的点。

假如现在我们的文档目录树如下：

```
|- Obsidian
|  |- 笔记一.md
|  |- 笔记二.md
|  └─ Dataview
|    |- 笔记一.md
|    └─ 笔记二.md
|- 笔记一.md
|- 笔记二.md
└─ 笔记三.md
```

现在我们在 `Obsidian/Dataview/笔记一.md` 中使用 `linK("笔记二")` 引用笔记二。上面的目录我最后一次编辑停留在了最外层的笔记二文档中，当我们点击链接时直接跳到了最外层和笔记二文档。然后我们再次打开同级的笔记二编辑，发现还是跳转最外面的文档二。接下来我们在 Obsidian 这一级目录的笔记一中创建同样的链接，操作后发现还是跳到了最外层的文档二。然后我们最后一次重新创建目录和文档，最后一个创建的文档二不在最外层，再次操作后还是同样的效果，删除最外面的文档后才跳转到同级的文档二。总结一下：**`link()` 函数会从最外层寻找链接的文档，然后才是同级目录下的文档。**

经过上面的实验我们需要注意的是在指定链接时一定要加是路径，如果在文档内引用了多个同名的文档，最好使用别名来标识。下面是一些使用示例：

```
`= link("笔记二)"` %% 根目录下的笔记二 %%
`= link("/笔记二)"` %% 根目录下的笔记二 %%
`= link("./笔记二")` %% 同级目录笔记二 %%
`= link("Obsidian/笔记二")` %% Obsidian 目录下的笔记二 %%
`= link("./笔记二", "别名")` %% 使用别名 %%
```

然后我们再来看一下如何使用 `embed(link, [embed?])` 嵌入图片和 `elink(url, [display])` 创建外部链接。

```
`= embed(link("bg_1.jpg"))` %% 图片位于附件默认存放路径中 %%
`= elink("www.baidu.com")` %% 创建百度外部链接 %%
`= elink("www.google.com", "谷歌搜索")` %% 显示指定的别名，而非地址 %%
```

最后我们来看一下如何判断数据类型,，这里我们使用 `typeof(any)` 函数来判断：

```
`= typeof(12)` %% "number" %%
`= typeof("abc")` %% "string" %%
`= typeof(link("笔记二"))` %% "link" %%
`= typeof(list(1, 3, 4))` %% "array" %%
`= typeof([1, 3, 4])` %% "array" %%
`= typeof(object("a", 1))` %% "object" %%
`= typeof({ a: 1 })` %% "object" %%
`= typeof(date(now))` %% "date" %%
`= typeof(dur(1 d))` %% "duration" %% 
`= typeof(true)` %% "boolean" %%
```

#### 数字运算

对于数字的操作除了前面章节介绍过的四则运算和求余运算外，比较常见的还有求最大值（`max(a, b, ..)`）、最小值（`min(a, b, ..)`）、求和（`sum(array)`）、向上取整（`ceil(number)`）、向下取整（`floor(number)`）、四舍五入（`round(number, [digits])`）、平均值（`average(array)`）以及小数位截断（`trunc(number)`）等。

```
四舍五入：`= round(16.5555)` %% 17 %%
保留2位小数：`= round(16.5555, 2)` %% 16.56 %%
小数点截断：`= trunc(-12.937)` %% -12 %%
向下取整：`= floor(12.937)` %% 12 %%
向上取整：`= ceil(12.937)` %% 13 %%
最小值：`= min(5, 2, 4, 8)` %% 2 %%
最大值：`= max(5, 2, 4, 8)` %% 8 %%
求和：`= sum([1, 2, 3, 5])` %% 11 %%
求平均值：`= average([1, 2, 4, 5])` %% 3 %%
数字数组乘积：`= product([1, 2, 3, 5])` %% 30 %%
累加：`= reduce([1, 3, 5], "+")` %% 9 %%
累除：`= reduce([200, 10, 5], "/")` %% 4 %%
字符重复：`= reduce(["a", 3], "*")` %% aaa %%
```

在使用 `average()` 时如果传入空数组，结果将为 `null`，在页面中渲染为 `-`，如果明确知道有 `null` 值，可以使用 `nonnull(array)` 函数来移除空值再计算：`average(nonnull([null, 1, 3, 5]))`，同样适合于接收数组参数的 `sum()` 和 `product()` 函数。

`minby(array, function)` 和 `maxby(array, function)` 用于根据指定的函数来返回最小值和最大值。

```
最小值：`= minby([1, 3, 5], (v) => v)` %% 1 %%
将正整数按负数进行比较获得的最小值：`= minby([1, 2, 3], (v) => 0 - v)` %% 3 %%
对一组单词返回最长的词汇：`= maxby(["Compute", "the", "maximum", "value"], (v) => length(v))` %% maximum %%
```

#### 对象、数组和字符串操作

这里的函数分为对象操作、数组操作（列表（List）操作其实也是数组操作）和字符串操作以及同时作用于多种类型的函数。对于数组的操作有一定编程经验的读者对于像映射（`map(array, func)`）、过滤（ `filter(array, predicate)`）、合并（`join(array, [delimiter])`）、数组展开（`flat(array, [depth])`）、数组切片（`slice(array, [start, [end]])`）以及排序（`sort(list)`）和逆转（`reverse(list)`）不会陌生，然后这里获取数组长度没有 `length` 属性，需要通过 `length(object|array)` 函数来获取。

下面通过一些实际的例子来理解这些数组函数的用法：

```
`= map(["Ctrl", "Shift", "Alt"], (v) => "<kbd>" + v + "</kbd>")` %% Ctrl, Shift, Alt %%
`= filter([true, false, true, true, false], (v) => !v)` %% false, false %%
`= join(["a", "b", "c"], ",")` %% a,b,c %%
`= flat([1, [2, 3], [4, 5, [6, 7]], 8])` %% 1, 2, 3, 4, 5, 6, 7, 8 %%
`= slice([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 1, 3)` %% 1, 2 %%
`= sort(["foo", "bar", "baz"])` %% bar, baz, foo %%
`= reverse([1, 2, 3, 4, 5])` %% 5, 4, 3, 2, 1 %%
`= length([1, 2, 3])` %% 3 %%
```

对于函数 `flat(array, [depth])`，默认情况下只展开第一级数组（`depth = 1`），下面我们在 DQL 查询中看一下一个 4 层数组 `[1, [2, [3, [4, [5, 6]]]]]` 分别使用默认和 `depth = 3` 的结果：

````
```dataview
TABLE WITHOUT ID T
FLATTEN flat([1, [2, [3, [4, [5, 6]]]]], 1) as T
WHERE file = this.file
```
````

![](https://cdn.pkmer.cn/images/202405082208257.png!pkmer)

需要注意的是 `slice(array, [start, [end]])` 函数所返回的切片数组是不包含 `end` 所在索引的值。`start` 和 `end` 都是可选值，意味着可以不传值就直接返回一新数组，如果是传一个值则返回 `start` 所在位置的索引到数组长度的值，如果 2 个值都传则返回位于 `[start, end)` 前开后闭索引区间的值。如果我们指定的索引值大于数组的长度会抛出异常。最后还可以输入负数作为 `start` 和 `end` 的值，结果取的是负数值加上数组长度后的索引值（如果是负数值我们倒着数索引和加上数组长度是一样的结果）。

`sort(list)` 函数对于数字按从小到大排序，即升序排序，`sort([1, 3, 23, 8, 2])` 结果为 `1, 2, 3, 8, 23`。对于字符串按字母顺序排序，按同一个字母的小写字母，大写字母的顺序排序，如果第一个字母相同则按同样的规则以次排序，`sort(["A", "B", "c", "d", "a", "E"]) ` 结果为：` a, A, B, c, d, E `，而非 `a, c, d, A, B, E`。

下面我们介绍一个重要的函数 `contains(object|list|string, value)` 和其变种，这个函数的作用是用于判断在对象、数组和字符串中是否包含给定的字符（串），对于对象我们关注的是是否包含某个键值，数组则是否包含某个数组项值，字符串则是判断是否包含特定的字符（串）。

```
`= contains(object("a", 1, "b", 2), "a")` %% true %%
当前文件名是否包含日期：`= contains(this.file, "day")` %% false %%
`= contains(list(1, 2, 3), 3)` %% true %%
`= contains([], 3)` %% false %%
`= contains("abcdefg", "bc")` %% true %%
`= contains("abcdefg", "BC")` %% false %%
```

从上面的示例中我们会发现 `contains()` 函数是区分大小写的，如果想要忽略大小写，则可以使用 `icontains(object|list|string, value)` 函数。

> 注：`icontains()` 函数中的字母 `i` 是 Ignore Case 的意思。

下面看一下使用 `contains()` 和 `icontains()` 函数的一个例子：

```
`= contains(["acb", "bcd", "efg", "egk"], "cb")` %% true %%
`= icontains(["abc", "Abc", "ABC", "abC"], "Bc")` %% true %%
```

注意到在数组中只是包含了 `value` 值，但不是相同，因此在需要判断字符串确切相等时，还需要使用另外一个函数：`econtains(object|list|string, value)`，它能够判断是否包含完整的 `value` 值。

继续看下面一个 `icontains()` 函数的例子：

```
`= icontains(["foo", "bar", "baz"], "bA")` %% true %%
```

这个例子中，如果相要在忽略大小写的情况下来判断数组项是否包含某个单词，而不是部分字符时，`icontains()` 函数就显得捉襟见肘了，这便引入了最后一个和 `contains` 相关的函数 `containsword(list|string, value)`，这个函数不作用于对象，因为根据部分字符去获取一个对象的键值没有意义。

```
`= containsword("foo, bar, baz, ba", "bA")` %% true %%
`= containsword(["foo", "bar", "baz", "ba"], "bA")` %% false, false, false, true %%
```

从结果来看，对于字符串返回判断的结果，但是对于列表它会返回列表中每一个列表项是否包含 `value` 值的一个布尔数组。这个结果数组有什么用呢，其实可以进一步使用 `filter()` 函数来过滤为 `true` 的结果，但是这里毫无意义，为什么呢？因为在 **DQL 查询语言中提供的所有数组遍历函数并没有在遍历条件函数中提供数组项的索引值**，我们无法确切知道是数组中第几个值的结果。

上面已经介绍大部分操作函数了，接下来看几个数组项判断的函数，它们的特点是只需要传入数组，然后返回一个布什值，其中 `all(array)` 函数要求数组项目中所有值均为 `true` 的情况下才返回 `true`，`any(array)` 函数只要其中有一个值为 `true` 结果就返回

 `true` 值，最后一个是 `none(array)` 函数，它其实就是 `all()` 函数的结果取反。

这 3 个函数均可传入一个判断函数作为第二个参数来根据条件返回结果，下面是使用示例：

```
`= all(["", 0, null, false])` %% false %%
`= all(1, "a", false)` %% false %%
`= none(["", 0, null, false])` %% true %%
`= any(["", 1, null, false])` %% true %%
`= all([1, 2, 5, 8], (v) => v > 1)` %% false %%
`= any([1, 2, 5, 8], (v) => v % 2 = 0)` %% true %%
`= none([1, 2, 5, 8], (v) => v > 10)` %% true %%
```

>[!Tips] 
>在 JavaScript 中 `null`, `""`, `0` 均代表假值，DQL 查询语言中也使用了同样的规则。

最后还剩下 2 个函数来结束本小节，`nonull(array)` 函数用于将一个包含 `null` 值的数组项移除，并返回一个新的数组。`length(object|array)` 函数用于返回数组的长度，对象的属性数量，因为比较简单就不举例说明了。`extract(object, key1, key2, ...)` 函数用于获取对象的多个值，请参考前面章节中的使用示例。

#### 字符串操作

这一小节很重要，因为我们在使用 DataView 查询数据时需要作各种判断，这里的很多函数会经常被使用到，除了转换成大写（`upper(string)`）和转换成小写（`lower(string)`）函数比较直观简单外其它函数我们单独来讲解。

##### `regextest` / `regexmatch` / `regexreplace` / `replace` 函数

这 4 个函数均使用正则表达式来判断传入的 `string` 是否匹配 `pattern`。`regextest(pattern, string)` 和 `regexmatch(pattern, string)` 两个函数的使用是一样的，只不过判断的规则不一样，前者只需要部分匹配就返回成功，而后者要求完全匹配规则。

```
`= regextest("foo", "foo bar baz")` %% true %%
`= regexmatch("foo", "foo bar baz")` %% false %%
```

下面举一个实际的例子，在 [LifeOS for Obsidian (obsidian-life-os.netlify.app)](https://obsidian-life-os.netlify.app/zh/index.html) 的示例项目中返回所有未完成的任务时过滤掉目录 Templates 中的模板文件（Daily.md, Monthly.md, Quarterly.md, Weekly.md 和 Yearly.md）中的任务并按文件链接地址分组。

````
```dataview
TASK
WHERE !regextest("Templates", file.folder) AND !completed
GROUP BY file.link
```
````

上面例子中不能使用 `regexmatch()` 函数，因为 `file.folder` 的值是包含路径的，如果使用它就只是匹配了 `Templates` 这个字符串，达不到预期的结果。

`regexreplace(string, pattern, replacement)` 函数用于正则替换字符串，例如将日期格式 `2024-05-02` 替换成 `05/02/2024`，它同样支持像 JavaScript 的 `replace()` 函数中那样在 `replacement` 中使用 `$1` 来匹配捕获的第一个分组，然后依次类推。

```
`= regexreplace("2024-05-02", "(\d{4})-(\d{2})-(\d{2})", "$2/$3/$1")` %% 05/02/2024 %%
```

`replace(string, pattern, replacement)` 函数虽然函数签名同 `regexreplace()` 函数，但是只能用于普通的广西替换，下面是一个对比的例子：

```
`= regexreplace("从 2024-05-02 至 2024-05-03", "(\d{4})-(\d{2})-(\d{2})", "$2/$3/$1")` %% 从 05/02/2024 至 05/03/2024 %%
`= replace("从 2024-05-02 至 2024-05-03", "(\d{4})-(\d{2})-(\d{2})", "$2/$3/$1")` %% 从 2024-05-02 至 2024-05-03 %%
`= regexreplace("foo bar baz, and bar again", "bar", "BAR")` %% foo BAR baz, and BAR again %%
`= replace("foo bar baz, and bar again", "bar", "BAR")` %% foo BAR baz, and BAR again %%
`= regexreplace("foo123foo456foo", "\d+", "")` %% foofoofoo %%
`= replace("foo123foo456foo", "\d+", "")` %% foo123foo456foo %%
```

前面在介绍 `date()` 函数时，我们提及过它不能解析使用 JavaScript 日期函数 `new Date()` 得到中国标准时间，现在我们来举一个并无实际用处的例子，而且还漏洞百出。下面是在文档 `笔记二.md` 中的 5 个任务：

```
- [ ] ChinaDate: Thu May 02 2024 23:19:23 GMT+0800 (中国标准时间) 
- [ ] 日期：Sun Jan 23 2022 08:00:00 GMT+0800 (中国标准时间)
- [x] 去年：Mon Nov 13 2023 08:00:00 GMT+0800 (中国标准时间)
- [ ] 2023-08-20 灼灼出生
- [ ] 不包含日期
```

现在我们想要过滤掉不包含日期的任务，同时把日期提取出来，将中国标准时间显示成 `xxxx-xx-xx` 的日期格式，下面是作者的一个尝试参考：

````
```dataview
TABLE Date, T.text
FLATTEN file.tasks AS T
FLATTEN {"Jan": "01", "Feb": "02", "Mar": "03", "Apr": "04", "May": "05", "Jun": "06", "Jul": "07", "Aug": "08", "Sep": "09", "Oct": "10", "Nov": "11", "Dec": "12"} AS monthObj
FLATTEN regextest("\d{4}-\d{2}-\d{2}", T.text) AS isRegularDate
FLATTEN regextest("([A-Z]+[a-z]{2}\s)+\d{2}\s\d{4}\s\d{2}:\d{2}:\d{2}\sGMT\+0800\s\(中国标准时间\)", T.text) AS isCHDate
WHERE file = this.file AND (isCHDate OR isRegularDate)
FLATTEN choice(isRegularDate, T.text, monthObj[split(T.text, " ")[1]]) AS Month
FLATTEN choice(isCHDate, split(T.text, " ")[2], "") AS Day
FLATTEN choice(isCHDate, split(T.text, " ")[3], "") AS Year
FLATTEN choice(isCHDate, Year + "-" + Month + "-" + Day, split(T.text, " ")[0]) AS Date
```
````

结果：

![](https://cdn.pkmer.cn/images/202405082208258.png!pkmer)

代码分析：

1. 在代码中使用 `FLATTEN xx AS xx` 语句来声明一个新的字段。
2. 使用了 `regextest()` 函数来匹配 `xxxx-xx-xx` 格式日期和中国标准时间日期。
3. 使用 `choice()` 函数来执 IF 类判断。
4. 使用了 `split()` 函数来将中国标准时间按空格分组并从数组中按索引获取日期数据，将月份英语表示替换成数字表示。
5. 第一条任务解析失败了，因为 `ChinaDate:` 后面有一个空格，导致日期提取时索引不对，所以这个方法很有局限性。同样在处理最后一条数据时，也是硬编码实现，一旦多个空格将导致结果解析出错。

从上面的例子分析来看：在 DQL 查询语句中不能实现字符提取操作（虽然有 `substring()` 和 `slice()` 函数可以提取子串，但是前提是要能够获取到匹配值的索引）。因此复杂的操作还是使用后面要讲解的 DataView JS 查询方式来实现。

##### `starstwith` / `endswith` 函数

这二个函数实用没有什么好讲解的，`startswith(string, prefix)` 函数用于判断字符串是否以给定的前缀开头。而 `endswith(string, suffix)` 函数则是以特定后缀结尾。

使用 `startswith()` 函数在获取“打造极致体验笔记”系列笔记文档：

````
```dataview
TABLE file.name
WHERE startswith(file.name, "打造极致体验笔记")
```
````

##### `padleft` / `padright` 函数

这二个函数用于填充字符，在特定场景下比如格式化输出时用来填充空白还是可以的。`padleft(string, length, [padding])` 用于在左边填充指定的 `padding` 字符，而 `padright(string, length, [padding])` 则用于右边填充。在使用时需要注意 `length` 的值一定要大于 `string` 的长度不然没有任何作用。

##### `split` / `substring` / `truncate` 函数

这 3 个函数没有什么关联关系，只不过放在一起讲解罢了。

`split(string, delimiter, [limit])` 函数的作用和前面介绍的 `join()` 函数操作相反，它用于将一个字符串按指定的分隔符 `delimiter` 来分割成数组，并且还提供了一个可选的结果数组返回长度限制 `limit`。

```
`= split("abcdefg", "", 3)` %% a, b, c %%
`= split(join(["a", "b", "c"], ""), "", 2)` %% a, b %%
```

`substring(string, start, [end])` 函数用于获取字符串的一部分，需要注意的是它和数组切片 `slice()` 函数的区别：

```
`= substring("hello", 0, 2)` %% he %%
`= substring("hello", 2)` %% llo %%
`= substring("hello", -3, 4)` %% hell %%
`= slice(split("hello", ""), -3, 4)` %% l, l %%
```

从结果来看 `substring()` 函数是不接收负整数作为参数值，如果传入会当成 `0` 来处理，而 `slice()` 函数如果传入负整数，则是从尾部算起始元素的索引值，如：`-3` 则是从 `hello` 从尾向前数 3 个字符到第 2 个 `l`，相当于数组长度 `5 + -3`，从头数第 2 个元素（`start` 是包含的）`l`。

`truncate(string, length, [suffix])` 函数用于将文本截断至指定的长度 `length`，需要注意的是这个长度需要将后缀 `suffix` 值 `...` 算入。这个函数对于展示表格数据中单元格文本较长时非常有用。

```
`= truncate("hello world!", 9)` %% hello ... %%
`= truncate("hello world!", 9, "***")` %% hello *** %%
```

#### 辅助函数

所谓辅助函数在实际编程中是指一些十分常用，并且被其他地方多次使用的函数，因此这一小节的函数务必熟练运用起来。

##### `default` 函数

`default(field, value)` 函数的作用是如果 `filed` 为空值，则返回 `value` 值。对于一个数组，我们可以使用 `nonnull()` 函数来移除空值，也可以使用 `default()` 函数来将空值替换成指定的默认值。如果想要保留空值，可以使用 `ldefault()` 函数，用法是一样的，只不过它不会替换掉 `field` 中的空值。

```
`= default(completed, "incompleted")` %% incompleted %%
`= default(undefined, 1)` %% 1 %%
`= default(null, 1)` %% 1 %%
`= default(false, 1)` %% false %%
`= default(object("b", null), 0)` %% b: - %%
`= default([0, null, 2, null, [4, null, [5, 6, undefined]]], 0)` %% 0, 0, 2, 0, 4, 0, 5, 6, 0 %%
`= ldefault([0, null, 2, null, [4, null, [5, 6, undefined]]], 0)` %% 0, -, 2, -, 4, -, 5, 6, - %%
```

从上面的示例来看空值包含 `null` 和 `undefined` 的值，但 `false` 和 `""` 这样的假值是不算入内的。此我， `default()` 函数只适用于基础变量，数组值，不适用于对象。

##### `choice` 函数

`choice(bool, left, right)` 函数是一个原始的 if 语句，相当于 JavaScript 中的 `? :` 运算符，没有 else 语句，只能进行一个条件判断，如果为真则执行 `left` 否则执行 `right`。这是唯一一个条件判断函数，因此使用较多，比如前面介绍判断中国标准时间的例子。

```
`= choice(true, "yes", "no")` %% yes %%
```

##### `hash` 函数

`hash(seed, [text], [variant])` 函数用于生成一个基于给定种子（`seed`）、文本（`text`）和变体（`variant`）的哈希值。这里的种子如果提供不同的值会产生不同的哈希输出，相同的种子可以增加哈希函数的唯一性。变体可以提供进一步的文本区分依据，例如在同一个文件，相同的任务名，将 `variant` 设置为任务所在的行号可区分出同名的任务。

```
`= hash("1", "same text")` %% 673738316819763 %%
`= hash("2", "same text")` %% 6125302604555861 %%
`= hash("2", "same text", 1)` %% 3643262541303331 %%
`= hash("2", "same text", 2)` %% 27826704613653 %%
`= hash(dateformat(date(today), "YYYY-MM-DD"), this.file.name)` %% 6466914653753995 %%
```

下面我们使用 `hash()` 函数来随机排序文档

````
```dataview
TABLE WITHOUT ID file.name, file.mtime
SORT file.ctime
SORT hash(dateformat(file.ctime, "YYYY-MM-DD"), file.name)
```
````

结果：

![](https://cdn.pkmer.cn/images/202405082208259.png!pkmer)

##### `striptime` 函数

`striptime(date)` 函数用于去掉日期中的时间部分，只留下年、月和日。

```
`= striptime(this.file.ctime)` %% 2024-04-30 %%
```

##### `dateformat` 函数

`dateformat(date|datetime, string)` 函数用于格式化日期，格式化符号参见：[Luxon tokens](https://moment.github.io/luxon/#/formatting?id=table-of-tokens)。

```
`= dateformat(this.file.ctime, "yyyy-MM-dd")` %% 2024-04-20 %%
`= dateformat(this.file.ctime, "HH:mm:ss")` %% 21:09:55 %%
`= dateformat(date(now),"x")` %% 1714802627234 %%
`= dateformat(date(now),"ffff")` %% 2024年5月4日星期六中国标准时间 14:10 %%
`= dateformat(date(now),"tttt")` %% 中国标准时间 14:11:31 %%
```

##### `durationformat` 函数

`durationformat(duration, string)` 函数用于格式化持续时间，在格式字符串中的单引号内的任何内容都不被视为标记格式内容。

可用的标记字符如下：

- `S` 毫秒
- `s` 秒
- `m` 分钟
- `h` 小时
- `d` 天
- `w` 周
- `M` 月
- `y` 年

下面是简单使用举例：

```
`= durationformat(dur("3 days 7 hours 43 seconds"), "ddd'd' hh'h' ss's'")` %% 003d 07h 43s %%
`= durationformat(dur("30000 days 7 hours 43 seconds"), "ddd'd' hh'h' ss's'")` %% 30000d 07h 43s %%
`= durationformat(dur("3 days 7 hours 43 seconds"), "hh'h' ss's'")` %% 79h 43s %%
`= durationformat(dur("3 days 7 hours 43 seconds"), "ss'秒'")` %% 79 h 43 s %%
```

##### `currencyformat` 函数

`currencyformat(number, [currency])` 函数用于格式化货币，其中 `currency` 常见取值有人民币（`CNY`），美元（`USD`），欧元（`EUR`），日元（`JPY`），更多国家的取值请参考：[ISO 4217](https://en.wikipedia.org/wiki/ISO_4217#List_of_ISO_4217_currency_codes)。

```
`= currencyformat(123456.789, "CNY")` %% ¥123,456.79 %%
`= currencyformat(123456.789, "USD")` %% US$123,456.79 %%
`= currencyformat(123456.789, "EUR")` %% €123,456.79 %%
`= currencyformat(123456.789, "JPY")` %% JP¥123,457 %%
```

从执行结果来看，`currencyformat()` 函数为我们自动将货币格式化成了千分位表示，同时我们还发现日本货币的结果和前面几个不太一样，这里暂时不追究为什么，因为只为写作示例而已。

##### `localtime` 函数

`localtime(date)` 函数用于将固定时区中的日期转换为当前时区中的日期。

```
`= localtime(date(now))` %% 9:07 下午 - 5 04, 2024 %%
```

##### `meta` 函数

`meta(link)` 函数用于获取链接的元数据信息，它返回一个对象包含以下几个属性：

- `display` 链接的别名，如果没有提供则为 `null`，示例：`meta([[打造极致体验笔记：Templater Obsidian 插件使用|这里就是display要显示的内容]]).display` 的值为 `这里就是display要显示的内容`。
- `embed` 用于判断链接是否为媒体文件嵌入，例如：`meta(![](https://cdn.pkmer.cn/images/202405082208259.png!pkmer)).embed` 值为 `true`。
- `subpath` 链接的文档中的标题名或者段落 ID，例如：`[[打造极致体验笔记：Obsidian Dataview 插件使用#\`meta\` 函数]].subpath ` 的值为` \`meta\` 函数 `。如果引用的是文档中的段落，例如：`meta([[My Project#^9bcbe8]]).subpath` 则值为 `9 bcbe 8`
- `type` 链接的类型，其值为 `file` / `header` / `block`，分别表示链接的是文件、标题段落。

## 总结

本文可以看作是对官方文档的一个解读，帮助学习 Dataview 的 Obsidian 使用者踩坑，铺路。文章最后并没有给出 DQL 的实战案例，因为我们打算放在第 3 期文章中。

创作不易，洋洋洒洒花费了近一月的时间边学习实践，边创作文档。本来只是想分享一下作者搜集的一大堆插件，列了个大纲结果发现内容太多，而且很多插件都依赖 Dataview，所以才花费时间精力去研究其使用，并分享出来。

文章一开始的构想是将 DQL 和 Dataview 的 JavaScript API 以及实战写在一篇文章中，后面发现要写的内容越来越多，时间越拖越久，有点没有耐心、快有半途而废的节奏了。还有一个原因是使用 Obsidian 写作时使用了大量的插件，随着内容的增多，经常出现光标不能定位到文字的情况。不能在加载文档后通过大纲跳到文档的末尾，立即编辑，因为在实时渲染视图下这部分还没有被处理，然后不得不从页面顶部通过鼠标滚动到底部当一切都准备好后才能顺利编辑。

文章后面给出的参考很多作者自己也还没有来得及去研究，给读者去挖掘吧。

文章难免会出现一些文字在描述上不合理，不专业的地方以及错误字，往广大读者指正和提供更好的建议。

最后，动动你发财的小手，关注，点赞一键三连，你的鼓励是我坚持下去的动力。有任何问题欢迎加作者微信（`jenemy_xl`）沟通交流一起成长。


下一篇 [[Obsidian达人成长之路_2-使用终极工具 Dataview 释放笔记库的潜力 · JavaScript API]]

## 参考

- [Dataview (blacksmithgu.github.io)](https://blacksmithgu.github.io/obsidian-dataview/)
- [Properties - Obsidian Help](https://help.obsidian.md/Editing+and+formatting/Properties)
- [Dataview Example Vault (s-blu.github.io)](https://s-blu.github.io/obsidian_dataview_example_vault/)
- [Obsidian 插件之 Dataview - 知乎 (zhihu.com)](https://zhuanlan.zhihu.com/p/373623264)
- [Obsidian DataView 入门保姆级引导手册 - 知乎 (zhihu.com)](https://zhuanlan.zhihu.com/p/614881764)
- [一文看懂 YAML - 知乎 (zhihu.com)](https://zhuanlan.zhihu.com/p/145173920)
- [obsidian插件dataview官方文档翻译 - 知乎 (zhihu.com)](https://zhuanlan.zhihu.com/p/393550306)
- [Dataviewjs的奇技淫巧 - 经验分享 - Obsidian 中文论坛](https://forum-zh.obsidian.md/t/topic/5954)
- [Obsidian学习从0到1 —— 双链（重点）_obsidian 双链-CSDN博客](https://blog.csdn.net/weixin_51684355/article/details/126084867)
- [dmscode/Obsidian-Templates: 我在 Obsidian 中用的各种模板（Dataview，Templater，QuickAdd） (github.com)](https://github.com/dmscode/Obsidian-Templates)
- [702573N/Obsidian-Tasks-Timeline: A custom view build with Obsidian-Dataview to display tasks from Obsidian-Tasks and from your daily notes in a highly customisable timeline (github.com)](https://github.com/702573N/Obsidian-Tasks-Timeline)
- [Aetherinox/obsidian-dataview-snippets: A collection of Obsidian.md scripts which include Tag & Page Clouds, Table of Contents / ToC, Bad / Missing Link reporting, etc. (github.com)](https://github.com/Aetherinox/obsidian-dataview-snippets)
- [Formatting (moment.github.io)](https://moment.github.io/luxon/#/formatting)