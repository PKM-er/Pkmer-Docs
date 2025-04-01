---
uid: 20250401181043
title: Smart Composer 个人配置分享（2025 年 3 月）
tags:
  - AI
  - 💻教程
  - 实践
description: 关于Smart Composer插件的实践
author: Jade
type: practice
draft: false
editable: false
modified: 20250401185103
---

# Smart Composer 个人配置分享（2025 年 3 月）

## 1 需要

1. Smart Composer 的 1.1.14 版本
2. 一个 chat 模型的 API，以 deepseek 为例（需要付费，收费价格以官网为准）申请地址：<https://platform.deepseek.com/api_keys>
3. （可选）一个 embedding 模型的 API，以硅基流动的免费 API 为例，申请地址：<https://cloud.siliconflow.cn/account/ak>

这里偷偷放一个硅基流动注册邀请码，注册得 2000 万 Tokens（<https://cloud.siliconflow.cn/i/G6hD0uJV>）

## 2 对话模型设置

1. 在 Providers 部分，设置 deepseek 的 API，如果是**官网注册**，直接填写 API Key，第二行 url 留空。

![](https://cdn.pkmer.cn/images/fig1.png!pkmer)

1. 在 Model 部分中的 Chat Models 部分，打开 deepseek 对话模型和思考模型

![](https://cdn.pkmer.cn/images/fig2.png!pkmer)

1. 在 Chat 部分选择对话模型和应用模型，并设置提示词（可不填写）。
	- 对话模型是指在 ob`右侧边栏` 对话框中的默认模型
	- 应用模型是指将基于笔记对话时，将对话结果应用到现有笔记所用到的模型（这里建议用 chat 就好了，reasoner 太贵）
2. 返回 ob 界面，点击左侧 Open Smart Composer，弹出右侧对话框。开始对话。

## 3 嵌入模型设置

若想使用 Vault Chat，必须设置嵌入模型。

1. 在 Providers 部分，设置硅基流动的 API，点击 `添加自定义供应商`
	- ID 是显示在 Providers 中的名字，推荐写 `Siliconflow`，可自拟
	- Provide Type 选择 OpenAI Compatible
	- API Key 填写你的
	- Base URL 填写 `https://api.siliconflow.cn/v1`
	- **打开**最后的开关

![](https://cdn.pkmer.cn/images/fig3.png!pkmer)

1. 查看硅基流动提供的模型。在硅基流动的模型广场搜索，通过筛选器选择 `嵌入`

![](https://cdn.pkmer.cn/images/fig4.png!pkmer)

1. 回到插件的设置，在 Model 部分中的 Embedding Models 部分，点击添加 `添加自定义模型`
	- ID 自拟，建议和 Model Name 一样
	- Provider ID 选择你刚刚新建的硅基流动 `Siliconflow`
	- Model Name 选择模型广场的名字，多语言推荐 `BAAI/bge-m3`，纯中文推荐 `BAAI/bge-large-zh-v1.5`，注意，前缀也需要键入
2. 在 RAG 部分，设置 Embedding model 为刚刚你添加的模型
	- Include patterns 是做嵌入的文件（夹），**强烈建议第一次用小文件夹尝试**，例如 `素材/**` 表示 `素材` 文件夹内的所有笔记，点击 test patterns 查看匹配到的笔记列表
	- Exclude patterns 是忽略的文件（夹），可不填
	- 下面 4 个参数，我个人依次设置为 512 4000 0.2 10。参数解释详细大佬的回复：[免费 AI 插件推荐：obsidian-smart-composor](https://forum-zh.obsidian.md/t/topic/44107/33?u=jade)
3. 点击 manage，点击你选择的模型后面的锤子图表，等待进度 100%
4. 返回 ob 界面，点击左侧 Open Smart Composer，弹出右侧对话框，提问后点击 Vault Chat 开始对话。注意，Vault Chat 的结果不能 apply 到笔记。

## 4 注意事项

如果你的 chat model 是第三方提供的，例如硅基流动中的 deepseek 模型，那么需要先按照 3.1 操作添加好 Siliconflow 的 Provider。然后填写 Chat Models 时，应点击 `添加自定义模型`，Provider ID 选择 Siliconflow，Model Name 填写模型广场的名字，需要加前缀，例如 `deepseek-ai/DeepSeek-R1-Distill-Qwen-7B`，然后就可以对话了。