---
uid: 20240227160841
title: Obsidian 插件：【Readme】iCloud Contacts
tags: ['obsidian插件', 'readme']
description: 从iCloud导入联系人，并为每个联系人管理一个备注。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】iCloud Contacts

> [!Note] 插件名片
> - 插件名称：iCloud Contacts
> - 插件作者：Truls Aagaard
> - 插件说明：从 iCloud 导入联系人，并为每个联系人管理一个备注。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/Trulsaa/obsidian-icloud-contacts)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?icloud-contacts)

## 概述

从 iCloud 导入联系人，并为每个联系人管理一个备注。

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/Trulsaa/obsidian-icloud-contacts/main/README.md)

---

## Readme(翻译）

下面是 [[icloud-contacts]] 插件的自述翻译

# 黑曜石 iCloud 联系人

该插件提供了将您的 iCloud 帐户中的联系人同步到您的保险库中的文件夹的功能。

## 特点

- 将您的 iCloud 联系人同步到 Obsidian
- 为每个联系人创建一个文件，其中包含与联系人详细信息对应的属性。
- 此插件仅更新属性、标题和顶部的 H1 标题（姓名）。更新联系人时，文件中写入的任何其他信息都不会被更改。

## 如何使用

1. 安装这个插件
2. 在设置中添加用户名和应用程序特定密码。
3. 运行命令 `Obsidian iCloud contacts: Update contacts` 来同步您的联系人
4. 同步完成后，您将看到一个通知，显示已同步多少个联系人。

## 命令

此插件提供两个命令。使用命令面板搜索**Obsidian iCloud contacts**，并使用其中一个命令来更新您的联系人文件。

1. **更新联系人**：从 iCloud 下载所有联系人，并根据 iCloud 中已更新的联系人更新您的存储库中的联系人文件。
2. **更新所有联系人**：- 从 iCloud 下载所有联系人，并根据 iCloud 中的联系人重写您的存储库中的所有联系人文件。当您已更改排除键设置时非常有用。

## 注意事项

- **iCloudVCard** 属性仅用于更新已更改的联系人。我也喜欢它作为我保险库中联系人的备份。
- 该插件与苹果无任何关联。

## 感谢

这个代码库中的 IcloudClient 是从 [tsdav](https://github.com/natelindev/tsdav) 复制并适应而来的。
