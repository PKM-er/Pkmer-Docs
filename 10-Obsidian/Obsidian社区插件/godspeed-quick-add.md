---
uid: 1793625613423000
title: "Obsidian 插件：Godspeed Quick Add"
tags: ["任务管理", "第三方工具集成", "效率工具", "obsidian插件"]
description: "Send the current note, or the section you are in, to Godspeed as a task that links back to it. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Godspeed Quick Add

> [!Note] 插件名片
> - 插件名称：Godspeed Quick Add
> - 插件作者：Nick Wolf
> - 插件说明：Send the current note, or the section you are in, to Godspeed as a task that links back to it. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['任务管理', '第三方工具集成', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/quintrino/obsidian-godspeed-quick-add)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?godspeed-quick-add)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/quintrino/obsidian-godspeed-quick-add/master/README.md)



## 概述

Godspeed Quick Add 旨在解决 Obsidian 笔记与任务管理工具 Godspeed 之间的数据孤岛问题。其核心功能是将当前正在查看的笔记，或光标所在的特定章节，一键转化为 Godspeed 中的任务。生成的任务不仅包含笔记标题和章节名，还附带一个可点击的链接，点击后能直接跳转回 Obsidian 中对应的笔记位置，实现了从任务到知识源的双向无缝衔接。

典型使用场景包括：当你阅读一篇长文档时，发现某段内容需要后续跟进，只需执行命令即可将该章节作为任务发送，无需手动复制粘贴标题；或者在浏览文件列表时，右键点击多个笔记，批量将它们转化为待办事项。此外，插件支持在发送前添加额外备注，你可以选择将备注置于任务标题前或任务详情中，方便快速记录上下文，例如“关于第三章的疑问”或“待核实数据”。

相比其他集成插件，该工具在隐私和网络行为上表现克制。它仅在用户主动执行命令时向 Godspeed API 发送数据，不读取其他笔记内容，无后台传输，也无任何分析或遥测功能。API 密钥存储在 Obsidian 的安全存储中，而非笔记库文件内，因此即使同步或提交 Git，密钥也不会泄露。此外，插件不占用默认快捷键，用户可自由绑定，避免了与其他插件的冲突。

使用前需确保拥有 Godspeed 账户并配置好 API 密钥，否则插件无法工作。需要注意的是，如果重命名笔记库或移动笔记文件，已发送任务中的链接将会失效；重复发送同一笔记会生成多个独立任务。该插件不适合需要复杂工作流自动化、双向同步任务状态或处理非文本媒体内容的用户，它专注于轻量级的“笔记转任务”单向推送。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


