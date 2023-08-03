---
uid: 20230803231105
title: Obsidian 插件：Aut-O-Backups
tags: ['备份', 'obsidian插件', 'readme']
description: 自动备份您整个保险库到Dropbox。
author: AI
type: readme
draft: false
editable: false
modified: 20230803232522
---

# Obsidian 插件：Aut-O-Backups

> [!Note] 插件名片
> - 插件名称：Aut-O-Backups
> - 插件作者：ryanpcmcquen
> - 插件说明：自动备份您整个保险库到 Dropbox。
> - 插件分类：[' 备份 ', 'obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/ryanpcmcquen/obsidian-dropbox-backups)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsidian-dropbox-backups)

## 概述

自动备份您整个保险库到 Dropbox。

![Aut-O-Backups](https://cdn.pkmer.cn/covers/obsidian-dropbox-backups.gif!pkmer)

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/ryanpcmcquen/obsidian-dropbox-backups/master/README.md)
>

---

## Readme(翻译）

下面是 [[obsidian-dropbox-backups]] 插件的自述翻译

## Obsidian Aut-O-Backups

每 20 分钟自动备份您的整个存储库到 Dropbox（在 10 分钟延迟后开始）。

![Obsidian Aut-O-Backups logo](Aut-O-Backups_256x256.png)

备份存储在这里：

```
/Apps/Obsidian Backups/
```

在该文件夹下，备份存储为：

```
/VAULT_NAME/YEAR/MONTH/DAY/TIME_WITH_FRACTIONAL_SECONDS/VAULT_CONTENTS
```

我们使用小数秒来防止与临时备份发生冲突。

使用方法

点击图标与 Dropbox 进行身份验证。之后，备份将每隔 20 分钟进行一次（在 10 分钟延迟后开始）。您还可以通过点击丝带图标随时进行备份。

斜杠云表示您需要与 Dropbox 进行身份验证：

<img width="222" alt="Screen Shot 2021-06-07 at 9 57 49 AM" src="https://user-images.githubusercontent.com/772937/121060384-68e7f600-c777-11eb-98df-093799e28eca.png">

大箭头表示上传已开始：

<img width="353" alt="Screen Shot 2021-06-07 at 9 58 19 AM" src="https://user-images.githubusercontent.com/772937/121060390-6ab1b980-c777-11eb-8663-86d53f6ad893.png">

云内的小箭头表示上传已完成约 50%：

<img width="362" alt="Screen Shot 2021-06-07 at 9 57 59 AM" src="https://user-images.githubusercontent.com/772937/121060385-69808c80-c777-11eb-9251-e6e2a92ddb72.png">

带有勾号的云表示备份已完成！

<img width="351" alt="Screen Shot 2021-06-07 at 9 58 13 AM" src="https://user-images.githubusercontent.com/772937/121060387-6a192300-c777-11eb-83de-a6c71c8b71af.png">

演示：

![Demo](https://github.com/ryanpcmcquen/obsidian-dropbox-backups/raw/master/obsidian-dropbox-backups-demo-v2.gif)

### 设置

有一个设置可用于“排除二进制文件”，这将跳过没有以下扩展名之一的文件：

- md
- org
- txt

### Dropbox 权限

此应用程序需要以下 Dropbox 权限：

![IMG_5695](https://user-images.githubusercontent.com/772937/119743485-dbcfa380-be3e-11eb-9872-ffae4c4fa02c.png)

- `account_info.read`：您无法关闭此权限，我认为实际上我并不需要它。您可以在源代码中看到我没有从中读取任何内容。
- `files.metadata.read`：您也无法关闭此权限。我从不读取或列出文件，所以它不应该是必需的，但 Dropbox 不允许关闭它。
- `files.content.write`：这是我实际需要的权限。此应用程序仅写入文件。此应用程序无法读取文件。它还仅限于其文件夹。

### 已知限制

以下文件**不在**此列表中：

- `md`
- `org`
- `txt`

将作为二进制文件上传。

如果还需要将更多实际上是纯文本的文件添加到此列表中，请告诉我。

“Dropbox 备份”发生了什么事情？

从版本“2.0.0”开始，该应用程序更名以遵循所需的品牌准则。

### 手动安装插件

- 将 `main.js`、`manifest.json` 和 `styles.css` 复制到你的 vault 文件夹 `VaultFolder/.obsidian/plugins/obsidian-dropbox-backups/` 中。



