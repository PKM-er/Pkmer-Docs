---
uid: 2023120719394843
title: Obsidian 插件：【Readme】Open vault in VSCode
tags: ['第三方工具集成', 'obsidian插件', 'readme']
description: Ribbon按钮和命令以Visual Studio Code工作区打开保险库
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】Open vault in VSCode

> [!Note] 插件名片
> - 插件名称：Open vault in VSCode
> - 插件作者：NomarCub
> - 插件说明：Ribbon 按钮和命令以 Visual Studio Code 工作区打开保险库
> - 插件分类：[' 第三方工具集成 ', 'obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/NomarCub/obsidian-open-vscode)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?open-vscode)

## 概述

Ribbon 按钮和命令以 Visual Studio Code 工作区打开保险库

![Open vault in VSCode](https://cdn.pkmer.cn/covers/open-vscode.gif)

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/NomarCub/obsidian-open-vscode/master/README.md)
>

---

## Readme(翻译）

下面是 [[open-vscode]] 插件的自述翻译

# 在 VSCode 中打开

这个插件为 [Obsidian](https://obsidian.md/) 创建了一个带有一个按钮和两个命令，用于将你的 vault 作为 Visual Studio Code 工作区打开：

- `open-vscode`：使用 `child_process` 启动 VSCode 并使用 `code` 命令。目前，这是绑定到按钮的命令。
- `open-vscode-via-url`：使用 `vscode://` URL 打开 VSCode（Windows 用户，请参阅 [关于此命令的URL命令的注意事项](#caveats-regarding-the-url-command-for-windows-users)）

它的功能可能现在已经被 [Shell commands](https://github.com/Taitava/obsidian-shellcommands) 和 [Customizable Sidebar](https://github.com/phibr0/obsidian-customizable-sidebar)（或 [Buttons](https://github.com/shabegom/buttons)）插件所取代，但它将在可预见的未来继续维护。

你可以使用 VSCode 来进行各种与 vault 相关的操作，例如使用 git 进行版本控制，使用 [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) 进行 markdown 格式化，使用 [markdownlint](https://marketplace.visualstudio.com/items?itemName=DavidAnson.vscode-markdownlint) 进行 linting，[批量格式化文件](https://marketplace.visualstudio.com/items?itemName=jbockle.jbockle-format-files) 等等。

![video showcase](https://cdn.pkmer.cn/covers/open-vscode_1_0.gif)

这些图标适用于明亮和暗黑模式。

![light and dark](https://cdn.pkmer.cn/covers/open-vscode_1_1.gif)

你也可以将其作为命令使用并为其分配快捷键。你可以在设置中禁用按钮。

![command](https://cdn.pkmer.cn/covers/open-vscode_1_2.png!pkmer)

## 设置

- **显示功能区图标**
- **功能区通过 `code` 打开**（也可以通过 URL 方法打开）

### 执行 `code` 命令的模板

您可以使用 [提供的命令行参数](https://code.visualstudio.com/docs/editor/command-line) 来自定义打开 VSCode 的命令。这样，您可以在理论上启动任何您设置的命令，所以请谨慎操作。潜在的用例包括打开带有 `.code-workspace` 文件的工作区（例如用于 Dendron），打开特定的文件、文件夹等。

请注意，在 MacOS 上，需要提供 VSCode 可执行文件的完整路径（通常为 "/usr/local/bin/code"）。

您可以使用以下变量：`{{vaultpath}}`（绝对路径），`{{filepath}}`（相对路径）。

默认模板是 `code "{{vaultpath}}" "{{vaultpath}}/{{filepath}}"`，它会在工作区中打开当前文件（如果有的话），该工作区是 vault 的根文件夹。例如，这将在您的 shell 中扩展为 `code "C:\Users\YourUser\Documents\vault" "C:\Users\YourUser\Documents\vault/Note.md"`。

### `open-vscode-via-url` 的设置

在某些系统上，这种方法可能比使用 `child_process` 更快。

- **打开文件**

  打开当前文件而不是 Obsidian vault 的根目录。

- **VSCode 工作区路径**

  默认为 {{vaultpath}} 模板变量。如果你更喜欢使用 [多根工作区文件](https://code.visualstudio.com/docs/editor/workspaces#_multiroot-workspaces)，你可以将其设置为一个 ".code-workspace" 文件的绝对路径。

- **使用 `vscode-insiders://` URL 打开 VSCode**

第一次使用 URL 方法打开时，由于安全原因，VSCode 会显示一个确认对话框（你只需按回车键即可）。有关更多信息，请参阅 [此问题](https://github.com/microsoft/vscode/issues/95670)。

关于 Windows 用户使用 URL 命令的注意事项

简而言之，我们建议 Windows 用户优先使用 `open-vscode` 命令（而不是 URL 命令）。

由于 VSCode 的安全更新，通过 URL 打开 VSCode 的用户体验存在一些已知问题！

在 Windows 上，通过 URL 打开时，会提示您允许 VSCode 访问文件。目前，VSCode 没有选项来将安全位置（例如您的 Obsidian vault）加入白名单，因此您每次都会看到这个对话框☹️。

更糟糕的是，如果您通过 URL 打开，并且已经切换了“打开文件”设置，那么 VSCode 将尝试打开*第二个*VSCode 实例，并警告存在另一个正在运行但未响应的 Code 实例。

如果您受到此问题的影响，请考虑关注并投票以下 VSCode 问题：

- [Prompt users when opening vscode://file/... URIs · Issue #95252 · microsoft/vscode](https://github.com/microsoft/vscode/issues/95252)
- [URL protocol: confirmation dialog · Issue #95670 · microsoft/vscode](https://github.com/microsoft/vscode/issues/95670)

## 安装

您可以通过 Obsidian 应用程序中的 Community Plugins 选项卡安装插件。

[这里](https://obsidian.md/plugins?id=copy-url-in-preview) 是 Obsidian 的 Community Plugins 网站上的插件。

您还可以通过将发布版本复制到 `.obsidian/plugins/open-vscode` 文件夹中手动安装插件。

## 开发

该插件遵循 [Obsidian示例插件](https://github.com/obsidianmd/obsidian-sample-plugin) 的结构，请在那里查看更多详细信息。

欢迎贡献。

如果已安装 [pjeby/hot-reload](https://github.com/pjeby/hot-reload)，并且已激活并注册了 hot-reload 的 open-vscode，则会激活额外的日志记录和 DX 命令以刷新设置。

## 鸣谢

由 [NomarCub](https://github.com/NomarCub) 开发的原始插件。

如果你喜欢这个插件，可以在 GitHub 上赞助我：[![Sponsor NomarCub](https://img.shields.io/static/v1?label=Sponsor%20NomarCub&message=%E2%9D%A4&logo=GitHub&color=%23fe8e86)](https://github.com/sponsors/NomarCub)，或者在 PayPal 上赞助我：[![Paypal](https://img.shields.io/badge/paypal-nomarcub-yellow?style=social&logo=paypal)](https://paypal.me/nomarcub)。

[ozntel](https://github.com/ozntel) 通过 [Toggle ribbon setting](https://github.com/NomarCub/obsidian-open-vscode/pull/1) 做出了贡献。

[ptim](https://github.com/ptim) 通过 [UseURL: open file in workspace](https://github.com/NomarCub/obsidian-open-vscode/pull/5) [feature](https://github.com/NomarCub/obsidian-open-vscode/pull/7) 和重构做出了贡献。

感谢 [DEVONlink](https://github.com/ryanjamurphy/DEVONlink-obsidian) 插件的制作者，它为在 Obsidian 中使用功能图标提供了很好的起点。

图标来自 [Simple Icons](https://simpleicons.org/?q=visual-studio-code)（[SVG](https://simpleicons.org/icons/visualstudiocode.svg)）。
