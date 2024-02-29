---
uid: 20240229104120
title: 用 Quicker 实现 Clever 语义搜索引擎开关的自动化
tags: [Quicker, 插件, obsidain, AI, 模糊搜索]
description: 插件 Clever Search 将支持语义搜索，该功能依赖外置 AI 引擎，本文用 Quicker 实现自动跟随 Obsidian 开启或关闭该引擎。
author: ImmortalSty
type: advanced
draft: false
editable: true
modified: 
---

# 用 Quicker 实现 Clever 语义搜索引擎开关的自动化

> [!info]+ Quicker 动作
>
> - [Clever 全自动](https://getquicker.net/Sharedaction?code=15ba7374-5786-483f-ec5b-08dc3811d02e)；
> - [Obsidian 库](https://getquicker.net/Sharedaction?code=8d0550f1-c378-4cce-190d-08daa2ecb1a4)。

## Clever Search

这是一位大佬为 Obsidian 写的搜索插件，相比起其它同类插件有以下优势：

- 对中文更友好；
- 可以无视 Markdown 语法搜索 [^1]；
- 搜索速度极快；
- 支持全库搜索
- 支持语义搜索 [^2]。

但语义搜索依赖于外部的 AI 引擎，需要手动打开或关闭。本文使用软件 [Quicker](https://pkmer.cn/Pkmer-Docs/03-%E7%9F%A5%E8%AF%86%E7%AE%A1%E7%90%86%E5%B7%A5%E5%85%B7/%E8%87%AA%E5%8A%A8%E5%8C%96%E8%BD%AF%E4%BB%B6/quicker/%E5%BC%80%E5%A7%8Bquicker%E5%90%A7/) 来实现全自动跟随 Obsidian 开启或关闭。

## Clever 全自动

本动作用于自动启动/关闭 Obsidian 的插件 Clever Search 的语义搜索引擎。

开启和关闭时的提示可右键动作关闭。

### 自动开启配置

要搭配动作 [Obsidian 库](https://getquicker.net/Sharedaction?code=8d0550f1-c378-4cce-190d-08daa2ecb1a4) 的前置项目功能使用。

编辑“Obsidian 库”的前置项目，在“项目命令”中填入 `15ba7374-5786-483f-ec5b-08dc3811d02e?open` 即可，“项目名”可以随便起。

打开 Obsidian 要使用“Obsidian 库”这个动作，不要直接打开 Obsidian。

如果有其它用于打开 Obsidian 的动作，能同样支持前置项目，或自己会写动作，那就直接用其它动作以参数 `open` 调用本动作，也能实现自启动的操作。

### 自动关闭配置

![](https://files.getquicker.net/_sitefiles/kb/sharedaction/15ba7374-5786-483f-ec5b-08dc3811d02e/2024/02/28/211005_514368_20240228_205104_910_copy.png)

按上图顺序，依次设置，完成后点击“保存”和“应用设置”即可。

[^1]: 比如：在搜索框输入“美食鉴定”，可以搜到笔记内容“**美食**鉴定”，加粗语法会被忽视。
[^2]: 比如：在搜索框输入“电脑”，可以搜到笔记内容“计算机”、“computer”等同义词汇。