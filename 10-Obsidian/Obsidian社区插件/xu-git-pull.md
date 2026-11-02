---
uid: 1793625624847000
title: "Obsidian 插件：XU Git Pull"
tags: ["文件管理", "第三方工具集成", "移动端优化", "备份与恢复", "obsidian插件"]
description: ""
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：XU Git Pull

> [!Note] 插件名片
> - 插件名称：XU Git Pull
> - 插件作者：xcloud-ai
> - 插件说明：
> - 插件分类：['文件管理', '第三方工具集成', '移动端优化', '备份与恢复', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/xcloud-ai/xu-git-pull)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?xu-git-pull)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/xcloud-ai/xu-git-pull/master/README.md)



## 概述

XU Git Pull 专为解决移动端阅读远程笔记的痛点而设计，核心功能是从 GitHub、GitCode 或 Gitee 仓库单向拉取指定分支或提交的文件至本地 Vault。它通过浅克隆技术快速获取数据，并在写入前进行差异预览，确保只更新有变化的文件，绝不删除本地内容，也不回传任何修改，实现了纯粹的“只读”同步体验。

典型使用场景是“电脑端写作，移动端阅读”。例如，你在电脑上将 Obsidian 笔记推送到私有仓库，手机或平板只需点击插件图标，即可在几秒内获得最新资料。对于拥有数千篇笔记的超大仓库，该插件还能通过限速增量模式，仅下载变更文件并支持断点续传，有效规避平台 API 限流，让移动端同步变得轻量且稳定。

相比传统的双向同步插件，XU Git Pull 的最大特色在于其极致的单向性与安全性。它不依赖本地 Git 客户端，也不在移动端维护长期仓库，克隆数据写盘后立即清理，彻底避免了移动端因 Git 操作导致的冲突或数据丢失风险。此外，它支持全量覆盖与限速增量两种模式随时切换，并具备手机锁屏保护功能，确保下载过程不因自动锁屏而中断，特别适合对数据完整性要求极高的用户。

需要注意的是，该插件仅适用于单向拉取场景，不适合需要在移动端编辑并同步回电脑的需求，若需双向同步请选用 obsidian-git 等方案。使用前请确保已正确配置平台 Token（私有库必填），且建议将移动设备定位为只读终端。若你的工作流涉及频繁的移动端修改与合并，此插件可能无法满足需求，因为它不提供提交历史、分支管理或冲突解决功能。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


