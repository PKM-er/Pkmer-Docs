---
uid: 2023102611074665
title: Obsidian 插件：【Readme】Execute Python
tags: ['obsidian插件', 'readme']
description: 轻量级的Python代码片段执行器，支持运行时输入。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】Execute Python

> [!Note] 插件名片
> - 插件名称：Execute Python
> - 插件作者：williamechols
> - 插件说明：轻量级的 Python 代码片段执行器，支持运行时输入。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/williamechols/obsidian-execute-python)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?execute-python)

## 概述

轻量级的 Python 代码片段执行器，支持运行时输入。

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/WilliamEchols/obsidian-execute-python/master/README.md)
>

---

## Readme(翻译）

下面是 [[execute-python]] 插件的自述翻译

# Obsidian 的 Python 代码执行器

## obsidian-execute-python

一个轻量级的插件，用于在 [Obsidian](https://obsidian.md/) 笔记中执行嵌入了运行时输入的 Python 代码片段。更详细的示例在末尾提供。

## 特点

- **运行 Python 代码块**：只需在 markdown 代码块中编写 Python 代码，然后在预览模式下点击出现的“开始”按钮。代码块将被执行，并且输出将显示在同一块中。
- **实时 Python 控制台**：每个 Python 代码块都可以作为实时 Python 控制台。您可以在输入框中输入输入，并通过按下“提交输入”按钮或 Enter 键来提交它们。输入将传递给 Python 代码，并显示结果。此过程在代码执行期间发生，允许条件或循环输入。
- **控制显示元素**：您可以选择隐藏代码片段、输入框和退出代码消息。
- **支持不同的 Python 版本**：您可以在设置中指定您的 Python 可执行文件的名称（例如 'python' 或 'python3'）。

## 如何使用

1. 从 Obsidian 社区插件页面安装 obsidian-execute-python。
2. 在 Obsidian 设置中启用插件。
3. 打开或创建一个笔记，并编写一个 Python 代码块。Python 代码块是指在一对三个反引号之间的任何文本，第一对之后带有 'python' 一词，如下所示：

````markdown
```python
print("Hello, World!")
```
````

1. 点击“开始”以运行关联代码块中的 Python 代码。
2. 您的代码的输出将显示在同一代码块中。如果您的代码需要输入，请在提示时在输入框中输入并按下“提交输入”或 Enter 键。
3. 通过再次点击“开始”按钮可以重新运行代码片段。要清除输出和输入字段，请单击“重置”按钮。
4. 要修改插件的设置，请导航到 Obsidian 设置中插件的设置选项卡。设置选项如下所示。

## 设置

您可以在 Obsidian 设置选项卡中修改以下设置：

- **Python 可执行文件名称**：指定您的 Python 可执行文件的名称。通常为 'python' 或 'python3'。
- **在预览中显示 Python 代码**：切换是否在 Markdown 预览中显示或隐藏 Python 代码。
- **显示 Python 退出代码**：切换是否在运行 Python 代码后显示退出代码消息。
- **显示输入框**：可以使用代码块中的“＃noinput”注释来设置每个块的显示输入框。

## 注意事项

- **小心任意代码执行，并且不要执行你不熟悉的任何代码**
- 该插件为每个代码块创建一个新的 Python 进程。对于运行时间长或资源密集型的代码，请小心，因为它可能会影响 Obsidian 的性能。
- 确保 Python 可执行文件在系统的 PATH 中。插件使用在设置中指定的 Python 可执行文件的名称来查找和运行 Python。
- '#noinput' 指令可以包含在你的 Python 代码块中，以隐藏该特定代码块的输入框和“提交输入”按钮。'#noinput' 指令不会在 markdown 预览中显示。例如：

````markdown
```python
#noinput
x = 1
print(x+1)
```
````

更多例子

### 使用 \#noinput 的打印示例

````markdown
```python
#noinput
print("Hello, World!")
print("Line 2")
```
````

### 基本变量

````markdown
```python
#noinput
x = 2
print(x + 1)
print(x)
```
````

## 多个输入并在其间更新

````markdown
```python
name = input("name: ")
print("\nentered name")
color = input("color: ")
print(f"\n{name} likes the color {color}")
```
````

## 循环输入

````markdown
```python
num_over_10 = 0
while (num_over_10 <= 10):
	num_over_10 = int(input("输入数字：\n"))
print(f"{num_over_10} > 10")
```
````

## 变量是块级作用域的（这将导致错误）

````markdown
```python
#noinput
print(x)
```
````