---
uid: 1793625609155001
title: "Obsidian 插件：Caute"
tags: ["搜索与排序", "模板与链接处理", "发布工具", "效率工具", "obsidian插件"]
description: "Link, quote and search what you've caught in Caute, and publish notes to your library. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Caute

> [!Note] 插件名片
> - 插件名称：Caute
> - 插件作者：Axionary Labs
> - 插件说明：Link, quote and search what you've caught in Caute, and publish notes to your library. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['搜索与排序', '模板与链接处理', '发布工具', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/axionary-jwc/caute-obsidian)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?caute)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/axionary-jwc/caute-obsidian/master/README.md)



## 概述

Caute 插件旨在打通 Obsidian 笔记与 Caute 云端知识库之间的壁垒，实现双向引用与内容同步。其核心功能包括将 Caute 卡片链接可视化为包含标题和类型的“芯片”，支持通过命令或输入 `@@` 快速搜索并插入卡片链接，以及从库中引用特定段落。此外，它允许用户直接向 Caute 提问，基于已保存的内容生成带有完整来源引用的答案，并将笔记发布至云端库，同时提供侧边栏面板以便在写作时实时检索库内资源。

典型使用场景包括学术写作与知识管理。例如，在撰写论文时，你可以直接粘贴 Caute 中的文献链接，插件会自动显示作者、年份和标题，甚至能一键将其转换为符合规范的脚注格式，极大简化引用过程。另一个场景是日常阅读，当你在 Obsidian 中记录想法时，可以通过侧边栏的“查找来源”功能，让 Caute 自动匹配库中语义最接近的段落，无论是 PDF、邮件还是录音转录，都能快速定位并插入带高亮标记的引用，确保每个观点都有据可查。

相比其他同步插件，Caute 的特色在于其严格的安全隔离与智能引用机制。所有从 Caute 引用的内容，包括代码块、Dataview 查询或 HTML，都会被自动转义，确保外部内容无法在本地笔记中执行，防止潜在的安全风险。此外，其“Quoted in Caute”功能实现了双向追踪，在 Caute 端也能看到哪些笔记引用了特定卡片，且仅存储笔记 ID 而不泄露文件路径或内容，兼顾了便利性与隐私保护。

使用前需注意，该插件依赖独立的 Caute 账户，需先在浏览器或设置中完成登录授权。它不适合那些完全离线工作、不希望任何数据（如段落或问题）上传至云端的用户，因为查询来源或提问时会将当前段落或问题发送至 Caute 服务器。如果你追求纯粹的本地化、零云端交互的笔记体验，或者对数据出境有严格限制，这款插件可能并不适合你的需求。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


