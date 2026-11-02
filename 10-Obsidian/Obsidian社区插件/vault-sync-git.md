---
uid: 1793625624192000
title: "Obsidian 插件：Vault Sync for Git"
tags: ["备份与恢复", "第三方工具集成", "安全与隐私", "文件管理", "obsidian插件"]
description: "Sync and back up your vault with GitHub, GitLab, Codeberg, Gitea, Forgejo or Bitbucket on desktop and mobile. No Git install needed. Smart merging, version history and optional end-to-end encryption. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Vault Sync for Git

> [!Note] 插件名片
> - 插件名称：Vault Sync for Git
> - 插件作者：x-o-r-r-o
> - 插件说明：Sync and back up your vault with GitHub, GitLab, Codeberg, Gitea, Forgejo or Bitbucket on desktop and mobile. No Git install needed. Smart merging, version history and optional end-to-end encryption. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['备份与恢复', '第三方工具集成', '安全与隐私', '文件管理', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/x-o-r-r-o/vault-sync-git)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?vault-sync-git)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/x-o-r-r-o/vault-sync-git/master/README.md)



## 概述

Vault Sync for Git 旨在解决 Obsidian 用户跨设备同步与备份的痛点，核心功能是通过 GitHub、GitLab 等主流 Git 托管平台实现库的自动同步。它无需在设备上安装 Git 环境，直接通过 API 与远程仓库交互，确保桌面端与移动端体验一致。每次同步都会生成一个原子提交，不仅实现了数据备份，还完整保留了所有变更的历史记录，让你随时可以追溯笔记的演变过程。

典型使用场景包括多设备协作与数据安全备份。例如，你可以在办公室的电脑上编辑笔记，回家后通过手机查看并补充内容，插件会自动合并两端的修改，无需手动处理冲突。另一个场景是长期知识管理，当误删重要文件时，你可以利用版本历史功能，将单个文件、文件夹甚至整个库恢复到任意之前的时间点，轻松找回被删除的内容。

相比其他同步插件，该工具的最大特色在于“无需 Git 安装”与“智能合并”机制。它采用行级合并策略，能自动处理大多数文本冲突，对于画布和 Frontmatter 则按结构合并，极大降低了手动解决冲突的负担。此外，它提供了可选的端到端加密功能，确保即使托管平台泄露，数据依然不可读。在同步前，编辑器会标记出变更行，允许用户通过可视化差异对比确认修改，这种“先审查后同步”的设计显著提升了操作的安全感。

使用前需注意，该插件要求用户拥有 Git 托管平台的账号，且部分平台如 Gitea 需满足特定版本要求。它不适合那些完全离线使用、不希望数据上传至任何云端服务器的用户，也不适合对 Git 概念完全陌生且不愿配置远程仓库的极简主义者。虽然插件本身免费，但你需要自行管理远程仓库的访问权限。若你追求的是本地局域网同步或无需任何外部账号的纯本地备份方案，此插件可能并非最佳选择。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


