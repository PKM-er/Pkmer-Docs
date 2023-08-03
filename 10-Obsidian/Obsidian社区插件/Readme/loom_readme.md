---
uid: 2023080322214908
title: Obsidian 插件：【Readme】Loom
tags: ['obsidian插件', 'readme']
description: 黑曜石中的织布机
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Loom

> [!Note] 插件名片
> - 插件名称：Loom
> - 插件作者：celeste
> - 插件说明：黑曜石中的织布机
> - 插件分类：['obsidian插件', 'readme']
> - 项目地址：[点我访问](https://github.com/cosmicoptima/loom)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?loom)

## 概述

黑曜石中的织布机



> [!tip] 原文出处
> 
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/cosmicoptima/loom/master/README.md)
> 

---

## Readme(翻译）

下面是 [[loom]] 插件的自述翻译


织布机（四点）

**如果您计划使用此插件，请阅读自述文件。它非常有用**

这是[Loom](https://github.com/socketteer/loom)的一个重新实现，作为Obsidian插件，旨在更易于使用、更模块化和可扩展。

Loom是一个递归分支的GPT-3和其他语言模型的接口；它旨在促进对基础模型的探索和实验性使用。工作流程主要包括：您从文本中的某一点按下`Ctrl+Space`，Loom会生成当前节点的`n`个子节点，其中每个子节点包含光标之前文本的不同完成。这与右侧边栏中的树形界面和设置面板以及包含当前节点及其兄弟节点的完整文本的窗格配对使用。

Loom可以从以下提供者请求完成：[Cohere](https://docs.cohere.ai/docs)、[TextSynth](https://textsynth.com/documentation.html)、[OpenAI](https://platform.openai.com/docs/introduction)和[Azure OpenAI Service](https://learn.microsoft.com/en-us/azure/ai-services/openai)。它还可以从[openai-cd2-proxy](https://github.com/cosmicoptima/openai-cd2-proxy)的实现中请求完成，此时您必须在设置中的Loom选项卡中提供基本URL。

如果您有兴趣资助此插件的开发，您可以**[在Patreon上支持我](https://patreon.com/parafactual)**；这样我就能够更多地投入时间到这个和其他独立项目中。

**如果您是Obsidian的新用户：**如果您想看到树形界面，请确保使用右上角的按钮或使用`Ctrl+P`然后`切换右侧边栏`打开右侧边栏。完成后，转到Loom选项卡，该选项卡由网络图标表示。

**默认热键：**

- 生成 - `Ctrl+Space`
- 生成兄弟节点 - `Ctrl+Shift+Space`
- 在光标位置拆分 - `Alt+s`
- 在光标位置拆分并创建子节点 - `Alt+c`
- 删除（当前节点） - `Alt+Backspace`
- 将（当前节点）与父节点合并 - `Alt+m`

导航：
- 切换到下一个兄弟节点 - `Alt+Down`
- 切换到上一个兄弟节点 - `Alt+Up`
- 切换到父节点 - `Alt+Left`
- 切换到（最近访问的）子节点 - `Alt+Right`

在编辑器中：
- `Shift+单击`与节点对应的文本以切换到该节点

**Loom可以在Obsidian商店中安装。**如果您不想这样做：

1. 在右侧的“Releases”子标题下找到最新的发布版本
2. 在“Assets”下下载zip文件
3. 解压下载的文件到`[vault路径]/.obsidian/plugins`，如果需要的话创建`plugins`目录
4. 在Obsidian设置的“Community plugins”选项卡中，启用“Loom”

或者，您可以从源代码构建Loom：

1. 在`[vault路径]/.obsidian/plugins`中克隆此存储库（`git clone https://github.com/cosmicoptima/loom`），如果需要的话创建`plugins`目录
2. 运行以下命令：`cd loom; npm i; npm run build`
3. 在Obsidian设置的“Community plugins”选项卡中，启用“Loom”
4. 要更新，转到存储库并执行`git pull; npm i; npm run build`，然后禁用并重新启用Loom

**如果您使用的是MacOS：**一些热键--`Alt+s`、`Alt+c`和`Alt+m`--绑定了特殊字符。您可以选择：

1. 禁用MacOS的特殊字符快捷键，如此处所述：https://superuser.com/questions/941286/disable-default-option-key-binding
2. 在设置的热键选项卡中重新绑定您想要使用的Loom热键



