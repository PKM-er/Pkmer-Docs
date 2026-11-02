---
uid: 1793625619580000
title: "Obsidian 插件：OpenCode Web Sidebar"
tags: ["第三方工具集成", "界面优化", "效率工具", "obsidian插件"]
description: "Use OpenCode Web in a desktop sidebar with per-vault connections and Markdown math copying. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：OpenCode Web Sidebar

> [!Note] 插件名片
> - 插件名称：OpenCode Web Sidebar
> - 插件作者：hatsune_miku
> - 插件说明：Use OpenCode Web in a desktop sidebar with per-vault connections and Markdown math copying. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['第三方工具集成', '界面优化', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/hatsunemiku533/opencode-web-sidebar)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?opencode-web-sidebar)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/hatsunemiku533/opencode-web-sidebar/master/README.md)



## 概述

OpenCode Web Sidebar 将 OpenCode 的网页界面嵌入 Obsidian 桌面侧边栏，让你无需切换窗口即可在笔记旁直接进行 AI 对话。它支持为每个仓库配置独立的服务器地址和项目目录，兼容本地或远程 HTTP/HTTPS 服务，并可选 Basic Auth 认证。插件本身不启动服务器，也不读取数据库，仅作为前端容器嵌入原生 Web UI，确保交互流畅且数据隔离。

典型场景包括：在撰写技术文档时，直接引用 AI 生成的代码或解释，并通过工具栏的“复制”功能将回复粘贴回笔记。特别地，复制内容中的数学公式会自动还原为 Markdown 源码（如 `$...$`），确保粘贴后在编辑器中正常渲染，而非变成不可编辑的 KaTeX 文本。此外，你可以调整阅读字体和大小，使长文本在侧边栏中更易于阅读，同时保持与 Obsidian 主题一致的深色模式体验。

相比其他同类插件，该插件的核心特色在于对 Markdown 数学公式的精准复制处理，以及针对中文用户的优化界面。它提供北欧蓝配色的工具栏，支持选择微软雅黑、Noto Sans SC 等本地字体，并优化了加粗文本和单行换行的显示效果。插件还具备“记住项目目录”功能，能自动保存和恢复每个仓库的会话状态，避免每次打开时重新选择项目，提升多仓库切换的效率。

使用前请注意，你需要自行启动 OpenCode Web 服务器，插件仅负责连接。它不适合需要直接操作终端或生成对话快照的用户，因为插件不包含终端模拟功能。此外，虽然插件支持远程服务器，但“打开 TUI”功能仅限 Windows 本地环境，且需指向可信脚本。若你依赖移动端同步或需要插件自动管理服务器生命周期，此插件可能无法满足需求，因为它严格遵循“前端嵌入”的设计原则，不干预后端服务。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


