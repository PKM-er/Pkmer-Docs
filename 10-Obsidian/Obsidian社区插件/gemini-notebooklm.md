---
uid: 1793625613287001
title: "Obsidian 插件：Gemini NotebookLM Studio"
tags: ["自动化与AI", "第三方工具集成", "思维导图", "效率工具", "obsidian插件"]
description: "Integrate Google NotebookLM into the right sidebar with notebook switching, multi-file context, grounded chat, and automatic artifact downloads including Mermaid mind maps. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Gemini NotebookLM Studio

> [!Note] 插件名片
> - 插件名称：Gemini NotebookLM Studio
> - 插件作者：justanotherjurastudent
> - 插件说明：Integrate Google NotebookLM into the right sidebar with notebook switching, multi-file context, grounded chat, and automatic artifact downloads including Mermaid mind maps. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['自动化与AI', '第三方工具集成', '思维导图', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/justanotherjurastudent/obsidian-gemini-notebooklm)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?gemini-notebooklm)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/justanotherjurastudent/obsidian-gemini-notebooklm/master/README.md)



## 概述

Gemini NotebookLM Studio 将 Google NotebookLM 深度集成至 Obsidian 右侧边栏，旨在解决在笔记软件中无法直接调用 AI 知识库的问题。它允许用户在不离开 Obsidian 的情况下管理笔记本、上传源文件、进行基于文档的对话，并生成多种 Studio 产物。核心功能包括自动同步本地笔记与云端笔记本，以及通过 `@` 符号快速附加 Vault 中的各类文件作为上下文，实现了从资料整理到 AI 交互的无缝衔接。

典型使用场景包括：当你正在撰写一篇研究笔记时，可以直接在侧边栏询问 NotebookLM 关于该笔记及相关 PDF 文献的具体细节，无需切换浏览器；或者在准备演讲时，一键生成基于当前笔记内容的思维导图或幻灯片大纲。插件会自动检测当前打开的笔记，若该笔记在云端有更新或尚未上传，会在执行查询前自动同步，确保 AI 回答基于最新内容。

相比其他集成插件，其特色在于对生成产物的自动化处理与持久化下载。例如，下载的思维导图 JSON 文件会被自动转换为包含 Mermaid 流程图和层级大纲的 Markdown 笔记，直接融入你的知识库。此外，即使你在生成音频概览或报告时关闭了 Obsidian，插件也会在下次启动时自动完成下载，并允许你自定义保存文件夹，极大提升了长耗时任务的便利性。

使用前需注意，该插件依赖外部命令行工具 `notebooklm-mcp-cli`，需预先安装 Python 3.10+ 并完成 Google 账号登录。它不适合那些希望完全离线运行、或不愿将笔记内容上传至 Google 云端的用户，因为所有查询和生成操作均需通过 Google NotebookLM 服务。此外，由于涉及外部进程调用，若环境配置不当可能导致连接失败，需确保 `nlm` 路径正确配置。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


