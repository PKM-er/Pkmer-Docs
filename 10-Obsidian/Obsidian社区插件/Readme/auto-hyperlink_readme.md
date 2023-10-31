---
uid: 2023082011353549
title: Obsidian 插件：【Readme】Auto Hyperlink
tags: ['obsidian插件', 'readme']
description: 根据用户定义的规则插入超链接
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】Auto Hyperlink

> [!Note] 插件名片
> - 插件名称：Auto Hyperlink
> - 插件作者：take6
> - 插件说明：根据用户定义的规则插入超链接
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/take6/obsidian-plugin-auto-hyperlink)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?auto-hyperlink)

## 概述

根据用户定义的规则插入超链接

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/take6/obsidian-plugin-auto-hyperlink/master/README.md)
>

---

## Readme(翻译）

下面是 [[auto-hyperlink]] 插件的自述翻译

## 自动超链接插件

该插件根据用户定义的规则，在 Obsidian 文档的阅读视图中插入超链接。

### 基本用法

在插件设置面板中，您可以以 JSON 的形式定义超链接规则。其键应该是与您想要插入超链接的单词匹配的模式。相应的值是要插入的 URL 的模板。例如，以下规则将检测到所有的 "Obsidian" 单词，并插入一个链接到 `https://github.com/obsidianmd`，这几乎等同于在编辑模式下写入 `[Obsidian](https://github.com/obsidianmd)`。如果您的文档中包含许多 "Obsidian"，这个插件会自动为所有的单词插入链接 - 无需手动链接，无遗漏。

```
{
    "Obsidian": "github.com/obsidianmd"
}
```

如果您省略了 `https://`，插件会自动添加它。如果您需要使用 http（非安全的 HTTP）访问该网站，则模板必须以 `http://` 开头。

高级用法：正则表达式和占位符

您可以使用正则表达式进行匹配。将模式字符串提供给 [RegExp](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/RegExp) 以启用正则表达式匹配。以下规则将检测所有的 "Obsidian"（大写）和 "obsidian"（小写），并插入到 `https://obsidian.md` 的链接。

```
{
    "[oO]bsidian": "obsidian.md"
}
```

JSON 值可以是一个 _ 模板 _，而不是直接的 URL。您可以使用**占位符**嵌入匹配的字符串。上述规则等同于以下规则。

```
{
    "[oO]bsidian": "$0.md"
}
```

在模板中，`$0` 是一个占位符，它将被匹配的模式替换。生成的 URL 将根据匹配的字符串是大写还是小写（似乎后者的 URL 会重定向到前者）而变为 `obsidian.md` 或 `Obsidian.md`。您可以使用子模式作为 `$` 和正整数，如 `$1`。以下示例使用子模式将链接插入到 GitHub 的拉取请求。

```
{
    "Obsidian PR #([0-9]+)": "github.com/obsidianmd/obsidian-releases/pull/$1"
}
```

当模式匹配 "Obsidian PR #10"时，`$0`对应于整个匹配的字符串，而`$1`将被替换为由括号括起来的第一个子模式，即在这种情况下为`10`。因此，生成的URL将为`https://github.com/obsidianmd/obsidian-releases/pull/10`。

### 多个规则

您可以通过逗号将它们分隔开来定义多个规则。请注意规则的顺序。如果存在多个规则，则**上面的规则优先**。如果您有以下两个规则，"obsidian"（小写字母）将链接到 `https://obsidian.md`，但 "Obsidian"（首字母大写）将链接到 `https://github.com/obsidianmd`，因为上面的规则优先。

```
{
    "Obsidian": "github.com/obsidianmd",
    "[oO]bsidian": "$0.md"
}
```

### 示例

本节演示了插件的工作原理。

假设您有以下的 Markdown 文本。

```
## 章节：Obsidian

Obsidian和obsidian，它们的公共发布由GitHub托管。Obsidian PR＃10已发布以添加table-editor-obsidian插件。

- Auto Hyperlink插入了所有出现的"Obsidian"或"obsidian"，即使在列表项中也是如此
```

并且您有以下超链接规则。

```
{
    "Obsidian PR #（[0-9]+）"：“github.com/obsidianmd/obsidian-releases/pull/$1”，
    "Obsidian"：“github.com/obsidianmd”，
    "[oO]bsidian"：“https://$0.md”
}
```

当您切换到阅读视图时，您会发现许多链接是由插件插入的。该链接也可以在 [导出的PDF文件](./demo/Auto-Hyperlink-Demo.pdf) 中使用。

您可以按照以下步骤自行尝试。

1. 安装 Auto Hyperlink 插件并启用它
2. 创建新文件，复制上述 Markdown 文本
3. 打开插件设置，并将上述规则复制到文本区域中
4. 返回到新创建的文件，切换到阅读视图

### 作者

[@take6](https://github.com/take6)
