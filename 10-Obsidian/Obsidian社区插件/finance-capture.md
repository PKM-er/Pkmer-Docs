---
uid: 1793625612901000
title: "Obsidian 插件：Finance Capture"
tags: ["数据处理", "效率工具", "界面优化", "obsidian插件"]
description: "Adds account-aware finance capture, synced balances and reference lists, and readable operation cards. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Finance Capture

> [!Note] 插件名片
> - 插件名称：Finance Capture
> - 插件作者：lizerman404 
> - 插件说明：Adds account-aware finance capture, synced balances and reference lists, and readable operation cards. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['数据处理', '效率工具', '界面优化', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/gmdveast/finance-capture)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?finance-capture)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/gmdveast/finance-capture/master/README.md)



## 概述

Finance Capture 专为在 Obsidian 移动端记录财务流水而设计，核心功能是实现账户感知的交易捕获。它允许你基于从桌面端同步过来的账户和参考列表，快速录入收入、支出及转账。所有交易数据以 JSON 格式存储在库内，并生成只读的 Markdown 卡片，确保数据与笔记紧密关联，同时保持原始数据的完整性。

典型场景包括日常消费记录与月度预算核对。例如，你在外出时通过命令面板快速记录一笔餐饮支出，插件会自动关联当前账户并生成待处理队列；回到电脑前，通过 Syncthing 将数据同步至 Finance 桌面应用，后者会自动将其导入 Excel 工作簿。此外，你可以在笔记中嵌入余额面板，实时查看包含待处理交易在内的预测余额，无需切换应用即可掌握资金状况。

相比同类插件，其特色在于“移动端捕获、桌面端归档”的分离架构。插件本身不直接写入 Excel，而是依赖 Finance 桌面应用作为唯一的 Excel 写入者，这保证了数据处理的严谨性。同时，它支持在笔记中嵌入独立的捕获、余额及队列管理面板，每个笔记可拥有独立面板，互不干扰。这种设计既利用了 Obsidian 的笔记灵活性，又保留了专业财务软件的数据处理能力。

使用前需注意，必须配置 Syncthing 并与 Finance 桌面应用保持同步，且至少需要一个已同步的活跃账户才能开始记录。删除关联的待处理卡片可能会取消该笔交易，操作需谨慎。此插件不适合需要直接在 Obsidian 内编辑 Excel 或进行复杂财务分析的用户，它仅作为数据捕获与查看的前端工具，最终的数据处理与报表生成仍需在桌面端完成。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


