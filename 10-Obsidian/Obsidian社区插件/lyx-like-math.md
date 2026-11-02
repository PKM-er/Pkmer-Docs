---
uid: 1793625615152001
title: "Obsidian 插件：LyX-like Math"
tags: ["学术与科研", "编辑工具", "效率工具", "obsidian插件"]
description: "Type math like in LyX: edit formulas as rendered math, finish commands with Space, fill empty boxes, and number equations. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：LyX-like Math

> [!Note] 插件名片
> - 插件名称：LyX-like Math
> - 插件作者：Omer Cooper
> - 插件说明：Type math like in LyX: edit formulas as rendered math, finish commands with Space, fill empty boxes, and number equations. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['学术与科研', '编辑工具', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/omercooper/lyx-like-math)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?lyx-like-math)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/omercooper/lyx-like-math/master/README.md)



## 概述

LyX-like Math 旨在解决在 Obsidian 中手写 LaTeX 公式繁琐且易错的问题。它引入了类似 LyX 的所见即所得编辑体验，允许用户直接点击已渲染的公式进行编辑，而非手动输入复杂的 LaTeX 代码。核心功能包括通过空格键快速完成命令、为 `\frac` 和 `\sqrt` 等结构提供待填充的空框，以及支持公式自动编号。尽管编辑过程直观，笔记最终仍保存为标准的 `$...$` 和 `$$...$$` LaTeX 格式，确保与其他工具兼容。

典型场景包括快速插入行内数学符号或复杂的显示公式。例如，当你需要输入高斯积分时，可以使用快捷键创建带编号的显示公式，直接点击公式中的空框填入变量，无需记忆 LaTeX 语法。另一个场景是编辑矩阵，通过侧边栏的面板选择矩阵模板，利用快捷键添加行列，最后按 Esc 保存。这种交互方式让数学输入更像是在排版软件中操作，而非编写代码。

相比其他数学插件，该插件的特色在于其“纯 LyX 行为”设计：它不会自动转换 `alpha` 为希腊字母或自动配对括号，而是严格遵循用户输入，直到按下空格或 Tab 才确认结构。此外，它内置了基于 MathLive 的离线编辑器，无需网络即可使用。插件还提供了一个符号面板，按类别分组常用符号，方便快速插入。对于无法直接编辑的复杂结构（如 `aligned` 环境），它会回退到纯文本编辑模式，并给出提示，保证了编辑的稳定性。

使用前需注意，该插件目前仅支持桌面端，且依赖 MathLive 库，因此安装包体积相对较大。它不适合需要实时自动补全或智能转换 LaTeX 命令的用户，因为插件刻意禁用了这些功能以保持编辑的确定性。另外，如果笔记在编辑公式期间发生同步或关闭，未保存的公式会被复制到剪贴板以防丢失，这是插件唯一的剪贴板访问行为。若你主要使用移动端或偏好全自动的 LaTeX 补全体验，此插件可能不是最佳选择。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


