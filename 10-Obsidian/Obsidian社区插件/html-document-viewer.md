---
uid: 1791709367614000
title: 'Obsidian 插件：HTML Document Viewer'
tags: ['安全与隐私', '文件管理', '效率工具', 'obsidian插件']
description: 'View static HTML files in a strict no-script, no-network sandbox. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：HTML Document Viewer

> [!Note] 插件名片
> - 插件名称：HTML Document Viewer
> - 插件作者：Tyson Gern
> - 插件说明：View static HTML files in a strict no-script, no-network sandbox. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['安全与隐私', '文件管理', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/initialcapacity/obsidian-html-viewer)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?html-document-viewer)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/initialcapacity/obsidian-html-viewer/master/README.md)



## 概述

**主要功能**
该插件允许用户在 Obsidian 中以只读模式查看 Vault 内的静态 `.html` 和 `.htm` 文件。它通过独立的沙箱化 iframe 渲染文档，确保内容安全隔离，且支持多分屏显示及文件变更后的自动刷新。

**适用场景**
适用于需要快速预览本地保存的网页、HTML 报告或静态文档，同时希望避免执行潜在恶意代码或发起网络请求的场景。

**核心特色**
极致安全是最大亮点。插件实施严格的“无脚本、无网络”策略：
1. **深度净化**：解析并移除所有内联/外部脚本、事件处理器及表单导航。
2. **严格 CSP**：注入限制性内容安全策略，禁止脚本、连接、对象等所有默认资源类型。
3. **资源重写**：仅允许经过路径规范化、魔数验证及尺寸限制后的 Vault 内图片资源，将其重写为安全的 Base64 数据 URL，彻底阻断外部资源加载和路径穿越风险。

**使用建议**
安装后启用插件，直接在文件浏览器中点击 HTML 文件即可打开。建议将其用于查看完全信任的本地静态页面，切勿依赖其执行任何动态交互功能，因为它被设计为纯静态、只读的安全查看器。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


