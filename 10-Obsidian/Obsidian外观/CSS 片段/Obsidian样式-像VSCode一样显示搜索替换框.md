---
uid: 20231107230507
title: Obsidian 样式 - 像 VSCode 一样显示搜索替换框
tags:
  - 美化样式
description: 修改文本搜索替换的边框
author: 熊猫别熬夜
type: other
draft: false
editable: false
modified: 20231107230722
---

# Obsidian 样式 - 像 VSCode 一样显示搜索替换框

悬浮搜索和替换的窗口像 VSCode 那样显示：

![Pasted image 20231107215540](https://cdn.pkmer.cn/images/Pasted%20image%2020231107215540.png!pkmer)

```css
body {  
  /*搜索框边框颜色*/
  --search-border-color: var(--text-accent);

  /*搜索框距离页面顶部距离*/
  --search-top: calc(var(--header-height) + var(--size-4-4));
  
  /*搜索框距离页面右侧距离*/
  --search-right: var(--size-4-4);
  
  /*输入框选中时阴影颜色*/
  --background-modifier-border-focus: hsl(
    var(--accent-h),
    calc(var(--accent-s) - 4%),
    calc(var(--accent-l) + 4%)
  );  
}

.obsidian-search-match-highlight {
  background-color: var(--background-secondary);
}

.document-search-container {
  position: absolute;
  top: var(--search-top);
  /* right: var(--search-right); */
  right: calc(47% - var(--file-line-width) / 2);
  border-radius: var(--size-4-2);
  padding: var(--size-2-3) var(--size-4-1) var(--size-2-3) 0;
  height: fit-content;
  border: 2px solid var(--search-border-color);
  box-shadow: var(--shadow-s);
  margin: 0;
}
.document-search-container :is(.document-search, .document-replace) {
  align-items: center;
  padding: 0;
}
.document-search-container :is(.document-search, .document-replace) button:nth-child(3) {
  display: none;
}
.document-search-container :is(.document-search-input, .document-replace-input) {
  margin-left: 6px;
}
.document-search-container .document-search-close-button {
  position: relative;
  top: 0;
}

.document-search-close-button {
  height: var(--input-height);
  width: var(--input-height);
}
.document-search-close-button::before {
  content: "";
  -webkit-mask: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 30 30"><g transform="matrix(0.7071067094802856,-0.7071067094802856,0.7071067094802856,0.7071067094802856,-3.5424977926304564,6.277729735826142)"><rect x="5.806640625" y="7.4150390625" width="2" height="24" rx="1" fill="currentColor"/></g><g style="mix-blend-mode:passthrough" transform="matrix(0.7071067094802856,0.7071067094802856,-0.7071067094802856,0.7071067094802856,10.914602712669875,-14.349200366239529)"><rect x="22.7783203125" y="6.00048828125" width="2" height="24" rx="1" fill="currentColor"/></g></svg>');
  position: absolute;
  background-color: var(--text-accent);
  width: calc(var(--input-height) * 2 / 3);
  height: calc(var(--input-height) * 2 / 3);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.document-search-close-button:hover {
  background-color: var(--text-accent);
}
.document-search-close-button:hover::before {
  background-color: var(--text-on-accent);
}
```