---
uid: 1793625612599001
title: "Obsidian 插件：EOS Workspace"
tags: ["模板与链接处理", "文件管理", "效率工具", "obsidian插件"]
description: "Create a local EOS workspace with reusable templates and user-owned apps in your vault. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：EOS Workspace

> [!Note] 插件名片
> - 插件名称：EOS Workspace
> - 插件作者：xixi
> - 插件说明：Create a local EOS workspace with reusable templates and user-owned apps in your vault. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['模板与链接处理', '文件管理', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/ligg1990-cmd/eosidian)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?eos-workspace)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/ligg1990-cmd/eosidian/master/README.md)



## 概述

EOS Workspace 旨在为 Obsidian 用户构建一个本地优先的轻量级工作区，核心功能是在当前库中自动创建 `EOS/` 目录结构。它通过生成 Markdown 文件来管理用户应用，并预置了项目与任务模板，帮助用户快速搭建标准化的笔记环境。该插件专注于提供可靠的基础核心功能，确保所有数据均存储在本地库内，无需依赖外部服务或复杂配置，即可实现工作区的初始化与基础管理。

典型使用场景包括需要快速启动新项目的用户，例如在开始一个新任务时，直接调用插件生成的模板来规范笔记结构，避免从零开始编写大纲。另一个场景是希望将个人应用或工具集成到笔记库中的用户，通过 `EOS/apps/` 目录下的 Markdown 文件，可以方便地记录和管理这些自定义应用，使其与日常笔记无缝共存，形成统一的知识管理体系。

相比同类插件，EOS Workspace 的最大特色在于其“本地优先”与“数据隔离”的设计。它利用 Obsidian 原生 API 运行，不依赖 Python 或 Node 子进程，也不进行任何网络请求或数据收集，彻底消除了隐私泄露风险。此外，插件明确将用户创建的内容存储在插件安装文件夹之外，这意味着即使未来更新或卸载插件，你的笔记和应用数据也不会被意外覆盖或丢失，提供了极高的数据安全性。

需要注意的是，当前版本仅为 MVP（最小可行产品），功能范围有限，不包含旧版 EOS 系统中的知识包、Python 脚本或账户订阅功能。它不适合需要复杂自动化流程、跨平台高级验证或依赖特定执行引擎的高级用户。如果你期望一个功能完备、包含大量预设脚本和云端同步的大型系统，此插件可能无法满足需求，建议仅将其作为本地工作区的起步工具使用。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


