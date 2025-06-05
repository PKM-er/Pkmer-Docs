---
uid: 2025060517180602
title: 'Obsidian 插件：TickTick Quick Add Task'
tags: ['任务管理', '快捷键', '第三方工具集成', 'obsidian插件']
description: '用快捷键就能马上从当前文本块创建一个TickTick任务。这个任务会包含文本的副本，还有笔记里该文本块的精确链接。这需要安装Advanced URI插件。'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：TickTick Quick Add Task

> [!Note] 插件名片
> - 插件名称：TickTick Quick Add Task
> - 插件作者：Muxin Li
> - 插件说明：用快捷键就能马上从当前文本块创建一个TickTick任务。这个任务会包含文本的副本，还有笔记里该文本块的精确链接。这需要安装Advanced URI插件。
> - 插件分类：['任务管理', '快捷键', '第三方工具集成', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/muxinli/ticktick-quick-add-obsidian)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?ticktick-quickadd-task)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/muxinli/ticktick-quick-add-obsidian/main/README.md)



## 概述

TickTick Quickadd Plugin 是一款 Obsidian 插件，能够快速将选中的文本段落转换为 TickTick 任务，主要功能包括通过快捷键一键生成任务（任务标题为段落文本，并附带跳转回原文的 Advanced URI 链接）、自动添加 `#ticktick` 标签和唯一块锚点以方便追踪和定位。该插件通过 TickTick 的 OAuth 安全认证（支持 PKCE 和自动令牌刷新），简化了授权流程（使用临时本地服务器自动捕获回调，无需手动复制授权码），并提供了用户友好的设置界面（可安全输入 API 凭证）。适用场景包括从笔记中快速创建待办事项、保持任务与原文的双向链接。需配合 Advanced URI 插件使用，解决了笔记内容与任务管理工具无缝衔接的问题，同时确保数据本地化和安全性（无硬编码凭证，临时服务器仅在认证时运行）。安装需手动构建并配置 API 凭证，支持自定义快捷键操作。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---



