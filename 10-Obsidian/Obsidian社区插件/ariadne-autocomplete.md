---
uid: 1791709365362000
title: "Obsidian 插件：Ariadne Autocomplete Accessibility"
tags: ['界面优化', '编辑工具', '效率工具', 'obsidian插件']
description: "Adds screen reader and keyboard accessibility to Obsidian's wikilink and other suggestion popups. - This plugin has not been manually reviewed by Obsidian staff."
author: "AI"
type: "auto"
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Ariadne Autocomplete Accessibility

> [!Note] 插件名片
> - 插件名称：Ariadne Autocomplete Accessibility
> - 插件作者：Steve Sawczyn
> - 插件说明：Adds screen reader and keyboard accessibility to Obsidian's wikilink and other suggestion popups. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['界面优化', '编辑工具', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/ssawczyn/ariadne-autocomplete)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?ariadne-autocomplete)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/ssawczyn/ariadne-autocomplete/master/README.md)



## 概述

**插件名称：Ariadne Autocomplete Accessibility**

1. **主要功能**
该插件为 Obsidian 的建议弹窗（如 `[[` 维基链接自动补全）增加屏幕阅读器和键盘无障碍支持。它通过动态注入 ARIA 语义属性，使辅助技术能正确识别和朗读弹窗内容。

2. **适用场景**
主要服务于视障用户或依赖屏幕阅读器（Screen Reader）的开发者。当原生 Obsidian 的自动补全列表无法被辅助技术感知，导致用户无法通过键盘高效导航和选择建议时，此插件能解决这一痛点。

3. **核心特色**
- **非侵入式增强**：利用 `MutationObserver` 监听 DOM 变化，在不修改 Obsidian 内部渲染逻辑的前提下，叠加标准 ARIA combobox/listbox 语义。
- **即时反馈**：实时同步高亮状态，确保屏幕阅读器能准确播报当前选中的建议项，弥补了原生 UI 缺乏 ARIA 支持的缺陷。

4. **使用建议**
- 适用于所有使用键盘导航和屏幕阅读器的用户，安装后无需额外配置即可生效。
- 注意该插件目前未经过 Obsidian 官方人工审核，建议先在备份环境中测试稳定性。
- 作为 Ariadne 无障碍项目的一部分，建议配合其他无障碍插件使用以获得最佳体验。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---
