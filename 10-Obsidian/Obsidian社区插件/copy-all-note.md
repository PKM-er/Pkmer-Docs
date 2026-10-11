---
uid: 1791709366248000
title: "Obsidian 插件：Copy All Note"
tags: ['编辑工具', '效率工具', '自定义命令', 'obsidian插件']
description: "Adds a native header button that copies the entire note's Markdown to the clipboard. - This plugin has not been manually reviewed by Obsidian staff."
author: "AI"
type: "auto"
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Copy All Note

> [!Note] 插件名片
> - 插件名称：Copy All Note
> - 插件作者：loganjuhl
> - 插件说明：Adds a native header button that copies the entire note's Markdown to the clipboard. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['编辑工具', '效率工具', '自定义命令', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/loganjuhl/copy-all-note)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?copy-all-note)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/loganjuhl/copy-all-note/master/README.md)



## 概述

**1. 主要功能**
该插件在笔记头部添加原生复制按钮，并注册“复制整个笔记”命令。它直接将当前笔记的 Markdown 源码复制到剪贴板，支持在编辑或阅读视图下使用，也可通过命令面板或快捷键触发。

**2. 适用场景**
适用于需要将笔记内容快速迁移至聊天软件、AI 提示词输入框、终端或其他应用程序的场景。特别适合在分屏或弹出窗口中操作，能精准复制当前视图对应的笔记内容。

**3. 核心特色**
*   **实时缓冲**：直接读取 Obsidian 的活动缓冲区，包含未保存的编辑内容，无需先保存。
*   **格式纯净**：输出标准 Markdown，自动处理换行符（CRLF 转 LF）及移除 BOM 头，确保兼容性。
*   **多端支持**：兼容桌面端与移动端（需 Obsidian 1.13.7+），移动端可自定义工具栏按钮。
*   **轻量无依赖**：无需 Node.js，安装简单，MIT 协议开源。

**4. 使用建议**
安装后建议为“复制整个笔记”命令绑定全局快捷键，以提升操作效率。在移动端，记得在设置中将该命令添加到移动工具栏。注意插件复制的是 Markdown 源码，若需纯文本请自行转换。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---
