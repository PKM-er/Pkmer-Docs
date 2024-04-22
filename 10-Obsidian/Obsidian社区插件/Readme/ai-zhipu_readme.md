---
uid: 2024042221311245
title: Obsidian 插件：【Readme】AI Zhipu
tags: ['obsidian插件', 'readme']
description: 使用ZhipuAI API 生成文本。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】AI Zhipu

> [!Note] 插件名片
> - 插件名称：AI Zhipu
> - 插件作者：Tarslab
> - 插件说明：使用 ZhipuAI API 生成文本。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/TarsLab/obsidian-ai-zhipu)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?ai-zhipu)

## 概述

使用 ZhipuAI API 生成文本。

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/TarsLab/obsidian-ai-zhipu/main/README.md)

---

## Readme(翻译）

下面是 [[ai-zhipu]] 插件的自述翻译

【机翻】

<h4 align="center">
	<p>
		<b>中文</b> |

	<p>
</h4>

# 简介

AI-zhipu 是一个 Obsidian 插件，帮助您利用 Zhipu API 生成内容，从文本创建图像，基于知识数据库回答问题，以及更多人工智能功能。您可以自定义提示模板，构建基于 Zhipu AI 的独家知识管理系统。

## 如何使用

- 当插件初始化时，它会自动在存储目录中创建一个名为 `Aizhipu` 的文件夹，并创建提示模板文件，包括中文和英文模板。
- 在 [ZhiPu网站](https://open.bigmodel.cn) 上注册一个账户，获取 API 密钥，并输入到插件设置中。
- 进入编辑模式
- 选择提示，并激活命令 " 从选定的文本/行/块生成 "，然后选择提示模板。

![image](https://cdn.pkmer.cn/covers/ai-zhipu_2_0.gif!pkmer)

- 选择块的文本以便于复制到其他地方

![image](https://cdn.pkmer.cn/covers/ai-zhipu_2_1.gif!pkmer)

- 查看聊天详情中最后一次聊天的详细信息，包括提示和令牌的使用情况。

![image](https://cdn.pkmer.cn/covers/ai-zhipu_2_2.png!pkmer)

## 要求

- 从 [ZhiPu AI](https://open.bigmodel.cn) 获取 API 密钥
- 在使用“从所选文本/行/块生成”命令时需要网络连接
- 使用智普 API 将产生费用。有关详细费用信息，请参考 [官方智普网站](https://open.bigmodel.cn)。重要提示：从文本生成图像会消耗大量令牌。

## 从 Github 安装

1. 从发布页面下载 `manifest.json` 和 `main.js` 到 `<vault>/.obsidian/plugins/ai-zhipu`
2. 刷新已安装的插件
3. 启用 AI Zhipu



