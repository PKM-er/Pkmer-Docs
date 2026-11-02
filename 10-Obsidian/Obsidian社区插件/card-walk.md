---
uid: 1793625609131000
title: "Obsidian 插件：Card Walk"
tags: ["学习与教育", "ANKI", "第三方工具集成", "移动端优化", "obsidian插件"]
description: "Review #card flashcards and ==cloze== blocks from your notes with Anki scheduling. Answers made on your phone reach Anki on your computer within seconds, and every sync step is shown. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Card Walk

> [!Note] 插件名片
> - 插件名称：Card Walk
> - 插件作者：马自立
> - 插件说明：Review #card flashcards and ==cloze== blocks from your notes with Anki scheduling. Answers made on your phone reach Anki on your computer within seconds, and every sync step is shown. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['学习与教育', 'ANKI', '第三方工具集成', '移动端优化', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/matsurimw/card-walk)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?card-walk)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/matsurimw/card-walk/master/README.md)



## 概述

Card Walk 将 Obsidian 笔记中的 `#card` 标签和 `==cloze==` 填空块转化为可交互的闪卡，直接对接 Anki 进行记忆调度。它提供侧边栏复习界面，支持“重来、困难、良好、简单”四种评级，并自动处理卡片排序与每日目标进度。该插件不仅是一个查看器，更是一个完整的复习工作流，让你无需离开笔记软件即可完成高强度的记忆训练，同时保持与 Anki 数据库的实时同步。

想象你在通勤路上用手机复习，回到办公室后打开电脑，刚才在手机上的答题记录会在几秒内同步到 Anki，避免重复学习。或者在撰写长文时，你标记了关键概念为填空块，稍后通过插件快速抽测，确认自己是否真正掌握了这些知识点。这种跨设备、跨场景的无缝衔接，让碎片化时间的利用效率大幅提升，且每一步同步状态都清晰可见，无需担心数据丢失或进度不同步。

相比其他仅能单向同步或依赖手动导入的插件，Card Walk 的核心特色在于其透明的双向同步机制。它通过 Upstash Redis 作为中继，确保手机与电脑间的进度实时互通，并明确展示“已保存、已上传、已进入 Anki”三个状态。此外，它支持键盘快捷键操作、自定义声音反馈，并能将复习时间精确记录到 Anki 日志中。这种对同步细节的掌控力，以及将复习行为深度嵌入 Obsidian 工作流的设计，使其在同类插件中独树一帜。

使用前需注意，该插件强依赖 AnkiConnect 和 Flashcards 插件，且手机同步功能需自行配置 Upstash Redis 数据库，有一定技术门槛。如果你不需要跨设备同步，或希望完全离线、不依赖外部服务的纯本地复习方案，Card Walk 可能显得过于复杂。此外，它主要服务于已建立 Anki 工作流的用户，对于刚接触间隔重复、尚未熟悉 Anki 概念的新手，可能需要先学习基础调度逻辑才能充分发挥其价值。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


