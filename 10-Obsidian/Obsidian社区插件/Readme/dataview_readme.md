---
uid: 2023080322170953
title: Obsidian 插件：【Readme】Dataview
tags: ['搜索/排序', 'obsidian插件', 'readme']
description: 为 Obsidian 提供数据查询能力，这需要学习一些较为简单的语法，但可以实现丰富的查询和组合效果。包括生成表格，标签，跟踪特定的笔记变化，选择具体笔记内容。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Dataview

> [!Note] 插件名片
> - 插件名称：Dataview
> - 插件作者：Michael Brenan
> - 插件说明：为 Obsidian 提供数据查询能力，这需要学习一些较为简单的语法，但可以实现丰富的查询和组合效果。包括生成表格，标签，跟踪特定的笔记变化，选择具体笔记内容。
> - 插件分类：[' 搜索/排序 ', 'obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/blacksmithgu/obsidian-dataview)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?dataview)

## 概述

为 Obsidian 提供数据查询能力，这需要学习一些较为简单的语法，但可以实现丰富的查询和组合效果。包括生成表格，标签，跟踪特定的笔记变化，选择具体笔记内容。

![Dataview](https://cdn.pkmer.cn/covers/dataview.PNG!pkmer)

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/blacksmithgu/obsidian-dataview/master/README.md)
>

---

## Readme(翻译）

下面是 [[dataview]] 插件的自述翻译

# Obsidian Dataview

将你的 [Obsidian Vault](https://obsidian.md/) 视为一个可以查询的数据库。提供了一个 JavaScript API 和基于流水线的查询语言，用于从 Markdown 页面中过滤、排序和提取数据。请参阅下面的示例部分获取一些快速示例，或查看完整的 [参考文档](https://blacksmithgu.github.io/obsidian-dataview/) 获取所有详细信息。

## 示例

显示游戏文件夹中的所有游戏，按评分排序，并附带一些元数据：

~~~markdown
```dataview
table time-played, length, rating
from "games"
sort rating desc
```
~~~

![游戏示例](docs/docs/assets/game.png)

---

列出所有的 MOBA 或 CRPG 游戏。

~~~markdown
```dataview
list from #game/moba or #game/crpg
```
~~~

![游戏列表](docs/docs/assets/game-list.png)

---

列出所有未完成项目中的 Markdown [任务](https://blacksmithgu.github.io/obsidian-dataview/data-annotation/#tasks)：

~~~markdown
```dataview
task from #projects/active
```
~~~

![任务列表](docs/docs/assets/project-task.png)

---

显示在 2021 年阅读的 `books` 文件夹中的所有文件，按流派分组并按评分排序：

~~~markdown
```dataviewjs
for (let group of dv.pages("#book").where(p => p["time-read"].year == 2021).groupBy(p => p.genre)) {
	dv.header(3, group.key);
	dv.table(["Name", "Time Read", "Rating"],
		group.rows
			.sort(k => k.rating, 'desc')
			.map(k => [k.file.link, k["time-read"], k.rating]))
}
```
~~~

![按流派分类的书籍](docs/docs/assets/books-by-genre.png)

## 用法

有关所有功能、说明和示例的完整描述，请参阅 [参考文档](https://blacksmithgu.github.io/obsidian-dataview/)。为了更简洁地概述，让我们来看一下 Dataview 的两个主要方面：*数据*和*查询*。

#### **数据**

Dataview 通过从**Markdown 前置元数据**和**内联字段**中提取信息来生成*数据*。

- Markdown 前置元数据是包含在 markdown 文档顶部的 `---` 之间的任意 YAML，可以存储有关该文档的元数据。
- 内联字段是 Dataview 的一个功能，允许您通过 `Key:: Value` 语法直接在 markdown 文档中内联编写元数据。

以下是两者的示例：

```yaml
---
alias: "document"
last-reviewed: 2021-08-17
thoughts:
  rating: 8
  reviewable: false
---
```

```markdown

# Markdown 页面

基本字段:: 值
**粗体字段**:: 很好！
你还可以写 [字段:: 内联字段]; 多个 [字段2:: 在同一行上]。
如果你想隐藏 (字段3:: 键)，你也可以这样做。

#### **查询**

一旦您使用元数据对文档等进行了注释，您就可以使用Dataview的四种查询模式之一进行查询：

1. **Dataview查询语言（DQL）**：一种基于流水线的、类似于SQL的表达式语言，可以支持基本的用例。有关详细信息，请参阅[文档](https://blacksmithgu.github.io/obsidian-dataview/query/queries/)。

   ~~~markdown
   ```dataview
   TABLE file.name AS "File", rating AS "Rating" FROM #book
   ```

   ~~~

2. **内联表达式**：您可以直接嵌入到markdown中并在预览模式下进行评估的DQL表达式。有关允许的查询，请参阅[文档](https://blacksmithgu.github.io/obsidian-dataview/reference/expressions/)。

   ```markdown
   We are on page `= this.file.name`.
   ```

3. **DataviewJS**：一个强大的JavaScript API，可以完全访问Dataview索引和一些方便的渲染工具。如果您了解JavaScript，强烈推荐使用此功能，因为它比查询语言更强大。有关更多详细信息，请查看[文档](https://blacksmithgu.github.io/obsidian-dataview/api/intro/)。

   ~~~markdown
   ```dataviewjs
   dv.taskList(dv.pages().file.tasks.where(t => !t.completed));
   ```
   ~~~

1. **内联 JS 表达式**：与内联表达式相当的 JavaScript 版本，允许您执行任意的内联 JS 代码：

   ~~~markdown
   This page was last modified at `$= dv.current().file.mtime`.
   ~~~

#### JavaScript 查询：安全注意事项

JavaScript 查询非常强大，但它们在与任何其他 Obsidian 插件相同的访问级别上运行。这意味着它们有可能重写、创建或删除文件，以及进行网络调用。通常情况下，您应该自己编写 JavaScript 查询，或使用您理解的脚本或来自可靠来源的脚本。常规的 Dataview 查询被沙盒化，不能对您的保险库进行负面更改（作为代价，功能更加有限）。

## 贡献

欢迎通过错误报告、错误修复、文档和一般改进来进行贡献。对于更重要的功能工作，请提出关于功能想法的问题/与我联系，以便我们评估可行性和最佳实施方法。

#### 本地开发

代码库使用 TypeScript 编写，并使用 `rollup` / `node` 进行编译；首次设置时，您只需要执行拉取、安装和构建操作：

```console
foo@bar:~$ git clone git@github.com:blacksmithgu/obsidian-dataview.git
foo@bar:~$ cd obsidian-dataview
foo@bar:~/obsidian-dataview$ npm install
foo@bar:~/obsidian-dataview$ npm run dev
```

这将安装库，构建 dataview，并将其部署到 `test-vault`，然后您可以在 Obsidian 中打开它。这还会将 `rollup` 设置为监视模式，因此对代码的任何更改都将重新编译，并且测试 vault 将自动重新加载。

#### 安装到其他保险库

如果您想在您的真实保险库中使用 dataview，您可以手动构建和安装。Dataview 主要是一个只读存储，所以这应该是安全的，但是如果您正在调整执行文件编辑的功能，请小心！

```console
foo@bar:~/obsidian-dataview$ npm run build
foo@bar:~/obsidian-dataview$ ./scripts/install-built path/to/your/vault
```

#### 构建文档

我们使用 `MkDocs` 来进行文档编写（位于 `docs/` 目录下）。您需要安装 Python 和 pip 来在本地运行它：

```console
foo@bar:~/obsidian-dataview$ pip3 install mkdocs mkdocs-material mkdocs-redirects
foo@bar:~/obsidian-dataview$ cd docs
foo@bar:~/obsidian-dataview/docs$ mkdocs serve
```

这将启动一个本地 Web 服务器，渲染 `docs/docs` 目录下的文档，并在更改时实时刷新。

一旦文档更改被合并到主分支，它们将自动推送到 `blacksmithgu.github.io/obsidian-dataview`。

在您自己的插件中使用 Dataview 类型

Dataview 将其所有 API 的 TypeScript 类型发布到 NPM（作为 `blacksmithgu/obsidian-dataview`）。有关如何使用 Dataview 进行开发的说明，请参阅 [设置说明](https://blacksmithgu.github.io/obsidian-dataview/plugin/develop-against-dataview/)。

支持

您觉得 Dataview 插件有帮助，并希望支持它吗？我接受捐赠，用于未来的开发工作。通常情况下，我不接受漏洞赏金/功能请求的付款，因为财务激励会增加压力/期望，而我希望避免这种情况发生在一个业余项目上！

[![paypal](https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif)](https://www.paypal.com/donate?business=Y9SKV24R5A8BQ&item_name=Open+source+software+development&currency_code=USD)
