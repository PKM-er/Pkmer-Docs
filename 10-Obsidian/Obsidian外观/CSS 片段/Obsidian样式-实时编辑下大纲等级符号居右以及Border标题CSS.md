---
uid: 20231102200103
title: Obsidian 样式 - 实时编辑下大纲等级符号居右以及 Border 标题 CSS
tags: [CSS美化, Border, 标题样式]
description: 实时编辑下大纲等级符号居右以及 Border 标题 CSS
author: 熊猫别熬夜
type: other
draft: false
editable: false
modified: 20231108172009
---

# Obsidian 样式 - 实时编辑下大纲等级符号居右以及 Border 标题 CSS

在实时编辑或者源码模式下，编辑标题时的 `#` 会出现左右移动，这里提供 2 种更改大纲等级符号的显示方式的 CSS：

- 隐藏标题等级符号 (隐藏 `#` 号)
	- 可能会不小心看不到鼠标光标
- 大纲等级符号居右 (将 `#` 号居右)
	- 个人比较推荐

## 隐藏标题等级符号

```css
.cm-formatting.cm-header {
  position: absolute;
  opacity: 0;
}
```

## 大纲等级符号居右 (推荐)

![Obsidian样式-实时编辑下大纲等级符号居右以及Border标题CSS](https://cdn.pkmer.cn/images/Pasted%20image%2020231102194826.png!pkmer)

```css
.cm-formatting.cm-header {
  position: absolute;
  right: 0em;
  opacity: 0.5;
  color: inherit;
}
```

## Border 的标题 CSS

> [!tip]+ 该 CSS 来自 [Border主题](https://github.com/Akifyss/obsidian-border)
> ![Obsidian样式-实时编辑下大纲等级符号居右以及Border标题CSS](https://cdn.pkmer.cn/images/Pasted%20image%2020231102195723.png!pkmer)

```css
.view-content .markdown-source-view .inline-title {
  align-self: center;
}
.markdown-preview-view .mod-header .inline-title {
  text-align: center;
}

/* ======== */

:is(.markdown-rendered, .markdown-preview-view) :is(h1, h2, h3, h4, h5, h6) {
  position: relative;
  text-indent: 5px;
}

body {
  --font-bold: bold;
  /* --text-normal: hsl(var(232), 12%, 12%); */

  /* 字体大小 */
  --h1-size: calc(var(--font-text-size) * 1.6);
  --h2-size: calc(var(--font-text-size) * 1.5);
  --h3-size: calc(var(--font-text-size) * 1.4);
  --h4-size: calc(var(--font-text-size) * 1.3);
  --h5-size: calc(var(--font-text-size) * 1.2);
  --h6-size: calc(var(--font-text-size) * 1.1);

  /* 字重 */
  --h1-weight: var(--font-bold);
  --h2-weight: var(--font-bold);
  --h3-weight: var(--font-bold);
  --h4-weight: var(--font-bold);
  --h5-weight: var(--font-bold);
  --h6-weight: var(--font-bold);

  /* 行高 */
  /* --h1-line-height: calc(var(--line-height-normal) * 1.2);
	--h2-line-height: calc(var(--line-height-normal) * 1.2);
	--h3-line-height: var(--line-height-normal);
	--h4-line-height: var(--line-height-normal);
	--h5-line-height: var(--line-height-normal);
	--h6-line-height: var(--line-height-normal); */

  /* --animation: var(--anim-duration-fast) var(--anim-motion-smooth); */

  /* Inline title */
  --inline-title-color: var(--h1-color);
  --inline-title-font: var(--h1-font);
  --inline-title-line-height: var(--h1-line-height);
  --inline-title-size: var(--h1-size);
  --inline-title-style: var(--h1-style);
  --inline-title-variant: var(--h1-variant);
  --inline-title-weight: var(--h1-weight);
  /* Headings */
  --heading-formatting: var(--text-faint);

  --h1-font: inherit;
  --h2-font: inherit;
  --h3-font: inherit;
  --h4-font: inherit;
  --h5-font: inherit;
  --h6-font: inherit;
  --h1-line-height: 1.2;
  --h2-line-height: 1.2;
  --h3-line-height: 1.3;
  --h4-line-height: 1.4;
  --h5-line-height: var(--line-height-normal);
  --h6-line-height: var(--line-height-normal);
  --h1-size: 1.3em !important;
  --h2-size: 1.2em !important;
  --h3-size: 1.1em !important;
  --h4-size: 1em !important;
  --h5-size: 1em !important;
  --h6-size: 1em !important;
  --h1-style: normal;
  --h2-style: normal;
  --h3-style: normal;
  --h4-style: normal;
  --h5-style: normal;
  --h6-style: normal;
  --h1-variant: normal;
  --h2-variant: normal;
  --h3-variant: normal;
  --h4-variant: normal;
  --h5-variant: normal;
  --h6-variant: normal;
  --h1-weight: 700;
  --h2-weight: 675;
  --h3-weight: 650;
  --h4-weight: 625;
  --h5-weight: 600;
  --h6-weight: 575;
}

.theme-light {
  --header-indicator-color-h1: var(--h1-color);
  --header-indicator-bg-h1: transparent;
  --header-indicator-color-h2: var(--h2-color);
  --header-indicator-bg-h2: transparent;
  --header-indicator-color-h3: var(--h3-color);
  --header-indicator-bg-h3: transparent;
  --header-indicator-color-h4: var(--h4-color);
  --header-indicator-bg-h4: transparent;
  --header-indicator-color-h5: var(--h5-color);
  --header-indicator-bg-h5: transparent;
  --header-indicator-color-h6: var(--h6-color);
  --header-indicator-bg-h6: transparent;

  --h1-indicator-color: #fe7968;
  --h2-indicator-color: #f39c12;
  --h3-indicator-color: #e5c700;
  --h4-indicator-color: #78ba7e;
  --h5-indicator-color: #038aff;
  --h6-indicator-color: #9455ec;

  --color-red: #fe7968;
  --color-orange: #f39c12;
  --color-yellow: #e5c700;
  --color-green: #78ba7e;
  --color-blue: #038aff;
  --color-purple: #9455ec;

  --h1-color: #fe7968;
  --h2-color: #f39c12;
  --h3-color: #e5c700;
  --h4-color: #78ba7e;
  --h5-color: #038aff;
  --h6-color: #9455ec;
}

.theme-dark {
  --header-indicator-color-h1: var(--background-primary);
  --header-indicator-bg-h1: var(--h1-color);
  --header-indicator-color-h2: var(--background-primary);
  --header-indicator-bg-h2: var(--h2-color);
  --header-indicator-color-h3: var(--background-primary);
  --header-indicator-bg-h3: var(--h3-color);
  --header-indicator-color-h4: var(--background-primary);
  --header-indicator-bg-h4: var(--h4-color);
  --header-indicator-color-h5: var(--background-primary);
  --header-indicator-bg-h5: var(--h5-color);
  --header-indicator-color-h6: var(--background-primary);
  --header-indicator-bg-h6: var(--h6-color);

  --h1-indicator-color: #ff8a78;
  --h2-indicator-color: #fabe58;
  --h3-indicator-color: #ffec8b;
  --h4-indicator-color: #87d37c;
  --h5-indicator-color: #89c4f4;
  --h6-indicator-color: #c69eff;

  --color-red: #ff8a78;
  --color-orange: #fabe58;
  --color-yellow: #ffec8b;
  --color-green: #87d37c;
  --color-blue: #89c4f4;
  --color-purple: #c69eff;

  --h1-color: #ff8a78;
  --h2-color: #fabe58;
  --h3-color: #ffec8b;
  --h4-color: #87d37c;
  --h5-color: #89c4f4;
  --h6-color: #c69eff;
}

/* h1 */

.h1-color-default {
  --h1-color: var(--text-normal) !important;
  --h1-indicator-color: var(--color-red) !important;
}

.h1-color-designated {
  --h1-color: var(--color-red) !important;
  --h1-indicator-color: var(--h1-color);
}

.h1-color-customized {
  --h1-indicator-color: var(--h1-color);
}

.is-live-preview .HyperMD-header-1::before {
  margin-right: 6px;
  content: " ";
  display: inline-block;
  width: 3px;
  height: calc(1.2em - 8px);
  border-radius: var(--radius-m);
  background-color: var(--h1-indicator-color);
  transform: translateY(4px);
}

.markdown-rendered h1::before,
.markdown-preview-view h1::before {
  margin-right: 6px;
  content: " ";
  display: inline-block;
  width: 3px;
  height: calc(1.2em - 8px);
  border-radius: var(--radius-m);
  background-color: var(--h1-indicator-color);
  position: absolute;
  top: 4px;
  left: 0px;
}

:is(
    .markdown-preview-view h1,
    .markdown-rendered h1,
    .HyperMD-header-1
  )::after {
  content: "";
  position: absolute;
  height: 2px;
  width: 100%;
  right: 0px;
  opacity: 0.5;
  bottom: calc(
    var(--font-text-size) * var(--line-height-normal) * 0.2 - var(--size-2-1)
  );
  background-image: linear-gradient(
    to left,
    var(--h1-indicator-color) 30%,
    transparent 70%
  );
}

.is-live-preview .HyperMD-header-1 .collapse-indicator.collapse-icon svg,
:is(.markdown-rendered, .markdown-preview-view)
  h1
  .collapse-indicator.collapse-icon
  svg {
  transform: translateX(0px);
  background-color: currentColor;
  -webkit-mask-image: url('data:image/svg+xml;utf8,<?xml version="1.0" encoding="UTF-8"?><svg id="svg0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 10"><defs><style>.cls-1{fill:none;}</style></defs><rect class="cls-1" width="10" height="10"/><path d="M0,1H1.18v3.43H3.53V1h1.18V9h-1.18v-3.43H1.18v3.43H0V1ZM6.47,9v-1.14h1.18V2.32l-1.47,.82V1.82l1.47-.82h1.18V7.86h1.18v1.14h-3.53Z"/></svg>');
}

.is-live-preview
  .HyperMD-header-1
  .is-collapsed
  .collapse-indicator.collapse-icon
  svg,
:is(.markdown-rendered, .markdown-preview-view)
  .is-collapsed
  h1
  .collapse-indicator.collapse-icon
  svg {
  background-color: var(--h1-indicator-color);
  color: var(--h1-indicator-color);
}

.h2-color-default {
  --h2-color: var(--text-normal) !important;
  --h2-indicator-color: var(--color-orange) !important;
}

.h2-color-designated {
  --h2-color: var(--color-orange) !important;
  --h2-indicator-color: var(--h2-color);
}

.h2-color-customized {
  --h2-indicator-color: var(--h2-color);
}

.is-live-preview .HyperMD-header-2::before {
  margin-right: 6px;
  content: " ";
  display: inline-block;
  width: 3px;
  height: calc(1.2em - 8px);
  border-radius: var(--radius-m);
  background-color: var(--h2-indicator-color);
  transform: translateY(4px);
}

.markdown-rendered h2::before,
.markdown-preview-view h2::before {
  margin-right: 6px;
  content: " ";
  display: inline-block;
  width: 3px;
  height: calc(1.2em - 8px);
  border-radius: var(--radius-m);
  background-color: var(--h2-indicator-color);
  position: absolute;
  top: 4px;
  left: 0px;
}

:is(
    .markdown-preview-view h2,
    .markdown-rendered h2,
    .HyperMD-header-2
  )::after {
  content: "";
  position: absolute;
  height: 2px;
  width: 100%;
  right: 0px;
  opacity: 0.5;

  bottom: calc(
    var(--font-text-size) * var(--line-height-normal) * 0.2 - var(--size-2-1)
  );
  background-image: linear-gradient(
    to left,
    var(--h2-indicator-color) 30%,
    transparent 70%
  );
}

.is-live-preview .HyperMD-header-2 .collapse-indicator.collapse-icon svg,
:is(.markdown-rendered, .markdown-preview-view)
  h2
  .collapse-indicator.collapse-icon
  svg {
  transform: translateX(0px);
  background-color: currentColor;
  -webkit-mask-image: url('data:image/svg+xml;utf8,<?xml version="1.0" encoding="UTF-8"?><svg id="svg0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 10"><defs><style>.cls-1{fill:none;}</style></defs><rect class="cls-1" width="10" height="10"/><path d="M0,1H1.11v3.43H3.33V1h1.11V9h-1.11v-3.43H1.11v3.43H0V1ZM10,9h-3.33c-.29,0-.58-.12-.79-.33-.21-.21-.33-.51-.33-.81s.11-.57,.3-.78l2.71-2.99c.21-.21,.33-.49,.33-.81s-.12-.59-.33-.81c-.21-.21-.49-.33-.79-.33s-.58,.12-.79,.33c-.21,.21-.33,.51-.33,.81h-1.11c0-.61,.23-1.19,.65-1.62,.42-.43,.98-.67,1.57-.67s1.15,.24,1.57,.67c.42,.43,.65,1.01,.65,1.62s-.25,1.2-.65,1.62l-2.68,2.95h3.33v1.14Z"/></svg>');
}

.is-live-preview
  .HyperMD-header-2
  .is-collapsed
  .collapse-indicator.collapse-icon
  svg,
:is(.markdown-rendered, .markdown-preview-view)
  .is-collapsed
  h2
  .collapse-indicator.collapse-icon
  svg {
  background-color: var(--h2-indicator-color);
  color: var(--h2-indicator-color);
}

.h3-color-default {
  --h3-color: var(--text-normal) !important;
  --h3-indicator-color: var(--color-yellow) !important;
}

.h3-color-designated {
  --h3-color: var(--color-yellow) !important;
  --h3-indicator-color: var(--h3-color);
}

.h3-color-customized {
  --h3-indicator-color: var(--h3-color);
}

.is-live-preview .HyperMD-header-3::before {
  margin-right: 6px;
  content: " ";
  display: inline-block;
  width: 3px;
  height: calc(1.3em - 8px);
  border-radius: var(--radius-m);
  background-color: var(--h3-indicator-color);
  transform: translateY(4px);
}

.markdown-rendered h3::before,
.markdown-preview-view h3::before {
  margin-right: 6px;
  content: " ";
  display: inline-block;
  width: 3px;
  height: calc(1.3em - 8px);
  border-radius: var(--radius-m);
  background-color: var(--h3-indicator-color);
  position: absolute;
  top: 4px;
  left: 0px;
}

:is(
    .markdown-preview-view h3,
    .markdown-rendered h3,
    .HyperMD-header-3
  )::after {
  content: "";
  position: absolute;
  height: 2px;
  width: 100%;
  right: 0px;
  opacity: 0.5;
  bottom: calc(
    var(--font-text-size) * var(--line-height-normal) * 0.2 - var(--size-2-1)
  );
  background-image: linear-gradient(
    to left,
    var(--h3-indicator-color) 30%,
    transparent 70%
  );
}

.is-live-preview .HyperMD-header-3 .collapse-indicator.collapse-icon svg,
:is(.markdown-rendered, .markdown-preview-view)
  h3
  .collapse-indicator.collapse-icon
  svg {
  transform: translateX(0px);
  background-color: currentColor;
  -webkit-mask-image: url('data:image/svg+xml;utf8,<?xml version="1.0" encoding="UTF-8"?><svg id="svg0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 10"><defs><style>.cls-1{fill:none;}</style></defs><rect class="cls-1" width="10" height="10"/><path d="M0,1H1.11v3.43H3.33V1h1.11V9h-1.11v-3.43H1.11v3.43H0V1Zm6.67,0h2.22c.29,0,.58,.12,.79,.33,.21,.21,.33,.51,.33,.81V7.86c0,.3-.12,.59-.33,.81-.21,.21-.49,.33-.79,.33h-2.22c-.29,0-.58-.12-.79-.33-.21-.21-.33-.51-.33-.81v-.57h1.11v.57h2.22v-2.29h-2.22v-1.14h2.22V2.14h-2.22v.57h-1.11v-.57c0-.3,.12-.59,.33-.81,.21-.21,.49-.33,.79-.33Z"/></svg>');
}

.is-live-preview
  .HyperMD-header-3
  .is-collapsed
  .collapse-indicator.collapse-icon
  svg,
:is(.markdown-rendered, .markdown-preview-view)
  .is-collapsed
  h3
  .collapse-indicator.collapse-icon
  svg {
  background-color: var(--h3-indicator-color);
  color: var(--h3-indicator-color);
}

.h4-color-default {
  --h4-color: var(--text-normal) !important;
  --h4-indicator-color: var(--color-green) !important;
}

.h4-color-designated {
  --h4-color: var(--color-green) !important;
  --h4-indicator-color: var(--h4-color);
}

.h4-color-customized {
  --h4-indicator-color: var(--h4-color);
}

.is-live-preview .HyperMD-header-4::before {
  margin-right: 6px;
  content: " ";
  display: inline-block;
  width: 3px;
  height: calc(1.4em - 8px);
  border-radius: var(--radius-m);
  background-color: var(--h4-indicator-color);
  transform: translateY(4px);
}

.markdown-rendered h4::before,
.markdown-preview-view h4::before {
  margin-right: 6px;
  content: " ";
  display: inline-block;
  width: 3px;
  height: calc(1.4em - 8px);
  border-radius: var(--radius-m);
  background-color: var(--h4-indicator-color);
  position: absolute;
  top: 4px;
  left: 0px;
}

:is(
    .markdown-rendered h4,
    .markdown-preview-view h4,
    .HyperMD-header-4
  )::after {
  content: "";
  position: absolute;
  height: 2px;
  width: 100%;
  right: 0px;
  opacity: 0.5;
  bottom: calc(
    var(--font-text-size) * var(--line-height-normal) * 0.2 - var(--size-2-1)
  );
  background-image: linear-gradient(
    to left,
    var(--h4-indicator-color) 30%,
    transparent 70%
  );
}

.is-live-preview .HyperMD-header-4 .collapse-indicator.collapse-icon svg,
:is(.markdown-rendered, .markdown-preview-view)
  h4
  .collapse-indicator.collapse-icon
  svg {
  transform: translateX(0px);
  background-color: currentColor;
  -webkit-mask-image: url('data:image/svg+xml;utf8,<?xml version="1.0" encoding="UTF-8"?><svg id="svg0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 10"><defs><style>.cls-1{fill:none;}</style></defs><rect class="cls-1" width="10" height="10"/><path d="M0,1H1.11v3.43H3.33V1h1.11V9h-1.11v-3.43H1.11v3.43H0V1ZM8.33,9v-2.86h-2.78v-1.14L8.33,1h1.11V5h.56v1.14h-.56v2.86h-1.11Zm0-4V2.95l-1.42,2.05h1.42Z"/></svg>');
}

.is-live-preview
  .HyperMD-header-4
  .is-collapsed
  .collapse-indicator.collapse-icon
  svg,
:is(.markdown-rendered, .markdown-preview-view)
  .is-collapsed
  h4
  .collapse-indicator.collapse-icon
  svg {
  background-color: var(--h4-indicator-color);
  color: var(--h4-indicator-color);
}

.h5-color-default {
  --h5-color: var(--text-normal) !important;
  --h5-indicator-color: var(--color-blue) !important;
}

.h5-color-designated {
  --h5-color: var(--color-blue) !important;
  --h5-indicator-color: var(--h5-color);
}

.h5-color-customized {
  --h5-indicator-color: var(--h5-color);
}

.is-live-preview .HyperMD-header-5::before {
  margin-right: 6px;
  content: " ";
  display: inline-block;
  width: 3px;
  height: calc(1.5em - 8px);
  border-radius: var(--radius-m);
  background-color: var(--h5-indicator-color);
  transform: translateY(4px);
}

.markdown-rendered h5::before,
.markdown-preview-view h5::before {
  margin-right: 6px;
  content: " ";
  display: inline-block;
  width: 3px;
  height: calc(1.5em - 8px);
  border-radius: var(--radius-m);
  background-color: var(--h5-indicator-color);
  position: absolute;
  top: 4px;
  left: 0px;
}

:is(
    .markdown-rendered h5,
    .markdown-preview-view h5,
    .HyperMD-header-5
  )::after {
  content: "";
  position: absolute;
  height: 2px;
  width: 100%;
  right: 0px;
  opacity: 0.5;
  bottom: calc(
    var(--font-text-size) * var(--line-height-normal) * 0.2 - var(--size-2-1)
  );
  background-image: linear-gradient(
    to left,
    var(--h5-indicator-color) 30%,
    transparent 70%
  );
}

.is-live-preview .HyperMD-header-5 .collapse-indicator.collapse-icon svg,
:is(.markdown-rendered, .markdown-preview-view)
  h5
  .collapse-indicator.collapse-icon
  svg {
  transform: translateX(0px);
  background-color: currentColor;
  -webkit-mask-image: url('data:image/svg+xml;utf8,<?xml version="1.0" encoding="UTF-8"?><svg id="svg0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 10"><defs><style>.cls-1{fill:none;}</style></defs><rect class="cls-1" width="10" height="10"/><path d="M0,1H1.11v3.43H3.33V1h1.11V9h-1.11v-3.43H1.11v3.43H0V1Zm6.67,0h2.78v1.14h-2.78v2.29h1.11c.59,0,1.15,.24,1.57,.67,.42,.43,.65,1.01,.65,1.62s-.23,1.19-.65,1.62c-.42,.43-.98,.67-1.57,.67h-1.11c-.29,0-.58-.12-.79-.33-.21-.21-.33-.51-.33-.81v-.57h1.11v.57h1.11c.29,0,.58-.12,.79-.33,.21-.21,.33-.51,.33-.81s-.12-.59-.33-.81c-.21-.21-.49-.33-.79-.33h-1.11c-.29,0-.58-.12-.79-.33-.21-.21-.33-.51-.33-.81V2.14c0-.3,.12-.59,.33-.81,.21-.21,.49-.33,.79-.33Z"/></svg>');
}

.is-live-preview
  .HyperMD-header-5
  .is-collapsed
  .collapse-indicator.collapse-icon
  svg,
:is(.markdown-rendered, .markdown-preview-view)
  .is-collapsed
  h5
  .collapse-indicator.collapse-icon
  svg {
  background-color: var(--h5-indicator-color);
  color: var(--h5-indicator-color);
}

.h6-color-default {
  --h6-color: var(--text-normal) !important;
  --h6-indicator-color: var(--color-purple) !important;
}

.h6-color-designated {
  --h6-color: var(--color-purple) !important;
  --h6-indicator-color: var(--h6-color);
}

.h6-color-customized {
  --h6-indicator-color: var(--h6-color);
}

.is-live-preview .HyperMD-header-6::before {
  margin-right: 6px;
  content: " ";
  display: inline-block;
  width: 3px;
  height: calc(1.5em - 8px);
  border-radius: var(--radius-m);
  background-color: var(--h6-indicator-color);
  transform: translateY(4px);
}

.markdown-rendered h6::before,
.markdown-preview-view h6::before {
  margin-right: 6px;
  content: " ";
  display: inline-block;
  width: 3px;
  height: calc(1.5em - 8px);
  border-radius: var(--radius-m);
  background-color: var(--h6-indicator-color);
  position: absolute;
  top: 4px;
  left: 0px;
}

:is(
    .markdown-rendered h6,
    .markdown-preview-view h6,
    .HyperMD-header-6
  )::after {
  content: "";
  position: absolute;
  height: 2px;
  width: 100%;
  right: 0px;
  opacity: 0.5;
  bottom: calc(
    var(--font-text-size) * var(--line-height-normal) * 0.2 - var(--size-2-1)
  );
  background-image: linear-gradient(
    to left,
    var(--h6-indicator-color) 30%,
    transparent 70%
  );
}

.is-live-preview .HyperMD-header-6 .collapse-indicator.collapse-icon svg,
:is(.markdown-rendered, .markdown-preview-view)
  h6
  .collapse-indicator.collapse-icon
  svg {
  transform: translateX(0px);
  background-color: currentColor;
  -webkit-mask-image: url('data:image/svg+xml;utf8,<?xml version="1.0" encoding="UTF-8"?><svg id="svg0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 10"><defs><style>.cls-1{fill:none;}</style></defs><rect class="cls-1" width="10" height="10"/><path d="M0,1H1.11v3.43H3.33V1h1.11V9h-1.11v-3.43H1.11v3.43H0V1Zm6.67,0h2.22c.29,0,.58,.12,.79,.33,.21,.21,.33,.51,.33,.81v.57h-1.11v-.57h-2.22v2.29h2.22c.29,0,.58,.12,.79,.33,.21,.21,.33,.51,.33,.81v2.29c0,.3-.12,.59-.33,.81-.21,.21-.49,.33-.79,.33h-2.22c-.29,0-.58-.12-.79-.33-.21-.21-.33-.51-.33-.81V2.14c0-.3,.12-.59,.33-.81,.21-.21,.49-.33,.79-.33Zm0,4.57v2.29h2.22v-2.29h-2.22Z"/></svg>');
}

.is-live-preview
  .HyperMD-header-6
  .is-collapsed
  .collapse-indicator.collapse-icon
  svg,
:is(.markdown-rendered, .markdown-preview-view)
  .is-collapsed
  h6
  .collapse-indicator.collapse-icon
  svg {
  background-color: var(--h6-indicator-color);
  color: var(--h6-indicator-color);
}

```