---
uid: 1793625620064000
title: "Obsidian 插件：Pi Edge"
tags: ["移动端优化", "第三方工具集成", "效率工具", "obsidian插件"]
description: "Connect to Pi on your computer from desktop or mobile with one-time pairing and note context. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Pi Edge

> [!Note] 插件名片
> - 插件名称：Pi Edge
> - 插件作者：Jiyu Yan
> - 插件说明：Connect to Pi on your computer from desktop or mobile with one-time pairing and note context. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['移动端优化', '第三方工具集成', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/anderbone/pi-obsidian-edge)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?pi-edge)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/anderbone/pi-obsidian-edge/master/README.md)



## 概述

Pi Edge 允许你在手机或桌面 Obsidian 中直接与你电脑上的 Pi AI 编码助手对话。它通过一个名为 bridge 的本地程序连接两端，支持一次性配对，让你无需离开笔记界面即可调用本地运行的 AI 能力。核心功能包括发送消息、切换模型、查看历史对话，以及将当前笔记、选中文本或图片作为上下文附加给 AI，实现基于个人知识库的精准问答。

典型场景如：你在通勤路上用手机 Obsidian 查看项目笔记，遇到代码逻辑疑问，直接附加该笔记片段向 Pi 提问，获取即时解释；或者在桌面端整理文档时，选中一段复杂配置，让 Pi 分析并给出优化建议。这种“笔记即上下文”的交互方式，让 AI 回答更贴合你的实际工作流，而非泛泛而谈。

相比其他仅连接云端 API 的插件，Pi Edge 的特色在于它对接的是运行在你自己电脑上的 Pi 实例，数据不经过第三方服务器中转，隐私性更强。同时，它支持细粒度的权限控制，你可以选择“只读”、“读写”或“完全访问”模式，明确 AI 对文件系统和 shell 命令的操作边界，这在同类插件中较为少见。

使用前需注意，你的电脑必须保持开机且 bridge 进程运行，手机与电脑需处于同一局域网或通过 Tailscale 连接。该插件不适合需要完全离线、无网络依赖的场景，也不适合希望 AI 直接操作远程服务器或云存储的用户，因为它仅能访问本地 vault 和电脑环境。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


