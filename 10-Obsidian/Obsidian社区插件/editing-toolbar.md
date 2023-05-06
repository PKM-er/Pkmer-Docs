---
uid: 20230329145808
title: Obsidian 插件：Editing Toolbar 必装的可视化编辑工具
description: 
tags: 
author: OS
type: other
draft: false
editable: false
modified: 20230429181108
---

# Obsidian 插件：Editing Toolbar 必装的可视化编辑工具

Editing Toolbar 是 [[Cumany]] 二次开发的可视化编辑工具栏，旨在增强 Obsidian 的可视化编辑体验。提供类似于 Word，在线办公软件 的浮动工具栏等交互方式。

> [!Note] 插件名片
> - 插件名称：Editing Toolbar
> - 插件作者：Cumany
> - 插件说明：旨在增强 Obsidian 的可视化编辑体验。提供类似于 Word，在线办公软件 的浮动工具栏等交互方式。
> - 插件项目地址：[点我跳转](https://github.com/cumany/obsidian-editing-toolbar)

## 效果&特性

![editing-toolbar-demo](https://cdn.pkmer.cn/images/8dcebbf3dbf5d43541cacc63301ae1a8_MD5.gif)

> [!重要提示]
> Editing Toolbar 可以自定义添加命令，只要是 命令面板里能看到的都可以加。也可以自由调整顺序，非常方便。

## 安装

1. 进入 Obsidian 社区插件
2. 搜索 Editing Toolbar
3. 安装
4. 开启插件

## 使用

1. 增加新的工具栏样式 tiny

    [![|400](https://cdn.pkmer.cn/images/6c7222e15b6962cc554077c737db26c4_MD5.png)](https://camo.githubusercontent.com/14426cec336e3720265a061a0b85122c79193abc019d1c3a9d90739bc01307aa/68747470733a2f2f676870726f78792e636f6d2f68747470733a2f2f7261772e67697468756275736572636f6e74656e742e636f6d2f63756d616e792f63756d616e792f6d61696e2f2f7069632f3230323230393037313133313731352e706e67)

2. 增加工具栏位置选项，top，following

    - top 样式类似 word 的指定工具栏效果
    - following 样式，则是跟随光标点击位置

    [![|400](https://cdn.pkmer.cn/images/ee396b67b8834eb107c53c27100bd31d_MD5.png)](https://camo.githubusercontent.com/4501d6ada41d95e84ed486ecd1779e71714b750f1491d1a68fbfc86fb848bb87/68747470733a2f2f676870726f78792e636f6d2f68747470733a2f2f7261772e67697468756275736572636f6e74656e742e636f6d2f63756d616e792f63756d616e792f6d61696e2f2f7069632f3230323230393037313133333735332e706e67)

3. 支持 多窗口，多 tab 适应 obsidian 0.14+
4. 增加格式刷功能 内置字体颜色和背景颜色两种格式刷（鼠标中键或者右键可取消格式刷状态）
5. 增加一些内置命令
    - change-font-color 字体颜色调色板和格式刷
    - change-background-color 背景颜色调色板和格式刷
    - indent-list 列表增加缩进
    - undent-list 列表减少缩进
    - editor-undo：撤销
    - editor-redo：重做
    - hrline
        - 会插入一个 `---` 分割线
    - justify 两端对齐 插入一个 html 代码，让文字两端对齐 `<p align="justify">.....</p>`
    - left 插入一个 html 代码，让文字左对齐 `<p align="left">.....</p>`
    - right
        - 插入一个 html 代码，让文字右对齐 `<p align="right">.....</p>`
    - center 居中对齐 插入一个 html 代码，让文字居中 `<center>.....</center>`
    - fullscreen-focus 默认绑定快捷键 `Ctrl+shift+F11`。 将使笔记页面全屏显示，让你更专注于写作本身。要退出全屏，请按 ESC 或再次执行全屏命令。
    - workplace-fullscreen-focus 默认绑定快捷键 `Ctrl+F11`。 与全屏聚焦模式不同，这个模式只是隐藏了左右侧边栏的面板，它只是工作区全屏。
    - head 1-6 级标题设置 默认绑定快捷键 `Ctrl+1,ctrl+2,...Ctrl+6`。
      ![Pasted image 20230210173533](https://cdn.pkmer.cn/images/0d9a9a1c49d9d2b61ea4e17c400766e3_MD5.png)

### 进阶使用

1. 支持自定义命令图标
   ![支持自定义命令图标](https://cdn.pkmer.cn/images/02dbf5b6ba9ecf5b170766f390f3f0a5_MD5.gif)

2. 支持修改命令名称

![支持修改命令名称](https://cdn.pkmer.cn/images/48b368f52a8494689040e851a77bad09_MD5.gif)

1. 支持添加子菜单

![支持添加子菜单](https://cdn.pkmer.cn/images/ee9a0674177f5467ccaa9888fe3227e4_MD5.gif)

1. 支持菜单拖动排序
2. 增加格式刷功能 内置字体颜色和背景颜色两种格式刷（鼠标中键或者右键可取消格式刷状态）
   ![增加格式刷功能 内置字体颜色和背景颜色两](https://cdn.pkmer.cn/images/043688f59a5fa25d87f3d6bfa1c60de9_MD5.gif)
