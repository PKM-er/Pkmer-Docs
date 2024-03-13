---
uid: 2023080322275918
title: Obsidian 插件：Temple
tags: ['模板', 'obsidian插件', 'readme']
description: Obsidian插件，由Nunjucks驱动的模板。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Temple

> [!Note] 插件名片
> - 插件名称：Temple
> - 插件作者：garyng
> - 插件说明：Obsidian 插件，由 Nunjucks 驱动的模板。
> - 插件分类：[' 模板 ', 'obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/garyng/obsidian-temple)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsidian-temple)

## 概述

Obsidian 插件，由 Nunjucks 驱动的模板。

![Temple](https://cdn.pkmer.cn/covers/obsidian-temple.png!pkmer)

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/garyng/obsidian-temple/master/README.md)

---

## Readme(翻译）

下面是 [[obsidian-temple]] 插件的自述翻译

# 黑曜石神殿

![GitHub标签（按日期最新）](https://img.shields.io/github/v/tag/garyng/obsidian-temple?label=release&style=for-the-badge)

一个基于 [Nunjucks](https://mozilla.github.io/nunjucks/) 的 Obsidian 模板插件。

## 配置

在设置中设置包含要使用的模板的目录：

![](docs/settings.png)

## 用法

您可以通过侧边栏中的按钮来插入新模板

![](docs/sidebar.png)

或者通过命令面板来插入

![](docs/command-palette.png)

如果有多个模板定义，您将被提示选择一个模板

![](docs/templates-prompt.png)

## 模板化

由于 `obsidian-temple` 在底层使用了 `nunjucks`，您可以使用 `nunjucks` 支持的所有功能。请查阅 [官方Nunjucks文档](https://mozilla.github.io/nunjucks/templating.html) 以了解如何编写 `nunjucks` 模板。

### 示例：根据文件名填充 `aliases` 与 Zettelkasten ID

```njk
---
uid: "{{ zettel.uid }}"
aliases: ["{{ zettel.title }}"]
tags: []
---
```

如果文件名为 `20201224030406 title.md`，那么模板的输出将是：

```
---
uid: "20201224030406"
aliases: ["title"]
tags: []
---
```

如果文件名中将 `uid` 作为后缀，例如：`title 20201224030406.md`，也同样适用。

`zettel` 只是由 `obsidian-temple` 提供的对象之一，更多信息请参见 [Providers](#providers)。

## 提供者

`obsidian-temple` 目前包含了几个可以为 `nunjucks` 提供 [`context` 对象](https://mozilla.github.io/nunjucks/api.html#renderstring) 的提供者：

- `file`
- `zettel`
- `datetime`
- `clipboard`

请查看它们各自的文档，[提供者文档](#providers-documentation)。您可以轻松地添加更多的提供者，参见 [添加新的提供者](#adding-new-provider)。

添加新的提供者

你需要：

1. 创建一个新的上下文类，`T`
2. 实现 `ITempleProvider<T>`
3. 在加载时注册提供者

例如，对于 `datetime` 提供者：

1. 上下文类是 [`DateTimeContext`](https://github.com/garyng/obsidian-temple/blob/57bc5738dbf35df5403947be769f9f8b2694ddaa/src/providers/DateTimeContext.ts)
2. 提供者类是 [`DateTimeTempleProvider`](https://github.com/garyng/obsidian-temple/blob/57bc5738dbf35df5403947be769f9f8b2694ddaa/src/providers/DateTimeTempleProvider.ts)
3. 注册在 [`main.ts`](https://github.com/garyng/obsidian-temple/blob/57bc5738dbf35df5403947be769f9f8b2694ddaa/src/main.ts#L27) 中。

## 替代方案

- [`SilentVoid13/Templater`](https://github.com/SilentVoid13/Templater)

---

# 供应商文档

最好在 Obsidian 内查看此文档，可以通过激活命令面板 > 然后选择“Obsidian Temple: 插入所有供应商文档”来生成。

# `file`

为模板提供 Obsidian 内部的 [`TFile`](https://github.com/obsidianmd/obsidian-api/blob/d10f2f6efc0d0d7c9bf96cd435ef376b18fbd6d8/obsidian.d.ts#L2206) 结构。

## 用法

```
路径: {{ file.path }}
名称: {{ file.name }}
基本名称: {{ file.basename }}
扩展名: {{ file.extension }}
```

输出结果:

```
路径: Untitled 20210103181939.md
名称: Untitled 20210103181939.md
基本名称: Untitled 20210103181939
扩展名: md
```

# `datetime`

返回当前日期和时间作为 Luxon [`DateTime`](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/e5e63b56d6bb52a95cc5e7cfadc5d1bec3023f14/types/luxon/index.d.ts#L151)。

## 使用

```
现在时间：{{ datetime.now }}

日期：{{ datetime.now.day }}
月份：{{ datetime.now.month }}
年份：{{ datetime.now.year }}

小时：{{ datetime.now.hour }}
分钟：{{ datetime.now.minute }}
秒钟：{{ datetime.now.second }}
```

输出结果：

```
现在时间：2021-01-03T22:21:36.585+08:00

日期：3
月份：1
年份：2021

小时：22
分钟：21
秒钟：36
```

## 使用 `dateFormat` 过滤器进行格式化

`dateFormat` 使用 [Luxon](https://moment.github.io/luxon/index.html) 来进行日期格式化。例如：

``` 
now: {{ datetime.now | dateFormat("ffff") }}
```

输出结果为：

```
now: Sunday, January 3, 2021, 10:21 PM Singapore Standard Time
```

请参阅 [Luxon的文档](https://moment.github.io/luxon/docs/manual/formatting.html#table-of-tokens) 以获取可用的完整格式化标记列表。

# 设置

您可以在设置中覆盖默认的语言环境和时区。

---

# `zettel`

从具有 Zettelkasten ID 的笔记中提取 uid 和标题。

## 用法

给定一个名为 `20201224030406 title.md` 的文件，以下模板

```
uid: {{ zettel.uid }}
title: {{ zettel.title }}
```

输出：

```
uid: 20201224030406
title: title.md
```

即使 `uid` 被用作后缀，例如 `title 20201224030406.md`，也可以正常工作。

## 设置

您可以在设置中覆盖提取正则表达式。

# `clipboard`

从系统剪贴板中提取数据。使用 [sindresorhus/clipboardy](https://github.com/sindresorhus/clipboardy)。

## 用法

```
文本: {{ clipboard.text }}
```

输出:

```
文本: 内容
```