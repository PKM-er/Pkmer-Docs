---
uid: 2023080322154079
title: Obsidian 插件：Character Insertion
tags: ['obsidian插件', 'readme']
description: 在光标下插入指定符号的插件。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Character Insertion

> [!Note] 插件名片
> - 插件名称：Character Insertion
> - 插件作者：TakamiChie
> - 插件说明：在光标下插入指定符号的插件。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/TakamiChie/Obsidian_CharacterInsertionPlugin)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?character-insertion)

## 概述

在光标下插入指定符号的插件。

![Character Insertion](https://cdn.pkmer.cn/covers/character-insertion.gif!pkmer)

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/TakamiChie/Obsidian_CharacterInsertionPlugin/master/README.md)

---

## Readme(翻译）

下面是 [[character-insertion]] 插件的自述翻译

# 字符插入插件

一个在光标位置提前插入指定字符的插件。

![演示](demo.gif)

在设置中提前插入字符集到光标位置。

例如，如果指定的 " 输入字符 " 的值是以下值...

```
⭐
🔶
👍
```

每次执行命令时，以下字符将被插入/删除到光标位置。

```mermaid
flowchart LR
  A[没有字符] --> B["⭐"]
  B --> C["🔶"]
  C --> D["👍"]
  D --> E["没有文本 <br> (删除了👍)"]
```

何时使用它？

作者使用 Obsidian 创建了一个日记。

在日记中，每一行都用表情符号标记，但我觉得复制标记并粘贴到必要的部分很麻烦。

同样地，如果你想用固定规则标记 Markdown 文档，我认为这个插件会很有用。
