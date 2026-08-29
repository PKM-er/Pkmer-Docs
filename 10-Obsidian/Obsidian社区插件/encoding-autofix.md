---
uid: 1786577077560006
title: 'Obsidian 插件：Encoding Auto-Fix'
tags: ['文件管理', '文字处理', '编辑工具', '自定义命令', '效率工具', 'obsidian插件']
description: '在创建文件时，该插件能检测非 UTF - 8 编码的文件（像 UTF - 16 LE/BE、带 BOM 的 UTF - 8、EUC - KR/CP949 等），并将它们重新编写为标准的 UTF - 8 编码，从而避免在 Obsidian 里出现韩语或其他中日韩文字乱码的问题。它还带有一个手动转换命令哦。 - 此插件尚未经过 Obsidian 官方人员的手动审核。'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Encoding Auto-Fix

> [!Note] 插件名片
> - 插件名称：Encoding Auto-Fix
> - 插件作者：kathar0s
> - 插件说明：在创建文件时，该插件能检测非 UTF - 8 编码的文件（像 UTF - 16 LE/BE、带 BOM 的 UTF - 8、EUC - KR/CP949 等），并将它们重新编写为标准的 UTF - 8 编码，从而避免在 Obsidian 里出现韩语或其他中日韩文字乱码的问题。它还带有一个手动转换命令哦。 - 此插件尚未经过 Obsidian 官方人员的手动审核。
> - 插件分类：['文件管理', '文字处理', '编辑工具', '自定义命令', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/kathar0s/obsidian-encoding-autofix)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?encoding-autofix)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/kathar0s/obsidian-encoding-autofix/master/README.md)



## 概述

### Encoding Auto - Fix插件总结
1. **主要功能**：自动检测新添加到Obsidian库中的非UTF - 8文本文件（如UTF - 16 LE/BE、UTF - 8 BOM、EUC - KR/CP949），并将其转换为标准UTF - 8编码，同时提供手动转换命令。
2. **适用场景**：适用于导入或同步包含韩语、中文、日语等CJK文字的文本文件时出现乱码，或使用Self - hosted LiveSync同步插件报错“File seems to be corrupted! Writing prevented”的情况，以及转录工具、记事本等导出的文件在Obsidian中显示异常的场景。
3. **核心特色**：在Obsidian或同步插件处理文件前就进行编码转换，从根源上解决因编码不兼容导致的文本损坏问题，避免原始字符丢失。
4. **使用建议**：当遇到上述编码问题时，可让插件自动处理新文件，若需对已有文件进行转换，可使用手动转换命令。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


