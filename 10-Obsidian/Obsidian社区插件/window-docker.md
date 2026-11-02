---
uid: 1793625624580000
title: "Obsidian 插件：Window Docker"
tags: ["第三方工具集成", "界面优化", "效率工具", "obsidian插件"]
description: "Dock external desktop windows (such as WeChat, Edge, ChatGPT, FlClash, and terminals) directly into tabs and sidebars on Windows. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Window Docker

> [!Note] 插件名片
> - 插件名称：Window Docker
> - 插件作者：Hurvin
> - 插件说明：Dock external desktop windows (such as WeChat, Edge, ChatGPT, FlClash, and terminals) directly into tabs and sidebars on Windows. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['第三方工具集成', '界面优化', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/hurvin/obsidian-window-docker)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?window-docker)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/hurvin/obsidian-window-docker/master/README.md)



## 概述

Window Docker 专为 Windows 桌面用户设计，核心功能是将微信、Edge 浏览器、ChatGPT 等外部桌面应用直接嵌入 Obsidian 的标签页或侧边栏中。它打破了笔记软件与外部工具之间的界限，让你无需频繁切换窗口，即可在 Obsidian 内部像管理原生笔记标签一样管理这些外部程序，实现工作流的无缝整合。

典型场景如：在撰写长文时，将 ChatGPT 固定在右侧边栏，一边参考 AI 生成的内容一边修改笔记；或者在分屏模式下，左侧查看 Edge 中的网页资料，右侧编辑文档。当切换到其他笔记标签时，这些外部窗口会自动隐藏，切回时则自动恢复显示并调整尺寸，极大减少了鼠标在任务栏上的来回移动。

相比同类插件，Window Docker 具备独特的 DWM 硬件级防遮挡能力，确保 Obsidian 的命令面板、右键菜单等 UI 元素始终浮现在外部窗口之上，不会被遮挡。此外，它支持将常用应用固定到左侧功能区图标，并智能区分 Edge 普通窗口与 ChatGPT 窗口，提供专属快捷入口。其安全机制确保在关闭标签页或退出 Obsidian 时，所有外部窗口能自动还原至桌面原始位置，避免窗口丢失。

需要注意的是，该插件仅支持 Windows 桌面版 Obsidian，依赖系统原生 API 运行。如果你使用的是 macOS 或 Linux 系统，或者希望将外部窗口嵌入到移动设备端的 Obsidian 中，此插件并不适用。此外，由于涉及外部窗口嵌入，极少数非标准渲染的老旧软件可能会出现兼容性问题，建议先测试常用软件再全面使用。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


