---
uid: 2025042920504619
title: Obsidian 插件：Note Favicon
tags: ['文件管理', '界面优化', '第三方工具集成', 'obsidian插件']
description: 从笔记的前置元数据里提取 URL，然后在文件树的笔记标题旁边显示与之关联的网站图标。支持标准 URL 和 Base64 编码的图片。
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Note Favicon

> [!Note] 插件名片
> - 插件名称：Note Favicon
> - 插件作者：mdklab
> - 插件说明：从笔记的前置元数据里提取 URL，然后在文件树的笔记标题旁边显示与之关联的网站图标。支持标准 URL 和 Base64 编码的图片。
> - 插件分类：['文件管理', '界面优化', '第三方工具集成', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/mdklab/note-favicon)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?note-favicon)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/mdklab/note-favicon/main/README.md)



## 概述

Note Favicon 是一款 Obsidian 插件，其主要功能是通过从笔记的 frontmatter 中提取 URL 并在文件树中的笔记标题旁显示对应的网站图标（favicon），支持标准 URL 和 base64 编码的图像，帮助用户快速区分和识别笔记。该插件适用于需要视觉化管理大量笔记的场景，特别是当笔记涉及多个网站或来源时，能够显著提升导航效率。插件通过自动获取并显示图标解决了用户需频繁查看笔记内容才能识别来源的问题，同时支持实时更新图标。用户需在 frontmatter 中添加 `favicon` 字段并填入 URL 或 base64 图像数据即可使用。插件通过 Google 的 favicon 服务获取图标并缓存以减少请求，用户也可直接嵌入 base64 图像避免外部请求。插件需读取元数据和修改工作空间的权限，但不收集用户数据。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---



