---
uid: 2024022122523515
title: Obsidian 插件：【Readme】TV tracker
tags: ['obsidian插件', 'readme']
description: 一部电影和电视节目追踪器。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】TV tracker

> [!Note] 插件名片
> - 插件名称：TV tracker
> - 插件作者：Shreshth Mehra
> - 插件说明：一部电影和电视节目追踪器。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/Shreshth-mehra/Obsidian-TV-Tracker)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?tv-tracker)

## 概述

一部电影和电视节目追踪器。

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/Shreshth-mehra/Obsidian-TV-Tracker/main/README.md)
>

---

## Readme(翻译）

下面是 [[tv-tracker]] 插件的自述翻译

【机翻】

# Obsidian-TV-Tracker

Obsidian 的电影和电视节目跟踪插件

# 描述

一个简单的电影和电视节目库，用于跟踪喜爱的电影和节目。每部电影和电视节目都保存为您选择的文件夹中的一个 markdown 文件。每个文件都有 YAML 内容，用于显示、过滤和排序内容。该产品使用了 TMDB API，但并未得到 TMDB 的认可或认证。TMDB API 适用于个人使用，商业使用需要许可证。要能够添加新的电影和电视节目，您需要从 TMDB 获取个人 API 密钥。只需在 <https://www.themoviedb.org/signup> 创建一个帐户并获取 API 密钥。然后您需要在此插件的设置中输入您的 API 密钥。

可以根据请求提供一个电影和电视节目的模板库，以便与插件一起使用。

# 用法

该插件可以通过一个名为“Star”的 Ribbon 图标访问。单击后，将打开一个名为“TV Tracker”的新视图，其中包含在设置中指定路径中找到的所有电影和节目的网格。标题显示多个选项，以对显示的内容进行排序和过滤。请注意，如果搜索结果为 0，则会显示所有标题。在移动应用程序中，标题会隐藏在弹出窗口中。

## 添加新标题

通过标题栏中的“添加新”按钮是添加新标题的最简单方式。您将被提示输入 4 个细节

1. 名称 - 用于搜索 TMDB API
2. 评分 - 您对标题的评分，为 0-5 之间的整数
3. 状态 - 对于观看列表，请输入“Watchlist”，否则它将不会显示在观看列表中。对于所有其他内容，您可以将状态输入为任何您喜欢的内容。我通常选择从 Watched（用于电影），Complete，Incomplete，In Progress（用于电视节目）中选择
4. 类型 - 请选择电影或系列

如果您希望从 csv 批量添加标题，我可以提供我自己使用的 Python 脚本

## 指标

电影指标显示您的库中的热门流派、演员、导演和总观看时间。每个类别的热门指标有 4 个选择。总观看时间仅显示电影的观看时间，不包括系列。

1. 计数 - 基于您的库中该类别的标题数量
2. 简单评分 - 基于每个类别的评分总和。例如，在评估热门演员时，桑德拉·布洛克的得分将被计算为她在您的库中每部电影和节目的评分总和
3. 平衡评分 - 类似于简单评分，但如果演员是某部作品的 4 名主要演员之一，则会获得更多分数。对于热门流派和导演，工作方式与简单评分相同
4. 平均评分 - 如果某人/流派拥有最少数量的标题，则为该人/流派的平均评分（此数字可以从设置中更改）

## 设置

有 13 个可配置的设置。最重要的两个是 TMDB API 密钥和文件夹路径。文件夹路径是相对于您的奥斯迪安保险库的根目录（.obsidian 文件夹所在的位置）。因此，如果内容位于名为 Movies 的文件夹中，该文件夹位于根目录中，则路径将简单地为 'Movies'。

# 要注意的关键事项

1. 在将电影添加到观看列表时，请将评分输入为 1 或更高，否则电影将不会显示。
2. 添加标题后，必须重新加载电视跟踪器才能显示标题。
3. 如果电影的名称中有特殊字符，如 '!'，':'，'?' 或 '&'。请在通过“添加新”创建后从 markdown 文件名中删除特殊字符。
4. 如果搜索没有结果显示，则所有标题将被显示，但显示的结果将为 0。
5. 如果整个库很大，并且缓存最近已清除或尚不存在，则可能会显示不正确的海报路径一段时间。在这一点上请耐心等待，因为它最终会自行解决。
6. 如果您在保险库中从浅色主题更改为深色主题，或者反之。请关闭插件，然后再次打开，以便必要的更改生效。

# 截图

![概览](https://cdn.pkmer.cn/covers/tv-tracker_2_0.png!pkmer)

![概览_2](https://cdn.pkmer.cn/covers/tv-tracker_2_1.png!pkmer)

![指标](https://cdn.pkmer.cn/covers/tv-tracker_2_2.png!pkmer)

![添加新内容](https://cdn.pkmer.cn/covers/tv-tracker_2_3.png!pkmer)

![添加新选项](https://cdn.pkmer.cn/covers/tv-tracker_2_4.png!pkmer)

# 归属

该产品使用 TMDB API，但并非由 TMDB 认可或认证。您将需要获取自己的个人 TMDB API 来使用此插件。TMDB API 用于获取有关每个标题的所有必要详细信息，包括但不限于官方标题、海报、演员阵容、类型、平均评分、流行度等。

![TMDB_Logo](https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg)
