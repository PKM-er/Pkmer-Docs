---
uid: 1791709366268000
title: "Obsidian 插件：Copy path button"
tags: ['文件管理', '效率工具', '界面优化', 'obsidian插件']
description: "One-click button in the note tab header that copies the current file's path. - This plugin has not been manually reviewed by Obsidian staff."
author: "AI"
type: "auto"
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Copy path button

> [!Note] 插件名片
> - 插件名称：Copy path button
> - 插件作者：Tyrel Delaney
> - 插件说明：One-click button in the note tab header that copies the current file's path. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['文件管理', '效率工具', '界面优化', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/tyrelh/obsidian-copy-path-button)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?copy-path-button)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/tyrelh/obsidian-copy-path-button/master/README.md)



## 概述

**1. 主要功能**
在笔记标签页头部添加“复制路径”按钮，一键复制当前文件的绝对路径。同时注册命令，支持通过命令面板或自定义快捷键触发复制操作。

**2. 适用场景**
仅适用于桌面端（移动端无绝对路径概念）。适合需要频繁引用文件位置、进行跨软件路径分享、或自动化脚本处理的场景。

**3. 核心特色**
*   **高度可定制**：通过“复制模板”设置，支持 `{{path}}`（绝对路径）、`{{relative}}`（相对路径）和 `{{wikilink}}`（Wiki链接）等变量，并可混合其他文本（如包裹反引号）。
*   **操作便捷**：标签页图标点击或全局快捷键均可快速触发，无需打开命令面板。

**4. 使用建议**
*   **安装**：需手动将 `main.js` 和 `manifest.json` 放入 `.obsidian/plugins/copy-path-button/` 目录并在设置中启用。
*   **配置**：根据需求调整模板，例如使用 `{{relative}}` 便于在代码中引用，或保留默认 `{{path}}` 用于系统级操作。
*   **注意**：该插件未经过 Obsidian 官方人工审核，请自行评估安全性。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---
