---
uid: 2023080322151731
title: Obsidian 插件：Boost Link Suggestions
tags: ['obsidian插件', 'readme']
description: 一个替代的内联链接建议者，可以按链接数量和手动提升排序结果。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Boost Link Suggestions

> [!Note] 插件名片
> - 插件名称：Boost Link Suggestions
> - 插件作者：Jacob Levernier
> - 插件说明：一个替代的内联链接建议者，可以按链接数量和手动提升排序结果。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/jglev/obsidian-boost-link-suggestions)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?boost-link-suggestions)

## 概述

一个替代的内联链接建议者，可以按链接数量和手动提升排序结果。

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/jglev/obsidian-boost-link-suggestions/main/README.md)
>

---

## Readme(翻译）

下面是 [[boost-link-suggestions]] 插件的自述翻译

# Obsidian Boost Link Suggestions

一个用于根据链接计数和手动提升顺序建议内联链接的 [Obsidian](https://obsidian.md) 插件。

动机

Obsidian 提供了一个内置的界面，用于建议要链接的文件（例如在键入 `[[` 时）。该界面中的链接 [目前仅基于搜索匹配](https://discord.com/channels/686053708261228577/716028884885307432/1053860523646656563)。如果某些文件经常被链接，但它们在字母顺序上低于其他不经常被链接的文件，这可能导致在快速书写时错误地选择了更高的文件而不是建议列表中更频繁链接的文件。该插件通过按照文件的入站链接顺序提供文件建议，并进一步允许手动“提升”特定文件来解决这种情况。

使用方法

### 链接到文件

在输入 markdown 笔记时，输入 `b[` 将会弹出一个可搜索的建议界面，列出文件。这相当于 Obsidian 核心内置的文件链接界面，只是它使用了可修改的排序方法。具体而言，文件按照以下方式列出：

1. 文件在 Obsidian vault 中被链接的次数，_加上：_
2. 从该文件的 YAML 前置元数据中获得的“boost”分数（默认情况下，使用键“`boost`”）：

	```md
	---
	aliases:
		- 示例1
		- 示例2

	boost: 100
	---

	# 示例文件1

	...
	```

在文件内部，建议按照 YAML 前置元数据中列出的别名顺序列出，然后是文件名。

这样可以通过“boost”某些文件，使它们始终位于建议列表的顶部或附近。

通过启用“显示分数”设置，可以选择在建议界面中显示“boost”分数计算。

安装

### 手动安装插件

- 将 `main.js`、`styles.css`、`manifest.json` 复制到你的 vault 文件夹 `VaultFolder/.obsidian/plugins/obsidian-boost-link-suggestions/` 中。

### 来自社区插件列表

1. 在 Obsidian 的社区插件浏览器中搜索“Boost Link Suggestions”。
2. 在 Obsidian 的设置中启用该插件（在“社区插件”下找到“Boost Link Suggestions”）。
3. 检查“Boost Link Suggestions”设置选项卡。添加一个或多个模式。

## 开发

克隆仓库，运行 `yarn` 安装依赖，然后运行 `yarn dev` 编译插件并监听文件变化。

请参阅 <https://github.com/obsidianmd/obsidian-api> 获取 Obsidian 的 API 文档。

## 许可证

该插件的代码和文档以 [BSD 3-Clause许可证](./LICENSE) 发布。

# 待办事项

目前，该代码库中尚未包含自动化测试。特别欢迎使用 [Obsidian端到端测试方法](https://github.com/trashhalo/obsidian-plugin-e2e-test) 来提供帮助！
