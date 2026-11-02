---
uid: 1793625619675000
title: "Obsidian 插件：Org Reader"
tags: ["文字处理", "界面优化", "效率工具", "obsidian插件"]
description: "Read Org files in a clean rendered view: headings, TODO keywords, tags, lists, tables, code blocks and links, with a switch to edit the source. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Org Reader

> [!Note] 插件名片
> - 插件名称：Org Reader
> - 插件作者：esenonfossiio
> - 插件说明：Read Org files in a clean rendered view: headings, TODO keywords, tags, lists, tables, code blocks and links, with a switch to edit the source. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['文字处理', '界面优化', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/esenonfossiio/obsidian-org-reader)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?org-reader)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/esenonfossiio/obsidian-org-reader/master/README.md)



## 概述

Org Reader 专为在 Obsidian 中处理 Org 格式文件而设计，核心功能是提供清晰的渲染视图与便捷的源码编辑体验。它内置独立的解析器，能将标题、TODO 状态、标签、列表、表格、代码块及链接等元素转化为易读的界面，同时支持通过头部按钮一键切换至带有 Org 语法高亮、折叠功能及专用快捷键的 CodeMirror 编辑器，无需依赖其他 Org 插件即可独立运行。

典型场景包括阅读结构复杂的 Org 笔记或进行快速编辑。例如，当你打开包含大量层级标题和任务列表的文件时，阅读视图会自动将 TODO 关键词显示为彩色徽章，并将属性抽屉默认隐藏，使内容一目了然；若需修改，点击编辑按钮即可进入源码模式，利用 `Tab` 键折叠标题或缩进列表项，使用 `Alt-Right` 调整标题层级，操作逻辑与原生 Org 模式高度一致，极大提升了处理长文档的效率。

相比同类插件，Org Reader 的最大特色在于其独立性，它拥有自己的解析和渲染引擎，直接替代了 Orgmode (cm6) 插件，避免了多插件冲突。此外，它深度整合了 Obsidian 生态，支持通过 MathJax 渲染 LaTeX 数学公式，并能正确解析指向 Vault 内其他文件或图片的链接，确保在 Obsidian 内部导航的流畅性。其编辑器还支持通过 `view.codeMirror` 接口与其他插件扩展交互，提供了比纯文本查看器更丰富的交互能力。

使用前需注意，由于 Obsidian 中同一文件扩展名只能由一个插件处理，若已安装 Orgmode (cm6)，必须先禁用该插件并重启 Obsidian，否则 Org Reader 无法接管 `.org` 文件。该插件不适合需要执行 Org Agenda 视图、表格公式计算或 Babel 代码块执行的用户，因为这些高级功能未被渲染或支持。此外，它不渲染上下标和特定的 Org 实体字符，建议用 LaTeX 语法替代，且未知语法会以纯文本形式保留，不会丢失数据。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


