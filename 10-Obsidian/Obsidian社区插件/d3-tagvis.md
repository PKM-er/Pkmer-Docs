---
uid: 2025042920524283
title: Obsidian 插件：Tagvis
tags: ['图表与可视化', '界面优化', '效率工具', 'obsidian插件']
description: 把你的标签以可定制的旭日图形式直观呈现出来。
author: OS
type: other
draft: false
editable: false
modified: 20251017163200
---

# Obsidian 插件：Tagvis

## 概述

Tag Vis 是一款Obsidian插件，通过可配置的旭日图（sunburst chart）可视化您的标签体系，帮助探索标签结构及其组合关系，直观展示不同标签之间的层级和关联。该插件需要依赖Dataview运行，支持自定义配置参数如初始标签（initialTag）、最大深度（maxDepth）、忽略特定标签的文件（ignoreFilesWithTags）、筛选特定标签（filterTags）以及图表尺寸（layout.width/height），适用于需要分析复杂标签网络或优化知识管理的场景，例如快速定位核心标签（如#work）下的文件分布，或过滤无关标签（如#archived）以聚焦关键内容。目前处于开发阶段，可通过BRAT插件安装测试版。


> [!Note] 插件名片
> - 插件名称：Tagvis
> - 插件作者：Mason Bryant
> - 插件说明：把你的标签以可定制的旭日图形式直观呈现出来。
> - 插件分类：['图表与可视化', '界面优化', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/mason-bryant/Obsidian-Tagvis)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?d3-tagvis)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/mason-bryant/Obsidian-Tagvis/main/README.md)

## 效果

![d3-tagvis|700](https://cdn.pkmer.cn/images/20251017162542518.png!pkmer)


## 使用


作者提供了一些官方示例如

标记有 #ai 的笔记旭日图

```tagvis
{
	"initialTag": "#ai",
	"maxDepth": 2,
	"ignoreFilesWithTags": ["#foo", "#bar"],
	"filterTags": ["#important"],
	"maxChildren": 15,
	"layout": {
		"width": 800,
		"height": 800
	}
}
```

标记有 #work 的笔记旭日图

```tagvis
{
	"initialTag": "#work",
	"maxDepth": 1,
	"ignoreFilesWithTags": ["#archived"],
	"filterTags": [],
	"maxChildren": 25,
	"layout": {
	}
}
```

我这里也是用这个统计了，我平时用 [[obsidian-memos|obsidian-memos]] 收集灵感或便捷网站工具的

![image.png](https://cdn.pkmer.cn/images/20251017163045841.png!pkmer)
