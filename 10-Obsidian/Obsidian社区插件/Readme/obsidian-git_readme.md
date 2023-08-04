---
uid: 2023080322232314
title: Obsidian 插件：【Readme】Obsidian Git
tags: ['备份', 'obsidian插件', 'readme']
description: 可以通过与 GitHub 等其他远程存储库集成，实现版本控制、内容同步及备份。Obsidian Git 支持多人协作，可以在团队中共享笔记，可快速跟踪文档的历史修改情况，并能够进行版本回滚。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Obsidian Git

> [!Note] 插件名片
> - 插件名称：Obsidian Git
> - 插件作者：Vinzent, (Denis Olehov)
> - 插件说明：可以通过与 GitHub 等其他远程存储库集成，实现版本控制、内容同步及备份。Obsidian Git 支持多人协作，可以在团队中共享笔记，可快速跟踪文档的历史修改情况，并能够进行版本回滚。
> - 插件分类：[' 备份 ', 'obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/denolehov/obsidian-git)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsidian-git)

## 概述

可以通过与 GitHub 等其他远程存储库集成，实现版本控制、内容同步及备份。Obsidian Git 支持多人协作，可以在团队中共享笔记，可快速跟踪文档的历史修改情况，并能够进行版本回滚。

![Obsidian Git](https://cdn.pkmer.cn/covers/obsidian-git.png!pkmer)

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/denolehov/obsidian-git/master/README.md)
>

---

## Readme(翻译）

下面是 [[obsidian-git]] 插件的自述翻译

# Obsidian Git

这是一个插件，允许你将你的 [Obsidian.md](https://obsidian.md) vault 备份到远程的 Git 仓库（比如 GitHub 上的私有仓库）。

要求、安装步骤（包括移动设备的设置）、技巧、常见问题等更多信息可以在 [文档](https://publish.obsidian.md/git-doc) 中找到。

移动设备用户请参阅下面的 [Mobile](#mobile) 部分。

## 突出功能

- 每隔 X 分钟自动备份保险库
- 在 Obsidian 启动时从远程仓库拉取更改
- 为从远程仓库拉取/推送更改分配热键
- 通过 Git 子模块管理不同的仓库（在设置中启用此功能后）
- 源代码控制视图允许您对单个文件进行暂存和提交。可以使用“打开源代码控制视图”命令打开它。
- 历史视图显示提交和其更改的文件。基本上是一个集成的“git log”。可以使用“打开历史视图”命令打开它。
- 要查看文件的历史记录，我强烈推荐您使用 [Version History Diff](obsidian://show-plugin?id=obsidian-version-history-diff) 插件。

### 源代码控制视图

![源代码控制视图](https://raw.githubusercontent.com/denolehov/obsidian-git/master/images/source-view.png)

### 历史视图

![历史视图](https://raw.githubusercontent.com/denolehov/obsidian-git/master/images/history-view.png)

## 可用命令

- 变更
    - `列出变更文件`：在模态框中列出所有变更文件
    - `打开差异视图`：打开当前文件的差异视图
    - `暂存当前文件`
    - `取消暂存当前文件`
- 提交
    - `提交所有变更`：仅提交所有变更而不推送
    - `提交所有变更并添加自定义消息`：与上述相同，但附带自定义消息
    - `提交已暂存文件`：仅提交已暂存的文件
    - `提交已暂存文件并添加自定义消息`：与上述相同，但附带自定义消息
- 备份
    - `创建备份`：提交所有变更。如果启用了“备份时推送”设置，还会推送提交。
    - `创建备份并添加自定义消息`：与上述相同，但附带自定义消息
    - `创建备份并关闭`：与“创建备份”相同，但如果在桌面上运行，将关闭 Obsidian 窗口。在移动设备上不会退出 Obsidian 应用程序。
- 远程
    - `推送`
    - `拉取`
    - `编辑远程仓库`
    - `移除远程仓库`
    - `克隆现有远程仓库`：打开对话框，提示输入 URL 和身份验证信息以克隆远程仓库
    - `在GitHub上打开文件`：在浏览器窗口中打开当前文件在 GitHub 上的文件视图。注意：仅适用于桌面版
    - `在GitHub上打开文件历史记录`：在浏览器窗口中打开当前文件在 GitHub 上的文件历史记录。注意：仅适用于桌面版
- 本地
    - `初始化新仓库`
    - `创建新分支`
    - `删除分支`
    - `警告：删除仓库`
- 源代码控制视图
    - `打开源代码控制视图`：打开侧边栏显示 [源代码控制视图](#sidebar-view)
    - `编辑.gitignore`
    - `将文件添加到.gitignore`：将当前文件添加到.gitignore 中

## 桌面

身份验证可能需要额外的设置。请参阅 [身份验证文档](https://publish.obsidian.md/git-doc/Authentication) 了解更多信息。

### Linux 上的 Obsidian

- ⚠ 不支持 Snap。
- ⚠ 不推荐使用 Flatpak，因为它无法访问所有系统文件。

请改用 AppImage 代替（[Linux安装指南](https://publish.obsidian.md/git-doc/Installation#Linux)）

移动设备

### 移动版本的限制

我正在使用 [isomorphic-git](https://isomorphic-git.org/)，它是一个在 JavaScript 中重新实现的 Git，因为在 Android 或 iOS 上无法使用原生的 Git。

- 不支持 SSH 身份验证（[isomorphic-git问题](https://github.com/isomorphic-git/isomorphic-git/issues/231)）
- 由于内存限制，仓库大小受限
- 不支持变基合并策略
- 不支持子模块

### 移动设备上的性能

> **警告**
> 根据您的设备和可用的空闲 RAM，Obsidian 在克隆/拉取时可能会崩溃。我不知道如何修复这个问题。如果您遇到这种情况，我不得不承认这个插件对您无效。因此，对任何问题进行评论或创建新问题都无法帮助您。我很抱歉。

**设置：** iPad Pro M1，使用 [3000个文件的仓库](https://github.com/Vinzent03/obsidian-git-stress-test)（从 [10000个Markdown文件](https://github.com/Zettelkasten-Method/10000-markdown-files) 中减少而来）

初始克隆耗时 0m25s。之后，最耗时的部分是检查整个工作目录中的文件更改。在这个设置上，检查所有文件以进行更改的耗时为 03m40s。其他命令如拉取、推送和提交非常快（1-5 秒）。

如果您有一个大型的仓库/存储库，并且想在移动设备上快速工作，最快的方法是将单个文件加入暂存区，并只提交已暂存的文件。

## 联系方式

Line Authoring 功能由 [GollyTicker](https://github.com/GollyTicker) 开发，所以任何问题最好向他咨询。

如果您有任何反馈或问题，请随时通过 GitHub 的问题页面或在 [Obsidian Discord 服务器](https://discord.com/invite/veuWUTm) 上联系 `@Vinadon`。

该插件最初由 [denolehov](https://github.com/denolehov) 开发。自 2021 年 3 月以来，[Vinzent03](https://github.com/Vinzent03) 正在开发该插件。

如果您想支持我（[Vinzent03](https://github.com/Vinzent03)），可以在 Ko-fi 上支持我。

[![ko-fi](https://ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/F1F195IQ5)
