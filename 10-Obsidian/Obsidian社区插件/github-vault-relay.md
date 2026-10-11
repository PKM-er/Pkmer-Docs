---
uid: 1791709367298000
title: 'Obsidian 插件：GitHub Vault Relay'
tags: ['移动端优化', '第三方工具集成', '备份与恢复', 'obsidian插件']
description: 'A conservative GitHub bridge for Obsidian Mobile - without running Git on the phone. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：GitHub Vault Relay

> [!Note] 插件名片
> - 插件名称：GitHub Vault Relay
> - 插件作者：Nguyễn An Khang
> - 插件说明：A conservative GitHub bridge for Obsidian Mobile - without running Git on the phone. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['移动端优化', '第三方工具集成', '备份与恢复', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/ankhang0704/github-vault-relay)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?github-vault-relay)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/ankhang0704/github-vault-relay/master/README.md)



## 概述

**1. 主要功能**
GitHub Vault Relay 是一款专为 Obsidian 移动端设计的 GitHub 同步插件。它通过 HTTPS 协议直接调用 GitHub REST API，无需在手机端安装或运行 Git 引擎即可实现笔记库与 GitHub 仓库的双向同步。

**2. 适用场景**
适用于希望在移动端安全同步笔记的用户，特别是那些担心在手机上运行原生 Git 命令存在兼容性或安全风险，且需要手动控制同步时机、避免自动同步冲突的场景。

**3. 核心特色**
*   **轻量无依赖**：不依赖原生 Git、`child_process` 或 `isomorphic-git`，仅使用 Obsidian 内置 API，资源占用极低。
*   **保守安全策略**：同步完全由用户手动触发，无后台自动同步；采用“安全推送”机制，仅在无冲突时提交，遇到歧义变更时保留供人工审查，绝不静默覆盖。
*   **严格边界控制**：自动跳过超过 25 MiB 的大文件，并通过内容 SHA 精确匹配文件移动，确保数据完整性。

**4. 使用建议**
建议用户始终通过统一的“Sync”操作进行同步，以便插件能完整规划拉取和推送流程。遇到文件冲突或移动时，请仔细查看插件报告并手动处理，切勿忽略警告。注意该插件要求 Obsidian 版本不低于 1.11.4，且目前主要面向移动端优化，桌面端亦支持但非核心目标。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


