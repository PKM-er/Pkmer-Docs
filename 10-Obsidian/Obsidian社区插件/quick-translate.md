---
uid: 1793625620478000
title: "Obsidian 插件：Quick Translate"
tags: ["效率工具", "文字处理", "自动化与AI", "obsidian插件"]
description: "Translate the selection or a whole note into another language with no account, keeping links, code and front matter untouched. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Quick Translate

> [!Note] 插件名片
> - 插件名称：Quick Translate
> - 插件作者：siulved54
> - 插件说明：Translate the selection or a whole note into another language with no account, keeping links, code and front matter untouched. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['效率工具', '文字处理', '自动化与AI', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/perezamadorluisenrique-gif/quick-translate)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?quick-translate)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/perezamadorluisenrique-gif/quick-translate/master/README.md)



## 概述

Quick Translate 是一款无需注册账号即可使用的翻译插件，核心功能是将选中的文本或整篇笔记翻译为目标语言。它支持 Google Translate、DeepL 和 MyMemory 三种服务，默认使用 Google Translate，若主服务不可用可自动切换至 MyMemory 重试。插件能自动检测源语言，若笔记已是目标语言则跳过翻译并提示，避免无效操作。

典型场景包括快速翻译外文资料中的特定段落，或批量处理整篇笔记。例如，选中一段英文文献后，插件会在小窗口显示译文，你可以直接复制、插入到原文下方或替换原选区；若需保留原文，也可将整篇笔记翻译为新文件，自动命名为“Note (es).md”并在新标签页打开，原文件保持不变。

相比同类插件，其最大特色是严格保护 Markdown 结构。Front matter、代码块、内联代码、数学公式、Wiki 链接、嵌入、标签、脚注引用、列表标记、任务框、标题标记、Callout 类型及表格管道符均不会被发送翻译，确保格式完整。表格单元格独立翻译，防止语序差异导致内容错位。此外，替换和插入操作作为单一事务处理，一次撤销即可恢复，且会话内重复翻译相同内容不消耗额外请求。

使用前需注意，该插件仅支持 Markdown 格式，不支持离线翻译、AI 模型、阅读视图翻译或自动实时翻译。默认使用的 Google Translate 为非官方接口，存在被封锁风险，若失效需手动切换服务。DeepL 需自备 API Key，MyMemory 有每日限额。若笔记包含敏感信息，请谨慎使用，因为数据会发送至所选翻译服务。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


