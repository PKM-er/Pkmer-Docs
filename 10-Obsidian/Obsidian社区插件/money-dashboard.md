---
uid: 1791709368700000
title: 'Obsidian 插件：Money Dashboard'
tags: ['图表与可视化', '数据处理', '数据分析', 'obsidian插件']
description: 'Spend, billing-cycle and map dashboards from a markdown transaction inbox. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Money Dashboard

> [!Note] 插件名片
> - 插件名称：Money Dashboard
> - 插件作者：Yogesh Jadhav
> - 插件说明：Spend, billing-cycle and map dashboards from a markdown transaction inbox. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['图表与可视化', '数据处理', '数据分析', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/pgyogesh/obsidian-money-dashboard)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?money-dashboard)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/pgyogesh/obsidian-money-dashboard/master/README.md)



## 概述

**1. 主要功能**
Money Dashboard 将 Markdown 表格形式的交易记录转化为三个可视化仪表盘页面：
*   **总览页**：展示月度净支出、趋势、分类/卡种/商户统计及可筛选交易表。
*   **账户页**：基于账单周期展示各卡支出、账单日、还款日及信用额度。
*   **地图页**：以金额加权的热力图展示资金流向。

**2. 适用场景**
适合希望在 Obsidian 中管理个人财务的用户，特别是偏好本地化、隐私优先（数据不出本地，仅地图页请求瓦片）且习惯使用 Markdown 记录流水的笔记用户。

**3. 核心特色**
*   **纯本地驱动**：所有数据读取自 Vault 笔记，无需外部 API 或云端同步。
*   **自动化设置**：通过命令面板一键生成包含示例数据的笔记结构，支持自定义文件夹。
*   **灵活嵌入**：三个仪表盘代码块可自由插入任意笔记中。
*   **依赖 Dataview**：需安装并启用 Dataview 插件作为前置条件。

**4. 使用建议**
*   确保已安装 Dataview 插件并启用。
*   建议先运行“Set up money notes with sample data”命令熟悉结构，再替换为真实数据。
*   交易记录需严格遵循 Markdown 表格格式（每行一笔交易）。
*   注意地图页会有少量网络请求用于加载地图瓦片，其余功能完全离线。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


