---
uid: 20230818000728
title: Obsidian 插件：Obsidian Handlebars Template Plugin
tags: ['obsidian插件', 'readme']
description: 这是一个 Obsidian 插件，它为笔记添加了对 handlebars 模板块的支持。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Obsidian Handlebars Template Plugin

> [!Note] 插件名片
> - 插件名称：Obsidian Handlebars Template Plugin
> - 插件作者：Sean Quinlan
> - 插件说明：这是一个 Obsidian 插件，它为笔记添加了对 handlebars 模板块的支持。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/sbquinlan/obsidian-handlebars)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsidian-handlebars)

## 概述

这是一个 Obsidian 插件，它为笔记添加了对 handlebars 模板块的支持。

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/sbquinlan/obsidian-handlebars/master/README.md)

---

## Readme(翻译）

下面是 [[obsidian-handlebars]] 插件的自述翻译

# Obsidian Handlebars 模板插件

这是一个为 [Obsidian](https://obsidian.md) 添加对 [Handlebars](https://handlebarsjs.com/) 模板引擎的支持的插件。它还提供了一个 [块助手](https://handlebarsjs.com/guide/block-helpers.html)，['notes'](#notes)，允许在存储库中迭代笔记并生成 Markdown。

由于这是一个非常简单（但功能强大）的插件，它非常小并且支持移动设备。

基本示例

使用在 YAML 前置元数据中定义的变量生成 Markdown：

`````md
---
tags:
  - cool
  - awesome
---

```handlebars
tags: {{#each frontmatter.tags}}{{.}}, {{/each}}
```
`````

生成结果：

```
tags: cool, awesome, 
```

每个块都独立进行编译和渲染。这意味着如果在一个块中定义了一个局部变量，它在另一个块中将无法使用。提供给每个块的上下文在 [main.ts](/main.ts) 中定义了 ```NoteMetadata``` 接口。

```ts
interface NoteMetadata {
  'basename': string,
  'name': string,
  'path': string, 
  'extension': string,
  'frontmatter'?: Record<string, any>
}
```

## 笔记

使用提供的笔记助手通过路径请求笔记。如果请求路径是一个目录，则会返回所有包含的文件（非递归）。每个返回的文件项的上下文都具有 NoteMetadata 接口，并支持 ```@index```。

要生成一个链接列表，链接到 'Ideas' 文件夹中的所有笔记：

`````md
```handlebars
{{#notes 'Ideas'}}  - {{@index}} [{{name}}]({{path}})
{{/notes}}
```
`````

使用 link partial 来生成指向笔记或文件的内部链接。

```md
```handlebars
{{#notes 'Ideas'}}  - {{>link path}}
{{/notes}}
```

`````

link partial可以接受文件路径作为参数，也可以接受字典参数以进一步自定义链接。
- ```path```: 要链接到的路径
- ```rel```: 渲染链接的笔记的路径，使其相对而不是绝对
- ```alias```: 用于链接的替代名称
- ```hash```: 用于链接的#hash，用于在笔记中进行深度链接到锚点

```md
```handlebars
{{#notes 'Ideas'}}  - {{>link path=path rel=../path alias=@index}}
{{/notes}}
```
`````

## 缺失的功能

> 它是否具有允许您定义自己的 handlerbar 部分或助手的设置？

没有

> 当存在语法错误时，是否有错误指示？

同样没有

> 好吧，那么...

可能没有，这是一个非常简单的插件：只有一个直接依赖项和少于 100 行代码。目前非常容易手动自定义，这也是我要说的...

贡献

我非常乐意审查任何更改。在决定 fork 或 PR 时，请记住我重视以下几点：

- 支持移动端（无 Node.js 包，仅纯 JS 依赖）
- 保持简洁（无大型依赖，例如 React.js）
- 保持简单



