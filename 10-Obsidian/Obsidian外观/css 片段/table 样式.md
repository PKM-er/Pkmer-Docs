---
uid: 20230504232329
title: 表格（Table）样式
description: 
author: cuman
type: other
draft: false
editable: false
modified: 20230507005205
---

# 表格（Table）样式

## 概述

Markdown 的表格展示形式一般比较单一，有必要通过 CSS 实现加强 Markdown 的表格展示效果。

## 样式举例

- 奇偶行背景色加深
![image.png](https://cdn.pkmer.cn/images/202305042335035.png)

```css

.markdown-rendered tbody tr:nth-child(odd) {
  background-color: hsla(var(--interactive-accent-hsl), 0.1);
}

```

- 表头颜色加深
![image.png](https://cdn.pkmer.cn/images/202305042347650.png)

```css
:is(.markdown-preview-view,.markdown-rendered,.markdown-source-view) th,
:is(.markdown-preview-view,.markdown-rendered,.markdown-source-view) thead tr > th:nth-child(2n+2) {
  background-color: var(--table-thead-background-color);
  font-family: var(--font-family-strong);
}

.theme-light {
  --table-thead-background-color: rgba(0, 0, 0, 0.1);
  }
.theme-dark {
  --table-thead-background-color: rgba(0, 0, 0, 0.5);
}  
```

- 鼠标触发当前行颜色加深

```css
/*table hover*/
:is(.markdown-preview-view,.markdown-rendered,.markdown-source-view) td:hover,
:is(.markdown-preview-view,.markdown-rendered,.markdown-source-view) thead tr > th:nth-child(2n+2):hover {
  background-color: var(--table-hover-color);
}

/*table raw hover*/
:is(.markdown-preview-view,.markdown-rendered,.markdown-source-view) table tbody>tr:hover {
  background-color: var(--table-hover-raw-color);
}

:is(.markdown-preview-view,.markdown-rendered,.markdown-source-view) th:hover {
  background-color: var(--table-hover-thead-color);
}

 :is(.markdown-preview-view,.markdown-rendered,.markdown-source-view) tbody tr:nth-child(odd):hover,
:is(.markdown-preview-view,.markdown-rendered,.markdown-source-view) tbody tr:hover{
  background: var(--table-hover-raw-color);
  transform: scale(1.02);
  transition: transform 0.1s cubic-bezier(0.11, 0.33, 0.23, 0.33);
}

:is(.markdown-preview-view,.markdown-rendered,.markdown-source-view) tbody td:hover{
  background: var(--table-hover-color);
  transform: scale(1.02);
  transition: transform 0.1s cubic-bezier(0.22, 0.66, 0.46, 0.66);
}

.theme-light {
  --table-background-color-odd: rgba(0, 0, 0, 0.02);
  --table-background-color: rgba(0, 0, 0, 0.02);
  --table-thead-background-color: rgba(0, 0, 0, 0.1);
  --table-hover-color: rgba(0, 0, 0, 0.03);
  --table-hover-raw-color: rgba(0, 0, 0, 0.05);
  --table-hover-thead-color: var(--table-thead-background-color);
}
.theme-dark {
  --table-background-color-odd: rgba(0, 0, 0, 0.3);
  --table-background-color: rgba(0, 0, 0, 0.3);
  --table-thead-background-color: rgba(0, 0, 0, 0.5);
  --table-hover-color: rgba(0, 0, 0, 0.5);
  --table-hover-raw-color: rgba(0, 0, 0, 0.5);
  --table-hover-thead-color: var(--table-thead-background-color);
}
```

- 表格去除边框

```css
:is(.markdown-preview-view,.markdown-rendered) :is(th,td) {
  padding: 4px 10px;
  border: none;
}
```

- 表格添加阴影效果

```css
:is(.markdown-preview-view,.markdown-rendered) table {
  box-shadow: 2px 2px 12px rgba(0, 0, 0, 0.1);
}
```

- 三线表样式
![image.png](https://cdn.pkmer.cn/images/202305061103479.png)

```css
table {
    border: 1px solid transparent;
    border-top: 3px solid black;
    border-bottom: 3px solid black;
    text-align: left;
}

thead {
    border-bottom: 1.5px solid black;
    text-align: left;
}

```