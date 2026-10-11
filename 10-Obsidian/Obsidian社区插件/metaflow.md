---
uid: 1791709368626000
title: 'Obsidian 插件：MetaFlow'
tags: ['文件管理', '自动化与AI', '效率工具', 'obsidian插件']
description: 'Automatically apply metadata rules to newly created notes based on their folder. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：MetaFlow

> [!Note] 插件名片
> - 插件名称：MetaFlow
> - 插件作者：loulan23253
> - 插件说明：Automatically apply metadata rules to newly created notes based on their folder. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['文件管理', '自动化与AI', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/loulan23253/metaflow)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?metaflow)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/loulan23253/metaflow/master/README.md)



## 概述

**MetaFlow** 是一款 Obsidian 插件，旨在根据文件所在的文件夹，自动为新创建的笔记应用元数据规则。

**主要功能**：当监控文件夹内新建 Markdown 文件时，插件会自动将预设的属性写入其 Frontmatter（前置元数据）。

**适用场景**：
1. 为外部工具同步的文件（如日历事件）自动添加标签，以便 Dataview 或 Bases 进行查询；
2. 按文件夹自动为笔记分类打标（如“会议”、“饮食”）；
3. 无需修改模板即可注入 `type`、`source` 等标准属性。

**核心特色**：
- **自动化**：无需手动操作，新建文件即生效。
- **灵活配置**：支持键值对设置，值中包含逗号时自动转换为列表格式。
- **非侵入性**：仅针对新建文件生效，不会重写或修改已存在的文件。
- **轻量级**：纯 JavaScript 编写，无需构建步骤，易于直接编辑。

**使用建议**：
1. 在设置中点击“+ 新增规则”，选择需要监控的文件夹。
2. 添加所需的属性键值对。注意：若希望生成列表，请在值中使用逗号分隔（例如 `calendar, sync` 将生成 `[calendar, sync]`）。
3. 该插件仅处理新文件，建议配合其他同步插件使用，以实现工作流的完全自动化。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


