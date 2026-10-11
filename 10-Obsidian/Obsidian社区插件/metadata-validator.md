---
uid: 1791709368624000
title: 'Obsidian 插件：Metadata Validator'
tags: ['数据处理', '编辑工具', '效率工具', 'obsidian插件']
description: 'Manifest-driven metadata validation, auto-fix, and field picker for notes. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Metadata Validator

> [!Note] 插件名片
> - 插件名称：Metadata Validator
> - 插件作者：flowing-abyss
> - 插件说明：Manifest-driven metadata validation, auto-fix, and field picker for notes. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['数据处理', '编辑工具', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/flowing-abyss/obsidian-metadata-validator)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?metadata-validator)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/flowing-abyss/obsidian-metadata-validator/master/README.md)



## 概述

**Metadata Validator** 是一款基于 Manifest 驱动的 Obsidian 元数据管理插件，旨在确保笔记属性的一致性与规范性。

**主要功能**：
通过定义 `manifest.md` 文件，插件可自动校验、修复及排序笔记属性。支持字段类型定义（如单选、多选）、必填项检查、默认值填充，以及基于条件的自动化规则（例如：“当状态为‘完成’时，自动设置结束日期”）。

**适用场景**：
适用于需要严格数据结构的笔记库，如项目管理、文献整理或知识库维护。特别适合多文件夹层级结构，支持通过继承机制在不同目录树下应用不同的元数据标准。

**核心特色**：
1. **层级继承**：Manifest 文件支持树状继承，子目录可复用并扩展父级规则，减少重复配置。
2. **智能匹配**：通过标签或路径查询精准匹配目标笔记，自动应用最近的匹配规则。
3. **自动修复**：不仅能校验错误，还能自动补全缺失字段并按指定顺序排列属性，保持笔记整洁。

**使用建议**：
在 Vault 中建立 `schemas` 文件夹存放 Manifest。建议从基础 Manifest 开始，逐步为不同文件夹（如 `projects`、`sources`）添加子 Manifest 以细化规则。利用 `rules` 功能实现复杂的业务逻辑自动化，减少手动维护元数据的负担。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


