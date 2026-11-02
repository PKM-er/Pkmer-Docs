---
uid: 1793625614710001
title: "Obsidian 插件：LaTeX Notes"
tags: ["学术与科研", "编辑工具", "文字处理", "obsidian插件"]
description: "Open .tex files as rendered, editable notes: LaTeX is converted to markdown in memory and shown with your theme. No TeX installation needed. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：LaTeX Notes

> [!Note] 插件名片
> - 插件名称：LaTeX Notes
> - 插件作者：davidn
> - 插件说明：Open .tex files as rendered, editable notes: LaTeX is converted to markdown in memory and shown with your theme. No TeX installation needed. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['学术与科研', '编辑工具', '文字处理', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/david-nagy/obsidian-latex-notes)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?latex-notes)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/david-nagy/obsidian-latex-notes/master/README.md)



## 概述

LaTeX Notes 允许直接在 Obsidian 中打开并编辑 `.tex` 文件，将其实时转换为 Markdown 格式进行渲染。它无需安装 TeX 环境或编译 PDF，而是利用 Obsidian 自身的渲染引擎，让 LaTeX 文档的标题、公式、引用和主题样式与普通笔记保持一致。这种“内存转换”机制确保了文档在视觉上与你的知识库无缝融合，同时避免了生成额外的 `.md` 文件。

典型场景包括快速查阅或修改学术论文草稿。例如，当你需要调整某段论证时，只需点击该段落，它便会显示为 LaTeX 源码供你编辑，而周围的图表、公式和参考文献仍保持渲染状态。此外，你可以直接查看带有编号的定理、证明块以及从 `.bib` 文件解析出的作者-年份引用，无需切换至外部编辑器即可处理复杂的数学排版。

相比其他 LaTeX 插件，其核心特色在于对文档结构的深度支持。它能自动展开文档内定义的宏命令，解析交叉引用（如 `\ref`），并将定理和证明渲染为 Obsidian 特有的 Callout 样式。Outline 面板也能同步显示文档章节，支持点击跳转。若安装了 TikZ 相关插件，它还能渲染矢量图形。对于不支持的复杂内容，它会以折叠块形式展示原始代码，确保页面不会崩溃。

需要注意的是，该插件不生成 PDF，也不支持 Obsidian 的全局搜索、反向链接或图谱功能，因为 `.tex` 文件未被索引。此外，它无法处理涉及条件判断等复杂逻辑的 TeX 宏，且不能与其他处理 `.tex` 文件的插件同时启用。如果你需要最终出版级的 PDF 输出，或依赖 Obsidian 的链接网络功能，此插件可能无法满足需求。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


