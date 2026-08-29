---
uid: 1786577077244002
title: 'Obsidian 插件：Custom Timer'
tags: ['日历与时间', '任务管理', '自定义命令', '效率工具', 'obsidian插件']
description: '能根据计时代码块来运行间歇计时器，还能设置组数、工作时长和休息时长，可用于锻炼或其他事情。——Obsidian官方人员尚未对该插件进行人工审核。'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Custom Timer

> [!Note] 插件名片
> - 插件名称：Custom Timer
> - 插件作者：catalyys
> - 插件说明：能根据计时代码块来运行间歇计时器，还能设置组数、工作时长和休息时长，可用于锻炼或其他事情。——Obsidian官方人员尚未对该插件进行人工审核。
> - 插件分类：['日历与时间', '任务管理', '自定义命令', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/catalyys/obsidian-timer)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?custom-timer)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/catalyys/obsidian-timer/master/README.md)



## 概述

### Custom Timer 插件总结
1. **主要功能**：将 `timer` 代码块转换为间隔计时器，具备开始、跳过、重置功能，且步骤间会有蜂鸣声提醒。
2. **适用场景**：适用于健身锻炼场景，可根据设定的组数、工作时长和休息时长来安排训练节奏；也可用于其他需要设置间隔计时的场景。
3. **核心特色**：支持在代码块中灵活设置标题、训练组数、每组的工作和休息时长，并且支持嵌套设置；时间格式多样，如 `30`、`30s`、`2m`、`1h` 等。
4. **使用建议**：手动安装时，将 `main.js`、`manifest.json` 和 `styles.css` 复制到 `<vault>/.obsidian/plugins/workout - timer/` 目录下并启用插件。若要进行测试，可运行 `node test_parse.js`。在编写 `timer` 代码块时，注意 `title` 为可选且仅首行有效，`sets: N` 用于重复缩进块 N 次。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


