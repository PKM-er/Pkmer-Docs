---
uid: 2023080322204079
title: Obsidian 插件：【Readme】Interlinear Glossing
tags: ['obsidian插件', 'readme']
description: 在语言学文本中使用的格式化线性注释。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Interlinear Glossing

> [!Note] 插件名片
> - 插件名称：Interlinear Glossing
> - 插件作者：Mijyuoon
> - 插件说明：在语言学文本中使用的格式化线性注释。
> - 插件分类：['obsidian插件', 'readme']
> - 项目地址：[点我访问](https://github.com/Mijyuoon/obsidian-ling-gloss)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?ling-gloss)

## 概述

在语言学文本中使用的格式化线性注释。

![Interlinear Glossing](https://cdn.pkmer.cn/covers/ling-gloss.png!pkmer)

> [!tip] 原文出处
> 
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/Mijyuoon/obsidian-ling-gloss/master/README.md)
> 

---

## Readme(翻译）

下面是 [[ling-gloss]] 插件的自述翻译


# 黑曜石分词注释

该插件为[分词注释](https://en.wikipedia.org/wiki/Interlinear_gloss)提供支持，常用于语言学文档中。
它主要面向使用Obsidian记录他们的构造语言的构造语言社区成员。

# 用法

使用带有`gloss`标签的代码块来编写注释，如下所示：

````
```gloss

# 这是一个逐字解释的块
```
````

以`#`开头的行被视为注释，并且解析器会忽略它们。空行和只包含空格的行也会被忽略。

基本的术语由两行组成，即源语言文本和元语言。可以使用`\gla`（术语级别A）和`\glb`（术语级别B）命令来实现这一点。这些命令接受由空格分隔的元素（单词或语素）的列表，这些元素将按元素逐个垂直对齐。默认情况下，级别A行应用斜体样式，而级别B行没有默认样式。

```gloss
\gla Péter-nek van egy macská-ja
\glb Peter-DAT exist INDEF cat-POSS.3SG
```

![Example 01a](_examples/example01a.png)

此外，如果需要在单个术语元素中使用空格，可以将其包装在方括号`[like this]`中。要在术语元素中直接使用方括号，可以通过在前面加上插入符号`^`来"转义"它们，例如`^[this^]`。可以使用空方括号`[]`在术语中写入空元素。

```gloss
\gla János tegnap [vi-tt el] két könyv-et Péter-nek
\glb John^[TOP^] yesterday^[FOC^] [take-PST away] two book-ACC Peter-DAT
```

![Example 01b](_examples/example01b.png)

如果需要额外的行，例如用于音译，可以使用`\glc`（gloss level C）命令，其功能与`\gla`和`\glb`命令相同。C级行没有默认样式，就像B级一样。

```gloss
\gla Péter-nek van egy macská-ja
\glb pe:tɛrnɛk vɒn ɛɟ mɒt͡ʃka:jɒ
\glc Peter-DAT exist INDEF cat-POSS.3SG
```

![Example 02](_examples/example02.png)

## 自由翻译 (`\ft`)

可以使用`\ft`命令在术语表的底部添加一行自由翻译。该命令接受一行文本作为参数。默认情况下，自由翻译行会用引号括起来，并应用斜体样式。

```gloss
\gla Péter-nek van egy macská-ja
\glb pe:tɛrnɛk vɒn ɛɟ mɒt͡ʃka:jɒ
\glc Peter-DAT exist INDEF cat-POSS.3SG
\ft Peter has a cat.
```

![Example 03](_examples/example03.png)

使用`\ex`命令可以在译文上方添加原始源文本行，该命令与`\ft`命令类似，接受一行文本作为参数。默认情况下，原始文本行会应用粗体样式。

```gloss
\ex Péternek van egy macskája.
\gla Péter-nek van egy macská-ja
\glb pe:tɛrnɛk vɒn ɛɟ mɒt͡ʃka:jɒ
\glc Peter-DAT exist INDEF cat-POSS.3SG
\ft Peter has a cat.
```

![Example 04](_examples/example04.png)

## 换行

如果命令行太长，可以通过缩进后续行来将其分成多行。此外，空行会被忽略，可以用于分隔跨越多行的命令。下面的两个示例产生相同的结果，如下所示：

```gloss
\ex János tegnap elvitt két könyvet Péternek.
\gla János tegnap elvi-tt két könyv-et Péter-nek.
\glb John:NOM yesterday take-PST two book-ACC Peter-DAT
\ft John took two books to Peter yesterday.
```

```gloss
\ex János tegnap elvitt két könyvet Péternek.

\gla János tegnap
    elvi-tt két
    könyv-et Péter-nek.

\glb John:NOM yesterday
    take-PST two
    book-ACC Peter-DAT

\ft John took two books to Peter yesterday.
```

![Example 05](_examples/example05.png)

## 替代语法（`\gl`）

有一种替代语法可用于解释行，其中源语言元素与标记中的解释相邻。这样做的优点是使标记更易于阅读和编写，特别是对于较长的解释。

要使用此语法，使用带有`ngloss`标签的代码块，而不是之前看到的常规`gloss`标签：

````
```ngloss

# 这个术语表将使用替代语法
```
````

在这种模式下，用于单个术语表行（`\gla`，`\glb`，`\glc`）的命令被替换为单个`\gl`命令。该命令接受一个以空格分隔的标记列表，其解释如下：

- 一个常规的裸`token`始终被视为新的A级（第一行）元素
- 一个跟在常规`token`后面的用方括号括起来的`[token]`是一个B级（第二行）元素，对应于最后一个A级元素
- 任何额外的方括号括起来的`[token]`都会添加到最后一个A级元素的后面的行中
  - 请注意，此机制允许添加超过3行的术语表行，如下所示

```ngloss
\gl János [ja:noʃ] [John:NOM]
	tegnap [tɛgnɒp] [yesterday]
	elvi-tt [ɛlvit:] [take-PST]
	két [ke:t] [two]
	könyv-et [køɲvɛt] [book-ACC]
	Péter-nek [pe:tɛrnɛk] [Peter-DAT]
```

![Example 06a](_examples/example06a.png)

```ngloss
\set glastyle cjk
\ex 牆上掛著一幅畫 / 墙上挂着一幅画
\gl 牆 [墙] [qiáng] [wall] [^[TOP]
	上 [上] [shàng] [on] [^]]
	掛 [挂] [guà] [hang] [V]
	著 [着] [zhe] [CONT] [ASP]
	一 [一] [yì] [one] [^[S]
	幅 [幅] [fú] [picture.CL] []
	畫 [画] [huà] [picture] [^]]
\ft 一幅画挂在墙上。
```

![Example 06b](_examples/example06b.png)

虽然通常将每个元素单独放在一行上更清晰，如上面的示例所示，但这并不是严格必要的，所有标记都可以放在`\gl`命令后的同一行上以获得相同的结果。此外，与裸标记之间不同，方括号`[tokens]`之间不需要空格。（方括号`[tokens]`内的空格与其他语法中的空格的工作方式相同。）

下面的示例产生与上面相同的结果，尽管可读性通常较差：

```ngloss
\gl János[ja:noʃ][John:NOM]  tegnap[tɛgnɒp][yesterday]  elvi-tt[ɛlvit:][take-PST]  két[ke:t][two]  könyv-et[køɲvɛt][book-ACC]  Péter-nek[pe:tɛrnɛk][Peter-DAT]
```

## 自定义样式

渲染的注释块的所有部分都有分配的CSS类，因此可以使用[CSS片段](https://help.obsidian.md/Extending+Obsidian/CSS+snippets)来自定义它们的外观。下面是可用的CSS类列表及其示例。

### `.ling-gloss`

这个类代表整个词汇解释块。

```css
.ling-gloss { border: solid 2px red; }
```

![Example 07](_examples/example07.png)

### `.ling-gloss-elements`

这个类表示包含垂直对齐元素的注释行的子块。

```css
.ling-gloss-elements { border: solid 2px red; }
```

![Example 08](_examples/example08.png)

### `.ling-gloss-preamble`

这个类表示未修改的源文本（前言）行。

```css
.ling-gloss-preamble { border: solid 2px red; }
```

![Example 09](_examples/example09.png)

### `.ling-gloss-translation`

这个类表示自由翻译行。

```css
.ling-gloss-translation { border: solid 2px red; }
```

![Example 10](_examples/example10.png)

### `.ling-gloss-element`

这个类表示一个垂直对齐的词汇元素组。

```css
.ling-gloss-element { border: solid 2px red; }
```

![Example 11](_examples/example11.png)

### `.ling-gloss-level-*`

这些类代表特定注释行上的一个元素，其中 `*` 是小写字母 `a`、`b`、`c` 或 `x` 之一，对应于该行的级别。

```css
.ling-gloss-level-a { border: dotted 2px red; }
.ling-gloss-level-b { border: dashed 2px yellowgreen; }
.ling-gloss-level-c { border: solid 2px blueviolet; }
```

![Example 12a](_examples/example12a.png)

请注意，`level-x` 样式适用于级别 C 行之后的*所有*行，然而，CSS 兄弟选择器 `:nth-child(n)` 可以用来定位特定的行。级别 X 行的 `n` 计数从 4 开始，因为前三行是级别 A、B 和 C。

```css
.ling-gloss-level-x { border: solid 2px red; }
.ling-gloss-level-x:nth-child(5) { font-size: 1.5em; }
```

```ngloss
\set glastyle cjk
\ex 牆上掛著一幅畫 / 墙上挂着一幅画
\gl 牆 [墙] [qiáng] [wall] [^[TOP]
	上 [上] [shàng] [on] [^]]
	掛 [挂] [guà] [hang] [V]
	著 [着] [zhe] [CONT] [ASP]
	一 [一] [yì] [one] [^[S]
	幅 [幅] [fú] [picture.CL] []
	畫 [画] [huà] [picture] [^]]
\ft A picture is hanging on the wall.
```

![Example 12b](_examples/example12b.png)

## 设置选项（`\set`）

可以使用`\set`命令更改单个词汇块的一些选项，该命令接受一个选项名称，并根据命令的不同：

- 没有值（用于二进制开关选项）
- 单个值（值标记之间的多个空格会被合并为一个）
- 值列表（方括号`[tokens]`可以用于包含空格的值）

下面是可用选项的列表及示例。

### `glaspaces`

该选项允许在A级元素中使用下划线字符作为空格。这对于支持空格的括号标记语法`ngloss`特别有用，因为无法在A级中使用支持空格的括号标记。该选项不接受任何值。

```ngloss
\set glaspaces
\gl nǐ_hǎo [hello]
    shì_jiè [world]
```

![Example 13](_examples/example13.png)

### `gl*style`，`exstyle`，`ftstyle`

这些选项为渲染的词汇表的各个部分分配自定义的CSS类，以允许对单个词汇表进行选择性定制。所有这些选项都接受CSS类名列表作为值。每个命令如下所示，针对词汇表的特定部分：

- `gl*style` - 目标是特定词汇表行上的一个元素，其中`*`是小写字母`a`，`b`，`c`或`x`之一，对应于该行的级别。
	- 请注意，`glxstyle`适用于级别C行之后的*所有*行。有关详细信息，请参见[`.ling-gloss-level-*`](#ling-gloss-level)。
- `exstyle` - 目标是未修改的源文本（前导）行。
- `ftstyle` - 目标是自由翻译行。

对于提供的每个类名，将为目标分配一个名为`.ling-style-*`的CSS类，其中`*`是提供的类名。

例如，假设在CSS片段中定义了以下样式：
```css
.ling-style-big { font-size: 1.5em; }
.ling-style-solid { border: solid 2px red; }
.ling-style-dashed { border: dashed 2px yellowgreen; }
```

应该显示以下词汇表，如下所示：

```ngloss
\set glastyle big solid
\set ftstyle dashed
\gl János [ja:noʃ] [John:NOM]
    tegnap [tɛgnɒp] [yesterday]
    elvi-tt [ɛlvit:] [take-PST]
    két [ke:t] [two]
    könyv-et [køɲvɛt] [book-ACC]
    Péter-nek [pe:tɛrnɛk] [Peter-DAT]
\ft John took two books to Peter yesterday.
```

![Example 14](_examples/example14.png)

默认情况下，插件为`glastyle`选项定义了一个名为`cjk`的样式，该样式删除了默认的斜体样式。这适用于通常不使用斜体的CJK字符：

```ngloss
\set glastyle cjk
\gl 你好 [nǐhǎo] [hello]
	世界 [shìjiè] [world]
```

![Example 15a](_examples/example15a.png)

删除`\set`行的相同词汇表：

![Example 15b](_examples/example15b.png)

# 安装

你现在可以从Obsidian的官方社区插件仓库中安装这个插件，方法是在Obsidian中转到“设置→社区插件→浏览”，然后搜索“Interlinear Glossing”。

## 手动安装（已弃用）

- 在任意位置创建一个名为 `ling-gloss` 的文件夹
- 前往["Releases"](https://github.com/Mijyuoon/obsidian-ling-gloss/releases)页面，下载最新版本的 `main.js`、`manifest.json` 和 `styles.css` 文件
- 将下载的文件复制到之前创建的文件夹中
- 打开你的 vault 的插件文件夹，路径为 `<Vault Folder>/.obsidian/plugins`，并将你的文件夹放在其中
- 在 Obsidian 设置中重新加载插件或重新启动程序
- 在 Obsidian 设置中启用 "Interlinear Glossing" 插件



