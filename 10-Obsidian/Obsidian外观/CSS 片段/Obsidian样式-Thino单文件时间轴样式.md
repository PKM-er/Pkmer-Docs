---
uid: 20231205164730
title: Obsidian 样式：Thino 单文件时间轴样式
tags: [obsidian, Thino, 美化]
description: Thino单文件时间轴样式
author: Cuman
type: other
draft: false
editable: false
modified: 20231206100026
---

# Obsidian 样式：Thino 单文件时间轴样式

## 前言

[[00_Thino 用户指南|Thino]] ，也就是社区更熟知的 Obsidian Memos，经过 PKmer 团队的开发，目前已经迭代到了 2.1.3 版本 并增加了下面特性：

- 可以选定某一个保存位置，而不是仅限于日记模式
- 可以选定单文件模式
- 单文件模式中，每一个 thino 会保存成 callout

引入了单文件特性后，每个随笔将被写入一个独立的文件中。这使得我们能够实现一个时间轴效果，让每天的笔记日程一目了然。



![](https://cdn.pkmer.cn/images/202312060854791.png!pkmer)

## 效果图

开启片段后的效果

![image.png|400](https://cdn.pkmer.cn/images/202312051626330.png!pkmer)

开启片段前后对比变化

![obsidian.gif](https://cdn.pkmer.cn/images/202312051644210.gif!pkmer)

## css 代码

```css
/* thino 2.1.3 by Pkmer.cn*/
.callout.callout[data-callout~=thino] {
  --callout-icon: "clock-3";
  --callout-padding: 0px;
  --callout-title-padding: 10px;
  --callout-content-padding: 12px;
  border: unset;
  padding:0;
  margin:0;
  background-color: transparent;
  clear: both;
}
 
 .callout.callout[data-callout~=thino] .callout-title {
  float: left;
  width:9rem;
 flex-direction: row-reverse;
  text-align: right;
  align-content: center;
  align-items: center;
  background-color: transparent;
  padding: var(--callout-title-padding);
}
.callout.callout[data-callout~=thino] > .callout-title .callout-icon {
  background-color:  var(--background-primary);
  margin-right: -1.2rem;
  transform: scale(1.2);
  border-radius: 20px;
  z-index: 1;

}
 
.callout.callout[data-callout~=thino] .callout-content {
  background-color: rgb(var(--callout-color), 0.1);
  padding-top:2px;
  border-left: 4px solid rgb(var(--callout-color),0.7);
  z-index: 0;
}


.callout.callout[data-callout~=thino] .callout-content p {
  margin-block-start:1em;

}
 
  
```

## 题外话

如果还没有使用 Thino 的同学，建议关注 [社区众筹插件 (pkmer.cn)](https://pkmer.cn/products/productDetails/)，现在进入内测阶段，立即加入并享受早鸟优惠！名额有限~

更多的 Thino 介绍参考

[[00_Thino 用户指南]]

[[03_Thino FAQ]]