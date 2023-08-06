---
uid: 2023080322164846
title: Obsidian 插件：【Readme】CSV Table
tags: ['转换工具', 'obsidian插件', 'readme']
description: 将 CSV 数据呈现为笔记中的表格。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：CSV Table

> [!Note] 插件名片
> - 插件名称：CSV Table
> - 插件作者：Adam Coddington
> - 插件说明：将 CSV 数据呈现为笔记中的表格。
> - 插件分类：[' 转换工具 ', 'obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/coddingtonbear/obsidian-csv-table)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsidian-csv-table)

## 概述

将 CSV 数据呈现为笔记中的表格。

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/coddingtonbear/obsidian-csv-table/master/README.md)
>

---

## Readme(翻译）

下面是 [[obsidian-csv-table]] 插件的自述翻译

## Obsidian CSV 表格

如果你有一个 CSV 文件的数据，想要在 Obsidian 中将其渲染为表格，现在你可以了。

## 快速入门

假设你有一个名为 `countries.csv` 的 CSV 文件：

```plaintext
name,capitol,population
United States of America,"Washington, DC",328200000
Colombia,Bogota,50340000
Russia,Moscow,144400000
```

下面的代码块：

~~~
```csvtable
source: countries.csv
```
~~~

将渲染出一个表格，如下所示：

<table>
    <thead>
        <tr>
            <th>name</th>
            <th>capitol</th>
            <th>population</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>United States of America</td>
            <td>Washington, DC</td>
            <td>328200000</td>
        </tr>
        <tr>
            <td>Colombia</td>
            <td>Bogota</td>
            <td>50340000</td>
        </tr>
        <tr>
            <td>Russia</td>
            <td>Moscow</td>
            <td>144400000</td>
        </tr>
    </tbody>
</table>

## 选项

- `source`：（必填）在笔记中渲染的 csv 文件的路径（相对于您的 vault 根目录）。
- `csvOptions`：用于解码引用的 CSV 文件的选项；请参阅 <https://csv.js.org/parse/options/> 获取可用选项。
- `columns`：要渲染的列的列表。每个项目可以是要显示的字段的名称或表达式（参见下面的“表达式”），并且可以重新命名。如果未指定，则将渲染引用的 CSV 中的所有列。有关详细信息，请参见“选择特定列”。
- `filter`：要用于限制显示的引用 CSV 行的过滤器表达式列表（参见下面的“表达式”）或单个过滤器表达式。如果未指定，则将渲染引用的 CSV 的所有行，同时考虑下面指定的 `maxRows` 的值。有关详细信息，请参见“过滤显示的行”。
- `sortBy`：要用于对显示的行进行排序的排序表达式列表（参见下面的“表达式”）或单个排序表达式。如果未指定，则将按照引用的 CSV 中的顺序显示行。有关详细信息，请参见“排序行”。
- `columnVariables`：变量名称到列名称的映射，允许您为上述的 `filter` 或 `columns` 设置一个名称，以引用不是有效变量名称的字段的值。
- `maxRows`：要显示的最大行数。如果未指定，则将显示引用的 CSV 的所有未经过滤的行。

### 表达式

该库使用 `filtrex` 进行表达式评估；请参阅其文档以了解有关表达式语法和可用函数的更多信息：<https://github.com/m93a/filtrex#expressions。>

在“过滤显示的行”中可以看到一个过滤表达式的示例，但实际上它们的工作方式与您可能预期的完全相同。

### 选择特定的列

您可以使用 `columns` 字段来控制要渲染的 CSV 文件的哪些列，例如：

~~~
```csvtable
columns:
- name
- population
source: my_csv_file.csv
```
~~~

<table>
    <thead>
        <tr>
            <th>name</th>
            <th>population</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>United States of America</td>
            <td>328200000</td>
        </tr>
        <tr>
            <td>Colombia</td>
            <td>50340000</td>
        </tr>
        <tr>
            <td>Russia</td>
            <td>144400000</td>
        </tr>
    </tbody>
</table>

您还可以为列设置更好的名称或使用表达式：

~~~
```csvtable
columns:
- expression: name
  name: Country Name
- expression: population  / 1000000
  name: Population (Millions)
source: my_csv_file.csv
```
~~~

<table>
    <thead>
        <tr>
            <th>Country Name</th>
            <th>Population (Millions)</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>United States of America</td>
            <td>328.2</td>
        </tr>
        <tr>
            <td>Colombia</td>
            <td>50.34</td>
        </tr>
        <tr>
            <td>Russia</td>
            <td>144.4</td>
        </tr>
    </tbody>
</table>

### 过滤显示的行

也许您只想显示 CSV 文件的一部分行？如果是这样，您可以提供一个 `filter` 表达式来限制显示哪些行：

~~~
```csvtable
source: my_csv_file.csv
filter: population < 100000000
```
~~~

<table>
    <thead>
        <tr>
            <th>name</th>
            <th>population</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Colombia</td>
            <td>50340000</td>
        </tr>
    </tbody>
</table>

默认情况下，解析器将尝试将每个字段的值转换为整数、布尔值或日期对象，以便在过滤表达式中使用。此外，请注意，您的过滤表达式也可以作为列表提供；这些表达式将进行与运算，例如：

~~~
```csvtable
source: my_csv_file.csv
filter:
- population < 100000000
- name == "Colombia"
```
~~~

请注意，过滤语言要求您在比较中使用双引号括起的字符串 -- 如果您在上面输入 `name == 'Colombia'`，过滤器将不会返回结果。

### 排序行

如果您想要对显示的 CSV 文件的行进行排序，可以提供一个排序表达式：

~~~
```csvtable
source: my_csv_file.csv
sortBy: name
```
~~~

<table>
    <thead>
        <tr>
            <th>name</th>
            <th>population</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Colombia</td>
            <td>50340000</td>
        </tr>
        <tr>
            <td>Russia</td>
            <td>144400000</td>
        </tr>
        <tr>
            <td>United States of America</td>
            <td>328200000</td>
        </tr>
    </tbody>
</table>

此外，您还可以将 `sortBy` 表达式指定为一个列表；文档将按照指定的所有字段按照等级顺序进行排序：

~~~
```csvtable
source: my_csv_file.csv
sortBy:
- columnOne
- columnTwo
```
~~~

如果您使用扩展格式指定 `sortBy` 表达式，允许您同时指定表达式和排序方向，您还可以按照相反的顺序对显示的数据进行排序：

~~~
```csvtable
source: my_csv_file.csv
sortBy:
- expression: name
  reversed: true
```
~~~

<table>
    <thead>
        <tr>
            <th>name</th>
            <th>population</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>United States of America</td>
            <td>328200000</td>
        </tr>
        <tr>
            <td>Russia</td>
            <td>144400000</td>
        </tr>
        <tr>
            <td>Colombia</td>
            <td>50340000</td>
        </tr>
    </tbody>
</table>



