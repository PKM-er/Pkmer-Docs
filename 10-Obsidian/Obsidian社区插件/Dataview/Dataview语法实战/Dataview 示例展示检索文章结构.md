---
uid: 20230918143437
title: Dataview 示例展示检索文章结构
tags: []
description: 本文为辅助文章，辅助其余Dataview查询示例文件
author: Huajin
type: other
draft: false
editable: false
modified: 20231008001227
---

# Dataview 示例展示检索文章结构

讲讲为什么需要有这么一篇辅助文章。Dataview 示例展示中的所有文章均基于 Github 上的这个项目：[dataview example vault](https://github.com/s-blu/obsidian_dataview_example_vault)，这个英文示例库是一个完整的 obsidian 的 vault（不想直接去 Github 下载原库也可以在 [这里](https://s-blu.github.io/obsidian_dataview_example_vault/) 查看，缺点就是所有的 dataview 查询都只能看到代码没法看到真正的查询结果），原库中包含了四个部分

![Dataview 示例展示检索文章结构](https://cdn.pkmer.cn/images/1695021257942.png!pkmer)

- 00 Meta 中有所有库中用到的所有元数据；
- 10 Example Data 就是检索的目标，所有待检索的文章都在这里边；
- 20 Dataview Queries 就是 dataview 查询的示例，作者按照类别分成了不同的文章；
- 30 Dataview Resources 可以理解为 20 Dataview Queries 的一个目录；

## 一、查询的示例库的结构

本文主要就是讲下 10 Example Data 中的结构，并且为了方便阅读，我把所有文件的英文和属性的名字替换为了语义通顺的相同意思的中文。

![Dataview 示例展示检索文章结构|600](https://cdn.pkmer.cn/images/Pasted%20image%2020230918190023.png!pkmer)

举个例子，在我们的示例文件中，如果要查询所有日记内的内容，会写成下面的这种形式

`````示例代码
```dataview
TABLE ...
FROM "示例库/日记"
...
```
`````

## 二、示例库中的文件分别放了什么

我会按照以下的结构依次介绍一下每个文件的内容和包含的元数据

- 示例库
	- 任务
	- 书籍
	- 日记
	- 文件夹和具有元数据的文件
	- 食物
	- 游戏
	- 人
	- 具有前缀和后缀名的文件
	- 项目
	- 剧
	- 每周代办

### (1) 任务

这个文件夹中一共有 12 个任务文件，存放了一些特定的任务。文件有三个元数据：class、received 和 due，分别代表这个任务的类别，开始日期和截止日期。另外，这个任务的子任务还有一个 completion 的元数据代表子任务的完成日期。

![Dataview 示例展示检索文章结构|550](https://cdn.pkmer.cn/images/Pasted%20image%2020230919132804.png!pkmer)

### (2) 书籍

这个文件夹里边提供了七本书，不过原示例库的书都是 books_1 这种形式的代称，我按照同样的格式写了一篇中文的供读者参考。文中共有六个元数据：作者 author, 主题 booktopics, 类型 genres, 总页数 totalPages, 封面图片 cover-img 和一个行内字段已读页数 pagesRead。原并没有内容简介和原文摘录，下图中的是我自己加的。另外，每一篇记录书籍阅读记录的文件都被打上了 `#type/books` 的标签。

|   英文名   |   中文名   | 数据类型 |                         解释                         |
|:----------:|:----------:|:--------:|:----------------------------------------------------:|
|   author   |    作者    |   文字   |                     这本书的作者                     |
| booktopics |  书的主题  |   列表   |         这本书的主题，比如孤独、拼搏、反抗等         |
|   genres   |  书的类型  |   列表   | 这本书属于什么类型的书，例如是现代主义小说，中篇小说 |
| totalPages | 书的总页数 |   数字   |                    整本书有多少页                    |
| cover-img  |  书的封面  |   链接   |                网上找到书的封面的图片                |
| pagesRead  |  已读页数  |   数字   |                   我已经看了多少页                   |

![Dataview 示例展示检索文章结构|550](https://cdn.pkmer.cn/images/Pasted%20image%2020230919133952.png!pkmer)

### (3) 日记

日记文件夹里面自然就是一大堆日记了，日记文件名格式全部为 "yyyy-MM-dd"，这些日记文件中包含了很多元数据。

在文件的 Properties 区域，有一个固定的 wellbeing 属性，这是一个数据类型为对象的属性。但是由于 1.4 更新后的 Properties 区域并没有提供对象这种数据类型，因此在文件中这个属性的渲染会有问题，不过这并不影响 dataview 的检索。

![Dataview 示例展示检索文章结构|550](https://cdn.pkmer.cn/images/Pasted%20image%2020230919164303.png!pkmer)

给他换成中文则分别对应：wellbeing 幸福指数，mood 情绪指数，mood-notes 情绪描述（euphoric 是愉悦，还有 relaxed 等），health 健康指数，health-notes 身体状态，pain 疼痛指数，pain-type 疼痛部位。最后两个应该和 health 相关，有的日记文件并没有填写 pain-type 且 pain 指数为 0 或 1。

从上图中也可以看到，几乎所有的日记文件都具有这两个标签 `#daily` 和 `#journal`。日记文件的正文一般会有一个一级标题 Daily Note yyyy-MM-dd (例如 Daily Note 2022-02-01)。还会有一些任务，一些和别人的预约之类 (Appointments)。

![Dataview 示例展示检索文章结构|550](https://cdn.pkmer.cn/images/Pasted%20image%2020230919165310.png!pkmer)

翻译一下就是

![Dataview 示例展示检索文章结构|550](https://cdn.pkmer.cn/images/Pasted%20image%2020230919165617.png!pkmer)

> [!tip] 注意
> - 这些任务并不是简单的任务，带状态的意思是他们完成时的语法有的为 `- [o]`，有的又是 `- [x]`。这些都可以被 dataview 检索区分出来；
> - 预约里面通常会有两个行内字段 person 和 appointment，分别代表人和时间；

日记末尾会有一块区域用于记账 Money spent 和一块区域专门放各种各样的元数据 Meatadata。

|    英文名     |    中文名    | 数据类型 |                     解释                     |
|:-------------:|:------------:|:--------:|:--------------------------------------------:|
|    bought     |  购买的产品  |   文字   |     买了什么，比如说 shoes 代表拿去买鞋了      |
|     paid      |     花费     |   文字   |                  花了多少钱                  |
|    wake-up    |   起床时间   |   日期   |   起床时间，不需要填日期，填小时和分钟即可   |
|     lunch     |   午餐时间   |   日期   | 吃午饭的时间，不需要填日期，填小时和分钟即可 |
|    dinner     |   晚餐时间   |   日期   | 吃晚饭的时间，不需要填日期，填小时和分钟即可 |
|  go-to-sleep  |   睡觉睡觉   |   日期   |  睡觉的时间，不需要填日期，填小时和分钟即可  |
|   training    |  坐着的时间  | 定长时间 |                 今天坐了多久                 |
|    praying    |   是否祷告   | 布尔类型 |                 今天是否祷告                 |
|   breathing   |   是否呼吸   | 布尔类型 |                 今天呼吸了没                 |
| beingthankful | 是否保持感激 | 布尔类型 |             今天是否怀揣感恩之心             |
|   slowdown    |   是否懈怠   | 布尔类型 | 今天有没有放松                                             |

![Dataview 示例展示检索文章结构](https://cdn.pkmer.cn/images/Pasted%20image%2020230919170150.png!pkmer)

当然也有一些与众不同的日记文件，作者选择以图片作为行内字段 picoftheday(picture of the day) 的值，例如

![Dataview 示例展示检索文章结构](https://cdn.pkmer.cn/images/Pasted%20image%2020230919175620.png!pkmer)

有时候整篇日记文件只有一些任务或者一些摘录

![Dataview 示例展示检索文章结构](https://cdn.pkmer.cn/images/Pasted%20image%2020230919180046.png!pkmer)

![Dataview 示例展示检索文章结构](https://cdn.pkmer.cn/images/Pasted%20image%2020230919180213.png!pkmer)

### (4) 文件夹和具有元数据的文件

这个目录之下只有非常非常多相互嵌套的文件夹，打开到最深层都只有一个 meta 文件夹，在 meta 文件夹的 Properties 中都只有 id 和 lang 两个属性，id 一般与他所处的文件夹的名字有关，很多都是文件夹开头首字母的缩写加上数字，lang 是 language 的缩写。

![Dataview 示例展示检索文章结构](https://cdn.pkmer.cn/images/Pasted%20image%2020230919181010.png!pkmer)

可以看到第一层文件夹是按照语言分的，有 English, French 和 German，对应了每一个 meta 文件夹中的 lang 属性。在 Harry Potter and the Philosopher's Stone(哈利波特与魔法石) 文件夹下的 meta 文件中的内容如图，HP01 应该是 Harry Potter 的首字母，01 应该是指第一个，不难想象 Harry Potter and the Prisoner of Azkaban(哈利·波特与阿兹卡班的囚徒) 的 meta 文件夹中的 id 应该是 HP02。这个文件夹中的所有文件只有一篇讲解检索文件夹的时候会用到。

![Dataview 示例展示检索文章结构](https://cdn.pkmer.cn/images/Pasted%20image%2020230919181219.png!pkmer)

### (5) 食物

这个文件夹只有五个文件，其中四个是菜谱，一个有食材存储相关的信息。

![Dataview 示例展示检索文章结构](https://cdn.pkmer.cn/images/Pasted%20image%2020230919181710.png!pkmer)

四个食谱分别是

|英文名|中文名|
|:-:|:-:|
|Bacon Pasta with tomato pasta sauce|培根意面配番茄意面酱|
|Mushroom Pasta|蘑菇意大利面|
|Oven Baked Chicken and Rice|烤鸡和米饭|
|Pesto Pasta|青酱意面|

这些食谱的文件包含的属性还是比较多的，有 recipe-type 食谱类型，source 食谱来源，time 烹饪时长，ingredients 成分。

![Dataview 示例展示检索文章结构](https://cdn.pkmer.cn/images/Pasted%20image%2020230919182401.png!pkmer)

正文有两个部分：Ingredients 配料表，以及 Instructions 烹饪步骤，这些都是可以被 dataview 检索到的；

![Dataview 示例展示检索文章结构](https://cdn.pkmer.cn/images/Pasted%20image%2020230919182543.png!pkmer)

### (6) 游戏

游戏文件夹中提供了 9 个游戏文件用于检索

![Dataview 示例展示检索文章结构](https://cdn.pkmer.cn/images/Pasted%20image%2020230919182716.png!pkmer)

每一个游戏文件中包含了六个属性：name 游戏名，publisher 出版商，developer 开发人员，price 价格，genre 游戏类型，languages 支持语言。所有游戏都包含 `#game` 标签，有的游戏还加上了更精确的标签例如 `#game/action` 来代表动作游戏。

|英文名|中文名|数据类型|解释|
|:-:|:-:|:-:|:-:|
|name|游戏名|文字|游戏名|
|publisher|出版商|文字|游戏出版商的名字|
|developer|开发人员|文字|游戏开发者的名字|
|price|价格|数字|游戏的价格|
|genre|游戏类型|列表|游戏的类型，例如动作游戏 Action 等|
|languages|支持语言|列表|游戏支持的语言|

![Dataview 示例展示检索文章结构](https://cdn.pkmer.cn/images/Pasted%20image%2020230919183000.png!pkmer)

### (7) 人

人物文件夹中看起来像是一堆随意起的名字，文中也只在 Properties 中提供了三个属性：birthday 生日，relationship 我和他的关系，contacts 联系方式。

![Dataview 示例展示检索文章结构|500](https://cdn.pkmer.cn/images/Pasted%20image%2020230919183144.png!pkmer)

|英文名|中文名|数据类型|解释|
|:-:|:-:|:-:|:-:|
|birthday|生日|日期|他的生日|
|relationship|关系|文字|我和他的关系，例如 friend 朋友|
|contacts|联系方式|对象|contacts 对象包含了 phone, mail 两个字段，即手机号码和邮箱|

### (8) 具有前缀和后缀名的文件

我们经常会给一类文件其一定的前缀或者后缀，这里作者提供了三个具有一定前缀和后缀的文件用于辅助检索。（文中无任何额外的和有用的内容）

![Dataview 示例展示检索文章结构](https://cdn.pkmer.cn/images/Pasted%20image%2020230919183316.png!pkmer)

### (9) 项目

项目文件夹中有两种文件，一个是 project_n 文件，n 指代 1~10（共 10 个 project 文件），另一个是 Goal n 文件，里面放的是所有 project_n 文件的汇总，以及一个 `#goal` 标签。

项目文件 project_n 中就是放了很多很多的任务以及六个行内字段，有 status 状态，started 开始日期，finished 完成日期，Project ID，tags 项目标签，working hours 工作时长（是列表）

![Dataview 示例展示检索文章结构|400](https://cdn.pkmer.cn/images/Pasted%20image%2020230919210050.png!pkmer)

|英文名|中文名|数据类型|解释|
|:-:|:-:|:-:|:-:|
|status|项目状态|文字|项目的状态，例如 waiting 是还没开始|
|started|开始时间|日期|项目的开始时间|
|finished|完成时间|日期|项目的完成时间，没完成不填|
|Project ID|项目 ID|数字|项目的 ID|
|tags|项目标签|标签|用来标识项目的标签|
|working hours|工作时长|列表|记录做项目花了多少时间|

### (10) 剧

英文示例库给了好多好多的剧的数据，包含了电视剧和动漫。

![Dataview 示例展示检索文章结构|550](https://cdn.pkmer.cn/images/Pasted%20image%2020230919210605.png!pkmer)

拿这个七龙珠 (Dragon Ball) 的文件举例（其余文件的属性一致），剧文件的属性包括

|英文名|中文名|数据类型|解释|
|:-:|:-:|:-:|:-:|
|Title|剧名|文字|剧名|
|Genre|类型|数组|剧的类别，例如动作片 Action,冒险片 Adventure|
|Network|网络|文字|播出的电视台|
|Seasons|季|数字|剧一共拍了多少季，第一季第二季之类；|
|Episodes|集|数字|剧拍了多少集|
|Runtime|时长|数字|剧的时长|
|Show_status|剧状态|文字|正在拍还是已经拍完了 (Ended)|
|Rating|评分|数字|给这部剧打个分|
|Would rewatch|还会再看吗|布尔|还会再看吗|

至于正文中的那些 Season 1 ~ Season 5 是七龙珠第一季到第五季的每一集组成的一大堆任务，每看完一集就点一个完成。每一条任务末尾都有一个 Release Date 的行内字段，代表这一集发行的日期，下面是七龙珠第一季的部分截图。

![Dataview 示例展示检索文章结构|550](https://cdn.pkmer.cn/images/Pasted%20image%2020230919213628.png!pkmer)

### (11) 每周代办

这个文件夹只有一个文件 2022-W39，文章内容如图

![Dataview 示例展示检索文章结构](https://cdn.pkmer.cn/images/Pasted%20image%2020230919213718.png!pkmer)

是的，就是一个每周代办，只有一个标题 Weekly To Dos 和三个任务。