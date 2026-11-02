---
uid: 1793625623656000
title: "Obsidian 插件：Token Receipt"
tags: ["图表与可视化", "数据分析", "效率工具", "obsidian插件"]
description: "Turn a day of token usage into a shop receipt - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Token Receipt

> [!Note] 插件名片
> - 插件名称：Token Receipt
> - 插件作者：马自立
> - 插件说明：Turn a day of token usage into a shop receipt - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['图表与可视化', '数据分析', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/matsurimw/token-receipt)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?token-receipt)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/matsurimw/token-receipt/master/README.md)



## 概述

Token Receipt 将 AI 编码工具的每日使用记录转化为一张可视化的“商店小票”。它自动读取 Claude Code、Codex 和 WorkBuddy 在本地保存的会话日志，统计各模型的输入、输出及缓存读写 Token 数量，并依据 API 列表价格估算成本。此外，它还会展示你触达订阅计划限额的次数、重置时间，以及通过 Magpie 网关记录的账户余额变化，让你对当天的资源消耗一目了然。

想象一下，当你结束了一天的编码工作，只需点击侧边栏图标，一张带有热敏打印机质感的小票便从“打印机”中吐出，上面清晰列出了今日所有 AI 助手的“账单”。你可以将这张小票保存为图片插入每日笔记，或者复制为 PNG 分享给同事。插件提供了六种场景样式，从木质桌面到软木板，甚至支持保存为循环动画的 SVG 文件，让枯燥的数据统计变得生动有趣。

与仅显示单一工具数据的插件不同，Token Receipt 支持多工具聚合，并能识别 Magpie 网关数据，提供跨工具的全面视图。其特色在于完全本地化运行，不发送任何网络请求，且通过 SVG 滤镜实时渲染纸张纹理和光影效果，无需加载外部图片资源。这种设计既保护了隐私，又提供了极具沉浸感的视觉体验，适合喜欢个性化工作流的用户。

需要注意的是，该插件仅支持桌面端，且只能统计本地日志中记录的数据，claude.ai 网页版或桌面应用聊天窗口的用量无法被捕获。成本计算基于 API 列表价，若你使用的是订阅制套餐，实际支付金额可能与此估算不同。此外，小票默认包含本机局域网地址和系统版本作为“桌号”，若需分享图片，建议在设置中关闭此功能以保护隐私。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


