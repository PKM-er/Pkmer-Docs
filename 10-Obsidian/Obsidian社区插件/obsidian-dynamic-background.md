---
uid: 20230329145808
title: Obsidian 插件：Dynamic Background（为 Obsidian 添加动态背景）
description: 
tags: 
author: OS
type: other
draft: false
editable: false
modified: 20230429181108
public: yes
---

# Obsidian 插件：Dynamic Background（为 Obsidian 添加动态背景）

这个插件可以为 Obsidian 编辑器 **增加动态效果和墙纸**，提升视觉体验，增加工作乐趣。

> [!Note] 插件名片
> - 插件名称：Obsidian Dynamic Background
> - 插件作者：samuelsong70
> - 插件说明：增加动态效果和墙纸
> - 插件项目地址：[点我跳转](https://github.com/samuelsong70/obsidian-dynamic-background/)

## 效果&特性

1. 特性列表：

- **为 Obsidian 背景增加动态效果**
- **为 Obsidian 背景增加墙纸**
- **为 Obsidian 背景同时增加动态效果和墙纸**

1. 5 种适用于 Obsidian 黑暗或深色配色的动态效果：

- 数字雨 (Matrix / Digital Rain)
    ![digital-rain-effect](Resource/Images/7261c1cdea0daa7bc4af0f307bfb44db_MD5.gif)
- 下雨 (Rain)
    ![rain-effect](Resource/Images/7533d94e782e150e4418be1ff0cebdb4_MD5.gif)
- 随机圆圈 (Random Circle)
- 下雪 (Snow)
    ![snow-effect](Resource/Images/49be7a17e01b64bae07e734b32aa41a4_MD5.gif)
- 星空 (Star Sky)

1. 2 种适用于 Obsidian 明亮或浅色配色的动态效果：

- 随机圆圈 (Random Circle)
- 波浪 (Wave)
- ![wave-effect](Resource/Images/c1f729a05561bae61810620cbd8df841_MD5.gif)

## 安装

1. 进入 Obsidian 社区插件
2. 搜索 dynamic background
3. 安装
4. 开启插件

## 使用

### 启用或禁止动态效果

您可以在任何时候启用或禁止动态效果:

- 打开插件设置窗口
- 打开或关闭  `Enable Dynamic Effect`  开关

### 选择动态效果

- 打开插件设置窗口
- 从  `Dynamic Effect`  下拉框选择一个效果

> [!注意]

> 有两类动态效果

> 一类适用于 Obsidian 黑暗或深色配色

> 一类适用于 Obsidian 明亮或浅色配色，可根据 Obsidian 的配色选择相应的动态效果。

### 设置墙纸

您可以指定一个本地图片文件作为墙纸，步骤如下。

- 打开插件设置窗口
- 在  `Static Wallpaper Image`  文本框中输入图片文件路径

图片文件可以使用绝对路径，也可以使用相对路径。

- Windows 系统绝对路径示例: `e:\\images\\d.jpg`, 注意要使用两个斜杠
- Linux 系统绝对路径示例: `/home/user/images/moon.jpg`
- 相对路径示例: `attachments/moon.jpg`

如果您只想显示墙纸，而不想显示动态效果，关闭掉动态效果即可。具体操作参见 [[#启用或禁止动态效果]]。

### 设置墙纸模糊度

如果你希望墙纸模糊一点，或者说你想给墙纸加上毛玻璃效果，请按下述步骤操作：

- 打开插件设置窗口
- 在  `Blur`  框中输入模糊值，0 代表不模糊
