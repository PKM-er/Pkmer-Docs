---
uid: 1791709365199000
title: 'Obsidian 插件：Advanced Markdown Export'
tags: ['文件管理', '模板与链接处理', '效率工具', 'obsidian插件']
description: 'Export notes with their attachments and linked notes, picked in a dependency tree. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Advanced Markdown Export

> [!Note] 插件名片
> - 插件名称：Advanced Markdown Export
> - 插件作者：Michael Naumov
> - 插件说明：Export notes with their attachments and linked notes, picked in a dependency tree. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['文件管理', '模板与链接处理', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/mnaoumov/obsidian-advanced-markdown-export)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?advanced-markdown-export)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/mnaoumov/obsidian-advanced-markdown-export/master/README.md)



## 概述

**Advanced Markdown Export 插件总结**

**1. 主要功能**
该插件用于导出 Obsidian 笔记及其依赖资源。它能自动解析笔记中的附件（如图片）和内部链接（`[[link]]`），生成一个依赖树结构。用户可勾选所需内容，插件随后将这些文件打包导出，确保导出后的 Markdown 文件中链接和附件依然有效，避免“死链”或资源缺失。

**2. 适用场景**
*   **分享笔记**：向他人发送包含复杂引用或图片的笔记时，确保接收方看到完整内容。
*   **归档备份**：将特定主题或项目相关的笔记及其依赖项独立打包，便于离线阅读或迁移到其他平台。
*   **协作编辑**：在团队中共享特定文档包，只包含必要的上下文，避免泄露整个 Vault 的隐私。

**3. 核心特色**
*   **依赖树可视化**：以树状复选框展示笔记的所有依赖项，直观清晰。
*   **精细控制**：默认勾选附件，不勾选链接笔记，用户可手动展开层级，精确决定导出范围，平衡“过度分享”与“信息缺失”。
*   **链接保持**：导出时自动处理路径，保证 Markdown 内部链接在目标位置正常工作。
*   **去重机制**：重复出现的资源仅列出一次，但在所有引用处生效，优化包体积。

**4. 使用建议**
*   **预览检查**：导出前仔细查看依赖树，确认勾选的链接笔记是否符合预期，避免遗漏关键上下文或包含无关隐私。
*   **层级管理**：利用“展开”功能深入查看二级或更深层依赖，适合结构复杂的知识库。
*   **版本注意**：该插件未经 Obsidian 官方人工审核，建议在非核心数据上先测试，或定期备份原始笔记。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


