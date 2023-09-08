---
uid: 20230731231300
title: Obsidian 插件：Zotero Integration
tags:
  - obsidian插件
  - zotero
  - 文献引用
description: Obsidian 插件：Zotero Integration
author: 路子十一,OS
type: basic
draft: false
editable: false
modified: 20230907161045
---

# Obsidian 插件：Zotero Integration

## 概述

从 Zotero 插入和导入引文、参考书目、注释和 PDF 注释到 Obsidian。需要 Better BibTeX 为 Zotero 插件。

> [!Note] 插件名片
> - 插件名称：Zotero Integration
> - 插件版本：3.0.9
> - 插件作者：mgmeyers
> - 插件描述：从 Zotero 插入和导入引文、参考书目、注释和 PDF 注释到 Obsidian。需要 Better BibTeX 为 Zotero 插件。
> - 插件项目地址：[点我跳转](https://github.com/mgmeyers/obsidian-zotero-integration)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsidian-zotero-desktop-connector)

实战联动指南参考 [[Zotero和Obsidian联动]]

## 效果&特性

- 安装于 Obsidian，配合 Better BibTeX for Zotero 使用
- 实现效果
	- 提取条目信息
	- 提取 PDF 注释内容（包括图片）
	- 在 Markdown 笔记内保留跳转至 PDF 的链接
	- 丰富的格式设置
	- 提取 Note
	- 保留原有的编辑内容
	- 同时导入多条文献

## 使用

### 插件设置

1. 下载 PDFutility
2. 设置导入路径
3. 添加输入模板
4. 设置模板

![Obsidian 插件：Zotero Integration|600](https://cdn.pkmer.cn/images/20230907160159.png!pkmer)

### 模板设置

- 使用的模板语言为 Nunjucks，需要一定的学习成本
- 如何找到可以获取的数据信息？

![Obsidian 插件：Zotero Integration](https://cdn.pkmer.cn/images/20230907160240.png!pkmer)

### 条目信息

- 普通内容占位符{{……}}
- 针对该占位符包含多个独立内容，使用 `loop.last` 提取完整信息

```
{% for t in creators %}{{t.firstName}}{{t.lastName}}{{t.name}}{% if not loop.last %}, {% endif %}{% endfor %}
```

- 对于日期，默认导入形式为时间戳，需要使用 `format()` 进行转换

```
 {% if date %}{{date | format("YYYY-MM")}}{% endif %}
```

### 提取 PDF 注释

![Obsidian 插件：Zotero Integrationg|500](https://cdn.pkmer.cn/images/20230907160759.png!pkmer)

- 在 `Annotation` 内可找到每条注释的相关信息
- 基本语法

```
{% for annotation in annotations %}...do something...{% endfor %}
```

- 可以在 `for` 循环内添加 `if……endif` 语句进行判断，从而对不同格式的注释进行设置

```
{% for annotation in annotations %}
{% if annotation.color == '#a28ae5' %}## {{annotation.annotatedText}}{{annotation.comment}}{% endif %}
{% endfor %}
```

- 提取图片

```
{% for annotation in annotations %}
{% if annotation.color == '#a28ae5' %}## {{annotation.annotatedText}}{{annotation.comment}}{% endif %}
{% if annotation.imageBaseName %}![[{{annotation.imageBaseName}}]]{% endif %}
{% endfor %}
```

### 添加跳转链接

- 由于 `data exploer` 内没有跳转链接的信息，我们需要通过不同的数据来生成我们需要的链接
zotero 自带的导出 markdown 笔记会包含跳转链接，我们以此观察跳转链接的组成形式为 `[文本](zotero://open-pdf/library/items/附件编号?页码&注释编号)`

![Obsidian 插件：Zotero Integration](https://cdn.pkmer.cn/images/20230907160816.png!pkmer)

- 所以我们可以在数据中找到拥有类似信息的内容加以删减、组合

```
{% for annotation in annotations %}
{% if annotation.color == '#a28ae5' %}## {{annotation.annotatedText}}{{annotation.comment}}{% endif %}
{{pdfZoteroLink|replace("//select/", "//open-pdf/")|replace(")", "")}}?page={{annotation.page}}&annotation={{annotation.id}})
{% endfor %}
```

- 或者采用（需 attachments 占位符内的第一个附件为注释的 PDF）：

```
{% for annotation in annotations %}
{% if annotation.color == '#a28ae5' %}## {{annotation.annotatedText}}{{annotation.comment}}{% endif %}
[随便写啥](zotero://open-pdf/library/items/{% for t in attachments %}{% if loop.first %}{{t.itemKey}}{% endif %}{% endfor %}?{{annotation.page}}&annotation={{annotation.id}})
{% endfor %}
```

### 模板的拆分与组装

- 你可以选择将条目信息与注释的模板进行拆分、排列组合，进一步拓展插件的使用情境

```
{% include "[[模板文件名]]" %}
```

- 通过 `persist` 可以实现分节的效果，使得多次导入同一条目时之前的信息不会被覆盖

```
## {{title}}

### Notes
{% persist "notes" %}
{% endpersist %}
```

- 也可以通过过滤器 `filterby` 仅导入自上次导入以来添加的批注

```
{% persist "annotations" %}
{% set newAnnotations = annotations | filterby("date", "dateafter", lastImportDate) %}
{% if newAnnotations.length > 0 %}

### Imported: {{importDate | format("YYYY-MM-DD h:mm a")}}

{% for a in newAnnotations %}
> {{a.annotatedText}}
{% endfor %}

{% endif %}
{% endpersist %}
```

### 导入笔记

- 打开命令面板，选择不同的导入形式

![Obsidian 插件：Zotero Integration|625](https://cdn.pkmer.cn/images/20230907161013.png!pkmer)

![Obsidian 插件：Zotero Integration|625](https://cdn.pkmer.cn/images/20230907161018.png!pkmer)

- 也可以为某种导入方式设置快捷键
- 可同时导入多条文献

## 最后

Nunjucks 模板语言非常的丰富，并且内置了非常的过滤器，只要你想你几乎可以实现所有想要的效果

但是每种工具都需要你耗费一定的时间或精力，需要你做出权衡。不论是哪种工具，需要明白的是使用这种工具的最终目的还是在于科研。