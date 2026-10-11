---
uid: 1791709370384000
title: 'Obsidian 插件：Terminalogue Presenter'
tags: ['样式与美化', '第三方工具集成', '发布工具', 'obsidian插件']
description: 'Turns a Marp note into an HTML presentation with animated Terminalogue terminals, and opens it in the default browser. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Terminalogue Presenter

> [!Note] 插件名片
> - 插件名称：Terminalogue Presenter
> - 插件作者：Yuichi Mizutani
> - 插件说明：Turns a Marp note into an HTML presentation with animated Terminalogue terminals, and opens it in the default browser. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['样式与美化', '第三方工具集成', '发布工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/yumizu11/obsidian-terminalogue-presenter)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?terminalogue-presenter)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/yumizu11/obsidian-terminalogue-presenter/master/README.md)



## 概述

**1. 主要功能**
该插件将 Obsidian 中的 Marp 笔记转换为 HTML 演示文稿，并自动在默认浏览器中打开。其核心亮点是支持 `termlogue` 代码块，将其渲染为具有打字动画的模拟终端会话，命令逐字输入，输出逐行显示，支持播放与暂停。

**2. 适用场景**
适用于需要制作技术演示、教程或分享开发流程的场景。特别适合在演讲中展示 CLI 操作、安装过程或代码执行效果，使静态文本变为动态视觉体验。

**3. 核心特色**
*   **动态终端动画**：`termlogue` 块呈现逼真的终端打字效果，增强演示互动性。
*   **实时预览**：支持“Watch”模式，编辑笔记时浏览器页面自动刷新，便于即时调整。
*   **安全无执行**：仅作为文本渲染，绝不实际执行任何 Shell 命令，确保安全性。
*   **灵活导出**：可直接在浏览器查看，或导出为 HTML 文件保存在库中。

**4. 使用建议**
*   **环境要求**：仅限 Obsidian 桌面版使用，且需用户自行安装 Marp CLI（如通过 npm 或 scoop）。
*   **路径配置**：若从启动器启动 Obsidian，建议在插件设置中手动指定 Marp 可执行文件的路径，以避免 PATH 环境变量问题。
*   **语法规范**：在笔记中使用 ```termlogue 代码块，并通过 `@theme`、`@prompt` 等指令自定义终端外观。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


