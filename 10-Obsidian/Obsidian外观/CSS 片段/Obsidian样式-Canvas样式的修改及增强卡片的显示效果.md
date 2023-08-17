---
uid: 20230722053329
title: Obsidian 样式：Canvas 样式修改及增强卡片的显示效果
tags: [Canvas, css, 样式]
description: Canvas 样式的修改及增强卡片的显示效果
author: 熊猫别熬夜
type: other
draft: false
editable: false
modified: 20230723164619
---

# Obsidian 样式：Canvas 样式修改及增强卡片的显示效果

**Canvas 样式的修改及增强卡片的显示效果**：

![Pasted image 20230722052842](https://cdn.pkmer.cn/images/Pasted%20image%2020230722052842.png!pkmer)

## Canvas 卡片局部 CSS 设置

### 卡片的 label 的 CSS 设置

```css
  /*卡片标签 */
.canvas-node-label {
    /* left: 10px; */
    /* font-family: "Times New Roman","黑体" ; */
    /* font-style: italic; */
    font-weight: bolder;
    font-size: 150%;
    background-color: rgb(var(--canvas-color));
    border-radius: 100px;
    padding: 0 10px;
    box-sizing: border-box;
    color: white;
}
```

> 添加卡片的 label 背景以及修改配色

### 卡片连线之间的 label 的 CSS 设置

```css
/* 卡片连线之间的标签 */
.canvas-path-label {
    font-size: calc(var(--font-ui-large) * var(--zoom-multiplier)*1.2);
    background-color: rgb(var(--canvas-color));
    text-align: center;
    max-width: calc(17em * var(--zoom-multiplier));
    font-weight: bold;
    color: black;
}
```

> 添加卡片连线之间的 label 背景以及修改配色

### 缩略卡片占位符大小的 CSS 设置

```css
body{
/* 调整缩略卡片标签的放大倍数 */
    --canvas-card-label-zoom:1.6;
}
/* 缩略图字体大小 */
.canvas-node-placeholder {
    font-size: calc(var(--font-ui-large) * var(--zoom-multiplier) * var(--canvas-card-label-zoom));
}
```

> 设置 Canvas 缩略图后卡片占位符大小随窗口变化，这里控制放大倍数，让占位符更加明显。

### 降低卡片背景透明度的 CSS 设置

```css
/* 卡片透明度 */
body{
/* 调整卡片颜色背景的透明度 */
    --canvas-card-opacity: 0;
}

/* 无色的卡片的卡片透明度 */
.canvas-wrapper .canvas-node:not(.is-themed) .canvas-node-content {
    background-color: rgba(var(--mono-rgb-0),var(--canvas-card-opacity));
  }

/* 有色的卡片的卡片透明度 */
.canvas-wrapper .canvas-node .canvas-node-content {
    background-color: rgba(var(--canvas-color), var(--canvas-card-opacity));
  }
```

> 原生的 Canvas 卡片背景颜色可能会影响笔记的阅读，可以通过该 CSS 片段取消背景颜色。

### 加粗卡片线宽以及弧度的 CSS 设置

```css
/* 调整卡片的线宽 */
.canvas-node-container {
    border-width: var(--canvas-card-border-width);
    border-style: var(--canvas-card-border-style);
    border-radius: 0; /* 设置边框直角弧度为0 */
}
```

> [!tip]
> 取消卡片背景的透明度会降低卡片的识别率。为了增强卡片的视觉效果，可以考虑增加卡片线条的粗细。

### 卡片激活状态的 CSS 设置

```css
/* 未选择卡片时标签的颜色 */
.canvas-node.is-themed .canvas-node-label {
    color: white;
}
/* 选中卡片时标签的颜色 */
.canvas-node.is-themed .canvas-node.is-selected .canvas-node-label, .canvas-node.is-focused .canvas-node-label {
    color: white;
}
```

## 完整 css 片段

```css
/* canvas一些参数设置  */
body {
    /* 调整卡片线型 */
    /* 1. `none`: 没有边框 2. `dotted`: 点状边框 3. `dashed`: 虚线边框
    4. `solid`: 实线边框 5. `double`: 双线边框 6. `groove`: 3D凹槽边框
    7. `ridge`: 3D垄状边框 8. `inset`: 3D内凹边框 9. `outset`: 3D外凸边框 */
    --canvas-card-border-style: solid;

    /* 调整卡片的线宽 */
    --canvas-card-border-width: 6px;

    /* 调整卡片颜色背景的透明度 */
    --canvas-card-opacity: 0;

    /* 调整缩略卡片标签的放大倍数 */
    --canvas-card-label-zoom:1.6;
}

/* 调整卡片的线宽 */
.canvas-node-container {
    border-width: var(--canvas-card-border-width);
    border-style: var(--canvas-card-border-style);
    border-radius: 0; /* 设置边框直角弧度为0 */
}

/* 卡片透明度 */
/* 无色的卡片的卡片透明度 */
.canvas-wrapper .canvas-node:not(.is-themed) .canvas-node-content {
    background-color: rgba(var(--mono-rgb-0),var(--canvas-card-opacity));
  }

/* 有色的卡片的卡片透明度 */
.canvas-wrapper .canvas-node .canvas-node-content {
    background-color: rgba(var(--canvas-color), var(--canvas-card-opacity));
  }

  /*卡片标签 */
.canvas-node-label {
    /* left: 10px; */
    /* font-family: "Times New Roman","黑体" ; */
    /* font-style: italic; */
    font-weight: bolder;
    font-size: 150%;
    background-color: rgb(var(--canvas-color));
    border-radius: 100px;
    padding: 0 10px;
    box-sizing: border-box;
    color: white;
}

/* 卡片连线之间的标签 */
.canvas-path-label {
    font-size: calc(var(--font-ui-large) * var(--zoom-multiplier)*1.2);
    background-color: rgb(var(--canvas-color));
    text-align: center;
    max-width: calc(17em * var(--zoom-multiplier));
    font-weight: bold;
    color: black;
}

/* 降低卡片背景透明度的CSS设置 */
.canvas-node-placeholder {
    font-size: calc(var(--font-ui-large) * var(--zoom-multiplier)*var(--canvas-card-label-zoom));
    font-weight: var(--font-semibold);
}

/* 未选择卡片时标签的颜色 */
.canvas-node.is-themed .canvas-node-label {
    color: white;
}
/* 选中卡片时标签的颜色 */
.canvas-node.is-themed .canvas-node.is-selected .canvas-node-label, .canvas-node.is-focused .canvas-node-label {
    color: white;
}
```
