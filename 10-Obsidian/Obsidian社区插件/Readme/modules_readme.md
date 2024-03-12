---
uid: 20231026111420
title: Obsidian 插件：【Readme】Modules
tags: ['obsidian插件', 'readme']
description: 从保险库和互联网加载JavaScript和相关语言（如TypeScript）模块。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】Modules

> [!Note] 插件名片
> - 插件名称：Modules
> - 插件作者：polyipseity
> - 插件说明：从保险库和互联网加载 JavaScript 和相关语言（如 TypeScript）模块。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/polyipseity/obsidian-modules)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?modules)

## 概述

从保险库和互联网加载 JavaScript 和相关语言（如 TypeScript）模块。

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/polyipseity/obsidian-modules/main/README.md)

---

## Readme(翻译）

下面是 [[modules]] 插件的自述翻译

# Obsidian 模块 [![release](https://img.shields.io/github/v/release/polyipseity/obsidian-modules)][最新版本] [![Obsidian下载量](https://img.shields.io/badge/dynamic/json?logo=Obsidian&color=%238b6cef&label=下载量&query=$["modules"].downloads&url=https://raw.githubusercontent.com/obsidianmd/obsidian-releases/master/community-plugin-stats.json)][社区插件]

[给我买杯咖啡]: <https://buymeacoffee.com/polyipseity>

[给我买杯咖啡/嵌入]: <<https://img.buymeacoffee.com/button-api/?text>=给我买杯咖啡&emoji=&slug=polyipseity&button_colour=40DCA5&font_colour=ffffff&font_family=Lato&outline_colour=000000&coffee_colour=FFDD00>

[Obsidian]: <https://obsidian.md/>

[更新日志]: <https://github.com/polyipseity/obsidian-modules/blob/main/CHANGELOG.md>

[社区插件]: <https://obsidian.md/plugins?id=modules>

[最新版本]: <https://github.com/polyipseity/obsidian-modules/releases/latest>

[其他事项]: <https://github.com/polyipseity/obsidian-monorepo>

[插件库]: <https://github.com/polyipseity/obsidian-plugin-library>

[仓库]: <https://github.com/polyipseity/obsidian-modules>

[预告片]: <https://raw.githubusercontent.com/polyipseity/obsidian-modules/main/assets/trailer.png>

从 Vault 和互联网加载 JavaScript 和相关语言（如 TypeScript）模块。

[![给我买杯咖啡/嵌入]][给我买杯咖啡]

__[仓库] · [更新日志] · [社区插件] · [其他事项] · [功能](#features) · [安装](#installation) · [使用](#usage) · [贡献](#contributing) · [安全性](#security)__

![预告片]

对于首次使用者，请先阅读 [安装](#installation) 部分！

此文件在首次安装时会自动打开。您可以在设置或命令面板中重新打开它。

## 特点

- 在所有平台上从保险库和互联网加载 JavaScript 和 TypeScript 模块。
- 无需配置。
- 解析相对路径、保险库路径、Markdown 链接、wikilinks 和外部链接。
- 将 Markdown 文件加载为代码。
- 支持在模块内使用其他模块。
- 加载 CommonJS (`module.exports`) 和 ES 模块 (`export`)。
- 支持 CommonJS 模块的循环依赖。
- 可配置的 require 名称。
- 添加用于调试的源映射。
- 支持 Dataview 和 Templater 等流行插件。

## 安装

1. 安装插件。
   - 社区插件
     1. 直接从社区插件中安装 [插件][community plugin]。
   - 手动安装
     1. 在您的 vault 的 `.obsidian/plugins` 目录下创建 `modules` 文件夹。
     2. 将 [最新版本发布] 中的 `manifest.json`、`main.js` 和 `styles.css` 放入该文件夹中。
   - 构建（最新版本）
     1. 克隆此存储库，包括其子模块。
     2. 安装 [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)。
     3. 在根目录中运行 `npm install`。
     4. 在根目录中运行 `npm run obsidian:install <vault directory>`。
   - [Obsidian42 - BRAT](https://obsidian.md/plugins?id=obsidian42-brat)（最新版本）
     - 请参阅 [它们的自述文件](https://github.com/TfTHacker/obsidian42-brat#readme)。
2. 启用插件。
3. （可选）配置插件设置。
用法

- 启用插件。
- 导入模块：

```JavaScript
// 推荐使用`require.import`。
await self.require.import("obsidian") // 内置模块，如Obsidian API
await self.require.import("vault/path/to/a module.md") // vault路径
// 以下三个需要上下文，并且可能无法推断当前目录。如果有问题，请提交问题。
await self.require.import("../relative/path/to/a module.js") // 相对路径
await self.require.import("[omitted or whatever](markdown/link/to/a%20module.js.md)") // Markdown链接
await self.require.import("[[wikilink/to/a module|ommited or whatever]]") // wikilink
// 以下一个需要在设置中启用外部链接。
await self.require.import("https://esm.sh/scratchblocks") // 外部链接
// 您可以解决无法推断当前目录的问题。
await self.require.import("../relative/path/to/a module.js", { cwd: context.currentDirectory })

// 如果不支持`await`，请改用`require`。它对加载模块的支持较少。
self.require("obsidian")
self.require("vault/path/to/a module.md")
// 以下三个需要上下文，并且可能无法推断当前目录。如果有问题，请提交问题。
self.require("../relative/path/to/a module.js")
// 以下三个可能无法在启动脚本中工作。
self.require("[ommited or whatever](markdown/link/to/a%20module.js.md)")
self.require("[[wikilink/to/a module|omitted or whatever]]")
// 以下一个需要在设置中启用外部链接，并将链接添加到预加载的外部链接中。
self.require("https://esm.sh/scratchblocks") // 外部链接
// 您可以解决无法推断当前目录的问题。
self.require("../relative/path/to/a module.js", { cwd: context.currentDirectory })
```

- 在模块中使用实体：

```JavaScript
const { eat, pi } = await self.require.import("[[module]]")
eat(2 * pi)
// 或者
const mod = await self.require.import("[[module]]")
mod.eat(2 * mod.pi)
```

- 要创建一个模块，请创建一个 JavaScript 或相关语言文件，或者一个带有 JavaScript 或相关语言代码块的 Markdown 文件。
	- 对于 `require`（但不是 `require.import`），模块文件需要预加载，可以在设置中配置。默认情况下，预加载的文件具有以下扩展名：`.js`，`.js.md`，`.mjs`，`.mjs.md`，`.ts.md`，`.mts.md`，`.ts`，`.ts.md`
	- 模块不应具有全局或副作用，因为它们被缓存，因此不会在每次需要时重新加载。
	- 对于 Markdown 文件，可以在设置中配置加载的代码块语言。
	- 对于非 JavaScript 语言，请确保模块文件具有正确的文件扩展名（也适用于 `.xxx.md`），或者在前面添加以下元数据：

```TypeScript
// { "language": "TypeScript" }

export const variable: string = "string"
```

````Markdown
---
module:
  language: TypeScript
---

```TypeScript
export const variable: string = "string"
```
````

- 模块导出可以是 CommonJS 风格或 ES 模块风格：

```JavaScript
// ES模块风格，由`require.import`支持。
export function fun() {}
export const variable = "string"
export default 42 // 默认导出的名称为`default`。

// CommonJS风格，由`require`和`require.import`都支持。
module.exports.fun = function() {}
module.exports.variable = "string"
module.exports.default = 42
exports.abbreviatedForm = {}
```

- 完整的 API 可以从 [`sources/@types/obsidian-modules.ts`](sources/%40types/obsidian-modules.ts) 获得。
贡献

欢迎贡献！

### 待办事项

这里按字母顺序列出的待办事项是计划中的插件功能。不能保证它们会被完成。然而，我们很可能会接受对它们的贡献。

- 使用 JSDoc 进行自动补全。

### 翻译

翻译文件位于 [`assets/locales/`](assets/locales/) 下。每个语言环境都有自己的目录，目录名使用对应的 __[IETF语言标签](https://wikipedia.org/wiki/IETF_language_tag)__。这里缺少一些翻译键，而这些键位于 [`obsidian-plugin-library`][插件库] 中。

要为现有的语言环境贡献翻译，请修改相应目录中的文件。

对于新的语言环境，请创建一个以其语言标签命名的新目录，并将 [`assets/locales/en/translation.json`](assets/locales/en/translation.json) 复制到其中。然后，在 [`assets/locales/en/language.json`](assets/locales/en/language.json) 中按以下格式添加一个条目：

```JSONc
{
	// ...
	"en": "English",
	"(your-language-tag)": "(您的语言的本地名称)",
	"uwu": "Uwuish",
	// ...
}
```

按照语言标签的字母顺序对语言列表进行排序。然后修改新目录中的文件。在 [`assets/locales.ts`](assets/locales.ts) 中会出现错误，您可以忽略这些错误，我们会为您修复。如果您了解 TypeScript，欢迎您自行修复这些错误。

在翻译时，请注意以下事项：

- 不要翻译 `{{` 和 `}}` 之间的任何内容（`{{example}}`）。它们是 __ 插值 __，将在运行时替换为本地化字符串。
- 不要翻译 `$t(` 和 `)` 之间的任何内容（`$t(example)`）。它们是对其他本地化字符串的引用。要找到所引用的本地化字符串，请按照由点（`.`）分隔的键的路径进行查找。例如，键 [`youtu.be./dQw4w9WgXcQ`](https://youtu.be./dQw4w9WgXcQ) 引用了以下内容：

```JSONc
{
	// ...
	"youtu": {
		// ...
		"be": {
			// ...
			"/dQw4w9WgXcQ": "我是 'youtu.be./dQw4w9WgXcQ'！",
			// ...
		},
		// ...
	},
	// ...
}
```

- `generic` 下的键是词汇。可以通过 `$t(generic.key)` 在翻译字符串中引用它们。尽可能多地引用它们，以标准化出现在不同位置的词汇的翻译。
- 可以移动插值和对其他本地化字符串的引用，以使翻译更加自然。也可以不使用原始翻译中使用的某些引用。但是，不使用所有插值是不可以的。

## 安全性

我们希望永远不会出现任何安全漏洞，但不幸的是，这种情况确实会发生。请 [报告](#reporting-a-vulnerability) 它们！

### 支持的版本

| 版本 | 支持情况 |
|-|-|
| 最新版本 | ✅ |
| 过时版本 | ❌ |

### 报告漏洞

请通过开启一个新的问题来报告漏洞。我们会尽快回复您。
