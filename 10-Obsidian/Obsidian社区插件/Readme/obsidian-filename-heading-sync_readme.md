---
uid: 20230803231105
title: Obsidian 插件：Filename Heading Sync
tags: ['模板', 'obsidian插件', 'readme']
description: 黑曜石插件，用于保持文件名与文件的第一个标题同步
author: AI
type: readme
draft: false
editable: false
modified: 20230803232518
---

# Obsidian 插件：Filename Heading Sync

> [!Note] 插件名片
> - 插件名称：Filename Heading Sync
> - 插件作者：dvcrn
> - 插件说明：黑曜石插件，用于保持文件名与文件的第一个标题同步
> - 插件分类：[' 模板 ', 'obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/dvcrn/obsidian-filename-heading-sync)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsidian-filename-heading-sync)

## 概述

黑曜石插件，用于保持文件名与文件的第一个标题同步

![Filename Heading Sync](https://cdn.pkmer.cn/covers/obsidian-filename-heading-sync.gif!pkmer)

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/dvcrn/obsidian-filename-heading-sync/master/README.md)
>

---

## Readme(翻译）

下面是 [[obsidian-filename-heading-sync]] 插件的自述翻译

# Obsidian 文件名和标题同步

这是一个 Obsidian 插件，用于保持文件名和文件的第一个标题同步。

![演示](./demo.gif)

**注意**：该插件会在打开文件时立即覆盖文件顶部的第一个标题，因此可以被视为 _ 破坏性操作 _。

在 Obsidian 论坛上的讨论 [在这里](https://forum.obsidian.md/t/plugin-for-keeping-the-filename-and-first-heading-of-a-file-in-sync/12042)。

## 特点

- 当重命名当前文件时 -> 将更新标题
- 当打开一个还没有标题的文件时 -> 将插入一个标题
- 当打开一个与当前文件名不同的文件时 -> 将更新标题
- 当更新文件的标题时 -> 将重命名文件

如果您不喜欢自动重命名，您也可以在设置中禁用“文件保存钩子”和“文件打开钩子”，只使用手动同步命令（感谢 @mnaoumov！）

这个插件与插件 X 冲突，我该如何解决？

- 首先，检查是否可以通过添加正则表达式规则来解决。例如，如果您的文件总是以 `myfile.foo.md`（以 `foo` 结尾）结束，您可以通过在插件设置中添加以下正则表达式规则来全局排除它：`.*\.foo\.md`
- 如果这样做还不行，看看其他插件是否在文件打开时起作用。如果是这样，您可以进入此插件的设置并禁用“文件打开钩子”作为解决方法。（您还可以通过禁用“文件保存钩子”来完全禁用自动同步）
- 如果这仍然没有解决问题，请 [打开一个新问题](https://github.com/dvcrn/obsidian-filename-heading-sync/issues/new)，并提供重现问题的步骤和示例。

### 与 'templater' 冲突

在设置中禁用文件打开钩子，它们应该可以很好地一起使用（[#40](https://github.com/dvcrn/obsidian-filename-heading-sync/issues/40)）

## 当前的限制和待办事项

- 当重命名一个不是当前文件的文件时，不会发生任何变化。标题将在下次以编辑模式打开文件时更新
- Obsidian 无法处理的 [特殊字符](https://github.com/dvcrn/obsidian-filename-header-sync/blob/bc3a1a7805f2b63ad5767c3d01dcef7b65b1aebd/main.ts) 将被自动删除

## 许可证

MIT
