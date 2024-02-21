---
uid: 2024022117281242
title: Obsidian 插件：【Readme】GitHub Sync
tags: ['obsidian插件', 'readme']
description: 同步保险库到个人GitHub。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】GitHub Sync

> [!Note] 插件名片
> - 插件名称：GitHub Sync
> - 插件作者：Kevin Chin
> - 插件说明：同步保险库到个人GitHub。
> - 插件分类：['obsidian插件', 'readme']
> - 项目地址：[点我访问](https://github.com/kevinmkchin/Obsidian-GitHub-Sync)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?github-sync)

## 概述

同步保险库到个人GitHub。



> [!tip] 原文出处
> 
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/kevinmkchin/Obsidian-GitHub-Sync/main/README.md)
> 

---

## Readme(翻译）

下面是 [[github-sync]] 插件的自述翻译

【机翻】
# GitHub同步

简单的插件，允许您将您的保险库同步到个人GitHub仓库，以便在**不同设备之间同步**。

![](https://cdn.pkmer.cn/covers/github-sync_2_0.png!pkmer)
## 如何使用
点击**与远程同步**功能区图标，从您的GitHub存储库中拉取更改并推送本地更改。
如果有任何冲突，未合并的文件将被打开供您解决（或者只需再次推送未解决的冲突 - 这也可以）。
## 设置
你需要什么：
- GitHub 账号
- 从 https://github.com/settings/tokens 获取 GitHub [个人访问令牌](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens)
- 用于存储保险柜的 GitHub 仓库
- 安装了 Git 的设备

![](https://cdn.pkmer.cn/covers/github-sync_2_1.png!pkmer)

安装完插件后，在设置中打开 **GitHub 同步** 部分。按照提示格式填入你的 GitHub 用户名、个人访问令牌和 GitHub 仓库的 URL。如果你的仓库是私有的，请确保你的 PAT 有私有仓库的控制权限。就是这样。
### 可选项

如果您的git二进制文件无法从系统PATH访问（即，如果您打开命令提示符或终端无法使用git），您需要提供其位置。我只在启动Cmder时初始化git，所以我需要输入一个自定义路径，如：`C:/Users/Kevin/scoop/apps/cmder-full/current/vendor/git-for-windows/cmd/git`。

我假设您的保险库目录已经是一个Git仓库，但如果不是的话，您需要先进行`git init`（确保默认分支名称与GitHub仓库上的匹配，例如main）。
## 理念

这个插件是为了个人使用，但我想其他人可能也会觉得有用。这基本上是一个经过美化的脚本 - 代码很小，大约200行。
我保留了一个私人的GitHub存储库用于我的Markdown笔记，我希望能够在Obsidian内部拉取/推送我的笔记，而不必打开命令行运行脚本或设置一个定时自动同步脚本。我不使用Git分支来管理我的笔记，所以这个插件不支持分支。

这个插件使用的Node API可以与任何远程主机一起使用，但我使用GitHub，所以我将整个插件围绕在GitHub上。

移动设备支持可能会在未来加入，取决于我自己有多少需要。

关注我的内容：https://kevch.in/



