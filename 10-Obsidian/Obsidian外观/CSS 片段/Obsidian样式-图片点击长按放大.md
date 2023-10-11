---
uid: 20230912181236
title: Obsidian 样式：点击图片长按放大
tags: [Obsidian, Prism, CSS, 图片放大]
description: Obsidian 样式：点击图片长按放大
author: 宝藏彬少
type: other
draft: false
editable: false
modified: 20230920233055
---

# Obsidian 样式：点击图片长按放大

## 引言

可以在不使用插件的情况下，支持图片点击放大的效果

>[!Note] 提示
>- 本 CSS 是在 Prism 上进行使用的，不一定适配所有主题，若有需要可自行修改 CSS 以适配自身常用主题

1. 这个功能用「鼠标点击」来进行使用场景的区分，并不绝对适配，但在常用设备上是没问题的
2. 功能是鼠标点击图片后，长按维持放大，松开即恢复原有格式，主要用于查看图片
3. 对白板以及 PDF 查看均做了设置，避免应用放大功能，但仍有待优化的地方
4. 设置里查看主题或者插件时点击左侧图片会应用放大，目前没有找到如何屏蔽
5. 希望有大佬能够对本功能进行进一步优化～
6. 有需要的话还是挺好用的哈～

![image.png](https://cdn.pkmer.cn/images/20230912181842.png!pkmer)

![image.png](https://cdn.pkmer.cn/images/20230912181858.png!pkmer)

## 实践

```css
@media (hover: hover) {
  .image-embed.is-loaded img,
  .markdown-preview-view .internal-embed:not(:has(> img)) img {
    line-height: 0;
    background-color: transparent;
  }

  img:not(.callout-content img):not(.thumbnailImage):not(
      img .community-item-screenshot
    ) {
    max-width: 100%;
    cursor: zoom-in;
  }

  body img:active:not(.callout-content img):not(.thumbnailImage) {
    background-color: var(--background-primary);
    padding: 10px;
    border: 0px;
  }

  img:not(.callout-content img):not(.thumbnailImage):active {
    aspect-ratio: unset;
    cursor: zoom-out;
    display: block;
    z-index: 200;
    position: fixed;
    max-height: calc(100% + 1px);
    max-width: 100%;
    height: calc(100% + 1px);
    width: 100%;
    object-fit: contain;
    margin: -0.5px auto 0;
    text-align: center;
    padding: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }

  img:not(.callout-content img):not(.thumbnailImage):active::after {
    background-color: var(--background-primary);
    opacity: 1;
    content: " ";
    height: calc(100% + 1px);
    width: 100%;
    position: fixed;
    left: 0;
    right: 1px;
    z-index: 0;
  }

  img:not(.callout-content img):not(.thumbnailImage):active img {
    aspect-ratio: unset;
    top: 50%;
    z-index: 99;
    transform: translateY(-50%);
    padding: 0;
    margin: 0 auto;
    width: calc(100% - 20px);
    max-height: 95vh;
    object-fit: contain;
    left: 0;
    right: 0;
    bottom: 0;
    position: absolute;
    opacity: 1;
    outline: unset;
    outline-offset: 0px;
    border-radius: 0;
  }
}

img.community-item-screenshot,
.canvas img {
  pointer-events: none;
}
```