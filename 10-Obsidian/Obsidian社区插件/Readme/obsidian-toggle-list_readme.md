---
uid: 20230803204932
title: Obsidian 插件：【Readme】ToggleList
tags: ['obsidian插件', 'readme']
description: 切换清单状态（段落/列表/清单/自定义样式...）
author: Lite C
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：ToggleList

> [!Note] 插件名片
> - 插件名称：ToggleList
> - 插件作者：Lite C
> - 插件说明：切换清单状态（段落/列表/清单/自定义样式...）
> - 插件分类：['obsidian插件', 'readme']
> - 项目地址：[点我访问](https://github.com/thingnotok/obsidian-toggle-list)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsidian-toggle-list)

## 概述

切换清单状态（段落/列表/清单/自定义样式...）

![ToggleList](https://cdn.pkmer.cn/covers/obsidian-toggle-list.png!pkmer)

> [!tip] 原文出处
> 
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/thingnotok/obsidian-toggle-list/master/README.md)
> 

---

## Readme(翻译）

下面是 [[obsidian-toggle-list]] 插件的自述翻译


# Obsidian的ToggleList插件

ToggleList是一个为[Obsidian](https://obsidian.md)设计的插件，它提供了一种替代方式来切换复选框状态，并允许轻松切换常用属性，如任务状态、任务标签、突出显示的列表等。这个简单的插件覆盖了Obsidian中默认的切换行为，使其更加可定制和用户友好。

## 插件特点

ToggleList 提供以下功能：

1. 在状态组内使用热键切换列表状态：
   - 例如，一个状态组可能包括以下状态：[`""`, `- `, `- [ ] `, ` - [x] `]

2. 不同目的的多个状态组
   - 任务组：[`- [ ] `, ` - [/] `, ` - [x] `]
   - 高亮组：[`- [i] `, ` - [!] `, ` - [?] `]

3. 前缀和后缀支持。状态 `PRE||SUF` 可以匹配 `PRExxx line contents xxxSUF`。

4. 建议窗口：打开命令建议，整个状态组将显示在建议窗口中，以便快速访问。

   https://user-images.githubusercontent.com/29173832/221370021-9646a62b-ad31-4212-a850-71919d8a9db7.mov

5. 状态可视化

   ![image](https://user-images.githubusercontent.com/29173832/221369660-5600d76d-b8ac-4354-b4cc-11457c1527db.png)

6. Togglelist 作为一个方便的工具，可以在其他插件中设置内容，请查看[与其他插件一起使用](https://github.com/thingnotok/obsidian-toggle-list/doc/other_plugin.md)以获取更多示例。

以下是复选框需要更多状态以及如何查询这些自定义状态的原因：

| 项目用例 | 查询自定义项 |
| :------: | :----------: |
| <img src="https://github.com/thingnotok/obsidian-toggle-list/blob/master/resources/example_project.png" width="300"> | <img src="https://github.com/thingnotok/obsidian-toggle-list/blob/master/resources/query_example.png" width="400"> |

安装

### 来自存储库

1. 下载文件夹并放入 `Vault/.obsidian/plugin` 目录中。
2. 从已安装的插件中启用它。

### 来自社区插件

1. 在社区插件/浏览中搜索ToggleList
1. 从已安装的插件中安装并启用它

### 来自[BRAT](https://github.com/TfTHacker/obsidian42-brat)

1. 从社区插件中安装[Obsidian 42 - BRAT]。
2. 在Obsidian 42 - BRAT/添加Beta插件中添加此存储库。
   - 粘贴此URL：`https://github.com/thingnotok/obsidian-toggle-list`
3. 从已安装的插件中启用此插件。

## 更新日志
[1.2.0]
---
- 将建议窗口操作与常规操作合并。
	- 弹出命令的自定义热键将自动分配给下一个操作。
	- 没有iPopOver的命令不会受到影响。
	- 如果升级破坏了您的设置，我真的很抱歉，请留下问题，我会帮助您。

[1.1.3]
---
- 解决性能问题＃14
- 在连续触发热键时更新建议窗口
- 更新用户界面
- 重构主要、设置、tlActions

[1.0.6/7] - [[2023-02-26]]
---
- 清晰度
	- 在设置选项卡中添加状态图以更好地理解状态组。
	- 空行现在呈现为“{PARAGRAPH}”。
- 建议模式
	- 命令现在具有建议模式。当命令/热键被触发时，将弹出建议编辑器。
- 代码库重组
	- 项目被重新组织以提高清晰度。
- 非常感谢[engage-results](https://github.com/engage-results)和[replete](https://github.com/replete)提供的宝贵建议。

[1.0.5] - [[2022-11-08]]
---
- 切换
    - 添加对使用空格缩进的支持。
- 命令
    - 添加上下文切换支持相同命令
    - 允许用户修改命令名称
- 设置
    - 在重置命令之前添加配置备份

[1.0.3/4] - [[2022-10-31]]
---
- 添加后缀以支持任务插件的使用
- 添加一个额外的默认组以显示列表插件的使用
- 添加随机状态组选择到新组按钮
- 添加重置按钮以恢复默认状态组
- 添加热键按钮以链接到热键设置页面
- 更新设置选项卡页面中的描述


[1.0.1] - [[2022-10-25]]
---

### 添加
- 允许多个状态组



