---
uid: 1793625616984001
title: "Obsidian 插件：mozak"
tags: ["自动化与AI", "文件管理", "任务管理", "obsidian插件"]
description: "Project scopes and plans shared with AI agents, stored as plain files. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：mozak

> [!Note] 插件名片
> - 插件名称：mozak
> - 插件作者：fabijan
> - 插件说明：Project scopes and plans shared with AI agents, stored as plain files. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['自动化与AI', '文件管理', '任务管理', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/pitfa19/mozak)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?mozak)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/pitfa19/mozak/master/README.md)



## 概述

mozak 旨在解决多智能体协作时上下文割裂与进度不透明的问题。它通过在项目文件夹中存储纯文本文件（如 mozak.json 和 mozak.md），为每个项目建立唯一且共享的计划。核心功能是让多个编码智能体读取同一份计划，避免重复粘贴上下文，同时允许你在 Obsidian 笔记库中直观地查看项目路线图和进度，实现从“想法”到“执行”的可视化追踪。

典型场景包括并行开发多个项目或处理复杂任务。例如，当你同时使用 Claude Code 和 jcode 处理一个本地应用时，它们都通过 mozak 读取同一份计划，你只需在 Obsidian 中批准下一步骤，智能体即可继续工作。另一个例子是管理未克隆的 GitHub 仓库，mozak 能直接读取远程仓库的计划文件，让你在笔记中监控远程项目的进展，无需手动同步代码。

相比同类插件，mozak 的最大特色是“纯文件”架构与双重审批机制。它不依赖云端、账户或守护进程，所有数据以文件形式存在，若项目纳入 Git 管理，历史版本自动保留。此外，它严格区分“同意方向”与“同意构建”两个审批环节，确保人类始终掌握控制权。其防冲突机制能拒绝基于过期副本的写入，防止多智能体互相覆盖，且支持本地文件夹、Obsidian 库及 GitHub 远程仓库等多种项目形态。

使用前需注意，该插件仅支持 Linux 和 macOS，且要求 Node.js 版本不低于 24.11。它主要面向已使用编码智能体的开发者或研究人员，不适合仅需要简单笔记管理或单一智能体工作的用户。此外，mozak 本身不执行测试，仅记录智能体报告的证据，因此用户需自行验证关键结果。若你的工作流不涉及多智能体协作，或对纯文件存储有顾虑，此插件可能并非最佳选择。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


