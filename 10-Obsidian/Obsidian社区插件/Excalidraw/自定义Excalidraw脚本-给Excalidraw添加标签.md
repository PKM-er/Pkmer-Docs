---
uid: 20240428133002
title: 自定义 Excalidraw 脚本 - 给 Excalidraw 添加标签
tags: [Excalidraw]
description: 自定义 Excalidraw 脚本 - 给 Excalidraw 添加标签
author: 熊猫别熬夜
type: other
draft: false
editable: false
modified: 20250116113459
---

# 自定义 Excalidraw 脚本 - 给 Excalidraw 添加标签

## 背景介绍

![自定义Excalidraw脚本-给Excalidraw添加标签_IMG-1](https://cdn.pkmer.cn/images/202404281330829.gif!pkmer)

本脚本依赖于 Modal Form 插件，实现给 Excalidraw 的文本添加标签的功能，在处理文本元素编辑和标签提取的过程中，使用了 Modal Form 插件提供的模态框表单功能。因此，在使用这段代码之前，需要确保已安装并启动了 Modal Form 插件，以便正常执行代码逻辑。

## 脚本安装

> 详细步骤参考：[熊猫别熬夜 Excalidraw 脚本汇总介绍]( https://pkmer.cn/show/20240323225915 )
安装链接及代码块：

````md
```excalidraw-script-install
https://raw.githubusercontent.com/PandaNocturne/ExcalidrawScripts/master/PandaScripts/AddTagsByModalForm.md
```
````

## 脚本源码

- PS: 网站上的脚本只供参考，具体参考 GitHub 上的源码：
	- Link: <https://github.com/PandaNocturne/ExcalidrawScripts>

```js
/*
 * @Author: 熊猫别熬夜 
 * @Date: 2024-04-27 15:47:47 
 * @Last Modified by:   熊猫别熬夜 
 * @Last Modified time: 2024-04-27 15:47:47 
 */
await ea.addElementsToView();
let modalForm;
try {
  modalForm = app.plugins.plugins.modalforms.api;
} catch {
  new Notice("🔴本脚本依赖Modal Form插件的API，请先安装或启动Modal Form插件！");
  return;
}
const api = ea.getExcalidrawAPI();

// ! modalForms 的表单
// 普通的编辑文本框
const editorForm1 = {
  "title": "编辑文本",
  "name": "editorForm1",
  "fields": [
    {
      "name": "editorContent",
      "label": "编辑文本框",
      "description": "",
      "input": {
        "type": "textarea"
      }
    },
    {
      "name": "Tags",
      "description": "选择标签(可选)",
      "input": {
        "type": "tag"
      }
    },
  ],
};


// ! text 类型
const selectedTextElements = ea.getViewSelectedElements().filter(el => el.type === "text");

if (selectedTextElements.length === 1) {
  ea.copyViewElementsToEAforEditing(selectedTextElements);
  const el = ea.getElements()[0];
  let exText = el.rawText;
  // 提取末尾的标签
  const tags = exText.match(/\s(#\S+)/gm);
  console.log(tags);
  // 删除原文中的标签
  const textWithoutTags = exText.replace(/\s(#\S+)/gm, '');

  let result = await modalForm.openForm(
    editorForm1,
    {
      values: {
        Tags: tags ? tags : "",
        editorContent: textWithoutTags.trim(),
      }
    }
  );
  const getTags = result.getValue('Tags').value;
  let tagsStr = "";
  if (getTags.length >= 1) {
    tagsStr = getTags.map(t => "#" + t.trim().replace("#", "")).join(" ");
  }
  let editorContent = result.getValue('editorContent').value;
  el.originalText = el.rawText = el.text = editorContent.trim() + " " + tagsStr;
  // // 文本全部居左，居中
  // el.textAlign = "left";
  // el.textVerticalAlign = "middle";
  ea.refreshTextElementSize(el.id);
  await ea.addElementsToView(false, false);
  if (el.containerId) {
    const containers = ea.getViewElements().filter(e => e.id === el.containerId);
    api.updateContainerSize(containers);
    ea.selectElementsInView(containers);
  }
  return;
}
```
