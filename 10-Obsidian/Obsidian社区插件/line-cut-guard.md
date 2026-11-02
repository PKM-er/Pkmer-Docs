---
uid: 1793625614796000
title: "Obsidian 插件：Line Cut Guard"
tags: ["编辑工具", "快捷键", "效率工具", "obsidian插件"]
description: "Stops Ctrl-X and Cmd-X from cutting the whole line when no text is selected, and can do the same for copy. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Line Cut Guard

> [!Note] 插件名片
> - 插件名称：Line Cut Guard
> - 插件作者：theluckystrike
> - 插件说明：Stops Ctrl-X and Cmd-X from cutting the whole line when no text is selected, and can do the same for copy. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['编辑工具', '快捷键', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/theluckystrike/line-cut-guard)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?line-cut-guard)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/theluckystrike/line-cut-guard/master/README.md)



## 概述

Line Cut Guard 旨在解决 Obsidian 中一个常见的误操作痛点：当光标未选中任何文本时，按下 Ctrl+X（macOS 为 Cmd+X）会直接剪切整行或整段内容。这种默认行为在手指误触、从撤销键滑移或按键时间稍长时，极易导致意外删除大段文字且难以即时察觉。该插件的核心功能是拦截这种“空选剪切”操作，使其不再执行任何动作，从而保护你的笔记内容不被意外清空。

想象一下你在整理会议记录，光标停留在某段文字中，本想复制却误按了剪切键，或者想粘贴却按成了复制，导致剪贴板被整行内容覆盖。启用 Line Cut Guard 后，这些误操作将不再产生后果。如果你确实需要剪切整行，只需先选中该行，或使用插件提供的“Cut selection or line”命令，并为其设置如 Ctrl+Shift+X 的快捷键，即可安全地执行整行剪切。

与同类插件相比，Line Cut Guard 不仅支持剪切保护，还可选开启对 Ctrl+C 的保护，防止误触复制键覆盖剪贴板。它兼容实时预览、源码模式、表格单元格及多光标场景，确保在复杂编辑环境下依然有效。此外，Pro 版本提供“二次按键模式”，首次误按仅提示，两秒内再次按键才执行剪切，为习惯保留整行剪切功能的用户提供了更灵活的缓冲机制。

需要注意的是，该插件仅作用于 Markdown 编辑器的文本区域，阅读视图、搜索框及非编辑状态的 Canvas 卡片不受影响。如果你依赖 Obsidian 默认的“空选即剪切整行”习惯，且不愿改变操作逻辑，此插件可能不适合你。此外，Pro 功能需通过 GitHub Sponsors 赞助解锁，但核心保护功能完全免费，且插件不会修改你的笔记内容，仅拦截事件，安全性较高。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


