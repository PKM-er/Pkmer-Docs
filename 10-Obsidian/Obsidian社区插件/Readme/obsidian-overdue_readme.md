---
uid: 20230817224054
title: Obsidian 插件：Overdue
tags: ['任务管理', '编辑器', '效率', 'obsidian插件', 'readme']
description: 未在截止日期前完成的任务，会为你自动将任务其标记为[[逾期]]/[[OVERDUE]]
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Overdue

> [!Note] 插件名片
> - 插件名称：Overdue
> - 插件作者：Peter Parente
> - 插件说明：未在截止日期前完成的任务，会为你自动将任务其标记为 [[逾期]]/[[OVERDUE]]
> - 插件分类：[' 任务管理 ', ' 编辑器 ', ' 效率 ', 'obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/parente/obsidian-overdue)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsidian-overdue)

## 概述

未在截止日期前完成的任务，会为你自动将任务其标记为 [[逾期]]/[[OVERDUE]]

![Overdue](https://cdn.pkmer.cn/covers/obsidian-overdue.PNG!pkmer)

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/parente/obsidian-overdue/main/README.md)

---

## Readme(翻译）

下面是 [[obsidian-overdue]] 插件的自述翻译

# Obsidian 逾期插件

如果您在截止日期之前没有勾选复选框项目，此插件将将其标记为 `[[逾期]]`。

例如，假设您有以下项目：

```markdown

# 在文件2020-01-01.md中

- [x] 我完成的事情
- [ ] 我没有完成的事情

# 在另一个文件.md中

- [x] 我完成的其他事情[[2020-01-02]]
- [ ] 我忘记的其他事情[[2020-02-15]]
```

当插件在 2020 年 1 月 1 日之后的任何时间运行时，它将进行以下更改：

```markdown

# 在文件2020-01-01.md中

- [x] 我完成的事情
- [ ] 我没有完成的事情 [[逾期]]

# 在另一个文件.md中

- [x] 我完成的其他事项 [[2020-01-02]]
- [ ] 我忘记的其他事项 [[2020-02-15]] [[Overdue]]
```

插件会在午夜后自动运行以更新您的页面。您还可以使用 Obsidian 命令面板中的 `Overdue: Mark overdue items` 触发插件。

打开 `Overdue` 页面的反向链接面板，可以在一个位置上显示所有过期的事项。

该插件只会添加 `[[Overdue]]` 引用，永远不会删除它们。当您完成一个过期的事项时，勾选它并删除 `[[Overdue]]` 文本，以防止它出现在过期的反向链接中。

## 开发

```bash
cd /path/to/vault/.obsidian/plugins
git clone git@github.com:parente/overdue.git
npm i
npm run dev
eslint main.ts
```

有关更多详细信息，请参见<<https://github.com/obsidianmd/obsidian-sample-plugin>。>
