---
uid: 20230506111719
title: Obsidian 样式：编辑模式下当前行高亮
tags: [Obsidian, 编辑模式, 当前行高亮, css]
description: Obsidian 样式：编辑模式下当前行高亮
author: cuman & neojinmingli
type: other
draft: false
editable: false
modified: 20240904100904
---

# Obsidian 样式：编辑模式下当前行高亮

## 概述

Obsidian 默认主题 在编辑模式下，没有当前行高亮功能，可以通过下面片段实现。为了达到更好的效果，可以在 Ob 中开启 `编辑器`-`显示行号` 设置项。

- 通过使用 自定义样式来完成，使用方法参考 [[Obsidian的CSS代码片段]]

## 样式效果

![image.png](https://cdn.pkmer.cn/images/202305061135730.png!pkmer)

## 代码

```css

/* Active line background */
.markdown-source-view.mod-cm6 .cm-line.cm-active{
    background-color: rgba(var(--mono-rgb-100), 0.05)
}

/*Active line number */
 
.markdown-source-view.mod-cm6  .cm-lineNumbers .cm-gutterElement.cm-active {
  font-weight: 600;
  color: grey;
}

```

## 为光标所在行添加阴影（进阶）

- 浅色

![浅色阴影.png](https://cdn.pkmer.cn/images/%E6%B5%85%E8%89%B2%E9%98%B4%E5%BD%B1.png!pkmer)

- 深色

![深色阴影.png](https://cdn.pkmer.cn/images/%E6%B7%B1%E8%89%B2%E9%98%B4%E5%BD%B1.png!pkmer)

### 代码

### 代码

```css

.theme-light{
    .markdown-source-view.mod-cm6 .cm-line.cm-active{
    border-radius: 5px; /* 阴影矩形的圆角 */
    box-shadow: 0px 0px 18px #b7b2b2; /* 阴影 */
    }
  }

  .theme-dark{
    .markdown-source-view.mod-cm6 .cm-line.cm-active{
    box-shadow: 0px 0px 18px #555454; /* 阴影矩形的圆角 */
    background-color: #202020; /* 阴影 */
    }
  }

```

## 为光标所在行的行号边添加竖线 & 高亮行号

- 浅色

![浅色竖线.png|400](https://cdn.pkmer.cn/images/%E6%B5%85%E8%89%B2%E7%AB%96%E7%BA%BF.png!pkmer)

- 深色

![深色竖线.png|400](https://cdn.pkmer.cn/images/%E6%B7%B1%E8%89%B2%E7%AB%96%E7%BA%BF.png!pkmer)

### 代码

```css

.theme-light {
  .markdown-source-view.mod-cm6 .cm-lineNumbers .cm-gutterElement.cm-active {
    color: #c34044 !important; /* 高亮行号 */
    font-size: 14px; /* 光标所在行行号字号 */
    font-weight: bold; /* 光标所在行行号 */
    border-left: 2px solid #da474b; /* 添加竖线 */
  }

}

.theme-dark {
  .markdown-source-view.mod-cm6 .cm-lineNumbers .cm-gutterElement.cm-active {
    color: #ffbc32 !important; /* 高亮行号 */
    font-size: 14px; /* 光标所在行行号字号 */
    font-weight: bold; /* 光标所在行行号 */
    border-left: 2px solid #ffbc32; /* 添加竖线 */
  }

}

```

## 为光标所在行添加下划线

- 浅色

![浅色下划线.png](https://cdn.pkmer.cn/images/%E6%B5%85%E8%89%B2%E4%B8%8B%E5%88%92%E7%BA%BF.png!pkmer)

- 深色

![深色下划线.png](https://cdn.pkmer.cn/images/%E6%B7%B1%E8%89%B2%E4%B8%8B%E5%88%92%E7%BA%BF.png!pkmer)

### 代码

```css

.theme-light {
  .markdown-source-view.mod-cm6 .cm-line.cm-active{
    border-bottom: 2px solid #ff0000 !important; /* 下划线 */
  }
}

.theme-dark {
  .markdown-source-view.mod-cm6 .cm-line.cm-active {
     border-bottom: 2px solid #ffeb3b; /* 下划线 */
  }
}

```
