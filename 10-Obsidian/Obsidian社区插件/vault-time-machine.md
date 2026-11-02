---
uid: 1793625624200000
title: "Obsidian 插件：Vault Time Machine"
tags: ["备份与恢复", "文件管理", "效率工具", "obsidian插件"]
description: "Scrub your whole vault back through time: per-note history, diffs and one-click restore, with no git. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Vault Time Machine

> [!Note] 插件名片
> - 插件名称：Vault Time Machine
> - 插件作者：encomjp
> - 插件说明：Scrub your whole vault back through time: per-note history, diffs and one-click restore, with no git. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['备份与恢复', '文件管理', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/encomjp/obsidian-time-machine)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?vault-time-machine)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/encomjp/obsidian-time-machine/master/README.md)



## 概述

Vault Time Machine 为 Obsidian 笔记库提供无需 Git 或同步服务的时间回溯能力。它通过一个直观的时间滑块，让你能像拖动进度条一样浏览整个库的历史状态。核心功能包括查看特定时间点以来所有新增、修改或删除的笔记，并以词级高亮显示具体差异。你可以一键恢复单个笔记、将其另存为副本、找回已删除的文件，甚至批量恢复该时间点后的所有变更，且每次恢复前都会自动保存当前版本，确保操作可撤销。

想象一下，当你误删了重要段落或想找回上周的某个灵感时，只需打开时间机器，拖动滑块到几天前，列表会立即显示当时被修改的笔记。点击任意一条，即可看到当前版本与历史版本的逐词对比，确认无误后点击恢复，内容即刻回到原位。这种体验类似于视频剪辑中的时间轴，让你能精准定位到某次编辑活动，快速验证改动内容，而无需在复杂的版本控制工具中挣扎。

相比依赖 Git 或云端同步的方案，该插件完全本地运行，历史数据存储在库内，不上传任何网络，隐私性极高。它采用智能压缩策略，相同内容只存一份，并随时间推移自动精简旧版本（如每天保留一个版本，一周后改为每小时一个），既节省空间又保留关键节点。此外，它支持桌面和移动端，且能追踪重命名和删除操作，比许多仅记录内容变化的插件更完整。

需要注意的是，该插件仅追踪 Markdown 笔记，不处理附件，且默认跳过超过 2MB 的大文件。历史记录从安装插件那一刻开始，之前的笔记仅以最后修改时间为起点，无法追溯更早的历史。它定位为“安全网”而非完整备份，因此不能替代常规的数据备份方案。如果你需要跨设备同步历史、管理二进制文件，或依赖复杂的分支合并功能，此插件可能无法满足需求。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


