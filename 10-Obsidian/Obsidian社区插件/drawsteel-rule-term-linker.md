---
uid: 1791709366628000
title: 'Obsidian 插件：Draw Steel Rule Term Linker'
tags: ['模板与链接处理', '导航与状态栏', '效率工具', 'obsidian插件']
description: 'Backlinks Draw Steel rule terms in your notes to their entries in the DS Compendium. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Draw Steel Rule Term Linker

> [!Note] 插件名片
> - 插件名称：Draw Steel Rule Term Linker
> - 插件作者：Zach Hall
> - 插件说明：Backlinks Draw Steel rule terms in your notes to their entries in the DS Compendium. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['模板与链接处理', '导航与状态栏', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/zachhall/drawsteel-rule-term-linker)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?drawsteel-rule-term-linker)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/zachhall/drawsteel-rule-term-linker/master/README.md)



## 概述

**1. 主要功能**
该插件自动检测笔记中的《Draw Steel》规则术语，并将其渲染为指向定义条目的`[[wikilink]]`。它基于规则书第一章的术语表提供默认支持，同时允许用户自定义术语及其定义位置。插件会自动创建并维护一个只读词汇表笔记作为链接目标，且不会修改原始笔记内容。

**2. 适用场景**
专为《Draw Steel Heroes》规则书玩家设计，适用于在Obsidian中管理游戏笔记、构建个人知识库或记录战役细节的场景。特别适合需要频繁查阅规则定义、希望快速了解术语含义的用户。

**3. 核心特色**
*   **非侵入式链接**：在实时预览中动态生成链接，不改动笔记源文件，支持原生悬停预览定义。
*   **智能过滤**：自动跳过代码块、标题及已有链接，避免重复链接同一能力中的相同术语。
*   **高度可定制**：内置默认术语及别名（如"XP"指向"Experience"），用户可在设置中自由扩展术语库。
*   **生态集成**：建议配合"Draw Steel Elements"插件使用，部分术语可直接链接至规则手册。

**4. 使用建议**
*   **环境要求**：需Obsidian 1.13.0及以上版本。
*   **安装方式**：推荐通过BRAT插件安装测试版。
*   **局限性注意**：匹配为不区分大小写的字面匹配，不支持自动识别复数或变体，需手动添加别名；仅在阅读视图或实时预览中生效，源码模式下显示为纯文本。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


