---
uid: 1791709370970000
title: 'Obsidian 插件：Visual Line Numbers'
tags: ['编辑工具', '界面优化', '效率工具', 'obsidian插件']
description: 'Numbers every wrapped display line in the editor gutter, with relative, hybrid and absolute modes, so counted Vim motions land where the gutter says. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Visual Line Numbers

> [!Note] 插件名片
> - 插件名称：Visual Line Numbers
> - 插件作者：theluckystrike
> - 插件说明：Numbers every wrapped display line in the editor gutter, with relative, hybrid and absolute modes, so counted Vim motions land where the gutter says. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['编辑工具', '界面优化', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/theluckystrike/visual-line-numbers)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?visual-line-numbers)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/theluckystrike/visual-line-numbers/master/README.md)



## 概述

**1. 主要功能**
该插件在编辑器侧边栏为每一行“显示行”（即换行后的视觉行）添加编号，支持相对、混合和绝对三种模式。它解决传统行号仅针对逻辑行计数，导致与Vim等编辑器中基于视觉行的移动指令（如 `5gj`）不匹配的问题。

**2. 适用场景**
主要适用于使用Vim键位映射（如将 `j`/`k` 映射为 `gj`/`gk`）进行高效导航的用户，或在长段落频繁换行、需要精确视觉定位的写作与编程场景。

**3. 核心特色**
*   **视觉行精准计数**：长段落若换行显示为5行，则显示5个编号，确保光标移动距离与侧边栏数字一致。
*   **相对模式**：默认模式，光标所在行显示0，上下行显示距离，便于快速估算移动步数。
*   **混合模式**：光标行显示绝对行号，其他行显示相对距离，兼顾位置感知与距离计算。
*   **绝对模式**：仅逻辑首行显示行号，兼容其他工具的行号引用。

**4. 使用建议**
建议Vim用户启用相对或混合模式，以实现“所见即所得”的行数移动；若需与外部错误日志或代码引用对齐，可选择绝对模式。注意该插件未经官方人工审核，使用前请备份数据。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


