---
uid: 1786577076205001
title: 'Obsidian 插件：Auto Remove'
tags: ['文件管理', '自动化与AI', '效率工具', '数据处理', 'obsidian插件']
description: '能按照设定的存活时间自动让笔记和文件过期，然后在预览后将其移到回收站或其他地方。——Obsidian官方人员尚未对这个插件进行人工审核。'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Auto Remove

> [!Note] 插件名片
> - 插件名称：Auto Remove
> - 插件作者：Reza Bahinkor
> - 插件说明：能按照设定的存活时间自动让笔记和文件过期，然后在预览后将其移到回收站或其他地方。——Obsidian官方人员尚未对这个插件进行人工审核。
> - 插件分类：['文件管理', '自动化与AI', '效率工具', '数据处理', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/bahinkor/obsidian-auto-remove-plugin)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?auto-remove)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/bahinkor/obsidian-auto-remove-plugin/master/README.md)



## 概述

### Auto Remove插件总结
1. **主要功能**：为Obsidian中的笔记和文件设置过期日期，到期后在预览后将其移入废纸篓或移动，清理过期文件。
2. **适用场景**：适用于积累了大量临时笔记（如收件箱记录、日常草稿、未完成稿件）且无暇清理的Vault。
3. **核心特色**：
    - 清理操作不静默，发现过期文件时会弹出对话框，以文件夹树状列出所有文件并默认全选。
    - 可通过文件的前置元数据或文件夹规则设置过期时间，从文件修改时间开始计时，编辑文件会重置其存活时间。
4. **使用建议**：若想让笔记参与自动清理，可在前置元数据中设置`auto-remove: true`，并可选择设置`ttl`指定存活天数，未设置则默认为7天。若不想被清理，设置`auto-remove: false`即可。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


