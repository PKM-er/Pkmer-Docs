---
uid: 20230726003600
title: Quicker 动作之 BookxNote 和 Obsidian 联动实现 PDF 笔记自由化
tags: []
description: 
author: 熊猫别熬夜
type: other
draft: false
editable: false
modified: 20230729213610
---

# Quicker 动作之 BookxNote 和 Obsidian 联动实现 PDF 笔记自由化

## 前言

首先本人能力有限，并不会太高深的动作，单纯想结合 BookxNote 和 Obsidian 以及 Excalidraw 画板各自的优势实现 PDF 笔记的自由化，通过 3 个 Quicker 动作来简化 BookxNote 摘录到 Obsidian 笔记或 Excalidraw 画板上的步骤，可以回链到 PDF 标注上，对摘录的图片还可以进行更新。

![Pasted image 20230725233140](https://cdn.pkmer.cn/images/202307292128073.png!pkmer)

## 工具介绍

BookxNote 是一款全新的电子书学习工具，旨在助力用户的学习和思考过程，提高大脑的记忆效率。它类似于 MarginNote，适用于 Windows 操作系统的版本。

![Pasted image 20230725233106](https://cdn.pkmer.cn/images/202307292128386.png!pkmer)

> 电子书籍管理工具：BookxNote Pro 电子学习笔记软件

Quicker 是一款 Windows 平台的效率工具，它是一种快速触发和自动化工具，可以执行各种操作，包括打开文件夹、运行命令、打开网址、模拟按键、发送文本、执行脚本、切换面板等。

![Pasted image 20230725233535](https://cdn.pkmer.cn/images/202307292129018.png!pkmer)

> 自动化脚本工具：[Quicker 软件](https://getquicker.net/)

## Quicker 动作一：BookxNote-Obsidian

动作链接：<https://getquicker.net/Sharedaction?code=2bd5ec90-db36-49d4-51b3-08db7dd91f1a>

> 该动作可以把 BookxNote 的标注的文字或者框选的图片摘录到 Obsidian 的 Markdown 或者 Canvas 笔记中。

### 必要设置

- 设置 BookxNote 的快捷键：
  1. 修改 BookxNote 的 `复制摘录原文` 的快捷键为：`Shift + C`；
  2. 修改 BookxNote 的 `复制外部回链` 的快捷键为：`Ctrl + Shift + Q`

![Pasted image 20230726002640](https://cdn.pkmer.cn/images/202307292129704.png!pkmer)

- 修改 Quicker 动作：
  - 右键动作 -> 选择编辑 -> 进去修改界面
  - 摘录的图片的路径需要在**设置里面编辑为存放的路径**

![Pasted image 20230725230533](https://cdn.pkmer.cn/images/202307292129878.png!pkmer)

### 效果演示

![230725 231153](https://cdn.pkmer.cn/images/202307292129662.gif)

## Quicker 动作二：BookxNote-Excalidraw

动作链接：<https://getquicker.net/Sharedaction?code=47fb4258-ba12-4f9f-51b4-08db7dd91f1a>

> 该动作可以把 BookxNote 的标注的文字或者框选的图片摘录到 Excalidraw 画板里面，不过图片的摘录步骤需要鼠标进行两个两个步骤来实现。

### 必要设置

- 设置 BookxNote 的快捷键：
  1. 修改 BookxNote 的 `复制摘录原文` 的快捷键为：`Shift + C`；
  2. 修改 BookxNote 的 `复制外部回链` 的快捷键为：`Ctrl + Shift + Q`

![Pasted image 20230726002640](https://cdn.pkmer.cn/images/202307292129704.png!pkmer)

- 修改 Quicker 动作：
  - 右键动作 -> 选择编辑 -> 进去修改界面
  - 摘录的图片的路径需要在**设置里面编辑为存放的路径**

![Pasted image 20230725234232](https://cdn.pkmer.cn/images/202307292130644.png!pkmer)

### 图片摘录步骤

1. 运行脚本后，图片会在你的剪切板里面，**右下角会显示等待按钮**，我设置的是**鼠标右键**，请在粘贴图片后对图片右击一下；
2. 当在 Excalidraw 画板中选择合适的位置粘贴时，右键单击图片会附上回链链接。

### 效果演示

![230725 235518](https://cdn.pkmer.cn/images/202307292130637.gif)

> [!tip]
> 文字的摘录和 Obsidian 的操作一样，运行脚本时，直接粘贴就行了

## Quicker 动作三：更新 BookxNote 图片

动作链接：<https://getquicker.net/Sharedaction?code=093091c9-b038-4250-51b5-08db7dd91f1a>

> 该动作可以把摘录到 Obsidian 笔记或者 Excalidraw 画板里面图片进行更新

### 必要设置

- 设置 BookxNote 的快捷键：
  1. 修改 BookxNote 的 `复制摘录原文` 的快捷键为：`Shift + C`；
  2. 修改 BookxNote 的 `复制外部回链` 的快捷键为：`Ctrl + Shift + Q`

![Pasted image 20230726002640](https://cdn.pkmer.cn/images/202307292129704.png!pkmer)

- 修改 Quicker 动作：
  - 右键动作 -> 选择编辑 -> 进去修改界面
  - 摘录的图片的路径需要在**设置里面编辑为存放的路径**

![Pasted image 20230726000335](https://cdn.pkmer.cn/images/202307292130652.png!pkmer)

### 图片更新步骤

1. 调整好图片的标注后，要适当的移动一下框选区域来是 BookxNote 更新摘录的图片，此时 Obsidian 笔记图片就更新完了；
2. 在 Excalidraw 画板中用快捷键 `Ctrl + S` 保存一下，图片就会更新。

### 效果演示

![230726 002019](https://cdn.pkmer.cn/images/202307292130461.gif)

> Obsidian 笔记中的图片同步操作步骤一样

## 最后

本文介绍工作流程还是比较繁琐，可能并不太实用，也存在很多问题，这里就掏砖引玉了，但也希望对各位完善各自的工作流有所启发和帮助，完善知识管理的工作流程。
