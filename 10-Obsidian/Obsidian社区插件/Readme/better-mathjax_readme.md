---
uid: 20230803212024
title: Obsidian 插件：【Readme】Better MathJax
tags: ['obsidian插件', 'readme']
description: 提供数学自动完成和可自定义的代码片段。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Better MathJax

> [!Note] 插件名片
> - 插件名称：Better MathJax
> - 插件作者：GreasyCat
> - 插件说明：提供数学自动完成和可自定义的代码片段。
> - 插件分类：['obsidian插件', 'readme']
> - 项目地址：[点我访问](https://github.com/greasycat/BetterMathjax)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?better-mathjax)

## 概述

提供数学自动完成和可自定义的代码片段。

![Better MathJax](https://cdn.pkmer.cn/covers/better-mathjax.png!pkmer)

> [!tip] 原文出处
> 
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/greasycat/BetterMathjax/master/README.md)
> 

---

## Readme(翻译）

下面是 [[better-mathjax]] 插件的自述翻译



# BetterMathjax For Obsidian
这个插件将通过提供自动补全功能来改善 Obsidian 中的 Mathjax 体验。

## 特点
在检测到`$$`或`$$$$`块后，自动完成并进行内联Mathjax渲染。

![2023-01-26_18-29-32.png](https://s2.loli.net/2023/01/27/gCUNFnHspqAE8e7.png)

使用快捷键显示助手模态框，用于参考和快速编辑片段。

![2023-01-26_18-30-09.png](https://s2.loli.net/2023/01/27/J3QwytrSPloOYiK.png)

使用占位符进行快速导航

![2023-01-26_18-36-24.png](https://s2.loli.net/2023/01/27/GdQ7wLEYeA1Xtnl.png)

完全可定制的配置

![2023-01-26_18-32-28.png](https://s2.loli.net/2023/01/27/a25ItcnyXQJPMsS.png)

# 安装

### 1. 从Obsidian社区插件列表下载

### 2. 手动安装
- 创建`$YOUR_VAULT_FOLDER$/.obsidian/better-mathjax`文件夹
- 将发布文件`main.js.bak`，`manifest.json`和`styles.css`放入`$YOUR_VAULT_FOLDER$/.obsidian/better-mathjax`中

# 用法

请设置快捷键！！！

### 快捷键/按键映射（示例）

1. 确认所选条目：`Enter`
2. 选择上一个：`Ctrl+[`
3. 选择下一个：`Ctrl+]`
4. 选择下一个占位符：`Ctrl+'`
5. 选择上一个占位符：`Ctrl+;`
6. 显示当前选择的帮助信息：`Ctrl+Shift+/`
7. 手动重新加载配置文件：`无`

# 特别感谢
- [MathJax数据来源](https://www.onemathematicalcat.org/MathJaxDocumentation/TeXSyntax.htm) CC2.5
- [LCS实现](https://github.com/jeancroy/FuzzySearch) MIT
- [我第一次尝试的MathJax自动补全](https://github.com/greasycat/BetterLatexForObsidian) MIT



