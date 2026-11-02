---
uid: 1793625614557000
title: "Obsidian 插件：Kitap"
tags: ["搜索与排序", "第三方工具集成", "学习与教育", "obsidian插件"]
description: "Search Turkish books and metadata from Kitapyurdu and D&R to create structured reading notes. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Kitap

> [!Note] 插件名片
> - 插件名称：Kitap
> - 插件作者：Melih AK
> - 插件说明：Search Turkish books and metadata from Kitapyurdu and D&R to create structured reading notes. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['搜索与排序', '第三方工具集成', '学习与教育', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/m24ih/obsidian-kitap)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?kitap)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/m24ih/obsidian-kitap/master/README.md)



## 概述

Kitap 是一款专为土耳其语及国际图书设计的元数据管理插件，核心功能是从 Kitapyurdu、D&R、Open Library 和 Hardcover 四个平台并行搜索书籍信息。它通过智能去重算法合并不同来源的记录，并生成结构化的阅读笔记。插件不仅抓取标题、作者、ISBN 等基础书目信息，还涵盖译者、出版社、页数、出版日期、读者评分、简介及封面图片等丰富字段，帮助用户快速建立标准化的图书档案。

典型使用场景包括管理个人藏书或追踪阅读进度。例如，当你想记录一本土耳其语小说时，只需搜索书名，插件会同时从多个源获取数据，你可以通过交互式对比窗口，选择 D&R 的标题和 Kitapyurdu 的详细简介，一键生成包含 YAML 前置元数据的笔记。此外，插件支持将封面图片自动下载至本地库，并通过 `kitap-kart` 代码块渲染出带有 3D 效果和条形码的复古图书馆卡片，让笔记页面更具视觉吸引力。

相比同类插件，Kitap 的特色在于其“混合搜索”与“交互式合并”机制。它不仅能同时查询多个提供商并显示实时响应延迟，还允许用户逐字段选择最佳元数据来源，而非简单覆盖。此外，它深度集成了 Dataview 和 Templater，支持动态阅读进度条和自定义模板，且所有网络请求均在本地执行，API 密钥通过操作系统原生密钥链安全存储，确保隐私安全。

使用前需注意，Hardcover 源需要免费申请 API 密钥，而其他源无需配置。该插件主要面向需要结构化图书元数据的用户，不适合仅需简单文本记录或不需要多源数据合并的场景。若你的笔记库主要使用非土耳其语或非英文书籍，且对元数据精度要求不高，可能无需安装此插件。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


