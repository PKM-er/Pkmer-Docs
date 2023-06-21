---
uid: 20230329145840
title: Obsidian 插件：Tasks 更方便的任务管理
tags: [Obsidian, 插件, 任务, 事务管理]
description: Obsidian 插件：Tasks,任务管理必备插件
author: cuman
type: other
draft: false
editable: false
modified: 20230530225902
---

# Obsidian 插件：Tasks 更方便的任务管理

## 概述

在 obsidian 中做简单的任务管理，就需要 task 插件,它可进行任务添加，设定任务日期，快速汇总查询任务便于进行项目管理。相比 [[dataview]] tasks 插件命令更简洁。

 > [!Note] 插件名片
> - 插件名称：Tasks
> - 插件作者：Martin Schenck and Clare Macrae
> - 插件说明：Obsidian 增强任务管理，为任务增加优先级，计划日期，完成日期等自动化和图形化操作界面。
> - 插件分类：任务管理, 自动化
> - 插件项目地址：[点我访问](https://github.com/obsidian-tasks-group/obsidian-tasks)
> - 官方文档: [Introduction - Tasks User Guide - Obsidian Publish](https://publish.obsidian.md/tasks/Introduction)

## 功能

### 创建任务

通过 `ctrl+p` 命令行输入 task 选择 `create or edit task` 即可创建一个任务。

![image.png](https://cdn.pkmer.cn/images/202305141732844.png!pkmer)

![image.png](https://cdn.pkmer.cn/images/202305141735106.png!pkmer)

比如 创建一个计划明天开始写作的任务

`- [ ] pkmer 开始写作 ⏳ 2023-05-15`

创建一个明天之前必须完成的任务

`- [ ] 整理笔记  📅 2023-05-15`

> [!tip] 提示
> 如果仅仅创建简单任务，直接用 Obsidian 的快捷键 `ctrl+L` 就可以把当前行内容转为任务。
> ![image.png](https://cdn.pkmer.cn/images/202305160918451.png!pkmer)

### 查询任务

在不同笔记里的任务，可以通过 tasks 插件的代码块，进行搜索并聚集展示。

#### 查询语法

- 完成/未完成：done 或 not done
- 完成日期：done before/after/on 日期
- 无到期日：no due date
- 到期日过滤：due before/after/on 日期
	- 日期可使用 today, yesterday, tomorrow, next week， last Friday, in two weeks 等
- 路径
    - 要搜寻：path includes 路径
    - 不搜寻：path does not include 路径
- 事项描述
    - description includes 字串
    - description does not include 字串
- 最靠近标题
    - heading includes 标题
    - heading does not include 标题
- 是否重覆：is recurring, is not recurring
- 排除某个事项：excludes 清单事项
- 限制显示事项数目：limit to 数值 tasks
- 排序：sort by (status|due|done|path|description)
- 显示样式隐藏 hide
    - edit button
    - backlink
    - done date
    - due date
    - recurrence rule
    - task count

#### 例子

比如查询刚才创建的那个写作任务，就可以用下面的语法，意思是把所有未完成的任务列举出来。

````
```tasks
not done
```
````

但这个命令会把所有未完成的任务在里面，我们需要进一步缩小范围

查询明天的计划的任务

```tasks
not done
scheduled on tomorrow
```

![image.png](https://cdn.pkmer.cn/images/202305141754888.png!pkmer)

这样就会把明天计划的任务列出来。

同理 查

比如 明天到期的所有未结任务：

````
```tasks
not done
due  tomorrow
```
````

![image.png](https://cdn.pkmer.cn/images/202305141756340.png!pkmer)

其他还有设置范围比如

所有在未来两周内到期的未完成任务：

````
```tasks
not done
due after yesterday
due before in two weeks
```
````

更复杂的还可以设置限制文件夹和标题

比如查询 pkmer 文件夹下，`代办任务` 标题下的任务

````text
```tasks
not done
heading includes 代办任务
path includes pkmer
```
````

### 插件相关设置

如果你有打标签的习惯，可以在 tasks 插件中设置一个全局标签，这样 tasks 只会搜索包含此标签的任务。

比如我喜欢在有任务的笔记中都加上 `#tasks` 标签

![image.png](https://cdn.pkmer.cn/images/202305141801365.png!pkmer)

### 配合模板插件

 配合 [[templater-obsidian]] 插件 就可以生成一个每天任务看板页面

````md
## 今日任务看板
### 今天之前就到期任务
```tasks
not done
due before {{date:YYYY-MM-DD}}
```

### 今天需要干的
```tasks
not done
due on {{date:YYYY-MM-DD}}
```

### 未来两周
```tasks
not done
due after {{date:YYYY-MM-DD}}
due before {{date+14d:YYYY-MM-DD}}
```

### 没有设置日期的
```tasks
not done
no due date
```

### 今天已完成的
```tasks
done on {{date:YYYY-MM-DD}}
```

````
