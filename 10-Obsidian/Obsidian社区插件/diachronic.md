---
uid: 1793625612086000
title: "Obsidian 插件：Diachronic"
tags: ["编辑工具", "文字处理", "效率工具", "obsidian插件"]
description: "Track changes for Markdown: versions per note, word-level suggestions you accept or reject, comments, and a review sidebar. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Diachronic

> [!Note] 插件名片
> - 插件名称：Diachronic
> - 插件作者：Johannes Kaindl
> - 插件说明：Track changes for Markdown: versions per note, word-level suggestions you accept or reject, comments, and a review sidebar. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['编辑工具', '文字处理', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/johannes-kaindl/diachronic)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?diachronic)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/johannes-kaindl/diachronic/master/README.md)



## 概述

Diachronic 是一款专为 Markdown 笔记设计的修订追踪工具，旨在解决多人协作或自我迭代时版本混乱的问题。它通过记录每篇笔记的独立版本（Stand），提供词级别的差异对比，并允许用户逐条接受或拒绝修改建议。插件还集成了评论功能与侧边栏审查界面，让文本的演变过程清晰可见，确保每一次改动都有据可查。

典型场景包括同事间通过 Markdown 文件交换文稿。例如，你收到同事发来的信件草稿，在 Obsidian 中自由修改后，运行“标记更改”命令，Diachronic 会将你的改动转化为可视化的建议。对方打开文件时，能在侧边栏看到每张变更卡片，逐一处理并添加评论，最后通过“发送回”功能开启新一轮协作。这种流程让非技术用户也能轻松管理文档的迭代过程。

相比其他版本控制插件，Diachronic 的核心特色在于其基于 CriticMarkup 标准的纯文本存储机制。这意味着即使不安装该插件，文件中的插入、删除和替换标记依然可读，且能被其他兼容插件识别。此外，它支持在移动端使用，并能在双方同时修改时避免数据覆盖，通过文档 ID 自动识别新一轮协作，无需依赖网络或额外服务。

使用前需注意，该插件主要服务于基于 Markdown 文件的线性协作流程，不适合需要实时同步或复杂权限管理的团队。已知限制包括阅读视图下标记显示为纯文本，以及 Mac 系统上“发送回”功能可能调用默认应用而非分享菜单。此外，若返回的文件包含发送方新标记与未标记更改的混合状态，系统无法自动对比。因此，它更适合小范围、异步的文档精修场景，而非大型项目的实时协同编辑。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


