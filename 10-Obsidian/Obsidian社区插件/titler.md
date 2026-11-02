---
uid: 1793625623605000
title: "Obsidian 插件：Titler"
tags: ["自动化与AI", "文字处理", "效率工具", "obsidian插件"]
description: "Suggests and writes titles for your notes with a small AI that runs fully on your device. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Titler

> [!Note] 插件名片
> - 插件名称：Titler
> - 插件作者：jorammillenaar
> - 插件说明：Suggests and writes titles for your notes with a small AI that runs fully on your device. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['自动化与AI', '文字处理', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/jorammillenaar/obsidian-titler)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?titler)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/jorammillenaar/obsidian-titler/master/README.md)



## 概述

Titler 是一款完全在本地运行的 AI 标题生成插件，旨在解决笔记命名繁琐且缺乏隐私保护的问题。它利用运行在设备上的小型 AI 模型，根据笔记内容自动建议并写入标题，无需联网调用外部 API，也不依赖任何账户或密钥。这种本地化处理确保了你的笔记内容始终保留在个人设备上，从根本上消除了数据上传至云端带来的隐私泄露风险，同时提供了即时、离线的智能命名体验。

想象一下，当你快速记录灵感或整理会议要点时，往往来不及构思一个精准且吸引人的标题。Titler 可以在你停止输入几秒后，自动为未命名的笔记生成一个简洁的标题。例如，如果你写了一段关于“酸面团发酵失败”的笔记，插件可能会根据你选择的风格，生成“酸面团发酵失败的常见原因”这样的描述性标题，或者“为什么我的酸面团没有膨胀？”这样的疑问式标题，让你无需中断写作流程即可保持库内结构清晰。

与依赖云端服务的同类插件相比，Titler 的核心优势在于极致的隐私安全与离线可用性。它基于 Qwen3.5 2B 模型，虽然首次启用时需下载约 1.4 GB 的模型文件，但一旦下载完成，后续使用完全无需网络。此外，它提供了细致的风格控制，允许用户选择标题是呈现为话题、观点陈述还是疑问句，并支持调整大小写格式和长度，这种对输出格式的精细掌控力在本地 AI 插件中较为少见。

需要注意的是，该插件仅支持桌面端 Obsidian，且对硬件有一定要求。模型体积较大，需要约 1.5 GB 的磁盘空间，加载时也会占用同等规模的内存。若设备不支持 WebGPU，CPU 运行速度会明显变慢，生成标题可能需要数秒而非瞬间完成。因此，它不适合在平板或手机上使用，也不推荐用于对实时性要求极高、无法容忍几秒延迟的场景。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


