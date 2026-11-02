---
uid: 1793625606207000
title: "Obsidian 插件：Atomus Flashcards"
tags: ["学习与教育", "ANKI", "效率工具", "obsidian插件"]
description: "Spaced repetition atoms inline. Renders Q == A, cloze, and Atomus syntax right in your notes. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Atomus Flashcards

> [!Note] 插件名片
> - 插件名称：Atomus Flashcards
> - 插件作者：useatomus
> - 插件说明：Spaced repetition atoms inline. Renders Q == A, cloze, and Atomus syntax right in your notes. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['学习与教育', 'ANKI', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/useatomus/obsidian-atomus)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?atomus)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/useatomus/obsidian-atomus/master/README.md)



## 概述

Atomus Flashcards 将纯 Markdown 笔记转化为交互式闪卡，核心在于直接渲染 `问题 == 答案` 语法。它支持双向箭头、填空（Cloze）及多选题，让复习内容以卡片形式直观呈现。若配合 Atomus Mac 应用，还能在笔记中直接播放从视频或播客中捕获的原始音频，实现视听结合的记忆强化。

典型场景包括语言学习与知识梳理。例如，使用 Atomus 从播客中保存的短语会自动写入 Vault，插件将其渲染为带播放按钮的卡片，点击即可回放原声并查看来源；或者在整理笔记时，用 `{{填空}}` 标记关键概念，生成可交互的测试题，无需切换应用即可在笔记内完成自测。

相比传统闪卡插件，其特色在于对 Atomus 生态的深度整合，能读取本地音频文件并显示来源信息，且完全离线运行，不发起任何网络请求。此外，它严格遵循 Markdown 规范，代码块、数学公式及高亮语法不受干扰，且颜色随主题变量自动适配，能无缝融入现有笔记风格，保持视觉一致性。

使用前需注意，分隔符 `==` 两侧必须有空格，否则会被视为普通高亮文本。该插件仅负责渲染，不会修改文件内容，适合希望将闪卡嵌入日常笔记流的用户。若你需要复杂的间隔重复算法管理、云端同步或独立于笔记的独立复习界面，此插件可能无法满足需求，因为它主要依赖外部工具（如 Atomus）或手动管理复习节奏。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


