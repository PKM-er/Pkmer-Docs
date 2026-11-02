---
uid: 1793625620996000
title: "Obsidian 插件：Script View"
tags: ["样式与美化", "文字处理", "界面优化", "obsidian插件"]
description: "Display dialogue written as Name: Dialogue in a professional script layout. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Script View

> [!Note] 插件名片
> - 插件名称：Script View
> - 插件作者：UnluXidDream
> - 插件说明：Display dialogue written as Name: Dialogue in a professional script layout. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['样式与美化', '文字处理', '界面优化', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/unluxiddream/obsidian-scriptview-plugin)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?scriptview)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/unluxiddream/obsidian-scriptview-plugin/master/README.md)



## 概述

Script View 专为解决 Markdown 中剧本对话排版杂乱的问题而设计，核心功能是将“角色名: 台词”格式的文本自动转换为专业的双栏剧本布局。它通过识别冒号分隔的文本，将左侧角色名与右侧对话内容清晰分列，同时保留无冒号的舞台指示为普通文本。这种布局不仅提升了阅读体验，还让笔记在视觉上更接近商业剧本标准，无需手动调整格式即可实现整洁的呈现效果。

典型使用场景包括撰写小说或剧本时，需要频繁查看角色对话与动作的对应关系。例如，当你在笔记中写下“A : Hello, World!”时，插件会立即将其渲染为左对齐的角色名和右对齐的台词，而“A picks up the bottle.”这样的动作描述则保持原样。另一个场景是整理访谈记录，通过双栏布局快速区分提问者与回答者，使长篇幅的对话记录更加易读且结构清晰。

相比其他仅支持基础 Markdown 渲染的插件，Script View 的特色在于其智能识别机制与高度可定制性。它能自动过滤掉时间戳（如 23:45）、纯数字或过长的文本，避免误判为角色名，同时支持在双栏布局中正常显示内部链接、嵌入块和外部链接。此外，用户可精细调整名称列宽度、对齐方式、字体粗细及行间距等参数，确保布局完美契合个人审美或特定出版需求，且所有更改仅影响视图，不修改原始文件。

使用前需注意，该布局仅在“阅读视图”下生效，切换回“源码模式”或“实时预览”时会自动关闭。它不适合需要编辑表格内对话或列表项中对话的场景，因为这些区域不会被转换。此外，若角色名超过设定的最大长度限制，或包含特殊符号导致识别失败，可能无法正确分栏。对于仅需简单文本展示、不涉及复杂对话结构或希望保持纯源码编辑体验的用户，此插件并非必要选择。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


