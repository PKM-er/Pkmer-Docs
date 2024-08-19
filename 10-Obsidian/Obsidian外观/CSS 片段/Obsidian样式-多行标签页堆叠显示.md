---
uid: 20240720190538
title: Obsidian 样式 - 多行标签页堆叠显示
tags: [标签页, 美化样式]
description: 这份自定义 CSS 样式可以让 Obsidian 的标签页以类似于 VS Code 的多行堆叠显示方式呈现，提供更好的标签管理和浏览体验。
author: 熊猫别熬夜
type: other
draft: false
editable: false
modified: 20240720191115
---

# Obsidian 样式 - 多行标签页堆叠显示

## 简介

这份自定义 CSS 样式可以让 Obsidian 的标签页以类似于 VS Code 的多行堆叠显示方式呈现，提供更好的标签管理和浏览体验。该样式基于 Ob 英文论坛中 [Tabs in multiple rows - Share & showcase - Obsidian Forum](https://forum.obsidian.md/t/tabs-in-multiple-rows/55964) 分享的灵感，结合了 BT 主题的 Tab 的 safari-tab-style 样式调整，使得标签页在多行显示时更加整洁美观，并优化了标签页的布局和按钮操作。

效果如下：

![2024-04-04_Obsidian样式-多行标签页堆叠显示](https://cdn.pkmer.cn/images/202407200806158.png!pkmer)

## CSS 样式

```css
/* 2024-04-04_21:48：来源：https://gist.github.com/digitalsignalperson/56fe3cbcf41707cb97362234cb07ccb0 */

/* 启动BFC */
.workspace .mod-root .workspace-tab-header-container.workspace-tab-header-container.workspace-tab-header-container {
  display: table;
  position: relative;
  padding-left: 8px;
  padding-right: 80px;
}

.workspace .mod-root .workspace-tab-header-container-inner {
  flex-wrap: wrap;
  max-width: 100%;
}

/* !排布间距设置 */
.workspace .mod-root .workspace-tabs:not(.mod-stacked) .workspace-tab-header {
  flex: unset;
  min-width: fit-content;
  margin-top: 4px;
  margin-bottom: 4px;
  margin-right: 4px;
}

/* ======tab样式设置 来自BT的safari-tab-style======== */
.workspace-tabs:not(.mod-stacked) .workspace-tab-header::before,
.workspace-tabs:not(.mod-stacked) .workspace-tab-header::after,
.workspace .mod-root .workspace-tabs:not(.mod-stacked) .workspace-tab-header-inner::after {
  display: none;
}

.workspace .mod-root .workspace-tab-header-inner::after {
  display: none;
}

.mod-vertical:not(.mod-left-split):not(.mod-right-split) .workspace-tabs:not(.mod-stacked) .workspace-tab-header-container-inner,
.mod-horizontal:not(.mod-left-split):not(.mod-right-split) .workspace-tabs:not(.mod-stacked) .workspace-tab-header-container-inner {
  align-items: center;
  margin: 0;
  width: 100%;
}

.mod-vertical:not(.mod-left-split):not(.mod-right-split) .workspace-tabs:not(.mod-stacked) .workspace-tab-header,
.mod-horizontal:not(.mod-left-split):not(.mod-right-split) .workspace-tabs:not(.mod-stacked) .workspace-tab-header {
  border-radius: 6px;
  box-shadow: none;
  height: calc(var(--header-height) * 0.7);
  padding: 0 !important;
  transition: 400ms, background-color 150ms ease-in-out;
}

.mod-root .workspace-tabs:not(.mod-stacked) .workspace-tab-header {
  transition: 400ms;
}

.workspace-tabs:not(.mod-stacked) .workspace-tab-header:first-child {
  margin-left: 0;
}

.mod-root:not(.mod-left-split):not(.mod-right-split) .workspace-tabs:not(.mod-stacked) .workspace-tab-header-inner {
  padding: 0 4px 0 8px;
  transition: 400ms;
}

.mod-root:not(.mod-left-split):not(.mod-right-split) .workspace-tabs:not(.mod-stacked) .workspace-tab-header-inner,
.mod-root:not(.mod-left-split):not(.mod-right-split) .workspace-tabs:not(.mod-stacked) .workspace-tab-header-inner-close-button,
.mod-root:not(.mod-left-split):not(.mod-right-split) .workspace-tabs:not(.mod-stacked) .workspace-tab-header-inner-icon {
  color: var(--text-muted);
}

.is-focused .mod-active .workspace-tab-header.is-active {
  border-top: 3px solid var(--color-accent) !important;
}

.mod-root .workspace-tabs:not(.mod-stacked) .workspace-tab-header.is-active:hover {
  background-color: var(--background-modifier-border);
}

.theme-light .mod-root .workspace-tabs:not(.mod-stacked) .workspace-tab-header {
  border: 1px solid var(--tab-outline-color);
}

.mod-root .workspace-tabs:not(.mod-stacked) .workspace-tab-header {
  border: 1px solid rgba(var(--mono-rgb-0), .25);
}

/* ==========其他按钮设置========== */
/* !新标签页按钮固定设置 */
.titlebar .workspace-tab-header-new-tab,
.mod-root .workspace-tab-header-new-tab {
  display: inline-block;
  position: absolute;
  top: 0px;
  right: 70px;
}

/* !下拉菜单调整 */
.workspace-tab-header-tab-list {
  display: block;
  position: absolute;
  top: 0px;
  right: 45px;
}

/* bug修复 */
.mod-left-split .workspace-tab-header-tab-list,
.mod-right-split .workspace-tab-header-tab-list {
  display: none;
}

/* 常驻显示关闭按钮 */
.workspace.workspace.workspace .mod-root .workspace-tab-header:not(.mod-stacked) .workspace-tab-header-inner-close-button {
  display: flex;
}

.workspace-tab-header-container>.sidebar-toggle-button.mod-right{
  /* display: inline-block; */
  top: 0px;
  position: absolute;
  right: 10px;
  z-index: 1;
}

/* 不显示顶部按钮 */
.titlebar-button-container.mod-right{
  display: none;
}

```

1. 复制上述提供的自定义 CSS 样式代码；
2. 在 Obsidian 中打开设置 -> 外观 -> CSS 代码 -> 打开文件夹，将代码保存为 `.css` 文件；

## 参考资料

- [Tabs in multiple rows - Share & showcase - Obsidian Forum](https://forum.obsidian.md/t/tabs-in-multiple-rows/55964/26)
- [obsidian tabs in multiple rows · GitHub 22](https://gist.github.com/digitalsignalperson/56fe3cbcf41707cb97362234cb07ccb0)