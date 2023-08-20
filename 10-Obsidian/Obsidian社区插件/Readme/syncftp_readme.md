---
uid: 2023082011361423
title: Obsidian 插件：【Readme】SyncFTP
tags: ['obsidian插件', 'readme']
description: 允许用户连接到SFTP并将文件更改推送/拉取到其中。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】SyncFTP

> [!Note] 插件名片
> - 插件名称：SyncFTP
> - 插件作者：Alex Donnan
> - 插件说明：允许用户连接到SFTP并将文件更改推送/拉取到其中。
> - 插件分类：['obsidian插件', 'readme']
> - 项目地址：[点我访问](https://github.com/alex-donnan/SyncFTP)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?syncftp)

## 概述

允许用户连接到SFTP并将文件更改推送/拉取到其中。



> [!tip] 原文出处
> 
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/alex-donnan/SyncFTP/master/README.md)
> 

---

## Readme(翻译）

下面是 [[syncftp]] 插件的自述翻译


# SyncFTP

这个 Obsidian.md 插件允许用户将文件同步到他们的个人 FTP 服务器。

该插件依赖于 [ssh2-sftp-client](https://www.npmjs.com/package/ssh2-sftp-client) 和 [socks](https://www.npmjs.com/package/socks) 来实现安全的文件传输。
### 使用
安装完成后，SyncFTP将添加一个额外的设置选项卡。在那里，您需要提供以下信息：
- 主机URL
- 主机端口
- 用户名
- 密码
- SFTP上保险库目录的路径：保险库目录将是所有保险库的基本目录。
- 通知切换：某些通知将保留，但冗长的信息通知将被禁用。
- 打开时下载切换：允许您在打开时从SFTP下载工作。

如果您想使用代理，请填写以下设置：
- 代理URL
- 代理端口

当您希望同步时，您可以使用以下方法将文件推送或拉取到SFTP：
1. 左侧工具栏上的图标（向上和向下箭头）
2. 命令（CTRL-P），允许您设置所需的键盘快捷键

此过程会对SFTP上的文件进行破坏性操作，并将本地文件移动到您的.trash文件夹中。
如果您有任何问题或请求，请在此存储库中打开一个GitHub问题！
### 许可证
该项目采用[MIT](https://en.wikipedia.org/wiki/MIT_License)许可证。



