---
uid: 1793625605595000
title: "Obsidian 插件：AI Accounting"
tags: ["自动化与AI", "数据处理", "图表与可视化", "效率工具", "obsidian插件"]
description: "Turn receipt photos and notes into a multi-currency Markdown ledger. AI drafts each entry, you check it, then it is saved. Budgets, refunds, transfers, charts and CSV. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：AI Accounting

> [!Note] 插件名片
> - 插件名称：AI Accounting
> - 插件作者：rexxall
> - 插件说明：Turn receipt photos and notes into a multi-currency Markdown ledger. AI drafts each entry, you check it, then it is saved. Budgets, refunds, transfers, charts and CSV. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['自动化与AI', '数据处理', '图表与可视化', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/rexxall/obsidian-ai-accounting)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?ai-accounting)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/rexxall/obsidian-ai-accounting/master/README.md)



## 概述

AI Accounting 旨在解决手动记账繁琐且易出错的问题，核心功能是将收据照片或笔记转化为多币种 Markdown 账本。它通过 AI 自动识别日期、商户、分类、金额及支付方式，生成待确认的草稿。你只需检查并确认，数据即被保存。所有记录以纯 Markdown 表格形式存储在库中，无需插件也能直接阅读和编辑，确保了数据的长期可访问性。

典型场景包括日常消费记录与多币种管理。例如，拍摄一张海外餐厅收据，插件自动识别货币并换算为报告币种，你确认分类后入账；或者处理一笔退款，系统将其标记为负数金额，避免手动计算错误。此外，它支持账单分摊，可将一笔消费平均分配给多位成员，并允许为每位成员设置独立的账本文件夹，适合合租或团队记账。

相比同类插件，其特色在于“草稿确认”机制，AI 结果不会直接写入账本，必须经人工审核，防止错误数据污染财务记录。它支持多种 AI 服务预设，包括 DeepSeek、Qwen 等，并允许配置本地模型以节省成本。插件还内置了预算监控、重复交易警告及 CSV 导出功能，且所有数据均保留在本地库中，API 密钥仅存储于设备本地，不随库同步，兼顾了隐私与灵活性。

使用前需注意，该插件仅记录支出，不建模收入或账户余额，且目前不支持跨月移动交易。AI 识别需消耗你的 API 额度，建议配置可靠的模型服务。若你需要复杂的资产追踪、收入管理或完全自动化无需人工审核的流程，此插件可能不适合。此外，收件箱文件夹中的文件会立即发送至 AI 服务，若对隐私极度敏感，建议关闭此功能或仅使用手动录入。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


