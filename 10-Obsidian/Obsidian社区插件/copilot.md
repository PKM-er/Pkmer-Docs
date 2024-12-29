---
uid: 20230609105707
title: Obsidian 插件：copilot
tags: []
description: 一个能像chatGPT网页版对话的Obsidian AI插件
author: windilycloud
type: basic
draft: false
editable: false
modified: 20230609110515
---

# Obsidian 插件：copilot

> [!Note] 插件名片
> - 插件名称：copilot
> - 插件版本：2.2.3
> - 插件作者：Logan Yang
> - 插件描述：一个能像 chatGPT 网页版对话的 Obsidian AI 插件
> - 插件项目地址：[obsidian-copilot](https://github.com/logancyang/obsidian-copilot)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?copilot)

## 概述

![image.png](https://cdn.pkmer.cn/images/20230609110121.png!pkmer)

- 在 Copilot 聊天窗口中与 ChatGPT 直接聊天
- 一键即可将任何聊天记录复制为 markdown
- 一键保存任何聊天记录为笔记
- 使用活动笔记作为上下文，并通过在模式选择菜单中切换到“QA：活动笔记”来开始围绕它进行讨论。该功能依赖本地向量存储支持，需要额外配置
- 内置翻译，简写，转述，修复，总结等常用 prompt
- 自定义 prompt

## 视频教程

<iframe src="https://player.bilibili.com/player.html?isOutside=true&aid=1405260572&bvid=BV13r421A7ek&cid=1570540513&p=1&autoplay=false" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" width="80%" height="500"> </iframe>

## 支持的国内模型
插件设置中，add custom model
provider 选择 3rd party (openai format) 即可
### 智谱GLM
[查看api key](https://open.bigmodel.cn/usercenter/apikeys)
```python
base_url="https://open.bigmodel.cn/api/paas/v4"
```
[模型列表](https://open.bigmodel.cn/pricing)
### moonshot kimi
[查看api key](https://platform.moonshot.cn/console/api-keys)
```python
base_url="https://api.moonshot.cn/v1"
```

|模型|计费单位|价格|
|---|---|---|
|moonshot-v1-8k|1M tokens|￥12.00|
|moonshot-v1-32k|1M tokens|￥24.00|
|moonshot-v1-128k|1M tokens|￥60.00|
还可以根据上下文长度自动选择模型
[moonshot-v1-auto](https://platform.moonshot.cn/docs/guide/choose-an-appropriate-kimi-model#moonshot-v1-auto-%E6%A8%A1%E5%9E%8B)


可能还有其他模型支持 openai format，此不一一列出