---
uid: 20230709224524
title: Obsidian 插件：Homepage 打造属于自己的启动页
tags: [obsidian, 插件, homepage, 主页, 启动页]
description: 在启动 Obsidian 时，打开指定的笔记、图谱、白板文件或工作区布局
author: cuman
type: basic
draft: false
editable: false
modified: 20230731105737
---

# Obsidian 插件：Homepage 打造属于自己的启动页

## 概述

> [!Note] 插件名片
> - 插件名称：Homepage
> - 插件作者：mirnovov
> - 插件说明：在启动 Obsidian 时，打开指定的笔记、图谱、白板文件或工作区布局，而不是最近打开的（OB 默认设置）。
> - 插件分类：导航工具, 效率, 美化
> - 插件项目地址：[点我访问](https://github.com/mirnovov/obsidian-homepage)

Obsidian 每次打开会默认加载最后一次编辑的文件，如果想自定义设置 Obsidian 启动后的行为，那么 Homepage 这款插件就非常适合你。除此之外，还可以在侧边栏添加一个图标和命令用来快速打开主页。

## 特性

根据作者介绍 homepage 目前支持下面的特性：

- 可以使用任何笔记，画布，或工作区作为主页。也可以每次启动 Ob 随机选择一个笔记，或者使用你的每日或定期笔记作为主页。
- 可以设置启动主页时候，是否保留之前的 tab 页还是只替换最后的 tab 页
- 可以通过命令或者侧边栏图标启动主页
- 支持设置以什么模式打开笔记，阅读模式，编辑模式，还是实时预览模式。
- 支持打开主页后运行 Obsidian 命令。
- 支持高级玩法，配合 dataview 实现更复杂的启动页面。

## 使用

正常安装插件后，具体安装方法参考 [[Obsidian社区插件的安装]]，可以看到如下设置项。

![image.png](https://cdn.pkmer.cn/images/202307101515415.png!pkmer)

- File 文件。可以选择一个 md 文件，作为主页。
- Worksplace 工作区。可以设置用工作区作为主页，这样每次打开主页就会加载之前设置的工作区布局。需要通过 Obsidian 自带的工作区插件，提前设置好工作区。
- Random file 随机漫游。打开主页的时候将随机打开一篇 Obsidian 笔记或者白板文件。
- Graph View 图谱。把 Obsidian 的全局图谱作为主页。
- Daily Note 日记。会调用日记插件，展示每天的日记或者周期性笔记作为主页。
- Moment 选项已废除。主要通过输入 moment 日期变量来打开指定日期的笔记，现在可以通过 Daily Note 实现。

![image.png](https://cdn.pkmer.cn/images/202307101542789.png!pkmer)

## 实操

很多设置都可以通过使用 [[quickadd]] 实现，但 homepage 把很多命令简化了。比如 [[Blue Topaz 示例库简介]] 里面使用的 homepage 插件 就是用了 `工作区` 这个选项，设置一个包含主页的工作区，保存后，就可以在启动 Ob 的时候直接加载工作区。

如果设置一个 md 文件作为主页，里面包含有 dataview 语法，建议打开这个选项，可以有效避免打开主页的时候笔记频繁刷新的问题。

![image.png](https://cdn.pkmer.cn/images/202307101608687.png!pkmer)

这个插件既可以当做一个快捷启动文件的工具，也可以在启动 ob 的时候自动帮你启动一系列命令。可以看做精简版的 quickadd 插件。