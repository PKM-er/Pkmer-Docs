---
uid: 2023120719381211
title: Obsidian 插件：【Readme】Obsidian Query Language
tags: ['搜索/排序', 'obsidian插件', 'readme']
description: .这个插件允许您在Obsidian中查询笔记并表示数据。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】Obsidian Query Language

> [!Note] 插件名片
> - 插件名称：Obsidian Query Language
> - 插件作者：Joost Plattel
> - 插件说明：.这个插件允许您在 Obsidian 中查询笔记并表示数据。
> - 插件分类：[' 搜索/排序 ', 'obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/jplattel/obsidian-query-language)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsidian-query-language)

## 概述

.这个插件允许您在 Obsidian 中查询笔记并表示数据。

![Obsidian Query Language](https://cdn.pkmer.cn/covers/obsidian-query-language.png!pkmer)

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/jplattel/obsidian-query-language/main/README.md)
>

---

## Readme(翻译）

下面是 [[obsidian-query-language]] 插件的自述翻译

# Obsidian 查询语言

这是 Obsidian 的一个插件（<<https://obsidian.md），它允许您在笔记本内查询笔记并收集有关您的存储库的信息。您可以使用代码块编写查询并进行配置，渲染器将在> Markdown 预览中输出结果：>

![](https://cdn.pkmer.cn/covers/obsidian-query-language_1_0.png!pkmer)

## 更新日志

- **2.1.1**
    - 修复了前置元数据解析的错误（感谢 [chipchipschips](https://github.com/chipschipschips)）
- **2.1.0**
    - 改进了对 Liveview 的支持
- **2.0.0**
    - _重大变更_：`template` 键现在是 'string|table|list'。格式化现在使用 `format` 键，如示例所示。
    - 从索引构建中删除了 `this.cachedData`，现在直接读取文件。
    - 将渲染器移动到子文件中，以便更容易进行重构（将来可能转移到 Svelte 中）。
    - 其他插件可以使用搜索功能（初步尝试，更多细节稍后）。
    - 现在只需更新变化部分而不是重建整个索引。
- **1.5.0**
    现在可以按随机（洗牌）排序。在修改或重命名文件时对索引进行了轻微改进。

- **1.4.0**
    在字段视图中现在支持标签。字段也适用于列表视图。

- **1.3.0**
    现在可以按创建/修改日期或任何其他字段在表格/列表视图中进行排序。

## 安装

将此存储库克隆到 `.obsidian/plugins` 文件夹中，运行 `yarn && yarn build` 或 `npm install && npm run build`，然后在 Obsidian 的设置中启用它。

## 使用插件和示例

您可以使用 `oql` 代码块查询您的保险库，例如：

````markdown
```oql
name: Daily notes
query: "'100 Daily/'"
template: "string"
format: "{name}: {count}"
```
````

这个小块在一个笔记中呈现为一个模板，计算 `100 Daily` 文件夹中的笔记数量，并返回一个输出，当您有 100 个每日笔记时，它呈现为 `Daily notes: 100`。这只是一种基本的查询保险库的方式。

这些是配置中的所有字段，请注意某些字段只适用于特定的模板（例如，列表/表视图中的限制）：

````markdown
```oql
name: Daily notes               # 查询的名称（可以在格式中使用{name}）
query: "'100 Daily/"            # 与Fuse.js一起使用的实际查询（注意单引号'用于精确匹配）
template: "string"              # 或使用"table"或"list"进行不同的输出
format: "{name}: {count}"       # 输出的格式
badge: true                     # 在右侧显示OQL徽章
debug: true                     # 显示调试窗口
wrapper: "div"                  # 包装器（如果您想呈现标题如`h1`）
limit: 10                       # 在使用列表或表视图时，将结果限制为N
sort: "title"                   # 或"-title"进行降序排序，其他选项："modified"，"created"和"random"
fields: ['title', 'created']    # 在表视图中显示的字段
includeCurrentNote: false       # 默认情况下，我们排除您正在编写OQL的笔记
```
````

### 可用的占位符格式

{name} ：OQL 查询块的名称

{count} ：结果计数

{title} ：结果的标题

{path} ：结果的路径

{tags} ：结果的标签

{index} ：结果的索引

{created} ：结果的创建日期

{modified} ：结果的修改日期

更多示例：

* 请注意，此插件使用的 Fuse 查询语法与 Obsidian 中的当前查询模型或搜索不同。在 Obsidian 开放 API 进行搜索之前，暂时只能使用这种方式。您可以在代码块中使用 `debug: true` 来查看查询返回的结果。

将查询渲染为字符串：

````markdown
```oql
name: "每日笔记"
query: "'100 Daily/"
template: "string"
format: "{name}: {count}"
```
````

显示调试窗口以列出结果，并将结果包装在标题中：

````markdown
```oql
name: "每日笔记"
query: "'100 Daily/"
template: "string"
format: "{name}: {count}"
debug: true
wrapper: h1
```
````

渲染 `folder1/` 中的 10 个随机笔记列表。

````markdown
```oql
name: 文件夹1
query: "'folder1/"
template: "list" # 渲染为带有链接的列表
sort: 'random' # 以随机顺序渲染列表
limit: 10 # 限制为前10个
```
````

以自定义格式渲染 `folder1/` 中最后创建的 10 个笔记列表。

````markdown
```oql
name: 文件夹1
query: "'folder1/"
template: "list" # 渲染为带有链接的列表
format: "{created}: {title}"
sort: 'created'
limit: 10 # 限制为前10个
```
````

以表格形式显示 5 个最旧的项目（`sort -created`），并显示它们的修改日期：

````markdown
```oql
name: 最旧的项目
query: "'200 Projects/"
template: "table"
sort: '-created'
limit: 5
badge: false
fields: ['title', 'modified']
```
````

计算包含特定标签的笔记数量：

````markdown
```oql
name: '有多少笔记使用 #utrecht'
query: "'#utrecht"
template: "string"
format: "{name}: {count}"
badge: false
```
````

请查看 [Fuse的扩展搜索文档](https://fusejs.io/examples.html#extended-search) 以了解如何查询您自己的存储库。**语法与 Obsidian 搜索的当前查询语法不匹配，请注意！**

### 复杂查询

Fuse 还支持更复杂的查询，因此您可以创建一个查询对象，而不是使用字符串作为查询。虽然这种方式不太容易书写，但可以更加具体。以下是一个示例：

````
```oql
name: 'notes文件夹中有多少个笔记'
query: 
    path: "'notes"
template: "string"
format: "{name}: {count}
```
````

### 搜索笔记内容

之前的示例主要集中在元数据搜索上。当然，OQL 也可以用来搜索 Obsidian 中笔记的实际内容。

以下示例可以帮助您入门（感谢 [https://github.com/ewandel](ewandel)）：

示例 1：

```` 
```oql
name: 'boolean OR search'
query: apple | pear
template: "string"
format: "{name}: {count}"
badge: true
debug: true
complete notation (longer, but more flexible):
```
````

示例 2：

```` 
```oql
name: 'OR combination list of results'
query: { $or: [{ "content": "'apple" }, { "content": "'pear" }] }
template: "list"
badge: true
debug: true
```
````

示例 3：

仅在笔记“my garden”中搜索，并检查是否包含“apple”和“pear”。注意在“my garden”前面的 `=`，以强制进行精确匹配。使用“`'`”只需要文本包含该特定单词。例如：[[apple]] 的链接或“apple-tree”也会被找到。

```` 
```oql
name: 'Search in single file with AND'
query: { $and: [{ "title": ="my garden" }, {$and: [{ "content": "'apple" }, {"content": "'pear" }]}]}
template: "string"
badge: false
debug: true
includeMatches: false
format: "{count}"
```
````

示例 4：

```` 
```oql
name: 'check if note "my new garden" contains "fruit" AND ("tree" OR "bush")'
query: { $and: [{ "title": ="my new garden" }, { "content": "'fruit"}, {$or: [{ "content": "'tree" }, {"content": "'bush" }]}]}
template: "string"
badge: false
debug: true
includeMatches: false
format: "{count}"
```
````

这个插件是如何工作的？

它使用 [Fuse](https://fusejs.io/) 构建了一个并行索引，您可以用来查询数据！

我可以在我的插件中使用 OQL 插件吗？

是的！现在这个功能是开放的一段时间。

要使用它：检查用户是否安装了“obsidian-query-language”插件。以下代码应该在控制台中返回该插件：`this.app.plugins.plugins['obsidian-query-language']`。然后，您可以使用搜索功能，其中查询是一个字符串或遵循 [Fuse接口](https://fusejs.io/api/query.html) 的对象：

```typescript
if ('obsidian-query-language' in this.app.plugins.plugins) {
    let query = "'testing" // 所有完全匹配单词'testing'的笔记。
    let searchResults = await this.app.plugins.plugins['obsidian-query-language'].search(query)
    // 对搜索结果进行处理
}
```

如果 SearchIndex 不可用，该插件会抛出错误。如果您的插件在 OQL 插件之前加载，可能会遇到此问题。因此，最好捕获该错误并向用户显示一条消息🖖。否则，它将返回一个可能包含结果的 Promise！

## 待办事项 / 特性

- [x] 对输出进行排序？
- [x] 在表格输出中添加标签字段。
- [x] 允许更复杂的 [逻辑查询运算符](https://fusejs.io/api/query.html)。
- [x] 将所有输出升级为格式字符串。
- [x] 在插件上公开一个 `.search(query)` 函数供其他开发者使用。
- [ ] 添加一个模板 `graph`？
- [ ] 允许在 frontmatter 特定字段上进行查询？
- [ ] 可用的创建/修改时间戳，我们能否也查询这些时间戳？
- [ ] 多个查询？（由 [Liam](https://github.com/liamcain/) 提出的想法）
- [ ] 在插件的设置选项卡中配置 Fuse 设置？（例如模糊匹配的灵敏度）
- [ ] 一旦 Obsidian 的搜索 API 可用，转换为使用该 API 进行搜索。



