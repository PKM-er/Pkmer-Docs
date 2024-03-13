---
uid: 2023080322221181
title: Obsidian 插件：MathLinks
tags: ['obsidian插件', 'readme']
description: 在你的链接中渲染MathJax
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：MathLinks

> [!Note] 插件名片
> - 插件名称：MathLinks
> - 插件作者：Zhaoshen Zhai
> - 插件说明：在你的链接中渲染 MathJax
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/zhaoshenzhai/obsidian-mathlinks)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?mathlinks)

## 概述

在你的链接中渲染 MathJax

![MathLinks](https://cdn.pkmer.cn/covers/mathlinks.png!pkmer)

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/zhaoshenzhai/obsidian-mathlinks/master/README.md)

---

## Readme(翻译）

下面是 [[mathlinks]] 插件的自述翻译

# Obsidian MathLinks

一个 [Obsidian.md](https://obsidian.md) 插件，用于在链接中渲染和管理 [MathJax](https://www.mathjax.org/)。

将 `mathLink` 关联到你的笔记中，其中包含任意的 MathJax，然后在所有链接到该笔记的地方显示它。

* 在阅读和实时预览模式以及画布中均可使用。
* 添加自定义 [模板](https://github.com/zhaoshenzhai/obsidian-mathlinks/tree/master#templates) 用于 `mathLinks`。
* 在 Wikilinks 和 Markdown 链接的别名中渲染 MathJax。
* 与 [Extended MathJax](https://github.com/xldenis/obsidian-latex) 和 [Dataview](https://github.com/blacksmithgu/obsidian-dataview) 兼容。

![](https://raw.githubusercontent.com/zhaoshenzhai/obsidian-mathlinks/master/.github/sample.png)

## 描述和用法

在 `note.md` 的 YAML 前置元数据中分配一个 `mathLink`，如下所示，将使所有的链接形式为 `[[note]]` 和 `[note](note.md)` 的显示为 `yourMathLink` 的渲染 MathJax。您的笔记不会发生任何更改，只有在重新打开带有链接的笔记时，对 `yourMathLink` 的更新才会反映出来。

```
---
mathLink: yourMathLink
---

内容从这里开始。
```

该插件还使得 Wikilinks 和 Markdown 链接与 MathJax 兼容，因此像 `[[note|yourAlias]]` 和 `[yourAlias](note.md)` 这样的链接将显示为 `yourAlias` 的渲染 MathJax。如果 `note` 中存在 `mathLink`，则会被 `yourAlias` 覆盖。

### 模板

通常，笔记中的 `mathLinks` 涉及将某些文本替换为其数学对应物。例如，您可能有许多标题形式为 `... iff ...` 的笔记。

不必手动设置每个笔记的 `mathLinks` 为 `... $\Leftrightarrow$ ...`，只需使用 `mathLink: auto` 即可。这将通过一个模板将 `iff` 替换为 `$\Leftrightarrow$` 来生成其 `mathLink`。_ 模板 _ 由要匹配的字符串（`iff`）、其替换（`$\Leftrightarrow$`）以及一些选项（全局匹配、区分大小写和匹配整个单词）组成。它们在 MathLinks 设置窗口中创建和维护。

## 设置

### 模板

每个模板都有以下选项，在创建/编辑模板时可以进行配置。

| 字段 | 描述 | 默认值 |
| ----- | ----------- | ------- |
| 标题 | 在编辑/删除模板时用于参考的模板名称。 |  |
| 匹配项 | 要匹配和替换的字符串。不包括正则表达式。 |  |
| 替换为 | 要替换匹配项的字符串。不要转义反斜杠。 |  |
| 全局匹配 | 匹配所有实例（而不仅仅是第一个）。 | `true` |
| 区分大小写 | 匹配将区分大小写。 | `true` |
| 匹配整个单词 | 仅匹配整个单词。 | `true` |

### 排除的文件

MathLinks 将忽略这些文件。如果输入了 `path`，则会忽略 `path` 下的所有文件。

> **注意**：
> `path` 必须相对于 vault 目录。

## 更新日志

### 0.3.x: _与 [obsidian-mathjax-wikilinks](https://github.com/aaron-jack-manning/obsidian-mathjax-wikilinks) 合并。_

* 0.3.5: [#24](https://github.com/zhaoshenzhai/obsidian-mathlinks/issues/24): 修复了在按下锚链接时创建新笔记的问题。
* 0.3.4: [#17](https://github.com/zhaoshenzhai/obsidian-mathlinks/issues/17), [#18](https://github.com/zhaoshenzhai/obsidian-mathlinks/pull/18), [#19](https://github.com/zhaoshenzhai/obsidian-mathlinks/pull/19), [#20](https://github.com/zhaoshenzhai/obsidian-mathlinks/issues/20): 修复了在新标签页中打开笔记（使用 `cmd` 键和鼠标）的问题；在引用中正确渲染 Dataview。
* 0.3.3: [#16](https://github.com/zhaoshenzhai/obsidian-mathlinks/issues/16): 当按住 `ctrl` 键时在新标签页中打开链接。
* 0.3.2: [#12](https://github.com/zhaoshenzhai/obsidian-mathlinks/issues/12), [#15](https://github.com/zhaoshenzhai/obsidian-mathlinks/pull/15): 修复了在实时预览中的 `mathLinks`，现在应该在大多数 Markdown 元素中渲染。使 `ViewPlugin` 独立于每个叶子操作，现在可以打开和渲染同一文件的多个实例（实时预览与源代码）。
* 0.3.1: [#13](https://github.com/zhaoshenzhai/obsidian-mathlinks/issues/13), [#14](https://github.com/zhaoshenzhai/obsidian-mathlinks/pull/14): 在 Dataview 内联字段中渲染 `mathLinks`。
* 0.3.0: [#9](https://github.com/zhaoshenzhai/obsidian-mathlinks/pull/9): 与 [obsidian-mathjax-wikilinks](https://github.com/aaron-jack-manning/obsidian-mathjax-wikilinks) 合并，感谢 [aaron-jack-manning](https://github.com/aaron-jack-manning)。扩展其功能，包括 Wikilinks 和 Markdown 链接的实时预览。

0.2.x: _不再直接编辑链接本身。_

* 0.2.9: [#10](https://github.com/zhaoshenzhai/obsidian-mathlinks/issues/10), [#11](https://github.com/zhaoshenzhai/obsidian-mathlinks/pull/11): 修复了固定笔记在 `layout-changed` 时挂起和“创建新笔记”的问题。
* 0.2.8: [#7](https://github.com/zhaoshenzhai/obsidian-mathlinks/issues/7): 在实时预览中渲染 `mathLinks`。
* 0.2.7: [#6](https://github.com/zhaoshenzhai/obsidian-mathlinks/issues/6): 在画布中渲染 `mathLinks`。
* 0.2.6: [#4](https://github.com/zhaoshenzhai/obsidian-mathlinks/issues/4), [#5](https://github.com/zhaoshenzhai/obsidian-mathlinks/pull/5): 添加了 Dataview 支持。
* 0.2.5: [#3](https://github.com/zhaoshenzhai/obsidian-mathlinks/issues/3): 修复了在 `fileName` 中解码 `UTF-8` 字符的问题。
* 0.2.4: [#2](https://github.com/zhaoshenzhai/obsidian-mathlinks/issues/2): 修复了不遵循自定义链接名称的问题。
* 0.2.3: [#1](https://github.com/zhaoshenzhai/obsidian-mathlinks/issues/1): 修复了仅检查 `fileManager.getNewFileParent()` 中的文件的问题。
* 0.2.2: 简化了 `getMathLink()`。
* 0.2.1: 修复了重复的标题。
* 0.2.0: 不再直接编辑链接本身。相反，注册了一个 Markdown 后处理器，用于渲染单独的内联 MathJax 方程（如 `$...$`）并将它们拼接在一起。

### 0.1.x: _初始版本。_

* 0.1.4: 修复了重复的模板和排除的文件/路径。
* 0.1.3: 修复了在更新反向链接时排除文件的问题。
* 0.1.2: 使用 `this.app.vault.configDir` 替代 `.obsidian`。
* 0.1.1: 修复了在禁用 `Use [[Wikilinks]]` 后恢复为维基链接的问题。改为恢复为其 Markdown 链接。
* 0.1.0: 初始版本！
