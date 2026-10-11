---
uid: 1791709366651000
title: 'Obsidian 插件：DSH for Vaults'
tags: ['自动化与AI', '第三方工具集成', '界面优化', 'obsidian插件']
description: ''
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：DSH for Vaults

> [!Note] 插件名片
> - 插件名称：DSH for Vaults
> - 插件作者：moozhu
> - 插件说明：
> - 插件分类：['自动化与AI', '第三方工具集成', '界面优化', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/moozhu/dsh-obsidian)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?dsh-ob)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/moozhu/dsh-obsidian/master/README.md)



## 概述

**1. 主要功能**
在 Obsidian 内嵌 DeepSeek Harness (DSH) Web UI，实现按库（Vault）隔离的独立 AI 工作区。支持双向交互：右键选中文字即可将文件及行号范围发送给 AI，点击 AI 回复中的路径可直接跳转至对应笔记。

**2. 适用场景**
适合需要在 Obsidian 笔记库中频繁调用 AI 进行代码解释、内容生成或上下文分析的用户。特别适用于多库并行工作，需确保不同项目 AI 会话数据严格隔离的场景。

**3. 核心特色**
*   **完全隔离**：每个 Vault 拥有独立端口、数据目录和会话历史，互不干扰。
*   **零门槛部署**：无需本地安装 Node.js 或命令行操作，插件可一键下载私有便携运行时（约 30MB），自动启动内核。
*   **高效联动**：实现 Obsidian 与 DSH 的双向无缝桥接，消除复制粘贴步骤。
*   **配置同步**：支持跨实例同步模型配置（Provider/API Key），提供增量或覆盖模式。
*   **安全更新**：仅跟踪稳定通道，更新需用户显式确认，杜绝静默升级。

**4. 使用建议**
建议首次使用时通过面板一键初始化运行时，无需手动配置环境。利用“同步模型配置”功能统一多库间的 API 设置。注意该插件未经 Obsidian 官方人工审核，使用前请确认网络环境支持自动下载依赖。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


