---
uid: 20240312193744
title: Obsidian 插件：【Readme】Inline Admonitions
tags: ['obsidian插件', 'readme']
description: 内联标注使文本突出。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】Inline Admonitions

> [!Note] 插件名片
> - 插件名称：Inline Admonitions
> - 插件作者：Scott Tomaszewski
> - 插件说明：内联标注使文本突出。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/scottTomaszewski/obsidian-inline-admonitions)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?inline-admonitions)

## 概述

内联标注使文本突出。

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/scottTomaszewski/obsidian-inline-admonitions/master/README.md)

---

## Readme(翻译）

下面是 [[inline-admonitions]] 插件的自述翻译

【机翻】

# 为 Obsidian 添加内联警告

这个插件允许你格式化内联代码块，使其在页面上更加突出。例如，你可能希望所有以 "IMPORTANT" 开头的内联代码块都具有红色背景，就像这样。

![img.png](https://cdn.pkmer.cn/covers/inline-admonitions_2_0.png!pkmer)

[inlineAdmonition_1.2.0.webm](https://github.com/scottTomaszewski/obsidian-inline-admonitions/assets/5295276/2a781588-cba0-4665-98c2-16d896cd2abe)

## 创建一个新的内联警告

打开“内联警告”设置，点击顶部的“创建新的内联警告”以打开一个模态框来配置一个新的内联警告。

![https://cdn.pkmer.cn/covers/inline-admonitions_2_1.png!pkmer](https://cdn.pkmer.cn/covers/inline-admonitions_2_1.png!pkmer)

- **背景颜色** 是内联警告“气泡”的颜色
- **颜色** 是文本颜色
- **类型** 定义了如何触发内联警告。查看 [类型](#types) 文档以获取更多详细信息。

## 类型

内联警告“类型”定义了触发代码块转换为内联警告的条件。当前支持的类型有：

- [前缀类型](#prefix-type)
- [后缀类型](#suffix-type)
- [包含类型](#contains-type)

### 前缀类型

前缀内联警告在代码块以特定文本开头时触发。

**设置**

- `prefix` 定义了触发内联警告的代码块开头的文本。

### 后缀类型

后缀内联警告在代码块以特定文本结尾时触发。

**设置**

- `suffix` 定义了在代码块末尾触发内联警告的文本。

### 包含类型

包含内联警告在代码块中包含特定文本时触发。

**设置**

- `contains` 定义了触发内联警告的代码块中的文本。

## 注意

- 这个插件处于 alpha 阶段。对结果不做任何承诺...
- 内联警告的 CSS 基于 Obsidian 的标签 CSS。我会在未来的版本中进行清理。
- 保存设置将触发 Markdown 视图的重新渲染。可以避免这种情况，并计划在未来的版本中实现。
- 类似于上下文排版，这个插件将为您提供一些可以手动操作的 CSS 类。

## 未来工作

- 用正则表达式触发内联警告
- 对代码块进行完整的 CSS 操作，而不是内联样式属性

## 开发

### 构建

- 运行 `npm i` 来安装依赖
- 运行 `npm run dev` 来构建并监视
上传文件 `manifest.json`、`main.js`、`styles.css` 作为二进制附件。



