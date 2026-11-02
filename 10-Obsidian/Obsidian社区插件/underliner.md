---
uid: 1793625623904001
title: "Obsidian 插件：Underliner"
tags: ["编辑工具", "文字处理", "快捷键", "obsidian插件"]
description: "Press Ctrl+U to underline the selection. Press again to remove it. Multi-line selections are wrapped line by line. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Underliner

> [!Note] 插件名片
> - 插件名称：Underliner
> - 插件作者：gugu
> - 插件说明：Press Ctrl+U to underline the selection. Press again to remove it. Multi-line selections are wrapped line by line. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['编辑工具', '文字处理', '快捷键', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/guguthecoder/obsidian-underliner)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?underliner)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/guguthecoder/obsidian-underliner/master/README.md)



## 概述

Underliner 旨在解决 Obsidian 原生 Markdown 缺乏下划线语法的问题，通过绑定 Ctrl+U 快捷键，让用户能像使用加粗或斜体一样快速为选中文本添加或移除 `<u>` 标签。它不仅仅是一个简单的文本包裹工具，更是一个智能的切换开关：再次按下快捷键即可取消下划线，无需手动删除 HTML 标签，从而大幅减少在笔记中插入下划线时的输入负担和出错率。

在日常写作中，当你需要强调某个特定术语或短语时，只需选中文字并按下快捷键，下划线即刻生效；若发现误操作，再次按下即可恢复原状。对于多行选区，插件会智能地逐行包裹标签，确保在列表或引用块中也能正常渲染，避免了传统手动输入 HTML 时因跨行导致的格式错乱问题，让排版过程更加流畅自然。

相比其他同类插件，Underliner 的核心优势在于对边缘情况的严谨处理。它能准确识别已存在的下划线标签并执行移除而非嵌套，防止格式污染；当光标位于单词内部但未选中任何文本时，它会自动包裹该单词，提升了操作效率。此外，插件体积极小且无外部依赖，不修改笔记加载逻辑，仅在触发命令时编辑文本，确保了极高的稳定性和兼容性。

需要注意的是，Underliner 刻意跳过了中日韩（CJK）文本的自动单词检测，因为在无空格的语言中猜测词边界极易出错，此时光标处只会插入空标签对供手动输入。如果你需要的是自动识别中文词汇并下划线，或者希望插件提供工具栏按钮、样式自定义等复杂功能，这款极简插件可能并不适合你的需求。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


