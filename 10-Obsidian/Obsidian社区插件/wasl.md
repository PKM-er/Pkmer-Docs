---
uid: 1793625624336000
title: "Obsidian 插件：Wasl"
tags: ["模板与链接处理", "文字处理", "效率工具", "obsidian插件"]
description: "Finds places in your notes where you mention another note by title without linking it, even when Arabic spelling hides it («وبالكتابةِ» for «الكتابة»), and links them only when you approve. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Wasl

> [!Note] 插件名片
> - 插件名称：Wasl
> - 插件作者：Sultan
> - 插件说明：Finds places in your notes where you mention another note by title without linking it, even when Arabic spelling hides it («وبالكتابةِ» for «الكتابة»), and links them only when you approve. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['模板与链接处理', '文字处理', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/isltanx/obsidian-wasl)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?wasl)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/isltanx/obsidian-wasl/master/README.md)



## 概述

Wasl 专为阿拉伯语笔记设计，旨在解决 Obsidian 内置功能无法识别变体拼写的问题。它能扫描库中提及当前笔记标题但未建立链接的位置，即使文本包含前缀、变音符号或长音符号也能准确匹配。插件不会自动修改文件，而是列出所有潜在提及，由你逐一确认后才生成链接，确保每一处关联都经过你的批准。

想象你有一篇名为「الكتابة」（写作）的笔记，在其他地方写了「وبالكتابةِ」（通过写作）或带长音的「الكتـابة」。内置功能会忽略这些变体，但 Wasl 能识别它们，并在面板中展示完整句子及匹配原因（如“前缀: وبـ”）。你只需点击“Link”预览效果，确认无误后点击“Confirm link”，即可在不改变原句显示文本的情况下完成链接，例如将「وبالكتابةِ」转换为 `[[الكتابة|وبالكتابةِ]]`。

与同类插件相比，Wasl 的核心特色在于对阿拉伯语正字法变体的深度理解，且坚持“人工审核”机制。它不依赖 AI 或复杂的词根分析，避免误连不同含义的词（如将“写作”误连到“书”）。此外，它支持通过笔记属性（如 `wasl: exact`）精细控制匹配规则，并允许你忽略特定提及或撤销最后一次链接操作，提供了极高的可控性。

需要注意的是，Wasl 仅匹配现有标题和别名，不识别词根、派生词或复数形式，若需覆盖这些情况，请手动添加别名。它也不处理词尾变化或中间元音差异。该插件不适合需要全自动批量链接、非阿拉伯语环境，或希望插件在后台静默运行而不需手动确认的用户。它仅在面板打开时工作，且不会在输入时添加下划线，适合追求精准控制而非自动化效率的用户。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


