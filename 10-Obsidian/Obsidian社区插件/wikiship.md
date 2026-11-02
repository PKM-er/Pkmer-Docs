---
uid: 1793625624577000
title: "Obsidian 插件：wikiship"
tags: ["自动化与AI", "编辑工具", "安全与隐私", "obsidian插件"]
description: "Review AI edits from local agents in Obsidian with an authenticated local MCP server and reversible change journal. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：wikiship

> [!Note] 插件名片
> - 插件名称：wikiship
> - 插件作者：creasac
> - 插件说明：Review AI edits from local agents in Obsidian with an authenticated local MCP server and reversible change journal. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['自动化与AI', '编辑工具', '安全与隐私', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/creasac/wikiship)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?wikiship)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/creasac/wikiship/master/README.md)



## 概述

wikiship 旨在解决本地 AI 代理直接修改 Obsidian 笔记时缺乏安全审查的问题。它内置了一个经过身份验证的本地 MCP 服务器，允许同一台电脑上的 AI 客户端连接并操作库内容。核心功能在于记录所有通过该插件工具进行的文件变更，生成可逆的变更日志，让用户在 AI 编辑后能够先审查再决定保留或撤销，从而确保笔记内容的完整性与可控性。

典型场景包括让 AI 助手根据当前光标位置或选中文本优化段落结构，或批量整理笔记标签。例如，当你选中一段杂乱的文字并请求 AI 重写时，wikiship 会拦截这一操作，在“machine minds' changes”面板中展示修改前后的对比。你可以直观地看到 AI 做了什么，若不满意可一键恢复原状，若满意则批准变更并清除审查数据，整个过程无需手动复制粘贴或担心误操作。

相比其他依赖外部脚本或独立服务的方案，wikiship 无需安装 Node.js 或配套插件，所有功能集成在 Obsidian 内部，配置简单且隐私性强。它特别强调变更的可逆性，文件删除操作在批准前仅处于暂存状态，不会立即生效。这种设计使得用户能够放心地让 AI 进行较大范围的编辑，因为任何错误操作在批准前都可以轻松回退，降低了 AI 辅助写作中的风险。

需要注意的是，该插件仅支持同一台电脑上的 MCP 客户端连接，且同一时间只能服务一个库。此外，它仅记录通过其 MCP 工具产生的变更，若 AI 通过其他 shell 或文件系统工具直接修改文件，这些变化不会出现在审查面板中。因此，它不适合需要跨设备同步审查数据或依赖非标准文件操作接口的复杂工作流，用户应确保所有 AI 编辑均通过 wikiship 提供的工具进行，以充分利用其安全审查机制。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


