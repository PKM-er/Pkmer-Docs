---
uid: 2023080322282234
title: Obsidian 插件：【Readme】Timelines
tags: ['界面相关', 'obsidian插件', 'readme']
description: 使用指定的标签和语法组合，在 Obsidian 中创建笔记的时间线视图
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Timelines

> [!Note] 插件名片
> - 插件名称：Timelines
> - 插件作者：darakah
> - 插件说明：使用指定的标签和语法组合，在 Obsidian 中创建笔记的时间线视图
> - 插件分类：['界面相关', 'obsidian插件', 'readme']
> - 项目地址：[点我访问](https://github.com/Darakah/obsidian-timelines)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsidian-timelines)

## 概述

使用指定的标签和语法组合，在 Obsidian 中创建笔记的时间线视图

![Timelines](https://cdn.pkmer.cn/covers/obsidian-timelines.png!pkmer)

> [!tip] 原文出处
> 
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/Darakah/obsidian-timelines/main/README.md)
> 

---

## Readme(翻译）

下面是 [[obsidian-timelines]] 插件的自述翻译


# obsidian时间线
![GitHub发布](https://img.shields.io/github/v/release/Darakah/obsidian-timelines)
![GitHub所有发布](https://img.shields.io/github/downloads/Darakah/obsidian-timelines/total)

使用指定的标签集生成所有笔记的时间线。

## 示例 - 垂直时间线
![示例](https://raw.githubusercontent.com/Darakah/obsidian-timelines/main/images/exp_2.png)

## 示例 - 水平时间线
![示例](https://raw.githubusercontent.com/Darakah/obsidian-timelines/main/images/TimelineVis.png)

插入时间轴

视频简介示例：https://www.youtube.com/watch?v=_gtpZDXWcrM

要在笔记中呈现时间轴：

1. 在笔记中添加`timeline`标签，可以放在YAML前置元数据或其他位置。
2. 创建一个`timeline`代码块或时间轴HTML注释以进行静态渲染。

在需要插入时间轴的位置创建以下代码块：

![example](https://raw.githubusercontent.com/Darakah/obsidian-timelines/main/images/example_1.png)

您还可以使用以下方法创建水平时间轴：

1. 在代码块中将 `timeline` 替换为 `timeline-vis`，
2. 添加以下过滤器：
```timeline-vis
tags=test
startDate=1700
endDate=2030
fivHeight=600
minDate=200
```

渲染块接受一个输入，即要按标签筛选时间轴标记的笔记的标签列表（例如，在上面的示例块中，仅具有 `timeline`、`test` 和 `now` 三个标签的笔记）。

在需要插入静态渲染时间轴的位置插入以下HTML注释：

```html
<!--TIMELINE BEGIN tags='test;now'--><!--TIMELINE END-->
```

使用`Timelines: Render Timeline`命令生成静态时间轴。再次运行该命令将用新生成的时间轴替换两个注释（BEGIN/END）之间的所有内容。

使用此方法无法检测时间轴事件的更改，但由于它创建的是静态HTML，生成的内容可以在没有Obsidian的情况下阅读（在GitHub上，通过Obsidian发布等）。

## 时间轴标记笔记

要将笔记包含在时间轴中，必须满足以下条件：

1. 笔记中必须包含`timeline`标签

```html
---
tags: [timeline, test, me, now]
---
```

2. 笔记必须包含所有指定的标签才能被包含在搜索结果中。上面的笔记示例将被包含在以下所有搜索结果中（假设其时间轴跨度信息有效）：`test`，`test;me`，`test;me;now`等。

3. 笔记必须至少包含一个时间轴`span`或`div`元素，其中包含事件信息，请参见下一节。

在生成时间轴时，以下情况下将忽略笔记：
- 笔记没有`timeline`标签（在插件设置中指定的标签）
- 笔记不包含搜索列表中的所有标签
- 笔记不包含任何有效的时间轴span/div元素

## 时间轴事件属性

时间轴事件必须指定以下内容：
- 一个有效的日期，YEAR-MONTH-DAY-MINUTES（有关更多详细信息，请查看下面的信息部分）
- 一个有效的类，特别是必须指定`ob-timelines`。

其他所有字段都是可选的。

无效的时间轴事件将被跳过。

### 时间轴条目

可以使用`<span></span>`或`<div></div>`标签创建时间轴条目，具有以下属性：

```html
<span 
	  class='ob-timelines' 
	  data-date='2000-10-10-00' 
	  data-title='Another Event' 
	  data-class='orange' 
	  data-img = 'Timeline Example/Timeline_2.jpg' 
	  data-type='range' 
	  data-end='2000-10-20-00'> 
	另一个事件！
</span>
```

时间轴的span和div条目（.ob-timelines类）默认情况下在预览中是隐藏的，但是，如果您希望显示内容，可以尝试以下代码片段：

```css
/* 将ob-timelines span或div元素呈现为使用斜体字体的内联块 */
.ob-timelines {
  display: inline-block !important;
  font-style: italic;
}
/* 使用before伪元素显示span或div的属性 */
.ob-timelines::before {
  content: "🔖 " attr(data-date) ": " attr(data-title) ". ";
  color: lilac;
  font-weight: 500;
}
```

使用上述代码片段，像这样的span：

```html
<span class='ob-timelines' data-date='1499-03-28-00' data-title="An example"></span>
```

将呈现为：

<img width="228" alt="image" src="https://user-images.githubusercontent.com/808713/159139934-e5c7cb5a-da31-4a57-8100-946f944010a3.png">

#### 日期

时间线条目中最重要和基本的信息是日期。时间线条目可以用于幻想时间线，从而导致一组简化的有效日期规则。

有效日期被指定为`年-月-日-时`。

- 所有四个部分必须存在。
- 每个部分只能包含数字，但可以是任意长度。
- 年份（第一个部分）可以为负数：`-123-45-678-9`是一个有效日期。

当生成时间线时，最右边的只包含零的部分将被省略，例如：

- `2300-02-00-00`将显示为`2300-02`
- `2300-00-00-00`将显示为`2300`

##### 事件排序

事件排序是通过将日期转换为数字来进行的。对于幻想日历，您可能需要用零填充月份、日期或小时，以确保排序正常工作。

- `2300-02-00-00` 被排序为 `2300020000`
- `-234-02-00-00` 被排序为 `-234020000`

对于静态生成的时间线，发生在同一时间的事件被分组，并根据您的时间线排序偏好，被添加到列表的前面或后面。

### 标题：
  - 可选的
  - 如果未指定标题，则将使用笔记的名称

### 描述：
  - 可选的
  - 如果未指定描述，则会显示一个空的部分

### 背景图片：
  - 可选项
  - 如果未指定图片，将只显示文本
  - 如果提供了无效的URL，则会在该记事卡中看到一个空的黑色区域
  - 目前只支持`http`和`绝对本地路径`。Obsidian版本`v0.10.13`阻止了使用Obsidian链接作为背景图片。

### CSS类：
  - 可选的
  - 将应用的CSS类添加到与时间轴条目关联的便签卡上

## 发布说明

### v0.2.1 
- 从标题和文本中删除对“引号/双引号和撇号”的转义（不再需要）
- 添加了一个额外的可选的span属性“css class”，允许自定义时间轴上的每个卡片
- 现在允许在一个便签上有“多个事件”。一个便签上的所有span都将显示在时间轴上（以前只显示第一个span，即每个便签只有一个事件）

### v0.2.0
- 添加了`timeline`渲染块：
  - 通过隐藏HTML文本（在大型时间轴中可能会变得混乱）来保持笔记的整洁
  - 每次打开笔记时自动更新时间轴（在之前的版本中必须重新插入时间轴以更新）

- 搜索的标签将包括`inline`和`YAML`标签

- 删除了`Add Timeline`命令，因为添加了渲染块后不再需要它

## 许可证

根据 MIT 许可证授权。

## 支持

[![Github赞助](https://raw.githubusercontent.com/Darakah/Darakah/e0fe245eaef23cb4a5f19fe9a09a9df0c0cdc8e1/icons/github_sponsor_btn.svg)](https://github.com/sponsors/Darakah) [<img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="BuyMeACoffee" width="100">](https://www.buymeacoffee.com/darakah)



