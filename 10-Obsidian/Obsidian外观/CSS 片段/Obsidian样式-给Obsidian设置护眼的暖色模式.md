---
uid: 20240612203649
title: 给Obsidian设置护眼的暖色模式
tags: [主题切换, 浅色主题]
description: 给Obsidian设置护眼的暖色模式
author: 熊猫别熬夜
type: other
draft: false
editable: false
modified: 20240612203807
---

# 给 Obsidian 设置护眼的暖色模式

![2024-05-26_Obsidian样式-如何给Obsidian设置护眼模式](https://cdn.pkmer.cn/images/202406122036261.jpg!pkmer)

分享下今天折腾的一个**护眼模式**，采用 [PKMer_Quickadd 脚本 - 控制自定义 CSS- 设置二维码字体]( https://pkmer.cn/show/20240131162612 ) 这篇文章的控制 CSS 片段的开关 QuickAdd 脚本，以及由群友推荐的 `Material Gruvbox` 主题的浅色模式，组合为可以在 Obsidian 浅色模式下启用护眼模式的脚本，效果如下：

![2024-05-26_Obsidian样式-如何给Obsidian设置护眼模式](https://cdn.pkmer.cn/images/202406122036755.gif!pkmer)

> 备注：脚本是在以前的文章的基础上改的，头图也是之前做的 PPT 模版直接套用的😂，水文一篇，感兴趣话可以试试。

## QuickAdd Capture：启动/关闭 护眼模式

![2024-05-26_Obsidian样式-如何给Obsidian设置护眼模式](https://cdn.pkmer.cn/images/202406122036209.gif!pkmer)

```js quickadd
const snippetName = "【主题】护眼模式";
const snippetPath = app.customCss.getSnippetPath(snippetName);
if (!snippetPath) {
	new Notice(`Snippet ${snippetName} not found`);
}

const isSnippetsEnabled = app.customCss.enabledSnippets.has(snippetName)
	? true
	: false;

if (isSnippetsEnabled) {
	console.log("关闭");
	app.customCss.setCssEnabledStatus(snippetName, false);
	app.customCss.requestLoadSnippets();
} else {
	console.log("启动");
	app.customCss.setCssEnabledStatus(snippetName, true);
	app.customCss.requestLoadSnippets();
}
```

## 护眼样式

将下述 CSS，保存为名为“【主题】护眼模式.css”的文件至 Obsidian 的 `.obsidian/snippets/` 文件夹下。

```css
/* 样式来源于 Material Gruvbox */
body {
  --accent-h: 166; /* --neutral-blue #7daea3 */
  --accent-s: 23%;
  --accent-l: 58%;

  --link-decoration:                none;
  --link-decoration-hover:          none;
  --link-external-decoration:       none;
  --link-external-decoration-hover: none;

  --tag-decoration:                 none;
  --tag-decoration-hover:           underline;
  --tag-padding-x:                  .5em;
  --tag-padding-y:                  .2em;
  --tag-radius:                     .5em;

  --tab-font-weight:                600;
  --bold-weight:                    600;

  --checkbox-radius:                0;

  /* --list-indent:                    2em; */

  --embed-border-left: 6px double var(--interactive-accent);
}

.theme-light {
  /* DEFAULTS */
  --dark0-hard-x:      29,32,33;
  --dark0-hard:        rgb(var(--dark0-hard-x));
  --dark0-x:           40,40,40;
  --dark0:             rgb(var(--dark0-x));
  --dark0-soft-x:      50,48,47;
  --dark0-soft:        rgb(var(--dark0-soft-x));
  --dark1-x:           60,56,54;
  --dark1:             rgb(var(--dark1-x));
  --dark2-x:           80,73,69;
  --dark2:             rgb(var(--dark2-x));
  --dark3-x:           102,92,84;
  --dark3:             rgb(var(--dark3-x));
  --dark4-x:           124,111,100;
  --dark4:             rgb(var(--dark4-x));
  --gray-x:            146,131,116;
  --gray:              rgb(var(--gray-x));
  --dark-text-x:       101,71,53;
  --dark-text:         rgb(var(--dark-text-x));
  --dark-text-faint-x: 179,126,93;
  --dark-text-faint:   rgb(var(--dark-text-faint-x));
  --dark-text-muted-x: 115,81,69;
  --dark-text-muted:   rgb(var(--dark-text-muted-x));

  --light0-hard-x:     249,245,215;
  --light0-hard:       rgb(var(--light0-hard-x));
  --light0-x:          251,241,199;
  --light0:            rgb(var(--light0-x));
  --light0-soft-x:     242,229,188;
  --light0-soft:       rgb(var(--light0-soft-x));
  --light1-x:          235,219,178;
  --light1:            rgb(var(--light1-x));
  --light2-x:          213,196,161;
  --light2:            rgb(var(--light2-x));
  --light3-x:          189,174,147;
  --light3:            rgb(var(--light3-x));
  --light4-x:          168,153,132;
  --light4:            rgb(var(--light4-x));
  --light-text-x:      212,190,152;
  --light-text:        rgb(var(--light-text-x));

  --neutral-red-x:     234,105,98;
  --neutral-red:       rgb(var(--neutral-red-x));
  --neutral-green-x:   169,182,101;
  --neutral-green:     rgb(var(--neutral-green-x));
  --neutral-yellow-x:  231,138,78;
  --neutral-yellow:    rgb(var(--neutral-yellow-x));
  --neutral-blue-x:    125,174,163;
  --neutral-blue:      rgb(var(--neutral-blue-x));
  --neutral-purple-x:  211,134,155;
  --neutral-purple:    rgb(var(--neutral-purple-x));
  --neutral-aqua-x:    137,180,130;
  --neutral-aqua:      rgb(var(--neutral-aqua-x));

  --faded-red-x:       193,74,74;
  --faded-red:         rgb(var(--faded-red-x));
  --faded-green-x:     108,120,46;
  --faded-green:       rgb(var(--faded-green-x));
  --faded-yellow-x:    195,94,10;
  --faded-yellow:      rgb(var(--faded-yellow-x));
  --faded-blue-x:      69,112,122;
  --faded-blue:        rgb(var(--faded-blue-x));
  --faded-purple-x:    148,94,128;
  --faded-purple:      rgb(var(--faded-purple-x));
  --faded-aqua-x:      76,122,93;
  --faded-aqua:        rgb(var(--faded-aqua-x));


  --color-red-rgb: var(--faded-red-x);
  --color-red: var(--faded-red);
  --color-purple-rgb: var(--faded-purple-x);
  --color-purple: var(--faded-purple);
  --color-green-rgb: var(--faded-green-x);
  --color-green: var(--faded-green);
  --color-cyan-rgb: var(--neutral-blue-x);
  --color-cyan: var(--neutral-blue);
  --color-blue-rgb: var(--faded-blue-x);
  --color-blue: var(--faded-blue);
  --color-yellow-rgb: var(--neutral-yellow-x);
  --color-yellow: var(--neutral-yellow);
  --color-orange-rgb: var(--faded-yellow-x);
  --color-orange: var(--faded-yellow);
  --color-pink-rgb: var(--faded-purple-x);
  --color-pink: var(--faded-purple);

  --background-primary: var(--light0-hard);
  --background-primary-alt: var(--light0-hard);
  --background-secondary: var(--light1);
  --background-secondary-alt: var(--light1);
  --background-modifier-border: var(--light2);
  --background-accent: var(--light0-soft);

  --cursor-line-background: rgba(var(--light1-x), 0.5);

  --text-normal: var(--dark-text);
  --text-faint: var(--dark-text-faint);
  --text-muted: var(--dark-text-muted);

  --h1-color: var(--faded-red);
  --h2-color: var(--faded-yellow);
  --h3-color: var(--faded-green);
  --h4-color: var(--faded-aqua);
  --h5-color: var(--faded-blue);
  --h6-color: var(--faded-purple);

  --text-highlight-bg: var(--faded-yellow);
  --text-highlight-fg: var(--light0-hard);

  --text-accent: var(--neutral-yellow);
  --text-accent-hover: var(--faded-yellow);

  --tag-color: var(--faded-aqua);
  --tag-background: var(--light1);
  --tag-background-hover: rgba(var(--light1-x), 0.6);

  --titlebar-text-color-focused: var(--bright-red);

  --inline-title-color: var(--neutral-yellow);

  --bold-color: var(--faded-yellow);
  --italic-color: var(--faded-yellow);

  --checkbox-color: var(--light4);
  --checkbox-color-hover: var(--light4);
  --checkbox-border-color: var(--light4);
  --checkbox-border-color-hover: var(--light4);
  --checklist-done-color: rgba(var(--dark2-x), 0.4);

  --table-header-background: rgba(var(--light3-x), 0.4);
  --table-header-background-hover: var(--light2);
  --table-row-even-background: rgba(var(--light1-x), 0.2);
  --table-row-odd-background: rgba(var(--light1-x), 0.7);
  --table-row-background-hover: var(--light2);

  --text-selection: rgba(var(--neutral-red-x), 0.6);
  --flashing-background: rgba(var(--neutral-red-x), 0.3);

  --code-normal: var(--neutral-blue);
  --code-background: var(--light1);

  --mermaid-note: var(--neutral-blue);
  --mermaid-actor: var(--light3);
  --mermaid-loopline: var(--faded-blue);

  --icon-color-hover: var(--neutral-red);
  --icon-color-focused: var(--neutral-blue);

  --nav-item-color-hover: var(--neutral-red);
  --nav-item-color-active: var(--faded-blue);
  --nav-file-tag: rgba(var(--faded-blue-x), 0.9);

  --graph-line: var(--light3);
  --graph-node: var(--gray);
  --graph-node-tag: var(--faded-red);
  --graph-node-attachment: var(--neutral-green);

  --calendar-hover: var(--neutral-red);
  --calendar-background-hover: var(--light1);
  --calendar-week: var(--neutral-red);
  --calendar-today: var(--neutral-red);

  --dataview-key: var(--text-faint);
  --dataview-key-background: rgba(var(--faded-red-x), 0.3);
  --dataview-value: var(--text-faint);
  --dataview-value-background: rgba(var(--neutral-green-x), 0.2);

  --tab-text-color-focused-active: var(--neutral-yellow);
  --tab-text-color-focused-active-current: var(--neutral-red);
}



table {
  border: 1px solid var(--background-secondary) !important;
  border-collapse: collapse;
}

thead {
  border-bottom: 2px solid var(--background-modifier-border) !important;
}

th {
  font-weight: 600 !important;
  border: 1px solid var(--background-secondary) !important;
}

td {
  border-left: 1px solid var(--background-secondary) !important;
  border-right: 1px solid var(--background-secondary) !important;
  border-bottom: 1px solid var(--background-secondary) !important;
}

.markdown-rendered tbody tr:nth-child(even) {
  background-color: var(--table-row-even-background) !important;
}

.markdown-rendered tbody tr:nth-child(odd) {
  background-color: var(--table-row-odd-background) !important;
}

.markdown-rendered tbody tr:nth-child(even):hover,
.markdown-rendered tbody tr:nth-child(odd):hover
{
  background-color: var(--table-row-background-hover) !important;
}

.markdown-rendered mark {
  background-color: var(--text-highlight-bg) !important;
  color: var(--text-highlight-fg) !important;
}

.markdown-rendered mark a {
  color: var(--red) !important;
  font-weight: 600;
}

.search-result-file-matched-text {
  color: var(--text-highlight-fg) !important;
}

.cm-hashtag-begin:hover,
.cm-hashtag-end:hover
{
  color: var(--text-accent);
  /* background-color: var(--tag-background-hover); */
  text-decoration: underline;
}

input[type=checkbox] {
  border: 1px solid var(--checkbox-color);
}

input[type=checkbox]:checked {
  background-color: var(--checkbox-color);
  box-shadow: inset 0 0 0 2px var(--background-primary);
}

input[type=checkbox]:checked:after {
  display: none;
}

```

## Reference

- [PKMer_Quickadd 脚本 - 控制自定义 CSS- 设置二维码字体]( https://pkmer.cn/show/20240131162612 )

