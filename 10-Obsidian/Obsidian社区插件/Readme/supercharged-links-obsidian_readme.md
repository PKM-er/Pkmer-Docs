---
uid: 20230803231105
title: Obsidian 插件：Supercharged Links
tags: ['样式工具', 'obsidian插件', 'readme']
description: 为内部链接添加属性，其值为目标笔记的前端属性
author: AI
type: readme
draft: false
editable: false
modified: 20230803232422
---

# Obsidian 插件：Supercharged Links

> [!Note] 插件名片
> - 插件名称：Supercharged Links
> - 插件作者：mdelobelle
> - 插件说明：为内部链接添加属性，其值为目标笔记的前端属性
> - 插件分类：[' 样式工具 ', 'obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/mdelobelle/obsidian_supercharged_links)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?supercharged-links-obsidian)

## 概述

为内部链接添加属性，其值为目标笔记的前端属性

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/mdelobelle/obsidian_supercharged_links/master/README.md)
>

---

## Readme(翻译）

下面是 [[supercharged-links-obsidian]] 插件的自述翻译

超级链接是 Obsidian 的一个插件，它可以根据笔记的元数据（如标签或 YAML 前置属性）来为您的存储库中的链接添加样式。您可以自动为链接添加颜色、表情符号或其他样式，使其更具视觉吸引力和易于导航。

当您的笔记代表某个东西，比如一篇论文、一个地点、一个人或一周中的某一天时，超级链接可以确保这些笔记突出显示。另一个用例可能是为带有“#todo”标签的笔记添加醒目的颜色。这种视觉反馈有助于您快速找到正确的笔记！

## 安装插件

1. 在 Obsidian 中安装并启用 Supercharged Links 插件。
2. 在 Obsidian 中安装并启用 [Style Settings Plugin](https://github.com/mgmeyers/obsidian-style-settings)。

## 入门指南

这是 Supercharged Links 的整体工作流程：

1. 在 Supercharged Links 设置中，为您想要样式化的属性创建一个新的选择器。
2. 选择选择器的类型（标签、属性或路径），并输入您想要匹配的值。
3. 在 Style Settings Plugin 设置中，设置所选属性的样式，例如更改文本颜色、背景颜色或添加表情符号。

## 示例工作流程

假设我有一条关于 Jim 的笔记，文件名为 `Jim.md`，标签为 `#person`，并且有一些 [YAML前置元数据](https://help.obsidian.md/Advanced+topics/YAML+front+matter)。

```md
---
status: call soon
age: 42
---

Jim是我的一位同事

#person

```

我想要改变指向 Jim 笔记的链接的样式。特别地，我希望人物链接具有蓝色背景，并且我希望我需要打电话的人在前面有一个电话表情符号☎️：<img src="https://raw.githubusercontent.com/mdelobelle/obsidian_supercharged_links/master/images/phone-jim.png" style="height:30px;vertical-align:bottom">。

### 设置插件

是时候设置插件来使其工作了！让我们进入插件设置。

首先，你需要告诉插件在顶部的“用于样式的目标属性”选项中包含哪些前置属性。让我们在这里添加 `status`，它表示我们是否需要给 Jim 打电话！

<img src="https://raw.githubusercontent.com/mdelobelle/obsidian_supercharged_links/master/images/target-status.png" alt="drawing" style="width:500px;"/>

接下来，我们需要告诉插件查找带有标签 `#person` 的笔记。在设置中，在“样式”标题下创建一个新的选择器。在选择器类型下，选择“标签”，在下方添加 `person`：

<img src="https://raw.githubusercontent.com/mdelobelle/obsidian_supercharged_links/master/images/tag-person.png" alt="drawing" style="width:700px;"/>

我们还希望在笔记的 `status` 属性为 `call soon` 时添加一个表情符号。我们将告诉插件查找属性 `status`，并且其值应为 `call soon`。请注意，这也会查找 [来自DataView的内联字段称为status](https://blacksmithgu.github.io/obsidian-dataview/data-annotation/)。

<img src="https://raw.githubusercontent.com/mdelobelle/obsidian_supercharged_links/master/images/call-soon.png" alt="drawing" style="width:700px;"/>

对于我们的用例，一个重要的设置是仅在“样式选项”下启用“在链接之前添加内容”选项，否则这个样式将覆盖标签 `#person` 的样式！

除了基于属性或标签进行样式设置外，我们还可以根据笔记的“路径”（包括名称、文件夹和扩展名）进行样式设置。例如，我们可以为 `dailies` 文件夹中的所有笔记设置样式。确保在匹配这里选择“包含值”而不是“完全匹配”：

<img src="https://raw.githubusercontent.com/mdelobelle/obsidian_supercharged_links/master/images/path-dailies.png" alt="drawing" style="width:700px;"/>

### 是时候进行样式设置了

首先，请确保您已安装并启用了 [Style Settings插件](https://github.com/mgmeyers/obsidian-style-settings)。然后，在设置中，导航到 Style Settings 的设置。现在我们准备好为带有标签 `#person` 的笔记设置样式了！我们将使用白色文本颜色，启用背景，并在那里使用漂亮的蓝色背景。

<img src="https://raw.githubusercontent.com/mdelobelle/obsidian_supercharged_links/master/images/style-person.png" alt="drawing" style="width:700px;"/>

接下来，让我们在即将通话的笔记之前添加表情符号。我们只需将☎️复制到文本区域“前置文本”中即可。

<img src="https://raw.githubusercontent.com/mdelobelle/obsidian_supercharged_links/master/images/style-call-soon.png" alt="drawing" style="width:700px;"/>

然后，大功告成！

<img src="https://raw.githubusercontent.com/mdelobelle/obsidian_supercharged_links/master/images/result-call-jim.png" alt="drawing" style="width:700px;"/>

## 使用 CSS 进行高级样式设置

如果您对 CSS 和 HTML 感到熟悉，可以使用 CSS 代码片段为链接创建更加个性化的样式。

1. 在 Obsidian 中，通过转到设置>外观> CSS 代码片段来创建 CSS 代码片段。
2. 根据链接的数据属性（例如 data-link-tags 或 data-link-status），编写自定义的 CSS 代码来设置链接的样式。
3. 保存 CSS 文件并在 Obsidian 中启用该代码片段。

### 使用 CSS 进行样式设置的示例

为了解释这是如何工作的，让我们先解释一下这个插件在后台做了什么。

假设我在某个地方有一个指向 `[[Jim]]` 的链接。

如果没有激活插件，HTML 链接元素通常会像这样：

```

```

这并没有提供关于 Jim.md 笔记中的内容的任何信息！因此，我们无法自定义它。

这就是这个插件的作用：它将在 `<a>` 元素中添加两个额外的属性：`data-link-status` 和 `data-link-tags`。**重要的是**，这些属性以 `data-link` 为前缀，以避免与 Obsidian 中的其他属性冲突。

激活插件后，`<a>` 元素将被增强，如下所示：

```

```

### 使用 CSS 样式化链接

您可以使用 CSS 的灵活性，通过在 `links.css` 这样的 CSS 片段中设置 CSS 属性来自定义链接。要创建 CSS 片段，请转到 Obsidian 设置，然后转到外观，滚动到 CSS 片段部分。点击小文件夹图标，然后在打开的文件夹中创建一个名为 `links.css` 的新文件。

#### 示例 CSS 代码片段

根据文件中的标签更改链接到笔记的每个出现的颜色：

```css
[data-link-tags*="#topic" i]{
    color: #ff6600 !important;
}
```

这将针对所有包含 `data-link-tags` 属性的 HTML 元素，也就是所有超级链接。

在每个链接到“category: people”笔记的名称之前放置一个👤表情符号：

```css
.data-link-icon[data-link-category$="People" i]::before{
    content: "👤 "
}
```

<img src="https://raw.githubusercontent.com/mdelobelle/obsidian_supercharged_links/master/images/link-styling-in-note.png" style="width:500px">

选择特定的 `.data-link-icon` 是为了防止实时预览中的错误。

当笔记中存在 `status` 属性时，将链接突出显示为类似标签的蓝色圆角矩形：

```css
:not(:empty)[data-link-next-status] {
    color: white;
    background-color: rgb(29, 29, 129);
    border-radius: 18px;
    padding: 5px 15px;
}
```

<img src="https://raw.githubusercontent.com/mdelobelle/obsidian_supercharged_links/master/images/link-styling-tag-in-note.png" style="width:500px">

仅在悬停在链接上时显示目标文件中 `status` 属性的值：

```css
.data-link-icon-after[data-link-status]:hover::after{
    content: " ► "attr(data-link-status)
}
```

<img src="https://raw.githubusercontent.com/mdelobelle/obsidian_supercharged_links/master/images/link-styling-hover-in-note.png" style="width:500px">

隐藏带有标签#hide 的链接在您的笔记中的显示（即在预览模式和实时预览中）：

```css
a.internal-link[data-link-tags *="hide"],
.cm-hmd-internal-link > [data-link-tags *="hide"]{
    visibility: hidden !important;
    display: none;
}

```

### 演示

注意：这些演示有些过时。

#### 实时预览

<img src="https://i.imgur.com/8VJm1TJ.gif" style="width:500px">

#### 内部链接简单样式化

<https://youtu.be/tyEdsmAQb_4>

多个属性

#### 一个属性的多个值

<https://youtu.be/aaSZnkEuH4w>

### 支持的插件

实时预览、源代码视图、阅读模式和文件浏览器在核心 Obsidian 中得到了完全支持。其他插件也得到了支持，如下所列：

核心插件：

- 反向链接（包括编辑模式下的反向链接）
- 外部链接
- 搜索
- 星标文件
- 快速切换器

社区插件：

- 面包屑导航
- 图形分析
- 最近文件
- 更快的切换器 ++
- 另一个快速切换器
- 数据视图（内联字段）
- 全局搜索

想要支持其他插件吗？在这个仓库中创建一个问题！

## 链接上下文菜单额外选项

该插件还通过右键单击链接，添加了上下文菜单项，用于修改目标笔记的前置元数据属性和“内联字段”（dataview 语法）。

**此功能已被弃用，并已迁移到 metadata-menu 插件，可在 brat <https://github.com/mdelobelle/metadatamenu> 上获得。**
