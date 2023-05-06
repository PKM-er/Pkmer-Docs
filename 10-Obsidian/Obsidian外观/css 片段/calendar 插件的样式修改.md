---
uid: 20230504213101
title: Calendar 插件的样式修改
description: 
author: cuman
type: other
draft: false
editable: false
modified: 20230506140806
---

# Calendar 插件的样式修改

## 概述

- 根据笔记 yaml 区域的 tag 内容，在日历展示不同的图标，比如把 tags 中的 emoji 符号展示在日历中。
- tags 值包含 flagged 显示星标
- 周末背景色加深

## 实现效果

 ![image.png](https://cdn.pkmer.cn/images/202305042319386.png)

## 实现代码

```css

/* 当在日记的frontmatter区域添加标签的中如果有表情符号，会显示到日历中
比如
tags: 🎂 tag1 
*/
#calendar-container [data-emoji-tag]::after {
  content: attr(data-emoji-tag);
  position: absolute;
  top: -4px;
  right: 4px;
  height: 8px;
  width: 8px;
}

```

```css
/* 当日记frontmatter区域中的标签中包含 flagged 标签时，日历中会显示星标*/

#calendar-container [data-tags~="flagged"] {
  color: var(--text-error)
}

#calendar-container .today[data-tags~="flagged"] {
  font-weight: bold !important
}

#calendar-container [data-tags~="flagged"]::after {
  content: url('data:image/svg+xml; utf8, <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 55.867 55.867" style="enable-background:new 0 0 55.867 55.867;" xml:space="preserve"> <path d="M55.818,21.578c-0.118-0.362-0.431-0.626-0.808-0.681L36.92,18.268L28.83,1.876c-0.168-0.342-0.516-0.558-0.896-0.558 s-0.729,0.216-0.896,0.558l-8.091,16.393l-18.09,2.629c-0.377,0.055-0.689,0.318-0.808,0.681c-0.117,0.361-0.02,0.759,0.253,1.024 l13.091,12.76l-3.091,18.018c-0.064,0.375,0.09,0.754,0.397,0.978c0.309,0.226,0.718,0.255,1.053,0.076l16.182-8.506l16.18,8.506 c0.146,0.077,0.307,0.115,0.466,0.115c0.207,0,0.413-0.064,0.588-0.191c0.308-0.224,0.462-0.603,0.397-0.978l-3.09-18.017 l13.091-12.761C55.838,22.336,55.936,21.939,55.818,21.578z" fill="%23A9B852" stroke="%23aeaeae"/></svg>');
  position: absolute;
  top: -4px;
  right: 4px;
  height: 8px;
  width: 8px;
}


```

```css
/*周末背景色加深 */
 #calendar-container {
  --color-background-weekend: hsla(var(--interactive-accent-hsl), 0.1);
}
```