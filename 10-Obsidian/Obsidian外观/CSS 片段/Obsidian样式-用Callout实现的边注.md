---
uid: 20240120143852
title: Obsidian 样式 - 用 Callout 实现的边注（注释）
tags: [obsidian, css, callout, 边注, 注释]
description: 在 obsidian 中优雅的实现边注
author: Huajin
type: other
draft: false
editable: false
modified: 20240120160254
---

# Obsidian 样式 - 用 Callout 实现的边注（注释）

使用 obsidian 自带的 callout 语法，不污染笔记，且用法非常简单。

![image.png](https://cdn.pkmer.cn/images/20240120155800.png!pkmer)

<center>主题：Obsidian Nord</center>

> [!tip] 另外
> 内容修改自 discord 两位大佬分享的 css，使得实时模式可以显示，并适配多种主题。[参考一](https://discord.com/channels/686053708261228577/702656734631821413/1155147566615367680), [参考二](https://discord.com/channels/686053708261228577/702656734631821413/1073456247849881610).

## 使用方法

添加好 css 后，在正文中直接用边注的 callout 即可（[[Obsidian的CSS代码片段]]）

```
> [!NOTE|aside-l] 右侧注释
> 注释内容
```

```
> [!NOTE|aside-l] 左侧注释
> 注释内容
```

```
> [!NOTE|aside-r]+ 默认展开的注释
> 注释内容
```

```
> [!NOTE|aside-r]- 默认折叠的注释
> 注释内容
```

## Style Settings

本 css 可以配合 style settings 插件使用，可以调整注释的样式

![1705737614780.png](https://cdn.pkmer.cn/images/1705737614780.png!pkmer)

## CSS 源码

```css
/*
作者：Huajin
内容改编自discord，使得实时模式可以显示，并适配多种主题
  https://discord.com/channels/686053708261228577/702656734631821413/1155147566615367680
  https://discord.com/channels/686053708261228577/702656734631821413/1073456247849881610
用法示例
> [!note|aside-l] 边注1
> Content1

> [!note|aside-r] 边注2
> Content2
*/

/* @settings

name: SideNote Callout
id: sidenote-callout
settings:
  - 
    id: transparent-setting-panel
    title: Callout Title Position
    title.zh: Callout标题位置
    description: The title is on the left, the English cannot be wrapped
    description.zh: 标题置于左边的话英文无法换行
    type: class-select
    default: top-callout-title
    options:
      -
        label: top
        value: top-callout-title
      -
        label: left
        value: left-callout-title
  -
    id: sidenote-backgound
    title: Callout Background
    title.zh: Callout背景
    description: enable background color
    description.zh: 开启背景色
    type: class-toggle
    default: false
  -
    id: aside-width
    title: sidenote width
    title.zh: 边注宽度
    description: The width of the sidenote
    description.zh: 边注的宽度
    type: variable-number-slider
    default: 200
    min: 150
    max: 300
    step: 10
    format: px
*/

body {
  --aside-width: 200px;
}

.markdown-source-view.mod-cm6 .cm-content > .cm-callout:has(.callout[data-callout-metadata*="aside"])[contenteditable=false]  {
  contain: none !important;
  overflow: visible;
}

.markdown-source-view.mod-cm6 .cm-content > .cm-callout:has(.callout[data-callout-metadata*="aside"])[contenteditable=false]>.markdown-rendered {
  overflow: visible;
}

.cm-callout:has(.callout[data-callout-metadata*="aside"])[contenteditable=false]>.edit-block-button {
  display: none;
}

:is(.markdown-source-view .cm-callout, div:not([class])):has(> .callout[data-callout-metadata*="aside"]) {
  position: relative;
  overflow: visible;
}

.callout[data-callout-metadata*="aside"] {
  --aside-offset: var(--size-4-4);
  position: absolute;
}

.callout[data-callout-metadata*="aside-l"] {
  left: calc(-1 * (var(--aside-width) + var(--aside-offset)));
  right: calc(100% + var(--aside-offset));
}

.callout[data-callout-metadata*="aside-r"] {
  left: calc(var(--file-line-width) + var(--aside-offset));
  right: calc(-1 * var(--aside-width));
}

@media (hover: hover) {
  .markdown-source-view.mod-cm6 .cm-embed-block:has(> div > [data-callout-metadata*="aside"]):hover {
    overflow: visible;
  }
  .markdown-source-view.mod-cm6 .cm-embed-block:not(.cm-table-widget):hover {
    box-shadow: unset;
  }
}

/* ------------ */

.callout[data-callout-metadata*="aside"] {
  --block-spacing: 1rem;
  --speaker-block-width: 20%;
  margin: 0px;
  padding: 0px;
  display: grid;
  background-color: var(--background-primary) !important;
  border: none;
}

.sidenote-backgound .callout[data-callout-metadata*="aside"] {
  background-color: rgba(var(--callout-color), 0.1) !important;
  padding-bottom: 10px;
}
.callout[data-callout-metadata*="aside"] {
  grid-template-columns: var(--speaker-block-width) calc(100% - var(--speaker-block-width));
}

.top-callout-title .callout[data-callout-metadata*="aside"] {
  grid-template-columns: unset;
}

.callout[data-callout-metadata*="aside"] .callout-title {
  height: calc(100% - var(--block-spacing));
  text-align: right;
  word-wrap: break-word;
  border-right: 3px solid;
  flex: 1 0 auto;
  background-color: unset !important;
  padding-right: var(--block-spacing);
}
.callout[data-callout-metadata*="aside"] .callout-title {
  display: inline-block;
}

.top-callout-title .callout[data-callout-metadata*="aside"] .callout-title {
  display: flex;
}

.callout[data-callout-metadata*="aside"] .callout-title-inner {
  font-weight: var(--bold-weight) !important;
  color: var(--callout-title-color) !important;
  width: 1em;
}

.callout[data-callout-metadata*="aside"]>* {
  margin-top: var(--block-spacing);
}

.callout[data-callout-metadata*="aside"]>.callout-title>.callout-icon {
  display: none;
}

.callout[data-callout-metadata*="aside"]>.callout-title>.callout-fold,
.callout[data-callout-metadata*="aside"]>.callout-title>.callout-fold.is-collapsed {
  padding: 0 1px 0 6px;
}

.callout[data-callout-metadata*="aside"]>.callout-content {
  padding: 0px var(--block-spacing);
  border-top: unset;
  max-height: 200px;
  overflow-y: auto;
}

.callout[data-callout-metadata*="aside"]>.callout-content>p:first-child {
  margin-top: 0px;
}

.callout[data-callout-metadata*="aside"]>.callout-content>p:last-child {
  margin-bottom: 0px;
}

.callout[data-callout-metadata*="aside"]>.callout-content::-webkit-scrollbar-thumb {
  width: 11px;
  height: 11px;
  background-color: transparent !important;
}

.callout[data-callout-metadata*="aside"]>.callout-content:hover::-webkit-scrollbar-thumb {
  background-color: var(--scrollbar-thumb-bg) !important;
}
```