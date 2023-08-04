---
uid: 2023080322154356
title: Obsidian 插件：【Readme】Chat View
tags: ['obsidian插件', 'readme']
description: 聊天视图让您可以快速轻松地在 Markdown 文件中创建优雅的聊天 UI。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Chat View

> [!Note] 插件名片
> - 插件名称：Chat View
> - 插件作者：Aditya Majethia
> - 插件说明：聊天视图让您可以快速轻松地在 Markdown 文件中创建优雅的聊天 UI。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/adifyr/obsidian-chat-view)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsidian-chat-view)

## 概述

聊天视图让您可以快速轻松地在 Markdown 文件中创建优雅的聊天 UI。

![Chat View](https://cdn.pkmer.cn/covers/obsidian-chat-view.jpeg!pkmer)

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/adifyr/obsidian-chat-view/master/README.md)
>

---

## Readme(翻译）

下面是 [[obsidian-chat-view]] 插件的自述翻译

# Obsidian 聊天视图插件

Chat View 让您可以在 Markdown 文件中快速轻松地创建优雅的聊天界面。

![Obsidian 聊天视图概览](https://github.com/adifyr/obsidian-chat-view/raw/master/images/obsidian_chatview_plugin.jpg)

## 用法

每个聊天消息必须以 `'<'`、`'>'` 或 `'^'` 作为前缀，分别表示左对齐、右对齐和居中对齐的消息。每个聊天消息由 3 个部分组成：标题、消息和副文本。这些部分由 `'|'` 字符分隔。请看下面的示例，了解它是如何工作的：

~~~
```chat
< 菲茨威廉·达西 | 我违背了我的判断，违背了家人的期望...你出生的低劣，我的地位和环境。 | 1846年7月23日下午5:42
> 伊丽莎白·班纳特 | 等一下，达西先生，我恐怕我不明白你的意思。 | 1846年7月23日下午5:42
```
~~~

以上代码将生成以下聊天视图：

![Chat View Preview 1](https://github.com/adifyr/obsidian-chat-view/raw/master/images/chatview_preview1.jpg)

💡 **如果您想在消息中显示管道 `|` 字符，您只需要用反斜杠进行转义，就像这样：`\|`。**

## 添加分隔符和注释

您可以通过在一行上输入 `'...'` 来向聊天视图中添加分隔符。要添加注释，请以 `'#'` 字符开头的行。请看下面的示例：

~~~
```chat
< 费茨威廉·达西 | 只要听我说，好吗？你根本无法想象我为了说这句话所需要鼓起的勇气。
```

# 丽茜凝视着达西，脸上带着困惑的表情。达西现在大汗淋漓。这只会让她更加不安。发生了什么事？
> 伊丽莎白·班纳特 | 达西先生，你没事吧？你为什么来这里？
...
< 菲茨威廉·达西 | 我来这里是为了告诉你，我爱上了你。我深深地、毫无保留地爱上了你。
```

## 自定义
为了增加组织性和吸引力，该插件还包括自定义聊天气泡的标题大小、标题颜色和最大宽度的功能。以下是您可以为聊天视图配置每个选项的方法：

- ### 标题大小
    聊天视图允许您从5种不同的大小中选择聊天气泡的标题：`[h2, h3, h4, h5, h6]`。只需将以下配置行添加到您的代码块中即可：`{header=<hX>}`。

- ### 标题颜色
    您还可以按发言人更改标题的颜色。您可以选择最多13种颜色：`[red, green, blue, yellow, orange, purple, grey, brown, indigo, teal, pink, slate, wood]`。只需将类似于以下的颜色配置添加到您的代码块中：`[人名=颜色, 人名=颜色]`。

- ### 最大宽度
    您可以通过将以下内容添加到配置行中来指定聊天气泡的最大宽度：`{..., mw=宽度}`。该插件接受9种宽度（以百分比表示），从50%到90%，间隔为5%。即：`[50, 55, 60, 65, 70, 75, 80, 85, 90]`。

下面的示例展示了这三个选项如何协同工作。
~~~

```chat
{header=h3, mw=75}
[Elizabeth Bennett=blue, Fitzwilliam Darcy=yellow]

> Elizabeth Swann | 我...但是...达西先生，你不可能是认真的。这太荒谬了。经历了这么多，我以为...
> | 是的。我愿意嫁给你。| 1846年7月23日下午6:02。

达西已经没有话可说了。他们已经达到了超越一切习惯、一切礼节的地步。剩下的只有纯粹的爱。只有它能够说话。

## 支持WebVTT！

从版本1.2.0开始，Obsidian Chat View现在支持WebVTT格式！不要使用常规的`chat`标题，而是给你的代码块命名为`chat-webvtt`。然后将你的WebVTT代码粘贴在其中！有几点需要注意：

1. 请确保你正确地遵循WebVTT格式。确保你的代码从第一行开始以`WEBVTT`开头。
2. 你可以使用元数据自定义聊天视图。**在`WEBVTT`和你的元数据之间不应该有空行。**
3. 你可以在元数据中将`Self`参数设置为逗号分隔的名称列表。所有来自上述名称的聊天气泡将出现在右侧，而不是默认的左侧，以表示指定人物的聊天是第一人称的。
4. 插件只能识别提示的正文中的语音标签（`<v></v>`）。其他任何内容都将被视为普通文本。

以下是由WebVTT代码生成的聊天视图示例。

~~~
```chat-webvtt
WEBVTT
Self: John Smith, fjorn@gmail.com
MaxWidth: 70
Header: h3

00:00:00.000 --> 00:01:04.270
<v John Smith>No one touch it, it just works. It is the definition of an absolutely perfect Chat View. Do not defile it! Or else...</v>

00:00:05.790 --> 00:00:06.930
<v John Smith>Going forward, obviously.</v>

00:00:04.310 --> 00:00:04.940
<v Bob Anderson>Uhm?</v>

00:00:04.310 --> 00:00:04.940
<v fjorn@gmail.com>Uhm - would be correct! I have no idea what John is talking about!</v>
```

~~~

以上代码将生成以下聊天视图：

![Chat View WebVTT Preview](https://github.com/adifyr/obsidian-chat-view/raw/master/images/chatview_preview_webvtt.jpg)

## 简约模式

从版本1.2.0开始，Chat View插件现在支持简约模式。您可以通过在代码块的配置行中添加以下内容来启用简约模式：`{..., mode=minimal}`。这将生成一个没有气泡和紧凑间距的Chat View，使其看起来更像是一个论坛帖子。以下示例展示了简约模式的效果：

~~~

```chat
{mw=90,mode=minimal}
[Albus Dumbledore=teal, Minerva McGonagall=pink]

< Albus Dumbledore | 我早该知道你会在麦格教授周围。毕竟，你忍不住要见那个男孩，对吧？ | 1982年4月25日上午2:06
< Minerva McGonagall | 晚上好，邓布利多教授。告诉我，这些传闻真的是真的吗？ | 1982年4月25日上午2:07
< Albus Dumbledore | 很遗憾，教授，它们是真的。好的和坏的都有。哈格里正在带着那个男孩来。 | 1982年4月25日上午2:08
```

~~~

上面的代码块将生成以下Chat View：

![Chat View简约模式](https://github.com/adifyr/obsidian-chat-view/raw/master/images/chatview_preview_minimal.jpg)

## 在聊天视图消息中支持Markdown和HTML

在Chat View插件的1.3.0版本发布之后，Chat View的消息部分现在支持HTML和Markdown渲染！这意味着您现在可以在Chat View消息中包含HTML和Markdown元素！**看一下：**

![Chat View Markdown & HTML Support](https://github.com/adifyr/obsidian-chat-view/blob/master/images/chatview_preview_md_html.gif)

上面的Chat View是从以下代码块生成的：

~~~

```chat
[Brian Williams=pink, Stacy Adams=orange]
{mw=80}
< Brian Williams | <h6>Pier Trip Suggestions</h6> Hi Stacy, I'm planning to go on a trip to a pier in the state! So, I wanted to ask if you had any suggestions. I have a couple of pre-conditions though: <ul><li>It needs to be a beautiful spot. [So that I can take loads of pics!](https://theculturetrip.com/north-america/usa/california/articles/the-coolest-piers-in-california-from-santa-monica-to-santa-barbara/)</li><li>It needs to be affordable. [This one's kinda expensive.](https://www.tripadvisor.in/Attraction_Review-g60713-d102779-Reviews-Pier_39-San_Francisco_California.html)</li></ul> **So, can you please help me out?** I'll be sure to send over a souvenir. Thanks! | Yesterday at 5:45 PM
> Stacy Adams | ![Santa Monica Pier](https://images.hdqwalls.com/wallpapers/santa-monica-ferris-wheel-colorful-golden-hour-hz.jpg) <h6>How About Santa Monica?</h6> Jutting out into the Pacific Ocean at the intersection of Ocean and Colorado, it symbolizes the *Heart of Santa Monica* and is one of the most photographed locations in the world. It also has affordable rentals and accomodation! | Today at 10:30 AM
```

~~~

### ⚠️ 重要
覆盖整行的Markdown语法，例如标题（#），列表（-），换行（---）等，将以相同的格式呈现整个聊天视图消息。对于这种情况，建议使用HTML标签，就像上面的示例中使用的那样。

---

## 聊天记录（Zendesk，客户支持，CRM）支持！

从版本1.4.0开始，Obsidian Chat View现在包括一个新模式，可以从Zendesk和其他CRM等客户支持平台渲染聊天记录。要使用Transcript模式，只需将代码块命名为`chat-transcript`。以下是聊天记录格式的示例：

```
(1:38:05 PM) *** Firstname Lastname加入了聊天 ***
(1:38:39 PM) Firstname Lastname：这是时间和姓名之后的聊天文本。
(1:40:26 PM) Other-Firstname Other-Lastname：当然，谢谢！
(2:21:29 PM) *** Firstname Lastname已离开 ***
```

然而，在插件中，Transcript模式包括与其他聊天模式相同的样式和格式功能。它甚至有分隔符。但是，还有一些添加内容：

1. 现在在代码块的开头使用`>`字符来指定哪些参与者的聊天视图块应该对齐在左侧。
2. 聊天记录支持`()`和`[]`两种时间戳格式。
3. 插件中允许两种类型的注释格式：
    a. `(2:21:29 PM) *** Firstname Lastname已离开 ***` - 带有时间戳和三个星号`***`的格式。
    b. 代码块中的任何一行，如果不符合有效的聊天记录格式（`[Timestamp] Name: Message`），也将被视为注释。

所有这些都汇集成了下面所示的聊天视图类型：

~~~

```chat-transcript
> Other-Firstname Other-Lastname
[Firstname Lastname=blue, Other-Firstname Other-Lastname=pink]
{header=h4, mw=80}

(1:38:05 PM) *** Firstname Lastname加入了聊天。 ***
(1:38:39 PM) Firstname Lastname：这是时间和姓名之后的聊天文本。
...
[1:40:26 PM] Other-Firstname Other-Lastname：当然，谢谢！很高兴能遇到一个能帮助我解决这个问题的人。
Firstname Lastname已离开此聊天。
```

~~~

上面的代码块将呈现以下聊天视图：

![Chat View With Transcripts Support](https://user-images.githubusercontent.com/86793553/206829253-6c4da4ff-3537-458d-ab45-c501d1f43262.png)

感谢阅读！

该项目是根据[MIT许可证](LICENSE)发布的。



