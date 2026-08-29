---
uid: 1786577083377000
title: 'Obsidian 插件：TOML INI Viewer'
tags: ['搜索与排序', '数据处理', '效率工具', '图表与可视化', 'obsidian插件']
description: '把 .toml 和 .ini 文件以只读配置树的形式打开，还能进行搜索、查看源文件，并且有解析警告提示。——这个插件还没经过 Obsidian 官方人员的人工审核哦。'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：TOML INI Viewer

> [!Note] 插件名片
> - 插件名称：TOML INI Viewer
> - 插件作者：Viggo Meesters
> - 插件说明：把 .toml 和 .ini 文件以只读配置树的形式打开，还能进行搜索、查看源文件，并且有解析警告提示。——这个插件还没经过 Obsidian 官方人员的人工审核哦。
> - 插件分类：['搜索与排序', '数据处理', '效率工具', '图表与可视化', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/viggomeesters/obsidian-toml-ini-viewer)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?toml-ini-viewer)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/viggomeesters/obsidian-toml-ini-viewer/master/README.md)



## 概述

### TOML INI Viewer插件总结
1. **主要功能**：在Obsidian中以只读配置树形式打开 `.toml` 和 `.ini` 文件，支持搜索、源视图查看，能给出解析警告，有安全的大文件处理上限。可直接从文件资源管理器打开文件，展示解析后的配置树，提供带行号和轻量级高亮的源视图，报告解析错误和警告，限制渲染节点数量，文件外部更改后自动刷新。
2. **适用场景**：适用于生成的配置、代理输出、CLI设置、项目框架等小型结构化文件，这些文件用YAML、JSON等查看器不太合适。
3. **核心特色**：只读模式避免因编辑改变配置文件原意，对解析错误和异常输入给出警告，能处理大文件并保证Obsidian响应性能。
4. **使用建议**：若需查看 `.toml` 和 `.ini` 文件内容，可直接从Obsidian文件资源管理器打开。查看时可利用配置树和源视图，留意解析警告信息。因是只读模式，若要修改文件，需通过其他工具进行。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


