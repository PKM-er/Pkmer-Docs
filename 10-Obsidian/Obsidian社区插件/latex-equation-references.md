---
uid: 1780392511214000
title: 'Obsidian 插件：Latex Equation References'
tags: ['编辑工具', '文字处理', '学习与教育', '学术与科研', 'obsidian插件']
description: '它能使用标签自动给公式编号。'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Latex Equation References

> [!Note] 插件名片
> - 插件名称：Latex Equation References
> - 插件作者：georgrasumov
> - 插件说明：它能使用标签自动给公式编号。
> - 插件分类：['编辑工具', '文字处理', '学习与教育', '学术与科研', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/georgrasumov/Obsidian-Latex-Equation-References)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?latex-equation-references)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/georgrasumov/Obsidian-Latex-Equation-References/master/README.md)



## 概述

### 插件名称
Latex Equation References

### 主要功能
自动为使用 `%\label{...}` 注释的 LaTeX 方程编号（`\tag{N}`），并将 `\ref{...}` 替换为前缀和方程编号。

### 适用场景
适用于在 Obsidian 中撰写包含 LaTeX 方程的文档，需要对方程进行编号和引用的场景。

### 核心特色
1. 自动编号：为带有 `%\label{key}` 注释的方程自动分配连续编号，并自动插入或更新 `\tag{N}`。
2. 实时引用：在实时预览模式下，`\ref{key}` 显示为 `Equation N` 等，光标进入引用时显示原始 `\ref{key}` 文本以便编辑。
3. 可定制前缀：可配置编号前显示的词语，如 `Equation`、`Eq.` 等。

### 使用建议
在方程环境的行末写 `%\label{uniqeID}`，在文本中写 `\ref{uniqueID}` 以显示对该方程的引用。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


