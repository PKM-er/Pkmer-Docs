---
uid: 1793625612079000
title: "Obsidian 插件：Device Tracker"
tags: ["文件管理", "效率工具", "数据处理", "obsidian插件"]
description: "Records which device created and last edited each note in its frontmatter. Device names stay local, so sync tools never overwrite them, and synced-in edits don't count as local edits. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Device Tracker

> [!Note] 插件名片
> - 插件名称：Device Tracker
> - 插件作者：nicholaskj
> - 插件说明：Records which device created and last edited each note in its frontmatter. Device names stay local, so sync tools never overwrite them, and synced-in edits don't count as local edits. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['文件管理', '效率工具', '数据处理', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/nicholaskj/obsidian-device-tracker)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?device-tracker)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/nicholaskj/obsidian-device-tracker/master/README.md)



## 概述

Device Tracker 旨在解决多设备同步笔记时“来源不明”的痛点。它通过监听本地编辑事件，将创建和最后编辑该笔记的设备名称自动写入 frontmatter。与依赖文件修改时间的常规方案不同，它精准区分了“本地输入”与“同步接收”，确保记录的是真正进行编辑的设备，而非仅仅接收同步文件的设备，从而还原笔记的真实流转轨迹。

想象一下，你在通勤地铁上用手机快速记录灵感，回到办公室后在电脑上继续完善。如果没有该插件，你很难分辨哪些段落是途中构思的，哪些是后来补充的。借助 Device Tracker，你可以清晰看到 `created_device` 为手机，而 `modified_device` 为电脑。结合 Dataview 插件，你甚至能查询“所有在本笔记本上编辑过的笔记”，快速定位特定设备上的工作成果。

该插件的核心优势在于其“本地化”的设备命名机制。设备名称存储在浏览器 localStorage 中，而非同步的插件配置目录，这避免了多设备同步时名称互相覆盖的问题。此外，它具备完善的防重入机制，能与 `front-matter-timestamps` 等自动写入 frontmatter 的插件和平共处，不会引发无限循环或时间戳冲突，适合需要精细管理元数据的用户。

需要注意的是，iOS 平台因不支持第三方插件而无法使用此功能。此外，该插件不具备回溯能力，安装前已存在的笔记不会自动补全设备信息。如果你关注的是“由人类还是 AI 撰写”而非“由哪台机器编辑”，或者你主要使用 iOS 设备，那么这款插件可能并不适合你的需求。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


