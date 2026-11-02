---
uid: 1793625623713000
title: "Obsidian 插件：Trade Journal"
tags: ["数据处理", "图表与可视化", "数据分析", "日历与时间", "obsidian插件"]
description: "Local-first trading journal: CSV import, trade log, P&L dashboard, calendar heatmap and equity curve. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Trade Journal

> [!Note] 插件名片
> - 插件名称：Trade Journal
> - 插件作者：wangxiaoqian
> - 插件说明：Local-first trading journal: CSV import, trade log, P&L dashboard, calendar heatmap and equity curve. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['数据处理', '图表与可视化', '数据分析', '日历与时间', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/wangxiaoqian2042/trade-journal)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?trade-journal)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/wangxiaoqian2042/trade-journal/master/README.md)



## 概述

Trade Journal 是一款本地优先的交易记录插件，旨在解决传统云端工具数据隐私与格式封闭的问题。它将每一笔交易存储为带有 YAML 元数据的 Markdown 文件，确保数据完全由用户掌控。插件核心功能包括 CSV 导入、交易日志管理、盈亏仪表盘、日历热力图及资金曲线展示。所有统计计算均在本地机器完成，无需注册账号、不上传数据、无遥测追踪，实现了真正的数据主权。

典型使用场景包括从券商导出交易记录进行复盘，以及多账户策略的独立分析。例如，你可以将期货订单历史（单行代表单笔委托）导入，插件会自动通过 FIFO 配对生成完整交易回合，并支持 MNQ、ES 等合约乘数计算；或者在仪表盘切换不同账户视图，分别查看各账户的胜率、最大回撤及盈亏分布，而无需手动整理 Excel 表格。

相比同类插件，其特色在于对数据质量的深度把控与灵活的布局控制。插件提供“数据质量”栏，直观展示缺失止损、缺失复盘等记录缺口，并支持点击筛选特定问题交易。此外，仪表盘支持拖拽调整卡片顺序与大小，适应从主区域到窄侧边栏的不同宽度。CSV 导入支持中英文列名自动识别及手动映射预览，确保费用与佣金准确分离，避免统计偏差。

使用前需注意，该插件目前界面仅支持中文，且列映射设置不会在多次导入间持久化，每次需重新确认。它不适合需要实时行情推送、云端同步或多币种自动换算的用户。插件明确不提供止损倍数分析或订单回放功能，因为 CSV 导出通常缺乏必要的 tick 级数据，强行计算会产生误导性结果。它仅忠实记录已发生的交易，不提供交易建议。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


