---
uid: 20240312193744
title: Obsidian 插件：【Readme】PF2e Statblocks
tags: ['obsidian插件', 'readme']
description: 使用仅基于Markdown的语法清晰地呈现Pathfinder 2e的统计数据块。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】PF2e Statblocks

> [!Note] 插件名片
> - 插件名称：PF2e Statblocks
> - 插件作者：Tyler Pixley
> - 插件说明：使用仅基于 Markdown 的语法清晰地呈现 Pathfinder 2e 的统计数据块。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/pixley/pf2e-statblock-for-obsidian)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?pf2e-statblocks)

## 概述

使用仅基于 Markdown 的语法清晰地呈现 Pathfinder 2e 的统计数据块。

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/pixley/pf2e-statblock-for-obsidian/main/README.md)

---

## Readme(翻译）

下面是 [[pf2e-statblocks]] 插件的自述翻译

# 用于黑曜石的 PF2e 属性块

使用 Markdown 语法在黑曜石内创建漂亮的 Pathfinder 第二版属性块！

## 用法

要开始一个项目块，请创建一个带有语言标签 `pf2e-stats` 的代码块，如下所示：

    ```pf2e-stats
    [YOUR CONTENT HERE]
    ```

### 名称

物品/生物等的名称用一级标题表示，前缀为单个井号 `#`。

### 等级

使用二级标题 `##` 表示 statblock 的类型和物品/生物等级。

### 特征

在标准的统计块中，特征通过用双等号“==”括起来来表示，如下所示：

```
==独特== ==中型== ==人形生物==
```

对于简化的统计块，比如用于简短 NPC 简介的统计块，可以使用三个井号“###”作为前缀来表示。

### 换行

要重置缩进，请在一行后进行两次换行。

### 分隔线

水平线（三个连字符 `---`）可以添加到分隔 statblock 的各个部分。

### 操作图标

您可以按照以下方式添加操作图标：

- 一个操作：`` `[one-action]` ``
- 两个操作活动：`` `[two-actions]` ``
- 三个操作活动：`` `[three-actions]` ``
- 自由操作：`` `[free-action]` ``
- 反应：`` `[reaction]` ``

```pf2e-stats
# 令人惊叹的各种动作腰带
## 物品25

---

==独特== ==投资== ==魔法==

**价格** 9,001 gp

**使用** 穿戴腰带；**体积** L

---

这条腰带使穿戴者能够做各种不同的事情。

**激活-扣环旋转** `[一次行动]`（视觉）互动；**效果** 你旋转腰带的华丽扣环。选择30英尺内的敌对生物。它必须进行一次DC 30的意志豁免检定。
**重要成功** 目标不受影响。
**成功** 目标直到你的下一个回合开始前都会眩目。
**失败** 目标直到你的下一个回合开始前都会失明。
**重要失败** 目标将失明1分钟。

**激活-腰带鞭打** `[两次行动]`（攻击）设想；**效果** 腰带向相邻的敌人抽打。进行一次攻击检定，修正值为+35，针对目标的AC。此次攻击无视你的多次攻击惩罚，并且不会增加你的多次攻击惩罚。目标受到6d6的钝击伤害。
**重要成功** 目标受到双倍伤害。
**成功** 目标受到全额伤害。
**失败** 目标不受伤害。
**重要失败** 腰带脱离你的裤子，导致它们掉下来。你在你的下一个回合结束前笨拙2。

**激活-皮革风暴** `[三次行动]` 设想；**效果** 腰带旋转起来，冲击附近的任何人。在你周围15英尺的范围内的生物受到4d8的钝击伤害，DC 30的基础反射豁免检定。

**激活-安全带** `[反应]` 设想；**触发** 你正在下落，15英尺内有一个悬崖；**效果** 腰带抓住悬崖，阻止你的下落。

**激活-枪套投掷** `[自由行动]` 设想；**触发** 你开始倡议；**效果** 腰带从枪套中发射武器。你进行互动来拔出武器。
```

## Pathfinder 许可通知

### Pathfinder 社区使用声明

This plugin uses trademarks and/or copyrights owned by Paizo Inc., used under Paizo's Community Use Policy (paizo.com/communityuse). We are expressly prohibited from charging you to use or access this content. This plugin is not published, endorsed, or specifically approved by Paizo. For more information about Paizo Inc. and Paizo products, visit paizo.com.

### ORC 通知

本产品根据位于国会图书馆的 ORC 许可证（TX 9-307-067）授权，并可在包括 paizo.com/orclicense、azoralaw.com/orclicense 等多个位置在线获取。所有保修均按照其中规定免责。

**归属** 本产品基于以下许可材料：*Pathfinder Player Core* © 2023 Paizo Inc.，设计者为 Logan Bonner、Jason Bulmahn、Stephen Radney-MacFarland 和 Mark Seifter。作者包括 Alexander Augunas、Kate Baker、Logan Bonner、Jason Bulmahn、Carlos Cabrera、Calder CaDavid、James Case、Eleanor Ferron、Steven Hammond、Joan Hong、Vanessa Hoskins、James Jacobs、Jenny Jarzabski、Erik Keith、Dustin Knight、Lyz Liddell、Luis Loza、Patchen Mortimer、Dennis Muldoon、Stephen Radney-MacFarland、Mikhail Rekun、David N. Ross、Michael Sayre、Mark Seifter、Kendra Leigh Speedling、Mark Thompson、Clark Valentine、Andrew White、Landon Winkler 和 Linda Zayas-Palmer

**保留材料** 本产品不包含保留材料。

**明确指定的许可材料** 本产品不包含明确指定的许可材料。

## 代码许可通知

PF2e Statblocks for Obsidian 的代码受 [MIT许可证](https://github.com/pixley/pf2e-statblock-for-obsidian/blob/main/LICENSE.txt) 许可。

此插件包含以下模块作为打包代码，根据 MIT 许可证授权：

- [lezer-markdown](https://github.com/lezer-parser/markdown)：版权所有 (C) 2020 Marijn Haverbeke <marijn@haverbeke.berlin> 及其他
- [@codemirror/lang-markdown](https://github.com/codemirror/lang-markdown)：版权所有 (C) 2018-2021 Marijn Haverbeke <marijn@haverbeke.berlin> 及其他

## 字体许可通知

PF2e Statblocks for Obsidian 嵌入了 Roboto 和 DIN Rindschrift Mittel 字体。有关详细信息，请参阅 font-licenses.txt。它还嵌入了 Pathfinder Icons 字体，该字体受 Paizo 的社区使用政策约束。
