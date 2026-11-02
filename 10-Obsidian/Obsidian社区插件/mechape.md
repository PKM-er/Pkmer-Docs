---
uid: 1793625616086000
title: "Obsidian 插件：MechApe"
tags: ["自动化与AI", "第三方工具集成", "效率工具", "obsidian插件"]
description: "A sidebar AI companion with Ollama, OpenRouter, Anthropic, skill profiles, and project-aware note tools. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：MechApe

> [!Note] 插件名片
> - 插件名称：MechApe
> - 插件作者：Coda Languez
> - 插件说明：A sidebar AI companion with Ollama, OpenRouter, Anthropic, skill profiles, and project-aware note tools. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['自动化与AI', '第三方工具集成', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/codalanguez/MechApe-Obsidian)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?mechape)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/codalanguez/MechApe-Obsidian/master/README.md)



## 概述

MechApe 是一款运行在 Obsidian 右侧边栏的免费 AI 助手，旨在帮助用户通过自然语言高效管理笔记。它支持连接 Ollama、OpenRouter、Anthropic 或 OpenAI 兼容接口，核心功能包括基于当前项目上下文的笔记检索、草稿辅助以及经过审查的 Markdown 修改建议。插件独立运行，无需购买桌面版或订阅服务，也不依赖 MechApe 账户，用户只需承担云端服务商的 API 费用即可使用。

典型场景包括在写作时调用“作家与编辑”技能，让 AI 在保留原意的前提下优化文章结构，或在使用“库藏助手”时快速查找笔记间的关联并整理内容。例如，你可以输入“查找本项目中未完成的任务”，插件会结合当前选定的文件夹上下文，精准定位相关笔记并给出改进建议，同时通过可视化的上下文标签确保操作范围准确无误。

相比同类插件，MechApe 的特色在于其严谨的安全机制与灵活的“技能”系统。所有笔记的创建或更新都会触发审查对话框，用户必须明确点击“应用”或“拒绝”，且具备并发编辑保护，防止意外覆盖。此外，它提供了内置及自定义指令配置文件，允许用户通过斜杠命令切换不同工作模式，并支持锁定项目范围以防止浏览时误改上下文，兼顾了灵活性与安全性。

使用前需注意，该版本仅支持桌面端，且搜索功能基于字面文本匹配而非向量嵌入，适合中小规模库。它不提供删除、Shell 执行或网页浏览工具，因此不适合需要自动化批量删除或复杂外部交互的需求。此外，API 密钥默认仅存于内存，若选择明文存储需自行注意备份安全；历史记录虽自动保存，但长期大量使用需关注插件文件夹的存储占用。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


