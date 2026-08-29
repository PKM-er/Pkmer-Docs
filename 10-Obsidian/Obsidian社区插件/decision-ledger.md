---
uid: 1786577077339008
title: 'Obsidian 插件：Decision Ledger'
tags: ['编程与脚本', '数据处理', '效率工具', '数据分析', 'obsidian插件']
description: '把决策和它们所管控的代码关联起来，还能随时了解代码是否偏离预期。——这款插件尚未经过Obsidian官方人员的人工审核。'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Decision Ledger

> [!Note] 插件名片
> - 插件名称：Decision Ledger
> - 插件作者：Dinesh S
> - 插件说明：把决策和它们所管控的代码关联起来，还能随时了解代码是否偏离预期。——这款插件尚未经过Obsidian官方人员的人工审核。
> - 插件分类：['编程与脚本', '数据处理', '效率工具', '数据分析', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/din-es/obsidian-decision-ledger)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?decision-ledger)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/din-es/obsidian-decision-ledger/master/README.md)



## 概述

### 决策账本（Decision Ledger）插件总结

1. **主要功能**：将决策与受其管控的代码绑定，在解释决策的笔记中实时渲染代码，并能显示代码与笔记描述的一致性状态，如“跟踪中”“偏离 67%”“代码已删除”等。还提供侧边栏展示所有决策状态。
2. **适用场景**：适用于记录代码设计决策的场景，帮助开发者在代码不断变更、重构或删除后，仍能清晰了解决策与实际代码的匹配情况，避免笔记与实际情况脱节。
3. **核心特色**：实时展示决策管控的代码及状态，能直观看到代码是否偏离决策描述；可通过 `ledger` 代码块或笔记前置元数据指定决策 ID；提供决策状态侧边栏，便于快速查看哪些笔记已失效。
4. **使用建议**：该插件仅支持桌面端，需先安装单独的 Go 二进制文件 `ledger`，然后在插件设置中配置 `ledger` 二进制文件路径和 Git 仓库路径。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


