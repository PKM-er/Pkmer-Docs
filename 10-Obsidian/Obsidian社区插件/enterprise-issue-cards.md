---
uid: 1793625612581000
title: "Obsidian 插件：Enterprise Issue Cards"
tags: ["第三方工具集成", "任务管理", "效率工具", "obsidian插件"]
description: "Show private GitHub ticket details in local notes. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Enterprise Issue Cards

> [!Note] 插件名片
> - 插件名称：Enterprise Issue Cards
> - 插件作者：theluckystrike
> - 插件说明：Show private GitHub ticket details in local notes. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['第三方工具集成', '任务管理', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/theluckystrike/enterprise-issue-cards)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?enterprise-issue-cards)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/theluckystrike/enterprise-issue-cards/master/README.md)



## 概述

Enterprise Issue Cards 旨在解决在本地笔记中查看私有 GitHub Enterprise 工单信息的痛点。它通过读取笔记中特定代码块内的工单链接，自动从服务器获取并展示工单的标题、状态、标签、作者及正文内容。该插件仅使用只读权限，不会修改工单或笔记原文，确保数据交互的安全性与单向性。

典型场景适用于需要结合上下文管理发布计划的工程师。例如，你可以在发布计划笔记中直接嵌入关键工单链接，阅读时即可看到工单详情，无需频繁切换浏览器标签页。另一个场景是离线查阅，插件会缓存已获取的工单数据，即使服务器暂时不可用，你依然可以查看之前获取的工单内容，并手动刷新以同步最新状态。

相比同类插件，其特色在于对私有企业服务器的深度适配与安全性。它强制使用 HTTPS 并拒绝 HTTP 请求，令牌通过 Obsidian 的 SecretStorage 安全存储，且仅允许访问配置的主机域名。此外，它具备智能缓存机制，并发请求共享结果，并在遇到速率限制或网络错误时保留旧数据并显示错误提示，而非直接清空内容。

使用前需注意，该插件仅支持 GitHub Enterprise Server，不支持公共 GitHub 或 Pull Request 状态查询。部分高级功能如多服务器配置、定时刷新列表及本地项目列表需通过 GitHub Sponsors 赞助解锁。如果你需要编辑工单、渲染 Markdown 图片或处理非 HTTPS 环境，此插件并不适合你的需求。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


