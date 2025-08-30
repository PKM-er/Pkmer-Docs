---
uid: 6952
title: 【Obsidian样式】自适应双栏属性区布局CSS
tags: [obsidian, css]
description: 【Obsidian样式】自适应双栏属性区布局CSS
author: Moy
type: other
draft: false
editable: false
modified: 20250830232648
forum_url: https://forum.pkmer.net/t/6310
---

# 【Obsidian样式】自适应双栏属性区布局CSS

> [!INFO] 本文档由 PKMer 论坛导入  
> - 作者: Moy
> - 原始链接: [【Obsidian样式】自适应双栏属性区布局CSS](https://forum.pkmer.net/t/6310)

---

# 自适应双栏属性区布局CSS

效果如图：
![250731_自适应双栏属性区布局CSS-img-250731_231730.webp](https://cdn.pkmer.cn/original/1X/9aed61cf07a6da1c81fafb2d70ac36487915d361.webp)

说明：
1. 使用 `grid` 网格布局，将属性区改为双栏显示
2. 宽度带有一定自适应，会取 `原尺寸的150%` 和 `窗口宽度的80%` 中的最小值，避免越界
3. 添加属性的按钮在下方居中位置，默认半透明，鼠标移上去后显示
4. 如果你使用 `.wide` 之类的全宽样式，那么属性区会自适应地变成3栏或4栏（使用 `@container` 特性实现）

页面全宽时的效果：
![250731_自适应双栏属性区布局CSS-img-250731_231938.webp](https://cdn.pkmer.cn/original/1X/1ad012ee59da2cd9b7b64d006adc5a24b8b18c50.webp)

（1200px 以上三栏，1600px 以上四栏）

CSS：
[【Moy】 Multi-Column Property.css](https://gist.github.com/Moyf/902c034aedde79628cd30a3da9c9e824)

或自行保存：
```css
/* ! Moy-属性区调整.css */
/* created: 2025-07-31 */
/* v1.0 */

/* ! 加宽 &双栏 */

/* scope 确保只影响中间区域 */
@scope (.workspace-split.mod-root .cm-sizer) {

/* 增加宽度 */
.metadata-container {
    width: min(150%, 80vw);
    margin-left: max(-25%, calc(50% - 40vw));
    /* width: min(150%, 2400px);
    margin-left: max(-25%, calc(50% - 1200px)); */

    container-name: metadata-container;
    container-type: inline-size;

}

/* 网格，分双栏 */
.metadata-properties {
    display: grid;
    grid-template-columns: repeat(2, 1fr);

    --metadata-property-gap: 6px;
    /* 空出小间距 */
    gap: var(--metadata-property-gap);
    padding: var(--metadata-property-gap);
}

@container metadata-container (min-width: 1200px) {
    .metadata-properties {
        grid-template-columns: repeat(3, 1fr);
    }
}

@container metadata-container (min-width: 1600px) {
    .metadata-properties {
        grid-template-columns: repeat(4, 1fr);
    }
}

/* 限制链接长度 */
.metadata-link {
    max-width: 100%;
}

/* 属性名称靠右 */
/* input.metadata-property-key-input {
    text-align: right;
    padding-right: 8px;
} */

.metadata-add-button.text-icon-button {
    /* justify-content: right;
    width: 100%; */
    opacity: 0.25;
    /* 图标元素本身 18px 宽*/
    margin-left: calc(50% - 25px);
    padding-left: 16px;
    padding-right: 16px;

    /* position: absolute;
    right: 0px; */

    transition: opacity 0.2s ease-in-out;

    &:hover {
        opacity: 1;
    }

    .text-button-label {
        display: none;
    }

}
}
```

> CSS 的应用方法参见：https://forum.pkmer.net/t/6311
