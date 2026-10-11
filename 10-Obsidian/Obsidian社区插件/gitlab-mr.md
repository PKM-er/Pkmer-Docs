---
uid: 1791709367303000
title: 'Obsidian 插件：GitLab Merge Request'
tags: ['第三方工具集成', '效率工具', '编程与脚本', 'obsidian插件']
description: 'Reference GitLab merge requests inline or in code blocks and see their live status, right in your notes. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：GitLab Merge Request

> [!Note] 插件名片
> - 插件名称：GitLab Merge Request
> - 插件作者：Ris Adams
> - 插件说明：Reference GitLab merge requests inline or in code blocks and see their live status, right in your notes. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['第三方工具集成', '效率工具', '编程与脚本', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/risadams/obsidian-gitlab-mr)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?gitlab-mr)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/risadams/obsidian-gitlab-mr/master/README.md)



## 概述

**1. 主要功能**
该插件允许用户在Obsidian笔记中直接引用GitLab合并请求（Merge Requests），并以实时徽章形式展示其状态，包括开放/合并/关闭状态、流水线结果、审批情况及作者信息。

**2. 适用场景**
适用于开发人员或团队在个人知识库、项目文档或每日笔记中追踪代码审查进度，无需频繁切换至GitLab网页即可查看MR最新状态。

**3. 核心特色**
- **多账户支持**：可配置多个GitLab实例及别名，灵活切换不同项目源。
- **灵活引用**：支持行内文本、代码块及完整URL引用，兼容Live Preview和阅读视图。
- **实时同步与缓存**：徽章状态自动更新，默认15分钟缓存机制以减轻API负载，支持手动清除缓存。
- **便捷交互**：点击徽章可直接在浏览器中打开对应MR页面。

**4. 使用建议**
- 在设置中配置好GitLab主机、Token（需`read_api`权限）及默认项目。
- 使用`gitlab-mr:项目!编号`格式进行行内引用，或使用`gitlab-mr`代码块批量展示。
- 若引用多个GitLab实例，请善用别名（如`work`）以明确指向特定账户。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


