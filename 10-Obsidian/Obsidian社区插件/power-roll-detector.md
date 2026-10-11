---
uid: 1791709369287000
title: 'Obsidian 插件：Power Roll Detector'
tags: ['数据处理', '编辑工具', '效率工具', 'obsidian插件']
description: 'Detects "Power Roll + N" text in Draw Steel statblocks and turns it into a clickable 2d10+N roller. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Power Roll Detector

> [!Note] 插件名片
> - 插件名称：Power Roll Detector
> - 插件作者：Zach Hall
> - 插件说明：Detects "Power Roll + N" text in Draw Steel statblocks and turns it into a clickable 2d10+N roller. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['数据处理', '编辑工具', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/zachhall/power-roll-detector)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?power-roll-detector)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/zachhall/power-roll-detector/master/README.md)



## 概述

**Power Roll Detector** 是一款专为《Draw Steel》TRPG设计的 Obsidian 插件，旨在优化战斗判定体验。

**主要功能**：插件自动扫描笔记中渲染后的 "Power Roll + N" 文本，将其转换为可点击的 `2d10+N` 骰子。点击后执行掷骰，展示详细数值及 Draw Steel 特有的等级分类（≤11/12–16/17+），并记录至历史日志。

**适用场景**：适用于使用 Draw Steel 规则进行角色扮演或战斗模拟的 Obsidian 用户，特别是搭配 Draw Steel Elements 插件使用，可自动捕获能力名和角色名上下文。

**核心特色**：
1. **无侵入性**：无需修改笔记源码，直接识别渲染后的文本。
2. **智能上下文**：在特定容器内掷骰时，自动记录关联的角色或怪物名称。
3. **历史追踪**：提供侧边栏记录掷骰历史，并支持 Edge/Bane 状态切换，便于追踪连续判定。

**使用建议**：
1. 确保 Obsidian 版本 ≥ 1.13.0。
2. 强烈建议同时安装 **Draw Steel Elements** 插件，以获得完整的角色/能力名称记录功能；若未安装，插件仍可掷骰但日志缺乏上下文。
3. 仅识别数值修正形式（如 +5），非数值变体（如 +Intuition）将被忽略。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


