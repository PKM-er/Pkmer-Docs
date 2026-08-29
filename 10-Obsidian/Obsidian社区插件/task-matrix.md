---
uid: 1786577083064000
title: 'Obsidian 插件：TaskMatrix'
tags: ['任务管理', '图表与可视化', '效率工具', 'obsidian插件']
description: '在你的整个仓库里，为带有 #task 标签的任务行提供艾森豪威尔矩阵视图。你可以在“执行”“计划”“委派”“删除”这四个象限之间拖动任务，任务状态的更改会同步回源 Markdown 文件。——此插件尚未经过 Obsidian 官方人员的人工审核。'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：TaskMatrix

> [!Note] 插件名片
> - 插件名称：TaskMatrix
> - 插件作者：jmerryman-eng
> - 插件说明：在你的整个仓库里，为带有 #task 标签的任务行提供艾森豪威尔矩阵视图。你可以在“执行”“计划”“委派”“删除”这四个象限之间拖动任务，任务状态的更改会同步回源 Markdown 文件。——此插件尚未经过 Obsidian 官方人员的人工审核。
> - 插件分类：['任务管理', '图表与可视化', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/jmerryman-eng/Eisenhower-Obsidian-PlugIn)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?task-matrix)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/jmerryman-eng/Eisenhower-Obsidian-PlugIn/master/README.md)



## 概述

### TaskMatrix插件总结
1. **主要功能**：为Obsidian库提供艾森豪威尔矩阵视图，扫描所有含`#task`的复选框任务行，将其展示在“立即执行/计划执行/委派他人/删除”的2×2网格及待办列表中，可在各象限间拖动任务，状态更改会写回源Markdown文件。
2. **适用场景**：适用于需要对Obsidian库内任务进行优先级管理和分类的用户，帮助其高效规划和处理任务。
3. **核心特色**：以Markdown为唯一接口，任务象限由`#tm/qN`标签表示，状态由复选框字符体现，外部工具或手动编辑文件即可移动和完成任务，矩阵自动更新；无库外状态存储，写入操作原子化且有冲突检查。
4. **使用建议**：可通过侧边栏或命令面板打开矩阵；用“+”按钮或命令添加任务到待办列表；拖动卡片改变象限，点击复选框切换状态，点击文件图标跳转到源行；可通过工具栏筛选或搜索，点击“重新扫描”更新索引。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


