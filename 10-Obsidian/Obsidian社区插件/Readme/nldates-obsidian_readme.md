---
uid: 2023080322224679
title: Obsidian 插件：【Readme】Natural Language Dates
tags: ['日期相关', '效率', 'obsidian插件', 'readme']
description: 基于日常自然语言创建日期
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Natural Language Dates

> [!Note] 插件名片
> - 插件名称：Natural Language Dates
> - 插件作者：Argentina Ortega Sainz
> - 插件说明：基于日常自然语言创建日期
> - 插件分类：[' 日期相关 ', ' 效率 ', 'obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/argenos/nldates-obsidian)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?nldates-obsidian)

## 概述

基于日常自然语言创建日期

![Natural Language Dates](https://cdn.pkmer.cn/covers/nldates-obsidian.PNG!pkmer)

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/argenos/nldates-obsidian/master/README.md)
>

---

## Readme(翻译）

下面是 [[nldates-obsidian]] 插件的自述翻译

# Obsidian 中的自然语言日期

使用自然语言的灵活性，插入时间戳并与您的日常笔记进行交叉链接。NLDates 提供了一套工具，使在 Obsidian 中处理日期和时间变得无障碍。

## 特点

- [日期自动建议](#date-autosuggest)
- [自定义 `nldates` Obsidian URI](#nldates-uri-action)
- [日期选择器](#natural-language-dates-date-picker)

如果日期无法识别，链接将不会被创建。

## 日期自动建议

<img src="https://user-images.githubusercontent.com/693981/116645561-1d565700-a944-11eb-9166-f55e72dc65bc.gif" alt="autosuggest-demo" width="500" />

在编辑器视图中使用自然语言来展开日期。

输入 `@today` <kbd>Enter</kbd>将自动展开为当前日期。同时按下<kbd>Shift</kbd>键可以将输入文本保留为别名（例如 `@today` → `[[202112-27|today]]`）。

### 配置

| 设置             | 描述                                                     | 默认值   |
| --------------- | ------------------------------------------------------- | ------- |
| 启用/禁用        | 全局开关，用于启用或禁用自动建议                           | 启用    |
| 触发短语         | 打开自动建议所需的字符                                     | `@`     |
| 插入为链接？     | 日期将被插入为维基链接（即 `[[<date>]]`）                   | 是      |

## `nldates` URI 操作

现在可以使用 [nldates](https://publish.obsidian.md/help/Advanced+topics/Using+obsidian+URI) 操作来使用自然语言打开每日笔记，方法是使用 `obsidian://nldates?day=<date here>`。请不要忘记适当地 [编码空格字符](https://publish.obsidian.md/help/Advanced+topics/Using+obsidian+URI#Encoding)。

| `obsidian://nldates` 参数 | 描述                                 |
| ------------------------------ | --------------------------------------- |
| `day`                          | 自然语言日期字符串            |
| `newPane`                      | 在新窗格中打开笔记，默认为 `yes` |

### 命令和快捷键

`nldates` 添加了一些用于处理自然语言日期的命令。您可以通过转到 `设置 > 快捷键` 并按 `自然语言日期` 进行过滤来为它们添加自定义快捷键（请注意，从 **v0.4.1** 开始，默认情况下未设置快捷键）。

#### 自然语言日期：日期选择器

<img src="assets/date-picker.png" alt="date-picker" width="400" />

打开日期选择器菜单

#### 其他命令

| 设置                                       | 描述                                                                                                                                                                                                                                                                                                                                                                             | 默认值                       |
| ---------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------- |
| 插入当前日期                               | 插入当前日期，使用设置菜单中指定的格式                                                                                                                                                                                                                                                                                                                                         | `YYYY-MM-DD`                  |
| 插入当前时间                               | 插入当前时间，使用设置菜单中指定的格式                                                                                                                                                                                                                                                                                                                                         | `HH:mm`                       |
| 插入当前日期和时间                         | 插入当前日期和时间，使用设置菜单中指定的格式                                                                                                                                                                                                                                                                                                                                     | `YYYY-MM-DD HH:mm`            |
| 解析自然语言日期                           | 将选定的文本解析为自然语言日期。用设置菜单中指定的格式替换选定的文本，并将其替换为解析后的日期的 Obsidian 链接。<br /><br />对于单词日期（例如今天、明天、星期五等），可以在不先选择单词的情况下使用该命令。也可以使用类似于 Nov9、25Dec 的日期来使用此技巧。                                                                                                 | `[[YYYY-MM-DD]]`              |
| 解析自然语言时间                           | 将选定的文本解析为自然语言时间。用设置菜单中指定的格式替换选定的文本，并将其替换为解析后的时间戳。您可以尝试使用任何标准时间，例如现在、15 分钟后、1 小时后、5 分钟前等。                                                                                                                                                    | `HH:mm`                       |
| 解析自然语言日期（作为链接）               | 将选定的文本解析为自然语言日期。用指定格式的标准 Markdown 链接替换选定的文本                                                                                                                                                                                                                                                                                                     | `[选定的文本](YYYY-MM-DD)` |
| 解析自然语言日期（作为纯文本）             | 将选定的文本解析为自然语言日期。用指定格式的纯文本解析后的日期替换选定的文本                                                                                                                                                                                                                                                                                                    | `YYYY-MM-DD`                  |

**注意：** 您当然可以为每个命令添加快捷键。

## 用法

解析器支持大多数日期/时间格式，包括：

- 今天，明天，昨天，上周五等
- 2013 年 8 月 17 日至 2013 年 8 月 19 日
- 本周五从 13:00 至 16:00
- 5 天前
- 2 周后
- 2013 年 8 月 17 日星期六 18:40:39 GMT+0900（JST）
- 2014-11-30T08:15:30-05:30

### 演示

<img src="https://user-images.githubusercontent.com/5426039/89716767-1d768700-d9b0-11ea-99cf-b3bb6846a872.gif" alt="demo" style="zoom:60%;" />

> **注意**：
> 解析器将替换所有选定的文本，这意味着在一个句子中，您应该只选择要解析的日期，而不是整个句子。
> 在示例句子 `Do this thing by tomorrow` 中，只应选择单词 `tomorrow`。或者，记住您可以将光标放在 `tomorrow` 单词上或旁边，它将被替换：

<img src="https://user-images.githubusercontent.com/5426039/98358876-a640a580-2027-11eb-8efc-015362a94321.gif" alt="Supported selections" style="zoom:80%;" />

## 如何安装

在 Obsidian 中，转到“设置 > 第三方插件 > 社区插件 > 浏览”，然后搜索“Natural Language Dates”。

### 手动安装

将 [最新版本](https://github.com/argenos/nldates-obsidian/releases/latest) 解压缩到您的 `<vault>/.obsidian/plugins/` 文件夹中。

## 关于

由 [chrono](https://github.com/wanasit/chrono) 库和一些自定义解析驱动。

### 自定义解析

我改变的唯一行为是以下几点：

| 写入           | 日期                   |
| -------------- | --------------------- |
| 下周           | 下周一                 |
| 下个 [月份]     | 下个月的第一天         |
| 本月中旬       | 本月的 15 号             |
| 本月底         | 本月的最后一天         |

## 对于开发者

NLDates 为您提供了一个接口，用于解析插件中的自然语言日期。`parsedDate()` 函数可在 NaturalLanguageDates 插件实例上使用。它具有以下签名：

```ts
interface NLDResult {
  formattedString: string;
  date: Date;
  moment: Moment;
}

function parseDate(date: string): NLDResult;
```

- `formattedString` 将根据 `nldates` 的设置返回格式化的日期，且不包含方括号。
- `date` 对象是由自定义解析器的 `parseDate` 方法返回的（使用 [chrono](https://github.com/wanasit/chrono) 包）。
- `moment` 对象是使用 `date` 对象创建的。

### 示例用法

```ts
const nldatesPlugin = obsidianApp.plugins.getPlugin("nldates-obsidian");
const parsedResult = nldatesPlugin.parseDate("明年");
console.log(parsedResult.moment.format("YYYY")); // 这应该返回2021
```

### 典型的字符串格式和标记

| 输入       | 示例          | 描述 |
| ----------- | ---------------- | ----------- |
| `YYYY`      | `2014`           | 4 位或 2 位数字的年份。注意：只有在 `strict` 模式下才能解析 4 位数字 |
| `YY`        | `14`             | 2 位数字的年份 |
| `Y`         | `-25`            | 带有任意位数和符号的年份 |
| `Q`         | `1..4`           | 年份的季度。将月份设置为季度的第一个月份 |
| `M MM`      | `1..12`          | 月份的数字 |
| `MMM MMMM`  | `Jan..December`  | 以 `moment.locale()` 设置的本地化月份名称 |
| `D DD`      | `1..31`          | 月份中的日期 |
| `Do`        | `1st..31st`      | 带有序数的日期 |
| `DDD DDDD`  | `1..365`         | 年份中的日期 |
| `X`         | `1410715640.579` | Unix 时间戳 |
| `x`         | `1410715640579`  | Unix 毫秒时间戳 |
| `gggg`      | `2014`           | 本地化的 4 位数字周年份 |
| `gg`        | `14`             | 本地化的 2 位数字周年份 |
| `w ww`      | `1..53`          | 本地化的一年中的周数 |
| `e`         | `0..6`           | 本地化的一周中的天数 |
| `ddd dddd`  | `Mon...Sunday`   | 以 `moment.locale()` 设置的本地化星期几名称 |
| `GGGG`      | `2014`           | ISO 的 4 位数字周年份 |
| `GG`        | `14`             | ISO 的 2 位数字周年份 |
| `W WW`      | `1..53`          | ISO 一年中的周数 |
| `E`         | `1..7`           | ISO 一周中的天数 |

更多信息，请参见：[moment.js文档](https://momentjs.com/docs/#/parsing/string-format/)。

### 操作 `moment` 实例

如果需要，您可以进一步 [操作](https://momentjs.com/docs/#/manipulating/) 或 [格式化](https://momentjs.com/docs/#/displaying/)moment 对象，例如：

```typescript
const nldatesPlugin = obsidianApp.plugins.getPlugin("nldates-obsidian");
const nextYear = nldatesPlugin.parseDate("明年");

console.log(nextYear.moment.format("YYYY")); // 这应该返回2021
console.log(nextYear.moment.fromNow()); // "两个月后"

const thisEvening = nldatesPlugin.parseDate("今天晚上21:00");
console.log(thisEvening.moment.add(1, "hour")); // 这会将Moment更改为22:00
```

请注意，如果您操作 `parsedResult.moment`，`date` 和 `formattedString` 不会被更新。如果您不想改变 `parsedResult.moment`，您应该克隆它。在 [moment.js文档网站](https://momentjs.com/docs/#/parsing/date/) 上阅读更多相关信息。
