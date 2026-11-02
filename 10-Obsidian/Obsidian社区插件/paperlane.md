---
uid: 1793625619901000
title: "Obsidian 插件：Paperlane"
tags: ["第三方工具集成", "效率工具", "发布工具", "obsidian插件"]
description: "Send your Markdown and HTML notes to Instapaper with embedded images and content checks. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Paperlane

> [!Note] 插件名片
> - 插件名称：Paperlane
> - 插件作者：Chulwoo Choi
> - 插件说明：Send your Markdown and HTML notes to Instapaper with embedded images and content checks. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['第三方工具集成', '效率工具', '发布工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/prorhap/obsidian-paperlane)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?paperlane)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/prorhap/obsidian-paperlane/master/README.md)



## 概述

Paperlane 旨在解决 Obsidian 笔记与 Instapaper 阅读列表之间的格式断层问题。它能够将 Markdown 或 HTML 笔记转换为排版整洁的文章，并自动嵌入本地图片，确保内容在 Instapaper 中完整呈现。插件内置了内容检查机制，在发送前预览转换结果，明确标示可能丢失的格式或图片，避免将残缺内容推送到云端。

典型场景包括将长篇技术文档或研究笔记整理后存入 Instapaper 以便在移动端离线阅读。例如，你可以将包含代码块、脚注和 SVG 图表的 Markdown 笔记直接发送，插件会保留这些元素的阅读体验；或者将本地 HTML 文件转换为独立阅读文件，无需联网即可分享。

相比同类工具，Paperlane 无需依赖 LLM、外部图床或邮件自动化，完全在本地完成转换，不修改源文件。它支持将 HTML 表格转换为带标签的阅读列表，并能以最高 2 倍分辨率光栅化 SVG 图表。此外，插件提供本地传输日志，允许用户在不确定上传状态时进行核对，且支持导出独立的 HTML 文件，无需 Instapaper 账号即可使用。

使用前需注意，发送文章必须拥有 Instapaper 账号并配置个人访问令牌，且当前界面使用韩文标签。插件仅支持桌面端 Obsidian，不支持移动端。它不适合需要批量发送、PDF 上传或公共应用 OAuth 的场景，且 Mermaid、Dataview 等复杂插件内容无法完全渲染。若笔记包含敏感信息，请留意远程图片引用可能暴露来源，建议在发送前仔细审查预览内容。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


