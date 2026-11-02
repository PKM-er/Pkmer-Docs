---
uid: 1793625618937000
title: "Obsidian 插件：OKF Wiki"
tags: ["自动化与AI", "第三方工具集成", "数据处理", "obsidian插件"]
description: "Serve your notes to AI agents over MCP as Open Knowledge Format bundles, with provenance, trust and freshness. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：OKF Wiki

> [!Note] 插件名片
> - 插件名称：OKF Wiki
> - 插件作者：Yoschanin Sasiwat
> - 插件说明：Serve your notes to AI agents over MCP as Open Knowledge Format bundles, with provenance, trust and freshness. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['自动化与AI', '第三方工具集成', '数据处理', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/ysasiwat/obsidian-okf-wiki)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?okf-wiki)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/ysasiwat/obsidian-okf-wiki/master/README.md)



## 概述

OKF Wiki 旨在解决 AI 智能体在读取笔记时缺乏来源追溯和信任机制的问题。它通过 MCP 协议将 Obsidian 中的指定文件夹以 Open Knowledge Format 包的形式提供给 AI 智能体。核心功能在于为笔记添加 YAML 前置元数据，记录知识来源、审核者及过期时间，确保智能体在读写时能明确事实出处，同时让你保留对“哪些知识已审核”的最终决定权，而非由 AI 自行判断。

典型场景包括让 AI 助手基于你的知识库进行深度问答或内容生成。例如，你可以指定一个“Knowledge”文件夹供 Claude Code 访问，当 AI 需要引用某条事实时，它能通过插件提供的工具检索到该笔记及其元数据，并在回复中注明出处。另一个场景是知识维护，当 AI 尝试更新笔记时，所有修改都会先以草稿形式存在，你需要在 Obsidian 中手动批准或拒绝，从而确保只有经过你确认的内容才会正式写入。

相比同类插件，OKF Wiki 的特色在于其严格的信任与溯源体系。它引入了“可检查的信任”机制，如果笔记的状态或验证字段在插件外被修改，会被标记为未认证，防止数据污染。此外，它具备安全写入能力，包括速率限制、输入时禁止写入、快照及一键回滚功能。插件还遵循语言策略，允许原始来源保留任意语言，但整理后的笔记统一为英文，并提供了扩展 API 供其他插件读取 Wiki 状态。

使用前需注意，该插件仅支持桌面端，且处于早期开发阶段（0.7.0）。它不适合需要移动端同步或完全自动化无人值守写入的场景，因为所有 AI 写入均需人工审核。此外，插件仅在本地回环地址运行 MCP 服务器，不连接远程服务，但 AI 智能体本身可能将读取的数据发送至其模型提供商，这一数据流向由你与智能体之间的协议决定，插件本身无法控制。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


