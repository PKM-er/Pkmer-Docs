---
uid: 2024042221321622
title: Obsidian 插件：【Readme】Fight Note
tags: ['obsidian插件', 'readme']
description: 将铁拳符号转换为易于阅读的格式（部分适用于其他格斗游戏：《罪恶装备》、《街头霸王》等）。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】Fight Note

> [!Note] 插件名片
> - 插件名称：Fight Note
> - 插件作者：Dmitry Loac
> - 插件说明：将铁拳符号转换为易于阅读的格式（部分适用于其他格斗游戏：《罪恶装备》、《街头霸王》等）。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/Loac/obsidian-fight-note)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?fight-note)

## 概述

将铁拳符号转换为易于阅读的格式（部分适用于其他格斗游戏：《罪恶装备》、《街头霸王》等）。

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/Loac/obsidian-fight-note/main/README.md)

---

## Readme(翻译）

下面是 [[fight-note]] 插件的自述翻译

# 战斗笔记

这是一个为 [Obsidian.md](https://obsidian.md/) 设计的插件，可以将 [Tekken术语](https://tekken.fandom.com/wiki/Move_Terminology) 显示为易于阅读的形式。

## 安装

`设置 / 社区插件 / 社区插件 / 浏览`，搜索 `Fight note`。

## 用法

在编辑器中，输入一个名为 `fight` 的代码块作为语言。

在接下来的行中指定您的注释。

### 例子

完整的记号。

~~~markdown
```fight
input: b 3+4 > f 2 > df 1 1 > b 2 3 > uf 1
name: Alisa combo
damage: 74
hits: 8
```
~~~

![Full notation](https://i.imgur.com/PFgbQ82.png)

除了记号之外，您不必指定任何内容。

~~~markdown
```fight
FC df 3 > DASH > f 2 3 2
```
~~~

![Short notation](https://i.imgur.com/frwILDO.png)

任何由空格分隔的字符组合都被视为记号。如果您想添加简短的注释，请用引号括起来。

	```fight
	df 2 > 2+3 > 2+3 "默认热力连击"
	```

![Custom notation](https://i.imgur.com/fC6LPbb.png)

该插件有几个选项，您可以在其中更改记号的大小和颜色。

具有单色按钮颜色的大记号：

![Big notation](https://i.imgur.com/HpDcN2l.png)

具有 PlayStation 按钮颜色的小记号：

![Small notation](https://i.imgur.com/8LMe1TB.png)

## 缩写

符号根据类型不同而外观不同。

### 常见立场

![Common stances](https://i.imgur.com/pGadYaa.png)

### 特殊招式

![特殊招式](https://i.imgur.com/TkT7qi4.png)

### 具体

![Specific](https://i.imgur.com/Ev9UkN3.png)

### 与舞台相关

![与舞台相关](https://i.imgur.com/WoYFQhB.png)

### 自定义

您可以在设置中添加或覆盖现有的标记。使用多种颜色和效果：

- 颜色：`red`、`blue`、`green`、`orange`、`purple`。
- 效果：`rotate-right`、`rotate-left`、`skew-right`、`skew-left`、`skew-up`、`skew-down`。

```
EFB:紫色,右斜:Electric Fall Back (Doctor Bosconovitch)
HMS:红色,左旋:Hit Man Stance (Lee Chaolan)
PHX:绿色,右旋:Phoenix Illusion (Lei Wulong)
CAT:橙色,右旋:Catastrophe (Anna)
```

## 输入

### 动作

- `1`: 左拳。
- `2`: 右拳。
- `3`: 左脚。
- `4`: 右脚。
- `1+2`: 左右拳。和其他类似的组合。

### 移动

- `u`: 向上。
- `f`: 向前。
- `d`: 向下。
- `b`: 向后。
- `uf`, `u/f`: 向上前方。
- `df`, `d/f`: 向下前方。
- `db`, `d/b`: 向下后方。
- `ub`, `u/b`: 向上后方。
- `n`: 中立。
- `U`: 保持向上。
- `F`: 保持向前。
- `D`: 保持向下。
- `B`: 保持向后。
- `UF`, `U/F`: 保持向上前方。
- `DF`, `D/F`: 保持向下前方。
- `UB`, `U/B`: 保持向上后方。
- `DB`, `D/B`: 保持向下后方。

### 其他

- `>`, `,`: 下一步移动。
- `[`, `]`: 括号。

### 特殊动作

- `DASH`: 冲刺。
- `WR`: 边跑。
- `SS`: 侧步。
- `SSL`: 向左侧步。
- `SSR`: 向右侧步。

### 常见姿势

- `WS`: 站立时。
- `iWS`: 立即站立。
- `BT`: 背对。
- `FC`: 全蹲。
- `CC`: 蹲下取消。
- `LP`: 低招架。
- `CH`: 反击。

### 与舞台相关

- `W!`: 墙壁反弹。
- `WB!`: 破墙。
- `F!`: 地板破裂。
- `BB!`: 阳台破裂。

### 特定

- `ALB`: Albatross spin (Steve Fox)
- `AOP`: Art of Phoenix (Ling Xiaoyu)
- `BKP`: Backup (Alisa)
- `BOOT`: Boot (Alisa Bosconovitch)
- `CDS`: Crouching Demon Stance (Jin Kazama)
- `DBT`: Dual Boot (Alisa)
- `DCK`: Ducking (Steve Fox)
- `DEN`: Dynamic Entry (Lars Alexandersson)
- `DES`: Destructive Form (Alisa Bosconovitch)
- `DGF`: Manji Dragonfly (Yoshimitsu)
- `DPD`: Deep Dive (Paul)
- `DSS`: Dragon Sign Stance (Marshall Law)
- `EWGF`: Electric Wind God Fist (Kazuya, Reina, Devil Jin and Jin)
- `EXD`: Ducking In (Steve Fox)
- `FLE`: Flea (Yoshimitsu)
- `FLK`: Flicker Stance (Steve Fox)
- `FLY`: Fly (Devil Jin)
- `GEN`: Genjitsu (Jun)
- `GMH`: Gamma Howl (Jack-8)
- `HAZ`: Haze (Raven)
- `HMS`: Hit Man Stance (Lee Chaolan)
- `HPF`: Whiplash Combo (Asuka Kazama / Jun Kazama)
- `HYP`: Hypnotist (Xiaoyu)
- `IND`: Indian Stance (Yoshimitsu)
- `INS`: Indian Stance (Yoshimitsu)
- `IZU`: Izumo (Jun)
- `JGR`: Jaguar Sprint/Jaguar Run (King)
- `JGS`: Jaguar Step (King)
- `KIN`: Kincho (Yoshimitsu)
- `KNK`: Jin Ji Du Li (Leo Kliesen)
- `KNP`: Kenpo step (Feng Wei)
- `LCT`: Leg Cutter (Asuka Kazama / Jun Kazama)
- `LFF`: Left Foot Forward (Hwoarang)
- `LFS`: Left Flamingo Stance (Hwoarang)
- `LIB`: Libertador (Azucena)
- `LNH`: Lionheart (Steve Fox)
- `LWV`: Ducking Left (Steve Fox)
- `MCR`: Mourning Crow (Devil Jin)
- `MED`: Meditation (Yoshimitsu)
- `MIA`: Miare (Jun)
- `MNT`: Mantis Stance (Zafina)
- `NSS`: No Sword Stance (Yoshimitsu)
- `PAB`: Peekaboo (Steve Fox)
- `PDP`: Bad Stomach (Yoshimitsu)
- `PKB`: Peekaboo (Steve Fox)
- `RDS`: Rain Dance (Ling Xiaoyu)
- `RFF`: Right Foot Forward (Hwoarang)
- `RFS`: Right Flamingo Stance (Hwoarang)
- `RWV`: Ducking Right (Steve Fox)
- `SCR`: Scarecrow Stance (Zafina)
- `SDW`: Shadow stance (Raven)
- `SEN`: Sentai (Reina)
- `SIT`: Sit Down (Jack-8)
- `SLS`: Slither Step (Bryan)
- `SNE`: Snake Eyes (Bryan)
- `SNK`: Sneak (Dragunov)
- `SSH`: Senshin (Reina)
- `STB`: Starburst (Claudio Serafino)
- `STC`: Shifting Clouds (Feng Wei)
- `SWA`: Sway (Bryan)
- `SWY`: Sway Back (Steve Fox)
- `TFS`: Fake Step (Marshall Law)
- `TRT`: Tarantula Stance (Zafina)
- `UNS`: Unsoku (Reina)
- `WDS`: Wind Step (Reina)
- `WGS`: Wind God Step (Kazuya, Reina, Devil Jin and Jin)
- `WRA`: Heaven's Wrath (Reina)
- `ZEN`: Zenshin (Jin)

## 关于铁拳的链接

- [Obsidian Tekken Notation](https://github.com/OpTi9/obsidian-tekken-notation) – 想法和灵感。
- [Guide](https://wavu.wiki)
- [Notation](https://tekken.fandom.com/wiki/Move_Terminology)
- [Combos](https://combotier.com/tekken8)
- [Cheatsheets](https://docs.google.com/spreadsheets/u/0/d/e/2PACX-1vTsgbCJNSTKajMNlJvQleJOl0eTiEcV-PbeU0obDg1lsSqmz0lTtcD2k6NzfTPt7Db9Ua2dz1o_34Sv/pubhtml?pli=1#)
- [Tier list](https://dashfight.com/tekken8/tekken-8-tier-list-41)



