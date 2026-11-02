---
uid: 1793625620713000
title: "Obsidian 插件：Relate"
tags: ["模板与链接处理", "搜索与排序", "效率工具", "图谱", "obsidian插件"]
description: "Link notes both ways through ordinary properties, then browse and search them by relationship, date or meaning. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Relate

> [!Note] 插件名片
> - 插件名称：Relate
> - 插件作者：ttangents
> - 插件说明：Link notes both ways through ordinary properties, then browse and search them by relationship, date or meaning. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['模板与链接处理', '搜索与排序', '效率工具', '图谱', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/ttangents/obsidian-relate)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?relate)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/ttangents/obsidian-relate/master/README.md)



## 概述

Relate 通过普通属性为笔记建立双向关系，让“项目包含笔记”与“笔记属于项目”自动同步。它不依赖特殊链接语法，而是利用 Obsidian 原生属性面板，确保图谱、反向链接及重命名功能完全兼容。核心能力在于基于关系的智能搜索，支持按关系类型、日期或语义查找笔记，并在输入时实时预览查询逻辑，帮助用户精准定位内容。

典型场景包括管理项目结构或梳理层级关系。例如，在“Q3 计划”项目中，你可以搜索 `notes of Q3 Plan about pricing` 快速找到所有涉及定价的笔记；或者使用 `children of Atlas` 查看某个核心概念下的所有子笔记。若需批量操作，可搜索 `without project in Research/Notes` 找出未归类笔记，一键将其链接到特定论文，操作完成后这些笔记会自动从列表中消失，极大简化了知识整理流程。

相比同类插件，Relate 的特色在于其轻量级的语义搜索能力。它内置一个仅 30MB 的静态嵌入模型，无需 WebAssembly 或运行时下载代码，因此在手机和平板上也能流畅运行。此外，它提供类似 Finder 的关系浏览器，支持多列导航和键盘操作，并能展示笔记间的连接路径（如“Boromir → 家：米那斯提力斯 → 地区：刚铎”），让复杂的关系网络变得直观可见。

使用前需注意，语义搜索默认关闭，需在设置中手动开启并确认下载模型。若使用本地服务器（如 Ollama）进行更高级的语义分析，笔记文本会被发送至该服务器，需确保网络安全性。该插件不适合需要复杂数据库查询或实时协作的场景，且若设备浏览器存储不可用，模型需每次启动时重新下载。对于仅使用简单标签、无需双向关系管理的用户，其功能可能显得冗余。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


