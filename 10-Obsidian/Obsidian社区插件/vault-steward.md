---
uid: 1791709370878000
title: 'Obsidian 插件：Vault Steward'
tags: ['文件管理', '数据处理', '效率工具', 'obsidian插件']
description: 'Local-first, evidence-backed vault maintenance for Obsidian. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Vault Steward

> [!Note] 插件名片
> - 插件名称：Vault Steward
> - 插件作者：Ibrahim Arshad
> - 插件说明：Local-first, evidence-backed vault maintenance for Obsidian. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['文件管理', '数据处理', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/ibrahim1023/vault-steward)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?vault-steward)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/ibrahim1023/vault-steward/master/README.md)



## 概述

**1. 主要功能**
Vault Steward 是一款本地优先的 Obsidian 仓库维护插件。它通过确定性解析和可选的 AI 辅助，自动检测断链、嵌入错误、Frontmatter 模式违规、任务/决策漂移及策略冲突。插件提供带有引用证据的发现报告，并生成精确的“当前”与“修复后”对比预览，确保所有修改均基于证据。

**2. 适用场景**
适用于需要长期维护大型 Obsidian 知识库的用户，特别是那些重视数据完整性、希望消除断链、规范笔记结构、追踪任务状态变化或清理重复/矛盾内容的场景。

**3. 核心特色**
*   **本地优先与安全**：默认使用 Ollama 等本地模型，支持云端模型需显式授权，确保数据隐私。
*   **人工审批机制**：插件绝不自动编辑笔记。所有修复需用户明确批准，且应用前会再次校验笔记版本，防止覆盖最新编辑。
*   **证据驱动**：提供带引用的具体发现，区分确定性检查（如断链）与 AI 辅助审查（如矛盾检测），AI 仅负责分类或排序，无权写入。

**4. 使用建议**
建议在设置中优先配置本地模型（如 Ollama）以保护隐私。使用时遵循“检查-预览-选择-应用”流程，仔细审阅每个变更的 Before/After 对比。对于云端模型，务必单独确认每个提供商的 API 密钥和隐私条款。该插件是辅助工具，用户需保留最终编辑权，定期运行以维持仓库健康。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


