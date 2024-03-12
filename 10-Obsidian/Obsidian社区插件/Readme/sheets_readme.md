---
uid: 20231220112631
title: Obsidian 插件：【Readme】Sheets Extended
tags: ['obsidian插件', 'readme']
description: 垂直标题、合并单元格和具有高级表格兼容性的自定义CSS表格
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】Sheets Extended

> [!Note] 插件名片
> - 插件名称：Sheets Extended
> - 插件作者：NicoNekoru
> - 插件说明：垂直标题、合并单元格和具有高级表格兼容性的自定义 CSS 表格
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/NicoNekoru/obsidan-advanced-table-xt)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?sheets)

## 概述

垂直标题、合并单元格和具有高级表格兼容性的自定义 CSS 表格

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/NicoNekoru/obsidan-advanced-table-xt/master/README.md)

---

## Readme(翻译）

下面是 [[sheets]] 插件的自述翻译

# 石英片

这是一个为 [Obsidian](https://obsidian.md) 设计的插件，它提供了更多的功能和使用方式来处理 Markdown 表格。

# 特性

- 单元格合并
- 垂直表头
- 自定义 CSS 单元格样式
- 兼容高级表格

# 如何使用

创建一个普通的 Markdown 表格并开始使用 Obsidian Sheets 的功能：

单元格中的 `<` 和 `^` 字符将使其与左侧和上方的单元格合并。合并的单元格会叠加在一起，如下所示。

````md
| Just                               | a   | normal       | table |
| ---------------------------------- | --- | ------------ | ----- |
| Use `<` to merge cells to the left | <   | Merged cell! | <     |
| Use `^` to merge cells up          | <   | ^            | ^     |
````

![单元格合并功能](https://cdn.pkmer.cn/covers/sheets_2_0.png!pkmer)

垂直标题是通过使一列只包含破折号来创建的，就像原生的水平标题是通过使一行只包含破折号一样。

````md
| I        | -   | have | horizontal | headers |
| -------- | --- | ---- | ---------- | ------- |
| also     | -   | foo  | bar        | <       |
| have     | -   | 1    | 2          | 3       |
| vertical | -   | A    | B          | C       |
| headers! | -   | X    | Y          | Z       |

````

![垂直标题](https://cdn.pkmer.cn/covers/sheets_2_1.png!pkmer)

它还适用于高级表格！

使用 `sheet` 语言标签并开始使用带有自定义 CSS 的 Obsidian Sheets！使用 `~` 将类名前缀为 `.`，并在表格上方的元数据中使用具有该类名的 CSS。

````md
```sheet
{
    classes: { 
        class1: { 
            "color": "cyan",
        },
        class2: {
            backgroundColor: "#555",
        }
    },
}
---
| I                 | -   | have | meta                  | data        | too! |
| ----------------- | --- | ---- | --------------------- | ----------- | ---- |
| group 1           | -   | foo  | bar ~ .class1 .class2 | baz         | test |
| group 2 ~ .class1 | -   | 1    | ^                     | 3 ~ .class2 | 4    |

```
````

![自定义CSS](https://cdn.pkmer.cn/covers/sheets_2_2.png!pkmer)

通过将自定义类应用于行和列标题，可以将自定义 CSS 应用于整行和标题。Markdown 表格对齐方式使用 `:` 也是允许的。

````md
```sheet
{
    classes: {
        c1: {
            "color": "cyan",
        },
        c2: {
            backgroundColor: "#555",
        }
    },
}

---

| I           | ----   | have     | meta       | data  | too! |
| ----------- | ----   | -: ~ .c2 | ---------- | ----- | ---- |
| group 1     | - ~.c1 | foo      | bar        | baz   | test |
| group 2     | ------ | 1        | ^          | 3     | 4    |

```
````

![标题自定义CSS](https://cdn.pkmer.cn/covers/sheets_2_3.png!pkmer)

您还可以直接将自定义 CSS 应用于单元格，而不是定义一个类。

```md
| Custom  | css                             | cells |
| ------- | ------------------------------- | ----- |
| group 1 | foo ~ { "text-align": "right" } | <     |
```

![单元格自定义CSS](https://cdn.pkmer.cn/covers/sheets_2_4.png!pkmer)

# 安装

从 Obsidian 内部

此插件现在在 Obsidian 社区插件中以名称 `Sheets Extended`[可用](https://github.com/obsidianmd/obsidian-releases/pull/2281)。

转到 `设置->社区插件->浏览`，搜索 `Sheets Extended`，点击 `安装` 然后 `启用`。

## 手册

1. 从 [发布页面](https://github.com/NicoNekoru/obsidan-advanced-table-xt/releases) 下载 `main.js`、`styles.css` 和 `mainfest.json` 文件。
2. 将下载的文件放置在 `<vault>/.obsidian/plugins/sheets` 目录下。
3. 重新加载 Obsidian（打开命令面板并选择 `Reload without saving`）。
4. 进入 `设置 -> 选项 -> 社区插件`，禁用安全模式。
5. 在 `设置 -> 选项 -> 社区插件 -> 已安装插件` 下启用插件 `Sheets Extended`。

# 未来功能

- [x] 合并单元格
- [x] 垂直标题
- [x] 自定义单元格样式
  - [x] 自定义行和列样式
  - [x] 内联自定义样式
- [x] 自动进行类似于 `advanced-table` 的格式化
  - [ ] 为 `advanced-table` 自定义 CSS
支持我！
使用这个插件完全免费，但如果你想支持我或认为我为你的日子做出了贡献，你可以在这里支持我：

[<img src="https://img.shields.io/badge/NicoNekoru-yellow?style=for-the-badge&logo=paypal" alt="PayPal" height="20">](https://paypal.me/NicoNekoru)

[<img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="BuyMeACoffee" height="20">](https://www.buymeacoffee.com/niconekoru)
