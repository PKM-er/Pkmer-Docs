---
uid: 1793625612105001
title: "Obsidian 插件：Dice Table"
tags: ["表格", "数据处理", "效率工具", "obsidian插件"]
description: "Roll a random result set from Markdown dice tables and save it with one click. Engine and data are fully separated: H1 = dice name, H2 = pool, - = face. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Dice Table

> [!Note] 插件名片
> - 插件名称：Dice Table
> - 插件作者：xmmw
> - 插件说明：Roll a random result set from Markdown dice tables and save it with one click. Engine and data are fully separated: H1 = dice name, H2 = pool, - = face. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['表格', '数据处理', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/xmmw-fun/obsidian-dice-table)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?dice-table)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/xmmw-fun/obsidian-dice-table/master/README.md)



## 概述

Dice Table 是一款专为 Obsidian 设计的轻量级随机结果生成器，旨在解决传统随机工具与笔记内容割裂的问题。它采用引擎与数据彻底分离的设计，用户只需将骰子表编写为普通 Markdown 笔记，遵循 H1 为骰子名、H2 为池、横杠为面的简单结构即可。插件会自动识别这些结构，从每个池中随机抽取一条结果，并支持一键保存为笔记或导出为 PNG/JPG 图片，无需为每张表进行额外配置。

典型使用场景包括游戏跑团中的随机事件生成或创意写作中的灵感激发。例如，在考古探险设定中，你可以定义“地形”和“战利品”两个池，通过 `## 战利品 ×2` 一次性抽取两件不重复的宝物；或者利用词库占位符功能，在句子中嵌入 `{颜色}`，摇骰时自动从同名池中填入随机词汇，从而快速生成连贯的叙事片段。

相比同类插件，Dice Table 的特色在于其强大的引用与嵌套机制。它支持跨文档引用，允许你在一个文件中定义“属性集”，并在其他文件中通过链接复用，实现单点定义、全局生效。此外，它还支持面权重（如 `^5` 增加出现概率）、随机数字池（整数或小数范围）以及随机子集池（每次摇骰随机选取部分池），这些功能使得复杂逻辑的随机化变得简单直观，且界面完全跟随 Obsidian 主题，视觉体验统一。

使用前需注意，该插件不发起任何网络请求，数据完全本地化，但要求用户严格遵循 Markdown 标题层级规范，否则无法识别骰子结构。它不适合需要实时联网获取数据、或希望完全脱离 Markdown 文本格式进行可视化拖拽编辑的用户。如果你追求极致的自定义逻辑且愿意编写代码，或者需要复杂的图形化界面，这款以文本为核心的插件可能不是最佳选择。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


