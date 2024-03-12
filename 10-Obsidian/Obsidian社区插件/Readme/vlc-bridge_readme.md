---
uid: 20240312193744
title: Obsidian 插件：【Readme】VLC Bridge
tags: ['obsidian插件', 'readme']
description: 使用VLC播放器记录视频/电影笔记，包括时间戳链接和快照。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】VLC Bridge

> [!Note] 插件名片
> - 插件名称：VLC Bridge
> - 插件作者：zuluwi
> - 插件说明：使用 VLC 播放器记录视频/电影笔记，包括时间戳链接和快照。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/zuluwi/obsidian-vlc-bridge)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?vlc-bridge)

## 概述

使用 VLC 播放器记录视频/电影笔记，包括时间戳链接和快照。

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/zuluwi/obsidian-vlc-bridge/master/README.md)

---

## Readme(翻译）

下面是 [[vlc-bridge]] 插件的自述翻译

<div align="center">

# Obsidian VLC Bridge



[![GitHub Release](https://img.shields.io/github/v/release/zuluwi/obsidian-vlc-bridge?style=for-the-badge&logo=obsidian&labelColor=%237c3aed&color=%23e7e6e3)](https://github.com/zuluwi/obsidian-vlc-bridge/releases/latest)

[![GitHub License](https://img.shields.io/github/license/zuluwi/obsidian-vlc-bridge?style=for-the-badge&labelColor=%23eb0029&color=%23e7e6e3)](https://github.com/zuluwi/obsidian-vlc-bridge/blob/master/LICENSE)

</div>

This plugin

- Starts VLC Player with the [Web Interface](https://wiki.videolan.org/Documentation:Modules/http_intf/#VLC_2.0.0_and_later) active and opens video addresses written in Obsidian URI format at the specified time,
- Pastes timestamped link or snapshot from existing video into note
- Allows you to control the player by sending [request](https://code.videolan.org/videolan/vlc-3.0/-/blob/master/share/lua/http/requests/README.txt) to the VLC Web Interface with commands,

so you can take notes from the video without losing focus from the Obsidian Editor.

<https://github.com/zuluwi/obsidian-vlc-bridge/assets/111116092/296c6878-232f-48ee-82a4-dd5673ddb131>

## 安装

这个插件不是官方社区插件，所以你可以手动安装它，或者使用 [BRAT](https://github.com/TfTHacker/obsidian42-brat) 插件。

### 手册

1. 下载 [最新版本](https://github.com/zuluwi/obsidian-vlc-bridge/releases/latest)
2. 在 `<vault_location>/.obsidian/plugins` 下创建一个新文件夹
3. 将下载的 `main.js` 和 `manifest.json` 文件移动到此文件夹中
4. 关闭 `设置 → 社区插件 → 限制模式` 并在 `已安装插件` 中启用**VLC Bridge**。

### 使用 BRAT

1. 通过打开 `obsidian://show-plugin?id=obsidian42-brat` 链接或从 `设置 → 社区插件 → 浏览` 来安装和激活**BRAT**
2. 使用 `添加用于测试的测试版插件` 命令并输入 `zuluwi/obsidian-vlc-bridge`，或通过打开链接 `obsidian://brat?plugin=zuluwi/obsidian-vlc-bridge` 来安装**VLC Bridge**

## 用法

> [!important]
> 要使用该插件，您必须首先在插件设置中选择安装 VLC 播放器的位置中的 `vlc.exe`，然后设置一个端口号

### 打开视频

- 使用 `选择要用VLC播放器打开的文件` 命令或通过侧边栏中的图标单击
- 通过单击您使用插件创建的时间戳链接
- 或者通过将视频拖放到您已经用插件打开的播放器中

您可以通过插件控制以这些方式打开的视频的 VLC 播放器。

> [!tip]
> 如果您希望在计算机上自己打开 VLC 时能够使用插件，必须将您在插件设置中设置的参数保存在 VLC 首选项中
>
> 1. 打开 `工具 → 首选项 → 在左下角选择“显示设置”中的“全部” → 界面 → 主界面`，勾选 `Web`，然后在 `主界面 → Lua` 中将密码设置为 `Lua HTTP` 头中的 `vlcPassword`
> 2. 在左下角选择“显示设置”中的“简单” → 视频 → 视频快照，并将 `目录` 设置为您在插件设置中设置的文件夹
> 3. VLC 播放器使用端口 `8080`，这在首选项中无法更改，因此您必须在插件设置中将端口设置为 `8080`。

### 添加时间戳链接

打开命令面板（Ctrl+P），使用命令 `粘贴当前视频的时间戳链接` 将当前视频的时间戳链接粘贴到光标所在的编辑器中。

链接语法：

```
[{{时间戳链接文本}}](obsidian://vlcBridge?mediaPath=<文件URI>&subPath=<文件URI或绝对路径>&subDelay=<秒数>&timestamp=<秒数或百分比值>)
```

> [!tip]
>
> - 在设置中勾选 `粘贴时间戳时暂停视频`
> - 您可以使用 `时间戳偏移` 设置添加延迟
> - 在 `链接模板` 设置中，您可以设置 `时间戳链接文本` 和如何粘贴链接的模板
如果您想在视频链接中包含字幕链接，而不是将字幕拖到 VLC 播放器中，请使用“添加字幕”命令选择文件并将其添加到视频中，否则插件将无法访问播放器中的现有字幕。

### 添加快照嵌入

打开命令面板（Ctrl+P），使用 `从视频中拍摄并粘贴快照` 命令，在编辑器中光标所在位置粘贴当前视频的快照，并附带时间戳链接。

> [!tip]
>
> - 在设置中勾选 `粘贴快照时暂停视频` 选项
> - 如果想要使用时间戳链接打开快照中的确切帧，请在设置中启用 `在链接中使用百分比位置而非秒作为时间戳值` 选项
> - 在 `链接模板` 设置中，您可以设置 `快照链接文本` 和一个用于粘贴快照嵌入的模板

### 使用插件参数运行 Syncplay

[Syncplay](https://github.com/Syncplay/syncplay?tab=readme-ov-file#syncplay) 是一个连接到在线服务器的应用程序，用于打开首选播放器并同步连接的播放器。通过从插件设置中选择 `Syncplay.exe` 并点击 **Start Syncplay** 按钮，您可以启动 Syncplay，使插件与应用程序将打开的 VLC 播放器进行交互。

> [!tip]
> 创建一个带有网址 `obsidian://vlcBridge-runSyncplay` 的快捷方式来打开 Obsidian，然后启动 Syncplay

## 归属

- [Media Extended](https://github.com/PKM-er/media-extended)
- [Obsidian VLC Control](https://github.com/prehensileBBC/obsidan-vlc-control)
- [Syncplay](https://github.com/Syncplay/syncplay)
- [Obsidian Kanban](https://github.com/mgmeyers/obsidian-kanban)（用于本地化处理程序）



