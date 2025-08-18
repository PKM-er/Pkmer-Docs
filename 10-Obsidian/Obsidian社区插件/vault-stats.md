---
uid: 2025081220015044
title: 'Obsidian 插件：Vault Stats'
tags: ['数据分析', '数据处理', '效率工具', 'obsidian插件']
description: '提供多种方法来获取仓库的统计信息，像笔记数量、总字数、最近修改的笔记等等。'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Vault Stats

> [!Note] 插件名片
> - 插件名称：Vault Stats
> - 插件作者：Blue Heron
> - 插件说明：提供多种方法来获取仓库的统计信息，像笔记数量、总字数、最近修改的笔记等等。
> - 插件分类：['数据分析', '数据处理', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/blueheron786/obsidian-stats-plugin)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?vault-stats)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/blueheron786/obsidian-stats-plugin/master/README.md)



## 概述

### Vault Stats插件总结
1. **主要功能**：提供两个全局函数用于获取笔记库统计信息。`showStats()`返回笔记库的笔记数量、单词总数、链接和标签的Markdown摘要；`showLastModifiedNotes()`返回最近修改笔记的Markdown列表，可指定显示数量和排除文件夹。
2. **适用场景**：适用于需要了解笔记库整体情况，如笔记数量、字数等，以及快速查看最近修改笔记的场景。可结合DataviewJS在笔记中灵活展示统计信息。
3. **核心特色**：提供简洁易用的全局函数，方便从DataviewJS或其他脚本调用，获取笔记库统计信息。用户能根据需求定制显示最近修改笔记的数量和排除特定文件夹。
4. **使用建议**：在Obsidian社区插件中安装该插件。在笔记里创建DataviewJS代码块，调用相应函数展示统计信息。可按需调整`showLastModifiedNotes()`的参数，以满足不同需求。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


