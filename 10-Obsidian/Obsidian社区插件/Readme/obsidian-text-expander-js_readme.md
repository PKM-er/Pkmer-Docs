---
uid: 2023080322203828
title: Obsidian 插件：【Readme】Inline Scripts
tags: ['obsidian插件', 'readme']
description: 输入文本快捷键，然后用JavaScript生成的文本替换它们。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Inline Scripts

> [!Note] 插件名片
> - 插件名称：Inline Scripts
> - 插件作者：Jonathan Heard
> - 插件说明：输入文本快捷键，然后用JavaScript生成的文本替换它们。
> - 插件分类：['obsidian插件', 'readme']
> - 项目地址：[点我访问](https://github.com/jon-heard/obsidian-inline-scripts)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsidian-text-expander-js)

## 概述

输入文本快捷键，然后用JavaScript生成的文本替换它们。

![Inline Scripts](https://cdn.pkmer.cn/covers/obsidian-text-expander-js.gif!pkmer)

> [!tip] 原文出处
> 
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/jon-heard/obsidian-inline-scripts/main/README.md)
> 

---

## Readme(翻译）

下面是 [[obsidian-text-expander-js]] 插件的自述翻译


# Obsidian插件 - 内联脚本（公测版）
![演示动画](readmeMedia/demo.gif)

***

这个Obsidian插件允许用户输入文本快捷方式，每个快捷方式都会触发一个脚本（JS）。脚本生成的文本将替换输入的快捷方式。

该插件适用于所有平台，包括移动设备。它适用于新版和旧版编辑器（CM6和CM5）。

该插件目前处于__公测版__。

***

## 目录
- 通用
    - [概述](#overview)
    - [参考：设置](#reference-settings)
    - [用户支持、错误报告、反馈、捐赠等](#user-support-bugs-feedback-donations-etc)
- 教程：基础 &nbsp; _(建议按顺序阅读)_
    1. [设置插件并尝试使用](#tutorial-setup-the-plugin-and-try-it-out)
    2. [创建新的快捷方式](#tutorial-create-a-new-shortcut)
    3. [将现有的快捷方式文件添加到存储库](#tutorial-add-existing-shortcut-files-to-a-vault)
    4. [创建新的快捷方式文件](#tutorial-create-a-new-shortcut-file)
- 教程：额外功能
    - [使用按钮面板运行快捷方式](#tutorial-use-the-buttons-panel-to-run-shortcuts)
    - [在笔记中添加链接以运行快捷方式](#tutorial-add-links-to-a-note-to-run-shortcuts)
- 快捷方式编写主题
    - 有用的工具和功能
        - [控制台](#development-aid-the-console)
        - [调试语句](#development-aid-the-debugger-statement)
        - [围栏代码块](#development-aid-fenced-code-blocks)
        - [删除内联脚本的输入块](#development-aid-removing-inline-scripts-input-block)
        - [辅助函数](#development-aid-helper-functions)
    - 高级快捷方式编写
        - [将常见扩展格式添加到您的快捷方式（可选）](#advanced-shortcuts-adding-the-common-expansion-format-to-your-shortcuts-optional)
        - [print() 函数](#advanced-shortcuts-the-print-function)
        - [运行外部应用程序和脚本](#advanced-shortcuts-running-external-applications-and-scripts)
        - [语法字符串和正则表达式模式](#advanced-shortcuts-syntax-strings-and-regex-patterns)
        - [从快捷方式调用快捷方式](#advanced-shortcuts-calling-shortcuts-from-shortcuts)
        - [各种有用的函数](#advanced-shortcuts-various-useful-functions)
        - [辅助脚本](#advanced-shortcuts-helper-scripts)
        - [设置和关闭脚本](#advanced-shortcuts-setup-and-shutdown-scripts)
        - [用户信息的弹出框](#advanced-shortcuts-popup-boxes-for-user-info)
        - [创建自定义弹出框](#advanced-shortcuts-creating-custom-popup-boxes)
        - [获取当前扩展的信息](#advanced-shortcuts-getting-info-about-the-current-expansion)
        - [async 和 await](#advanced-shortcuts-async-and-await)
        - [使用自定义 CSS](#advanced-shortcuts-using-custom-css)
        - [隐藏快捷方式](#advanced-shortcuts-hiding-shortcuts)
        - [插件事件](#advanced-shortcuts-plugin-events)
- 技术性内容
    - [致谢](#credits)
    - [发布说明](#release-notes)
    - [待办事项](#todo)

***

## 概述

__Inline Scripts__ 插件通过JavaScript生成的“展开”文本替换输入的快捷方式，例如：
- 输入 `;;date::` 可以将文本替换为 `6/7/2022`
- 输入 `;;name male european::` 可以将文本替换为 `Bill Harrington`

第二个示例展示了快捷方式文本可以包含影响结果展开文本的参数文本（`male european`）。

可以在设置中定义快捷方式。__Inline Scripts__ 默认提供了一些示例快捷方式。详见教程“[设置插件并尝试](#tutorial-setup-the-plugin-and-try-it-out)”和“[创建新的快捷方式](#tutorial-create-a-new-shortcut)”。

快捷方式也可以在快捷方式文件中定义，以便作为笔记添加到存储库中。这需要更多的工作，但可以更好地组织和共享快捷方式。用户可以将预先编写的快捷方式文件下载到他们的存储库中，或者自己编写。详见教程“[将现有的快捷方式文件添加到存储库](#tutorial-add-existing-shortcut-files-to-a-vault)”和“[创建新的快捷方式文件](#tutorial-create-a-new-shortcut-file)”。

最后，__Inline Scripts__ 提供了多种触发快捷方式的方式，不仅限于直接在笔记中输入。这包括一个面板，可以添加按钮来触发快捷方式。它还包括在笔记中编写链接，每次点击时都会触发一个快捷方式。详见教程“[使用按钮面板运行快捷方式](#tutorial-use-the-buttons-panel-to-run-shortcuts)”和“[在笔记中添加链接来运行快捷方式](#tutorial-add-links-to-a-note-to-run-shortcuts)”。

## 参考：设置
- __打开按钮视图__ - 单击此按钮，将在Obsidian界面的右侧边栏中添加“按钮面板”。
- __快捷方式文件__ - 包含快捷方式文件的笔记的地址列表（文件夹路径和文件名）。
    - “添加快捷方式文件”按钮会为快捷方式文件地址添加一个新条目。
    - “导入完整库”按钮会下载并设置整个__Inline Scripts__快捷方式文件库到您的vault中。您可以重新导入以将您的vault库更新到最新版本。
    - 在每个快捷方式文件条目的左侧是一个切换按钮。关闭此按钮会导致__Inline Scripts__忽略该快捷方式文件条目。这与从列表中删除条目具有相同的效果。
    - 在每个快捷方式文件条目的右侧是一组按钮。
        - 上下按钮可让您将快捷方式文件条目上下移动。
        - 垃圾桶按钮可让您删除快捷方式文件条目。
- __快捷方式__ - 快捷方式列表，每个快捷方式包含三个字符串：测试、展开和关于。您可以直接将个别快捷方式添加到此列表中，以避免使用快捷方式文件。
    - “添加快捷方式”按钮会在快捷方式设置底部添加一个空白的快捷方式条目。
    - “添加默认值”按钮会将所有默认快捷方式添加到快捷方式设置中。
    - 在每个快捷方式条目的右侧是一组按钮。
        - 上下按钮可让您将快捷方式条目上下移动。
        - 垃圾桶按钮可让您删除快捷方式条目。
- __快捷方式格式 - 前缀和后缀__ - 这些设置允许您定义启动和结束快捷方式时要键入的内容。它们默认为`;;`和`::`。
    - 前缀和后缀都必须定义。如果没有定义，则在离开__Inline Scripts__插件选项时会恢复为默认值。
    - 后缀字符串不能包含前缀字符串（例如前缀=`;`，后缀=`-;.`）。如果包含，则在离开__Inline Scripts__插件选项时这些设置将恢复为默认值。
    - 前缀和后缀不能包含触发Obsidian自动关闭功能的任何字符。这包括`"`和`[`等字符。
    - 如果前缀和后缀输入中有任何错误，将在前缀和后缀文本框上方显示一个红色框中的错误消息。
- __常见展开格式 - 前缀、行前缀和后缀__ - 这些设置允许您定义“常见展开格式”，许多快捷方式都遵循此格式。
    - 有关更多信息，请参见[将常见展开格式添加到您的快捷方式（可选）](#高级快捷方式-将常见展开格式添加到您的快捷方式-可选)。
- __自动完成__ - 打开后，在键入快捷方式时，将在光标旁边显示可能的快捷方式列表。
- __自动完成帮助弹出窗口__ - 打开后，自动完成弹出窗口旁边会显示所选快捷方式的关于帮助文本面板。
- __开发者模式__ - 打开后，每当您离开快捷方式文件笔记（选择其他笔记或关闭快捷方式文件笔记）时，所有快捷方式都将重新加载。这会稍微延迟，但可以让您更快地开发快捷方式文件。
- __允许外部__ - 打开后，快捷方式可以运行shell命令。这是一种强大的功能，恶意编写的快捷方式可能会滥用它来对您的计算机造成严重损害。在打开此功能之前，请确保您信任您的快捷方式。
- __恢复默认值__ - 按下此按钮将把__Inline Script__插件的所有设置更改为初始值。

用户支持、错误报告、反馈、捐赠等等。
如果您...
- 需要帮助使用这个插件
- 有错误或问题要报告
- 想分享一个快捷文件或特别有用的快捷方式
- 想提供反馈

...请访问[讨论页面](https://github.com/jon-heard/obsidian-inline-scripts/discussions)。

### 捐赠
如果您觉得这个插件有用，那么捐赠可以让我知道我应该继续努力使其变得更好。

<a href='https://paypal.me/jonheard99?country.x=US&locale.x=en_US'>

![paypal](readmeMedia/paypal.svg) 

</a>

***
***

教程：设置插件并尝试使用它

### 设置插件
1. 打开你想要安装__Inline Scripts__插件的保险库。如果你还没有准备好的保险库，请现在创建一个。
2. 打开社区插件设置。
    1. 点击Obsidian窗口左下角的设置按钮（看起来像一个齿轮）。
    2. 在左侧菜单中点击`Community plugins`（在`Options`部分的底部）。
    3. 如果需要，打开社区插件（即关闭“限制模式”）。
3. 浏览社区插件，找到__Inline Scripts__并选择它。
    1. 点击`Community plugins`右侧的`Browse`按钮。
    2. 在弹出的面板中，点击左上角的搜索文本框并输入“inline scripts”。
    3. 在搜索文本框下方的列表中点击“Inline Scripts”。
4. 安装并启用__Inline Scripts__
    1. 菜单右侧显示了关于__Inline Scripts__的信息。这包括顶部附近的一组按钮。
    2. 如果其中一个按钮是“Install”，则点击该按钮并等待它消失。
    3. 如果其中一个按钮是“Enable”，则点击该按钮并等待它消失。
    4. 点击弹出面板外部的黑色区域关闭弹出面板。重复此操作，直到回到查看笔记的界面。

### 尝试插件
1. 打开一个笔记来尝试插件。
2. 在笔记中输入 `;;hi::`。注意，一旦你输入完毕，快捷方式就会展开为“你好！你好吗？”。
3. 在笔记中输入 `;;d100::`。注意，一旦你输入完毕，快捷方式就会展开为一个掷骰结果。
4. 重复第3步。注意，掷骰结果可能会不同。如果结果_不_不同，则你很幸运。请再试一次第3步。

### 默认快捷方式示例
__Inline Scripts__ 默认定义了以下示例快捷方式：
- hi
- date
- time
- datetime
- d{max} - 骰子掷骰。
    - 示例 - d3, d20, d57, d999
- {count}d{max}{add} - 与d{max}相同，但可选的{count}和{add}。
    - 示例 - d100, 3d20, d10+5, 3d6+6

### 帮助快捷方式
__Inline Scripts__有一个收集了所有当前加载的“帮助”快捷方式的集合。快捷方式`help`是一个很好的起点。它显示了“帮助”快捷方式的列表和摘要。

***
***

教程：创建一个新的快捷方式

### 快捷方式组件
每个快捷方式由三个字符串定义。
- __测试字符串__ - 这是一个正则表达式。它用于确定某个模式是否存在于另一个字符串中。这个测试字符串是用来确定用户输入的快捷方式文本是否与 _此_ 快捷方式匹配的正则表达式。
- __展开字符串__ - 这是JavaScript代码。它用于定义这个快捷方式展开成什么。如果用户输入了一个快捷方式，并且被测试字符串接受，那么展开字符串的JavaScript代码将被执行，并且结果将替换用户输入的快捷方式文本。
- __关于字符串__ - 这是格式化的散文，用于描述这个快捷方式的语法、展开和目的。它以快捷方式的语法开始，然后是一个破折号，然后是对快捷方式的描述。__关于字符串可以安全地留空__。

| Id | 测试字符串 | 展开字符串 | 关于字符串 |
| -- | ----------- | ---------------- | ------------ |
|  1 | hi | return&nbsp;"Hello!&nbsp;How&nbsp;are&nbsp;you?"; | hi - 展开为"Hello! How are you?"。一个简单的快捷方式，用于检查是否运行了Inline Scripts插件。 |
|  2 | ^date$ | return&nbsp;new&nbsp;Date().toLocaleDateString(); | 展开为当前的本地日期。 |
|  3 | <nobr>^age ([0-9]+)$</nobr> | return&nbsp;"I&nbsp;am&nbsp;"&nbsp;+&nbsp;$1&nbsp;+&nbsp;"&nbsp;years&nbsp;old."; | age {how old: >=0} - 展开为"I am {how old} years old"。{how old}可以是任何正整数。这是一个为本文档编写的演示快捷方式。 |

#### 快捷方式 #1 - hi (基本)
在最基本的情况下，一个测试字符串可以只是快捷方式本身。在这个例子中，当用户输入`;;hi::`时，将触发该快捷方式。一旦触发，将运行扩展字符串的javascript。在这个例子中，javascript生成字符串"Hello! How are you?"。用户输入的快捷方式(`;;hi::`)将被替换为`Hello! How are you?`。

请注意关于字符串的格式。它包含语法`hi`，一个破折号，然后是描述：快捷方式的扩展和目的。

#### 快捷方式 #2 - date (中级)
这个快捷方式稍微复杂一些。测试字符串包含符号`^`和`$`。这些是正则表达式的标记，用于确保该快捷方式不会用于像"mydate"和"datetomorrow"这样的文本，只能用于"date"。我建议在所有的测试字符串中都使用`^`和`$`，除非有充分的理由不这样做。扩展字符串也不太明显，但只是一种获取当前日期的JavaScript方法。这个示例快捷方式的结果是：如果用户输入`;;date::`，它将被替换为当前日期。

这个快捷方式的关于字符串中不包含语法或目的，只有扩展部分。目的是明显的，因此被省略了。如果省略语法，则默认为测试字符串。对于这个快捷方式，关于语法是`^date$`。

#### 快捷方式 #3 - 年龄（高级）
这个快捷方式的测试字符串包含一些高级的正则表达式。如果不清楚的话，可以在网上找到很多关于学习正则表达式语法的文档。请注意括号`(`、`)`。这些是正则表达式的标记，用于收集其中识别出的内容并将其放入一个变量中。第一个括号放入变量`$1`，第二个括号放入变量`$2`，依此类推。这些变量可以在扩展字符串中使用。在这个快捷方式中，扩展字符串确实引用了变量`$1`。这个快捷方式的结果是：如果用户输入`;;age 3::`，快捷方式将被替换为`我今年3岁。`如果用户输入`;;age 21::`，它将被替换为`我今年21岁。`

关于字符串以语法开始，包括一个命名描述符`{how old: >=0}`，表示一个参数。`>=0`让我们知道该参数是一个大于或等于0的整数。没有列出“默认值”，所以这个参数是必需的。

在语法（和破折号）之后是扩展和目的。

### 逐步操作：添加快捷方式
1. 确保__Inline Scripts__插件已安装并在您的vault中启用。（参见教程[设置插件并尝试](#tutorial-setup-the-plugin-and-try-it-out)。）
2. 打开__Inline Script__插件的设置。
    1. 点击Obsidian窗口左下角的设置按钮。这将打开设置面板。
    2. 在设置面板的左侧菜单中，找到并点击__Inline Scripts__。它位于“Community plugins”下方，接近底部。这将打开__Inline Scripts__的设置。
3. 滚动到“Shortcuts”设置。它位于“Shortcut-files”之后。_（见下图）_
4. 该设置有两个按钮：“Add shortcut”和“Add defaults”。点击“Add shortcut”按钮。这将在列表底部添加一个快捷方式条目。新条目应包含三个文本框，分别为灰色文本“Test (regex)”，“Expansion (JavaScript)”和“About (text)”。_（见下图）_
5. 在新条目中输入快捷方式的测试和扩展字符串。建议从一些简单的内容开始，例如：`test`和`return "The test worked.";`。关于字符串是可选的，但是对于自动完成功能识别快捷方式是必需的。如果输入了关于字符串，请按照以下格式：语法、破折号、描述。_（见下图）_

    ![快捷方式](readmeMedia/shortcuts.png)

6. 关闭设置面板。
    - 您可以点击设置面板右上角的X按钮来关闭它。
    - 您可以点击设置面板外部来关闭它。
7. 尝试在笔记中键入您的新快捷方式，以确保它正常工作。例如：键入`;;test::`

***
***

教程：将现有的快捷方式文件添加到保险库中

### 警告
由于其 JavaScript 的特性，快捷方式存在恶意风险。在使用之前，请确保您信任快捷方式或快捷方式文件。

### 快捷文件来源
这里有一个__内联脚本__的快捷文件库[链接](https://github.com/jon-heard/obsidian-inline-scripts-library)。您可以从这个库中将单个快捷文件导入到您的保险库中，或者从任何其他来源导入。另外，__内联脚本__插件有一个按钮可以一次性将整个库导入到您的保险库中。

对于库中更稳定和复杂的快捷文件，已经添加了视频教程。输入"help x"（其中"x"是快捷文件的名称）可以获取到快捷文件的教程视频链接。

对于初学者，我建议观看以下教程视频：
- [用户状态系统](https://www.youtube.com/watch?v=IiRHB0FfJcI)（运行时间2:45）
- [列表系统](https://www.youtube.com/watch?v=xIYpnBKdYRg)（运行时间5:34）

_（注意 - 快捷文件"states.sfile"有__两个__教程视频，一个是给用户的，一个是给开发者的。）_

### 逐步操作：将整个快捷方式文件库导入到保险库中
1. 确保__Inline Scripts__插件已安装并在您的保险库中启用。（参见教程[设置插件并尝试](#tutorial-setup-the-plugin-and-try-it-out)。）
2. 打开__Inline Scripts__插件的设置。
    1. 单击Obsidian窗口左下角的设置按钮。这将打开设置面板。
    2. 在设置面板的左侧菜单中，找到并单击__Inline Scripts__。它位于“Community plugins”下方，靠近底部。这将打开__Inline Scripts__的设置。
3. 找到“Shortcut-files”设置。它就在“Shortcut Sources”下方。
4. 在设置的右侧是“导入完整库”的按钮。单击该按钮，然后单击“确定”按钮。这将触发导入。根据您的互联网连接和设备，可能需要一分钟来下载。

    ![导入完整库](readmeMedia/importFullLibrary.png)

6. 导入完成后，您应该会看到一堆快捷方式文件条目添加到“Shortcut-files”设置下方（除非它们已经在以前的导入中存在）。关闭设置面板。
    - 您可以点击设置面板右上角的X按钮来关闭它。
    - 您可以在设置面板外点击以关闭它。
7. 快捷方式文件库中定义的所有快捷方式现在应该都可以工作。尝试输入其中一个快捷方式来确认，例如`;;event::`或`;;une::`。
8. 您可以输入`;;help::`来开始了解库提供的所有快捷方式。
9. 如果您发现需要在设置中“禁用”列出的快捷方式文件，可以通过关闭条目左侧的切换按钮来实现。

### 逐步操作：向保险库添加单个快捷方式文件
1. 确保__Inline Scripts__插件已安装并在您的保险库中启用。（请参阅教程[设置插件并尝试](#tutorial-setup-the-plugin-and-try-it-out)。）
2. 将快捷方式文件的内容复制到您的保险库中的一个笔记中。您可以通过以下两种方式之一来完成此操作。
    - 将快捷方式文件的文本内容复制到一个空笔记中。
        - 如果快捷方式文件在github上，建议复制“原始文件”的内容。
    - 直接将快捷方式文件复制到您的保险库文件夹中。
3. 确定并记住快捷方式文件笔记在您的保险库中的地址。这是笔记的文件夹路径，后跟笔记的名称。
    - 示例：`support/inlineScripts/state.sfile`。此快捷方式文件笔记的名称为`state.sfile`，文件夹路径为`support/inlineScripts`。
4. 打开__Inline Scripts__插件的设置。
    1. 单击Obsidian窗口左下角的设置按钮。这将打开设置面板。
    2. 在设置面板的左侧菜单中，找到并单击__Inline Scripts__。它位于“Community plugins”下方，靠近底部。这将打开__Inline Scripts__的设置。
5. 添加对快捷方式文件的引用。
    1. 找到“Shortcut-files”设置。它位于“Shortcut Sources”下方（见下图）。
    2. 在“Shortcut-files”设置中，单击右侧的“Add shortcut-file”按钮。这将在列表底部添加一个空条目。条目应显示灰色文本中的“Filename”一词（见下图）。
    3. 单击文本框，然后输入在步骤3中确定的快捷方式文件笔记的地址。在输入有效的笔记地址之前，文本框将显示为红色（见下图）。
        - 示例：`support/inlineScripts/state.sfile`。
    4. （可选）关闭条目左侧的切换按钮将禁用此快捷方式文件。这使__Inline Scripts__表现得好像从此列表中删除了快捷方式文件。这对于停止使用快捷方式文件而不完全将其从列表中删除非常有用。
        
        ![Shortcut-files setting](readmeMedia/shortcutFiles.png)

6. 关闭设置面板。
    - 您可以点击设置面板右上角的X按钮来关闭它。
    - 您可以在设置面板外点击以关闭它。
7. 快捷方式文件中定义的快捷方式现在应该可以工作了。尝试输入其中一个快捷方式以确认。
8. 您可以输入`;;help::`来开始了解新快捷方式文件提供的所有快捷方式。

***
***

教程：创建一个新的快捷方式文件

注意：如果您创建了一个您认为其他人会喜欢的快捷方式文件，如果您能在[这里](https://github.com/jon-heard/obsidian-inline-scripts/discussions)分享它，那将非常好！如果它经过精心制作并且普遍有用，我甚至会将其添加到[快捷方式文件库](https://github.com/jon-heard/obsidian-inline-scripts-library)中。

本教程假设您已经阅读并理解了教程“[创建一个新的快捷方式](#tutorial-create-a-new-shortcut)”，并且至少知道教程“[将现有的快捷方式文件添加到存储库](#tutorial-add-existing-shortcuts-files-to-a-vault)”展示了如何设置现有的快捷方式文件。

快捷方式文件包含多个快捷方式。每个快捷方式包含三个字符串：测试、展开和关于。快捷方式文件通常捆绑了一组朝着共同目标努力的快捷方式，例如特定功能（保存和加载）或特定系统（龙与地下城）。

以下是一个简单的快捷方式文件示例：
> __<br/>
> test<br/>
> __<br/>
> return "测试成功。";<br/>
> __

这个快捷方式文件包含一个快捷方式。请注意，`__`分隔了每个部分。

以下是另一个更详细的示例：
> 这是一个测试快捷方式文件。<br/>
> 它是为插件的HOW-TO文档编写的示例。<br/>
> <br/>
> __<br/>
> ^name$<br/>
> __<br/>
> return "Maggie Smith";<br/>
> __<br/>
> name - 展开为"Maggie Smith"。<br/>
> <br/>
> __<br/>
> ^repeat ([a-zA-Z])$<br/>
> __<br/>
> return $1.repeat(5);<br/>
> __<br/>
> repeat {to repeat: single character} - 展开为{to repeat}的5个重复："aaaaa"。<br/>
>

这个快捷方式文件以一个关于字符串开始，描述了快捷方式文件。在关于字符串之后，它包含两个快捷方式。请注意，第一个`__`放在快捷方式文件的关于字符串之后。每个快捷方式文件都有一个关于字符串，包括上面的简单示例，尽管在那种情况下关于字符串为空。还请注意，此快捷方式文件的每个部分之间有空行。__Inline Scripts__会忽略快捷方式文件中的空行，因此可以使用它们来组织快捷方式文件。

### 开发者模式
在__内联脚本__设置的底部有一个名为开发者模式的开关（见下图）。当开发者模式打开时，每当您离开一个快捷方式文件笔记时，无论是选择另一个笔记还是关闭快捷方式文件笔记，所有快捷方式都将重新加载。这样，您可以编辑快捷方式文件笔记，然后转到另一个笔记以尝试您的更改，而无需手动刷新任何内容。建议除非您正在积极开发快捷方式文件，否则将"开发者模式"关闭，因为切换笔记时会有轻微的延迟。

![开发者模式](readmeMedia/devMode.png)

### 帮助快捷方式
快捷方式文件的“关于”文本以及每个快捷方式的“关于”文本用于为用户创建帮助快捷方式。有关此内容的更多信息，请参见[帮助快捷方式](#help-shortcuts)部分。

教程：使用按钮面板运行快捷方式
__Inline Scripts__ 插件在 Obsidian 上添加了一个可选面板，您可以在上面设置按钮来触发不同的快捷方式。它默认是打开的，并且可以在 Obsidian 的右侧边栏中找到。如果没有找到，您可以打开 __Inline Scripts__ 插件的设置，然后点击“打开按钮视图”按钮（位于顶部）。

### 按钮面板用户界面概述。
![按钮面板](readmeMedia/buttonPanel_1.png)
1. __按钮界面：按钮帮助__ - 切换“帮助模式”。在帮助模式下，单击任何快捷按钮（#6）将显示与按钮相关的帮助文本。
2. __按钮界面：添加按钮__ - 将快捷按钮添加到列表中。
3. __按钮界面：编辑按钮__ - 切换“编辑模式”。在编辑模式下，单击任何快捷按钮（#6）将打开一个用于编辑按钮的面板。
4. __按钮界面：重新排序按钮__ - 切换“重新排序模式”。在重新排序模式下，拖动快捷按钮（#6）将允许将其放置在快捷按钮列表的其他位置。
5. __按钮界面：删除按钮__ - 切换“删除模式”。在删除模式下，单击快捷按钮（#6）将确认并删除按钮。
6. __按钮界面：快捷按钮__ - 当前组中的所有快捷按钮（#7）都显示在这里。
7. __组界面：组选择器__ - 下拉列表，您可以选择当前的按钮组。每个按钮组都是一个快捷按钮（#6）的列表。
8. __组界面：添加组__ - 添加一个具有通用名称的新组。
9. __组界面：重命名组__ - 要求用户输入当前组的新名称。
10. __组界面：导入/导出组__ - 弹出一个包含当前组按钮所有数据的文本字符串。要“导出”此组，请复制此文本字符串。要“导入”此组，请用表示不同按钮的不同字符串替换此文本字符串。
11. __组界面：删除组__ - 单击将确认并删除当前组。
12. __组：自定义组__ - 您可以创建自定义组。它们起始为空，但您可以从不同的组导入按钮和/或创建自定义按钮。
13. __组：快捷文件组__ - 注册到“内联脚本”插件的每个快捷文件都会自动创建一个按钮组。该组包括快捷文件中每个快捷方式的一个按钮。
14. __选择了快捷文件组__ - 如果选择了快捷文件组，则大部分界面将被锁定。要修改组的按钮，请先将它们导出到自定义组中。
15. __锁定了快捷文件组选项__ - 当选择了快捷文件组时，无法重命名或删除该组，并且除了帮助按钮之外，没有任何按钮界面按钮可用。

### 快捷按钮的选项
![ShortcutButtonSettings](readmeMedia/buttonPanel_2.png)
1. __显示文本__ - 在按钮前面显示的文本
2. __快捷文本__ - 当点击按钮时将运行的快捷方式。可以包含"???"块，每个块都将用文本输入弹出窗口来解析，询问用户要用什么替换"???"。一旦所有的"???"都被替换，就会运行快捷方式。
3. __帮助文本__ - 在"帮助模式"下，当用户点击按钮时显示的帮助文本。
4. __添加参数详情__ - 每次点击此选项，都会向列表中添加另一行"参数详情"__(#5)__。
5. __参数详情__ - "快捷文本(#2)"中的"???"块的设置列表。每个条目包含一个"???"块的设置（从左到右）。__默认值__是在弹出窗口中最初显示的值，将被用户输入的任何内容替换。__标题__是要显示的文本，用于解释用户需要输入什么。任何空白条目都将被忽略。
6. __确定/取消按钮__ - 当所有信息被输入或编辑满意时，点击"确定"按钮。要放弃当前的__添加__或__编辑__操作，点击"取消"。

教程：在笔记中添加链接以运行快捷方式
__Inline Scripts__ 插件允许在笔记中编写链接，当点击时，将运行预定义的快捷方式。有几个选项：
- __iscript__ - 可以多次点击链接。每次点击时，链接的显示文本将设置为触发快捷方式的扩展结果。参见示例＃1。
- __iscript-once__ - 只能点击一次链接。点击一次后，它将被触发快捷方式的扩展结果替换。参见示例＃2。
- __iscript-append__ - 可以多次点击链接。每次点击时，触发快捷方式的扩展结果将附加到笔记的末尾。参见示例＃3。
- __iscript-prepend__ - 可以多次点击链接。每次点击时，触发快捷方式的扩展结果将添加到笔记的开头。参见示例＃4。

链接的显示文本默认为快捷方式文本，但可以定义自定义显示文本。参见示例＃5和＃6。

链接可以包含块ID以更改扩展结果的位置。在 __iscript__ 和 __iscript-once__ 中，块ID将被扩展结果替换。在 __iscript-append__ 和 __iscript-prepend__ 中，块ID将分别添加到块的末尾或开头。参见示例＃7，＃8，＃9和＃10。

链接可以包含自定义的JS代码，以在打印之前格式化快捷方式扩展。参见示例＃11和＃12。

链接将接受快捷方式文本中的 "???" 块（类似于按钮面板的处理方式）。每个 "???" 触发一个文本输入弹出窗口，要求用户输入要替换 "???" 的文本。快捷方式链接甚至可以定义每个 "???" 块的标题。参见示例＃13，＃14，＃15，＃16和＃17。

### 示例

| 示例编号 | 链接文本 | 描述 |
| ---------- | --------- | ----------- |
| 1 | \`iscript: d100\` | 链接的显示文本为"d100"。每次用户点击链接时，都会运行快捷方式"d100"，并将链接的显示文本设置为快捷方式的展开内容。 |
| 2 | \`iscript-once: d100` | 与示例＃1相同，只是链接完全被快捷方式的展开文本替换，这意味着只有第一次点击有任何效果。这是由于"iscript-once"标题的存在。 |
| 3 | \`iscript-append: d100` | 与示例＃1相同，只是链接的显示文本不会更改。相反，快捷方式的展开文本将附加到笔记的末尾。这是由于"iscript-append"标题的存在。 |
| 4 | \`iscript-prepend: d100` | 与示例＃3相同，只是快捷方式的展开文本不会附加到笔记的末尾。相反，快捷方式的展开文本将附加到笔记的开头。这是由于"iscript-prepend"标题的存在。 |
| <hr/> | <hr/> | <hr/> |
| 5 | \`iscript: d100 \| rollem\` | 与示例＃1相同，只是链接的初始显示文本为"rollem"，而不是"d100"。 |
| 6 | \`iscript-append: d100 \| rollem\` | 与示例＃3相同，只是链接的显示文本始终为"rollem"，而不是"d100"。 |
| <hr/> | <hr/> | <hr/> |
| 7 | \`iscript ^dstblock: d100\` | 与示例＃1相同，只是具有id为"dstblock"的笔记块的文本设置为展开内容，而不是链接的显示内容。 |
| 8 | \`iscript-once ^dstblock: d100&\` | 与示例＃2相同，只是具有id为"dstblock"的笔记块的文本设置为展开内容，而不是链接的显示内容。但是，链接仍然消失。 |
| 9 | \`iscript-append ^dstblock: d100\` | 与示例＃3相同，只是附加到具有id为"dstblock"的笔记块，而不是整个笔记。 |
| 10 | \`iscript-prepend ^dstblock: d100\` | 与示例＃4相同，只是附加到具有id为"dstblock"的笔记块，而不是整个笔记。 |
| <hr/> | <hr/> | <hr/> |
| 11 | \`iscript: d100 \| rollem \| "Result: " + $$\` | 与示例＃5相同，只是包含自定义JS代码以打印以"Result: "开头的展开内容。注意，JS代码中的"$$"被展开内容替换。 |
| 12 | \`iscript-append: d100 \| rollem \| "- " + $$ + "\n"\` | 与示例＃6相同，只是包含自定义JS代码以打印以破折号开头，以及换行符结尾的展开内容。如果展开内容为"83/D100"，则输出为"- 83/D100\n"。注意，JS代码中的"$$"被展开内容替换。 |
| <hr/> | <hr/> | <hr/> |
| 13 | \`iscript: d???\` | 与示例＃1相同，只是当点击链接时，在运行快捷方式之前，弹出窗口要求输入替换快捷方式文本中的"???"的文本。弹出窗口的标题为"参数＃1"。 |
| 14 | \`iscript: ???d???+???\` | 与示例＃13相同，只是不是一个，而是三个文本输入弹出窗口显示以替换快捷方式文本中的三个"???"。这些弹出窗口的标题按顺序为"参数＃1"，"参数＃2"和"参数＃3"。 |
| 15 | \`iscript: d??? \| \| \| 输入骰子大小\` | 与示例＃13相同，只是文本输入弹出窗口的标题为"输入骰子大小"。 |
| 16 | \`iscript: ???d???+??? \| \| \| 输入骰子数量\` | 与示例＃14相同，只是文本输入弹出窗口为"输入骰子数量"，"参数＃2"和"参数＃3"。 |
| 17 | \`iscript: ???d???+??? \| \| \| 输入骰子数量 \| 输入骰子大小 \| 输入结果修饰符\` | 与示例＃14相同，只是文本输入弹出窗口为"输入骰子数量"，"输入骰子大小"和"输入结果修饰符"。 |

## 发展援助：控制台
如果一个新的快捷方式无法工作，并且不清楚原因，那么javascript控制台可以提供帮助。
1. 输入ctrl-shift-i打开开发工具面板。 _(见下图)_
2. 点击开发工具面板顶部的“控制台”选项卡。 _(见下图)_
3. 查看控制台内容，以找出快捷方式出错的线索。 _(见下图)_
4. 在控制台打开的情况下，尝试在便签中输入快捷方式，看看是否会在控制台中添加错误。您可以查看错误消息以找出问题所在的线索。
5. 如果控制台中的信息太多而困扰，您可以随时清除它。在开发工具面板的左上角有一个清除按钮。 _(见下图)_

    ![控制台](readmeMedia/console.png)

***

开发援助：调试器语句
如果您打开了控制台（参见[控制台](#development-aid-the-console)），那么您可以在脚本运行过程中暂停扩展，查看该点的变量，然后恢复脚本。您可以通过在希望扩展暂停的脚本中添加语句"debugger;"来实现这一点。当扩展运行并遇到"debugger;"时，脚本将暂停。

## 发展援助：围栏代码块
如果您在开发快捷方式时希望获得更好的体验，可以将扩展字符串放在“JavaScript围栏代码块”中。例如，这个扩展字符串：

> return "Hello!  How are you?";

可以写成：

> \`\`\`js
>
> return "Hello!  How are you?";
>
> \`\`\`

__注意__：`` ` ``字符（在"js"之前）是反引号，通常与波浪符（~）共享一个键。

尽管第二个使用了“JavaScript围栏代码块”，但两个扩展字符串的扩展结果是相同的。

使用“JavaScript围栏代码块”的好处：
- 语法高亮
- 没有不需要的Markdown格式

缺点：
- 写起来更费时间
- 占用更多空间

### 栅栏测试字符串
您还可以将测试字符串包围在基本的“栅栏代码块”中。这不会提供语法高亮，但仍然可以防止不需要的Markdown格式。例如，这个测试字符串：

> ^date$

可以写成：

> \`\`\`
>
> ^date$
>
> \`\`\`

### 警告
代码块必须精确：` ```js ` 用于扩展字符串和 ` ``` ` 用于测试字符串。` ```javascript `、` ```JS ` 或其他任何内容都会破坏快捷方式。

开发援助：移除内联脚本的输入阻塞
运行快捷方式时，__内联脚本__会阻塞用户输入。这通过Obsidian UI变暗来表示。当快捷方式完成时，输入阻塞会被解除，但如果快捷方式出错，有时输入阻塞永远不会解除。一种解决方法是重新启动Obsidian，但更快的解决方法，特别是在开发快捷方式时，是打开控制台并运行助手函数`_inlineScripts.inlineScripts.HelperFncs.unblock()`。这将立即移除输入阻塞，并允许用户继续使用Obsidian工作。

## 开发援助：辅助函数

__InlineScripts__ 提供了各种辅助函数，可以在不同的情况下非常有用。其中一些非常有用，可以直接在快捷脚本中使用，比如 `expand()`。一些辅助函数在本自述文件的其他位置有解释，但下面是一个全面的列表，以及它们的用途：
- `_inlineScripts.inlineScripts.HelperFncs.addCss(id, css)` - 详见[使用自定义 CSS](#advanced-shortcuts-using-custom-css)。
- `_inlineScripts.inlineScripts.HelperFncs.addIcon(id, svg)` - 将 svg 字符串 {svg} 注册为具有 id {id} 的图标。这对于 "ItemView" 类非常有用。
- `_inlineScripts.inlineScripts.HelperFncs.addToNote(toAdd, targetPosition, path)` - 修改文件。{toAdd} 是要插入文件的文本。{path} 是一个可选的路径字符串，默认为活动笔记。它告诉要修改的文件。{targetPosition} 是一个可选的范围对象 {start: ? end: ?}，用于替换哪些字符为 {toAdd}。它默认为 "start" 和 "end" 都在文档末尾，意味着 {toAdd} 被追加。如果修改的文件是活动笔记，则它获得焦点。如果 {toAdd} 被追加到修改的文件（targetPosition 指向末尾），则输入插入符将移动到文档末尾。
- `_inlineScripts.inlineScripts.HelperFncs.asyncFilter(arr, fnc)` - 等效于 `array.filter()`，但传递的函数是异步运行的。
- `_inlineScripts.inlineScripts.HelperFncs.asyncMap(arr, fnc)` - 等效于 `array.map()`，但传递的函数是异步运行的。
- `_inlineScripts.inlineScripts.HelperFncs.asyncForEach(arr, fnc)` - 等效于 `array.forEach()`，但传递的函数是异步运行的。
- `_inlineScripts.inlineScripts.HelperFncs.callEventListenerCollection(id, collection, parameters, onReturn)` - 获取一个填充了回调函数的对象 {collection}，并调用每个函数。{id} 是一个字符串，用于添加到发生的任何错误（以帮助标识此事件）。{parameters} 是一个可选的 JS 值。如果提供，它将作为参数传递给每个函数调用。{onReturn} 是一个可选的函数。如果提供，将在 callEventListenerCollection 完成时调用它。
- `_inlineScripts.inlineScripts.HelperFncs.confirmObjectPath(path, leaf)` - 确保由 {path} 描述的对象链存在，其中第一个字符串是存储在 "window" 变量中的对象，下一个字符串是存储在第一个字符串中的对象，依此类推。如果由 {path} 描述的任何对象不存在，则会创建它们。{path} 的最后一个名称分配给可选参数 {leaf}，它可以是任何 JS 值，默认为一个空对象。
- `_inlineScripts.inlineScripts.HelperFncs.DragReorder(parent, onreorder)` - 这是一个可以实例化的类，用于管理 HTML 元素中的拖动重新排序功能。{parent} 是包含所有要重新排序的元素的元素。{onreorder} 是在每次拖动重新排序发生后调用的函数。
- `_inlineScripts.inlineScripts.HelperFncs.expand(shortcutText)` - __直接提供给快捷脚本使用。__ 详见[从一个快捷脚本调用另一个快捷脚本](#calling-one-shortcut-from-another)。
- `_inlineScripts.inlineScripts.HelperFncs.expFormat(expansion, skipPrefix, skipLinePrefix, skipSuffix)` - __直接提供给快捷脚本使用。__ 详见[将常见的扩展格式添加到您的快捷脚本（可选）](#advanced-shortcuts-adding-the-common-expansion-format-to-your-shortcuts-optional)。
- `_inlineScripts.inlineScripts.HelperFncs.expUnformat(expansion, skipPrefix, skipLinePrefix, skipSuffix)` - __直接提供给快捷脚本使用。__ 详见[将常见的扩展格式添加到您的快捷脚本（可选）](#advanced-shortcuts-adding-the-common-expansion-format-to-your-shortcuts-optional)。
- `_inlineScripts.inlineScripts.HelperFncs.getLeavesForFile(file)` - 获取文件对象 {file} 并返回在 Obsidian 中打开该文件的所有编辑器 UI。
- `_inlineScripts.inlineScripts.HelperFncs.getSettings()` - 返回当前设置对象的副本。
- `_inlineScripts.inlineScripts.HelperFncs.ItemView(id, css)` - 这是一个 Obsidian 类，可以扩展它以创建自己的侧边面板。
- `_inlineScripts.inlineScripts.HelperFncs.parseMarkdown(md)` - 获取 markdown 字符串 {md}，并将其中的所有 markdown 转换为 html。
- `_inlineScripts.inlineScripts.HelperFncs.popups` - __直接提供给快捷脚本使用。__ 详见[用户信息的弹出框](#advanced-shortcuts-popup-boxes-for-user-info)和[创建自定义弹出框](#advanced-shortcuts-creating-custom-popup-boxes)。
- `_inlineScripts.inlineScripts.HelperFncs.print(toPrint)` - __直接提供给快捷脚本使用。__ 详见[print() 函数](#advanced-shortcuts-the-print-function)。
- `_inlineScripts.inlineScripts.HelperFncs.registerView(id, viewMaker)` - ItemView 类可以被子类化以创建自定义的 Obsidian 面板。一旦有了子类，此函数允许您注册该子类。它接受一个唯一的字符串 {id}，用于标识系统中的 Obsidian 面板，{viewMaker} 是一个函数，每次调用它时都会实例化该类的一个实例。
- `_inlineScripts.inlineScripts.HelperFncs.removeCss(id)` - 详见[使用自定义 CSS](#advanced-shortcuts-using-custom-css)。
- `_inlineScripts.inlineScripts.HelperFncs.runExternal(command, failSilently, dontFixSlashes)` - __直接提供给快捷脚本使用。__ 详见[运行外部应用程序和脚本](#advanced-shortcuts-running-external-applications-and-scripts)。
- `_inlineScripts.inlineScripts.HelperFncs.unblock()` - 详见[移除 Inline Script 的输入阻塞](#development-aid-removing-inline-scripts-input-block)。
- `_inlineScripts.inlineScripts.HelperFncs.fileWrite(filepath, content)` - 将 {content} 设置为 {filepath} 处的文件，如果需要则创建该文件。

***

高级快捷键：将常见的扩展格式添加到您的快捷方式中（可选）
许多快捷方式利用了一个简单的系统，将“常见扩展格式”添加到它们的结果中。这不是必需的，但可以使您的快捷方式的输出看起来舒适，并与其他快捷方式的结果类似。

`expFormat(expansionString)`是一个函数，它接受“expansionString”（一个字符串或字符串数组）并返回它，但调整为符合“常见扩展格式”。一个简单的用例是通过将`return result;`替换为`return expFormat(result);`来调整您的快捷方式。

`expUnformat(expansionString)`是`expFormat(expansionString)`的对应函数。它接受一个带有添加了“常见扩展格式”的字符串，并去除格式。当您需要使用格式化扩展的数据时，这将非常有用。

“常见扩展格式”在设置中定义，允许用户定义他们希望快捷方式如何打印到笔记中。
设置中的“常见扩展格式”部分有三个条目：
- __前缀__ - 添加到扩展开头的文本（例如“>”）。
- __行前缀__ - 添加到每行扩展开头的文本。
- __后缀__ - 添加到扩展结尾的文本（例如“\n\n”）。

### 示例

| 快捷方式扩展脚本   | 扩展结果     |
| --------------------------- | -------------------- |
| return "result";            | ... result ...       |
| return expFormat("result"); | ... > result\n\n ... |

注意：结果中的"\n\n"在注释中显示为结果和后续内容之间的空行。
注意：第二个扩展结果假设"常规扩展格式"设置为默认值。

### 可选参数
expFormat的完整定义实际上是`expFormat(expansionString, skipPrefix, skipLinePrefix, skipSuffix)`。最后三个参数是可选的。
- __skipPrefix__ - 如果为true，则不会将前缀添加到结果中。
- __skipLinePrefix__ - 如果为true，则不会将行前缀添加到结果中。
- __skipSuffix__ - 如果为true，则不会将后缀添加到结果中。

## 高级快捷键：print() 函数
`print(message)` 是一个可以从快捷键的扩展脚本中调用的函数。它会创建一个控制台条目和一个弹出通知，显示给定的消息。然后，它会返回给定的消息。

高级快捷键：运行外部应用程序和脚本
此功能在移动设备上不可用（Obsidian的后端不允许）。

`runExternal(command)` 是一个可以从快捷方式的扩展字符串中调用的函数。它将`command`参数作为shell命令执行，然后返回结果的控制台输出。这使得可以在Obsidian中运行可执行文件和脚本（如python、M、bash等）。

注意：实际的完整函数是`runExternal(command, failSilently, dontFixSlashes)`。后面两个参数是可选的，并在本节中进行了解释。

### "允许外部"设置
请注意，除非在插件选项中打开"允许外部"开关设置，否则runExternal函数将始终失败并显示授权错误。默认情况下，该设置是关闭的。

![允许外部设置](readmeMedia/allowExternal.png)

### 示例
| 测试字符串 | 扩展字符串 | 概述 |
| ----------- | ---------------- | -------- |
| ^test shell$ | return&nbsp;runExternal("echo&nbsp;Hello&nbsp;from&nbsp;the&nbsp;shell"); | 当用户输入`;;test shell::`时，将运行shell命令`echo Hello from the shell`，该命令会将"Hello from the shell"打印到控制台。一旦echo命令完成，它的控制台输出将从runExternal返回，然后从Expansion脚本返回，并最终展开到笔记中。 |
| ^runMyScript$ | return&nbsp;runExternal("python&nbsp;myscript.py"); | 当用户输入`;;runMyScript::`时，该命令将在"myscript.py"上执行python，可能会在控制台上打印一些内容。一旦命令完成，runExternal将返回任何控制台输出（如果没有输出，则返回空字符串），然后从Expansion脚本返回，并因此展开到笔记中。<br/><br/>如果Python设置正确，Expansion脚本可以简单地为`return runExternal("myscript.py");`。<br/><br/>如果未安装python，或者myscript.py不在vault的根文件夹中，甚至如果myscript.py有python错误，则shell命令将失败。这将导致runExternal返回null，并显示错误通知和控制台日志。 |
| ^exec (.*)$ | let&nbsp;result&nbsp;=&nbsp;runExternal($1);<br/>if&nbsp;(result === null)&nbsp;{&nbsp;result&nbsp;=&nbsp;"FAILED";&nbsp;}<br/>return&nbsp;"Shell&nbsp;command&nbsp;result&nbsp;=&nbsp;\""&nbsp;+&nbsp;result&nbsp;+&nbsp;"\"."; | 此快捷方式允许用户运行_任何_ shell 命令。例如，输入`;;exec dir::`将打印vault根文件夹的内容并将其展开到笔记中。 |

### 命令错误
当命令产生错误时：
1. runExternal调用返回null（而不是控制台输出）
2. 弹出通知告知用户发生了错误
3. 控制台错误提供详细信息：
    - 命令运行的文件夹（始终为vault的根文件夹）
    - 失败的命令
    - shell提供的错误消息

`runExternal(command, failSilently, dontFixSlashes)`的第二个可选参数是"failSilently"。当failSilently为true且命令产生错误时，runExternal仍然返回null，但不会创建通知或控制台错误。

### 命令的工作文件夹
runExternal 始终在保险库的根文件夹中运行命令。这使您可以运行保险库内的脚本，这意味着脚本可以作为保险库的一部分进行复制/同步。

当使用runExternal运行命令时，Obsidian会暂停直到该命令完全执行完毕。如果你没有准备好，这可能会让人感到不安，但这是无害的...当然，除非你的命令永远运行下去。

### 跨平台斜杠
默认情况下，在Windows上，shell命令中的任何正斜杠都会自动转换为反斜杠。这有助于保持命令的跨平台性（始终在命令中使用正斜杠）。但是，如果不想进行斜杠转换，可以将`runExternal(command, failSilently, dontFixSlashes)`的第三个参数" dontFixSlashes"设置为true以禁用它。

高级快捷键：语法字符串和正则表达式模式
每个快捷键都有一个关于字符串（可能为空）。如果关于字符串不为空，则应以语法部分开头，然后是一个破折号，然后是快捷键的描述。关于字符串用于用户帮助和参考。语法部分也被自动完成和按钮面板使用。事实上，没有语法部分的快捷键根本不会显示在自动完成中。

这是一个例子：
```
lipsum {paragraph count: >0, default: 1} - 生成一个包含{paragraph count}段落的lorem ipsum文本。
```

在这个例子中，`lipsum {paragraph count: >0, default: 1}`是语法部分，而破折号后面的所有内容是快捷键描述。

语法部分显示了什么快捷键文本将触发此快捷键。任何未确定的文本都称为“快捷键参数”，并由花括号括起来，其中包含快捷键参数文本的详细信息。例如：
```
{paragraph count: >0, default: 1}`
```

快捷键参数详细信息始终以参数名称开头。在这种情况下是`paragraph count`。名称后面是冒号，然后是逗号分隔的列表。列表的第一项通常定义了数据类型。在这种情况下，`>0`表示大于0的整数。如果包括第二项，则通常是默认值。在这种情况下，`default: 1`表示如果用户没有为参数文本包含值，则使用“1”。如果给出了默认值，则快捷键参数是可选的。如果没有给出默认值，则快捷键参数是必需的。

因此，对于此示例，以下是触发此快捷键的有效快捷键文本：
```
lipsum
lipsum 1
lipsum 10
```
而以下是无效的快捷键文本：
```
lipsum 0
lipsum 4.5
```

除了`>0`之外，_Inline Scripts_库中还有许多其他类型。以下是最常见的类型列表，以及它们的正则表达式模式。

| 类型字符串 | 正则表达式 | 描述 |
| ----------- | ----- | ----------- |
| text | `(.+)` | 任何文本，包括任何间距。 |
| 非空格文本 | `([^ ]+)` | 与“text”相同，但不允许空格。 |
| 名称文本 | `([_a-zA-Z][_a-zA-Z0-9]*)` | 名称：无空格。第一个字符是字母或下划线字符。其余字符可以是字母、下划线或数字字符。 |
| 路径文本 | `("[^ \t\\:*?"<>\|][^\t\\:*?"<>\|]*"\|[^ \t\\:*?"<>\|]+)` | 快捷键展开文本还应以语句`$1 = $1.replace(/^"(.*)"$/, "$1");`开头，其中前两个$1（不是第三个）设置为此参数的任何内容。此语句删除用户在值周围放置的任何引号。 |
| >0 | `([1-9][0-9]*)` | 大于0的任何整数。 |
| >=0 | `([0-9]+)` | 大于或等于0的任何整数。 |
| x&nbsp;TO&nbsp;z | `(x\|y\|z)` | 一系列整数，从x到z。示例：3 TO 18 |
| x&nbsp;OR&nbsp;y&nbsp;OR&nbsp;z | `(x\|y\|z)` | 可能值的列表。示例：red OR green OR blue。 |

***

高级快捷方式：从快捷方式中调用快捷方式
有两个功能可以配合使用，允许您嵌套快捷方式（即将快捷方式结果作为其他快捷方式的一部分使用）。第一个功能是扩展脚本能够返回字符串数组的能力。第二个功能是扩展脚本能够触发另一个快捷方式的扩展，然后获取并使用结果。

首先：扩展脚本通常返回一个字符串。这个字符串是替代用户键入的快捷方式的内容。扩展脚本也可以返回一个字符串数组。当替换用户键入的快捷方式时，这个字符串数组会被连接成一个单独的字符串。

其次：在扩展脚本中，您可以调用函数`expand(text)`。该函数接受一些文本，并尝试（a）找到匹配的快捷方式（b）调用匹配的快捷方式的扩展脚本（c）获取扩展脚本的结果值（c）返回该值。这与您直接在笔记中输入的快捷方式文本完全相同，只是`expand(text)`返回结果（字符串或字符串数组），而不是将结果写入笔记中。

### 嵌套快捷方式
给定这些功能，下面是如何在一个快捷方式中嵌套另一个快捷方式的方法。第一个快捷方式的扩展脚本调用expand()，并传入第二个快捷方式。它得到的是第二个快捷方式的扩展结果：一个字符串或字符串数组。然后，它可以根据需要使用该结果或该结果的一部分。

### 示例
| id | 测试字符串 | 扩展字符串 |
| -- | ----------- | ---------------- |
|  1 | firstname   | 返回 ["FirstName: ", "Maggie"]; |
|  2 | lastname    | 返回 ["LastName: ", "Smith"]; |
|  3 | fullname    | 返回 [ "FullName: ", expand("firstname")[1], " ", expand("lastname")[1] ]; |

请注意，快捷方式#1返回一个字符串数组，但如果您键入`;;firstname::`，则扩展结果为"FirstName: Maggie"，因为数组被合并为一个字符串。快捷方式#2也是如此（扩展为"LastName: Smith"）。

如果您键入`;;fullname::`，则扩展为"FullName: Maggie Smith"。这是因为它返回的数组是["FullName: ", "Maggie", " ", "Smith"]。这是因为对`expand(text)`的两次调用得到了快捷方式#1和#2的结果，它们都是数组，然后以下的`[1]`获取了数组的第二个字符串。

## 高级快捷方式：辅助脚本
如果您添加了一个测试字符串为空的快捷方式，那么该快捷方式就是一个“辅助脚本”。辅助脚本提供了通用代码，后面列出的任何快捷方式都可以使用该代码。

### 辅助器阻塞器
如果您添加了一个空的测试字符串和一个空的扩展字符串的快捷方式，那么该快捷方式就是一个“辅助器阻塞器”。辅助器阻塞器会阻止它之后的任何快捷方式使用它上面的任何辅助脚本。您可能不需要辅助器阻塞器，但如果需要的话，它们是存在的。它们还会插入在不同快捷方式文件之间的快捷方式之间，以防止一个快捷方式文件的辅助脚本影响其他文件的快捷方式。

### 示例
| id | 测试字符串 | 扩展字符串                                                     |
| -- | ----------- | -------------------------------------------------------------- |
|  1 | hi          | 返回 "你好！你好吗？";                                          |
|  2 |             | function roll(x) { return Math.trunc(Math.random() * x) + 1; } |
|  3 | d10         | 返回 "掷出了 " + roll(10) + " 点，使用D10骰子。";                |
|  4 | d20         | 返回 "掷出了 " + roll(20) + " 点，使用D20骰子。";                |
|  5 |             |                                                                |
|  6 | bye         | 返回 "再见。谢谢你的时间！";                                    |

在这个快捷方式列表中，快捷方式#2的测试字符串为空。这意味着它是一个“辅助脚本”。它的扩展字符串中的代码（一个名为“roll”的函数）可以在它之后的快捷方式中使用。快捷方式#5的测试字符串和扩展字符串都为空。这意味着它是一个“辅助阻塞器”。它之后的快捷方式无法访问它之前的辅助脚本。结果是，快捷方式#3和#4可以访问辅助脚本，而快捷方式#1和#6不能。

高级快捷键：各种有用的函数
有一些函数非常有用，以至于我认为在这里记录它们是很好的。

### roll(max)
返回一个从1到"max"之间均匀分布的随机数。
```
	function roll(max)
	{
		return Math.trunc(Math.random() * max + 1);
	}
```

### aPick(a)
从数组"a"中返回一个随机值（均匀分布）。
```
	function aPick(a)
	{
		return a[roll(a.length)-1];
	}
```

### aPickWeight(a, wIndex, theRoll)
从数组"a"中返回一个加权随机值。数组中的每个项本身都是一个数组，包含所需的值（通常是第一个元素）和一个或多个权重（通常是第一个元素之后的元素）。一个数字被随机选择（如果提供了"theRoll"，则使用它），并返回与该数字匹配的第一个项。

- 示例 - `aPickWeight([ ["red", 3], ["blue", 10], ["green", 20] ])` - 从1到20（最后一项的权重）中随机选择一个数字。如果数字小于等于3，则返回第一项。如果数字在4到10之间，则返回第二项。如果数字在11到20之间，则返回第三项。
- 示例 - `aPickWeight([ ["red", 3, 2], ["blue", 10, 40], ["green", 20, 45] ], 2)` - 与前一个示例相同，只是"wIndex"为2，因此使用第二个数字来选择高度。选择范围为第一项的1到2，第二项的3到40，第三项的41到45。
- 示例 - `aPickWeight([ ["red", 3, 2], ["blue", 10, 40], ["green", 20, 45] ], 2, 32)` - 与前一个示例相同，只是参数"theRoll"为32。这意味着始终返回第二项，因为"theRoll"在该项的范围内（根据项的第二个数字为3到40）。
```
	function aPickWeight(a, wIndex, theRoll)
	{
		wIndex = wIndex || 1;
		theRoll = theRoll || roll(a.last()[wIndex]);
		for (const item of a)
		{
			if (item[wIndex] >= theRoll)
			{
				return item;
			}
		}
		return a.last();
	}
```

高级快捷方式：设置和关闭脚本
快捷方式文件可以包含一个“设置脚本”。设置脚本被定义为具有特定测试字符串“^sfile setup$”的快捷方式。每当加载快捷方式文件时，包括在“开发者模式”下切换笔记时，设置脚本将运行。如果您的快捷方式文件在其快捷方式工作之前需要初始化，这个功能非常有用。此外，如果设置脚本返回true（或返回true的某个值），则表示不应加载快捷方式文件：快捷方式文件的快捷方式将不可用。

快捷方式文件可以包含一个“关闭脚本”。关闭脚本被定义为具有特定测试字符串“^sfile shutdown$”的快捷方式。当禁用快捷方式文件时，关闭脚本将运行：当它从快捷方式文件列表中删除时，当它在快捷方式文件列表中“关闭”时，或者当“内联脚本”被禁用或卸载时。如果您的快捷方式文件在被禁用时需要进行清理，这个功能非常有用。

| 测试字符串 | 扩展字符串 | 概述 |
| ----------- | ---------------- | -------- |
| ^sfile&nbsp;setup$ | const confirmObjectPath&nbsp;=<br/>&nbsp;&nbsp;&nbsp;&nbsp;_inlineScripts.inlineScripts.helperFncs.<br/>&nbsp;&nbsp;&nbsp;&nbsp;confirmObjectPath;<br/>confirmObjectPath("_inlineScripts.state");<br/>inlineScripts.state.flag \|\|= 1; | 这个设置脚本创建了一些全局变量，快捷方式文件中的快捷方式可能依赖于这些变量。<br/><br/>请注意，设置脚本**仅在这些全局变量尚不存在时**创建它们（`\|\|=`）。这一点很重要，因为在一个会话中可能会多次运行设置脚本。我们不希望后续运行将之前创建的任何内容清除掉。<br/><br/>此脚本还使用了__confirmObjectPath__，这是__Inline Scripts__提供的一个函数，用于确保特定的对象-对象链存在。 |
| ^sfile&nbsp;shutdown$ | delete&nbsp;_inlineScripts.state; | 这个关闭脚本删除了由设置脚本创建的一个变量。 |

高级快捷方式：弹出框用于用户信息
有时，扩展脚本需要从用户那里获取一些无法使用快捷方式参数实现的信息。这可能包括在危险操作之前获得确认，让用户从选项列表中选择，或者要求输入太多信息以合理地在快捷方式文本中键入。弹出面板可以帮助解决这个问题。有4种类型的弹出面板：
- __popups.alert(message)__ - 用于向用户传达消息的弹出框。
- __popups.confirm(message)__ - 用于用户确认或取消操作的弹出框。如果点击了确认按钮，则返回true，否则返回false。
- __popups.input(message, defaultValue)__ - 用于用户输入文本的弹出框。返回用户输入的文本，如果用户取消，则返回null。
- __popups.pick(message, options, defaultValue)__ - 用于用户从列表中选择的弹出框。返回用户选择的选项的索引，如果用户取消，则返回null。

使用方法很简单：将上述语句之一添加到扩展文本中。除了使用警报弹出框时，您还应以某种方式使用语句的返回值。

### 示例
- `popup.alert("不要忘记保存！")`
- `if (popup.confirm("确定吗？")) { doIt(); }`
- `let userName = popup.input("你叫什么名字？", "John Smith");`
- `let color = popup.pick("你最喜欢什么颜色？", [ "红色", "橙色", "黄色", "绿色", "蓝色", "靛蓝色", "紫罗兰色" ], 4);`

高级快捷键：创建自定义弹出框
通过一些努力和HTML/JS技能，您可以创建自己的自定义弹出框。如果您需要比警报、确认、输入或选择弹出框更复杂的内容，这将非常有用。以下是语法：
- __popups.custom(message, definition, data)__
    - message - 向用户提供的消息。它与所有弹出框的工作方式相同。
    - definition - 定义自定义弹出框的对象。
    - data - 用于保存自定义弹出框参数的对象。

自定义弹出框的定义对象可以包含以下任意属性。它们都是可选的：
- buttons - 一个表示在弹出框中显示哪些按钮的字符串数组。默认为`[ "Ok", "Cancel" ]`。
- onOpen(data, parent, firstButton, SettingType) - 当首次打开弹出框时调用的函数。它对于设置自定义用户界面非常有用。
    - data - 传递给`popups.custom()`的数据对象。它也会传递给`onClose()`，以便可以将数据从`onOpen()`传递到`onClose()`。
    - parent - 弹出框中的HTML div，您可以在其中创建用户界面。
    - firstButton - 第一个按钮元素（通常是“Ok”按钮）。当用户在自定义用户界面中按下回车键时，触发此按钮非常有用。
    - SettingType - obsidian.setting类型：用于创建新用户界面元素的Obsidian特定API。
- onClose(data, resolveFnc, buttonText) - 当弹出框关闭时调用的函数，通常在用户点击按钮后。
    - data - 传递给`popups.custom()`的数据对象。它也会传递给`onOpen()`，以便可以将数据从`onOpen()`传递到`onClose()`。
    - resolveFnc(x) - 调用时结束`popups.custom()`调用的函数。将您希望`popups.custom()`返回的值传递给它。
    - buttonText - 用户点击关闭弹出框的按钮的文本。如果用户在不点击按钮的情况下关闭弹出框，则为null。

```js
const definition =
{
	buttons: [ "确定" ],
	onOpen: function(data, parent, firstButton, SettingType)
	{
		let s = document.createElement("select");
		s.appendChild(new Option("战士", "强壮"));
		s.appendChild(new Option("法师", "聪明"));
		s.appendChild(new Option("盗贼", "敏捷"));
		s.selectedIndex = data.defaultValue || 0;
		s.classList.add("dropdown");
		s.style["margin-bottom"] = "1.5em";
		s.addEventListener("keypress", (e) =>
		{
			if (e.key === "Enter")
			{
				firstButton.click();
			}
		});
		data.resultUi = s;
		parent.appendChild(s);
	},
	onClose: function(data, resolveFnc, buttonText)
	{
		if (buttonText)
		{
			resolveFnc(data.resultUi.value);
		}
		else
		{
			resolveFnc(null);
		}
	}
};
result = popups.custom("选择一个角色", definition, { defaultValue: 1 });
return result;
```

## 高级快捷方式：获取有关当前扩展的信息
快捷方式扩展脚本可以访问一个名为`expansionInfo`的变量，其中包含有关当前扩展的信息。expansionInfo包括：
- __expansionInfo.isUserTriggered__ - 如果此扩展是通过在笔记中输入快捷方式触发的，则为True。如果此扩展是通过特殊脚本触发的或通过调用`expand(x)`触发的，则为False。
- __expansionInfo.line__ - 快捷方式输入的完整文本行。
- __expansionInfo.inputStart__ - "line"中快捷方式文本输入开始的位置。
- __expansionInfo.inputEnd__ - "line"中快捷方式文本输入结束的位置。
- __expansionInfo.shortcutText__ - 输入的快捷方式文本（不包括前缀和后缀文本）。
- __expansionInfo.prefix__ - 用于启动此快捷方式的前缀文本。
- __expansionInfo.suffix__ - 用于结束此快捷方式的后缀文本。

***

## 高级快捷方式：async 和 await
如果你对 JavaScript 中的 "async" 和 "await" 关键字不熟悉，那么这一节对你来说可能没有太多意义。你可以跳过它，也不会有太大问题。

快捷方式扩展脚本是异步运行的。你可以在异步语句前面安全地添加 "await"。此外，"async" 和 "await" 会自动添加到某些语句之前。这使得初学者可以编写快捷方式，而不需要理解异步性。以下是自动添加发生的详细信息。

#### 异步
- 在无名函数之前添加。 `const a = function() { }`
- 不在命名函数之前添加。 `function a() { }`
- 不在箭头函数之前添加。 `const a = () => { }`

#### await
- 在调用__expand()__时前置。
- 在调用__popups__中的任何函数时前置。

## 高级快捷方式：使用自定义CSS
如果您的快捷方式文件需要自定义CSS，则可以使用“addCss（）”和“removeCss（）”函数。将“_inlineScripts.inlineScripts.helperFncs.addCss（）”放入“^sfile setup$”快捷方式中，并将“_inlineScripts.inlineScripts.helperFncs.removeCss（）”放入“^sfile shutdown$”快捷方式中。addCss（）接受一个id（通常是快捷方式文件的名称）和一个css字符串，并将css添加到Obsidian中。removeCss（）接受传递给addCss（）的id，并删除由addCss（）添加的css。

### 示例
```
__
^sfile setup$
__
_inlineScripts.inlineScripts.helperFncs.addCss("example", ".cm-scroller { background-color: blue; }");
__
设置此快捷文件

__
^sfile shutdown$
__
_inlineScripts.inlineScripts.helperFncs.removeCss("example");
__
关闭此快捷文件
```

高级快捷方式：隐藏快捷方式
如果快捷方式的关于字符串开头的语法字符串是文本“hidden”，那么该快捷方式将不会显示在帮助系统中（“ref”快捷方式），但仍然可以在笔记中调用。这对于防止将对用户无用的快捷方式混杂在帮助系统中，只对其他快捷方式有用，非常有帮助。

## 高级快捷方式：插件事件
__Inline Scripts__ 有一些事件可以让快捷方式做出反应：__onExpansion__ 和 __onShortcutsLoaded__。要对其中一个事件做出反应，将回调函数添加到对象 `window._inlineScripts.inlineScripts.listeners.X`（其中 "X" 是事件的名称）。将回调函数添加到与您的快捷方式文件相同的键下。请注意，如果该对象不存在，则必须创建该对象。请参阅下面的示例。

### onExpansion事件
如果一个快捷方式文件需要对快捷方式的扩展做出反应，它可以设置一个回调函数，在此事件发生时调用。回调函数可以接受一个参数：`expansionInfo`。有关`expansionInfo`的详细信息，请参见[获取有关当前扩展的信息](#高级快捷方式-获取有关当前扩展的信息)。

此外，如果回调函数返回一个字符串，那么该字符串将作为一个快捷方式进行扩展，并且结果将替换旧的扩展。

#### 示例快捷方式文件
```
__
^sfile setup$
__
const confirmObjectPath =
	_inlineScripts.inlineScripts.helperFncs.confirmObjectPath;
confirmObjectPath(
	"_inlineScripts.inlineScripts.listeners." +
	"onExpansion.testCallback",
	(expansionInfo) =>
	{
		if (expansionInfo.shortcutText.contains("d"))
		{
			// 强制展开为“hi”快捷方式的结果
			return "hi";
		}
		else
		{
			print(
				"快捷方式输入'" +
				expansionInfo.shortcutText +
				"'展开为'" +
				expansionInfo.expansionText + "'。");
		}
	});
__

__
^sfile shutdown$
__
delete _inlineScripts.inlineScripts?.listeners?.
	onExpansion?.testCallback;
__

### onShortcutsLoaded事件
有关详细信息，请参见上面的onExpansion事件。此事件的工作方式相同，只是每次从所有注册的快捷方式文件加载完整的快捷方式列表时发生。此外，它不会向回调函数传递任何参数。

## 鸣谢
- 本项目受到RPG Tips YouTube视频《如何在2021年玩游戏》中对Obsidian的描述的启发。
- 本项目在意识到和尊重obsidian-text-expander插件的基础上制作而成。
- 在这两种情况下，本插件的目标是满足对高级文本扩展功能的跨系统、跨平台操作的现有需求。

## 发布说明

请参阅[变更列表文档](https://github.com/jon-heard/obsidian-inline-scripts/blob/main/changelist.md)

***

## 待办事项
有关计划中的未来版本更改，请参阅[待办事项文档](https://github.com/jon-heard/obsidian-inline-scripts/blob/main/todo.md)。



