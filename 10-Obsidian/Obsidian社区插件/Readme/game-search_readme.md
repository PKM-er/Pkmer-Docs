---
uid: 20230803212444
title: Obsidian 插件：【Readme】Game Search
tags: ['obsidian插件', 'readme']
description: 帮助将游戏元数据插入游戏笔记或日志中
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Game Search

> [!Note] 插件名片
> - 插件名称：Game Search
> - 插件作者：calvin
> - 插件说明：帮助将游戏元数据插入游戏笔记或日志中
> - 插件分类：['obsidian插件', 'readme']
> - 项目地址：[点我访问](https://github.com/CMorooney/obsidian-game-search-plugin)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?game-search)

## 概述

帮助将游戏元数据插入游戏笔记或日志中



> [!tip] 原文出处
> 
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/CMorooney/obsidian-game-search-plugin/master/README.md)
> 

---

## Readme(翻译）

下面是 [[game-search]] 插件的自述翻译



# Obsidian 游戏搜索插件

forked from

https://github.com/anpigon/obsidian-book-search-plugin/

## 描述

用于查询游戏的使用方法：

- 游戏标题

使用RAWG Game API获取游戏信息。

<br>

## 安装方法

点击链接安装Game Search插件：[安装链接](https://github.com/CMorooney/obsidian-game-search-plugin)

或者，在Obsidian社区插件中搜索并安装它。

如何使用

### 1. 点击功能区图标，或执行“创建新游戏笔记”的命令。

### 2. 通过关键词搜索游戏。

### 3. 从搜索结果中选择游戏。

### 4. 哇！一个便签已经被创建了。

如何使用设置

### 新文件位置

设置新文件创建的文件夹位置。否则，新文件将在Obsidian根文件夹中创建。

### 新文件名

您可以设置文件名的格式。默认格式为 `{{name}} - {{published}}`。
您可以使用 `{{DATE}}` 或 `{{DATE:YYYYMMDD}}` 来设置一个唯一的文件名。

### 模板文件

您可以设置模板文件的位置。底部有一个示例模板。

## 示例模板

请在下面找到此模板中使用的变量的定义（参见：[模板变量定义](#template-variables-definitions)）。
注意：数组属性将以逗号分隔的字符串形式输出

```markdown
---
tag: 游戏 🎮
genres: {{genres}}
platforms: {{platforms}}
release_date: {{released}}
background_image: {{background_image}}
---

![{{name}}]({{background_image}})

类型：{{genres}}
发布日期：{{released}}
发行商：{{publishers}}
开发商：{{developers}}
```

## 模板变量定义

请在此处找到可在您的模板中使用的变量定义。只需在模板中写入`{{name}}`，然后将name替换为所需的书籍数据，包括：

| name                 | 描述                                             |
| ---------------------|---------------------------------------------------------|
| id                   | (数字) RAWG数据库ID                               |
| slug                 | (字符串) RAWG游戏slug                                 |
| name                 | (字符串) 游戏名称                               |
| name_original        | (字符串) 游戏的原始名称                      |
| description          | (字符串) 游戏的描述，html格式           |
| description_raw      | (字符串) 游戏的描述，原始文本              |
| released             | (字符串) 游戏的发布日期                       |
| tba                  | (布尔值) 未知发布日期标志                     |
| background_image     | (字符串) 背景图片URL                           |
| rating               | ([评分](#rating_object))                              |
| rating_top           | (数字), 最高评分                                |
| ratings              | (数组) [评分](#rating_object)                    |
| ratings_count        | (数字) 评分数量                                     |
| reviews_text_count   | (字符串) 文本评论数量                         |
| metacritic           | (数字) Metacritic评分                               |
| metacritic_platforms | (数组) [Metacritic平台](#metacritic_platform_object)) |
| playtime             | (数字) 预计游戏时间（小时）                    |
| updated              | (字符串) RAWG数据库中的最后更新日期             |
| esrb_rating          | ([ESRB](#esrb_object)) ESRB评级                      |
| platforms            | (数组) [平台](#platform_object)                |
| stores               | (数组) [商店](#store_object)                      |
| score                | (数字)                                                |
| tags                 | (数组) [标签](#tag_object)                          |
| saturated_color      | (字符串) 十六进制颜色（不包括`#`）                        |
| dominant_color       | (字符串) 十六进制颜色（不包括`#`）                        |
| genres               | (数组) [类型](#genre-object)                      |
| short_screenshots    | (数组) [截图](#screenshot-object)            |
| website              | (字符串) 游戏网站的URL（如果存在）              |
| publihers            | (数组) [发行商](#publisher-object)              |
| developers           | (数组) [开发商](#developer-object)              |

### 开发者对象
`{ id: 数字, name: 字符串, slug: 字符串, games_count: 数字, image_background: 字符串 }`

### 发布商对象
`{ id: 数字, name: 字符串, slug: 字符串, games_count: 数字, image_background: 字符串 }`

### Metacritic 平台对象
`{ metscore: 数字, url: 字符串, platform: [平台对象](#platform_object) }`

### 评分对象
`{ id: 数字, title: 字符串, count: 数字, percent: 数字 }`

### ESRB对象
`{ id: 数字, name: 字符串, slug: 字符串, name_en: 字符串, name_ru: 字符串 }`

### 平台对象
`{ platform: { id: number, name: string, slug: string } }`

### 存储对象
`{ id: number, name: string, slug: string }`

### 标签对象
`{ id: 数字, name: 字符串, slug: 字符串, language: 字符串, games_count: 数字, image_background: 字符串 }`

### 类型对象
`{ id: number, name: string, slug: string }`

### 屏幕截图对象
`{ id: 数字, name: 字符串, slug: 字符串 }`



