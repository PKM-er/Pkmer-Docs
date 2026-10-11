---
uid: 1791709371064000
title: 'Obsidian 插件：WhatsApp Bridge'
tags: ['第三方工具集成', '数据处理', '效率工具', 'obsidian插件']
description: 'Import messages from your local wacli store into conversation notes. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：WhatsApp Bridge

> [!Note] 插件名片
> - 插件名称：WhatsApp Bridge
> - 插件作者：Kaipora Labs
> - 插件说明：Import messages from your local wacli store into conversation notes. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['第三方工具集成', '数据处理', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/kaiporalabs/whatsapp-bridge-obsidian)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?whatsapp-bridge)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/kaiporalabs/whatsapp-bridge-obsidian/master/README.md)



## 概述

**1. 主要功能**
WhatsApp Bridge 是一款 Obsidian 桌面插件，用于将本地 wacli 存储中的 WhatsApp 消息及可选音频附件导入为 Markdown 笔记。它独立运行，不依赖 Microsoft Store 数据库或 WhatsApp Local Sync 插件。

**2. 适用场景**
适用于希望将个人 WhatsApp 聊天记录归档到 Obsidian 知识库的用户。支持 Windows、macOS 和 Linux 系统，需配合 wacli 0.19.0 使用。若需将语音转为文字，可选配 OpenAI API 进行云端转录。

**3. 核心特色**
*   **本地化导入**：直接读取本地 wacli 数据，无需云端同步。
*   **独立性强**：不依赖其他受保护数据库或特定同步插件。
*   **灵活配置**：支持手动指定 wacli 可执行文件路径，并具备版本校验机制（仅限 0.19.0）。
*   **可选转录**：导入消息本身免费，语音转录需额外配置 OpenAI 密钥并产生费用。

**4. 使用建议**
*   **环境准备**：确保 Obsidian 版本为 1.13.1 或更高，并单独安装 wacli 0.19.0。
*   **安装步骤**：将插件文件夹放入 `.obsidian/plugins/` 并启用。
*   **连接设置**：在插件设置中点击“Set up connector”，指定 wacli 可执行文件路径，通过验证后扫描二维码链接手机设备。
*   **注意**：该插件目前处于 Beta 阶段（0.4.4），且未由 Obsidian 官方人工审核，建议备份数据后使用。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


