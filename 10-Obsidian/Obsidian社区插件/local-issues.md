---
uid: 1793625615031001
title: "Obsidian 插件：Local Issues"
tags: ["任务管理", "文件管理", "效率工具", "obsidian插件"]
description: "Manage local Markdown projects, issues, boards, comments and attachments, with an optional API and agent CLI. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Local Issues

> [!Note] 插件名片
> - 插件名称：Local Issues
> - 插件作者：Xinxin
> - 插件说明：Manage local Markdown projects, issues, boards, comments and attachments, with an optional API and agent CLI. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['任务管理', '文件管理', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/xinxinrana/obsidian-local-issues)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?local-issues)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/xinxinrana/obsidian-local-issues/master/README.md)



## 概述

Local Issues 将 GitHub Issues 风格的项目管理引入 Obsidian 库，核心功能是将项目、任务、评论及附件组织为本地 Markdown 文件。它支持多项目管理，提供列表、看板及表格视图，并具备标签、里程碑、负责人及截止日期等完整属性。所有数据均以纯文本形式存储，即使卸载插件，文件依然可读，确保了数据的长期可维护性与透明度。

典型场景包括个人开发任务追踪与团队协作。例如，你可以为软件迭代创建项目，在看板中拖拽卡片更新状态，并通过父子任务管理复杂依赖；或者在笔记中直接粘贴截图作为附件，利用时间线功能记录任务的状态变更历史。这种结构化的管理方式让零散的笔记转化为可执行的工作流，同时保留了 Markdown 的灵活性。

相比同类插件，Local Issues 的最大特色在于其可选的本地 Agent API 与 CLI 工具。它提供类似 `gh` 命令行的接口，支持 JSON 输出，允许 AI 代理或脚本通过本地回环地址安全地读写数据。此外，插件内置版本检查与原子写入机制，能有效防止直接编辑笔记时产生的数据冲突，且无需任何外部服务或账号登录，完全离线运行。

使用前需注意，该插件仅支持桌面端，且 CLI 功能依赖 Node.js 22+ 环境。它不适合需要实时多人在线协作、复杂权限控制或移动端同步的场景。若你主要依赖云端同步或需要非 Markdown 格式的数据存储，此插件可能无法满足需求。对于追求数据本地化、希望用 AI 辅助管理任务且偏好纯文本存储的用户，这是一个高效的选择。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


