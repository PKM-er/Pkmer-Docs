---
uid: 2023102611085044
title: Obsidian 插件：【Readme】Vocabulary Cards
tags: ['obsidian插件', 'readme']
description: 将词汇单词以闪卡和列表的形式展示的简便方法。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】Vocabulary Cards

> [!Note] 插件名片
> - 插件名称：Vocabulary Cards
> - 插件作者：Eugene Myazin
> - 插件说明：将词汇单词以闪卡和列表的形式展示的简便方法。
> - 插件分类：['obsidian插件', 'readme']
> - 项目地址：[点我访问](https://github.com/meniam/obsidian-vocabulary-cards)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?vocabulary-cards)

## 概述

将词汇单词以闪卡和列表的形式展示的简便方法。



> [!tip] 原文出处
> 
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/meniam/obsidian-vocabulary-cards/main/README.md)
> 

---

## Readme(翻译）

下面是 [[vocabulary-cards]] 插件的自述翻译


Obsidian词汇卡插件是一款以易学习的格式显示单词及其含义的插件。
### 用法

块格式必须与YAML兼容。

*使用简单格式创建块：*

```
    ```voca-table
    word: explanation
    word2: <transcription2> explanation2
    word3: <transcription3> explanation3

    ```
```

*扩展格式：*

```
    ```voca-table
    
    - 
        word: Your word
        transcription: Your transcription
        explanation: Your explanation
    - 
        word: Another word
        transcription: Another transcription
        explanation: Another  explanation

    ```
```

**闪卡的相同格式：**

```
    ```voca-card
    word: explanation
    word2: <transcription2> explanation2
    word3: <transcription3> explanation3

    ```
```
### 区块类型
有两种可用的区块类型：
- **voca-card**：以卡片形式预览单词。每次随机选择一个单词。
- **voca-table**：以列表形式预览单词。显示所有单词。
### 统计信息

插件文件夹中有一个名为 `data.json` 的文件。
该文件包含有关正确答案的统计信息。要重置统计信息，请删除该文件。
### 例子
例如：

```
    ```voca-card
    
    eat: <iːt> comer  
    sleep: <sliːp> dormir
    code: <kəʊd> para codificar
    repeat: <rɪˈpiːt> repetir
    
    ```
```
将显示为：

![example](./doc/card.jpg)

```
    ```voca-table
    
    eat: <iːt> comer  
    sleep: <sliːp> dormir
    code: <kəʊd> para codificar
    repeat: <rɪˈpiːt> repetir
    
    ```
```
将显示为：

![example](./doc/table.jpg)
### 手动安装插件
- 禁用 Obsidian 安全模式。
- 将 `main.js`、`styles.css`、`manifest.json` 复制到你的 vault 文件夹 `VaultFolder/.obsidian/plugins/obsidian-vocabulary-cards/` 中。



