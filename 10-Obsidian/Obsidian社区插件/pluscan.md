---
uid: 1793625620148000
title: "Obsidian 插件：Pluscan"
tags: ["文件管理", "效率工具", "自定义命令", "obsidian插件"]
description: "Install plugins from local folders or zip files inside your vault, with a confirm-before-install card. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Pluscan

> [!Note] 插件名片
> - 插件名称：Pluscan
> - 插件作者：Quasicry
> - 插件说明：Install plugins from local folders or zip files inside your vault, with a confirm-before-install card. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['文件管理', '效率工具', '自定义命令', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/quasicry/pluscan)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?pluscan)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/quasicry/pluscan/master/README.md)



## 概述

Pluscan 专为解决 Obsidian 用户从本地文件或压缩包安装插件的痛点而设计。它允许你将包含 `manifest.json` 和 `main.js` 的插件文件夹或 zip 文件直接放入库内的指定目录，通过扫描功能批量识别并安装。核心优势在于其“确认前审查”机制，在安装前会展示插件清单、兼容性信息及更新日志，确保你完全了解即将安装的内容，且支持从远程 URL 或 GitHub Releases 直接解析安装，无需依赖 GitHub API，完全离线可用。

典型场景包括：当你从网上下载了一个第三方插件的 zip 包，只需将其拖入库内的 `_plugins/` 文件夹，运行扫描即可在列表中勾选并安装；或者当你想尝试某个 GitHub 仓库的最新 Beta 版本，直接粘贴仓库链接，Pluscan 会自动解析最新 Release 资产并处理图标等文件。对于移动端用户，通过 iCloud 或文件管理器将文件同步到库中后，同样可以完成安装，无需额外配置。

相比社区插件管理器，Pluscan 的特色在于其原子化安装与备份机制。它在覆盖旧版本前会自动备份，若备份失败则中止安装以保护数据安全，且自更新时不会删除正在运行的插件目录。此外，它支持五种 UI 语言，包括繁体中文，并允许为每个插件单独设置发布渠道（如 stable 或 beta），提供了比常规安装方式更精细的版本控制能力。

需要注意的是，Pluscan 主要服务于已有本地文件或明确来源链接的用户，不适合那些希望直接在 Obsidian 内浏览、搜索和发现新插件的用户。如果你依赖社区插件市场的发现功能，此插件无法替代。此外，虽然它支持离线安装，但远程 URL 安装仍需网络连接。对于仅使用官方社区插件且习惯一键安装的用户，Pluscan 的批量扫描和手动确认流程可能显得稍显繁琐。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


