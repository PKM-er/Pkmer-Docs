---
uid: 20240330182904
title: Admonition样式：彩色跑马灯框
tags:
  - Admonition
  - callout
  - 跑马灯
description: Callout彩色跑马灯样式
author: ProudBenzene
type: advanced
draft: false
editable: false
modified: 20240330184023
---

# Admonition 样式：彩色跑马灯框

## 需求

为了给「名人名言」增加一个醒目又漂亮的框，我参考了网上跑马灯方框的代码，略作修改使其成为了一个跑马灯 Callout 样式。

本来想做一个简约一点的，但是水平有限没搞出来，下次再试试。

## 效果展示

![](https://cdn.pkmer.cn/images/202403301833273.png!pkmer)

## 配置方法

复制下方代码为 CSS 文件，放入 Obsidian 的配置文件夹中的 snippets 文件夹，再在 Obsidian 外观设置中启用即可：

```css
/* From www.lingdaima.com, modified from cards to Callout by ProudBenzene */
.callout[data-callout="dictum"] {
 --border-radius: 15px;
 --border-width: 4px;
 appearance: none;
 position: relative;
 padding: 1em 2em;
 border: 0;
 background: rgb(5, 5, 22);
 font-size: 18px;
 font-weight: 500;
 color: #fff;
 z-index: 2;
 border-radius: 15px;
}

.callout[data-callout="dictum"]::after {
 --m-i: linear-gradient(#000, #000);
 --m-o: content-box, padding-box;
 content: "";
 position: absolute;
 left: 0;
 top: 0;
 width: 100%;
 height: 100%;
 padding: var(--border-width);
 border-radius: var(--border-radius);
 background-image: conic-gradient(
		#488cfb,
		#29dbbc,
		#ddf505,
		#ff9f0e,
		#e440bb,
		#655adc,
		#488cfb
	);
 -webkit-mask-image: var(--m-i), var(--m-i);
 mask-image: var(--m-i), var(--m-i);
 -webkit-mask-origin: var(--m-o);
 mask-origin: var(--m-o);
 -webkit-mask-clip: var(--m-o);
 mask-composite: exclude;
 -webkit-mask-composite: destination-out;
 filter: hue-rotate(0);
 animation: rotate-hue linear 500ms infinite;
 animation-play-state: paused;
}

.callout[data-callout="dictum"]:hover::after {
 animation-play-state: running;
}

@keyframes rotate-hue {
 to {
  filter: hue-rotate(1turn);
 }
}

.callout[data-callout="dictum"],
.callout[data-callout="dictum"]::after {
 box-sizing: border-box;
}

.callout[data-callout="dictum"]:active {
 --border-width: 5px;
}

/*******隐藏题头******/

.callout.callout[data-callout="dictum"] .callout-title {
  background-color: transparent;
  display: none;  /*使callout的题头行内排布*/
  visibility: hidden; /*不显示callout的题头*/
}

.callout.callout[data-callout="dictum"] .callout-title-inner {
  line-height:0;
  font-size:0;
  overflow:hidden;
}

.callout.callout[data-callout="dictum"] .callout-title img {
  border-radius: 1em;
  margin: auto;
  display: block;
}
.callout.callout[data-callout="dictum"] .callout-fold {
  display: none;
}
.callout.callout[data-callout="dictum"] .callout-icon {
  display: none;
}
```