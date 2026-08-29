---
uid: 1786577083836008
title: 'Obsidian 插件：Writing Regex Replacer'
tags: ['文字处理', '编辑工具', '效率工具', '自动化与AI', 'obsidian插件']
description: '在你输入文字时，它能根据可配置的正则表达式替换文本。——这款插件尚未经过Obsidian官方人员的手动审核。'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Writing Regex Replacer

> [!Note] 插件名片
> - 插件名称：Writing Regex Replacer
> - 插件作者：Jakob Lien
> - 插件说明：在你输入文字时，它能根据可配置的正则表达式替换文本。——这款插件尚未经过Obsidian官方人员的手动审核。
> - 插件分类：['文字处理', '编辑工具', '效率工具', '自动化与AI', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/jakoblien/writing-regex-replacer)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?writing-regex-replacer)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/jakoblien/writing-regex-replacer/master/README.md)



## 概述

### Writing Regex Replacer插件总结
1. **主要功能**：在书写文本时，使用可配置的正则表达式对当前行文本进行替换。
2. **适用场景**：适用于需要快速将特定文本转换为其他格式的场景，如将Jira问题编号扩展为对应链接。
3. **核心特色**：
    - 提供两个开关，可分别控制匹配前是否需要有空格、匹配后是否需要有空格，避免误匹配。
    - 自动将正则表达式中的`$0`替换为JavaScript支持的`$&`，方便使用。
    - 仅在输入时进行替换，且只作用于当前行。
4. **使用建议**：根据实际需求配置源正则表达式和目标替换文本。使用开关控制匹配条件，避免不必要的替换。在处理Jira问题编号等场景时，合理设置空格条件，确保准确匹配。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


