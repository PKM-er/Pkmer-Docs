---
uid: 2024042221332022
title: Obsidian 插件：【Readme】Password Protect
tags: ['obsidian插件', 'readme']
description: Password protect your notes.
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】Password Protect

> [!Note] 插件名片
> - 插件名称：Password Protect
> - 插件作者：Aspharmyx
> - 插件说明：Password protect your notes.
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/Aspharmyx/obsidian-password-protect)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?password-protect)

## 概述

Password protect your notes.

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/Aspharmyx/obsidian-password-protect/master/README.md)

---

## Readme(翻译）

下面是 [[password-protect]] 插件的自述翻译

# 黑曜石密码保护插件

使用此插件，您可以为不同的笔记和文件夹设置密码，以确保您的日记安全。

隐藏的笔记只有在每个会话输入密码后才能看到。

此插件会更改文件的扩展名，以使它们即使在搜索和图形视图中也不可见。这些文件并未加密，可以在系统资源管理器中使用笔记编辑器阅读，因此并非 100% 安全，但可以防止偶然查看者。

我将尝试加密文件并查看其是否能够一致运行。

### 解决问题

如果您遇到问题并希望将文件扩展名更改为.md，您可以使用命令“密码保护：将所有隐藏文件转换为 Markdown”。当然，这个命令需要密码。

### 同步文件

我使用的一个解决方法是忽略我的隐藏文件夹中的 .md 文件。我使用 syncthing 来同步我的桌面和手机，只要你不同时尝试编辑隐藏文件，它就能正常工作。

这是我 Journal 文件夹的忽略模式的样子：

**/Journal/*.md**

我不确定它在 Obsidian 同步中是如何工作的。我可以发布一个版本，在该版本中隐藏文件而不更改扩展名，但这样文件在搜索和图形视图中是可见的。

### 感谢

Oliver 为 [File Hider](https://github.com/Oliver-Akins/file-hider) 插件。该插件使用了一些代码，比如用于隐藏文件夹和上下文菜单。

### 支持