---
uid: 2023102611081158
title: Obsidian 插件：【Readme】moviegrabber
tags: ['obsidian插件', 'readme']
description: 从公共API中获取电影数据，并将其转换为可以与dataview和属性一起使用的注释。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】moviegrabber

> [!Note] 插件名片
> - 插件名称：moviegrabber
> - 插件作者：Leon Holtmeier
> - 插件说明：从公共API中获取电影数据，并将其转换为可以与dataview和属性一起使用的注释。
> - 插件分类：['obsidian插件', 'readme']
> - 项目地址：[点我访问](https://github.com/Superschnizel/Obsidian-Moviegrabber)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?moviegrabber)

## 概述

从公共API中获取电影数据，并将其转换为可以与dataview和属性一起使用的注释。



> [!tip] 原文出处
> 
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/Superschnizel/Obsidian-Moviegrabber/master/README.md)
> 

---

## Readme(翻译）

下面是 [[moviegrabber]] 插件的自述翻译


# Obsidian电影抓取器

这是一个插件，用于生成可以与[dataview](https://github.com/blacksmithgu/obsidian-dataview)一起使用的电影笔记。它使用[Open Movie Database (OMDb) API](http://www.omdbapi.com/)来获取电影数据，并使用[Youtube Data API](https://developers.google.com/youtube/v3/docs?hl=de)获取预告片的嵌入链接。

<img src="https://github.com/Superschnizel/Obsidian-Moviegrabber/assets/47162464/3df2496a-ad9c-46ec-a806-b048100e7d70" width=50%>
# 用法

https://github.com/Superschnizel/Obsidian-Moviegrabber/assets/47162464/28e2ca9d-e504-4923-9609-dc1e5953d219

*(免责声明：在预览中，选择的电影海报使用了外部资源，在对 OMDb 的搜索请求中检索到)*

要使用此插件，您需要在此处为 OMDb 创建一个 API 密钥[链接](http://www.omdbapi.com/apikey.aspx)，并按照[链接](https://developers.google.com/youtube/v3/docs#calling-the-api)中的说明创建一个 Youtube Data API 密钥，并在插件设置中设置这些密钥。

要搜索电影，只需调用命令 `Search movie`
使用Dataview表格与自定义CSS代码片段结合，您可以使用这些笔记为电影创建一个交互式显示。

https://github.com/Superschnizel/Obsidian-Moviegrabber/assets/47162464/fc555eea-0ae4-46b4-87d2-44cc2626d387

要使用此功能，请将`aditional_css/CardViewMovies.css`复制到您的存储库片段文件夹（`.obsidian/snippets/`），并在笔记顶部添加以下内容：

```yaml
---
cssclass: CardViewMovies
---
```

未看过的电影的dataview查询可能如下所示：

````dataview
```dataview
TABLE country, year, length, trailer_embed, availability, rating, seen
FROM "Movies" WHERE type = "movie" AND seen = Null
```
````

请注意，卡片至少需要在查询中包含`country, year, length, trailer_embed`才能显示卡片。
免责声明

目前生成的属性并没有充分利用OMDb提供的所有可用数据，并且设置得最适合我的个人使用情况。如果对这个插件和使用其他数据感兴趣，请告诉我。



