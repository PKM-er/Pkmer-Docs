---
uid: 2023120719422163
title: Obsidian 插件：【Readme】RunJS
tags: ['obsidian插件', 'readme']
description: RunJS是一个在Obsidian（https://obsidian.md）中运行JavaScript代码的插件。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】RunJS

> [!Note] 插件名片
> - 插件名称：RunJS
> - 插件作者：eoureo
> - 插件说明：RunJS 是一个在 Obsidian（<https://obsidian.md）中运行> JavaScript 代码的插件。>
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/eoureo/obsidian-runjs)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?runjs)

## 概述

RunJS 是一个在 Obsidian（<https://obsidian.md）中运行> JavaScript 代码的插件。>

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/eoureo/obsidian-runjs/master/README.md)
>

---

## Readme(翻译）

下面是 [[runjs]] 插件的自述翻译

# Obsidian - RunJS

*让我们在 Obsidian 中轻松简单地运行 JavaScript。*

RunJS 是一个在 [Obsidian](https://obsidian.md/) 中运行 JavaScript 代码的插件。您可以直接运行简单的代码片段，而无需创建单独的插件。但是，与其他插件一样，您可以运行管理 Obsidian 和笔记的代码。代码可以在 Obsidian 笔记中以代码块 (.md) 的形式编写，也可以作为单独的文件 (.js, .mjs)。您还可以选择将代码分解为可执行代码和模块，以便更好地组织。

![Obsidian-RunJS 介绍](https://cdn.pkmer.cn/covers/runjs_2_0.gif)

在这个例子中，执行了 [Insert Callout](https://github.com/eoureo/obsidian-runjs/discussions/17) 和 [width-100](https://github.com/eoureo/obsidian-runjs/discussions/10) 命令。您可以使用“打开代码文件”菜单查看和修改源代码。

## 特点

- **运行方式**：有多种运行代码的方式。
  - **代码列表视图**：您可以查看所有代码列表。然后通过单击运行代码或查看代码。
  - **运行代码模态框**：在代码组的层次结构中选择一个代码，然后运行它。
  - **自动启动**：加载 RunJS 时自动运行代码。
  - **添加命令**：将要执行的命令添加到命令面板。然后可以在其上额外设置一个热键。
  - **添加 Ribbon 图标**：在 Ribbon 中添加一个图标，以立即运行代码。
- **代码类型**：支持 JavaScript 模块系统。
  - **脚本**：
    - 在笔记的代码块中将代码设置为 t："s"（默认值）
    - 在 RunJS 脚本文件夹中的 js 文件
  - **模块**：
    - 在笔记的代码块中将代码设置为 t："m"
    - 在 RunJS 脚本文件夹中的.mjs 文件
- **编码**：在开发其他插件时，可以直接使用代码而无需修改。

## 开始 - 你好，世界

JavaScript 代码块（js，javascript）必须具有以下指令格式，才能被识别为 RunJS 中的代码。

- RunJS="name"
- RunJS="group/name"
- RunJS="{n:'name'}"
- RunJS="{n:'group/name',t:'s'}"

在 .js 和 .mjs 文件中，使用如下方式。

```js
/**
 * @RunJS group/name
 * @RunJS {n:'group/name'}
 */
```

如果你的代码在 .js 文件（可执行文件）或 .mjs 文件（模块）中，你可以直接将其放在 RunJS 脚本文件夹中，无需任何指令。

````markdown
```js RunJS="Test/Hello, World!"
new Notice("Hello, World!");
```
或者
```js RunJS="{n:'Test/Hello, World!',t:'s'}"
new Notice("Hello, World!");
```
````

![Obsidian-RunJS Hello, World!](https://cdn.pkmer.cn/covers/runjs_2_1.gif)

你可以在下面的链接中了解更多。

Hello, World! : Discussions - Codes [https://github.com/eoureo/obsidian-runjs/discussions/2](https://github.com/eoureo/obsidian-runjs/discussions/2)

如何获取代码

以下链接中的代码块只是将代码块本身粘贴到一个笔记文件中。如果代码在.js 文件或.mjs 文件中，您可以将文件放在设置为 RunJS 脚本文件夹的文件夹中。

某些代码可能需要根据您的环境进行修改。通常需要更改的设置位于代码的顶部。

- **RunJS 的代码**：您可以在 [讨论-RunJS的代码](https://github.com/eoureo/obsidian-runjs/discussions/categories/codes-of-runjs) 中看到一些有用的代码。我会继续在这里发布代码。
  - [使用-VSCode，Total Commander打开](https://github.com/eoureo/obsidian-runjs/discussions/8)
  - [管理Frontmatter](https://github.com/eoureo/obsidian-runjs/discussions/10)：width-100，修改日期
  - [使用内部插件-每日笔记](https://github.com/eoureo/obsidian-runjs/discussions/13)：今天，前一天，后一天
  - [使用插件-Templater](https://github.com/eoureo/obsidian-runjs/discussions/19)：tp，append_template_to_active_file
  - [编辑笔记](https://github.com/eoureo/obsidian-runjs/discussions/12)：文件路径 URL，JS 注释
  - [模块-RunJS-Utils.mjs](https://github.com/eoureo/obsidian-runjs/discussions/9)：getSelection()，setSelection(text)
  - [插入Callout（用于以各种方式插入Callout的模块和代码）](https://github.com/eoureo/obsidian-runjs/discussions/17)
  - [事件处理程序-file-menu，editor-menu](https://github.com/eoureo/obsidian-runjs/discussions/24) - 复制文件路径，使用 VSCode 打开 - 选择
  - [事件处理程序-code-menu（RunJS）](https://github.com/eoureo/obsidian-runjs/discussions/27) - 复制代码名称，打开对象模态框
- **代码分享**：请将您的代码分享和介绍到 [讨论-代码分享](https://github.com/eoureo/obsidian-runjs/discussions/categories/codes-share) 中。

> [!caution]
> *代码可以做与其他插件相同的事情。因此，糟糕的代码可能会干扰 Obsidian 或损坏笔记。在执行代码之前，确保代码是安全的非常重要。*

## 有用的起始代码

```js
// 使用 obsidian
import * as obsidian from 'obsidian';

// 这个插件
const runJS = this;

// 使用其他插件
const dailyNotes = runJS.app.internalPlugins.plugins["daily-notes"];
const dataviewAPI = runJS.app.plugins.plugins["dataview"].api;
const templater = runJS.app.plugins.plugins["templater-obsidian"].templater;

// 使用其他模块
const url = require('url');
```

## 编写代码的参考资料

- 主页 - 开发者文档
  <https://docs.obsidian.md/Home>
- obsidianmd/obsidian-api: 最新 Obsidian API 的类型定义。
  <https://github.com/obsidianmd/obsidian-api>
- Obsidian 插件开发者文档 | Obsidian 插件开发者文档
  <https://marcus.se.net/obsidian-plugin-docs/>

## 例子

### Obsidian 图标列表

从上面的示例（"Hello, World!"）继续，将以下代码写在另一个代码块中。然后刷新代码列表，您将看到新的代码。然后点击运行。

````markdown
```js RunJS="{n:'Obsidian/Open icon modal',t:'s'}"
// const runJS = this.app.plugins.plugins["runjs"];
const runJS = this;
runJS.openIconModal();
```
````

![Obsidian-RunJS图标模态框](https://cdn.pkmer.cn/covers/runjs_2_2.gif)

您可以在下面的链接中了解更多信息。

打开图标模态框：讨论 - 代码 [https://github.com/eoureo/obsidian-runjs/discussions/3](https://github.com/eoureo/obsidian-runjs/discussions/3)

### 脚本和模块

以下是使用脚本和模块创建和使用代码的示例。

列表中显示了名为 "code 1" 和 "code 2" 的脚本。除了自己的可执行代码外，此脚本还使用了 "module 1"、"module 2" 和 "module 3" 中的函数。

执行结果将写入日志文件（在插件设置中设置的文件）。

test.md - 脚本和模块可以放在一个代码块中，可以是单个文件或拆分为多个文件。

````markdown

```js RunJS="{n:'Test/code 1', t:'s'}"
import { Notice } from 'obsidian';
import { myFunc1 } from 'Test/module 1'; // codeblock: pages/test.md
import { myFunc2 } from 'Test/module 2'; // file: ./testFolder/module 2.mjs
import { myFunc3 } from './testFolder/module 3.mjs'; // file

new Notice("[code 1] Hello, World!");
console.log("[code 1] Hello, World!");
this.log("info", "[code 1]", "Hello, World!");

myFunc1(this.app, "[code 1] Run module func1.");
myFunc2("[code 1] Run module func2.");
myFunc3("[code 1] Run module func3.");
```

```js RunJS="{n:'Test/module 1', t:'m'}"
export function myFunc1(app, ...args) {
  let runJS = app.plugins.plugins["runjs"];
  runJS.log("info", "module 1:", ...args);
  console.log("module 1:", ...args);
}
```

````

Scripts_RunJS/testFolder/test.js - 保存在插件设置中设置的脚本文件存储文件夹中的脚本（.js 文件）

```js
/**
 * js file - script. executable code
 * 
 * @RunJS {n:'Test/code 2'}
 */
import { myFunc1 } from 'Test/module 1'; // codeblock: pages/test.md
import { myFunc2 } from 'Test/module 2'; // file: ./testFolder/module 2.mjs
import { myFunc3 } from './module 3.mjs'; // file: ./testFolder/module 3.mjs

console.log("[code 2] Hello, World!");
this.log("error", "[code 2] Hello, World!");

myFunc1(this.app, "[code 2] Run module func1.");
myFunc2("[code 2] Run module func2.");
myFunc3("[code 2] Run module func3.");
```

Scripts_RunJS/testFolder/module 2.mjs - 模块文件

```js
/**
 * mjs file - module
 * 
 * @RunJS {n:'Test/module 2'}
 */
import { Notice } from 'obsidian';

export function myFunc2(...args) {
  new Notice("module 2:" + args.join(", "));
  console.log("module 2:",...args);
}
```

Scripts_RunJS/testFolder/module 3.mjs - 模块文件

```js
/**
 * mjs file - module
 * 
 * X@RunJS {n:'group/module 3'} // not use name
 */
import { Notice } from 'obsidian';

export function myFunc3(...args) {
  new Notice("module 3:" + args.join(", "));
  console.log("module 3:",...args);
}
```

您可以在下面的图像中看到上述代码的运行情况。

![Obsidian-RunJS test](https://cdn.pkmer.cn/covers/runjs_2_3.gif)

## 设置选项卡

这是 RunJS 的设置对话框。

![Obsidian-RunJS设置](https://cdn.pkmer.cn/covers/runjs_2_4.png!pkmer)

## API

- openCodeListModal(groupRoot?: string) 打开代码列表模态框（groupRoot?: string）
- openObjectModal(object?: { [key: string]: any }, callback?: (key: string) => void) [https://github.com/eoureo/obsidian-runjs/discussions/7](https://github.com/eoureo/obsidian-runjs/discussions/7) 打开对象模态框（object?: { [key: string]: any }, callback?: (key: string) => void）
- openIconModal(callback?: (icon: string) => void) [https://github.com/eoureo/obsidian-runjs/discussions/3](https://github.com/eoureo/obsidian-runjs/discussions/3) 打开图标模态框（callback?: (icon: string) => void）
- runCodeByName(name: string) 根据名称运行代码（name: string）
- dialogs [https://github.com/eoureo/obsidian-runjs/discussions/20](https://github.com/eoureo/obsidian-runjs/discussions/20):
  - alert(message: string) 弹出警告框（message: string）
  - confirm(message: string) 弹出确认框（message: string）
  - prompt(message: string, messagDefault: string = "", placeholder: string = "", multiLine: boolean = false) 弹出提示框（message: string, messagDefault: string = "", placeholder: string = "", multiLine: boolean = false）
  - suggest(message: string, list: string[], placeholder: string = "") 弹出建议框（message: string, list: string[], placeholder: string = ""）
捐赠

如果您喜欢这个插件，请考虑捐赠以支持持续开发。
