---
uid: 2023082011355036
title: Obsidian 插件：【Readme】GTD No Next Step
tags: ['obsidian插件', 'readme']
description: 为没有定义下一步的“项目”文件添加一个“完成事项”徽章。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】GTD No Next Step

> [!Note] 插件名片
> - 插件名称：GTD No Next Step
> - 插件作者：Tobias Davis
> - 插件说明：为没有定义下一步的“项目”文件添加一个“完成事项”徽章。
> - 插件分类：['obsidian插件', 'readme']
> - 项目地址：[点我访问](https://github.com/saibotsivad/obsidian-gtd-no-next-step)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?gtd-no-next-step)

## 概述

为没有定义下一步的“项目”文件添加一个“完成事项”徽章。

![GTD No Next Step](https://cdn.pkmer.cn/covers/gtd-no-next-step.png!pkmer)

> [!tip] 原文出处
> 
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/saibotsivad/obsidian-gtd-no-next-step/main/README.md)
> 

---

## Readme(翻译）

下面是 [[gtd-no-next-step]] 插件的自述翻译


GTD：没有下一步

Obsidian插件用于GTD工作流，在没有定义下一步的项目上添加徽章。
我的GTD工作流程

我的Obsidian工作流程是，每个GTD“项目”都是一个文件，存放在名为“Projects”的文件夹中：

```
Projects/
	取回给爸爸的文件.md
	启动令人惊叹的播客.md
	更换货车挡风玻璃.md
```

我还使用了[Tasks](https://publish.obsidian.md/tasks/)插件，它允许您像正常添加任务一样，并添加查询它们的视图：

```md
- [ ] 给Fred打电话，获取挡风玻璃店的电话号码 #next-step
```

这对我很有用，因为我可以为带有`#next-step`标签的任务设置任务查询：

``````md
```tasks
未完成
标签包含 #next-step
```
``````

我还使用`#waiting-for`标签来指示下一步是什么，但依赖于外部方：

```md
- [ ] #waiting-for Fred回复我，告诉我挡风玻璃店的电话号码
```
我想知道的是是否有任何“项目”（“项目”文件夹中的文件）没有下一步，并且没有等待中。

这些项目文件需要检查，可能需要整理：也许项目已经完成，或者我实际上还没有经过思考决定下一步。
## 它是什么样子的

![](./example.png)
## 许可证

根据[非常开放许可证](http://veryopenlicense.com/)发布并免费提供。



