---
uid: 1793625609023001
title: "Obsidian 插件：Card Question Sheet"
tags: ["学习与教育", "图片与PDF", "效率工具", "obsidian插件"]
description: "Export text study cards as a PDF question sheet with a separate answer key. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Card Question Sheet

> [!Note] 插件名片
> - 插件名称：Card Question Sheet
> - 插件作者：theluckystrike
> - 插件说明：Export text study cards as a PDF question sheet with a separate answer key. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['学习与教育', '图片与PDF', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/theluckystrike/card-question-sheet)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?card-question-sheet)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/theluckystrike/card-question-sheet/master/README.md)



## 概述

Card Question Sheet 将笔记中的文本闪卡导出为 A4 格式的 PDF 试题卷，并自动在末尾生成独立的答案页。它支持单行文本卡片格式，通过双冒号或三冒号分隔问题与答案，能自动识别并排除 Frontmatter 和代码块。导出前提供预览界面，允许用户勾选或取消特定卡片，最终生成的 PDF 包含可选择的文本而非图片，方便后续编辑或搜索。

典型场景包括备考复习和语言学习。例如，你可以将地理知识写成“法国首都::巴黎”，或词汇对写成“cat:::chat”，插件会按顺序生成带编号的试题。在预览中，你可以清除不需要的卡片，只保留重点内容。生成的 PDF 在问题下方留有空白供手写答案，答案页则清晰列出对应编号的正确内容，适合打印后用于自测或分享给同学。

相比其他导出工具，该插件具备严格的格式校验和字体检查机制。它会明确报告不支持的格式（如图片、数学公式、填空标记）及行号，防止错误内容混入 PDF。此外，内置 Noto Sans 字体并检查字形覆盖，若遇到不支持的字符（如部分汉字或右向左文字），会直接阻止导出并提示，避免生成乱码或替换框。Pro 版本还支持保存自定义页面设置及按文件夹和标签批量导出。

使用前需注意，该插件仅支持纯文本单行卡片，不支持 Markdown 样式、链接解析或复杂排版。若笔记中包含 Dataview 字段，需手动清除以免被误识别为卡片。由于字体限制，包含大量非拉丁字符或特殊符号的内容可能无法导出。此外，预览窗口是静态的，修改源笔记后需重新打开预览才能更新内容，且卡片选择状态不会保存，关闭预览后需重新选择。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


