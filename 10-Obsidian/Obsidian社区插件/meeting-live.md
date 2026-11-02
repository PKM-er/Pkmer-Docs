---
uid: 1793625616176001
title: "Obsidian 插件：Meeting Live"
tags: ["多媒体", "自动化与AI", "效率工具", "obsidian插件"]
description: "Embed a live meeting workspace in your notes: local recording, real-time Volcengine speech recognition, AI stage summaries, and meeting notes from recordings. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Meeting Live

> [!Note] 插件名片
> - 插件名称：Meeting Live
> - 插件作者：YzW0408
> - 插件说明：Embed a live meeting workspace in your notes: local recording, real-time Volcengine speech recognition, AI stage summaries, and meeting notes from recordings. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['多媒体', '自动化与AI', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/n0ctx/obsidian-meeting-live)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?meeting-live)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/n0ctx/obsidian-meeting-live/master/README.md)



## 概述

Meeting Live 将会议工作区直接嵌入 Markdown 笔记，核心功能包括本地录音、实时语音转写、阶段性 AI 摘要及会后笔记生成。它允许你在笔记中插入交互式会议卡片，实现录音与转写的同步进行，并将音频、原始转写文本及 AI 生成的摘要统一存储在 Vault 内的独立文件夹中，确保数据本地化且结构清晰。

典型场景包括线上会议记录与既有音频整理。例如，在参加远程会议时，你可以插入会议组件并开始录音，插件会实时显示转写文本，并每隔几分钟生成一次包含事实、观点及待办事项的阶段性摘要，方便你随时回顾重点。另一种场景是处理已有的访谈录音，通过“录音生成访谈记录”功能，插件会在后台自动转写并添加说话人标签，最终在当前笔记中生成结构化的访谈记录，无需手动整理原始音频。

相比同类插件，Meeting Live 的特色在于其“阶段性摘要”机制，能按时间间隔自动提炼新信息并标记类型，且每个要点都链接回原始转写文本，便于核实。此外，它支持从 Vault 或磁盘直接选取音频文件进行后台转写，并明确区分了实时流式识别与文件识别两种模式。所有 AI 输出均保存在独立文件中，不会覆盖原始转写或音频，保证了数据的可追溯性。

使用前需注意，该插件目前仅支持桌面端（已测试 macOS），且界面为简体中文。录音仅能捕获麦克风输入，若需录制线上会议对方声音，需通过虚拟音频设备路由系统声音。此外，AI 生成的摘要和笔记可能存在错误，务必对照转写文本和音频进行事实核查。该插件不适合需要完全离线处理或自动识别具体发言人姓名的场景，因为说话人标签仅基于声音区分，不具名。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


