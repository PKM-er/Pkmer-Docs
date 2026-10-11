---
uid: 1791709368899000
title: 'Obsidian 插件：Notes to Kindle'
tags: ['第三方工具集成', '文件管理', '效率工具', 'obsidian插件']
description: 'Convert notes to EPUB locally and send them to Amazon Kindle using an unofficial desktop integration. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Notes to Kindle

> [!Note] 插件名片
> - 插件名称：Notes to Kindle
> - 插件作者：Francisco
> - 插件说明：Convert notes to EPUB locally and send them to Amazon Kindle using an unofficial desktop integration. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['第三方工具集成', '文件管理', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/franchixco/notes-to-kindle)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?notes-to-kindle)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/franchixco/notes-to-kindle/master/README.md)



## 概述

**Notes to Kindle** 是一款将 Obsidian 笔记直接转换为 EPUB 并发送至 Kindle 的桌面插件。

**主要功能**：在 Obsidian 桌面端本地将当前笔记转为 EPUB，通过 Wi-Fi 以个人文档形式发送至 Kindle，支持自动处理标题与作者信息。

**适用场景**：适合希望将个人知识库、长文笔记或阅读材料离线同步至 Kindle 进行沉浸式阅读的用户。

**核心特色**：
1. **本地转换**：数据在本地处理，隐私安全。
2. **远程图片安全处理**：智能识别 Markdown 中的 HTTPS 图片，发送前需用户确认。采用 SSRF 加固传输，限制仅访问公网 IP，严格 TLS 验证，且不发送任何 Cookie 或授权头。
3. **格式兼容**：自动转换本地透明 PNG 和 WebP 为 JPEG；对远程图片有严格的安全限制（如单次最多 20 个 URL，15 秒超时），失败时优雅降级为替代文本，确保发送不中断。

**使用建议**：
- 确保 Obsidian 与 Kindle 处于同一 Wi-Fi 网络。
- 发送含远程图片的笔记时，留意确认提示，可选择跳过远程图片以保护隐私或加快发送速度。
- 注意该插件为非官方集成，未获 Amazon 认可，请自行评估风险。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


