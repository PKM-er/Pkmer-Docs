---
uid: 1793625607956000
title: "Obsidian 插件：Bibliomancy"
tags: ["效率工具", "搜索与排序", "第三方工具集成", "obsidian插件"]
description: "Divine answers with bibliomancy by choosing random notes and passages using true random from atmospheric noise (RANDOM.ORG). - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Bibliomancy

> [!Note] 插件名片
> - 插件名称：Bibliomancy
> - 插件作者：coherence-wizard
> - 插件说明：Divine answers with bibliomancy by choosing random notes and passages using true random from atmospheric noise (RANDOM.ORG). - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['效率工具', '搜索与排序', '第三方工具集成', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/coherence-wizard/obsidian-bibliomancy)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?bibliomancy-atmospheric-noise)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/coherence-wizard/obsidian-bibliomancy/master/README.md)



## 概述

Bibliomancy 利用 RANDOM.ORG 的大气噪声生成真随机数，从你的笔记库中随机抽取段落或打开随机笔记。它允许你设定文件夹或标签过滤器，并在抽中段落后可直接跳转至源笔记。这种基于物理随机性的机制，旨在打破算法推荐的惯性，通过不可预测的“神谕”式体验，帮助你发现被遗忘的知识角落或激发新的创作灵感。

想象你在写作瓶颈期，点击侧边栏的骰子按钮，插件从指定文件夹中随机抽取一段文字，或许能意外触发新的思路；或者在整理知识库时，使用“从当前文件夹抽取”功能，快速浏览该主题下的不同观点。你也可以右键点击某篇长文，仅从该笔记中抽取段落，用于复习或测试记忆。这种交互方式让静态的笔记库变得具有探索性，适合喜欢随机漫步式阅读的用户。

与依赖本地伪随机数或简单哈希的同类插件不同，Bibliomancy 的核心特色在于其“真随机”来源。它通过 API 调用 RANDOM.ORG 服务，确保每次抽取都基于真实的大气噪声，而非可预测的算法序列。此外，插件采用“先选笔记，再选段落”的两步随机机制，保证每篇笔记被选中的概率均等，而非按段落数量加权，这避免了长笔记垄断抽取结果的问题。同时，它支持离线模式，允许在断网时使用设备本地随机数，并具备本地回退机制以应对网络波动。

使用前需注意，启用大气随机功能必须注册 RANDOM.ORG 账号并配置 API Key，且该密钥以明文形式存储在本地配置文件中，若同步库需确保文件隐私。此外，每次在线抽取会向 RANDOM.ORG 发送请求，包含 IP 地址及随机数范围，后者可能间接暴露笔记数量。如果你追求完全离线、无网络依赖的隐私环境，或希望按段落总数加权随机（即长笔记出现概率更高），此插件可能不完全符合需求，建议关闭 RANDOM.ORG 选项或寻找其他替代方案。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


