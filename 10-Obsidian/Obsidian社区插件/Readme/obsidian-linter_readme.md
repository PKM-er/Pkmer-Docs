---
uid: 20230803231105
title: Obsidian 插件：Linter
tags: ['样式工具', '编辑器', '效率', 'obsidian插件', 'readme']
description: 格式化和样式化你的笔记。它可用于格式化YAML标签、别名、数组和元数据；脚注；标题；间距；数学块；常规markdown内容，如列表、斜体和粗体样式；以及更多使用自定义规则选项。
author: AI
type: readme
draft: false
editable: false
modified: 20230803232507
---

# Obsidian 插件：Linter

> [!Note] 插件名片
> - 插件名称：Linter
> - 插件作者：Victor Tao
> - 插件说明：格式化和样式化你的笔记。它可用于格式化 YAML 标签、别名、数组和元数据；脚注；标题；间距；数学块；常规 markdown 内容，如列表、斜体和粗体样式；以及更多使用自定义规则选项。
> - 插件分类：[' 样式工具 ', ' 编辑器 ', ' 效率 ', 'obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/platers/obsidian-linter)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsidian-linter)

## 概述

格式化和样式化你的笔记。它可用于格式化 YAML 标签、别名、数组和元数据；脚注；标题；间距；数学块；常规 markdown 内容，如列表、斜体和粗体样式；以及更多使用自定义规则选项。

![Linter](https://cdn.pkmer.cn/covers/obsidian-linter.GIF!pkmer)

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/platers/obsidian-linter/master/README.md)
>

---

## Readme(翻译）

下面是 [[obsidian-linter]] 插件的自述翻译

<!--- 此文件是自动生成的。请参阅 docs.ts 和 *_template.md 文件以获取源代码。 -->

# Obsidian Linter

![构建](https://github.com/platers/obsidian-linter/actions/workflows/main.yml/badge.svg)

![下载量](https://img.shields.io/github/downloads/platers/obsidian-linter/total)

这个 Obsidian 插件以可配置性和可扩展性为重点，格式化和样式化你的笔记。

规则可以在设置中进行切换和配置。

## 使用方法

![演示](docs/docs/assets/demo.gif)

要对当前文件进行 lint 检查，请运行 `Lint the current file`（默认情况下为 `Ctrl+Alt+L`）。

要对所有文件进行 lint 检查，请运行 `Lint all files in the vault`。

要对当前文件夹中的所有文件进行 lint 检查，请运行 `Lint all files in the current folder`。此操作包括所有子文件夹。

您还可以通过右键单击文件夹列表中的文件夹并从选项中选择“Lint folder”来对文件夹进行 lint 检查。

![Lint文件夹内容](docs/docs/assets/lint-folder.png)

当 `Lint on save` 被切换打开时，插件将在手动保存当前文件时进行 lint 检查（按下 `Ctrl+S`）。

### 禁用规则

#### YAML Frontmatter

如果您想要禁用整个文件、一个规则或一组规则，您可以在文件的 YAML frontmatter 中添加一个键。预期的键是 `disabled rules`。

```markdown
---
disabled rules: [capitalize-headings]
---
```

在文件的 YAML frontmatter 中添加 `disabled rules: [ ... ]` 以在对该文件进行 lint 时禁用这些规则。

在文件的 YAML frontmatter 中添加 `disabled rules: [ all ]` 以禁用所有规则。

#### 范围忽略

如果您想要禁用文件的特定部分的规则，可以使用范围忽略来实现。范围忽略的语法是 `<!-- linter-disable -->`，其中可选的 `<!-- linter-enable -->` 用于指定 Linter 在哪里重新开始进行代码检查。

如果省略范围忽略的结束部分，则默认忽略从范围忽略开始到文件末尾的内容。因此，在不结束范围忽略时要小心。

**请注意，范围忽略仅阻止范围内的值进行代码检查，而不会阻止范围忽略周围的空格或其他内容的添加。**

``` markdown
这里是一些文本
<!-- linter-disable -->
                          这个区域将不会被格式化
<!-- linter-enable -->
更多内容在这里...
```

关于范围忽略的注意事项：

- 粘贴规则不受范围忽略的影响，因为这要求复制的文本中包含范围忽略。

规则

所有规则的文档可以在 [规则文档](https://github.com/platers/obsidian-linter/blob/master/docs/rules.md) 中找到。文档在插件发布之前进行更新，因此可能不完全准确。

每个规则都有自己的逻辑集，并且设计为可以独立运行。这意味着启用某些规则可能会导致不希望的结果。一个这样的例子是将“段落空行”与“内容之间的两个空格”一起使用。这两个规则在目标更改方面有一些重叠，导致不希望或意外的结果，因为它们一起工作的方式与单独运行它们的方式不同。

### YAML 规则

- [转义YAML特殊字符](https://github.com/platers/obsidian-linter/blob/master/docs/rules.md#escape-yaml-special-characters)
- [强制YAML转义](https://github.com/platers/obsidian-linter/blob/master/docs/rules.md#force-yaml-escape)
- [格式化YAML中的标签](https://github.com/platers/obsidian-linter/blob/master/docs/rules.md#format-tags-in-yaml)
- [格式化YAML数组](https://github.com/platers/obsidian-linter/blob/master/docs/rules.md#format-yaml-array)
- [插入YAML属性](https://github.com/platers/obsidian-linter/blob/master/docs/rules.md#insert-yaml-attributes)
- [将标签移动到YAML](https://github.com/platers/obsidian-linter/blob/master/docs/rules.md#move-tags-to-yaml)
- [删除YAML键](https://github.com/platers/obsidian-linter/blob/master/docs/rules.md#remove-yaml-keys)
- [排序YAML键](https://github.com/platers/obsidian-linter/blob/master/docs/rules.md#yaml-key-sort)
- [YAML时间戳](https://github.com/platers/obsidian-linter/blob/master/docs/rules.md#yaml-timestamp)
- [YAML标题](https://github.com/platers/obsidian-linter/blob/master/docs/rules.md#yaml-title)
- [YAML标题别名](https://github.com/platers/obsidian-linter/blob/master/docs/rules.md#yaml-title-alias)

### 标题规则

- [capitalize-headings](https://github.com/platers/obsidian-linter/blob/master/docs/rules.md#capitalize-headings)（大写标题）
- [file-name-heading](https://github.com/platers/obsidian-linter/blob/master/docs/rules.md#file-name-heading)（文件名标题）
- [header-increment](https://github.com/platers/obsidian-linter/blob/master/docs/rules.md#header-increment)（标题递增）
- [headings-start-line](https://github.com/platers/obsidian-linter/blob/master/docs/rules.md#headings-start-line)（标题起始行）
- [remove-trailing-punctuation-in-heading](https://github.com/platers/obsidian-linter/blob/master/docs/rules.md#remove-trailing-punctuation-in-heading)（移除标题末尾标点）

### 脚注规则

- [在标点符号之后添加脚注](https://github.com/platers/obsidian-linter/blob/master/docs/rules.md#footnote-after-punctuation)
- [将脚注移动到底部](https://github.com/platers/obsidian-linter/blob/master/docs/rules.md#move-footnotes-to-the-bottom)
- [重新索引脚注](https://github.com/platers/obsidian-linter/blob/master/docs/rules.md#re-index-footnotes)

### 内容规则

- [自动纠正常见拼写错误](https://github.com/platers/obsidian-linter/blob/master/docs/rules.md#auto-correct-common-misspellings)
- [引用块样式](https://github.com/platers/obsidian-linter/blob/master/docs/rules.md#blockquote-style)
- [转换项目符号列表标记](https://github.com/platers/obsidian-linter/blob/master/docs/rules.md#convert-bullet-list-markers)
- [强调样式](https://github.com/platers/obsidian-linter/blob/master/docs/rules.md#emphasis-style)
- [禁止裸露的URL](https://github.com/platers/obsidian-linter/blob/master/docs/rules.md#no-bare-urls)
- [有序列表样式](https://github.com/platers/obsidian-linter/blob/master/docs/rules.md#ordered-list-style)
- [正确的省略号](https://github.com/platers/obsidian-linter/blob/master/docs/rules.md#proper-ellipsis)
- [引用样式](https://github.com/platers/obsidian-linter/blob/master/docs/rules.md#quote-style)
- [移除连续的列表标记](https://github.com/platers/obsidian-linter/blob/master/docs/rules.md#remove-consecutive-list-markers)
- [移除空的列表标记](https://github.com/platers/obsidian-linter/blob/master/docs/rules.md#remove-empty-list-markers)
- [移除连字符换行](https://github.com/platers/obsidian-linter/blob/master/docs/rules.md#remove-hyphenated-line-breaks)
- [移除多个空格](https://github.com/platers/obsidian-linter/blob/master/docs/rules.md#remove-multiple-spaces)
- [加粗样式](https://github.com/platers/obsidian-linter/blob/master/docs/rules.md#strong-style)
- [内容之间有两个空格的行](https://github.com/platers/obsidian-linter/blob/master/docs/rules.md#two-spaces-between-lines-with-content)
- [无序列表样式](https://github.com/platers/obsidian-linter/blob/master/docs/rules.md#unordered-list-style)

### 空格规则

- [compact-yaml](https://github.com/platers/obsidian-linter/blob/master/docs/rules.md#compact-yaml)
- [consecutive-blank-lines](https://github.com/platers/obsidian-linter/blob/master/docs/rules.md#consecutive-blank-lines)
- [convert-spaces-to-tabs](https://github.com/platers/obsidian-linter/blob/master/docs/rules.md#convert-spaces-to-tabs)
- [empty-line-around-blockquotes](https://github.com/platers/obsidian-linter/blob/master/docs/rules.md#empty-line-around-blockquotes)
- [empty-line-around-code-fences](https://github.com/platers/obsidian-linter/blob/master/docs/rules.md#empty-line-around-code-fences)
- [empty-line-around-math-blocks](https://github.com/platers/obsidian-linter/blob/master/docs/rules.md#empty-line-around-math-blocks)
- [empty-line-around-tables](https://github.com/platers/obsidian-linter/blob/master/docs/rules.md#empty-line-around-tables)
- [heading-blank-lines](https://github.com/platers/obsidian-linter/blob/master/docs/rules.md#heading-blank-lines)
- [line-break-at-document-end](https://github.com/platers/obsidian-linter/blob/master/docs/rules.md#line-break-at-document-end)
- [move-math-block-indicators-to-their-own-line](https://github.com/platers/obsidian-linter/blob/master/docs/rules.md#move-math-block-indicators-to-their-own-line)
- [paragraph-blank-lines](https://github.com/platers/obsidian-linter/blob/master/docs/rules.md#paragraph-blank-lines)
- [remove-empty-lines-between-list-markers-and-checklists](https://github.com/platers/obsidian-linter/blob/master/docs/rules.md#remove-empty-lines-between-list-markers-and-checklists)
- [remove-link-spacing](https://github.com/platers/obsidian-linter/blob/master/docs/rules.md#remove-link-spacing)
- [remove-space-around-characters](https://github.com/platers/obsidian-linter/blob/master/docs/rules.md#remove-space-around-characters)
- [remove-space-before-or-after-characters](https://github.com/platers/obsidian-linter/blob/master/docs/rules.md#remove-space-before-or-after-characters)
- [space-after-list-markers](https://github.com/platers/obsidian-linter/blob/master/docs/rules.md#space-after-list-markers)
- [space-between-chinese-japanese-or-korean-and-english-or-numbers](https://github.com/platers/obsidian-linter/blob/master/docs/rules.md#space-between-chinese-japanese-or-korean-and-english-or-numbers)
- [trailing-spaces](https://github.com/platers/obsidian-linter/blob/master/docs/rules.md#trailing-spaces)

### 粘贴规则

- [在粘贴时添加引用缩进](https://github.com/platers/obsidian-linter/blob/master/docs/rules.md#add-blockquote-indentation-on-paste)
- [在粘贴时防止重复的待办事项指示符](https://github.com/platers/obsidian-linter/blob/master/docs/rules.md#prevent-double-checklist-indicator-on-paste)
- [在粘贴时防止重复的列表项指示符](https://github.com/platers/obsidian-linter/blob/master/docs/rules.md#prevent-double-list-item-indicator-on-paste)
- [在粘贴时使用正确的省略号](https://github.com/platers/obsidian-linter/blob/master/docs/rules.md#proper-ellipsis-on-paste)
- [在粘贴时移除连字符](https://github.com/platers/obsidian-linter/blob/master/docs/rules.md#remove-hyphens-on-paste)
- [在粘贴时移除前导或尾随空白](https://github.com/platers/obsidian-linter/blob/master/docs/rules.md#remove-leading-or-trailing-whitespace-on-paste)
- [在粘贴时移除引用中的剩余脚注](https://github.com/platers/obsidian-linter/blob/master/docs/rules.md#remove-leftover-footnotes-from-quote-on-paste)
- [在粘贴时移除多个空行](https://github.com/platers/obsidian-linter/blob/master/docs/rules.md#remove-multiple-blank-lines-on-paste)

### 自定义 Lint 命令

这些是用户可以指定的特殊 lint 规则。它们是 Obsidian 命令。如果您想创建一个可以运行的自定义命令，可以使用 [QuickAdd](https://github.com/chhoumann/quickadd) 插件来添加一个 JavaScript 脚本，以对文件进行修改。**这将需要一定程度的 Obsidian API 和 JavaScript 知识。**要使用自定义用户脚本，您需要按照以下步骤进行操作：

1. 安装 QuickAdd 插件
2. 前往 QuickAdd 的设置，并选择 "Manage Macros"
3. 您应该会看到一个模态弹窗。在该弹窗中，确保输入一个宏名称并添加该宏。
4. 一旦宏被添加，继续配置宏，确保添加您的用户脚本（这应该是您 Obsidian vault 中的一个 JavaScript 文件）。[这里](https://github.com/chhoumann/quickadd/blob/master/docs/docs/Examples/Macro_LogBookToDailyJournal.md) 是 QuickAdd 存储库中的一个示例，其中解释了代码的作用。
5. 完成所有您想要的宏更改后，退出配置宏模态弹窗和宏管理器模态弹窗。
6. 然后选择宏作为选择类型，并输入您刚刚创建的宏的名称（您可能会得到建议，或者您可能需要记住名称并完全输入）。然后选择 "Add Choice"。
7. 一旦选择被添加，点击闪电图标，这是为选择添加命令的选项。
8. 现在您只需要在 Obsidian Linter 的自定义命令设置中搜索这个新创建的命令。

下次运行 linter 时，自定义 lint 命令应该会运行。

### 自定义正则表达式替换

这些规则在 YAML 时间戳规则之前运行，但在大多数其他规则之后运行。这些规则允许您指定要查找的正则表达式、与该正则表达式一起使用的标志以及要替换的值。**您可以将空格指定为查找和替换值，但请小心，因为如果不小心使用，这可能会导致很多不必要的更改。**如果您在正则表达式中知道自己在做什么，这些规则可以用于将某些标签、单词和格式替换为其他内容。

[这里](https://regexr.com/) 是一个在线游乐场，您可以在其中测试正则表达式。它可以告诉您正则表达式是否很慢，并且您可以使用它来测试要替换的文本是否实际上被正则表达式的查找和标志部分选中。

[这里](https://javascript.info/regexp-introduction#flags) 是关于每个标志的解释。根据需要随意使用它们。默认添加的标志是 `g`（全局）和 `m`（多行）。

_注意：回顾断言在 iOS 移动设备上不起作用，并且使用它们会导致 linting 失败。因此，请**不要**在 iOS 移动设备上使用它们。_

### 粘贴限制

- 该插件仅适用于标准的粘贴（`cmd/ctrl + v`）快捷键，而不适用于 vim 中的 `p` 操作符。（但在正常模式或插入模式下使用 `cmd/ctrl + v` 粘贴是有效的。）
- 为避免与插件如 [自动链接标题](https://obsidian.md/plugins?id=obsidian-auto-link-title) 或 [将URL粘贴到选择中](https://obsidian.md/plugins?id=url-into-selection) 发生冲突，当剪贴板中检测到 URL 时，不会触发该插件。
- 在移动设备上，为了粘贴 URL，请确保执行“长按 ->粘贴”操作以将其粘贴到您的文档中并使用粘贴规则。
- 在多光标多行粘贴时，光标将保持在粘贴值之后，而不是移动到粘贴值的末尾。

安装

从 Obsidian 的 0.9.7 版本开始，可以直接在应用程序内安装此插件。该插件可以在“设置”窗格下的“第三方插件”中找到，位于“社区插件”目录中。该插件名为“Linter”。

### 手动安装

1. 下载 [最新版本](https://github.com/platers/obsidian-linter/releases/latest)
2. 将 zip 文件中的 obsidian-linter 文件夹解压到你的 vault 的插件文件夹中：`<vault>/.obsidian/plugins/`
注意：在某些机器上，`.obsidian` 文件夹可能是隐藏的。在 MacOS 上，你可以按下 `Command+Shift+Dot` 来在 Finder 中显示该文件夹。
3. 重新加载 Obsidian
4. 如果提示安全模式，你可以禁用安全模式并启用插件。

如何提供帮助

欢迎并感谢您的贡献。您可以通过以下任何方式提供帮助：

无需设置存储库：

- [报告错误](https://github.com/platers/obsidian-linter/issues/new?assignees=&labels=bug&template=bug_report.md&title=Bug%3A+)
- [请求功能](https://github.com/platers/obsidian-linter/issues/new?assignees=&labels=rule+suggestion&template=feature_request.md&title=FR%3A+)
- [建议文档](https://github.com/platers/obsidian-linter/issues/new?assignees=&labels=documentation&template=documentation_request.md&title=Doc%3A+)

需要不同的存储库和开发设置：

- [更新或添加文档](https://github.com/platers/obsidian-linter/blob/master/CONTRIBUTING.md#updating-documentation)
- [将插件翻译成新语言](https://github.com/platers/obsidian-linter/blob/master/CONTRIBUTING.md#adding-translations-for-a-language)
- [修复错误](https://github.com/platers/obsidian-linter/blob/master/CONTRIBUTING.md#bug-fixes)
- [添加新规则](https://github.com/platers/obsidian-linter/blob/master/CONTRIBUTING.md#adding-a-rule)

感谢所有为这个插件做出贡献的人！特别感谢 [chrisgrieser](https://github.com/chrisgrieser) 为此做出的所有基础工作，并建议将粘贴逻辑放在 Linter 中！
