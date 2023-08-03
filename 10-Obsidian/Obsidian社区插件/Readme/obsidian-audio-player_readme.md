---
uid: 20230803203455
title: Obsidian 插件：【Readme】Audio Player
tags: ['obsidian插件', 'readme']
description: player音频播放器具有后台播放、书签和波形可视化功能，而不是默认的HTML5音频播放器。
author: noonesimg
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Audio Player

> [!Note] 插件名片
> - 插件名称：Audio Player
> - 插件作者：noonesimg
> - 插件说明：player音频播放器具有后台播放、书签和波形可视化功能，而不是默认的HTML5音频播放器。
> - 插件分类：['obsidian插件', 'readme']
> - 项目地址：[点我访问](https://github.com/noonesimg/obsidian-audio-player)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsidian-audio-player)

## 概述

player音频播放器具有后台播放、书签和波形可视化功能，而不是默认的HTML5音频播放器。

![Audio Player](https://cdn.pkmer.cn/covers/obsidian-audio-player_new.gif!pkmer)

> [!tip] 原文出处
> 
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/noonesimg/obsidian-audio-player/main/README.md)
> 

---

## Readme(翻译）

下面是 [[obsidian-audio-player]] 插件的自述翻译


# Obsidian音频播放器

- 整个Obsidian vault只有一个音频实例
- 初始化简单
- 波形可视化
- 即使关闭了标签页也会继续播放
- 可以为音频文件添加书签

演示

## 如何使用
~~~
```audio-player
[[my awesome audio file.mp3]]
```
~~~
只需将此代码添加到您的任何md文件中

### 两个简单的命令
通过命令菜单（Ctrl-P）可访问

1. **暂停音频** 以暂停当前播放的音频
2. **恢复音频** 以恢复播放

### 通过界面添加书签
![add_bookmark](https://user-images.githubusercontent.com/117757392/201384274-14831e0b-458e-4a01-9869-34f34ad628cc.gif)

1. 双击波形可视化器上的任何一个条形图
2. 输入您的文本
3. 按下回车键或点击“添加”按钮
4. 点击任何书签时间码以设置播放头位置

### 通过文本添加书签
~~~
```audio-player
[[我的精彩音频文件.mp3]]
00:00:44 --- 章节
00:01:50 --- 第二章
00:02:40 --- 第三章，其中没有发生任何事情
```
~~~
![image](https://user-images.githubusercontent.com/117757392/201384550-33aa7f25-cadc-4ce5-a846-24d87bd7a05d.png)

如何安装

### 来自Obsidian

1. 打开设置 > 第三方插件
2. 确保安全模式已关闭
3. 点击浏览社区插件
4. 搜索音频播放器
5. 点击安装
6. 关闭社区插件浏览器并激活插件

### 使用 Git

1. 关闭 Obsidian
2. 在终端中进入你的 vault 的 .obsidian/plugins 文件夹
3. git clone https://github.com/noonesimg/obsidian-audio-player.git
4. 打开 Obsidian
5. 进入设置 -> 社区插件
6. 向下滚动，找到 "Audio Player" 插件并启用它

定价
该插件是免费的，但如果你想表示感谢，可以随意给我买杯咖啡

[<img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="BuyMeACoffee" width="100">](https://www.buymeacoffee.com/noonesimg)

## 注意事项
如果有任何错误或不稳定的情况，请毫不犹豫地提出问题。



