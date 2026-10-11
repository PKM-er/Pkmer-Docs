---
uid: 1791709365703000
title: 'Obsidian 插件：Branch Delivery Manager'
tags: ['任务管理', '第三方工具集成', '效率工具', 'obsidian插件']
description: ''
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Branch Delivery Manager

> [!Note] 插件名片
> - 插件名称：Branch Delivery Manager
> - 插件作者：NeverCode
> - 插件说明：
> - 插件分类：['任务管理', '第三方工具集成', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/fzk177/branch-delivery-manager)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?branch-delivery-manager)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/fzk177/branch-delivery-manager/master/README.md)



## 概述

**1. 主要功能**
该插件在 Obsidian 中集成 Git 分支交付管理，支持登记本地仓库、扫描远端分支与提交记录，并自动关联事项、验收证据及上线检查。它内置交付核心，无需额外脚本即可运行。

**2. 适用场景**
适用于需要在笔记软件中统一管理 Git 开发流程的团队或个人，特别是那些希望将代码交付记录、任务关联（如禅道）及验收状态整合在同一工作流中的开发者。

**3. 核心特色**
*   **零依赖核心**：无需安装 Codex Skill 或本机脚本即可基础使用。
*   **安全隔离**：仅执行 `git fetch`，不自动提交、推送或修改远端分支。
*   **灵活集成**：可选支持 Codex CLI 智能关联建议及禅道任务/Bug 状态同步。
*   **数据本地化**：交付记录保存在指定目录，设置独立存储，升级时保留原有数据。

**4. 使用建议**
确保电脑已安装 Git 且仓库已克隆。通过命令面板“登记 Git 仓库”添加路径后，运行“打开分支交付中心”进行扫描。若需智能关联，请配置 Codex CLI；若需查看 Bug 状态，需自行配置禅道只读客户端凭据。升级时请勿删除 `data.json` 以保留历史记录。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


