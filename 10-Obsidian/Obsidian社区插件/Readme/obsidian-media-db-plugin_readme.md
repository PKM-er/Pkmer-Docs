---
uid: 2023080322221670
title: Obsidian 插件：【Readme】Media DB Plugin
tags: ['obsidian插件', 'readme']
description: 一个插件，可以查询多个API以获取电影、电视剧、动漫、游戏、音乐发行和维基文章，并将它们导入您的保险库。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Media DB Plugin

> [!Note] 插件名片
> - 插件名称：Media DB Plugin
> - 插件作者：Moritz Jung
> - 插件说明：一个插件，可以查询多个API以获取电影、电视剧、动漫、游戏、音乐发行和维基文章，并将它们导入您的保险库。
> - 插件分类：['obsidian插件', 'readme']
> - 项目地址：[点我访问](https://github.com/mProjectsCode/obsidian-media-db-plugin)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsidian-media-db-plugin)

## 概述

一个插件，可以查询多个API以获取电影、电视剧、动漫、游戏、音乐发行和维基文章，并将它们导入您的保险库。



> [!tip] 原文出处
> 
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/mProjectsCode/obsidian-media-db-plugin/master/README.md)
> 

---

## Readme(翻译）

下面是 [[obsidian-media-db-plugin]] 插件的自述翻译


Obsidian Media DB插件

一个可以查询多个API的电影、系列、动漫、游戏、音乐和维基文章，并将它们导入到你的vault中的插件。

### 特点

#### 按标题搜索

通过名称在多个API中搜索电影、系列、动漫、游戏、音乐发行或维基文章。

#### 按ID搜索

允许您按照在不同API之间变化的ID进行搜索。有关此功能的具体信息可以在各个API的描述中找到。

#### 模板

该插件允许您设置一个模板笔记，该笔记将添加到由该插件创建的任何笔记的末尾。  
该插件还提供了简单的“模板标签”。例如，如果模板包含`{{ title }}`，它将被电影、节目或游戏的标题替换。  
请注意，“模板标签”用两个花括号括起来，花括号内的空格很重要。

对于数组，有两种特殊的显示方式。

- 使用`{{ LIST:variable_name }}`将导致
    ```
      - 元素1
      - 元素2
      - 元素3
      - ...
    ```
- 使用`{{ ENUM:variable_name }}`将导致
    ```
      元素1，元素2，元素3，...
    ```

可以在模板标签中使用的可用变量与笔记的元数据中的变量相同。

我还在[这里](https://github.com/mProjectsCode/obsidian-media-db-templates)发布了自己的模板。

#### 元数据字段自定义

允许您通过映射来重命名此插件生成的元数据字段。

映射必须遵循以下语法 `[原始属性名] -> [新属性名]`。
多个映射之间用换行符分隔。
例如：

```
title -> name
year -> releaseYear
```

#### 批量导入

该插件允许您导入现有的媒体集合并将其升级为媒体数据库条目。

##### 先决条件

预先存在的媒体注释必须位于您的保险库中的一个文件夹中。
为了使插件能够查询它们，它们需要一个元数据字段，该字段用作搜索媒体片段的标题。
可以通过使用`csv`导入插件从Obsidian之外导入现有列表来实现这一点。

##### 导入

要开始导入过程，请右键单击文件夹，然后选择“将文件夹导入为媒体数据库条目”选项。
然后指定要搜索的API，是否应将当前笔记内容和元数据附加到媒体数据库条目，并包含媒体片段标题的元数据字段的名称。

然后插件将遍历文件夹中的每个文件，并提示您从搜索结果中进行选择。

导入完成后，您将在插件设置中指定的文件夹中找到新的条目以及包含任何错误或被跳过/取消的文件的错误报告。

### 安装方法

**该插件已经发布，因此可以直接通过Obsidian的插件安装程序进行安装。**

或者，您可以从GitHub上的最新发布中手动下载zip存档。  
下载完成后，将存档解压缩到您的vault中的`.obsidian/plugins`文件夹中。

文件夹结构应如下所示：

```
[您的vault路径]
|_ .obsidian
   |_ plugins
      |_ obsidian-media-db-plugin
         |_ main.js
         |_ manifest.json
         |_ styles.css
```

### 如何使用

（图片即将到来）

安装完这个插件后，你会在左侧的功能区找到一个数据库图标。  
当使用这个插件的`添加新的媒体数据库条目`命令时，会弹出一个窗口。  
在这里，你可以输入你想要搜索的标题，然后选择要搜索的API。

点击搜索后，会弹出一个新的窗口，提示你从搜索结果中选择。  
现在你选择你想要的结果，插件会施展它的魔力，在你的存储库中创建一个包含所选搜索结果的元数据的新笔记。

### 目前支持的媒体类型

- 电影（包括特别节目）
- 系列（包括原创视频动画）
- 游戏
- 音乐发行
- 维基文章

### 目前支持的API：

| 名称                                                 | 描述                                                                                       | 支持的格式              | 认证方式                                                             | 速率限制                  | SFW过滤器支持 |
| ---------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------ | ---------------------------------------------------------------------------- | ------------------------------ | ------------------ |
| [Jikan](https://jikan.moe/)                          | Jikan是一个使用[My Anime List](https://myanimelist.net)的API，提供动画的元数据。 | 系列、电影、特别篇、OVA | 否                                                                           | 每分钟60次，每秒3次 | 是                |
| [OMDb](https://www.omdbapi.com/)                     | OMDb是一个提供电影、电视剧和游戏的元数据的API。                                  | 系列、电影、游戏          | 是，你可以在[这里](https://www.omdbapi.com/apikey.aspx)获取免费密钥 | 每天1000次                   | 否                 |
| [MusicBrainz](https://musicbrainz.org/)              | MusicBrainz是一个提供音乐发行信息的API。                               | 音乐发行                 | 否                                                                           | 每秒50次                  | 否                 |
| [Wikipedia](https://en.wikipedia.org/wiki/Main_Page) | Wikipedia API允许访问所有维基百科文章。                                        | 维基文章                  | 否                                                                           | 无                           | 否                 |
| [Steam](https://store.steampowered.com/)             | Steam API提供所有Steam游戏的信息。                                              | 游戏                          | 否                                                                           | 每天10000次                  | 否                 |

#### 注意事项

-   [Jikan](https://jikan.moe/)
    -   有时候API的速度会很慢，这是正常的
    -   你需要使用动画在[My Anime List](https://myanimelist.net)上的标题，大多数情况下是日语标题
        -   例如，你需要搜索"Kimetsu no Yaiba"而不是"Demon Slayer"。

#### 通过ID搜索

-   [Jikan](https://jikan.moe/)
    -   您需要的ID是[My Anime List](https://myanimelist.net)上的动画ID
    -   您可以在URL中找到这个ID
        -   例如，对于"Beyond the Boundary"，URL看起来像这样`https://myanimelist.net/anime/18153/Kyoukai_no_Kanata`，所以ID是`18153`
-   [OMDb](https://www.omdbapi.com/)
    -   您需要的ID是[IMDb](https://www.imdb.com)上的电影或节目ID
    -   您可以在URL中找到这个ID
        -   例如，对于"Rogue One"，URL看起来像这样`https://www.imdb.com/title/tt3748528/`，所以ID是`tt3748528`
-   [MusicBrainz](https://musicbrainz.org/)
    -   发行的ID不容易获取，最好通过标题进行搜索
-   [Wikipedia](https://en.wikipedia.org/wiki/Main_Page)
    -   [这里](https://en.wikipedia.org/wiki/Wikipedia:Finding_a_Wikidata_ID)是一个找到Wikipedia文章的Wikipedia ID的指南
-   [Steam](https://store.steampowered.com/)
    -   您可以在URL中找到这个ID
        -   例如，对于"Factorio"，URL看起来像这样`https://store.steampowered.com/app/427520/Factorio/`，所以ID是`427520`

有问题、意外行为或改进建议吗？

欢迎在[GitHub](https://github.com/mProjectsCode/obsidian-media-db-plugin/issues)上提出问题。

### 更新日志

#### 0.5.0

- 新增简单搜索模态框，选择媒体类型并搜索所有适用的API
- 更多的桌游数据
- 电影和系列的演员和流媒体平台
- 所有媒体类型的新文件位置分离
- 每种媒体类型的单独命令
- 修复预览模态框关闭的问题

#### 0.3.2

-   添加了Board Game Geek API（待定文档）
-   在搜索结果中提供更多信息
-   各种修复

#### 0.3.1

-   各种修复

#### 0.3.0

-   添加了批量导入功能。可以将一个文件夹中的媒体笔记作为媒体数据库条目导入（感谢 GitHub 上的 [PaperOrb](https://github.com/PaperOrb) 提供的建议和帮助测试此功能）
-   添加了自定义结果选择模态框，可以一次选择多个结果
-   修复了一个错误，当元数据中包含字段值为 `null` 或 `undefined` 时，笔记创建会失败的问题

#### 0.2.1

- 修复了在ID搜索模态框中初始选择API时的一个小错误

#### 0.2.0

-   通过属性映射添加了重命名元数据字段的选项
-   修复了在设置中设置的文件夹不存在时，创建笔记失败的问题

### 贡献

感谢您想要为这个项目做出贡献。

我们非常欢迎贡献。如果您有任何想法，请随时在问题选项卡下提出功能请求，甚至可以创建一个拉取请求。

### 鸣谢

鸣谢：

-   https://github.com/anpigon/obsidian-book-search-plugin 提供了一些灵感和制作此插件的想法
-   https://github.com/liamcain/obsidian-periodic-notes 提供了99%的`Suggest.ts`和`FolderSuggest.ts`



