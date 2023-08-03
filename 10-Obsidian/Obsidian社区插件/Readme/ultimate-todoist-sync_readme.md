---
uid: 2023080322285565
title: Obsidian 插件：【Readme】Ultimate Todoist Sync
tags: ['obsidian插件', 'readme']
description: 这是迄今为止最好的Obsidian Todoist任务同步插件。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Ultimate Todoist Sync

> [!Note] 插件名片
> - 插件名称：Ultimate Todoist Sync
> - 插件作者：HeroBlackInk
> - 插件说明：这是迄今为止最好的Obsidian Todoist任务同步插件。
> - 插件分类：['obsidian插件', 'readme']
> - 项目地址：[点我访问](https://github.com/HeroBlackInk/ultimate-todoist-sync-for-obsidian)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?ultimate-todoist-sync)

## 概述

这是迄今为止最好的Obsidian Todoist任务同步插件。

![Ultimate Todoist Sync](https://cdn.pkmer.cn/covers/ultimate-todoist-sync_new.gif!pkmer)

> [!tip] 原文出处
> 
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/HeroBlackInk/ultimate-todoist-sync-for-obsidian/master/README.md)
> 

---

## Readme(翻译）

下面是 [[ultimate-todoist-sync]] 插件的自述翻译


# Obsidian的终极Todoist同步插件

终极Todoist同步插件会自动在Todoist中创建任务，并在Obsidian和Todoist之间同步任务状态。

## 演示

### 使用方法
![Alt Text](/attachment/demo.gif)

### 设置页面
<img src="/attachment/settings.png" width="500">

## 特点

| 功能                     | 从Obsidian同步到Todoist | 从Todoist同步到Obsidian | 描述         |
|-------------------------|----------------------|----------------------|-------------|
| 添加任务                 | ✅                   | 🔜                   |             |
| 删除任务                 | ✅                   | 🔜                   |             |
| 修改任务内容             | ✅                   | ✅                   |             |
| 修改任务截止日期         | ✅                   | ✅                   |             |
| 修改任务描述             | 🔜                   | 🔜                   |             |
| 修改任务标签             | ✅                   | 🔜                   |             |
| 标记任务为已完成         | ✅                   | ✅                   |             |
| 标记任务为未完成         | ✅                   | ✅                   |             |
| 修改项目                 | 🔜                   | 🔜                   |             |
| 修改分区                 | 🔜                   | 🔜                   |             |
| 修改优先级               | ✅                   | 🔜                   |  目前，任务优先级只支持从Todoist到Obsidian的单向同步。           |
| 添加提醒                 | 🔜                   | 🔜                   |             |
| 在文件之间移动任务       | 🔜                   | 🔜                   |             |
| 添加日期                 | 🔜                   | 🔜                   |             |
| 完成日期                 | 🔜                   | 🔜                   |             |
| 任务备注                 | 🔜                   | ✅                   |  目前，任务备注/评论只支持从Todoist到Obsidian的单向同步。          |

安装

### 从Obsidian内部

从Obsidian v1.3.5+开始，您可以通过以下步骤在Obsidian内部激活此插件：

1. 打开Obsidian的“设置”窗口
2. 在左侧选择“社区插件”选项卡
3. 确保“限制模式”处于关闭状态
4. 点击“浏览”，找到并点击“Ultimate Todoist Sync”
5. 点击“安装”
6. 安装完成后，关闭“社区插件”窗口
7. 在“已安装插件”下，激活“Ultimate Todoist Sync”插件

您可以按照相同的步骤更新插件，只需点击“更新”而不是“安装”。

### 手动安装

如果您更愿意手动安装插件，可以按照以下步骤进行操作：

1. 从[Releases](https://github.com/HeroBlackInk/ultimate-todoist-sync-for-obsidian/releases)页面下载插件的最新版本。
2. 解压下载的zip文件，并将整个文件夹复制到Obsidian插件目录中。
3. 在Obsidian设置中启用插件。

## 配置

1. 打开 Obsidian 的 `设置` 窗口
2. 在左侧选择 `社区插件` 选项卡
3. 在 `已安装插件` 下，点击 `Ultimate Todoist Sync` 插件旁边的齿轮图标
4. 输入你的 Todoist API 令牌

## 设置
1. 自动同步间隔时间
默认情况下，自动同步的时间间隔设置为300秒，即每5分钟运行一次。您可以自行修改。
2. 默认项目
新任务将添加到默认项目中，您可以在设置中更改默认项目。
3. 完全同步保险库
通过启用此选项，插件将自动将`#todoist`添加到所有任务中，这将修改保险库中的所有文件。

使用方法

### 任务格式

| 语法 | 描述 | 示例 |
| --- | --- | --- |
|#todoist|带有`#todoist`标记的任务将被添加到Todoist中，而没有`#todoist`标记的任务将不会被处理。如果您在设置中启用了完整的存储库同步，`#todoist`将会自动添加。| `- [ ] 任务 #todoist`|
| 📅YYYY-MM-DD | 日期格式为📅YYYY-MM-DD，表示任务的截止日期。 | `- [ ] 任务内容 📅2025-02-05 #todoist`   <br>支持以下日历表情符号。📅📆🗓🗓️|
| #projectTag | 新任务将被添加到默认项目（例如，收件箱），您可以在设置中更改默认项目，或使用同名标签来指定特定项目。 | `- [ ] 任务A #todoist` 将被添加到收件箱。<br>`- [ ] 任务B #tag #testProject #todoist` 将被添加到testProject。|
| #tag | 请注意，所有没有同名项目的标签都被视为普通标签。 | `- [ ] 任务 #tagA #tagB #tagC #todoist` |
|   `!!<number>` | 任务的优先级（一个介于1和4之间的数字，4表示非常紧急，1表示自然）。<br>**注意**：请记住，客户端上非常紧急的优先级是1。因此，客户端上的优先级1对应于此处的数字4（因为这是Todoist官方API的设计方式）。 | `- [ ] 任务 !!4 #todoist` |

### 为每个文件单独设置默认项目

设置中的默认项目适用于所有文件。您可以使用命令为每个文件单独设置默认项目。

<img src="/attachment/command-set-default-project-for-file.png" width="500">
<img src="/attachment/default-project-for-file-modal.png" width="500">

您可以在状态栏的右下角看到当前文件的默认项目。
<img src="/attachment/statusBar.png" width="500">

免责声明

本插件仅供学习目的使用。作者对本插件的准确性、完整性或有用性不作任何明示或暗示的陈述或保证，并不对使用本插件导致的任何损失或损害承担责任。

作者不对任何损失或损害负责，包括但不限于数据丢失、系统崩溃、计算机损坏或任何其他形式的由软件问题或错误引起的损失。用户承担所有风险，并对使用本产品所导致的任何后果负全部责任。

通过使用本插件，您同意受本免责声明的所有条款约束。如有任何问题，请联系作者。

## 贡献

欢迎贡献！如果您想为插件做出贡献，请随时提交拉取请求。

## 许可证

该插件以[GNU GPLv3许可证](/LICENSE.md)发布。



