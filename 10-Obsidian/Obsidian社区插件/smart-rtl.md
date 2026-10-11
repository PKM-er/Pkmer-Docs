---
uid: 1791709370047000
title: "Obsidian 插件：Smart RTL"
tags: ['obsidian插件']
description: "Sets each line's text direction from the majority of its words, so a Persian, Arabic or Hebrew line that starts with an English word still reads right-to-left. - This plugin has not been manually reviewed by Obsidian staff."
author: "AI"
type: "auto"
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Smart RTL

> [!Note] 插件名片
> - 插件名称：Smart RTL
> - 插件作者：Milad Samimifar
> - 插件说明：Sets each line's text direction from the majority of its words, so a Persian, Arabic or Hebrew line that starts with an English word still reads right-to-left. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['obsidian插件']
> - 项目地址：[点我访问](https://github.com/milad-s5/obsidian-smart-rtl)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?smart-rtl)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/milad-s5/obsidian-smart-rtl/master/README.md)



## 概述

**Smart RTL 插件总结**

1. **主要功能**：解决 Obsidian 中右向左（RTL）语言（如波斯语、阿拉伯语、希伯来语）混排英文时，因行首字符导致整行方向错误的问题。插件通过统计每行单词方向占比，自动修正文本显示方向。

2. **适用场景**：适用于以波斯语、阿拉伯语或希伯来语为主，且频繁夹杂英文技术术语、代码或专有名词的双语笔记写作场景。

3. **核心特色**：
   - **多数决机制**：默认当一行中 40% 以上的单词为 RTL 时，整行显示为 RTL（阈值可自定义），避免行首英文导致方向翻转。
   - **智能过滤**：自动忽略行内代码、URL、链接路径、数学公式及列表标记，仅统计正文内容。
   - **全局覆盖**：支持实时预览、源码模式及阅读视图，涵盖标题、列表、引用及表格单元格。
   - **细节优化**：代码块和数学块强制保持 LTR；空行继承上方文本方向，确保光标位置符合直觉。

4. **使用建议**：适合 RTL 语言用户安装以改善阅读体验。若对方向切换敏感，可在设置中调整 RTL 单词占比阈值（如设为 50% 或更高），以平衡纯英文句子与混合句子的显示逻辑。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---
