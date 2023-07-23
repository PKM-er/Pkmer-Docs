---
uid: 20230329145823
title: Obsidian 插件：Douban 给 Obsidian 增加和豆瓣信息同步的能力
tags: [Obsidian, 插件, 第三方集成, 豆瓣]
description: Obsidian 插件：Douban 给 Obsidian 增加和豆瓣信息同步的能力
author: SigiL,OS
type: other
draft: false
editable: false
modified: 20230613222349
---

# Obsidian 插件：Douban 给 Obsidian 增加和豆瓣信息同步的能力

## 概述

可以在笔记中快速导入豆瓣电影/书籍/音乐/电视剧/日记/游戏的条目信息，也可以用于导入“你标记过的书影音”（包括你的评分、评论时间、在读/在看等状态）等信息，将其记录在 YAML Frontmatter 区域，作为笔记元数据。

> [!Note] 插件名片
> - 插件名称：Douban
> - 插件作者：Wanxp
> - 插件说明：给 Obsidian 增加和豆瓣信息同步的能力
> - 插件项目地址：[点我跳转](https://github.com/Wanxp/obsidian-douban)

## 安装

1. 进入 Obsidian 插件中心
2. 搜索 obsidian-douban
3. 安装
4. 开启插件

## 功能

- Sync Personal Movie/同步个人看过的电影
- Sync Personal Book/同步个人阅读过的书籍
- Sync Personal Music/同步个人听过的音乐
- Import Movie/导入电影
- Import Teleplay/导入电视剧
- Import Book/导入书籍
- Import Music/导入音乐
- Import Note/导入日记
- Import Game/导入游戏
- Personal Comment/导入个人的评论、评论时间、阅读状态、个人评分
- Attachment Files/支持保存封面至本地
- Custom Variables/支持自定义参数

## 进阶使用

1. 自定义参数

插件作者提供了自定义参数的功能，目前支持如下字段：

|字段|电影|电视剧|书籍|音乐|日记|游戏|广播|
|---|---|---|---|---|---|---|---|
|id|豆瓣 ID|豆瓣 ID|豆瓣 ID|豆瓣 ID|豆瓣 ID|豆瓣 ID|-|
|title|电影名称|电视剧名称|书名|音乐名|日记标题|游戏名称|-|
|type|类型|类型|类型|类型|类型|类型|-|
|score|评分|评分|评分|评分|评分|评分|-|
|image|封面|封面|封面|封面|图片|封面|-|
|url|豆瓣网址|豆瓣网址|豆瓣网址|豆瓣网址|豆瓣网址|豆瓣网址|-|
|desc|简介|简介|内容简介|简介|简介|简介|-|
|publisher|-|-|出版社|出版者|发布者|发行商|-|
|datePublished|上映日期|上映日期|出版年|发行时间|发布时间|发行日期|-|
|yearPublished|上映年份|上映年份|出版年份|发行年份|发布年份|发行年份|-|
|genre|类型|类型|-|流派|-|类型|-|
|currentDate|今日日期|今日日期|今日日期|今日日期|今日日期|今日日期||
|currentTime|当前时间|当前时间|当前时间|当前时间|当前时间|当前时间||
|myTags|我标记的标签|我标记的标签|我标记的标签|我标记的标签|-|我标记的标签||
|myRating|我的评分|我的评分|我的评分|我的评分|-|我的评分||
|myState|状态: 想看/在看/看过|状态: 想看/在看/看过|状态: 想看/在看/看过|状态: 想听/在听/听过|-|状态: 想玩/在玩/玩过||
|myComment|我的评语|我的评语|我的评语|我的评语|-|我的评语||
|myCollectionDate|我标记的时间|我标记的时间|我标记的时间|我标记的时间|-|我标记的时间||
|扩展 1|director: 导演|director: 导演|author: 原作者|actor: 表演者|author: 作者|aliases: 别名||
|扩展 2|author: 编剧|author: 编剧|translator: 译者|albumType: 专辑类型|authorUrl: 作者网址|developer: 开发商||
|扩展 3|actor: 主演|actor: 主演|isbn:isbn|medium: 介质|content: 日记内容|platform: 平台||
|扩展 4|originalTitle: 原作名|originalTitle: 原作名|originalTitle: 原作名|records: 唱片数||||
|扩展 5|country: 国家|country: 国家|subTitle: 副标题|barcode: 条形码||||
|扩展 6|language: 语言|language: 语言|totalPage: 页数|||||
|扩展 7|time: 片长|time: 片长|series: 丛书|||||
|扩展 8|aliases: 又名|aliases: 又名|menu: 目录|||||
|扩展 9|IMDb|IMDb|price: 定价|||||
|扩展 7||episode: 集数|binding: 装帧|||||
|扩展 8|||producer: 出品方||||

你可以创建一个新的模板文件，使用 `id:{{id}}` 、`title:{{title}}` 格式的自定义参数，选用自己需要的豆瓣条目字段，保存为电影/书籍模板。

![38ea936acb0b0767a1943fd885b792a.jpg](https://cdn.pkmer.cn/images/38ea936acb0b0767a1943fd885b792a.jpg!pkmer)

选用该模板文件，搜索豆瓣条目，就可以在笔记中导入所需的豆瓣条目信息。

1. 结合 Timeline 插件实现个人读书/观影时间线效果

插件作者特别推荐了结合 Timeline 插件实现的个人豆瓣时间线功能，参照讨论 [结合timeline插件的妙用](https://github.com/Wanxp/obsidian-douban/issues/19#issuecomment-1428307130) 和 [官方文档](https://github.com/Wanxp/obsidian-douban/blob/master/doc/Obsidian-Douban-TimeLine.md)。

![](https://github.com/Wanxp/obsidian-douban/raw/master/doc/img/obsidian-douban-time-preview-example.gif)](<https://github.com/Wanxp/obsidian-douban/blob/master/doc/img/obsidian-douban-time-preview-example.gif)>

首先需要安装 [Timelines](https://github.com/Darakah/obsidian-timelines) 插件，然后在 Obsidian-Douban 插件配置中登录自己的豆瓣账号，配置个人需要的自定义参数和模板，在模板的 YAML Frontmatter 中 **增加** 特定 tags，如“我看过的电影”，用于需要过滤成为时间线的笔记。

````
---
tags: 我看过的电影
---
````

在模板 **最后增加** Timeline 插件需要的 html 标签，如下：

````html
<span class='ob-timelines' data-date='{{myCollectionDate}}' 
data-title='{{title}}' data-img='{{image}}'
 data-class = "custom-my-movie-time-line">{{myComment}} |简介: {{desc}}
 </span> 
````

选择模板导入电影/书籍的条目信息，导入完成后，加入 Timeline 的代码块，代码块内容就是此前增加的指定 tags，如“我看过的电影”。

````
```timeline
我看过的电影
````

官方文档中给出的电影模板参考，书籍、电视剧、音乐、游戏均可参照。

````
---
doubanId: {{id}}
title: {{title}}
type: {{type}}
score: {{score}}
myRate: {{myRate}}
originalTitle: {{originalTitle}}
genre: {{genre}}
datePublished: {{datePublished}}
director: {{director}}
actor: {{actor}}
author: {{author}}
tags: {{type}}, 我看过的电影, {{myTags}}
state: {{myState}}
url: {{url}}
createTime: {{currentDate}} {{currentTime}}
collectionDate: {{myCollectionDate}}
desc: {{desc}}
---

![image]({{image}})

Comment: 
---
{{myComment}}


<span class='ob-timelines' data-date='{{myCollectionDate}}'
data-title='{{title}}' data-img='{{image}}'
data-class = "custom-my-movie-time-line">{{myComment}} |简介: {{desc}}
</span> 
````