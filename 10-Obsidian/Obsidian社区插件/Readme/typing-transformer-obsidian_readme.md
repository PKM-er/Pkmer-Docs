---
uid: 2023080322285361
title: Obsidian 插件：【Readme】Typing Transformer
tags: ['obsidian插件', 'readme']
description: 改进的、可配置的自动格式化输入
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Typing Transformer

> [!Note] 插件名片
> - 插件名称：Typing Transformer
> - 插件作者：aptend
> - 插件说明：改进的、可配置的自动格式化输入
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/aptend/typing-transformer-obsidian)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?typing-transformer-obsidian)

## 概述

改进的、可配置的自动格式化输入

![Typing Transformer](https://cdn.pkmer.cn/covers/typing-transformer-obsidian.gif!pkmer)

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/aptend/typing-transformer-obsidian/main/README.md)
>

---

## Readme(翻译）

下面是 [[typing-transformer-obsidian]] 插件的自述翻译

<p align="right"><strong>英语</strong> | </p>

# Typing Transformer Obsidian

Typing Transformer 是一个功能丰富的插件，可以彻底改变您的打字方式。它具有清晰的内部规则、灵活的配置，并允许用户在打字时拥有自定义的自动格式化体验。

Typing Transformer 受到了 [Easy Typing](https://github.com/Yaozhuwa/easy-typing-obsidian) 的启发。感谢 Easy Typing！

*注意：该实现依赖于 CodeMirror6，并且仅在 Obsidian 0.14.15 或更高版本的非遗留模式下工作*

Typing Transformer 目前支持三种类型的转换规则：

1. [输入转换规则](#input-conversion-rules)
2. [删除规则](#deletion-rules-tbd)
3. [选择规则](#selection-rules)

此外，Typing Transformer 还具有自动格式化功能，例如在多种语言和特定符号之间 [插入空格](#formatting-lines-with-spaces)。

0.3.0 有什么新功能？

- 更好的 README.md
- 删除规则
- 选择现在支持插入多个字符
- 编辑器中改进了错误消息
- 可调整大小的规则编辑器
- 修复了自动格式化中的错误（在输入 URL 和时间时不再添加空格）

特别感谢 [@caasion](https://github.com/caasion) 在 0.3.0 中的出色思考和工作。

## 输入转换规则

输入转换规则非常灵活，可以以创造性的方式使用。这些规则包括扩展缩写短语、自动配对符号、转换全角字符、自动纠正等等！

输入转换规则的语法如下：

```coffeescript
'<触发词>' -> '<结果>'
```

*尖括号中的内容将被替换*

### 示例 1：展开缩写短语

![dpx](https://user-images.githubusercontent.com/49832303/184522399-e0c25d5b-4aad-4c0e-a03a-956fbf3965bb.gif)

当输入 `dp` 并跟随 `x` 时，光标将位于 `x` 之后，从而触发转换。

然后，所有内容将被替换为结果：`don\'t panic|`。

*注意：`|` 表示转换后的光标位置。（您可以将其放置在文本的任何位置。）*

### 示例 2：符号的自动配对

![auto-pair](https://user-images.githubusercontent.com/49832303/185430735-8601bd41-077f-417c-96bc-c57f3428bf5a.gif)

规则的触发器是 `《`，规则会自动配对中文书签，并将光标放置在中间。

### 示例 3：将两个全角字符转换为一个半角字符

![auto-pair and transformation](https://user-images.githubusercontent.com/49832303/185430769-84c12d45-0ee4-434c-80a6-04466cebb9bd.gif)

这个规则与上面的规则一起使用。

1. 当输入 `《` 时，第二个规则会自动配对它。
2. 当再次输入 `《` 时，第一个规则将优先匹配，因为它匹配。
3. 自动配对规则暂时不会有任何操作。结果为 `《《|》`。
4. 然后，第一个规则将其转换为 `<`。

*注意：**先出现的规则优先级更高**，因此在自动配对之前必须先进行全角字符的转换*

**更多示例可以在此插件的设置页面中找到。祝您转换愉快！**

## 删除规则

删除规则是输入转换规则的反向操作；删除特定字符作为触发器。这些规则可以与自动配对规则一起使用，以完全提升您的打字体验。

删除规则的语法如下：

```coffeescript
'<删除触发器>' -x '<结果>'
```

*尖括号中的内容将被替换*

### 示例 1：删除一对括号

![pair deletion](https://user-images.githubusercontent.com/103465188/186443468-46a21ef9-1bc6-4de2-a1bd-187c8069e8e8.gif)

### 示例 2：快速删除星号

![删除星号](https://user-images.githubusercontent.com/103465188/186443487-484bd969-2c16-42ec-824c-cebc1799431c.gif)

## 选择规则

当输入**一个**触发字符时，选择规则将帮助您在所选文本的两侧插入字符。

选择规则的语法如下：

```coffeescript
'<触发字符>' -> '<左插入>' + '<右插入>'
```

*尖括号中的内容将被替换*

### 示例 1：选择自动配对的<尖括号>

![selection](https://user-images.githubusercontent.com/49832303/185430794-c734358b-8dd4-4cc0-9856-d6e39d27b777.gif)

尖括号的自动配对使得输入 HTML 变得更加容易！

以下规则是默认支持的：

```coffeescript
'·'  -> '\`' + '\`'
'￥'  -> '$' + '$'
'《'  -> '《' + '》'
'<'  -> '<' + '>'
```

## 使用空格格式化行

在输入多种语言时，在不同语言块之间插入空格可以优化阅读体验。毫无疑问，Typing Transformer 包含了可以帮助的功能。

![add spaces](https://user-images.githubusercontent.com/49832303/175770015-6dba97d6-5eb2-4d30-a28d-e7ae061c2e7a.gif)

自动格式化通过句子片段触发；当输入标点符号（如逗号、句号或空格）时，会插入空格。在处理时，`⭐️`（区域指示器）将指示起始点，当前光标位置将作为终点。

*注意：目前自动格式化仅支持中文和英文。*

要了解更多内部工作原理，请参阅 [How it works.md](https://github.com/aptend/typing-transformer-obsidian/blob/main/docs/How%20it%20works.md)。
