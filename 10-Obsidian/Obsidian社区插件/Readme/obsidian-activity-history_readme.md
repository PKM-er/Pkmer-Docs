---
uid: 2023080322133382
title: Obsidian 插件：【Readme】Activity History
tags: ['文件历史', '统计', 'obsidian插件', 'readme']
description: 跟踪指定项目的活动，Github 之类的活动板
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Activity History

> [!Note] 插件名片
> - 插件名称：Activity History
> - 插件作者：darakah
> - 插件说明：跟踪指定项目的活动，Github 之类的活动板
> - 插件分类：['文件历史', '统计', 'obsidian插件', 'readme']
> - 项目地址：[点我访问](https://github.com/Darakah/obsidian-activity-history)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsidian-activity-history)

## 概述

跟踪指定项目的活动，Github 之类的活动板

![Activity History](https://cdn.pkmer.cn/covers/obsidian-activity-history.PNG!pkmer)

> [!tip] 原文出处
> 
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/Darakah/obsidian-activity-history/main/README.md)
> 

---

## Readme(翻译）

下面是 [[obsidian-activity-history]] 插件的自述翻译


# Obsidian活动历史
![GitHub发布](https://img.shields.io/github/v/release/Darakah/obsidian-activity-history)
![GitHub所有发布](https://img.shields.io/github/downloads/Darakah/obsidian-activity-history/total)

类似Github的活动块，用于跟踪整个vault或指定项目的活动。

#### 示例1：
![example_1](https://raw.githubusercontent.com/Darakah/obsidian-activity-history/main/images/example_1.png)

#### 示例2：
![example_2](https://raw.githubusercontent.com/Darakah/obsidian-activity-history/main/images/example_2.png)

#### 示例3：
![example_3](https://raw.githubusercontent.com/Darakah/obsidian-activity-history/main/images/example_3.png)

用法：

!!!!重要!!!!
该插件只能显示从激活日期开始的活动，因为它跟踪指定跟踪项目的大小变化。这意味着在该日期之前不会显示任何信息。

在要添加渲染块的笔记的编辑模式中，编写下面显示的渲染块示例。
![example_4](https://raw.githubusercontent.com/Darakah/obsidian-activity-history/main/images/example_4.png) 

它必须包含一个与项目路径对应的单行，例如：
- `/` 表示整个存储库
- `Project Example Test` 表示位于 `/Project Example Test` 的项目
- `Project Root/Project Second Example/Test Project` 表示位于 `/Project Root/Project Second Example/Test Project` 的项目

因此，要显示整个存储库的看板：
![example_5](https://raw.githubusercontent.com/Darakah/obsidian-activity-history/main/images/example_5.png) 


默认情况下，该插件仅跟踪整个存储库，即 `/`。要添加更多项目，需要在插件的设置菜单中输入项目名称（与上述相同）。如果输入的项目名称无效，则不会添加。它遵循与渲染块中输入的语法相同的语法。

`**更新计划：**` 插件每5分钟更新一次不同跟踪项目的大小。

## 设置：
![设置](https://raw.githubusercontent.com/Darakah/obsidian-activity-history/main/images/settings.png)

# 自定义
如上所示的示例中所示，活动板可以高度自定义。所有参数都可以在设置菜单中进行修改，**除了背景颜色**！背景颜色必须在`style.css`文件中进行更改（在插件文件夹中找到），将`white`更改为所需的颜色。

```css
.selectYear {
    border-color: none;
}

.HistoryBoard {
    background-color: white;
    padding: 10px;
    border-radius: 14px;
    width: auto;
    height: auto;
}

.ObsidianHistoryBlock {
    background-color: white;
    border-radius: 14px;
    width: auto;
    height: auto;
}

.selectYear {
    float: right;
    margin-bottom: 5px;
    border-color: white;
    border-radius: 14px;
}
```

## 发布说明

### v0.1.4
- 在设置选项卡中添加了“monthly”选项

## 支持

[![Github赞助](https://raw.githubusercontent.com/Darakah/Darakah/e0fe245eaef23cb4a5f19fe9a09a9df0c0cdc8e1/icons/github_sponsor_btn.svg)](https://github.com/sponsors/Darakah) [<img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="BuyMeACoffee" width="100">](https://www.buymeacoffee.com/darakah)



