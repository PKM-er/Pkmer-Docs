---
uid: 1791709367300000
title: 'Obsidian 插件：GitHubPage'
tags: ['第三方工具集成', '发布工具', '编辑工具', 'obsidian插件']
description: 'Edit a GitHub Pages vault natively, preview it with the production renderer, and collaborate through Git. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：GitHubPage

> [!Note] 插件名片
> - 插件名称：GitHubPage
> - 插件作者：cosmosmount
> - 插件说明：Edit a GitHub Pages vault natively, preview it with the production renderer, and collaborate through Git. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['第三方工具集成', '发布工具', '编辑工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/cosmosmount/obsidian-githubpage)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?github-page)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/cosmosmount/obsidian-githubpage/master/README.md)



## 概述

**1. 主要功能**
GitHubPage 是一款仅限桌面端使用的 Obsidian 插件，允许用户直接在 Vault 中编辑、预览并发布 GitHub Pages 网站。它支持使用整个 Vault 或特定文件夹作为 Git 仓库，通过内置的生产级渲染器进行实时预览，并集成 Git 操作（如提交、拉取、推送及创建 PR）。

**2. 适用场景**
适用于希望将 Obsidian 笔记库直接转化为静态博客或文档网站的用户。特别适合需要频繁更新内容、追求本地预览与线上发布效果完全一致，且希望通过 Git 进行版本控制和多人协作的技术型创作者。

**3. 核心特色**
*   **所见即所得**：插件与 GitHub Actions 使用相同的渲染引擎和版本，确保本地预览与最终发布的网站效果完全一致。
*   **高性能渲染**：支持 Markdown、Wiki 链接、嵌入、数学公式等丰富语法，并具备增量构建能力，仅重新构建变更页面，提升效率。
*   **协作友好**：原生支持 Git 工作流，包括安全初始化、分支管理及 PR 创建，简化了发布流程。

**4. 使用建议**
*   确保系统已安装 Git 并配置好远程仓库及用户身份。
*   需使用 Obsidian 1.7.2 及以上版本。
*   安装后，若仓库中无 `.githubpage/site.json`，请先运行“Initialize Starter Vault”命令以安全初始化站点结构，避免覆盖现有文件。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


