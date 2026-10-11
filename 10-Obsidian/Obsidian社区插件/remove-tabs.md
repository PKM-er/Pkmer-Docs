---
uid: 1791709369674000
title: "Obsidian 插件：Remove Tabs"
tags: ['界面优化', '效率工具', '样式与美化', 'obsidian插件']
description: "Removes tabs and the tab bar. Whatever you open replaces what's currently open, so there is only ever one tab. - This plugin has not been manually reviewed by Obsidian staff."
author: "AI"
type: "auto"
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Remove Tabs

> [!Note] 插件名片
> - 插件名称：Remove Tabs
> - 插件作者：kuberrr0
> - 插件说明：Removes tabs and the tab bar. Whatever you open replaces what's currently open, so there is only ever one tab. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['界面优化', '效率工具', '样式与美化', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/kuberrr0/obsidian-remove-tabs)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?remove-tabs)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/kuberrr0/obsidian-remove-tabs/master/README.md)



## 概述

**Remove Tabs** 是一款旨在极简化的 Obsidian 插件，其核心功能是彻底移除标签页和标签栏，确保编辑器中始终只显示当前打开的单一笔记。

**适用场景**：适合追求极致专注、反感多标签页干扰的用户，或希望利用分屏（Splits）和弹出窗口（Popout）来管理多文档，而非依赖标签切换的场景。

**核心特色**：
1. **强制单页模式**：任何试图打开新标签的操作（如 Ctrl+点击、中键点击、快捷键）都会在当前标签页内替换内容，而非新建标签。
2. **自动清理**：若通过工作区布局或拖拽意外产生额外标签，插件会自动关闭除当前视图外的所有标签。
3. **保留侧边栏功能**：侧边栏（如文件浏览器、搜索）保留其内部标签页，不影响功能切换；分屏和弹出窗口各自独立且无标签栏。
4. **界面优化**：隐藏主编辑区标签栏，侧边栏折叠时按钮悬浮于笔记头部，macOS 下适配窗口控制按钮。

**使用建议**：
- 该插件目前未上架社区插件目录，需手动下载 `main.js` 等文件至插件文件夹安装，或使用 BRAT 安装。
- 启用插件时会立即关闭除当前查看外的所有标签，且关闭的标签不可恢复，建议提前保存工作区。
- 禁用插件可恢复常规标签行为，但已关闭的标签不会复原。
- 注意快捷键行为变化：`Cmd/Ctrl+T` 变为新建空白页并替换当前内容，`Cmd/Ctrl+W` 变为关闭当前笔记并留白。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---
