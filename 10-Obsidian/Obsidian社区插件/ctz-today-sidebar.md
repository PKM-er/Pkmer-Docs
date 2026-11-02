---
uid: 1793625623614000
title: "Obsidian 插件：Today Sidebar"
tags: ["界面优化", "导航与状态栏", "日历与时间", "文件管理", "obsidian插件"]
description: "A minimal sidebar for daily notes and configurable file shortcuts. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Today Sidebar

> [!Note] 插件名片
> - 插件名称：Today Sidebar
> - 插件作者：CTZ
> - 插件说明：A minimal sidebar for daily notes and configurable file shortcuts. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['界面优化', '导航与状态栏', '日历与时间', '文件管理', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/chartreuse310/obsidian-today-sidebar)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?ctz-today-sidebar)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/chartreuse310/obsidian-today-sidebar/master/README.md)



## 概述

Today Sidebar 旨在解决 Obsidian 左侧边栏功能单一的问题，将今日日记与常用文件快捷方式整合在同一视图中。它允许用户自定义日记文件夹和日期格式，快速定位并打开当天的笔记。同时，你可以添加任意文件（包括非 Markdown 文件）作为快捷入口，支持通过拖拽或按钮调整顺序，使用分隔线分组，并保存可复用的预设布局，让侧边栏成为个性化的工作入口。

典型场景包括：每天早晨打开 Obsidian，侧边栏直接显示今日日记及未完成任务数，点击即可开始记录；或者将常用的项目文档、参考模板固定在侧边栏，配合“新建文件”功能，基于模板快速创建新笔记。例如，你可以设置一个按钮，点击后自动在指定文件夹生成基于模板的新笔记，无需手动输入文件名或路径，极大提升日常记录效率。

相比其他侧边栏插件，Today Sidebar 的特色在于对任务状态的深度集成。它不仅能显示未完成任务数量，还能以进度环形式直观展示完成比例，且支持嵌套任务。该插件能自动读取 Tasks 插件的状态配置（如进行中、搁置等），无需 Tasks 插件运行即可统计。此外，它支持从 Frontmatter 属性提取标题，并能根据 Obsidian 主题和语言自动切换界面显示，保持视觉一致性。

使用前请注意，该插件仅用于展示和跳转，不会自动创建日记或修改笔记内容，若今日日记不存在，它只显示预期路径供你手动创建。它不适合需要复杂自动化工作流或跨库管理的用户。插件本身无网络请求，隐私安全，但依赖 Obsidian 1.8.7 及以上版本。若你主要依赖移动端且对侧边栏空间敏感，需评估其占用面积是否影响阅读体验。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


