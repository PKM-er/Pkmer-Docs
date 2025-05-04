---
uid: 2025042920514633
title: Obsidian 插件：Rainbow Folders Fixer
tags: ['界面优化', '样式与美化', 'obsidian插件']
description: 阻止彩虹文件夹在你滚动文件资源管理器时变色。
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Rainbow Folders Fixer

> [!Note] 插件名片
> - 插件名称：Rainbow Folders Fixer
> - 插件作者：Dee
> - 插件说明：阻止彩虹文件夹在你滚动文件资源管理器时变色。
> - 插件分类：['界面优化', '样式与美化', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/dee158/obsidian-rainbow-folders-fixer)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?rainbow-folders-fixer)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/dee158/obsidian-rainbow-folders-fixer/main/README.md)



## 概述

Rainbow Folders Fixer 是一款 Obsidian 插件，主要解决文件资源管理器中彩虹文件夹在滚动时因 DOM 元素加载/卸载导致颜色变化的问题，通过数据属性固定文件夹颜色。插件提供三个配置项：颜色数量（设定循环使用的颜色总数）、属性名称（如 `"foldernumber"` 会生成 `data-foldernumber` 属性）和递归应用（控制子文件夹是否继承父文件夹颜色或独立循环）。用户需在 CSS 片段或主题中为不同 `data-foldernumber` 值分配 `--rainbowcolor` 变量（如 `--rainbowcolor1`、`--rainbowcolor2`），从而替代传统的 `nth-child` 方案，确保颜色稳定性。适用于需要视觉区分文件夹层级且依赖彩虹色方案的用户，尤其适合频繁滚动文件树的场景。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---



