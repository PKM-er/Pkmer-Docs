---
uid: 20240312193744
title: Obsidian 插件：【Readme】MantouAI
tags: ['obsidian插件', 'readme']
description: 作为翻译、写作润色、一般问答、总结等个人助理工作，利用大型语言模型的力量。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】MantouAI

> [!Note] 插件名片
> - 插件名称：MantouAI
> - 插件作者：Morino Pan
> - 插件说明：作为翻译、写作润色、一般问答、总结等个人助理工作，利用大型语言模型的力量。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/ravenSanstete/Obsidian-MantouAI)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?mantou-ai)

## 概述

作为翻译、写作润色、一般问答、总结等个人助理工作，利用大型语言模型的力量。

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/ravenSanstete/Obsidian-MantouAI/main/README.md)

---

## Readme(翻译）

下面是 [[mantou-ai]] 插件的自述翻译

# MantouAI—— 让 Obsidian 变身智能助手

<p align="center">
  <img src="imgs/logo.png" width=300 height=300 alt="MantouGPT Logo"/>
</p>
<p align="center">
  <em>*MantouAI*是为每个人设计的开放个人助手（生活在Obsidian之中），它能协助办公学习、聊天、（未来：上网、写报告、规划旅行...） </em>
</p>

## 1. 什么是 MantouAI🐶？

* MantouAI = **馒头 AI**（PS：我们家有一只不会动的柴犬馒头，老婆想让它动起来）
* 一款集成 AI 大模型的 Obsidian 插件
* Obsidian + MantouAI = X 书助手、X 钉魔法棒、NotionAI
* 开源 + 定制（有需要什么功能，请给我 issues！）
* ”万事不决、问问馒头“ (Command+Shift+P/Command+P)

---

## 2. Function Introduction 🥰 (If you like it, please make sure to Star⭐ it, thank you)

### 2.1 万能提问

* 任意选中文字，向馒头提问吧
* ”万事不决、问问馒头“

<p align="center">
  <img src="imgs/Pasted image 20240223202357.png" width=800/>
</p>

### 2.2 Common Built-in Academic Functions

* **For any selected text** (preferably within 1000 words): Chinese to English translation, English to Chinese translation, Chinese text polishing, summarizing key points, paragraph reading comprehension ...

<p align="center">
  <img src="imgs/Pasted image 20240223201921.png" width=800/>
</p>


<p align="center">
  <img src="imgs/Pasted image 20240223202150.png" width=800/>
</p>

### 2.3 角色扮演

* 在 properties 中加入键值对”role“，”<角色描述>“（角色描述务必用”“开合，定位用）
* role 下方加入随意的 key-value 一对

<p align="center">
  <img src="imgs/Pasted image 20240223203053.png" width=800/>
</p>

### 2.4 Full Text Viewpoint Extraction

<p align="center">
  <img src="imgs/image.png" width=800/>
</p>

<p align="center">
  <img src="imgs/image2.png" width=800/>
</p>

---

## 3. Let's get started👐

### 3.1 开箱即用

1. Releases 下载 MantouAI-v0.1.zip
2. 放到 Obsidian Vault 的 plugins 文件夹，解压缩
3. 重新打开 Obsidian，加载 MantouAI
<p align="center">
  <img src="imgs/Pasted image 20240223201340.png" width=800/>
</p>

1. 根据 [教程](https://help.aliyun.com/zh/dashscope/developer-reference/api-details)，免费申请阿里 Dashscope 账号和 api key
2. 配置你的 key
<p align="center">
  <img src="imgs/Pasted image 20240223201706.png" width=800/>
</p>

### 3.2 For Developers

1. git clone this repository
2. npm install esbuild
3. Run npm run dev in the directory (continuous compilation)
4. Start customizing main.ts

## 4. Development Roadmap 🗺︎

- [ ] Localize large models (data privacy):
	- [ ] Gemma-2b-it (being modified, currently being integrated)
- [ ] Personalized assistant
	- [ ] Dialogue with current document
	- [ ] Dialogue with Obsidian knowledge base
	- [ ] Connect with other Obsidian plugins, autonomous Agent
	- [ ] ...

## 5. 注意事项⚠︎

* The current version accesses the Tongyi large model and requires internet connection (do not use for overly sensitive data)
* Please adhere to the principle of responsible use of AI, any misuse is unrelated to this code repository
* ...

## 6. 为什么开发 MantouAI？All-in-Obsidian! ❓

* A: 使用网页版大模型各种复制文档，好麻烦...
* B: 写一个 webui 界面，大家还得命令行开启，不如 obsidian 插件自然...
* 你觉得呢？

## 7. 搭配以下插件食用更加

* Better Command Palette
* Marp Slides （馒头精读内容，直接生成 PPT 啦！）
* ... （等你发现
