---
uid: 2023080322252475
title: Obsidian 插件：【Readme】Quickly
tags: ['obsidian插件', 'readme']
description: 通过操作系统的快捷键快速导航和创建笔记。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Quickly

> [!Note] 插件名片
> - 插件名称：Quickly
> - 插件作者：Sparsh Yadav
> - 插件说明：通过操作系统的快捷键快速导航和创建笔记。
> - 插件分类：['obsidian插件', 'readme']
> - 项目地址：[点我访问](https://github.com/tmfelwu/obsidian-inbox)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?quickly)

## 概述

通过操作系统的快捷键快速导航和创建笔记。

![Quickly](https://cdn.pkmer.cn/covers/quickly.png!pkmer)

> [!tip] 原文出处
> 
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/tmfelwu/obsidian-inbox/master/README.md)
> 

---

## Readme(翻译）

下面是 [[quickly]] 插件的自述翻译


任何功能请求/改进建议请在此处打开：[https://github.com/tmfelwu/obsidian-inbox/issues](https://github.com/tmfelwu/obsidian-inbox/issues)。
https://github.com/tmfelwu/obsidian-inbox/issues
# 演示

快捷键启动此模态框。

![演示](./demo.png)

# 使用逻辑

- [x] 使用快捷键将触发插件。
- [x] 一个模态框将打开，包含“笔记标题”、“笔记内容”和“提交按钮”。
- [ ] 当用户输入时，数据列表将显示与Vault中的“笔记路径”相关的内容。
- [x] 导航
  - [x] 如果数据列表长度大于0且用户按下“Enter”键，则将导航到当前数据列表中的第一项。
  - [x] 另一种方法是使用上下箭头键并按下“Enter”键。
- 创建新笔记
  - 如果内容为空且不存在同名的笔记
    - [x] 创建新笔记
  - 如果内容存在。
    - [ ] 如果存在同名的笔记，则显示错误提示。
    - [ ] 如果不存在同名的笔记，则创建带有内容的笔记。
- 创建新笔记
  - 按下“Ctrl+Enter”或
  - 在底部按下“提交”按钮。

# 设置操作系统关联快捷键

**使用外部工具设置全局热键：**

**对于Windows：**

您可以使用AutoHotkey等工具来设置全局热键。按照以下步骤操作：

1. 从https://www.autohotkey.com/安装AutoHotkey。
2. 创建一个带有扩展名`.ahk`的新文本文件，例如`ObsidianQuickCapture.ahk`。
3. 将以下脚本添加到文件中（将`^!c`替换为您喜欢的热键组合，例如`^!c`代表Ctrl + Alt + C）：

```autohotkey
^!c::
Run, obsidian://quick-capture
return
```

4. 双击`.ahk`文件运行脚本。全局热键现在应该已经生效。

**对于macOS：**

您可以使用BetterTouchTool或Keyboard Maestro等工具来设置全局热键。以下是使用BetterTouchTool的方法：

1. 从https://folivora.ai/安装BetterTouchTool。
2. 打开BetterTouchTool并转到“所有应用程序”部分。
3. 点击“+”按钮添加一个新的全局快捷键。
4. 按下所需的热键组合。
5. 在“触发预定义操作”下拉菜单中，选择“控制其他应用程序”>“打开URL / 使用选择打开URL”。
6. 输入自定义URL `obsidian://quick-capture`，然后点击“保存”。

现在，全局热键应该已经生效，并且可以在操作系统的任何地方触发插件命令。

**对于Ubuntu：**
在Ubuntu 22.04上，您可以使用内置的键盘快捷键设置来设置全局热键以触发Obsidian插件命令。

1. 打开“设置”应用程序。
2. 在左侧边栏中点击“键盘和鼠标”。
3. 点击“自定义快捷键”按钮。
4. 滚动到“自定义快捷键”部分，然后点击“+”按钮添加一个新的快捷键。
5. 在“添加自定义快捷键”对话框中，输入以下信息：

   - 名称：`Obsidian Quick Capture`
   - 命令：`xdg-open "obsidian://quick-capture"`

6. 点击“添加”按钮创建自定义快捷键。
7. 在列表中新快捷键旁边的“禁用”文本上点击。按下所需的热键组合（例如Ctrl + Alt + C）。
8. 关闭设置应用程序。

现在，全局热键应该已经生效，并且可以在操作系统的任何地方触发插件命令。

Naman - https://chat.openai.com/c/3021e291-47a7-44b0-a0f6-7cc4ad58ba67



