---
uid: 1793625620078001
title: "Obsidian 插件：Pictether"
tags: ["文件管理", "备份与恢复", "第三方工具集成", "obsidian插件"]
description: "Local-first external attachments with optional S3-compatible backup and recovery. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Pictether

> [!Note] 插件名片
> - 插件名称：Pictether
> - 插件作者：dhengsun
> - 插件说明：Local-first external attachments with optional S3-compatible backup and recovery. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['文件管理', '备份与恢复', '第三方工具集成', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/dhengsun/obsidian-pictether)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?pictether)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/dhengsun/obsidian-pictether/master/README.md)



## 概述

Pictether 是一款专为 Obsidian 桌面版设计的本地优先外部附件管理器。它的核心目标是解决笔记库中混杂大量图片、视频和 PDF 导致的目录臃肿问题。通过将这些媒体文件统一存储在笔记库之外的指定目录，它保持了笔记库的整洁，同时让你能像往常一样通过粘贴或拖拽自然地在笔记中插入和查看这些附件，无需复杂的配置流程。

想象一下，当你整理一篇包含多张截图和参考视频的长文时，Pictether 会自动将这些文件按“年/月/日/时间戳-随机码”的结构归档到外部文件夹。这种可预测的时间序列命名方式，不仅让文件浏览变得直观，也方便你日后快速定位特定日期的素材。此外，如果你需要将笔记分享给不使用 Obsidian 的同事，只需运行导出功能，即可生成带有相对路径链接的标准 Markdown 文件，确保对方也能正常查看附件。

与仅支持本地存储的插件不同，Pictether 提供了可选的 S3 兼容云备份能力。你可以连接 Cloudflare R2 等对象存储，实现附件的自动备份与缺失恢复，且冲突内容不会被自动覆盖。这种“本地为主、云端兜底”的设计，既保证了日常使用的低延迟，又为数据丢失提供了安全网。同时，它严格遵循 Obsidian 的语言设置，中文界面下自动显示简体中文，无需额外调整。

需要注意的是，Pictether 仅支持 Obsidian 桌面版，且附件使用特殊的 `mdasset://` 协议，这意味着原始笔记在其他 Markdown 工具中无法直接显示附件，必须通过导出功能转换。此外，它不支持音频、HEIC 和 TIFF 格式。最重要的是，插件中的“重置”功能会删除当前附件根目录下所有受管理的本地文件，包括其他笔记库共享的文件，且未备份的文件无法恢复，操作前请务必仔细检查目录和文件数量。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


