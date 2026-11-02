---
uid: 1793625610972000
title: "Obsidian 插件：Cloudflare Artifacts Sync"
tags: ["第三方工具集成", "备份与恢复", "文件管理", "移动端优化", "obsidian插件"]
description: "Sync your vault, or one folder of it, with a Cloudflare Artifacts repository (a Git-compatible store). Commit, pull and push with one command or on a timer. Works on desktop and mobile. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Cloudflare Artifacts Sync

> [!Note] 插件名片
> - 插件名称：Cloudflare Artifacts Sync
> - 插件作者：Yoshihiro Arakawa
> - 插件说明：Sync your vault, or one folder of it, with a Cloudflare Artifacts repository (a Git-compatible store). Commit, pull and push with one command or on a timer. Works on desktop and mobile. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['第三方工具集成', '备份与恢复', '文件管理', '移动端优化', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/alancodvo/obsidian-artifacts-sync)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?cloudflare-artifacts-sync)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/alancodvo/obsidian-artifacts-sync/master/README.md)



## 概述

Cloudflare Artifacts Sync 将你的 Obsidian 库或指定文件夹与 Cloudflare Artifacts 仓库同步，提供版本历史和离线备份。它无需 Git 知识，只需粘贴远程 URL 和令牌，即可通过“立即同步”按钮或定时器完成提交、拉取和推送。该插件在桌面和移动端均能运行，自动忽略 `.obsidian` 文件夹和回收站，确保笔记内容安全存储。

典型场景包括多设备笔记同步和团队协作。例如，你可以在笔记本电脑上编辑笔记后同步，再在手机上继续编辑，插件会自动合并更改；若两人同时修改同一笔记，插件会提示冲突，避免数据覆盖。此外，同步后会显示他人修改的笔记列表，方便你了解团队动态，确保编辑前查看最新内容。

相比其他同步插件，它无需 GitHub 账号，直接利用 Cloudflare 的 Git 兼容存储，且支持自动令牌续期。插件仅与 Cloudflare 端点通信，无遥测数据，令牌存储在本地插件数据中。移动端使用 Obsidian 文件访问，无需 Git 客户端，适合大库同步时选择特定文件夹以提升速度。

使用前需拥有 Cloudflare 账户并启用 Artifacts（需 Workers Paid 计划）。注意仓库大小限制为 1 GB，单文件不超过 32 MB。若远程与本地编辑冲突，插件会停止推送并提示用 Git 客户端解决，不会自动覆盖。不适合需要完全离线同步或无 Cloudflare 账户的用户，且多设备同步时需确保分支和文件夹设置一致，避免创建重复仓库。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


