---
uid: 20240401215647
title: 自定义 Excalidraw 脚本 - 将选中元素为 PNG 或者 SVG 格式文件到本地
tags: [图片导出, Excalidraw脚本]
description: 将选中的元素保存为 PNG 或者 SVG 格式本地文件，相当于网页版 Excalidraw 的导出仅选中图片
author: 熊猫别熬夜
type: other
draft: false
editable: false
modified: 
---

# 自定义 Excalidraw 脚本 - 将选中元素为 PNG 或者 SVG 格式文件到本地

将选中的元素保存为 PNG 或者 SVG 格式本地文件，相当于网页版 Excalidraw 的导出仅选中图片 (PS：网页版的快捷键是 `Ctrl + Shift + E`)。

![2024-03-30_自定义Excalidraw脚本-将选中元素为PNG或者SVG格式文件到本地_IMG-1](https://cdn.pkmer.cn/images/202404012157805.png!pkmer)

![2024-03-30_自定义Excalidraw脚本-将选中元素为PNG或者SVG格式文件到本地_IMG-2](https://cdn.pkmer.cn/images/202404012157806.gif!pkmer)

```js
/*
 * @Author: 熊猫别熬夜 
 * @Date: 2024-04-01 21:32:26 
 * @Last Modified by: 熊猫别熬夜
 * @Last Modified time: 2024-04-01 21:35:11
 */

// 获取笔记的基本路径
const basename = app.workspace.getActiveFile().basename;
const date = window.moment().format("YYYY-MM-DD_HHmmss");
const fileName = `${basename.replace("\.excalidraw", "")}-${date}`;

const choices = ["保存为PNG格式", "保存为SVG格式"];
const choice = await utils.suggester(choices, choices, "请选择要保存的格式");
if (!choice) return;
if (choice === choices[0]) {
  ea.targetView.svg(ea.targetView.getScene(true), undefined, true).then(svg => {
    let base64 = `data:image/svg+xml;base64,${btoa(
      unescape(encodeURIComponent(svg.outerHTML.replaceAll("&nbsp;", " "))),
    )}`;

    // 将SVG转换为PNG
    const img = new Image();
    img.src = base64;
    img.onload = function () {
      const canvas = document.createElement('canvas');
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(img, 0, 0);
      // 将PNG数据导出到本地文件
      canvas.toBlob(function (blob) {

        saveBlobToFile(blob, `${fileName}.png`);
      });
    };
  });
} else if (choice === choices[1]) {
  // 保存为SVG文件
  ea.targetView.svg(ea.targetView.getScene(true), undefined, true).then(svg => {
    // 将SVG数据导出到本地文件
    const blob = new Blob([svg.outerHTML], { type: 'image/svg+xml' });
    saveBlobToFile(blob, `${fileName}.svg`);
  });
}

// 将Blob对象保存为文件
function saveBlobToFile(blob, fileName) {
  const a = document.createElement('a');
  document.body.appendChild(a);
  a.style = 'display: none';
  const url = window.URL.createObjectURL(blob);
  a.href = url;
  a.download = fileName;
  a.click();
  window.URL.revokeObjectURL(url);
}
```
