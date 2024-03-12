---
uid: 20230817224054
title: Obsidian 插件：KOReader Highlights
tags: ['obsidian插件', 'readme']
description: 从KOReader同步高亮/笔记
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：KOReader Highlights

> [!Note] 插件名片
> - 插件名称：KOReader Highlights
> - 插件作者：Federico "Edo" Granata
> - 插件说明：从 KOReader 同步高亮/笔记
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/Edo78/obsidian-koreader-sync)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsidian-koreader-plugin)

## 概述

从 KOReader 同步高亮/笔记

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/Edo78/obsidian-koreader-sync/master/README.md)

---

## Readme(翻译）

下面是 [[obsidian-koreader-plugin]] 插件的自述翻译

# Obsidian KOReader 插件

将 [KOReader][1] 中的笔记同步到 [Obsidian][2] 的存储库中。KOReader 设备必须连接到运行 Obsidian 的设备上，以便插件可以扫描其文件。

在每个笔记的开头，有一系列称为 Frontmatter 的 YAML 数据。这些数据主要由插件本身使用（您可以像 [dataview示例](#dataview-examples) 中所示那样使用它们），但是如果擅自更改它们，可能会导致意外行为，因此请使用提供的 [commands](#commands) 与它们进行正确的交互。

当您在 Obsidian 中舒适地阅读笔记时，请考虑一下这个插件对您有多有用，并通过推文或咖啡表达您的感激之情：:coffee:

[![Twitter URL](https://img.shields.io/twitter/url?style=social&url=https%3A%2F%2Ftwitter.com%2Fintent%2Ftweet%3Ftext%3DI%2527m%2520enjoying%2520%2540Edo78%2527s%2520%2523Obsidian%2520plugin%2520to%2520sync%2520my%2520%2523KOReader%2520notes.%250AThank%2520you%2520for%2520your%2520great%2520work.%250A%250Ahttps%253A%252F%252Fgithub.com%252FEdo78%252Fobsidian-koreader-sync)](https://twitter.com/intent/tweet?text=I%27m%20enjoying%20%40Edo78%27s%20%23Obsidian%20plugin%20to%20sync%20my%20%23KOReader%20notes.%0AThank%20you%20for%20your%20great%20work.%0A%0Ahttps%3A%2F%2Fgithub.com%2FEdo78%2Fobsidian-koreader-sync)

[1]: <https://github.com/koreader/koreader>
[2]: <https://obsidian.md/>

## 配置

有四个主要设置：

- `KOReader 挂载路径` 必须正确设置为 KOReader 挂载的路径
- `高亮文件夹位置` 可以保持默认值 `/`（或者您可以创建一个文件夹并从下拉菜单中选择它）
- `保持同步` 定义插件是否应该将笔记与 KOReader 同步导入（参见 [同步](#sync)）
- `为每本书创建一个文件夹` 如果您是文件夹的粉丝，启用此设置将在名为书名的子文件夹中创建**新的笔记**

### 危险区域

该区域包含一些在极少数边缘情况下可能有用，但在日常使用中可能会带来危险的设置。

- `启用重置导入的笔记` 可以一次性执行 [命令](#commands) `重置同步列表`

### 视图配置

该插件使用 [Eta.js](https://eta.js.org/) 作为模板引擎来创建笔记的正文（与插件 [Templater](https://github.com/SilentVoid13/Templater) 使用的相同）。

默认模板非常简洁。

## 标题：[[<%= it.bookPath %>|<%= it.title %>]]

### 作者：[[<%= it.authors %>]]

### 章节： <%= it.chapter %>

页码： <%= it.page %>

**==<%= it.highlight %>==**

<%= it.text %>

```
在“视图设置”部分，您可以找到使用自定义模板的选项。如果您选择这样做，您必须在存储库中创建一个`.md`文件，并在其中编写您的模板（我建议将默认模板复制到其中作为起点），然后在“模板文件”中写入路径。

模板接收以下参数：
- `bookPath`：koreader/（book）How to Take Smart Notes_... {book suffix}-Sönke Ahrens
- `title`：How to Take Smart Notes: One Simple Technique to Boost Writing, Learning and Thinking - for Students, Academics and Nonfiction Book Writers
- `authors`：Sönke Ahrens
- `chapter`：1.1 Good Solutions are Simple – and Unexpected
- `highlight`：Clance and Imes 1978; Brems et al. 1994
- `text`：Clance（1978）首次在与将成就归因于外部因素的高度成功的女性进行的治疗会话中确定了冒名顶替现象
- `datetime`：2022-01-22 09:57:29
- `page`：19

### 书籍视图配置
默认模板是简约但复杂的
~~~markdown

# 标题: <%= it.data.title %>

<progress value="<%= it.metadata.percent_finished %>" max="100"> </progress>
```dataviewjs
const title = dv.current()['koreader-sync'].metadata.managed_title
dv.pages().where(n => {
return n['koreader-sync'] && n['koreader-sync'].type == 'koreader-sync-note' && n['koreader-sync'].metadata.managed_book_title == title
}).sort(p => p['koreader-sync'].data.page).forEach(p => dv.paragraph(dv.fileLink(p.file.name, true), {style: 'test-css'}))
```

~~~
这个模板的核心是一个js [dataview embedded](#dataview-embedded) 查询。如果你不知道自己在做什么，不要乱动它（因为我几乎不懂Dataview）。

模板接收的数据与前置数据完全相同。如果前置数据中没有该数据，你就不能使用它，但你可以创建一个问题来询问。

#### 嵌入式Dataview
除了对[Dataview](https://github.com/blacksmithgu/obsidian-dataview)的本地支持（请参考[示例](#dataview-examples)），该插件还允许用户选择自动为每本书创建一个带有dataview查询的笔记。
该笔记将被创建在与书籍笔记相同的文件夹中，但可以移动和重命名，Obsidian会负责更新链接。
要使用此功能，需要安装Dataview并启用其“启用JavaScript查询”选项。
查询本身将嵌入单个笔记，并使用CSS隐藏每个`h2`和`h3`标签（使用默认模板，这将隐藏标题、作者和章节）。

**注意**：此功能至少需要Obsidian v0.13.19，但有时会出现一个故障，只显示笔记的文件名而不是其内容。请尝试关闭笔记并重新打开（抱歉，这不是我的错）。

## 使用方法
一旦插件正确配置，您可以将设备连接到KOReader并点击带有两个文档图标和工具提示“同步您的KOReader高亮”的图标。插件应该会为每个注释创建一个单独的文件。
插件应该会自动检测到您更新注释本身的文本，并相应地更新前置属性。

### 命令
**注意：**如果一个命令应该将一个frontmatter属性设置为特定的值，那么只有当打开的笔记具有不同的值时，该命令才会显示。

有五个命令：
- `同步`与点击插件图标相同，触发笔记的同步
- `重置同步列表`清空导入笔记的列表（参见[危险区域](#danger-zone)）。在使用此命令之前，请尽量从回收站中恢复已删除的笔记，因为所有正确丢弃的笔记将被重新导入。此命令还会禁用自身，因此如果您希望再次使用它，必须在设置中重新启用它。
- `将此笔记标记为已编辑`将frontmatter属性`yet_to_be_edited`设置为`false`（参见[笔记编辑](#note-editing)）
- `将此笔记标记为未编辑`将frontmatter属性`yet_to_be_edited`设置为`true`（参见[笔记编辑](#note-editing)）
- `为此笔记启用同步`将frontmatter属性`keep_in_sync`设置为`true`（参见[同步](#sync)）
- `为此笔记禁用同步`将frontmatter属性`keep_in_sync`设置为`false`（参见[同步](#sync)）

### 注意编辑
当你编辑一个笔记时，应该避免改变前置元数据。从版本0.6.0开始，插件本身应该能够检测到笔记的任何更改并更新：

* `yet_to_be_edited` 的值从 `true` 更改为 `false`，这样插件就知道你修改了什么，并且在[同步](#sync)时避免任何丢失
* `text` 的值以反映你的编辑

如果你想放弃你的手动编辑，可以使用命令 `将此笔记标记为未编辑` 并在下次同步时覆盖它。
如果你除了文本本身之外改变了其他内容（例如章节、书的标题等），你必须使用命令 `将此笔记标记为已编辑` 来让插件意识到你的更改（在未来的版本中应该不再需要这样做）

使用适当的[命令](#commands)比手动编辑前置元数据更容易/更安全。

### 同步
**警告** 同步通过从KOReader中删除一个笔记并重新创建它来实现。任何在Obsidian中添加或更新的内容都将会丢失，就像“雨中的泪水”一样。请自行注意。

同步过程依赖于frontmatter元数据中定义的两个属性：

- `keep_in_sync`
- `yet_to_be_edited`

这两个属性都需要设置为`true`才能进行同步。

`keep_in_sync`可以通过全局设置`保持同步`或在每个笔记中进行控制，而`yet_to_be_edited`在从KOReader导入笔记时设置为`true`，只能在笔记本身中手动更改。

`keep_in_sync`的默认值为`false`，因此默认行为是一旦笔记在Obsidian中，它将不再进行同步。

如果您在KOReader中修改了笔记并希望在Obsidian中进行同步，您必须启用`保持同步`设置**或**使用适当的[命令](#commands)将特定笔记的`keep_in_sync` frontmatter从`false`更改为`true`，如果该笔记的`yet_to_be_edited`为`true`，则该笔记将被删除并重新创建。

## Dataview 示例
由于每个笔记中的前置数据，您可以使用 Dataview 轻松查询您的笔记。

### 书籍
~~~markdown
```dataview
列表
筛选 koreader-sync
按 koreader-sync.data.title 分组
```
~~~

### 特定书籍的章节（包含注释）

~~~markdown
```dataview
列表
where koreader-sync.data.title = "如何智能记笔记：一种简单的技术，提升写作、学习和思考能力 - 面向学生、学者和非虚构书籍作家"
按 koreader-sync.data.chapter 分组
```
~~~

### 特定书籍的特定章节的笔记

~~~markdown
```dataview
list
where koreader-sync.data.title = "如何智能记笔记：一种简单的技术，提升写作、学习和思考能力 - 面向学生、学者和非虚构书籍作家" and koreader-sync.data.chapter = "引言"
```
~~~

### 特定书籍的笔记文本（没有链接到笔记，只有文本存在）

~~~markdown
```dataview
list without id koreader-sync.data.text
where koreader-sync.data.title = "如何做智能笔记：一种简单的技术来提升写作、学习和思考能力 - 面向学生、学者和非虚构书籍作家"
where koreader-sync.data.text
```
~~~

### 尚未编辑的笔记列表

~~~markdown
```dataview
list 
where koreader-sync.metadata.yet_to_be_edited
```
~~~

### 需要保持同步的笔记列表

~~~markdown
```dataview
list 
where koreader-sync.metadata.keep_in_sync
```
~~~

### 将保持同步的笔记列表

~~~markdown
```dataview
list 
where koreader-sync.metadata.keep_in_sync and koreader-sync.metadata.yet_to_be_edited
```
~~~

[1]: <https://koreader.rocks/>
[2]: <https://obsidian.md>



