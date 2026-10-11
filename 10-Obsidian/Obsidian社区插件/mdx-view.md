---
uid: 1791709368547000
title: 'Obsidian 插件：MDX View'
tags: ['编辑工具', '编程与脚本', '样式与美化', 'obsidian插件']
description: 'Create, edit (via the native Markdown/CodeMirror editor) and preview .mdx files with a sandboxed JSX renderer and support for vault-supplied custom components. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：MDX View

> [!Note] 插件名片
> - 插件名称：MDX View
> - 插件作者：Vijay Kasibhatla
> - 插件说明：Create, edit (via the native Markdown/CodeMirror editor) and preview .mdx files with a sandboxed JSX renderer and support for vault-supplied custom components. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['编辑工具', '编程与脚本', '样式与美化', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/kloudlinq/obsidian-mdx-view)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?mdx-view)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/kloudlinq/obsidian-mdx-view/master/README.md)



## 概述

**MDX View** 是一款让 Obsidian 支持 `.mdx` 文件编辑与实时预览的插件，主要功能是在笔记中渲染交互式 JSX 组件（如图表、自定义组件），同时保留原生 Markdown 编辑体验。

**适用场景**：适合需要构建包含动态图表、复杂图示或自定义交互组件的知识库用户，特别是希望将数据可视化直接嵌入笔记内容的开发者或数据分析师。

**核心特色**：
1. **沙盒预览**：通过隔离的沙盒环境安全渲染 JSX，避免代码访问 Vault 数据，兼顾功能与安全。
2. **原生兼容**：完全支持 Obsidian 的 Wikilinks、嵌入语法及 GFM 标准，无需额外配置即可使用 Mermaid 图表和代码高亮。
3. **自定义组件**：允许用户指定组件文件，直接在笔记中引用如 `<MyChart />` 等自定义组件，无需导入语句。
4. **Frontmatter 联动**：支持在正文中直接引用 YAML 头部的变量，提升内容复用性。

**使用建议**：安装后创建 `.mdx` 文件，点击侧边栏眼睛图标或运行命令打开预览面板。首次打开时需确认信任该文件（因包含 JS 代码）。建议将常用图表或交互组件封装为独立文件，通过插件设置指向该文件，以便在多篇笔记中复用。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


