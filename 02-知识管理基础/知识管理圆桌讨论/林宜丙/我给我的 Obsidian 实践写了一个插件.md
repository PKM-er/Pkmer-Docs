---
uid: 20230716134009
title: 我给我的 Obsidian 实践写了一个插件
tags: [任务管理]
description: 林宜丙分享的基于Obsidian的第二大脑构建
author: 林宜丙
type: practice
draft: false
editable: false
modified: 20230717130105
---

# 我给我的 Obsidian 实践写了一个插件

> [!note] 声明
> 本文转自：[一种实用新型 Obsidian 实践之构建我的第二大脑 🧠 - 林宜丙的博客 (quanru.github.io)](https://quanru.github.io/2023/07/16/%E6%88%91%E7%BB%99%E6%88%91%E7%9A%84%20Obsidian%20%E5%AE%9E%E8%B7%B5%E5%86%99%E4%BA%86%E4%B8%80%E4%B8%AA%E6%8F%92%E4%BB%B6/)，已获得作者林宜丙
 的转载许可

为 [[一种实用新型 Obsidian 实践之构建我的第二大脑]] 实现 Obsidian 插件！

## 背景

最近将这个我的 Obsidian 实践（[[一种实用新型 Obsidian 实践之构建我的第二大脑]]）分享后，帮助到了几个人

1. 一个不认识的同事用上后，表示『像开启了新大陆』，并给我发了个红包，说请我喝咖啡
2. 一个不认识的网友用上后，表示『满足了她对个人知识管理的全部需求』，甚至还为此写了一篇上手文档

当然，除了陌生人以外，我也推荐给不少熟悉的同事和朋友，收到了不少反馈，比如上手成本高、跟新难以跟进、关系图谱中无法区分项目（所有都是 README.md）等。

## 目标

因此考虑到上述问题，我决定实现一个插件，主要有如下几个目标

1. 降低上手成本，特别针对非程序员群体
2. 更新及时触达，无论是新功能还是问题修复
3. 增加受众，以获得反馈，共建并完善流程

> 文末我还介绍了一种渐进的使用这个插件的方式！

## 旧的方式

在未使用插件的示例模版里，存在如下几类的『程序代码』

1. 脚本类
	- 日期解析 [date](https://github.com/quanru/obsidian-example-LifeOS/blob/1.0.1/Scripts/date.js)
		- 根据周期笔记的文件名，解析出日期
		- 根据解析出的日期，获取日期范围
		- 根据解析出的日期，获取文件列表
	- 任务查询 [task](https://github.com/quanru/obsidian-example-LifeOS/blob/1.0.1/Scripts/task.js)
		- 根据日期范围，获取任务列表
	- 项目查询 [project](https://github.com/quanru/obsidian-example-LifeOS/blob/1.0.1/Scripts/project.js)
		- 获取当前项目列表的快照
		- 根据日期范围内，获取项目列表
		- 计算日期范围内，项目的耗时及其占比
	- 领域查询 [area](https://github.com/quanru/obsidian-example-LifeOS/blob/1.0.1/Scripts/area.js)
		- 获取当前领域列表的快照
		- 根据日期范围内，获取领域列表
2. 视图类
	- 任务完成视图 [taskDoneList](https://github.com/quanru/obsidian-example-LifeOS/blob/1.0.1/Templates/PeriodicNotes/views/taskDoneList.js)
		- 放到周期笔记中，可获取当前日期范围内完成的任务列表
	- 任务记录视图 [taskRecordList](https://github.com/quanru/obsidian-example-LifeOS/blob/1.0.1/Templates/PeriodicNotes/views/taskRecordList.js)
		- 放到周期笔记中，可获取当前日期范围内收集的任务列表
	- 项目列表视图 [projectList](https://github.com/quanru/obsidian-example-LifeOS/blob/1.0.1/Templates/PeriodicNotes/views/projectList.js)
		- 放到周期笔记中，可获取当前日期范围内项目耗时的占比
	- 领域列表视图 [areaList](https://github.com/quanru/obsidian-example-LifeOS/blob/1.0.1/Templates/PeriodicNotes/views/areaList.js)
		- 放到周期笔记中，可获取当前日期范围内领域列表

直接将代码跟随示例模版输出给用户，这大大增加了用户的上手成本，且用户无法更新这些脚本。

## 新的方式

因此我决定实现一个插件封装上述两类『程序代码』，通过提供『markdown 代码块』的方式提供『视图』，这样用户只要会 Markdown，就能读懂并使用，那么我的插件实现了哪些视图呢？

在 [[一种实用新型 Obsidian 实践之构建我的第二大脑]] 中，提到我的实践有两个上下文，让我保持聚焦

- 一个是基于时间的（周期笔记），即我到达某个时间节点，我就基于对应周期笔记作业，且笔记中有足够的上下文；
- 另一个是基于主题的（PARA），即我想对某个主题进行调查研究的时候，我就基于对应主题的索引（README.md）作业，且笔记中已经收集了不少上下文；

因此，插件需要实现的视图也是基于这两个上下文，举个例子，比如一篇月记（2023-07），它所拥有的上下文应包含 7 月份所有的日记和周记内的任务（目前只有任务，但是我觉得可以有其它的）；再举个例子，比如一个 PARA 的项目（分享 -2023-WOT 分享会），它所拥有的上下文应包含所有被打上 `#WOT` 标签的任务和记录；

目前插件提供的视图有如下三大类：

### 根据时间上下文查询

即下面同一个代码块，放在不同的周期笔记中（月记、周记、日记），均会解析并获得对于时间范围内的『完成任务列表（TaskDoneListByTime）』、『记录任务列表（TaskRecordListByTime）』、『涉及的项目列表（ProjectListByTime）』、『涉及的领域列表（AreaListByTime）』。

~~~markdown
```PeriodicPARA
TaskDoneListByTime
```
~~~


~~~markdown
```PeriodicPARA
TaskRecordListByTime
```
~~~


~~~markdown
```PeriodicPARA
ProjectListByTime
```
~~~

~~~markdown
```PeriodicPARA
AreaListByTime
```
~~~

### 根据 PARA 上下文查询

即下面同一个代码块，放在不同的 PARA 目录的 README.md 中（比如 1. Projects/分享 -2023-WOT 分享会/README.md），均会查询并获取 README.md 声明的 [Metadata](https://help.obsidian.md/Editing+and+formatting/Metadata) tags 字段，并根据这些 tag 查询出『打上该 tag 的任务列表（TaskListByTag）』、『打上该 tag 的记录列表（BulletListByTag）』

~~~markdown
```PeriodicPARA
TaskListByTag
```
~~~

~~~markdown
```PeriodicPARA
BulletListByTag
```
~~~

### 根据目录查询

为了总览当前 PARA，还有一类基于目录的视图，比如查询『当前项目目录下的所有项目（ProjectListByFolder）』、『当前领域目录下的所有有领域（AreaListByFolder）』、『当前资源目录下的所有有资源（ResourceListByFolder）』、『当前归档目录下的所有有归档（ArchiveListByFolder）』

~~~markdown
```PeriodicPARA
ProjectListByFolder
```
~~~

~~~markdown
```PeriodicPARA
AreaListByFolder
```
~~~

~~~markdown
```PeriodicPARA
ResourceListByFolder
```
~~~

~~~markdown
```PeriodicPARA
ArchiveListByFolder
```
~~~

除了上述视图，插件还提供了在周期笔记模版中使用的辅助函数，目前只有一个，即生成指定目录下的 README.md 文件列表，比如

模版中的如下语句

~~~markdown
<% PeriodicPARA.File.list('1. Projects') %>
~~~

将会替换为

~~~markdown
1. [[1. Projects/x-project/README|x-project]]
2. [[1. Projects/y-project/README|y-project]]
~~~

这样项目列表将在日记笔记创建时，被作为快照固化下来，有几个作用

- 保留每个项目都经历了哪些日子，而且能手动统计每日项目耗时
- 未来基于日记能统计周记、月记等时间范围内，都有哪些项目，也能统计每周、每月的项目耗时

## 如何渐进使用这套系统？

在 [[一种实用新型 Obsidian 实践之构建我的第二大脑]] 中，提到我的实践是有两套系统的，一个是周期笔记，另一个是 PARA；后来我发现，一上来就两个一起实践，其实上手成本挺高，特别是从未使用过 Obsidian，且不了解 PARA 的用户，我对这类用户的建议是，你大可先只使用周期笔记，把模版中关于 PARA 的一切都剔除，这样你仍能享受到『DailyLog』以及『基于时间的上下文』，即你只管每天记录日记，剩余的汇总和回顾都交给『周记』、『月记』、『季记』、『年记』，等你实践下来有自己的看法和感觉的时候，你可以考虑自顶向下在『周记』和『月记』中安排任务，在『季记』、『年记』设定目标！

## 下一步？

我本人在使用了这套流程后，真的收获很大，这也是我能日复一日地照着这个实践的原因！因此，我希望有更多的用户能尝试这套系统，一起共创，让这套系统更快地迭代，不仅能让我受益，也能让大家受益！

下面是我发布 [[一种实用新型 Obsidian 实践之构建我的第二大脑]] 文章后，收到的反馈所做的微小工作

1. 开发插件，降低使用门槛，为周期笔记和 PARA 的提供查询视图，将所有复杂的查询语句屏蔽
2. 关系图谱优化，即在 PARA 目录下支持 XXX.README.md 作为索引，否则所有的节点都将是 README
3. 单一事实来源，用户只需要设置元信息，插件负责读取

![image.png](https://cdn.pkmer.cn/images/202307171259246.png!pkmer)

![image.png](https://cdn.pkmer.cn/images/202307171259992.png!pkmer)

![image.png](https://cdn.pkmer.cn/images/202307171300998.png!pkmer)

![image.png](https://cdn.pkmer.cn/images/202307171300390.png!pkmer)
