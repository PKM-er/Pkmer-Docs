---
uid: 20240323135452
title: Obsidian 样式 - Thino 伪悬浮编辑框
tags: [obsidian, thino]
description: thino 伪悬浮编辑器，快捷键唤出编辑器
author: Huajin
type: other
draft: false
editable: false
modified: 
---

# Obsidian 样式 - Thino 伪悬浮编辑框

![image.png](https://cdn.pkmer.cn/images/20240323135714.png!pkmer)

## 代码

添加 css 的方法见：[[Obsidian的CSS代码片段]]

需配合 [[obsidian-style-settings]] 插件使用，在 style setting 中其中 Floating Editor 选项后，在快捷键中添加自定义快捷键，然后就可以在 thino 中用快捷键唤出编辑器。同样，关闭编辑器也需要使用刚刚的快捷键。

```css
/* @settings

name: Thino Style
id: thino-theme-floating-editor
settings:
  -
    id: floating-editor
    title: Floating Editor
    type: class-toggle
  -
    id: show-editor
    title: Show Editor
    type: class-toggle
    addCommand: true  
*/

.style-settings-container .setting-item[data-id='show-editor'] {
  display: none;
}

.floating-editor .memo-editor-wrapper {
  display: none !important;
}

/* 悬浮编辑器 */

.floating-editor.show-editor:not(.collapse-editor) .workspace-leaf-content[data-type="thino_view"] .section-header-container.memos-header-container,
.floating-editor.show-editor:not(.collapse-editor) .workspace-leaf-content[data-type="thino_view"] .memos-sidebar-wrapper,
.floating-editor.show-editor:not(.collapse-editor) .workspace-leaf-content[data-type="thino_view"] .memolist-wrapper {
  opacity: .3;
  pointer-events: none;
  animation-name: hide;
  animation-duration: .2s;
}

.floating-editor.show-editor .memo-editor-wrapper {
  z-index: 1000;
  position: absolute !important;
  display: block !important;
  box-shadow: rgba(0, 0, 0, 0.5) 0px 16px 70px;
  /* opacity: 1; */
  contain: none !important;
  max-width: 100%;
  top: calc(30%);
  transform: scale(1) translate3d(0px, 0px, 0px);
  animation-name: show;
  animation-duration: .2s;
  animation-timing-function: ease;
}

@keyframes show {
  0% {
    opacity: 0;
  }
}

@keyframes hide {
  0% {
    opacity: 1;
  }
}
```