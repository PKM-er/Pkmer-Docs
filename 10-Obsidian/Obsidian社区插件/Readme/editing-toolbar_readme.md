---
uid: 2023080322173975
title: Obsidian 插件：【Readme】Editing Toolbar
tags: ['编辑工具', '效率', '界面相关', 'obsidian插件', 'readme']
description: 提供了更强大的编辑工具栏，并内置了常用编辑功能，提供类似MS Word 的工具栏编辑体验。支持多种交互样式，也支持添加自定义功能和功能分组。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Editing Toolbar

> [!Note] 插件名片
> - 插件名称：Editing Toolbar
> - 插件作者：Cuman
> - 插件说明：提供了更强大的编辑工具栏，并内置了常用编辑功能，提供类似MS Word 的工具栏编辑体验。支持多种交互样式，也支持添加自定义功能和功能分组。
> - 插件分类：['编辑工具', '效率', '界面相关', 'obsidian插件', 'readme']
> - 项目地址：[点我访问](https://github.com/cumany/obsidian-editing-toolbar)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?editing-toolbar)

## 概述

提供了更强大的编辑工具栏，并内置了常用编辑功能，提供类似MS Word 的工具栏编辑体验。支持多种交互样式，也支持添加自定义功能和功能分组。

![Editing Toolbar](https://cdn.pkmer.cn/covers/editing-toolbar.png!pkmer)

> [!tip] 原文出处
> 
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/PKM-er/obsidian-editing-toolbar/master/README.md)
> 

---

## Readme(翻译）

下面是 [[editing-toolbar]] 插件的自述翻译


### [中文](./README-zh_cn.md) | English

# obsidian-editing-toolbar 插件

![](editing-toolbar-demo.gif)

感谢 [cmenu](https://github.com/chetachiezikeuzor/cMenu-Plugin) 插件，它给了我很多灵感，但是这个插件已经超过一年没有维护了，所以我重新修改了它，并添加了很多有趣的功能，包括顶部工具栏、光标跟随等，因此创建了编辑工具栏。

**Obsidian Editing Toolbar** 是一个提供类似于 MS-Word 的工具栏的插件，并为更流畅的写作/编辑体验添加了一个简洁且用户友好的文本编辑器模态。对于那些不希望配置大量热键的人来说，这个插件使得文本编辑和执行命令更加容易。无需记住复杂的 Markdown 命令，类似于所见即所得的富文本编辑器。
这个插件专门为希望在标记笔记时拥有一个简单的文本编辑器的记笔记者设计。它解决了需要记住大量热键和/或使用多个按键才能获得所需标记的问题。一个简单的工具栏来改善你在 Obsidian 中的写作体验！

> 推荐与 [Enhanced Editing Plugin](https://github.com/obsidian-canzi/Enhanced-editing) 一起使用，它可以添加更多有用的编辑命令。

## 目录

- [obsidian-editing-toolbar 插件](#obsidian-editing-toolbar-plugin)
  - [目录](#toc)
  - [如何安装](#how-to-install)
  - [视频介绍](#video-introduction)
  - [主要特点](#key-features)
    - [与其他插件配合使用](#work-with-other-plugins)
    - [完整 Vault 展示](#full-vault-showcase)
    - [支持](#support)

如何安装

请参考：[如何安装 Obsidian 插件](https://forum.obsidian.md/t/plugins-mini-faq/7737)

[关于Cmenu工具栏](https://www.bilibili.com/video/BV1mY4y1T7g2/)

## 主要特点
这与cmenu插件在以下几点上有所不同：

1. 添加了一个新的工具栏样式：tiny

   ![](https://ghproxy.com/https://raw.githubusercontent.com/cumany/cumany/main//pic/202209071131715.png)

2. 添加了工具栏位置选项：top、following

   ![](https://ghproxy.com/https://raw.githubusercontent.com/cumany/cumany/main//pic/202209071133753.png)
   ![](https://ghproxy.com/https://raw.githubusercontent.com/cumany/cumany/main//pic/202209071751006.gif)
3. 支持多窗口、多标签，适配obsidian 0.14+
4. 添加了一些内置命令
   1. change-font-color
   2. change-background-color
   3. indent-list
   4. undent-list
   5. editor-undo
   6. editor-redo
   7. hrline  
      将插入一个`---`分割线
   8. justify Both ends aligned
      插入一个HTML代码以使文本两端对齐`<p align="justify">..... </p>`
   9. left  
      插入一个HTML代码以使文本左对齐`<p align="left">..... </p>`
   10. right  
       插入一个HTML代码以使文本右对齐`<p align="right">..... </p>`
   11. center  
       插入一个HTML代码以使文本居中`<center>..... </center>`
   12. fullscreen-focus
       默认绑定快捷键`Ctrl+shift+F11`
       将使笔记页面全屏显示，让您更专注于写作本身。要退出全屏，请按ESC键或再次执行全屏命令
   13. workplace-fullscreen-focus
       默认绑定快捷键`Ctrl+F11`
       与fullscreen-focus模式不同，这个模式只隐藏左侧和右侧的侧边栏面板，只是工作区全屏
   14. head 1-6级标题设置
       默认绑定快捷键`Ctrl+1,ctrl+2,...Ctrl+6`
       ![](https://ghproxy.com/https://raw.githubusercontent.com/cumany/cumany/main//pic/202209071707695.png)
   15. 支持自定义命令图标
       ![](https://ghproxy.com/https://raw.githubusercontent.com/cumany/cumany/main//pic/202209071717111.gif)
   16. 支持修改命令名称
       ![](https://ghproxy.com/https://raw.githubusercontent.com/cumany/cumany/main//pic/202209071720159.gif)
   17. 支持添加子菜单
       ![](https://ghproxy.com/https://raw.githubusercontent.com/cumany/cumany/main//pic/202209071722207.gif)
   18. 支持菜单拖拽和排序
   19. 添加格式刷功能，内置两种格式刷用于字体颜色和背景颜色（中键或右键可以取消格式刷状态）
       ![](https://ghproxy.com/https://raw.githubusercontent.com/cumany/cumany/main//pic/202209071731151.gif)
   20. 工具栏图标宽度自适应缩小
       ![](https://ghproxy.com/https://raw.githubusercontent.com/cumany/cumany/main/pic/202209072157728.gif)

### 与其他插件一起使用

1. [emjoi toolbar](obsidian://show-plugin?id=obsidian-emoji-toolbar) 快速插入表情符号
   ![](https://ghproxy.com/https://raw.githubusercontent.com/cumany/cumany/main/pic/202209092001600.gif)


2. [Obsidian-Table-Generator](https://github.com/Quorafind/Obsidian-Table-Generator/) 和 [ob-table-enhance](https://github.com/Stardusten/ob-table-enhancer) 快速插入和编辑表格
   ![](https://ghproxy.com/https://raw.githubusercontent.com/cumany/cumany/main/pic/202209092008571.gif)

> 上述插件都可以从示例库中获取，它们都经过了优化和一些错误修复
☟☟☟

### 完整的Vault展示

这个Obsidian示例Vault非常惊人，有很多令人眼花缭乱的功能和展示，我相信你会有些惊讶，这就是Obsidian吗？
[蓝宝石示例](https://github.com/cumany/Blue-topaz-examples)

非常感谢您的支持！

<div align="center">
<img src="https://ghproxy.com/https://raw.githubusercontent.com/cumany/cumany/main/pic/202209192228895.png" width="400px">
</div>


<div align="center">
</div>



