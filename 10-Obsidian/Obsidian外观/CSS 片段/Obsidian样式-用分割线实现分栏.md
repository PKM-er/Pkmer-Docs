---
uid: 20240130152715
title: Obsidian 样式 - 用分割线实现简单分栏
tags: [obsidian, css, 分栏, 分割线]
description: 用分割线实现简单分栏
author: Huajin
type: other
draft: false
editable: false
modified: 20240130165315
---

# Obsidian 样式 - 用分割线实现简单分栏

## 效果

![image.png](https://cdn.pkmer.cn/images/20240130153728.png!pkmer)

> 演示文本由 gpt 生成

![image.png](https://cdn.pkmer.cn/images/20240130165310.png!pkmer)

## 优缺点

优点

- 语法简单，两行相邻的分割线即可分割
- 对于 markdown 语法污染不大，如果要迁移笔记很方便
- 可以用来做 homepage

缺点

- 无法局部分栏，分栏后会把整页分栏
- 分栏后的栏宽无法修改

## CSS 代码

代码来自：[zamsyt/obsidian-snippets: CSS snippets for Obsidian (github.com)](https://github.com/zamsyt/obsidian-snippets) 项目中的 Easy Multi column notes。项目中有演示视频，时长 53s

> css 使用方法见：[[Obsidian的CSS代码片段]]

```css
/* Multicolumn Notes v0.5.4
   github.com/zamsyt */
.markdown-preview-view div:has(> hr)+*>hr,
.markdown-source-view :is(.HyperMD-hr:not(.HyperMD-quote), .hr)+ :is(.HyperMD-hr, .hr)+*,
.callout-content hr+hr {
  break-after: column;
}

.mod-header,
.frontmatter-container,
.cm-line:has(.cm-hmd-frontmatter),
.cm-line:has(.cm-hmd-frontmatter)+.cm-line:has(br:only-child) {
  column-span: all;
}

/* Add vertical lines */
.cm-contentContainer>*,
.markdown-preview-sizer,
.callout-content {
  column-rule: solid var(--hr-thickness) var(--hr-color);
}

/* Hide double <hr>s */
.hr:has(+ .hr):not(:has(+ * + .cm-active)),
.hr+.hr:not(:has(+ .cm-active)),
.el-hr:has(+ .el-hr),
.el-hr+.el-hr,
hr:has(+ hr),
hr+hr {
  --hr-color: transparent;
}

.markdown-preview-view div:has(> hr)+*>hr,
.markdown-preview-view div:has(+ * > hr)>hr,
.markdown-preview-view hr+hr,
.markdown-preview-view hr:has(+ hr) {
  margin: 0;
}

/* Disable Readable line length for multi-column notes */
.markdown-source-view.is-live-preview:has(:is(.HyperMD-hr:not(.HyperMD-quote), .hr) + :is(.HyperMD-hr, .hr) + .cm-line:not(:last-child)),
.markdown-preview-view:has(> * > .el-hr + .el-hr + :not(.mod-footer)) {
  --file-line-width: 100%;
}

/* Live preview */
.is-live-preview .cm-contentContainer> :has(:is(.HyperMD-hr:not(.HyperMD-quote), .hr) + :is(.HyperMD-hr, .hr) + .cm-line:not(:last-child)) {
  column-count: 2;
}

.is-live-preview .cm-contentContainer> :has(:is(.HyperMD-hr:not(.HyperMD-quote), .hr) + :is(.HyperMD-hr, .hr) ~ :is(.HyperMD-hr:not(.HyperMD-quote), .hr) + :is(.HyperMD-hr, .hr) + .cm-line:not(:last-child)) {
  column-count: 3;
}

.is-live-preview .cm-contentContainer> :has(:is(.HyperMD-hr:not(.HyperMD-quote), .hr) + :is(.HyperMD-hr, .hr) ~ :is(.HyperMD-hr:not(.HyperMD-quote), .hr) + :is(.HyperMD-hr, .hr) ~ :is(.HyperMD-hr:not(.HyperMD-quote), .hr) + :is(.HyperMD-hr, .hr) + .cm-line:not(:last-child)) {
  column-count: 4;
}

.is-live-preview .cm-contentContainer> :has(:is(.HyperMD-hr:not(.HyperMD-quote), .hr) + :is(.HyperMD-hr, .hr) ~ :is(.HyperMD-hr:not(.HyperMD-quote), .hr) + :is(.HyperMD-hr, .hr) ~ :is(.HyperMD-hr:not(.HyperMD-quote), .hr) + :is(.HyperMD-hr, .hr) ~ :is(.HyperMD-hr:not(.HyperMD-quote), .hr) + :is(.HyperMD-hr, .hr) + .cm-line:not(:last-child)) {
  column-count: 5;
}

.is-live-preview .cm-contentContainer> :has(:is(.HyperMD-hr:not(.HyperMD-quote), .hr) + :is(.HyperMD-hr, .hr) ~ :is(.HyperMD-hr:not(.HyperMD-quote), .hr) + :is(.HyperMD-hr, .hr) ~ :is(.HyperMD-hr:not(.HyperMD-quote), .hr) + :is(.HyperMD-hr, .hr) ~ :is(.HyperMD-hr:not(.HyperMD-quote), .hr) + :is(.HyperMD-hr, .hr) ~ :is(.HyperMD-hr:not(.HyperMD-quote), .hr) + :is(.HyperMD-hr, .hr) + .cm-line:not(:last-child)) {
  column-count: 6;
}

/* Reading view
      Requires Contextual Typography */
.markdown-preview-sizer:has(> .el-hr + .el-hr + :not(.mod-footer)) {
  column-count: 2;
}

.markdown-preview-sizer:has(> .el-hr + .el-hr ~ .el-hr + .el-hr + :not(.mod-footer)) {
  column-count: 3;
}

.markdown-preview-sizer:has(> .el-hr + .el-hr ~ .el-hr + .el-hr ~ .el-hr + .el-hr + :not(.mod-footer)) {
  column-count: 4;
}

.markdown-preview-sizer:has(> .el-hr + .el-hr ~ .el-hr + .el-hr ~ .el-hr + .el-hr ~ .el-hr + .el-hr + :not(.mod-footer)) {
  column-count: 5;
}

.markdown-preview-sizer:has(> .el-hr + .el-hr ~ .el-hr + .el-hr ~ .el-hr + .el-hr ~ .el-hr + .el-hr ~ .el-hr + .el-hr + :not(.mod-footer)) {
  column-count: 6;
}

/* Callouts */
.callout-content:has(> hr + hr:not(:last-child)) {
  column-count: 2;
}

.callout-content:has(> hr + hr ~ hr + hr:not(:last-child)) {
  column-count: 3;
}

.callout-content:has(> hr + hr ~ hr + hr ~ hr + hr:not(:last-child)) {
  column-count: 4;
}

.callout-content:has(> hr + hr ~ hr + hr ~ hr + hr ~ hr + hr:not(:last-child)) {
  column-count: 5;
}

.callout-content:has(> hr + hr ~ hr + hr ~ hr + hr ~ hr + hr ~ hr + hr:not(:last-child)) {
  column-count: 6;
}

/* Make first elements of columns have consistent top margins */
.canvas-node-content>*>.markdown-preview-view div:has(> hr)+div:has(> hr)+div> :first-child,
.inline-embed .markdown-embed-content .callout-content hr+hr+p {
  margin-top: 0;
}

/* Fix embed excess height */
.markdown-embed .markdown-preview-sizer {
  min-height: 0 !important;
}

/* Fix list bullet alignment */
.markdown-rendered .list-bullet {
  float: none;
  left: -1em;
  margin-left: 0;
}
```