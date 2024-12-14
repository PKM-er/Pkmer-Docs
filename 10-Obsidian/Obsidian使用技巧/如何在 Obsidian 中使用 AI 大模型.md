---
uid: 20240516101016
title: 如何在 Obsidian 中使用 AI 国产大模型？(KIMI，通义千问)
tags: [kimi, 通义千问, ai, 大模型]
description: 本文介绍了如何在 Obsidian 中使用国产大模型。并以Kimi，通义千问为例通过 Obsidian 的插件系统将该模型集成到笔记中
author: cuman,calmwaves
type: other
draft: false
editable: false
modified: 20240525195259
---

# 如何在 Obsidian 中使用 AI 国产大模型？(KIMI，通义千问)

> [!info] 摘要
> 本文介绍了如何在 Obsidian 中使用国产大模型。首先，我们需要注册国产大模型，例如 KIMI。然后，我们可以通过 Obsidian 的插件系统将该模型集成到 Obsidian 中。最后，我们可以利用该模型来生成文本、回答问题或进行自然语言处理任务。

目前 AI 技术非常火热，Obsidian 推出了一系列 AI 有关的插件，但基本都是依托自建模型，或者 OpenAI 等国外大模型，作为国内用户因为自然优先选择国产大模型，或者是使用 OpenAI 的国内转发服务。

在选择国内模型的时候，需要选择兼容 OpenAI 的 SDK 协议的，这样通用性最强最方便使用。比如目前火热的 Kimi，通义千问等除了有网页端可以使用之外，还提供了免费的 API 可供调用。

让 Obsidian 赋能 AI，本地笔记就有了灵魂,可以借助 AI 来执行各种任务，如自动标注关键词、生成摘要、提取实体等。本文以 KIMI 大模型为例，讲一下如何在借助 Obsidian 的 AI 插件，在国内使用大模型。

## 注册 KIMI 申请 API

   - 首先，你需要访问 [Kimi的API后台](https://platform.moonshot.cn/console/api-keys) 或平台，注册并登录你的账户。
   - 在平台上找到 API 服务相关的页面，找到 APIkey 管理选项。
   - 按照指示创建一个新的 API 密钥。请务必复制好这个 API 秘钥并不要泄露。
![1|600](https://cdn.pkmer.cn/images/202405161701264.png!pkmer)

## 安装配置 Obsidian 插件

Obsidian 中有很多 AI 相关的插件，在 [Obsidian 插件集市 ](https://pkmer.cn/products/plugin/pluginMarket/?openai) 中会发现很多 Chatgpt 类的插件，这里我们需要选择 可以自定义 API 地址的插件，比如 [[obsidian-textgenerator-plugin]]，[[copilot]]，[BMO Chatbot](https://pkmer.cn/products/plugin/pluginMarket/?BMO%20Chatbot) 配置这类无非就是设置下面几个参数

- EndPoint API 端点：<https://api.moonshot.cn/v1/chat/completions>
- API KEY：`sk-xxxxxxxxxxxxxx` 就是上一步申请的 API 密钥
- Model 模型名称：`moonshot-v1-8k`
	其中 KIMI 支持的模型有下面几种：

| 模型               | 描述        | 长度   | 适用场景   |
| ---------------- | --------- | ---- | ------ |
| moonshot-v1-8k   | 适用于生成短文本  | 8k   | 短文本生成  |
| moonshot-v1-32k  | 适用于生成长文本  | 32k  | 长文本生成  |
| moonshot-v1-128k | 适用于生成超长文本 | 128k | 超长文本生成 |
|                  |           |      |        |

### Text Generator 插件配置教程

以 目前热门的 [[obsidian-textgenerator-plugin]] 插件配置为例：

- LLM Provider 选择 Custom 并配置 Endpoint 和 Api key
![|600](https://cdn.pkmer.cn/images/202405161746056.png!pkmer)
- 高级模式打开
![|600](https://cdn.pkmer.cn/images/202405161746273.png!pkmer)
- 配置 model 名称 也就是 模型
![|600](https://cdn.pkmer.cn/images/202405161747543.png!pkmer)
- 打开流传输（可选）
![|600](https://cdn.pkmer.cn/images/202405161749165.png!pkmer)

这样就配置好了。

选中文本，或者在文本当前行 按下快捷键 `Ctrl+J` 就可以自动生成文本了。

效果如下：

![|600](https://cdn.pkmer.cn/images/202405161750318.gif!pkmer)

### Copilot 插件配置教程

- 配置 API key 填写 上面 KIMI 申请的 api 秘钥 `sk-xxxxxxx`
	![|600](https://cdn.pkmer.cn/images/202405161754620.png!pkmer)
- 配置 API 地址
	在高级设置中，配置需要替换的 api 地址和模型名称。
	注意这里的 API 地址填 Base URL 也就是 `https://api.moonshot.cn/v1`
![|600](https://cdn.pkmer.cn/images/202405162226232.png!pkmer)


- 保存配置
	![|600](https://cdn.pkmer.cn/images/202405162223755.png!pkmer)
这样就配置好了，可以通过命令面板 在笔记侧边栏打开一个 chat 对话框
效果如下：
![](https://cdn.pkmer.cn/images/202405162230713.gif!pkmer)

 也许有网友说了，就想体验下 chatgpt 原生体验，国内如何体验呢？

 github 上有个项目 [chatanywhere/GPT_API_free: Free ChatGPT API Key，免费ChatGPT API，支持GPT4 API（免费），ChatGPT国内可用免费转发API，直连无需代理。可以搭配ChatBox等软件/插件使用，极大降低接口使用成本。国内即可无限制畅快聊天。 (github.com)](https://github.com/chatanywhere/GPT_API_free)

大家可以试一下，可以申请到一个免费的 key，但需要把 插件中 openai 的端点地址 改为 `https://api.chatanywhere.tech` 就可以在国内使用了。

![](https://cdn.pkmer.cn/images/202405162238120.png!pkmer)

 具体不再赘述，有更好的想法欢迎大家进入帖子下方参与讨论。

## 如何在 text generator 插件中配置通义千问

- 申请 API-KEY

[如何开通DashScope并创建API-KEY](https://help.aliyun.com/zh/dashscope/developer-reference/activate-dashscope-and-create-an-api-key)

- 设置 Endpoint 和 API key

[如何通过OpenAI接口调用通义千问模型](https://help.aliyun.com/zh/dashscope/developer-reference/compatibility-of-openai-with-dashscope/)

Endpoint：`https://dashscope.aliyuncs.com/compatible-mode/v1/chat/completions`

API 就是之前申请的

![image](https://cdn.pkmer.cn/images/202405240922929.png!pkmer)

- 设置模型名

[模型介绍](https://help.aliyun.com/document_detail/2786271.html) [计量计费](https://help.aliyun.com/document_detail/2712574.html)

有好多模型，很多是计费的。

![image](https://cdn.pkmer.cn/images/202405240922930.png!pkmer)

- 其他配置

![image](https://cdn.pkmer.cn/images/202405240922931.png!pkmer)

![image](https://cdn.pkmer.cn/images/202405240922932.png!pkmer)

![image](https://cdn.pkmer.cn/images/202405240922933.png!pkmer)

- 报错处理

`TG Error:k2.text is nota function` [CORS issue when trying to generate text · Issue #213](https://github.com/nhaouari/obsidian-textgenerator-plugin/issues/213)

`TG Error:'presence_penalty'is notsupport now` [Azure OpenAI Api not working - presence_penalty's default should be 0 (instead of null) · Issue #250](https://github.com/nhaouari/obsidian-textgenerator-plugin/issues/250)

`TGError:Range of top_p shouldbe(0.0,1.0)`

分别对应上一条里，三张截图的配置，请按照上一条配置好。

## 总结

通过使用国产大模型，在 Obsidian 中可以实现更强大的文本生成和处理功能。这为用户提供了更多的工具和资源来帮助他们在 Obsidian 中更高效地处理和组织信息。
