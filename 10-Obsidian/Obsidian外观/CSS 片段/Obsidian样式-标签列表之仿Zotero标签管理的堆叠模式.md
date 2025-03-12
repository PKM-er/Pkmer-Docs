---
uid: 20250225131640
title: 类 Zotero 标签列表堆叠模式，让你的标签管理更高效
tags: [样式美化, 标签栏, 标签管理]
description: 在 Obsidian 中实现类似的堆叠模式
author: 熊猫别熬夜
type: other
draft: false
editable: false
modified: 20250225131757
---

# 类 Zotero 标签列表堆叠模式，让你的标签管理更高效

在标签管理过程中，标签的展示方式直接影响着我们的工作效率。你是否曾为 Obsidian 中标签的展示方式感到不够直观？今天，我将分享一个超实用的技巧——如何在 Obsidian 中实现类似 Zotero 的标签堆叠模式，让你的标签管理更加高效、清晰！

## 为什么选择堆叠模式？

标签管理是 Obsidian 笔记管理中的重要功能之一。然而，Obsidian 默认的标签展示方式可能不够直观，尤其是在处理大量标签时。Zotero 的标签管理方式以其简洁和高效著称，而通过自定义 CSS 代码，我们可以在 Obsidian 中实现类似的堆叠模式，让标签的层级关系一目了然。

## 效果展示

先来看看实际效果，是不是很酷？👇

![250225_Obsidian样式：标签列表之仿Zotero标签管理的堆叠模式.md](https://cdn.pkmer.cn/images/202502251316312.png!pkmer)

## CSS 代码

```css

.workspace-leaf-content[data-type="tag"]>.tag-container>div {
  display: flex !important;
  flex-flow: row wrap;
  gap: 4px;
  justify-content: flex-start;
  align-content: flex-start;

  &>div:first-of-type {
    display: none !important;
  }

  &>.tree-item {
    overflow: auto;
    border: 0.5px solid var(--background-modifier-border);
    border-radius: 6px;
    text-align: center;
  }

  .tree-item:not(.is-collapsed) {
    width: 100%;
    display: flex;
    flex-flow: row wrap;
    gap: 4px;
    justify-content: flex-start;
    align-content: flex-start;
    position: relative;

    .tree-item-children {
      width: 100%;
      display: flex;
      flex-flow: row wrap;
      gap: 4px;
      justify-content: flex-start;
      align-content: flex-start;
      position: relative;
      margin: 6px;

      &>div:first-of-type {
        display: none;
      }

    }

    .tree-item-self, .tree-item {
      overflow: auto;
      position: relative;
      display: flex;
      gap: 4px;
      flex-flow: row wrap;
      justify-content: flex-start;
      align-content: flex-start;
    }

    .tree-item:has(span) {
      border: 0.5px solid var(--background-modifier-border);
      border-radius: 6px;

    }
  }

  .tree-item-self.is-clickable:hover {
    background-color: transparent;
  }
}

/* 根据嵌套深度配置不同颜色 */
.workspace-leaf-content[data-type="tag"]>.tag-container>div {
  .tree-item{
    
    &:nth-of-type(6n + 1) .tree-item-inner-text {
      color: #54478C;
    }

    &:nth-of-type(6n + 2) .tree-item-inner-text {
      color: #2C699A;
    }

    &:nth-of-type(6n + 3) .tree-item-inner-text {
      color: #048BA8;
    }

    &:nth-of-type(6n + 4) .tree-item-inner-text {
      color: #0DB39E;
    }

    &:nth-of-type(6n + 5) .tree-item-inner-text {
      color: #16DB93;
    }

    &:nth-of-type(6n + 6) .tree-item-inner-text {
      color: #83E377;
    }
  }
}
```