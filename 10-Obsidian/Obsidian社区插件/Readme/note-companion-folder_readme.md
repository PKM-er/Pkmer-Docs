---
uid: 20240312193744
title: Obsidian 插件：【Readme】Note Companion Folder
tags: ['obsidian插件', 'readme']
description: 管理每个笔记的附件单独文件夹。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】Note Companion Folder

> [!Note] 插件名片
> - 插件名称：Note Companion Folder
> - 插件作者：Chris Verbree
> - 插件说明：管理每个笔记的附件单独文件夹。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/vkodocha/NoteCompanionFolder)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?note-companion-folder)

## 概述

管理每个笔记的附件单独文件夹。

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/vkodocha/NoteCompanionFolder/main/README.md)

---

## Readme(翻译）

下面是 [[note-companion-folder]] 插件的自述翻译

【机翻】

# 注意伴侣文件夹插件

管理每个笔记的单独附件文件夹。文件夹名称与笔记名称相同，减去文件扩展名。插件的默认行为是将伴侣文件夹设置为笔记的同级文件夹，但您可以进行配置。

您可以使用伴侣文件夹将附件在每个笔记级别上分开，而不是在存储库中为所有笔记使用单个附件文件夹。

## 两种模式

要么将伴随文件夹直接放在笔记旁边，就像这样：

```
vault-folder/
|- note-file.md
|- note-file/
||- attachment-0.png
```

或者您可以选择将伴随文件夹（用于所有笔记）放在存储库内的子路径中。在插件设置中将“伴随文件夹的基本路径”选项设置为“_file”，然后文件系统中的布局将如下所示：

```
vault-folder/
|-_files/
||- note-file/
|||- attachment-0.png
| note-file.md
```

此插件提供了多种方法来为给定的笔记显示伴随文件夹：

- 一个带有丝带图标
- 一个命令
- 一个上下文操作
- 一个文件操作

如果给定笔记的伴随文件夹不存在，则在调用插件的命令或操作之一时将创建它。

![上下文操作](https://cdn.pkmer.cn/covers/note-companion-folder_2_0.png!pkmer)

![文件操作](https://cdn.pkmer.cn/covers/note-companion-folder_2_1.png!pkmer)

![丝带图标](https://cdn.pkmer.cn/covers/note-companion-folder_2_2.png!pkmer)

![命令](https://cdn.pkmer.cn/covers/note-companion-folder_2_3.png!pkmer)

## 安装

您可以在社区插件列表中找到“笔记伴侣文件夹”！
