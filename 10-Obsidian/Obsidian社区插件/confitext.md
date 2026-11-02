---
uid: 1793625611156001
title: "Obsidian 插件：Confitext"
tags: ["样式与美化", "安全与隐私", "界面优化", "obsidian插件"]
description: "An animated, Matrix-inspired visual masking layer for private-feeling writing. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Confitext

> [!Note] 插件名片
> - 插件名称：Confitext
> - 插件作者：Dheeraz
> - 插件说明：An animated, Matrix-inspired visual masking layer for private-feeling writing. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['样式与美化', '安全与隐私', '界面优化', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/dheeraz101/Confitext)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?confitext)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/dheeraz101/Confitext/master/README.md)



## 概述

Confitext 是一款基于 Matrix 风格视觉干扰的隐私保护插件，旨在解决在开放办公、航班或咖啡馆等公共场合写作时，屏幕内容易被旁人窥视的痛点。它通过非破坏性的 CodeMirror 6 装饰技术，将已完成的文字实时转换为动态的数字符号，从而在视觉上屏蔽敏感内容。这种机制仅改变屏幕上的显示效果，底层 Markdown 文件始终保持原始纯文本状态，确保你的笔记数据完整无损，同时不影响正常的思维流动。

想象一下，你在飞机上撰写包含商业机密的项目计划，或在嘈杂的咖啡馆里记录个人日记。启用 Confitext 后，你正在输入的句子会保持清晰可读，但一旦完成单词或段落，它们便会平滑地“乱码化”。当你需要回顾或编辑时，只需鼠标拖选或键盘选中文字，被遮蔽的内容会立即还原为正常文本。此外，插件支持在阅读视图中点击单词进行即时揭示，让你无需切换模式即可灵活掌控隐私边界。

与传统的屏幕模糊或加密工具不同，Confitext 提供了极具针对性的隐私控制能力。你可以设置“敏感数据盾牌”，自动识别并遮蔽邮箱、API 密钥、信用卡号等 PII 信息，甚至支持自定义正则表达式。插件还允许通过 YAML 前置元数据或右键菜单，对特定词汇进行全局或单篇笔记的精准遮蔽。其独特的“确定性字形稳定性”确保相同长度的单词映射为相同的符号模式，避免了因字符宽度变化导致的布局跳动，同时保留了标题、代码块和数学公式的可读性，兼顾了美观与实用。

需要注意的是，Confitext 仅作为视觉层面的“肩窥”防御工具，它并不提供磁盘加密或文件级安全保护。任何拥有文件系统访问权限、云备份或开发者工具的人仍可直接读取你的原始文件。因此，它不适合对数据安全性有极高要求、需要防止文件泄露或恶意软件攻击的场景。如果你追求的是端到端加密或离线数据隔离，应选用专业的磁盘加密软件，而非依赖此插件的视觉遮蔽功能。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


