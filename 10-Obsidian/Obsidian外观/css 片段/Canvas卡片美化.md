---
uid: 20230517230608
title: Obsidian 样式：Canvas 卡片美化
tags: [Obsidian, css, Canvas, 白板, 样式]
description: Obsidian 样式：Canvas 卡片美化
author: cuman
type: other
draft: false
editable: false
modified: 20230608233846
---

# Obsidian 样式：Canvas 卡片美化

canvas 是 obsidian 的白板插件，默认的卡片框看起来比较单调，可以对白板卡片做一定的美化。

## 卡片文字居中

canvas 卡片文字默认是左居中的，不太美观，可以让卡片文字默认居中。

```css
 /*
 * @Author: cumany cuman@qq.com
 * @Source: Pkmer.cn
*/
.canvas-node-container .canvas-node-content.markdown-embed:not(.is-loaded) {
  text-align: center;
}
```

## 白板隐私模式优化

有时候分享白板样式的时候需要隐藏自己信息，这就用到了隐私模式。

![image.png](https://cdn.pkmer.cn/images/202306082334645.png!pkmer)

但 Obsidian 的隐私模式只对英文有效，英文会自动打码，但中文却打码了个寂寞，经过 css 片段修复，完美解决了这个问题。效果如下：

![代码块相关样式_middle.png](https://cdn.pkmer.cn/images/202306082335594.png!pkmer)

```css
 /*
 * @Author: cumany cuman@qq.com
 * @Source: Pkmer.cn
*/
/* blur node */
.is-text-garbled .canvas-node  *,
.is-text-garbled .markdown-preview-section div pre code {
  text-shadow: 0 0 6px currentColor !important;
	-webkit-text-fill-color: transparent !important;
}
/* blur media */
.is-text-garbled .canvas-node-container div img,
.is-text-garbled .canvas-node-container div svg,
.is-text-garbled .canvas-node-container div video,
.is-text-garbled .canvas-node-container div webview,
.is-text-garbled .canvas-node-container div iframe {
  filter: blur(4px) !important;
}
```

## 多彩卡片框

如图这个效果

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

## 聚焦卡片特效

聚焦卡片意思是如果点击某个颜色的卡片，周围其他颜色的卡片就会黯淡，重点突出同色卡片。

效果如下：

![55.gif](https://cdn.pkmer.cn/images/202306082324174.gif!pkmer)

只要连接线跟卡片设置同一个颜色，即可实现高亮效果。

这个 css 最开始由 @boninall 设计，目前版本是在此基础上稍加修改后的版本。

```css
 /*
 * @Author: boninall  Modified by Cuman
 * @Source: Pkmer.cn
*/

.theme-dark .canvas:has(.is-focused.mod-canvas-color-1) .canvas-edges>:not(.mod-canvas-color-1),
.theme-dark .canvas:has(.is-focused.mod-canvas-color-2) .canvas-edges>:not(.mod-canvas-color-2),
.theme-dark .canvas:has(.is-focused.mod-canvas-color-3) .canvas-edges>:not(.mod-canvas-color-3),
.theme-dark .canvas:has(.is-focused.mod-canvas-color-4) .canvas-edges>:not(.mod-canvas-color-4),
.theme-dark .canvas:has(.is-focused.mod-canvas-color-5) .canvas-edges>:not(.mod-canvas-color-5),
.theme-dark .canvas:has(.is-focused.mod-canvas-color-6) .canvas-edges>:not(.mod-canvas-color-6),
.theme-dark .canvas:has(.is-focused.mod-canvas-color-custom) .canvas-edges>:not(.mod-canvas-color-custom),
/* .canvas:has(.is-focused:not(.mod-canvas-color-1, .mod-canvas-color-2, .mod-canvas-color-3, .mod-canvas-color-4, .mod-canvas-color-5, .mod-canvas-color-6, .mod-canvas-color-custom)) .canvas-node:not(.is-focused):is(.mod-canvas-color-1, .mod-canvas-color-2, .mod-canvas-color-3, .mod-canvas-color-4, .mod-canvas-color-5, .mod-canvas-color-6, .mod-canvas-color-custom),  */
.theme-dark .canvas:has(.is-focused.mod-canvas-color-1) .canvas-node.is-themed:not(:is(.mod-canvas-color-1)),
.theme-dark .canvas:has(.is-focused.mod-canvas-color-2) .canvas-node.is-themed:not(:is(.mod-canvas-color-2)),
.theme-dark .canvas:has(.is-focused.mod-canvas-color-3) .canvas-node.is-themed:not(:is(.mod-canvas-color-3)),
.theme-dark .canvas:has(.is-focused.mod-canvas-color-4) .canvas-node.is-themed:not(:is(.mod-canvas-color-4)),
.theme-dark .canvas:has(.is-focused.mod-canvas-color-5) .canvas-node.is-themed:not(:is(.mod-canvas-color-5)),
.theme-dark .canvas:has(.is-focused.mod-canvas-color-6) .canvas-node.is-themed:not(:is(.mod-canvas-color-6)),
.theme-dark .canvas:has(.is-focused.mod-canvas-color-custom) .canvas-node.is-themed:not(.mod-canvas-color-custom) {
  filter: brightness(0.8) grayscale(0.9);
}

.theme-light .canvas:has(.is-focused.mod-canvas-color-1) .canvas-edges>:not(.mod-canvas-color-1),
.theme-light .canvas:has(.is-focused.mod-canvas-color-2) .canvas-edges>:not(.mod-canvas-color-2),
.theme-light .canvas:has(.is-focused.mod-canvas-color-3) .canvas-edges>:not(.mod-canvas-color-3),
.theme-light .canvas:has(.is-focused.mod-canvas-color-4) .canvas-edges>:not(.mod-canvas-color-4),
.theme-light .canvas:has(.is-focused.mod-canvas-color-5) .canvas-edges>:not(.mod-canvas-color-5),
.theme-light .canvas:has(.is-focused.mod-canvas-color-6) .canvas-edges>:not(.mod-canvas-color-6),
.theme-light .canvas:has(.is-focused.mod-canvas-color-custom) .canvas-edges>:not(.mod-canvas-color-custom),
/* .canvas:has(.is-focused:not(.mod-canvas-color-1, .mod-canvas-color-2, .mod-canvas-color-3, .mod-canvas-color-4, .mod-canvas-color-5, .mod-canvas-color-6, .mod-canvas-color-custom)) .canvas-node:not(.is-focused):is(.mod-canvas-color-1, .mod-canvas-color-2, .mod-canvas-color-3, .mod-canvas-color-4, .mod-canvas-color-5, .mod-canvas-color-6, .mod-canvas-color-custom),  */
.theme-light .canvas:has(.is-focused.mod-canvas-color-1) .canvas-node.is-themed:not(:is(.mod-canvas-color-1)),
.theme-light .canvas:has(.is-focused.mod-canvas-color-2) .canvas-node.is-themed:not(:is(.mod-canvas-color-2)),
.theme-light .canvas:has(.is-focused.mod-canvas-color-3) .canvas-node.is-themed:not(:is(.mod-canvas-color-3)),
.theme-light .canvas:has(.is-focused.mod-canvas-color-4) .canvas-node.is-themed:not(:is(.mod-canvas-color-4)),
.theme-light .canvas:has(.is-focused.mod-canvas-color-5) .canvas-node.is-themed:not(:is(.mod-canvas-color-5)),
.theme-light .canvas:has(.is-focused.mod-canvas-color-6) .canvas-node.is-themed:not(:is(.mod-canvas-color-6)),
.theme-light .canvas:has(.is-focused.mod-canvas-color-custom) .canvas-node.is-themed:not(.mod-canvas-color-custom) {
  filter:grayscale(0.9);
}

/* .canvas:has(.is-focused:not(.mod-canvas-color-1, .mod-canvas-color-2, .mod-canvas-color-3, .mod-canvas-color-4, .mod-canvas-color-5, .mod-canvas-color-6, .mod-canvas-color-custom)) .canvas-node:not(.is-focused):is(.mod-canvas-color-1, .mod-canvas-color-2, .mod-canvas-color-3, .mod-canvas-color-4, .mod-canvas-color-5, .mod-canvas-color-6, .mod-canvas-color-custom),  */
 .canvas:has(.is-focused.mod-canvas-color-1) .canvas-node.is-themed:is(.mod-canvas-color-1),
 .canvas:has(.is-focused.mod-canvas-color-3) .canvas-node.is-themed:is(.mod-canvas-color-3),
 .canvas:has(.is-focused.mod-canvas-color-2) .canvas-node.is-themed:is(.mod-canvas-color-2),
 .canvas:has(.is-focused.mod-canvas-color-4) .canvas-node.is-themed:is(.mod-canvas-color-4),
 .canvas:has(.is-focused.mod-canvas-color-5) .canvas-node.is-themed:is(.mod-canvas-color-5),
 .canvas:has(.is-focused.mod-canvas-color-6) .canvas-node.is-themed:is(.mod-canvas-color-6),
 .canvas:has(.is-focused.mod-canvas-color-custom) .canvas-node.is-themed.mod-canvas-color-custom {
  box-shadow:
           0 0px 8px -7px rgba(var(--canvas-color), 0.8),
           0 0px 8px -7px rgba(var(--canvas-color), 0.8),
           0px 0 8px -1px   rgba(var(--canvas-color), 0.4),
           0px 0 8px -1px   rgba(var(--canvas-color), 0.4);
}

 .canvas:has(.is-focused.mod-canvas-color-1) .canvas-edges>.mod-canvas-color-1 path.canvas-interaction-path,
 .canvas:has(.is-focused.mod-canvas-color-2) .canvas-edges>.mod-canvas-color-2 path.canvas-interaction-path,
 .canvas:has(.is-focused.mod-canvas-color-3) .canvas-edges>.mod-canvas-color-3 path.canvas-interaction-path,
 .canvas:has(.is-focused.mod-canvas-color-4) .canvas-edges>.mod-canvas-color-4 path.canvas-interaction-path,
 .canvas:has(.is-focused.mod-canvas-color-5) .canvas-edges>.mod-canvas-color-5 path.canvas-interaction-path,
 .canvas:has(.is-focused.mod-canvas-color-6) .canvas-edges>.mod-canvas-color-6 path.canvas-interaction-path,
 .canvas:has(.is-focused.mod-canvas-color-custom) .canvas-edges>.mod-canvas-color-custom path.canvas-interaction-path {
  stroke: rgba(var(--canvas-color), 0.1);
  stroke-width: calc(12 * var(--zoom-multiplier));
}

.canvas-node-content.markdown-embed table {
  text-align: start;
}
```