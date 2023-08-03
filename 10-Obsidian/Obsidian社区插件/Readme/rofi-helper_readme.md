---
uid: 20230803231105
title: Obsidian 插件：Rofi Helper
tags: ['obsidian插件', 'readme']
description: 为了在Rofi中在打开的黑曜石标签之间切换，将叶子ID参数添加到URI协议中。包含了一个示例的Rofi脚本。
author: AI
type: readme
draft: false
editable: false
modified: 20230803232427
---

# Obsidian 插件：Rofi Helper

> [!Note] 插件名片
> - 插件名称：Rofi Helper
> - 插件作者：digitalsignalperson
> - 插件说明：为了在 Rofi 中在打开的黑曜石标签之间切换，将叶子 ID 参数添加到 URI 协议中。包含了一个示例的 Rofi 脚本。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/digitalsignalperson/obsidian-rofi-helper)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?rofi-helper)

## 概述

为了在 Rofi 中在打开的黑曜石标签之间切换，将叶子 ID 参数添加到 URI 协议中。包含了一个示例的 Rofi 脚本。

![Rofi Helper](https://cdn.pkmer.cn/covers/rofi-helper.jpeg!pkmer)

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/digitalsignalperson/obsidian-rofi-helper/master/README.md)
>

---

## Readme(翻译）

下面是 [[rofi-helper]] 插件的自述翻译

# Rofi 助手

该插件为 URI 协议添加了一个叶子 id 参数，用于在 Rofi 中在打开的 Obsidian 标签之间切换。示例 Rofi 脚本已包含在内。

该插件为 id 和 filename 添加了 URI 参数。可以像下面这样使用它们：

```
obsidian://switch?vault=myvault&id=43ee39f0a20b097a

obsidian://switch?vault=myvault&filename=Today.md
```

示例脚本 `obsidian-rofi.py` 已包含在内。可以与 [Rofi](https://github.com/davatorium/rofi) 一起使用，如以下示例所示：

```

# 只需切换Obsidian标签
rofi -modi "obsidian:./obsidian-rofi.py" -show obsidian

# 在同一个选项列表中显示所有桌面窗口以及Obsidian标签
rofi -modes combi -show combi -show-icons -combi-modes "window,obsidian:./obsidian-rofi.py"

# 在不同页面中显示桌面窗口和标签（使用Ctrl+Tab切换）
rofi -modes "window,obsidian" -show window -show-icons -modi "window,obsidian:./obsidian-rofi.py"
```

这是在桌面环境中使用全局快捷键切换标签的样子：

![屏幕截图](example.jpg)

这仅在 Linux 上进行了测试。

# 工作原理

`workspace.json` 文件包含了所有打开的窗口、标签和面板的嵌套结构。有时候你可能会在多个位置打开同一个文件。幸运的是，每个“叶子”关联的“id”是唯一的。

下面是一个来自 workspace.json 的片段：

```json
{
  "main": {
    "id": "72987848c4af5ae2",
    "type": "split",
    "children": [
      {
        "id": "58d9b585d8e1dcfc",
        "type": "tabs",
        "children": [
          {
            "id": "43ee39f0a20b097a",
            "type": "leaf",
            "state": {
              "type": "markdown",
              "state": {
                "file": "Today.md",
                "mode": "source",
                "source": false
              }
            }
          },
```

我们在第一个窗口的第一个标签中有一个名为 "Today.md" 的文件，它的唯一叶子 id 是 "43ee39f0a20b097a"。

对于名为 "myvault" 的 vault，你可以使用以下 URI 命令切换到这个标签：

```
obsidian://switch?vault=myvault&id=43ee39f0a20b097a
```

`obsidian-rofi.py` Python 脚本将生成 Rofi 使用的选项，包括 ROFI_INFO 数据，如 `\0info\x1f43ee39f0a20b097a`。

提供给 Rofi 的示例数据：

```
Today.md                          窗口 #1   标签 #1 \0info\x1f43ee39f0a20b097a
BalanceQuoteStumble.md            窗口 #1   标签 #2 \0info\x1fabc2e775384ee4bd
ServiceDoorShield.md              窗口 #1   标签 #3 \0info\x1fbbd04ae750429c70
MadFemaleRequire.md               窗口 #1   标签 #4 \0info\x1f869f278435d06213
NuclearBachelorDolphin.md         窗口 #1   标签 #5 \0info\x1ff7382c4f782e3a96
PalmInquiryIll.md                 窗口 #1   标签 #1   (面板 1, 0)\0info\x1f4c5b77a0a0ef503a
SwearPleaseUncle.md               窗口 #1   标签 #1   (面板 1, 1)\0info\x1f0680d3ef4924151a
ChangeWishSilly.md                窗口 #2   标签 #1 \0info\x1f3bf95912f8aa5762
SuperVerifyPage.md                窗口 #2   标签 #2 \0info\x1f40951226d95a2b09
AugustNeckActress.md              窗口 #2   标签 #3 \0info\x1fa95182e08ffd83c9
ArenaRobustMinute.md              窗口 #2   标签 #4 \0info\x1ffb29a9612dc4d373
SorryVisaCrazy.md                 窗口 #3   标签 #1 \0info\x1f138011d0535c2b70
JewelBulkScan.md                  窗口 #3   标签 #2 \0info\x1fa7785009f7d48a86
DemiseMangoAvocado.md             窗口 #3   标签 #3 \0info\x1fc530b65373eef3cd
RazorWomanSausage.md              窗口 #3   标签 #4 \0info\x1f8cdb3423a23a6ab3
CrouchPuppySoap.md                窗口 #3   标签 #5 \0info\x1f6df01c33637a6fd1
FindMandateBoil.md                窗口 #3   标签 #6 \0info\x1f3cd8d7818da52072
TeachHeavyGuide.md                窗口 #3   标签 #7 \0info\x1fa6fbb165051c6499
WidthIndustryPear.md              窗口 #4   标签 #1   (面板 0, 0)\0info\x1f1cacfcf428d48a55
InnocentRadarSpirit.md            窗口 #4   标签 #2   (面板 0, 0)\0info\x1f1310c5bbe9bb7fa7
HeightSilverLonely.md             窗口 #4   标签 #1   (面板 0, 1, 0)\0info\x1fb9d4aae2e3c381be
StoryGrocerySearch.md             窗口 #4   标签 #1   (面板 0, 1, 1)\0info\x1f509c79695d5f1797
SettleWrestleLesson.md            窗口 #4   标签 #2   (面板 0, 1, 1)\0info\x1fdf6b7d173f33c121
FreshAlcoholPony.md               窗口 #5   标签 #1 \0info\x1f8c36518811afd173
FlavorBananaStuff.md              窗口 #5   标签 #2 \0info\x1feeed956c4a5f91ee
AthleteBenefitLava.md             窗口 #5   标签 #3 \0info\x1f881afaf6dd5cfb3a
VehicleNaiveBrick.md              窗口 #5   标签 #4 \0info\x1f4024b398ca65ba6e
CarbonBadgeForum.md               窗口 #5   标签 #5 \0info\x1f77bc0f588a5bc545
SpawnStrategyUniform.md           窗口 #5   标签 #6 \0info\x1f184d72c238cb1805
CattleEnactShield.md              窗口 #5   标签 #7 \0info\x1f1a2393cfed658c99
TunaMaximumTortoise.md            窗口 #5   标签 #8 \0info\x1f334bbc2477d62b14
ShopHalfLift.md                   窗口 #5   标签 #9 \0info\x1f39f068daabd2e8a5
GrapeChickenCheap.md              窗口 #5   标签 #10\0info\x1f0d10e38373707ee8
MenuRunPlastic.md                 窗口 #5   标签 #11\0info\x1fe1f8500ce1284f0d
WarfareDilemmaPeace.md            窗口 #5   标签 #12\0info\x1f0566d123dd331424
MerryTossDance.md                 窗口 #5   标签 #13\0info\x1f93a8b2da92c11ce8
SimpleSymptomFemale.md            窗口 #5   标签 #14\0info\x1f39b9835ebf05122b
ExplainFosterGain.md              窗口 #6   标签 #1 \0info\x1fdb67248d18558749
DamageIsolateGuide.md             窗口 #6   标签 #2 \0info\x1f6783ec422ebe1fb5
AffordRecycleInflict.md           窗口 #6   标签 #3 \0info\x1f89b4e6c22821b78d
LatinSubjectWhere.md              窗口 #6   标签 #4 \0info\x1f629da7c82cf14852
DadTimeMonth.md                   窗口 #7   标签 #1 \0info\x1fc844db65dc30aa0a
SoldierDocumentRaw.md             窗口 #8   标签 #1 \0info\x1f79df1c897507be49
AddressTrickPriority.md           窗口 #8   标签 #1 \0info\x1fa2e8678d3caef54e
BrokenGunAlbum.md                 窗口 #8   标签 #2 \0info\x1f711a19246c26c83a
```

在选择完成后，Rofi 将退出，并调用 xdg-open 命令执行 URI 命令。

# 使脚本与 rofi 配合工作

在包含的示例脚本 `obsidian-rofi.py` 中，使用您的个人设置来设置这两个变量：

```
vault_name = 'my-vault'
vault_path = '/home/my-name/my-files/my-vault'
```

如果您在本地运行此脚本 `python obsidian-rofi.py`，它应该打印出一个类似前一节中所示的列表，如下所示：

```
Today.md                          窗口＃1   标签＃1 \0info\x1f43ee39f0a20b097a
BalanceQuoteStumble.md            窗口＃1   标签＃2 \0info\x1fabc2e775384ee4bd
ServiceDoorShield.md              窗口＃1   标签＃3 \0info\x1fbbd04ae750429c70
MadFemaleRequire.md               窗口＃1   标签＃4 \0info\x1f869f278435d06213
NuclearBachelorDolphin.md         窗口＃1   标签＃5 \0info\x1ff7382c4f782e3a96
...
```

接下来，您应该运行 `chmod +x obsidian-rofi.py`，因为它将被 rofi 调用为脚本。

通过运行 `./obsidian-rofi.py` 确认您从程序中获得相同的输出。您可能需要调整 `#!/bin/python` 的 shebang。

最后，前面的部分提供了一些不同的 rofi 命令示例。确保 python 脚本位于您的路径中的一个文件夹中（检查 `echo $PATH`），以使它们正常工作。
