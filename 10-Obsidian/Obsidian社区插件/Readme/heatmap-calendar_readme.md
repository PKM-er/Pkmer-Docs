---
uid: 2023080322193947
title: Obsidian 插件：Heatmap Calendar
tags: ['界面相关', '美化', '统计', 'obsidian插件', 'readme']
description: 可视化您的数据在热图日历类似于 github 活动日历
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Heatmap Calendar

> [!Note] 插件名片
> - 插件名称：Heatmap Calendar
> - 插件作者：Richard Slettevoll
> - 插件说明：可视化您的数据在热图日历类似于 github 活动日历
> - 插件分类：[' 界面相关 ', ' 美化 ', ' 统计 ', 'obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/Richardsl/heatmap-calendar-obsidian)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?heatmap-calendar)

## 概述

可视化您的数据在热图日历类似于 github 活动日历

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/Richardsl/heatmap-calendar-obsidian/master/README.md)
>

---

## Readme(翻译）

下面是 [[heatmap-calendar]] 插件的自述翻译

# Obsidian 热力图日历插件

使用这个 [Obsidian](https://obsidian.md/) 插件，可以将您的数据可视化为类似于 GitHub 活动日历的热力图日历。

非常适用于跟踪各种事物的进展，如运动、财务、兴趣、恶习、社交、项目进展等。

它旨在与 [DataviewJS](https://blacksmithgu.github.io/obsidian-dataview/) 一起使用，但也可以作为独立插件或与其他插件一起使用，因为该插件的所有功能都是将函数***renderHeatmapCalendar()***添加到全局命名空间中。

<p>
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://github.com/Richardsl/heatmap-calendar-obsidian/blob/master/github-images/heatmap_examples_dark.gif?raw=true">
      <source media="(prefers-color-scheme: light)" srcset="https://github.com/Richardsl/heatmap-calendar-obsidian/blob/master/github-images/heatmap_examples_light.gif?raw=true">
      <img alt="在浅色模式下显示黑色标志，在深色模式下显示白色标志。" src="https://user-images.githubusercontent.com/25423296/163456779-a8556205-d0a5-45e2-ac17-42d089e3c3f8.png">
    </picture>
</p>

&nbsp;

使用方法：

1. 在您的日常笔记中注释您想要跟踪的数据（参见 [Dataview注释文档](https://blacksmithgu.github.io/obsidian-dataview/data-annotation/)）
2. 在您想要显示热力图日历的位置创建一个 [DataviewJS块](https://blacksmithgu.github.io/obsidian-dataview/api/intro/)
3. 使用 [DataviewJS](https://blacksmithgu.github.io/obsidian-dataview/api/code-reference/) 收集您想要显示的数据
4. 使用**renderHeatmapCalendar()**将数据传递给热力图日历
![热力图日历示例](https://github.com/Richardsl/heatmap-calendar-obsidian/blob/master/github-images/heatmap-calendar-howto3.jpg?raw=true)

## 完整示例代码

~~~javascript
\```dataviewjs
dv.span("** 😊 标题  😥**") /* optional ⏹️💤⚡⚠🧩↑↓⏳📔💾📁📝🔄📝🔀⌨️🕸️📅🔍✨ */
const calendarData = {
    year: 2022,  // (可选) 默认为当前年份
    colors: {    // (可选) 默认为绿色
        blue:        ["#8cb9ff", "#69a3ff", "#428bff", "#1872ff", "#0058e2"], // 如果提供了第一个条目，则将其视为默认值
        green:       ["#c6e48b", "#7bc96f", "#49af5d", "#2e8840", "#196127"],
        red:         ["#ff9e82", "#ff7b55", "#ff4d1a", "#e73400", "#bd2a00"],
        orange:      ["#ffa244", "#fd7f00", "#dd6f00", "#bf6000", "#9b4e00"],
        pink:        ["#ff96cb", "#ff70b8", "#ff3a9d", "#ee0077", "#c30062"],
        orangeToRed: ["#ffdf04", "#ffbe04", "#ff9a03", "#ff6d02", "#ff2c01"]
    },
    showCurrentDayBorder: true, // (可选) 默认为true
    defaultEntryIntensity: 4,   // (可选) 默认为4
    intensityScaleStart: 10,    // (可选) 默认为传递给entries.intensity的最低值
    intensityScaleEnd: 100,     // (可选) 默认为传递给entries.intensity的最高值
    entries: [],                // (必填) 在下面的DataviewJS循环中填充
}

//DataviewJS循环
for (let page of dv.pages('"daily notes"').where(p => p.exercise)) {
    //dv.span("<br>" + page.file.name) // 用于故障排除时取消注释
    calendarData.entries.push({
        date: page.file.name,     // (必填) 格式为YYYY-MM-DD
        intensity: page.exercise, // (必填) 您要跟踪的数据，将自动映射颜色强度
        content: "🏋️",           // (可选) 在日期单元格中添加文本
        color: "orange",          // (可选) 从*calendarData.colors*引用。如果未提供颜色，则使用colors[0]
    })
}

renderHeatmapCalendar(this.container, calendarData)
```
~~~

## 颜色

您不需要提供任何颜色，日历默认使用绿色，就像 Github 一样。

如果您在*calendarData.colors*中提供了颜色，第一个索引将被视为新的默认颜色。

通过在 calendarData.colors 中指定您给定的颜色名称，可以为每个条目添加自定义颜色。

您甚至可以在同一个日历中使用多种颜色，只需为不同的条目使用不同的颜色。

示例中使用的颜色方案是在 [leonardocolor.io](https://leonardocolor.io) 上创建的。

### 添加全局颜色

您还可以通过设置面板添加一个可在任何地方使用的颜色方案。

要这样做，请转到“Obsidian 设置 > 热力图日历”，您将看到一个可用颜色的列表，您可以添加自己的颜色。您必须指定一个“颜色名称”，以便在呈现调用中引用它，并提供一个有效的颜色数组。

当您这样做时，您现在可以通过将您的名称传递给“colors”选项来在任何地方引用您的方案。例如，假设您定义了一个名为“githubGreen”的新颜色。现在，在您的代码中，您可以这样引用它：

```javascript
\```dataviewjs
const calendarData = {
	color: "githubGreen",
	entries: [], // <- 您的条目
}

renderHeatmapCalendar(this.container, calendarData)
```

```

强度：
“强度”表示要使用的颜色强度，例如从浅绿到深绿，
它们将在您传递给“强度”的最高和最低数字之间分布。
如果使用数字范围0-100，那么1-20之间的数字将映射到最浅的颜色，40-60之间的数字将映射到中等强度的颜色，80-100之间的数字将映射到最大强度。
您可以添加更多的强度以增加颜色分辨率；只需向**calendarData.colors.yourcolor**提供更多颜色即可。

Dataview的时间变量无需任何转换即可支持，因为它们默认返回毫秒。
**[time:: 1小时35分钟] => 强度：page.time**

## 样式化：
使用 Obsidian CSS 代码片段进行自定义样式化。
请参阅[代码片段示例](https://github.com/Richardsl/heatmap-calendar-obsidian/tree/master/EXAMPLE_VAULT/.obsidian/snippets)。

## 注意事项：
- 如果您想测试示例，请参阅[示例存储库](https://github.com/Richardsl/heatmap-calendar-obsidian/tree/master/EXAMPLE_VAULT)。
- 一周从星期一开始，目前不可配置。
- 日期格式为YYYY-MM-DD，如果您的每日笔记文件名不同，[您可以在循环中使用JS进行更改](https://github.com/Richardsl/heatmap-calendar-obsidian/discussions/2)。

## 开发（Windows）：
```npm run dev``` - 将启动 TS 到 JS 的转译器，并在修改时自动将 JS/CSS/清单文件复制到示例 vault 中。  
建议安装 https://github.com/pjeby/hot-reload 以避免在每次更改后重新启动 obsidian，但请记得在 EXAMPLE_VAULT/.obsidian/plugins/heatmap-calendar/ 中添加一个 **.hot-reload** 文件。

### 更新内容：

**版本 [0.6.0] - 2023-04-12**
- 新功能：通过设置添加定义全局颜色的能力 @sunyatasattva pull #74
- 新功能：添加更多灵活的自定义样式，用于传递给日期单元格的“内容” @sunyatasattva pull #73

**版本 [0.5.0] - 2022-06-30**
- 新功能：添加暗黑模式支持

**版本 [0.4.0] - 2022-06-25**
- 新功能：添加鼠标悬停预览功能，由 @arsenty 提供。  
启用方法 - 在条目中添加 **content: await dv.span(`[](${page.file.name})`)**，并启用 **设置** -> **核心插件** -> **页面预览**。  
可选择安装插件 [Metatable](https://github.com/arnau/obsidian-metatable) 以在预览窗口中显示元数据/正文。  
详见示例以获取更多详情

**版本 [0.3.0] - 2022-06-25**
- 新功能：可以添加更多强度以增加颜色分辨率。只需向 **calendarData.colors.yourcolor** 提供更多颜色即可
- 新功能：可以使用 *intensityScaleStart* 和 *intensityScaleEnd* 设置强度缩放的自定义范围
- 修复：来自其他年份的条目会显示在日历中

**版本 [0.2.0] - 2022-06-05**
- 新功能：在今天的方框周围添加边框以指示当前日期。可以通过将 *showCurrentDayBorder* 设置为 false 来移除边框
- 新功能：通过使用自动文件复制而不是符号链接，提供更好的开发解决方案/工作流程

**版本 [0.1.1] - 2022-03-18**
- 修复：修复了日期问题，不同时区的年份会以不正确的天数呈现 [issue#4](https://github.com/Richardsl/heatmap-calendar-obsidian/issues/4)。
- 修复：修复了某些条目未显示在正确的月份的问题
- 修复：修复了网格单元格未正确随浏览器宽度缩放的问题，尤其是网格单元格中的内容

**版本 [0.1.0] - 2022-02-23**
- 初始发布



