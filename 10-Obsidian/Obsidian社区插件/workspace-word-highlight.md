---
uid: 1791709371124000
title: 'Obsidian 插件：Workspace Word Highlight'
tags: ['编辑工具', '文字处理', '界面优化', '效率工具', 'obsidian插件']
description: 'Highlight the word under the cursor or selected text across all visible Markdown editor panes. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Workspace Word Highlight

> [!Note] 插件名片
> - 插件名称：Workspace Word Highlight
> - 插件作者：harduino
> - 插件说明：Highlight the word under the cursor or selected text across all visible Markdown editor panes. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['编辑工具', '文字处理', '界面优化', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/harduino/obsidian-workspace-word-highlight)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?workspace-word-highlight)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/harduino/obsidian-workspace-word-highlight/master/README.md)



## 概述

**主要功能**
该插件可在Obsidian的所有可见Markdown编辑器窗格中，高亮显示当前光标所在单词或选中的文本。支持跨不同笔记的分割视图，实现多面板间的实时同步高亮。

**适用场景**
适用于在分屏工作区中同时编辑或阅读多篇笔记的场景，特别是需要快速定位同一术语、变量或关键信息在多个文档中分布位置时。

**核心特色**
1. **跨面板同步**：焦点编辑器的查询会实时共享至其他已注册的编辑器窗格。
2. **非侵入式**：基于CodeMirror装饰实现，不修改笔记源文件。
3. **灵活配置**：支持区分大小写、全词匹配、自定义最小词长及额外字符，并可调节高亮密度与防抖延迟。
4. **主题定制**：提供CSS类名，允许用户通过样式表自定义高亮外观。

**使用建议**
- 确保光标位于单词内部（而非紧邻其后）以触发高亮。
- 选中文本需为单行且长度适中（不超过500个UTF-16单位），多行或超长选区将被忽略。
- 阅读视图不支持此功能。
- 若从旧版本升级，注意重新绑定可能失效的本地快捷键。
- 默认开启Android文本选择保护，若遇移动端兼容问题可尝试调整相关设置。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


