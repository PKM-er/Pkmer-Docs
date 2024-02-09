---
uid: 20240128023446
title: Obsidian 样式 -hover 出现图片描述 (css 实现)
tags: [obsidian, image]
description: 
author: Huajin
type: other
draft: false
editable: false
modified: 20240129125147
---

# Obsidian 样式 -hover 出现图片描述 (css 实现)

## 效果

![Image description when hover.gif](https://cdn.pkmer.cn/images/Image%20description%20when%20hover.gif!pkmer)

## 语法

没有特殊语法，把 obsidian 显示的是图片的描述

```
![[image 01.jpg|Lorem, ipsum dolor sit amet consectetur, adipisicing elit.]]
```

## 代码

```css
/*
author: sailKite
source: https://discord.com/channels/686053708261228577/694233507500916796/1169731141813674075
*/

.internal-embed.image-embed {
  position: relative;

  &:hover::after {
    content: attr(alt);
    display: block;
    position: absolute;
    background-color: var(--background-primary);
    border: 1px solid var(--color-base-30);
    border-radius: var(--size-2-2);
    padding: 0.5em;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}
```