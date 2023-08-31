---
uid: 2023082011361793
title: Obsidian 插件：【Readme】Touch Bar Macros
tags: ['obsidian插件', 'readme']
description: 从您的Mac的Touch Bar上运行自定义宏。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】Touch Bar Macros

> [!Note] 插件名片
> - 插件名称：Touch Bar Macros
> - 插件作者：Frostplexx
> - 插件说明：从您的Mac的Touch Bar上运行自定义宏。
> - 插件分类：['obsidian插件', 'readme']
> - 项目地址：[点我访问](https://github.com/frostplexx/obsidian-touchbar-macros)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?touchbar-macros)

## 概述

从您的Mac的Touch Bar上运行自定义宏。



> [!tip] 原文出处
> 
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/Frostplexx/obsidian-touchbar-macros/master/README.md)
> 

---

## Readme(翻译）

下面是 [[touchbar-macros]] 插件的自述翻译


# Obsidian触控栏宏
这是一个为[Obsidian](https://obsidian.md/)添加触控栏支持的插件。
## 特点

- 将自定义项目添加到您的触控栏
- 使用宏快速完成任何操作
- 通过单次触摸执行您最喜欢的操作
- 自定义触控栏项目的颜色
## 截图

![Screenshot 2023-06-20 at 18 41 33](https://github.com/Frostplexx/obisdian-mac-touchbar/assets/62436912/59981b82-ff03-4bea-a763-1c69b8b48880)



https://github.com/Frostplexx/obisdian-mac-touchbar/assets/62436912/fe467348-ffcf-4ae3-87bd-ac01ae8c26c1
安装
### 来自GitHub

- 从GitHub存储库的Releases部分下载最新版本
- 从zip文件中提取插件文件夹到您的vault的插件文件夹：`<vault>/.obsidian/plugins/`
- 重新加载Obsidian
- 如果您仍然在安装此插件时遇到问题，请随时在[此处](https://github.com/Frostplexx/obisdian-mac-touchbar/issues)提出问题
- 注意：此插件需要Obsidian v0.9.8或更高版本才能正常工作。
## 使用方法

1. 打开插件的设置页面
2. 添加一个新的触控栏项目
3. 添加一个名称（可以是任何ASCII字符）、一个颜色和一个宏
4. 关闭设置页面，享受你的新触控栏项目吧！
### 宏语言

要添加宏，请使用以下语法：

| 语法       | 描述                                                                                           |
|------------|------------------------------------------------------------------------------------------------|
| [KEYCODE]  | 这是按下键的方式，其中 `KEYCODE` 是您想要按下的键的名称                                          |
| +          | + 用于组合多个键                                                                               |
| ,DELAY,    | , 用于在按键之间添加延迟，其中 `DELAY` 是以毫秒为单位的时间间隔                                 |
| "TEXT"     | " 用于添加文本，其中 `TEXT` 是您想要添加的文本。插件将输入此文本                                |
| #          | # 用于添加注释，其中 `COMMENT` 是您想要添加的注释（尚未实现）                                   |
| \          | \ 用于转义下一个字符                                                                           |
| {REPEAT}() | {}() 用于重复上一个命令，其中 `REPEAT` 是重复的次数                                             |



