---
uid: 1793625613003000
title: "Obsidian 插件：FloatMark Highlights"
tags: ["文字处理", "样式与美化", "第三方工具集成", "obsidian插件"]
description: "Feishu-style floating selection actions, visual text highlights, side comments, and optional Lark sync support. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：FloatMark Highlights

> [!Note] 插件名片
> - 插件名称：FloatMark Highlights
> - 插件作者：wanghuan
> - 插件说明：Feishu-style floating selection actions, visual text highlights, side comments, and optional Lark sync support. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['文字处理', '样式与美化', '第三方工具集成', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/huan646943/obsidian-float-mark)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?floatmark)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/huan646943/obsidian-float-mark/master/README.md)



## 概述

FloatMark Highlights 旨在为 Obsidian 笔记引入类似飞书文档的协作体验，核心功能包括选区浮动工具栏、正文高亮标注以及侧边栏评论管理。它允许用户在选中文本后直接进行加粗、高亮或添加评论，无需频繁切换菜单，同时支持在内容块左侧快速调整格式，让本地笔记的编辑与审阅流程更加直观高效。

典型使用场景包括个人知识管理中的重点标记与团队文档的远程协作。例如，你可以用不同颜色的高亮区分“待确认”与“风险”内容，并在侧边栏集中查看这些标记；或者在撰写技术文档时，通过浮动工具栏快速插入代码块或引用，并利用侧边栏记录修改意见，保持正文整洁。

相比传统 Markdown 插件，FloatMark 的特色在于其非侵入式存储机制：评论和视觉标注保存在独立的 sidecar 文件中，不会污染 Markdown 源码。此外，它具备锚点重定位能力，即使文档内容发生轻微变动，标注也能自动跟随原文。若需跨平台协作，它还支持将本地评论一键同步为飞书/Lark 文档的原生评论线程，实现本地与远端的无缝衔接。

使用前需注意，若仅使用本地功能，无需额外配置；但若要同步到飞书，需配合 Feishu Lark CLI Sync 插件并安装 lark-cli 工具。该插件不适合需要直接在 Markdown 源码中查看评论文本的用户，也不适合完全离线且无法安装命令行工具的环境。对于追求纯文本极简主义、不希望引入额外 JSON 存储结构的用户，此插件可能显得过于复杂。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


