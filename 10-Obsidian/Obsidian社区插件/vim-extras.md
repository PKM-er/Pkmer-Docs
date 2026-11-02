---
uid: 1793625624259001
title: "Obsidian 插件：Vim Extras"
tags: ["编辑工具", "快捷键", "效率工具", "obsidian插件"]
description: "Spelling keys for Vim mode (]s [s z= zg zw), numbers that count what gj and gk move by on wrapped lines, and Ctrl-N / Ctrl-P in menus. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Vim Extras

> [!Note] 插件名片
> - 插件名称：Vim Extras
> - 插件作者：confuserdotcom
> - 插件说明：Spelling keys for Vim mode (]s [s z= zg zw), numbers that count what gj and gk move by on wrapped lines, and Ctrl-N / Ctrl-P in menus. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['编辑工具', '快捷键', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/confuserdotcom/obsidian-vim-extras)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?vim-extras)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/confuserdotcom/obsidian-vim-extras/master/README.md)



## 概述

Vim Extras 旨在补齐 Obsidian 内置 Vim 模式缺失的关键功能，核心聚焦于拼写检查、屏幕行号显示及菜单导航。它引入了 Vim 原生的拼写快捷键，允许用户通过 `]s` 和 `[s` 在拼写错误间跳转，使用 `z=` 查看并应用修正建议，以及通过 `zg` 和 `zw` 管理词典。此外，插件为 `gj` 和 `gk` 提供了基于屏幕行的相对数字显示，解决了长文本换行时移动距离难以直观判断的问题，并支持在 Obsidian 的各类菜单中使用 `Ctrl-N` 和 `Ctrl-P` 进行上下选择，提升了纯键盘操作的流畅度。

典型场景包括处理多语言笔记或长文档时的快速校对。例如，在撰写包含法语段落的英文笔记时，`z=` 能根据上下文自动优先推荐符合当前段落语言的修正词，避免跨语言干扰；当编辑包含大量换行的长段落时，屏幕左侧显示的相对行号能让你准确感知 `gj` 移动的实际视觉距离，无需手动计算换行带来的偏差，从而更高效地定位光标位置。

相比其他 Vim 增强插件，Vim Extras 的特色在于其智能的拼写建议排序机制。它不仅依赖系统词典，还结合用户笔记中的词汇频率、上下文关联词以及历史选择习惯来优化建议排名，使得修正结果更贴合个人写作风格。同时，插件对数学公式、代码块及特定格式内容进行了智能过滤，避免误报，且其拼写模型在后台异步构建，几乎不影响编辑器启动和输入性能，实现了功能与性能的平衡。

使用前需注意，该插件仅支持桌面版 Obsidian，且必须启用内置 Vim 模式或 Vim Motions 插件才能工作。它不适合需要移动端同步拼写检查的用户，因为拼写功能依赖 Electron 的系统级支持。此外，若你的笔记库通过 Syncthing 或 Git 在多设备间同步，需确保 `model.bin` 缓存文件不被同步，以免不同设备间的数据冲突，建议每台设备独立构建拼写模型。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


