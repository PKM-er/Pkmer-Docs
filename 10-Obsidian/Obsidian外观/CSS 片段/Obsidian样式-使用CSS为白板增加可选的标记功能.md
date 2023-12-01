---
uid: 20231121204343
title: Obsidian 样式 ： 使用 CSS 为白板增加可选的“标记”功能
tags: ["Obsidian", "CSS", "白板"]
description: Obsidian 样式 ： 使用 CSS 为白板增加可选的“标记”功能
author: tk
type: other
draft: false
editable: false
modified: 20231128164351
---

# Obsidian 样式 ： 使用 CSS 为白板增加可选的“标记”功能

分享一下自用 CSS，为白板增加可选的“标记”功能。这只是用于增加对重点内容的关注，**不建议过于大量的使用**。如果有需要可以使用更专业的工具，例如 Excalidraw。

### 效果展示

![白板增强.png](https://cdn.pkmer.cn/images/%E7%99%BD%E6%9D%BF%E5%A2%9E%E5%BC%BA.png!pkmer)

### 使用方法

在白板中添加卡片，为其增加 `cssclasses` 属性即可启用相应的功能。嵌入到白板中的笔记文件如果有需要，也可以使用这一方法。

示例：

```yaml
---
cssclasses: canvaslabel
---
<span style="font-size: 100px;">😂</span>
```

使用 `canvaslabel` 可以隐藏卡片的边框和背景，并且无需选中即可与内部的元素交互（例如链接的点击和悬停预览）。可用于添加一些文字或符号的标记，也可以用于不希望直接嵌入而是鼠标悬停查看的一些笔记。该 CSS 会使卡片点击一次就进入编辑状态，如果想查看预览状态可以使用拖动。

使用 `canvasborder` 去掉背景留下加粗边框，可以用于作为框选类标记。这个用处比较小，属于顺带添加。通常使用“组”进行框选就好了，如果不希望卡片跟着“组”跑可以用这个。

`canvasred` 可以为卡片提供红色背景的单色填充，这有点类似于“Callouts”格式。当现有的卡片已经使用了多种颜色，此时想加入一段更加高亮的内容便可以使用单色填充背景。不建议为长文本使用该功能，背景颜色可能会干扰阅读，作为标注就可以了。总共设置了九种不同的颜色，详见代码部分开头的注释。

特别提一下，使用的时候**需要注意白板中图层的高低**，拖动一下就到上面了。除了“组”位于底部不必担心外，其它卡片都是有可能遮住标记的。

### CSS 代码

```css
/*
为白板中的卡片或嵌入的笔记文件添加cssclasses内容使用对应的样式：
- “canvaslabel”：隐藏边框和背景并且无需选中即可与链接交互
- “canvasborder”：去掉背景留下加粗边框
- “canvasred”：红色背景单色填充
- “canvasorange”：橙色背景单色填充
- “canvasyellow”：黄色背景单色填充
- “canvasgreen”：绿色背景单色填充
- “canvasblue”：蓝色背景单色填充
- “canvaspurple”：紫色背景单色填充
- “canvaspink”：粉色背景单色填充
- “canvasbrown”：棕色背景单色填充
- “canvasgray”：灰色背景单色填充
*/

/*卡片或笔记本身像标签一样，隐藏边框和背景并且无需选中即可与链接交互*/
.canvas-node:has(.canvaslabel) .canvas-node-content-blocker {display: none;}
.canvas-node:has(.canvaslabel) .markdown-preview-view {padding: 0px !important;overflow: visible;}
.canvas-node-container:has(.canvaslabel) {background: none;box-shadow: none; border: none;} /*隐藏背景和边框，如果修改了颜色会失效（背景改变了颜色但依旧有高透明度，同时背景的边缘有自带的细边框，倒是可用作框选）*/
.canvas-node:has(.canvaslabel) .canvas-node-label {display: none;} /*隐藏标签，可以让嵌入笔记文件无论设置都隐藏标签（就是上方名称）*/

/*去背景留边框，可以用作框选*/
.canvas-node-container:has(.canvasborder) {background: none;box-shadow: none; border: 4px solid #FF0000;} /*隐藏背景，加粗边框同时改为默认红色。修改了颜色后可继续使用，但背景不再是纯透明 */

/*修改卡片背景颜色同时隐藏边框，采用单色填充用于一些特殊标记，如有必要配合自带修改颜色功能可以让缩放时显示颜色*/
/*红色*/
.canvas-node-container:has(.canvasred) {background-color: #FA7D78;border: none;}
/*橙色*/
.canvas-node-container:has(.canvasorange) {background-color: #F2A150;border: none;}
/*黄色*/
.canvas-node-container:has(.canvasyellow) {background-color: #F7DA8C;border: none;}
/*绿色*/
.canvas-node-container:has(.canvasgreen) {background-color: #81CF73;border: none;}
/*蓝色*/
.canvas-node-container:has(.canvasblue) {background-color: #68B3EE;border: none;}
/*紫色*/
.canvas-node-container:has(.canvaspurple) {background-color: #C1BDE6;border: none;}
/*粉色*/
.canvas-node-container:has(.canvaspink) {background-color: #FFC0CB;border: none;}
/*棕色*/
.canvas-node-container:has(.canvasbrown) {background-color: #8B512E;border: none;}
/*灰色*/
.canvas-node-container:has(.canvasgray) {background-color: #ACACAC;border: none;}
```