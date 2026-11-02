---
uid: 1793625606714001
title: "Obsidian 插件：Backlinker"
tags: ["模板与链接处理", "日历与时间", "效率工具", "obsidian插件"]
description: "Quick capture into today's daily note, with links to the people, companies and topics already in your vault. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Backlinker

> [!Note] 插件名片
> - 插件名称：Backlinker
> - 插件作者：Owen Alderson
> - 插件说明：Quick capture into today's daily note, with links to the people, companies and topics already in your vault. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['模板与链接处理', '日历与时间', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/owen-alderson/backlinker)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?backlinker)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/owen-alderson/backlinker/master/README.md)



## 概述

Backlinker 是一款命令行工具，旨在解决在终端中快速记录信息并自动关联 Obsidian 笔记库的痛点。它允许用户通过简单的 `bl` 命令，将一行文字直接写入当天的日记笔记，并自动识别文本中的人名、公司或主题，将其转换为指向库内现有笔记的双向链接。这意味着你无需打开 Obsidian 界面，也无需手动输入繁琐的括号语法，即可在终端中完成带有完整链接结构的笔记捕获。

典型场景包括日常快速记录与任务管理。例如，在终端输入 `bl "coffee with Maya about the Lumen raise"`，插件会自动在日记中生成带时间戳的条目，并将 "Maya" 和 "Lumen" 链接到对应的笔记。此外，它支持任务捕获，如 `bl -t "send Jonas the deck fri"`，会自动生成带有截止日期（周五）的任务项，并正确链接到 "Jonas" 的笔记，方便后续在任务插件中追踪。

相比同类插件，Backlinker 的核心特色在于其“零配置”与“高安全性”。它直接读取 Obsidian 的库列表和日记设置，无需额外配置文件夹或日期格式。在链接机制上，它严格遵循全词匹配原则，避免模糊猜测，遇到重名笔记时会明确提示而非错误链接。此外，它完全本地运行，无网络请求、无 AI 依赖，确保数据隐私，且所有操作均可通过 `bl undo` 一键撤销，防止意外覆盖。

使用前需注意，该工具主要面向习惯使用终端的用户，且依赖 Python 环境。它不适合那些希望完全通过图形界面操作、或需要复杂自动化工作流的用户。对于非技术背景用户，学习命令行操作可能存在一定门槛。此外，虽然它支持从手机通过 Inbox 文件捕获，但核心的链接生成和整理仍需回到电脑端执行 `bl triage` 等命令，因此它更适合作为高效工作流的补充，而非替代 Obsidian 移动端的全部功能。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


