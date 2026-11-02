---
uid: 1793625624792000
title: "Obsidian 插件：Worktree Switcher"
tags: ["文件管理", "第三方工具集成", "效率工具", "obsidian插件"]
description: "Switch notes and the file tree between Git worktrees in the same window, and inspect changes and Markdown previews. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Worktree Switcher

> [!Note] 插件名片
> - 插件名称：Worktree Switcher
> - 插件作者：Rohit Girdhar
> - 插件说明：Switch notes and the file tree between Git worktrees in the same window, and inspect changes and Markdown previews. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['文件管理', '第三方工具集成', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/rohitgirdhar/obsidian-worktree-switcher)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?worktree-switcher)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/rohitgirdhar/obsidian-worktree-switcher/master/README.md)



## 概述

Worktree Switcher 允许你在同一个 Obsidian 窗口内，直接在不同的 Git worktree 之间切换笔记视图和文件树。它解决了多分支并行开发时，需要频繁重启应用或手动复制文件才能查看不同版本内容的痛点。通过该插件，你可以实时查看特定 worktree 下的文件变更、阅读代码差异（diff）以及预览 Markdown 渲染效果，而无需离开当前工作环境。

典型场景包括：当你正在主分支编写文档，同时需要参考或对比一个功能分支中的修改时，无需切换终端或重启 Obsidian，只需点击插件图标即可瞬间切换到该分支的视图。例如，你可以一边编辑 `hello.md`，一边查看另一个 worktree 中该文件的最新改动，甚至能实时看到其他终端对同一文件的编辑更新，实现无缝的多版本对照阅读。

相比其他仅能列出 worktree 的插件，Worktree Switcher 的核心特色在于“同窗口原位切换”。它会在切换时保留你当前打开的标签页状态，确保视图设置和活跃标签在目标 worktree 中尽可能还原。此外，它具备智能的故障恢复机制：如果当前 worktree 被外部工具删除，插件会在几秒内自动检测并切换回主分支，同时尝试将未保存的文本缓冲备份到恢复文件夹，最大程度减少数据丢失风险。

使用前请注意，该插件仅执行只读的 Git 查询，不会自动创建 worktree、提交代码或合并分支，你需要先通过 Git 命令手动创建好 worktree。它依赖桌面版 Obsidian 的私有 API，虽然会进行兼容性检查，但未来版本更新仍可能导致功能失效。此外，它不适合需要频繁进行 Git 写操作（如提交、推送）的用户，也不支持非文本编辑器的自动恢复，且目前仅在 Linux 上完成了完整的图形界面验证，macOS 和 Windows 用户需自行评估稳定性。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


