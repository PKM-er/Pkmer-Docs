---
uid: 2024052909154205
title: Obsidian 插件：SwiftLaTeX Render
tags: ['第三方工具集成', '文件管理', '样式与美化', 'obsidian插件']
description: 在代码块中呈现LaTeX为PDF，无需单独安装LaTeX。
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：SwiftLaTeX Render

> [!Note] 插件名片
> - 插件名称：SwiftLaTeX Render
> - 插件作者：gboyd068
> - 插件说明：在代码块中呈现 LaTeX 为 PDF，无需单独安装 LaTeX。
> - 插件分类：[' 第三方工具集成 ', ' 文件管理 ', ' 样式与美化 ', 'obsidian 插件 ']
> - 项目地址：[点我访问](https://github.com/gboyd068/obsidian-swiftlatex-render)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?swiftlatex-render)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/gboyd068/obsidian-swiftlatex-render/master/README.md)

## 概述

Obsidian SwiftLaTeX Renderer 是一个 Obsidian 插件，可以将代码块中的 LaTeX 渲染为 PDF，无需单独安装 LaTeX。插件内置了 SwiftLaTeX wasm LaTeX 编译器，没有其他依赖。默认情况下，插件会从<https://texlive2.swiftlatex.com/>按需获取软件包。使用时，将代码块中的内容放在 `latex` 标签内即可。可以使用 `\usepackage{}` 加载所需的软件包。生成的 PDF 的 `<div>` 父元素具有 `block-language-latex` 类，可以使用 CSS 代码进行样式设置。插件有一些限制，例如必须将渲染文档所需的所有代码放在 `latex` 代码块中。插件还支持缓存生成的 PDF 和软件包，以提高效率。用户还可以自己托管软件包服务器，详细说明在 README 中有提供。插件还在不断更新中，未来将支持移动设备、图片、参考文献和 `\input` 等功能。

> [!help]
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交 PR 或者文末留言。

---



