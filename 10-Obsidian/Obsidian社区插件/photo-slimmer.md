---
uid: 1791709369199000
title: 'Obsidian 插件：Photo Slimmer'
tags: ['图片与PDF', '文件管理', '效率工具', 'obsidian插件']
description: 'Convert oversized images in your vault to WebP in one pass, updating every link for you, including links written inside code blocks. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Photo Slimmer

> [!Note] 插件名片
> - 插件名称：Photo Slimmer
> - 插件作者：yujia
> - 插件说明：Convert oversized images in your vault to WebP in one pass, updating every link for you, including links written inside code blocks. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['图片与PDF', '文件管理', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/rainajia716/obsidian-photo-slimmer)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?photo-slimmer)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/rainajia716/obsidian-photo-slimmer/master/README.md)



## 概述

**Photo Slimmer** 是一款用于批量优化 Obsidian 仓库中现有大图片的插件。

**主要功能**：一键将仓库中超过指定大小的图片转换为 WebP 格式，并自动更新所有指向该图片的链接。转换后原文件会被移至系统回收站，确保可恢复，同时生成详细的处理报告。

**适用场景**：特别适合清理历史遗留的“图片积压”，尤其是那些在粘贴时未压缩、导致仓库体积膨胀的旧笔记。

**核心特色**：
1. **深度链接修复**：能解析 Markdown 源码，自动更新包括代码块（如画廊嵌入）在内的所有链接，解决了 Obsidian 原生索引无法识别此类链接导致断链的问题。
2. **安全机制**：操作前提供预览，确认后才执行；遇到无法安全转换的图片会保留原样并列出原因，避免数据丢失。
3. **智能命名**：处理文件重名冲突，确保转换过程无覆盖风险。

**使用建议**：适合在仓库体积过大时进行定期维护。建议在非高峰时段运行，并检查最终报告以确认是否有被跳过的特殊图片。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


