---
uid: 20231220115812
title: Obsidian 插件：【Readme】Advanced Tables
tags: ['界面相关', '编辑工具', '表格', '效率', 'obsidian插件', 'readme']
description: 改进 Obsidian 内的表格书写，对齐，格式化的书写体验
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】Advanced Tables

> [!Note] 插件名片
> - 插件名称：Advanced Tables
> - 插件作者：Tony Grosinger
> - 插件说明：改进 Obsidian 内的表格书写，对齐，格式化的书写体验
> - 插件分类：[' 界面相关 ', ' 编辑工具 ', ' 表格 ', ' 效率 ', 'obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/tgrosinger/advanced-tables-obsidian)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?table-editor-obsidian)

## 概述

改进 Obsidian 内的表格书写，对齐，格式化的书写体验

![Advanced Tables](https://cdn.pkmer.cn/covers/table-editor-obsidian.gif)

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/tgrosinger/advanced-tables-obsidian/main/README.md)

---

## Readme(翻译）

下面是 [[table-editor-obsidian]] 插件的自述翻译

# Obsidian 的高级表格

在 Obsidian 中为 Markdown 表格添加改进的导航、格式化和操作功能：

- 自动格式化
- 类似 Excel 的表格导航（在单元格和行之间使用 tab/enter 键）
- [电子表格公式！](https://github.com/tgrosinger/advanced-tables-obsidian/blob/main/docs/help.md#using-formulas-in-markdown-tables)
- 添加、删除和移动列和行
- 设置列对齐（左、中、右）
- 按指定列对行进行排序
- 导出为 CSV
- 适用于 Obsidian 移动版（请参阅下面的说明）

## 演示

![基本功能](https://cdn.pkmer.cn/covers/table-editor-obsidian_1_0.gif)

如何使用

要创建一个表格，首先创建一个单独的 `|` 字符，然后输入表格的第一个标题并按下<kbd>Tab</kbd>键。继续输入标题并按下<kbd>Tab</kbd>键，直到创建所有标题。按下<kbd>Enter</kbd>键进入第一行。继续填充单元格，按下<kbd>Enter</kbd>键进入每一行。

当光标位于 Markdown 表格中时...

| 快捷键                                             | 动作                         |
| ------------------------------------------------- | --------------------------- |
| <kbd>Tab</kbd>                                    | 下一个单元格                 |
| <kbd>Shift</kbd> + <kbd>Tab</kbd>                 | 上一个单元格                 |
| <kbd>Enter</kbd>                                  | 下一行                       |
| <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>D</kbd> | 打开表格控制侧边栏           |

或者使用命令面板并搜索 "Advanced Tables"。有许多可用的命令，不要忘记滚动！

## Markdown 中的公式和电子表格

![公式演示](https://cdn.pkmer.cn/covers/table-editor-obsidian_1_1.gif)

有关使用公式的更多信息，请访问 [帮助文档](https://github.com/tgrosinger/advanced-tables-obsidian/blob/main/docs/help.md)。

如何安装

### 从 Obsidian 内部

从 Obsidian v0.9.8+ 开始，您可以通过以下步骤在 Obsidian 内部激活此插件：

- 打开设置 > 第三方插件
- 确保安全模式处于关闭状态
- 点击浏览社区插件
- 搜索 "Advanced Tables"
- 点击安装
- 安装完成后，关闭社区插件窗口并激活新安装的插件

## Obsidian 移动版

在移动设备上使用 Obsidian 时，可以使用高级表格插件。

使用<kbd>Enter</kbd>和<kbd>Tab</kbd>来导航表格将不起作用，

但是您可以将“下一个单元格”和“下一行”命令添加到移动工具栏中并使用它们进行导航，或者使用侧边栏中的按钮。

定价

该插件免费提供给所有人使用，但如果您想表示感谢或帮助支持持续开发，可以通过以下方法之一向我提供一点帮助：

[![GitHub赞助商](https://img.shields.io/github/sponsors/tgrosinger?style=social)](https://github.com/sponsors/tgrosinger)

[![Paypal](https://img.shields.io/badge/paypal-tgrosinger-yellow?style=social&logo=paypal)](https://paypal.me/tgrosinger)

[<img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="BuyMeACoffee" width="100">](https://www.buymeacoffee.com/tgrosinger)

注意事项

这是一个实验性的功能，可能存在不稳定性。有可能存在会删除当前笔记中数据的错误。请务必备份！
