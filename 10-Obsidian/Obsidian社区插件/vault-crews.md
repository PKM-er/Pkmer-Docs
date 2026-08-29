---
uid: 1786577083540007
title: 'Obsidian 插件：Vault Crews'
tags: ['第三方工具集成', '自动化与AI', '效率工具', 'obsidian插件']
description: '通过LM Studio在你的仓库里运行自主的本地大语言模型代理团队（小组）——此插件尚未经过Obsidian工作人员的人工审核。'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Vault Crews

> [!Note] 插件名片
> - 插件名称：Vault Crews
> - 插件作者：Johannes Kaindl
> - 插件说明：通过LM Studio在你的仓库里运行自主的本地大语言模型代理团队（小组）——此插件尚未经过Obsidian工作人员的人工审核。
> - 插件分类：['第三方工具集成', '自动化与AI', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/johannes-kaindl/vault-crews)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?vault-crews)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/johannes-kaindl/vault-crews/master/README.md)



## 概述

### Vault Crews 插件总结
- **主要功能**：借助本地大语言模型（如 LM Studio 或 Ollama），在 Obsidian 库中运行自主本地大语言模型代理团队（“机组”），执行特定任务流程。
- **适用场景**：适用于需要对 Obsidian 库内笔记进行批量处理、任务分类、摘要生成等场景。
- **核心特色**
    1. 采用确定性管道，由编排器决定流程、路径和写入，模型仅决定内容，输出受约束和验证，保障数据安全。
    2. 每次写入前进行约束和验证，确保模型输出符合内置模式，避免无效数据。
    3. 支持一键无 Git 快照撤销，运行前自动保存笔记状态，可轻松恢复。
    4. 自带两个示例机组，通过命令即可安装使用。
    5. 提供完整可观察性，每次运行都会生成人类可读的 `run.md` 和机器可读的 `state.json`。
- **使用建议**：初次使用可先安装示例机组熟悉功能，在对重要笔记操作前，利用快照功能做好数据备份。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


