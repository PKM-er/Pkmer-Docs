---
uid: 1786577078474000
title: 'Obsidian 插件：Hermes Agent'
tags: ['第三方工具集成', '自动化与AI', '效率工具', 'obsidian插件']
description: '在你的仓库里和本地安装的 Hermes 代理聊天。把当前笔记或选中内容发送到本地 Hermes 网关，然后在侧边栏接收流式回复，还能使用代理文件工具和查看保存的聊天记录。——此插件尚未经过 Obsidian 工作人员的人工审核。'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Hermes Agent

> [!Note] 插件名片
> - 插件名称：Hermes Agent
> - 插件作者：Jason
> - 插件说明：在你的仓库里和本地安装的 Hermes 代理聊天。把当前笔记或选中内容发送到本地 Hermes 网关，然后在侧边栏接收流式回复，还能使用代理文件工具和查看保存的聊天记录。——此插件尚未经过 Obsidian 工作人员的人工审核。
> - 插件分类：['第三方工具集成', '自动化与AI', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/jsun2020/hermes-agent-obsidian-plugin)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?hermes-agent)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/jsun2020/hermes-agent-obsidian-plugin/master/README.md)



## 概述

### 主要功能
在Obsidian内与本地安装的Hermes Agent进行聊天。将当前笔记或选中文本作为上下文发送到本地Hermes网关，通过HTTP API通信，并将回复流式传输到多标签侧边栏面板，还具备代理文件工具和保存聊天记录功能。

### 适用场景
适用于在Obsidian中需要与Hermes Agent交互，获取信息、辅助写作等场景。

### 核心特色
- 独立于Claudian插件，不修改或替换它。
- 具备两种传输方式，优先使用Runs传输，不可用时采用Chat Completions作为 fallback。
- 传输逻辑直接移植自Hermes Desktop的客户端，与参考行为一致。

### 使用建议
插件需Hermes网关HTTP API可访问。若使用Hermes Desktop，需安装并运行一次以生成API密钥，使用时确保网关运行；若采用CLI/TUI安装，注意TUI并非网关。将API密钥粘贴到插件设置中即可使用。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


