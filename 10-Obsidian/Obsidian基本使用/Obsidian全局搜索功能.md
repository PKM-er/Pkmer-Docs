---
uid: 20241227222717
title: Obsidian 全局搜索功能
tags: [快速搜索]
description: Obsidian 核心插件——搜索，可以通过使用高级搜索词和运算符缩小结果范围，帮助您快速查找 Obsidian 库中的关键数据。
author: 熊猫别熬夜
type: other
draft: false
editable: false
modified: 20250115193903
---

# Obsidian 全局搜索功能

> [!cite]
> 原文来自 [Search - Obsidian Help](https://help.obsidian.md/Plugins/Search)

Obsidian 核心插件——**搜索**，可以通过使用高级搜索词和运算符缩小结果范围，帮助您快速查找 Obsidian 库中的关键数据。

默认情况下，您可以在左侧边栏中找到搜索（🔍）。您还可以通过按 `Ctrl+Shift+F` （或 macOS 上的 `Cmd+Shift+F` ）打开搜索。

- **搜索所选文本**：如果您在编辑器中选择文本并使用键盘快捷键打开“搜索”，“搜索”将显示所选文本的搜索结果。
- **搜索最近的搜索词**：使用空搜索词打开搜索以列出最近的搜索词。单击其中任意一个即可再次使用搜索词。

## 搜索词 (Search terms)

搜索词是您在搜索字段中输入的单词或短语。学习如何有效地编写搜索词可以帮助您快速找到所需的内容，即使在大型金库中也是如此。 **Obsidian 只搜索笔记和画布的内容。**

默认情况下，您只能搜索笔记和画布的路径和文件名。要搜索 Vault 中任何文件的路径或文件名，请使用 `path` 或 `file` 运算符。

### 转义反斜杠

搜索词中的每个单词在每个文件中都是独立匹配的。要搜索确切的短语，请用引号括起来，例如 `"star wars"` 。要搜索精确短语中引用的文本，您可以通过在引号前面添加反斜杠 ( `\` ) 来转义引号，例如 `"they said \"hello\" to each other"` 。

### 组合运算 (空格 与 AND 或 OR)

您可以控制是否返回包含搜索词中的*所有*单词或*任何*单词的文件：

- `meeting work` 返回包含 `meeting` 和 `work` 文件。
- `meeting OR work` 返回包含 `meeting` 或 `work` 文件。

您甚至可以将两者组合在同一个搜索词中。

- `meeting work OR meetup personal` 返回“ work meetings”和“meetup personal”的文件。

您可以使用括号来控制每个表达式的优先级。

- `meeting (work OR meetup) personal` 返回包含 `meeting` 、 `personal` 以及 `work` 或 `meetup` 的文件。

### 非运算 ( - )

要从搜索结果中排除或否定某个单词，请在其前面添加连字符 ( `-` )：

- `meeting -work` 返回包含 `meeting` 但不包含 `work` 文件。

您可以排除多个表达式：

- `meeting -work -meetup` 返回包含 `meeting` 但不包含 `work` 或 `meetup` 的文件。

### 括号组合表达式

您可以使用括号排除表达式组合：

- `meeting -(work meetup)` 返回包含 `meeting` 但不*同时*包含 `work` 和 `meetup` 的文件。

如果您需要对复杂的搜索词进行故障排除，可以单击“搜索”中的**“解释搜索词”**以获取搜索词的解释。

## 搜索运算符 (Search operators)

搜索运算符支持更细粒度的搜索词，以进一步过滤您的结果。

有些运算符甚至允许您在括号内添加嵌套搜索词，例如： `task:(call OR email)` 。

| 搜索运算符          | 描述                                                                                                                                                      |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `file:`        | 查找文件名中的文本。匹配 Vault 中的任何文件。<br>示例： `file:.jpg` 或 `file:202209` 。                                                                                         |
| `path:`        | 在文件路径中查找文本。匹配 Vault 中的任何文件。<br>示例： `path:"Daily notes/2022-07"` 。                                                                                       |
| `content:`     | 在文件内容中查找文本。<br>示例： `content:"happy cat"` 。                                                                                                              |
| `match-case:`  | 区分大小写的匹配。<br>示例： `match-case:HappyCat` 。                                                                                                                |
| `ignore-case:` | 不区分大小写的匹配。<br>示例： `ignore-case:ikea` 。                                                                                                                  |
| `tag:`         | 在文件中查找标签。<br>示例： `tag:#work` 。<br>请记住，搜索 `tag:#work` 不会返回 `#myjob/work` 的结果。 <br>**注意**：由于 `tag:` 忽略代码块和非 Markdown 内容中的匹配，因此它通常比 `#work` 的普通全文搜索更快、更准确。 |
| `line:`        | 在同一行查找匹配项。<br>示例： `line:(mix flour)` 。                                                                                                                  |
| `block:`       | 在同一块中查找匹配项。<br>示例： `block:(dog cat)` 。<br>**注意**：由于 `block:` 需要搜索来解析每个文件中的 Markdown 内容，因此可能会导致您的搜索词需要更长的时间才能完成。                                         |
| `section:`     | 在同一部分（两个标题之间的文本）中查找匹配项。<br>示例： `section:(dog cat)` 。                                                                                                    |
| `task:`        | 按照块的方式在任务中查找匹配项。<br>示例： `task:call` 。                                                                                                                   |
| `task-todo:`   | 按照区块的方式在*未完成*的任务中找到匹配项。<br>示例： `task-todo:call` 。                                                                                                       |
| `task-done:`   | 按照区块的方式在*已完成*的任务中找到匹配项。<br>示例： `task-done:call` 。                                                                                                       |

## 搜索属性 (Search properties)

您可以在搜索词中使用 属性 中存储的数据。

使用括号将属性名称 `[property]` 括起来以返回具有该属性的文件：

- `[aliases]` 返回包含 `aliases` 属性的文件

使用方括号和冒号 `[property:value]` 返回具有该属性和值的文件：

- `[aliases:Name]` 返回 `aliases` 属性值为 `Name` 文件

属性和值都允许子查询，例如用于分组的括号、 `OR` 运算符、用于精确匹配的双引号和正则表达式。

- 示例： `[status:Draft OR Published]` 查找返回 `status` 属性值为 `Draft` 或 `Published` 文件

## 更改区分大小写

默认情况下，搜索词不区分大小写。如果您想搜索搜索词的确切大小写，请单击**匹配大小写**（![obsidian-upper-lowercase.svg](https://publish-01.obsidian.md/access/f786db9fac45774fa4f0d8112e232d67/Attachments/icons/obsidian-upper-lowercase.svg)）在搜索栏中。

![【Obsidian】查询语法(Query Syntax).md](https://cdn.pkmer.cn/images/202412272229491.png!pkmer)

此设置可以切换。如果**“匹配大小写”**图标突出显示，则意味着您当前正在进行区分大小写的搜索。

## 更改结果排序顺序

1. 输入**搜索词 (Search term)**。
2. 在搜索字段下，单击右侧的下拉菜单。
3. 选择您想要的排序顺序。默认为“文件名（A 到 Z）”。

![【Obsidian】查询语法(Query Syntax).md](https://cdn.pkmer.cn/images/202412272229150.png!pkmer)

可以使用以下选项：

- 文件名（A 到 Z）
- 文件名（Z 到 A）
- 修改时间（从新到旧）
- 修改时间（从旧到新）
- 创建时间（从新到旧）
- 创建时间（从旧到新）

## 复制搜索结果

![【Obsidian】查询语法(Query Syntax).md](https://cdn.pkmer.cn/images/202412272229610.png!pkmer)

1. 输入**搜索词 (Search term)**。
2. 在搜索字段下，选择结果数量旁边的三个点图标。
3. 选择**复制搜索结果**，弹出的对话框，可以设置搜索结果的格式。

![【Obsidian】查询语法(Query Syntax).md](https://cdn.pkmer.cn/images/202412272229061.png!pkmer)

## 使用正则表达式

正则表达式是描述文本模式的一组字符。要在搜索词中使用正则表达式，请用正斜杠 ( `/` ) 将表达式括起来。

- `/\d{4}-\d{2}-\d{2}/` 匹配 ISO 8601 日期，例如 2022-01-01。

您甚至可以将正则表达式与搜索运算符结合起来：

- `path:/\d{4}-\d{2}-\d{2}/` 返回文件路径中带有日期的文件。

正则表达式有不同的风格，可能看起来彼此不同。 Obsidian 使用 JavaScript 风格的正则表达式。

## 配置搜索设置

要配置搜索，请单击**搜索设置**在搜索栏右侧查看切换。

![【Obsidian】查询语法(Query Syntax).md](https://cdn.pkmer.cn/images/202412272229564.png!pkmer)

| 环境          | 描述                   |
| ----------- | -------------------- |
| **折叠结果**    | 切换是否显示搜索上下文。         |
| **显示更多上下文** | 扩展搜索结果以显示匹配项周围的更多文本。 |
| **说明搜索词**   | 分解搜索词并以纯文本进行解释。      |

## Query 代码块

要将搜索结果嵌入到注释中，请添加 `query` 代码块：

````
```query
embed OR search
```
````