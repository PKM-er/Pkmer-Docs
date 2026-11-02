---
uid: 1793625619309000
title: "Obsidian 插件：Open Folder in VS Code"
tags: ["文件管理", "第三方工具集成", "效率工具", "obsidian插件"]
description: "Right-click one folder, or several folders, and open them in Visual Studio Code. Several folders open as one multi-root workspace. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Open Folder in VS Code

> [!Note] 插件名片
> - 插件名称：Open Folder in VS Code
> - 插件作者：Synaphi
> - 插件说明：Right-click one folder, or several folders, and open them in Visual Studio Code. Several folders open as one multi-root workspace. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['文件管理', '第三方工具集成', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/synaphi/open-folder-in-vscode)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?open-folder-in-vscode)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/synaphi/open-folder-in-vscode/master/README.md)



## 概述

Open Folder in VS Code 旨在解决 Obsidian 用户需要频繁在笔记库与代码编辑器之间切换文件夹的痛点。它通过右键菜单提供直接入口，允许用户将选中的文件夹作为工作区在 Visual Studio Code 中打开。该插件设计极简，仅添加一个菜单项，不执行任何索引、网络请求或后台任务，确保操作轻量且无干扰。

典型场景包括快速查看特定项目目录或整理多模块代码。例如，你可以右键点击“前端”文件夹，直接在 VS Code 中打开该目录进行开发；若需同时处理多个独立模块，可按住 Alt 键点击多个文件夹名称，再执行同一命令，它们将合并为一个多根工作区在单一窗口中打开，方便跨目录引用。

相比其他集成插件，其核心特色在于“所见即所得”的精准控制与极低的资源占用。它严格遵循指针位置，只打开你明确选中的文件夹，而非整个库或当前笔记。此外，它支持多语言界面，能自动跟随 Obsidian 的显示语言（如韩文、日文等），并在路径缺失时明确报错而非盲目猜测，保证了行为的确定性与稳定性。

使用前请注意，该插件仅支持 Windows、macOS 和 Linux 桌面端，移动端不可用。它要求系统已安装 VS Code 且 `code` 命令可用，若安装路径非标准，需在设置中手动指定。如果你需要的是自动同步、实时文件监听或复杂的代码分析功能，此插件并不适合，因为它仅专注于“打开文件夹”这一单一动作，不提供任何额外的编辑或监控能力。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


