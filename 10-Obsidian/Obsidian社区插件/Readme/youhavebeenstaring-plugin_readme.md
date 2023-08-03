---
uid: 20230803205041
title: Obsidian 插件：【Readme】YouHaveBeenStaring
tags: ['界面相关', '统计', '状态栏', '时间管理', 'obsidian插件', 'readme']
description: 告诉你用了多久 Obsidian 了
author: Felix Almer
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：YouHaveBeenStaring

> [!Note] 插件名片
> - 插件名称：YouHaveBeenStaring
> - 插件作者：Felix Almer
> - 插件说明：告诉你用了多久 Obsidian 了
> - 插件分类：['界面相关', '统计', '状态栏', '时间管理', 'obsidian插件', 'readme']
> - 项目地址：[点我访问](https://github.com/fxal/obsidian-youhavebeenstaring-plugin)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?youhavebeenstaring-plugin)

## 概述

告诉你用了多久 Obsidian 了

![YouHaveBeenStaring](https://cdn.pkmer.cn/covers/youhavebeenstaring-plugin.png!pkmer)

> [!tip] 原文出处
> 
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/fxal/obsidian-youhavebeenstaring-plugin/master/README.md)
> 

---

## Readme(翻译）

下面是 [[youhavebeenstaring-plugin]] 插件的自述翻译


# Obsidian插件 *YouHaveBeenStaring*

这是一个为Obsidian（https://obsidian.md）开发的插件。

它以自然语言的方式在状态栏中告诉您您的vault已经打开了多长时间（自插件加载以来的时间）。还可以选择显示您的vault总共打开了多长时间。

这是一个甜蜜、简短而微妙的提醒，提醒您可能需要休息一下，不要一直盯着屏幕看 🧐。

## 特点
- [x] 在状态栏中显示自启动Obsidian以来您盯着保险库的时间
- [x] 在状态栏中显示总共盯着时间（每当插件处于活动状态时以1秒为增量测量）
- [x] 允许自定义显示文本`您已经盯着保险库$amount`（包括总的和当前的盯着时间）
- [x] 通过功能区按钮启动和停止计数器
- [x] 每10分钟保存盯着时间，并在每次设置更改、卸载插件以及通过功能区图标启动/停止计数器时进行保存，以防止过多的磁盘写入
- [x] 允许在状态文本中使用实际时间（天、小时、分钟等），而不仅仅是持续时间的人性化输出

## 待办事项
- [ ] 实现“休息提醒”，可配置
- [ ] 添加类似于 GitHub 活动的开始时间可视化
- [ ] 通过允许模板化来增强状态栏文本

## 已弃用
~~如果启动时间早于今天午夜，允许计算从今天午夜开始的当前持续时间~~

## 如何安装
*您可以在官方第三方Obsidian插件中找到此插件*

### 下载此仓库的方法：

只需将此插件下载并安装到您的 *.obsidian/plugins* 文件夹中。

然后重新启动 Obsidian，导航到 "设置 -> 第三方插件" 并启用 "YouHaveBeenStaring"。

您将在右下角状态栏中看到您盯着保险库的时间。

![](screenshot.png)



