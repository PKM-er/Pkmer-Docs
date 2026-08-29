---
uid: 1786577076867005
title: 'Obsidian 插件：Cimu Print'
tags: ['文字处理', '编辑工具', '效率工具', 'obsidian插件']
description: '在 Obsidian 里直接进行打印预览和打印操作。——Obsidian 官方人员尚未对这个插件进行人工审核。'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Cimu Print

> [!Note] 插件名片
> - 插件名称：Cimu Print
> - 插件作者：此沐
> - 插件说明：在 Obsidian 里直接进行打印预览和打印操作。——Obsidian 官方人员尚未对这个插件进行人工审核。
> - 插件分类：['文字处理', '编辑工具', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/cimu233/obsidian-cimu-print)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?cimu-print)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/cimu233/obsidian-cimu-print/master/README.md)



## 概述

### Cimu Print插件总结
1. **主要功能**：实现Obsidian桌面打印，可对笔记、选区、文件夹或非Markdown视图进行打印预览并直接打印，还提供本地CLI供代理和脚本使用。
2. **适用场景**：适用于需要在Obsidian中直接打印内容的用户，如办公场景下打印笔记、文档等。
3. **核心特色**：独立实现，有自己的源码结构等；不使用Electron `webContents.print()`；打印过程包括捕获内容、渲染分页、生成PDF、验证页数、读取打印机能力等；CLI能让Markdown在Obsidian内渲染，保证渲染效果一致。支持多种打印选项，如单双面、缩放比例等。
4. **使用建议**：构建或安装后需重新加载插件。可从保险库根目录运行脚本，也可设置 `CIMU_PRINT_VAULT` 或传递 `--vault` 参数。每个命令返回JSON格式结果。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


