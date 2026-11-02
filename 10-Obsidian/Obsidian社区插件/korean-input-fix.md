---
uid: 1793625614660000
title: "Obsidian 插件：Korean Input Fix"
tags: ["编辑工具", "移动端优化", "效率工具", "obsidian插件"]
description: "Commits unfinished Korean (Hangul) input when you tap, press Enter, move the cursor, or use a hotkey, so Live Preview renders right away. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Korean Input Fix

> [!Note] 插件名片
> - 插件名称：Korean Input Fix
> - 插件作者：kkamanggoni
> - 插件说明：Commits unfinished Korean (Hangul) input when you tap, press Enter, move the cursor, or use a hotkey, so Live Preview renders right away. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['编辑工具', '移动端优化', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/kkamanggoni-dev/korean-input-fix)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?korean-input-fix)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/kkamanggoni-dev/korean-input-fix/master/README.md)



## 概述

Korean Input Fix 专门解决韩语（Hangul）输入法在 Obsidian 编辑器中因组合状态未结束导致的渲染异常。当最后一个音节仍处于“组合中”状态时，若执行非打字操作，Live Preview 会误判该行仍在编辑，从而无法正确显示复选框、列表或引用块等 Markdown 元素。该插件的核心功能是在检测到此类操作时，立即强制提交当前的韩语组合状态，确保编辑器能即时完成渲染，消除因输入未完成造成的视觉延迟。

在移动端使用三星键盘时，输入 `- [ ] 사과` 后按回车，原本可能无法变成复选框，或点击其他位置后末尾音节仍带下划线；在桌面端使用微软韩语输入法时，输入 `- 내용` 后立即使用“插入上方行”等快捷键，也会导致该行保持原始文本状态。安装此插件后，这些场景下的操作会自动触发组合提交，无需再手动输入无意义的字符或空格来强制刷新界面。

相比其他通用修复方案，该插件针对韩语输入法的特定机制进行了优化。它通过短暂移动焦点至隐藏输入框再移回的方式提交组合，确保移动端的屏幕键盘不会意外关闭或闪烁。此外，插件具备智能识别能力，在自动补全下拉菜单、模态框或弹出层激活期间会自动暂停工作，避免干扰正常的交互流程，同时提供手动命令作为备用方案。

需要注意的是，该插件仅针对韩语输入法的组合状态问题，若你主要使用其他语言或不存在此类渲染延迟，则无需安装。它不改变输入法的候选词逻辑，也不处理非韩语环境下的类似 IME 问题。建议在确认自己频繁遇到韩语输入后 Markdown 不渲染的情况后再启用，以精简插件列表。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


