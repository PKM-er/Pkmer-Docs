---
uid: 1793625620121000
title: "Obsidian 插件：Plain Deck"
tags: ["学习与教育", "效率工具", "ANKI", "obsidian插件"]
description: "Study flashcards written in your notes, with spaced repetition (FSRS): each level-2 heading in a .cards.md note is a card, and each review is saved in that note, so your progress syncs with the vault. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Plain Deck

> [!Note] 插件名片
> - 插件名称：Plain Deck
> - 插件作者：Wilson Neto
> - 插件说明：Study flashcards written in your notes, with spaced repetition (FSRS): each level-2 heading in a .cards.md note is a card, and each review is saved in that note, so your progress syncs with the vault. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['学习与教育', '效率工具', 'ANKI', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/wilsonneto-swe/plain-deck-obsidian)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?plain-deck)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/wilsonneto-swe/plain-deck-obsidian/master/README.md)



## 概述

Plain Deck 将 Obsidian 笔记直接转化为支持间隔重复的闪卡，核心在于“卡片即笔记”。它利用笔记中的二级标题作为问题，标题下的内容作为答案，无需复杂的导入导出。每次复习后，进度会以隐藏注释的形式直接写入原笔记，确保学习数据与笔记内容同步，彻底解决了传统插件中卡片与笔记分离、数据易丢失的痛点。

典型场景包括整理技术文档或备考复习。例如，在编写网络协议笔记时，将“TCP 相比 IP 增加了什么”设为二级标题，下方填写答案，即可随时通过右键菜单将其作为闪卡学习。或者，将文件名命名为 `*.cards.md`，如 `Networking.cards.md`，该文件会自动被识别为卡组，方便在移动端或桌面端随时调取复习，无需额外配置。

相比同类插件，Plain Deck 的最大特色是进度与笔记深度绑定，支持 Obsidian Sync、iCloud 或 Git 同步，实现多设备无缝切换。它采用 Anki 同款的 FSRS-6 算法，调度更精准，且完全离线运行，无网络请求或遥测。此外，它完美兼容 Obsidian 的渲染能力，卡片中可包含图片、数学公式、代码块及内部链接，阅读体验与普通笔记一致。

使用前需注意，该插件仅识别二级标题为卡片，且依赖笔记文件结构，不适合需要复杂卡片模板或大量外部资源引用的用户。若你习惯使用独立的 Anki 软件，或笔记中二级标题并非用于提问，则可能不适用。此外，请勿手动编辑进度注释行，以免导致卡片状态异常。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


