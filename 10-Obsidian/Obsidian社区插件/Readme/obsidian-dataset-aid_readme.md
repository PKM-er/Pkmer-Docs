---
uid: 20230803204850
title: Obsidian 插件：【Readme】Text Dataset Aid Plugin
tags: ['obsidian插件', 'readme']
description: 这个Obsidian插件有助于为语言模型创建微调数据集。
author: Conner Ohnesorge
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Text Dataset Aid Plugin

> [!Note] 插件名片
> - 插件名称：Text Dataset Aid Plugin
> - 插件作者：Conner Ohnesorge
> - 插件说明：这个Obsidian插件有助于为语言模型创建微调数据集。
> - 插件分类：['obsidian插件', 'readme']
> - 项目地址：[点我访问](https://github.com/conneroisu/Text-Dataset-Aid-Plugin)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsidian-dataset-aid)

## 概述

这个Obsidian插件有助于为语言模型创建微调数据集。

![Text Dataset Aid Plugin](https://cdn.pkmer.cn/covers/obsidian-dataset-aid.png!pkmer)

> [!tip] 原文出处
> 
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/conneroisu/Text-Dataset-Aid-Plugin/master/README.md)
> 

---

## Readme(翻译）

下面是 [[obsidian-dataset-aid]] 插件的自述翻译


![图片](https://user-images.githubusercontent.com/88785126/203184536-9199f720-a03b-423b-9bf6-81a68c7fbd28.png)
![Obsidian 下载量](https://img.shields.io/badge/dynamic/json?logo=obsidian&color=%23483699&label=下载量&query=%24%5B%22obsidian-dataset-aid%22%5D.downloads&url=https%3A%2F%2Fraw.githubusercontent.com%2Fobsidianmd%2Fobsidian-releases%2Fmaster%2Fcommunity-plugin-stats.json)
## 个性化你的第二大脑小伙伴（文本生成模型）

[![构建黑曜石插件](https://github.com/conneroisu/Text-Dataset-Aid-Plugin/actions/workflows/release.yml/badge.svg)](https://github.com/conneroisu/Text-Dataset-Aid-Plugin/actions/workflows/release.yml)

使用一个txt文件来存储你的数据集。很快将添加将txt导出为jsonl文件的功能。

# 上下文

条件：完全工作
NLP和文本生成数据集的创建具有极大的影响力，并有潜力使研究人员能够训练能够自动生成文本的模型。然而，创建自定义数据集是一个繁琐而缓慢的过程。

文本数据集辅助工具是一个有用的工具，可以通过手动辅助创建用于文本生成模型（如GPT-3）的微调数据集！这可以使经过微调的模型生成的文本更加个性化、详细或格式更好。不再通过热键配置处理菜单！

该插件可用于快速生成NLP和文本生成模型的训练数据。这将加快这些领域的研究进展，并使从业者更容易训练这些模型。

文本数据集辅助插件是一个有用的工具，可以通过手动辅助创建用于文本生成模型（如GPT-3）的微调数据集。这可以使经过微调的模型生成的文本更加个性化、详细或格式更好。不再通过热键配置处理菜单！

在你的第二大脑中的上下文中
在你的第二大脑中工作时，更新你自己的文本生成模型以适应你收集的数据集，可以使你的模型更好地满足你的第二大脑的需求。由于obsidian中的命令的性质，这个插件适用于任何创作或编辑工作流程。希望你像我一样经常使用这个插件！

# 微调的优势
微调文本生成模型可以创建更自然和表达力更强的文本。
1. 提高文本预测/生成的准确性
2. 提高文本生成的流畅性和连贯性
3. 对生成文本的风格和内容具有更大的控制权
4. 对模型产生的输出类型具有更多的控制权
5. 对模型可以接受的输入类型具有更大的灵活性
6. 能够产生更接近人类的输出
7. 提高对某些类型输出的预测准确性

微软提供了一个关于微调原则的优秀资源，链接为[microsoft](https://learn.microsoft.com/en-us/azure/cognitive-services/openai/how-to/prepare-dataset)。

# 用法
该插件的核心功能通过使用vim模式变得更加简单，但在任何情况下都应该可以工作。
目前提供了两个命令：（每个命令都可以通过热键进行配置）

当您将提示发送到数据集时，如果已经存在一个提示，插件将不执行任何操作。

当您将完成发送到数据集并且已经存在一个提示时，文本选择将作为该提示的完成发送到数据集。

## 开放式生成支持！
当您将完成的内容发送到数据集时，如果没有提示，文本选择将插入到数据集中，并在文本选择之前添加一个空的提示。

一个例子：
```json
{"prompt":"", "completion":"你好，我能帮你什么忙吗？"}
```
另一个例子：
```json 
{"prompt":"", "completion":"嗨，今天我能帮你什么吗？"}
```

将选择发送到数据集文件作为提示
将选择发送到数据集文件作为完成内容

微调数据集的示例：
```json
{"prompt":"公司：BHFF保险\n产品：全方位保险\n广告：满足您所有的保险需求！\n支持：", "completion":"是的"}
{"prompt":"公司：阁楼改建专家\n产品：-\n广告：几周内拥有整齐的牙齿！\n支持：", "completion":"不"}
```

# 安装

## 在Obsidian的社区插件页面安装插件
- 打开设置 > 第三方插件
- 确保安全模式为**关闭**
- 点击浏览社区插件
- 搜索"Dataset Finetuning Aid Plugin"
- 点击安装
- 安装完成后，关闭社区插件窗口并激活新安装的插件

## 从GitHub手动安装
- 从GitHub存储库的“Releases”部分下载最新版本（如果找不到，请在查看此页面时应该在右侧）
- 将插件文件夹从zip文件中提取到您的vault的插件文件夹中：`<vault>/.obsidian/plugins/`
  注意：在某些机器上，`.obsidian`文件夹可能是隐藏的。在MacOS上，您应该能够按`Command+Shift+Dot`来在Finder中显示该文件夹。
- 重新加载Obsidian

# 设置
在插件的设置面板中，有四个主要的设置可以进行配置，但默认值是为文本生成模型的数据集常用的格式jsonl进行设置的。

| 设置名称              | 描述                                                                                   | 默认值         |
| --------------------- | ------------------------------------------------------------------------------------- | ------------- |
| 前缀 for Prompts      | 当发送到数据集时，这是添加到提示前面的字符串                                           | `{"prompt":`    |
| 后缀 for Prompts      | 当发送到数据集时，这是添加到提示后面的字符串                                           | `,`             |
| 前缀 for Completion   | 当发送到数据集时，这是添加到完成文本前面的字符串                                       | `"completion":` |
| 后缀 for Completion   | 当发送到数据集时，这是添加到完成文本后面的字符串                                       | `}\n`              |


[开发中的帮助](https://github.com/TfTHacker/obsidian42-text-transporter/blob/main/src/features/transporterFunctions.ts)

# 灵感

受到优化自己的语言模型的效率和吸引力的启发，该插件允许您从笔记中构建数据集，以提示和响应的形式。自动将文本格式化为适用于GPT3等模型的[OpenAI](https://openai.com/)的规范。

该插件与[TfTHacker](https://github.com/TfTHacker/obsidian42-text-transporter/)制作的textTransporter插件相似。

由Conner Ohnesorge用❤️制作



