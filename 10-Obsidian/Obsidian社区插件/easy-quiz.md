---
uid: 1793625612433000
title: "Obsidian 插件：EasyQuiz"
tags: ["学习与教育", "效率工具", "文字处理", "obsidian插件"]
description: "Markdown-native quiz practice: write questions as plain Markdown and practice them in a rendered card UI, with attempt records written back into the note. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：EasyQuiz

> [!Note] 插件名片
> - 插件名称：EasyQuiz
> - 插件作者：Anking Lin
> - 插件说明：Markdown-native quiz practice: write questions as plain Markdown and practice them in a rendered card UI, with attempt records written back into the note. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['学习与教育', '效率工具', '文字处理', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/ankinglin/EasyQuiz)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?easy-quiz)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/ankinglin/EasyQuiz/master/README.md)



## 概述

EasyQuiz 是一款基于 Markdown 原生语法的测验练习插件，旨在解决笔记内容与复习记录分离的痛点。它允许用户直接在笔记中以纯文本形式编写题目，并在阅读视图中将其渲染为交互式卡片。核心功能在于“记录回写”机制：每次作答后，尝试记录会自动写回笔记本身的代码块中，确保学习进度与知识内容紧密绑定在同一文件内，无需依赖外部数据库或独立应用。

典型使用场景包括构建个人题库和跨笔记引用。例如，你可以在计算机网络笔记中编写关于 TCP 握手的单选题，提交答案后，笔记会直接显示你的选择及解析；或者在复习页中通过 ID 引用其他笔记中的题目，将其渲染为可作答的卡片。此外，插件支持五种题型（单选、多选、匹配、填空、简答），你可以根据知识点类型灵活选择，实现从概念记忆到逻辑匹配的多样化练习。

相比同类插件，EasyQuiz 的特色在于其内置的 AI 创作规范（AI Skill）。它提供了一套标准化的题目编写手册，AI 代理可依据此规范自动生成、修复或插入题目，且所有生成的骨架均经过测试套件验证，确保题目可被正确解析和评分。此外，其锚点机制允许选项通过特定标记定位，即使调整选项顺序也不会导致历史记录错位，极大提升了题库维护的稳定性。

使用前需注意，笔记必须通过 Frontmatter 标记 `quiz: true` 或特定标签才能被识别为题库。该插件不适合需要复杂多媒体交互或离线独立运行的场景，因为它强依赖 Obsidian 的 Markdown 渲染环境。如果你希望将题目导出为独立网页或在不安装 Obsidian 的设备上练习，此插件无法满足需求。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


