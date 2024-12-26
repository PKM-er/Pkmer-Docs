---
uid: 20241226133215
title: 关于查询
tags: [任务管理]
description: Tasks查询语法的介绍
author: 熊猫别熬夜
type: other
draft: false
editable: false
modified: 20241226133323
---

<!--section: 1-->

> [!tip]+ 参考资料
> [Tasks用户指南](https://publish.obsidian.md/tasks/Introduction)

# 关于查询

> [About Queries - Tasks用户指南](https://publish.obsidian.md/tasks/Queries/About+Queries)

可以通过使用 `tasks` 代码块查询来列出整个保管库中的 Task。您可以通过单击 Task 旁边的小铅笔图标来编辑查询结果中的 Task。默认情况下，Task 按状态、截止日期和路径排序。您可以更改排序（请参阅下面的查询选项）。

<!--section: 1.1-->

查询 Task 最简单的方法是这样的：

````md
```tasks

```
````

在实时预览和阅读模式下，这将列出您保管库中的**所有 Task**，无论其状态等属性如何。

这可能不是您想要的。因此，Task 允许您设置查询选项来过滤要显示的 Task。例如，您可以仅显示今天到期的 Task（来自保管库中的任何位置）：

````md
## Due today

```tasks
due today
not done
```
````

<!--section: 1.2-->

> [!note]+ Tasks 查询语法的执行循序
>
> 1. 所有过滤器指令均已运行
> 2. 然后运行任何排序指令
> 3. 然后运行任何 `limit` 指令
> 4. 然后运行任何 `groups` 指令
> 5. 然后运行任何 `limit groups` 指令

<!--section: 2-->

# 过滤器 (Filters)

> [Filters - Tasks用户指南](https://publish.obsidian.md/tasks/Queries/Filters)

- Custom Filters：自定义过滤器
- Searching for dates：搜索日期
- Text filters：文本过滤器
- Matching multiple filters：匹配多个过滤器
- Filters for Task Statuses：任务状态过滤器
- Filters for Task Dependencies：任务依赖性过滤器
- Filters for Dates in Tasks：过滤任务中的日期
- Filters for Other Task Properties：其他任务属性的过滤器
- Filters for File Properties：文件属性过滤器

<!--section: 2.1-->

## 自定义过滤器 Custom Filters

> [!tip]+
> `filter by function` was introduced in Tasks 4.2.0.
> `filter by function` 在 Tasks 4.2.0 中引入。

Task 提供了许多内置的过滤选项，但有时它们并不能完全满足所有用户的需求。

现在，Tasks 拥有强大的机制，让您创建自己的自定义过滤器，提供无与伦比的灵活性。

以下文档中提供了许多自定义过滤指令 `filter by function` 的示例，包括解释，用于当内置到 Task 中的指令不能满足您的偏好时。

您可以在自定义过滤器 ( [Custom Filters](https://publish.obsidian.md/tasks/Scripting/Custom+Filters)) 中了解更多关于这个非常强大的功能的信息。

<!--section: 2.2-->

## 搜索日期

任务在查询块内的日期方面提供了很大的灵活性。

基本上有两种主要的日期搜索类型：

- 特定日期搜索
- 日期范围搜索

<!--section: 2.2.1-->

### 特定日期搜索

````md
```tasks
starts before 2023-04-20
due on or before today
```
````

<!--section: 2.2.1.1-->

#### 日期搜索选项

| option 选项    | all earlier dates | search date | all later dates |
| -------------- | :---------------: | :---------: | :-------------: |
| `before`       |        ✔         |             |                 |
| `on or before` |        ✔         |     ✔      |                 |
| `on`           |                   |     ✔      |                 |
| `on or after`  |                   |     ✔      |       ✔        |
| `after`        |                   |             |       ✔        |

> [!tip]+
> `on or before` 和 `on or after` 在 Task 4.6.0 中被引入。

<!--section: 2.2.1.2-->

#### 绝对日期

`<date>` 过滤器可以使用“绝对”日期，其首选格式为 `YYYY-MM-DD` 。绝对日期指定日历中的特定日期。它们代表同一天，无论今天的日期如何。

Examples: 示例：

- `2021-05-25`

<!--section: 2.2.1.3-->

#### 相对日期

`<date>` 过滤器可以与 `relative` 相对日期一起提供。相对日期是根据今天的日期计算的。

当天变化时，相对日期如 `due today` 将被重新评估，以确保列表保持最新。

基本示例：

- `yesterday`
- `today`
- `tomorrow`
- `next monday`
- `last friday`
- `14 days ago`
- `in two weeks`
- `14 October` （将使用当前年份）
- `May` （本年度 5 月 1 日将被使用）

请注意，如果是星期三并且你写 `tuesday` ，任务假定你指的是“昨天”，因为那是最近的星期二。如果你想指“下个星期二”，请使用 `next tuesday` 。

<!--section: 2.2.2-->

### 日期范围搜索

Task 允许指定一对日期进行日期搜索， `<date range>` 。

本节描述日期范围搜索，例如：

````md hl:2
```tasks
due 2023-11-25 2023-11-30
happens this week
```
````

<!--section: 2.2.2.1-->

#### 绝对日期范围

| option 选项    | all earlier dates | `start date` | all dates inside the range | `end date` | all later dates |
| -------------- | ----------------- | ------------ | -------------------------- | ---------- | --------------- |
| `before`       | ✔                |              |                            |            |                 |
| `in or before` | ✔                | ✔           | ✔                         | ✔         |                 |
| `in`           |                   | ✔           | ✔                         | ✔         |                 |
| `in or after`  |                   | ✔           | ✔                         | ✔         | ✔              |
| `after`        |                   |              |                            |            | ✔              |

<!--section: 2.2.2.2-->

#### 相对日期范围

Tasks 支持一组非常特定的相对 `<date range>` 值： `last|this|next week|month|quarter|year` 。管道（ `|` ）字符表示“或”。

任务将根据今天的日期处理这些范围，并将其内部转换为绝对日期范围（ `YYYY-MM-DD YYYY-MM-DD` ）。

示例相对日期范围：

- `in this week` 本周一至周日（含）
- `after this month`
- `next quarter`
- `on or before next year`

<!--section: 2.2.2.3-->

#### 编号日期范围

也可以使用独立于当前日期的编号日期范围的能力。这些编号日期范围类型得到支持：

- Week 周
  - Format: `YYYY-Www` ( `ww` 为周数，总是两位数字）
  - Example: `2022-W14` 示例： `2022-W14`
- Month 月份
  - Format: `YYYY-mm` （ `mm` 为月份数字，总是两位数）
  - Example: `2023-10` 示例： `2023-10`
- Quarter 季度
  - Format: `YYYY-Qq` （ `q` 是季度编号，总是 1 位数）
  - Example: `2021-Q4`
- Year 年份
  - Format: `YYYY`
  - Example: `2023` `

> [!tip]+
> 编号日期范围在任务 3.1.0 中引入。

<!--section: 2.3-->

## Text filters 文本过滤器

文本搜索过滤器有 2 种类型：

1. `heading (includes|does not include) <search text>`
2. `heading (regex matches|regex does not match) /<JavaScript-style Regex>/`

> [[#Heading 标题过滤器]]

<!--section: 2.4-->

## 匹配多个过滤器

每行查询都必须匹配，任务才能列出。换句话说，行之间被视为存在一个 'AND' 运算符。在每行中，您可以使用布尔运算符 `NOT` 、 `AND` 、 `OR` 、 `AND NOT` 、 `OR NOT` 和 `XOR` ，只要将单个过滤器用括号括起来即可：

````md
```tasks
(no due date) OR (due after 2021-04-04)
path includes GitHub
```

```tasks
due after 2021-04-04
(path includes GitHub) AND NOT (tags include #todo)
```
````

<!--section: 2.5-->

## 任务状态过滤器

- Status 状态
- Status Name 状态名称
- Status Type 状态类型
- Status Symbol 状态符号
- Next Status Symbol 下一个状态符号

示例，查找具有尚未添加到任务设置中的状态符号的任何任务：

````
```tasks
status.name includes unknown
group by path
```
````

<!--section: 2.5.1-->

### Status

- `done` - 匹配状态类型为 `DONE` 、 `CANCELLED` 和 `NON_TASK` 任务
- `not done` - 匹配状态类型为 `TODO` 和 `IN_PROGRESS` 任务

> [!tip]+ 在 Tasks 1.23.0 之前，没有任务状态类型的概念，因此仅使用状态符号：
>
> - 带有 `[ ]` 任务被视为 `not done`
> - 除空格外的任何其他字符均视为已 `done`

<!--section: 2.5.1.1-->

自 4.2.0 任务以来，现在可以使用 `task.isDone` 进行按状态的自定义过滤。

```js
filter by function task.isDone
```

- 与 `done` 过滤器相同，但与其他行上的表达式结合使用可能很有用。

```js
filter by function ! task.isDone
```

- 与 `not done` 过滤器相同，但与其他行上的表达式结合使用可能很有用。

> [!caution]+
> `task.status.type` (see [Status Type](https://publish.obsidian.md/tasks/Queries/Filters#Status%20Type)) 在自定义过滤器中比 `task.isDone` 提供更多精度。

<!--section: 2.5.2-->

### Status Name

自定义的状态名称，例如，也许您将 `[!]` 命名为 `Important` ，因此该字段将搜索具有该状态符号的所有任务的文本 `Important` 。

- `status.name (includes|does not include) <string>`
  - 不区分大小写（忽略大小写）。
- 正则表达式匹配（默认区分大小写）。
  - 必备阅读: [正则表达式搜索](https://publish.obsidian.md/tasks/Queries/Regular+Expressions)。

> [!tip]+
> `status.name` 文本搜索是在任务 1.23.0 中引入的。

<!--section: 2.5.2.1-->

从 Tasks 4.2.0 开始，现在可以使用 `task.status.name`**按状态名称进行 [自定义过滤](https://publish.obsidian.md/tasks/Scripting/Custom+Filters)**。

```javascript
filter by function task.status.name === 'Unknown'
```

- 查找尚未添加到任务设置中的具有自定义状态的所有任务。

<!--section: 2.5.3-->

### Status Type

- `status.type (is|is not) (TODO|DONE|IN_PROGRESS|CANCELLED|NON_TASK)`
  - `TODO` 等值不区分大小写：例如，您可以使用 `in_progress`
- 这将搜索您为自定义状态指定的类型。
- 如果您希望找到所有处于 `IN_PROGRESS` 的任务，并且您已将状态设置为 `[/]` 、 `[d]` 以及可能还有其他几个 `IN_PROGRESS` ，则此搜索非常有效。
- 要搜索多种可能的状态类型：
  - 要排除多个值，可以使用多个 `status.type is not` 行。
  - 要允许多个值，请使用布尔组合，例如： `( status.type is TODO ) OR ( status.type is IN_PROGRESS )` 。
  - 或者参见下面的“自定义过滤”示例。

> [!tip]+
> `status.type` 文本搜索是在任务 1.23.0 中引入的。

<!--section: 2.5.3.1-->

从 Tasks 4.2.0 开始，现在可以使用 `task.status.type`**按状态类型进行 [自定义过滤](https://publish.obsidian.md/tasks/Scripting/Custom+Filters)**。

```javascript
filter by function task.status.type === 'NON_TASK'
```

- 查找 `NON_TASK` 类型的任务。

---

```javascript
filter by function 'TODO,IN_PROGRESS'.includes(task.status.type)
```

- 查找类型为 `TODO` 或类型 `IN_PROGRESS` 的任务。
- 这比执行布尔 `OR` 搜索更方便。

---

```javascript
filter by function ! 'NON_TASK,CANCELLED'.includes(task.status.type)
```

- 查找类型不是 `NON_TASK` 且不是类型 `CANCELLED` 的任务。

<!--section: 2.5.4-->

### Status Symbol

没有内置的指令来按状态符号进行过滤。

<!--section: 2.5.4.1-->

从 Tasks 4.2.0 开始，现在可以使用 `task.status.symbol`**按状态符号进行 [自定义过滤](https://publish.obsidian.md/tasks/Scripting/Custom+Filters)**。

```javascript
filter by function task.status.symbol === '-'
```

- 查找带有复选框 `[-]` 的任务，该复选框通常用于表示“已取消”。

```javascript
filter by function task.status.symbol !== ' '
```

- 查找除空格字符以外的任何内容作为状态符号的任务，即不带复选框 `[ ]` 任务。

```javascript
filter by function \
    const symbol = task.status.symbol; \
    return symbol === 'P' || symbol === 'C' || symbol === 'Q' || symbol === 'A';
```

- 注意，因为我们使用变量来避免重复，所以我们需要添加 `return`
- 查找带有状态符号 `P` 、 `C` 、 `Q` 或 `A` 的任务。
- 您想要搜索的符号越多，这可能会变得非常冗长。

```javascript
filter by function 'PCQA'.includes(task.status.symbol)
```

- 查找带有状态符号 `P` 、 `C` 、 `Q` 或 `A` 的任务。
- 这是独立测试每个允许值的较长语句的便捷捷径。

```javascript
filter by function !' -x/'.includes(task.status.symbol)
```

- 查找带有默认设置中的任务不支持的任何状态符号的任务。

<!--section: 2.5.5-->

### Next Status Symbol

没有内置指令可以按下一个状态符号进行过滤。

<!--section: 2.5.5.1-->

从 Tasks 4.2.0 开始，现在可以使用 `task.status.nextSymbol`**按下一个状态符号进行 [自定义过滤](https://publish.obsidian.md/tasks/Scripting/Custom+Filters)**。

```javascript
filter by function task.status.symbol === task.status.nextSymbol
```

- 查找切换到自身的任务，因为下一个符号与当前符号相同。

<!--section: 2.6-->

## 其他任务属性的筛选器

> [Filters - Tasks User Guide - Obsidian Publish](https://publish.obsidian.md/tasks/Queries/Filters#Filters+for+Other+Task+Properties)

- Description 描述
- Description without tags 没有标签的描述
- Priority 优先事项
- Urgency 紧迫性
- Recurrence 复发
- Sub-Items 子项目
- Tags 标签
- Markdown

<!--section: 2.6.1-->

### Description

- `description (includes|does not include) <string>`
    - 匹配不区分大小写（忽略大小写）。
    - 匹配时忽略全局过滤器。
- `description (regex matches|regex does not match) /<JavaScript-style Regex>/`
    - 正则表达式是否匹配（默认区分大小写）。

> [!tip]+
> - `regex matches` 和 `regex does not match` 是在任务 1.12.0 中引入的。

<!--section: 2.6.1.1-->

对于精确搜索，了解该 `description` 可能会有所帮助：

- 首先删除每个任务的所有能指表情符号及其值，
- 然后删除所有全局过滤器，
- 然后删除尾随空格
- 然后搜索剩余的文本

 例如：

|全局过滤器|任务线|按 `description` 搜索文本|
|---|---|---|
|没有全局过滤器|`'- [ ] Do stuff ⏫ #tag1 ✅ 2022-08-12 #tag2/sub-tag '`|`'Do stuff #tag1 #tag2/sub-tag'`|
|`#task`|`'- [ ] #task Do stuff ⏫ #tag1 ✅ 2022-08-12 #tag2/sub-tag '`|`'Do stuff #tag1 #tag2/sub-tag'`|
|`global-filter`|`'- [ ] global-filter Do stuff ⏫ #tag1 ✅ 2022-08-12 #tag2/sub-tag '`|`'Do stuff #tag1 #tag2/sub-tag'`|

<!--section: 2.6.1.2-->

从 Tasks 4.2.0 开始，现在可以使用 `task.description`**按描述进行 [自定义过滤](https://publish.obsidian.md/tasks/Scripting/Custom+Filters)**。

```javascript
filter by function task.description.length > 100
```

- 查找具有长描述的任务。

<!--section: 2.6.2-->

### Description without tags

从 Tasks 4.2.0 开始，可以使用 `task.descriptionWithoutTags` 从自定义过滤器的描述中删除标签，以便在**[自定义过滤](https://publish.obsidian.md/tasks/Scripting/Custom+Filters)**中使用。

<!--section: 2.6.3-->

### Priority

- `priority is (above|below|not)? (lowest|low|none|medium|high|highest)`

可用的优先级为（从高到低）：

1. 🔺 最高优先级
2. ⏫ 高优先级
3. 🔼 中等优先级
4. 不使用指示符来表示没有优先级（使用“none”进行搜索）
5. 🔽 低优先级
6. ⏬️ 最低优先级

> [!tip]+
> - 任务 3.9.0 中引入了“最低”和“最高”优先级。

<!--section: 2.6.3.1-->

#### 示例

````
```tasks
not done
priority is above none
```

```tasks
priority is high
```

```tasks
not done
priority is not none
```
````

<!--section: 2.6.3.2-->

从 Tasks 4.2.0 开始，现在可以使用 `task.priorityName` 和 `task.priorityNumber`**按优先级名称和编号进行 [自定义过滤](https://publish.obsidian.md/tasks/Scripting/Custom+Filters)**。

  使用优先级名称：

```javascript
filter by function task.priorityName !== 'Normal'
```

- 与 `priority is not none` 。

使用优先级编号：

```javascript
filter by function task.priorityNumber % 2 === 0
```

- 使用任务的优先级编号进行过滤，其中最高为 0，最低为 5。
- 这个人工示例找到所有具有偶数优先级编号的任务，即最高、中和低优先级。

<!--section: 2.6.4-->

### Urgency

没有内置的指令来按紧急程度进行过滤。

<!--section: 2.6.4.1-->

从 Tasks 4.2.0 开始，现在可以使用 `task.urgency`**按紧急程度进行 [自定义过滤](https://publish.obsidian.md/tasks/Scripting/Custom+Filters)**。

> [!caution]+
> 请仔细阅读以下示例。要成功将 `task.urgency` 与 `filter by function` 结合使用，了解如何处理非整数搜索非常重要。

```javascript
filter by function task.urgency > 8.9999
```

- 查找紧急度分数高于 `9.0` 的任务。
- 请注意，使用的限制值为 `8.9999` 。
- 比较两个紧急度值“小于”或“大于”（使用 `>` 、 `>=` 、 `<` 或 `<=` 之一）的搜索**必须稍微调整其值以允许舍入**。

```javascript
filter by function task.urgency > 7.9999 && task.urgency < 11.0001
```

- 查找紧急度得分在 `8.0` 到 `11.0` 之间（含）的任务。

```javascript
filter by function task.urgency.toFixed(2) === 1.95.toFixed(2)
```

- 查找为 `1.95` 的任务。
- 这是对任何数值进行相等或不等搜索的正确方法。
- `===` 两侧的 `.toFixed(2)` 确保要比较的两个数字都四舍五入到相同的小数位数 (2)。
- 这很重要，可以防止在比较非整数时发现 `10.29` 不完全相同。

```javascript
filter by function task.urgency.toFixed(2) !== 1.95.toFixed(2)
```

- 查找除默认分数 `1.95` 之外的任何紧急任务。

```javascript
filter by function task.urgency === 10.29
```

- **这样就不会发现任何任务了**。
- 不要使用原始数字来搜索任何数字的相等或不相等，无论是看似整数还是浮点数。
- 通过使用 `group by urgency` 并查看标题，我们可以得出结论，具有以下值的任务具有紧急程度 `10.19` ：
    - 明天到期，
    - 没有优先权符号。
- 由此，可以自然地假设我们可以搜索 `task.urgency === 10.29` 。
- 但是，我们的函数正在检查以下值是否相等：
    - `task.urgency` 大约是：
        - `10.292857142857140928526860079728`
    - `10.29` 大约为：
        - `10.289999999999999147348717087880`
- 这些值**并不完全相等**，因此测试无法找到任何匹配的任务。没有内置的指令来按紧急程度进行过滤。

<!--section: 2.6.5-->

### Recurrence

- `is recurring`
- `is not recurring`
- `recurrence (includes|does not include) <part of recurrence rule>`
    - 匹配不区分大小写（忽略大小写）。
    - 请注意，搜索的文本是以编程方式生成的并且是标准化的，因此可能与任何手动键入的任务中的文本不完全匹配。例如，带有 `🔁 every Sunday` 任务将按 `every week on Sunday` 进行搜索。
    - 查看任务的标准化重复规则的最简单方法是使用 `group by recurrence` ，并查看生成的组标题。
- `recurrence (regex matches|regex does not match) /<JavaScript-style Regex>/`
    - 正则表达式是否匹配（默认区分大小写）。

<!--section: 2.6.5.1-->

从 Tasks 4.2.0 开始，现在可以使用 `task.isRecurring` 和 `task.recurrenceRule`**按重复进行 [自定义过滤](https://publish.obsidian.md/tasks/Scripting/Custom+Filters)**。

使用 `task.isRecurring` ：

```javascript
filter by function task.isRecurring
```

- 这与 `is recurring` 相同。
- 它可以与 `&&` （布尔 AND）或 `||` 一起使用（布尔或）与其他条件结合。

```javascript
filter by function !task.isRecurring
```

- 这与 `is not recurring` 相同。
- 它可以与 `&&` （布尔 AND）或 `||` 一起使用（布尔或）与其他条件结合。

```javascript
filter by function (!task.isRecurring) && task.originalMarkdown.includes('🔁')
```

- 查找**重复规则已损坏/无效**的任务。
- 这假设使用任务表情符号格式，如果使用其他格式，当然应该更新。
- 这使用了任务实现细节的知识，即重复规则被读取并从描述中删除，即使它们是无效的。
- 所以我们必须在 `task.originalMarkdown` 中搜索重复标记，看看当 `task.isRecurring` 为 false 时，原始任务是否包含重复指示符。

<!--section: 2.6.5.1.1-->

使用 `task.recurrenceRule` - 使用前请阅读有关 `task.recurrenceRule`[任务属性> 其他任务属性值](https://publish.obsidian.md/tasks/Scripting/Task+Properties#Values%20for%20Other%20Task%20Properties) 说明：

```javascript
filter by function task.recurrenceRule.includes("every week")
```

- 类似于 `recurrence includes every week` ，但区分大小写。

```javascript
filter by function !task.recurrenceRule.includes("every week")
```

- 类似于 `recurrence does not include every week` ，但区分大小写。

```javascript
filter by function task.recurrenceRule.includes("every week") && task.recurrenceRule.includes("when done")
```

- 查找每周到期的任务，并且在其重复规则中**包含**`when done` 。

```javascript
filter by function task.recurrenceRule.includes("every week") && !task.recurrenceRule.includes("when done")
```

- 查找每周到期**且不**包含重复规则中 `when done` 任务。

<!--section: 2.6.6-->

### Sub-Items

- `exclude sub-items`
  - 设置此选项后，结果列表将仅包含文件中未缩进的任务。它只会显示列表中顶级列表项的任务。

<!--section: 2.6.7-->

### Tags 标签

> [Introduced in Tasks 1.6.0.](https://publish.obsidian.md/tasks/Queries/Filters#Tags)

有关 [标签](https://publish.obsidian.md/tasks/Getting+Started/Tags) 在任务插件中的行为方式的重要信息，请参阅标签。

- `no tags`
- `has tags`
- `tags (include|do not include) <tag>` _或者_
- `tag (includes|does not include) <tag>`
  - 匹配不区分大小写（忽略大小写）。
  - 匹配时忽略全局过滤器。
  - 标签上的 `#` 是可选的，因此 `#home` 和 `home` 将匹配 `#home` 。
  - 如果给出了 `#` ，则它必须存在，因此搜索 `#home` 将匹配 `#home` 但不匹配 `#location/home` 。
  - 匹配是部分的，因此 `tags include foo` 将匹配 `#foo/bar` 和 `#foo-bar` 。
- `tags (regex matches|regex does not match) /<JavaScript-style Regex>/` _或者_
- `tag (regex matches|regex does not match) /<JavaScript-style Regex>/`
  - 正则表达式是否匹配（默认区分大小写）。
  - 必读：[正则表达式搜索](https://publish.obsidian.md/tasks/Queries/Regular+Expressions)。
  - 通过在正则表达式末尾放置 `$` 字符，可以实现避免子标签的标签搜索。请参阅下面的示例。
  - 如果搜索子标签，请记住转义正则表达式中的斜杠： `\/`

> [!tip]+ Release
>
> - `regex matches` 和 `regex does not match` 是在任务 1.13.0 中引入的。
> - Tasks 2.0.0 中引入了 `no tags` 和 `has tags` 。

<!--section: 2.6.7.1-->

从 Tasks 4.2.0 开始，现在可以使用 `task.tags`**按标签进行 [自定义过滤](https://publish.obsidian.md/tasks/Scripting/Custom+Filters)**。

```javascript
filter by function task.tags.length === 1
```

- 查找恰好具有 1 个标签的任务（任何全局过滤器除外）。

```javascript
filter by function task.tags.length > 1
```

- 查找具有多个标签的任务（任何全局过滤器除外）。

这些是更复杂的示例，如果您使用带有 [嵌套标签的](https://help.obsidian.md/Editing+and+formatting/Tags#Nested+tags) 任务，您可能需要复制这些示例。

```javascript
filter by function task.tags.find( (tag) => tag.includes('/') ) && true || false
```

- 查找至少具有一个嵌套标签的所有任务。

```javascript
filter by function task.tags.find( (tag) => tag.split('/').length >= 3 ) && true || false
```

- 查找至少具有一个双层嵌套标签的所有任务，例如 `#context/home/ground-floor` 。
- 这会在 `/` 字符处分割每个标签，如果至少有 3 个单词，则算作匹配。

<!--section: 2.6.7.2-->

#### 标签查询示例

- `tags include #todo`
- `tags do not include #todo`
- `tag regex matches /#t$/`
  - 搜索单字符标签 `#t` ，不带子标签，因为 `$` 匹配标签文本的结尾。
- `tag regex matches /#book$/i`
  - 尾随 `i` 表示不区分大小写。
  - 搜索 `#book` 、 `#Book` 、 `#BOOK` 等标签，而 `$` 会阻止匹配 `#books` 、 `#book/literature` 等。

<!--section: 2.6.8-->

### Markdown

从 Tasks 4.2.0 开始，现在可以使用 `task.originalMarkdown`**按原始 Markdown 行进行 [自定义过滤](https://publish.obsidian.md/tasks/Scripting/Custom+Filters)**。

例如，这可用于从 Tasks 未解析的 `task.originalMarkdown` 中提取信息，以用于过滤任务。

<!--section: 2.7-->

## 文件属性的过滤器

> [Filters - Tasks User Guide - Obsidian Publish](https://publish.obsidian.md/tasks/Queries/Filters#Filters+for+File+Properties)

这些过滤器允许搜索特定文件和文件部分中的任务。

- File Path 文件路径
- Root 根路径
- Folder 文件夹
- File Name 文件名
- Heading 标题

<!--section: 2.7.1-->

### File Path 文件路径

请注意，该路径包含 `.md` 扩展名。

- `path (includes|does not include) <path>`
  - 匹配不区分大小写（忽略大小写）。
  - 使用 `{{query.file.path}}` 或 `{{query.file.pathWithoutExtension}}` 作为包含当前查询的文件路径的占位符。
    - 例如， `path includes {{query.file.path}}`
    - 有用的阅读：[查询属性](https://publish.obsidian.md/tasks/Scripting/Query+Properties) 和 [占位符](https://publish.obsidian.md/tasks/Scripting/Placeholders)
- `path (regex matches|regex does not match) /<JavaScript-style Regex>/`
  - 正则表达式是否匹配（默认区分大小写）。
  - 必读：[正则表达式搜索](https://publish.obsidian.md/tasks/Queries/Regular+Expressions)。

> [!caution]+
>
> - `regex matches` 和 `regex does not match` 是在任务 1.12.0 中引入的。
> - 占位符在任务 4.7.0 中发布。

<!--section: 2.7.1.1-->

从 Tasks 4.2.0 开始，现在可以使用 `task.file.path`**按文件路径进行 [自定义过滤](https://publish.obsidian.md/tasks/Scripting/Custom+Filters)**。

在任务 4.8.0 中 `task.file.pathWithoutExtension` 已添加。

从 Tasks 5.1.0 开始，可以在自定义过滤器中方便地使用查询的文件路径：

- `query.file.path` 或
- `query.file.pathWithoutExtension`
- 有用的阅读：[查询属性](https://publish.obsidian.md/tasks/Scripting/Query+Properties)。

```javascript
filter by function task.file.path.includes('tasks releases/4.1.0 Release.md')
```

- 与“路径包含”类似，但它**区分大小写**：大小写很重要。

```javascript
filter by function task.file.path === 'tasks releases/4.1.0 Release.md'
```

- 精确、**区分大小写的**相等搜索。
- 请注意，还需要包含文件扩展名。
- 对于内置搜索，这只能使用正则表达式来完成，使用特殊字符 `^` 和 `$` ，并转义任何具有特殊含义的字符，例如 `/` 。

```javascript
filter by function task.file.path.toLocaleLowerCase() === 'TASKS RELEASES/4.1.0 RELEASE.MD'.toLocaleLowerCase()
```

- 精确的、**不**区分大小写的相等搜索。
- 通过将这两个值都小写，我们不必担心在查询中手动将它们小写。

<!--section: 2.7.2-->

### Root 根路径

> [!caution]-
>
> - 在任务 3.4.0 中引入。
> - 占位符在任务 4.7.0 中发布。

`root` 是包含任务的文件的顶级文件夹，即路径中的第一个目录，对于 Vault 根目录中的文件，该目录将为 `/` 。

- `root (includes|does not include) <root>`
  - 匹配不区分大小写（忽略大小写）。
  - 使用 `{{query.file.root}}` 作为包含当前查询的文件根的占位符。
    - 例如， `root includes {{query.file.root}}`
    - 有用的阅读：[查询属性](https://publish.obsidian.md/tasks/Scripting/Query+Properties) 和 [占位符](https://publish.obsidian.md/tasks/Scripting/Placeholders)
- `root (regex matches|regex does not match) /<JavaScript-style Regex>/`
  - 正则表达式是否匹配（默认区分大小写）。
  - 必读：[正则表达式搜索](https://publish.obsidian.md/tasks/Queries/Regular+Expressions)。

<!--section: 2.7.2.1-->

从 Tasks 4.2.0 开始，现在可以使用 `task.file.root`**按根文件夹进行 [自定义过滤](https://publish.obsidian.md/tasks/Scripting/Custom+Filters)**。

从 Tasks 5.1.0 开始，可以在自定义过滤器中方便地使用查询的文件根：

- `query.file.root`
- 有用的阅读：[查询属性](https://publish.obsidian.md/tasks/Scripting/Query+Properties)。

```javascript
filter by function task.file.root === '/'
```

- 在 Vault 根目录的文件中查找任务。
- 请注意，这是**区分大小写的**：大小写很重要。

```javascript
filter by function task.file.root === 'Work/'
```

- 在 Vault 根目录下的 `Work` 文件夹内的文件中查找任务。
- 请注意，这是**区分大小写的**：大小写很重要。

<!--section: 2.7.3-->

### Folder 文件夹

> <https://publish.obsidian.md/tasks/Queries/Filters#Folder>

这是包含任务的文件的文件夹，对于 Vault 根目录中的文件，该 `文件夹` 将为 `/`。

- `folder (includes|does not include) <folder>`
  - 匹配不区分大小写（不考虑大小写）。
  - 使用 `{{query.file.folder}}` 作为包含当前查询的文件文件夹的占位符。
    - 例如， `folder includes {{query.file.folder}}` 它将匹配包含查询的文件夹**和所有子文件夹中**的任务。
    - 有用的阅读材料：[Query Properties](https://publish.obsidian.md/tasks/Scripting/Query+Properties) 和 [Placeholders](https://publish.obsidian.md/tasks/Scripting/Placeholders)
- `folder (regex matches|regex does not match) /<JavaScript-style Regex>/`
  - 正则表达式是否匹配（默认区分大小写）。
  - 必读：[正则表达式搜索](https://publish.obsidian.md/tasks/Queries/Regular+Expressions)。

从 Tasks 4.2.0 开始，现在可以使用 `task.file.folder` **按文件夹 [进行自定义筛选](https://publish.obsidian.md/tasks/Scripting/Custom+Filters)**。

<!--section: 2.7.4-->

### File Name 文件名

> [!tip]+
>
> - 在任务 3.4.0 中引入。
> - 占位符在任务 4.7.0 中发布。

请注意，文件名包含 `.md` 扩展名。

- `filename (includes|does not include) <filename>`
  - 匹配不区分大小写（忽略大小写）。
  - 使用 `{{query.file.filename}}` 或 `{{query.file.filenameWithoutExtension}}` 作为包含当前查询的文件的文件名的占位符。
    - 例如， `filename includes {{query.file.filename}}`
    - 有用的阅读：[查询属性](https://publish.obsidian.md/tasks/Scripting/Query+Properties) 和 [占位符](https://publish.obsidian.md/tasks/Scripting/Placeholders)
- `filename (regex matches|regex does not match) /<JavaScript-style Regex>/`
  - 正则表达式是否匹配（默认区分大小写）。

<!--section: 2.7.4.1-->

从 Tasks 4.2.0 开始，现在可以使用 `task.file.filename`**按文件名进行 [自定义过滤](https://publish.obsidian.md/tasks/Scripting/Custom+Filters)**。

在任务 4.8.0 中 `task.file.filenameWithoutExtension` 已添加。

从 Tasks 5.1.0 开始，可以在自定义过滤器中方便地使用查询的文件名：

- `query.file.filename` 或
- `query.file.filenameWithoutExtension`
- 有用的阅读：[查询属性](https://publish.obsidian.md/tasks/Scripting/Query+Properties)。

```javascript
filter by function task.file.filename === "4.1.0 Release.md"
```

- 在任何文件夹中具有确切文件名的文件中查找任务。
- 相等性测试 `===` 要求包含文件扩展名 `.md` 。

```javascript
filter by function task.file.filename.includes("4.1.0 Release")
```

- 在名称包含给定文本的文件中查找任务。
- 通过使用 `.includes()` 并省略文件扩展名，这还将找到诸如 `14.1.0 Release.md` 和 `4.1.0 Release Notes.md` 之类的文件。

<!--section: 2.7.5-->

### Heading 标题过滤器

1. `heading (includes|does not include) <search text>`
   - 它至少包含字符串 `<search text>` 的一次，匹配该部分中所有任务。
     - 这是，它是一个子串搜索。
     - 所以 `heading includes Day Planner` 将匹配第 `## Monday Day Planner` 和第 `## Day Planner for typical day` 节的任务。
   - 它忽略大小写。搜索不区分大小写。
     - 所以 `heading includes Day Planner` 将匹配第 `## Day Planner` 和第 `## DAY PLANNER` 节的任务。
   - 任何引号字符（ `'` 和 `"` ）都包含在搜索文本中。
     - 所以 `heading includes "Day Planner"` 将匹配一个部分 `## "Day Planner"` 。
     - 但是不会匹配带有标题如 `## Day Planner` 的任务。
2. `heading (regex matches|regex does not match) /<JavaScript-style Regex>/`
   - 正则表达式匹配（默认区分大小写）。
   - 正则表达式（或“regex”）搜索是一个强大但高级的功能。
   - 它需要深入的知识才能成功使用，不会错过预期的搜索结果。
   - 它很容易编写一个看起来正确的正则表达式，但它包含一个具有非明显意义的特殊字符。
   - 必备阅读： [Regular Expression Searches](https://publish.obsidian.md/tasks/Queries/Regular+Expressions).

**案例**

````
```tasks
heading includes pkmerdocs
done last week
```
````

<!--section: 3-->

# 解释查询 (Explaining Queries)

> [Explaining Queries - Tasks用户指南](https://publish.obsidian.md/tasks/Queries/Explaining+Queries)

> [!tip]+
> - 在任务 1.19.0 中引入。

当在实时预览和阅读模式下查看任务块时， `explain` 指令会在搜索结果的开头添加一些额外的输出。

这样做有很多好处：

- 基于日期的过滤器很容易理解：
    - 过滤器中的所有日期都会展开，以显示搜索中使用的实际日期。
- 布尔查询逻辑更清晰。
    - 查询的组合（通过 `AND` 、 `OR` 、 `NOT` 等）可以更清楚地看到。
- 如果启用了 [全局过滤器](https://publish.obsidian.md/tasks/Getting+Started/Global+Filter)，它会包含在说明中。
    - 这通常可以解释为什么结果中缺少任务。
- 如果启用了 [全局查询](https://publish.obsidian.md/tasks/Queries/Global+Query)，它也会包含在说明中。
- 列出所有 [“分组依据”](https://publish.obsidian.md/tasks/Queries/Grouping) 指令（自任务 5.4.0 起）
- 列出所有 [“排序依据”](https://publish.obsidian.md/tasks/Queries/Sorting) 指令（自任务 5.4.0 起）

<!--section: 3.1-->

## 示例：过滤器中的日期已扩展

例如，当以下文本放置在任务查询块中时：

```text
starts after 2 years ago
scheduled after 1 week ago
due before tomorrow
explain
```

`2022-10-21` ，结果如下：

```text
Explanation of this Tasks code block query:

  starts after 2 years ago =>
    start date is after 2020-10-21 (Wednesday 21st October 2020) OR no start date

  scheduled after 1 week ago =>
    scheduled date is after 2022-10-14 (Friday 14th October 2022)

  due before tomorrow =>
    due date is before 2022-10-22 (Saturday 22nd October 2022)

  No grouping instructions supplied.

  No sorting instructions supplied.
```

请注意它如何非常清楚地显示正在搜索的日期，包括星期几。

它还表明 `starts` 搜索也匹配没有开始日期的任务。

<!--section: 4-->

# 排序 (Sorting)

> [Sorting - Tasks用户指南](https://publish.obsidian.md/tasks/Queries/Sorting)

- Sort by Task Statuses
- Sort by Task Dependencies
- Sort by File Properties
- Sort by Dates in Tasks
- Sort by Other Task Properties

<!--section: 4.1-->

示例：

````
```tasks
not done
due today
sort by due
```

```tasks
done
sort by done reverse
```

```tasks
not done
due before next monday
sort by status
sort by description reverse
sort by path
```
````

<!--section: 4.1.1-->

> [!tip]+
> 如果您希望任务按照引入**紧急性**之前的排序方式进行排序，请将以下 `sort` 表达式添加到您的查询中：

````
```tasks
sort by status
sort by due
sort by path
```
````

<!--section: 4.2-->

基本大纲：

- Sort by Task Statuses
  - Status
  - Status Name
  - Status Type
  - Status Symbol
  - Next Status Symbol
- Sort by Task Dependencies
  - Id
  - Depends On
- Sort by Dates in Tasks
  - How dates are sorted
  - Done Date
  - Due Date
  - Scheduled Date
  - Start Date
  - Created Date
  - Cancelled Date
  - Happens
- Sort by Other Task Properties
  - Description
  - Description without tags
  - Priority
  - Urgency
  - Recurrence
  - Tags
  - Original Markdown
  - Random sorting
- Sort by File Properties
  - File Path
  - Root
  - Folder
  - File Name
  - Heading

<!--section: 5-->

# 分组 (Grouping)

> [Grouping - Tasks用户指南](https://publish.obsidian.md/tasks/Queries/Grouping)

> [!note]+ Tasks 查询语法的执行循序
>
> 1. 所有过滤器指令均已运行
> 2. 然后运行任何排序指令
> 3. 然后运行任何 `limit` 指令
> 4. 然后运行任何 `groups` 指令
> 5. 然后运行任何 `limit groups` 指令

<!--section: 5.1-->

![【Obsidian-Task】Task查询语法.md](https://cdn.pkmer.cn/images/202412261301770.png!pkmer)

<!--section: 5.2-->

## 基础 (Basic)

> [!tip]+
> 在任务 1.6.0 中引入。

默认情况下，任务在单个列表中显示任务。

要按标题划分匹配任务，您可以向查询添加 `group by` 。

<!--section: 5.2.1-->

### 示例

````md
```tasks
not done
group by filename
```
````

<!--section: 5.3-->

## 分组的类型

- 按任务状态分组：Group by Task Statuses
  - 同 [[#过滤器 (Filters)#任务状态过滤器]]，详见 [📍官方文档](https://publish.obsidian.md/tasks/Queries/Grouping#Group+by+Task+Statuses)
- 按任务依赖性分组：Group by Task Dependencies
  - 详见 [📍官方文档](https://publish.obsidian.md/tasks/Queries/Grouping#Group+by+Task+Dependencies)
- 按任务中的日期分组：Group by Dates in Tasks
  - 同 [[#过滤器 (Filters)#Searching for dates 搜索日期]]，详见 [📍官方文档](https://publish.obsidian.md/tasks/Queries/Grouping#Group+by+Task+Dependencies)
- 按其他任务属性分组：Group by Other Task Properties
  - 同 [[#过滤器 (Filters)#其他任务属性的筛选器]]，详见 [📍官方文档](https://publish.obsidian.md/tasks/Queries/Grouping#Group+by+Other+Task+Properties)
- 按文件属性分组：Group by File Properties
  - 同 [[#过滤器 (Filters)#文件属性的过滤器]]，详见 [📍官方文档](https://publish.obsidian.md/tasks/Queries/Grouping#Group+by+File+Properties)

<!--section: 5.4-->

## 拓展：自定义分组

> [!tip]+
> Tasks 4.0.0 中引入了 `group by function` 。

任务提供了许多内置的分组选项，但有时它们并不能完全满足所有用户的需求。现在，任务有一个强大的机制供您创建自己的**自定义组**，提供令人难以置信的灵活性。

自定义分组指令 `group by function`，您可以在 [自定义分组](https://publish.obsidian.md/tasks/Scripting/Custom+Grouping) 中找到有关此非常强大的功能的更多信息。

<!--section: 5.5-->

## 多个分组 (Multiple groups)

您可以添加多个 `group by` 查询选项，每个选项占一行。这将创建嵌套分组。第一个分组优先级最高。

每个后续的 `group by` 将在现有分组内生成新的标题层次：

- 第一个 `group by` 显示为 h4 标题
- 第二个 `group by` 显示为 h5 标题
- 第三和后续的 `group by` 显示为 h6 标题

<!--section: 5.5.1-->

示例，多个分组按顺序嵌套：

````md
```tasks
not done
group by folder
group by filename
group by heading
```
````

<!--section: 5.6-->

## 细化分组 (Refining groups)

可以设置分组的几个参数：

1. Reverse：控制分组的排列顺序。
2. Limiting group size：限制每组中的任务数量。

<!--section: 5.6.1-->

### Reverse

在要分组的属性名称后面，可以添加 `reverse` 关键字。如果指定，则该属性的组标题将相反。

 例如：

- `group by due` 将对组标题进行排序：
  - 从**最早的**预定期开始...
  - 到**最后的**截止日期
- `group by due reverse` 将对组标题进行排序：
  - 从**最新的**预定期开始...
  - 到**最早的**预定期最后

<!--section: 5.6.2-->

### Limiting group size

您可以限制每个组中的任务数量，也许首先处理最重要的事情。

使用查询字符串 `limit groups to <number> tasks` 。这将仅列出查询结果中每组中的前 `<number>` 任务。

简写是 `limit groups <number>` 。

> 如果任务查询中没有 `group by` 指令，则将忽略 `limit groups` 指令。

> [!tip]+
> `limit groups to <number> tasks` 在任务 3.8.0 中引入。

<!--section: 6-->

# 限制 (Limiting)

> [Limiting - Tasks用户指南](https://publish.obsidian.md/tasks/Queries/Limiting)

- 限制任务总数
- 限制每组中的任务数量
- 查看找到的任务总数

<!--section: 6.1-->

## 限制任务总数

您可以限制显示为查询结果的任务总数。

使用查询字符串 `limit to <number> tasks` 。这只会列出查询的前 `<number>` 结果（排序后）。

简写是 `limit <number>` 。

<!--section: 6.2-->

## 限制每组中的任务数量

使用查询字符串 `limit groups to <number> tasks` 可以限制每个组中允许的任务数量。

简写是 `limit groups <number>` 。

> [[#分组(Grouping)#Limiting group size]]

<!--section: 6.2.1-->

> [!tip]+
> `limit groups to <number> tasks` 在任务 3.8.0 中引入。

<!--section: 6.3-->

## 查看找到的任务总数

如果任一 `limit` 选项阻止任何任务显示在结果中，则会显示总数，例如：

```text
50 of 686 tasks
```

> [!tip]+
> Tasks 4.8.0 中添加了任务总数的显示。

<!--section: 7-->

# 布局 (Layout)

> [Layout - Tasks用户指南](https://publish.obsidian.md/tasks/Queries/Layout)

- Task Elements
- Query Elements
- Hiding/Showing Elements
- Full Mode
- Short Mode

<!--section: 7.1-->

## Task Elements

以下任务元素存在：

- id（标识）
- depends on（依赖于）
- priority（优先级）
- cancelled date（取消日期）
- created date（创建日期）
- start date（开始日期）
- scheduled date（计划日期）
- due date（截止日期）
- done date（完成日期）
- recurrence rule（重复规则）
- on completion （完成时）
- tags （标签）

所有这些任务元素默认情况下都会显示，因此如果您不想显示其中任何一个，可以使用命令“hide”。

<!--section: 7.2-->

## Query Elements

存在以下查询元素：

- `tree`
- `edit button`
- `postpone button`
- `backlink`
- `urgency`
- `task count`

<!--section: 7.3-->

## Hiding/Showing Elements

每个 [[#Task Elements|Task元素(Task Elements)]] 可以都设置隐藏 (hide) 或显示 (show)，且查询中可以使用多个 show 和 hide 指令，每个指令位于单独的行上。

例如：

````md
```tasks
no due date
path includes GitHub

hide recurrence rule
hide task count
hide backlink
show urgency
```
````

<!--section: 7.3.1-->

### Hide OR Show Tree

> [!tip]
> 新的指令 `show tree` 是教 Tasks 插件完全处理 [嵌套任务和列表项](https://help.obsidian.md/Editing+and+formatting/Basic+formatting+syntax#Nesting+lists) 的一系列步骤中的第一个。

<!--section: 7.3.1.1-->

**Show Tree**

`show tree` 指令使我们能够查看任务中的父/子关系，以及它们的嵌套任务和列表项：

![【Obsidian-Task】Task查询语法.md](https://cdn.pkmer.cn/images/202412261301353.png!pkmer)

````md
```tasks
not done
filename includes Party Planner

show tree
hide backlink
```
````

<!--section: 7.3.2-->

### Hide OR Show Tags

[Layout - Tasks User Guide - Obsidian Publish](https://publish.obsidian.md/tasks/Queries/Layout#Hide+and+Show+Tags)

只有 Obsidian 识别的标签才会被 `hide tags` 隐藏。

```
hide tags
```

![【Obsidian-Task】Task查询语法.md](https://cdn.pkmer.cn/images/202412261301724.png!pkmer)

<!--section: 7.4-->

## Full Mode

在**完整模式 (Full Mode)**下，查询结果将显示表情符号和具体的重复规则或日期。

这是默认模式，该命令为 `full mode`。

Example:

````
```tasks
not done
full mode
```
````

---

- 关联：[[241217_如何隐藏Tasks的反向链接(Backlinks)]]

<!--section: 7.5-->

## Short Mode

在**短模式 (Short Mode)**下，查询结果只会显示表情符号，而不显示具体的重复规则或日期。您可以将鼠标悬停在任务上以查看工具提示中的规则和日期。

该命令是 `short mode` 。

Example:

````
```tasks
not done
short mode
```
````

<!--section: 8-->

# 注释 (Comments)

> [Comments - Tasks用户指南](https://publish.obsidian.md/tasks/Queries/Comments)

所有以 `#` 字符开头的查询行都会被视为注释并被忽略。

Example:

````
```tasks
not done
# Uncomment the following line to enable short mode:
# short mode
```
````

<!--section: 8.1-->

## Inline comments 行内注释

> 行内注释在 Tasks 4.7.0 中引入。

一行中的 `{{! 和 }}` 之间的任何文本都将被忽略。不支持多行注释。

````
```tasks
not done
short mode {{! 这条注释将被忽略 }}
```
````

当 Tasks 处理查询中的占位符时，这样的注释将被移除。

<!--section: 9-->

# 全局查询 (Global Query)

> [Global Query - Tasks用户指南](https://publish.obsidian.md/tasks/Queries/Global+Query)

> [!tip]- Global Query 设置是在 Tasks 3.5.0 版本中添加的。
> ![【Obsidian-Task】Task查询语法.md](https://cdn.pkmer.cn/images/202412261301107.png!pkmer)

您可以在设置中设置全局查询，任务将添加到保管库中所有查询的开头。

<!--section: 9.1-->

## 忽略全局查询 (Ignore global query)

如果您需要忽略给定任务块中的全局查询，您可以将 `ignore global query` 指令添加到块的任何位置。

例如，这允许您让任务搜索默认忽略某些文件夹。然后，在少数搜索中，您可以启用在这些文件夹中搜索任务。

 例子

```text
tags include work
ignore global query
```

> [!tip]+ Tasks 4.6.0 中添加了 ignore global query 指令。

<!--section: 10-->

# 组合过滤器 (Combining+Filters)

> [Combining Filters - Tasks用户指南](https://publish.obsidian.md/tasks/Queries/Combining+Filters)

任务提供的各个 [[#过滤器 (Filters)]] 可以通过以下方式以强大的方式组合在一起：

1. 将它们中的每一个包裹在分隔符中，例如 `(` 和 `)` ，
2. 然后用布尔运算符（例如 `AND` 、 `OR` 和 `NOT` 将它们连接起来。

 例如：

````text
```tasks
not done
(due after yesterday) AND (due before in two weeks)
[tags include #inbox] OR [path includes Inbox] OR [heading includes Inbox]
```
````

上述任务块中的每 3 行代表一个单独的过滤器，并且仅显示与\_ 所有\_3 行过滤器匹配的任务。

<!--section: 10.1-->

## 语法 (Syntax)

一个或多个过滤器可以通过布尔运算符组合在一行中，以创建一个新的、强大的、灵活的过滤器。

下面是简单布尔指令的组件图：

```text
+--------------------------+       +--------------------------+
|   ( tag includes #XX )   |  OR   |   ( tag includes #YY )   |
+--------------------------+       +--------------------------+
    ^                  ^               ^                  ^
    |                  |               |                  |
    +- delimiters: () -+               +- delimiters: () -+
      for left sub-expression             for right sub-expression
              |                                  |
              +--------- Operator: OR -----------+
                   Connects both sub-expressions
```

<!--section: 10.1.1-->

以下规则适用：

- 每个单独的过滤器必须由一对**分隔符**包围：
  - 本指南中最常用的分隔符是 `(` 和 `)` 。
  - 可用分隔符的完整列表是：
    - `(....)`
    - `[....]`
    - `{....}`
    - `"...."`
  - 布尔指令中不能混合使用分隔符类型：您必须为行上的过滤器选择适当的分隔符。
- 支持的**运算符**有： `AND` 、 `OR` 、 `NOT` 、 `AND NOT` 、 `OR NOT` 和 `XOR` 。
  - 运算符区分大小写：它们必须大写。
  - 请参阅下面的 [布尔运算符](https://publish.obsidian.md/tasks/Queries/Combining+Filters#Boolean%20Operators)。
- 您可以使用更多分隔符将更多过滤器嵌套在一起。
- **尾部反斜杠**( `\` ) 可用于将长过滤器分解为多行，如 [行延续](https://publish.obsidian.md/tasks/Queries/Line+Continuations) 中所述。
- 每行组合的过滤器数量以及括号的嵌套级别没有实际限制。

 建议：

- 组合两个以上过滤器时，请随意使用 `(` 和 `)` （或任何其他分隔符对）以确保获得预期的逻辑。请参阅下面的 [执行优先级](https://publish.obsidian.md/tasks/Queries/Combining+Filters#Execution%20Priority)。
- 请参阅 [布尔过滤器故障排除](https://publish.obsidian.md/tasks/Queries/Combining+Filters#Troubleshooting%20Boolean%20Filters) 以获取选择分隔符的帮助，特别是在 `filter by function` 时。

从技术上讲，行仍然具有隐式 `AND` 关系（因此完全保留了向后兼容性），但一行现在可以具有由 `AND` 、 `OR` 、 `NOT` 、 `AND NOT` 、 `OR NOT` 和 `XOR` 以及括号组成的多个过滤器。

<!--section: 10.2-->

## 执行优先级 (Execution Priority)

运算符按以下顺序评估：

1. `NOT`
2. `XOR`
3. `AND`
4. `OR`

<!--section: 10.2.1-->

所以这两个过滤器是完全等价的 - 请注意第二个过滤器中的额外括号：

```text
(tag includes #XX) OR (tag includes #YY) AND (tag includes #ZZ)
```

```text
(tag includes #XX) OR ( (tag includes #YY) AND (tag includes #ZZ) )
```

这两者也完全等价：

```text
(tag includes #XX) AND (tag includes #YY) OR (tag includes #ZZ)
```

```text
( (tag includes #XX) AND (tag includes #YY) ) OR (tag includes #ZZ)
```

在构建复杂的过滤器组合时，自由使用 `(` 和 `)` 是最安全的，这样您就可以确信自己得到了预期的行为。

<!--section: 10.3-->

## 布尔运算 (Boolean Operators)

| 符号    | 含义 |
| ------- | ---- |
| AND     | 并   |
| OR      | 或   |
| NOT     | 非   |
| AND NOT |      |
| OR NOT  |      |
| XOR     | 异或 |

<!--section: 10.3.1-->

### AND

> 要求**每个**过滤器都匹配

当您使用 `AND` 将过滤器组合在一起时，只会显示与 _ 每个 _ 过滤器匹配的任务。

例如，这将显示包含单词 `some` 并具有开始日期的任务：

```text
(has start date) AND (description includes some)
```

任务要求每个过滤器行都匹配，因此上面的示例相当于：

```text
has start date
description includes some
```

当与 `OR` 和 `NOT` 结合使用时， `AND` 变得特别有价值。

> **注意**：在 Task 中，诸如以下的请求：
> 显示路径中带有 `inbox` 文件中的任务 _ 以及 _ 带有标签 `#inbox` 任务
> ...通常意味着显示满足 _ 任一 _ 条件的任务，因此必须用 `OR` 表示为布尔逻辑。

<!--section: 10.3.2-->

### OR

> 需要**任何**过滤器来匹配

当您使用 `OR` 将过滤器组合在一起时，将显示 _ 至少与其中一个 _ 过滤器匹配的任务。

例如，要显示路径中带有 `inbox` 文件中的任务以及任务行上带有 `#inbox` 标签的文件：

````text
```tasks
not done
(path includes inbox) OR (description includes #inbox)
```
````

<!--section: 10.3.3-->

### NOT

> 要求过滤器**不**匹配

对于一个简单的例子，这两个是等效的：

```text
path does not include inbox
```

```text
NOT (path includes inbox)
```

<!--section: 10.3.3.1-->

`NOT` 对于否定更复杂的表达式更有用。

举一个更现实的例子，与此相反：

```text
(path includes x) OR (description includes #x)
```

...可以在不检查新逻辑的情况下表达，如下所示：

```text
NOT ( (path includes x) OR (description includes #x) )
```

另一种表达方式需要更多的细心和思考：

```text
(path does not include x) AND (description does not include #x)
```

<!--section: 10.3.4-->

### AND NOT

> 要求第一个过滤器匹配，并且第二个过滤器不匹配

例如：

```text
(has start date) AND NOT (description includes some)
```

<!--section: 10.3.5-->

### OR NOT

> 要求第一个过滤器匹配，或第二个过滤器不匹配。

 例如：

```text
(has start date) OR NOT (description includes special)
```

<!--section: 10.3.6-->

### 异或

> **只需要两个过滤器之一**进行匹配

`XOR` 或 `exclusive or` 显示 _ 仅匹配所提供条件之一 _ 的任务。

例如，显示任务：

- 在其路径中带有 `inbox` 文件中
- 或者标签 `#inbox` 位于任务行的位置
- 但不是两者都：

````text
```tasks
not done
(path includes inbox) XOR (description includes #inbox)
```
````

它不会显示路径中同时带有 `inbox` 和任务行中带有 `#inbox` 标签的任务。

 警告

不要将两个以上的过滤器与 `XOR` 组合在一起，只要求其中一个为真。它不会给出您期望的结果。

`(filter a) XOR (filter b) XOR (filter c)` 匹配仅匹配其中一个过滤器的任务，**以及匹配所有三个过滤器的任务**。

<!--section: 11-->

# 反向链接 (BackLinks)

> [Backlinks - Tasks用户指](https://publish.obsidian.md/tasks/Queries/Backlinks)

在“Task 查询结果”中，默认情况下，每个任务都显示其文件名和上一个标题的名称，例如 `(ACME > Steps to world domination)` 。这称为反向链接 (BackLink)。

![【Obsidian-Task】Task查询语法.md](https://cdn.pkmer.cn/images/202412261301547.png!pkmer)

<!--section: 11.1-->
- [[241217_如何隐藏Tasks的反向链接(Backlinks)]]

<!--section: 11.2-->

您可以单击反向链接 (BackLink) 直接导航到 Task 的源代码行。

这遵循单击内部链接时使用的 [标准Obsidian键盘修饰符，](https://obsidian.md/changelog/2022-10-13-desktop-v1.0.0/) 以控制打开方式（导航、新选项卡、新选项卡组、新窗口）。

[[【Obsidian】窗口管理#链接操作]]

<!--section: 12-->

# 行延续 (Line Continuations)

> [Line Continuations - Tasks用户指南](https://publish.obsidian.md/tasks/Queries/Line+Continuations)

> [!tip]+
> - 在任务 5.0.0 中引入。
> - **重要提示**：此功能更改了查询行上最后一个反斜杠 ( `\` ) 字符的含义。请参阅下面的 [附录“使用尾部反斜杠更新 5.0.0 之前的搜索”](https://publish.obsidian.md/tasks/Queries/Line+Continuations#Appendix%20Updating%20pre-5.0.0%20searches%20with%20trailing%20backslashes) 来更新查询。

<!--section: 12.1-->

## 在查询中换行长行

在任务代码块中，**反斜杠 ( `\` )**是“行继续字符”。如果反斜杠位于行尾，则该行被视为在下一行继续。

这对于将长查询划分为多行非常有用，以获得更好的可读性。

  例如这个查询：

```text
(priority is highest) OR       \
    (priority is lowest)
explain
```

  ...运行此搜索：

```text
Explanation of this Tasks code block query:

  (priority is highest) OR       \
      (priority is lowest)
   =>
  (priority is highest) OR (priority is lowest) =>
    OR (At least one of):
      priority is highest
      priority is lowest

  No grouping instructions supplied.

  No sorting instructions supplied.
```

此功能对于较长的 [Combining Filters](https://publish.obsidian.md/tasks/Queries/Combining+Filters) 、 [Custom Sorting](https://publish.obsidian.md/tasks/Scripting/Custom+Sorting) 和 [Custom Grouping](https://publish.obsidian.md/tasks/Scripting/Custom+Grouping) 行以及其他可能难以在一行中阅读的查询很有帮助。

<!--section: 12.1.1-->

注意事项：

- 要成为连续字符， `\` 必须是该行的**最后一个字符**。
- 所有 `\` 及其周围的所有空格都被压缩为一个空格。
- 考虑缩进第二行和后续行，以便查询的结构立即清晰。
- 考虑对齐 `\` 字符以提高可读性。
- 如果有疑问，请添加 `explain` 指令以检查代码块的解释方式。

<!--section: 12.2-->

## 需要尾部反斜杠的搜索

在任务代码块中，**行末的两个反斜杠 ( `\\` )**被视为**单个反斜杠**。

这使得在查询需要尾部反斜杠的极少数情况下可以进行搜索。

  例如这个查询：

```text
## Search for a single backslash:
description includes \\
explain
```

  ...运行此搜索：

```text
Explanation of this Tasks code block query:

  description includes \\ =>
  description includes \

  No grouping instructions supplied.

  No sorting instructions supplied.
```

<!--section: 12.2.1-->

注意事项：

- 或者，您可以在尾随 `\` 之后添加一个或多个空格，以防止它成为连续字符。
    - 但这是有风险的，因为一些编辑器和 linter 会删除不必要的尾随空格。
    - 所以**两个反斜杠选项更安全**。
- 如果有疑问，请添加 `explain` 指令以检查代码块的解释方式。
