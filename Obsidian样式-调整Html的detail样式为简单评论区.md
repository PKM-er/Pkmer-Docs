---
uid: 20231202184706
title: Obsidian 样式 - 调整 Html 的 detail 样式为简单评论区
tags:
  - 评论
  - 美化样式
  - CSS自定义
description: 通过修改 Html 语法中的 <details>评论区</details> 语法的样式来使它更像一个评论信息。
author: 熊猫别熬夜
type: other
draft: false
editable: false
modified: 20231202184836
---

# Obsidian 样式 - 调整 Html 的 detail 样式为简单评论区

## 样式效果

![Obsidian样式-调整Html的detail样式为简单评论区](https://cdn.pkmer.cn/images/202312021807784.jpg!pkmer)

通过修改 Html 语法中的 `<details>评论区</details>` 语法的样式来使它更像一个评论信息。

![Obsidian样式-调整Html的detail样式为简单评论区](https://cdn.pkmer.cn/images/202312021807222.gif!pkmer)

## 注意事项

> [!caution] 存在问题
> `<details>评论区</details>` 里面不支持 ob 的语法格式，单纯以文本形式展出，也就是不支持图片、双链、Markdown 语法等。

## 样式修改

可以将评论区放在笔记外 (非堆叠模式)，默认为关闭

![Obsidian样式-调整Html的detail样式为简单评论区](https://cdn.pkmer.cn/images/202312021845380.png!pkmer)

```css
/* @settings
name: details样式修改
id: Floating-side-menu-bar
settings:
-
	id: details-choice
	title: 是否评论区显示在外侧
	type: class-toggle
	default: false

*/

.theme-light details {
  background-color: rgba(252, 255, 203, 0.9);
}
.theme-dark details {
  background-color: rgba(56, 55, 56, 0.9);
}

details {
  position: absolute;
  font-weight: lighter;
  font-size: smaller;
  border-width: 1px;
  border-style: solid;
  border-radius: 10px;
  padding: 2px 3px 2px 3px;
  display: inline-block;
  transform: translateY(-3rem);
  z-index: 1;
}

details:not(details[open]) {
  right: calc(50% - var(--file-line-width) / 2 - 2rem);
  max-width: 6rem;
}

details[open] {
  max-width: 500px;
  z-index: 2;
}

/* 非堆叠模式 */

.details-choice .workspace-tabs:not(.mod-stacked) details[open] {
  right: calc(50% - var(--file-line-width) / 2 - 2rem);
}
body:not(.details-choice) .workspace-tabs:not(.mod-stacked) details[open]{
  left: calc(53.5% + var(--file-line-width) / 2);
}

/* 堆叠模式 */
.workspace-tabs.mod-stacked details {
  right: 1rem;
}

```
