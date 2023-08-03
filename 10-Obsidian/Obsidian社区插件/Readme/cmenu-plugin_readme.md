---
uid: 2023080322155925
title: Obsidian 插件：cMenu
tags: ['编辑工具', '效率', '界面相关', 'obsidian插件', 'readme']
description: 为 Obsidian 添加了一个悬浮的精简文本样式编辑工具栏，让你不用记忆各种mardown 命令，也能进行编辑。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：cMenu

> [!Note] 插件名片
> - 插件名称：cMenu
> - 插件作者：Chetachi
> - 插件说明：为 Obsidian 添加了一个悬浮的精简文本样式编辑工具栏，让你不用记忆各种 mardown 命令，也能进行编辑。
> - 插件分类：[' 编辑工具 ', ' 效率 ', ' 界面相关 ', 'obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/chetachiezikeuzor/cMenu-Plugin)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?cmenu-plugin)

## 概述

为 Obsidian 添加了一个悬浮的精简文本样式编辑工具栏，让你不用记忆各种 mardown 命令，也能进行编辑。

![cMenu](https://cdn.pkmer.cn/covers/cmenu-plugin.PNG!pkmer)

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/chetachiezikeuzor/cMenu-Plugin/master/README.md)
>

---

## Readme(翻译）

下面是 [[cmenu-plugin]] 插件的自述翻译

# cMenu 插件

![cMenu-Plugin下载量](https://img.shields.io/github/downloads/chetachiezikeuzor/cMenu-Plugin/total.svg)

![cMenu-Plugin发布版本](https://img.shields.io/github/v/release/chetachiezikeuzor/cMenu-Plugin)

![](https://raw.githubusercontent.com/chetachiezikeuzor/cMenu-Plugin/master/assets/cMenu%20Demo%20Header.png)

### 状态：此插件现在可以在 Obsidian 插件商店中使用

cMenu 是一个插件，它为更流畅的写作/编辑体验添加了一个简洁且用户友好的文本编辑器模态框✍🏽。对于那些不希望配置大量热键的人来说，这个插件使文本编辑和执行命令变得更加容易。

## 演示

![](https://raw.githubusercontent.com/chetachiezikeuzor/cMenu-Plugin/master/assets/cMenu.gif)

使用便捷性

该插件专为需要简单文本编辑器来帮助标记笔记的记笔记者而设计。cMenu 解决了需要记住众多热键和/或使用多次按键才能获得所需标记的问题。当您使用 cMenu 时，您只需要专注于写作！

如何工作

通过 cMenu 的最新更新，您可以将几乎任何 Obsidian 命令库中的命令添加到菜单栏中。默认情况下，菜单栏将包含以下命令：切换加粗、切换斜体、切换删除线、cMenu：切换下划线、cMenu：切换上标、cMenu：切换下标、切换代码、cMenu：切换代码块和切换引用。

```javascript
"menuCommands": [
    {
      id: "cmenu-plugin:editor:toggle-bold",
      name: "cMenu: 切换加粗",
      icon: "bold-glyph",
    },
    {
      id: "cmenu-plugin:editor:toggle-italics",
      name: "cMenu: 切换斜体",
      icon: "italic-glyph",
    },
    {
      id: "cmenu-plugin:editor:toggle-strikethrough",
      name: "cMenu: 切换删除线",
      icon: "strikethrough-glyph",
    },
    {
      id: "cmenu-plugin:underline",
      name: "cMenu: 切换下划线",
      icon: "underline-glyph",
    },
    {
      id: "cmenu-plugin:superscript",
      name: "cMenu: 切换上标",
      icon: "superscript-glyph",
    },
    {
      id: "cmenu-plugin:subscript",
      name: "cMenu: 切换下标",
      icon: "subscript-glyph",
    },
    {
      id: "cmenu-plugin:editor:toggle-code",
      name: "cMenu: 切换代码",
      icon: "code-glyph",
    },
    {
      id: "cmenu-plugin:codeblock",
      name: "cMenu: 切换代码块",
      icon: "codeblock-glyph",
    },
    {
      id: "cmenu-plugin:editor:toggle-blockquote",
      name: "cMenu: 切换引用",
      icon: "quote-glyph",
    }
  ],
```

正如您所看到的，cMenu 向 Obsidian 的命令库添加了四个新命令，并修改了 Obsidian 的十四个文本编辑命令。这些命令被添加到一个命令数组中，然后在生成 cMenu 模态框时读取。如果您想要删除和/或添加新的命令，可以在 cMenu 设置面板中进行操作。使用亮色按钮（您的强调颜色）将新命令添加到菜单中。使用灰色按钮将它们从菜单中删除。当您添加/删除新命令时，您将在控制台中看到一条消息，指示该命令的状态。在最新的更新 [1.1.2](https://github.com/chetachiezikeuzor/cMenu-Plugin/releases/tag/1.1.2) 中，每次添加或删除命令时，cMenu 都会重新加载。无需关闭当前笔记。

![](https://raw.githubusercontent.com/chetachiezikeuzor/cMenu-Plugin/master/assets/cMenu.gif)

强烈建议与 cMenu 一起使用插件和。例如：我有一个生成国际象棋开局“阿列欣防御”的模板。使用 Hotkeys for Templates，我可以选择将此模板添加到 Obsidian 的命令库中。现在它在命令库中，我可以选择将此命令附加到 cMenu 中。这意味着您现在可以将几乎任何内容添加到 cMenu 中，这使其更加强大！

![](https://raw.githubusercontent.com/chetachiezikeuzor/cMenu-Plugin/master/assets/chesser%20cMenu.gif)

cMenu 还有一些样式上的变化，也可以进行自定义。对于使用插件的用户，您现在可以将 cMenu 的附加方法更改为“body”。这样，cMenu 将不再附加到工作区域，而是附加到应用程序的主体。这是当前与存在的问题的一种解决方法，但我正在积极寻找更好的解决方案。

![](https://raw.githubusercontent.com/chetachiezikeuzor/cMenu-Plugin/master/assets/cMenu-sliding-panes.gif)

使用 cMenu，您可以更改设计美学。玻璃拟态是一种相当流行的设计趋势，所以我想“为什么不将其添加到 cMenu 中呢？”您可以选择为 cMenu 使用“玻璃”样式，这使其具有独特的外观。

![](https://raw.githubusercontent.com/chetachiezikeuzor/cMenu-Plugin/master/assets/glass-cMenu.gif)

## cMenu 状态栏菜单

通过新的 [1.1.0](https://github.com/chetachiezikeuzor/cMenu-Plugin/releases/tag/1.1.0) 更新，您可以控制 cMenu 的底部值，以及切换隐藏 cMenu 和添加/删除新的命令项。删除按钮将删除最近添加的命令。

![](https://raw.githubusercontent.com/chetachiezikeuzor/cMenu-Plugin/master/assets/cMenu%20status%20bar%20menu.gif)

![](https://raw.githubusercontent.com/chetachiezikeuzor/cMenu-Plugin/master/assets/cMenu.png)

## 安装

此插件现在可以在社区插件商店中获得。您可以从那里安装并启用它。对于手动安装，您可以下载必要的文件并将它们放置在插件文件夹中。

---

## 更新日志

### [0.1.0](https://github.com/chetachiezikeuzor/cMenu-Plugin/releases/tag/0.1.0) - 2021 年 7 月 27 日

##### 已更改

- 接口已重命名以匹配插件信息
- 现在在菜单创建时使用 `workspace.getActiveViewOfType(MarkdownView)` 而不是 `activeLeaf`

---

### [0.2.0](https://github.com/chetachiezikeuzor/cMenu-Plugin/releases/tag/0.2.0) - 2021 年 8 月 2 日

##### 改变

- 现在使用 `workspace.getActiveViewOfType(MarkdownView)` 来存储文本选择

##### 修复

- cMenu 将附加到 `.mod-vertical.mod-root` 父级而不是 `body` 父级。
- cMenu 的左定位是通过在菜单创建时动态查找宽度的函数设置的。
  ![](https://raw.githubusercontent.com/chetachiezikeuzor/cMenu-Plugin/master/assets/cMenu-v020.gif)

### [0.3.0](https://github.com/chetachiezikeuzor/cMenu-Plugin/releases/tag/0.3.0) - 2021 年 8 月 2 日

##### 修复

- 修复了一个小 [错误](https://github.com/chetachiezikeuzor/cMenu-Plugin/issues/3#issuecomment-891371471)，导致额外的调整大小手柄被创建。

### [1.0.0](https://github.com/chetachiezikeuzor/cMenu-Plugin/releases/tag/1.0.0) - 2021 年 8 月 11 日

##### 修复

- 修复了可切换附加方法设置的滑动窗格问题。
  ![](https://raw.githubusercontent.com/chetachiezikeuzor/cMenu-Plugin/master/assets/cMenu-sliding-panes.gif)

##### 添加

- 添加了新的玻璃效果设置。
  ![](https://raw.githubusercontent.com/chetachiezikeuzor/cMenu-Plugin/master/assets/glass-cMenu.gif)
- 添加了新的自定义命令设置。
  ![](https://raw.githubusercontent.com/chetachiezikeuzor/cMenu-Plugin/master/assets/chesser%20cMenu.gif)

---

### [1.0.1](https://github.com/chetachiezikeuzor/cMenu-Plugin/releases/tag/1.0.1) - 2021 年 8 月 11 日

##### 添加

- 在命令图标选择器中添加了更多的图标

### [1.0.2](https://github.com/chetachiezikeuzor/cMenu-Plugin/releases/tag/1.0.2) - 2021 年 8 月 13 日

##### 改动

- 为了更好的自定义样式，删除了大部分的!important 声明

##### 添加

- 添加了几个更多的图标
- 添加了对用户界面的更新

### [1.0.3](https://github.com/chetachiezikeuzor/cMenu-Plugin/releases/tag/1.0.3) - 2021 年 8 月 13 日

##### 添加

- 添加了羽毛图标

### [1.1.0](https://github.com/chetachiezikeuzor/cMenu-Plugin/releases/tag/1.1.0) - 2021 年 8 月 27 日

##### 添加

- 添加了新的状态栏菜单，用于额外的 cMenu 设置：隐藏/显示按钮，底部值更改
  ![](https://raw.githubusercontent.com/chetachiezikeuzor/cMenu-Plugin/master/assets/cMenu%20status%20bar%20menu.gif)
- 添加了修改后的文本编辑命令
  - 命令执行后将保持编辑器的焦点

### [1.1.2](https://github.com/chetachiezikeuzor/cMenu-Plugin/releases/tag/1.1.2) - 2021 年 9 月 14 日

##### 添加

- 添加了 [remix icons](https://remixicon.com) 用于命令自定义（使其有点慢 :/）
- 添加了重新加载功能（按钮用于执行添加/删除后的执行）
- 添加了自定义列设置
- 添加了在设置中重新排序命令的功能
  ![](https://raw.githubusercontent.com/chetachiezikeuzor/cMenu-Plugin/master/assets/reorder_commands.gif)
- 添加了隐藏/显示 cMenu 的命令
  ![](https://raw.githubusercontent.com/chetachiezikeuzor/cMenu-Plugin/master/assets/hide_show_command.gif)
- 添加了 [删除标签](https://github.com/chetachiezikeuzor/cMenu-Plugin/pull/23) 功能

---

## 检查清单

- [x] Glassmorphism 设置
  - [x] 设置以切换 cMenu 的玻璃效果
- [x] 修复与滑动窗格一起使用的问题（解决方法）
  - [x] 设置以切换 cMenu 将切换到 body 而不是 modroot
- [x] 向 cMenu 添加自定义命令
  - [x] 为没有图标的命令选择图标
- [x] 修改文本编辑命令
  - [x] 在编辑器中保持焦点
- [x] 更改 cMenu 的底部值
- [x] 隐藏/显示 cMenu
- [x] 添加更多命令图标（Remix Icons）
- [x] 自定义 cMenu 列
  - [x] 设置以自定义 cMenu 列（控制 cMenu 每行的命令按钮数量）
- [x] 重新加载 cMenu
  - [x] 在添加新命令和删除命令函数后添加重新加载
  - [x] 添加通用重新加载按钮（运行重新加载函数）
- [ ] 确定文本是否已被选择
- [x] 简单的命令按钮重新排序
- [ ] cMenu 工作区/嵌套菜单
- [ ] 跟随光标设置
  - [ ] 设置以切换 cMenu 跟随鼠标光标

---

## 支持

如果您喜欢这个插件并考虑捐赠以支持持续开发，请使用下面的按钮！

由 Chetachi ❤️ 创建
