---
uid: 1786577079515005
title: 'Obsidian 插件：Line Ending Controller'
tags: ['编辑工具', '文件管理', '效率工具', 'obsidian插件']
description: '可以按文件或文件夹控制行尾格式（LF/CRLF）。防止Obsidian在你不知情的情况下把CRLF转换成LF。——此插件尚未经过Obsidian官方人员的人工审核。'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Line Ending Controller

> [!Note] 插件名片
> - 插件名称：Line Ending Controller
> - 插件作者：anse
> - 插件说明：可以按文件或文件夹控制行尾格式（LF/CRLF）。防止Obsidian在你不知情的情况下把CRLF转换成LF。——此插件尚未经过Obsidian官方人员的人工审核。
> - 插件分类：['编辑工具', '文件管理', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/anseyuyin/line-ending-controller)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?line-ending-controller)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/anseyuyin/line-ending-controller/master/README.md)



## 概述

### Line Ending Controller插件总结
1. **主要功能**：控制Obsidian中文件或文件夹的行尾格式（LF/CRLF），可在保存文件时自动修复行尾，也能在打开文件时（默认开启）进行修正，还支持手动转换文件行尾格式。
2. **适用场景**：适用于项目使用CRLF格式（如Windows系统、受`.editorconfig`或`.gitattributes`约束）的情况，避免因Obsidian默认将CRLF转换为LF而导致意外的Git差异、CI失败和团队协作问题。
3. **核心特色**：支持按文件或文件夹设置规则，状态栏可直观显示当前文件行尾格式，具备中英文双语界面，语言跟随Obsidian显示语言。
4. **使用建议**：打开“设置→Line Ending Controller”配置规则，通过设置路径前缀和策略来控制不同文件或文件夹的行尾格式，空路径前缀可作为所有文件的默认规则。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


