---
uid: 1791709370100000
title: 'Obsidian 插件：Spot Linker'
tags: ['模板与链接处理', '编辑工具', '效率工具', 'obsidian插件']
description: 'On-demand highlight of vault note titles and aliases in the current note, then confirm and insert wikilinks. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Spot Linker

> [!Note] 插件名片
> - 插件名称：Spot Linker
> - 插件作者：zoupuyo
> - 插件说明：On-demand highlight of vault note titles and aliases in the current note, then confirm and insert wikilinks. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['模板与链接处理', '编辑工具', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/zoupuyo-obsidian/obsidian-spot-linker)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?spot-linker)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/zoupuyo-obsidian/obsidian-spot-linker/master/README.md)



## 概述

**1. 主要功能**
Spot Linker 是一款用于 Obsidian 的链接辅助插件。它能扫描当前笔记，自动识别并高亮显示与库中其他笔记标题、文件名或别名匹配的文字。用户确认目标后，可一键将其转换为双链（Wikilinks）。

**2. 适用场景**
适用于日常写作中需要频繁引用其他笔记的场景，特别是当笔记标题较长、使用缩写或别名时，能显著减少手动输入链接的时间，提升知识网络构建效率。

**3. 核心特色**
*   **按需扫描**：仅在用户主动触发时运行，不自动后台扫描，保护隐私且节省资源。
*   **智能过滤**：自动跳过代码块、已有链接及引用内容，确保建议聚焦于普通正文。
*   **安全可控**：高亮显示仅为预览，必须手动确认“创建链接”才会修改笔记，防止误操作。
*   **容错机制**：列表重建失败时保留旧数据，编辑后自动清除过时高亮，避免链接错误。
*   **多语言支持**：良好支持中文、日文等无空格分隔语言，优先匹配更长的术语。

**4. 使用建议**
建议通过命令面板或侧边栏图标启动扫描。在桌面端悬停高亮处查看目标，移动端则点击高亮。确认无误后再执行链接创建。若需清除高亮，可再次点击图标或运行“清除高亮”命令。该插件完全本地运行，不上传数据，适合注重隐私的用户。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


