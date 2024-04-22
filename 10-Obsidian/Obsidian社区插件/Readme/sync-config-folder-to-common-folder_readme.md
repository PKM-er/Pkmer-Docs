---
uid: 2024042221314006
title: Obsidian 插件：【Readme】Sync config folder to common folder
tags: ['obsidian插件', 'readme']
description: 同步配置文件夹中的内容到公共文件夹，用于备份或其他目的。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】Sync config folder to common folder

> [!Note] 插件名片
> - 插件名称：Sync config folder to common folder
> - 插件作者：codeonquer
> - 插件说明：同步配置文件夹中的内容到公共文件夹，用于备份或其他目的。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/codeonquer/obsidian-sync-config-folder-to-common-folder)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?sync-config-folder-to-common-folder)

## 概述

同步配置文件夹中的内容到公共文件夹，用于备份或其他目的。

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/codeonquer/obsidian-sync-config-folder-to-common-folder/main/README.md)

---

## Readme(翻译）

下面是 [[sync-config-folder-to-common-folder]] 插件的自述翻译

# Obsidian Sync ConfigFolder to CommonFolder

该插件的开发动机有以下两点：

- Obsidian 的配置文件夹必须以点号（`.`）开头；
- 一些使用的同步工具不支持同步以点号（`.`）开头的文件夹。

因此，该插件被开发用于将配置文件夹的内容同步到一个普通文件夹中，使用 `Sync` 命令，同时也支持使用 `Restore` 命令从普通文件夹中恢复配置文件夹的内容。

普通文件夹的设置支持相对路径和绝对路径，相对路径基于当前 Vault 的根目录。
