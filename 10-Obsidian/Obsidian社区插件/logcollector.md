---
uid: 1786577079688004
title: 'Obsidian 插件：Logcollector'
tags: ['编程与脚本', '数据处理', '效率工具', 'obsidian插件']
description: '一个简单的代理，用于处理 `console.*()` 调用，它会把日志消息和未捕获的异常复制到一个文件中（可以放在仓库内，也可以放在仓库外）。——这款插件尚未经过 Obsidian 工作人员的人工审核。'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Logcollector

> [!Note] 插件名片
> - 插件名称：Logcollector
> - 插件作者：AwkMan
> - 插件说明：一个简单的代理，用于处理 `console.*()` 调用，它会把日志消息和未捕获的异常复制到一个文件中（可以放在仓库内，也可以放在仓库外）。——这款插件尚未经过 Obsidian 工作人员的人工审核。
> - 插件分类：['编程与脚本', '数据处理', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/awkman00/obsidian-logcollector)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?logcollector)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/awkman00/obsidian-logcollector/master/README.md)



## 概述

### Logcollector插件总结
1. **主要功能**：拦截并将所有`console.*()`输出和未捕获的异常记录到笔记文件（可在保险库内外），日志支持多种格式，如NDJSON、含表格或代码块的Markdown文件、纯文本。
2. **适用场景**：主要面向开发者，也有助于开发者让插件用户协助调试问题，用户安装该插件后，遇到问题可发送日志给开发者。
3. **核心特色**：
    - 可将日志文件放在保险库外，避免因条目过多导致Obsidian崩溃。
    - 支持以本地时间（默认）或UTC格式保存时间戳。
    - 能以纯文本格式记录消息。
4. **使用建议**：使用时需注意，`console.timeLog`和`console.timeEnd`记录的时间不会显示在日志中；在保险库外记录日志时，选项菜单底部文件名的链接不可用；插件无法捕获工作线程消息。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


