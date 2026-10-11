---
uid: 1791709366295000
title: 'Obsidian 插件：Cover Image Picker'
tags: ['图片与PDF', '编辑工具', '移动端优化', 'obsidian插件']
description: 'Pick, resize and store cover images directly from YAML frontmatter properties. Works on iOS. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Cover Image Picker

> [!Note] 插件名片
> - 插件名称：Cover Image Picker
> - 插件作者：wolfgang-otter
> - 插件说明：Pick, resize and store cover images directly from YAML frontmatter properties. Works on iOS. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['图片与PDF', '编辑工具', '移动端优化', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/wolfgangotter/cover-image-picker)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?cover-image-picker)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/wolfgangotter/cover-image-picker/master/README.md)



## 概述

**Cover Image Picker** 是一款专为 Obsidian 设计的封面图管理插件，主要功能是在 YAML 前置属性中直接选择、调整大小并存储封面图片，特别优化了 iOS 端的操作流程。

**适用场景**：非常适合需要在笔记中频繁设置封面图的场景，如物品清单管理、手机拍照归档或博客文章配图。它解决了在移动端处理前置属性图片繁琐的痛点。

**核心特色**：
1. **一站式处理**：自动完成图片缩放、重编码、重命名及链接插入。
2. **iOS 完美支持**：针对 WebKit 限制自动回退至 JPEG 格式，确保移动端流畅体验。
3. **隐私安全**：离线运行，无网络请求；重编码过程自动剥离 EXIF 数据（含 GPS），保护隐私。
4. **低干扰性**：仅作用于配置的属性（默认为 `cover`/`banner`），不影响其他插件。

**使用建议**：
- 需 Obsidian 1.13.0 及以上版本。
- 桌面端可直接拖拽图片至属性栏；移动端通过编辑按钮操作。
- 建议保持默认设置，或根据需求自定义目标属性名称，以最大化兼容其他工作流。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


