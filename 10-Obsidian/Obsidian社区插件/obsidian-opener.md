---
uid: 20231007174607
title: Opener 插件默认在新标签页打开笔记
tags: [obsidian, 插件，功能增强, PDF]
description: 
author: calmwaves
type: basic
draft: false
editable: true
modified: 20231007180147
---

# Opener 插件默认在新标签页打开笔记

## 概述

默认在新标签页中打开 md 笔记，如果已经打开了该 md，就会直接切换到该标签页

> [!Note] 插件名片
> - 插件名称：Opener
> - 插件作者：aidan-gibson
> - 插件说明：默认在新标签页打开笔记
> - 插件项目地址：[点我跳转](https://github.com/aidan-gibson/obsidian-opener)

## 前言

首先明确 obsidian 中的三个概念，new tab（新标签页），new pane，new window（新窗口）

![6f45cb51fd4f12178550a04d5fb2a4a7](https://cdn.pkmer.cn/images/202310202119384.png!pkmer)

![452bd54990dafbc7a3abf1d501a2cb61](https://cdn.pkmer.cn/images/202310202119814.png!pkmer)

- 创建 new pane：命令面板搜『分屏』

![bbea9b578b7b341234f2e312f02553b1](https://cdn.pkmer.cn/images/202310202119316.png!pkmer)

- 创建 new window：命令面板搜【新窗口】

![98f28522fabbd0c8fad02745bcf71923](https://cdn.pkmer.cn/images/202310202119603.png!pkmer)

## obsidian 默认的打开笔记的方式

> [!quote]
> reference: [内部链接 - Obsidian 中文帮助 - Obsidian Publish](https://publish.obsidian.md/help-zh/%E4%BD%BF%E7%94%A8%E6%8C%87%E5%8D%97/%E5%86%85%E9%83%A8%E9%93%BE%E6%8E%A5#%E6%89%93%E5%BC%80%E9%93%BE%E6%8E%A5 )
> reference：[Use tabs in Obsidian - Obsidian Help](https://help.obsidian.md/User+interface/Use+tabs+in+Obsidian#Open+a+link)
> **注意以下讨论的皆为 obsidian 中的内部链接，网址外链不在讨论范围内**
> - 预览/阅读模式下：
> 	- 在当前 tab 中打开：鼠标左键单击
> 	- 在 new tab 中打开并跳转到新 tab 页：ctrl+ 鼠标左键，鼠标中键（滚轮）
> 	- 在 new pane 中打开并聚焦到新 pane 中：ctrl+alt+ 左键
> 	- 在 new window 中打开并聚焦到新 windows：Ctrl+Alt+Shift+ 鼠标左键
> - 编辑模式下：
> 	- 在当前 tab 中打开：ctrl+ 鼠标左键
> 	- 在 new tab 中打开并跳转到新 tab 页：ctrl+shift+ 鼠标左键
> 	- 在 new pane 中打开并聚焦到新 pane 中：ctrl+alt+ 左键
> - 另外，如果想预览链接内容，但又不想离开当前笔记，则可以打开 [页面预览](https://publish.obsidian.md/help-zh/%E6%8F%92%E4%BB%B6/%E9%A1%B5%E9%9D%A2%E9%A2%84%E8%A7%88) 插件。这样，鼠标悬停在内部链接上时，你就可以通过一个小弹窗来预览链接中的内容。

## Opener 插件增强

Opener 一个插件就可以取代其他几个插件的功能：[[open-in-new-tab_readme|open in new tab]]，[[close-similar-tabs]]，[no dupe leaf](https://github.com/scambier/obsidian-no-dupe-leaves) 

该插件暂未上架官方插件市场，手动下载或者借助 BRAT 插件获取

这个插件提供了两个功能

1. 在新标签页中打开 md，如果已经打开了该 md，就会直接切换到该标签页
2. 使用默认应用程序打开 pdf（或 OB 可以打开的其他文件类型）。

插件提供了设置项和临时关闭的命令，可以按需设置使用

![adda401de8ef0f33ddb3915426404cf2](https://cdn.pkmer.cn/images/202310202120114.png!pkmer)

![2af6c19715c98d2afc1fec6e2a626ca1](https://cdn.pkmer.cn/images/202310202120613.png!pkmer)

## 其他

另外我也会通过 [[darlal-switcher-plus_readme|Quick Switcher++]] 插件来打开笔记，在设置里把『default to open in new tab』打开即可。

![b8191a8cc054e6ae0bc5f52d5ab12dee](https://cdn.pkmer.cn/images/202310202120408.png!pkmer)

现在换成了[[obsidian-another-quick-switcher_readme|Another Quick Switcher]]插件，设置键位即可

![183ffffeeb4d8aedecbb6f604778bf5c](https://cdn.pkmer.cn/images/202310202120377.png!pkmer)
