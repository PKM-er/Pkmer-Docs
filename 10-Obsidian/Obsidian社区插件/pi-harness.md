---
uid: 1793625620064001
title: "Obsidian 插件：Pi Harness"
tags: ["自动化与AI", "第三方工具集成", "移动端优化", "obsidian插件"]
description: "Chat with your local pi agent (running in Termux on the same device) from inside Obsidian, with the note you are reading as context and answers you can write back. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Pi Harness

> [!Note] 插件名片
> - 插件名称：Pi Harness
> - 插件作者：CHAO0120
> - 插件说明：Chat with your local pi agent (running in Termux on the same device) from inside Obsidian, with the note you are reading as context and answers you can write back. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['自动化与AI', '第三方工具集成', '移动端优化', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/chao0120/pi-harness)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?pi-harness)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/chao0120/pi-harness/master/README.md)



## 概述

Pi Harness 解决了移动端 Obsidian 无法直接运行本地 AI 代理的痛点。它通过 WebSocket 连接同一设备 Termux 中运行的 pi 代理，在右侧边栏提供流式聊天面板。核心功能在于自动将当前正在阅读的笔记内容作为上下文发送给代理，让你能针对具体笔记进行提问，并将回答直接写回笔记中，实现阅读与交互的无缝闭环。

典型场景包括：当你阅读一篇技术文档时，选中一段晦涩代码，直接询问 pi 解释其逻辑，代理会基于选区内容给出解析，你点击“写入当前笔记”即可将解释插入原文；或者在整理笔记时，附上手机相册中的图片，让代理识别图片内容并生成摘要，同时利用代理在 Termux 中的权限执行脚本或调用 MCP 服务器处理数据。

相比其他插件，Pi Harness 的特色在于对“上下文”的精准处理。由于 pi 代理本身不感知光标位置，该插件通过显式前置消息机制，确保代理明确知道“这篇笔记”指代的是哪一份文件。此外，它不重复存储对话记录，而是直接回放 pi 自身的会话历史，减轻了插件负担。界面支持工具卡片展开查看执行细节，并允许实时切换模型和思考强度，断线后也能自动重连恢复会话。

使用前需注意，此插件依赖 Termux 环境及 pi 代理，且代理拥有 Termux 用户权限，非沙箱运行，请谨慎授权其文件读写操作。插件本身不联网外部服务，仅连接本地回环地址。它不适合需要云端多设备同步、或希望完全隔离 AI 权限的用户。若你不需要在移动端直接操控本地代理，或无法配置 Termux 环境，则无需安装。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


