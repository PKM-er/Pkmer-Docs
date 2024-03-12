---
uid: 20240312193744
title: Obsidian 插件：【Readme】Hugo codeblock highlight
tags: ['obsidian插件', 'readme']
description: 在代码块中使用Hugo的hl_lines语法突出显示行。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】Hugo codeblock highlight

> [!Note] 插件名片
> - 插件名称：Hugo codeblock highlight
> - 插件作者：aarol
> - 插件说明：在代码块中使用 Hugo 的 hl_lines 语法突出显示行。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/aarol/obsidian-hugo-codeblock-highlight)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?hugo-codeblock-highlight)

## 概述

在代码块中使用 Hugo 的 hl_lines 语法突出显示行。

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/aarol/obsidian-hugo-codeblock-highlight/master/README.md)

---

## Readme(翻译）

下面是 [[hugo-codeblock-highlight]] 插件的自述翻译

【机翻】

# Hugo 高亮插件

这是一个为 [Obsidian](https://obsidian.md) 设计的插件，它使用与 Hugo 相同的语法来突出显示代码块中的行。

![插件运行中的屏幕录制](https://cdn.pkmer.cn/covers/hugo-codeblock-highlight_2_0.gif!pkmer)

## 用法

在语言后面添加 `hl_lines` 选项，就像这样：

````markdown
```js {hl_lines=[1]}
let a = 1;
let b = 2;
```
````

`hl_lines` 可以是一个单独的数字，也可以是一个数字/范围的数组（`hl_lines=[1, "2", "3-5"]`）

只支持 `hl_lines` 属性。

> [!NOTE]
> 目前，该插件仅在“实时预览”或“源代码模式”中工作。阅读器模式使用不同的 HTML 演示和语法高亮显示器，这些更难支持。

## 开发这个插件

- 安装依赖：`pnpm install`
- 编译并监视更改：`pnpm dev`
- 构建生产版本：`pnpm build`

查看 [Obsidian文档](https://docs.obsidian.md/Plugins/Getting+started/Build+a+plugin) 获取更多信息。

如果您需要的功能出现故障/缺失，请创建一个新的拉取请求，而不是创建一个新的插件，这样每个人都可以受益 :)

## 发布新版本

- 使用新的版本号（例如 `1.0.1`）更新您的 `manifest.json`，并指定最新版本所需的最低 Obsidian 版本。
- 在您的 `versions.json` 文件中更新 `"new-plugin-version": "minimum-obsidian-version"`，这样旧版本的 Obsidian 可以下载与其兼容的插件旧版本。
- 使用新版本号作为“标签版本”创建新的 GitHub 发布。使用确切的版本号，不要包含前缀 `v`。请参阅此处的示例：<https://github.com/obsidianmd/obsidian-sample-plugin/releases>
- 将 `manifest.json`、`main.js`、`styles.css` 文件作为二进制附件上传。注意：`manifest.json` 文件必须放在两个位置，首先是存储库的根路径，然后是发布中。
- 发布发布。

> 您可以在手动更新 `manifest.json` 中的 `minAppVersion` 后运行 `npm version patch`、`npm version minor` 或 `npm version major` 来简化版本升级过程。
> 该命令将在 `manifest.json` 和 `package.json` 中提升版本，并将新版本的条目添加到 `versions.json` 中。

## API 文档

请查看 <https://github.com/obsidianmd/obsidian-api>
