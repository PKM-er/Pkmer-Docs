---
uid: 20230817224055
title: Obsidian 插件：Share as Gist
tags: ['obsidian插件', 'readme']
description: 将Obsidian笔记分享为GitHub.com gist
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Share as Gist

> [!Note] 插件名片
> - 插件名称：Share as Gist
> - 插件作者：timrogers
> - 插件说明：将 Obsidian 笔记分享为 GitHub.com gist
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/timrogers/obsidian-share-as-gist)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsidian-share-as-gist)

## 概述

将 Obsidian 笔记分享为 GitHub.com gist

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/timrogers/obsidian-share-as-gist/main/README.md)

---

## Readme(翻译）

下面是 [[obsidian-share-as-gist]] 插件的自述翻译

“Share as Gist” Obsidian 插件

这个 Obsidian 插件允许你将你的笔记分享为 [GitHub Gists](https://gist.github.com/)。

你可以私下分享你的笔记（即只有链接的人可以看到笔记），也可以公开分享（即笔记在你的个人资料上可见）。

一旦你创建了一个 gist，如果你对笔记进行了更改（例如回应反馈），你可以直接从 Obsidian 更新你现有的 gist。

## 使用方法

1. 安装插件。（目前，您需要手动将其添加到 Obsidian vault 中，但很快将在 Community Plugins 目录中提供。）
2. [创建一个具有`gist`范围的GitHub个人访问令牌](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)，并将其复制到剪贴板。

<img width="636" alt="Screenshot 2022-06-09 at 09 47 43" src="https://user-images.githubusercontent.com/116134/172805660-4e563a93-a042-4aa7-8b48-db0c501aac14.png">

1. 在 Obsidian 中打开“设置”，然后转到“插件选项”下的“Share as Gist”。

<img width="976" alt="Screenshot 2022-07-21 at 09 10 52" src="https://user-images.githubusercontent.com/116134/180163869-4a072203-00e6-4510-81e8-456dd71c5443.png">

1. 将您的访问令牌粘贴到“GitHub.com 访问令牌”框中，然后关闭“设置”。
2. 要分享一个笔记，打开命令面板，然后输入“gist”。您将看到创建公共和私有链接的命令。选择您想要的命令并按 Enter 键。您的 gist 将被创建，并且用于分享的 URL 将添加到剪贴板中。

<img width="770" alt="Screenshot 2022-07-21 at 09 12 16" src="https://user-images.githubusercontent.com/116134/180164154-02817121-e88a-419d-9528-9be58212ed9c.png">

1. 对笔记进行更改，然后再次按照步骤 5 操作。您将被询问是否要更新现有笔记还是创建新笔记。

<img width="781" alt="Screenshot 2022-06-09 at 09 49 00" src="https://user-images.githubusercontent.com/116134/172805957-dbbe8223-8056-4685-aad4-4fd54338c85f.png">

默认情况下，为了使现有的 gist 可以更新，额外的 YAML 前置元数据将添加到您的笔记中。您可以通过禁用“启用创建后更新 gists”设置来关闭此功能。

默认情况下，当分享时，任何 YAML 前置元数据都不会包含在您的 gists 中。您可以通过切换“在 gists 中包含前置元数据”设置来更改此设置。

保护您的 GitHub 个人访问令牌

您的 GitHub 访问令牌将存储在 Obsidian 的“localStorage”中。

这意味着它不会存储在文件中，也不会备份或与您的 Vault 的其余部分同步。但是，其他 Obsidian 插件理论上可以访问它。

为了您的安全起见，您应该确保将个人访问令牌的权限设置为最低权限 - 只需“gist”范围即可。这意味着您的令牌将无法访问您的代码或其他敏感数据。

## 贡献

1. 将此仓库克隆到 Obsidian 保险库的 `.obsidian/plugins` 目录中。
2. 导航到刚刚克隆的 `obsidian-share-as-gist` 目录。
3. 运行 `npm i` 安装依赖项。
4. 运行 `npm run dev` 启动一个进程，在您进行更改时自动构建插件。
5. 进行更改，并在 Obsidian 中进行测试。当您进行更改时，您将需要从“社区插件”屏幕手动重新加载插件。
6. 如果您有权限或自己的分支，请将更改推送到仓库，并创建一个拉取请求。

## 发布

1. 确定下一个版本号。我们使用 [语义化版本控制](https://semver.org/)。
2. 在 `CHANGELOG.md` 中添加一个条目，描述你的更改。
3. 更新 `package.json` 中的版本号。
4. 更新 `versions.json`，定义你的插件与 Obsidian 的最低兼容版本。通常情况下，复制文件中的最后一个条目即可。
5. 运行 `npm run version`。
6. 提交 `manifest.json` 和 `package.json`。在提交消息中，将版本号作为标题（例如 `1.0.1`），并将你的更改日志条目复制到正文中。
7. 使用版本号为提交打上标签，例如 `git tag -a 1.0.1 -m '1.0.1'`。
8. 推送你的更改，包括标签。
9. GitHub Actions 将自动运行一个工作流来构建和发布一个版本。



