---
uid: 1793625605674000
title: "Obsidian 插件：AI Templates"
tags: ["自动化与AI", "模板与链接处理", "数据处理", "obsidian插件"]
description: "Deterministic Markdown templates for AI agents. Fill a template with JSON and get aligned tables, images in your attachment folder and notes saved where you want. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：AI Templates

> [!Note] 插件名片
> - 插件名称：AI Templates
> - 插件作者：Emanuell
> - 插件说明：Deterministic Markdown templates for AI agents. Fill a template with JSON and get aligned tables, images in your attachment folder and notes saved where you want. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['自动化与AI', '模板与链接处理', '数据处理', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/emanuellcarvalhopires/obsidian-ai-templates)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?ai-templates)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/emanuellcarvalhopires/obsidian-ai-templates/master/README.md)



## 概述

AI Templates 专为解决 AI 代理直接生成 Markdown 时常见的格式混乱问题而设计。它通过确定性的 Liquid 模板引擎，将结构化的 JSON 数据转换为对齐良好的表格、正确嵌入的图片以及保存至指定路径的笔记。该插件作为 AI Ecosystem 的配套模块，不独立开启网络端口，而是通过服务总线注册工具，确保 AI 生成的内容在 Obsidian 中呈现规范且整洁。

典型场景包括自动化生成会议记录或每日笔记。例如，当 AI 代理需要记录一次冲刺回顾时，只需传入包含任务列表和标题的 JSON 数据，插件即可自动填充预定义的 `sprint_report` 模板，生成带有对齐任务表格和正确文件路径的 Markdown 笔记。此外，它支持将图片以 Base64 或本地路径形式传入，自动保存至附件文件夹并嵌入笔记，避免了手动处理二进制文件的繁琐。

相比同类插件，其核心特色在于“确定性”与“自愈验证”。它使用纯解释器模式的 Liquid 引擎，杜绝了 `eval` 等安全风险，并自动处理表格列对齐、管道符转义及换行符转换。每个错误都会明确告知代理哪个字段失败及修复方法，极大提升了 AI 调用的成功率。此外，它提供 `obsidian` 和 `telegram` 两种渲染通道，后者可生成适合 Telegram 网关的 HTML 等宽表格，方便跨平台分享。

使用前需注意，该插件强制依赖 AI Ecosystem 插件，且仅支持桌面端，因为本地附件摄取依赖 Node.js 文件系统 API。它不适合需要完全离线、不安装任何 AI 生态组件的用户，也不适合那些希望 AI 自由发挥格式而非遵循严格模板结构的场景。若你主要使用移动端 Obsidian，或不需要将 AI 输出标准化为固定模板，此插件可能并非最佳选择。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


