---
uid: 1793625614843001
title: "Obsidian 插件：Linker"
tags: ["模板与链接处理", "多媒体", "文件管理", "效率工具", "obsidian插件"]
description: "Automatically embed attachments and YouTube videos, customize Wiki-links, and link to files outside your vault. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Linker

> [!Note] 插件名片
> - 插件名称：Linker
> - 插件作者：bratietokone
> - 插件说明：Automatically embed attachments and YouTube videos, customize Wiki-links, and link to files outside your vault. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['模板与链接处理', '多媒体', '文件管理', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/bratietokone/Linker4Obsidian)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?linker)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/bratietokone/Linker4Obsidian/master/README.md)



## 概述

Linker 是一款专为桌面端 Obsidian 设计的链接管理插件，旨在解决笔记中附件引用格式混乱的问题。它的核心功能是自动识别并规范化 Wiki 链接：Markdown 笔记保持为标准的 `[[note.md]]` 格式，而图片、PDF、音频和视频等附件则自动转换为 `![[file.ext]]` 嵌入格式。此外，它还能将独立的 YouTube 视频链接自动转换为内嵌播放器，让笔记内容更加直观且易于阅读，无需手动调整每个链接的代码格式。

在日常写作中，当你通过 `[[` 自动补全选择文件，或直接拖拽、粘贴文件到笔记时，Linker 会立即根据预设规则处理链接。例如，粘贴一张本地照片会自动变为嵌入图片，而粘贴一个 YouTube 视频地址则会直接生成可播放的视频窗口。这种即时处理机制确保了新创建的链接始终符合你的排版习惯，减少了后续手动修改的繁琐工作。

相比同类插件，Linker 的一大特色是支持创建指向库外文件的链接。你可以使用 `file:///` 或 `[[external:...]]` 格式链接到电脑本地的其他文件或文件夹，点击即可通过操作系统打开，且不会复制文件到库中。此外，插件提供“预览变更”功能，允许你在批量转换当前笔记或整个库的链接前审查修改内容，确保操作安全。所有功能均在本地运行，无需联网或上传数据，隐私性极佳。

需要注意的是，Linker 仅支持 Windows、macOS 和 Linux 桌面版，移动端用户无法使用。如果你主要依赖移动端同步笔记，或不需要处理库外文件链接，此插件可能并非必需。另外，虽然插件支持批量转换，但建议在大规模操作前备份库数据，以防规则配置不当导致链接格式意外变更。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


