---
uid: 20240227160841
title: Obsidian 插件：【Readme】Todoist Text
tags: ['obsidian插件', 'readme']
description: 将您的 Todoist 任务与 Markdown 复选框绑定到一起。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】Todoist Text

> [!Note] 插件名片
> - 插件名称：Todoist Text
> - 插件作者：Wes Moncrief
> - 插件说明：将您的 Todoist 任务与 Markdown 复选框绑定到一起。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/wesmoncrief/obsidian-todoist-text)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?todoist-text)

## 概述

将您的 Todoist 任务与 Markdown 复选框绑定到一起。

![Todoist Text](https://cdn.pkmer.cn/covers/todoist-text.gif)

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/wesmoncrief/obsidian-todoist-text/master/README.md)

---

## Readme(翻译）

下面是 [[todoist-text]] 插件的自述翻译

# Todoist Text - Obsidian 插件

这个 Obsidian 插件以文本为中心的方式，将你的 Todoist 任务与 Markdown 复选框集成在一起。

演示：![demo](https://cdn.pkmer.cn/covers/todoist-text_1_0.gif)

# 使用方法

1. 确保您理解安全性的影响（请参阅本文件的安全性部分）
2. 通过 Obsidian 安装并启用此插件（Todoist Text）
3. 根据说明，在插件设置中输入您的 Todoist API 令牌
4. 阅读下面的部分，了解如何操作任务

自动创建任务列表

执行命令“Todoist Text: Replace keyword with todos”将搜索当前打开的文件，并用来自 Todoist 的任务替换您的关键字（可在设置中配置）。关键字将使用您选择的 [筛选器定义](https://todoist.com/help/articles/introduction-to-filters)，这样您就可以精确控制要显示的任务。

您可以配置多个关键字，每个关键字对应一个单独的 Todoist 筛选器定义。

您可以在设置中启用关键字与任务的自动替换，这样您就不必手动运行“Todoist Text: Replace keyword with todos”命令。

如果您想使用模板文件（例如每日笔记），并且已启用关键字的自动替换，您会发现模板文件本身的关键字也会被任务替换。为了防止这种情况发生，您可以将模板文件夹添加到设置中的“排除文件夹”中。然后，您只需在模板文件中放置关键字，它生成的文件应自动用您的任务替换关键字。

将任务标记为完成并重新打开

当光标位于此插件创建的 Todo 的行上时，执行命令“Todoist Text: Toggle todoist task”将在 Todoist 上完成该任务并在本地文件中勾选该任务。

您可能希望使用“<Cmd>-<Enter>”热键来勾选任务。要做到这一点，请转到设置 ->热键。找到命令“Todoist Text: Toggle todoist task”，并根据需要设置热键。如果将热键设置为“<Cmd>-<Enter>”，请确保从其默认值（“Toggle Checklist Status”）中删除“<Cmd>-<Enter>”。

您可以使用“Todoist Text: Toggle todoist task”命令/热键来处理任何检查列表项，即使与 Todoist 无关。在幕后，该命令将检查检查列表项的后缀，如果包含 Todoist URL，则会更新 Todoist 上的该待办事项。如果不以 Todoist URL 结尾，则只会在本地勾选/取消勾选该行。

目前不支持使用鼠标点击检查框。

添加/更新任务

该插件目前不支持向 Todoist 添加任务。在此之前，我建议使用 Todoist 桌面应用程序 - 它具有全局快捷键，可以从计算机的任何位置快速添加任务。

该插件不会根据 Todoist 任务的远程更改自动更新您的本地文件。这可能会在以后得到支持，请通过 GitHub 问题与我们联系，如果这对您有用的话。

## 安全性

该插件将您的 Todoist API 令牌以明文形式存储在您的.obsidian/plugins 文件夹中。任何拥有您的 Todoist API 令牌的人都可以访问和操纵您的所有 Todoist 数据。为了安全起见，请确保您不会同步/共享您的.obsidian/plugins 文件夹。请自行承担使用该插件的风险。

## 功能请求

如果您想讨论可能的新功能或需要帮助，请通过提交 GitHub 问题与我们联系！如果您发现已经存在的 GitHub 问题，请随时在其上发表评论，这可能会提高优先级/帮助确定功能的实现方式。

请查看 [更改日志](CHANGELOG.md) 以获取最近的更改。

我正在积极地创建新功能，所以请务必“关注”这个存储库（在屏幕顶部附近的 GitHub 按钮上）以便收到通知，这样您就会知道何时进行更新。

归属

我从<https://github.com/liamcain/obsidian-periodic-notes> 复制了>“文件夹建议”设置功能 - 谢谢！
