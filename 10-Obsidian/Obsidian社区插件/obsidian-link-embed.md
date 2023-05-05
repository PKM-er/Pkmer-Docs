---
uid: 20230505144340
title: Obsidian 插件：Link Embed
description: 
author: 
type: other
draft: false
editable: false
modified: 20230505145906
---

# Obsidian 插件：Link Embed

## 概述

帮你将网页 URL 转换为嵌入预览卡片样式。

> [!Note] 插件名片
> - 插件名称：Link Embed
> - 插件作者：SErAphLi
> - 插件说明：帮你将网页 URL 转换为嵌入预览卡片样式。
> - 插件项目地址：[点我跳转](https://github.com/Seraphli/obsidian-link-embed)

## 效果&特性

![image.png](https://cdn.pkmer.cn/images/20230505144920.png)

- 自动从网页 URL 获取数据，并将其作为卡片样式放入到笔记中。

## 使用

- 支持从剪贴板中的 url 进行转化。
- 支持黏贴后自动转化，需要在插件设置中打开 `Auto Embed`

````YAML
```embed
title: '百度一下，你就知道'
image: 'https://dss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/topnav/newfanyi-da0cea8f7e.png'
description: '全球领先的中文搜索引擎、致力于让网民更便捷地获取信息，找到所求。百度超过千亿的中文网页数据库，可以瞬间找到相关的搜索结果。'
url: 'https://www.baidu.com'
```
````

### 兼容&原理

这一类插件一般都是使用网页转化服务，来完成读取网页，并输出网页结构化数据的能力。

一般依赖网上现成的转化服务，如 JSONLink，MicroLink，Iframely

| 网页转化服务        | 速度           | 稳定性           | 描述长度     | 使用量限制    |
|--------------------|---------------|------------------|--------------|-------------|
| JSONLink           | ⭐⭐⭐       | ⭐              | ⭐⭐⭐     | 无限制       |
| MicroLink(Default) | ⭐⭐⭐       | ⭐⭐⭐         | ⭐⭐        | 50 次/天      |
| Iframely           | ⭐⭐          | ⭐⭐           | ⭐          | 1000 次/月    |

>[!Tip] 提示
>- 你或许发现了，这个插件和我们介绍的 [[auto-card-link]] 很相似