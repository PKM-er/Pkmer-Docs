---
uid: 2023102611085299
title: Obsidian 插件：【Readme】Vox
tags: ['obsidian插件', 'readme']
description: 智能转录和分类您的语音笔记
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】Vox

> [!Note] 插件名片
> - 插件名称：Vox
> - 插件作者：vincentbavitz
> - 插件说明：智能转录和分类您的语音笔记
> - 插件分类：['obsidian插件', 'readme']
> - 项目地址：[点我访问](https://github.com/vincentbavitz/obsidian-vox)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?vox)

## 概述

智能转录和分类您的语音笔记



> [!tip] 原文出处
> 
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/vincentbavitz/obsidian-vox/main/README.md)
> 

---

## Readme(翻译）

下面是 [[vox]] 插件的自述翻译


Obsidian Vox - 智能语音转录

VOX会自动将Obsidian vault中的音频笔记转录为文本，并提取元数据、分类和标签信息。转录的文本将与其相关的元数据（frontmatter）和标签一起放置在最终目录中。

![readme_visual_1800](https://github.com/vincentbavitz/obsidian-vox/assets/58160433/10528b09-ab04-49e3-8b24-06457d7abb57)

*unprocessed*目录会监视新文件；一旦发现新文件，它将触发转录并将文件保存到您的vault中。

> 请注意，对于1.0.X版本，您需要运行自己的后端。
## 动机

语音备忘录是一种非常方便和高效的媒介，可以用来阐述和表达你的想法。然而，它们的主要缺点是它们不是纯文本，无法进行索引、搜索、排序或分类。

随着你的原始语音备忘录的数量增加，你搜索重要信息的能力会减弱。一个包含数千个音频文件的庞大目录不是组织我们的笔记的方式。VOX通过提取语音备忘录中的重要信息并智能分类来解决这个问题（见下文的分类）。
## 指示
### 设置后端

详细的设置说明请参见[obsidian-vox-backend](https://github.com/vincentbavitz/obsidian-vox-backend) - 然后只需将Obsidian插件设置"*Self Hosted Backend Location*"更新为您的后端域名或IP和端口。您也可以在本地运行后端，并将后端指向`127.0.0.1:1337`。

> @注意 - 内存小于8GB的系统在转录超过50MB的音频文件时可能会遇到困难。
### 在 Obsidian 中

1. 在 Obsidian 插件中启用 VOX
2. 更新插件设置，以适应您的语音笔记的输入/输出文件夹。
3. 将一个语音笔记移动到您的监视目录中（例如 `<Vault>/Voice/unprocessed`），作为一个测试文件。
#### 移动设备设置示例 - 仅限手机

> - 手机使用语音录音应用程序记录语音备忘录，并将文件保存到 `<mobile>/path/to/obsidian/your/watch/folder`
> - 移动设备上的 Obsidian 应用程序将语音备忘录转录为文字。
#### 移动优先桌面同步示例设置

> - 手机使用语音录音应用程序记录语音备忘录，并保存到手机上的某个位置
> - 使用 RSync、Syncthing 或其他同步工具，手机将语音备忘录同步到 `<desktop>/path/to/obsidian/your/watch/folder`
> - 桌面版 Obsidian 应用程序将语音备忘录转录成文字
#### 示例设置 - 优先处理桌面设备

> - 桌面/笔记本电脑记录语音备忘录并直接将文件保存到Obsidian保险库的VOX监视文件夹中
> - 桌面版Obsidian应用程序将语音备忘录转录为文字
## 分类
在保存语音备忘录时，您可以在文件名前加上特殊的分类标记。这样可以让VOX将您的语音备忘录按照不同的类别和重要性进行组织。

例如，您可能会发现您的婚礼语音备忘录的重要性为5/5，而关于工作的胡言乱语可能只有1/5的重要性。我们可以通过设置它们的文件名来对它们进行分类，如下所示：

- `R5LN Wedding Night With Charlotte.mp3` -> 在*生活备忘录*类别中的重要性评级为*5/5*
- `R1RM Ramble about work issues.mp3` -> 在*胡言乱语*类别中的重要性评级为*1/5*

更详细的解释请参见下文。
### 重要性排名

惯例是在语音备忘录文件名前加上R{数字}，从R1 -> R5，其中数字是1到5之间的重要性评级。

因此，标准文件名的格式如下：`R{重要性}{类别} {标题}.{扩展名}`
### 语音备忘录分类

为了适当地组织语音备忘录，应该在文件名前加上它们的分类前缀。
以下是一些示例分类及其前缀的列表...

- LN - 生活笔记
- IN - 洞察
- DR - 梦想
- RE - 关系
- RM - 胡言乱语
- RN - 抱怨
- PH - 哲思
- PO - 政治

您可以在设置中设置自己的分类映射 - 没有限制！
## 路线图
#### 状态面板

状态面板将提供有关当前正在转录的项目、排队的项目以及任何错误（包括任何进一步的信息）的信息。
#### 模板

允许用户使用短代码（如`{{ tags }}`、`{{ transcript }}`、`{{ category }}`）构建自己的模板。
在不久的将来，VOX将在其后端中添加开源和GPT-2，以便实现以下功能：

- 更智能的标签提取
- 可选择在转录文本中输出摘要，以便获取主题内容的概述
#### Git集成

Git集成将是VOX的一个重要支柱 - 该集成将确保转录的语音笔记提交到您的保险库存储库，而不会与您当前的更改相冲突。它将与[obsidian-git](https://github.com/denolehov/obsidian-git)一起使用。
#### 免费且完全托管的后端

VOX的核心理念是简单和节省时间 - 因此在不久的将来，它将在一个专用的后端上进行托管，具备自动扩展和GPU加速功能。专用后端将提供极快的转录速度，并仅将数据保存在内存中。但对于那些更愿意自行运行的用户，仍然可以选择使用自己的后端。
内置音频录音机会在用户录制语音备忘录后提示用户选择备忘录的类别和重要性评级，然后自动转录并将其放置在他们的保险库中的正确位置。
查看我的存储库[obsidian-vox-backend](https://github.com/vincentbavitz/obsidian-vox-backend)以获取自托管的说明。



