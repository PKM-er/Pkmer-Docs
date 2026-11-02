---
uid: 1793625610888000
title: "Obsidian 插件：Claude Studio"
tags: ["自动化与AI", "文字处理", "第三方工具集成", "效率工具", "obsidian插件"]
description: "Notion-style AI writing, chat and vault tools powered by your local Claude Code CLI. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Claude Studio

> [!Note] 插件名片
> - 插件名称：Claude Studio
> - 插件作者：siulved54
> - 插件说明：Notion-style AI writing, chat and vault tools powered by your local Claude Code CLI. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['自动化与AI', '文字处理', '第三方工具集成', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/perezamadorluisenrique-gif/claude-studio)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?claude-studio)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/perezamadorluisenrique-gif/claude-studio/master/README.md)



## 概述

Claude Studio 将 Notion 风格的 AI 写作体验引入 Obsidian，核心在于利用本地安装的 Claude Code CLI 驱动智能功能。它直接复用你已登录的 Claude 订阅会话，无需额外配置 API 密钥。插件以你的 Vault 为工作目录，通过读取根目录下的 `CLAUDE.md` 文件来塑造回答风格，确保 AI 输出符合你的个人笔记规范。

典型场景包括在选中文字后通过内联卡片获取即时建议，按 Enter 即可替换或插入内容，且支持撤销操作；或者在聊天面板中询问 Vault 内容，Claude 会读取笔记并生成带有可点击 `[[链接]]` 的回答。此外，它还能自动检查回答中指向不存在笔记的链接，并在你接受前提供一键移除选项，避免笔记库出现断链。

相比同类插件，其最大特色是“动作即笔记”的设计：所有 AI 操作和配置都存储在 `Templates/AI/` 下的 Markdown 文件中，修改后即时生效，无需重启。它提供完整的隐私保护机制，通过双重规则确保指定路径或标签的笔记绝不发送给 AI。此外，插件内置了用量监控，实时显示 5 小时会话和每周限额，并记录每次运行的成本与历史快照，方便回溯和撤销。

使用前请注意，该插件仅限桌面端使用，且必须预先安装并登录 Claude Code CLI。你的笔记内容会经由 CLI 发送至 Claude 服务器进行处理，请确保符合你的隐私预期。它不适合移动端用户，也不适合希望完全离线运行或不想消耗 Claude 订阅额度的场景。若你不需要复杂的上下文控制或隐私隔离功能，简单的 API 插件可能更轻量。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


