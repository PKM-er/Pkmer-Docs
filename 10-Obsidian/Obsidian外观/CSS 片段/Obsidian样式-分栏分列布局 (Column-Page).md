---
uid: 20240706122404
title: Obsidian 样式 - 分栏分列布局 (Column-Page)
tags: [分栏, 主页, 笔记样式]
description: 这是一个用于 Obsidian 中的分列布局样式，将笔记内容分栏显示，适用于包含大量内容或是需要目录索引的页面。
author: 熊猫别熬夜
type: other
draft: false
editable: false
modified: 20240706122900
---

# Obsidian 样式 - 分栏分列布局 (Column-Page)

这是一个用于 Obsidian 中的分列布局样式，将笔记内容分栏显示，适用于包含大量内容或是需要目录索引的页面。

## 视图类型

### 横向分布

![24.06.29_Obsidian样式-分栏分列布局 (Column-Page)](https://cdn.pkmer.cn/images/202407061224272.png!pkmer)

高度不变，宽度随内容变化，元素不能跨列分区

![24.06.29_Obsidian样式-分栏分列布局 (Column-Page)](https://cdn.pkmer.cn/images/202407061224933.gif!pkmer)

### 纵向分布

![24.06.29_Obsidian样式-分栏分列布局 (Column-Page)](https://cdn.pkmer.cn/images/202407061224418.png!pkmer)

纵向模式，宽度不变，元素可以跨列分区

![24.06.29_Obsidian样式-分栏分列布局 (Column-Page)](https://cdn.pkmer.cn/images/202407061224432.gif!pkmer)

## 使用方法

在当前笔记的属性 (Properties) 面板的 `cssclasses` 属性中添加 `column-page` 属性值：

![24.06.29_Obsidian样式-分栏分列布局 (Column-Page)](https://cdn.pkmer.cn/images/202407061224150.png!pkmer)

### 调整视图类型

- 从 Style Setting 设置中调整默认视图类型：
	- 默认 `column-page` 视图为 `横向视图`，可以切换：
	  ![24.06.29_Obsidian样式-分栏分列布局 (Column-Page)](https://cdn.pkmer.cn/images/202407061224505.png!pkmer)
- 直接修改视图属性：
	- 设置 `column-page-v` 属性，即直接设置**纵向视图**
		- 将 `column-page`→`column-page-v`
	- 设置 `column-page-h` 属性，即直接设置**横向视图**
		- 将 `column-page`→`column-page-h`

### 常驻分列视图 (不推荐)

可以设置默认所有界面在阅读模式下为分列布局的样式，需要在 Style Setting 插件设置面板中设置：

![24.06.29_Obsidian样式-分栏分列布局 (Column-Page)](https://cdn.pkmer.cn/images/202407061224930.png!pkmer)

## CSS 样式

```css
/* @settings
name: 【分栏】分栏布局(Column-Page)
id: ColumnPage
settings:
  - id: column-page
    title: 分列布局(Column-Page)
    type: class-toggle
    addCommand: true
  - id: column-page-width
    title: 分栏宽度
    description: 分栏最小宽度，单位为px
    type: variable-number
    default: 550
    format: px
  - id: column-page-type
    title: 默认分布模式
    type: class-select
    allowEmpty: false
    options:
      - value: column-h
        label: 横向模式，高度不变，不能跨列
      - value: column-v
        label: 纵向模式，宽度不变，可以跨列
    default: column-h
*/
/*! 分栏布局页面  by 熊猫 */
body {
  --column-page-width: 550px;
}

.column-v .column-page,
.column-page-v{
  & .markdown-preview-section {
    --file-line-width: 100% !important;

    & .snw-header-count-wrapper {
      right: unset;
    }

    column-gap: 2rem;
    column-width: var(--column-page-width) !important;
    column-rule: 2px dashed var(--background-modifier-border);
    column-fill: balance;
    /* 缩减底部空白 不然可能加载成空白页 */
    padding-bottom: 0px !important;
    min-height: unset !important;

    /* 字体大小和行内高度改变，你可以不改变，并删掉 */
    font-size: 18px !important;
    line-height: 160%;

    /* 标题更紧凑一点 */
    & h2, h3, h4, h5, h6 {
      margin-top: 10px;
      margin-bottom: 5px;
    }

    & p {
      break-inside: avoid;
    }

    /* 选择不分列的元素，默认为h1，hr */
    & h1, hr {
      column-span: all;
    }

    /* 多列布局后，部分列表圆点会错位，这样可以避免 */
    & .list-bullet {
      position: absolute;
    }
  }

  &.column-h2 h2 {
    column-span: all;
  }
}
.column-h .column-page,
.column-page-h{
  & .markdown-preview-section {
    --file-line-width: 100% !important;

    & .snw-header-count-wrapper {
      right: unset;
    }

    column-gap: 2rem;
    column-width: var(--column-page-width) !important;
    column-rule: 2px dashed var(--background-modifier-border);
    column-fill: auto;
    height: 100%;
    /* 缩减底部空白 不然可能加载成空白页 */
    padding-bottom: 0px !important;
    min-height: unset !important;

    /* 字体大小和行内高度改变，你可以不改变，并删掉 */
    font-size: 18px !important;
    line-height: 160%;

    /* 标题更紧凑一点 */
    & h2, h3, h4, h5, h6 {
      margin-top: 10px;
      margin-bottom: 5px;
    }

    /* 多列布局后，部分列表圆点会错位，这样可以避免 */
    & .list-bullet {
      position: absolute;
    }
  }
}
```