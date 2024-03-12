---
uid: 20231220112631
title: Obsidian 插件：【Readme】iDoRecall
tags: ['obsidian插件', 'readme']
description: iDoRecall插件允许您从Obsidian笔记中创建回忆。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】iDoRecall

> [!Note] 插件名片
> - 插件名称：iDoRecall
> - 插件作者：dbhandel
> - 插件说明：iDoRecall 插件允许您从 Obsidian 笔记中创建回忆。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/iDoRecall/idorecall)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?idorecall)

## 概述

iDoRecall 插件允许您从 Obsidian 笔记中创建回忆。

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/iDoRecall/idorecall/master/README.md)

---

## Readme(翻译）

下面是 [[idorecall]] 插件的自述翻译

什么是它？

iDoRecall 是一款间隔重复的闪卡应用程序，可以让您创建我们称之为“回忆”的闪卡。

> 回忆与您学习某个知识点的确切位置相关联。这种链接使得在您忘记某个知识点时，可以轻松地在相关背景中刷新您的记忆。

iDoRecall Obsidian 插件是 iDoRecall 网络应用程序的配套插件。使用该插件可以创建与 Obsidian 笔记中的文本相关联的回忆。当您使用这些回忆进行记忆检索时，如果您难以回忆出答案，只需点击源按钮。Obsidian 将立即打开，并显示带有链接文本高亮显示的源笔记。

## 安装

您可以从 Obsidian 的社区插件部分安装此插件。或者在 iDoRecall 应用程序配置文件的 [集成页面](https://app.idorecall.com/profile/integrations) 中安装插件。

或者，您可以从 Github 下载最新版本，并将文件放置在您的 vault 的插件文件夹中：

your-vault/.obsidian/plugins

要使用该插件，您需要在 iDoRecall 上创建一个帐户或登录到您现有的帐户。如果您还没有 iDoRecall 帐户，请 [去创建一个](https://app.idorecall.com/auth/sign-up)。它完全免费，并且可以让您拥有最多 200 个回忆。

激活

要激活插件，您需要生成一个 API 密钥，以便将插件链接到您的账户。操作步骤如下：

1. 登录您的 iDoRecall 账户。
2. 导航到 [个人资料中的集成部分](https://app.idorecall.com/profile/integrations)。
3. 找到 Obsidian 小部件，点击“点击生成密钥”。生成后，复制 API 密钥。

<https://github.com/iDoRecall/idorecall/assets/1734740/3c6971ab-27bc-4251-98f8-e1eba6980ace>

然后，您需要在 Obsidian 中激活插件。操作步骤如下：

1. 打开您的 Obsidian 应用程序。
2. 进入您的 vault 的设置。
3. 切换到 iDoRecall 插件旁边的开关以启用它。
4. 点击“选项”图标。
5. 将之前复制的 API 密钥粘贴到相应的字段中。

现在，您可以在 Obsidian 中使用 iDoRecall 插件了。

请注意：如果您有多个 iDoRecall 账户，并且希望在所有这些账户中使用插件，

您需要为每个账户生成一个单独的 API 密钥。API 密钥用于在插件和 iDoRecall 网络应用程序之间同步创建的记忆卡片（Recalls）。

## 特点

创建我们称之为“回忆（RECALLS）”的闪卡，这些闪卡与 Obsidian 笔记中的文本相连。通过以下方式在任何笔记中激活 iDoRecall 插件：

- 点击 Obsidian 工具栏上的 iDoRecall 插件图标 <img width="35" alt="image" src="https://github.com/iDoRecall/idorecall/assets/1734740/d2980c14-d9e1-4359-ad51-eea479610e15">
- 或者使用 Obsidian 命令面板和您选择的热键。
<img width="704" alt="image" src="https://github.com/iDoRecall/idorecall/assets/1734740/3adb7a94-05ad-49ba-ad19-827fb5a6dc3d">

一旦插件被激活，您可以选择笔记中的一些文本，以创建一个链接的回忆。会出现一个小弹窗。

<img width="152" alt="image" src="https://github.com/iDoRecall/idorecall/assets/1734740/acff6468-6995-450f-9e28-befc06bd3295">

注意：您必须在 Obsidian 笔记中处于编辑模式才能选择文本。<img width="192" alt="image" src="https://github.com/iDoRecall/idorecall/assets/1734740/05357ba9-85bd-4542-9fbf-c6fc65a9f2b9">

点击弹出窗口以确定要将所选内容发送到哪个字段：QA（问题和答案）、Q（问题）、A（答案）。

在上面的示例中，我点击了 QA，所选文本被粘贴到了回忆创建表单的问题和答案字段中。

<img width="480" alt="image" src="https://github.com/iDoRecall/idorecall/assets/1734740/2cf7b886-7cc4-44ba-876a-1b40aac0322a">

在回忆创建表单的 Q 和 A 字段中，我们支持各种文本编辑工具，包括文本大小、样式等格式选项。请随意编辑甚至完全替换这些字段中的文本。

无论您做出任何更改，回忆都将链接到包含您选择的文本的 Obsidian 块。

回忆创建期间的其他选项包括添加标签和使回忆可逆。可逆回忆有时会在您向您展示 A 字段中的内容并要求您回忆 Q 字段中的内容时显示给您。

完成所有更改后，点击“ADD RECALL”按钮。您创建的回忆将被保存，并且可以在插件本身和 iDoRecall 应用程序中访问。现在，您有机会在 Web 应用程序中练习您创建的回忆。

请注意：为了启用源链接的使用，我们在创建回忆的每个文本块旁边创建了一个高亮 ID。请不要删除此 ID，否则将无法导航到创建的回忆。

iDoRecall 插件还允许您编辑先前创建的回忆。要做到这一点，点击回忆卡上的“编辑”按钮。您可以编辑所有字段，添加或替换文本，回忆将保留其在笔记上的高亮和位置。

<img width="427" alt="image" src="https://github.com/iDoRecall/idorecall/assets/1734740/132c1ad2-afa3-4054-80ef-1fc9176b5565">

要删除回忆，您需要点击回忆表单上的“删除”按钮。这将从 Obsidian 和 iDoRecall Web 应用程序中删除回忆。但是，被高亮的文本将不会从您的 Obsidian 笔记中删除。

已知问题

- 无法在 Obsidian 画布上创建与文本相关的回忆，或者与画布上的文件中的文本相关的回忆。如果您想创建相关的回忆，必须打开这些文件。
- 无法在 Excalidraw 画布上创建与文本相关的回忆，或者与画布上的文件中的文本相关的回忆。如果您想创建相关的回忆，必须打开这些文件。
- Obsidian 源链接仅在台式电脑上有效。

有想法/请求/错误报告吗？

如果您有想法、建议或遇到任何问题，请随时与我们联系。写信至 david@idorecall.com。
