---
uid: 1793625614953001
title: "Obsidian 插件：Live Template Results"
tags: ["模板与链接处理", "编辑工具", "界面优化", "obsidian插件"]
description: "Show dynamic template results while you edit notes in Live Preview. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Live Template Results

> [!Note] 插件名片
> - 插件名称：Live Template Results
> - 插件作者：theluckystrike
> - 插件说明：Show dynamic template results while you edit notes in Live Preview. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['模板与链接处理', '编辑工具', '界面优化', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/theluckystrike/live-template-results)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?live-template-results)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/theluckystrike/live-template-results/master/README.md)



## 概述

Live Template Results 让 Templater 的动态命令在 Live Preview 模式下直接显示计算结果，而非仅展示原始代码。它通过调用 Obsidian 的 Markdown 渲染器执行脚本，将如 `<%+ 1 + 1 %>` 这样的表达式即时转换为 `2` 等纯文本结果。你可以将光标移入结果区域来编辑原始命令，修改后刷新即可看到更新，而 Markdown 源文件始终保持不变，确保笔记内容的纯净与可移植性。

想象你在撰写项目笔记，需要实时统计工时或显示当前文件名。启用该插件后，笔记中的动态命令会直接呈现计算后的数值或标题，无需切换视图或手动运行脚本。例如，当你在笔记中修改了某个属性值，若配置了相应的刷新规则，结果会自动更新，极大提升了动态笔记的交互体验，让数据展示与编辑过程无缝衔接。

与仅支持阅读视图的默认行为不同，该插件专注于 Live Preview 下的即时反馈，并提供了精细的安全控制机制。它要求用户手动启用特定笔记，或通过 Pro 版本设置文件夹和属性规则来批量授权。这种“白名单”机制避免了意外执行不可信脚本的风险，同时 Pro 版还增加了属性变更自动刷新和结果面板功能，方便集中查看多个笔记的执行状态与错误信息。

使用前必须安装并启用 Templater 插件，且仅支持单行命令，多行代码块、引用及缩进内容会被忽略。由于脚本可能修改文件或发送数据，务必只在你信任的笔记中启用此功能。此外，该插件不适合需要复杂多行脚本交互或依赖移动端特定键盘行为的场景，且 Pro 功能需通过 GitHub Sponsors 订阅解锁，免费用户仅能使用手动启用和基础刷新功能。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


