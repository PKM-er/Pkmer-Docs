---
uid: 1793625608748001
title: "Obsidian 插件：Cal Track"
tags: ["数据处理", "第三方工具集成", "效率工具", "obsidian插件"]
description: "Look up calories and macros (USDA, Open Food Facts), log what you eat to a CSV food log, and see each day's foods and totals in your daily notes. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Cal Track

> [!Note] 插件名片
> - 插件名称：Cal Track
> - 插件作者：Benjamin Patterson
> - 插件说明：Look up calories and macros (USDA, Open Food Facts), log what you eat to a CSV food log, and see each day's foods and totals in your daily notes. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['数据处理', '第三方工具集成', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/benruns/Obsidian-cal-track)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?cal-track)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/benruns/Obsidian-cal-track/master/README.md)



## 概述

Cal Track 是一款专为 Obsidian 设计的饮食记录插件，核心功能是将食物摄入数据直接整合进每日笔记。它允许用户通过搜索 USDA 或 Open Food Facts 数据库，选择具体的食物、数量及单位（如“1 个中等大小”或“150 克”），自动计算并记录卡路里及宏量营养素。所有数据统一存储在库内的 `Cal Track/log.csv` 文件中，而每日笔记仅通过代码块动态渲染当天的食物列表、各餐小计及总热量，实现了数据与笔记的分离。

典型使用场景包括日常饮食追踪与回顾。例如，早餐吃完后，你可以通过命令面板或侧边栏图标快速添加“香蕉”和“燕麦”，插件会自动根据时间推测为“早餐”并打开今日笔记，显示更新后的热量表格。若需修正数据，直接在笔记表格中点击编辑按钮即可调整数量或更换食物，无需手动修改底层 CSV 文件，适合希望将饮食管理融入个人知识管理体系的用户。

相比其他插件，Cal Track 的特色在于支持条形码扫描（UPC/EAN）以快速识别包装食品，并允许用户创建“组合”以保存常吃的固定餐食。此外，它支持自定义餐食分类，并能根据时间自动推荐餐次。数据以标准 CSV 格式存储，方便用户导出至 Excel 或 Google Sheets 进行长期趋势分析，同时支持手动编辑 CSV 文件，插件会实时同步更新笔记中的显示内容。

使用前需确保已启用 Obsidian 的“每日笔记”核心插件或 Periodic Notes 插件，因为 Cal Track 依赖其文件夹结构和日期格式。需要注意的是，由于所有数据集中在单一 CSV 文件中，多设备同步时存在冲突风险：Obsidian Sync 不会合并 CSV 变更，可能导致离线设备的数据丢失；iCloud 或 Dropbox 则可能生成冲突副本，需手动合并。因此，建议避免在设备未同步完成时跨设备记录，且该插件不适合需要复杂图表分析或实时云端多用户协作的场景。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


