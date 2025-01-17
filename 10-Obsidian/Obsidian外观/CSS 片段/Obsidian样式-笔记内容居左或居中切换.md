---
uid: 20240612203846
title: Obsidian样式-笔记内容居左或居中切换
tags:
  - 笔记视图
description: 通过修改CSS实现笔记内容居左或居中切换
author: 熊猫别熬夜
type: other
draft: false
editable: false
modified: 20240612204011
---

# Obsidian 样式 - 笔记内容居左或居中切换

## 概述

在 Obsidian 中，我们可以自行定义各种个性化设置以适应我们自己的使用习惯。其中，设置内容居左还是居中是一个常见的需求。通过修改 CSS 样式，我们可以轻松实现这个功能。

![2024-06-07_Obsidian样式-内容居左或居中](https://cdn.pkmer.cn/images/202406122038196.gif!pkmer)

> [!tip] 通过命令面板切换
> 本样式依赖 Style Setting 插件，可以通过命令面板快捷调用 `内容居左或居中` 模式：
> ![2024-06-07_Obsidian样式-内容居左或居中](https://cdn.pkmer.cn/images/202406122038642.png!pkmer)

> 同时，对于适配 `Zoom` 插件、`Scroll to Top Plugin` 插件和 `SNW` 插件以及`Floating Toc`插件的笔记引用按钮，界面版样式也进行了调整，以防止各种元素遮挡主要内容。

## CSS 样式

复制粘贴下述代码至 Obsidian 的 Snippets 文件夹下保存为 `.css` 文件后在 Obsidian 外观设置中启动即可。

```css
/* @settings
name: 【界面-熊猫】内容居左或居中
id: contentAlignLeft
settings:
  -
    id: contentAlignLeft
    title: 【界面-熊猫】内容居左或居中
    type: class-toggle
    addCommand: true
*/

/* 居左模式 */
.contentAlignLeft {

  /* !笔记内容居左 */
  .markdown-source-view.mod-cm6.is-readable-line-width .cm-sizer,
  .markdown-preview-view.is-readable-line-width .markdown-preview-sizer {
    max-width: var(--file-line-width);
    margin-left: 0px;
    margin-right: auto;
  }

  /* !2023-12-14_12:45:34 Thino插件修改 */
  div[data-type="thino_view"] #page-wrapper {
    margin: -15px 20px auto;
  }

  /* !适配Zomm插件：防止遮挡 */
  .markdown-source-view.mod-cm6 .cm-panels {
    /* background-color: inherit; */
    background-color: var(--background-primary);
    width: calc(var(--file-line-width) + 4%);
    right: calc(96% - var(--file-line-width));
    z-index: 3;
    font-size: small;
  }

  /* !适配Scroll to Top Plugin插件 */
  #__C_scrollToCursor,
  #__C_scrollToTop,
  #__C_scrollToBottom {
    right: calc(92% - var(--file-line-width));
  }

  /* !适配SNW插件的笔记引用按钮 */
  .snw-header-count-wrapper {
    position: fixed;
    right: calc(97% - var(--file-line-width));
  }
}

/* 居中模式 */
body:not(.contentAlignLeft) {

  /* !适配Zomm插件：防止遮挡 */
  .markdown-source-view.mod-cm6 .cm-panels {
    /* background-color: inherit; */
    background-color: var(--background-primary);
    width: calc(var(--file-line-width) + 6%);
    left: calc(47% - var(--file-line-width) / 2);
    z-index: 10;
    font-size: small;
  }

  /* ! 适配Scroll To Top Plugin插件 */
  #__C_scrollToCursor,
  #__C_scrollToTop,
  #__C_scrollToBottom {
    right: calc(47.5% - var(--file-line-width) / 2);
  }

  /* ! 适配SNW插件的笔记引用按钮 */
  .mod-vertical:not(.mod-left-split):not(.mod-right-split) .workspace-tabs:not(.mod-stacked) .snw-header-count-wrapper {
    position: fixed;
    right: calc(50% - var(--file-line-width) / 2);
  }
}
```

## ChangeLog

- 24.06.14 适配floating toc插件
	- ![Obsidian样式-笔记内容居左或居中切换](https://cdn.pkmer.cn/images/202406141532470.gif!pkmer)

