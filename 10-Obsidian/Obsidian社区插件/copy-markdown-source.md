---
uid: 1791709366259000
title: 'Obsidian 插件：Copy Markdown Source'
tags: ['编辑工具', '文字处理', '效率工具', 'obsidian插件']
description: 'Copy the Markdown source of a selection, including headings and math delimiters, not the rendered preview. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Copy Markdown Source

> [!Note] 插件名片
> - 插件名称：Copy Markdown Source
> - 插件作者：Dominik Bach
> - 插件说明：Copy the Markdown source of a selection, including headings and math delimiters, not the rendered preview. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['编辑工具', '文字处理', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/mit-bach/copy-markdown-source)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?copy-markdown-source)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/mit-bach/copy-markdown-source/master/README.md)



## 概述

**主要功能**
该插件确保在复制选中文本时，剪贴板中保存的是原始的 Markdown 源码（如 `###` 标题标记和 `$$` 数学公式定界符），而非经过渲染后的纯文本预览。它通过写入 `text/plain` 格式，解决了原生复制功能在 Live Preview 或阅读视图中丢失格式标记的问题。

**适用场景**
适用于需要将 Obsidian 笔记内容准确粘贴到外部环境的场景，例如通过聊天软件、电子邮件与其他人分享笔记，或将内容粘贴到代码编辑器、其他 Markdown 编辑器中。

**核心特色**
1. **保留源码完整性**：完整保留标题符号和数学公式定界符，避免粘贴后格式错乱。
2. **无感操作**：启用后无需改变习惯，直接使用常规复制快捷键（Cmd+C）即可生效。
3. **跨平台兼容**：确保粘贴到 Obsidian 外部时，内容依然保持正确的 Markdown 结构。

**使用建议**
1. 在插件设置中启用该插件。
2. 选中需要复制的文本，直接按常规复制快捷键（Mac: Cmd+C, Win: Ctrl+C）。
3. 如需手动触发，可使用命令面板中的“Copy selection as Markdown source”命令。
4. 粘贴到外部应用后，请检查是否保留了预期的 Markdown 格式。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


