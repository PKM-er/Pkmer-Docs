---
uid: 2024022122524607
title: Obsidian 插件：【Readme】Vim IM Control
tags: ['obsidian插件', 'readme']
description: 黑曜石插件，用于在“插入离开”和“插入进入”时切换输入法。支持macOS、Windows和Linux。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】Vim IM Control

> [!Note] 插件名片
> - 插件名称：Vim IM Control
> - 插件作者：hideakitai
> - 插件说明：黑曜石插件，用于在“插入离开”和“插入进入”时切换输入法。支持 macOS、Windows 和 Linux。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/hideakitai/obsidian-vim-im-control)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?vim-im-control)

## 概述

黑曜石插件，用于在“插入离开”和“插入进入”时切换输入法。支持 macOS、Windows 和 Linux。

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/hideakitai/obsidian-vim-im-control/master/README.md)
>

---

## Readme(翻译）

下面是 [[vim-im-control]] 插件的自述翻译

# 为 Obsidian 提供的 Vim 输入法控制

在 Vim 模式下，控制输入法（IM）的 `InsertLeave` 和 `InsertEnter`。支持 macOS、Windows 和 Linux。

## 用法

您可以为每个平台设置以下四个设置。如果您想使用 `InsertEnter` 命令，还应设置 `Get Current IM` 命令以恢复输入法的状态。如果其中任何一个留空，`InsertEnter` 将被跳过。

默认设置如下所示。对于默认设置，macOS 和 Windows 使用 [`im-select`](https://github.com/daipeihust/im-select)，Linux 使用 [`fcitx5-remote`](https://github.com/fcitx/fcitx5)。但您可以根据需要使用任何输入法控制器。

注意：安装此插件后，请重新启动 Obsidian。

```
IM控制器路径："/opt/homebrew/bin",
在插入离开时："im-select com.apple.keylayout.ABC",
在插入进入时："im-select {{im}}",
获取当前输入法："im-select",
```

```
IM控制器路径：“%USERPROFILE%\\AppData\\Local\\bin”，
在插入离开时：“im-select.exe 1033”，
在插入进入时：“im-select.exe {{im}}”，
获取当前IM：“im-select.exe”，
```

### Linux

**fcitx5-remote** (default)

```
IM控制器路径："/usr/bin",
在插入模式离开时： "fcitx5-remote -c",
在插入模式进入时： "fcitx5-remote -o",
获取当前输入法： "fcitx5-remote",
```

**fcitx-remote**

```
IM控制器路径："/usr/bin/fcitx-remote"
在插入模式离开时： "fcitx-remote -c"
在插入模式进入时： "fcitx-remote -o"
获取当前输入法： "fcitx-remote"
```

**ibus**

```
IM控制器路径："/usr/bin/ibus"
在插入模式离开时： "ibus engine xkb:us::eng"
在插入模式进入时： "ibus engine {{im}}"
获取当前输入法： "ibus engine"
```

### 其他配置

**异步开关**

是否异步切换 IM。默认值：`true`

**状态栏消息**

是否在状态栏上显示错误/警告消息。默认值：`false`

## 限制

对于 Linux 系统，该插件**不支持**从 Snap 或 Flatpak 安装的 Obsidian。请尝试使用 `AppImage` 或 `deb` 文件。

## 相关插件

- [Obsidian Vimrc Support Plugin](https://github.com/esm7/obsidian-vimrc-support)
- [Obsidian Vim IM Select Plugin](https://github.com/ALONELUR/vim-im-select-obsidian)
- [Obsidian Vim IM Switch Plugin](https://github.com/yuanotes/obsidian-vim-im-switch-plugin)

## 许可证

MIT
