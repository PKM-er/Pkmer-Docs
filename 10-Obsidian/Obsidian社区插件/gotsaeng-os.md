---
uid: 1786577078111000
title: 'Obsidian 插件：GotSaeng OS'
tags: ['数据处理', '发布工具', '效率工具', 'obsidian插件']
description: '把本地的Markdown仓库上下文编译成GotSaeng操作系统上下文包。——Obsidian官方人员尚未对这个插件进行人工审核。'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：GotSaeng OS

> [!Note] 插件名片
> - 插件名称：GotSaeng OS
> - 插件作者：GotSaeng OS contributors
> - 插件说明：把本地的Markdown仓库上下文编译成GotSaeng操作系统上下文包。——Obsidian官方人员尚未对这个插件进行人工审核。
> - 插件分类：['数据处理', '发布工具', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/wonkwonlee/gotsaeng-os)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?gotsaeng-os)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/wonkwonlee/gotsaeng-os/master/README.md)



## 概述

### GotSaeng OS插件总结
1. **主要功能**：将本地分散的Markdown笔记编译成适合模型使用的上下文包，扫描本地Markdown库，生成如`PROJECT_CONTEXT.md`、`MEMORY_SNAPSHOT.md`等多种文件。
2. **适用场景**：适用于有整理分散Markdown笔记需求，希望将其转化为特定格式上下文包的用户，比如知识管理、项目文档整理场景。
3. **核心特色**：本地优先，无需云服务，不进行数据追踪，保障用户数据安全和隐私；无需安装，使用便捷。
4. **使用建议**：需Node.js 20或更高版本。使用时通过命令行操作，`npx -y @gotsaeng/cli@0.12.0 compile <vault> --output <dir> --project "<name>"`，其中`--output`和`--project`为必需参数。可参考示例库`./examples/sample-vault`进行操作。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


