---
uid: 20240909130144
title: 自定义 Excalidraw 脚本 -Frame 框架自适应大小
tags: [Excalidraw脚本]
description: Excalidraw 脚本 -Frame 框架自适应大小
author: 熊猫别熬夜
type: other
draft: false
editable: false
modified: 20240909130219
---

# 自定义 Excalidraw 脚本 -Frame 框架自适应大小

## Frame 框架自适应大小

![24.06.18_自定义Excalidraw脚本-Frame框架自适应大小.md](https://cdn.pkmer.cn/images/202409091301049.gif!pkmer)

功能：功能是将“frame”的大小和位置自适应到其中包含的元素。

## 源码

```js
await ea.addElementsToView();
const els = ea.getViewElements();
const frameEls = els.filter(el => el.type === "frame");

for (let frameEl of frameEls) {
  let minX = Infinity;
  let maxY = -Infinity;
  let maxX = -Infinity;
  let minY = Infinity;

  for (let i of els) {
    if (i.frameId === frameEl.id) {
      if (i.x < minX) minX = i.x;
      if (i.x + i.width > maxX) maxX = i.x + i.width;
      if (i.y < minY) minY = i.y;
      if (i.y + i.height > maxY) maxY = i.y + i.height;
    }
  }

  // 更新frame的大小和位置
  frameEl.x = minX - 20;
  frameEl.y = minY - 20;
  frameEl.width = maxX - minX + 40;
  frameEl.height = maxY - minY + 40;
  await ea.addElementsToView(false, false);
}

new Notice("Frame已自适应!");
```