---
uid: 1793625613377000
title: "Obsidian 插件：GitSync.md Connect"
tags: ["第三方工具集成", "备份与恢复", "效率工具", "obsidian插件"]
description: "Connect the Git plugin using your existing GitSync.md GitHub sign-in. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：GitSync.md Connect

> [!Note] 插件名片
> - 插件名称：GitSync.md Connect
> - 插件作者：codybontecou
> - 插件说明：Connect the Git plugin using your existing GitSync.md GitHub sign-in. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['第三方工具集成', '备份与恢复', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/codybontecou/gitsync-obsidian-connect)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?gitsync-connect)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/codybontecou/gitsync-obsidian-connect/master/README.md)



## 概述

GitSync.md Connect 专为 iPhone 和 iPad 上的 Obsidian 用户设计，旨在解决移动端配置 Git 同步时的重复登录痛点。它作为 GitSync.md 应用的配套插件，允许用户直接复用已在 GitSync.md 中完成的 GitHub 身份验证，自动配置 Obsidian Git 插件。这意味着你无需在 Obsidian 中再次输入 GitHub 令牌或进行二次登录，即可实现仓库的克隆与同步，极大简化了移动端版本控制的初始设置流程。

典型的使用场景是当你需要在移动设备上管理个人笔记库时。例如，你已在 GitSync.md 中登录并克隆了某个 GitHub 仓库，随后在 Obsidian 中打开该文件夹作为库。此时启用此插件，它会自动将 GitSync.md 的认证信息传递给 Obsidian Git，完成凭据配置。另一个场景是当连接中断或令牌过期时，你可以使用“重新连接”命令快速恢复同步，而无需重新克隆仓库或手动复制复杂的认证字符串。

相比其他仅负责同步的插件，GitSync.md Connect 的核心特色在于其安全的跨应用凭据传递机制。它不直接处理网络请求，而是通过本地 URL 方案在两个应用间交换加密数据，确保令牌和私钥不会暴露在回调 URL 中。此外，它会自动填充缺失的 Git 作者姓名和邮箱，并支持 Obsidian Git 的设备本地凭据存储 API，使得配置过程既安全又自动化，无需用户手动干预底层 Git 配置。

需要注意的是，该插件仅适用于 iOS 设备，且必须配合 GitSync.md 2.8.0 及以上版本使用。它不负责安装 Git 软件，也不配置自动同步间隔，仅处理凭据连接。如果你使用的是 SSH 协议、非 GitHub 仓库，或者希望在不依赖 GitSync.md 应用的情况下独立配置 Obsidian Git，此插件并不适用。此外，由于它依赖 GitSync.md 的账户状态，若你在 GitSync.md 中登出，Obsidian 中已导入的令牌不会自动失效，需手动在 GitHub 或 Obsidian 中撤销。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


