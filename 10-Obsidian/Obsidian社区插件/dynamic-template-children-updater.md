---
uid: 1791709366673000
title: 'Obsidian 插件：Dynamic Template Children Updater'
tags: ['模板与链接处理', '文件管理', '效率工具', 'obsidian插件']
description: 'Update existing template children from evolving core Templates and Templater templates while preserving selected child-note customizations. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Dynamic Template Children Updater

> [!Note] 插件名片
> - 插件名称：Dynamic Template Children Updater
> - 插件作者：obsidiest
> - 插件说明：Update existing template children from evolving core Templates and Templater templates while preserving selected child-note customizations. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['模板与链接处理', '文件管理', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/obsidiest/obsidian-dynamic-template-children-updater)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?dynamic-template-children-updater)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/obsidiest/obsidian-dynamic-template-children-updater/master/README.md)



## 概述

**主要功能**
该插件用于同步现有笔记与核心 Templates 或 Templater 模板，在更新笔记默认 Frontmatter 和 Markdown 结构的同时，保留用户自定义内容。它通过笔记属性（如 `Note Template Class`）识别模板来源，支持静态投影 Templater 输出（不执行代码）。

**适用场景**
适用于依赖模板管理大量笔记的用户，特别是当模板结构或元数据发生演变时，需要批量更新已创建笔记以保持一致性，但又不希望丢失个人修改的场景。

**核心特色**
1. **双模板支持**：兼容原生 Templates 插件及 Templater（仅静态投影）。
2. **智能保留**：更新时自动保护子笔记中的自定义内容，避免覆盖用户数据。
3. **灵活配置**：通过 YAML 属性声明模板关联，模板文件自动排除在更新范围外。
4. **预览与报告**：提供更新前预览功能，并生成详细的更新报告，确保操作透明可控。

**使用建议**
1. 确保笔记顶部包含正确的模板属性（如 `Note Template Class`）以建立关联。
2. 在大规模更新前，建议先使用“预览”命令检查变更内容。
3. 定期备份数据，尽管插件保留自定义内容，但批量操作仍需谨慎。
4. 注意该插件未经 Obsidian 官方人工审核，建议先在少量笔记上测试。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


