---
uid: 1793625616267000
title: "Obsidian 插件：Memory Saver"
tags: ["导航与状态栏", "效率工具", "移动端优化", "obsidian插件"]
description: "Save memory on resource-constrained machines: choose which community plugins load at start-up, per device (Standard, Lite or Extreme), with memory and plugin count in the status bar. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Memory Saver

> [!Note] 插件名片
> - 插件名称：Memory Saver
> - 插件作者：Mohammed Ilyas Suder
> - 插件说明：Save memory on resource-constrained machines: choose which community plugins load at start-up, per device (Standard, Lite or Extreme), with memory and plugin count in the status bar. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['导航与状态栏', '效率工具', '移动端优化', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/mohammedsuder/obsidian-memory-saver)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?memory-saver)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/mohammedsuder/obsidian-memory-saver/master/README.md)



## 概述

Memory Saver 专为内存受限的设备设计，核心功能是在 Obsidian 启动时按需加载社区插件。它提供标准、精简和极致三种启动模式，允许用户决定哪些插件在开机时运行，其余插件则完全不加载，从而避免占用内存。同时，状态栏会实时显示当前窗口的内存占用和插件数量，让你直观看到优化效果。

典型场景包括在低配置笔记本上日常使用，或是在共享虚拟桌面上快速记录笔记。例如，你可以将主电脑设为“标准”模式以加载所有插件，而将同一库同步到旧笔记本时设为“精简”模式，仅加载每日必需的少数插件。若需临时使用未加载的插件，可通过“立即加载”功能临时启用，直到下次重启。

相比同类插件，Memory Saver 的特色在于其“启动时拦截”机制。由于 Obsidian 基于 Electron，插件一旦加载，即使中途关闭也几乎不释放内存，因此只有不加载才能真正节省资源。该插件通过修改插件加载顺序，在启动阶段跳过非必需插件，且具备安全回退机制，若插件失效则自动恢复默认加载行为，确保稳定性。

使用前需注意，该插件仅支持桌面端，且依赖 Obsidian 内部接口，未来版本更新可能导致行为变化。它仅影响社区插件，核心插件始终按设置加载。此外，精简模式的初始列表包含安装时已启用的所有插件，需手动取消勾选不常用项才能生效。如果你追求极致性能且能接受偶尔重启以释放内存，此插件非常合适；但若你依赖所有插件同时在线，或主要使用移动端，则无需安装。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


