---
uid: 1793625618223000
title: "Obsidian 插件：Neon Amber Glass Companion"
tags: ["样式与美化", "界面优化", "obsidian插件"]
description: "Switch between clear, frosted and dark HUD window materials on macOS when using the Neon Amber Glass theme. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Neon Amber Glass Companion

> [!Note] 插件名片
> - 插件名称：Neon Amber Glass Companion
> - 插件作者：khedrub
> - 插件说明：Switch between clear, frosted and dark HUD window materials on macOS when using the Neon Amber Glass theme. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['样式与美化', '界面优化', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/khedrub/neon-amber-glass-companion)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?neon-amber-glass-companion)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/khedrub/neon-amber-glass-companion/master/README.md)



## 概述

Neon Amber Glass Companion 专为 macOS 用户设计，旨在解决 Neon Amber Glass 主题下窗口材质切换的局限。它允许你在“清晰无模糊”和“深色 HUD 玻璃”两种原生材质间自由切换，同时保持背景透明度与色调独立于原生窗口材质。该插件确保文字始终不透明，绝不会让整个窗口变淡，从而在保持视觉通透感的同时，维持阅读内容的清晰度与对比度。

典型使用场景包括：当你希望桌面背景完全清晰可见，以便同时查看其他应用窗口时，可切换至“清晰”模式；若偏好更具沉浸感的深色界面，则选择“深色 HUD 玻璃”模式。例如，在编写长文时，你可以随时通过 Style Settings 中的下拉菜单实时调整主库窗口的材质，无需重启应用，即可根据当前环境光线或视觉偏好快速切换界面风格。

相比同类插件，其核心特色在于通过 Electron 支持的 `setVibrancy()` API 直接调用原生材质，而非修改 CSS 或应用文件。它不依赖额外的运行时依赖，也不进行任何网络请求、数据收集或文件读写，隐私安全性极高。此外，插件能自动跟随 Obsidian 的语言设置（支持德语和英语），并在主题切换或卸载时自动恢复之前的原生外观和背景，避免界面残留异常状态。

使用前请注意，该插件仅支持 macOS 桌面端，Windows、Linux 及移动端均不可用。它必须配合 Neon Amber Glass 主题及 Style Settings 插件使用，且要求 Obsidian 版本不低于 1.14.4。由于 macOS 原生模糊强度由系统决定，插件无法提供连续的桌面模糊半径调节。如果你需要跨平台支持、复杂的自定义模糊算法，或希望修改应用底层文件，此插件并不适合你的需求。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


