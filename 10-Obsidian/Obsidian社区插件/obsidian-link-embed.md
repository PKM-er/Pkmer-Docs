---
uid: 20230505144340
title: Obsidian 插件：Link Embed 帮你将网页 URL 转换为嵌入预览卡片样式
tags: [Obsidian, 插件, 网页, 链接, 美化, 卡片样式]
description: Obsidian 插件：Link Embed 帮你将网页 URL 转换为嵌入预览卡片样式。
author: OS
type: other
draft: false
editable: false
modified: 20230603020822
---

# Obsidian 插件：Link Embed 帮你将网页 URL 转换为嵌入预览卡片样式

## 概述

帮你将网页 URL 转换为嵌入预览卡片样式。

> [!Note] 插件名片
> - 插件名称：Link Embed
> - 插件作者：SErAphLi
> - 插件说明：帮你将网页 URL 转换为嵌入预览卡片样式。
> - 插件项目地址：[点我跳转](https://github.com/Seraphli/obsidian-link-embed)

## 效果&特性

![image.png](https://cdn.pkmer.cn/images/20230505144920.png!pkmer)

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

> [!Tip] 推荐阅读
> - [[supercharged-links-obsidian]]：可帮助您根据笔记元数据（例如标签或 YAML 前言属性）设置保管库中链接的样式。可以自动向链接添加颜色、表情符号或其他样式，使其更醒目的进行导航。
> - [[obsidian-auto-link-title]]：自动在粘贴时，提取网页链接标题，创建一个 Markdown 链接形式与正确的标题
> - [[url-into-selection]]：使用常规 Ctrl/Cmd+V 将链接（URL）插入到选定的文本中。也可以反过来，通过命令面板/快捷键将文本插入到选定的链接（URL）中
> - [[external-favicon]]：可以在不使用任何自定义 CSS 的情况下看到链接对应的网站图标
> - [[link-favicon]]：可以在不使用任何自定义 CSS 的情况下看到链接对应的网站图标
> - [[obsidian-rich-links]]：为你笔记中的链接，增加美化样式
> - [[auto-card-link]]：根据你设定的规则动态高亮显示文本