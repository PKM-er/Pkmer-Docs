---
uid: 2023080322233515
title: Obsidian 插件：【Readme】Obsidian MtG
tags: ['obsidian插件', 'readme']
description: 一个用于管理《魔法风云会》套牌和卡牌列表的Obsidian插件
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Obsidian MtG

> [!Note] 插件名片
> - 插件名称：Obsidian MtG
> - 插件作者：omardelarosa
> - 插件说明：一个用于管理《魔法风云会》套牌和卡牌列表的 Obsidian 插件
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/omardelarosa/obsidian-mtg)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsidian-mtg)

## 概述

一个用于管理《魔法风云会》套牌和卡牌列表的 Obsidian 插件

![Obsidian MtG](https://cdn.pkmer.cn/covers/obsidian-mtg.png!pkmer)

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/omardelarosa/obsidian-mtg/master/README.md)
>

---

## Readme(翻译）

下面是 [[obsidian-mtg]] 插件的自述翻译

# Obsidian MtG 插件

这是一个用于将你的《魔法：聚会》卡牌收藏和卡组管理为 Obsidian 笔记的插件。

## 牌组列表

在任何 Markdown 文件中使用 `mtg-deck` 语法提示，您可以按照以下方式定义您的牌组列表：

```mtgdeck
4 Delver of Secrets // Insectile Aberration
4 Haughty Djinn
3 Tolarian Terror
4 Consider
4 Essence Scatter
4 Fading Hope
4 Make Disappear # consider Negate instead
4 Slip Out the Back
3 Spell Pierce
3 Thirst for Discovery
20 Island
1 Otawara, Soaring City
1 Otherworldly Gaze
1 Reckoner Bankbuster

Sideboard:
2 Disdainful Stroke
4 Negate
4 Out of the Way
1 Reckoner Bankbuster
4 Ertai's Scorn
```

这将呈现为：

![](docs/img/example_decklist.png)

您还可以直接从 MTGA 导出中复制粘贴，但是卡牌集和收藏编号将不会显示，并且在渲染器中尚不支持。

## 集合

该插件默认情况下期望您的集合以.csv 文件的形式存储。默认情况下，该扩展名是可配置的：

![](docs/img/example_settings.png)

这些文件应该是正确格式的 CSV 文件，例如由 [Deckbox](https://deckbox.org/) 等工具生成的文件。

### 示例 CSV 文件

```
名称,数量,套装
Delver of Secrets // Insectile Aberration,8,MID
"Otawara, Soaring City",4,NEO
"Rona's Vortex",2,DMU
```

```
名称,数量,套装
Delver of Secrets // Insectile Aberration,1,MID
"Otawara, Soaring City",6,NEO
"Rona's Vortex",3,DMU
Ledger Shredder,5,SNC
```

请注意，您的收藏将由所有 CSV 文件的合并结果组成。

# 贡献

请参阅 [官方 Obsidian 插件指南](https://github.com/obsidianmd/obsidian-sample-plugin#obsidian-sample-plugin)。
