---
uid: 20230927155241
title: Dataview 的 GROUP BY 究竟是怎么工作的
tags: [obsidian, dataview]
description: Dataview 的 GROUP BY 究竟是怎么工作的
author: Huajin
type: other
draft: false
editable: false
modified: 20231209174835
---

# Dataview 的 GROUP BY 究竟是怎么工作的

分组时，结果的 “第一层” 会发生变化。

在不分组的情况下，第一级是从 `from/WHERE` 语句返回的文件链接，因此如果你没有向 LIST 或 TABLE 命令提供额外信息（例如 wihout id），它们将自动显示。文件链接是结果的 ID。

分组之后，成组条件将成为第一级，即 ID。这意味着无需添加任何额外信息就可以在列表或表中看到组名，而不是文件链接。要仍然看到文件名，您需要将它们作为附加信息传递给每个 `row.file.link`。