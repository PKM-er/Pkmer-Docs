---
uid: 2026042019115806
title: 'Obsidian 插件：Content-Addressed Attachments'
tags: ['文件管理', '数据处理', '第三方工具集成', '效率工具', 'obsidian插件']
description: '基于内容寻址的附件存储，可自动去重。完全在本地运行，也可以选择用 GitHub 私有仓库来托管。'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Content-Addressed Attachments

> [!Note] 插件名片
> - 插件名称：Content-Addressed Attachments
> - 插件作者：NateScarlet
> - 插件说明：基于内容寻址的附件存储，可自动去重。完全在本地运行，也可以选择用 GitHub 私有仓库来托管。
> - 插件分类：['文件管理', '数据处理', '第三方工具集成', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/NateScarlet/obsidian-content-addressed-attachments)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?content-addressed-attachments)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/NateScarlet/obsidian-content-addressed-attachments/master/README.md)



## 概述

### 插件主要功能
该插件实现附件的内容寻址存储，提供类似 IPFS 的功能。包括使用内容寻址存储附件并自动去重，生成和解析 `ipfs://` 链接，下载并缓存外部网页图片，支持多网关，具备迁移工具，可将本地附件批量迁移为 IPFS 链接，还能自动解析 `ipfs://` 链接。

### 适用场景
适用于需要管理附件、处理外部网页图片，且希望实现附件去重存储、离线使用链接的 Obsidian 用户。

### 核心特色
独立于官方 IPFS 网络，完全在本地 Obsidian 库中运行，外部网关可选且可按需配置；支持自动去重，能创建可离线使用的弹性链接。 

### 使用建议
安装可通过 Obsidian 社区插件或手动从 GitHub 下载。添加附件可通过拖放、复制粘贴，`ipfs://` 链接会自动解析。对于外部网页图片，可使用“锁定”功能将其安全缓存到本地。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


