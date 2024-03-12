---
uid: 20231220112631
title: Obsidian 插件：【Readme】Obsidian Trello
tags: ['第三方工具集成', '界面相关', '任务管理', 'obsidian插件', 'readme']
description: 将 Trello 卡片连接到 Obsidian 笔记。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】Obsidian Trello

> [!Note] 插件名片
> - 插件名称：Obsidian Trello
> - 插件作者：OfficerHalf
> - 插件说明：将 Trello 卡片连接到 Obsidian 笔记。
> - 插件分类：[' 第三方工具集成 ', ' 界面相关 ', ' 任务管理 ', 'obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/OfficerHalf/obsidian-trello)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsidian-trello)

## 概述

将 Trello 卡片连接到 Obsidian 笔记。

![Obsidian Trello](https://cdn.pkmer.cn/covers/obsidian-trello.PNG!pkmer)

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/OfficerHalf/obsidian-trello/main/README.md)

---

## Readme(翻译）

下面是 [[obsidian-trello]] 插件的自述翻译

开发状态：维护模式

该插件目前进入维护模式。我不再使用 Trello。如果有兴趣接管该插件，请在 Discord 上给我留言。

1. Pull Request 将会被审查。
2. Bug 将会被审查并尽可能修复。
3. 不会处理功能请求。

# Obsidian Trello

![ObsidianTrello](https://cdn.pkmer.cn/covers/obsidian-trello_2_0.png!pkmer)

## 概述

将您的 Trello 卡片与 Obsidian 笔记连接起来，以便在 Obsidian 中查看和更新标签、评论和清单。未来还有许多功能可用，并且您可以在项目的 [Trello板上跟踪进展](https://trello.com/b/1fVRPLKO/obsidian-trello)。

## 使用

安装并设置好 Trello API 令牌（请参见下面的 [先决条件](#先决条件)），您可以将卡片连接到一个便签。

#### 打开 Trello 面板

如果 Trello 面板没有自动打开，请使用 [显示Trello视图命令](#commands)，它将被创建。

#### 连接卡片

要将卡片连接到笔记，请使用 [连接Trello卡片命令](#commands) 或单击 Trello 面板中的“连接 Trello 卡片”按钮。如果已经连接了一张卡片，则有一个按钮可以链接另一张卡片。

![LinkAnother](https://cdn.pkmer.cn/covers/obsidian-trello_2_1.png!pkmer)

**创建新卡片**

在连接卡片时，在选择要使用的 Trello 板之后，选择“创建新卡片...”。

#### 刷新卡片

该插件不会轮询或监听 Trello 的更新，因此在 Trello 中进行的更改可能不会立即在 Obsidian 中反映出来。如果您认为某个卡片已过时，请点击刷新按钮。数据的缓存时间根据数据类型的不同，从一分钟到十分钟不等。如果您希望强制刷新整个缓存，可以使用“重新加载应用程序而不保存”命令。

请注意，Trello 的 REST API 有严格的速率限制。如果遇到任何速率限制问题，请与我联系，以便我可以解决。

#### 断开连接的卡片

如果想要移除笔记和 Trello 卡片之间的连接，点击“取消链接卡片”按钮或使用 [断开Trello卡片命令](#commands)。移除 `trello_plugin_note_id` 和 `trello_board_card_id` YAML 前置数据键也会断开卡片的链接，但是推荐使用按钮或命令，因为它们还会清理缓存数据。

将卡片移动到新的列表中，可以通过点击列表名称来实现。

#### 添加评论

可以在 Obsidian 中添加新评论。它将作为最新的评论出现在列表的顶部。

#### 检查清单

在检查清单中勾选或取消勾选项目会在 Trello 卡片上进行相应的更改。

#### 自定义用户界面

如果您的工作流程不包括评论或标签，您可以在 Obsidian 中禁用它们。每个用户界面元素都可以切换开或关。这可以是全局的，适用于所有连接的卡片，使用插件设置中的“自定义用户界面”选项。或者，可以使用齿轮图标来管理单个笔记的用户界面。

## 设置

### 先决条件

1. 一个 Trello 账户
2. 一个 Trello API 令牌（见下文）。

在连接 Trello 卡之前，您需要创建一个 API 令牌并在插件设置中设置它。您可以在此处创建一个令牌 [tokenurl]；在关闭选项卡之前，请确保复制它。

令牌可以随时在您的 Trello 账户设置中撤销。

### 设置

**Trello Token** - 请参考上面的先决条件。这是必需的。

**自定义界面** - 调整卡片显示的部分。此设置可以全局更新，适用于所有卡片，并可以在单个笔记上进行覆盖。

**选择面板** - 过滤可选择卡片的面板。如果没有选择任何面板，将可用所有面板。

**打开到侧边** - 默认情况下，将 Trello 视图打开到左侧还是右侧。

**新卡片位置** - 默认情况下，新创建的卡片应该添加到列表的顶部还是底部。在添加卡片时可以进行覆盖。

**移动卡片位置** - 将卡片从一个列表移动到另一个列表时，应该将其移动到所选列表的顶部还是底部。

**详细日志记录** - 如果您在使用插件时遇到问题，请启用此选项。日志将在控制台中启用。这些日志可以帮助我诊断问题。

## 命令

**显示 Trello 视图** - 打开 Trello 窗格，如果尚未打开。

**连接 Trello 卡片** - 将一个笔记连接到（新的）Trello 卡片。可选择创建一个新的 Trello 卡片。

**断开 Trello 卡片** - 从一个笔记中移除 Trello 连接。

## 主题化

在尽可能的情况下，插件使用内置的主题变量，因此您的颜色变量覆盖将适用于此处。唯一的例外是插件中包含的 Trello 颜色；这些颜色与 Trello 的用户界面相匹配。然而，这些可以像 Obsidian 的颜色变量一样被覆盖。请参阅 [variables.scss](src/variables.scss) 以获取完整的颜色列表。每个颜色都有一个基本色调、较浅的色调和较深的色调。

插件是否与自定义主题不兼容？请告诉我，我会考虑更新插件或为主题做出贡献以修复它。

## 贡献

欢迎提交拉取请求。请记住，此插件在响应式状态管理方面大量使用了 [rxjs](https://www.learnrxjs.io/)。

## 支持

如果有问题，请在 GitHub 上提出问题。如果您不确定，可以在 Obsidian 的 Discord 上联系我，@OfficerHalf。

[tokenurl]: <<https://trello.com/1/authorize?expiration=never&scope=read,write&response_type=token&name=Obsidian>%20Trello%20Token&key=9537467993aefd6dca9ee7788179c298>
