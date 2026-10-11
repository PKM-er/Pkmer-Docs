---
uid: 1791709370849000
title: 'Obsidian 插件：Vault Linker Auto'
tags: ['模板与链接处理', '自动化与AI', '效率工具', 'obsidian插件']
description: 'Your notes, linked automatically. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Vault Linker Auto

> [!Note] 插件名片
> - 插件名称：Vault Linker Auto
> - 插件作者：Qunwei Li
> - 插件说明：Your notes, linked automatically. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['模板与链接处理', '自动化与AI', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/goldenxingxing/obsidian-vault-linker)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?vault-linker-auto)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/goldenxingxing/obsidian-vault-linker/master/README.md)



## 概述

**1. 主要功能**
Vault Linker Auto 自动在笔记末尾生成“相关笔记”列表，并为每个顶级文件夹创建索引页。它基于笔记标题、别名和标签计算相关性，实现笔记间的自动关联。

**2. 适用场景**
适用于希望保持笔记库结构清晰、便于检索的大型 Obsidian 库。特别适合使用 Git 版本控制、脚本自动化或 AI 代理写入笔记的用户，能捕捉 Obsidian 事件机制可能遗漏的文件变更。

**3. 核心特色**
*   **绝对安全**：仅写入特定标记块，绝不修改用户原始文本，每次写入后校验字节一致性，确保原内容不变。
*   **纯 Markdown**：链接直接写入文件而非数据库，兼容 `grep`、Git 及其他工具，卸载插件后链接依然保留。
*   **零配置**：自动识别顶级文件夹为区域，智能过滤无意义名称（如 README），支持中英文词汇挖掘。
*   **高效稳定**：处理数千篇笔记仅需数秒，运行确定性高，避免无意义重写，保持 Git 历史整洁。

**4. 使用建议**
插件默认关闭，需手动启用。建议先在小范围笔记测试，确认关联逻辑符合预期后再全库运行。由于它通过轮询检测外部变更，适合配合自动化工作流使用。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


