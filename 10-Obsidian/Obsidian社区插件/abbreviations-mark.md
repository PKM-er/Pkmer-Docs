---
uid: 20241026225112
title: Obsidian 插件：Abbreviations and Acronyms
tags: [数据处理, 文字处理, 自动化与AI, obsidian插件]
description: 实现缩写词和首字母缩略词（术语）的自动标记。
author: Chenghuang
type: auto
draft: false
editable: false
modified: 20250111172019
---

# Obsidian 插件：Abbreviations and Acronyms

> [!example] 插件名片
> - 插件名称：Abbreviations and Acronyms
> - 插件作者：dragonish
> - 插件版本：1.1.0
> - 插件分类：[' 数据处理 ', ' 文字处理 ', ' 自动化与 AI', 'obsidian 插件 ']
> - 插件概述：`Abbreviations and Acronyms` 插件通过读取 `笔记属性（Properties）` 中特定 `属性名称` 的 `属性值` 的定义语句，会自动监测笔记中的 `略语` 并为它们添加下划虚线，鼠标悬停在上方时还会显示其定义，有助于笔记内的术语标准化工作
> - 插件项目地址：[点我跳转](https://github.com/dragonish/obsidian-abbreviations)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?abbreviations-mark)

## 术语解说

- `Abbreviation（缩写）` 本身指的是在使用拼音文字的语言中，对于常用词组（多为专有名词）及少数常用词所采用的简便写法，如以 cm 指代 centimeter，No. 指代 numerō 或 UN 指代 the United Nations 等情况，缩写后所得到的词称为 `略语`。[^1] 类似于汉语中的 `简称`，如“四化”指代“四个现代化”。
- `Acronym（首字母缩略词）` 常见于英语和法语，它指的是那些以词的形式发音，而非逐字母拼读的 `略语`，如以 NATO 指代 North Atlantic Treaty Organization（北约），或是法语中以 UNESCO 指代 Organisation des Nations unies pour l'éducation, la science et la culture（联合国教科文组织）。
- 此外还存在所谓的 `Initialism`，即逐字母拼读的 `略语`，如以 BBC 指代 British Broadcasting Corporation（英国广播公司）或以 NBA 指代 National Basketball Association（美国职业篮球联赛）。事实上，不同词典对 `Initialism` 和 `Acronym` 的区分并不统一，有的词典会将二者归为一类，在本插件中就没分得那么细。
- 在了解了基本概念之后，需要明确的是，本插件只是借用了词汇学中的术语，实际上，这里的“Acronym”完全可以不是 `略语`，而是一个完整的词语（但中间不能有空格）。`定义语句` 的后半部分也完全可以不是单个术语而是长句解释。下文用 `略语` 指代 `定义语句` 中的前半部分仅仅是出于简洁需要。
- 本插件适合用在术语不具有全局性的某篇文献的阅读笔记中，举例来说，我并非医学专业，只是出于个人保健需要阅读中国高血脂防治指南，那么阅读笔记就可以用这个插件来进行术语略语工作，而不像 `note definitions` 插件那样需要单独增加一个笔记文件，`note definitions` 插件的使用方法详见 [PKMer_Obsidian 插件：note definitions 创建属于你自己的术语表]( https://pkmer.cn/show/20240823150047 )。

## 插件基本用法

在设置中指定某个 `属性名称` 为存放 `定义语句` 的位置，`Abbreviations and Acronyms` 插件就会自动监测笔记中的 `略语`，并为它们添加下划虚线，你既可以用字符串写 `定义语句`：

```
---
abbr:
  - "HTML: HyperText Markup Language"
  - "CSS: Cascading Style Sheets"
---
```

也可以用键值对写：

```
---
abbr:
  - HTML: HyperText Markup Language
  - CSS: Cascading Style Sheets
---
```

值得一提的是，如果 `定义语句` 是由字符串写成，且 `OB系统设置→编辑器→笔记属性` 选择 `显示` 或 `源码` 的情况下，可以在阅读模式的正文中直接编辑 `定义语句`

---

在插件设置中开启 `Enable Markdown Extra syntax support (Experimental)` 选项后，你可以在笔记正文中使用 Markdown 扩展语法来写 `定义语句`，它可以添加在笔记的任何位置，一旦添加成功，则直到下一处 `定义语句` 为止，该 `略语` 都将指向这里所赋予的定义，定义语句只会显示在 `实时渲染模式` 和 `源码模式` 中，不会显示在 `阅读模式` 中 [^2]：

```
*[W3C]: World Wide Web Consortium
```

如果你想将下文中的 `略语` 转为普通文本，使其不再指向特定术语，只需在冒号后留空：

```
*[W3C]: 
```

如此一来，即便在同一篇笔记存在使用相同 `略语` 文本的不同术语，也可根据需要随时调整 `略语` 所指代的术语，例：

```
---
abbr:
  - RAM: Random Access Memory
---

RAM.

*[RAM]: Reliability, Availability, Maintainability

RAM.

*[RAM]: Remote Access Management

RAM.

*[RAM]: 

RAM.

```

## 插件选项

- `Metadata keyword`：在空白栏处填入的单词将被视为用来存放 `略语` 的 `属性名称`
- `Enable Markdown Extra syntax support (Experimental)`：启用该选项后，则可使用 Markdown 扩展语法，详见上文
- `Mark abbreviations in Source mode`：启用本选项后，则插件也会在 `源码模式` 中为 `略语` 添加下划线
- `Global abbreviations`：点击本选项后的 `Manage abbreviations`，在弹出的界面中添加 `略语` 及其定义，可在整个笔记库范围内添加全局 `略语`，但它的优先级要低于 `笔记属性` 中的 `定义语句`。如果你不想在某篇特定笔记中采用这一全局 `略语`，则可以在 `笔记属性` 中以字符串或键值对声明：

```
---
abbr:
  - "HTML:  "
  - CSS: ""
---
```

---
- `Enable detect affixes`：启用本选项后，则插件会自动侦测文中带有指定后缀的 `略语`，并为它们也添加下划线，举例来说，如将 `es` 指定为后缀，则 `alias` 和 `aliases` 将被视为同一术语的 `略语`
- `Affix list`：在空白栏处填入的单词将被视为后缀，不同后缀之间以英文输入法逗号隔开

## 预览效果

|                                   源模式                                   |                                  实时预览                                   |                                  阅读模式                                   |
| :---------------------------------------------------------------------: | :---------------------------------------------------------------------: | :---------------------------------------------------------------------: |
| ![abbreviations-mark](https://cdn.pkmer.cn/images/202501111716278.png!pkmer) | ![abbreviations-mark](https://cdn.pkmer.cn/images/202501111716003.png!pkmer) | ![abbreviations-mark](https://cdn.pkmer.cn/images/202501111716159.png!pkmer) |

[^1]: <https://zh.wikipedia.org/wiki/%E7%B8%AE%E5%AF%AB>
[^2]: <https://michelf.ca/projects/php-markdown/extra/#abbr>