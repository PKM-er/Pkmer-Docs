---
uid: 2023080322164348
title: Obsidian 插件：Crossbow
tags: ['obsidian插件', 'readme']
description: 在您的笔记中查找反向链接
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Crossbow

> [!Note] 插件名片
> - 插件名称：Crossbow
> - 插件作者：shoedler
> - 插件说明：在您的笔记中查找反向链接
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/shoedler/crossbow)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?crossbow)

## 概述

在您的笔记中查找反向链接

![Crossbow](https://cdn.pkmer.cn/covers/crossbow.png!pkmer)

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/shoedler/crossbow/master/README.md)

---

## Readme(翻译）

下面是 [[crossbow]] 插件的自述翻译

# 🏹 十字弓

![image](https://user-images.githubusercontent.com/38029550/229279990-f10723bc-380e-4e29-b4f2-47f9b8a5beb9.png)

Crossbow 是 [Obsidian](https://obsidian.md) 的一个插件。

通过这个插件，可以为标题、标签和文件提供方便的链接建议，帮助您轻松地编织一个相互连接的笔记网络，提升您的笔记图谱的能力。

如何使用

只需点击丝带上的弩标志，即可打开弩侧边栏。所有建议将显示在侧边栏中。

应用建议

在侧边栏中点击建议会显示当前笔记中该单词的出现列表。

点击其中一个出现的位置将滚动到该位置，并显示一个匹配的缓存项列表，您可以链接到这些匹配项。这些匹配项是根据匹配的质量进行排名的。

您可以通过点击匹配项旁边的适当图标来应用匹配项：

![image](https://user-images.githubusercontent.com/38029550/236627426-d4d44d7d-f8e4-4d0d-b291-9ec6aa281ee6.png)

这将插入以下链接：

![image](https://user-images.githubusercontent.com/38029550/229280048-fe7a8e31-8cbf-4090-a7f0-4bf0b83814d7.png)

> 在 Obsidian 中，链接中的管道符（`|`）表示链接的“显示文本”。这意味着管道符后面的文本将显示为链接的文本，而不是链接本身。

### 暂时禁用建议

您可以通过右键单击弓箭视图的弓箭图标并选择“关闭”来暂时禁用建议。这将关闭侧边栏并禁用建议。要重新启用建议，只需再次在功能区中单击弓箭图标。

## 在引擎盖下

### 什么是建议？

建议是您活动编辑器（当前笔记）中的一个词，可以链接到您的存储库中的**标题**、**标签**或**文件**：

```mermaid
mindmap
  root((建议))
    当前笔记中的词
    Obsidian存储库缓存项
      标题
      文件
      标签
```

Crossbow 利用 Obsidian 的内部缓存，不会手动解析您的存储库。

为了在当前笔记中找到匹配项，它会将活动编辑器的内容剥离任何 Markdown 语法，然后在剥离后的内容中搜索建议。

关于匹配建议的说明

Crossbow 在创建建议时具有自己的观点，但也可以进行配置。从 1.1.1 版本开始，过滤的过程如下：

首先，它收集活动编辑器（当前笔记）中的所有单词和存储库中的所有缓存项（通过它们的缓存键进行标识）。

然后，它按照每个单词和缓存键的简单过程创建建议：

```mermaid
graph TD
    START((开始))
    Q_ACT_EDITOR["1. <b>缓存键</b>是否来自活动编辑器？<br>可配置，参见设置<i>对同一文件中的项目进行建议</i>"]
    Q_EXCT_MATCH["2. <b>单词</b>和<b>缓存键</b>是否完全匹配（区分大小写）？"]
    Q_WORD_SHORT["3. <b>单词</b>是否太短？（当前固定为3个字符）"]
    Q_CKEY_SHORT["4. <b>缓存键</b>是否太短？<br>可配置，参见设置<i>建议的最小单词长度</i>"]
    Q_IS_SUBSTRG["5. <b>单词</b>是<b>缓存键</b>的子字符串或反之亦然？"]
    Q_WORD_UCASE["6. <b>单词</b>是否以大写字母开头？<br>可配置，参见设置<i>忽略以小写字母开头的出现</i>"]
    Q_CKEY_UCASE["7. <b>缓存键</b>是否以大写字母开头？<br>可配置，参见设置<i>忽略以小写字母开头的建议</i>"]
    Q_MATCH_INSV["8. <b>单词</b>和<b>缓存键</b>是否完全匹配（不区分大小写）？"]
    Q_LEN_SIMILR["9. <b>单词</b>和<b>缓存键</b>的长度相似度是否低于20%？"]

    STOP((结束))

    SUCCESS_1["添加为非常好的建议（🏆）"]
    SUCCESS_2["添加为好的建议（🥇）"]
    SUCCESS_3["添加为一般的建议（🥈）"]
    SUCCESS_4["添加为“不太好”的建议（🥉）"]


    START --> Q_ACT_EDITOR

    Q_ACT_EDITOR -- 是 --> STOP
    Q_ACT_EDITOR -- 否 --> Q_EXCT_MATCH

    Q_EXCT_MATCH -- 是 --> SUCCESS_1 --> STOP
    Q_EXCT_MATCH -- 否 --> Q_WORD_SHORT

    Q_WORD_SHORT -- 是 --> STOP
    Q_WORD_SHORT -- 否 --> Q_CKEY_SHORT

    Q_CKEY_SHORT -- 是 --> STOP
    Q_CKEY_SHORT -- 否 --> Q_IS_SUBSTRG

    Q_IS_SUBSTRG -- 是 --> STOP
    Q_IS_SUBSTRG -- 否 --> Q_WORD_UCASE

    Q_WORD_UCASE -- 是 --> STOP
    Q_WORD_UCASE -- 否 --> Q_CKEY_UCASE

    Q_CKEY_UCASE -- 是 --> STOP
    Q_CKEY_UCASE -- 否 --> Q_MATCH_INSV

    Q_MATCH_INSV -- 是 --> SUCCESS_2 --> STOP
    Q_MATCH_INSV -- 否 --> Q_LEN_SIMILR
    Q_LEN_SIMILR -- 是 --> SUCCESS_4 --> STOP
    Q_LEN_SIMILR -- 否 --> SUCCESS_3 --> STOP
```

然后，移除与忽略的单词匹配的建议：

```mermaid
graph TD
    START((开始))
    FE["对于每个结果"]
    Q_WORD_IGNOR["如果<b>单词</b>在忽略列表中，则移除（区分大小写）<br>可配置，参见设置<i>忽略的单词</i>"]
    STOP((结束))

    START --> FE
    FE --> Q_WORD_IGNOR
    Q_WORD_IGNOR --> FE
    Q_WORD_IGNOR --> STOP
```

请记住，这些步骤是按顺序处理的。例如，看一下第 9 步中的长度过滤器。此时，单词和缓存键已经是彼此的子字符串（第 5 步），这意味着此步骤会添加类似 "donut" 和 "donut hole punching machine manual" 的内容。而不是一般差异很大的内容，这会产生很多误报。

## 手动安装方法

1. 克隆这个仓库。
2. 运行 `npm i` 或 `yarn` 安装依赖。
3. 运行 `npm run build` 构建 Crossbow。
4. 将 `main.js`、`styles.css` 和 `manifest.json` 复制到你的 Vault 的 `.obsidian/plugins/` 文件夹中的一个名为 `crossbow` 的文件夹中。

<hr/>
如果你喜欢这个插件，请考虑：
<br/>
<br/>




