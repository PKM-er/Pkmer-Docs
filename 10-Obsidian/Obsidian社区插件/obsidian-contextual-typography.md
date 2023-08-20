---
uid: 20230703140246
title: Obsidian 插件:Contextual Typography 增强阅读模式样式
tags: [样式, 工具]
description: 
author: cuman
type: basic
draft: false
editable: false
modified: 20230703144259
---

# Obsidian 插件:Contextual Typography 增强阅读模式样式

> [!Note] 插件名片
> - 插件名称：Contextual Typography
> - 插件作者：mgmeyers
> - 插件说明：在阅读模式中，该插件为所有顶级 div 添加了一个 data-tag-name 属性，其中包含子标签的名称，为自定义 css 实现更精准的选择控制。
> - 插件分类：样式工具
> - 插件项目地址：[点我访问](https://github.com/mgmeyers/obsidian-contextual-typography)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsidian-contextual-typography)

## 概述

这个插件属于高级辅助插件，但使用起来非常简单。因为没有任何设置项，开启后对 Obsidian 本身也没有影响。如果某个主题或者片段要求安装这个插件，安装后启用就好了，几乎对你没什么不好的负面影响。

## 用法

插件本身没有任何 css 效果，需要懂 css 开发的，写 css 片段才能出现相应效果，有些主题，或者片段要求用户安装这个插件，就是为了实现更复杂的控制的效果。

比如想实现“一级标题下如果紧跟着是二级标题，那么二级标题需要跟一级标题的行间距需要自定义”，就这么一个简单需求如果用 Obsidian 官方给的默认元素就实现起来非常棘手。

比如插件作者给了一个这样的演示。就非常明了，这是因为 Contextual Typography 插件给顶级 div 元素增加了“data-tag-name”属性，可以很方便的用 css 书写。

```css
.markdown-preview-view div[data-tag-name="h1"] + div > h2 {
  margin-top: 1.8888888889rem;
}
```

之前

![Pasted image 20230703141714](https://cdn.pkmer.cn/images/202307031418179.png!pkmer)

使用片段后,H1 和 H2 的行间距缩小了。

![image.png](https://cdn.pkmer.cn/images/202307031418663.png!pkmer)
