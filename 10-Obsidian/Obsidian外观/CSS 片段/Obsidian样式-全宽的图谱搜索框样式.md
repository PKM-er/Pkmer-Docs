---
uid: 20240720185858
title: Obsidian 样式 - 全宽的图谱搜索框样式
tags: [关系图谱, 样式与美化]
description: 全宽的图谱搜索框样式
author: 熊猫别熬夜
type: other
draft: false
editable: false
modified: 20240720191140
---

# Obsidian 样式 - 全宽的图谱搜索框样式

![24.06.20_Obsidian样式-定制化Obsidian图谱搜索界面样式](https://cdn.pkmer.cn/images/202407200759024.gif)

```css
/* 图谱搜索框的调整 */
.view-content:has(div.graph-controls) {
  padding: 0;
  margin: 0;
  /* 嵌套语法 ref: https://segmentfault.com/a/1190000044029087  or https://www.w3.org/TR/css-nesting-1/ */
  /* 也可以用Less预处理器编译为正常CSS */
  .graph-controls:not(.is-close) {
    border-width: 0;
    border-bottom-width: 1px;
    margin: 0;
    padding: 0;
    left: 0;
    top: 0;
    width: 100%;
    display: flex;
    position: absolute;
    border-radius: 0;
    /* 使子元素自动换行 */
    flex-wrap: wrap;
    /* 毛玻璃效果 */
    backdrop-filter: blur(2px);
    /* 半透明背景 */
    background-color: rgba(255, 255, 255, 0.1);
    box-shadow: none !important;
  }

  /* !控件设置 打开自动扩大 */
  .graph-control-section {
    /* margin-right: 10px; */
    border: none;
  }

  /* 打开时，界面宽度为100% */
  .graph-control-section:not(.is-collapsed) {
    border-bottom: 1px solid var(--background-modifier-border);
    width: 100%;
  }

  /*避免线重合 */
  .graph-control-section:is(.is-collapsed)+.graph-control-section:not(.is-collapsed) {
    border-top: 1px solid var(--background-modifier-border);
  }


  /* !开关选项设置 */
  /* & .setting-item.mod-slider, */
  .setting-item.mod-toggle {
    display: inline-flex;
    grid-template-columns: auto;
    grid-column: auto;
    flex-wrap: wrap;
    margin-left: 0px;
    margin-right: 25px;
    border: 0;
    /* width: auto; */
    justify-items: start;
    justify-content: space-between;
  }

  /* & .setting-item.mod-slider{
    min-width: 20%;
  } */

}

/* 提示建议宽度设置 */
.suggestion-container.mod-search-suggestion {
  max-width: 400px;
}

```