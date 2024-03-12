---
uid: 20231220115812
title: Obsidian 插件：【Readme】Apply Patterns
tags: ['搜索/排序', 'obsidian插件', 'readme']
description: 对文本进行按顺序应用自定义查找和替换模式。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】Apply Patterns

> [!Note] 插件名片
> - 插件名称：Apply Patterns
> - 插件作者：Jacob Levernier
> - 插件说明：对文本进行按顺序应用自定义查找和替换模式。
> - 插件分类：[' 搜索/排序 ', 'obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/jglev/obsidian-apply-patterns-plugin)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsidian-apply-patterns)

## 概述

对文本进行按顺序应用自定义查找和替换模式。

![Apply Patterns](https://cdn.pkmer.cn/covers/obsidian-apply-patterns.gif)

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/jglev/obsidian-apply-patterns-plugin/main/README.md)

---

## Readme(翻译）

下面是 [[obsidian-apply-patterns]] 插件的自述翻译

<h1 align="center">Obsidian 应用模式插件</h1>

<p align="center">在中对文本应用一系列正则表达式查找/替换规则。</p>

该插件允许创建一系列查找和替换的“规则”，并从可搜索的菜单中将它们应用于文档的选择部分或整行。

**支持创建自然语言日期的搜索和替换模式，包括日期范围。**

> 请在此处提交错误：<https://github.com/jglev/obsidian-apply-patterns-plugin>
>
> 请在此处提交想法：<https://github.com/jglev/obsidian-apply-patterns-plugin/discussions/categories/ideas>
>
> 请在此处寻求帮助：<https://github.com/jglev/obsidian-apply-patterns-plugin/discussions/categories/q-a>

---

<ul>
    <li></li>
    <li></li>
</ul>

有关每个版本的更改，请查看发布页面：<https://github.com/jglev/obsidian-apply-patterns-plugin/releases>

---

## 截图

- *主题是 [Solarized Light](https://github.com/Slowbad/obsidian-solarized)。*
- *该主题已经通过使用 [此CSS片段](https://gist.github.com/jglev/30f289deb911cc8f8645c946e42f13a6) 进行了增强，用于任务管理。有关在 Obsidian 中添加 CSS 片段的说明，请参见 [此处](https://help.obsidian.md/Advanced+topics/Customizing+CSS)。*

![任务管理示例用法](https://cdn.pkmer.cn/covers/obsidian-apply-patterns_2_0.gif)

已定义了两个“模式”，每个模式都有一个“规则”。可以通过将此 JSON 复制到剪贴板中，并在 Obsidian 中的插件设置选项卡中单击“从剪贴板导入”按钮来将这些设置导入到插件中：

<details>

```json
[
  {
    "name": "将打开的任务标记为完成",
    "done": false,
    "rules": [
      {
        "from": "- \\[ \\] #(?:TODO|SCHEDULED)(.*?)\\(Due by \\[\\[(\\d{4}-\\d{2}-\\d{2})\\]\\]\\)",
        "to": "- [X] #DONE$1(Completed on [[{{date:today}}]])",
        "caseInsensitive": true,
        "global": false,
        "sticky": false,
        "multiline": false,
        "disabled": false
      }
    ]
  },
  {
    "name": "重新安排已关闭的任务",
    "done": false,
    "rules": [
      {
        "from": "- \\[[Xx]\\] #DONE(.*?)\\(Completed on (.*?)\\)",
        "to": "- [ ] #TODO$1(Due by [[{{date:two weeks from today}}]])",
        "caseInsensitive": false,
        "global": false,
        "multiline": false,
        "sticky": false
      }
    ]
  }
]
```

</details>

第一个模式“将打开的任务标记为完成”将影响具有打开复选框和 `#TODO` 或 `#SCHEDULED` 标签以及带有日期的短语“(Due by...)”的行。**它将使用一个关闭的复选框、一个 `#DONE` 标签、行的原始内容和今天的日期来替换匹配项。**

第二个模式“重新安排已关闭的任务”将影响具有关闭复选框（`-[x]`）和 `#DONE` 标签以及短语“(Completed on...)”的行。**它将使用一个打开的复选框、一个 `#TODO` 标签和一个未来两周的“Due by”日期来替换匹配项。**

![添加、移动、删除和验证规则](https://cdn.pkmer.cn/covers/obsidian-apply-patterns_2_1.gif)

插件的设置选项卡允许创建和删除模式，以及使用系统剪贴板导入和导出模式。规则可以在模式内上下移动，并在其 `{{date}}` 字符串和正则表达式语法中进行正确性验证。每个规则还可以设置 [正则表达式模式](https://www.regular-expressions.info/refmodifiers.html)。

## 安装

按照以下步骤安装插件。

1. 在 Obsidian 的社区插件浏览器中搜索“Apply Patterns”。
2. 在 Obsidian 设置中启用插件（在“Community plugins”下找到“Apply Patterns”）。
3. 检查“Apply Patterns”设置选项卡。添加一个或多个模式。
4. （可选）在“Hotkeys”设置选项卡中，为“Apply Patterns...”命令添加一个或两个热键。

## 用法

- 该插件使用 [ECMAScript / Javascript风格](https://www.regular-expressions.info/javascript.html) 的正则表达式。
- 在模式中，规则按顺序执行。因此，规则 1 的输出作为规则 2 的输入，规则 2 的输出作为规则 3 的输入，依此类推。在一组规则的末尾，最终输出用于替换编辑器中的文本。
- 该插件默认提供五个命令：
    - `应用模式：将模式应用于整行` 将循环遍历在编辑器中选择的每一行，并将模式应用于每一行的全部内容。
    - `应用模式：将模式应用于整个文档` 将模式应用于整个文档，作为一个（可能是多行）字符串。
    - `应用模式：将模式应用于选择内容` 将模式应用于编辑器中选择的文本，作为一个（可能是多行）字符串。
    - `应用模式：将模式应用于整个剪贴板` 将模式应用于剪贴板，与“将模式应用于整个文档”相同。
    - `应用模式：将模式应用于剪贴板（逐行）` 将模式应用于剪贴板，与“将模式应用于整行”相同。
    - 此外，您可以在设置选项卡中设置其他命令。
- 在设置选项卡中：
    - 每个规则可以禁用、上移和下移。
    - 单击规则的信息图标将打开一个通知，指示规则的“From”和“To”元素是否有效。
    - “From”和“To”文本框都可以使用 `$1`、`$2` 等来引用“From”框中的 [捕获组](https://www.regular-expressions.info/refcapture.html)。
    - “From”和“To”文本框都可以理解自然语言日期（见下文）。
    - 可以从模式集合创建其他命令。如果一个命令只匹配一个模式，那么在运行该命令时将应用该模式。如果命令匹配多个模式，它将询问要应用哪个模式。
      - 可以创建自定义命令以在整行、当前选择或整个文档上运行。

### 日期

在规则设置的“从”和“到”文本框中，可以使用自然语言来表示日期，使用以下格式：

`{{date:start|end|format (默认为"YYYY-MM-DD")|separator (默认为"|")}}`

- `start`、`end`、`format` 和 `separator` 都是可选的。`{{date}}` 本身将默认为当前日期，格式为 `YYYY-MM-DD`。
- `format` 可以是 [DayJS](https://day.js.org/docs/en/parse/string-format#list-of-all-available-parsing-tokens) 中的任何格式。
- `start` 和 `end` 都使用 [`chrono-node`](https://github.com/wanasit/chrono) 进行解析。
- 因此，以下格式都是有效的：

| 日期语法                          | 在 2021-08-03 处理后的输出结果 |
| --------------------------------- | ---------------------------------- |
| {{date}}                          | 2021-08-03                         |
| {{date:today\|\|YYYY-MM}}         | 2021-08                            |
| {{date:tomorrow}}                 | 2021-08-04                         |
| {{date:two weeks from today}}     | 2021-08-17                         |
| {{date:today\|two days from now}} | 2021-08-03\|2021-08-04\|2021-08-05 |
| {{date:today\|tomorrow\|DD}}                                              |03\|04|
| {{date:today\|two days from now\|\|, }}                                         |2021-08-03, 2021-08-04, 2021-08-05|

这种表示日期的方法允许使用正则表达式强大地搜索日期范围，或者在模式的输出中创建格式化日期的范围。例如，在规则的“到”文本框中使用 `[[{{date:today|tomorrow||]], [[}}]]` 将创建字符串“\[\[2021-08-03\]\], \[\[2021-08-04\]\]”。

## 开发

克隆存储库，运行 `yarn` 安装依赖项，然后运行 `yarn dev` 编译插件并监视文件更改。

## 许可证

该插件的代码和文档设置基于 [Obsidian Tasks](https://github.com/schemar/obsidian-tasks) 插件，由 [Martin Schenck](https://github.com/schemar) 开发。与该插件一样，本插件也是根据 [MIT 许可证](./LICENSE) 发布的。

# 待办事项

目前该代码库中没有包含自动化测试。特别欢迎使用 [Obsidian端到端测试方法](https://github.com/trashhalo/obsidian-plugin-e2e-test) 来提供帮助！
