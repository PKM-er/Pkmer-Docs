---
uid: 2025060517173591
title: 'Obsidian 插件：Opener: New Tab by Default'
tags: ['编辑工具', '界面优化', '文件管理', 'obsidian插件']
description: '默认在新标签页中打开链接。要是笔记已经在其他标签页打开了，就会直接切换过去。按住 cmd/ctrl 键时，还能在系统应用里打开 PDF 等其他文件格式。'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Opener: New Tab by Default

> [!Note] 插件名片
> - 插件名称：Opener: New Tab by Default
> - 插件作者：LukeMT, Aidan Gibson
> - 插件说明：默认在新标签页中打开链接。要是笔记已经在其他标签页打开了，就会直接切换过去。按住 cmd/ctrl 键时，还能在系统应用里打开 PDF 等其他文件格式。
> - 插件分类：['编辑工具', '界面优化', '文件管理', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/lukemt/obsidian-opener)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?opener)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/lukemt/obsidian-opener/main/README.md)



## 概述

Opener插件是一款专为Obsidian设计的工具，默认将所有文档在新标签页中打开，类似IDE的操作体验。其核心功能包括：自动在新标签页打开Markdown笔记（若已存在则切换至对应标签页）；按住cmd/ctrl键时强制在新标签页打开链接（即使文件已打开）；支持通过系统默认应用打开PDF等外部文件格式。该插件通过底层修补Obsidian内置的`openFile()`函数实现稳定兼容性，尤其适合需要频繁交叉查阅多篇笔记或处理混合格式文件的用户，解决了传统单标签页模式下反复切换/查找已打开文档的痛点。安装可通过BRAT插件或源码编译，提供可自定义的"在图视图中新建标签页"快捷键命令。当前已知限制包括无法唤醒其他Obsidian窗口的已最小化标签页，以及图视图右键菜单需使用专用命令。采用MIT开源协议，支持GitHub提交问题或贡献代码。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---



