---
uid: 1791709365743000
title: 'Obsidian 插件：CalDAV Bridge'
tags: ['日历与时间', '第三方工具集成', '编程与脚本', '移动端优化', 'obsidian插件']
description: 'Create, update and delete events on any CalDAV calendar from your notes. Exposes a small API so QuickAdd or Templater scripts can send events, and dialogs to collect the data. Works on desktop and mobile. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：CalDAV Bridge

> [!Note] 插件名片
> - 插件名称：CalDAV Bridge
> - 插件作者：toni santos
> - 插件说明：Create, update and delete events on any CalDAV calendar from your notes. Exposes a small API so QuickAdd or Templater scripts can send events, and dialogs to collect the data. Works on desktop and mobile. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['日历与时间', '第三方工具集成', '编程与脚本', '移动端优化', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/tonisantosbcn/obsidian-caldav-bridge)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?caldav-bridge)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/tonisantosbcn/obsidian-caldav-bridge/master/README.md)



## 概述

**主要功能**
CalDAV Bridge 是一个日历桥接插件，允许从 Obsidian 笔记中创建、更新和删除任意 CalDAV 服务器（如 Nextcloud、iCloud、Fastmail 等）上的日程事件。它不内置日历视图，而是通过暴露 API 接口，让 QuickAdd 或 Templater 脚本调用以同步数据，并返回 UID 保持笔记与日历条目的关联。

**适用场景**
适合希望将笔记中的任务或计划直接同步到个人日历系统的用户。尤其适用于依赖 QuickAdd 或 Templater 进行自动化工作流的场景，支持桌面端和移动端，无 CORS 限制。

**核心特色**
1. **全生命周期管理**：支持定时和全天事件，包含相对/绝对提醒设置，并通过 SEQUENCE 机制确保更新被客户端接受。
2. **脚本友好**：提供可复用的任务对话框和通用表单构建器，便于收集数据。
3. **灵活集成**：提供 Ribbon 图标可绑定任意命令（如启动 QuickAdd 宏），支持中英文界面。

**使用建议**
安装后需在设置中配置指向具体日历集合的 URL（以斜杠结尾）、用户名及应用密码。建议结合 QuickAdd 或 Templater 编写脚本，利用其 API 实现“笔记即日程”的自动化录入，注意区分普通密码与应用专用密码。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


