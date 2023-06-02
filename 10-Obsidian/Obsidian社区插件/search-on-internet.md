---
uid: 20230514014646
title: Obsidian 插件：Search on Internet 快速在搜索引擎中搜索笔记内容
tags: [Obsidian, 插件, Search on Internet, 搜索]
description: Obsidian 插件：Search on Internet 快速在搜索引擎中搜索笔记内容
author: Bon,山鸡
type: other
draft: false
editable: false
modified: 20230603014421
---

# Obsidian 插件：Search on Internet 快速在搜索引擎中搜索笔记内容

## 概述

Search on internet 利用 Obsidian 强大的 iframe 支持，实现了右键搜索网络的功能，当你设置了

> [!Note] 插件名片
> - 插件名称：Search on Internet
> - 插件作者：Emile
> - 插件说明：在文档任意地方生成需要随机的内容，这些随机的候选项可以你来定义。
> - 插件项目地址：[点我跳转](<https://github.com/HEmile/obsidian-search-on-internet>

## 效果&特性

![image.png](https://cdn.pkmer.cn/images/20230514015136.png!pkmer)

## 使用

- 该插件使用非常简单。
- 在文本中划词（按住左键划选），然后右键，在弹出的窗口中（如上图）选择你要检索的引擎。

最后，在右侧会弹出一个窗口，显示所查询信息的含义。

### 设置

- Open in iframe：默认打开，在 Obsidian 内打开搜索结果。如果关闭，Obsidian 就会调用你默认的浏览器打开检索结果。调用浏览器的行为可能还会被一些软件认为是敏感操作，而被阻止。
- Add Search：添加一个新的搜索引擎。
	- Name：识别符，随意填写，显示在右键菜单中 。
	- URL：最关键的参数，之后进行说明。
	- Tags：默认为空，个人建议为空。刚更新插件后出现的字段，目前不清楚有何用处。

### URL 的设置

URL 中 `{{title}}` 代表我们划词的内容。

插件内置的谷歌和维基百科的搜索方式，如果需要添加一些适合我们的搜索引擎。

例如：

- 百度：`https://www.baidu.com/s?ie=UTF-8&wd={{title}}`
- 知网随问：`https://qa.cnki.net/web/query?q={{title}}`
- 有道词典发音：`https://dict.youdao.com/dictvoice?audio={{title}}`

> [!Tip] 推荐阅读
> - [[fuzzy-chinese-pinyin]]：基于汉语拼音进行模糊搜索
> - [[search-obsidian-in-google]]：让你在谷歌搜索中搜索 Obsidian 中的笔记