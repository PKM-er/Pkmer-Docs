---
uid: 1791709365513000
title: 'Obsidian 插件：Background Cover'
tags: ['样式与美化', '图片与PDF', '界面优化', 'obsidian插件']
description: 'Customize Obsidian background with a local image folder: only the currently used image is loaded into memory, supports folders outside the vault, fixed-interval auto rotation and manual random switch. Does not modify theme variables. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Background Cover

> [!Note] 插件名片
> - 插件名称：Background Cover
> - 插件作者：lose-memory
> - 插件说明：Customize Obsidian background with a local image folder: only the currently used image is loaded into memory, supports folders outside the vault, fixed-interval auto rotation and manual random switch. Does not modify theme variables. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['样式与美化', '图片与PDF', '界面优化', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/lose-memory/obsidian-background-cover)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?background-cover)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/lose-memory/obsidian-background-cover/master/README.md)



## 概述

**Background Cover** 是一款 Obsidian 社区插件，旨在通过本地图片文件夹自定义工作区背景。

**主要功能**
允许用户指定本地任意文件夹（支持库外路径及环境变量）作为图片源，递归扫描并加载指定格式的图像。插件提供透明度、模糊度、尺寸模式及混合模式等外观控制，支持固定间隔自动轮换或手动随机切换，且不修改主题变量。

**适用场景**
适合拥有大量壁纸（如数千张、数十GB）且希望保持低内存占用的用户；适用于希望使用库外高清图片作为背景，并追求无重复随机切换体验的场景。

**核心特色**
1. **极致内存友好**：仅将当前显示的一张图片加载至内存，文件夹扫描仅读取文件名，即使拥有5000+张壁纸也不影响性能。
2. **无重复随机算法**：采用 Fisher-Yates 洗牌算法，确保每轮内每张图仅出现一次，避免连续重复。
3. **灵活路径支持**：兼容 `~`、环境变量及递归子文件夹，支持多种常见图片格式。

**使用建议**
建议将壁纸文件夹放置在库外以节省 Vault 空间；若图片较多，可适度增加自动轮换间隔；根据主题明暗调整透明度与模糊度，以获得最佳视觉舒适度。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


