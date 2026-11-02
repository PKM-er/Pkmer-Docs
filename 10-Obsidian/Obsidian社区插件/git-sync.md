---
uid: 1793625606431000
title: "Obsidian 插件：Auto Git Sync"
tags: ["文件管理", "备份与恢复", "自动化与AI", "第三方工具集成", "obsidian插件"]
description: "Automatically commit, push and pull your vault over git, like Obsidian Sync. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Auto Git Sync

> [!Note] 插件名片
> - 插件名称：Auto Git Sync
> - 插件作者：jeff-stapleton
> - 插件说明：Automatically commit, push and pull your vault over git, like Obsidian Sync. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['文件管理', '备份与恢复', '自动化与AI', '第三方工具集成', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/jeff-stapleton/git-sync)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?git-sync)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/jeff-stapleton/git-sync/master/README.md)



## 概述

Auto Git Sync 旨在解决多设备间笔记同步的痛点，它通过 Git 仓库自动执行提交、推送和拉取操作，实现类似官方 Obsidian Sync 的无缝体验。你无需手动点击任何按钮，插件会在你停止输入约 5 秒后自动保存并上传更改，同时每 30 秒检查一次远程更新。无论是桌面端还是移动端，它都能确保你的笔记库始终保持最新状态，让数据在电脑、平板和手机间自由流动。

想象一下这样的场景：你在办公室用电脑撰写了一篇长文，回家后打开手机 Obsidian，无需任何操作，最新内容已自动同步到位。或者，当你在地铁上用手机修改了笔记，回到家中打开电脑时，这些改动也会即时出现在你的工作区。这种“无感”同步特别适合需要在不同设备间频繁切换、且对数据实时性有较高要求的用户，彻底告别了手动导出文件或依赖云盘同步的繁琐流程。

相比其他同步方案，该插件的一大特色是原生支持移动端。桌面端利用系统 Git 引擎保证速度，而移动端则内置 JavaScript Git 引擎，确保 iOS 和 Android 用户也能享受完整的同步功能。此外，它采用标准的 Git 合并机制处理冲突：不同部分的编辑会自动合并，重叠编辑则保留标准冲突标记供你手动解决。状态栏会实时显示同步状态、离线提示或冲突警告，让你对数据状态一目了然，且所有操作均基于 HTTPS 协议，安全性较高。

使用前需注意，该插件要求你拥有一个支持 HTTPS 的私有 Git 仓库（如 GitHub），并配置好访问令牌。它不支持 Git LFS，因此单个文件超过 100 MB 将无法同步，建议将大型附件移出笔记库。此外，删除笔记不会从 Git 历史中移除，若对隐私极度敏感需自行管理仓库历史。如果你需要单笔记级别的版本回溯界面，或拥有数万文件的超大库，该插件可能不是最佳选择，因为内置引擎在超大库下的性能不如系统 Git，且缺乏内置的历史恢复 UI。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


