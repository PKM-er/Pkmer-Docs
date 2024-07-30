---
uid: 20240602223521
title: Obsidian 达人成长之路 4 - 使用 Text expand 插件插入查询结果
tags: [Obsidian, TextExpand]
description: 
author: jenemy
type: other
draft: false
editable: false
modified: 20240602223704
---

# Obsidian 达人成长之路 4 - 使用 Text expand 插件插入查询结果


> [!info] 本文概要
> 本文详细介绍了Obsidian笔记软件中的Text Expand插件及其相关功能。Text Expand插件扩展了Obsidian的核心Search插件，允许用户通过模板将搜索结果格式化输出到文档中。文章首先概述了Obsidian的Search功能，包括其基本查询方式和查询操作符，然后介绍了Obsidian Query Control插件，它为query查询代码块提供了额外的语法和工具条。接着，文章重点介绍了Text Expand插件的使用和案例分享包括如何利用Eta模板引擎进行数据格式化和逻辑处理，以及如何通过序列模板引擎简化查询结果的输出。


[[mrj-text-expand]]是一个很特别的插件，它和我前面 3 期文章[[Obsidian达人成长之路-1-使用终极工具Dataview 释放笔记库的潜力-DQL查询语言|Dataview达人系列]]中介绍的 Dataview 有着类似的功能：查询，但是却侧重点不一样，两都互不干涉。

Dataview 查询的数据除了了任务可以操作外，其余的结果均为只读，并且只有在执行 Dataview 查询时才会得到结果。而 Text Expand 它扩展了官方核心插件 Search 的搜索结果并允许用户使用模板格式化输出到当前页面中作为文档内容的一部分。

有了这个插件我们可以做什么呢？有什么特殊用途？目前作者只是一个路的开拓者，至于你是徒步、跳着、跑着还是借助交通工具，都你自己的选择，我只授渔/授业不在你的世界，无法感知你的使用场景。就作者写这篇文章来看，这个插件的用处是有但是需要付出的工作量有时候特定的场景还不如复制/粘贴来得快。

因为 Text expand 的数据来源自核心插件 Search 的结果，因此我们在介绍其内容前需要掌握 Search 相关的知识点。相信部分没有去了解官方文档的朋友会跟我一样，居然搜索还能这么玩，真是有点孤陋寡闻了！没关系，如果你有幸读到本文也未为晚也，撸起袖子就是干。

## Obsidian 核心插件：Search

Obsidian 的[[搜索|搜索功能]]是以核心插件的方式提供的，默认是开启的，只需要在左侧边栏找到一个放大镜图标的选项卡选中即可默认聚焦在搜索框内。

在 Obsidian 中切换左侧边栏搜索面板，可以使用快捷键 <kbd>Ctrl + Shift + F</kbd>(或者在 MacOS 中使用 <kbd>Cmd + Shift + F</kbd>)。

在当前编辑的页面中进行搜索（又叫查找）操作，我们可以选中页面中的文本，然后使用 <kbd>Ctrl + F</kbd>(MacOS 为 <kbd>Cmd + F</kbd>）进行搜索选中内容，也可以打开搜索工具条后再输入搜索内容）。如果想要全局搜索，将快捷键改成全局搜索的即可，当然我们也可以使用第三方搜索插件来查找。

通常我们会在查询选项面板中输入内容进行查询，此外，官方还提供了查询语句块（`query` 语句代码块）来在当前页面中执行查询并将结果显示在当前查询语句所在位置。

下面是一个简单的查询示例：

````
狼人头

```query
狼人头
```
````

结果：

![Pasted image 20240601172756](https://cdn.pkmer.cn/images/202406022238570.png!pkmer)

可以看到查询显示结果和在左侧边栏中一致。

这一节接下来的所有查询都是基于 `query` 查询块中。

>[!Tip] 
>在 `query` 查询块中不支持注释，包括 Obsidian 的注释 `%%  %%`。

### 不同内容的查询方式

在查询语句块中指定的的内容有可能包含在文件名中，也可能在页面内容中。同时，同一个文本内容在查询时我们可能希望包含前后空格，也可能希望同时查询多个关键词，甚至要求在查询时排除某些内容。进一步，我们在查询时还可以指定标签（这个其实还是文本）和链接。

下面我们以文本 `foo`, `bar`, `baz` 为例：

- `foo bar` 页面中需要同时包含 `foo` 和 `bar`，但是不要求具体位于页面具体的位置是否紧邻。
- `foo OR bar` 页面中只需要包含其中任何一个结果即可。需要注意的是这里的 `OR` 为特殊操作符，表示“或者” 的意思。
- `foo -bar` 页面中包含 `foo` 但是不能同时出现 `bar`。其中 `-` 符号为排除操作符，意思是 “不包含”。
- `foo -(bar baz)` 同上，但条件是不同时包含 `bar` 和 `baz`。
- `" foo "` 查询时包含前后的空格，默认情况下会忽略查询文本前后的空格。
- `"\"foo\""` 查询文本时包含双引号，需要进行转义，不然还是查询 `foo`。
- `#foo` 查询包含 `foo` 的标签。
- `"[[2022-01-10]]"` 查询链接，这里的双引号不可省略。

>[!Tip] 
>如果查询结果是文件名和文档中的内容在显示略微不同，读者留意一下注好了。

### 查询操作符

我们上一节介绍的内容基本可以满足一般的查询需求，然而我们想在查询时带上一定的约束条件怎么做呢？这一点 Obsidian 开发者早就为我们考虑到了：提供了**查询操作符**来过滤结果，语法为 `操作符: 查询内容` (这里的空格可以不写)。

下面我们以列表的形式为大家介绍（具体效果请读者自行操作，这里就不具体举例和截图了）：

- `file:` 查找文件名。举例： `file: 2022-01-10` 查询日记，`file: .png` 查询所有 PNG 文件。
- `path:` 查找路径。举例： `path: "10 Example Data/projects"` 路径包含空格，`path: dir` 普通路径查询。
- `content:` 查询文档内容。举例：`content: foo`。
- `match-case:` 匹配大小写，默认情况下查询英文单词是忽略大小写的。举例：`path: "10 Example Data/projects" match-case:Goal`。
- `ignore-case:` 忽略大小写。
- `tag:` 查询标签。举例：`tag: foo` 查询单个标签，`tag: daily OR tag: goal` 查询 `daily` 或 `goal` 标签。
- `line:` 查询结果限制在同一行。`line: (foo bar)` 和 `foo bar` 的区别在于后者只要文档中同时出现 `foo` 和 `bar` 就匹配，不管其在哪一行，而前者要求必须出现在同一行。
- `block:` 查询结果限制在同一个块区域。这里相同块是指文本行之间无换行，可以是列表和文本、任务和文本，但不能是多个列表项、任务项，虽然它们之间也没有换行，但不在考虑范围内。举例：`block: (foo bar)`。
- `section:` 区域是指定两个标题之前的内容。
- `task:` 查询任务。举例：`task: foo`。
- `task-todo:` 查询未完成的任务（不包含未完成的子任务）。
- `task-done:` 查询已完成的任务（不区分子任务是否全部完成）。

### 属性查询

前面我们介绍的内容中并未提及如何查询 YAML 中定义的属性，虽然标签也属于属性，但是我们也可以在文档中任意位置添加标签。现在我们来介绍另一种查询方：属性查询，语法为：`[属性名：查询内容]`。

前面我们查询 `daily` 标签使用 `#daily`，现在我们就可以使用 `[tags: daily]` 来查询 YAML 中定义的标签属性。

当然在查询时我们依然可以使用前面介绍的一些查询操作符，如查询 `10 Example Data/people` 中 `relationship` 属性为 `accompanion` 或 `work-related` 的人。

````
```query
[relationship: accompanion OR work-related]
```
````

结果：

![Pasted image 20240601201022](https://cdn.pkmer.cn/images/202406022238571.png!pkmer)

### 正则查询

正则查询可以按照一定的正则表达式进行模糊或者精确查询。我们在查询笔记时，普通查询只能指定具体的数字，但是有些非日记文件也可能包含匹配的结果，当然日记文件通常位于指定的日记目录中，我们要以限定查询目录，这只是特定场景下的解决方案，不具有普适性。

因为 Obsidian 是基于 Electron 开发的，所以这里的正则表达式要用 JavaScript 所支持的标准来写。

对于日期我们通常使用 `/\d{4}-\d{2}-\d{2}/` 来匹配，下面我们来试者查询 `10 Example Data/daily` 中 16 号的日记（不指定年和月）：

````
```query
file: /\d{4}-\d{2}-16/
```
````

结果：

![Pasted image 20240601202832](https://cdn.pkmer.cn/images/202406022238572.png!pkmer)

关于正则表达式，推荐使用 [regex101: build, test, and debug regex](https://regex101.com/) 工具来练习和查找社区做贡献的各种场景下的解决方案。

### 使用 Search 增强插件 Obsidian Query Control

我们在 `query` 查询代码块中无法实现全局搜索工具栏中的【搜索设置】功能，但是社区的力量是强大的，有一个插件 [nothingislost/obsidian-query-control: An experimental Obsidian plugin that adds controls to embedded queries (github.com)](https://github.com/nothingislost/obsidian-query-control)  弥补了这方面的不足。

这个插件提供了以下额外的语法：

````
```query
path: foo tag:#obsidian
title: custom query name
collapsed: true | false
context: true | false
hideTitle: true | false
hideResults: true | false
renderMarkdown: true | false
sort: alphabetical | alphabeticalReverse | byModifiedTime | byModifiedTimeReverse | byCreatedTime | byCreatedTimeReverse
```
````

同时在查询结果中也多了一个工具条：

![Pasted image 20240602114537](https://cdn.pkmer.cn/images/202406022238573.png!pkmer)

作者在这里就不再展开去探索了，留给读者去尝试。

需要注意的是这个插件并没有上架官方插件市场，需要自行手动下载安装，或者使用 BRAT 插件来安装（搜索："nothingislost/obsidian-embedded-query-control"）。

>[!Warning] 
>这个插件无法和 Text expand 结合使用，所以在 Text expand 中不要使用其扩展语法。

## Eta 模板

Eta 是一个轻量级、功能强大、可插拔的 JavaScript 模板引擎，可应用于 Node, Deno 或者浏览器中。因为 Text expand 将其作为查询结果渲染模板，所以这是我们在正式介绍其用法前的第二个必备知识点。

>[!Tip] 
>推荐大家在官方的 [Playground](https://eta.js.org/playground) 中进行尝试来了解其语法。

下面我们快速来过一遍 Eta 的语法，后续将在 Text expand 中实践，这里只是一个语法清单：

定义变量和注释:

```eta
<% var greeting = "Hello World"; %>
<% /* 注释 */ %>
<%= greeting %>
<% console.log("控制台输出: " + greeting) %>
```

HTML 转义与输出：

```eta
<% var kbd = "<kbd>html</kbd>" %>

HTML 内容 <%~ kbd %>
转义 内容 <%= kbd %>
```

第一个结果：`<kbd>html</kbd>`, 第二个结果：`&lt;kbd&gt;html&lt;/kbd&gt;`

条件语句语法为：

```eta
<% if (it.someval === "someothervalue") { %>
Display this!
<% } else { %>
They're not equal
<% } %>
```

遍历数组方式：

```eta
<% users.forEach(function(user){ %>
  <%= user.first %> <%= user.last %>
<% }) %>
```

遍历对象方式：

```eta
<% Object.keys(someObject).forEach(function(prop) { %>
  <%= someObject[prop] %>
<% }) %>
```

有关 Partial 和 Layout 部分由于用不到，所以建议读者直接看官方文档。

## Text expand 介绍

现在开始进入正题，正式介绍 Text expand 插件如何使用以及部分案例。

写作时作者当前版本号为：0.11.4。

可能有些初次接触或者偶然看到这个插件的读者会和我一样，初看官方仓库的介绍文档不知如何入手，因为里面没有一个可以复制并粘贴就可以运行的示例。不过现在你既然看到这里了，就让我来带大家打开 Text expand 的大门吧。

Text expand 因为要把执行结果插入到当前文档中，所以在执行其查询语句时，我们需要在源码模式中执行才能插入内容。

我们在 Eta 模板介绍时有点敷衍，因为我将在这里来弥补缺失的实例。

### FileParameters 类型

`FileParameters` 类型为 Text expand 查询的结果数据值的描述类型。我们通过在代码块 Eta 模板中使用 `it.current` 来获取这个对象相关信息（文件以 ` foo/bar/baz.md ` 为例）：

- `basename` 文档名称 `baz`。
- `content` 文档的原始内容。
- `extension` 文件扩展名 `.md`。
- `headings` 为一个包含文档中所有标题的数组，数组项内容为 `{ heading: "xx", level: 2, position: { start: 1, end: 1 }}`。如果文档中不存在标题，则不会定义这个属性。
- `link` 当前文档的链接 `[[baz]]`。
- `name` 文档名称 `baz.md`。
- `path` 文档路径 `foo/bar/baz.md`。
- `sections` 文档区域，值为数组，数组项为 `{type: "xx", position: {start: 1, end: 1}}`，其中 `type` 值为 `yaml` | `heading` | `paragraph` | `code` 等。
- `stat` 文档的状态数据，其值为一个对象，包含 `ctime`, `mtime` 和 `size` 属性，其中时间值均为时间缀。
- `frontmatter` 为文档的属性值。
- `links` 为一个包含文档中所有链接的数组，数组项内容为 `{displayText: "xx", link: "xx", "original: "xxx", position: { start: 1, end: 1 }}`。
- `listItems` 为列表值，为一个数组，数组项为 `{position: {}, parent: xx, task: 'x'}`，其中 `task` 属性只有列表为任务才会存在。

我们通过核心插件 Search 查询的结果放置在 `it.files` 数组中，数组项就是上面介绍的文档信息。

### 数据遍历

下面我们来使用 Eta 模板语法来遍历下面包含数组和对象的属性。

Text expand 的查询语句需要放置在代码快 `expander` 中，然后我们需要指定一个查询条件才能执行后面 Eta 模板，我们这里就在当前仓库中新建一个文档并粘贴下面的内容。

````
---
friends:
  - 露露
  - 腰哥
  - 王总
  - 一佰度
friendObject:
    name: 露露
    age: 25
    address: 上海
---

```expander
file: Untitled.md
```
````

代码中 `file: Untitled.md` 的作用是查询当前文档（注意我这里只有这一个未命名文档）。

>[!Tip] 
>注意在 Text expand 插件选项中将 【Exclude current file】保持为关闭状态。

#### 遍历数组

数组的遍历，直接使用 `forEach()` 方法就可以，当然应对不同的场景我们可以选择 JavaScript 数组的任意方法来处理查询结果数据。

````
```expander
file: Untitled.md

<% it.current.frontmatter.friends.forEach(name => {%>
    - <%= name %>
<% }) %>
```
````

结果：

![Pasted image 20240601232650](https://cdn.pkmer.cn/images/202406022238575.png!pkmer)

记得要点击一下查询按钮才会生成结果数据，此外截图中的 `<-->` 为插件的 Line ending，也就是查询生成的内容的结束符。这个结束符之前和查询代码块之前的内容，会随着每次执行查询动态改变。

#### 遍历对象

对于对象的遍历，在 JavaScript 中通常使用 `for of`，`Object.keys()` 和 `Object.values()`，我们这里以 `Object.keys()` 为例：

````
```expander
file: Untitled.md

<% const friend = it.current.frontmatter.friendObject %>
<% Object.keys(friend).forEach(key => {%>
    - <%= friend[key] %>
<% }) %>
```
````

结果：

![Pasted image 20240601233500](https://cdn.pkmer.cn/images/202406022238576.png!pkmer)

### 序列模板引擎（Sequence Template Engine）

这是一种不用写 Eta 模板的使用方式，相对来说只能处理一些简单的输出。插件为查询的结果定义了对应的固定属性（以 `$属性名` 提供），如 `$filename` 表示文件名。

我们先将所包含的属性列举出来：

- `$filename` 文件名。
- `$link` 文件链接。
- `$searchresult` Obsidian 搜索中显示的上下文，具体取决于在搜索窗口中选择的上下文数量。**暂时不知道怎么使用**。
- `$matchline` 包含查询结果所在的行。
- `$matchline:NUMBER` 查询结果包含所在行前后多少行数据（前后都将当前行算入在内）。
- `$matchline:+NUMBER` 查询结果包含所在行后面多少行数据（当前行算入在内）。
- `$matchline:COUNT:LIMIT` 返回查询结果所在位置向前数第 `COUNT` 个行的前 `LIMIT` 个字符。
- `$lines` 文档所有内容。
- `$lines:NUMBER` 返回文档前 `NUMBER` 行内容。
- `$ext` 文件的后缀名，通常为 `md`。
- `$created` 文档的创建时间（时间缀）。
- `$size` 文档的大小。
- `$parent` 文档所在父级目录。
- `$path` 文档的路径。
- `$frontmatter:NAME` 获取 YAML 中的属性。
- `$header:##` 获取所有标题，这里的 `##` 表示二级标题，多少个 `#` 号就代表查询几号标题。
- `$header:##HEADER` 同上，后面的 `HEADER` 表示所匹配的标题字符。
- `$blocks`

下面是一个简单的示例：

````
```expander
file: Untitled.md 2022-01-13
文件名为：$filename
$matchline:+0:10:2
```
````

结果：

![Pasted image 20240602164218](https://cdn.pkmer.cn/images/202406022238577.png!pkmer)

## Text expand 使用

这里我们开始进行实际应用举例，在实践中熟悉 Text expand 提供了核心功能，为自己的知识库赋能。

### $matchline 详解

`$matchline` 表示查询结果所在行，通过在后面添加一些参数我们可以获取结果所在行的前后行文本以及获取当前文本所在行的起始字符。

我们以下面的文档为查询内容，文件位置和名字读者可自行选择。

````
一
二
三1234567890
四1234567890
五1234567890
六1234567890
lorem ipsum dolor sit amet [[2022-01-13]] 我是一段文字。
七1234567890
八1234567890
九1234567890
十1234567890
十一
十二
十三
十四
十五
````

#### 获取查询文本所在行内容

这是最简单的用法，我们使用 `path:` 来查询路径，`"[[2022-01-13]]"` 来同时匹配链接。

````
```expander
path: "dir1/dir2/dir3/5.md" "[[2022-01-13]]"
$matchline
```
````

结果：

![Pasted image 20240602174713](https://cdn.pkmer.cn/images/202406022238578.png!pkmer)

#### 获取查询文本所在行前后 N 行内容

使用 `$matchline:NUMBER` 可以获取匹配文本前后 `NUMBER` 行的内容。

````
```expander
path: "dir1/dir2/dir3/5.md" "[[2022-01-13]]"
$matchline:3
```
````

结果：

![Pasted image 20240602190815](https://cdn.pkmer.cn/images/202406022238579.png!pkmer)

#### 获取查询文本所在行后 N 行内容

使用 `$matchline:+NUMBER` 可以获取匹配文本后 `NUMBER` 行的内容。

````
```expander
path: "dir1/dir2/dir3/5.md" "[[2022-01-13]]"
$matchline:+3
```
````

结果：

![Pasted image 20240602191315](https://cdn.pkmer.cn/images/202406022238580.png!pkmer)

#### 获取查询文本所在行偏移 M 行的前 N 个字符内容

使用 `$matchline:COUNT:LIMIT` 可以获取当前匹配文本所在行偏移 `COUNT` 行内容（`0` 和 `1` 均为匹配文本所在行，第 `2` 行开始才是其它行）的前 `LIMIT` 个字符。

````
```expander
path: "dir1/dir2/dir3/5.md" "[[2022-01-13]]"
<hr>
$matchline:0:12
$matchline:1:12
<hr>
$matchline:3:12
<hr>
$matchline:5:8
```
````

结果：

![Pasted image 20240602192750](https://cdn.pkmer.cn/images/202406022238581.png!pkmer)

### 以表格显示书籍信息

查询 `10 Example Data/books` 中的书籍信息，并以表格的方式插入到当前查询语句下方。

````
```expander
path: "10 Example Data/books"

^## 书籍信息

^|文件名|作者|类型|主题|总页数|
^|--|--|--|--|--|
|$link|$frontmatter:author|$frontmatter:genres|$frontmatter:booktopics|$frontmatter:totalPages|
```
````

结果：

![Pasted image 20240602171448](https://cdn.pkmer.cn/images/202406022238582.png!pkmer)

上面的查询代码中 `^` 表示页头内容，会在查询结果前显示一次，`>` 表示页尾内容，同样只渲染一次。

使用这种方式查询结果我们只能进行显示，不能进一步处理，如将类型和主题显示成列表，根据页面中 Dataview 定义的内联属性来计算阅读进度。下面我们使用 Eta 模板的方式来生成表格：

````
```expander
path: "10 Example Data/books"

## 书籍信息
<table>
  <thead>
    <tr>
      <th>文件名</th>
      <th>作者</th>
      <th>类型</th>
      <th>主题</th>
      <th>已读</th>
      <th>总页数</th>
    </tr>
  </thead>
  <tbody>
    <% it.files.forEach((file, index)=> { %>
      <%
        const readReg = /pagesRead:: (\d+)/ig;
        const totalPages = file.content.match(readReg);
        let pagesRead = 0;
        if (totalPages && totalPages.length> 0) {
          pagesRead = parseInt(totalPages[0].split('::')[1].trim())
        }
      %>
        <tr>
          <td>
            <span class="cm-hmd-internal-link">
              <span class="is-unresolved">
                <a class="cm-underline" table-index="-1>" href="<%= file.link %>" target="_blank">
                  <%= file.name %>
                </a>
              </span>
            </span>
          </td>
          <td>
            <%= file.frontmatter.author %>
          </td>
          <td>
            <ul>
              <% file.frontmatter.genres.forEach(genre=> {%>
                <li>
                  <%= genre %>
                </li>
              <% }) %>
            </ul>
          </td>
          <td>
            <ul>
              <% if (file.frontmatter.booktopics && Array.isArray(file.frontmatter.booktopics)) { %>
                <% file.frontmatter.booktopics.forEach(topic=> {%>
                  <li>
                    <%= topic %>
                  </li>
                <% }) %>
              <% } %>
            </ul>
          </td>
          <td>
            <%= pagesRead %>
          </td>
          <td>
            <%= file.frontmatter.totalPages %>
          </td>
        </tr>
      <% }) %>
  </tbody>
</table>
```
````

结果：

![Pasted image 20240602210857](https://cdn.pkmer.cn/images/202406022238583.png!pkmer)

这个结果其实并不好，虽然我们添加了列表显示和解析出来了 Dataview 内联字段 `pagesRead` 的值，但是表格的渲染需要我们自己去写样式或者把已有的样式类手动添加上去。还有一个问题作者尝试了各种办法所生成的文件名链接无法跳到目录文档中。

这个示例不一定合理，如果有读者有更好的方法，欢迎告之我，虚心求教~。

所以，后面我就不再举例子了，时间精力有限，我们还有更多的插件去探索。

## 使用问题

因为 Text expand 是将查询结果作为文档内容的一部分，这样会导致一个问题，多次执行同一个查询。以 `$matchline` 为例会出现来回内容反复跳动：

````
这一行包含双链 [[2022-01-13]] 笔记。

```expander
file: Untitled.md 2022-01-13
$matchline
```
````

Gif 截图：

![Kapture 2024-06-02 at 13.44.29](https://cdn.pkmer.cn/images/202406022238584.gif!pkmer)

这个问题很可能是因为我们未开启【Exclude current file】 选项。

## 总结

本文主要介绍了 Obsidian 的核心插件 Search 以及第三方扩展（Obsidian Query Control）的简单使用。介绍了 Text expand 插件的一些使用方法。虽然使用案例给的很少，但是相较于目前网上的一些文章，读者阅读完后是能够上手进一步去深入了解的。

这里推荐读者尽量使用其序列模板的方式来使用，Eta 模板方式虽然使用 JavaScript 编程自由度较高、较灵活，但是所花费的时间和随之后来的问题会让你棘手，有点失去重心了。

这个插件我们不一定会在自己的笔记系统中用到，但是多了解一下技多不压身，什么时候突然遇到问题时或许有其用武之地，存在是有它的道理的。

最后，动动你发财的小手，关注，点赞一键三连，你的鼓励是我坚持下去的动力。有任何问题欢迎加作者微信（`jenemy_xl`）沟通交流一起成长。

## 参考

- [Search - Obsidian Help](https://help.obsidian.md/Plugins/Search)
- [Eta | Eta](https://eta.js.org/)
- [Dataview Example Vault (s-blu.github.io)](https://s-blu.github.io/obsidian_dataview_example_vault/)