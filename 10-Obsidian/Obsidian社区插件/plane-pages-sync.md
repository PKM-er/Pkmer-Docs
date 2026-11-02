---
uid: 1793625620130000
title: "Obsidian 插件：Plane Sync"
tags: ["第三方工具集成", "发布工具", "效率工具", "obsidian插件"]
description: "Write notes in project folders and publish them as Plane project pages. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Plane Sync

> [!Note] 插件名片
> - 插件名称：Plane Sync
> - 插件作者：Abdullah W.
> - 插件说明：Write notes in project folders and publish them as Plane project pages. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['第三方工具集成', '发布工具', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/abdullahwaqar/obsidian-plane-sync)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?plane-pages-sync)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/abdullahwaqar/obsidian-plane-sync/master/README.md)



## 概述

Plane Sync 将 Obsidian 中的笔记文件夹与 Plane 项目直接关联，实现内容自动发布。核心功能是把指定文件夹内的 Markdown 笔记同步为 Plane 项目页面，同时支持双向同步 Plane 的便利贴（Stickies）。你只需在 Obsidian 中正常写作，插件会在停止输入几秒后自动推送更新，状态栏会实时显示同步进度，无需手动操作即可保持两端内容一致。

典型场景包括团队文档协作与个人任务管理。例如，你可以将“产品架构”文件夹链接到 Plane 的“Clearline Books”项目，每次修改 `Architecture.md` 后，Plane 上的对应页面会自动更新，团队成员无需等待即可看到最新内容。另一个场景是管理待办事项，通过便利贴功能，你在 Obsidian 中修改的彩色便签会同步到 Plane 看板，反之亦然，适合快速记录灵感或临时任务。

相比其他同步工具，Plane Sync 的特色在于对 Obsidian 特有语法的精准转换，如将复选框转为 Plane 清单、Callout 转为对应样式的提示块，且支持双向同步便利贴并自动处理冲突。它还能智能处理笔记重命名和移动，确保 Plane 页面链接不失效。此外，插件仅传输链接文件夹内的内容，不读取库中其他数据，隐私保护较好，且支持自托管 Plane 实例。

使用前需注意，页面同步是单向的（Obsidian 到 Plane），在 Plane 端直接编辑页面会被下次同步覆盖，建议以 Obsidian 为唯一数据源。本地图片目前无法上传，仅支持远程链接。若你的工作流依赖在 Plane 端频繁编辑正文，或需要同步大量本地附件，此插件可能不适合。首次同步大文件夹时，受 API 限制，速度约为每秒一篇笔记，需耐心等待。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


