---
uid: 1791709370959000
title: 'Obsidian 插件：VisiMark'
tags: ['数据处理', '编辑工具', '效率工具', 'obsidian插件']
description: 'Keeps the numbers in a note honest: every computed value carries the formula that produced it, and the note is still ordinary Markdown outside the vault. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：VisiMark

> [!Note] 插件名片
> - 插件名称：VisiMark
> - 插件作者：Michał Niedźwiedzki
> - 插件说明：Keeps the numbers in a note honest: every computed value carries the formula that produced it, and the note is still ordinary Markdown outside the vault. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['数据处理', '编辑工具', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/michal-niedzwiedzki/visimark)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?visimark)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/michal-niedzwiedzki/visimark/master/README.md)



## 概述

**主要功能**
VisiMark 是一款 Markdown 文档完整性插件，专为 Obsidian 设计。它确保文档中的每个计算数值都附带生成该数值的公式，并通过机器验证两者的一致性。若数值与公式不符，CI（持续集成）将报错。文档本身保持为普通 Markdown，无需特殊渲染即可在 GitHub、VS Code 等环境正常显示。

**适用场景**
特别适用于由 AI Agent 编写或编辑的文档场景。AI 擅长编写公式但常出错于算术计算，VisiMark 强制要求“写公式而非直接写数字”，从而将不可靠的数值声明转化为可审查、可重跑的推导过程。也适用于分析师、创始人进行 What-if 情景模拟。

**核心特色**
1. **公式绑定**：计算值必须携带来源公式，实现数值可追溯。
2. **自动化验证**：机器自动证明数值与公式匹配，差异以可读的 Diff 形式展示。
3. **标准兼容**：保持纯 Markdown 格式，兼容 Pandoc、GitHub 等主流工具，无插件依赖。
4. **AI 友好**：提供 MCP 服务器和 Agent 技能接口，便于 AI 生成内容后的自动校验。

**使用建议**
在让 AI 生成包含数据的文档时，引导其使用 VisiMark 语法定义公式而非直接输出结果。在 CI 流程中集成 VisiMark 检查，确保文档数据准确。对于需要频繁调整参数的情景分析，利用其 `eval --scenario` 功能进行快速模拟，避免手动复制粘贴带来的错误。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


