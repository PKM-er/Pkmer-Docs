---
uid: 2023080322280823
title: Obsidian 插件：【Readme】Text Snippets
tags: ['自动化', '编辑器', '效率', 'obsidian插件', 'readme']
description: 更快的打字片段。允许您替换文本模板，创建自己的模板，并扩展文本快捷方式。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Text Snippets

> [!Note] 插件名片
> - 插件名称：Text Snippets
> - 插件作者：Ariana Khitrova
> - 插件说明：更快的打字片段。允许您替换文本模板，创建自己的模板，并扩展文本快捷方式。
> - 插件分类：['自动化', '编辑器', '效率', 'obsidian插件', 'readme']
> - 项目地址：[点我访问](https://github.com/ArianaKhit/text-snippets-obsidian)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?text-snippets-obsidian)

## 概述

更快的打字片段。允许您替换文本模板，创建自己的模板，并扩展文本快捷方式。

![Text Snippets](https://cdn.pkmer.cn/covers/text-snippets-obsidian.GIF!pkmer)

> [!tip] 原文出处
> 
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/ArianaKhit/text-snippets-obsidian/main/README.md)
> 

---

## Readme(翻译）

下面是 [[text-snippets-obsidian]] 插件的自述翻译


# Obsidian 文本片段插件

这是 Obsidian（https://obsidian.md）的一个插件。

它允许您替换文本模板以加快打字速度，几乎像许多文本编辑器和 IDE 一样创建自己的片段。

**实时预览支持**：```在使用之前，请在插件设置中检查切换按钮，并在“选项”>“社区插件”中重新启动插件```。

您可以使用快捷键（默认为 `CTRL/CMD + Tab`）或通过命令面板（`CTRL/CMD + P`）使用命令 `运行片段替换`。还可以选择使用 `Tab` 和/或 `Space` 作为快捷键。光标需要位于要替换的单词上。您可以通过选择所有文本来用空格替换文本。

## 演示

![演示](https://raw.githubusercontent.com/ArianaKhit/text-snippets-obsidian/main/demo.gif)

## 特点
- 使用```$end$```将光标放置在特定位置进行替换
- 使用```$nl$```在多行代码片段中添加换行符
- ```$nl$```在_Snippets_设置中忽略下一个换行符，如果代码片段以```$end$```结尾，则添加额外的换行符
- 使用```$tb$```添加一个标签以便光标跳转（不要与```$end$```一起使用）
- 触发代码片段快捷键时，如果没有合适的扩展或跳转，将跳转到下一个标签
- 当将`Tab`设置为快捷键时，只有当没有合适的扩展或跳转时，才会插入普通的`Tab`

![tabstop-demo](https://raw.githubusercontent.com/Arax20/text-snippets-obsidian/main/tabstop_demo.gif)

如何安装

### 在 Obsidian 应用中

在 Obsidian 中，转到 `设置 > 第三方插件 > 社区插件 > 浏览`，然后搜索 `Text Snippets`。

### 手动安装插件

- 将 `main.js`、`styles.css`、`manifest.json` 复制到你的 vault 文件夹 `VaultFolder/.obsidian/plugins/text-snippets-obsidian/` 中。



