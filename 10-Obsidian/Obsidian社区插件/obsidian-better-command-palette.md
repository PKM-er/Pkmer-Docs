---
uid: 20230709163901
title: Obsidian 插件：Better Command Palette 更好更易用的命令面板
tags: [Obsidian, 插件, 命令面板, 优化, 辅助]
description: Obsidian 插件：Better Command Palette 更好更易用的命令面板，为命令面板添加了一个更用户友好、功能更丰富的强化
author: Huajin
type: basic
draft: false
editable: false
modified: 20230710232759
---

# Obsidian 插件：Better Command Palette 更好更易用的命令面板

## 概述

命令面板集成了很多好用的功能，除了官方提供的快捷命令，还有丰富的插件生态，各个插件作者也会往里面放入一些常用功能。

但当命令随着插件增多，命令面板承担了搜索、打开、核心插件、社区插件的众多命令后，你会发现似乎单纯的搜索，不那么好用了。Better Command Palette 就为命令面板添加了一个更用户友好、功能更丰富的强化。使用 cmd+shift+p 打开命令面板。

> [!Note] 插件名片
>
> - 插件名称：Better Command Palette
> - 插件版本：0.15.0
> - 插件作者：Alex Bieg
> - 插件描述：为命令面板添加了一个更用户友好、功能更丰富的强化
> - 插件项目地址：[点我跳转](https://github.com/AlexBieg/obsidian-better-command-palette)

## 效果&特性

1. 使用快捷键 `ctrl+shift+p` 打开此命令面板，默认进入命令搜索模式（原来的命令面板用 `ctrl+p` 打开）；
2. 使用退格键关闭命令面板；
3. 最近的选择出现在最上面；
4. 输入 `/` 或使用快捷键进入文件搜索模式；
5. 输入 `#` 或使用快捷键进入标签搜索模式；
6. 搜索带有特定标签的文件；
7. 宏命令；
8. 隐藏用的比较少的命令，文件和标签，再次按 `cmd+i` 会显示；

![image-20230709172449615.png](https://cdn.pkmer.cn/images/image-20230709172449615.png!pkmer)

## 使用

此插件增加了一个强化的命令面板，增加了几个更友好的用户和更丰富的功能。命令面板提供了三种模式，将命令、文件和标签区分开。

- 第一种用于搜索并调用命令
- 第二种用于搜索并打开文件
	- 默认情况下，当你搜索到一个文件或者一个标签的时候
	- 使用快捷键 `ctrl+enter` 可以根据搜索到的文件或标签创建一个新文件
	- 使用快捷键 `shift+enter` 可以在**新的窗格**中打开这个文件。
- 第三种用于通过标签搜索并打开文件。同时还提供了自定义宏命令，用户可以自己创建属于自己的命令组。

### 基础设置

![image-20230709180912246.png](https://cdn.pkmer.cn/images/image-20230709180912246.png!pkmer)

- **Close on Backspace**：可以使用退格 (Backspace) 或者 Esc 来关闭命令面板；
- **Show Plugin Name**：关掉可以不显示新的命令面板上方的名字，外观就变得和原来的命令面板一样；
- **Recent above Pinned**：最近的选择出现在最上面；
- **Caps Lock Hyper Key Hotkey Override**：Hyperkey 是一款键盘快捷键辅助修改工具，能够充当额外的修改键，开启这个选项后会改变提示的图标，便于使用了 Hyperkey 的用户使用；
- **Use shift to create files and cmd to open in new panes**：
	- 此设置将反转该设置，即用变成使用 `shift+enter` 来创建文件，用 `ctrl+enter` 在新的窗格中打开文件；
- **File Type Exclusions**
	- 搜索时排除具有某些后缀的选项（比如输入 png，在搜索时就不会出现图片）

### 关于切换不同面板模式的设置

![image-20230709180936528.png](https://cdn.pkmer.cn/images/image-20230709180936528.png!pkmer)

- **File Search Prefix**：在新命令面板中输入 `/` 进入搜索文件模式；
- **Tag Search Prefix**：在新命令面板中输入 `#` 进入搜索标签模式；
- **Command Search Hotkey**：在新命令面板中使用快捷键 `ctrl+p` 搜索命令模式（新的命令面板刚打开时显示的就是搜索命令模式，因此之间使用该快捷键不会有反应）；
- **File Search Hotkey**：在新命令面板中使用快捷键 `ctrl+o` 进入搜索文件模式；
- **Tag Search Hotkey**：在新命令面板中使用快捷键 `ctrl+t` 进入搜索标签模式；

### 其他设置

![image-20230709200759959.png](https://cdn.pkmer.cn/images/image-20230709200759959.png!pkmer)

- **Suggestion Limit**：调整显示的项目的数量，默认为 50，过高的数值会影响性能；
- **Hotkey Modifier Style**：
- 可以调整快捷键的类型，有默认、Window 和 Mac 三种；
- **Add new macro**：将一组命令，合并成一个命令，自己为这个新的命令取个名字，这个命令将会出现在新的命令面板的命令模式中。

![image-20230709202957529.png](https://cdn.pkmer.cn/images/image-20230709202957529.png!pkmer)
