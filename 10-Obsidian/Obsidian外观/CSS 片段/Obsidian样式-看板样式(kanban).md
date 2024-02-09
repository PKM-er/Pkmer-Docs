---
uid: 20240128024149
title: Obsidian 样式 - 看板样式 (kanban)
tags: []
description: 
author: 
type: other
draft: false
editable: false
modified: 20240128030717
---

# Obsidian 样式 - 看板样式 (kanban)

当给看板设置特定的标签时，给看板加上背景色。

## 效果

![Kanban styling - background based on tag.png](https://cdn.pkmer.cn/images/Kanban%20styling%20-%20background%20based%20on%20tag.png!pkmer)

## 用法

直接在 kanban 的卡片中添加你设置好的 tags 即可。

## CSS 代码以及设置特定背景

添加下面这段 css（添加方法见 [[Obsidian的CSS代码片段]]），把里面的三个 <kbd>someTag</kbd> 都改成你想要的内容，例如改为 <kbd>todo</kbd>

颜色修改：下面的第一个 <kbd>background-color</kbd> 代表卡片的背景色，后一个代表标签的背景色。

如果想要修改标签字体的颜色，修改最后的 <kbd>color: #000000 !important;</kbd>

如果想要增加新的卡片样式，只需要把下面的代码重新复制粘贴到当前 css 文件的末尾，然后重复前面的三个步骤即可

```css
/* --- Kanban With Background Color Based On Tag --- */
/* use this to style the card background and text */
.kanban-plugin__item.has-tag-someTag,
.has-tag-someTag
  :is(
    .kanban-plugin__item-content-wrapper,
    .kanban-plugin__item-title-wrapper
  ) {
  background-color: #fa8780 !important;
}

a[href="#someTag"].tag {
  display: none;
}

/* use this to style the tag bubble at the bottom of the card */
a[href="#someTag"].kanban-plugin__item-tag {
  display: inline-block;
  background-color: #ffad87;
  color: #000000 !important;
  font-weight: bold;
  border: #bd584f 2px solid;
  margin-bottom: 4px !important;
}
```