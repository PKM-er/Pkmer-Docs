---
uid: 2023120522243295
title: Obsidian 插件：【Readme】Canvas LLM Extender
tags: ['obsidian插件', 'readme']
description: 让OpenAI LLM / GPT为您的画布添加节点。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】Canvas LLM Extender

> [!Note] 插件名片
> - 插件名称：Canvas LLM Extender
> - 插件作者：Pasi Saarinen
> - 插件说明：让OpenAI LLM / GPT为您的画布添加节点。
> - 插件分类：['obsidian插件', 'readme']
> - 项目地址：[点我访问](https://github.com/phasip/obsidian-canvas-llm-extender)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?canvas-llm-extender)

## 概述

让OpenAI LLM / GPT为您的画布添加节点。



> [!tip] 原文出处
> 
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/Phasip/obsidian-canvas-llm-extender/main/README.md)
> 

---

## Readme(翻译）

下面是 [[canvas-llm-extender]] 插件的自述翻译


你必须拥有自己的OpenAI API密钥！！


https://github.com/Phasip/obsidian-canvas-llm-extender/assets/592433/02eb0c85-510a-40d1-a930-e83ad29468da
# Canvas LLM扩展器
让OpenAI LLM向您的画布添加节点。目前仅适用于文本节点，可能在使用其他节点时出现故障。

转到设置并配置您的API密钥。
右键单击画布中的一个节点，选择LLM扩展器，插件将自动向一个新节点添加一个新的出边。新节点中的文本是由OpenAI根据您附近（边缘方式）的节点生成的。
## 建议的贡献（也称为TODO）
- 添加对其他节点的支持
- 添加对其他AI服务的支持
- 验证将兄弟节点用作提示的输入
- 支持基于提示的多个操作
- 限制输出中的令牌数量
- 清理代码以使其更符合JavaScript的风格
- 解决我在上面使用ts-ignore的问题
- 处理错误
- 安装说明，更好的自述文件，示例视频
状态
Pre alpha - 我写到了我认为它对我来说可以工作的程度。
## 构建
apt install node-typescript
npm run build



