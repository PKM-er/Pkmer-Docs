---
uid: 1786577083276000
title: 'Obsidian 插件：Todoist Task Notes'
tags: ['第三方工具集成', '任务管理', '效率工具', '自动化与AI', 'obsidian插件']
description: '为每个Todoist任务创建一个具有双向同步功能的层级式Obsidian笔记。——此插件尚未经过Obsidian官方人员的手动审核。'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Todoist Task Notes

> [!Note] 插件名片
> - 插件名称：Todoist Task Notes
> - 插件作者：Nataniel shulkin
> - 插件说明：为每个Todoist任务创建一个具有双向同步功能的层级式Obsidian笔记。——此插件尚未经过Obsidian官方人员的手动审核。
> - 插件分类：['第三方工具集成', '任务管理', '效率工具', '自动化与AI', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/natysh1011/obsidian-todolistsync)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?todoist-task-notes)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/natysh1011/obsidian-todolistsync/master/README.md)



## 概述

### 主要功能
为每个Todoist任务创建一个Markdown笔记，并实现任务字段的双向同步，涵盖标题、描述、标签等多方面。支持创建任务和子任务，具备离线任务创建与幂等重试功能，遇冲突会生成副本。

### 适用场景
适用于使用Todoist进行任务管理，同时希望在Obsidian中详细记录任务相关信息，实现任务管理与笔记记录一体化的用户。

### 核心特色
- 为每个任务、子任务及嵌套子任务创建独立笔记，按真实Todoist项目分组到分层文件夹。
- 有希伯来语RTL仪表盘，含项目统计和可折叠任务树。
- 界面和任务笔记详情支持英语和希伯来语，有RTL布局。
- 用户在`## Notes`下的内容不会被覆盖。

### 使用建议
安装时需克隆或下载仓库，执行`npm install`和`npm run build`，再复制相关文件到指定路径并在Obsidian社区插件中启用。要在设置里粘贴、保存等操作Todoist API token，也可复用已有插件的token。在Markdown笔记添加特定代码块可使用仪表盘。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


