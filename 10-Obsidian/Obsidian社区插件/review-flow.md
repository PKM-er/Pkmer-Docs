---
uid: 1793625620834000
title: "Obsidian 插件：Review Flow"
tags: ["第三方工具集成", "效率工具", "文件管理", "obsidian插件"]
description: "Edit documents and send them for approval through GitHub pull requests, from one simple panel without git in sight. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Review Flow

> [!Note] 插件名片
> - 插件名称：Review Flow
> - 插件作者：Patrik Granlöv
> - 插件说明：Edit documents and send them for approval through GitHub pull requests, from one simple panel without git in sight. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['第三方工具集成', '效率工具', '文件管理', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/granlov/obsidian-review-flow)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?review-flow)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/granlov/obsidian-review-flow/master/README.md)



## 概述

Review Flow 旨在解决在 Obsidian 中编辑文档后，如何安全、规范地将其同步至 GitHub 仓库的问题。其核心功能是提供一个简洁的“Changes”面板，让用户无需了解 Git 命令或配置，即可直接在笔记中起草内容，并通过 GitHub Pull Request 机制发起审批流程。一旦在 GitHub 上获得批准，更改才会正式生效，从而实现了从本地编辑到远程协作的无缝衔接。

典型的使用场景包括团队文档协作与个人知识库的版本控制。例如，当你修改了一份项目规范文档时，只需点击“Send for approval”，系统会自动创建草稿并发起请求；或者当你同时处理多个文档的修订时，可以通过面板顶部的选择器快速切换不同的草稿版本，避免混淆。这种工作流特别适合需要多人审核或希望保留修改痕迹的写作场景。

相比其他仅负责同步文件的插件，Review Flow 的最大特色在于将“审批”这一协作环节内置于编辑流程中，且完全隐藏了底层 Git 操作的复杂性。它强制通过 GitHub 的分支保护机制来确保只有经过批准的更改才能合并，这比单纯的自动同步更具安全性。此外，该插件不收集任何遥测数据，也不包含广告，注重用户隐私与纯净的使用体验。

需要注意的是，该插件仅支持桌面端使用，且必须拥有 GitHub 账号。它会在本地运行 `git` 和 `gh` 命令，这些工具仅与 GitHub 通信，但 `gh auth setup-git` 会修改你的 `~/.gitconfig` 文件以添加登录信息。如果你不需要通过 Pull Request 进行审批，或者主要使用移动端 Obsidian，那么这款插件可能并不适合你的需求。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


