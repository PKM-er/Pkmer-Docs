---
uid: 20240312193744
title: Obsidian 插件：【Readme】Enhanced tables
tags: ['obsidian插件', 'readme']
description: Add programmable controls to selected tables.
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】Enhanced tables

> [!Note] 插件名片
> - 插件名称：Enhanced tables
> - 插件作者：pistacchio
> - 插件说明：Add programmable controls to selected tables.
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/pistacchio/obsidian-enhanced-tables)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?enhanced-tables)

## 概述

Add programmable controls to selected tables.

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/pistacchio/obsidian-enhanced-tables/main/README.md)

---

## Readme(翻译）

下面是 [[enhanced-tables]] 插件的自述翻译

【机翻】

# 增强表格

一个用于 [Obsidian](https://obsidian.md/) 的插件，可以为标准标记表格添加高级控件（如排序、过滤和分页）。

它受到 [DataLoom](https://dataloom.xyz/) 的启发，这是一个令人难以置信的插件，但我希望我的数据存储在简单、易于访问和编辑的表格中，而不是存储在 JSON 文件中，这种方式与 Obsidian 工作流程的整合不够无缝。

## 例子

![](https://cdn.pkmer.cn/covers/enhanced-tables_2_0.gif!pkmer)

## 特点

- 为表格添加可配置的分页功能
- 编写自定义过滤器并动态切换
- 按数值对表格行进行排序
- 为日期和数字应用自动格式化
- 定义具有固定值的“枚举”列
- 实现每列的自定义格式化

## 如何安装

### 社区插件

- 打开设置 > 第三方插件
- 确保安全模式已关闭
- 点击浏览社区插件
- 搜索 "Enhanced tables"
- 点击安装
- 安装完成后，关闭社区插件窗口并激活新安装的插件
- 前往最新的发布版本
- 下载 main.js、manifest.json
- 保存到您的 vault VaultFolder/.obsidian/plugins/enhanced-tables/

## 它是如何工作的

如果您想要为任何标准的 Obsidian 表格添加一些高级控制或格式化，可以在表格之前定义一个包含您想要应用于表格的**增强表格**配置的 [yaml](https://quickref.me/yaml.html) 代码块。切换到查看模式时，如果配置正确，表格将根据提供的配置进行格式化，并具有所有所需的高级控件。

## 配置

### 提供的示例表格的示例配置

<pre>
```yaml enhanced-tables

# date-format: DD-MM-YYYY

yes-format: "yes"
no-format: "no"

columns:
  Number column:
    alias: numberColumn
    type: number
    number-format: "style: 'currency', currency: 'EUR'"
  Date:
    type: date
    date-format: YYYY/MM/DD
  Formatted:
    formatter: "`#${$row.Id}) <span style='color: green'>${$cell}</span>`"
    nowrap: true
  Hidden:
    hidden: true
  Rating:
    type: enum
    enum:
      '1': '⭐️'
      '2': '⭐️⭐️'
      '3': '⭐️⭐️⭐️'
      '4': '⭐️⭐️⭐️⭐️'
      '5': '⭐️⭐️⭐️⭐️⭐️'
  Boolean:
    type: bool
    yes-format: '👍'
    no-format: '👎'
filter: $row.numberColumn > 1200
filters:
 Small numbers: $row.numberColumn < 1200
 High rating: Number($row.Rating) > 3
sort: Rating

# sort: -Rating

pagination:
  page-size: 5
  page-sizes:
   - 5
   - 10
style: |
   th {
     background-color: var(--color-base-50) !important;
     color: var(--color-base-70) !important;
   }

# 隐藏控件: true

隐藏配置: true
```

### 配置语法

```yaml 增强表```

#### 配置属性

所有配置属性都是可选的。

| 属性                | 类型       | 描述                                                                                                                                                                                                                                                                                                                                                                                  |
|----------------------|-----------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `date-format`        | `string`  | 必须是有效的[moment.js字符串](https://momentjs.com/docs/#/parsing/string-format/)。<br>此属性定义了所有类型为`date`的列的_input_格式，例如**ET**希望您如何编写它们。<br>默认值为`DD-MM-YYYY`。                                                                                                                                              |
| `datetime-format`    | `string`  | 必须是有效的[moment.js字符串](https://momentjs.com/docs/#/parsing/string-format/)。<br>此属性定义了所有类型为`datetime`的列的_input_格式，例如**ET**希望您如何编写它们。<br>默认值为`DD-MM-YYYY HH:mm`。                                                                                                                                    |
| `yes-format`         | `string`  | 指定了一个字符串，用于指定在类型为`bool`的列中表示布尔值`true`的方式。默认值为`"1"`。                                                                                                                                                                                                                                                             |
| `no-format`          | `string`  | 指定了一个字符串，用于指定在类型为`bool`的列中表示布尔值`false`的方式。默认值为`"0"`。                                                                                                                                                                                                                                                            |
| `columns`            | `object`  | 一个包含表列配置的对象。每列都是可选的：如果不需要任何高级功能，则不必配置列。列的名称必须与表的第一行（标题）上的名称匹配。<br>每列配置都是一个对象：详细信息请参阅[列配置属性](#column-configuration-properties)。 |
| `filter`             | `string`  | 表的默认过滤器。编写类似于JavaScript表达式，可以访问`$row`变量。<br>示例：<ul><li>`$row.rating > 3`</li><li>`$row.status === 'active'`</li></ul>                                                                                                                                                                                               |
| `filters`            | `object`  | 附加过滤器。对象的键将填充过滤器选择下拉列表。每个键的值是一个可以访问`$row`变量的JavaScript表达式-请参阅上面的`filter`。                                                                                                                                                                                        |
| `sort`               | `string`  | 用于对表进行排序的列的名称或别名。在名称或别名前面加上`-`以指定降序排序（例如：`lastUpdated`和`-lastUpdated`）。                                                                                                                                                                                                                                    |
| `pagination`         | `object`  | 分页选项，请参阅[分页配置属性](#pagination-configuration-properties)获取详细信息。                                                                                                                                                                                                                                                                         |
| `hide-controls`      | `boolean` | 如果为`true`，则不显示排序和过滤控件。                                                                                                                                                                                                                                                                                                                                          |
| `hide-configuration` | `boolean` | 如果为`true`，则在查看模式下隐藏**ET** yaml配置代码。                                                                                                                                                                                                                                                                                                                     |
| `style`              | `string`  | 一个css字符串，用于为表应用自定义样式                                                                                                                                                                                                                                                                                                                                            |
| `editable`           | `boolean` | 如果为`true`，则列的值在查看模式下也是可编辑的，并且具有适合每列`type`的输入。可以覆盖默认配置，以每列为单位进行覆盖⚠️ **这是一个实验性功能。可能无法按预期工作，损坏您的数据并提供不理想的用户体验！**                                                                  |

<h5 dir="auto" id="column-configuration-properties">列配置属性</h5

所有列配置属性都是可选的。

| 属性        | 类型      | 描述                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|-----------------|-----------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `alias`         | `string`  | 有时列名可能很长，不方便在过滤器和格式化程序中使用。您可以为列指定一个别名字符串。如果这样做，您必须在过滤器和格式化程序中使用它。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| `type`          | `string`  | 列值的类型。可能的值为：`string` \| `number` \| `date` \| `datetime` \| `time` \| `enum` \| `bool`。默认值为`string`。<br>可以通过属性`number-format`指定`number`类型列的显示格式。<br>可以通过属性`date-format`指定`date`或`datetime`类型列的显示格式，而`time`列始终以`HH:mm`格式读取。<br>可以通过属性`enum`指定`enum`类型列的显示格式。<br>可以通过属性`bool`指定`bool`类型列的显示格式。**ET**会根据根级别`yes-format`中指定的值来确定值是否为布尔值 |
| `hidden`        | `boolean` | 如果为`true`，则该列不会显示。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| `nowrap`        | `boolean` | 如果为`true`，则将[`white-space: nowrap`](https://developer.mozilla.org/en-US/docs/Web/CSS/white-space)应用于列单元格。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| `number-format` | `string`  | 如何格式化列的数值。必须是一个定义JavaScript的[Intl.NumberFormat](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat)选项的字符串。<br>示例：<ul><li>`"style: 'currency', currency: 'JPY'"`</li><li>`"maximumSignificantDigits: 3"`</li></ul>                                                                                                                                                                                                                                                                                                                                                                                        |
| `date-format`   | `string`  | 如何格式化列的`date`或`datetime`值。必须是有效的[moment.js字符串](https://momentjs.com/docs/#/parsing/string-format/)。<br>如果提供，将覆盖根级别的`date-format`和`datetime-format`。示例：<ul><li>`"YYYY-MM"`</li><li>`"DD/MM/YY HH:mm"`</li></ul>                                                                                                                                                                                                                                                                                                                                                                                                                            |
| `yes-format`    | `object`  | 定义了`true`布尔值的格式。默认值为`"✔"`。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| `no-format`     | `object`  | 定义了`false`布尔值的格式。默认值为`"✖"`。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| `formatter`     | `string`  | 列值的自定义格式化程序。接受任何JavaScript代码。通常，您希望使用一些[JavaScript模板文字字符串](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)，就像示例中那样。它可以访问变量`$cell`，`$row`和$ctx以及一些额外的上下文。<br>示例：<ul><li>`"\`#${$row.someOtherColumn}) <strong>${$cell}</strong>\`"`</li></ul>                                                                                                                                                                                                                                                                                                   |
| `enum`          | `object`  | 定义了枚举值的格式。`enum`对象的每个键都是有效的枚举字符串，其值是显示方式。<br>示例：<pre>enum:<br>&nbsp;&nbsp;- won: "\<span style="color: green"\>WON\</span\>"<br>&nbsp;&nbsp;- lost: "\<span style="color: red"\>LOST\</span\>"</pre>                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| `editable`      | `boolean` | 覆盖特定列的根级别 `editable` 值，以便只能在查看模式下使某些列可编辑。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| `searchable`      | `boolean` | 如果至少有一列将此值设置为 `true`，则显示一个搜索输入框，可用于通过查看 `searchable` 列的值来过滤结果。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |

<h5 dir="auto" id="pagination-configuration-properties">分页配置属性</h5

| 属性     | 类型     | 描述                                                                     |
|--------------|----------|---------------------------------------------------------------------------------|
| `page-size`  | `number` | 必填项。每页显示多少项。                                  |
| `page-sizes` | `array`  | 定义可选择的页面大小的数字数组。默认值为：25, 50, 100。 |

## 高级用法

### TableManager Api

**增强表格**插件公开了一个实用的 Api，用于在文件中处理 markdown 表格。您可以使用它来编写与自定义表格相关的高级集成，比如可以更改文件中的表格的按钮。

插件公开了一个 `Tablemanager` 实例，可以通过 `app.plugins.plugin['enhanced-tables'].tableManager` 进行程序化访问；

```typescript
// Tablemanager

每一行的表格都由一个`string`数组表示，每个元素都是一个单元格的内容。

  type LineValues = string[];

该类公开以下方法：

// 在以下所有方法中：
//   `lineNo` = 0 = 第一行数据
//   `lineNo` = n = 第n行
//   `lineNo` = -1 = 最后一行

// 在以下所有方法中，`fileContent: string`通常是当前文件的内容
// 可以通过`this.app.workspace.getActiveViewOfType(MarkdownView)?.data`访问，或者通过`this.app.vault.read()`获取文件的内容

// 在以下所有方法中，`tableIndex: number = 0`是文件中表格的可选索引
// 如果一个文件中有多个表格。`0`是第一列，`1`是第二列，依此类推。

// 将由`values`表示的新表格行插入到提供的fileContent中的位置`lineNo`。
//   返回修改后的文件内容
function insertLine(fileContent: string, lineNo: number, values: LineValues, tableIndex = 0): string {}

// 用由`values`表示的新表格行替换在提供的fileContent中位置`lineNo`的表格行
//   返回修改后的文件内容
function modifyLine(fileContent: string, lineNo: number, values: LineValues, tableIndex = 0): string {}

// 用由`values`表示的新表格头替换在提供的fileContent中的表格头
//   返回修改后的文件内容
function modifyHeader(fileContent: string, values: LineValues, tableIndex = 0): string {}

// 删除在提供的fileContent中位置`lineNo`的表格行
//   返回修改后的文件内容
function removeLine(fileContent: string, lineNo: number, tableIndex = 0): string {}

// 返回在提供的fileContent中位置`lineNo`的表格行的值
function readLine(fileContent: string, lineNo: number, tableIndex = 0): LineValues| null {}

// 返回在提供的fileContent中的所有表格值
function readTableLines(fileContent: string, tableIndex = 0): LineValues | null {}
```