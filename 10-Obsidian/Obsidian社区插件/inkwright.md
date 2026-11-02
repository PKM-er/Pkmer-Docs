---
uid: 1793625614234000
title: "Obsidian 插件：Inkwright"
tags: ["编辑工具", "图表与可视化", "发布工具", "obsidian插件"]
description: "Write, playtest and debug ink interactive fiction: live play panel, saves, knot graph, web export and bilingual stories. English and Chinese interface. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Inkwright

> [!Note] 插件名片
> - 插件名称：Inkwright
> - 插件作者：nukcole
> - 插件说明：Write, playtest and debug ink interactive fiction: live play panel, saves, knot graph, web export and bilingual stories. English and Chinese interface. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['编辑工具', '图表与可视化', '发布工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/luoxin9510/inkwright)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?inkwright)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/luoxin9510/inkwright/master/README.md)



## 概述

Inkwright 将 ink 互动小说的创作、测试与调试流程直接整合进 Obsidian 库中。它允许你在笔记旁直接编辑 `.ink` 文件，保存后播放面板会自动重新编译，无需切换应用或执行复杂的构建步骤。插件提供实时的变量追踪、存档管理以及可视化的节点图，让你能直观地看到故事分支结构，并快速定位编译错误，从而在写作过程中即时验证逻辑。

想象你正在撰写一部多结局的冒险故事，角色设定和地图笔记就存放在同一个库中。当你修改某段对话后，播放面板立即更新，你可以直接点击选项测试新分支，而无需复制文件到外部工具。若故事拆分为多个文件，你可以锁定主文件，在编辑章节时保持播放状态不变。完成创作后，一键导出为单文件网页，即可上传至 itch.io 等平台发布，读者无需安装任何软件即可游玩。

相比传统的 Inky 工具，Inkwright 的最大特色在于其“双语故事”支持。通过简单的 `{tr("Hello", "你好")}` 语法，你可以让读者在游玩中途切换语言而不丢失进度，插件还会自动警告未翻译的行。此外，它提供 JSON API，允许编程代理自动测试所有结局，适合需要自动化验证复杂分支逻辑的创作者。所有数据本地处理，无网络请求，隐私安全。

需要注意的是，该插件仅支持 ink 引擎，不适合使用 Twine 或其他非 ink 格式的用户。虽然支持移动端，但复杂的节点图在手机上可能显示受限。如果你只是写线性小说，或不需要在笔记环境中管理互动逻辑，此插件可能显得功能过剩。确保你的 Obsidian 版本较新，并熟悉基本的 ink 语法，以便充分利用其调试和导出功能。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


