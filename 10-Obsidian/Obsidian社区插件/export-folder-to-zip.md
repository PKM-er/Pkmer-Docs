---
uid: 1793625612687000
title: "Obsidian 插件：Export Folder to ZIP"
tags: ["文件管理", "第三方工具集成", "效率工具", "obsidian插件"]
description: "Compress vault folders with 7-Zip or WinRAR: progress, cancel, background mode and flexible save options. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Export Folder to ZIP

> [!Note] 插件名片
> - 插件名称：Export Folder to ZIP
> - 插件作者：Radix
> - 插件说明：Compress vault folders with 7-Zip or WinRAR: progress, cancel, background mode and flexible save options. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['文件管理', '第三方工具集成', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/radixtenshi/obsidian-export-folder-to-zip)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?export-folder-to-zip)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/radixtenshi/obsidian-export-folder-to-zip/master/README.md)



## 概述

Export Folder to ZIP 是一款专为桌面端 Obsidian 设计的压缩工具，旨在解决笔记库文件夹打包分享的痛点。它通过调用系统外部的 7-Zip 或 WinRAR 引擎，将指定文件夹快速转换为 ZIP、7z 或 RAR 等格式。插件在压缩过程中会自动排除 `.obsidian` 和 `.git` 目录，确保生成的压缩包仅包含笔记内容，避免泄露个人配置或版本控制数据，让分享过程更加干净安全。

典型使用场景包括整理项目笔记或备份特定主题库。例如，当你完成一个课程笔记文件夹后，只需右键点击该文件夹并选择“Export folder to ZIP”，即可生成一个不含插件配置的压缩包。另一个场景是向同事分享工作文档，你可以选择“Save next to the folder”选项，插件会自动在文件夹同级目录生成带时间戳的压缩包，既方便查找又避免了覆盖原有文件的风险。

相比其他同类插件，该工具提供了更细致的进度控制与隐私保护。它支持实时显示压缩百分比，并允许用户随时取消任务或将其转入后台运行，状态栏会持续显示进度。此外，插件具备智能的二进制管理功能，若系统未安装压缩引擎，可在用户明确确认后从固定版本下载 7-Zip，并自动校验 SHA-256 哈希值以确保安全。界面完全跟随 Obsidian 的语言设置，支持中文等多语言环境，且承诺不收集任何遥测数据或笔记内容。

需要注意的是，该插件仅支持 Windows、macOS 和 Linux 桌面端，移动端无法使用。它依赖外部系统引擎，因此首次使用前需确保已安装 7-Zip 或 WinRAR，或允许插件下载二进制文件。如果你需要解压文件、定时自动导出或移动端同步功能，此插件并不适合你的需求。它专注于“压缩导出”这一单一动作，不提供复杂的归档管理或加密功能（尽管支持格式选择，但加密选项未在核心功能中强调，主要依赖引擎默认行为）。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


