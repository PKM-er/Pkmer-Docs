---
uid: 1791709365324000
title: 'Obsidian 插件：Annotex'
tags: ['第三方工具集成', '发布工具', '社交与社区', 'obsidian插件']
description: 'Publish the current note to your self-hosted Annotex server so invited colleagues can read it and leave inline, anchored comments. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Annotex

> [!Note] 插件名片
> - 插件名称：Annotex
> - 插件作者：Epipolar Studios
> - 插件说明：Publish the current note to your self-hosted Annotex server so invited colleagues can read it and leave inline, anchored comments. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['第三方工具集成', '发布工具', '社交与社区', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/epipolarstudios/annotex-obsidian-plugin)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?annotex-publish)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/epipolarstudios/annotex-obsidian-plugin/master/README.md)



## 概述

**1. 主要功能**
将当前 Obsidian 笔记一键发布至自托管的 Annotex 服务器，生成包含 LaTeX 渲染的在线阅读链接。支持同事进行内联锚定评论，并自动将讨论记录同步回本地库（生成 `.annotex.json` 文件）。

**2. 适用场景**
适用于需要与团队或同事协作审阅文档、论文或技术笔记的场景，特别是涉及数学公式或需要针对特定文本段落进行精确反馈的工作环境。

**3. 核心特色**
*   **自托管隐私**：数据完全由用户掌控，无第三方依赖。
*   **稳定锚定**：通过 Frontmatter 中的 `docId` 确保重命名或编辑后，评论线程不丢失。
*   **双向同步**：服务器作为实时讨论中心，本地自动镜像注释，实现离线备份与版本控制。
*   **LaTeX 支持**：完美渲染数学公式，适合学术或技术文档。

**4. 使用建议**
需先使用 Node 18+ 运行 `npx annotex-server` 启动本地服务器，获取 Admin Token 并在插件中配置。建议定期打开笔记以自动同步最新评论，或手动执行“Sync annotations”命令，确保本地副本与服务器讨论内容一致。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


