---
uid: 2023080322183217
title: Obsidian 插件：【Readme】Floating Search
tags: ['obsidian插件', 'readme']
description: 使用Obsidian默认的搜索视图来搜索文本。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Floating Search

> [!Note] 插件名片
> - 插件名称：Floating Search
> - 插件作者：Boninall
> - 插件说明：使用 Obsidian 默认的搜索视图来搜索文本。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/Quorafind/Obsidian-Float-Search)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?float-search)

## 概述

使用 Obsidian 默认的搜索视图来搜索文本。

![Floating Search](https://cdn.pkmer.cn/covers/float-search.png!pkmer)

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/Quorafind/Obsidian-Float-Search/master/README.md)
>

---

## Readme(翻译）

下面是 [[float-search]] 插件的自述翻译

# Obsidian 浮动搜索

现在您可以在模态窗口中使用搜索视图。

![float-search.png](media/img.png)

- 设置快捷键以快速打开浮动搜索。

使用说明 | Usage

1. **三个主要命令**：
    - `全局搜索 Obsidian`：搜索所有全局内容，每次搜索后输入的字符会自动清除；
    - `全局搜索 Obsidian（保留上次状态）`：搜索所有全局内容，每次搜索后输入的字符会在 30 秒后清除；
    - `搜索当前文件`：搜索当前文件的内容；
2. **当光标聚焦在搜索输入框时**：
    - 使用上下箭头键在搜索结果之间切换；
    - 当选择一个搜索结果时，按住 Shift 键并按上下箭头键向上或向下展开结果；当光标聚焦在文件名上时，可以折叠当前文件名下的搜索结果；
    - 当选择一个搜索结果时，
        - 按 Enter 键在后台打开文件；
        - 按 Ctrl+Enter 键在后台打开一个新页面并打开文件；
        - 按 Alt+Enter 键打开文件并关闭弹出窗口；
        - 按 Ctrl+Shift+Alt+Enter 键在新窗口中打开文件并关闭弹出窗口；
    - 当选择一个搜索结果时，按 Tab 键在当前弹出窗口的右侧预览相应的文件，按 Shift+Tab 键关闭预览；
    - 当选择一个搜索结果时，按 Ctrl+Shift+C 键复制选定的搜索结果内容；
    - 当预览文件时，按 Ctrl+E 键切换文件的阅读模式；
    - 当预览文件时，按 Ctrl+G 键从输入框跳转到预览文件的内容，或从预览文件内容返回到输入框；
    - 当预览文件时，按两次 Tab 键跳转到预览文件的内容，或使用 Ctrl+Tab 键从预览文件返回到输入框。
3. **鼠标点击行为**：
    - 当预览文件时：
        - 使用鼠标点击新的搜索结果不会自动关闭弹出窗口，而是切换预览窗口中的文件；
        - 使用 Alt+ 鼠标点击打开文件并关闭弹出窗口；
    - 当没有预览文件时：
        - 使用鼠标点击搜索结果会自动关闭弹出窗口并导航到文件，其他行为与 Obsidian 的默认行为相同；
4. **右键菜单可以快速搜索选定的文本**；
5. **有一个默认的 `obsidian://fs?query=xxxxxx` URI 命令，可以从外部调用 Float 搜索**；
6. **当点击预览文件页面中的导航时，当前预览文件页面将自动替换**。

## 支持

如果您喜欢这个插件，请通过在 [https://www.buymeacoffee.com/boninall](https://www.buymeacoffee.com/boninall) 上给我买杯咖啡来支持我的工作和热情。
