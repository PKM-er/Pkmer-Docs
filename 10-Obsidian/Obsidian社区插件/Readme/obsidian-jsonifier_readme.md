---
uid: 20230803204204
title: Obsidian 插件：【Readme】JSONifier
tags: ['转换工具', 'obsidian插件', 'readme']
description: 使用JSON.stringify()或JSON.parse()高亮文本，并复制到剪贴板。
author: Kjell Connelly
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：JSONifier

> [!Note] 插件名片
> - 插件名称：JSONifier
> - 插件作者：Kjell Connelly
> - 插件说明：使用JSON.stringify()或JSON.parse()高亮文本，并复制到剪贴板。
> - 插件分类：['转换工具', 'obsidian插件', 'readme']
> - 项目地址：[点我访问](https://github.com/KjellConnelly/obsidian-jsonifier)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsidian-jsonifier)

## 概述

使用JSON.stringify()或JSON.parse()高亮文本，并复制到剪贴板。



> [!tip] 原文出处
> 
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/KjellConnelly/obsidian-jsonifier/master/README.md)
> 

---

## Readme(翻译）

下面是 [[obsidian-jsonifier]] 插件的自述翻译


## Obsidian JSONifier

这个插件的作用只是通过`JSON.stringify(text)`或`JSON.parse(text)`将高亮文本转换为JSON格式。

### 如何使用

1. 高亮文本以进行转换
2. 使用热键解析所选内容（默认为 `Cmd+Alt+[`）或将所选内容转换为字符串（默认为 `Cmd+Alt+[`）。如果需要，您可以更新热键设置。
3. 粘贴到您想要的位置。（注意，所选内容必须是有效的 JSON 字符串才能解析。因此，如果您复制的是一个 JSON 字符串，请确保选择包围它的引号）。

##### 也可以用来验证JSON

正如你可能知道的，如果字符串不是有效的JSON，`JSON.parse()`也会抛出一个错误。因此，如果你正在编写一个JSON代码块，或者在JSON格式中编辑前置数据，你可以使用`JSON.parse()`函数来检查你的代码。

我正在使用**Obsidian.md**编写markdown，但我是一个需要使用JSON将我的markdown作为字符串发送的开发者。

# 我的网站

你好，欢迎来到*我的网站*。它非常酷。以下是你应该了解的三件事。

1. 我喜欢猫。
2. 我喜欢狗。
3. ???
4. 利润！

所以现在我们需要使用这个插件将其转换为JSON字符串。我将其高亮显示并使用JSON.stringify()函数。结果将复制到剪贴板，所以将其粘贴到任何地方。那么这个字符串会是什么样子？

```json
"# 我的网站\n\n你好，欢迎来到*我的网站*。它非常酷。以下是你应该了解的三件事。\n\n1. 我喜欢猫。\n2. 我喜欢狗。\n3. ???\n4. 利润！"
```

好的，很酷！但等等...我一个星期后回到这个项目，我想编辑我的markdown文件...但我只保存了我的JSON字符串！哦不！
![alt text](grinch.gif)

现在怎么办？好吧，将上面的JSON字符串高亮显示并使用JSON.parse()函数。现在结果作为原始的markdown被复制到剪贴板上。所以粘贴它并再次进行编辑。



