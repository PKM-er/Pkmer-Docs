---
uid: 1793625624209000
title: "Obsidian 插件：Vault Version Control"
tags: ["文件管理", "备份与恢复", "第三方工具集成", "obsidian插件"]
description: "Manage local Git versions, file history, branches, restores, and text diffs inside an Obsidian vault. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Vault Version Control

> [!Note] 插件名片
> - 插件名称：Vault Version Control
> - 插件作者：ZEMAO CHEN
> - 插件说明：Manage local Git versions, file history, branches, restores, and text diffs inside an Obsidian vault. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['文件管理', '备份与恢复', '第三方工具集成', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/czmatwhu/vault-version-control)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?vault-version-control)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/czmatwhu/vault-version-control/master/README.md)



## 概述

Vault Version Control 让 Obsidian 用户无需切换窗口，即可在笔记软件内直接管理本地 Git 版本。它核心解决了笔记修改后无法追溯历史、误删内容难以恢复的痛点，提供提交快照、查看文件历史、分支管理及文本差异对比等功能。通过集成 Git 引擎，你可以像使用专业代码管理工具一样，对知识库进行精细化的版本控制，确保每一次重要修改都有据可查。

典型场景包括：当你重写一篇长文后想找回某个中间版本的措辞，可以直接浏览该文件的提交历史，预览旧版内容并恢复副本，而不会覆盖当前分支；或者在整理笔记结构时，利用并排差异对比功能，直观查看两个版本间的文字增删，快速定位修改细节。此外，若需从远程仓库导入历史数据，插件也提供了安全的初始化流程，方便迁移旧有笔记库。

相比其他仅支持简单备份的插件，其特色在于完整的分支感知提交图谱和受保护的分支切换机制，支持从旧提交点创建新分支。它还提供只读的侧边栏差异视图，具备行号、换行及主题匹配排版，能流畅渲染大文件。此外，插件允许在不删除本地文件的前提下管理忽略规则，并支持非强制性的远程 Fetch 和 Push 操作，兼顾了灵活性与安全性。

使用前需注意，该插件仅支持桌面端，且依赖本地安装的 Git 环境。它并非自动云同步服务，也不支持强制推送或复杂的合并变基操作。Git 历史不等于云端备份，建议先建立独立备份机制。若你的需求是实时多设备同步或无需手动管理的自动备份，此插件可能不适合；它更适合希望主动掌控版本历史、具备一定 Git 基础的用户。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


