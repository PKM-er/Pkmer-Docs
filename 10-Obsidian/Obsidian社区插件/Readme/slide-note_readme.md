---
uid: 20231220112631
title: Obsidian 插件：【Readme】Slide Note
tags: ['obsidian插件', 'readme']
description: 方便地在PDF课程幻灯片上做笔记 :P
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】Slide Note

> [!Note] 插件名片
> - 插件名称：Slide Note
> - 插件作者：Jinyan Xu
> - 插件说明：方便地在 PDF 课程幻灯片上做笔记 :P
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/Phantom1003/obsidian-slide-note)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?slide-note)

## 概述

方便地在 PDF 课程幻灯片上做笔记 :P

![Slide Note](https://cdn.pkmer.cn/covers/slide-note.png!pkmer)

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/Phantom1003/obsidian-slide-note/master/README.md)

---

## Readme(翻译）

下面是 [[slide-note]] 插件的自述翻译

# Obsidian Slide Note

这个仓库维护了一个 Obsidian 插件，可以帮助你更轻松地为你的课程做笔记。

使用这个插件，你可以编写纯文本笔记，并且可以：

- 与幻灯片进行绑定
- 渲染幻灯片和你的图形注释在一起
- 使你的笔记与繁重的工具解耦

这个插件受到了 [better-pdf](https://github.com/MSzturc/obsidian-better-pdf-plugin) 的启发，但超越了渲染 PDF 页面的功能。Slide Note 提供了几个新功能，包括：

- 图形注释支持
- 每个文件的前置配置
- 针对大量页面的性能优化
- 当 PDF 文件被修改时自动重新渲染

### 注意

> Slide Note 仍在开发中，部分用法可能存在不兼容的修改。
>
> 另外，Slide Note 只与最新的非内部版本兼容。

## 1 使用方法

### 1.1 基本字段

您可以通过使用 `slide-note` 类型的代码块来使用 Slide Note。

`````markdown
```slide-note
file: example.pdf
page: 2, 4-5, 8
scale: 0.2
dpi: 2
text: true
rotat: 90
rect: W(0.069), H(0.113), W(0.861), H(0.337)
```
`````

![基本用法](https://cdn.pkmer.cn/covers/slide-note_2_0.png!pkmer)

#### 1.1.1 `file` 字段

`file` 字段是文件的相对路径，使用 `/` 符号作为路径分隔符。

当没有默认值时，这是一个必填字段。

例如，如果您在 `slide` 目录中有一个名为 `example.pdf` 的文件，您可以使用以下任一方法来指定此文件：

```markdown
file: slide/example.pdf
file: example.pdf
file: [[example.pdf]]
```

请注意，该字段不支持写入绝对路径。

#### 1.1.2 `page` 字段

您可以使用 `page` 字段来指定要渲染的页面。

默认情况下，将渲染 PDF 中的所有页面。

该字段支持连续页面渲染，您可以使用 `-` 来指定页面范围。

此外，您还可以输入多个页面组，使用 `,` 来分隔它们。

```markdown
page: 2, 4-5, 8
```

#### 1.1.3 `scale` 字段

您可能希望控制渲染块的大小。

使用 `scale` 字段进行缩放，默认值为 1.0。

#### 1.1.4 `dpi` 字段

有时候你可能觉得渲染的页面有点模糊，你可以使用 dpi 字段来调整分辨率。

默认的 DPI 级别是 1。

#### 1.1.5 `text` 字段

由于 PDF 页面被渲染为 HTML 画布元素，您无法选择页面中的文本。

启用 `text` 字段以允许您选择它们。

默认值为 false。

#### 1.1.6 `rotat` 字段

您还可以使用 `rotat` 字段旋转页面。

该字段的值必须是 90 度的倍数，默认值为 0。

请注意，该字段与 `text` 字段不兼容。

#### 1.1.6 `rect` 字段

`rect` 字段可以帮助您仅渲染页面的一部分。

该字段接收四个参数，即渲染窗口左上角的 x 和 y 坐标，以及渲染窗口的宽度和高度。

为了简化起见，每个参数都以百分比表示。

例如，W(0.5) 表示宽度的 50％。

默认的渲染窗口是整个页面。

```markdown
rect: W(0.069), H(0.113), W(0.861), H(0.337)
```

请注意，此字段与 `text` 字段不兼容。

### 1.2 文件前言

您可以通过在笔记文件的前面编写一个前言来覆盖上述默认值。

```markdown
---
default_file: example.pdf
default_text: true
default_scale: 0.8
default_dpi: 2
default_rotat: 90
---
```

1.3 高级注释

#### 1.3.1 图形注释

除了这些基本用途外，您还可以在块中附加更多语句来注释 PDF。

以@开头的字符串是一个图形注释。

Slide Note 提供了一个绘图板视图，帮助您生成上述代码。

双击幻灯片页面将在右侧启动绘图板。

您可以在幻灯片上添加路径、线条、矩形、文本。

完成注释后，点击保存按钮生成用于渲染注释的代码。

请注意，此功能需要在设置中手动打开。

#### 1.3.2 内联注释

而其他所有语句都将被视为您的注释，这样可以确保所有注释都与页面绑定在一个块中。

因此，当您在其他地方链接它们时，您可以获取它们全部。

最终，您的注释应该如下所示：

![高级用法](https://cdn.pkmer.cn/covers/slide-note_2_1.png!pkmer)

### 1.4 更好的 PDF 兼容性

该插件与 [better-pdf](https://github.com/MSzturc/obsidian-better-pdf-plugin) 提供的一部分功能兼容。

如果您希望显示旧的 better-pdf 笔记，可以在插件设置中启用“支持 Better PDF 代码块”选项。

有关 better-pdf 语法的更多信息，请参阅 [此处](https://github.com/MSzturc/obsidian-better-pdf-plugin#syntax)。

不建议继续使用 better-pdf 语法，因为不能保证与 Slide Note 的未来版本兼容。请尽快迁移到新的语法。

在使用 better-pdf 语法时，某些幻灯片笔记功能将不可用。

| Better PDF 字段名称 | Slide Note 支持情况                                                                                   |
| ------------------ | ------------------------------------------------------------------------------------------------- |
| url                | ⚠️部分支持，支持 name.pdf 子文件夹/name.pdf 和“[[filename.pdf]]”，不支持 URL |
| link               | ❌                                                                                                 |
| page               | ✅                                                                                                 |
| range              | ✅                                                                                                 |
| scale              | ✅                                                                                                 |
| fit                | ❌                                                                                                 |
| rotation           | ✅                                                                                                 |
| rect               | ✅                                                                                                 |