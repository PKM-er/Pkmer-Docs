---
uid: 2024052909055528
title: Obsidian 插件：Open vault in VSCode
tags: ['第三方工具集成', '文件管理', '编辑工具', 'obsidian插件']
description: Ribbon按钮和命令以Visual Studio Code工作区打开保险库
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Open vault in VSCode

> [!Note] 插件名片
> - 插件名称：Open vault in VSCode
> - 插件作者：NomarCub
> - 插件说明：Ribbon 按钮和命令以 Visual Studio Code 工作区打开保险库
> - 插件分类：[' 第三方工具集成 ', ' 文件管理 ', ' 编辑工具 ', 'obsidian 插件 ']
> - 项目地址：[点我访问](https://github.com/NomarCub/obsidian-open-vscode)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?open-vscode)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/NomarCub/obsidian-open-vscode/main/README.md)

![Open vault in VSCode](https://cdn.pkmer.cn/covers/open-vscode.gif!pkmer)

## 概述

Obsidian 插件 "Open in VSCode" 为用户提供了一个在 Obsidian 中将 Vault 打开为 Visual Studio Code 工作区的功能。该插件通过添加一个功能按钮和两个命令实现：

- `open-vscode`：使用 `child_process` 启动 VSCode，并使用 `code` 命令打开 Vault。目前，该命令绑定到功能按钮上。
- `open-vscode-via-url`：使用 `vscode://` URL 打开 VSCode。

该插件的功能可能已经被其他插件（如 [Shell commands](https://github.com/Taitava/obsidian-shellcommands) 和 [Customizable Sidebar](https://github.com/phibr0/obsidian-customizable-sidebar)）取代，但它将在可预见的未来继续维护。

你可以使用 VSCode 进行多种与 Vault 相关的操作，例如使用 Git 进行版本控制、使用 [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) 进行 Markdown 格式化、使用 [markdownlint](https://marketplace.visualstudio.com/items?itemName=DavidAnson.vscode-markdownlint) 进行代码检查、[批量格式化文件](https://marketplace.visualstudio.com/items?itemName=jbockle.jbockle-format-files) 等等。

该插件支持浅色和深色模式，并且可以通过命令和快捷键来使用。你也可以在设置中禁用功能按钮。

安装方法：可以通过 Obsidian 应用程序中的 Community Plugins 选项卡安装插件，也可以手动将发布版本复制到 `.obsidian/plugins/open-vscode` 文件夹中。

注意：由于 VSCode 的安全更新，Windows 用户使用 URL 命令打开 VSCode 时可能会遇到一些已知问题。建议 Windows 用户优先使用 `open-vscode` 命令。

> [!help]
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交 PR 或者文末留言。

---



