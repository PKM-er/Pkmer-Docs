---
uid: 20240530224103
title: 如何给 DataviewJS 中的 TaskList 的任务列表排序？（借助 GPT 获取答案）
tags: [Dataviewjs]
description: 实现了对任务列表的排序需求。通过手动转换数组类型并编写自定义排序函数，最终得到了按照来源文件名称倒序排列的任务列表
author: cuman
type: other
draft: false
editable: false
modified: 20240531001714
---

# 如何给 DataviewJS 中的 TaskList 的任务列表排序？（借助 GPT 获取答案）

## 问题

> [!help] 如何给 DataviewJS 中的 TaskList 的任务列表排序？
> 我想增加下排序语法，按筛选的来源文件名称排序。 问了 GPT 好多次了，一直乱说，给的代码全部报错，有懂 dataviewjs 的大佬告诉下怎么增加排序语法吗？

````

```dataviewjs

let tasks = dv.pages('"文件夹"') 
.file
.tasks
.where(t => t.text.includes("关键词1") || t.text.includes("关键词2")) 

dv.taskList(tasks);

```
````

这是群聊中一个用户给出的问题。

我们先运行这个代码 发现是这个效果

![image.png](https://cdn.pkmer.cn/images/202405302323119.png!pkmer)

根据提问，应该是想把任务的文件名称排序由原来的正序改为倒序。 也就是最近的时间排在最前面。

## 借助 GPT 解题

首先我们先问下 GPT 看能得到什么结果：

![image.png|650](https://cdn.pkmer.cn/images/202405302252754.png!pkmer)

猛一看貌似没什么问题，实际上运行就会发现是行不通的，没有任何效果。

> 经过查询 [dv.taskList(tasks, groupByFile) 方法]( https://pkmer.cn/Pkmer-Docs/10-obsidian/obsidian%E4%BD%BF%E7%94%A8%E6%8A%80%E5%B7%A7/jenemy/obsidian%E8%BE%BE%E4%BA%BA%E6%88%90%E9%95%BF%E4%B9%8B%E8%B7%AF_2-%E4%BD%BF%E7%94%A8%E7%BB%88%E6%9E%81%E5%B7%A5%E5%85%B7-dataview-%E9%87%8A%E6%94%BE%E7%AC%94%E8%AE%B0%E5%BA%93%E7%9A%84%E6%BD%9C%E5%8A%9B--javascript-api/#dvtasklisttasks-groupbyfile-%E6%96%B9%E6%B3%95) 可以知道 dv.taskList 用于将结果渲染成任务列表，数据源必须从 `page.file.tasks` 中获取，默认情况下如果数据从多个文档中获取，则会按文档名进行分组。

可见是因为 dv.taskList 对 tasks 的结果重新分组的结果，目前 dv 给出 taskList 的参数是无法干预这个结果的。

于是换个思路继续问 gpt

![image.png|650](https://cdn.pkmer.cn/images/202405302335386.png!pkmer)

这里 gpt 给出了一个思路，就是 既然 dv.taskList 就是给 task 数据重新分组的，那我们就手写一个分组函数，对这个分组函数进行排序。

实际运行起来 出现一个 错误

`Evaluation Error: TypeError: tasks.reduce is not a function at eval (eval at <anonymous> (plugin:dataview), <anonymous>:7`

继续追问：

![image.png|650](https://cdn.pkmer.cn/images/202405302339156.png!pkmer)

看到这里，就发现这里涉及一个关于数组的知识点，[DataArray 接口介绍]( https://pkmer.cn/Pkmer-Docs/10-obsidian/obsidian%E4%BD%BF%E7%94%A8%E6%8A%80%E5%B7%A7/jenemy/obsidian%E8%BE%BE%E4%BA%BA%E6%88%90%E9%95%BF%E4%B9%8B%E8%B7%AF_2-%E4%BD%BF%E7%94%A8%E7%BB%88%E6%9E%81%E5%B7%A5%E5%85%B7-dataview-%E9%87%8A%E6%94%BE%E7%AC%94%E8%AE%B0%E5%BA%93%E7%9A%84%E6%BD%9C%E5%8A%9B--javascript-api/#dataarray-%E6%8E%A5%E5%8F%A3%E4%BB%8B%E7%BB%8D )



> 我们可过 `dv.array()` 将一个普通的数组转换成 `DataArray` 类型，也可以反向操作将其转换成普通的 JavaScript 数组，比如：`dv.list(dv.current()).array()`。

gpt 给出的 `toArray()` 是错误的正确应该是

````
let tasks = dv.pages('"20-Diary"') 
.file
.tasks
.where(t => t.text.includes("") || t.text.includes("关键词2")) 
.array()
````

到这一步 虽然 gpt 没有给出可以运行的正确代码，但已经了解到了基本思路,就是先分组再进行排序。继续追问

![image.png|650](https://cdn.pkmer.cn/images/202405310004633.png!pkmer)

至此 基本接近最后结果了，我们已经可以把分组数组进行按所需要顺序排列了，下面就是依次对分组后的数据，用任务列表展示出来。

![image.png|650](https://cdn.pkmer.cn/images/202405310007649.png!pkmer)

gpt 是用控制台输出的结果，我们换成 dv.taskList 就已经得到想要的结果

## 实现代码

完整代码如下

````
```dataviewjs

let tasks = dv.pages('"20-Diary"') 
.file
.tasks
.where(t => t.text.includes("") || t.text.includes("关键词2")) 
.array()

 
// 按文件名分组
let groupedTasks = tasks.reduce((groups, task) => {
    const key = task.header.path; // 使用任务的 path 作为分组键
    (groups[key] = groups[key] || []).push(task);
    return groups;
}, {});
// 将分组后的对象转换为数组，并按照键名倒序排序
let sortedGroupedTasks = Object.entries(groupedTasks)
    .sort(([keyA], [keyB]) => keyB.localeCompare(keyA)) // 按键名倒序排序
    .reduce((sortedGroups, [key, value]) => {
        sortedGroups[key] = value; // 重新构建对象
        return sortedGroups;
    }, {});

Object.entries(sortedGroupedTasks).forEach(([key, tasks]) => {

    dv.taskList(tasks);
});

```
````

## 最终效果

![image.png](https://cdn.pkmer.cn/images/202405310009771.png!pkmer)

## 总结

通过以上步骤，我们成功实现了对任务列表的排序需求。通过手动转换数组类型并编写自定义排序函数，最终得到了按照来源文件名称倒序排列的任务列表。这个过程中，我们充分利用了 DataviewJS 的 API 和 JavaScript 语法的知识，通过与 GPT 的交互和追问，逐步解决了问题。这也展示了使用 DataviewJS 进行数据处理和自定义操作的灵活性和强大性。