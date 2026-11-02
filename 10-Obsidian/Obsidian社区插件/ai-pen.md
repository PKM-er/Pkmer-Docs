---
uid: 1793625619858001
title: "Obsidian 插件：p3n"
tags: ["自动化与AI", "文字处理", "编辑工具", "obsidian插件"]
description: "Check selected text for AI writing, see the sentences that give it away, and rewrite it so it reads as human, with the p3n API. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：p3n

> [!Note] 插件名片
> - 插件名称：p3n
> - 插件作者：Nikita Andreiev
> - 插件说明：Check selected text for AI writing, see the sentences that give it away, and rewrite it so it reads as human, with the p3n API. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['自动化与AI', '文字处理', '编辑工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/barabosik/p3n-obsidian)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?ai-pen)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/barabosik/p3n-obsidian/master/README.md)



## 概述

p3n 是一款专注于识别和消除 AI 写作痕迹的 Obsidian 插件。它通过 p3n API 对选中的文本进行分析，提供 AI 检测评分、简短理由以及具体暴露 AI 特征的语句。除了检测，它还具备重写功能，能在保留原文事实的基础上去除冗余填充词，使文本读起来更像人类自然书写。检测结果和重写建议会在笔记旁的侧边视图中展示，方便用户对照查看。

典型使用场景包括润色由 AI 辅助生成的草稿，或检查自己撰写的文章是否带有明显的机器味。例如，当你用 AI 生成了一段会议总结后，可以使用“Check for AI”功能快速定位那些生硬的句子，并直接在笔记中查找对应位置；或者在撰写博客时，对某段论述使用“Rewrite”功能，生成更自然的版本后，通过“Replace selection”一键替换原文，整个过程只需一次撤销操作即可恢复。

相比其他单纯的 AI 写作助手，p3n 的特色在于其“去 AI 化”的精准定位能力，能具体指出哪些句子“出卖”了作者，而不仅仅是给出一个模糊的分数。此外，它支持桌面端和移动端，且重写后的替换操作设计为单一撤销步骤，极大降低了误操作风险。如果重写结果遗漏了原文中的链接，插件会在替换前明确提示，避免了内容丢失的隐患。

使用前需注意，检测功能至少需要 40 个字符，重写功能则需要至少 8 个单词的句子。免费用户每小时有 10 次调用限制，单次处理上限为 5,000 字符；若需处理更长文本或更高频率，需注册 p3n.si 账户并配置 API 密钥。该插件会将选中文本发送至 p3n 服务器进行处理，因此不适合处理高度敏感或绝密信息。此外，它不读取库中其他笔记，也不保留历史记录，但用户需知晓文本在服务器端可能保留长达 7 天。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


