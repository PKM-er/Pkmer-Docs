---
uid: 1791709365440000
title: 'Obsidian 插件：Auto Expander'
tags: ['编辑工具', '文字处理', '效率工具', 'obsidian插件']
description: 'Expand text snippets as you type, with support for mobile, regex triggers, and commands. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Auto Expander

> [!Note] 插件名片
> - 插件名称：Auto Expander
> - 插件作者：jeansordes
> - 插件说明：Expand text snippets as you type, with support for mobile, regex triggers, and commands. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['编辑工具', '文字处理', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/jeansordes/auto-expander)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?auto-expander)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/jeansordes/auto-expander/master/README.md)



## 概述

**主要功能**
Auto Expander 是一款文本自动补全插件，能在输入时自动将短触发词替换为预设的文本片段。它支持即时展开或按空格、Tab、回车等键后展开，并允许在展开后执行特定的 Obsidian 命令。

**适用场景**
适用于需要频繁输入固定格式内容的场景，如地址、签名、代码模板或常用短语。特别适合桌面端和移动端用户，用于提升笔记编写效率，减少重复性打字工作。

**核心特色**
1. **灵活触发**：支持字面量触发和正则表达式触发，可利用捕获组（如 `$1`）动态生成内容。
2. **光标控制**：通过 `$0` 精确指定展开后光标位置。
3. **命令集成**：展开后可自动运行一个或多个 Obsidian 命令，实现工作流自动化。
4. **易于管理**：配置存储在 Vault 内的 JSONC 文件中，支持注释，修改后自动重载，无需重启插件。

**使用建议**
1. **安装**：目前可通过 BRAT 插件安装，待社区插件目录上线后可直接搜索安装。
2. **配置**：在设置中点击“Create default file”生成配置文件，编辑其中的 JSON 数组即可定义片段。
3. **技巧**：利用正则表达式触发器处理复杂模式，结合 `$0` 优化后续输入体验，确保配置语法正确以享受自动重载功能。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


