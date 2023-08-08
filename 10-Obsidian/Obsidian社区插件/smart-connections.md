---
uid: 20230613092443
title: Obsidian 插件：smart-connections 用AI查询本地库
tags: [AI, 人工智能]
description: 用AI查询本地库和发现链接，查询笔记，分析笔记相关性
author: windilycloud
type: basic
draft: false
editable: false
modified: 20230613100602
---

# Obsidian 插件：smart-connections 用 AI 查询本地库

> [!Note] 插件名片
> - 插件名称：smart-connections
> - 插件版本：1.6.9
> - 插件作者：Brian Petro
> - 插件描述：基于 OpenAI 提供的 api 查询本地库，推荐笔记链接，分析笔记相关性
> - 插件项目地址：[brianpetro/obsidian-smart-connections](https://github.com/brianpetro/obsidian-smart-connections)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?smart-connections)

## 概述

smart connections 的主要功能有：

- 交互式对话的访问你的笔记：以聊天的形式访问一篇，甚至整个库的内容。支持上下文，GPT4，多语言。
- 笔记链接：如果回答中有指向其它笔记的链接，该插件提供一键添加笔记链接的功能。
- 笔记检索：基于 AI 的笔记检索

局限性：

> [!warning] 数据泄露
> 如果你库中的笔记如果有保密性质或者私密性的内容，请谨慎使用。并不是插件不安全，而是你的笔记数据会发送给OpenAI处理，这有泄露风险。

1. 回复的质量取决于笔记的内容和组织。确保您的笔记结构合理且全面，以获得最佳体验。
2. 由于人工智能理解的局限性，智能聊天可能偶尔会提供不正确或不相关的回复。在这种情况下，请改写您的问题或提供更多上下文以获得更好的结果。

## 功能展示

### 笔记对话

![image.png](https://cdn.pkmer.cn/images/202306130928020.png!pkmer)

如图所示，左侧是一篇发表在美国杂志上的英文文章，右侧是 smart connection 的聊天界面，我用双链指向了本地笔记，叫 chatGPT 总结一下，很快得到了较为准确的总结。

使用方式：

1. `ctrl + p` 调出命令面板，输入`smart chat conversation`，这样左侧就有聊天界面了
2. 输入聊天内容，`shift + enter`发送，其中可以使用双链语法指向某一篇笔记

### 笔记检索

![image.png](https://cdn.pkmer.cn/images/202306131011856.png!pkmer)

如图，左侧是笔记，右侧是聊天界面。我试图让它告诉我基于笔记内容的答案，但是严重受限于token。尝试使用GPT4-32k，能有32,768 个token，可能体验上会更好吧。

### 笔记关系

![image.png](https://cdn.pkmer.cn/images/202306130952307.png!pkmer)

右侧栏自动根据左侧笔记推荐其它能链接的笔记，其相关性以百分数显示。另外还有个小功能是基于笔记关系随机跳转笔记，这个也在命令面板里。

使用方式：

1. `ctrl + p` 调出命令面板，输入`view smart chat`，这样左侧就有聊天界面了
2. 点击右侧栏可以跳转到对应笔记


### 块嵌入

![image.png](https://cdn.pkmer.cn/images/202306131114445.png!pkmer)

如图，可以看见，我用一个代码块写了一个问题`渐进式框架是什么？`会自动渲染成带有内容的相关笔记的列表图。这个图是动态的，即你笔记库中任意相关的改变，都会动态的在该代码块的渲染中展示。

使用方式：

1. 在笔记任意位置写个`smart-connections`代码块
2. 块中写上你的问题

## 总结

该插件未来还会引入访问外部内容的功能，对于用自然语言查询知识库和探寻知识库的联系大有裨益。但是需要注意，你库中的笔记如果有保密性质或者私密性的内容，请谨慎使用。