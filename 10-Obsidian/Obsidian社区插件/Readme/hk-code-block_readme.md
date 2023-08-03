---
uid: 2023080322194722
title: Obsidian 插件：【Readme】HK Code Block
tags: ['obsidian插件', 'readme']
description: 由Heekang Park开发的Obsidian插件；使代码块在阅读视图中看起来更好。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：HK Code Block

> [!Note] 插件名片
> - 插件名称：HK Code Block
> - 插件作者：Heekang Park
> - 插件说明：由Heekang Park开发的Obsidian插件；使代码块在阅读视图中看起来更好。
> - 插件分类：['obsidian插件', 'readme']
> - 项目地址：[点我访问](https://github.com/HeekangPark/obsidian-hk-code-block)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?hk-code-block)

## 概述

由Heekang Park开发的Obsidian插件；使代码块在阅读视图中看起来更好。

![HK Code Block](https://cdn.pkmer.cn/covers/hk-code-block.png!pkmer)

> [!tip] 原文出处
> 
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/HeekangPark/obsidian-hk-code-block/master/README.md)
> 

---

## Readme(翻译）

下面是 [[hk-code-block]] 插件的自述翻译


# HK 代码块

[Obsidian](https://obsidian.md) 插件由 Heekang Park 开发

[ English | [한국어](https://github.com/HeekangPark/obsidian-hk-code-block/blob/master/README_ko.md) ]

使用 HK CodeBlock，您可以为代码块添加各种功能。

灵感来自 [Prism.js](https://prismjs.com/) 的插件，[Better Code Block](https://github.com/stargrey/obsidian-better-codeblock)，[Code Block Enhancer](https://github.com/nyable/obsidian-code-block-enhancer)。

## 特点

### 标题

您可以像这样为代码块添加标题。

    ```python title:"代码块的标题"
    print("Hello world")
    ```

![title](https://github.com/HeekangPark/obsidian-hk-code-block/raw/master/imgs/title.png)

您必须将标题放在引号中。您可以使用单引号和双引号。

### 折叠

您必须使用标题功能才能使用折叠功能。您可以像这样折叠代码块。

    ```python title:"代码块的标题" collapse
    print("Hello world")
    ```

或者像这样。

    ```python title:"代码块的标题" collapse:true
    print("Hello world")
    ```

![collapsible1](https://github.com/HeekangPark/obsidian-hk-code-block/raw/master/imgs/collapsible1.png)

![collapsible2](https://github.com/HeekangPark/obsidian-hk-code-block/raw/master/imgs/collapsible2.png)

如果您想明确展开代码块，可以像这样操作。

    ```python title:"代码块的标题" collapse:false
    print("Hello world")
    ```

### 行号

您可以像这样为代码块添加行号。

    ```python linenos
    print("Hello world")
    ```

或者像这样。

    ```python linenos:true
    print("Hello world")
    ```

![linenos1](https://github.com/HeekangPark/obsidian-hk-code-block/raw/master/imgs/linenos1.png)

如果您不指定任何选项，行号将从设置中设置的值开始（默认为1）。如果您希望行号从特定值开始，可以像这样设置。

    ```python linenos:10
    print("Hello world")
    ```

![linenos2](https://github.com/HeekangPark/obsidian-hk-code-block/raw/master/imgs/linenos2.png)

您还可以使用负值。

    ```python linenos:-10
    print("Hello world")
    ```

![linenos3](https://github.com/HeekangPark/obsidian-hk-code-block/raw/master/imgs/linenos3.png)

如果您想明确隐藏行号，可以像这样设置。

    ```python linenos:false
    print("Hello world")
    ```

### 行高亮

您可以使用逗号来突出显示代码块中的特定行，如下所示。

    ```python highlight:"2-4,8,10"
    print("line 1")
    print("line 2")
    print("line 3")
    print("line 4")
    print("line 5")
    print("line 6")
    print("line 7")
    print("line 8")
    print("line 9")
    print("line 10")
    print("line 11")
    ```

![highlight1](https://github.com/HeekangPark/obsidian-hk-code-block/raw/master/imgs/highlight1.png)

您必须将行号放在引号中。您可以使用单引号和双引号。您还可以使用破折号来指定一系列行号。

如果您使用行号功能并设置行号不从1开始，您必须根据该行号输入要突出显示的行号。

    ```python linenos:10 highlight:"10,11"
    print("Hello world")
    print("I love you")
    print("Wow")
    ```

![highlight2](https://github.com/HeekangPark/obsidian-hk-code-block/raw/master/imgs/highlight2.png)

### 语言指示器

您可以像这样将语言指示器添加到代码块中。

    ```python language
    print("Hello world")
    ```

或者像这样。

    ```python language:true
    print("Hello world")
    ```

![language1](https://github.com/HeekangPark/obsidian-hk-code-block/raw/master/imgs/language1.png)

默认情况下，显示的语言遵循代码块的语言，但如果您希望，可以明确指定它。在这种情况下，您可以在保持代码块语言的语法高亮的同时更改显示的语言。

    ```python language:"javascript"
    print("Hello world")
    ```

![language2](https://github.com/HeekangPark/obsidian-hk-code-block/raw/master/imgs/language2.png)

您必须将语言放在引号中。您可以使用单引号和双引号。

如果既没有指定代码块的语言，也没有指定语言选项指定的语言，则显示的语言是设置中设置的值（默认值为"plain text"）。

如果您想明确隐藏语言指示器，可以这样做。

    ```python language:false
    print("Hello world")
    ```

### 复制按钮

您可以像这样向代码块添加一个复制按钮。

    ```python copybtn
    print("Hello world")
    ```

或者像这样。

    ```python copybtn:true
    print("Hello world")
    ```

![copybtn](https://github.com/HeekangPark/obsidian-hk-code-block/raw/master/imgs/copybtn.png)

如果您想明确隐藏复制按钮，可以像这样操作。

    ```python copybtn:false
    print("Hello world")
    ```

您可以像这样在代码块中添加提示。

```bash prompt
mkdir test
```

或者像这样。

```bash prompt:true
mkdir test
```

![prompt1](https://github.com/HeekangPark/obsidian-hk-code-block/raw/master/imgs/prompt1.png)

如果您不指定任何选项，提示将是设置中设置的值（默认为"$"）。如果您想使用另一个提示，可以这样做。

```bash prompt:"#"
mkdir test
```

![prompt2](https://github.com/HeekangPark/obsidian-hk-code-block/raw/master/imgs/prompt2.png)

您必须将提示放在引号中。您可以使用单引号和双引号。

如果行末尾有一个"\"字符，提示将不会显示在下一行。

```bash prompt
docker run -it \
    ubuntu:latest
```

![prompt3](https://github.com/HeekangPark/obsidian-hk-code-block/raw/master/imgs/prompt3.png)

如果您想明确隐藏提示，可以这样做。

```bash prompt:false
mkdir test
```

### 结果

您可以像这样向代码块添加结果。

    ```python
    print("Hello world!")
    ```

    ```result
    Hello world!
    ```

![result1](https://github.com/HeekangPark/obsidian-hk-code-block/raw/master/imgs/result1.png)

请注意，结果代码块必须紧接在其所属的代码块之后。您不能在它们之间放置任何其他组件。

还请注意，结果代码块不是动态生成的。结果代码块只是简单的纯文本代码块。您必须手动输入结果。

您可以在结果代码块中使用行号、行高亮等功能。即使您指定了其他功能，它们也会被忽略。

    ```python
    print("Hello world!")
    ```

    ```result linenos
    Hello world!
    ```

    ```result highlight:"1"
    Hello world!
    ```

![result2](https://github.com/HeekangPark/obsidian-hk-code-block/raw/master/imgs/result2.png)

结果代码块的提示默认情况下是在设置中设置的值（默认为"Result"）。如果您想使用其他提示，可以像这样设置。

    ```python
    import random
    print(random.randint(1, 100))
    ```

    ```result prompt:"Result (may be different depending on your environment)"
    42
    ```

![result3](https://github.com/HeekangPark/obsidian-hk-code-block/raw/master/imgs/result3.png)

## 设置

您可以在设置中更改HK代码块的每个功能的默认设置。

### 标题

- 使用标题
  - 默认关闭，但在指定时打开：只有在指定标题语句时才会显示标题
  - 总是关闭：永远不会显示标题

### 折叠

- 使用折叠
  - 始终开启：代码块始终可折叠
  - 默认开启，但在指定时关闭：代码块始终可折叠，但如果指定折叠语句为false，则不会折叠
  - 默认关闭，但在指定时开启：只有在指定折叠语句为true时，代码块才可折叠
  - 始终关闭：代码块永远不可折叠
- 默认折叠状态：代码块的默认折叠状态

### 行号

- 使用行号
  - 始终显示：行号将始终显示
  - 默认显示，但在指定时关闭：行号将始终显示，但如果指定了linenos语句为false，则不会显示
  - 默认关闭，但在指定时打开：只有在指定linenos语句为true时才会显示行号
  - 始终关闭：行号将永远不会显示
- 默认行号起始值：代码块的默认行号起始值（默认值：1）
- 显示行号分隔符：是否显示行号分隔符（默认值：true）

### 行高亮

- 使用行高亮
  - 默认关闭，但在指定时打开：只有在指定了行高亮语句时才会显示行高亮
  - 总是关闭：永远不会显示行高亮
- 行高亮颜色：高亮行的背景颜色。请注意，给定的颜色将以0.2的不透明度应用。（默认值：#ff0000）

### 语言指示器

- 使用语言指示器
  - 始终显示：语言指示器将始终显示
  - 默认显示，但在指定时关闭：语言指示器将始终显示，但如果语言指示器语句指定为false，则不会显示
  - 默认关闭，但在指定时打开：只有在语言指示器语句指定为true时才会显示语言指示器
  - 始终关闭：语言指示器将永远不会显示
- 默认语言：如果未指定语言，则代码块的默认语言名称（默认值为“纯文本”）

### 复制按钮

- 使用复制按钮
  - 始终显示：复制按钮将始终显示
  - 默认开启，但在指定时关闭：复制按钮将始终显示，但如果复制按钮语句指定为false，则不会显示
  - 默认关闭，但在指定时开启：只有在复制按钮语句指定为true时，才会显示复制按钮
  - 始终关闭：复制按钮将永远不会显示

- 使用提示
  - 始终开启：对于在“提示语言”选项中指定的语言，提示将始终显示。
  - 默认开启，但在指定时关闭：对于在“提示语言”选项中指定的语言，提示将始终显示，但如果指定的提示语句为false，则不会显示。
  - 默认关闭，但在指定时开启：仅当指定的提示语句为true时，才会显示提示。
  - 始终关闭：永远不会显示提示。
- 提示语言：默认情况下将提示的语言。您可以通过换行符分隔它们来指定多种语言。（默认值：“bash”）
- 默认提示：代码块的默认提示。（默认值：“$”）

### 结果

- 使用结果
  - enable : 使用结果功能
  - disable : 不使用结果功能
- 默认结果提示：结果代码块的默认提示。（默认值："Result"）

### 开发者

- 调试模式
  - true：启用调试模式。日志消息将显示在控制台中。
  - false：禁用调试模式。

MIT许可证

已知问题

- 根据您使用的主题，某些功能可能无法正常工作。
  - 目前在2023年2月，我检查到以下主题可以正常工作。
    - 默认主题
    - [Minimal主题](https://github.com/kepano/obsidian-minimal)
    - [Obsidian Nord](https://github.com/insanum/obsidian_nord)
    - [Sanctum](https://github.com/jdanielmourao/obsidian-sanctum)
    - [Shimmering Focus](https://github.com/chrisgrieser/shimmering-focus)
    - [Wasp](https://github.com/santiyounger/Wasp-Obsidian-Theme)
    - [Typewriter](https://github.com/crashmoney/obsidian-typewriter)
    - [Red Graphite](https://github.com/seanwcom/Red-Graphite-for-Obsidian)
  - 大多数主题问题是由于主题CSS中使用了`!important`关键字引起的。HK Code Block在其CSS中根本不使用`!important`关键字，以避免与其他主题或插件发生冲突。如果您想要在这些主题中使用HK Code Block插件，您应该修改主题CSS文件，或者通过使用`!important`关键字，明确提高HK Code Block CSS规则的优先级。

如果您发现任何错误或有任何功能请求，请在GitHub Issues上报告它们。谢谢！

## 更新日志

版本控制遵循以下规则。

- 版本 x.y.z
  - x：当进行重大更改时增加（例如逻辑变更等）
  - y：当新增或更改功能时增加
  - z：当进行错误修复时增加

### 0.1.0

- 初始版本

### 0.2.0

- 添加功能
  - 添加折叠功能

### 0.2.1

- Bug修复
  - 修复了多行代码块始终显示水平滚动条的问题

### 0.3.0

- Bug修复
  - 修复了在其他元素（例如li）内部的代码块无法正确渲染的问题
- 新增功能
  - 现在您可以在高亮语句中使用“-”符号，以便轻松地突出显示多行连续的内容。

### 0.3.1

- Bug修复
  - 修复了在其他元素（例如li）内部的连续代码块的标题无法正确渲染的问题
  - 修复了当代码块位于其他元素（例如li）内部时，在代码块末尾插入额外空行的问题

### 0.3.2

- Bug修复
  - 为代码块添加一些margin-top

### 0.4.0

- 遵循拉取请求指南的评论
  - 将“使用结果”设置从下拉菜单更改为切换
  - 删除`as`语句
- 等等
  - 重命名文件名

### 0.4.1

- CSS更新
  - 使CSS更加明确



