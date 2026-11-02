---
uid: 1793625620785000
title: "Obsidian 插件：Repo Board"
tags: ["第三方工具集成", "任务管理", "效率工具", "obsidian插件"]
description: "A board of your GitHub repos in a tab: open issues as tasks you can tick off, and whether each plugin or theme release is ready for the directory. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Repo Board

> [!Note] 插件名片
> - 插件名称：Repo Board
> - 插件作者：Ash Otis
> - 插件说明：A board of your GitHub repos in a tab: open issues as tasks you can tick off, and whether each plugin or theme release is ready for the directory. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['第三方工具集成', '任务管理', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/ashotis/Repo-Board)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?repo-board)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/ashotis/Repo-Board/master/README.md)



## 概述

Repo Board 将你的 GitHub 仓库转化为 Obsidian 标签页内的可视化看板，核心功能是集中管理公开仓库的待办事项与发布状态。它把每个仓库的未关闭 Issue 呈现为可勾选的任务，并依据 Obsidian 社区目录的审核标准，直观显示最新 Release 是否包含必要文件、版本号是否匹配，从而让你一眼掌握所有项目的健康度。

对于同时维护多个插件或主题的开发者的典型场景非常实用。例如，当你需要快速确认哪个仓库的 `manifest.json` 版本高于已发布版本，或哪个 Release 缺少 `main.js` 时，看板上的红黄绿状态点能立即指出问题所在。此外，你可以通过勾选框直接关闭或重新打开 Issue，无需切换浏览器，甚至能在看板内直接创建带标签的新任务，大幅减少上下文切换成本。

相比同类工具，Repo Board 的特色在于深度整合了“发布合规性检查”与“开发活跃度追踪”。它不仅展示任务，还内置了类似 GitHub 贡献图的年度提交热力图，显示连续记录和最忙碌的一天。此外，它支持通过标签过滤、隐藏已完成项，并具备“Dim empty”功能，在专注模式下自动淡化无待办事项的仓库，让需要处理的工作项更加突出。

使用前需注意，该插件主要面向公开仓库，若需管理私有仓库，必须配置具有相应权限的细粒度个人访问令牌，且令牌会存储在本地 `data.json` 中，切勿在共享库中泄露。它不适合需要复杂工作流自动化、非 GitHub 平台支持，或仅希望查看代码而不涉及 Issue 管理的用户。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


