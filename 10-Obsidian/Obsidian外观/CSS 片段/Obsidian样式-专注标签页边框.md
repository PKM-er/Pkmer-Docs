---
uid: 20231229172116
title: Obsidian 样式 - 专注标签页边框
tags:
  - CSS自定义
  - 标签页
description: 模仿Colorful Note Borders插件，针对激活的窗口进行添加边框
author: 熊猫别熬夜
type: other
draft: false
editable: false
modified: 20231229172236
---

# Obsidian 样式 - 专注标签页边框

模仿 Colorful Note Borders 插件，针对激活的窗口进行添加边框

## 效果

![Obsidian 样式-专注标签页边框](https://cdn.pkmer.cn/images/202312291721488.gif!pkmer)

## CSS

```css
/* ! 模仿Colorful Note Borders插件，针对激活的窗口进行添加边框*/
.markdown-preview-view:focus,
.view-content
  > .markdown-source-view.mod-cm6
  > .cm-editor
  > .cm-scroller,
.markdown-preview-view {
  border: 4px solid rgba(255, 0, 0, 0);
}

.markdown-preview-view:focus {
  border: 4px solid rgba(255, 0, 0, 0.455);
}
.markdown-preview-view:focus,
.view-content
  > .markdown-source-view.mod-cm6
  > .cm-editor
  > .cm-scroller:focus-within {
  border: 4px solid rgba(255, 0, 0, 0.455);
}
```