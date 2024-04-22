---
uid: 2024042221333783
title: Obsidian 插件：【Readme】Kinopoisk search
tags: ['obsidian插件', 'readme']
description: 帮助您通过Kinopoisk找到电影和电视节目，并创建笔记。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】Kinopoisk search

> [!Note] 插件名片
> - 插件名称：Kinopoisk search
> - 插件作者：Alintor
> - 插件说明：帮助您通过 Kinopoisk 找到电影和电视节目，并创建笔记。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/Alintor/obsidian-kinopoisk-plugin)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?unofficial-kinopoisk)

## 概述

帮助您通过 Kinopoisk 找到电影和电视节目，并创建笔记。

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/Alintor/obsidian-kinopoisk-plugin/master/README.md)

---

## Readme(翻译）

下面是 [[unofficial-kinopoisk]] 插件的自述翻译

# 黑曜石 Kinopoisk 插件

通过 Kinopoisk 轻松搜索电影和电视节目信息，并创建笔记。

## 描述

在 Kinopoisk 中搜索电影和电视节目信息

使用 Kinopoisk.dev API 获取信息。

## 如何安装

点击链接安装 Kinopoisk 搜索插件：[安装链接](https://obsidian.md/plugins?id=unofficial-kinopoisk)

或者，在 Obsidian 社区插件中搜索并安装它。

## 如何使用

### 1. 点击丝带图标，或执行命令“在 Kinopoisk 中搜索”

<img width="600" src="https://github.com/Alintor/obsidian-kinopoisk-plugin/blob/master/Assets/search_command.png">

### 2. 通过关键词搜索电影或电视剧

<img width="600" src="https://github.com/Alintor/obsidian-kinopoisk-plugin/blob/master/Assets/search_quary.png">

### 3. 从搜索结果中选择项目

<img width="600" src="https://github.com/Alintor/obsidian-kinopoisk-plugin/blob/master/Assets/result_list.png">

### 4. Voila! 笔记已创建

<img width="600" src="https://github.com/Alintor/obsidian-kinopoisk-plugin/blob/master/Assets/result_note.png">

## 在设置中配置插件

<img width="700" src="https://github.com/Alintor/obsidian-kinopoisk-plugin/blob/master/Assets/settings.png">

### 获取 API 令牌

您需要获取 API 令牌才能使用此插件。请访问 [链接](https://kinopoisk.dev/)，选择免费计划并按照步骤操作。

### 新文件名

您可以设置文件名格式。默认格式为 `{{name}} ({{year}})`。

### 新文件位置

设置新文件创建的文件夹位置。否则，新文件将在 Obsidian 根文件夹中创建。

### 模板文件

您可以设置模板文件的位置。底部有一个示例模板。

## 示例模板

请在下面找到此模板中使用的变量的定义（参见：[模板变量定义](#template-variables-definitions)）。

```
---
Каталог: "[[Фильмы]]"
Название: "{{name}}"
Год: {{year}}
Страна: "{{countries}}"
Жанр: [{{genres}}]
Режиссер: "[[{{director}}]]"
Продолжительность: {{movieLength}}
Статус: В бэклоге
Оценка:
Дата просмотра:
coverUrl: {{posterUrl}}
aliases:
  - "{{name}}"
  - "{{alternativeName}}"
tags:
  - фильм
---

![|300]({{posterUrl}})
```

# 描述

{{description}}

# 链接

- {{kinopoiskUrl}}

## 模板变量定义

请在这里找到模板中可能使用的变量定义。在您的模板中简单地写入 `{{name}}`，并将名称替换为所需的数据，包括：

| 名称                | 描述                                                    |
| ------------------- | -------------------------------------------------------------- |
| name                | 电影/电视节目的标题。                                |
| year                | 电影/电视节目制作年份                           |
| countries           | 参与该电影/电视节目制作的国家 |
| genres              | 电影/电视节目的类型                                   |
| director            | 电影导演的姓名。                                |
| movieLength         | 电影的长度（分钟）                             |
| posterUrl           | 电影/电视节目海报图片的 URL。                                |
| alternativeName     | 电影/电视节目的替代名称                      |
| description         | 电影/电视节目描述。                                     |
| kinopoiskUrl        | 在 Kinopoisk 上的电影/电视节目页面的 URL                     |
| seasonsCount        | 电视节目的季节数                                |
| seriesInSeasonCount | 电视节目季度中平均每集的数量                |
| seriesLength        | 电视节目每集的平均长度（分钟）           |
| isComplete          | 电视节目是否已完结（可以是 true 或 false）                |

如果您希望国家和类型不仅仅是字符串，而是项目列表，您需要将其放在属性（YAML）中，如下所示：`[{{genres}}]`

## 许可证

[Obsidian Kinopoisk Plugin](https://github.com/Alintor/obsidian-kinopoisk-plugin) 在 GNU AGPLv3 许可下发布。有关更多信息，请参阅 [LICENSE](https://github.com/Alintor/obsidian-kinopoisk-plugin/blob/master/LICENSE.TXT)。
