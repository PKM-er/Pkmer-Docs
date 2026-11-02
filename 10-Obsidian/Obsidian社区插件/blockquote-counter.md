---
uid: 1793625607980000
title: "Obsidian 插件：Blockquote Counter"
tags: ["文字处理", "编辑工具", "效率工具", "obsidian插件"]
description: "Count characters and words in individual blockquotes and callouts, track configurable limits, and copy the exact counted Markdown. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Blockquote Counter

> [!Note] 插件名片
> - 插件名称：Blockquote Counter
> - 插件作者：name555difficult
> - 插件说明：Count characters and words in individual blockquotes and callouts, track configurable limits, and copy the exact counted Markdown. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['文字处理', '编辑工具', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/name555difficult/obsidian-blockquote-counter)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?blockquote-counter)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/name555difficult/obsidian-blockquote-counter/master/README.md)



## 概述

Blockquote Counter 专为需要精确控制引用块和 Callout 内容长度的用户设计。它能在实时预览、源码模式和阅读视图中直接显示字符数徽章，并支持自定义字数上限。当内容接近或超过限制时，徽章会变色警示，帮助你直观地掌握当前文本的篇幅，避免超出平台或排版要求。

想象你在撰写社交媒体帖子或制作知识卡片，每个段落都需要严格控制在 2000 字以内。你可以将每段独立文本放入顶层引用块，插件会自动统计并显示剩余字数。侧边栏还会提供进度条和文本预览，让你无需切换视图即可快速检查多个块的状态，甚至能一键复制被统计的 Markdown 原文，确保复制内容与计数完全一致。

相比其他计数工具，该插件的核心特色在于对 Markdown 源码的精准解析。它明确区分了引用标记、Callout 标题与正文，只统计实际内容，且支持 UTF-16 和 Unicode 码点两种计数模式，能更准确地处理中文和 Emoji。此外，它还能统计基于空格的词数，为英文写作提供辅助参考，同时提供“定位”功能直接跳转至对应源码位置。

需要注意的是，该插件统计的是 Markdown 源码而非渲染后的纯文本，因此 Markdown 格式符号、链接语法和数学公式源码均计入字数。它仅支持顶层引用块，嵌套引用或列表内的引用不在统计范围内。如果你需要统计的是渲染后的纯文本字数，或者依赖中文分词进行精确词数统计，此插件可能无法满足需求。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


