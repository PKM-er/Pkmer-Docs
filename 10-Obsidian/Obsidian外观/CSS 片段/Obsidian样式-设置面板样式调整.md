---
uid: 20240427154409
title: Obsidian样式-设置面板样式调整
tags: [obsidian, css, 设置面板]
description: 突出显示当前选中的设置项
author: Huajin
type: other
draft: false
editable: false
modified: 20240506202131
---

# Obsidian 样式 - 设置面板样式调整

突出显示当前选中的设置项

![PixPin_2024-04-27_15-50-56.gif](https://cdn.pkmer.cn/images/PixPin_2024-04-27_15-50-56.gif!pkmer)

## CSS 代码

使用方法见：[[Obsidian的CSS代码片段]]

```css
body {
  --prompt-iselected-background: var(--color-base-10);
}

.prompt .prompt-results .suggestion-item {
  opacity: 0.5;
  transition: line-height 0.1s, opacity 0.1s;
  transition-timing-function: ease-in-out;
}

.prompt .prompt-results .suggestion-item:has(+ .is-selected),
.prompt .prompt-results .suggestion-item:has(+ .is-selected:hover),
.prompt
  .prompt-results
  .suggestion-item.is-selected
  + .suggestion-item:not(.is-selected),
.prompt
  .prompt-results
  .suggestion-item.is-selected:hover
  + .suggestion-item:not(.is-selected) {
  line-height: 155%;
  opacity: 0.7;
}

.prompt .prompt-results .suggestion-item.is-selected {
  background-color: var(--prompt-iselected-background);
  line-height: 180%;
  opacity: 1;
}
```