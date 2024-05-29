---
uid: 2024052908523034
title: Obsidian 插件：User Plugins
tags: ['编程与脚本', '第三方工具集成', '自定义命令', 'obsidian插件']
description: 用 JS 文件或片段来快速编写一个插件。注意此插件仅适用高级用户，在笔记中插入你不熟悉的JS会引发很多问题。
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：User Plugins

> [!Note] 插件名片
> - 插件名称：User Plugins
> - 插件作者：mnowotnik
> - 插件说明：用 JS 文件或片段来快速编写一个插件。注意此插件仅适用高级用户，在笔记中插入你不熟悉的 JS 会引发很多问题。
> - 插件分类：[' 编程与脚本 ', ' 第三方工具集成 ', ' 自定义命令 ', 'obsidian 插件 ']
> - 项目地址：[点我访问](https://github.com/mnowotnik/obsidian-user-plugins)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsidian-user-plugins)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/mnowotnik/obsidian-user-plugins/master/README.md)

![User Plugins](https://cdn.pkmer.cn/covers/obsidian-user-plugins.png!pkmer)

## 概述

Obsidian 用户插件是一个简单的插件，可以让您在代码片段或 JavaScript 文件中使用 Obsidian 插件 API，以修改 Obsidian 的行为，就像您创建了一个插件一样，但没有麻烦。

该插件的用例包括添加自定义命令、测试插件的想法以及使用插件 API 来实现任何您想要的功能。

通过使用该插件，您可以添加一个名为“Create new note in given folder”的命令，允许您在创建笔记之前选择一个文件夹。

要使用该插件，您可以手动添加代码片段，或者在存储库的脚本目录中启用每个单独的文件。脚本可以访问一个 `Plugin` 对象，其中包含有关 API 的信息。脚本还可以使用 `helpers` 和 `passedModules` 成员来实现一些其他功能。

请注意，该插件仅适用于高级用户，并且需要谨慎使用，以避免意外删除笔记或其他问题。

> [!help]
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交 PR 或者文末留言。

---



