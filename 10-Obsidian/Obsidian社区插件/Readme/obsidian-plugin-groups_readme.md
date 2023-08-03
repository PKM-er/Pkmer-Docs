---
uid: 20230803231105
title: Obsidian 插件：Plugin Groups
tags: ['效率', '自动化', '插件', 'obsidian插件', 'readme']
description: 增强你的插件管理，一次启用和禁用多个插件，或者延迟它们的启动以加快Obsidian的启动时间。
author: AI
type: readme
draft: false
editable: false
modified: 20230803232457
---

# Obsidian 插件：Plugin Groups

> [!Note] 插件名片
> - 插件名称：Plugin Groups
> - 插件作者：Mocca101
> - 插件说明：增强你的插件管理，一次启用和禁用多个插件，或者延迟它们的启动以加快 Obsidian 的启动时间。
> - 插件分类：[' 效率 ', ' 自动化 ', ' 插件 ', 'obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/Mocca101/obsidian-plugin-groups)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsidian-plugin-groups)

## 概述

增强你的插件管理，一次启用和禁用多个插件，或者延迟它们的启动以加快 Obsidian 的启动时间。

![Plugin Groups](https://cdn.pkmer.cn/covers/obsidian-plugin-groups.PNG!pkmer)

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/Mocca101/obsidian-plugin-groups/main/README.md)
>

---

## Readme(翻译）

下面是 [[obsidian-plugin-groups]] 插件的自述翻译

# Obsidian 的插件分组

一个可以让你轻松分组和管理 Obsidian 中其他插件的插件。

## 特点

- **分组：** 将插件组织成逻辑分组，以便更容易管理。
- **批量操作：** 通过单击或命令，启用或禁用组中的插件。
- **延迟组加载：** 您可以设置组在 Obsidian 启动后的自定义延迟后加载。这对于减少启动时系统负载非常有用，从而缩短加载时间。
- **组嵌套：** 使用组管理您的组。例如，您可以创建一个与样式相关的插件组和一个常用但不需要立即启动的插件组。将它们添加到一个父组中，在启动时延迟加载这些插件组，这样您就可以快速开始工作，而无需等待它们全部加载完毕。

限制

一些插件无法与延迟加载一起使用，因为它们需要在工作区加载之前加载。希望将来能够加载这些延迟加载的插件。在那之前，这是一份不适用于延迟加载的插件列表：

- [Pane Relief](https://github.com/pjeby/pane-relief)
- [Hidden Folder](https://github.com/ptrsvltns/hidden-folder-obsidian)

一些插件也可能存在一些小问题（视图加载不正确）。可以通过关闭并重新打开受影响的窗格来解决。例如：

- [Media Extended](https://github.com/aidenlx/media-extended)

有时窗格会自动重新加载，但这只会在插件加载后发生，例如：

- [Kanban](https://github.com/mgmeyers/obsidian-kanban)

*如果您注意到某个插件在延迟加载方面存在问题，请告诉我或在此 README.md 中的列表中添加插件的 PR*

不幸的是，目前还无法设置在组内启动插件的顺序。因此，如果插件彼此依赖，并且一个插件需要在另一个插件之前加载，我建议将它们放在不同的组中，并相应地加载它们。尽管可能不这样做也可以工作，但为了安全起见，我建议不要这样做。

## 安装

请记住，这是该插件的早期版本，可能还有一些问题需要解决。如果您遇到任何问题，请务必告诉我！

要安装 Plugin Groups，请按照以下步骤操作：

1. 转到发布选项卡并下载最新版本。
2. 在您的存储库的 `.obsidian` 文件夹中打开插件文件夹。
3. 创建一个名为 `obsidian-plugin-groups` 的新文件夹，并将 `manifest.json`、`style.css` 和 `main.js` 粘贴到其中。或者直接从压缩文件中复制整个文件夹。
4. 完成

注意：一旦该插件在公共的 Obsidian 插件存储库中可用，它也将直接从社区插件列表中可用。

## 使用方法

要使用 Obsidian Groups，请从“社区插件”菜单中启用它，并通过创建分组来组织和管理您的插件。

### 创建一个分组

![group-creation](https://raw.githubusercontent.com/Mocca101/obsidian-plugin-groups/master/images/group-creation.gif)

要创建一个新的分组，请前往插件设置，输入分组的名称，然后点击“+”按钮。然后，您可以：

- 切换插件的开启/关闭状态，以将其包含或排除在该分组中。
- 选择是否为该分组生成命令。
- 设置该分组在 Obsidian 启动时启动（带有或不带有延迟）。
- 包含其他分组以由该分组控制。
  点击“保存”以完成创建过程。

编辑群组

要编辑现有的群组，在插件设置中，点击群组名称旁边的铅笔图标。从这里，您可以以与创建群组相同的方式编辑群组。

### 启用/禁用分组

您可以通过在插件设置中单击分组名称旁边的“开启”和“关闭”按钮来启用或禁用分组。如果启用了分组，您还可以在命令面板中使用以下命令来启用或禁用您的分组：

- 插件分组启用：“您的分组名称”
- 插件分组禁用：“您的分组名称”

![commands](https://raw.githubusercontent.com/Mocca101/obsidian-plugin-groups/master/images/commands.gif)

### 惰性加载（Obsidian 启动时的延迟加载）

要启用延迟加载插件，您需要执行以下操作：

1. 在社区插件选项卡中手动禁用要通过惰性加载加载的插件。或者，更好的方法是在文件 `.obsidian/community-plugins.json` 中删除插件的 ID。
   解释：当插件在手动启用时，它们会被写入文件中，因此会在 Obsidian 启动时加载（而不是通过插件组）。
2. 在包含要延迟加载的插件的组中，切换“启动时加载”按钮。
   1. 选择所需的行为（启用或禁用）。
   2. 为插件设置延迟时间。
3. 完成！在下次启动时，您应该会看到启动时间有所改善。

![startup-demo](https://raw.githubusercontent.com/Mocca101/obsidian-plugin-groups/master/images/Startup-Demo.gif)

支持

如果您发现 Plugin Groups 是一个有用的工具，请考虑通过 Buy Me a Coffee 进行捐赠，或在 GitHub 上给这个项目点赞来支持我。或者考虑向互联网档案馆捐赠，这是一个令人敬畏的项目，致力于保存和提供数字媒体和信息的访问，现在和将来的世代！

您的支持帮助我继续开发和维护这个插件。

如果您有任何问题、反馈、问题或错误，请随时与我联系或在这个存储库中创建一个问题。

感谢您使用 Plugin Groups，希望它能让您的生活更轻松！

尽管我尽力保持 Readme 和文档的最新，但可能会有我忽略的事情，比如拼写错误或需要更清晰解释的功能。如果你注意到任何这些问题，请告诉我。或者，更好的是，如果你能够修复错误或写出更清晰的解释，你可以创建一个 pull request 来提交你的更改。这将帮助我更专注于开发，并让其他用户从改进的使用文档中受益！

如果你确实帮助了我，非常感谢！如果你使用插件，请将它们放入 images 文件夹中。所使用的主题是 obsidian 标准主题的浅色版本。
