---
uid: 1793625614937001
title: "Obsidian 插件：Literature Library"
tags: ["学术与科研", "文件管理", "图片与PDF", "自动化与AI", "效率工具", "obsidian插件"]
description: "Organize papers as collapsible entries with configurable PDF, OCR, translation, and note files, title-based naming, metadata lookup, and optional OCR and translation services. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Literature Library

> [!Note] 插件名片
> - 插件名称：Literature Library
> - 插件作者：turfflea
> - 插件说明：Organize papers as collapsible entries with configurable PDF, OCR, translation, and note files, title-based naming, metadata lookup, and optional OCR and translation services. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['学术与科研', '文件管理', '图片与PDF', '自动化与AI', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/turfflea/obsidian-literature-library)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?literature-library)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/turfflea/obsidian-literature-library/master/README.md)



## 概述

Literature Library 旨在解决学术文献管理碎片化的问题，将每篇论文整合为文件资源管理器中可折叠的独立条目。它通过“库-分类-文献”的层级结构，将原始 PDF、OCR 识别结果、中文翻译、个人笔记及元数据文件统一收纳在同一文件夹内。用户只需将 PDF 拖入指定分类，插件即可自动创建包含上述组件的文献文件夹，并支持通过配置自定义文件扩展名、标签及显示颜色，实现从导入到阅读的一站式管理。

典型使用场景包括快速整理新下载的论文和深度阅读辅助。例如，当你下载一篇新论文时，直接将其拖入“未分类文献”文件夹，插件会自动生成包含 PDF、OCR 文本、翻译和笔记的完整结构；在阅读时，你可以利用双栏布局同时查看 PDF 原文与中文翻译，或结合 OCR 结果进行全文检索。此外，通过编辑 `_文献信息.md` 文件中的标题，插件能自动重命名文件夹，确保文献库始终保持整洁有序。

相比同类插件，其特色在于高度可配置的组件体系与自动化的元数据管理。它支持从 Crossref 或 arXiv 自动查询并填充文献元数据，且允许用户自定义文件命名顺序与打开顺序。插件还集成了可选的 PaddleOCR 兼容识别与 OpenAI 格式翻译服务，无需额外安装其他插件即可实现文档数字化与语言转换，同时所有数据均保存在本地普通文件中，便于备份与迁移。

使用前需注意，OCR 与翻译功能需自行配置外部服务地址及密钥，可能涉及账号注册、额度限制或费用，且数据会发送至第三方服务器，请提前确认服务方的隐私政策。此外，自动识别文献信息功能默认开启，会向外部 API 发送 DOI 或查询词，若介意网络请求可在设置中关闭。该插件不适合需要完全离线运行高级 AI 功能，或希望避免任何外部数据交互的用户。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


