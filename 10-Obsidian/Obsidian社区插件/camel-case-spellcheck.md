---
uid: 1791709365771000
title: 'Obsidian 插件：Camel Case Spellcheck'
tags: ['编辑工具', '文字处理', '效率工具', 'obsidian插件']
description: 'Spellchecks individual words in camelCase, PascalCase, and snake_case identifiers. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Camel Case Spellcheck

> [!Note] 插件名片
> - 插件名称：Camel Case Spellcheck
> - 插件作者：Pierson G
> - 插件说明：Spellchecks individual words in camelCase, PascalCase, and snake_case identifiers. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['编辑工具', '文字处理', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/piersong55/CamelCasePlugin)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?camel-case-spellcheck)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/piersong55/CamelCasePlugin/master/README.md)



## 概述

**1. 主要功能**
该插件专门针对代码标识符进行拼写检查。它能自动拆分 `camelCase`、`PascalCase`、`snake_case` 及 `dotted.name` 等复合标识符，独立校验其中的各个单词，并仅对拼写错误的部分进行下划线标记，避免将完整标识符视为单一错误。

**2. 适用场景**
适用于在 Obsidian 中编写技术文档、笔记或代码片段的用户。特别适合需要频繁处理变量名、函数名、类名等编程术语的场景，能有效区分正常缩写与真实拼写错误。

**3. 核心特色**
*   **精准定位**：只标记错误组件，支持混合风格及数字边界识别。
*   **本地离线**：内置美式英语 Hunspell 词典，无需联网即可工作。
*   **智能兼容**：自动识别 `src`、`init`、`JSON` 等常见编程缩写，且与 Obsidian 原生拼写检查器共享已学习单词。
*   **体验优化**：编辑后延迟显示标记以减少干扰，支持在右键菜单中直接替换错误单词或添加至词典。

**4. 使用建议**
建议开发者启用“接受编程缩写”选项以减少误报。对于域名（如 `example.com`）或文件名，插件会交由原生检查器处理，无需额外配置。若需调整检查粒度，可在设置中关闭点号分割功能。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


