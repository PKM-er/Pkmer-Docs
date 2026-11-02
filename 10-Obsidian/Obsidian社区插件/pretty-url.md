---
uid: 1793625620228000
title: "Obsidian 插件：Pretty URL"
tags: ["样式与美化", "界面优化", "模板与链接处理", "obsidian插件"]
description: "Turn URLs into responsive, Material-inspired card grids in your notes. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Pretty URL

> [!Note] 插件名片
> - 插件名称：Pretty URL
> - 插件作者：Kamil Graczyk
> - 插件说明：Turn URLs into responsive, Material-inspired card grids in your notes. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['样式与美化', '界面优化', '模板与链接处理', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/g-kamil/pretty-url)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?pretty-url)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/g-kamil/pretty-url/master/README.md)



## 概述

Pretty URL 将笔记中的网页链接转化为响应式卡片网格，借鉴 Material for MkDocs 的设计风格。它支持边框、悬停阴影及键盘焦点轮廓，允许为每个链接添加可选描述，并清晰显示目标地址。卡片列数会根据笔记面板宽度自动适配，过长的 URL 会以省略号显示，确保单行整洁且不改变实际链接指向。

典型场景包括整理技术文档或资源列表。例如，在撰写开发指南时，你可以将 MDN、TypeScript 等官方文档链接放入 `url-cards` 代码块，生成整齐的多列卡片，方便快速浏览和点击。若只需简单罗列几个网站，在阅读视图中直接粘贴纯链接或列表，插件会自动将其渲染为卡片网格，无需手动编写代码块，极大提升了笔记的视觉层次感。

相比普通链接列表，该插件的特色在于其原生 Obsidian 语法支持与隐私保护机制。它不依赖外部服务解析页面内容，标题和描述均由用户手动提供。若启用站点图标功能，插件会直接从目标网站获取 favicon 并本地缓存，仅发送必要的请求，不抓取页面 HTML 或预览图。此外，它支持通过 `c=N` 参数固定列数，确保在窄面板中也能保持布局稳定，且完全兼容 Obsidian 的主题变量与打印样式。

使用前需注意，自动卡片功能仅在阅读视图生效，实时预览中需使用显式代码块。若启用图标功能，请求会向目标网站暴露你的 IP 地址，且缓存不会自动过期，需手动清理以更新图标。该插件不适合需要自动抓取网页标题、摘要或图片的场景，也不支持解析 MkDocs 特有的网格标记。对于仅需要简单超链接或复杂非链接网格的用户，此插件可能并非最佳选择。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


