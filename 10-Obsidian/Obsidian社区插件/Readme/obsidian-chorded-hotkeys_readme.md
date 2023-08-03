---
uid: 20230803212114
title: Obsidian 插件：【Readme】Chorded Hotkeys
tags: ['obsidian插件', 'readme']
description: 同时按下多个字母可以触发文本插入、模板插入或命令执行。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Chorded Hotkeys

> [!Note] 插件名片
> - 插件名称：Chorded Hotkeys
> - 插件作者：Trey Connor Meyers
> - 插件说明：同时按下多个字母可以触发文本插入、模板插入或命令执行。
> - 插件分类：['obsidian插件', 'readme']
> - 项目地址：[点我访问](https://github.com/ConnorMeyers/obsidian-chorded-hotkeys)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsidian-chorded-hotkeys)

## 概述

同时按下多个字母可以触发文本插入、模板插入或命令执行。



> [!tip] 原文出处
> 
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/ConnorMeyers/obsidian-chorded-hotkeys/master/README.md)
> 

---

## Readme(翻译）

下面是 [[obsidian-chorded-hotkeys]] 插件的自述翻译



# Obsidian和弦热键
使用🎵和弦🎵来触发文本插入、模板插入或命令执行。
和弦是同时按下的一组按键，顺序无关紧要！

## 警告
Chorded Hotkeys通过文本替换工作，建议您在安装此插件之前备份您的保险库。

用例
使用和弦热键的好处是，它可以让您快速轻松地触发操作，而无需使用修饰键（ctrl、alt、shift等）。和弦的使用速度快，因为按键的顺序并不重要，您只需同时按下一组键，然后就可以触发一个和弦。

如果您经常使用特定命令、频繁包含模板或重复文本模式，您可能会发现这个插件很有帮助。

## 创建你的第一个和弦
1. 安装完成后，进入和弦热键设置选项卡。
2. 点击“添加新的和弦”，默认为“文本”和弦，用于简单的文本插入。
3. 第一个字段是和弦触发器，即执行和弦所需按下的一组按键，这些按键必须同时按下才能触发和弦。因此，请保持简短，最好使用两到四个字母。现在，在第一个框中输入“hew”。
4. 第二个字段是和弦的值，根据和弦类型的不同，它会被处理得不同。对于文本和弦，它是要插入的文本。输入“Hello World”。
5. 就这样！你的第一个和弦已经完成。要试用它：关闭设置，进入一个文件，同时按下三个字母“hew”。

## 和弦类型
当前的和弦类型有：
1. **文本：** 插入文本。
2. **命令：** 运行一个命令。
3. **文件：** 粘贴文件的内容。
4. **模板：**（需要[Templater](https://github.com/SilentVoid13/Templater)）粘贴模板的内容。在功能上等同于文件和弦，但还会评估模板。

*备注*：由于按键的顺序无关紧要，'hew'、'hwe'、'ehw'等和弦触发器都被视为重复。每个和弦必须有一个唯一的触发器。

## 标签
标签是添加到和弦中以增强其效果的特殊元素。
目前只有一个标签，即光标标签。在文本和弦的值字段中添加“{c}”将在激活时将光标移动到该位置。

https://user-images.githubusercontent.com/14039575/199102931-e87a107d-202f-42e9-8247-10f9b4d6f397.mp4

## 路线图
- [ ] 将和弦输入方式改为设置热键而不是手动输入。
- [ ] 改进设置中重复按键的展示方式。
- [ ] 在设置中添加错误展示，用于无效的和弦值（例如不存在的文件）。
- [ ] 支持事件按键（ctrl、shift、alt等）。
- [ ] 支持在Markdown编辑器之外使用命令模板。
- [ ] 支持vim模式。



