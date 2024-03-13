---
uid: 2023080322213773
title: Obsidian 插件：Liquid Templates
tags: ['模板', 'obsidian插件', 'readme']
description: 使用支持 LiquidJS 标签的模板
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Liquid Templates

> [!Note] 插件名片
> - 插件名称：Liquid Templates
> - 插件作者：Diomede Tripicchio
> - 插件说明：使用支持 LiquidJS 标签的模板
> - 插件分类：[' 模板 ', 'obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/oeN/liquid-template)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?liquid-templates)

## 概述

使用支持 LiquidJS 标签的模板

![Liquid Templates](https://cdn.pkmer.cn/covers/liquid-templates.gif!pkmer)

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/oeN/liquid-template/master/README.md)

---

## Readme(翻译）

下面是 [[liquid-templates]] 插件的自述翻译

## Liquid 模板

这是 Obsidian（<https://obsidian.md>）的一个插件。

使用这个插件，你可以使用 [LiquidJS](https://liquidjs.com/) 标签来编写你的模板。

免责声明

该插件仍在大力开发中，因此尚未进行优化，并具有基本功能。

## 自动完成

默认情况下，有一个自动完成功能，通过 `;;` 触发，但可以在选项中进行自定义。

![](imgs/autocomplete-liquid-templates.gif)

这意味着您可以创建一个由较小模板组成的模板，例如（假设您的模板文件夹为 `templates`）：

*templates/header.md*

```

# 头部

插入一个通用的头部
```

*templates/footer.md*

```
---
我只是一个页脚
```

*templates/awesome_template.md*

```
{% include "header" %}

这是我的笔记正文：{{title}}
链接到今天的笔记[[{{date}}]]

{% include "footer" %}
```

当你使用 "Awesome template" 模板创建一个笔记时，你将得到：

*一个很酷的标题.md*

```

# 标题

插入一个常见的标题

这是我的笔记正文：一个很酷的标题
链接到今天的笔记 [[2021-05-21]

---
我只是一个页脚
```

但除此之外，您可以使用所有基本的 [标签](https://liquidjs.com/tags/overview.html) 和 [过滤器](https://liquidjs.com/filters/overview.html)

## 自定义过滤器

目前，我将在这里保留过滤器的文档，当它们变得更多时，我会将其移动到更方便的地方。

## `date` 过滤器

LiquidJS 的 [内置 `date` 过滤器](https://liquidjs.com/filters/date.html) 已被替换为自定义的过滤器。

目前，如果日期格式中有 `%` 字符，则使用旧的过滤器，否则将使用新的过滤器。

新的 `date` 过滤器使用 [date-fns](https://date-fns.org/) 作为处理日期的库，并且可以使用的格式字符串在这里展示：[date-fns 格式](https://date-fns.org/v2.21.3/docs/format)

此过滤器还可以使用一些特殊的单词：

**"now"**<br/>
`{{ "now" | date: "yyyy-MM-dd" }}`<br/>
使用 `new Date` 中的日期，并按照给定的格式进行格式化<br/>

**"today"**<br/>
`{{ "today" | date: "yyyy-MM-dd" }}`<br/>
与 `now` 相同<br/>

**"yesterday"**<br/>
`{{ "yesterday" | date: "yyyy-MM-dd" }}`<br/>
使用 [`subDays`](https://date-fns.org/v2.21.3/docs/subDays) 函数从 `Date.now()` 中减去 `1`，并按照给定的格式进行格式化<br/>

**"tomorrow"**<br/>
`{{ "tomorrow" | date: "yyyy-MM-dd" }}`<br/>
使用 [`addDays`](https://date-fns.org/v2.21.3/docs/addDays) 函数将 `1` 添加到 `Date.now()`，并按照给定的格式进行格式化<br/>

### `date` 默认格式

现在你可以更简单地使用插件设置中定义的“日期格式”：

**之前**：`{{ "now" | date: default_date_format }}`

**现在**：`{{ "now" | date }}` 使用你在设置中指定的格式作为默认值。

## `days_ago` 过滤器

一个简单的过滤器，使用 [`subDays`](https://date-fns.org/v2.21.3/docs/subDays) 函数从当前日期 (`Date.now()`) 中减去指定的天数。

请注意，该过滤器返回一个需要格式化的日期，因此需要与 `date` 过滤器一起使用，如下所示：

- `{{ 1 | days_ago | date }}` 等同于 `{{ "yesterday" | date }}`
- `{{ 2 | days_ago | date }}` 返回两天前的日期

这可以用于 " 每周回顾 " 模板，例如：

```plaintext
- [[{{ 7 | days_ago | date }}]]
- [[{{ 6 | days_ago | date }}]]
- [[{{ 5 | days_ago | date }}]]
- [[{{ 4 | days_ago | date }}]]
- [[{{ 3 | days_ago | date }}]]
- [[{{ 2 | days_ago | date }}]]
- [[{{ 1 | days_ago | date }}]]
```

## `days_after` 过滤器

一个简单的过滤器，使用 [`addDays`](https://date-fns.org/v2.21.3/docs/addDays) 来给当前日期 (`Date.now()`) 添加天数。

请记住，这个过滤器返回一个需要格式化的日期，所以需要与 `date` 过滤器一起使用，像这样：

- `{{ 1 | days_after | date }}` 等同于 `{{ "tomorrow" | date }}`
- `{{ 2 | days_after | date }}` 返回两天后的日期

## 模板上下文

除了经典的 `date`、`time` 和 `title` 变量之外，您还可以使用以下变量：

| 名称                  | 描述                                                                                                                                                    |
| ------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| default_date_format | 您在插件设置中指定的日期格式，可以像这样使用：<code>{{ "now" &#124; date: default_date_format }}</code> |
| default_time_format | 您在插件设置中指定的时间格式，可以像这样使用：<code>{{ "now" &#124; date: default_time_format }}</code> |

## 路线图

目前，这个插件只包含了 LiquidJS 的基本版本，但我希望将其扩展为允许：

- [ ] 为模板文件夹添加自动完成功能，排除文件夹设置
- [ ] 实现一个模糊查找器用于自动完成
- [x] 实现/安装一个过滤器，允许你编写 `{{ 1 | days_ago | date: default_date_format }}`
- [ ] 解析选定的模板字符串，比如你选择 `{{ "dQw4w9WgXcQ" | youtube_iframe }}` 运行一个命令并得到解析结果，这种情况下是 youtube 的 iframe。（`youtube_iframe` 标签尚不存在）



