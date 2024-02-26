---
uid: 20240223203608
title: Obsidian 样式 - 隐藏 markdown 标记（加粗、斜体、下划线）
tags: [obsidian, css]
description: 隐藏 markdown 标记（加粗、斜体、下划线），以防止编写时的文本跳动
author: Huajin
type: other
draft: false
editable: false
modified: 20240223204444
---

# Obsidian 样式 - 隐藏 markdown 标记（加粗、斜体、下划线）

在码字时，给文本添加加粗或者斜体等 markdown 格式的时候，文本总会跳动一下。因此写了一段 css 用于隐藏 markdown 标记来去抖（隐藏标记）。

需要借助 style-setting 插件给该 css 添加快捷键，方便需要修改标记时关闭该 css。（因此需要安装 style setting 插件：[[obsidian-style-settings]]，这个插件可以为你的主题增加很多样式修改功能）

```css
/* @settings

name: 隐藏 markdown 标记（这里你可以自己取名）
id: a-unique-id
settings:
  - 
    id: hide-markdown-marker
    title: Hide markdown marker
    title.zh: 隐藏 markdown 标记
    description: Hide bold, italic, strikethrough, etc. markdown markers
    description.zh: 隐藏加粗、斜体、删除线等 markdown 标记
    type: class-toggle
    default: false
    addCommand: true
*/
.hide-markdown-marker .cm-line span:is(.cm-formatting, .cm-tag) {
  display: none;
}
```

添加好 css 后（如何添加 css 请见 [[Obsidian的CSS代码片段]]），在『设置 => 快捷键』中搜索 style-setting，找到 Style Settings: Toggle Hide markdown marker，设置一个快捷键即可。

这样，在你码字的时候就可以尽情使用快捷键（`ctrl b, ctrl i`）添加各种格式，同时文字不会抖动。需要修改格式时可以用你设置的快捷键关闭隐藏修改。