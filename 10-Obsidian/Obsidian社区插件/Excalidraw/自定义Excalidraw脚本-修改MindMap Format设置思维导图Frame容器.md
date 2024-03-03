---
uid: 20240303142629
title: 自定义 Excalidraw 脚本 - 修改 MindMap Format 设置思维导图 Frame 容器
tags:
  - 思维导图
  - MindMap
  - Excalidraw脚本
description: 修改 MindMap Format 设置思维导图 Frame 容器
author: 熊猫别熬夜
type: other
draft: false
editable: false
modified:
---

# 自定义 Excalidraw 脚本 - 修改 MindMap Format 设置思维导图 Frame 容器

在 [[Excalidraw如何安装脚本_脚本设置介绍|Excalidraw 的脚本市场]] 下载 MindMap Format 脚本，可以让选择的元素按照水平思维导图的形式排列组合：

![2024-02-23_自定义Excalidraw脚本-修改MindMap Format设置思维导图Frame容器_IMG-1](https://cdn.pkmer.cn/images/202403031431775.png!pkmer)

这里修改了脚本，设置了一个 frame 容器。当该 frame 的名称以 `mind` 结尾时，脚本会排列组合容器内连接的元素。当然，也可以通过选择元素进行组合。效果如下：

![2024-02-23_自定义Excalidraw脚本-修改MindMap Format设置思维导图Frame容器_IMG-2](https://cdn.pkmer.cn/images/202403031431776.gif!pkmer)

主要代码还是 MindMap Format 脚本，修改如下脚本：

> PS：从脚本市场下载的脚本通常位于 `Excalidraw\Scripts\Downloaded` 文件夹中，文件名为 `MindMap Format`。建议使用编辑器或者 txt 记事本打开。

源代码 (代码的最后 5 行)：

```js
const elements = ea.getViewSelectedElements();
generateTree(elements);

ea.copyViewElementsToEAforEditing(elements);
await ea.addElementsToView(false, false);
```

替换为：

```js
const elements = ea.getViewSelectedElements();
if (elements.length > 1) {
  generateTree(elements);
  ea.copyViewElementsToEAforEditing(elements);
  await ea.addElementsToView(false, false);
} else {
  // 获取mindFrame并格式化
  const mindFrames = ea.getViewElements().filter(el => el.type === "frame").filter(el => String(el.name).endsWith("mind"));

  for (let mindFrame of mindFrames) {
    console.log(mindFrame.id);
    let allFrameEls = ea.getViewElements().filter(el => el.frameId === mindFrame.id);
    generateTree(allFrameEls);
    ea.copyViewElementsToEAforEditing(allFrameEls);
    await ea.addElementsToView(false, false);
  }
}
```
