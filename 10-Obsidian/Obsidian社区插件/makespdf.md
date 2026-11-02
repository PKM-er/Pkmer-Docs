---
uid: 1793625615177000
title: "Obsidian 插件：MakesPDF"
tags: ["图片与PDF", "第三方工具集成", "文件管理", "效率工具", "obsidian插件"]
description: "Export notes and canvases to accessible, archival-quality PDFs (PDF/A-2A and PDF/UA-1) using the makespdf.com API. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：MakesPDF

> [!Note] 插件名片
> - 插件名称：MakesPDF
> - 插件作者：makesPDF
> - 插件说明：Export notes and canvases to accessible, archival-quality PDFs (PDF/A-2A and PDF/UA-1) using the makespdf.com API. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['图片与PDF', '第三方工具集成', '文件管理', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/makespdf/makespdf-obsidian-plugin)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?makespdf)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/makespdf/makespdf-obsidian-plugin/master/README.md)



## 概述

MakesPDF 将 Obsidian 笔记或画板转换为符合 PDF/A-2A 和 PDF/UA-1 标准的无障碍归档级 PDF。不同于内置导出仅打印渲染视图，该插件通过 makespdf.com API 生成带有真实标题结构、图片替代文本、表格头及正确阅读顺序的标签化文档。这种输出方式满足了严格的无障碍访问和长期归档需求，确保文档内容在辅助技术下可被准确识别和检索。

典型场景包括将包含复杂格式的技术文档或项目笔记导出为正式报告，或整理画板中的思维导图用于分享。例如，当笔记中包含代码块、任务列表、Mermaid 图表或中日韩文字时，插件能自动处理语法高亮、原生渲染图表，并正确显示 CJK 字形，无需额外安装字体。对于画板，整个看板会被布局为单一 PDF，卡片保持原有位置，文本变为可选中内容，适合将视觉化规划转化为可打印的静态文档。

相比同类插件，其核心特色在于对 Obsidian 特有语法的深度转换，如将双链转为纯文本、内联嵌入笔记、将高亮转为标记、Callout 转为 GFM 警报等。此外，它支持通过 Frontmatter 精细控制页面大小、字体、页码格式及位置，并能根据 `lang` 属性自动适配 CJK 字形。这种“排版服务”模式确保了输出质量的一致性，避免了本地渲染可能出现的样式偏差。

使用前需注意，该插件必须联网，会将笔记 Markdown 及嵌入的本地图片、嵌入笔记内容发送至远程服务器，无法离线使用。若无 API 密钥，匿名导出受限于每小时 60 次、每天 200 次及单次 20 页上限。因此，它不适合处理高度敏感、严禁上传云端的数据，也不适合需要完全离线工作流或单次导出超过 20 页且未购买额度的用户。若对数据隐私有极高要求，可配置 API URL 指向自部署服务。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


