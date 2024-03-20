---
uid: 20240303201742
title: 手工打造一款 Word Copilot 应用，自己动手 DIY！（二）
tags: []
description: 手工打造一款 Word Copilot 应用，自己动手 DIY！（二）
author: 大圣Copilot
type: other
draft: false
editable: false
modified: 20240303201742
---

# 手工打造一款 Word Copilot 应用，自己动手 DIY！（二）

想要节省每月 20 美金的 Copilot Pro 费用吗？通过自己动手 DIY 一个 Word Copilot，你可以节省高达 240 美金！本篇笔记将教你如何利用 Obsidian 和核心插件打造属于自己的 Word Copilot 应用，让你的文字处理更高效、更智能！

## 本内容将分成 3 篇笔记呈现

### 1、安装 word copilot 所需的插件，并设置好 APIkey

### 2、日常使用场景：如何使用 word copilot 进行内容创作

### 3、如何接入本地大语言模型，实现无限续杯

接下来开始的是“日常使用场景：如何使用 word copilot 进行内容创作。”的笔记内容。

## 一、哪里可以寻找提示词模版资源？

可以到国内大厂的网页或软件上找到，需手机注册登录即可。如下：

### 1、讯飞星火

<https://xinghuo.xfyun.cn/instruction>

![image.png](https://cdn.pkmer.cn/images/20240303201857.png!pkmer)

### 2、文心一言

<https://yiyan.baidu.com/>

![image.png](https://cdn.pkmer.cn/images/20240303201914.png!pkmer)

点击“更多”可以看到“一言百宝箱”，里面有很多指令模版。

![image.png](https://cdn.pkmer.cn/images/20240303201905.png!pkmer)

### 3、智谱清言

<https://chatglm.cn/main/alltoolsdetail>

![image.png](https://cdn.pkmer.cn/images/20240303201924.png!pkmer)

![image.png](https://cdn.pkmer.cn/images/20240303201932.png!pkmer)

### 4、金山办公 WPS AI

网址如下：

<https://ai.wps.cn/>

![image.png](https://cdn.pkmer.cn/images/20240303202036.png!pkmer)

![image.png](https://cdn.pkmer.cn/images/20240303202002.png!pkmer)

### 小结

1、网页上可以学习的指令模版有：讯飞星火、文心一言 3.5、智谱清言，其中文心一言 4.0 是需要收费使用。只需要注册登录即可使用。

2、软件上可以学习的指令模版则是 wps ai，需要下载安装，网址如下：

<https://ai.wps.cn/>

网页版的指令模版，更多是内容生成方面，而 wps ai 里面的指令模版更加偏向于职场办公。各位根据自己需要寻找合适的模版。

## 二、办公指令模版的应用

通过以上几个地方找到符合自己需要的指令模版，稍加修改就以保存到自己的 Obsidian 的库中，当日常需要使用的时候就能方便找到，并高效帮助你完成任务。而不是需要从不同的网页或者软件再次寻找，有时候不常用的都可能忘记，保存到自己的 Obsidian 的库就可以避免这种事情发生。接下来我就给大家举例。

### 第一种情况最简单了，直接拿来用

首先要==确认笔记是处于“编辑状态”==，默认是“阅读视图”需要点击笔记左上角按钮切换。不同主题显示的图标不一样。下面给出两个主题的切换位置，其它主图参考修改。

![image.png](https://cdn.pkmer.cn/images/20240303202151.png!pkmer)

![image.png](https://cdn.pkmer.cn/images/20240303202156.png!pkmer)

请参考下图的 1~3、步骤开始：

![image.png](https://cdn.pkmer.cn/images/20240303202204.png!pkmer)

1、在 obsidian 中新建一个笔记，并修改以下文件名称。

2、将下面的提示词复制到笔记当中。

#### prompt

请帮我写一份<教案>大纲，大纲的主题是：<效率神器 word copilot>。

然后在空白处点击鼠标左键，重新获得光标位置。

3、点击工具栏的 Textgenerator，开始生成内容。

![image.png](https://cdn.pkmer.cn/images/20240303202215.png!pkmer)

最终生成的结果如下：

![image.png](https://cdn.pkmer.cn/images/20240303202223.png!pkmer)

**注意：**

插件 [[obsidian-textgenerator-plugin|Textgenerator]] 有三种方式执行指令：

==1、鼠标光标放置在全文的末尾的空白处，如本例就是将整个文本内容作为指令发送给 AI 生成内容。==

==2、鼠标光标放置在一行或者是一个段落的末尾，则是将这一行或者是一个段落的文本内容作为指令发送给 AI 生成内容。==

==3、使用鼠标左键选中一段文字，则是将选中的本内容作为指令发送给 AI 生成内容。==

由于篇幅限制不便于详细说明，如果有需要请在评论区留言告诉我，想知道的人多，下次录制个视频单独说明。

### 第二种情况，将指令修改成通用性更高的模版

### 1、以文案大纲指令模版为例

**改写目的：**

1、让指令模版更加简洁，便于查看。如果是比较长的指令，这一点优势会更加明显。

2、指令更加清晰，AI 更容易理解指令，避免指令过长 AI 理解不完成，造成输出内容偏离需求。

#### 1.1 以三个双引号标记手动输入信息

使用三个连续的 """ 符号（也可以是其它连续三个相同的符号，只要你自己理解），将需要手动输入调整的信息标记出来。

目的：是告诉 AI，这个标记内的信息是需要用户手动输入的信息。如下：

"""

**类型**：教案

**主题信息**：效率神器 word copilot

"""

#### 2.2 如何改写提示词？

只需按照模版大体结构，使用日常口语的形式重新组织即可。

然后使用 < > 符号（也可以是花括弧号、中括号等），将需要手动输入的信息部分标记出来，名称同上面手动输入的信息保持一致即可。

##### prompt

请帮我写一份<类型>大纲，大纲的主题是：<主题信息>。

#### 2.3 完整指令如下

![image.png](https://cdn.pkmer.cn/images/20240303202235.png!pkmer)

执行指令后生成的文案同上。

## 三、内容写作的应用

在插件“GPT-3 Notes”设置界面，按照图中所示修改指令如下：

改善：提高写作水平，增强表达力。

改写：重写部分句子或段落，表达更加流畅地道。

二创：增加或调整部分内容，文章变得更加丰富。

润色：润色明显影响文章风格和表达的部分。

续写：续写文本，保持相同的语气和风格。

改写成口吻：专业

改写成口吻：口语

改写成口吻：幽默

改写成口吻：热情

改写成口吻：礼貌

改写成口吻：简洁

改写成口吻：优雅

![image.png](https://cdn.pkmer.cn/images/20240303202252.png!pkmer)

修改好后，打开一篇笔记，然后按住鼠标左键不松开，移动鼠标选中需要修改的笔记内容。如下图我选中的文本。

![image.png](https://cdn.pkmer.cn/images/20240303202259.png!pkmer)

点击工具栏的“GPT Notes: 写作”按钮。

![image.png](https://cdn.pkmer.cn/images/20240303202306.png!pkmer)

在弹出的窗口选择{{selection}}，如下图。含义是，将之前选中的文本作为修改调整的内容。

![image.png](https://cdn.pkmer.cn/images/20240303202323.png!pkmer)

然后，通过下拉列表选择一个指令。这里我们==选择“改写成口吻：幽默 ”==，你也可以选择其他的执行。

![image.png](https://cdn.pkmer.cn/images/20240303202336.png!pkmer)

然后点击生成笔记按钮，如下图：

![image.png](https://cdn.pkmer.cn/images/20240303202343.png!pkmer)

生成结果：

![image.png](https://cdn.pkmer.cn/images/20240303202351.png!pkmer)

如果不满意，点击按钮 1“==重新生成==”。如果满意点击安妮 2“==添加到文档==”。

![image.png](https://cdn.pkmer.cn/images/20240303202400.png!pkmer)

用同样的方法，==使用“二创：增加或调整部分内容，文章变得更加丰富。”==命令。

![image.png](https://cdn.pkmer.cn/images/20240303202407.png!pkmer)

生成的结果：

![image.png](https://cdn.pkmer.cn/images/20240303202417.png!pkmer)

**注意**

==生成的文档，是添加到选中文本段落的结尾处，需要提前留出空白显示内容。==

## 四、chat 指令模版的应用

### 第一种情况，直接复制指令生成

这种形式，就如同你在网页版 chatgpt 使用体验基本一致，发送指令给 ai 开始 chat 聊天模式。使用到的插件是 "copilot"。插件界面布局介绍参考下图：

![image.png](https://cdn.pkmer.cn/images/20240303202425.png!pkmer)

#### 使用步骤如下

步骤一、点击图中红圈 1 处，展开右侧边窗口。

步骤二、点击图中红圈 2 或者是红圈 3 处，显示 copilot 插件。

步骤三、在输入框输入指令，例如：

以“西班牙旅游”为主题，给 10 个爆款标题，小红书风格，带表情图标。

然后点击红圈 9 处 "send" 发送指令，稍等一会会生成内容结果，如上图。

#### 界面说明

- 红圈 4，是“复制”按钮，复制对话内容。
- 框选 5，是“停止生成”按钮，作用是在生成内容的过程中，停止生成。
- 框选 6，是“新建对话”按钮，当前的对话内容将清空，不会保存。如果有重要内容请提前保存好。
- 框选 7，是“保存为笔记”按钮，将当前对话内容保存为笔记。默认保存的文件目录是在“copilot-conversations”文件夹。可以在插件设置界面修改。

![image.png](https://cdn.pkmer.cn/images/20240303202446.png!pkmer)

- 框选 8，是“与笔记对话”按钮，前面需要选择“chat”模式，将当天活动的笔记发送给 AI，开始于笔记对话 。
- 下来列表切换 AI 模型

![image.png](https://cdn.pkmer.cn/images/20240303202453.png!pkmer)

### 第二种情况，与打开的笔记对话

假设打开一篇介绍 Copilot 插件的文章，点击框选 8“与笔记对话”按钮，出现提如下：

![image.png](https://cdn.pkmer.cn/images/20240303202504.png!pkmer)

提示翻译对照

![image.png](https://cdn.pkmer.cn/images/20240303202512.png!pkmer)

这下就可以开始语笔记对话了。我们先让他概括一下笔记。

![image.png](https://cdn.pkmer.cn/images/20240303202520.png!pkmer)

你也可以使用其它问句开始对话。篇幅限制就不再举例了，操作和网页基本一样。

## 总结

本篇笔记先是教大家在哪里找到指令模版。然后根据自己需要修改与调整指令，使用插件“Textgenerator”应用于日常办公。生成的文本如果需要再次调整，可以通过插件“GPT-3 Notes”进行改写。最后就是介绍了插件|“copilot”：一种方式，就是常用的 chat 对话模式，直接发送指令给 ai 完成任务。另外一种，就是与激活的笔记对话，让 AI 总结笔记类容。

由于篇幅限制，笔记里面讲解的重要步骤。

[[手工打造一款Word Copilot应用-3]]
