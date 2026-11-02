---
uid: 1793625614983000
title: "Obsidian 插件：Local Citation Page Jump"
tags: ["图片与PDF", "学术与科研", "效率工具", "obsidian插件"]
description: "Open a local PDF at the page number given in an existing citation. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Local Citation Page Jump

> [!Note] 插件名片
> - 插件名称：Local Citation Page Jump
> - 插件作者：theluckystrike
> - 插件说明：Open a local PDF at the page number given in an existing citation. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['图片与PDF', '学术与科研', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/theluckystrike/local-citation-page-jump)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?local-citation-page-jump)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/theluckystrike/local-citation-page-jump/master/README.md)



## 概述

Local Citation Page Jump 旨在解决学术写作中从笔记引用快速定位本地 PDF 具体页码的痛点。它通过读取笔记中的引用键和页码信息，自动计算并打开 Vault 内对应的 PDF 文件。该插件不修改原稿，仅作为跳转工具，支持将光标置于引用处后，通过命令面板直接跳转至 PDF 的特定物理页面，实现从文字到文献的无缝衔接。

典型场景如撰写论文时，光标停留在 `[@Lee2020, p. 44]` 处，运行跳转命令即可在 Obsidian 的 PDF 查看器中直接打开 Lee 2020 年论文的第 44 页（需考虑页码偏移）。若引用为范围 `pp. 46-48`，插件会默认跳转至起始页 46。此外，预览功能允许你在打开前确认计算结果，避免误操作。

相比其他文献管理插件，其特色在于轻量级与本地化。它不依赖外部数据库或复杂的引用格式解析，仅基于简单的 Markdown 属性（citekey, pdf, page-offset）工作。支持页码偏移量设置，能处理印刷页码与物理页码不一致的情况（如前言页码不同）。同时，它能识别重复引用键、缺失 PDF 等错误并给出报告，确保引用数据的准确性。

使用前需注意，该插件仅支持数字页码，不支持罗马数字或章节名。每个引用键必须唯一，且 PDF 路径需准确。它不导入参考文献库，也不自动更新引用文本。若你的工作流依赖复杂的 BibTeX 管理或需要跨多个文件夹批量检查引用，此插件可能不够用，因为它目前仅支持单文件夹映射和光标处的单次检查。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


