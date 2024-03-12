---
uid: 20240227160841
title: Obsidian 插件：【Readme】TickTickSync
tags: ['obsidian插件', 'readme']
description: Sync TickTick tasks to Obsidian, and Obsidian tasks to TickTick
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】TickTickSync

> [!Note] 插件名片
> - 插件名称：TickTickSync
> - 插件作者：thesamim
> - 插件说明：Sync TickTick tasks to Obsidian, and Obsidian tasks to TickTick
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/thesamim/TickTickSync)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?tickticksync)

## 概述

Sync TickTick tasks to Obsidian, and Obsidian tasks to TickTick

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/thesamim/TickTickSync/master/README.md)

---

## Readme(翻译）

下面是 [[tickticksync]] 插件的自述翻译

# TickTickSync

TickTickSync 插件会自动在 ticktick 中创建任务，并在 Obsidian 和 ticktick 之间同步任务状态。

当安装了 [Tasks](https://github.com/obsidian-tasks-group/obsidian-tasks) 插件时，该插件效果最佳。

## 特点

- 在 Obsidian 中创建并标记为#ticktick 的任何任务都将与 TickTick 同步
- 在 TickTick 中创建的任何任务都将同步到 Obisidian 中。
- 更新是双向的
- 从 Obsidian 添加或更新的任务会立即同步到 TickTick 中。
- 从 TickTick 添加或更新的任务会在可配置的时间间隔内同步。

## 注意事项

1. 在插件和文档中，TickTick 的列表被称为项目。
2. TickTick 只有四个优先级（高、中、低、无）。请参阅 [任务格式](#任务格式) 中的优先级，了解任务优先级的映射。
3. 请查看下面的已知问题 3。__ 强烈 __ 建议使用子任务而不是项目，以避免数据丢失。

## 已知问题

1. 目前，所有的 TickTick 任务都会被同步。根据反馈，可能会在 TickTick 端添加一个标签。例如：如果标记为 #obisidian，任务将会被同步。如果没有标记，则会被忽略。
2. 该插件仅适用于 [任务表情格式](https://publish.obsidian.md/tasks/Reference/Task+Formats/About+Task+Formats)。它**不**适用于 Dataview 格式。随着时间的推移，该插件将被重构以使用任务功能来支持两者。
3. **描述警告**：目前，链接到存储库和存储库中的文件会保存在描述字段中。这意味着在同步过程中任何项目或描述都将被覆盖。
	1. 如何处理这个问题将根据用户的反馈来确定。
4. 只在一个时区进行了测试。不确定跨时区任务是否会生效，或者 TickTick 的时区实现是否会被处理。
5. 截止日期：
	1. 在 Obsidian 端：如果没有提供时间，则开始时间将默认为 08:00
	2. 在 TickTick 端：如果没有提供时间，则开始时间将为 00:00
6. 支持双向的父子任务。但是，对父子关系的更改尚未处理。
7. 目前不支持在项目/列表之间移动任务。
8. 由于标签不能包含空格，目前无法将任务添加到包含空格的项目中。随着时间的推移，将实现某种解决方法（例如：`#folder_with_a_space` 将被转换为 `folder with a space`）。
9. 如果文件具有默认项目关联（请参阅设置），则可以创建具有非默认项目标签的任务。任务将正确地同步到 TickTick 中的正确文件夹中。然而，如果任务随后从 TickTick 更新为子任务，则子任务将同步到项目的默认文件中，而不是原始父任务创建的文件中。

## 安装

### 从 Obsidian 内部

从 Obsidian v1.3.5+ 开始，您可以通过以下步骤在 Obsidian 内部激活此插件：

1. 打开 Obsidian 的“设置”窗口
2. 在左侧选择“社区插件”选项卡
3. 确保“限制模式”为**关闭**
4. 点击“浏览”旁边的“社区插件”
5. 搜索并点击“TickTickSync”
6. 点击“安装”
7. 安装完成后，关闭“社区插件”窗口
8. 在“已安装插件”下，激活“TickTickSync”插件

您可以按照相同的步骤更新插件，点击“更新”而不是“安装”

### BRAT

1. 从社区插件 [Obsidian42 - BRAT](https://obsidian.md/plugins?id=obsidian42-brat) 安装（最新版本）
    - 查看 [它们的自述文件](https://github.com/TfTHacker/obsidian42-brat#readme)。
2. 按照以下说明添加插件：<https://github.com/thesamim/TickTickSync>

### 手动安装

如果您更喜欢手动安装插件，可以按照以下步骤操作：

1. 从 [Releases](https://github.com/thesamim/TickTickSync/releases) 页面下载插件的最新版本。
2. 解压下载的 zip 文件，并将整个文件夹复制到您的 Obsidian 插件目录中。
3. 在 Obsidian 设置中启用插件。

## 配置

1. 打开 Obsidian 的 `设置` 窗口
2. 在左侧选择 `社区插件` 选项卡
3. 在 `已安装插件` 下，点击 `TickTickSync` 插件旁边的齿轮图标
4. 输入您的 TickTick 用户 ID 和密码。

## 设置

1. 自动同步间隔时间
默认情况下，自动同步的时间间隔设置为 300 秒，意味着每 5 分钟运行一次。您可以自行修改。
2. 默认项目
新任务将被添加到默认项目中，您可以在设置中更改默认项目。
3. 完全保险库同步
通过启用此选项，插件将自动将 `#ticktick` 添加到所有任务中，这将修改保险库中的所有文件。

## 用法

### 任务格式

| 语法 | 描述 | 示例 |
| --- | --- | --- |
|#ticktick|标记为 `#ticktick` 的任务将被添加到 ticktick 中，而没有 `#ticktick` 标记的任务将不会被处理。如果您在设置中启用了完整保险库同步，`#ticktick` 将会被自动添加。| `- [ ] 任务 #ticktick`|
| 📅YYYY-MM-DD | 日期格式为📅YYYY-MM-DD，表示任务的截止日期。 | `- [ ] 任务内容 📅2025-02-05 #ticktick`   <br>支持以下日历表情符号。📅📆🗓🗓️|
| #projectTag | 新任务将被添加到默认项目（例如，inbox），您可以在设置中更改默认项目或使用同名标签指定特定项目。 | `- [ ] 任务A #ticktick` 将被添加到 inbox。<br>`- [ ] 任务B #tag #testProject #ticktick` 将被添加到 testProject。|
| #tag | 请注意，所有没有与同名项目对应的标签都被视为普通标签。 | `- [ ] 任务 #tagA #tagB #tagC #ticktick` |
| 优先级  |    <p>TickTick 只有三个优先级级别。它们的映射如下。</p><table><thead><tr><th>TickTick</th><th>Obsidian</th></tr></thead><tbody><tr><td>0</td><td>null</td></tr><tr><td>0</td><td>&#39;⏬&#39;</td></tr><tr><td>1</td><td>&#39;🔽&#39;</td></tr><tr><td>3</td><td>&#39;🔼&#39;</td></tr><tr><td>5</td><td>&#39;⏫&#39;</td></tr><tr><td>5</td><td>&#39;🔺&#39;</td></tr></tbody></table>    | `- [ ] 任务 ⏫ #ticktick` |

### 为每个文件单独设置默认项目

设置中的默认项目适用于所有文件。您可以使用命令为每个文件设置单独的默认项目。

<img src="/attachment/command-set-default-project-for-file.png" width="500">
<img src="/attachment/default-project-for-file-modal.png" width="500">

您可以在右下角的状态栏中看到当前文件的默认项目。

<img src="/attachment/statusBar.png" width="500">

## 致谢

该插件基于 [Ultimate Todoist Sync for Obsidian](https://github.com/HeroBlackInk/ultimate-todoist-sync-for-obsidian)。

由于 TickTick 和 ToDoist 任务处理方式的差异，进行了重大更改。我感谢 [HeroBlackInk](https://github.com/HeroBlackInk/ultimate-todoist-sync-for-obsidian/commits?author=HeroBlackInk "查看HeroBlackInk的所有提交") 在原始插件中所做的工作。

这里使用的 [TickTick api包装器](https://github.com/thesamim/ticktick-api-lvt) 是从 <https://github.com/lucasvtiradentes/ticktick-api-lvt进行的分支。感谢[Lucas](https://github.com/lucasvtiradentes)的支持。>

## 免责声明

本插件是根据作者特定的使用情况构建的。其他使用情况可以并将被考虑。

作者对本插件的准确性、完整性或有用性不作任何明示或暗示的陈述或保证，并不对因使用本插件而导致的任何损失或损害承担责任。

作者不对任何损失或损害负责，包括但不限于数据丢失、系统崩溃、计算机损坏或任何其他形式的损失，这些损失是由软件问题或错误引起的。用户承担所有风险，并对因使用本产品而产生的任何后果负全部责任。

通过使用本插件，您同意受本免责声明的所有条款约束。如果您有任何问题，请联系作者。

## 贡献

欢迎贡献！如果您想为插件做出贡献，请随时提交拉取请求。

## 许可证

该插件是根据 [GNU GPLv3许可证](/LICENSE.md) 发布的。
