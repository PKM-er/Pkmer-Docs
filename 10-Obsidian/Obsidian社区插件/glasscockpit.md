---
uid: 1793625613381001
title: "Obsidian 插件：Glasscockpit"
tags: ["自动化与AI", "第三方工具集成", "编程与脚本", "obsidian插件"]
description: "Run Claude Code sessions as terminal views inside Obsidian, with a cockpit dashboard. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Glasscockpit

> [!Note] 插件名片
> - 插件名称：Glasscockpit
> - 插件作者：Niklas J. Thaler
> - 插件说明：Run Claude Code sessions as terminal views inside Obsidian, with a cockpit dashboard. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['自动化与AI', '第三方工具集成', '编程与脚本', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/nyko073006/glasscockpit)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?glasscockpit)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/nyko073006/glasscockpit/master/README.md)



## 概述

Glasscockpit 将 Claude Code 会话直接嵌入 Obsidian 的终端标签页中，并配备一个驾驶舱式仪表盘。该仪表盘以卡片或图形化视图展示用量限制、上下文大小、任务列表、库状态及 GitHub 搜索结果，让你无需切换窗口即可监控 AI 辅助编程的实时状态与资源消耗。

典型场景包括在撰写笔记时直接调用 AI 处理代码片段，或通过仪表盘快速查看当前会话的 Token 消耗与上下文占用。例如，当你在处理复杂项目时，可借助仪表盘上的“任务”卡片同步进度，或利用“库状态”面板监控文件变更，实现笔记管理与代码开发的无缝衔接。

相比同类插件，Glasscockpit 提供了独特的“驾驶舱”可视化体验，并支持通过 Cmd+点击 在终端中直接打开文件路径，甚至内置了简易代码编辑器。此外，它具备“交接信号”功能，能自动识别会话是否准备好移交，并支持从之前的交接笔记中继续项目，极大提升了长周期 AI 协作的连续性。

需要注意的是，该插件目前仅支持 macOS Apple Silicon 芯片，且界面与设置均为德语，暂无英文选项。它依赖本地安装的 Claude Code CLI 和 `jq` 工具，若未配置状态行，用量和上下文仪表盘将保持空白。因此，它不适合 Windows 用户、非 Apple Silicon 的 Mac 用户，或希望使用纯英文界面的用户。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


