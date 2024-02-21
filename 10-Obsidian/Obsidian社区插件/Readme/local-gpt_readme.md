---
uid: 2024022117290344
title: Obsidian 插件：【Readme】Local GPT
tags: ['obsidian插件', 'readme']
description: Local GPT 辅助，以实现最大隐私和离线访问
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】Local GPT

> [!Note] 插件名片
> - 插件名称：Local GPT
> - 插件作者：Pavel Frankov
> - 插件说明：Local GPT 辅助，以实现最大隐私和离线访问
> - 插件分类：['obsidian插件', 'readme']
> - 项目地址：[点我访问](https://github.com/pfrankov/obsidian-local-gpt)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?local-gpt)

## 概述

Local GPT 辅助，以实现最大隐私和离线访问



> [!tip] 原文出处
> 
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/pfrankov/obsidian-local-gpt/master/README.md)
> 

---

## Readme(翻译）

下面是 [[local-gpt]] 插件的自述翻译

【机翻】
# Obsidian的本地GPT插件

![演示](https://cdn.pkmer.cn/covers/local-gpt_1_0.gif!pkmer)  
_没有加速。MacBook Pro 13, M1, 16GB, Ollama, orca-mini._

本地GPT插件可提供最大隐私和离线访问的辅助功能。  
该插件允许您在所选文本上打开上下文菜单，以选择AI助手的操作。

默认操作：
- 继续写作
- 总结文本
- 修正拼写和语法
- 在文本中查找行动项
- 一般帮助（只需将所选文本用作任何目的的提示）

您还可以添加自己的操作，分享最佳操作或从[社区](https://github.com/pfrankov/obsidian-local-gpt/discussions/2)获取一个  
<img width="700" alt="设置" src="https://github.com/pfrankov/obsidian-local-gpt/assets/584632/21e1fe6c-a93b-4562-a53a-d7727504e0d6">

支持的AI提供者：
- Ollama
- 兼容OpenAI的服务器

>**限制:**
>- 不支持移动设备。
## 安装步骤
### Obsidian插件商店
This plugin is available in the Obsidian community plugin store https://obsidian.md/plugins?id=local-gpt
你可以通过[BRAT](https://obsidian.md/plugins?id=obsidian42-brat)安装这个插件：`pfrankov/obsidian-local-gpt`
### 安装LLM
#### Ollama (推荐)
1. 安装 [Ollama](https://ollama.ai/)。目前不支持Windows。
2. 安装 orca-mini（默认）`ollama pull orca-mini` 或者从[库中](https://ollama.ai/library)选择任何喜欢的模型。

额外提示：如果想要使用Ollama进行流式完成，应该在API模式下运行：`OLLAMA_ORIGINS='*' ollama serve`。
#### OpenAI兼容服务器
有几种选项可以运行本地类似OpenAI的服务器：  
- [llama.cpp](https://github.com/ggerganov/llama.cpp)
- [llama-cpp-python](https://github.com/abetlen/llama-cpp-python#openai-compatible-web-server)
- [LocalAI](https://localai.io/model-compatibility/llama-cpp/#setup)
- ...可能还有更多

这里是llama.cpp的一个示例：  
1. 安装[llama.cpp](https://github.com/ggerganov/llama.cpp)，并按照适用于您的操作系统的构建说明进行操作
2. 下载在ChatML对话格式上训练的模型。例如，[Orca 2](https://huggingface.co/TheBloke/Orca-2-7B-GGUF/blob/main/orca-2-7b.Q4_K_M.gguf)
3. 通过调用`./server -c 4096 --host 0.0.0.0 -t 16 --mlock -m models/orca-2-7b.Q4_K_M.gguf`来运行服务器，或者按照[文档中描述的方式](https://github.com/ggerganov/llama.cpp/blob/master/examples/server/README.md)进行操作。
### 配置 Obsidian 快捷键（可选）
1. 打开 Obsidian 设置
2. 进入快捷键选项
3. 过滤“Local”，你应该看到“Local GPT: 显示上下文菜单”
4. 点击“+”图标，然后按下快捷键（例如 `⌘ + M`）
## 路线图
- [x] 从列表中选择模型而不是输入它们的名称的能力
- [x] 共享和应用预设（系统提示 + 提示 + 模型）
- [x] 其他AI提供商（OpenAI等）
- [x] 流式完成
- [ ] 提示的可选设置（top_p、top_k、温度、重复惩罚）
- [ ] 如果第一个URL不可用，则执行回退操作（远程GPU）
- [ ] 更改操作的顺序
- [ ] 将您的本地文档计入结果，如此处所述：https://ollama.ai/blog/llms-in-obsidian
## 其他AI提供商
如果您想使用其他提供商，请在[讨论区](https://github.com/pfrankov/obsidian-local-gpt/discussions/1)中告诉我。
## 我的其他Obsidian插件
- [Colored Tags](https://github.com/pfrankov/obsidian-colored-tags) 可以将标签着色为可区分的颜色。
## 受启发于
- [Obsidian Ollama](https://github.com/hinterdupfinger/obsidian-ollama).



