---
uid: 1793625612109001
title: "Obsidian 插件：Dictation Bridge"
tags: ["编辑工具", "obsidian插件"]
description: "Dictate into the current note through a transcription gateway you control. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Dictation Bridge

> [!Note] 插件名片
> - 插件名称：Dictation Bridge
> - 插件作者：gkipon
> - 插件说明：Dictate into the current note through a transcription gateway you control. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['编辑工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/gkipon/obsidian-dictation-bridge)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?dictation-bridge)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/gkipon/obsidian-dictation-bridge/master/README.md)



## 概述

Dictation Bridge 允许你在桌面版 Obsidian 中通过自建的 HTTPS 网关进行语音转写，并将结果直接插入当前笔记的光标或选区位置。该插件的核心在于数据控制权：它不上传笔记的标题、路径或现有内容，仅传输录音音频，且要求用户自行部署网关并配置独立的设备令牌。这种设计确保了语音数据仅通过你控制的通道传输，避免了将敏感笔记元数据暴露给第三方服务。

典型场景包括快速记录会议要点或灵感碎片。例如，在编辑项目文档时，你可以直接口述一段总结，插件会自动将其转换为文本并插入到光标处，无需切换应用。另一个场景是处理长段落修改，若在等待转写期间笔记内容发生了变动，插件会暂停自动插入，而是将转录文本保留在恢复对话框中，待你确认目标位置后手动插入，防止内容错位。

相比依赖云端托管服务的同类插件，Dictation Bridge 的最大特色是强制要求自托管网关，这意味着没有默认的云端端点，隐私边界由你定义。此外，它支持自定义词汇表以提升专业术语的识别准确率，并允许设置整行 Markdown 格式化命令。插件还具备防重复提交机制，利用相同的请求 ID 处理模糊的提供商结果，确保不会因网络波动导致内容重复写入。

使用前需注意，该插件仅支持桌面端，且单次录音限制在 4 分 55 秒或 5 MiB 以内。它不适合需要移动端同步或希望完全免运维的用户，因为你需要自行维护 HTTPS 网关并拥有付费的 OpenAI API 账户。若你依赖 Cipherfold 加密，插件会在锁定前自动取消未完成的会话，且待插入的文本仅存在于内存中，取消或退出应用即会丢失，因此需及时确认插入操作。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


