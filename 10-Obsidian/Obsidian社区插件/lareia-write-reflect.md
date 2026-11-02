---
uid: 1793625614687000
title: "Obsidian 插件：Lareia Write and Reflect"
tags: ["第三方工具集成", "文字处理", "思维导图", "日历与时间", "obsidian插件"]
description: "Brings your Lareia journal into your vault: daily entries under a heading of your choice, media, mind maps and notebooks. Requires a Lareia account. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Lareia Write and Reflect

> [!Note] 插件名片
> - 插件名称：Lareia Write and Reflect
> - 插件作者：Yuri Braz
> - 插件说明：Brings your Lareia journal into your vault: daily entries under a heading of your choice, media, mind maps and notebooks. Requires a Lareia account. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['第三方工具集成', '文字处理', '思维导图', '日历与时间', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/ybraz/lareia-write-reflect)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?lareia-write-reflect)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/ybraz/lareia-write-reflect/master/README.md)



## 概述

Lareia Write and Reflect 将 Lareia 应用中的日记内容同步至 Obsidian 库，实现跨平台的数据整合。它会将每日文字记录写入你指定的 Daily Note 标题下，同时自动下载并嵌入图片、附件、思维导图及笔记本内容。插件通过 HTML 注释标记同步区域，确保只更新指定部分，保留你在笔记其他位置的手动编辑，让数字日记与本地知识库无缝融合。

典型场景包括：你在 Lareia 中记录当天的灵感与图片，打开 Obsidian 后，这些内容会自动出现在每日笔记的特定区块内，图片以标准嵌入格式显示；或者你使用 Lareia 绘制思维导图，插件会将其保存为 Excalidraw 文件，方便你在 Obsidian 中直接查看和归档。这种工作流适合希望将移动端的碎片化记录转化为结构化本地笔记的用户。

相比其他同步工具，该插件的核心特色在于“非破坏性同步”与“冲突保护”。它严格限制写入范围，绝不删除任何文件，且当检测到你在 Obsidian 中手动修改了同步区块时，会暂停更新并在 Lareia 端显示警告，让你选择保留哪个版本。此外，它支持将笔记本内容映射为本地文件夹结构，并提供了可选的标题索引功能，但默认关闭以保护隐私。

使用前需注意，该插件必须配合 Lareia 账号使用，且依赖网络进行数据拉取。它仅执行“拉取”操作，Obsidian 关闭时数据停留在服务器。若你不需要将笔记标题发送给 Lareia 服务器，请保持“标题索引”功能关闭。此外，思维导图需安装 Excalidraw 插件才能可视化，否则仅显示为文本。不适合需要双向实时同步或完全离线使用 Lareia 数据的用户。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


