---
uid: 1793625612728000
title: "Obsidian 插件：Export Studio"
tags: ["图片与PDF", "发布工具", "效率工具", "obsidian插件"]
description: "Export notes to PDF or HTML with clickable links between exported notes, a note picker, cover page, contents and page numbers. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Export Studio

> [!Note] 插件名片
> - 插件名称：Export Studio
> - 插件作者：encomjp
> - 插件说明：Export notes to PDF or HTML with clickable links between exported notes, a note picker, cover page, contents and page numbers. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['图片与PDF', '发布工具', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/encomjp/obsidian-export)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?export-studio)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/encomjp/obsidian-export/master/README.md)



## 概述

Export Studio 旨在解决 Obsidian 笔记导出时链接失效的痛点，核心功能是将笔记转换为 PDF 或 HTML，并保留笔记间可点击的内部链接。它采用 Starnote 的简洁视觉风格，支持从文件夹树中筛选、勾选笔记，或通过右键菜单快速选择导出对象。插件能自动处理双链，使导出的 PDF 中蓝色链接可直接跳转至对应笔记或标题，同时生成书签、目录、封面及页码，让静态文档具备类似网页的导航体验。

典型场景包括整理个人知识库或撰写技术文档。例如，当你完成一系列相互关联的教程笔记后，可使用“添加关联笔记”功能一键收集所有相关条目，导出为带目录的 PDF 手册；或者在分享项目文档时，选择“每笔记一文件”模式，生成一组 HTML 文件，读者点击链接即可在浏览器中流畅跳转，无需手动维护超链接。

相比同类插件，Export Studio 的最大特色是“忠实渲染”与“智能链接”。它直接调用 Obsidian 引擎渲染，完美支持 Callout、表格、代码高亮、MathJax 公式、Mermaid 图表及 Dataview 输出，确保导出效果与编辑器内一致。此外，它智能处理未导出的链接：可选择通过 `obsidian://` 协议在 Obsidian 中打开，或转为纯文本，避免死链。插件无网络请求，字体和公式均本地嵌入，且绝不覆盖已有文件，自动重命名以保护数据安全。

使用前需注意，PDF 导出仅限桌面端，且依赖 Obsidian 内置的 Chromium 打印功能；若环境不支持，插件会降级为生成 HTML 供浏览器打印。它不适合需要移动端导出、在线协作编辑或复杂排版定制（如自定义 CSS 模板）的用户。若你主要需求是快速分享单篇笔记且无需内部导航，或希望导出为 Word 格式，此插件可能并非最佳选择。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


