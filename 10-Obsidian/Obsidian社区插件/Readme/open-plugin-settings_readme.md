---
uid: 2023080322240989
title: Obsidian 插件：【Readme】Open Plugin Settings
tags: ['obsidian插件', 'readme']
description: 创建一个命令来打开指定的插件设置。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Open Plugin Settings

> [!Note] 插件名片
> - 插件名称：Open Plugin Settings
> - 插件作者：Mara-Li
> - 插件说明：创建一个命令来打开指定的插件设置。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/lisandra-dev/open-plugin-settings-commands)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?open-plugin-settings)

## 概述

创建一个命令来打开指定的插件设置。

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/Lisandra-dev/open-plugin-settings-commands/master/README.md)
>

---

## Readme(翻译）

下面是 [[open-plugin-settings]] 插件的自述翻译

打开插件设置

该插件允许您创建一个命令来打开指定插件的设置选项卡。

## 用法

默认情况下，可以通过命令面板打开插件本身的设置，使用 `Open Plugin Settings: Open Plugin Settings` 命令。

要添加打开另一个插件设置的命令，只需点击添加按钮，然后搜索要添加的插件。

然后可以使用 `Open Plugin Settings: Open <插件名称>` 命令打开插件的设置。

从设置中，您还可以刷新列表以删除已删除的插件，并禁用已禁用插件的命令。

![gif演示](https://user-images.githubusercontent.com/30244939/234854311-7da05061-2646-43c0-bd42-38fa50121d13.gif)

您还可以使用 `Open other plugin settings` 命令打开任何未注册的插件，并搜索要打开的插件。

## 📥 安装

- [x] 从 Obsidian 的社区插件中安装
- [x] 使用 BRAT 和 `https://github.com/Lisandra-dev/open-plugin-settings-commands`
- [x] 从发布页面安装：
  - 下载最新版本
  - 解压缩 `open-plugin-settings-commands.zip` 到 `.obsidian/plugins/` 路径
  - 在 Obsidian 设置中重新加载插件
  - 启用插件

## 🤖 开发中

我使用 `npm` 来开发这个插件：

```
npm install
npm run dev
```

你也可以创建一个 `.env.json` 文件，其中包含你的主 Obsidian Vault 的路径，如下所示：

```json
{
  "VAULT": "path/to/your/vault"
}
```

> **注意**
> 如果你使用的是 Windows 系统，需要将 `\` 进行重复。

### 🎼 语言

- [x] 英语
- [x] 法语

要添加翻译：

- Fork 该仓库
- 在 `plugin/i18n/locales` 文件夹中使用语言名称（例如 `fr.json`）添加翻译
- 将 [`en.json`](./src/i18n/locales/en.json) 文件的内容复制到新文件中
- 翻译内容
- 创建一个 pull request

## 📜 版权

感谢 [@pjeby/hotkey helper](https://github.com/pjeby/hotkey-helper) 提供的打开设置选项卡功能。
