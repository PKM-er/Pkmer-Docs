---
uid: 2024042221333626
title: Obsidian 插件：【Readme】SwiftLaTeX Render
tags: ['obsidian插件', 'readme']
description: 在代码块中呈现LaTeX为PDF，无需单独安装LaTeX。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】SwiftLaTeX Render

> [!Note] 插件名片
> - 插件名称：SwiftLaTeX Render
> - 插件作者：gboyd068
> - 插件说明：在代码块中呈现 LaTeX 为 PDF，无需单独安装 LaTeX。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/gboyd068/obsidian-swiftlatex-render)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?swiftlatex-render)

## 概述

在代码块中呈现 LaTeX 为 PDF，无需单独安装 LaTeX。

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/gboyd068/obsidian-swiftlatex-render/master/README.md)

---

## Readme(翻译）

下面是 [[swiftlatex-render]] 插件的自述翻译

# 黑曜石 SwiftLaTeX 渲染器

该插件将带有标签 `latex` 的代码块渲染为 pdf。这是通过插件内置的 SwiftLaTeX wasm LaTeX 编译器实现的，它没有其他依赖项。默认情况下，包会按需从 <https://texlive2.swiftlatex.com/> 获取。

# 设置

只需将发布的文件放入文件夹 `.obsidian/plugins/swiftlatex-render` 中，并确保插件在设置的“社区插件”选项卡中已启用。

# 用法

`latex` 代码块中的内容将使用给定的命令进行渲染。您可以使用 `\usepackage{}` 加载所需的任何包。

生成的 pdf 的 `<div>` 父元素具有类 `block-language-latex`，因此可以使用 CSS 片段进行样式设置。例如，如果您正在使用暗黑模式，可以设置 `filter: invert(100%)` 来反转颜色，快速实现暗色主题图表的效果。

# 限制

- 目前，渲染文档所需的所有代码必须包含在 `latex` 代码块中。

# 缓存

### pdfs

默认情况下，插件会将生成的 `.pdf` 文件保存在 `.obsidian/swiftlatex-render-cache/pdf-cache` 中，因此如果代码块中没有更改，或者将代码块复制到另一个文件中，插件将简单地重用 `.pdf` 文件。它会跟踪哪些文件使用了每个 `.pdf`，当没有文件使用 `.pdf` 时，插件会将其从缓存中删除。

### 包

该插件还会将已使用的包缓存到 `.obsidian/swiftlatex-render-cache/package-cache` 中，在启动时将这些包加载回 WebAssembly 使用的虚拟文件系统中。

# 自托管软件包

您可以使用 <https://github.com/SwiftLaTeX/Texlive-Ondemand> 上的存储库托管自己的软件包服务器，如果使用非常新的软件包，则可能需要这样做，因为默认的 url 使用了一个略旧的 TeX Live 版本。

# 从源代码构建

1. 按照 <https://github.com/gboyd068/SwiftLaTeX> 中的说明使用 Emscripten 在 `pdftex.wasm` 目录中构建 `swiftlatexpdftex.worker.js`（目前仅支持 PdfTeX）
2. 在该存储库中，运行 `tsc PdfTeXEngine.tsx` 从 Typescript 源代码构建 `PdfTeXEngine.js`
3. 克隆此存储库 `git clone https://github.com/gboyd068/obsidian-swiftlatex-render` 并将上述两个输出文件复制到 `obsidian-swiftlatex-render` 目录中
4. 使用 `npm i` 安装必要的 node 包
5. 使用 `npm run build` 构建 `main.js`

# 致谢

感谢 `fenjalien` 创建了<https://github.com/fenjalien/obsidian-latex-render>，本插件基于此，并感谢所有贡献者 [SwiftLaTeX](https://github.com/SwiftLaTeX/SwiftLaTeX)。

# TODO

- 移动设备支持？至少查看缓存的 pdf 文件
- 图像支持
- 参考文献支持
- `\input` 支持



