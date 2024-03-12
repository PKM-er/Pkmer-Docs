---
uid: 20230817224055
title: Obsidian 插件：Smart Rename
tags: ['obsidian插件', 'readme']
description: 重命名笔记，保留现有链接中的先前标题
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Smart Rename

> [!Note] 插件名片
> - 插件名称：Smart Rename
> - 插件作者：mnaoumov
> - 插件说明：重命名笔记，保留现有链接中的先前标题
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/mnaoumov/obsidian-smart-rename)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?smart-rename)

## 概述

重命名笔记，保留现有链接中的先前标题

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/mnaoumov/obsidian-smart-rename/master/README.md)

---

## Readme(翻译）

下面是 [[smart-rename]] 插件的自述翻译

# 智能重命名

这是一个为 [Obsidian](https://obsidian.md/) 设计的插件，它添加了一个名为 `Smart Rename` 的命令，该命令在重命名笔记后执行以下步骤：

1. 将先前的标题作为别名添加到重命名后的笔记中。
2. 保留对使用先前标题作为显示文本的重命名笔记的反向链接。

## 详细解释

1. 你有以下文件：

`OldName.md`:

```markdown
这是一个将要被重命名为`NewName.md`的笔记`OldName.md`。
```

`OtherNote.md`:

```markdown
这个笔记引用了以下内容：

1. Wikilink [[OldName]]
2. 带有相同显示文本的Wikilink [[OldName|OldName]]
3. 带有自定义显示文本的Wikilink [[OldName|Custom display text]]
4. Markdown链接 [OldName](OldName.md)
5. 带有自定义显示文本的Markdown链接 [Custom display text](OldName.md)
```

1. 你调用当前插件，将 `NewName` 作为新标题提供。
2. 现在你有以下文件：

`NewName.md`:

```markdown
---
aliases:
  - OldName
---

这是一个将要被重命名为`NewName.md`的笔记`OldName.md`。
```

`OtherNote.md`:

```markdown
这个笔记引用了以下内容：

1. Wikilink [[NewName|OldName]]
2. 带有相同显示文本的Wikilink [[NewName|OldName]]
3. 带有自定义显示文本的Wikilink [[NewName|Custom display text]]
4. Markdown链接 [OldName](NewName.md)
5. 带有自定义显示文本的Markdown链接 [Custom display text](NewName.md)
```

当前插件的目的是保留链接 1、2、4 中的 `OldName` 显示文本。

## 安装

- `Smart Rename` 现在可以在 [官方社区插件仓库](https://obsidian.md/plugins) 上获取。
- Beta 版本可以通过 [BRAT](https://github.com/TfTHacker/obsidian42-brat) 进行安装。



