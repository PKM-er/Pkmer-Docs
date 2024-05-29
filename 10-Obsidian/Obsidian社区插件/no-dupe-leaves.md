---
uid: 2024052908544565
title: Obsidian 插件：No Dupe Leaves
tags: ['编辑工具', '效率工具', '自定义命令', 'obsidian插件']
description: 不要重新打开已经打开的笔记
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：No Dupe Leaves

> [!Note] 插件名片
> - 插件名称：No Dupe Leaves
> - 插件作者：Simon Cambier
> - 插件说明：不要重新打开已经打开的笔记
> - 插件分类：[' 编辑工具 ', ' 效率工具 ', ' 自定义命令 ', 'obsidian 插件 ']
> - 项目地址：[点我访问](https://github.com/scambier/obsidian-no-dupe-leaves)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?no-dupe-leaves)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/scambier/obsidian-no-dupe-leaves/master/README.md)

![No Dupe Leaves](https://cdn.pkmer.cn/covers/no-dupe-leaves.png!pkmer)

## 概述

Obsidian "No Dupe Leaves" 插件避免打开已经存在的笔记，解决了 Obsidian 默认行为会在打开笔记时替换旧笔记，即使新笔记已经在另一个窗格中打开的问题。该插件在尽可能避免打开重复笔记的同时，仍然尊重所有“在新窗格中强制打开”的指令。用户可以通过中键点击链接等方式强制打开新窗格。该插件修改了 Obsidian 的默认行为，通过覆盖公共函数 `openLinkText()` 实现。插件的功能简洁实用，适合需要在 Obsidian 中管理多个笔记时避免重复打开的用户使用。

> [!help]
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交 PR 或者文末留言。

---



