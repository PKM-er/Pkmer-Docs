---
uid: 2023120719401018
title: Obsidian 插件：【Readme】PDF Highlights
tags: ['转换工具', 'PDF', 'obsidian插件', 'readme']
description: 允许从 pdf 中的高亮和下划线文本中，提取内容到你的笔记文件中。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】PDF Highlights

> [!Note] 插件名片
> - 插件名称：PDF Highlights
> - 插件作者：Alexis Rondeau
> - 插件说明：允许从 pdf 中的高亮和下划线文本中，提取内容到你的笔记文件中。
> - 插件分类：[' 转换工具 ', 'PDF', 'obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/akaalias/obsidian-extract-pdf-highlights)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsidian-extract-pdf-highlights)

## 概述

允许从 pdf 中的高亮和下划线文本中，提取内容到你的笔记文件中。

![PDF Highlights](https://cdn.pkmer.cn/covers/obsidian-extract-pdf-highlights.png!pkmer)

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/akaalias/obsidian-extract-pdf-highlights/master/README.md)
>

---

## Readme(翻译）

下面是 [[obsidian-extract-pdf-highlights]] 插件的自述翻译

将您的 PDF 文本高亮提取到 Obsidian 中

该插件允许您将 PDF 中的高亮和下划线文本提取到 Obsidian 存储库中的 markdown 文件中。

### 工作原理

安装并激活插件后：

1. 将突出显示的 PDF 文件拖放到 Obsidian vault 中
2. 在 Obsidian 中打开 PDF 文件
3. 在左侧边栏中点击“PDF”图标

### 默认设置的演示

![简单](https://cdn.pkmer.cn/covers/obsidian-extract-pdf-highlights_1_0.gif)

### 所有可选设置都打开的演示

![设置](https://cdn.pkmer.cn/covers/obsidian-extract-pdf-highlights_1_1.gif)

### 可选设置

- 包括页码（默认：关闭）
- 包括高亮颜色（默认：关闭）
- 创建链接（默认：关闭）

待办事项列表

这个插件的功能和改进列表。

### 冷藏箱

- [ ] 录制演示视频，为新用户提供快速入门指南

### 待办事项

- [ ] 自动从链接中创建带有高亮/注释的笔记，并附带指向源 PDF 的反向链接
- [ ] 按高亮颜色对高亮进行分组（可选）
- [ ] 添加进度条/模态框，显示“已处理页面 5/10（50%）”或类似信息，适用于较长的 PDF 文件
- [ ] 修复换行后缺少空格的问题（非常复杂）

### 正在进行中

...

### 完成

- [x] 重构 pdfjs 导入，以避免过载 Obsidian 工作器（来自@lishid 的想法？）
- [x] 显示高亮颜色（可选）
- [x] 自动链接列表项（可选）
- [x] 从 main.ts 中重构/提取 PDF
- [x] 在每个高亮中添加页码（可选）
- [x] 按文档和页面中的位置对高亮进行排序（必需）
- [x] 提取未排序的 HIGHLIGHT 注释列表
- [x] 提取未排序的 TEXT 注释列表
- [x] 提取未排序的 UNDERLINE 注释列表
- [x] 决定是否与现有的 Highlights 插件集成

贡献

我很乐意听到你的声音，请查看 [贡献页面](CONTRIBUTING.md) 以与我联系！

主要感谢

这个插件是基于 [Joseph Devietti](https://github.com/devietti/) 和 [他在2012年为PDFJS提交的拉取请求](https://github.com/devietti/pdf.js/commit/9116f2cddddd5327d84167a98d92c0de42de94fd) 的基础上开发的。
