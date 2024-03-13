---
uid: 2023080322292226
title: Obsidian 插件：Vocabulary View
tags: ['obsidian插件', 'readme']
description: 写下一些单词及其解释，并以词汇测试的形式预览它们。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Vocabulary View

> [!Note] 插件名片
> - 插件名称：Vocabulary View
> - 插件作者：nnshi-s
> - 插件说明：写下一些单词及其解释，并以词汇测试的形式预览它们。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/nnshi-s/obsidian-vocabulary-view-plugin)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsidian-vocabulary-view)

## 概述

写下一些单词及其解释，并以词汇测试的形式预览它们。

![Vocabulary View](https://cdn.pkmer.cn/covers/obsidian-vocabulary-view.png!pkmer)

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/nnshi-s/obsidian-vocabulary-view-plugin/main/README.md)

---

## Readme(翻译）

下面是 [[obsidian-vocabulary-view]] 插件的自述翻译

Obsidian 词汇视图

词汇视图是一个 Obsidian 插件，您可以使用它记录一些单词及其解释，并以词汇测试的方式预览它们。

### 用法

创建一个具有以下格式的块：

```
    ```vocaview-<块类型><子类型>
    单词: 解释
    ...

    ```
```

### 区块类型

有 3 种可用的区块类型：

- **list**：以列表形式预览单词。显示所有单词。
- **choice**：以单选题样式预览单词。每次随机选择一个单词。
- **card**：以卡片形式预览单词。每次随机选择一个单词。

### 子类型

对于每种块类型，有 3 种子类型可用：

- 1：显示单词，隐藏解释。
- 2：显示解释，隐藏单词。
- 3：随机混合子类型 1 和 2。

例如：

```
    ```vocaview-list3
    word1: explanation1
    word2: explanation2
    word3: explanation3
    word4: explanation4
    ```
```

将会预览成以下样式：

![example](https://raw.githubusercontent.com/nnshi-s/obsidian-vocabulary-view-plugin/main/readme_img/readme_example.png)

### 手动安装插件

- 禁用 Obsidian 安全模式。
- 将 `main.js`、`styles.css`、`manifest.json` 复制到你的 vault 文件夹 `VaultFolder/.obsidian/plugins/your-plugin-id/` 中。



