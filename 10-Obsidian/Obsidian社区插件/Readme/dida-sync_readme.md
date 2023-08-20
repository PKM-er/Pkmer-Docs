---
uid: 2023082011354633
title: Obsidian 插件：【Readme】Dida Todo Sync
tags: ['obsidian插件', 'readme']
description: 将滴答清单(ticktick)同步到Obsidian
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】Dida Todo Sync

> [!Note] 插件名片
> - 插件名称：Dida Todo Sync
> - 插件作者：eightHundreds
> - 插件说明：将滴答清单(ticktick)同步到Obsidian
> - 插件分类：['obsidian插件', 'readme']
> - 项目地址：[点我访问](https://github.com/eightHundreds/obsidian-dida-sync)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?dida-sync)

## 概述

将滴答清单(ticktick)同步到Obsidian

![Dida Todo Sync](https://cdn.pkmer.cn/covers/dida-sync.jpeg!pkmer)

> [!tip] 原文出处
> 
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/eightHundreds/obsidian-dida-sync/master/README.md)
> 

---

## Readme(翻译）

下面是 [[dida-sync]] 插件的自述翻译


# 滴答清单同步

[中文](./README.md)
## Quick Start

0. Enter your Dida account password in the configuration.

1. Create a note and add the following configuration at the top of the note:
```
---
dida: true
---
```

2. Execute the command `Dida Todo Sync: Sync Todos`
**Default Behavior**

- By default, sync all todos within the past six months (including completed and uncompleted ones, but excluding abandoned ones).
- Sort by time in descending order.
# 配置
配置在笔记头部的front-matter

- dida: 这篇笔记是否开启滴答清单同步
    - projectId: 项目id, 过滤出指定清单下的内容, projectId需要到滴答清单web版获取
    ![](./docs/dida.jpg)
    - tags: 过滤出包含指定标签内容, 数组类型
    - startDate: 同步从哪天开始到现在的内容. 默认是半年前
    - taskId: 任务id,同步指定任务
    ![](./docs/task-dida.jpg)
## 举例

**简单配置**

```
dida: true
```

**配置projectId和tags**

```
dida: 
  projectId: xxx
  tags: 
    - 标签1
    - 标签2
  startDate: 2023-01-01
```
(注意缩进是2个空格)
# TODO  

- [x] star过10个补充文档
- [x] star过20支持ticktick, 上架obsidian([进行中](https://github.com/obsidianmd/obsidian-releases/pull/2193))



