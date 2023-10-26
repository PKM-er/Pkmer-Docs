---
uid: 2023082011360686
title: Obsidian 插件：【Readme】Periodic PARA
tags: ['obsidian插件', 'readme']
description: 协助使用定期笔记进行PARA系统的实践。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】Periodic PARA

> [!Note] 插件名片
> - 插件名称：Periodic PARA
> - 插件作者：YiBing Lin
> - 插件说明：协助使用定期笔记进行 PARA 系统的实践。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/quanru/obsidian-periodic-para)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?periodic-para)

## 概述

协助使用定期笔记进行 PARA 系统的实践。

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/quanru/obsidian-periodic-para/main/README.md)
>

---

## Readme(翻译）

下面是 [[periodic-para]] 插件的自述翻译

- 这是一个为 [LifeOS](https://forum.obsidian.md/t/building-my-second-brain-with-obsidian/62934) 设计的插件，用于辅助使用周期性笔记实践 PARA 系统。
- 您可以下载 [LifeOS-example](https://github.com/quanru/obsidian-example-LifeOS/tree/english-version) 来体验它。
截图

### 视图

![](assets/periodic-para-plugin-en.png)

![](assets/periodic-para-plugin.png)

创建周期性笔记和 PARA 笔记

## 演示

查看 [YouTube演示](https://www.youtube.com/watch?v=poey9QoB7ns)

## 安装

> [Dataview](https://github.com/blacksmithgu/obsidian-dataview) 是必需的，请先安装它。

#### 推荐

定期 PARA 可在 Obsidian 社区插件浏览器中找到！

  1. 在 Obsidian 的社区插件浏览器中搜索 "Periodic PARA"
  2. 在 Obsidian 设置中启用插件（在 "Community plugins" 下找到 "Periodic PARA"）。
  3. 检查设置。您可以自定义定期笔记和 PARA 笔记的目录。
手动操作
前往 [发布页面](https://github.com/quanru/obsidian-periodic-para/releases)，下载最新的 `main.js` 和 `manifest.json` 文件。在 `.obsidian/plugins` 文件夹中创建一个名为 `periodic-para` 的文件夹，并将这两个文件放入其中。

## 设置

|设置项|描述|
|---|---|
|周期性笔记文件夹|默认为 'PeriodicNotes'，设置周期性笔记的文件夹。文件夹中的每日、每周、每月、每季度和每年的笔记格式必须满足以下要求：YYYY-MM-DD、YYYY-Www、YYYY-MM、YYYY-Qq|
|项目文件夹|默认为 '1. Projects'，设置 PARA 项目所在的文件夹，每个子目录都是一个项目，每个项目必须有一个 [XXX.]README.md 文件作为项目索引|
|领域文件夹|默认为 '2. Areas'，设置 PARA 领域所在的文件夹，每个子目录都是一个领域，每个领域必须有一个 [XXX.]README.md 文件作为领域索引|
|资源文件夹|默认为 '3. Resources'，设置 PARA 资源所在的文件夹，每个子目录都是一个资源，每个资源必须有一个 [XXX.]README.md 文件作为资源索引|
|归档文件夹|默认为 '4. Archives'，设置 PARA 归档所在的文件夹，每个子目录都是一个归档，每个归档必须有一个 [XXX.]README.md 文件作为归档索引|
|项目列表标题|默认为 'Project List'，设置每日笔记中项目快照所在模块的标题，以便在每周、每月、每季度和每年的笔记中收集当前周期内经历的项目|
|领域列表标题|默认为 'First Things Dimension'，设置每季度笔记中领域快照所在模块的标题，以便在每年的笔记中收集当前周期内经历的领域|
|习惯列表标题|默认为 'Habit'，设置每日笔记中习惯所在模块的标题，任务查询视图将忽略该标题下的任务|

使用方法

### 查询代码块

Periodic PARA 通过编写 Markdown 代码块来查询项目、区域、任务列表，根据从当前文件名解析的日期查询任务、项目、区域、资源、归档列表，根据从前置元数据解析的标签查询任务、项目、区域、资源、归档列表。

#### 按时间查询

时间范围从当前文件名中解析，例如：

- 2023-01-01.md // 只包括 1 月 1 日
- 2023-W21.md // 每周 21 的每一天
- 2023-06.md // 每天和每周的六月份
- 2023-Q3.md // 第三季度的每一天、每一周、每一月
- 2023.md // 2023 年的每一天、每一周、每一月、每一季度

~~~markdown
```PeriodicPARA
按时间完成的任务列表
```
~~~


~~~markdown
```PeriodicPARA
按时间记录的任务列表
```
~~~


~~~markdown
```PeriodicPARA
按时间的项目列表
```
~~~

~~~markdown
```PeriodicPARA
按时间的区域列表
```
~~~

#### 按标签查询

标签是从当前文件的前置元数据中解析出来的，例如：

~~~markdown
---
tags: 
- x-project
---
~~~

下面的代码块将使用 x-project 作为查询的标签。

~~~markdown
```PeriodicPARA
TaskListByTag
```
~~~

~~~markdown
```PeriodicPARA
BulletListByTag
```
~~~

~~~markdown
```PeriodicPARA
ProjectListByTag
```
~~~

~~~markdown
```PeriodicPARA
AreaListByTag
```
~~~

~~~markdown
```PeriodicPARA
ResourceListByTag
```
~~~

~~~markdown
```PeriodicPARA
ArchiveListByTag
```
~~~

#### 按文件夹查询项目参数

~~~markdown
```PeriodicPARA
按文件夹查询项目列表
```
~~~

~~~markdown
```PeriodicPARA
按文件夹查询区域列表
```
~~~

~~~markdown
```PeriodicPARA
按文件夹查询资源列表
```
~~~

~~~markdown
```PeriodicPARA
按文件夹查询归档列表
```
~~~

### [templater](https://github.com/SilentVoid13/Templater) 助手

#### 生成列表

在指定的目录中生成 README.md 快照列表。

~~~markdown
<% PeriodicPARA.Project.snapshot() %>
<% PeriodicPARA.Area.snapshot() %>
<% PeriodicPARA.Resource.snapshot() %>
<% PeriodicPARA.Archive.snapshot() %>
~~~

例如：

~~~markdown
<% PeriodicPARA.Project.snapshot() %>
~~~

转换为

~~~markdown
1. [[1. Projects/x-project/README|x-project]]
2. [[1. Projects/y-project/README|y-project]]
~~~

## 支持

- [Discord](https://discord.gg/HZGanKEkuZ)

## 捐赠

如果这个插件对您有帮助，请在 [buymeacoffee](https://www.buymeacoffee.com/leyang) 上给我买杯咖啡。

<a href="https://www.buymeacoffee.com/leyang">
  <img src="https://img.buymeacoffee.com/button-api/?text=给我买杯咖啡&emoji=&slug=leyang&button_colour=6495ED&font_colour=ffffff&font_family=Lato&outline_colour=000000&coffee_colour=FFDD00">
</a>



