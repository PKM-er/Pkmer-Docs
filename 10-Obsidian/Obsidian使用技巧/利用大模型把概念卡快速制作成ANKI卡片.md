---
uid: 20240512132545
title: 利用大模型把概念卡快速制作成ANKI卡片
tags: ["anki"]
description: 介绍利用LLM来快速将概念卡片整理成特定的anki卡片
author: Dusk
type: other
draft: false
editable: false
modified: 20240520093414
---

# 利用大模型把概念卡快速制作成 ANKI 卡片

## 缘起

最近在打磨自己的读书流程，准备理成一个小系列的文章。

先大概介绍一下流程（及工具）：

1. 阅读中高亮文体、写批注。工具：微信读书、zotero、网页批注软件、readwise reader 等均可实现
2. 用思维脑图梳理思路、写问题清单。工具：各类脑图软件、甚至大纲软件均可
3. 在白板上写概念卡片、联线卡片、成组卡片。工具：obsidian、mefo、heptabase 均可
4. 将概念卡片转成 anki 卡片，做间隔复习。工具：obsidian、anki、LLM 模型（ChatGPT、kimichat 等）

## 概念卡片 toAnki 卡片，效果展示

先挖些坑，准备慢慢填，本文主要聚焦于第四步：将概念卡片转成 anki 卡片。主要分享一个 LLM 提示词，我在 ChatGPT 和 kimiChat 上都试了下，都可用（效果有所差异），欢迎你来试用。

备注：本提示词框架叫 CO-STAR 框架，详情介绍可见 [这篇译文](https://baoyu.io/translations/prompt-engineering/how-i-won-singapores-gpt-4-prompt-engineering-competition?continueFlag=0dd952f2f7daba6f892fbd4fc7f7da7a)，强烈推荐阅读。

好，老规矩，先秀效果图。

### 1，概念卡片示意图

![](https://cdn.pkmer.cn/images/202405200933889.png!pkmer)

以上是我读那篇译文时做的概念卡片，heptabase 及 mefo 均能呈现以上样式。卡片成型后，可以直接导出 md 文件，通常一则卡片导出为一个 md 文件。

（先挖个坑，这里有提高效率的技巧，下次写）

### 2，在 obsidian 中的原样式

一则 md 文件打开后，可直接粘到 obsidian 中，呈现的格式举例如下：

```original_card
# 系统提示词，写法（总纲）-1
- 任务定义：确保大语言模型（LLM）在整个对话中清楚自己的任务。
- 输出格式：指导 LLM 如何格式化其回答。
- 操作边界：明确 LLM 不应采取的行为。这些边界是LLM 治理中新兴的一个方面，旨在界定 LLM 的操作范围。
```

### 3，LLM 模型处理后的 anki 样式

用 LLM 模型进行辅助制卡，节省大量时间

```anki_card
#### 系统提示词，写法（总纲）？？
- 任务定义
- 输出格式
- 操作边界

#### 系统提示词，任务定义是什么？？？
确保大语言模型（LLM）在整个对话中清楚自己的任务。

#### 系统提示词，输出格式是什么？
指导大语言模型（LLM）如何格式化其回答。

#### 系统提示词，操作边界是什么？
明确大语言模型（LLM）不应采取的行为。这些边界是 LLM 治理中新兴的一个方面，旨在界定 LLM 的操作范围。
```

备注：以上 anki 样式，是我自己用的样式，LLM 提示词中，读者可以按自己的卡片样式进行修改。我的卡片制作方式及卡片样式约定，文章链接可见 [[obsidian-to-anki-plugin]]。

## LLM 提示词的分享（精华部分）

读者有不同的卡片样式，可以参考下文中<example_anki>里的样例进行调整。

```CO-STAR Framework
### 系统提示：
我希望你扮演教育者的角色来根据知识点拆分卡片。按我给你提供的范例样式创建学习卡片。注意，不要改变我卡片中的内容。创建学习卡片过程中，确保每个卡片详尽地覆盖了所有子要点和日期信息。每个卡片需要包括标题和详细的解释内容。在完成后，请自我审查卡片，确保没有遗漏任何细节。

########

### 提示：
# CONTEXT #
<example_note>
# 系统提示词，写法（总纲）

- 任务定义：确保大语言模型（LLM）在整个对话中清楚自己的任务。

- 输出格式：指导 LLM 如何格式化其回答。
</example_note>

<example_anki>
#### 系统提示词，写法（总纲）
- 任务定义
- 输出格式

#### 系统提示词，任务定义是什么？
确保大语言模型（LLM）在整个对话中清楚自己的任务。
</example_anki>

########

# OBJECTIVE #
我希望你能根据我提供的数据<note>，按我给定的<example_note>、<example_anki>样式，输出<anki>。
你可以按以下步骤进行：
1. 提取第一张卡片，要包含列表中的要点。如
<example_anki1>
#### 系统提示词，写法（总纲）
- 任务定义
- 输出格式
</example_anki1> 

2. 提取下级列表的相关信息，补充卡片的进一步信息
<example_anki2>
#### 系统提示词，任务定义是什么？
确保大语言模型（LLM）在整个对话中清楚自己的任务。
</example_anki2> 

注意：在过程中注意检查，不要遗漏小的要点。

########

# STYLE #
参见<example_anki>的输出格式，输出<anki>

########

# TONE #
专业性

########

# AUDIENCE #
我自己。

########

# RESPONSE #

注意：请用markdown的语法输出内容

########

### 审查检查列表：
- 标题是否齐全？
- 所有子信息是否已包括？
- 日期和其他重要细节是否已经添加？

########

### START ANALYSIS
如果你己经明白，请向我索要我的数据集。
```

## 放两个大模型的输出效果

### 1，ChatGPT

![](https://cdn.pkmer.cn/images/202405200933891.png!pkmer)

昨晚在调适提示语的过程中，LLM 的识别模式真惊艳到我了，以下几个卡片与我给的范例在格式上是有差别的，但输出结果仍是我的预期样式，真是太 666 了。

![](https://cdn.pkmer.cn/images/202405200933892.png!pkmer)

![](https://cdn.pkmer.cn/images/202405200933893.png!pkmer)

![](https://cdn.pkmer.cn/images/202405200933894.png!pkmer)

![](https://cdn.pkmer.cn/images/202405200933895.png!pkmer)

![](https://cdn.pkmer.cn/images/202405200933896.png!pkmer)

### 2，kimichat

再附同一提示词、同一输入内容，kimichat 的回复。效果有所不同。

![](https://cdn.pkmer.cn/images/202405200933897.png!pkmer)

好，本次分享结束。

PS：慢慢填坑。