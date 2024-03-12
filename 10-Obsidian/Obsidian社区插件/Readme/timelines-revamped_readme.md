---
uid: 20240227160841
title: Obsidian 插件：【Readme】Timelines (Revamped)
tags: ['obsidian插件', 'readme']
description: 生成一个按时间顺序排列的时间线，在这个时间线中，所有的“事件”都是包含特定标签或一组标签的笔记。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】Timelines (Revamped)

> [!Note] 插件名片
> - 插件名称：Timelines (Revamped)
> - 插件作者：Sean Lowe
> - 插件说明：生成一个按时间顺序排列的时间线，在这个时间线中，所有的“事件”都是包含特定标签或一组标签的笔记。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/seanlowe/obsidian-timelines)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?timelines-revamped)

## 概述

生成一个按时间顺序排列的时间线，在这个时间线中，所有的“事件”都是包含特定标签或一组标签的笔记。

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/seanlowe/obsidian-timelines/main/README.md)

---

## Readme(翻译）

下面是 [[timelines-revamped]] 插件的自述翻译

【机翻】

![Fork GitHub Release](https://img.shields.io/github/v/release/seanlowe/obsidian-timelines)

<!-- ![Fork GitHub Downloads Count](https://img.shields.io/github/downloads/seanlowe/obsidian-timelines/total) -->

![Legacy GitHub Release](https://img.shields.io/github/v/release/Darakah/obsidian-timelines?label=Last%20Legacy%20Release&color=red)

![Legacy GitHub Downloads Count](https://img.shields.io/github/downloads/Darakah/obsidian-timelines/total?label=Legacy%20Downloads&color=blue)

![Legacy GitHub Issues Count](https://img.shields.io/github/issues/Darakah/obsidian-timelines?label=Legacy%20Issues)

## 首先要做的事情

这是 [Darakah](https://www.github.com/Darakah/obsidian-timelines) 著名的 [Obsidian](https://www.obsidian.md) 笔记应用插件的更新分支。根据我所见，代码中存在许多错误报告，文档要么缺失，要么令人困惑，整体上工作不规律。这个分支，**Timelines (Revamped)**，旨在解决其中一些问题。

但是，应该给予应有的赞扬。感谢 [Darakah](https://github.com/Darakah) 在原始版本的插件上所做的出色工作。在进行重构时，浏览代码让我学到了很多。

还要感谢所有为原始插件做出贡献的人，特别是：

- [Erin Schnabel](https://github.com/ebullient),
- [ReconVirus](https://github.com/ReconVirus),
- [Ethan Miller](https://github.com/ethanimproving)，以及
- [Travis Mosley](https://github.com/tlm2021)

<br>

下面，我主要编辑了原始的 README 以增加清晰度，同时突出了我对功能所做的一些更改，并添加了一些额外的示例图片。

请仔细阅读，与 Darakah 的原始插件有所不同，它们不会以相同的方式工作。

谢谢！

# 时间轴（改进版）

生成一个按时间顺序排列的时间轴，在其中所有的“事件”都是包含特定标签或一组标签的注释。

查看上次主要更新的更改日志，以查看任何重大更改 [在这里](./changelog.md#v200)。

## 例子

<img src="./images/horizontal_example.png" align="center">
<br>
<img src="./images/vertical_example.png" align="center">

## 插入时间轴

渲染时间轴需要几个*独立*的部分，主要有两个：

1. 笔记中的“事件”，可以通过以下方式指定：
    - 一个 `div` 或 `span` HTML 元素，或
    - 在前置信息中使用键来将整个文件作为“事件”，以及
2. 在您希望显示时间轴的笔记中，包含一个 `ob-timeline` 代码块或时间轴的 HTML 注释。

### 使用时间轴代码块进行动态渲染

在您想要渲染时间轴的笔记中添加以下代码块：

![codeblock example](https://cdn.pkmer.cn/covers/timelines-revamped_2_0.png!pkmer)

渲染块接受一个单行，其中是要筛选时间轴标记笔记的标签列表（用分号分隔）。例如，在上面的示例块中，**<u>只有带有</u>** 三个标签（`timeline`，`test` 和 `now`）的笔记将被渲染。

您可以通过构建代码块来显示水平时间轴，如下所示：

![codeblock example](https://cdn.pkmer.cn/covers/timelines-revamped_2_1.png!pkmer)

分解筛选条件：

- `tags` 是您想要显示在时间轴上的标签，
- `startDate`：您希望时间轴最初开始显示的位置
- `endDate`：您希望时间轴最初结束的位置
- `divHeight`：您希望时间轴的高度
- `minDate`：最小结束日期，以防止在此日期之前滚动或查看
- `maxDate`：最大结束日期，以防止在此日期之后滚动或查看
- `type`：水平特定的关键。传递 `flat` 以渲染水平时间轴。

<br>

> **注意：** 代码块使用关键字 `ob-timeline`，以避免与其他时间轴插件发生冲突，特别是 George-debug 的时间轴 [插件](https://github.com/George-debug/obsidian-timeline)。

### 使用 HTML 代码块进行静态渲染

在应该插入静态渲染时间轴的地方插入以下 HTML 注释：

```html
<!--TIMELINE BEGIN tags='test;now'-->

<!--TIMELINE END-->
```

使用 `Render static timeline` 命令生成静态时间轴。该命令将生成静态 HTML 并将其填充在 HTML 注释之间（BEGIN/END）。

再次运行该命令将用新生成的时间轴替换注释之间的所有内容。

使用此方法不会检测时间轴事件的更改，但由于它创建静态 HTML，生成的内容将在没有 Obsidian 的情况下可读（在 GitHub 上，通过 Obsidian 发布等）。

## 为时间轴标记一个笔记

有两种方法可以将笔记包含在时间轴中：**Frontmatter** 或 **HTML 标签**。如果笔记中包含 HTML 标签，那么将使用这些标签。否则，时间轴将默认从 frontmatter 中获取数据。有关如何创建事件的更多信息，请参阅 [时间轴条目](#timeline-entries)。本节是关于笔记如何被视为有效的概括信息。

要将笔记包含在时间轴中，必须满足以下条件：

1. 必须在笔记中包含 `timeline` 标签。您可以将标签放在 front matter 中，或者在笔记正文中的某个地方使用 `#tag`。

```
---
tags: [timeline, test, me, now]
---
```

这也可以与 Obsidian 的属性更新原生配合使用：

![obsidian 属性中的标签](https://cdn.pkmer.cn/covers/timelines-revamped_2_2.png!pkmer)

1. 笔记必须包含所有指定的标签才能被搜索到。上面的 front matter 示例将包含在以下所有搜索中，以便在笔记正文中查找任何事件：`test`、`test;me`、`test;me;now`、`me;now`、`test;now`
2. 笔记必须包含适当的 frontmatter 键或至少一个包含事件信息的时间轴 `span` 或 `div` 元素，详见下一节。

在生成时间轴时，以下情况下将忽略笔记：

- 笔记中没有 `timeline` 标签（在插件设置中指定的标签）
- 笔记不包含搜索列表中的所有标签
- 笔记不包含任何有效的时间轴 span/div 元素

## 时间轴事件属性

时间轴事件必须指定以下内容：

- 有效的日期，年 - 月 - 日 - 小时（查看下面的信息部分获取更多细节）
- 有效的类别，特别是必须指定 `ob-timelines`。

所有其他字段都是可选的。

无效的时间轴事件将被跳过。

### 时间轴条目

```
---
开始日期: 2010-06-34
结束日期: 2020-01-12
标题: 时间范围
类型: 范围
颜色: 蓝色
标签: [时间线, 历史]
---
```

#### 方法 2：HTML

可以使用 `<span></span>` 或 `<div></div>` HTML 元素创建时间轴条目，具有以下属性：

```html
<span
  class='ob-timelines'
  data-start-date='2000-10-10-00'
  data-end-date='2000-10-20-00'
  data-title='时间段事件'
  data-color='orange'
  data-img='absolute/path/to/image.png'
  data-type='background'
>
	只持续了10天的某个时间段
</span>

<div
  class='ob-timelines'
  data-start-date='2000-10-11-00'
  data-end-date='2000-10-12-00'
  data-title='另一个事件'
  data-type='range'
>
	一个简单的事件
</div>
```

有多种方法可以插入事件。当然，您可以手动操作，但还有两种快速将事件插入到您的笔记中的方法（在当前鼠标位置）：

1. 点击功能栏上的 `</>` 按钮
2. 打开命令面板并运行 `插入时间轴事件`。

这两种方法都会插入一个新的事件 `div` 或 `span`（它使用您在设置中设置的值，但默认为 `div`），其中包含所有 `data-*` 属性但为空。删除不需要的内容，填写您想要的内容。

> **注意：** 还有一个功能栏图标和一个命令，用于在当前笔记中插入 frontmatter。

### 自定义

默认情况下，在预览中隐藏时间轴跨度和 div 条目（.ob-timelines 类），但是，如果您希望显示内容，请尝试像这样的代码片段：

```css
/* 将ob-timelines span或div元素呈现为使用斜体字体的内联块 */
.ob-timelines {
  display: inline-block !important;
  font-style: italic;
}
/* 使用before伪元素显示span或div的属性 */
.ob-timelines::before {
  content: "🔖 " attr(data-start-date) ": " attr(data-title) ".";
  color: lilac;
  font-weight: 500;
}
```

使用上述代码片段，像这样的 span：

```html
<span
  class='ob-timelines'
  data-start-date='1499-03-28-00'
  data-title="An example">
</span>
```

将呈现为：

![styled span example](https://cdn.pkmer.cn/covers/timelines-revamped_2_3.png!pkmer)

在实时预览模式下。我注意到在阅读模式中使用 `span` 或在弹出窗口中查看 `span` 事件时，渲染通常会出现错误。如果正确的渲染是必须的，请建议为您的事件使用 `div`。

### 参数

#### 日期（`data-start-date` 和 `data-end-date`）

时间轴条目最重要和基本的信息是**日期**。时间轴条目可用于幻想时间轴，导致了一组简化的有效日期规则。

有效日期被指定为 `年-月-日-时`。

- 所有四个部分必须都存在。
- 每个部分只能包含数字，但可以是任意长度。
- 年（第一个部分）可以是负数：`-123-45-678-9` 是一个有效日期。

当生成时间轴时，只包含右侧部分为零的部分将被省略，例如：

- `2300-02-00-00` 将显示为 `2300-02`
- `2300-00-00-00` 将显示为 `2300`

日期的任何包含的月/日部分必须是非零的（目前）才能正确解析日期并包含在时间轴上。

例如：如果你不在意日期，`2300-02-00-00` 实际上应该传入为：`2300-02`，或者如果你的意思是在月初开始，应该传入为 `2300-02-01`。然而，日期的最后一个部分（时间）可以为零。如果你想的话。任何未传入的部分将在内部添加有效的最小值（月份和日期为 `01`，时间为 `00`）。

日期归一化是根据下一节**事件排序**处理的，以便日期 - 即使是幻想日期 - 按指定的顺序排序。尽管，在处理水平时间轴上的奇怪幻想日期时，由于用于生成时间轴的库，存在一些... *复杂性*。我正在寻找更好的解决方案。

##### 事件排序

事件排序是通过在日期的所有部分前面填充零来执行的，以便所有部分具有相同的长度。生成的字符串直接与其他字符串进行比较。部分填充的长度由设置选项卡中的“日期最大填充”值控制。

例如，对于这两个日期，最大填充值为 `4`：

- `2300-02-01-00` 将被填充并排序为 ` 2300-0002-0001-0000`，而
- `-234-02-01-00` 将被填充并排序为 `-0234-0002-0001-0000`。

现在我们可以看到，无论您想要什么样的日历（幻想或其他），都可以很简单地进行排序。任何缺失的部分将自动填充，缺失的月份和日期值将设置为 `01`，时间值将设置为 `00`。

以下是最大填充为 `4` 时的示例：

- `9991-3-477-9817` 将变为 `9991-0003-0477-9817`,
- `1984` 将变为 `1984-0001-0001-0000`
- `-33-777` 将变为 `-0033-0777-0001-0000`

对于静态生成的时间轴，发生在同一时间的事件将被分组，并根据您的时间轴排序偏好被添加到列表的开头或结尾。

#### 标题（`data-title`）

  - 可选
  - 如果未指定标题，则将使用笔记的名称

#### 背景图片（`data-img`）

  - 可选
  - 如果未指定图像，则不会显示任何图像（仅文本）
  - 如果给出无效的网址，则会在该笔记卡上看到一个空的黑色区域

注意：目前只有通过 `http` 或 `绝对本地路径` 指定的资产才会呈现。Obsidian 版本 `v0.10.13` 阻止了背景图片使用 Obsidian 链接。

#### Era (`data-era`)

  - 可选
  - 将此文本添加到时间轴中的日期范围，作为一个时代的指定。对于虚构的日历很有用。
  - 在日期格式化之后应用。因此，将时代设置为 `AB` 的 `2300` 将显示为 `2300 AB`。

#### 节点颜色（`data-color`）

  - 可选
  - 将指定的颜色作为 CSS 类添加到适当的 HTML 元素上，以便与时间轴条目关联。

注意：`data-color` 的可接受值为 `orange`, `yellow`, `red`, `blue`, `green`, `purple`, `pink`, 和 `gray`。如果未提供数值，则事件在时间轴上将被着为白色（或灰色，用于背景事件）。

#### 类型（`data-type`）

  - 可选的
  - 告诉时间轴为此条目显示什么类型的事件。

注意：`data-type` 的可接受值为：

  - `background`，最适用于时间段
  - `box`
  - `point`，就像它听起来的那样
  - `range`

#### 路径（`data-path`）

  - 可选的
  - 一个替代路径，用于将标题链接到（不包括 `[[` 和 `]]`）。默认为事件所在的笔记，但您可以使用此选项指定其他笔记或在笔记内部链接到标题或块。例如，`data-path='My Note#Event Subhead'` 将直接链接到 `My Note` 中的 `Event Subhead` 标题
  - 如果您使用“页面预览”插件，悬停在标题上时将显示此标题的内容。可用于在不离开当前时间轴的情况下快速查看扩展细节。

#### 标签（`data-tags`）

  - 可选的
  - 用于覆盖事件应计入的标签。允许您在不同的时间轴上具有带有事件的注释。例如，第一个事件具有标签“A”，第二个事件具有标签“B”。合并时间轴将显示两者，但现在您还可以有 2 个单独的时间轴，只显示适用的（“A”或“B”）事件。
  - 值是由分号分隔的标签字符串，类似于用于显示时间轴的代码块中的标签列表。例如：`data-tags="timeline-A;timeline-B"`

## 发布说明

### v2.1.3

Obsidian 员工要求进行一些小的更改，以便将插件发布到社区列表中。

**更改:**

- 更新命令的标题为句子格式
- 删除了切换开关设置以显示/隐藏功能图标。最终用户可以自行切换图标，因此不需要设置。
- 更新了许可证名称/年份，仍然使用 MIT 许可证
- 更新了 README 顶部的提示，使用 tlm2021 的姓名而不是他的用户名，并对 README 进行了一些 QOL 更新

有关先前版本的更多详细信息，请参阅 [changelog](./changelog.md)。

## 许可证

根据 MIT 许可证获得许可。

## 支持

请随时为任何错误或对额外功能的请求打开问题。拉取请求始终受欢迎！
