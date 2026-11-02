---
uid: 1793625616268000
title: "Obsidian 插件：Memory Status"
tags: ["导航与状态栏", "效率工具", "界面优化", "obsidian插件"]
description: "Show how fresh your memory and handoff files are, with open item counts and a daily log check, in the right sidebar. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Memory Status

> [!Note] 插件名片
> - 插件名称：Memory Status
> - 插件作者：emirhanoguz0
> - 插件说明：Show how fresh your memory and handoff files are, with open item counts and a daily log check, in the right sidebar. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['导航与状态栏', '效率工具', '界面优化', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/emirhanoguz0/obsidian-memory-status)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?memory-status)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/emirhanoguz0/obsidian-memory-status/master/README.md)



## 概述

Memory Status 插件旨在解决笔记库中关键文件更新滞后而不自知的问题。它常驻于右侧边栏，实时展示你指定的记忆文件、交接文档及每日日志的新鲜度。通过读取文件系统的真实修改时间，它能准确识别哪些笔记已经过时，无需依赖特殊的元数据或标签，确保你随时掌握核心信息的最新状态。

想象一下，你使用 AI 助手生成会话摘要或维护待办事项列表。插件会以绿、橙、红三色圆点直观显示这些文件的更新情况，并统计未完成任务的数量。例如，当你的“开放线程”列表中有大量未勾选任务，或“每日日志”长时间未更新时，面板会立即给出视觉警示，帮助你快速定位需要跟进的内容，避免遗漏重要工作。

与同类插件相比，Memory Status 的核心优势在于其“零侵入”特性。它完全只读，不修改任何笔记内容，也不发起网络请求或收集遥测数据，确保隐私安全。此外，它具备独特的“交接警告”功能，能对比每日日志与交接文件的时间差，若日志更新远晚于交接记录，便会提示你可能忘记同步最新工作成果，这一细节在自动化工作流中尤为实用。

需要注意的是，该插件默认不监控任何文件，安装后需在设置中手动添加监控列表，否则面板为空。它仅关注你指定的文件、日志文件夹和交接文件，不扫描整个库。因此，如果你希望自动监控全库所有笔记，或需要插件自动写入数据、同步云端，它并不适合你的需求。它更适合那些有明确核心文件、追求轻量且注重隐私的用户。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


