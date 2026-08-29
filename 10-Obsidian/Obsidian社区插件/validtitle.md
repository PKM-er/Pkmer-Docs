---
uid: 1786577083521004
title: 'Obsidian 插件：ValidTitle'
tags: ['编辑工具', '文件管理', '模板与链接处理', '效率工具', '自动化与AI', 'obsidian插件']
description: '通过安全清理维基链接里的非法字符，自动防止出现 “文件名不能包含……” 的错误。——Obsidian 官方人员尚未对这个插件进行人工审核。'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：ValidTitle

> [!Note] 插件名片
> - 插件名称：ValidTitle
> - 插件作者：sxjeel
> - 插件说明：通过安全清理维基链接里的非法字符，自动防止出现 “文件名不能包含……” 的错误。——Obsidian 官方人员尚未对这个插件进行人工审核。
> - 插件分类：['编辑工具', '文件管理', '模板与链接处理', '效率工具', '自动化与AI', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/sajee05/obsidian-ValidTitle)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?validtitle)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/sajee05/obsidian-ValidTitle/master/README.md)



## 概述

### ValidTitle插件总结
1. **主要功能**：自动清理维基链接（`[[...]]`）中不符合Windows文件名规则的非法字符，避免Obsidian弹出“文件名不能包含...”的错误提示。
2. **适用场景**：适用于在Obsidian中创建或点击包含非法字符的维基链接时，防止因文件名不合法而产生的错误。
3. **核心特色**：轻量级、零配置，无需手动设置参数、添加命令或使用功能条。能在瞬间自动处理链接，替换特定字符（如将 `:` 替换为 ` -`，`/ \ |` 替换为 `-`），并移除 `* ? " < >`。同时会安全地忽略别名、Markdown表格、代码块和标题。
4. **使用建议**：只需启用插件，它便会在后台默默运行，自动处理维基链接中的非法字符，无需额外操作。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


