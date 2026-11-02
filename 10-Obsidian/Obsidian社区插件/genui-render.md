---
uid: 1793625613297001
title: "Obsidian 插件：GenUI Render"
tags: ["图表与可视化", "自动化与AI", "界面优化", "数据处理", "obsidian插件"]
description: "Draw ChatGPT's answer UI — maps, choice questions, stat cards, layouts, charts and source chips — from notes that keep the markup of a ChatGPT data export. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：GenUI Render

> [!Note] 插件名片
> - 插件名称：GenUI Render
> - 插件作者：dolmiaz
> - 插件说明：Draw ChatGPT's answer UI — maps, choice questions, stat cards, layouts, charts and source chips — from notes that keep the markup of a ChatGPT data export. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['图表与可视化', '自动化与AI', '界面优化', '数据处理', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/dolmiaz/GenUI-Render)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?genui-render)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/dolmiaz/GenUI-Render/master/README.md)



## 概述

GenUI Render 专为解决 ChatGPT 数据导出后界面元素丢失的问题而设计。它能在 Obsidian 中直接渲染保留在笔记标记中的 ChatGPT 回答 UI，包括地图、选择题、统计卡片、布局、图表及来源引用等。该插件支持阅读视图和实时预览模式，将原本枯燥的 JSON 或 JSX 代码块转化为可视化的交互组件，让你无需离开笔记软件即可直观查看 AI 生成的复杂内容结构。

典型场景包括回顾历史对话中的地理信息或数据对比。例如，当 ChatGPT 回答中涉及多个地点时，插件会将 `map_widget` 渲染为带编号的地点卡片，点击“Show map”即可在 OpenStreetMap 上查看具体位置；若回答包含选择题，插件会生成可点击的选项芯片，你甚至可以将答案直接保存回笔记中。此外，对于包含图表或复杂布局的回答，插件能将其还原为类似 ChatGPT 原生的视觉呈现，方便后续整理和引用。

相比其他仅处理纯文本的插件，GenUI Render 的特色在于对 ChatGPT 特定标记格式的精准解析。它不仅能处理旧版的 `chatgpt-ui` JSON 块，还支持 2026 年 10 月后新答案中的 JSX 风格标记，如 `<Chart/>`、`<box>` 布局及 `<Cite>` 来源芯片。插件具备高度的隐私保护意识，默认不发送任何数据，仅在用户主动请求地图或图片时才进行必要的网络请求，且所有图片下载后均本地缓存并记录版权信息。

使用前需注意，该插件依赖 ChatGPT 官方导出的特定标记格式，若你使用的是其他 AI 工具或手动整理的笔记，可能无法直接渲染。此外，插件中的“Save answers”功能会重写代码块，若后续重新导入笔记可能会覆盖已保存的答案。对于不需要查看地图或图片，仅关注文本内容的用户，此插件可能显得功能过剩；且由于部分动态内容（如模板代码计算）仅显示占位符，不适合需要完全复现 ChatGPT 实时交互体验的场景。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


