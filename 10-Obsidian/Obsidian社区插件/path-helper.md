---
uid: 1791709369154000
title: 'Obsidian 插件：Path Helper'
tags: ['文件管理', '效率工具', '自定义命令', 'obsidian插件']
description: 'Helpers for working with file paths: open clipboard paths in Obsidian, reveal folders, and more. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Path Helper

> [!Note] 插件名片
> - 插件名称：Path Helper
> - 插件作者：Monar Vita
> - 插件说明：Helpers for working with file paths: open clipboard paths in Obsidian, reveal folders, and more. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['文件管理', '效率工具', '自定义命令', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/737893911/obsidian-plugin-path-helper)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?path-helper)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/737893911/obsidian-plugin-path-helper/master/README.md)



## 概述

**Path Helper** 是一款专为桌面版 Obsidian（1.4.0+）设计的文件路径辅助插件，旨在解决从系统文件管理器复制绝对路径后难以在 Obsidian 中快速定位的问题。

**主要功能**：核心功能是将剪贴板中的绝对文件/文件夹路径直接解析并打开。它支持在当前 Vault 及其他已注册 Vault 中查找目标，并在文件资源管理器中高亮显示。此外，它还具备跨 Vault 同步插件配置的能力，且不会覆盖本地设置。

**适用场景**：适用于多 Vault 用户、经常需要在系统资源管理器与 Obsidian 之间切换文件的场景，特别是当文件分散在不同 Vault 中需要快速定位时。

**核心特色**：
1. **跨 Vault 解析**：不仅能打开当前库文件，还能智能识别其他已注册库中的路径。
2. **智能同步**：支持在选定 Vault 间安装/更新插件，自动排除 Sandbox 库，并检测目录名与 Manifest ID 不一致的安装情况。
3. **灵活展示**：可选择打开与父文件夹同名的笔记，或在资源管理器中直接揭示文件夹。

**使用建议**：
1. 仅支持桌面端，因依赖 Electron/Node.js API。
2. 建议为“Open clipboard path in Obsidian”命令绑定快捷键，以提升操作效率。
3. 手动安装时需确保文件放入正确的插件目录（默认 `.obsidian/plugins/path-helper/`），若使用自定义配置目录请相应调整。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


