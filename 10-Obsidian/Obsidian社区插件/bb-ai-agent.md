---
uid: 1791709365576000
title: 'Obsidian 插件：bb - AI agentic IDE'
tags: ['自动化与AI', '第三方工具集成', '编程与脚本', 'obsidian插件']
description: 'Opens bb (get-bb/bb), a local AI agentic IDE, inside an Obsidian tab or sidebar via its web interface. Requires the bb desktop app. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：bb - AI agentic IDE

> [!Note] 插件名片
> - 插件名称：bb - AI agentic IDE
> - 插件作者：Al Iv
> - 插件说明：Opens bb (get-bb/bb), a local AI agentic IDE, inside an Obsidian tab or sidebar via its web interface. Requires the bb desktop app. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['自动化与AI', '第三方工具集成', '编程与脚本', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/alexivanovvv/bb-ai-agent)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?bb-ai-agent)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/alexivanovvv/bb-ai-agent/master/README.md)



## 概述

**1. 主要功能**
该插件将本地AI智能体IDE（bb）的Web界面嵌入到Obsidian的标签页或侧边栏中。它通过加载本地服务（默认localhost:38886）实现集成，若服务未启动可自动在后台拉起bb桌面应用。

**2. 适用场景**
专为已安装bb桌面应用且希望在工作流中无缝切换的用户设计。适合需要在Obsidian笔记环境中直接调用AI智能体进行代码辅助或任务处理的场景，无需频繁切换窗口。

**3. 核心特色**
*   **本地化安全**：仅与本机通信，无远程服务器请求，数据隐私性高。
*   **灵活布局**：支持在主区域、左右侧边栏打开，并提供50%-200%缩放控制。
*   **智能同步**：可选功能允许根据当前Vault路径，自动匹配bb项目并设置默认的AI提供商、模型及权限模式。
*   **轻量封装**：本身无独立功能，作为bb本地UI的薄包装层，依赖桌面端运行。

**4. 使用建议**
*   **前置条件**：必须预先安装bb桌面应用，否则插件无法工作。
*   **安装提示**：若未安装bb，插件会提供`npx bb-app@latest`命令供快速安装。
*   **配置建议**：建议开启“设置项目默认值”功能，以保持Obsidian笔记与bb项目配置的一致性；注意该插件涉及本地Shell执行和SQLite数据库读写，但均限于本机且参数固定，安全性可控。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


