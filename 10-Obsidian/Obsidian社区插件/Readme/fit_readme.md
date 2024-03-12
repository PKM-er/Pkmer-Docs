---
uid: 20240312193744
title: Obsidian 插件：【Readme】Fit
tags: ['obsidian插件', 'readme']
description: Minimalist File gIT (FIT) to sync your files across mobile and desktop devices using GitHub.
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】Fit

> [!Note] 插件名片
> - 插件名称：Fit
> - 插件作者：joshuakto
> - 插件说明：Minimalist File gIT (FIT) to sync your files across mobile and desktop devices using GitHub.
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/joshuakto/fit)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?fit)

## 概述

Minimalist File gIT (FIT) to sync your files across mobile and desktop devices using GitHub.

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/joshuakto/fit/master/README.md)

---

## Readme(翻译）

下面是 [[fit]] 插件的自述翻译

# FIT

一个极简的文件同步工具（FIT），可以使用 GitHub 在移动设备和桌面设备之间同步文件。

这个插件旨在尽可能简单，实现一键同步，可以在移动设备和桌面设备上通用地使用。

这个插件专注于使核心 git 功能（推送和拉取）在设备（移动设备和桌面设备）之间可用。为了实现这一点，我使用纯 typescript 实现了一个简单的 git 系统，并利用 [Octokit/core.js](https://github.com/octokit/core.js/)，它支持所有现代浏览器，与 GitHub REST API 进行交互。

### 相关插件

如果您需要诸如分支等更高级的 git 功能，还有其他社区插件可供选择，[Git](https://github.com/denolehov/obsidian-git) 是一个不错的插件。

还有其他用于同步更改的极简主义插件，例如 [Git integration](https://github.com/noradroid/obsidian-git-integration)、[GitHub sync](https://github.com/kevinmkchin/Obsidian-GitHub-Sync) 和 [YAOS](https://github.com/mahyarmirrashed/yaos)。然而，截至编写本插件时，它们尚不支持移动设备。

**注意：** 该插件仍处于 alpha 阶段，请在使用该插件之前备份您的保险库。

# 如何使用

### 一键同步

<https://github.com/joshuakto/fit/assets/34743132/4060695d-1e9f-4475-8187-519cbba40cab>

### 分别拉取和推送

<https://github.com/joshuakto/fit/assets/34743132/863d0241-a528-495a-b6f8-717a519cdc11>

# 设置

1. 在 GitHub 上创建一个仓库（重要：记得选择创建一个**README**，这样仓库就不会是空的，这对 Fit 的工作是必需的。）
2. 创建一个个人访问令牌（参考 [Github：创建个人访问令牌](https://docs.github.com/en/enterprise-server@3.9/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens#creating-a-personal-access-token)）
3. 在 Fit 设置选项卡上输入创建的令牌以及其他相关的 GitHub 信息。
   <img width="1106" alt="Screenshot 2024-03-07 at 11 39 57 AM" src="https://github.com/joshuakto/fit/assets/34743132/31af0b20-1963-40a9-a847-32531beb8fc8">

# 路线图

1. 启用与现有保险库的集成（当前设置仅适用于从一开始就与初始化的存储库同步的保险库）
2. 改进用户通知
   - 允许用户选择接收通知中文件更改列表
3. 允许用户解决冲突的文件更改

# 致谢

 - 该插件是使用 [Obsidian Sample Plugin](https://github.com/obsidianmd/obsidian-sample-plugin) 作为模板构建的。
 - 该插件使用 [Octokit](https://github.com/octokit/core.js/) 来在各种设备上与 github rest api 进行交互。

<!---

## 发布新版本

- 使用新的版本号（例如`1.0.1`）更新您的`manifest.json`，并指定最低要求的 Obsidian 版本。
- 在`versions.json`文件中更新`"new-plugin-version": "minimum-obsidian-version"`，这样旧版本的 Obsidian 可以下载与其兼容的插件旧版本。
- 使用新的版本号作为“标签版本”创建新的 GitHub 发布。使用确切的版本号，不要包含前缀`v`。参见此处的示例：https://github.com/obsidianmd/obsidian-sample-plugin/releases
- 将`manifest.json`、`main.js`、`styles.css`文件作为二进制附件上传。注意：`manifest.json`文件必须放在两个位置，首先是存储库的根路径，然后是发布中。
- 发布发布。

> 您可以在手动更新`manifest.json`中的`minAppVersion`后运行`npm version patch`、`npm version minor`或`npm version major`来简化版本升级过程。
> 该命令将在`manifest.json`和`package.json`中提升版本，并将新版本的条目添加到`versions.json`中。

## 将您的插件添加到社区插件列表

- 检查 https://github.com/obsidianmd/obsidian-releases/blob/master/plugin-review.md
- 发布初始版本。
- 确保您的存储库根目录中有一个 `README.md` 文件。
- 在 https://github.com/obsidianmd/obsidian-releases 上发起一个拉取请求以添加您的插件。
- 将 `main.js`、`styles.css`、`manifest.json` 复制到您的 vault `VaultFolder/.obsidian/plugins/your-plugin-id/`。



