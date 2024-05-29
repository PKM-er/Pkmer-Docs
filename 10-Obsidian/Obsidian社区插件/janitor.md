---
uid: 2024052909024130
title: Obsidian 插件：Janitor
tags: ['任务管理', '文件管理', '效率工具', 'obsidian插件']
description: 在Obsidian Vault上执行清理任务
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Janitor

> [!Note] 插件名片
> - 插件名称：Janitor
> - 插件作者：Gabriele Cannata
> - 插件说明：在 Obsidian Vault 上执行清理任务
> - 插件分类：[' 任务管理 ', ' 文件管理 ', ' 效率工具 ', 'obsidian 插件 ']
> - 项目地址：[点我访问](https://github.com/Canna71/obsidian-janitor)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?janitor)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/Canna71/obsidian-janitor/master/README.md)

![Janitor](https://cdn.pkmer.cn/covers/janitor.png!pkmer)

## 概述

Janitor 插件是一个用于清理 Obsidian vault 的工具，可以执行以下任务：

1. 删除孤立文件：即未在任何地方引用的媒体或附件文件，包括在 frontmatter 中查找 `annotation-target` 等信息。
2. 删除空文件：即内容为空或仅包含空白字符（换行符、制表符等）的文件。
3. 删除大文件：用户可以设置文件大小限制，Janitor 会提示是否删除大文件。默认情况下，即使禁用了“询问确认”设置，Janitor 也会提示是否删除大文件。
4. 删除过期笔记：Janitor 会在 frontmatter 中查找可配置的属性，以设置笔记的过期日期。用户还可以使用工具命令轻松设置笔记的过期日期。
5. 排除文件：Janitor 可以排除 Obsidian 排除文件（设置 ->文件和链接 ->排除文件），用户还可以根据文件扩展名或路径等指定不同的排除条件。

用户可以在启动时运行 Janitor，并根据提示对文件进行删除操作（移动到 Obsidian 的回收站、操作系统的回收站或永久删除）。可以通过功能菜单按钮或命令启动 Janitor 扫描。

> [!help]
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交 PR 或者文末留言。

---



