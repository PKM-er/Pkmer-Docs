---
uid: 1793625609007000
title: "Obsidian 插件：Canvas View Memory"
tags: ["界面优化", "效率工具", "白板", "obsidian插件"]
description: "Remember and restore each canvas's last position and zoom. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Canvas View Memory

> [!Note] 插件名片
> - 插件名称：Canvas View Memory
> - 插件作者：CJ Zhou
> - 插件说明：Remember and restore each canvas's last position and zoom. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['界面优化', '效率工具', '白板', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/starsyork/canvas-view-memory)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?canvas-view-memory)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/starsyork/canvas-view-memory/master/README.md)



## 概述

Canvas View Memory 旨在解决 Obsidian 画布在重新打开时总是重置为默认视图的痛点。该插件的核心功能是自动记录并恢复每个画布文件最后关闭时的中心位置和缩放比例。它无需任何配置，安装启用后即可工作，确保你每次进入画布时，都能直接看到上次离开时的画面，从而大幅减少重新定位内容的操作成本。

典型使用场景包括处理大型思维导图或复杂项目规划。例如，当你在一个包含数百个节点的画布中调整了局部细节后关闭文件，再次打开时，插件会直接定位到你上次操作的区域，而不是强制回到画布左上角。另一个场景是快速切换多个画布文件，插件为每个文件独立记忆视图，避免了在不同项目间频繁手动平移和缩放带来的干扰。

相比其他同类插件，Canvas View Memory 的最大特色在于其“零配置”和“无侵入性”。它不修改你的 `.canvas` 文件内容，也不发起任何网络请求，所有数据仅存储在插件自身的配置文件中。此外，它具备智能的文件关联能力：当你在库内重命名或移动画布文件时，保存的视图会自动跟随；若删除画布，对应的视图记录也会自动清理，无需手动维护。

使用前需注意，该插件依赖 Obsidian 内部 API，未来版本更新或与其他画布插件共存时可能存在兼容性风险，若遇到不兼容情况，插件会跳过恢复并提示。它不适合需要跨设备同步视图状态的用户，因为当前版本无法解决多设备间的数据冲突。同时，如果窗口尺寸变化较大，虽然中心点保持一致，但可见范围会有所不同。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


