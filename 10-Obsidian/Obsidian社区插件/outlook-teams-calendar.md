---
uid: 1786577081187004
title: 'Obsidian 插件：Outlook Teams and Calendar'
tags: ['第三方工具集成', '日历与时间', '数据处理', '效率工具', 'obsidian插件']
description: '把微软 365 的内容同步到你的仓库里：包括 Outlook 邮件（每封邮件对应一条笔记，还有对话索引）、日历事件以及 Teams 消息（聊天记录和频道消息）。支持增量同步、PKCE 认证，采用只读权限范围。——此插件尚未经过 Obsidian 官方人员手动审核。'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Outlook Teams and Calendar

> [!Note] 插件名片
> - 插件名称：Outlook Teams and Calendar
> - 插件作者：Nabheet Madan
> - 插件说明：把微软 365 的内容同步到你的仓库里：包括 Outlook 邮件（每封邮件对应一条笔记，还有对话索引）、日历事件以及 Teams 消息（聊天记录和频道消息）。支持增量同步、PKCE 认证，采用只读权限范围。——此插件尚未经过 Obsidian 官方人员手动审核。
> - 插件分类：['第三方工具集成', '日历与时间', '数据处理', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/nabheetcloud/Obsidian-Outlook-Mail-Chats-Calendar-Plugin)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?outlook-teams-calendar)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/nabheetcloud/Obsidian-Outlook-Mail-Chats-Calendar-Plugin/master/README.md)



## 概述

### 主要功能
该插件可将 Microsoft 365 中的邮件、日历和 Teams 消息同步到 Obsidian 保险库。包含邮件、日历、Teams 消息三个独立可开关的功能，默认存储在“10-Mailbox”文件夹。邮件功能可读取 Outlook 文件夹邮件，为每封邮件创建笔记并生成线程索引；日历功能为每个事件创建笔记并显示即将到来的会议；Teams 功能为每个会话生成记录笔记和会话索引。

### 适用场景
适用于需要在 Obsidian 中集中管理 Microsoft 365 相关信息的用户。

### 核心特色
采用增量同步，仅拉取变化内容；使用 PKCE 认证，不存储客户端密钥；具备只读权限范围；可配置文件夹映射；利用 Graph delta 查询，减少数据拉取量。

### 使用建议
仅支持桌面端，不支持 Obsidian 移动版。首次使用需注册 Azure AD 应用，详细设置步骤可参考 [SETUP.md](SETUP.md) 。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


