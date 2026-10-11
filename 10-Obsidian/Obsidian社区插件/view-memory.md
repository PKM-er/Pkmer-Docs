---
uid: 1791709370934000
title: 'Obsidian 插件：View Memory'
tags: ['效率工具', '图片与PDF', '导航与状态栏', 'obsidian插件']
description: ''
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：View Memory

> [!Note] 插件名片
> - 插件名称：View Memory
> - 插件作者：zhechen
> - 插件说明：
> - 插件分类：['效率工具', '图片与PDF', '导航与状态栏', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/zeriehan/view-memory)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?view-memory)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/zeriehan/view-memory/master/README.md)



## 概述

**1. 主要功能**
该插件专为 Obsidian 1.13+ 设计，核心功能是持久化保存并恢复工作区状态。它解决了原生机制中文件列表折叠状态易丢失、PDF 多开时阅读位置互相覆盖、以及 Excalidraw 画布视窗重置等问题，确保重启后能精准回到之前的操作现场。

**2. 适用场景**
适用于重度依赖左侧文件树导航、频繁阅读多份 PDF 文档、或使用 Excalidraw 进行绘图的用户。特别适合那些在 Obsidian 启动较慢或插件较多，导致原生状态恢复失败、工作流中断的场景。

**3. 核心特色**
- **独立快照机制**：不依赖易错的 `localStorage`，按 Vault 独立存储状态。
- **智能冲突解决**：针对 PDF 多开覆盖问题，通过指纹索引独立记录位置。
- **安全恢复策略**：设有“启动宽限期”和“状态未知跳过”机制，防止在界面未加载完成时错误覆盖用户真实操作，确保数据安全性。
- **无缝迁移**：自动合并旧版 `fold-memory` 和 `view-memory` 的数据。

**4. 使用建议**
- 确保 Obsidian 版本在 1.13.0 及以上，以支持声明式设置接口。
- 首次启用时会自动迁移旧插件数据，建议备份 Vault 以防万一。
- 若发现状态未恢复，请检查是否处于“启动宽限期”内，或确认文件树已完全加载。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


