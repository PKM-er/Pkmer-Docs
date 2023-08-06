---
uid: 2023080322165307
title: Obsidian 插件：【Readme】Custom Frames
tags: ['第三方工具集成', '效率', 'obsidian插件', 'readme']
description: 让 Obsidian 直接打开你预设的网站，你还可以将这些网站固定成图标，扩展你OB能力，或者将熟悉的应用集成到OB中。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Custom Frames

> [!Note] 插件名片
> - 插件名称：Custom Frames
> - 插件作者：Ellpeck
> - 插件说明：让 Obsidian 直接打开你预设的网站，你还可以将这些网站固定成图标，扩展你 OB 能力，或者将熟悉的应用集成到 OB 中。
> - 插件分类：[' 第三方工具集成 ', ' 效率 ', 'obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/Ellpeck/ObsidianCustomFrames)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsidian-custom-frames)

## 概述

让 Obsidian 直接打开你预设的网站，你还可以将这些网站固定成图标，扩展你 OB 能力，或者将熟悉的应用集成到 OB 中。

![Custom Frames](https://cdn.pkmer.cn/covers/obsidian-custom-frames.PNG!pkmer)

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/Ellpeck/ObsidianCustomFrames/master/README.md)
>

---

## Readme(翻译）

下面是 [[obsidian-custom-frames]] 插件的自述翻译

# Obsidian 自定义框架

一个 Obsidian 插件，使用自定义样式的 iframe 将 Web 应用程序转换为窗格。还附带了 Google Keep、Todoist 等预设。

![插件运行时的屏幕截图，您可以看到Google Keep作为窄侧窗格附加在右侧](https://raw.githubusercontent.com/Ellpeck/ObsidianCustomFrames/master/screenshot.png)

![插件运行时的屏幕截图，您可以看到Google日历在中心打开，并且鼠标悬停在相应的功能按钮上](https://raw.githubusercontent.com/Ellpeck/ObsidianCustomFrames/master/screenshot-big.png)

![插件的设置界面截图](https://raw.githubusercontent.com/Ellpeck/ObsidianCustomFrames/master/settings.png)

## 🤔 使用方法

要使用此插件，只需进入其设置并添加一个新的框架，可以选择使用插件附带的预设框架，也可以自定义编辑一个框架。

### 🪟 窗格模式

要将自定义框架作为窗格打开，您可以使用“自定义框架：打开”命令。

还有很多设置可以进一步自定义您的框架，包括向站点添加自定义 CSS，添加带有丝带图标的框架，将框架显示在编辑器的中心位置等等。

### 🗒️ Markdown 模式

您还可以在 Markdown 文档中显示自定义框架。自定义框架添加了一种特殊的代码块语法，将代码块转换为实时预览和阅读模式中的自定义框架。您的代码块应该如下所示：

~~~
```custom-frames
frame: 您的框架名称
```
~~~

此外，您还可以向嵌入式传递自定义样式设置，这样您就可以更改嵌入式的高度等内容，还可以添加一个附加后缀，该后缀将附加到框架的常规 URL 上，这对于显示 Google Keep 中的特定笔记等内容非常有用。

以下是使用 [Google Keep预设](#-presets) 的示例：

~~~
```custom-frames
frame: Google Keep
style: height: 1000px;
urlSuffix: #reminders
```
~~~

很遗憾，Obsidian Mobile 不运行在 Electron 上，Electron 允许以非常少的限制显示 iframe 和 webviews，涉及到 cookie、跨域资源共享等。这意味着很多网站在 Obsidian Mobile 上无法正常工作，特别是那些需要登录的网站。然而，当你创建一个 frame 时，你可以切换“在移动设备上禁用”选项，以在 Obsidian Mobile 中隐藏仅限桌面的 frame。

## 📦 预设

默认情况下，Custom Frames 预设了一些快速启动流行网站的新窗格。

- [Obsidian 论坛](https://forum.obsidian.md/)
- [Google Keep](https://keep.google.com)，为侧边栏的窄窗格进行了优化
- [Google 日历](https://calendar.google.com/calendar/u/0/r/day)，通过删除一些按钮进行了优化。使用左上角的按钮关闭侧边栏。
- [Todoist](https://todoist.com)，通过删除一些按钮和减小边距，为窄（半高）侧边栏进行了优化。
- [Notion](https://www.notion.so/)（如果用作侧边栏，建议关闭 Notion 的侧边栏）
- [Twitter](https://twitter.com)

如果您创建了一个您认为其他人会喜欢的窗格，不要犹豫，使用 [新的预设](https://github.com/Ellpeck/ObsidianCustomFrames/blob/master/src/settings.ts#L5) 创建一个拉取请求。

## 🛣️ 路线图

- ~~允许为每个窗格设置自定义图标~~
- ~~允许在 Markdown 代码块中显示自定义框架~~
- ~~添加在主视图中打开框架的功能按钮~~
- 允许创建在自定义框架中打开而不是浏览器的链接
- 可能允许在 iframes 中执行自定义 JavaScript（尽管仍需探索安全性影响）
- 添加全局设置，使弹出窗口在新的 Obsidian 窗口中打开，而不是默认浏览器
- 在 Markdown 模式中添加更多选项，如允许返回和前进按钮

## ⚠️ 已知问题

自定义框架存在一些已知问题。如果您遇到其中任何问题，请**不要**在问题跟踪器上报告。

- 在 Obsidian **0.14.2 及更低版本**中，许多网站在自定义框架中无法正常运行。这是因为这些旧版本没有相应的功能，无法为框架提供与 cookie 和标头相关的特殊附加功能。
- 在 Obsidian **0.14.5 及更低版本**中，拖动或移动窗格时，将鼠标悬停在自定义框架上会导致其卡住或表现出意外行为。

## 🙏 致谢

感谢 [lishid](https://github.com/lishid) 在使 Obsidian 中的 iframe 正常工作方面提供的帮助，特别是在像这样的用途上。同时也感谢他们*激励*我将 Obsidian Keep 转变为一个更多功能的插件，这就是 Custom Frames 诞生的原因。

如果你喜欢这个插件并想支持它的开发，你可以通过点击这个漂亮的图片在我的网站上进行支持！

[![Support me (if you want), via Patreon, Ko-fi or GitHub Sponsors](https://ellpeck.de/res/generalsupport.png)](https://ellpeck.de/support)
