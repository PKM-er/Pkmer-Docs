---
uid: 20230817224055
title: Obsidian 插件：RPG Manager
tags: ['obsidian插件', 'readme']
description: 桌面角色扮演游戏活动管理器。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：RPG Manager

> [!Note] 插件名片
> - 插件名称：RPG Manager
> - 插件作者：Carlo Nicora
> - 插件说明：桌面角色扮演游戏活动管理器。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/carlonicora/obsidian-rpg-manager)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?rpg-manager)

## 概述

桌面角色扮演游戏活动管理器。

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/carlonicora/obsidian-rpg-manager/master/README.md)

---

## Readme(翻译）

下面是 [[rpg-manager]] 插件的自述翻译

# Obsidian 角色扮演游戏管理器

角色扮演游戏管理器（RPG Manager 或 RPGM）是一个 [Obsidian](https://obsidian.md) 插件，帮助您概述和管理您的桌面角色扮演游戏（TTRPG）战役。

---

警告：在即将发布的 RPG-Manager 3.4 版本中，我们将不再支持 2.x 版本和更早版本的数据库更新。您必须使用 3.0 版本或更高版本才能成功更新到 3.4 版本。

例如：如果您使用的是 2.3 版本，并决定更新到 3.4 版本，您的数据将无法转移到更新后的数据库中。RPG-Manager 将可以使用，但您需要重新输入所有 RPG-Manager 数据。

**因此，请在更新到 3.4 版本之前先更新到 v3.0 版本**！

---

> 您来到图书馆寻找知识。您想知道某件事情是如何工作的。您需要的卷轴，您找不到它们。一个安静的“咳嗽”声，站在那里的是一位面带睿智表情的图书管理员。他们挥动手腕，展开的手掌中正是您一直在寻找的卷轴。
>
> 当您伸手去拿其中一本书时，图书管理员发出了一声嘘声。“啊，你们这些人总是这么可预测。他们总是首先选择那本书。祝你好运。”
>
> **[读者之卷：传统文字和图像形式中使用RPG Manager的参考指南](https://github.com/carlonicora/obsidian-rpg-manager/wiki/Beginner's-Guide)**
>
> **[守望者之卷：音频和视频中使用RPG Manager的跟随指南](https://www.youtube.com/playlist?list=PLAO6liEcd6-0iJXIKznSfkBenDxgmFR2h)**

## 简介

RPG Manager 帮助您创建故事或战役的情节，组织和引用它们在使用时的元素。该插件围绕三种主要类型的功能展开：

- **情节编排**：当您在故事或战役中开发事件的大致顺序时。
- **运行**：当您在故事中进行游戏时，例如在实际进行游戏会话时。
- **元素**：可能存在于您的故事中的个别部分，包括非玩家角色（NPC）、地点、物品和政府。

## 目标

RPG Manager 的**主要目标**是通过结合**And, But, Therefore**（ABT）和**Story Circle**（SC）框架来降低编写故事所需的时间，通过缩小焦点提高写作质量，并提高为玩家运行的场景的质量。它通过在插件中融入这些框架来平衡**戏剧行动**和**物理行动**来实现这一目标。

这些附加功能是可选的，可以禁用。

RPG Manager 的**次要目标**是在 Obsidian 中提供一个故事或战役管理系统框架，其核心是系统无关的。它旨在适用于所有类型的作者，包括 DnD，Genesys，Stars without Numbers，Vampire: The Masquerade，Warhammer，Warcraft 等。如果 RPG Manager 无法支持某个系统，我们**[希望得知](https://github.com/carlonicora/obsidian-rpg-manager/issues)**，以便我们进行修正。

## 特点

| 故事构建         | 生活质量                    | 可扩展性                                                                                    |
| :---------------------- | :---------------------------------- | :------------------------------------------------------------------------------------------------ |
| 自动连接模块 | 图片库                      | **[奇幻日历](https://github.com/fantasycalendar/obsidian-fantasy-calendar)** 集成 |
| ABT 和 SC 大纲    | 关系链接               | API（即将推出）                                                                                                 |
| 场景分析器         | 活动内自动链接（v3.3） |                                                                               |
| 情节向导（v3.3）     | 拖放场景（即将推出） |                                                                                                  |

从 Obsidian 安装 RPG Manager

**`RPG Manager`**可以在 Obsidian 的社区插件目录中按名称找到，该目录位于 Obsidian 的社区插件设置中。您可能会收到提示要**`打开社区插件`**。打开社区插件是使用任何Obsidian第三方插件所必需的。

一旦您在目录中点击 RPG Manager，您将有选择通过**`安装`**按钮安装插件的选项。安装完成后，安装按钮将变为**`启用`**。点击**启用**将激活插件。现在您可以开始绘制了。

**注意**：第一次安装时，以及偶尔更新时，插件可能会提示您更新数据结构。这是插件对其内部数据库进行索引和优化。建议在允许其进行索引之前，确保您的保险库有最新的备份。

从 Obsidian 更新 RPG Manager

要检查插件更新，请返回到 Obsidian 社区插件设置，然后点击**`检查更新`**。如果有任何更新，**检查更新**按钮将变为**`更新`**。点击**更新**将下载并应用更新。

建议在安装更新后重新加载或重新启动 Obsidian。

## 从 Github 安装和更新 RPG Manager

1. 点击 [**最新版本链接**](https://github.com/carlonicora/obsidian-rpg-manager/releases/latest) 或在右侧的侧边栏中导航到**Releases**。
2. 以 zip 格式下载源代码。如果您的解压工具支持，也可以选择使用 tar.gz 格式。
3. 从 zip 或 tar.gz 中提取 rpg-manager 文件夹到您的 vault 的插件文件夹中，该文件夹通常位于**`<vault>/.obsidian/plugins/`**。
 a. 在某些设备上，默认情况下**`.obsidian`**文件夹可能是隐藏的。
    b. **Windows 用户**：按照 [**Microsoft的支持文档**](https://support.microsoft.com/en-us/windows/view-hidden-files-and-folders-in-windows-97fbc472-c603-9d90-91d0-1166d1d9f4b5) 来显示隐藏文件。
 c. **MacOSX 用户**：显示隐藏文件夹的默认快捷键是**`Command+Shift+Dot`**。您可能需要每次访问**`.obsidian`**时按下此快捷键。
 d. **Nix 用户**：请参考您的发行版特定的说明来访问隐藏的文件夹和文件。
4. 重新加载或重启 Obsidian。
5. 在 Obsidian 的设置中导航到 Community Plugins 部分。您可能会提示**`Turn on Community Plugins`**。打开社区插件是使用任何 Obsidian 第三方插件的必要条件。
6. 如果您已经打开了社区插件，请通过点击缩进的按钮来启用 RPG Manager 插件。按钮会向右滑动以表示已启用。插件可能会执行其上面报告的索引。
7. 您现在可以开始绘制了。

## 贡献者

我最衷心地感谢每一个帮助 RPG Manager 成为更好插件的人。

<a href="https://github.com/sigrunixia">
  <img src="https://github.com/sigrunixia.png?size=50">
</a>
<a href="https://github.com/SlRvb">
  <img src="https://github.com/SlRvb.png?size=50">
</a>
<a href="https://github.com/x1101">
  <img src="https://github.com/x1101.png?size=50">
</a>

[我们一直在寻找帮助。加入我们！](https://github.com/carlonicora/obsidian-rpg-manager/issues/151)
