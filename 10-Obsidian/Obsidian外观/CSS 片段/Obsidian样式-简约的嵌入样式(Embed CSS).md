---
uid: 20231107234536
title: Obsidian 样式 - 简约的嵌入样式 (Embed CSS)
tags:
  - 卡片样式
  - Obsidian
description: 一个比较简约的嵌入文档的样式
author: 熊猫别熬夜
type: other
draft: false
editable: false
modified: 20231107234604
---

# Obsidian 样式 - 简约的嵌入样式 (Embed CSS)

> 一个比较简约的嵌入文档的样式

```css
/* === 预览和编辑模式下的卡片样式 == */
.markdown-preview-view .markdown-embed,
.markdown-preview-view .file-embed {
  border: 1px solid var(--background-modifier-border);
  border-radius: 8px;
  margin-top: 0px;
  display: block;
}

/* 实时预览模式下：块嵌入不缩进，无左侧标志 */
.markdown-embed {
  border-left: none;
  border: 1px solid var(--background-modifier-border);
  border-radius: 8px;
}

/* 隐藏嵌入的标题 */
.embed-title {
  display: none;
}

/* 设置嵌入样式 */
:is(.markdown-preview-view, .markdown-rendered) .markdown-embed-content {
  padding-right: 0px;
  max-width: 100%;
  overflow: auto;
}
/* 在callout中的高度限制 */
:is(.callout) .markdown-embed-content {
  padding-right: 0px;
  max-height: 350px;
  max-width: 100%;
  overflow: auto;
}

```
