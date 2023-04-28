---
uid: 20230410232448
title: Spaced Repetition
description: 
tags: 
author: OS
type: basic
draft: false
editable: false
modified: 20230410232530
public: yes
---

# Spaced Repetition

## 简介

Spaced Repetition(SR) 是的利用遗忘曲线间隔重复复习抽认卡片和笔记来防止笔记遗忘的 Obsidian 插件。其复习算法使用 SM-2，与 Anki 相同，与 Ob 联动可以充分发挥起作用。下面首先将简单介绍 SR 的基本使用，然后再介绍进阶使用。注意，这里不会介绍 SM-2 算法，如有需要自行百度。

## 基本使用

SR 基本使用步骤 1. 定义 **卡组** 2. 创建笔记并所属所属卡组 3. 笔记内创建 **卡片** 4. 查看与复习

### Decks（卡组）

Decks(卡组)，即卡片的组织形式。简单来说，就是将卡片 **分门别类**。对于 SR 而言，就是一组标签或者文件夹。SR 中提供两种形式: 1. 使用 OB 标签组织（Using Obsidian Tags） 2. 使用文件夹组织（Using Folder Structure） 两种组织形式根据偏好使用其中一种，**卡组信息** 和卡组的学习可以在左侧菜单栏对应 **复习卡片** 选项中 **查看** 和 **复习**。

### 标签组织

默认情况使用 flashcards 标签，即只要在笔记中写入 `#flashcards`，就意味着笔记（即其中包含的 **问题|回答** 卡片）归纳进 flashcards 卡组。 关于 **卡组信息** 可以在左侧菜单栏对应 **复习卡片** 选项中 **查看** 和 **复习**。

#flashcards

![](https://pic3.zhimg.com/v2-fc4fe3b7a07b28ff59b6e8e34432ebce_b.jpg)

当然我们也可以自定义标签，这需要在设置中进行配置（卡片标签配置中增加对应标签）。我们在配置中增加#group1，然后新建笔记加入该标签，同时建立一张卡片。查看卡组信息将获得：

![](https://pic3.zhimg.com/v2-27acebc271e327bf0ac70880bc69f0ce_b.jpg)

SR 也允许使用 **分层标签**（子层级不需要定义），SR 可以自动解析成对应的层次机构。例如#flashcards/sub1/sub2。

![](https://pic2.zhimg.com/v2-b615b0111512d1cab997703dd7300a95_b.jpg)

需要注意是：

1. 在加入标签后，必须定义问题（卡片），否则不会在卡组信息中显示。
2. 每条笔记只能定义在一个卡组。多个卡组标签，优先归为 **最先定义** 的卡组。

### 文件夹组织

通过文件夹组织，更加结构化。SR 会将对应文件下所有 笔记中卡片都将归为对应文件夹名字的卡片组。 1. 在配置中开启 **是否将文件内容转换为卡片组或子卡片组** 选项。 2. 建立对应的文件夹结构。

![](https://pic3.zhimg.com/v2-f11e4546c3dd9e7866a51eae60aeaf66_b.jpg)

1. 完成创建，查看信息。

![](https://pic1.zhimg.com/v2-bbb6f89449448e0a888a5036c149032c_b.jpg)

需要注意是： 1. 文件夹下的笔记至少有一条笔记，否则不会在卡组信息中显示。 2. 可以通过 **忽略此文件夹** 选项，配置不想解析的文件夹。

### Flashcard Type(闪卡类型)

SR 中可以创建闪卡类型有五种：

1. 单行卡片（Single-line Basic）
2. 单行翻转卡片（Single-line Reversed） 多行卡片（Multi-line Basic）
3. 多行翻转卡片（Multi-line Reversed）
4. 完形卡片（Cloze cards）

### 单行卡片

**单行** 内完成问题 (Question) 和回答 (Answer) 定义，即简单的问答形式。

> 定义方法： Question::Answer

例子： 中国首都是哪里？:: 北京

![](https://pic3.zhimg.com/v2-361c330f216c06eefd580f277eb276da_b.gif)

### 单行翻转卡片

**单行** 内完成问题 (Question) 和回答 (Answer) 定义，同时问题和答案可以相互翻转（答案变成问题，问题变成答案）。

> 定义方法： Question:::Answer

例子： side1:::side2

![](https://pic2.zhimg.com/v2-5d70e2bbe157c4613085c7d3c4817c79_b.gif)

### 多行卡片

**多行** 内完成问题 (Question) 和回答 (Answer) 定义。适用于相对复杂的问题。

> 定义方法：
> Question
> ?
> Answer

例子：

As per the definition

of "multiline" the prompt

can be on multiple lines

?

same goes for the answer

![](https://pic4.zhimg.com/v2-1924b0c7580b5fae4ace4adc01de7fff_b.gif)

### 多行翻转卡片

这个类似于前面，自行推理。语法是需要?? 例如： As per the definition of "multiline" the prompt can be on multiple lines ?？ same goes for the answer

### 完形卡片

这就是我们英语中常见的完形填空题目。 定义方法： 对文档中 hightlight（\=\=）或者加粗 (\*\*)，自动解析为填空。 例子： 中国首都是==北京==

![](https://pic3.zhimg.com/v2-ac95a40660cbd38e7b6317fa9fcdabfa_b.gif)

## 进阶使用

### 笔记复习

Ob 最小的组成单位是 md 文件（笔记）。而前面所说的都是针对于 SR 内部概念：**卡片**。有时我们希望能够复习一个笔记中的卡片，即以笔记为单位的复习。

我们可以在笔记中加入#review 标签，或者自定义标签（复习标签选项配置）。我们可以用右上角三个点菜单或命令 [标记为...] 来对笔记进行复习情况进行评价。SR 会为笔记在右侧栏 **笔记复习序列** 中生成跟踪信息。

![](https://pic1.zhimg.com/v2-ddbb452642c11730eeaff932f4b4f6d8_b.jpg)

如何复习呢？ 只需要通过命令，选择对应需要的选项就可以复习了！！

![](https://pic1.zhimg.com/v2-9690f8ca2a15e09b3ad58da5da34c0e8_b.jpg)

注意：命令方式可能会有些慢，可以通过设置快捷键，加快复习。

### 统计查看

1. `ctrl + p` , 并输入 `Spaced Repetition:查看数据`，回车调用
2. 查看对应数据。
