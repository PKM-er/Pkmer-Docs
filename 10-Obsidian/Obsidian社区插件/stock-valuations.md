---
uid: 1791709370133000
title: 'Obsidian 插件：Stock Valuations'
tags: ['数据处理', '数据分析', '效率工具', 'obsidian插件']
description: 'Calculate WACC, DCF, Graham, and Ten Cap intrinsic value, and track saved valuations in a vault summary note. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Stock Valuations

> [!Note] 插件名片
> - 插件名称：Stock Valuations
> - 插件作者：fernanluyano
> - 插件说明：Calculate WACC, DCF, Graham, and Ten Cap intrinsic value, and track saved valuations in a vault summary note. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['数据处理', '数据分析', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/fernanluyano/obs-stock-valuations)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?stock-valuations)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/fernanluyano/obs-stock-valuations/master/README.md)



## 概述

**1. 主要功能**
该插件提供一站式股票内在价值计算器，支持同时运行五种经典估值模型：WACC（加权平均资本成本）、DCF（现金流折现，含反向DCF以检验市场隐含增长率）、格雷厄姆公式、Ten Cap（所有者盈余倍数法）及DDM（股利折现模型，仅限分红股）。此外还包含“回本时间”指标，用于计算自由现金流覆盖企业价值所需的年限。

**2. 适用场景**
适用于个人投资者或价值投资者在Obsidian笔记库中构建个人投资研究体系。适合需要对个股进行多维度基本面分析、对比不同估值方法结果，并长期追踪估值变化的用户。

**3. 核心特色**
*   **联动计算**：单一表单输入，所有模型实时同步更新。
*   **反向DCF**：独特地通过当前股价反推市场预期的前5年增长率，帮助用户直观判断估值合理性。
*   **数据集成**：支持从SEC EDGAR自动获取股息数据，并在Vault中生成汇总笔记以追踪历史估值。

**4. 使用建议**
建议通过侧边栏地标图标或命令面板打开计算器。输入基础财务数据后，重点对比DCF与反向DCF的结果差异，以验证增长假设的合理性。对于不分红股票，DDM模型将显示为无效，请忽略该部分。定期更新数据并保存至汇总笔记，以便进行纵向趋势分析。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


