---
uid: 1793625622618000
title: "Obsidian 插件：TermNote"
tags: ["编程与脚本", "自动化与AI", "效率工具", "文件管理", "obsidian插件"]
description: "Run local agents in tabbed terminals and continuously save each session to a Markdown note. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：TermNote

> [!Note] 插件名片
> - 插件名称：TermNote
> - 插件作者：ptwm
> - 插件说明：Run local agents in tabbed terminals and continuously save each session to a Markdown note. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['编程与脚本', '自动化与AI', '效率工具', '文件管理', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/ptwm-git/termnote)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?agent-note-terminal)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/ptwm-git/termnote/master/README.md)



## 概述

TermNote 在 Obsidian 右侧栏提供上下分栏的终端工作台，核心功能是将系统 Shell 的交互过程持续保存为 Markdown 笔记。上方区域实时展示对话记录，下方区域运行原生系统终端，支持直接调用 OpenCode、Claude Code 或 Codex 等本地 CLI 工具。每个终端标签页对应独立的备份文件，自动填充最小空缺序号，且不会修改中央打开的原始文档。即使关闭终端或移除插件，已保存的笔记仍保持可读，确保工作记录不丢失。

典型场景包括在知识库中直接运行代码代理或命令行任务。例如，你在撰写技术文档时，需要调用本地 AI 助手生成代码片段，TermNote 会自动将你的输入标记为“我”，终端输出标记为“终端”，形成结构清晰的对话记录。另一个场景是执行复杂的系统维护脚本，插件会保留原始输出日志，并在你暂停同步时保留终端运行状态，避免中断长时任务。这种“边操作边记录”的模式，让技术调试过程直接转化为可检索的知识库内容。

相比同类插件，TermNote 的特色在于精细的增量保存机制与隐私控制。它通过识别交互边界，仅记录提交的完整输入，避免逐字记录草稿或密码掩码；流式输出会合并到同一文本块，防止清屏或动画导致笔记膨胀。此外，每个标签页拥有独立的“同步 ON/OFF”开关，关闭后笔记停止更新但终端继续运行，且不会补录关闭期间的内容。插件还保留了原始输出日志用于恢复，并支持导出精简副本，兼顾了记录完整性与笔记整洁度。

使用前需注意，该插件仅支持 macOS 和 Windows 桌面端，需配置 Python 3.9+ 环境，Windows 用户还需额外安装 `pywinpty`。由于插件以用户权限运行命令，可能读写知识库外的文件，且保存内容为纯文本，分享前请自行审查敏感信息。它不适合移动端使用，也不适合需要严格语义角色分类或跨设备并发操作同一会话的场景。若你主要依赖云端服务或需要实时协作，此插件的本地化、离线记录特性可能并非最佳选择。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


