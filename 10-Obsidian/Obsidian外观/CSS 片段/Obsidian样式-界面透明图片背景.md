---
uid: 20241224232529
title: Obsidian 样式 - 界面透明图片背景
tags: [CSS美化, 界面美化]
description: 给 Obsidian 界面添加透明图片背景，可以设置深浅模式不同图片。
author: 熊猫别熬夜
type: other
draft: false
editable: false
modified: 20241224233637
---

# Obsidian 样式 - 界面透明图片背景

给 Obsidian 界面添加透明图片背景，可以设置深浅模式不同图片。

| 深色模式                                                                                        | 浅色模式                                                                                        |
| ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| ![241224_Obsidian样式：界面透明图片背景.md](https://cdn.pkmer.cn/images/202412242326707.png!pkmer)<br> | ![241224_Obsidian样式：界面透明图片背景.md](https://cdn.pkmer.cn/images/202412242326385.png!pkmer)<br> |

可用 Style setting 设置的选项：

![241224_Obsidian样式：界面透明图片背景.md](https://cdn.pkmer.cn/images/202412242325703.png!pkmer)

## CSS 片段

```css
/* @settings

name: Background Image Settings | 背景图片设置
id: background-image-settings
settings:
    - 
        id: light-background-image
        title: Light Theme Background Image URL
        title.zh: 浅色主题背景图片 URL
        type: variable-text
        default: url(https://haowallpaper.com/link/common/file/previewFileImg/16008179683085696)

    - 
        id: dark-background-image
        title: Dark Theme Background Image URL
        title.zh: 深色主题背景图片 URL
        type: variable-text
        default: url(https://haowallpaper.com/link/common/file/previewFileImg/79dc761210915a5728604c762b6fc0bd)
    - 
        id: background-opacity
        title: Background Image Opacity
        title.zh: 背景图片不透明度
        type: variable-number-slider
        default: 0.2
        min: 0
        max: 1
        step: 0.01
        format: 

    - 
        id: background-image-blur
        title: Blur Amount
        title.zh: 模糊程度
        type: variable-number-slider
        default: 0
        min: 0
        max: 20
        step: 0.1
        format: px

    - 
        id: background-image-contrast
        title: Contrast
        title.zh: 对比度
        type: variable-number-slider
        default: 1
        min: 0
        max: 3
        step: 0.1
        format:

    - 
        id: background-image-saturate
        title: Saturate
        title.zh: 饱和度
        type: variable-number-slider
        default: 1
        min: 0
        max: 3
        step: 0.1
        format:

    - 
        id: background-image-brightness
        title: Brightness
        title.zh: 亮度
        type: variable-number-slider
        default: 1
        min: 0
        max: 3
        step: 0.1
        format:

*/
body {
  --light-background-image: url(https://haowallpaper.com/link/common/file/previewFileImg/16008179683085696);
  --dark-background-image: url(https://haowallpaper.com/link/common/file/previewFileImg/79dc761210915a5728604c762b6fc0bd);
  --background-opacity: 0.2;
  --background-image-blur: 0;
  --background-image-contrast: 1;
  --background-image-saturate: 1;
  --background-image-brightness: 1;
}

/* CSS Styling to apply these settings */
.theme-light {
  --background-image: var(--light-background-image);
}

.theme-dark {
  --background-image: var(--dark-background-image);
}

body::before {
  content: "";
  position: fixed;
  background-image: var(--background-image);
  background-position: center center;
  background-attachment: fixed;
  background-size: cover;
  background-repeat: no-repeat;
  height: 100%;
  width: 100%;
  filter: blur(var(--background-image-blur)) contrast(var(--background-image-contrast)) saturate(var(--background-image-saturate)) brightness(var(--background-image-brightness));
  opacity: var(--background-opacity);
  z-index: var(--layer-menu);
  pointer-events: none;
  transition: none;
}
```

## Reference

- [Layers - Developer Documentation (obsidian.md)](https://docs.obsidian.md/Reference/CSS+variables/Foundations/Layers)
- [[Obsidian样式-缩减栏宽模式下美化笔记内部背景]]