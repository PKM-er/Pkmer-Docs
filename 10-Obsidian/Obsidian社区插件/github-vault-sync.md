---
uid: 1793625613375000
title: "Obsidian 插件：Gitless Vault Sync"
tags: ["备份与恢复", "移动端优化", "第三方工具集成", "obsidian插件"]
description: "Sync your notes with a private GitHub repository on desktop and mobile. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Gitless Vault Sync

> [!Note] 插件名片
> - 插件名称：Gitless Vault Sync
> - 插件作者：Tushar
> - 插件说明：Sync your notes with a private GitHub repository on desktop and mobile. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['备份与恢复', '移动端优化', '第三方工具集成', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/triptu/markdown-github-sync)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?github-vault-sync)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/triptu/markdown-github-sync/master/README.md)



## 概述

Gitless Vault Sync 旨在解决 Obsidian 笔记在桌面与移动端之间的同步难题，核心功能是将你的笔记库直接同步到私有的 GitHub 仓库。它无需搭建服务器，也不要求设备安装 Git 环境，通过 GitHub API 实现数据互通。笔记始终存储在你自己拥有的仓库中，并保留完整的版本历史，让你能随时在 GitHub 上浏览和追溯笔记的演变过程。

典型场景包括日常多设备协作与内容冲突处理。例如，你在电脑上编辑笔记后暂停输入或关闭应用，插件会自动同步；若手机和电脑同时修改了同一篇笔记的不同段落，插件会自动合并这些变更。当修改发生冲突时，界面会清晰展示本地与远程的差异，你可以选择保留任意一方、合并为两个版本，或手动编辑组合，确保内容不丢失。

相比传统同步方案，该插件的一大特色是支持 Obsidian 设置同步，包括主题、快捷键和插件配置。这些设置变更在另一台设备生效前需经过你的审查确认，避免了意外覆盖。此外，它提供详细的文件历史记录，允许预览并恢复任意历史版本。隐私方面，插件仅连接 GitHub 官方接口，无遥测、无广告，且完全开源，令牌仅存储在本地安全区域，不经过第三方服务器。

使用前需注意，该插件仅同步 Vault 内的文件及指定设置，不包含附件或外部链接资源。它不适合需要实时毫秒级同步的场景，因为同步触发依赖于输入暂停或应用退出。若你依赖复杂的本地 Git 工作流或需要非 GitHub 平台的同步服务，此插件可能无法满足需求。建议首次使用时仔细检查初始同步预览，确保仓库权限配置正确，以避免数据覆盖风险。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


