---
uid: 1793625619436001
title: "Obsidian 插件：Open Mode Control"
tags: ["编辑工具", "界面优化", "效率工具", "obsidian插件"]
description: "Open existing notes in reading view and new notes in editing view. Choose the mode for each, and add exceptions for specific files, folders or patterns. The settings are available in multiple languages. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Open Mode Control

> [!Note] 插件名片
> - 插件名称：Open Mode Control
> - 插件作者：H9-
> - 插件说明：Open existing notes in reading view and new notes in editing view. Choose the mode for each, and add exceptions for specific files, folders or patterns. The settings are available in multiple languages. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['编辑工具', '界面优化', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/h9-g/open-mode-control)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?open-mode-control)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/h9-g/open-mode-control/master/README.md)



## 概述

Open Mode Control 旨在解决 Obsidian 中笔记打开模式混乱的问题，核心功能是自动区分“新建笔记”与“已有笔记”，并分别为它们设定默认的打开视图。你可以指定新笔记默认进入编辑模式以便快速输入，而已有笔记则默认进入阅读模式以获得更好的浏览体验。此外，该插件支持将默认行为设置为“不改变”，从而完全遵循 Obsidian 自身的原生逻辑，赋予用户极大的灵活性。

典型的使用场景包括日常记录与文献阅读。例如，当你快速创建一条待办事项或灵感碎片时，插件会自动将其置于编辑视图，让你无需手动切换即可直接打字；而当你点击侧边栏中一篇已完成的长文进行回顾时，它会自动切换至阅读视图，提供整洁的排版效果。这种自动化处理减少了每次打开笔记时手动调整视图的繁琐操作，让工作流更加顺畅。

相比其他仅能全局设置视图的插件，Open Mode Control 的最大特色在于其精细化的例外规则系统。你可以根据特定文件、文件夹或通配符模式（如 `Daily/**/*.md`）添加例外，规则从上到下匹配，首个命中者生效。这意味着你可以让日记文件夹始终处于编辑模式，而将其他所有笔记设为阅读模式。此外，插件提供“将当前笔记加入例外”的命令，方便临时调整，且界面支持包括简体中文在内的八种语言，本地化体验良好。

使用前需注意，插件仅影响 Markdown 笔记，且模式仅在笔记首次打开时应用，后续手动切换或切换标签页不会覆盖你的选择。它通过会话内创建时间（默认10秒窗口）或文件是否为空来判断“新笔记”，同步后打开的笔记会被视为已有笔记。该插件完全本地运行，无网络请求，不收集数据。如果你需要强制所有笔记统一为单一视图，或者希望插件能自动修改笔记内容，则不适合使用此插件，因为它专注于视图控制而非内容编辑。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


