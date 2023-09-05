---
uid: 20230905221421
title: Obsidian 样式：minimal 主题 Cards 卡片布局
tags: [css, CSS美化, 卡片样式]
description: 
author: 
type: other
draft: false
editable: false
modified: 20230905222338
---

# Obsidian 样式：minimal 主题 Cards 卡片布局

该片段摘自来自 [minimal 主题](https://github.com/kepano/obsidian-minimal)

## cards 将 Dataview tables 转换为卡片

在 yaml 区用 cssclass 申明 `cards` 将笔记中的所有Dataview tables转换为卡片

![[Pasted image 20230905215657.png]]

![[Pasted image 20230905215717.png]]

### 表格排序 sortable

要使用排序菜单，请安装 [Sortable](https://minimal.guide/plugins/sortable) 插件。这仅与使用数据视图表（而不是项目符号列表）的卡兼容

![[148671518-660a5c8c-6c31-4db6-8fa9-d5e9b22b0b6f.gif]]

## list-cards 将有序列表转换为卡片

在 yaml 区用 cssclass 申明 `list-cards` 将笔记中的所有无序列表转换为卡片

![[Pasted image 20230905220849.png]]

### 卡片的布局设定

| Class 类              | Description 描述                       |
|:-------------------- |:------------------------------------- |
| `cards`               | 将所有 Dataview 数据视图表设置为卡片布局 |
| `list-cards`          | 将所有无序符号列表设置为卡片布局       |
| `table-100`           | 卡片块填充窗格宽度的 100%              |
| `table-max`           | 卡片块填充最大线宽                     |
| `table-wide`          | 卡片块填充宽线宽                       |
| `cards-align-bottom`  | 将卡片的最后一个元素与底部对齐         |
| `cards-cover`         | 调整图像大小以填充定义的空间           |
| `cards-16-9`          | 使卡片中的图像适合 16：9 的比例        |
| `cards-1-1`           | 使卡片中的图像适合 1：1 比例（正方形）|
| `cards-2-1`           | 使卡片中的图像适合 2：1 的比例         |
| `cards-2-3`           | 使卡片中的图像适合 2：3 的比例         |
| `cards-cols-1` 到 `8` | 强制使用特定数量的列（从 1 到 8）|

例如你想要卡片布局每行只显示 3 排卡片，另外添加申明 `cards-cols-1` ：

![[Pasted image 20230905221016.png]]

## style setting 里面的设置

![[Pasted image 20230905220558.png]]

## Minimal 的 List-Card 样式

```css
/* @settings
name: Minimal list-Cards
id: minimal-cards-style
settings:
	-
		id: cards-min-width
		title: 卡片最小宽度
		type: variable-text
		default: 180px
	-
		id: cards-max-width
		title: 卡片最大宽度
		description: 默认填充可用宽度，接受有效的CSS单位
		type: variable-text
		default: 1fr
	-
		id: cards-mobile-width
		title: 移动设备上卡片最小宽度
		type: variable-text
		default: 120px
	-
		id: cards-padding
		title: 卡片内边距
		type: variable-text
		default: 1.2em
	-
		id: cards-image-height
		title: 卡片最大图片高度
		type: variable-text
		default: 400px
	-
		id: cards-border-width
		title: 卡片边框宽度
		type: variable-text
		default: 1px
	- 
		id: cards-background
		title: 卡片背景颜色
		type: variable-themed-color
		format: hex
		default-light: '#'
		default-dark: '#'
*/
body {
  --cards-min-width: 180px;
  --cards-max-width: 1fr;
  --cards-mobile-width: 120px;
  --cards-image-height: 400px;
  --cards-padding: 1.2em;
  --cards-image-fit: contain;
  --cards-background: transparent;
  --cards-border-width: 1px;
  --cards-aspect-ratio: auto;
  --cards-columns: repeat(
    auto-fit,
    minmax(var(--cards-min-width), var(--cards-max-width))
  );
}


@media (max-width: 400pt) {
  body {
    --cards-min-width: var(--cards-mobile-width);
  }
}

@media (min-width: 400pt) {
  .cards-cols-3 {
    --cards-columns: repeat(3, minmax(0, 1fr));
  }
  .cards-cols-4 {
    --cards-columns: repeat(4, minmax(0, 1fr));
  }
  .cards-cols-5 {
    --cards-columns: repeat(5, minmax(0, 1fr));
  }
  .cards-cols-6 {
    --cards-columns: repeat(6, minmax(0, 1fr));
  }
  .cards-cols-7 {
    --cards-columns: repeat(7, minmax(0, 1fr));
  }
  .cards-cols-8 {
    --cards-columns: repeat(8, minmax(0, 1fr));
  }
}

@media (max-width: 400pt) {
  body {
    --cards-min-width: var(--cards-mobile-width);
  }
}
.cards.table-100 table.dataview tbody,
.table-100 .cards table.dataview tbody {
  padding: 0.25rem 0.75rem;
}
.cards table.dataview {
  --table-width: 100%;
  --table-edge-cell-padding-first: calc(var(--cards-padding) / 2);
  --table-edge-cell-padding-last: calc(var(--cards-padding) / 2);
  --table-cell-padding: calc(var(--cards-padding) / 3)
    calc(var(--cards-padding) / 2);
  line-height: 1.3;
}
.cards table.dataview tbody {
  clear: both;
  padding: 0.5rem 0;
  display: grid;
  grid-template-columns: var(--cards-columns);
  grid-column-gap: 0.75rem;
  grid-row-gap: 0.75rem;
}
.cards table.dataview > tbody > tr {
  background-color: var(--cards-background);
  border: var(--cards-border-width) solid var(--background-modifier-border);
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0 0 calc(var(--cards-padding) / 3) 0;
  border-radius: 6px;
  overflow: hidden;
  transition: box-shadow 0.15s linear;
  max-width: var(--cards-max-width);
}
.cards table.dataview > tbody > tr:hover {
  border: var(--cards-border-width) solid
    var(--background-modifier-border-hover);
  box-shadow: 0 4px 6px 0 rgba(0, 0, 0, 0.05),
    0 1px 3px 1px rgba(0, 0, 0, 0.025);
  transition: box-shadow 0.15s linear;
}
.cards table.dataview tbody > tr > td:first-child {
  font-weight: var(--bold-weight);
  border: none;
}
.cards table.dataview tbody > tr > td:first-child a {
  display: block;
}
.cards table.dataview tbody > tr > td:last-child {
  border: none;
}
.cards table.dataview tbody > tr > td:not(:first-child) {
  font-size: calc(var(--table-text-size) * 0.9);
  color: var(--text-muted);
}
.cards table.dataview tbody > tr > td > * {
  padding: calc(var(--cards-padding) / 3) 0;
}
.cards table.dataview tbody > tr > td:not(:last-child):not(:first-child) {
  padding: 4px 0;
  border-bottom: 1px solid var(--background-modifier-border);
  width: calc(100% - var(--cards-padding));
  margin: 0 calc(var(--cards-padding) / 2);
}
.cards table.dataview tbody > tr > td a {
  text-decoration: none;
}
.cards table.dataview tbody > tr > td > button {
  width: 100%;
  margin: calc(var(--cards-padding) / 2) 0;
}
.cards table.dataview tbody > tr > td:last-child > button {
  margin-bottom: calc(var(--cards-padding) / 6);
}
.cards table.dataview tbody > tr > td > ul {
  width: 100%;
  padding: 0.25em 0 !important;
  margin: 0 auto !important;
}
.cards table.dataview tbody > tr > td:has(img) {
  padding: 0 !important;
  background-color: var(--background-secondary);
  display: block;
  margin: 0;
  width: 100%;
}
.cards table.dataview tbody > tr > td img {
  aspect-ratio: var(--cards-aspect-ratio);
  width: 100%;
  object-fit: var(--cards-image-fit);
  max-height: var(--cards-image-height);
  background-color: var(--background-secondary);
  vertical-align: bottom;
}
.markdown-source-view.mod-cm6.cards
  .dataview.table-view-table
  > tbody
  > tr
  > td,
.trim-cols .cards table.dataview tbody > tr > td {
  white-space: normal;
}
.links-int-on .cards table {
  --link-decoration: none;
}
.markdown-source-view.mod-cm6.cards .edit-block-button {
  top: 0;
}
.cards.table-100 table.dataview thead > tr,
.table-100 .cards table.dataview thead > tr {
  right: 0.75rem;
}
.cards.table-100 table.dataview thead:before,
.table-100 .cards table.dataview thead:before {
  margin-right: 0.75rem;
}
.theme-light .cards table.dataview thead:before {
  background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 100 100"><path fill="black" d="M49.792 33.125l-5.892 5.892L33.333 28.45V83.333H25V28.45L14.438 39.017L8.542 33.125L29.167 12.5l20.625 20.625zm41.667 33.75L70.833 87.5l-20.625 -20.625l5.892 -5.892l10.571 10.567L66.667 16.667h8.333v54.883l10.567 -10.567l5.892 5.892z"></path></svg>');
}
.cards table.dataview thead {
  user-select: none;
  width: 180px;
  display: block;
  float: right;
  position: relative;
  text-align: right;
  height: 24px;
  padding-bottom: 0;
}
.cards table.dataview thead:hover:before {
  opacity: 0.5;
  background-color: var(--background-modifier-hover);
}
.cards table.dataview thead:before {
  content: "";
  position: absolute;
  right: 0;
  top: 0;
  width: 10px;
  height: 16px;
  background-repeat: no-repeat;
  cursor: var(--cursor);
  text-align: right;
  padding: var(--size-4-1) var(--size-4-2);
  margin-bottom: 2px;
  border-radius: var(--radius-s);
  font-weight: 500;
  font-size: var(--font-adaptive-small);
  opacity: 0.25;
  background-position: center center;
  background-size: 16px;
  background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 100 100"><path fill="white" d="M49.792 33.125l-5.892 5.892L33.333 28.45V83.333H25V28.45L14.438 39.017L8.542 33.125L29.167 12.5l20.625 20.625zm41.667 33.75L70.833 87.5l-20.625 -20.625l5.892 -5.892l10.571 10.567L66.667 16.667h8.333v54.883l10.567 -10.567l5.892 5.892z"></path></svg>');
}
.cards table.dataview thead > tr {
  top: -1px;
  position: absolute;
  display: none;
  z-index: 9;
  border: 1px solid var(--background-modifier-border-hover);
  background-color: var(--background-secondary);
  box-shadow: var(--shadow-s);
  padding: 6px;
  border-radius: var(--radius-m);
  flex-direction: column;
  margin: 24px 0 0 0;
  width: 100%;
}
.cards table.dataview thead:hover > tr {
  display: flex;
}
.cards table.dataview thead > tr > th {
  display: block;
  padding: 3px 30px 3px 6px !important;
  border-radius: var(--radius-s);
  width: 100%;
  font-weight: 400;
  color: var(--text-normal);
  cursor: var(--cursor);
  border: none;
  font-size: var(--font-ui-small);
}
.cards table.dataview thead > tr > th[sortable-style="sortable-asc"],
.cards table.dataview thead > tr > th[sortable-style="sortable-desc"] {
  color: var(--text-normal);
}
.cards table.dataview thead > tr > th:hover {
  color: var(--text-normal);
  background-color: var(--background-modifier-hover);
}
.cards.cards-align-bottom table.dataview tbody > tr > td:last-child,
.list-cards.cards-align-bottom table.dataview tbody > tr > td:last-child {
  align-items: flex-end;
  flex-grow: 1;
}
@media (max-width: 400pt) {
  .cards table.dataview tbody > tr > td:not(:first-child) {
    font-size: 80%;
  }
}

table.dataview ul.dataview-ul {
  list-style: none;
  padding-inline-start: 0;
  margin-block-start: 0em !important;
  margin-block-end: 0em !important;
}

.list-cards.markdown-preview-view .list-bullet,
.list-cards.markdown-preview-view .list-collapse-indicator,
.list-cards.markdown-preview-view.markdown-rendered.show-indentation-guide
  li
  > ul::before {
  display: none;
}
.list-cards.markdown-preview-view div > ul {
  display: grid;
  gap: 0.75rem;
  grid-template-columns: var(--cards-columns);
  padding: 0;
  line-height: var(--line-height-tight);
}
.list-cards.markdown-preview-view div > ul > li {
  background-color: var(--cards-background);
  padding: calc(var(--cards-padding) / 2);
  border-radius: var(--radius-s);
  border: var(--cards-border-width) solid var(--background-modifier-border);
  overflow: hidden;
}
.list-cards.markdown-preview-view div > ul .image-embed {
  padding: 0;
  display: block;
  background-color: var(--background-secondary);
  border-radius: var(--image-radius);
}
.list-cards.markdown-preview-view div > ul .image-embed img {
  aspect-ratio: var(--cards-aspect-ratio);
  object-fit: var(--cards-image-fit);
  max-height: var(--cards-image-height);
  background-color: var(--background-secondary);
  vertical-align: bottom;
}
.list-cards.markdown-preview-view div > ul > li > a {
  --link-decoration: none;
  --link-external-decoration: none;
  font-weight: var(--bold-weight);
}
.list-cards.markdown-preview-view div ul > li:hover {
  border-color: var(--background-modifier-border-hover);
}
.list-cards.markdown-preview-view div ul ul {
  display: block;
  width: 100%;
  color: var(--text-muted);
  font-size: var(--font-smallest);
  margin: calc(var(--cards-padding) / -4) 0;
  padding: calc(var(--cards-padding) / 2) 0;
}
.list-cards.markdown-preview-view div ul ul ul {
  padding-bottom: calc(var(--cards-padding) / 4);
}
.list-cards.markdown-preview-view div ul ul > li {
  display: block;
}
.cards.cards-16-9,
.list-cards.cards-16-9 {
  --cards-aspect-ratio: 16/9;
}
.cards.cards-1-1,
.list-cards.cards-1-1 {
  --cards-aspect-ratio: 1/1;
}
.cards.cards-2-1,
.list-cards.cards-2-1 {
  --cards-aspect-ratio: 2/1;
}
.cards.cards-2-3,
.list-cards.cards-2-3 {
  --cards-aspect-ratio: 2/3;
}
.cards.cards-cols-1,
.list-cards.cards-cols-1 {
  --cards-columns: repeat(1, minmax(0, 1fr));
}
.cards.cards-cols-2,
.list-cards.cards-cols-2 {
  --cards-columns: repeat(2, minmax(0, 1fr));
}
.cards.cards-cover,
.list-cards.cards-cover {
  --cards-image-fit: cover;
}
.cards.cards-align-bottom table.dataview tbody > tr > td:last-child,
.list-cards.cards-align-bottom table.dataview tbody > tr > td:last-child {
  align-items: flex-end;
  flex-grow: 1;
}

```
