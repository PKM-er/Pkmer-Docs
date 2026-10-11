---
uid: 1791709368769000
title: "Obsidian 插件：Native Search Replace"
tags: ['搜索与排序', '编辑工具', '效率工具', 'obsidian插件']
description: "Adds replacement controls directly to Obsidian's built-in Search and uses the native Search result model for exact files and result rows. - This plugin has not been manually reviewed by Obsidian staff."
author: "AI"
type: "auto"
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Native Search Replace

> [!Note] 插件名片
> - 插件名称：Native Search Replace
> - 插件作者：humoumou
> - 插件说明：Adds replacement controls directly to Obsidian's built-in Search and uses the native Search result model for exact files and result rows. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['搜索与排序', '编辑工具', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/humoumou1215/obsidian-native-search-replace)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?native-search-replace)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/humoumou1215/obsidian-native-search-replace/master/README.md)



## 概述

**Native Search Replace** 是一款为 Obsidian 增强内置搜索功能的插件，主要实现以下要点：

1. **主要功能**：在 Obsidian 原生搜索界面中直接集成替换控件。支持对搜索结果中的单个文件或匹配项进行精确替换，并提供“预览全部替换”功能，确保批量操作前的安全性。
2. **适用场景**：适用于需要在笔记库中进行大量文本查找与替换的场景，特别是当用户希望避免跳出搜索界面、直接在原生搜索结果列表中完成编辑时。
3. **核心特色**：
   - **原生集成**：直接读取 Obsidian 内部搜索模型数据，而非脆弱的 DOM 解析，确保定位准确。
   - **智能推断**：自动识别搜索目标，支持精确引用、简单正则及单令牌搜索；复杂 DSL 查询则显示明确的目标行。
   - **性能优化**：采用懒加载机制，仅在悬停或聚焦时显示操作按钮，无后台全量扫描，响应迅速。
   - **安全写入**：使用 `Vault.process()` 并在保存前重新计算文件内容，防止数据冲突。
4. **使用建议**：安装后，在搜索标签页执行搜索，即可在结果行看到替换选项。进行批量替换前，建议先通过命令面板运行“Preview replace all”以预览变更。注意大小写敏感性跟随原生搜索设置，无需额外配置。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---
