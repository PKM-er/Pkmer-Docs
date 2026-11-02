---
uid: 1793625618702000
title: "Obsidian 插件：Notifications for Tasks"
tags: ["任务管理", "第三方工具集成", "效率工具", "obsidian插件"]
description: "Send reminders for Obsidian Tasks and Markdown tasks through ntfy and other notification channels. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Notifications for Tasks

> [!Note] 插件名片
> - 插件名称：Notifications for Tasks
> - 插件作者：Bazhenov Aleksei
> - 插件说明：Send reminders for Obsidian Tasks and Markdown tasks through ntfy and other notification channels. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['任务管理', '第三方工具集成', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/alekcei-bav/notifications-for-tasks)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?notifications-for-tasks)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/alekcei-bav/notifications-for-tasks/master/README.md)



## 概述

Notifications for Tasks 将 Obsidian 中的任务转化为手机提醒，核心功能是通过 ntfy 等渠道发送通知。它不仅能提醒待办事项，还能自动处理重复任务，并在任务状态变更时同步更新或取消已排期的通知，确保提醒与笔记内容保持一致。

典型场景包括管理每日习惯或项目截止日期。例如，你可以设置一个每 6 天重复的任务，插件会在指定时间推送通知；若你添加了 `#autodone` 标签，插件还能在时间到达时自动通过 Tasks 插件标记任务完成，无需手动打开应用勾选。

相比同类插件，其特色在于支持 Obsidian 关闭时仍能通过 ntfy 服务器提前调度通知，且具备“Why not”诊断功能，能解释为何某任务未收到提醒。此外，它针对移动端优化了资源占用，提供手机和桌面两种扫描模式，并支持 Telegram、Discord 等多种通知渠道。

使用前需注意，该插件依赖 Tasks 插件以实现完整自动化，且任务格式必须严格遵循“文本→时间→元数据”的顺序，否则可能导致通知失败。它不适合需要完全离线运行或希望在不安装 Tasks 插件的情况下使用复杂状态逻辑的用户，因为自动完成和重复任务逻辑均基于 Tasks 机制。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


