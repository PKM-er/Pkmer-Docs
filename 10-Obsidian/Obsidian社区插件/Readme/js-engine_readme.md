---
uid: 20231026111420
title: Obsidian 插件：【Readme】JS Engine
tags: ['obsidian插件', 'readme']
description: 从您的笔记中运行JavaScript。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】JS Engine

> [!Note] 插件名片
> - 插件名称：JS Engine
> - 插件作者：Moritz Jung
> - 插件说明：从您的笔记中运行 JavaScript。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/mProjectsCode/obsidian-js-engine-plugin)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?js-engine)

## 概述

从您的笔记中运行 JavaScript。

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/mProjectsCode/obsidian-js-engine-plugin/master/README.md)

---

## Readme(翻译）

下面是 [[js-engine]] 插件的自述翻译

# Obsidian JS 引擎插件

这个 Obsidian 插件允许你使用特殊的代码块在你的笔记中运行 JavaScript。

## 使用方法

首先使用 `js-engine` 插件创建一个代码块。在代码块内部，您可以编写任何 JavaScript 代码，并在最后返回一个值。

插件将渲染返回的值，而不是代码块本身。当您不返回任何值时，插件将不会渲染任何内容，代码块将不可见。

## API 文档

以下变量在代码块中可用。

| 名称       | 类型                                             |
| ---------- | ------------------------------------------------ |
| app        | `App` (Obsidian)                                 |
| engine     | `API` (此插件)                                   |
| context    | `ExecutionContext` (此插件) 或 `undefined`       |
| component  | `Component` (Obsidian)                           |
| container  | `HTMLElement`                                    |

可以在 [这里](https://mprojectscode.github.io/obsidian-js-engine-plugin/classes/API.API.html) 找到 API 和代码块内可用的类型的文档。

## 例子

### Markdown 构建器

```js
let markdownBuilder = engine.markdown.createBuilder();

markdownBuilder.createHeading(2, '测试标题');
markdownBuilder.createParagraph('这是一个测试段落。');

markdownBuilder.createHeading(3, '这是一个子标题');
markdownBuilder.createHeading(4, '这是一个子子标题');
markdownBuilder.createParagraph('这是另一个测试段落。');
```

#### 输出

> ## 测试标题
>
> 这是一个测试段落。
>
> ### 这是一个子标题
>
> #### 这是一个子子标题
>
> 这是另一个测试段落。

### 将字符串渲染为 Markdown

```js
let str = '*test*';
return str;
```

```js
let str = '*test*';
return engine.markdown.create(str);
```

顶部的示例将字符串渲染为纯文本，而第二个示例将文本渲染为 Markdown。

> \* 测试\*

> _测试_

### 导入 JS

```js
let lib = await engine.importJs('lib.js');
return lib.getGreeting();
```

在存储库的根目录下有一个名为 `lib.js` 的文件。

```js
export function getGreeting() {
	return 'Hello!';
}
```

> 你好！