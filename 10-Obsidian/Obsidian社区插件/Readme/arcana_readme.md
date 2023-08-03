---
uid: 2023080322141280
title: Obsidian 插件：【Readme】Arcana
tags: ['obsidian插件', 'readme']
description: 通过AI提供的洞察和建议，让你的笔记记录变得更加强大。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Arcana

> [!Note] 插件名片
> - 插件名称：Arcana
> - 插件作者：A-F-V
> - 插件说明：通过AI提供的洞察和建议，让你的笔记记录变得更加强大。
> - 插件分类：['obsidian插件', 'readme']
> - 项目地址：[点我访问](https://github.com/A-F-V/obsidian-arcana)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?arcana)

## 概述

通过AI提供的洞察和建议，让你的笔记记录变得更加强大。

![Arcana](https://cdn.pkmer.cn/covers/arcana.gif!pkmer)

> [!tip] 原文出处
> 
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/A-F-V/obsidian-arcana/master/README.md)
> 

---

## Readme(翻译）

下面是 [[arcana]] 插件的自述翻译


[!["请我喝咖啡"](https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png)](https://www.buymeacoffee.com/AFV7)

![Obsidian 下载量](https://img.shields.io/badge/dynamic/json?logo=obsidian&color=%23483699&label=下载量&query=%24%5B%22arcana%22%5D.downloads&url=https%3A%2F%2Fraw.githubusercontent.com%2Fobsidianmd%2Fobsidian-releases%2Fmaster%2Fcommunity-plugin-stats.json)

[寻找合作者](#collaborating)
# 🔮 Arcana

> 一个用于 [Obsidian](https://obsidian.md/) 的插件

**Arcana** 是一组由人工智能驱动的工具，旨在帮助您在 Obsidian vault 中更具创造力和生产力。每个工具都受到了著名历史人物的启发：

- [苏格拉底](#socrates) - **对话**
  - [自定义代理](#adding-custom-chat-agents) - **从模板创建对话代理**
- [阿加莎·克里斯蒂](#agatha-christie) - **文本生成**
- [理查德·费曼](#richard-feynman) - **闪卡生成**
- [查尔斯·达尔文](#charles-darwin) - **自动标签**
- [诺斯特拉达姆斯](#nostradamus) - **笔记命名**

## 用法：

- **需要OpenAI API密钥** - 在设置中设置。
- **强烈建议您使用GPT4 API而不是GPT3.5。**
- 大多数工具都是通过命令面板调用的，可以搜索`Arcana`或人名。
- 一些工具会在侧边栏中添加一个视图以进行交互。

词源：

> "Arcanum"一词（复数形式为"arcana"）源自拉丁语"arcanus"，意为"秘密"，并在黑暗时代过渡到文艺复兴时期时进入英语。它经常用于指涉物质和精神世界的奥秘，这些主题在当时受到了密切审视和重新思考。

奥秘守护者：

## 苏格拉底

<p align="center">
<img src='imgs/Socrates.png' height=500/>
</p>

**与苏格拉底进行的苏格拉底式对话**

- 与苏格拉底进行对话交流。
- 提出与当前打开的笔记相关的问题。

![](gifs/Socrates.gif)

### 添加自定义聊天代理
您可以创建像苏格拉底这样专门用于您自己用例的新代理。

例如，通过使用[Mr Ranedeer的AI导师提示](https://github.com/JushBJJ/Mr.-Ranedeer-AI-Tutor)作为初始消息，将亚里士多德，亚历山大大帝的老师，带到现实中。

要创建一个新的代理，将一个新文件添加到设置中指定的“Conversation Agent Folder”中。
1）代理的**名称**是文件的名称。名称必须是唯一的，不能与**苏格拉底**相同。
2）代理的**初始消息**是文件的正文。
3）对于其他代理设置，您可以将以下字段添加到文件的YAML前置元数据中：

| 设置ID | 设置类型 | 描述 |
| --- | --- | --- |
| `arcana-agent-emoji` | 表情符号 | 代理将用于对话的表情符号 |
| `arcana-user-emoji` | 表情符号 | 用户将用于对话的表情符号 |

[这个网站](https://flowgpt.com/)提供了一些用于制作代理的好的提示。

在名为`Aristotle.md`的文件中
```md
---
arcana-user-emoji: 🧐
arcana-agent-emoji: 🗿
---
我希望你像亚里士多德一样行动。
我希望你以亚里士多德的语调、方式和词汇回答和回应。
不要写任何解释。
只能像亚里士多德一样回答。你必须了解亚里士多德的所有知识。
```

## 阿加莎·克里斯蒂

<p align="center">
<img src='imgs/Agatha.png' height=500/>
</p>

- 在任何地方的便签上，您可以要求阿加莎为您写作（无论是提问还是给出指示）
- 她将以您的便签作为指南。
- 您还可以突出显示文本，阿加莎也会考虑到这一点。（她将在**文件底部**代替您写作）
- 要取消您的请求，请按下`Esc`键。

![](gifs/Christie.gif)

## 理查德·费曼

<p align="center">
<img src='imgs/Feynman' height=500/>
</p>

**使用费曼法编写闪卡**

- 将会记录一条笔记并为您生成5张闪卡。
- 闪卡与[Obsidian-Spaced-Repitition](https://github.com/st3v3nmw/obsidian-spaced-repetition)插件兼容。
- 同时会生成分类。

![](gifs/Feynman.gif)

## 查尔斯·达尔文

<p align="center">
<img src='imgs/Darwin.png' height=500/>
</p>

**目录和分类**

- 在正文中的前言中为您的笔记添加1-4个标签
- 仅使用您的存储库中存在的标签。
- 不重复使用笔记中已使用的标签。

![](gifs/Darwin.gif)

## Nostradamus

<p align="center">
<img src='imgs/Nostradamus' height=500/>
</p>

**可以预测笔记的标题**

- 使用笔记的内容来为文件提供更好的标题。
- 以[Andy Matuschak的Evergreen笔记](https://notes.andymatuschak.org/Evergreen_note_titles_are_like_APIs)的风格进行操作。

![](gifs/Nostradamus.gif)

---

### 合作：
**积极寻找合作伙伴**
如果您想要贡献或合作，请直接在Twitter上私信我[@AFV_7](https://twitter.com/AFV_7)，我们可以交流。

---

_这些图片是使用Midjourney生成的_



