---
uid: 1791709366102000
title: 'Obsidian 插件：Code Block Numbers'
tags: ['样式与美化', '界面优化', '编程与脚本', 'obsidian插件']
description: 'Add line numbers, a file name and highlighted lines to code blocks without changing how they are highlighted or run. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Code Block Numbers

> [!Note] 插件名片
> - 插件名称：Code Block Numbers
> - 插件作者：haderlka
> - 插件说明：Add line numbers, a file name and highlighted lines to code blocks without changing how they are highlighted or run. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['样式与美化', '界面优化', '编程与脚本', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/haderlka/obsidian-code-block-numbers)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?code-block-numbers)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/haderlka/obsidian-code-block-numbers/master/README.md)



## 概述

**1. 主要功能**
该插件为 Obsidian 代码块添加行号、文件名标题栏及高亮行显示。支持自定义起始行号，并允许指定高亮特定行或行区间。

**2. 适用场景**
适用于技术笔记、代码片段分享或教程编写。特别适合展示从大型文件中摘录的代码片段，通过自定义起始行号保持与源文件行号一致，便于读者对照。

**3. 核心特色**
*   **非侵入性**：不修改代码本身，语法高亮、复制按钮及代码执行插件（如 Execute Code）均正常运作。
*   **纯净输出**：复制代码时自动排除行号和标题，确保内容干净。
*   **兼容性佳**：支持阅读视图、实时预览、Callout 容器及移动端，兼容明暗主题。
*   **纯 Markdown**：无需插件时仍显示为标准代码块，保持笔记可移植性。

**4. 使用建议**
在代码块首行语言标识后添加参数即可。例如：` ```python title="utils/math.py" start=10 hl=10,13-14 `。其中 `title` 设置文件名（含空格需加引号），`start` 设定起始行号，`hl` 指定高亮行。建议利用 `start` 参数处理代码摘录，以提升专业度和可读性。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


