---
uid: 1793625613369001
title: "Obsidian 插件：GitHub Vault Sync (Desktop)"
tags: ["第三方工具集成", "备份与恢复", "文件管理", "obsidian插件"]
description: "Sync your Obsidian vault with a GitHub repository. Commits local changes, pulls remote updates, and pushes automatically. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：GitHub Vault Sync (Desktop)

> [!Note] 插件名片
> - 插件名称：GitHub Vault Sync (Desktop)
> - 插件作者：xiachong
> - 插件说明：Sync your Obsidian vault with a GitHub repository. Commits local changes, pulls remote updates, and pushes automatically. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['第三方工具集成', '备份与恢复', '文件管理', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/summervvorm/github-vault-sync-desktop)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?github-vault-sync-desktop)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/summervvorm/github-vault-sync-desktop/master/README.md)



## 概述

GitHub Vault Sync (Desktop) 旨在解决 Obsidian 笔记库与 GitHub 仓库之间的同步难题。它直接将 Vault 根目录视为 Git 工作区，无需导出或格式转换，即可实现本地变更提交、远程更新拉取及自动推送。通过调用本地 Git 执行“提交-获取-合并-推送”的安全序列，确保数据在本地与云端之间高效流转，同时内置 .gitignore 机制，自动过滤敏感信息和无关文件，保持仓库整洁。

典型场景包括多设备间的笔记同步与版本管理。例如，你在办公室电脑上修改了项目文档，插件会在后台自动将变更推送到 GitHub；当你回家打开个人电脑时，插件会拉取最新内容并合并，让你无缝继续工作。若两台设备同时修改了同一行文字，插件会保留冲突标记并另存对方版本副本，防止数据丢失，待你手动解决后再次同步即可。

相比其他同步方案，该插件的核心特色在于“零转换”与“安全合并”。它不依赖中间格式，直接操作 Git 对象，效率更高。在冲突处理上，它绝不强制推送，若推送被拒会自动重试；若合并失败，会暂停同步并保留冲突副本，甚至记录合并前的状态分支，允许用户随时回滚。此外，它明确排除了插件配置、工作区状态等易变文件，只同步笔记核心内容与必要设置，避免噪音干扰。

使用前需注意，该插件仅支持桌面端，且要求本机安装 Git 2.28 及以上版本。你需要拥有 GitHub 账号及可推送的仓库权限，认证推荐使用系统凭据助手以保障安全。它不适合需要移动端实时同步的用户，也不适合希望完全自动化、不愿手动处理复杂合并冲突的场景。若你的 Vault 包含大量二进制文件或超大附件，初次推送可能较慢，建议提前规划存储策略。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


