---
uid: 2023080322232389
title: Obsidian 插件：Obsidian GoLinks
tags: ['obsidian插件', 'readme']
description: 这是一个Obsidian的插件，可以将go/链接渲染为可点击的链接。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Obsidian GoLinks

> [!Note] 插件名片
> - 插件名称：Obsidian GoLinks
> - 插件作者：David Brownman (@xavdid)
> - 插件说明：这是一个 Obsidian 的插件，可以将 go/链接渲染为可点击的链接。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/xavdid/obsidian-golinks)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsidian-golinks)

## 概述

这是一个 Obsidian 的插件，可以将 go/链接渲染为可点击的链接。

![Obsidian GoLinks](https://cdn.pkmer.cn/covers/obsidian-golinks.png!pkmer)

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/xavdid/obsidian-golinks/master/README.md)
>

---

## Readme(翻译）

下面是 [[obsidian-golinks]] 插件的自述翻译

# Obsidian GoLinks

这是一个简单的 [Obsidian](https://obsidian.md) 插件，用于渲染纯文本的 [GoLinks](https://www.golinks.io/)（如 go/links），使其可点击。

有关完整的更改日志，请参见 [releases](https://github.com/xavdid/obsidian-golinks/releases)。

## 演示

![](https://cdn.zappy.app/42bbacbd01746e5e4e8f5118e2d85b11.png)

```markdown
该插件将纯文本的go/链接渲染为可点击的链接！它会忽略在`go/反引号`中的链接和已经被[go/链接化](http://go/链接化)的链接。

> 它还可以在go/块引用中工作，以及...

- 它
- 可以
- 在
- go/列表中工作！
- 很棒，对吧？
```

安装

### 最简单的方式：插件目录

该插件可以从 [Obsidian插件目录](https://obsidian.md/plugins?search=golinks) 安装！

您也可以点击此链接直接在 Obsidian 中打开该页面：<https://obsidian.md/plugins?id=obsidian-golinks>

### Medium: 从发布中获取

1. 创建 `path/to/your/vault/.obsidian/plugins/obsidian-golinks` 文件夹
2. 前往最新的 [GitHub 发布页面](https://github.com/xavdid/obsidian-golinks/releases)
3. 下载 `main.js` 和 `manifest.json` 文件
4. 将这两个文件移动到第一步创建的文件夹中
5. 在 Obsidian 设置中，像正常情况下启用插件

### 最复杂：从源代码构建

1. 将此仓库克隆到 `path/to/your/vault/.obsidian/plugins/obsidian-golinks` 目录中。
2. 在该文件夹中运行 `yarn` 安装依赖项。
3. 使用 `yarn build` 进行构建。
4. 在 Obsidian 设置中，像正常情况下启用插件。

考虑因素

使用此插件时不会有数据丢失的风险。因为它只在 markdown 渲染过程中起作用，所以它最糟糕的情况就是使您的阅读视图不显示一些文本（或显示不正确）。如果发生这种情况，请禁用该扩展并提交 [问题](https://github.com/xavdid/obsidian-golinks/issues)。

没有数据发送到您的计算机之外，因此在企业环境中使用此插件是完全安全的。它基本上只是一些正则表达式。

## 发布新版本

- 使用新的版本号更新你的 `manifest.json`，例如 `1.0.1`，以及你的最新发布所需的最低 Obsidian 版本。
- 使用 `"new-plugin-version": "minimum-obsidian-version"` 更新你的 `versions.json` 文件，这样旧版本的 Obsidian 可以下载与其兼容的旧版本插件。
- 使用你的新版本号作为 "Tag version" 创建新的 GitHub 发布。使用精确的版本号，不要包含前缀 `v`。参考这里的示例：<https://github.com/obsidianmd/obsidian-sample-plugin/releases>
- 将 `manifest.json`、`main.js`、`styles.css` 文件作为二进制附件上传。注意：`manifest.json` 文件必须在两个位置上，首先是你的仓库的根路径，然后是发布中。
- 发布发布。

> 你可以通过在 `manifest.json` 手动更新 `minAppVersion` 后运行 `npm version patch`、`npm version minor` 或 `npm version major` 来简化版本升级过程。
> 这个命令会在 `manifest.json` 和 `package.json` 中升级版本，并在 `versions.json` 中添加新版本的条目。