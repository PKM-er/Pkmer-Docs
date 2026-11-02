---
uid: 1793625611139000
title: "Obsidian 插件：Compare"
tags: ["编辑工具", "文字处理", "效率工具", "obsidian插件"]
description: "Compare two notes or LaTeX files side by side: changed lines and words are highlighted in the editor, matching text sits level, and each change can be copied to the other note. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Compare

> [!Note] 插件名片
> - 插件名称：Compare
> - 插件作者：Agata Dalach
> - 插件说明：Compare two notes or LaTeX files side by side: changed lines and words are highlighted in the editor, matching text sits level, and each change can be copied to the other note. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['编辑工具', '文字处理', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/adalach/obsidian-compare)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?compare)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/adalach/obsidian-compare/master/README.md)



## 概述

Compare 插件旨在解决双栏笔记对比时的视觉错位与操作繁琐问题。它能在编辑器内实时高亮显示两份笔记或 LaTeX 文件中的差异，将仅存在于左侧的行标红、右侧的行标绿，修改过的行标黄并精确标记出变动的单词。通过智能对齐技术，匹配文本在两侧保持水平同步，缺失内容处以条纹空白占位，确保阅读视线始终对齐。此外，它支持在编辑过程中实时刷新高亮，让你无需手动刷新即可看到最新差异。

典型场景包括合并两份不同版本的会议记录，或校对 LaTeX 论文与 Markdown 草稿。例如，当你将旧版笔记与新版并排打开时，插件会自动识别章节标题，仅在相同章节内匹配文本。若你在左侧添加了一个表格，右侧对应位置会显示等高的条纹空白，而非导致后续内容错位。此时，你只需按住 Cmd 键点击右侧某个被标记的单词，即可将该处修改精准复制到左侧，实现逐词级的内容同步。

相比传统对比工具，该插件的核心特色在于“交互式同步”与“细粒度控制”。它不仅能整行复制，还能通过 Cmd+点击 单独复制某个被标记的单词，允许你在同一段落中混合保留左右两侧的不同修改。右侧边栏的差异面板能按标题列出所有变更，点击即可跳转。对于 LaTeX 用户，它专门解析 `\section` 等命令进行结构匹配，甚至支持 Markdown 标题与 LaTeX 章节的跨格式对比，这是普通文本对比工具难以实现的。

使用前需注意，高亮仅在源码模式和实时预览模式下生效，阅读视图无高亮显示。该插件仅在用户主动执行“复制差异”操作时才会修改笔记内容，其余时间只读，且所有数据均在本地处理，无网络请求。它不适合需要批量自动合并冲突、生成差异报告文件，或处理非文本类二进制文件的场景。若你的需求仅是查看两篇文档的静态差异而不需频繁交互编辑，原生系统工具可能更轻量。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


