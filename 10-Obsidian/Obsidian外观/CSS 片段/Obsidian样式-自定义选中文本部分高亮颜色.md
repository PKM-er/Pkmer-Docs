---
uid: 20230608173139
title: Obsidian 样式：自定义选中文本部分高亮颜色
tags: [Obsidian, css, 样式]
description: 自定义选中文本部分高亮颜色
author: darkluna999
type: other
draft: false
editable: false
modified: 20230905153319
---

# Obsidian 样式：自定义选中文本部分高亮颜色

## 使用方式

直接激活

## 效果

![](https://cdn.pkmer.cn/images/Pasted%20image%2020230608175212.png!pkmer)

## CSS 代码段

```CSS
::selection {
  color: white !important;
  background: darkcyan !important;
}

```

### 代码解释

```CSS
::selection {
  color: white !important;
  background: darkcyan !important;
}
```

- 这里使用了一个伪元素选择器 `::selection` 是指光标选中的高亮部分
- `color` 文字颜色
- `background` 背景色
- `!important` 规则
    - 实际上他与本行代码的作用无关，但他会增加此行属性的渲染权重
    - CSS 层叠在渲染时，每个块描述越精准则权重越高，属性会向下进行覆盖，类似 PhotoShop 的图层效果，而 `!important` 则是在最终渲染时增加对应属性的权重
