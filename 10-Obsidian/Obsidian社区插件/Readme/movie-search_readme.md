---
uid: 20240312193744
title: Obsidian 插件：【Readme】Movie Search
tags: ['obsidian插件', 'readme']
description: 帮助您找到电影并创建笔记。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】Movie Search

> [!Note] 插件名片
> - 插件名称：Movie Search
> - 插件作者：Gubchik123
> - 插件说明：帮助您找到电影并创建笔记。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/Gubchik123/obsidian-movie-search-plugin)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?movie-search)

## 概述

帮助您找到电影并创建笔记。

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/Gubchik123/obsidian-movie-search-plugin/master/README.md)

---

## Readme(翻译）

下面是 [[movie-search]] 插件的自述翻译

【机翻】

![标题图片](https://cdn.pkmer.cn/covers/movie-search_2_0.png!pkmer)

_轻松创建电影笔记。_

![GitHub发布](https://img.shields.io/github/v/release/Gubchik123/obsidian-movie-search-plugin?sort=semver)

[![GitHub页面](https://github.com/Gubchik123/obsidian-movie-search-plugin/actions/workflows/pages/pages-build-deployment/badge.svg)](https://github.com/Gubchik123/obsidian-movie-search-plugin/actions/workflows/pages/pages-build-deployment)

<br>

## 特点

- 流程:
    - 创建一个新的电影笔记。
    - 通过关键词搜索电影。
    - 从搜索结果中选择电影。
    - 立即在 Obsidian 笔记中获取电影信息。
- 设置:
    - 设置新文件创建的文件夹位置。
    - 设置模板文件位置。
    - 设置用于搜索电影的服务。
- 第三方插件集成:
    - 使用 [Dataview插件](https://obsidian.md/plugins?id=dataview) 来渲染电影笔记。
    - 使用 [Templater插件](https://github.com/SilentVoid13/Templater)。
- 高级:
    - 为模板启用 [内联脚本](#inline-script)。

## 如何安装

### 来自社区插件

点击链接安装电影搜索插件：[安装链接](https://obsidian.md/plugins?id=movie-search)

**或者**

在 Obsidian 社区插件中搜索并安装它。

<p align="center"><img src="./md_images/install.png" alt="安装图片"/></p>

### 手动（来自 GitHub）

1. 将存储库克隆到 Obsidian 插件文件夹中。

```bash
git clone https://github.com/Gubchik123/obsidian-movie-search-plugin.git
```

1. 安装依赖项。

```bash
yarn install
```

1. 构建插件。

```bash
yarn build
```

1. 重新加载 Obsidian 并在设置中启用插件。

## 如何使用

### 1. 点击丝带图标（星星），或执行命令“创建新的电影笔记”

<p align="center"><img src="./md_images/use/1.png" alt="1 step image"/></p>

### 2. 通过关键词搜索电影

<p align="center"><img src="./md_images/use/2.png" alt="2 step image"/></p>

### 3. 从搜索结果中选择电影

<p align="center"><img src="./md_images/use/3.png" alt="3 step image"/></p>

### 4. 哇！一个笔记已经创建好了

<p align="center"><img src="./md_images/use/4.png" alt="4 step image"/></p>

<br>

## 如何使用设置

<p align="center"><img src="./md_images/settings.png" alt="设置图片"/></p>

### 新文件位置

设置新文件创建的文件夹位置。否则，新文件将在 Obsidian 根文件夹中创建。

### 新文件名格式

设置新文件名的格式。默认为电影的标题。

### 模板文件

您可以设置模板文件的位置。底部有一个示例模板。

### 首选语言环境

设置电影搜索的首选语言环境。默认值为“auto”，这意味着语言环境会根据用户的查询或浏览器设置自动检测。

### 打开新电影注释

启用或禁用创建后打开新电影注释。

### 服务提供商

您可以设置您用来搜索电影的服务。目前只有 TMDB 可用。

#### TMDB API 设置

##### TMDB API 密钥

设置 TMDB 的 API 密钥。

> 您可以从 [TMDB](https://developer.themoviedb.org/login?redirect_uri=/reference/intro/authentication) 获取 API 密钥。

> 🚧 **警告**
>
> API 密钥不是 'Bearer' JSON Web 令牌（JWT）。
包括成人内容

启用或禁用在搜索结果中包含成人内容。

个人我使用以下模板来创建电影笔记 ;)

> 请在下面找到此模板中使用的变量的定义（查看：[模板变量定义](#template-variables-definitions)）。

```markdown
---
created: "{{date:DD.MM.YYYY}} {{time:HH:mm}}"
tags:
    - 娱乐
    - 电影
status: 待观看
cover: "{{poster_path}}"
---
## 📺 -> {{title}}

![封面]({{poster_path}})
Title:: {{标题}}
Release-date:: {{发布日期}}
Vote-average:: {{投票平均值}}
### 2️⃣ -> 摘要

{{概述}}
### 3️⃣ -> 我的结论

...
#### Score:: 0
### 4️⃣ -> 全球信息

Adult:: {{adult}}
Original-title:: {{original_title}}
Original-language:: {{original_language}}
Popularity:: {{popularity}}
### 5️⃣ -> TMDB 信息

ID:: {{id}}
Genre-IDs:: {{genre_ids}}
Vote-count:: {{vote_count}}

![Backdrop]({{backdrop_path}})
```

## 数据视图渲染

<p align="center"><img src="./md_images/dataview.png" alt="数据视图图片"/></p>

这里是演示中使用的数据视图查询

### 已观看电影列表

````
```dataview
TABLE WITHOUT ID
	"![|100](" + cover + ")" as 封面,
	link(file.link, Title) as 标题,
	dateformat(Release-date, "yyyy") as 年份,
	Vote-average as "评分平均",
	Original-title as "原始标题",
	Score + " / 10" as 评分
FROM  "My/Entertainments/Movies" AND #Movie
WHERE status = "WATCHED"
SORT Score DESC, Vote-average DESC, Title ASC
```
````

### 要观看的电影列表

````
```dataview
TABLE WITHOUT ID
	"![|100](" + cover + ")" as 封面,
	link(file.link, Title) as 标题,
	dateformat(Release-date, "yyyy") as 年份,
	Vote-average as "评分",
	Original-title as "原始标题"
FROM  "My/Entertainments/Movies" AND #Movie
WHERE status = "TO WATCH"
SORT Vote-average DESC, Title ASC
```
````

## 模板变量定义

请在这里找到可用于模板中的可能变量的定义。只需在模板中写入 `{{name}}`，然后将名称替换为所需的电影数据，包括：

| name              | type              | description                           |
| ----------------- | ----------------- | ------------------------------------- |
| title             | string            | 电影的标题。                          |
| poster_path       | string            | 电影的封面图片 URL。                   |
| release_date      | string            | 电影发布日期。                        |
| vote_average      | float             | 电影的平均评分。                      |
| overview          | string            | 电影的概述。                          |
| adult             | boolean           | 电影的成人状态。                      |
| original_title    | string            | 电影的原始标题。                      |
| original_language | string            | 电影的原始语言。                      |
| popularity        | float             | 电影的流行度。                        |
| id                | float             | 电影的 TMDB ID。                       |
| media_type        | string            | 可以是 'Movies'、'TV' 或 'Person'。      |
| genre_ids         | array of integers | 电影的流派 ID。                        |
| vote_count        | integer           | 电影的投票数。                        |

## 高级

### 内联脚本

````
```json
<%=movie%>
```
````

或者

````
```json
<%=JSON.stringify(movie, null, 2)%>
```
````

#### 当您想要列出或链接流派 ID 时

```
---
Genre-IDs: <%=movie.genre_ids.map(genre_id=>`\n  - ${genre_id}`).join('')%>
---

Genre-IDs: <%=movie.genre_ids.map(genre_id => `[[Genre/${genre_id}]]`).join(', ')%>
```

## 许可证

[Obsidian电影搜索插件](https://github.com/Gubchik123/obsidian-movie-search-plugin) 在 [MIT许可证](https://github.com/Gubchik123/obsidian-movie-search-plugin/blob/master/LICENSE.md) 下许可。

## 贡献

随时欢迎贡献。

您可以创建一个 [问题](https://github.com/Gubchik123/obsidian-movie-search-plugin/issues/new) 来报告错误，建议改进此插件，提出问题等。

您可以创建一个 [拉取请求](https://github.com/Gubchik123/obsidian-movie-search-plugin/compare) 来为此插件的开发做出贡献。

<br>

## 支持

如果这个插件帮助到了您，并且您希望做出贡献 :)

在 [buymeacoffee.com/Gubchik123](https://www.buymeacoffee.com/Gubchik123) 为我买杯咖啡
