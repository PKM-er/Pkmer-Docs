---
uid: 20231130234102
title: Zotero 笔记样式——袖珍 Blue Topaz
tags: [zotero, css, 外观, 美化]
description: 类 Blue Topaz 主题的 Zotero 笔记界面样式美化
author: ProudBenzene
type: other
draft: false
editable: false
modified: 20241211104051
---

# Zotero 笔记样式——袖珍 Blue Topaz

## Zotero 笔记界面 CSS 使用方法

1. 复制 css 文件中的代码
2. 打开 Zotero 设置，转到「高级」，滑到最下面点击「编辑器」按钮
3. 接受风险
4. 在搜索栏中输入 `note.css`
5. 将复制的 css 代码粘贴到右侧栏中，完成设置

![Zotero 笔记样式——袖珍 Blue Topaz](https://cdn.pkmer.cn/images/202311302343994.png!pkmer)

## 主题代码

来自 Blue Topaz 主题作者，3f flying fly flies 大大：

```css
h1 { font-size: 1.6em !important; color: #2980b9 !important; margin: 0.2em 0; padding: 0; } h2 { font-size: 1.4em !important; color: #0da5ad !important; margin: 0.2em 0; } h3 { font-size: 1.2em !important; color: #37a51b !important; margin: 1em 0; } h4, h5, h6 { font-size: 1em !important; margin: 1em 0 !important; } h4 { color: #c99811 !important; } h5 { color: #c0392b !important; } h6 { color: #9b59b6 !important; } body { background-color: #fefdf5; background-image: radial-gradient(#c7c7c749 10%, transparent 0); background-size: 22px 22px; background-position: 8px 8px; } body::before { content: ''; position: absolute; background-color: white; width: 100%; height: 5.2em; } blockquote { padding: 0.1em; border-left: 5px solid #5e81ac !important; background-color: #9191911c; border-radius: 5px; } table tbody>tr:nth-child(even) { background-color: #d9d9d91d} ul {     list-style-type: disc; /* 设置为默认的圆点类型 */ }  ul li {     color: red; /* 为无序列表的圆点设置红色 */ }  /* 避免列表内容被误设置为红色 */ ul li * {     color: black; /* 可以替换为其他默认颜色 */ } .primary-editor { background-color: #FCF6E5; }
```