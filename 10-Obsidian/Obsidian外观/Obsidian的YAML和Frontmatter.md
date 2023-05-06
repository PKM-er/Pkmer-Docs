---
uid: 20230329145808
title: Obsidian 的 YAML 和 Frontmatter
description: 
tags: 
author: OS
type: other
draft: false
editable: false
modified: 20230401230258
public: yes
---

# Obsidian 的 YAML 和 Frontmatter

## 1. 前言

YAML 作为一种用来写文件配置的语言，简洁而又强大。

在 Obsidian 中只是为了增加笔记的元数据而存在的，在 Obsidian 中需要加上 YAML 时，需要在文件的开头（是必须在文件的开头加入）输入两个三横杠 `-`，如下：

```yaml
---
YAML 语言
---
```

接着再在下边的三横杠的下边加上一个空行，以防 Makrdown 渲染器错将下一行的内容进行渲染。而这两个三横杠包括的区域一般被称为 `Front-matter` 。

如果你从之前就很在意 Obsidain 中的笔记以及文章的元数据建立，例如，你每次一定要附上创建日期以及标签以及相应的类别等，那么在笔记中插入元数据的方式，除了方便你现在检索，也方便未来的插件操作等。

> [!Note] 功能名片
>- 功能名称：Front-matter
>- 功能状态：默认功能
>- 功能依赖：官方功能，默认即支持，需要安装 0.9.16 以上版本

当前 Obsidian 包含三个原生的 key：`tags`、`aliases` 以及 `cssclass`。

## 2. 基础用法

Obsidian 其实在帮助文档中已经说得很清楚了

示例：

```yaml
---
key: value【你可以理解成参数名和参数值，中间用英文冒号分隔，这就是有效的YAML语法】
key2: value2
multiple: [one, two, three]【对于多值可以采用下面的样式】
multiple:
- one
- two
- three
---
```

你的所有参数都应当放在同一个 Front matter 中，例如其中的 Key、Key2、Key3 可以是多个参数名，如果是一个 Key 对应多个参数的话，就需要用 [ ] 将他们概括起来，或者用 - 来将它们从上到下排列。

而在 Obsidian 0.9.16 后， Obsidian 支持的别名（alias）需要且仅能使用 `Front-matter` 中进行标注来实现。如下：

```yaml
---
alias: 别名1
aliases: [别名2, 别名3, 别名4]
aliases:
- 别名2
- 别名3
- 别名4
---
```

且 Obsidian 也支持在 YAML front matter 中插入标签（tag）的元数据，例如：

```yaml
---
tag: 标签1
tags: [标签1, 标签2, 标签3] #还可以是"#pkm"等
tags:
- 标签1
- 标签2
- 标签3
---
```

除了标签、别名外，Obsidian 没有其它的元数据原生支持，但是所有的元数据都已经存在 Obsidian 的笔记对应的 Cache 里面，因此 Obsidian 的开发者也可以根据这些 Cache 开发一些独特的插件。

## 3. 高级用法？

Obsidian 目前使用或优化 YAML Front-matter 的插件并不算多，据我所知仅有以下的几个：

- Dataview —— 根据 YAML Front matter 来生成表格
- Query2table —— 根据 YAML Front matter 来生成表格，且支持筛选，但稳定性不足
- Metatable —— 优化 YAML Front matter 的显示效果
- Text{{expand}} —— 抽取 YAML Front matter 的值
- Juggl —— 根据 YAML Front matter 的内容生成线段联系

其中 Dataview 插件以及 Query2table 插件都是“基本”基于 YAML Front matter 的数据来生成表格或者列表的，但是此处有些许的不同，Query2table 生成的表格可以让你筛选内容，以及在操作易用性上，Query2table 也许更容易学习，但是相反地，dataview 的检索功能强大而且支持多种检索排序等，两者生成的表格分别支持了不同的特性，其中 Dataview 已经支持 CSS 定义对应的样式，而 Query2table 的上一次更新已经是四个月前的事情了。

如果你已经按部就班设置了适合自己的 YAML Frontmatter ，那么你可以根据以下的代码块适应性修改来生成自己的 Dataview 表格：

```text
​```Dataview
table Completed, Priority, Project, defer-date as "Defer Date", due-date as "Due Date", recur-length as "Recur Length", defer-date + recur-length as "Next Date"
from #tasks
where defer-date < date(now) and completed != 1
sort doDate asc
​```
```

其中 table 后边跟着的是每一列的列名称（对应 YAML Front matter 的参数），这些列的名称可以自定义也可以用原来的 YAML Front matter 的名称，from 指的是基于标签、文件关键词或什么检索式等（默认支持标签），where 指的是上边我们获取的所有笔记中匹配对应的要求的，例如这里的意思就是“目前还没完成的任务或笔记”，sort 指的是要怎么排序；由于 Dataview 有很多的不同的参数供你来获取从而生成对应的表格，因此此处请务必参考官方的文档：[Dataview Document](https://link.zhihu.com/?target=https%3A//blacksmithgu.github.io/obsidian-dataview/%23/)；此外，关于 Dataview 的文章也在来的路上了 #FLAG 1。

而 Query2table 也是类似的，采用下方的代码生成：

```text
​```query2table
query: "tag: article"
fields: 
    - title: note
    - status: text
approxNumberOfResults: 5
​```
```

其中 query 指的是采用什么检索式，这里的检索式采用 Obsidian 支持的检索式即可，fields 指的是将哪些 YAML Front matter 的参数拿来使用，最后 approxNumberOfResults 指的是获取多少行。
