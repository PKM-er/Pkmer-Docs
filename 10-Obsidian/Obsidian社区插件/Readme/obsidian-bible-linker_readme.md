---
uid: 2023080322150835
title: Obsidian 插件：【Readme】Bible Linker
tags: ['obsidian插件', 'readme']
description: 轻松链接多个圣经经文
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Bible Linker

> [!Note] 插件名片
> - 插件名称：Bible Linker
> - 插件作者：Jakub Kuchejda
> - 插件说明：轻松链接多个圣经经文
> - 插件分类：['obsidian插件', 'readme']
> - 项目地址：[点我访问](https://github.com/kuchejak/obsidian-bible-linker-plugin)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsidian-bible-linker)

## 概述

轻松链接多个圣经经文

![Bible Linker](https://cdn.pkmer.cn/covers/obsidian-bible-linker.png!pkmer)

> [!tip] 原文出处
> 
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/kuchejak/obsidian-bible-linker-plugin/main/README.md)
> 

---

## Readme(翻译）

下面是 [[obsidian-bible-linker]] 插件的自述翻译


# Obsidian圣经链接插件
用于在Obsidian.md笔记应用中更轻松地链接多个圣经经文的插件。

## 使用方法
1. 使用命令“复制圣经经文”或“创建连接到圣经经文的奥布西迪安链接”（下面有描述）。
2. 插入圣经链接，例如“创世记1:1-3或创世记1.1”。注意：暂时不支持跨多章的链接（还没有支持吗？）。
3. 尽情享受。

复制并链接圣经经文命令
从您的圣经文件中复制给定的经文，并插入到它们的奥斯迪安链接中。这是插件的主要命令，比其他命令具有更多功能。

>[[创世记-01#v1|创世记 1,1-3]] 起初，神创造了天地。地是空虚混沌，渊面黑暗；神的灵运行在水面上。神说：“要有光”，就有了光。[[创世记-01#v1|]][[创世记-01#v2|]][[创世记-01#v3|]]

### 这种方法的优点
- 可以将更多的诗句显示为一个文本块，这比在每个链接块后面显示多个链接块更具视觉效果。
- 如果需要，您可以编辑文本（例如添加一些行内注释，加粗重要部分...），而不会影响原始内容。

### 要求
要求您在您的保险库中有一本以markdown格式编写的圣经，其结构类似于[Obsidian圣经研究套件](https://forum.obsidian.md/t/bible-study-in-obsidian-kit-including-the-bible-in-markdown/12503) - 即：
- 1个文件= 1个章节
- 给定章节的所有经文都存在
- 经文以标题（任何级别）标记，经文文本在该标题之后的下一行中

#### 示例文件
```md

# 章节名称（或其他文本） 

...

第一节的歌词文本

第二节歌词文本

### 第三节
第三节的文本

#### 输入格式
- 文件名是根据您输入的链接推断出来的：
  - 如果您的文件名为"Gen 1"，您需要输入"Gen 1,1-4"
  - 如果您的文件名为"Genesis 1"，您需要输入"Genesis 1,1-4"
  - *例外情况*：如果您的文件名为"Gen-01"，您可以输入"Gen-01,1-4"或"Gen 1,1-4"

多语言翻译支持
只要满足以下要求，复制命令就可以与多个圣经翻译一起使用：
1. 每个翻译必须保存在自己的文件夹中 - 例如Bible/NIV和Bible/KJV。
2. 所有翻译必须使用相同的文件命名约定 - 例如，如果文件在NIV中命名为“Gen 1”，则不能在KJV中命名为“Gn 1”。
3. 文件的结构必须大致相同，以便它们都可以与相同的“Verse offset”和“Verse heading level”设置一起使用。

多语言翻译支持必须在设置中启用，默认情况下是关闭的。

### 错误的诗句被链接了吗？还是链接不起作用，你有正确格式的文件吗？
- 进入插件设置，尝试相应地更改“诗句偏移量”或“诗句标题级别”。

链接圣经经文命令
更简单的命令，只根据输入创建闪电笔链接。您可以选择标准链接（例如`[[Gen-01#v1]]`），嵌入链接（例如`![[Gen-01#v1]]`）或在预览模式下不可见的链接（例如`[[Gen-01#v1|]]`）。这个命令功能较弱，但对于您的圣经文件的要求也较宽松，因此即使复制命令不起作用，您也可以使用它。  

![image](https://user-images.githubusercontent.com/94016085/160867853-5bff3b17-d8a7-4ec9-8672-eb1fa3acc88c.png)

### 要求
基本上没有要求，它只是解析您的输入并根据其创建链接。如果它不能满足您的需求，请查看设置。

支持
如果您想支持这个插件，请在GitHub上给它点赞。谢谢。

安装
通过Obsidian社区插件可用（设置/社区插件）

### 手动安装
将 `main.js` 和 `manifest.json` 复制到你的 vault 中的 `VaultFolder/.obsidian/plugins/your-plugin-id/` 目录下。



