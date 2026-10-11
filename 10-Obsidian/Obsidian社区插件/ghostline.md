---
uid: 1791709367252000
title: 'Obsidian 插件：Ghostline'
tags: ['自动化与AI', '编辑工具', '效率工具', 'obsidian插件']
description: 'Inline ghost-text completion for the current line, powered by a local LLM. Tab accepts. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Ghostline

> [!Note] 插件名片
> - 插件名称：Ghostline
> - 插件作者：Johannes Kaindl
> - 插件说明：Inline ghost-text completion for the current line, powered by a local LLM. Tab accepts. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['自动化与AI', '编辑工具', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/johannes-kaindl/Ghostline)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?ghostline)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/johannes-kaindl/Ghostline/master/README.md)



## 概述

**Ghostline** 是一款基于本地大语言模型（LLM）的 Obsidian 行内补全插件。

**主要功能**：在用户输入暂停后，自动预测当前行剩余内容，以灰色“幽灵文本”形式显示在光标后。按 Tab 键接受建议（支持整句或逐词），按 Esc 键取消。

**适用场景**：适用于注重隐私的本地笔记写作、代码片段补全或日常文本快速生成，特别适合不希望数据上传至云端服务的用户。

**核心特色**：
1. **本地优先**：默认连接本地模型，数据不出机器；若指向远程端点，会自动屏蔽私钥、邮箱等敏感信息。
2. **智能适配**：自动识别模型类型，对支持 FIM（中间填充）的模型使用 FIM 模式，其他模型则使用 Chat 模式。
3. **灵活排除**：可通过文件夹、文件模式或笔记属性（`ghostline: false`）指定排除范围。
4. **统一配置**：集中管理端点、密钥及模型参数。

**使用建议**：需确保 Obsidian 版本为 1.11.4 及以上，且主要支持桌面端。建议先配置本地 LLM 服务（如 Ollama），再根据需求调整排除规则以保护敏感笔记。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


