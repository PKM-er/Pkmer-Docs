---
uid: 1793625623009000
title: "Obsidian 插件：Theme Autoupdater"
tags: ["样式与美化", "备份与恢复", "效率工具", "obsidian插件"]
description: "Keep installed community themes up to date in the background, with a backup before every update and one-click rollback. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Theme Autoupdater

> [!Note] 插件名片
> - 插件名称：Theme Autoupdater
> - 插件作者：Riccardo Bartoli
> - 插件说明：Keep installed community themes up to date in the background, with a backup before every update and one-click rollback. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['样式与美化', '备份与恢复', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/rbartoli/obsidian-theme-autoupdater)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?theme-autoupdater)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/rbartoli/obsidian-theme-autoupdater/master/README.md)



## 概述

Theme Autoupdater 旨在解决 Obsidian 社区主题需手动检查更新导致的版本滞后问题。它会在每次启动 Obsidian 时自动检测已安装的主题，并静默安装与官方更新器一致的版本。核心功能在于实现“无感更新”，让你无需频繁进入设置页面点击检查，即可确保主题始终处于最新状态，同时保留旧版本以备不时之需。

典型场景包括：当你发现主题存在已知 Bug 且作者提示“请更新”时，该插件会在下次启动时自动完成修复，避免你手动操作；或者当你安装了多个主题（如 Minimal 和 Tela），插件会统一处理它们的更新，并在启动通知中清晰列出变更内容，例如“Tela 已更新至 1.2.0”，并提供一键回滚链接，让你能迅速判断是否需要保留新版本。

相比同类工具，其最大特色是极致的安全性与对本地修改的保护。由于主题本质是 CSS 文件，插件在每次写入前都会备份原文件，并严格校验本地 `theme.css` 是否被手动编辑过。若检测到本地修改，它会跳过更新并提示，绝不覆盖你的个性化设置。此外，它具备“失败安全”机制，若 Obsidian 内部接口异常，插件只会提示而不执行写入，确保库文件不受损。

使用前需注意，该插件仅处理标准社区主题，不支持旧版单文件主题。若你习惯深度修改主题 CSS 源码，或依赖特定未发布版本，它可能会因检测到本地差异而停止自动更新，此时需手动处理。此外，回滚后的“跳过版本”记录存储在插件设置中，多设备同步时需确保设置同步，否则其他设备可能重新安装你已回滚的版本。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


