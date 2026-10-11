---
uid: 1791709370939000
title: 'Obsidian 插件：Vim Config'
tags: ['快捷键', '编辑工具', '自定义命令', 'obsidian插件']
description: 'Loads a vimrc-style file from your vault so your key mappings and editor commands are ready when vim mode starts. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Vim Config

> [!Note] 插件名片
> - 插件名称：Vim Config
> - 插件作者：siulved54
> - 插件说明：Loads a vimrc-style file from your vault so your key mappings and editor commands are ready when vim mode starts. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['快捷键', '编辑工具', '自定义命令', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/perezamadorluisenrique-gif/vim-config)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?vim-config)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/perezamadorluisenrique-gif/vim-config/master/README.md)



## 概述

**主要功能**
该插件为 Obsidian 的 Vim 模式提供启动配置文件支持。它允许用户从 Vault 中加载类 vimrc 文件，在 Obsidian 启动或保存配置时自动应用自定义按键映射和编辑器命令，解决了原生 Vim 模式缺乏启动脚本的问题。

**适用场景**
适用于习惯使用 Vim 操作逻辑、需要高度自定义快捷键映射，或希望将 Obsidian 编辑器行为与特定 Vim 工作流深度整合的高级用户。

**核心特色**
1. **标准兼容**：直接支持标准 Vim 语法，包括 `map`、`noremap`、`unmap` 及 `mapclear` 等指令，兼容 Vimrc Support 格式。
2. **深度集成**：支持 `exmap` 定义自定义命令，并通过 `obcommand` 调用 Obsidian 内部命令，实现任意命令面板操作。
3. **灵活配置**：支持 `let mapleader` 设置前缀键，以及 `set clipboard=unnamed` 实现与系统剪贴板的无缝同步。
4. **自动生效**：配置修改后保存即可自动重载，无需重启应用。

**使用建议**
1. 首先在设置中开启 Vim 键位绑定。
2. 运行“Open config file”创建配置文件（默认为根目录下的 `.obsidian.vimrc`）。
3. 由于点文件在 Obsidian 中隐藏，建议通过外部编辑器修改，或在插件设置中将文件名改为 `vimrc.md` 以便在 Obsidian 内直接编辑。
4. 修改后保存文件即可自动生效，也可手动执行“Reload config file”刷新。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


