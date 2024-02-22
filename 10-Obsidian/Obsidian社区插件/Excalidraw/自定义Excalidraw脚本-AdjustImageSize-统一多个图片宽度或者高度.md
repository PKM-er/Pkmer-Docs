---
uid: 20240131140236
title: 自定义 Excalidraw 脚本 -AdjustImageSize- 统一多个图片宽度或者高度
tags: [Excalidraw脚本, 图片处理]
description: 用于调整多个图片 (image)、矩形框 (rectangle)、Frame 边框的大小，以选中的元素的最大宽度 (高度) 或者最小宽度 (高度) 进行统一缩放，分别有 `等宽缩放`、`等高缩放`、`完全相等` 这 3 个选项。
author: 熊猫别熬夜,一鸣惊人
type: other
draft: false
editable: false
modified: 20240221005748
---

# 自定义 Excalidraw 脚本 -AdjustImageSize- 统一多个图片宽度或者高度

## 效果

![](https://cdn.pkmer.cn/images/202401311417693.gif!pkmer)

用于调整多个图片 (image)、矩形框 (rectangle)、Frame 边框的大小，以选中的元素的最大宽度 (高度) 或者最小宽度 (高度) 进行统一缩放，分别有 `等宽缩放`、`等高缩放`、`完全相等` 这 3 个选项。

## 脚本

该脚本是 @一鸣惊人 分享给我过的 AdjustImageSize 脚本，进行稍加修改。

Excalidraw 脚本如何配置脚本请参考：[[Excalidraw如何安装脚本_脚本设置介绍]]

```js
// 获取选中的元素
const selectedEls = ea.getViewSelectedElements().filter(el => el.type === "frame" || "image" || "rectangle" || "ellipse");
const scalingTypes = ["等宽缩放", '等高缩放', '完全相等'];
const inputScalingType = await utils.suggester(scalingTypes, scalingTypes, "选择缩放类型");
if (!inputScalingType) return;

const maxMin = ['Max', 'Min'];
const inputMaxMin = await utils.suggester(maxMin, maxMin, "选择等比对象？");
if (!inputMaxMin) return;

// 获取所有高度和宽度
let width, height;
const widths = selectedEls.map(el => el.width);
const heights = selectedEls.map(el => el.height);

if (inputMaxMin == 'Max') {
    width = Math.max(...widths);
    height = Math.max(...heights);
} else if (inputMaxMin == 'Min') {
    width = Math.min(...widths);
    height = Math.min(...heights);
}

if (inputScalingType === "等宽缩放") {
    // 等宽缩放
    for (let selectedEl of selectedEls) {
        let rario = width / selectedEl.width;
        selectedEl.width = width;
        selectedEl.height *= rario;
    }

} else if (inputScalingType === "等高缩放") {
    // 等高缩放
    for (let selectedEl of selectedEls) {
        let rario = height / selectedEl.height;
        selectedEl.width *= rario;
        selectedEl.height = height;
    }

} else if (inputScalingType === "完全相等") {
    // 完全相等
    for (let selectedEl of selectedEls) {
        selectedEl.width = width;
        selectedEl.height = height;
    }
}

// 完成编辑
ea.copyViewElementsToEAforEditing(selectedEls);
ea.addElementsToView();
```
