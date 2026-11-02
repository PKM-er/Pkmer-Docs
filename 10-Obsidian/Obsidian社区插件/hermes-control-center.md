---
uid: 1793625613652000
title: "Obsidian 插件：Hermes Control Center"
tags: ["任务管理", "自动化与AI", "效率工具", "第三方工具集成", "obsidian插件"]
description: "Monitor and manage remote Hermes Agent profiles over SSH: kanban boards, a profile canvas, skills, cron jobs and chat. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Hermes Control Center

> [!Note] 插件名片
> - 插件名称：Hermes Control Center
> - 插件作者：Beomsu Koh | 고범수
> - 插件说明：Monitor and manage remote Hermes Agent profiles over SSH: kanban boards, a profile canvas, skills, cron jobs and chat. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['任务管理', '自动化与AI', '效率工具', '第三方工具集成', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/xia-ataraxia/obsidian-hermes)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?hermes-control-center)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/xia-ataraxia/obsidian-hermes/master/README.md)



## 概述

Hermes Control Center 旨在通过 SSH 连接远程服务器，集中监控和管理 Hermes Agent 的多个配置档案。它提供了一站式的管理界面，涵盖看板任务、档案画布、技能管理、定时任务以及实时聊天功能。用户无需在终端中频繁切换命令，即可直观地查看每个档案的活动状态、Token 消耗及成本统计，并直接对远程代理进行配置调整，实现了从监控到操作的全流程闭环。

典型场景包括团队协作与个人自动化管理。例如，当你在远程服务器上运行多个 AI 代理时，可以通过看板视图实时追踪任务进度，一旦任务卡住会收到即时通知；或者在聊天面板中与特定档案对话，输入“/”即可快速调用技能菜单，同时支持在代理处理当前请求时继续输入下一条消息，消息将按顺序自动发送，极大提升了交互效率。

相比同类插件，其特色在于深度的可视化与实时性。档案画布不仅展示数据，还通过连线展示档案间的协作关系；看板支持实时刷新，能捕捉细微的状态变化。此外，插件严格遵循最小权限原则，仅调用系统 SSH 程序，不扫描整个 Vault，也不读取剪贴板或发送任何遥测数据，确保了本地数据的安全与隐私。

使用前需注意，该插件仅支持桌面端，因为依赖系统原生的 SSH 环境。远程主机必须已安装 Hermes Agent 及 sqlite3，且 SSH 连接需配置为免密登录并预先信任主机密钥。如果你不需要管理远程 Hermes 代理，或希望直接在本地运行代理而非通过 SSH 连接，此插件并不适用。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


