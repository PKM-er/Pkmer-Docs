---
uid: 20230517230608
title: Canvas 卡片美化
tags: [css]
description: 
author: 
type: other
draft: false
editable: false
modified: 20230517230925
---

# Canvas 卡片美化

canvas 是 obsidian 的白板插件，默认的卡片框看起来比较单调，可以对白板卡片做一定的美化

比如这个效果

![image.png](https://cdn.pkmer.cn/images/202305172308752.png!pkmer)

```css
.canvas-node {
    background-color: var(--background-primary);
    border-radius: 0px;
    --shadow-border-themed-inset: inset 0 0 0 1px rgb(var(--canvas-color));
    --shadow-border-themed: 0 0 0 2px rgb(var(--canvas-color));
    position: absolute;
    width: 0;
    height: 0;
    box-shadow: 15px 15px 0 -2.5px #fff, 15px 15px 0 0 var(--text-normal);
    border: 2.5px solid var(--text-normal);
  }
  
  .canvas-node.is-themed .canvas-node-content {
    background: var(--background-primary);
  }
  
  .canvas-node.is-themed:before {
    background: rgb(var(--canvas-color));
    content: "";
    position: absolute;
    top: 15px;
    left: 15px;
    width: 100%;
    height: 100%;
    border-radius: 0px;
  }

  .canvas-node-container {
  background: transparent;
  border-radius: 0px;
  border: none;
  contain: strict;
  display: flex;
  height: 100%;
}
  
.canvas-node-content.markdown-embed > .markdown-embed-content > .markdown-preview-view .markdown-preview-pusher + div > *:first-child {
    color: rgb(var(--canvas-color));
}
```