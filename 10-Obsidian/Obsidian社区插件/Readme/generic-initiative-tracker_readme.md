---
uid: 20230803204040
title: Obsidian 插件：【Readme】Generic Initiative Tracker
tags: ['obsidian插件', 'readme']
description: 通用TTRPG行动跟踪器
author: Beau Shinkle
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Generic Initiative Tracker

> [!Note] 插件名片
> - 插件名称：Generic Initiative Tracker
> - 插件作者：Beau Shinkle
> - 插件说明：通用TTRPG行动跟踪器
> - 插件分类：['obsidian插件', 'readme']
> - 项目地址：[点我访问](https://github.com/beaushinkle/obsidian-generic-initiative-tracker)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?generic-initiative-tracker)

## 概述

通用TTRPG行动跟踪器

![Generic Initiative Tracker](https://cdn.pkmer.cn/covers/generic-initiative-tracker.png!pkmer)

> [!tip] 原文出处
> 
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/beaurancourt/obsidian-generic-initiative-tracker/main/README.md)
> 

---

## Readme(翻译）

下面是 [[generic-initiative-tracker]] 插件的自述翻译


# Obsidian.md的TTRPG通用先攻追踪器

该插件可以在Obsidian.md中用作先攻追踪器。

启用后，插件将在右侧窗格中添加一个额外的视图，可以在战斗中添加玩家和生物来追踪他们的先攻。

这是一个精简版的分支，旨在将先攻概念与DnD 5e特定内容分离，使其适用于各种系统。

## 主要区别

- 没有经验值或等级设置
- 不再支持自制生物
- 放弃了所有5e特定的导入功能
- 大幅简化了设置界面
- 使遭遇渲染器使用内部链接
- 为具有相同名称的多个生物提供唯一索引
- 支持倡议修饰符的骰子字符串（如2d6）
- 杂项错误修复

在笔记中创建遭遇

可以使用“encounter”代码块直接从笔记中创建和启动遭遇，如下所示：

````
```encounter
creatures:
- 2: 战士1, 13, 11, 550120
- 2: 战士2, 13, 10, 575120
```
````

这将在预览中呈现如下：

![image](https://user-images.githubusercontent.com/1045160/145105220-4f920d03-c84a-4edd-984c-f139988d16e7.png)

（gruvbox主题）

然后，单击遭遇名称旁边的按钮将在初始追踪器中启动遭遇。名称会尝试像使用`[[{name}]]`包围它们一样进行wikilink。

配置了玩家后，效果如下：

![image](https://user-images.githubusercontent.com/1045160/145105397-546a7304-3c7f-4ffd-b74a-964381ebf0b5.png)。

悬停时，您会同时获得内部笔记的预览和初始摘要：

![image](https://user-images.githubusercontent.com/1045160/145105854-86c74cc0-6106-4ed5-89cb-aa83a5f2626d.png)

### 参数

每个遭遇有3个参数，下面有更详细的说明。

````
```encounter
name: string                            # 遭遇的名称。可选。
players: boolean | string | array       # 包括哪些玩家。可选。
creatures: array                        # 包括在遭遇中的生物的数组。可选。
```
````

名称

遭遇的名称，将在预览模式和遭遇启动时显示在行动顺序追踪器中。

#### 玩家

`players` 参数可以在开始遭遇之前用来过滤存储在设置中的玩家。

如果省略 `players` 参数，则会将所有玩家添加到遭遇中。

````
```encounter
players: false                          # 不会将任何玩家添加到遭遇中。
players: none                           # 与 players: false 相同
players: true                           # 将添加所有玩家。与省略该参数相同。
players:                                # 只有与提供的名称匹配的玩家才会被添加到遭遇中。
 - 名字
 - 名字2
```
````

#### 生物

最复杂的参数`creatures`可以用来添加额外的生物到遭遇中。

基本生物将被定义为一个数组，其语法为`[名称，生命值，防御等级，先攻修正]`。

**请注意，在所有情况下，生命值、防御等级和修正都是可选的。**

````
```encounter
creatures:
  - My Monster                          # 将添加一个名为My Monster的怪物，没有生命值、防御等级或修正。
  - Goblin, 7, 15, 2                    # 将添加一个生命值为7，防御等级为15，修正为2的哥布林。
```
````

可以使用`X: [名称，生命值，防御等级，先攻修正]`来添加多个相同的生物，这将添加`X`个生物：

````
```encounter
creatures:
  - 3: Goblin, 7, 15, 2                 # 将添加3个生命值为7，防御等级为15，修正为2的哥布林。
```
````

您还可以通过添加额外的行来添加多个生物；这也允许您为不同的生物更改生命值、防御等级和修正值：

````
```encounter
creatures:
  - 2: Goblin, 7, 15, 2                 # 将添加2个生命值为7，防御等级为15，修正为2的哥布林。
  - Goblin, 6, 15, 2                    # 将添加1个生命值为6，防御等级为15，修正为2的哥布林。
  - Goblin, 9, 15, 2                    # 将添加1个生命值为9，防御等级为15，修正为2的哥布林。
  - Hobgoblin, 20, 19, 2d+3             # 将添加1个生命值为20，防御等级为19，修正为2d+3（每次重新投掷）的大哥布林
```
````

### 参数

使用倡议追踪器

可以通过点击“添加生物”按钮将怪物添加到战斗中，这将打开一个表单，可以设置生物的名称、生命值、防御等级和倡议。

一旦所有在特定战斗中的生物都被添加，可以通过点击倡议数字并输入新的倡议来修改倡议。非玩家生物的名称也可以以同样的方式修改。

### 动作

在每个生物的右侧的“动作”菜单中，可以禁用或移除生物，或添加状态（如“中毒”）。

### 控制

点击“播放”按钮可以开始战斗。这将显示当前活动的生物。点击“下一个”或“上一个”将移动到下一个启用的战斗者。

点击“重新掷骰”按钮可以重新掷骰所有生物的先攻。

点击“重置HP和状态”可以重置生物的生命值和状态效果。

点击“新遭遇”可以开始一个新的遭遇（只有玩家角色）。

### 命令

该插件在Obsidian中注册了几个命令，可以分配给热键或在命令面板（<kbd>Ctrl</kbd> / <kbd>Cmd</kbd> + <kbd>P</kbd>）中使用。

#### 开放式倡议跟踪器

如果由于任何原因关闭了倡议跟踪器视图，请使用此命令将其添加回右侧窗格。

#### 切换遭遇

此命令可用于启动或停止遭遇。

#### 下一个战斗者

如果遭遇战正在进行中，可以使用此命令将下一个启用的战斗者设为活动状态（类似于点击“下一个”按钮）。

#### 上一个参战者

如果遭遇仍然活跃，可以使用此命令将上一个启用的参战者设为活跃状态（类似于点击“上一个”按钮）。

# 设置

设置选项卡提供了添加和管理玩家的选项，以及更改用于计算先攻的公式的能力。

玩家

可以在设置中添加玩家。以这种方式创建的玩家将自动添加到遭遇中。

## 初始值计算公式

> 只有在安装了 [Dice Roller](https://github.com/valentine195/obsidian-dice-roller) 插件时才能修改此设置。

此设置可用于修改插件计算生物初始值的方式。使用 `%mod%` 作为生物初始值修正的占位符。

默认值为 `1d20 + %mod%`。

此设置支持 Dice Roller 插件支持的任何骰子公式。

# 自定义条件

该插件将根据标记为`#condition`的笔记动态填充条件。我仍在努力改进描述文本的呈现效果，但目前它是可用的。

![image](https://user-images.githubusercontent.com/1045160/149223266-25afdf23-85b6-4616-9399-3986ab63bf7f.png)
![image](https://user-images.githubusercontent.com/1045160/149223344-107a3d00-647d-4ce3-a965-7f0bc8fdc293.png)

# 路线图

这是插件计划中的功能列表。其中一些功能可能会被开发，也可能不会。

- Wikilink 条件
- 添加一个设置来指向条件标签
- 改进条件悬停的渲染效果

# 安装

从Obsidian v0.9.8开始，您可以通过以下步骤在Obsidian中激活此插件：

- 打开设置 > 第三方插件
- 确保安全模式处于关闭状态
- 点击浏览社区插件
- 搜索此插件
- 点击安装
- 安装完成后，关闭社区插件窗口并激活新安装的插件

## 来自GitHub

- 从GitHub存储库的Releases部分下载最新版本
- 从zip文件中提取插件文件夹到您的vault的插件文件夹：`<vault>/.obsidian/plugins/`
  注意：在某些机器上，`.obsidian`文件夹可能是隐藏的。在MacOS上，您可以按`Command+Shift+Dot`来在Finder中显示该文件夹。
- 重新加载Obsidian
- 如果提示安全模式，您可以禁用安全模式并启用插件。
  否则，请前往设置，第三方插件，确保安全模式关闭并从那里启用插件。

您可以按照相同的步骤来更新插件。

# 警告

该插件没有稳定性保证，可能会导致数据丢失的错误。
请确保您有自动备份。

# TTRPG插件

查看valentine195的其他插件！

- [Obsidian Leaflet](https://github.com/valentine195/obsidian-leaflet-plugin) - 在Obsidian.md笔记中添加交互式地图
- [Dice Roller](https://github.com/valentine195/obsidian-dice-roller) - Obsidian.md的内联骰子滚动
- [5e Statblocks](https://github.com/valentine195/obsidian-5e-statblocks) - 以5e风格格式化Statblocks



