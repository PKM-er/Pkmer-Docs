---
uid: 2023080322200316
title: Obsidian 插件：【Readme】ibook
tags: ['obsidian插件', 'readme']
description: 适用于Apple ibook的插件。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：ibook

> [!Note] 插件名片
> - 插件名称：ibook
> - 插件作者：bingryan
> - 插件说明：适用于 Apple ibook 的插件。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/bingryan/obsidian-ibook-plugin)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?ibook)

## 概述

适用于 Apple ibook 的插件。

![ibook](https://cdn.pkmer.cn/covers/ibook.png!pkmer)

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/bingryan/obsidian-ibook-plugin/master/README.md)
>

---

## Readme(翻译）

下面是 [[ibook]] 插件的自述翻译

# Obsidian ibook 插件

它允许您将您的 Mac iBook 的高亮和批注导出到您的 Obsidian 保险库中。

# 演示截图

![](docs/images/screenshot-5.png)

# 注意

- 如果你想使用 ibook 中的高亮文本颜色，请使用 [这个模板](https://github.com/bingryan/obsidian-ibook-plugin/blob/master/docs/example.md#ibook-selected-colors)。

# 要求（存在默认值）

mac ibook 的数据存在本地 sqlite3 中。此插件使用本地 SQLite3 选择数据库。

```shell
brew install sqlite3
```

# 如何使用

### 导出全部

`cmd + p` 并输入 `ibook export`

### 通过搜索导出单本书籍

`cmd + shift + b` 并搜索 `书名/作者`

![](docs/images/screenshot-3.png)

### 通过搜索 [goodreads](https://www.goodreads.com/) 导出图书信息

使用 `cmd + shift + i` 通过文件名搜索图书信息，并插入当前光标位置

![](docs/images/screenshot-4.png)

# 特点

[✓] 支持通过搜索书名/作者导出

[✓] 将 ibook 的高亮和注释导出到您的 Obsidian vault 中。

[✓] 用户自定义模板

[✓] 通过 [goodreads](https://www.goodreads.com/) 搜索书籍信息

[✗] 更多...

# 对于用户自定义模板

1. 模板语言：[https://handlebarsjs.com/](https://handlebarsjs.com/)
   1. 内置加载 [handlebars-helpers](https://github.com/helpers/handlebars-helpers)，[handlebars-group-by](https://github.com/shannonmoeller/handlebars-group-by)
2. 可用参数：[docs/parameters.md](docs/parameters.md)

如果您不知道如何使用这些，请访问 [example](docs/example.md)，欢迎任何人通过 PR 提供模板。

# 如何安装

在 Obsidian 中，您可以通过以下步骤激活此插件：

- 打开设置 > 第三方插件
- 确保安全模式处于关闭状态
- 点击浏览社区插件
- 搜索 "Obsidian ibook"
- 点击安装
- 安装完成后，关闭社区插件窗口并激活新安装的插件



