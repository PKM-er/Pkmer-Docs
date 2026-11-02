---
uid: 1793625614260000
title: "Obsidian 插件：Inline TOC"
tags: ["导航与状态栏", "编辑工具", "效率工具", "obsidian插件"]
description: "A live, clickable table of contents in any note, or a plain Markdown one that keeps itself up to date and works in Publish. Foldable, with the current section highlighted. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Inline TOC

> [!Note] 插件名片
> - 插件名称：Inline TOC
> - 插件作者：siulved54
> - 插件说明：A live, clickable table of contents in any note, or a plain Markdown one that keeps itself up to date and works in Publish. Foldable, with the current section highlighted. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['导航与状态栏', '编辑工具', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/perezamadorluisenrique-gif/inline-toc)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?inline-toc)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/perezamadorluisenrique-gif/inline-toc/master/README.md)



## 概述

Inline TOC 旨在解决笔记中目录静态、易过时且无法在发布时正常显示的问题。它提供两种核心模式：一种是嵌入笔记的实时代码块，能随标题修改即时更新并支持点击跳转；另一种是纯 Markdown 文本目录，通过标记自动刷新，确保在 Obsidian Publish 或导出时依然保持有效。该插件能智能识别重复标题，生成精准链接，并自动过滤代码、数学公式等干扰项，让目录始终整洁准确。

典型场景包括撰写长篇技术文档或书籍章节时，需要频繁调整结构。例如，当你重命名某个二级标题后，Inline TOC 会在两秒内自动更新对应的目录项，无需手动修改链接。另一个场景是将笔记发布到网站，此时你可以使用 Markdown 模式，目录会以标准列表形式呈现，既美观又兼容各种前端渲染器，避免了代码块在发布后失效的尴尬。

相比同类插件，Inline TOC 的最大特色在于对现有生态的兼容性与细节处理。它可以直接读取 Automatic Table of Contents 的块，也能一键“收养” Table of Contents 或 Insta TOC 生成的列表，实现平滑迁移。此外，它支持折叠整个目录或单个分支，并高亮当前阅读章节，提升长文阅读体验。所有生成的链接均经过 Obsidian 内部解析器校验，确保跳转无误，且对无障碍访问做了专门优化。

使用前需注意，若同时安装 Automatic Table of Contents，需先禁用后者以避免渲染冲突。该插件不适合需要完全静态、永不自动更新的目录需求，因为其核心逻辑依赖于自动刷新。此外，虽然它支持丰富的样式定制，但主要面向个人知识管理场景，若需高度定制化的企业级目录样式，可能需要额外编写 CSS 片段。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


