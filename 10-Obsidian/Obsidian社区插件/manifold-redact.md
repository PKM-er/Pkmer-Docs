---
uid: 1791709368279000
title: 'Obsidian 插件：Manifold Redaction'
tags: ['样式与美化', '编辑工具', '文字处理', 'obsidian插件']
description: 'Marks a selected passage as redacted. The Manifold theme draws it as a bar with the words knocked out. Run it again to lift the bar. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Manifold Redaction

> [!Note] 插件名片
> - 插件名称：Manifold Redaction
> - 插件作者：Harald Daltveit
> - 插件说明：Marks a selected passage as redacted. The Manifold theme draws it as a bar with the words knocked out. Run it again to lift the bar. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['样式与美化', '编辑工具', '文字处理', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/vibecodertoolkit/obsidian-manifold-redact)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?manifold-redact)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/vibecodertoolkit/obsidian-manifold-redact/master/README.md)



## 概述

**Manifold Redaction 插件总结**

**1. 主要功能**
该插件用于将选中的文本标记为“涂黑”状态。它通过在编辑器中插入特定标记，配合 Manifold 主题将文字渲染为黑色遮挡条，模拟机密文件审查效果。再次运行命令可移除标记，恢复原文显示。

**2. 适用场景**
适用于使用 Manifold 主题的用户，适合在笔记中模拟文档审查、隐藏敏感信息或进行视觉排版装饰。注意：此功能仅为视觉标记，底层文本仍以纯文本形式保留在文件中，不具备真正的数据加密或隐藏功能。

**3. 核心特色**
*   **主题联动**：专为 Manifold 主题设计，由主题负责渲染视觉条块，插件仅负责放置标记。
*   **交互友好**：支持右键菜单或快捷键操作；编辑当前行时自动暂时移除遮挡以便输入，光标移开后自动恢复。
*   **轻量无依赖**：纯 JavaScript 实现，无构建步骤，安装简单（支持手动复制或 BRAT 插件安装）。

**4. 使用建议**
*   必须配合 Manifold 主题使用，否则无法看到涂黑效果。
*   若需手动标记，也可直接在 Markdown 中编写 `<mark class="redacted">内容</mark>`。
*   请勿将其用于保护真正敏感的数据，因为文本内容在源码中依然可见。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


