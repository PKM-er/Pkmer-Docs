---
uid: 1793625605968000
title: "Obsidian 插件：Annotate"
tags: ["文字处理", "自动化与AI", "效率工具", "obsidian插件"]
description: "Add threaded comments, highlights, and optional ChatGPT, Claude, or OpenCode replies to selected text. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Annotate

> [!Note] 插件名片
> - 插件名称：Annotate
> - 插件作者：junuxyz
> - 插件说明：Add threaded comments, highlights, and optional ChatGPT, Claude, or OpenCode replies to selected text. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['文字处理', '自动化与AI', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/junuxyz/Annotate)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?annotate)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/junuxyz/Annotate/master/README.md)



## 概述

Annotate 是一款专为 Obsidian 设计的桌面插件，旨在解决笔记中上下文丢失的问题。它允许用户选中任意文本段落，直接添加线程式评论、高亮标记，并支持对选中文本发起 AI 助手回复。核心功能包括在笔记内创建可回复、可编辑、可解决的讨论线程，以及自定义高亮颜色和样式。所有本地评论和高亮数据均保存在 Vault 中，不修改原始笔记内容，且支持离线使用，无需额外账号即可体验基础标注功能。

典型使用场景包括学术阅读与团队协作。例如，在阅读论文时，你可以选中一段晦涩的理论，添加高亮并写下自己的理解，后续点击高亮即可回顾思路或补充新想法；在团队共享笔记库中，成员可以针对特定段落发起讨论，通过线程回复达成共识后标记为“已解决”，保持笔记整洁。此外，若需深入分析，可直接在评论框输入 `@chatgpt` 或 `@claude`，让 AI 基于当前笔记全文和选中片段提供解释或建议。

相比其他标注插件，Annotate 的特色在于其深度的 AI 集成与本地化运行架构。它支持 ChatGPT、Claude 和 OpenCode 三种助手，且请求会携带当前笔记全文、高亮片段及历史评论上下文，确保 AI 回答更贴合笔记语境。插件界面完全适配 Obsidian 主题，自动继承颜色与字体，视觉体验无缝融合。此外，它支持 Markdown、代码块和 LaTeX 渲染，评论能跟随文本编辑和文件重命名自动更新，避免了传统批注工具常见的链接失效问题。

使用前需注意，该插件目前仅支持 macOS Apple Silicon 系统，Windows 和 Linux 用户无法使用。若启用 AI 功能，需配置 Codex 或 Claude 订阅账号，且请求会将笔记内容发送至相应服务商，需自行评估隐私风险。本地评论和高亮功能完全离线，无需网络。不适合需要跨平台同步、或希望完全避免数据离开本地环境的用户。若仅需简单高亮而无评论或 AI 需求，轻量级高亮插件可能更合适。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


