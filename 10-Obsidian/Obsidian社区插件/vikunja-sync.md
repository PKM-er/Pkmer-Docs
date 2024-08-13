---
uid: 2024081307133218
title: Obsidian 插件：Vikunja Sync
tags: ['图表与可视化', '编辑工具', 'obsidian插件']
description: 同步任务到Vikunja。
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Vikunja Sync

> [!Note] 插件名片
> - 插件名称：Vikunja Sync
> - 插件作者：Peter Heiss
> - 插件说明：同步任务到Vikunja。
> - 插件分类：['图表与可视化', '编辑工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/Heiss/obsidian-vikunja-plugin)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?vikunja-sync)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/Heiss/obsidian-vikunja-plugin/main/README.md)



## 概述

Obsidian Vikunja插件是一个非官方插件，用于连接Obsidian和Vikunja。Vikunja是一个待办事项应用和任务管理器，帮助您组织生活。它可以作为[todoist.com](todoist.com)的自托管替代品。该插件可以将任务在Obsidian和Vikunja之间进行双向同步，并提供多种设置以适应您的工作流程需求。

该插件的默认行为是手动触发同步。在设置中，您可以找到启用自动同步的选项，并设置同步间隔。所有任务将在第一次同步时推送到Vikunja，并保持同步。

该插件依赖于其他一些插件的工作：

- [Dataview插件](https://github.com/blacksmithgu/obsidian-dataview)
- [Daily Note Core插件](https://help.obsidian.md/Plugins/Daily+notes)

该插件的体验与todoist的优秀插件非常相似：

- [Ultimate Todoist Sync for Obsidian插件](https://github.com/HeroBlackInk/ultimate-todoist-sync-for-obsidian)
- [Obsidian Todoist插件](https://github.com/jamiebrynes7/obsidian-todoist-plugin)

该插件的功能主要以Obsidian为主。如果任务在两个系统中都进行了更新，Obsidian任务将优先生效。因此，目前不建议同时使用Vikunja和Obsidian更新任务或进行团队协作。

插件支持的功能包括添加任务、更新任务、删除任务、修改任务标题、修改任务描述、修改标签、修改截止日期、标记任务完成/未完成、同步完成日期、设置和修改任务优先级、添加和修改项目、移动任务、修改关系等。

该插件还支持一些任务格式和Vault搜索实现。

如果您在设备或Vikunja实例上配置了错误的时区，可能会出现错误。请在Vikunja实例中设置正确的时区。

如果您想为该插件做出贡献，可以克隆该存储库并按照README中的说明进行操作。

如果您想手动安装该插件，可以将`main.js`、`styles.css`和`manifest.json`复制到您的Vault文件夹的`.obsidian/plugins/your-plugin-id/`目录下。

您还可以选择使用ESLint来提高代码质量。README中提供了使用ESLint的说明。

有关API文档，请参阅[obsidian-api](https://github.com/obsidianmd/obsidian-api)。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---



