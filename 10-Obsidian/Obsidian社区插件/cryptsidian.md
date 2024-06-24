---
uid: 2024052908430520
title: Obsidian 插件：Cryptsidian
tags: ['安全与隐私', '文件管理', 'obsidian插件']
description: 使用密码加密你Obsidian Vault中的所有文件。
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Cryptsidian

> [!Note] 插件名片
> - 插件名称：Cryptsidian
> - 插件作者：triumphantomato
> - 插件说明：使用密码加密你 Obsidian Vault 中的所有文件。
> - 插件分类：[' 安全与隐私 ', ' 文件管理 ', 'obsidian 插件 ']
> - 项目地址：[点我访问](https://github.com/triumphantomato/cryptsidian)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?cryptsidian)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/triumphantomato/cryptsidian/main/README.md)

## 概述

Cryptsidian 是一款 Obsidian 插件，可以使用密码加密 Obsidian vault 中的所有文件。该插件使加密非常简单，用户只需选择一个密码，即可加密包括笔记和附件在内的所有文件。它适用于单设备多用户的情况，比如家庭电脑或共享计算机实验室。该插件只适用于桌面端，已在 OSX 和 Linux 上进行了测试，但应该也可以在 Windows 上运行。需要注意的是，该插件尚未经过独立的安全审计，不适用于关键安全应用。Obsidian API 的未来更改可能会导致插件失效，不保证向前兼容性。插件使用了 `aes-256-ctr` 加密算法，可以在磁盘上原地加密和覆盖文件。密码必须具有足够的熵，但可以通过更改 `hasEnoughEntropy` 函数中所需熵的数量来进行调整。

> [!help]
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交 PR 或者文末留言。

---



