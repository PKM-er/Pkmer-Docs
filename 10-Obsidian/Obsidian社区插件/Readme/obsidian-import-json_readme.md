---
uid: 20230803204203
title: Obsidian 插件：【Readme】JSON/CSV Importer
tags: ['obsidian插件', 'readme']
description: 从一个包含数据数组的JSON文件中导入，使用Handlebars模板文件创建笔记。
author: farling42
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：JSON/CSV Importer

> [!Note] 插件名片
> - 插件名称：JSON/CSV Importer
> - 插件作者：farling42
> - 插件说明：从一个包含数据数组的JSON文件中导入，使用Handlebars模板文件创建笔记。
> - 插件分类：['obsidian插件', 'readme']
> - 项目地址：[点我访问](https://github.com/farling42/obsidian-import-json)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsidian-import-json)

## 概述

从一个包含数据数组的JSON文件中导入，使用Handlebars模板文件创建笔记。



> [!tip] 原文出处
> 
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/farling42/obsidian-import-json/master/README.md)
> 

---

## Readme(翻译）

下面是 [[obsidian-import-json]] 插件的自述翻译


# 导入JSON/CSV

[![ko-fi](https://img.shields.io/badge/Ko--Fi-farling-success)](https://ko-fi.com/farling)
[![patreon](https://img.shields.io/badge/Patreon-amusingtime-success)](https://patreon.com/amusingtime)
[![paypal](https://img.shields.io/badge/Paypal-farling-success)](https://paypal.me/farling)
![最新发布下载次数](https://img.shields.io/github/downloads/farling42/obsidian-import-json/latest/main.js)
![GitHub许可证](https://img.shields.io/github/license/farling42/obsidian-import-json)

## 说明

该插件提供了导入您喜欢的JSON和CSV表格的工具，并从该表格创建一组Obsidian笔记。对于CSV文件中的每一行，或者JSON文件中的每个命名数组中的每个对象，都将创建一个笔记。

当启用此插件时，左边栏将显示一个放大镜图标。

单击该图标将打开一个对话框窗口，其中包含四个字段：

- "选择JSON/CSV文件"允许您选择任何.json或.csv文件。

- "指定JSON数据的URL"允许您输入从中检索一些JSON数据的Web位置的URL。

- "选择模板文件"允许您选择任何.md文件，该文件应该是一个[Handlebars模板文件](https://handlebarsjs.com/guide/)。

- "选择帮助文件"允许您指定一个单独的.js文件，其中包含其他handlebars帮助函数（见下文）。

- "包含数据的字段"用于JSON文件，如果应该使用顶级对象的子对象作为数据源，而不是JSON对象的顶级。

- "每个子字段是一个单独的笔记"可以设置为指示由"包含数据的字段"标识的JSON对象实际上包含每个要创建的笔记的单独字段（而不是JSON对象是一个数组）。

- "用作笔记名称的字段"允许您指定表格中每行中的JSON字段/CSV列，该字段应该用作笔记的名称。

- "笔记名称前缀/后缀"允许在创建的笔记名称的开头（前缀）和/或结尾（后缀）添加可选文本。

- "允许在笔记名称中使用路径"将在给定的笔记名称中创建"/"以用于在您的vault中创建文件夹。如果未选择，则任何"/"的出现都将被替换为"_"。

- "如何处理现有笔记"可用于在您的vault中要覆盖或追加到现有笔记时。

- "目标文件夹的名称"允许您设置vault中的顶级文件夹名称，其中将放置所有笔记。

按下"导入"按钮后，将读取JSON/CSV文件并创建所有笔记。

### 注意事项

如果您的Handlebars模板文件尝试引用JSON数据中不是简单文本字段的内容，则生成的注释将包含文本\[object Object]。

每个这样的注释都会显示一个通知，但是打开Obsidian的开发窗口（在MS Windows上使用Ctrl+Shift+i）还会显示受影响的注释列表。

CSV解码器应该可以自动检测出实际的分隔符，可以是逗号、制表符、竖线、分号、ASCII记录分隔符（30）、ASCII单元分隔符（31）中的任何一个。（CSV文件中的空行将被忽略。）

请确保CSV文件中的列名只包含符合Handlebars要求的有效JSON变量/字段名的字符（例如，不包含空格或句点）。

对于CSV解码，检测到的分隔符、换行符和字段（列名）的列表将显示在Obsidian开发者控制台中。

如果您不想使用左侧栏中的图标，可以设置一个Obsidian热键来打开对话框。

导入程序只会读取提供的JSON文件中的第一个对象。（例如，不会从Foundry VTT数据库文件中导入完整的条目集。）

### 新的Handlebars变量

- SourceFilename：提供数据的文件的名称。
- SourceIndex：如果源数据是一个数组（对于CSV文件总是如此），则这将是数组中的索引；否则，它将是用于创建当前笔记的“包含数据的字段”对象中的字段名称。

### 附加的Handlebar函数

在构建handlebars模板文件时，您将可以访问所有的[handlebars-helpers](https://github.com/Budibase/handlebars-helpers)。

### 新的Handlebar函数

#### 表格查找

一个新的内联助手 "{{table" 可用。它用于在静态查找表中查找一个值并将其替换为另一个值。

- 第一个参数是要转换为另一个值的值。
- value1 是要与查找值进行比较的值。
- result1 是如果查找值等于 value1，则 {{table}} 助手的结果。
- value2 result2 = 第二组可能的匹配
- 等等，您需要多少对值/结果对。
（查找值和值/结果值中的任何/所有都可以是字段或固定字符串）
- value* 可以包含 [javascript 正则表达式](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions)
- result* 可以包含捕获组（例如 $1）以从匹配的字符串中复制信息。

```hb
{{!-- {{table "blue" "red" "angry" "blue" "sad" "yellow" "envious" "green" "happy"}}   --}}
{{!-- 将转换为字符串 'sad'（取 "blue" 并查找与之匹配的值/结果对） --}}
{{table lookup value1 result1 value2 result2 value3 result3}}
```

#### substring

{{substring string start length}}

这将返回一个字符串，其中包含从偏移量start（0=第一个字母）开始的'string'的部分，并且将从该偏移量返回'length'个字符（如果字符串比start+length短，则返回字符串的剩余部分）。

```hb
{{substring "HAROLD" 3 2}}
{{!-- 将返回字符串"OL"，因为3对应于字符串中的第四个字母，2表示从该位置开始返回的字符数。 --}}
```

#### strarray

{{strarray "HAROLD"}}

将提供的字符串转换为字符数组；主要用于与 #each 一起使用，以便遍历字符串中的每个字母。

#### replacereg

{{replacereg string regexp replace}}

这个函数在给定的字符串'string'中搜索与正则表达式'regexp'匹配的任何内容（不要使用toRegExp，只需提供字符串），并将每个匹配项替换为'replace'字符串（'replace'字符串可以包含来自正则表达式字符串的占位符）。

#### strsplit

{{strsplit字符串分隔符}}

这个函数将字符串在所有出现的分隔符处（可以是正则表达式）进行分割，并返回一个包含字符串所有部分的数组。

如果分隔符是一个正则表达式，你可以在正则表达式周围包含()来将分隔符包含在输出字符串的数组中（注意，分隔符是数组中的一个单独元素）。

#### setvar

{{setvar varName varValue}}

这将varValue赋值给一个名为varName的本地变量（如果它不存在，则会创建）。通常varName将是一个字符串，因此需要用双引号括起来。

可以在handlebars模板中使用表达式{{varName}}来使用该变量。

{{setVar...}}函数本身不会将任何字符串放入生成的输出中。

### 添加自定义的Handlebars助手

您可以指定一个可选的"HELPER"文件，其中应包含一些包含您额外的handlebars助手的javascript代码。有关更多信息，请参阅<https://handlebarsjs.com/api-reference/helpers.html>。

一个示例的helpers.js文件如下：

```js
function hb_farling() {
    let orig = arguments[0];
    orig += ' from Helper';
    return orig;
}

handlebars.registerHelper('farling', hb_farling);
```

重要的组件是使用助手的名称和实现助手的函数调用`handlebars.registerHelper`。最好的做法是在助手函数的名称前加上`hb_`前缀，以确保它们不会与模块中的其他函数名称冲突。（请注意，您有责任确保助手函数中的javascript不会破坏您的Obsidian vault。）

这将允许在您的模板MD文件中指定以下内容：

```md
{{farling 'Some Text'}}
```



