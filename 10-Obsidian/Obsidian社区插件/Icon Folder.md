---
uid: 20230329145808
title: Obsidian 插件：Icon Folder（给文件夹增加图标）
description: 
tags: 
author: OS
type: other
draft: true
modified: 20230329151247
public: yes
---

# Obsidian 插件：Icon Folder（给文件夹增加图标）

## 概述

会为每个文件夹增加新的右键菜单，可以图形化给文件夹设置图标。

>[!插件名片]

>- 插件名称：Icon Folder

>- 插件作者：FlorianWoelki

>- 插件说明：允许你添加任何自定义图标 (类型为.svg) 或从图标包中添加到您的文件夹或文件。

>- 插件项目地址：[点我跳转](https://github.com/FlorianWoelki/obsidian-icon-folder)

## 效果

![Pasted image 20230110191650](https://s1.vika.cn/space/2023/03/15/0364664aaa5c456f84225129d0ec2640)

## 安装

1. 进入 Obsidian 社区插件
2. 搜索 Icon Folder
3. 安装
4. 开启插件

## 配置

安装并启动插件后：

1. Icon Packs > Add predefined icon pack
	 - 点击 Browse icon packs，可以下载插件制作者提供的几个图标包。
2. 添加需要有一个下载插件下载过程，视你的网络速度而定。
3. 下载完成后，你会发现之前名字的图标已经被插件识别

![Pasted image 20230210145955](https://s1.vika.cn/space/2023/03/15/9f19b9098f504387b5ab409ce27d1923)

![Pasted image 20230210150005](https://s1.vika.cn/space/2023/03/15/960eb46f4d604e6b8c829bf29c3ef1e4)

这里以 Remix Icons(Ri) 为例，点击安装。

## 使用

### 设置文件夹图标

1. 在文件列表，对应的文件夹下，鼠标右键，选择“Change icon”
2. 在弹出的窗口中选择自己喜欢的图标吧
![Pasted image 20230210150035](https://s1.vika.cn/space/2023/03/15/9f6d7264225446f8a0de9bbb40d80e6c)

### 取消文件夹图标

1. 在文件列表，已经添加图标的文件夹，鼠标右键，选择“Remove icon”
2. 对应文件夹的图标就会被取消

### 更改图标颜色

为了适配不同主题的颜色，插件也支持你自己定义 图标颜色。

Icon Customization > Icon color，点击当前颜色的圆形调色盘，可以自己选择喜欢的颜色。

### 能否添加自己的图标包

Icon Packs folder path 展示用于保存下载的图标包文件路径。

这些图标包都是 SVG 格式的。如果你都不喜欢，你可以尝试在自己建立自己的插件包。

> [!Note]
> 插件会使用你当前仓库，插件目录下该插件的文件夹来保存对应文件，这样对你整个仓库的文件结构破坏最小。

你可以在网络上寻找对应的 SVG 图标包，来构建自己的图标文件夹
