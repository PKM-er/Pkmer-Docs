---
uid: 2023120522262425
title: Obsidian 插件：【Readme】Ollama
tags: ['obsidian插件', 'readme']
description: 在您的笔记中使用Ollama。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】Ollama

> [!Note] 插件名片
> - 插件名称：Ollama
> - 插件作者：hinterdupfinger
> - 插件说明：在您的笔记中使用Ollama。
> - 插件分类：['obsidian插件', 'readme']
> - 项目地址：[点我访问](https://github.com/hinterdupfinger/obsidian-ollama)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?ollama)

## 概述

在您的笔记中使用Ollama。



> [!tip] 原文出处
> 
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/hinterdupfinger/obsidian-ollama/main/README.md)
> 

---

## Readme(翻译）

下面是 [[ollama]] 插件的自述翻译


# 🦙 Obsidian Ollama

这是一个为 [Obsidian](https://obsidian.md) 设计的插件，允许您在笔记中使用 [Ollama](https://ollama.ai)。插件提供了不同的预配置提示：

    - 摘要选择
    - 解释选择
    - 扩展选择
    - 重写选择（正式）
    - 重写选择（随意）
    - 重写选择（主动语态）
    - 重写选择（项目符号）
    - 添加标题到选择

但您也可以配置自己的提示，指定其模型和温度。插件始终将提示和选定的文本或完整的笔记传递给 Ollama，并将结果插入到光标位置的笔记中。

这需要本地安装 [Ollama](https://ollama.ai)，目前可以作为 [MacOS 应用](https://github.com/jmorganca/ollama#download) 安装。默认情况下，插件将连接到 `http://localhost:11434` - MacOS 应用的端口。



