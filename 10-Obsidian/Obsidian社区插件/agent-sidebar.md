---
uid: 1793625605562001
title: "Obsidian 插件：Agent Sidebar"
tags: ["自动化与AI", "第三方工具集成", "编程与脚本", "obsidian插件"]
description: "Chat with your local Claude Code agent in a sidebar, with streamed replies, tool calls, diffs, permission prompts, plan mode and session history. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Agent Sidebar

> [!Note] 插件名片
> - 插件名称：Agent Sidebar
> - 插件作者：Vladimir
> - 插件说明：Chat with your local Claude Code agent in a sidebar, with streamed replies, tool calls, diffs, permission prompts, plan mode and session history. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['自动化与AI', '第三方工具集成', '编程与脚本', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/vsaraikin/obsidian-claude-plugin)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?agent-sidebar)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/vsaraikin/obsidian-claude-plugin/master/README.md)



## 概述

Agent Sidebar 将本地 Claude Code 代理集成至 Obsidian 侧边栏，核心功能是让 AI 直接读取、搜索并编辑你的笔记。它通过流式回复实时展示处理过程，将每次工具调用独立成行，并以差异对比（Diff）形式呈现文件修改内容。这种设计确保了操作透明，用户能清晰看到 AI 每一步的具体动作，而非仅接收最终结果。

典型场景包括基于当前笔记进行内容优化或重构。例如，你可以选中一段文字，让 AI 分析并补充风险章节，修改前会先展示差异供你确认；或者使用 `@` 符号引用其他笔记作为上下文，让 AI 综合多篇文档生成总结。此外，插件支持粘贴图片作为附件，方便处理包含视觉信息的笔记内容。

相比同类插件，其特色在于完整的权限控制与会话管理。用户可切换“计划模式”，在 AI 执行任何文件变更前先审阅完整计划；也可选择单次允许、会话内允许或拒绝操作。插件还能识别终端中启动的历史会话，允许在 Obsidian 内继续之前的对话，且自动继承 Claude Code 的配置、技能及 MCP 服务器设置，无需重复配置。

使用前需确保已安装并登录 Claude Code，且仅支持桌面端 Obsidian。需注意，虽然插件本身无遥测，但 Claude Code 会将提示词、笔记路径及选中内容发送至 Anthropic API 或你配置的提供商，因此涉及敏感数据时需自行评估隐私风险。该插件不适合希望完全离线运行、或不想让 AI 接触笔记具体内容的用户。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


