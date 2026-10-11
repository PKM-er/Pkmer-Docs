---
uid: 1791709366375000
title: 'Obsidian 插件：D2 File Preview'
tags: ['编辑工具', '图表与可视化', '第三方工具集成', 'obsidian插件']
description: 'Edit D2 source files and automatically render SVG previews in Obsidian. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：D2 File Preview

> [!Note] 插件名片
> - 插件名称：D2 File Preview
> - 插件作者：jeongsol
> - 插件说明：Edit D2 source files and automatically render SVG previews in Obsidian. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['编辑工具', '图表与可视化', '第三方工具集成', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/soljeong/d2-file-preview)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?d-two-file-preview)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/soljeong/d2-file-preview/master/README.md)



## 概述

**1. 主要功能**
该插件允许用户在 Obsidian 中直接编辑 `.d2` 源文件，并自动在本地渲染生成同名的 SVG 预览图。渲染基于内置的 D2.js/WebAssembly 引擎，无需安装外部 D2 可执行文件，支持离线运行。

**2. 适用场景**
适用于需要在笔记中快速绘制流程图、架构图或状态图的用户。特别适合 Windows、macOS、Linux 及 Android 平台用户（iOS 未验证）。适合希望将图表源码与预览紧密集成，且依赖 Vault 内部相对路径导入大型 D2 项目的场景。

**3. 核心特色**
*   **全自动渲染**：停止编辑 1 秒后自动生成/更新 SVG 并刷新预览。
*   **零依赖**：内置渲染引擎，无需配置系统 D2 路径，简化部署。
*   **容错机制**：渲染失败时保留上次成功生成的 SVG，并在下次编辑时重试。
*   **Vault 内导入**：支持当前 Vault 内 `.d2` 文件间的相对路径导入。

**4. 使用建议**
*   通过命令面板创建新文件或直接打开现有 `.d2` 文件开始编辑。
*   注意大型 Vault 中若包含大量 D2 文件，渲染速度可能因需加载所有文件而变慢。
*   从 1.0.x 升级后，请忽略旧的“D2 可执行路径”设置，该功能已移除。
*   仅支持 Vault 内部导入，跨 Vault 导入不可用。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


