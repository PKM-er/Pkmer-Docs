---
uid: 1793625620611000
title: "Obsidian 插件：Reading Tap Guard"
tags: ["移动端优化", "界面优化", "效率工具", "obsidian插件"]
description: "Stops a double tap in Reading view on phone and tablet from switching the note to editing, with a setting for what a double tap does. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Reading Tap Guard

> [!Note] 插件名片
> - 插件名称：Reading Tap Guard
> - 插件作者：theluckystrike
> - 插件说明：Stops a double tap in Reading view on phone and tablet from switching the note to editing, with a setting for what a double tap does. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['移动端优化', '界面优化', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/theluckystrike/reading-tap-guard)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?reading-tap-guard)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/theluckystrike/reading-tap-guard/master/README.md)



## 概述

Reading Tap Guard 专为解决移动端 Obsidian 在“阅读视图”下的误触问题而设计。当前版本中，手指快速双击笔记会自动切换至编辑模式，这在通勤或手部微颤时极易发生，导致键盘意外弹出并干扰阅读。该插件通过拦截双击事件，强制笔记保持在阅读状态，除非你主动点击编辑按钮或执行切换命令，从而确保阅读体验的连贯性。

想象一下在摇晃的公交车上阅读长文，或者在平板上单手操作时，手指不小心在文字上双击。以往这会导致界面突然变为编辑模式，打断思路甚至误改内容。安装此插件后，你可以放心地滚动、点击链接或勾选任务，笔记会稳定停留在阅读视图。只有当你明确点击顶部的铅笔图标或使用命令面板切换时，才会进入编辑状态，彻底消除误触带来的干扰。

与仅能隐藏编辑按钮的 CSS 方案不同，该插件能从根本上改变双击行为，且不影响单击链接、勾选任务或滚动等常规操作。它提供灵活的设置选项，允许你将双击行为定义为“无操作”、“选中单词”或恢复默认的“切换编辑”。此外，Pro 版本还引入了可调节的双击间隔阈值，能更精准地过滤掉因手抖或颠簸产生的无效双击，提升操作容错率。

需要注意的是，该插件目前仅在桌面端模拟手机和平板环境进行了测试，尚未在真实 iOS 或 Android 设备上验证，若遇兼容性问题需反馈给开发者。它仅作用于阅读视图，不影响实时预览、源码模式或画布，也不改变鼠标双击或手写笔的行为。如果你主要使用桌面端键盘操作，或不需要控制移动端双击行为，则无需安装此插件。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


