---
uid: 1793625614696000
title: "Obsidian 插件：LaTeX"
tags: ["学术与科研", "文字处理", "发布工具", "obsidian插件"]
description: "Turns a folder of Markdown notes into a LaTeX document. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：LaTeX

> [!Note] 插件名片
> - 插件名称：LaTeX
> - 插件作者：megatron
> - 插件说明：Turns a folder of Markdown notes into a LaTeX document. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['学术与科研', '文字处理', '发布工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/gameboard-dev/latex)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?latex)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/gameboard-dev/latex/master/README.md)



## 概述

LaTeX 插件旨在解决在 Obsidian 中撰写长篇文档（如论文、报告或书籍）时，难以直接生成排版精美 PDF 的痛点。它将指定文件夹内的 Markdown 笔记自动转换为 LaTeX 文档，并持续编译生成 PDF。笔记是唯一的编辑源，插件通过固定规则将笔记单向转换为 `.tex` 文件，用户只需编辑笔记，无需手动处理 LaTeX 代码。每次保存笔记时，插件会自动触发转换和编译流程，确保最终输出的 PDF 始终与笔记内容保持同步。

典型的使用场景包括撰写学位论文或技术报告。例如，你可以将前言、各章节、术语表和附录分别保存为独立的 Markdown 笔记，插件会自动识别这些结构并整合成完整的 LaTeX 文档。当你在某一章节中修改了引用或公式，保存后插件会迅速重新编译，并在侧边栏的 PDF 预览中即时显示更新后的效果，无需手动运行复杂的编译命令。

相比其他同类插件，该插件的核心特色在于其“快速预览”机制。基于 Rust 和 WebAssembly 构建，它能在保存后约一秒内，通过局部重排技术将修改部分拼接到现有 PDF 中，实现近乎实时的视觉反馈。此外，它支持通过 SyncTeX 实现笔记与 PDF 的双向同步滚动，并内置了字数统计功能，能准确计算各章节字数并写入文档，方便满足学术出版对字数的要求。

使用前需注意，该插件仅支持桌面版 Obsidian，且要求用户本地已安装完整的 LaTeX 发行版（如 TinyTeX 或 TeX Live）及 Python 环境。它不负责自动下载或安装任何依赖包，若缺少特定宏包需手动处理。因此，它不适合希望“开箱即用”、不愿配置本地编译环境的用户，也不适用于移动端或纯浏览器环境下的轻量级笔记排版需求。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


