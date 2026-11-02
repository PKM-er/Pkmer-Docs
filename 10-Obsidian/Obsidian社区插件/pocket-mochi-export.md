---
uid: 1793625620154001
title: "Obsidian 插件：Pocket Mochi Export"
tags: ["文件管理", "图片与PDF", "第三方工具集成", "obsidian插件"]
description: "Export card tagged notes and their local images to a .mochi archive for Mochi. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Pocket Mochi Export

> [!Note] 插件名片
> - 插件名称：Pocket Mochi Export
> - 插件作者：theluckystrike
> - 插件说明：Export card tagged notes and their local images to a .mochi archive for Mochi. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['文件管理', '图片与PDF', '第三方工具集成', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/theluckystrike/pocket-mochi-export)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?pocket-mochi-export)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/theluckystrike/pocket-mochi-export/master/README.md)



## 概述

Pocket Mochi Export 旨在解决 Obsidian 笔记与 Mochi 间隔重复应用之间的数据迁移难题。它通过识别笔记中带有特定标签（默认 `#card`）的行作为卡片正面，将其后方的内容作为背面，自动提取这些内容并打包成标准的 `.mochi` 归档文件。整个过程完全在本地 Vault 内完成，不向任何网络主机发送笔记文本、名称或路径，确保隐私安全。

典型使用场景包括将生物笔记中的细胞结构知识点转化为记忆卡片，或整理语言学习中的词汇表。例如，你可以在笔记中用 `#card` 标记问题，下方写答案并嵌入相关图片，运行命令后，插件会生成包含这些卡片及本地图片的 ZIP 文件，直接导入 Mochi 即可开始复习。

相比同类工具，该插件支持导出前预览卡片数量、图片数量及缺失附件列表，避免无效导出。它还能处理同名图片冲突，自动重命名并修正链接。Pro 版本更提供文件夹批量导出功能，支持将每个笔记作为独立牌组，或合并为带子牌组的父牌组，并允许通过命名预设快速切换不同标签和输出设置。

使用前需注意，插件仅支持 PNG、JPG 等常见图片格式，视频和音频会保留为文本。若笔记中无卡片标签，插件不会生成文件。此外，该插件不适合需要实时同步或云端协作的场景，因为它仅生成静态归档文件，需手动导入 Mochi。对于不依赖 Mochi 应用的用户，此插件无实际用途。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


