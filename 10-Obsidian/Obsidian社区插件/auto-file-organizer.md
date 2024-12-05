---
uid: 20241205094428
title: Obsidian 插件：Auto File Organizer 根据文件扩展名或 Tag 自动组织/整理文件到文件夹中
tags: [Obsidian, 插件, 链接, 文件管理, 自动化]
description: Obsidian 插件：Auto File Organizer 根据文件类型的扩展名，或者 Tag 自动组织/整理文件
author: OS
type: other
draft: false
editable: false
modified: 20241205100624
---

# Obsidian 插件：Auto File Organizer 根据文件扩展名或 Tag 自动组织/整理文件到文件夹中

## 概述

自动组织文件到指定的文件夹，你可以选择根据文件的扩展名，也可以选择根据 tag。

> [!Note] 插件名片
> - 插件名称：Auto File Organizer
> - 插件作者：mofukuru
> - 插件版本：1.0.1
> - 插件说明：根据文件类型的扩展名，或者 Tag 自动组织/整理文件到文件夹中
> - 插件分类：[' 文件管理 ', 'obsidian 插件 ']
> - 插件项目地址：[点我跳转](https://github.com/mofukuru/auto_file_organizer/)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?auto-file-organizer)

## 效果&特性

- 新添加到 Obsidian 仓库中的文件将根据其扩展名或 Tag 自动移动到指定的文件夹中。
- 你可以自己在插件设置中设定分配规则

> [!Note] 注意
> 该插件当前使用其预发行版本。它的稳定性和兼容性无法完全保证。如果您遇到任何问题欢迎理性反馈给作者。

## 使用

1. 设置文件夹移动规则
	- 打开设置
	- 在扩展名到文件夹规则部分【**Extension-to-Folder Mapping**】，输入扩展名（例如，txt、md 等）并选择目标文件夹。注意：在扩展名中不要包含点（"."）。
	- ![image.png](https://cdn.pkmer.cn/images/20241205100614.png!pkmer)
	- 在标签到文件夹规则部分【 **Tag-to-Folder Mapping**】，输入标签（例如，#test、#project 等）并选择目标文件夹。注意：必须在输入的标签的开头包含一个“#”。
	- ![image.png](https://cdn.pkmer.cn/images/20241205100620.png!pkmer)

2. 编辑现有规则
	- 你可以在设置中的列表编辑或删除现有的映射。 优先级和启用/禁用设置：
3. 优先级设置和禁用
	- 你可以设置【**Priority**】中 基于扩展名或标签的规则优先级，如果你优先其中一种，那么插件遇到文件时会优先考虑对应规则（即扩展名优先还是 tag 优先）
	- ![image.png](https://cdn.pkmer.cn/images/20241205100534.png!pkmer)
	- 你可以分别启用或禁用扩展名和标签的规则。
	- ![image.png](https://cdn.pkmer.cn/images/20241205100559.png!pkmer)
