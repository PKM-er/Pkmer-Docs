---
uid: 2023120522243905
title: Obsidian 插件：【Readme】CSV Codeblock
tags: ['obsidian插件', 'readme']
description: 使用CSV格式呈现代码块。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】CSV Codeblock

> [!Note] 插件名片
> - 插件名称：CSV Codeblock
> - 插件作者：elrindir
> - 插件说明：使用 CSV 格式呈现代码块。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/elrindir/obsidian-csv-codeblock)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?csv-codeblock)

## 概述

使用 CSV 格式呈现代码块。

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/elrindir/obsidian-csv-codeblock/master/README.md)

---

## Readme(翻译）

下面是 [[csv-codeblock]] 插件的自述翻译

# CSV 代码块

这是一个 Obsidian 插件（<https://obsidian.md>）。该插件将 CSV 格式的代码块渲染为表格。

# 用法

只需将 `csv` 标识符放在代码块中：

`````

```csv
位置, 日期, 名称, 价格
1, 2023-09-28, 香料, 150$
2, 2023-02-29, 铲子, 1.25$
```

`````

![渲染表格的预览](https://github.com/elrindir/obsidian-csv-codeblock/blob/master/rendered_table.png)

```ts
import { Plugin } from "obsidian";

export default class ExamplePlugin extends Plugin {
  async onload() {
    this.registerMarkdownCodeBlockProcessor("csv", (source, el, ctx) => {
      const rows = source.split("\n").filter((row) => row.length > 0);

      const table = el.createEl("table");
      const body = table.createEl("tbody");

      for (let i = 0; i < rows.length; i++) {
        const cols = rows[i].split(",");

        const row = body.createEl("tr");

        for (let j = 0; j < cols.length; j++) {
          row.createEl("td", { text: cols[j] });
        }
      }
    });
  }
}
```