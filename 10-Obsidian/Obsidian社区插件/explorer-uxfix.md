---
uid: 1793625612684000
title: "Obsidian 插件：Explorer UX Fix"
tags: ["文件管理", "移动端优化", "界面优化", "obsidian插件"]
description: "Long-press a file or folder in the file explorer to rename it. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Explorer UX Fix

> [!Note] 插件名片
> - 插件名称：Explorer UX Fix
> - 插件作者：Hyunyoung Park
> - 插件说明：Long-press a file or folder in the file explorer to rename it. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['文件管理', '移动端优化', '界面优化', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/lugglory/obsidian-explorer-uxfix)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?explorer-uxfix)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/lugglory/obsidian-explorer-uxfix/master/README.md)



## 概述

Explorer UX Fix 旨在优化 Obsidian 文件浏览器的交互体验，主要解决两个痛点：一是提供长按重命名功能，二是防止页面预览遮挡文件列表。长按文件即可直接编辑名称，无需进入编辑模式或寻找菜单，且系统会自动保留文件扩展名。同时，该插件调整了从文件浏览器打开的页面预览位置，使其显示在侧边栏旁而非覆盖在文件列表上，确保你在浏览文件时视线不被遮挡。

想象一下，当你需要快速整理笔记时，只需长按某个文件 0.8 秒，名称就会变成可编辑文本框，输入新名后按回车即可保存，全程无需松开鼠标。或者，当你在右侧边栏查看文件时，鼠标悬停触发的页面预览会出现在边栏左侧，而不是挡住你正在查看的文件列表，让你能同时看到文件结构和内容预览，操作更加流畅。

相比其他仅修复单一问题的插件，Explorer UX Fix 对细节的处理更为周全。它完美兼容中文、日文和韩文输入法，确保在输入过程中按回车不会误触发重命名。此外，重命名操作直接调用 Obsidian 核心文件管理器，因此会自动遵循你设置的“自动更新内部链接”规则，避免断链。对于非法字符或重名情况，插件会给出明确提示而非静默失败，且长按过程中若移动鼠标超过 4 像素会自动转为拖拽移动，防止误操作。

需要注意的是，该插件仅支持桌面端，且依赖 Obsidian 核心插件“Page preview”才能正常显示预览位置。如果你主要使用移动端，或者对文件重命名有复杂的批量处理需求，此插件可能无法满足。另外，设置界面目前仅支持英文和韩文，中文用户需自行对照功能名称进行配置。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


