---
uid: 20230329145808
title: Obsidian 插件：Calendar
description: 
tags: 
author: OS
type: other
draft: false
editable: false
modified: 20230414111628
public: yes
---

# Obsidian 插件：Calendar

## 概述

为 Obsidian 创建了一个简单的日历视图，用于在你的日常笔记之间可视化和导航。

点击时，它会以当天的日期作为文件名生成一个笔记，方便我们快速记录，同时它支持日模板及周模板定制，在点击日期时可以自动使用你定义的模板，方便作总结或读书笔记等有固定格式的场景。同时在日期上的悬浮点可以提示你是否创建过当天的日记以及通过点的数量来判断你笔记内容的多少。

> [!插件名片]
> - 插件名称：Calendar
> - 插件作者：Liam Cain
> - 插件说明：黑曜石的简单日历小部件
> - 插件项目地址：[点我跳转](https://github.com/liamcain/obsidian-calendar-plugin)

## 特性&效果

![Pasted image 20230122195032](https://s1.vika.cn/space/2023/03/15/9f1d6e620d2a4f08bc7092fd6641d6c3)

- 点击对应天数就可以建立以这个日期为名字的笔记
- 可以在月历上显示你对应笔记是否有未完成的任务

## 安装

1. 进入 Obsidian 插件中心
2. 搜索 Calendar
3. 安装
4. 开启插件

## 使用

### 日记

日历视图上单击对应的日期，在对话框中点击（create），就会显示当天的日记。

![Pasted image 20230122195157](https://s1.vika.cn/space/2023/03/15/852d6b3ea36742dab99761fe57631688)

#### 日记的格式

Calendar 中生成的日记，**就是按照核心插件中的日记模式生成的**。

如果你想要用 Calendar 生成 **一个带模板的日记**，就直接在核心插件【日记】这一栏设置即可！

![Pasted image 20230122195245](https://s1.vika.cn/space/2023/03/15/a15b343a417141be815cf82a88252b1f)

### 周记使用

“设置——插件选项——Calendar”打开 Calendar 的控制面板

- show week number：这样你的日历视图就会多出来一栏，用于显示月历中当前【周数】
    ![Pasted image 20230122195402](https://s1.vika.cn/space/2023/03/15/438acf73697c46c0b1f40ce3a14f8b14)
    和日记一样，单击【周数】就可以创建属于你的周复盘啦：

![Pasted image 20230122195424](https://s1.vika.cn/space/2023/03/15/a37ba468305e45ccae1bd48c891f0fe1)

#### 周记的格式

依赖：

![Pasted image 20230122195645](https://s1.vika.cn/space/2023/03/15/450ffd22cd36408882242c4d6ddd2f32)

- **Weekly note format**

这个是设置【周记文件名】的，在右侧的输入框输入你的周记文件名，新建的时候就会自动命名。

**特别注意！**  也可以使用 `YYYY-WW` 的命名方式，以这周为例，会显示 `2021-34`

意为”2021 年的第 34 周“

或者说，【周复盘 -YYYY 年第 WW 周】，显示出来的就是【周复盘 -2021 年第 34 周】

- **Weekly note tmeplate**

使用周记模板，新建一个模板，然后在后面输入周记模板路径就可以。

- **Weekly note folder**

周记文件保存在哪个文件夹中，按照你自己想保存的设置即可

> [! 注意]

> 输入的文件夹名称一定要真实存在，系统不会按照你输入的文件夹名自动建立文件夹