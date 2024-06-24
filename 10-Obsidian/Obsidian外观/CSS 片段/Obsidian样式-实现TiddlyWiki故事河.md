---
uid: 20230904215512
title: Obsidian 样式：实现 TiddlyWiki 故事河
tags: [Obsidian, css, 移动端支持]
description: 通过 CSS 实现侧边栏悬浮、TiddlyWiki 故事河、自定义题图和题图图标
author: 阿菜
type: other
draft: false
editable: false
modified: 20231019231652
---

# Obsidian 样式：实现 TiddlyWiki 故事河

![Pasted image 20231012052909](https://cdn.pkmer.cn/images/202310120917462.png!pkmer)

-   侧边栏悬浮
-   TiddlyWiki 故事河布局
-   自定义题图和题图图标

# 实现方式

先上 [下载链接](https://github.com/KuiyueRO/Obsidian-Miner)，也可以从下方正文中直接复制。

## 仿 TiddlyWiki 故事河布局

一直以来都想在 Ob 中实现的 [[TiddyWiki]] 故事河布局，另外，这个片段也支持手机和平板，同样具有动态高度。**缺点**是不能更改排序顺序，只能依照打开顺序排序。

> 可以试着配合 Obsidian 的打字机插件，用起来还可以。: )

![Pasted image 20231012052945](https://cdn.pkmer.cn/images/202310120919016.png!pkmer)

### 代码

```CSS
/*
Author: KuiyueRO
URL: https://github.com/KuiyueRO/Obsidian-Miner
*/

/*制作一个瀑布流的CSS*/
body{
    --tiddlyradius: 0.5em;
}

/*让隐藏的标签页分列显示出来*/
div.app-container>.horizontal-main-container>.workspace>.workspace-split.mod-vertical.mod-root>.workspace-tabs.mod-top>.workspace-tab-container {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    overflow: scroll;
    overflow-y: 0;
    overflow-wrap: break-word;
    height:auto;
    contain:layout inline-size;
}

div.app-container>.horizontal-main-container>.workspace>.workspace-split.mod-vertical.mod-root>.workspace-tabs.mod-top>.workspace-tab-container>.workspace-leaf {
    display: flex !important;
    position: unset;
    height: unset;
    overflow: unset;
    contain: unset !important;
    border: solid 2px rgba(46, 46, 46, 0.179);
    border-radius: var(--tiddlyradius);
    margin-bottom: 10px;
    margin-top: 10px;
    margin-left: 10px;
    margin-right: 10px;
    box-shadow: 0px 0px 5px 2px rgba(136, 136, 136, 0.1);
    flex-direction: column;
}

.markdown-preview-sizer.markdown-preview-section,.cm-content.cm-lineWrapping{
    padding-bottom: 1em !important;
}

.markdown-source-view.mod-cm6 {
    height: auto;
    display: unset;
    flex-direction: column;
    overflow-y: visible;
}

div.app-container>.horizontal-main-container>.workspace>.workspace-split.mod-vertical.mod-root>.workspace-tabs.mod-top>.workspace-tab-container>.workspace-leaf>.workspace-leaf-content {
    display: flex ;
    height: auto ;
    border-radius: var(--tiddlyradius);
    border-radius: var(--tiddlyradius);
}

div.app-container>.horizontal-main-container>.workspace>.workspace-split.mod-vertical.mod-root>.workspace-tabs.mod-top>.workspace-tab-container>.workspace-leaf>.workspace-leaf-content[data-type$="empty"] {
    display: flex ;
    height: 45em ;
}

div.app-container>.horizontal-main-container>.workspace>.workspace-split.mod-vertical.mod-root>.workspace-tabs.mod-top>.workspace-tab-container>.workspace-leaf>.workspace-leaf-content[data-type$="canvas"] {
    display: flex ;
    height: 90vh ;
}

div.app-container>.horizontal-main-container>.workspace>.workspace-split.mod-vertical.mod-root>.workspace-tabs.mod-top>.workspace-tab-container>.workspace-leaf>.workspace-leaf-content[data-type$="pdf"] {
    display: flex ;
    height: 90vh ;
}

div.app-container>.horizontal-main-container>.workspace>.workspace-split.mod-vertical.mod-root>.workspace-tabs.mod-top>.workspace-tab-container>.workspace-leaf>.workspace-leaf-content[data-type$="excalidraw"] {
    display: flex ;
    height: 90vh ;
}
```

## 悬浮侧边栏

1. 目前只支持左侧边栏。
2. 新增两个小改进。添加了一个小把手；可以自定义宽度了。
   ![Pasted image 20231012051826](https://cdn.pkmer.cn/images/202310120919188.png!pkmer)

### 代码

```CSS
.workspace-split.mod-horizontal.mod-left-split {
    position: fixed;
    display: flex;
    width: 283px;
    height: 85%;
    z-index: var(--layer-popover);
    margin: 0;
    align-self: center;
    background-color: var(--background-primary);
    transform: translateX(-100%) translateZ(0px);
    transition: transform .5s;
    transition-delay: 1s;
}

.workspace-tabs.mod-top.mod-top-left-space {
    border-top: solid 3px var(--divider-color);
    border-right: solid 3px var(--divider-color);
    border-bottom: solid 3px var(--divider-color);
    border-bottom-right-radius: var(--modal-radius);
    border-top-right-radius: var(--modal-radius);
    box-shadow: var(--shadow-s);
}

.workspace-split.mod-left-split>.workspace-leaf-resize-handle {
    border-right-style: unset;
    border-right-width: unset;
}

.workspace-tab-header-container::before:hover {
    overflow: visible;
    height: 85%;
    transform: translateX(0px) translateZ(0px);
    transition: transform .5s;
}

.workspace-tab-header-container::before:hover {
    overflow: visible;
    height: 85%;
    transform: translateX(0px) translateZ(0px);
    transition: transform .5s;
}

.workspace-tab-header-container-inner {
    overflow: auto;
    height: 85%;
    transform: translateX(0px) translateZ(0px);
    transition: transform .5s;
}

.workspace-split.mod-horizontal.mod-left-split:hover {
    overflow: visible;
    height: 85%;
    transform: translateX(0px) translateZ(0px);
    transition: transform .5s;
}

.workspace-split.mod-horizontal.mod-left-split:focus-within {
    overflow: visible;
    height: 85%;
    transform: translateX(0px) translateZ(0px);
    transition: transform .5s;
}

body>div.app-container>div.horizontal-main-container>div>div.workspace-split.mod-horizontal.mod-left-split>div.workspace-tabs.mod-top.mod-top-left-space>div.workspace-tab-header-container>div.workspace-tab-header-container-inner {
    transform: translateX(0px) translateZ(0px);
    transition: transform .5s;
}

.workspace-split.mod-horizontal.mod-left-split::before {
    content: "";
    text-align: end !important;
    background-color: var(--divider-color);
    position: absolute;
    display: flex;
    width: 10px;
    height: 120px;
    top: calc(50% - 60px);
    right: -10px;
    z-index: var(--layer-popover);
    border-bottom-right-radius: var(--input-radius);
    border-top-right-radius: var(--input-radius);
    box-shadow: var(--shadow-s);
}

.workspace-split.mod-horizontal.mod-left-split::after {
    content: "";
    text-align: end !important;
    background-color: var(--color-base-50);
    position: absolute;
    display: flex;
    width: 5px;
    height: 90px;
    top: calc(50% - 45px);
    right: -8px;
    z-index: var(--layer-popover);
    border-radius: var(--input-radius);
}

body>div.app-container>div.horizontal-main-container>div>div.workspace-split.mod-horizontal.mod-left-split>div.workspace-tabs.mod-top.mod-top-left-space>div.workspace-tab-header-container {
    flex-direction: column;
    align-items: center;
}
```

## 横幅和图标

![Pasted image 20231012052909](https://cdn.pkmer.cn/images/202310120917462.png!pkmer)

> 共两种方法，一个是旧的，一个是新的 callout。

### 旧的方法

1. 在 cssclasses 中填入 `bannerimg`
2. 在页面中插入题头图，需要使用 wiki 链接
    1. 示例：`![[要插入的图片.png#bannerimg]]`，重点是后方的 `#bannerimg`。
3. 插入题头图标，同样需要使用 wiki 链接
    1. 示例：`![[要插入的图片.png#bannericonl]]`，重点是后方的 `#bannericonl`
    2. 一共预设了四种样式
        1. `bannericonl`：图标**左对齐**
        2. `bannericonlc`：图标**左对齐**且呈现**圆形**
        3. `bannericonc`：图标**居中对齐**
        4. `bannericoncc`：图标**居中对齐**且呈现**圆形**
4. 标题居中对齐，如果使用题头图标居中对齐，那么也一定会想让标题居中对齐。只需要在 `cssclasses` 中输入 `banner-title-center` 即可使标题居中对齐。
   ![Pasted image 20230905003048](https://cdn.pkmer.cn/images/202310120920664.png!pkmer)
5. 这个片段对以下插件做了优化
    1. Breadcrumbs，使 trail 视图下移，不会显示重叠。
    2. Strange New World，用于题图和题头图标的图片不显示小按钮。

### 新增的 Callout

-   CallOut 支持 Emoji 作为图标了。
    -   Emoji 有一个左对齐，一个居中对齐。
    -   这里沿用了旧方法的四个名称，将其填入 callout 即可
        1. `> > [!bannericonl] `：图标**左对齐**
        2. `> > [!bannericonlc]`：图标**左对齐**且呈现**圆形**
        3. `> > [!bannericonc]`：图标**居中对齐**
        4. `> > [!bannericoncc]`：图标**居中对齐**且呈现**圆形**
-   新增两个描述样式。
    -   依然是一个左对齐，一个居中对齐。
        -   `> > [!bannerdescription]` **左对齐**
        -   `> > [!bannerdescriptionc]` **居中对齐**

```markdown
> [!banner]
>
> > [!bannerimage]
> > 这里放横幅
>
> > [!bannericonc]
> > 这里放图标
>
> > [!bannerdescription]
> > 这是一段描述！  
> > 这是一段长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长的描述！
```

#### 如何使用

1. 在**属性视图**中的 `cssclasses` 里填入
    1. `bannerimg`，必填的
    2. `description`，激活描述的，选用。
    3. `banner-title-center`，标题居中，选用

### 代码

```CSS
body {
    --bannericon-wh: 5em;
    --bannericon-top: 5.5em;
    --bannerimg-height: 11em;
    --bannericon-circle-radius: 5em;
    --bannericon-square-radius: 0.75em;
    --bannericon-border-width: 0.175em;
}

.markdown-reading-view .bannerimg {
    padding-bottom: 2em !important;
    padding-top: var(--bannerimg-height) !important;
}

.canvas-node-content.markdown-embed .bannerimg {
    padding-top: 11em !important;
}

span[src$="bannerimg"] img {
    top: 0;
    left: 0;
    z-index: 9;
    width: 100%;
    max-width: 100%;
    margin-top: 0px;
    max-height: 10em;
    min-height: 10em;
    object-fit: cover;
    border-radius: 0px;
    position: absolute;
}

span[src$="bannericonl"] img,
span[src$="bannericonlc"] img,
span[src$="bannericonc"] img,
span[src$="bannericoncc"] img {
    top: var(--bannericon-top);
    width: var(--bannericon-wh) !important;
    height: var(--bannericon-wh) !important;
    z-index: 9;
    object-fit: cover;
    position: absolute;
    box-shadow: var(--shadow-l);
    background-color: var(--background-secondary-alt);
    border: var(--bannericon-border-width) solid var(--background-secondary-alt);
}

span[src$="bannericonl"] img {
    left: var(--h1-style);
    border-radius: var(--bannericon-square-radius) !important;
}

span[src$="bannericonlc"] img {
    left: initial;
    border-radius: var(--bannericon-circle-radius) !important;
}

span[src$="bannericonc"] img {
    left: calc(50% - 2.5em);
    border-radius: var(--bannericon-square-radius) !important;
}

span[src$="bannericoncc"] img {
    left: calc(50% - 2.5em);
    border-radius: var(--bannericon-circle-radius) !important;
}

/*=======Title Align Center=======*/
.banner-title-center .inline-title {
    text-align: center !important;
}

/*=======CallOut Support=======*/
/*Banner Image*/
.callout[data-callout="bannerimage"] .callout-content {
    top: 0;
    left: 0;
    height: 10em;
    display: flex;
    padding: unset;
    overflow: clip;
    position: absolute;
    align-items: center;
    object-fit: inherit !important;
}

.callout[data-callout="bannerimage"] .callout-content>p,
.callout[data-callout="bannerimage"] .callout-content>p>span {
    margin: unset;
    object-fit: inherit;
}

.callout[data-callout="bannerimage"] .callout-content>p>span>img {
    margin: unset;
    width: 1000000em !important;
    height: 10em;
    object-fit: cover;
}

/*Description left and Description center*/
.description .markdown-preview-sizer.markdown-preview-section>.mod-header>.inline-title {
    margin-bottom: calc(5 * var(--inline-title-margin-bottom));
}

.markdown-reading-view .callout[data-callout="bannerdescription"] .callout-content {
    top: 13.55em;
    overflow: hidden;
    position: absolute;
    left: var(--h1-style);
    border-left: var(--h1-style) solid;
}

.canvas .callout[data-callout="bannerdescription"] .callout-content {
    top: 13.55em;
    overflow: hidden;
    /*position: absolute;*/
    left: var(--h1-style);
    border-left: var(--h1-style) solid;
}

.canvas .callout[data-callout="bannerdescriptionc"] .callout-content {
    left: 0;
    top: 13.55em;
    overflow: hidden;
    /*position: absolute;*/
    border-left: var(--h1-style) solid;
}

.callout[data-callout="bannerdescription"] .callout-content>p {
    padding-top: 8px;
    font-size: var(--size-4-3);
    color: var(--color-base-60);
    height: calc(var(--size-4-4) * 2);
    text-overflow: ellipsis !important;
    border-top: 2px solid var(--color-base-100);
    margin-right: calc(var(--file-margins) * 2);
    border-image: linear-gradient(to right,
            var(--color-base-100),
            var(--color-base-00)) 1;
}

.markdown-reading-view .callout[data-callout="bannerdescriptionc"] .callout-content>p,
.canvas .callout[data-callout="bannerdescriptionc"] .callout-content>p {
    padding-top: 8px;
    text-align: center;
    font-size: var(--size-4-3);
    color: var(--color-base-60);
    height: calc(var(--size-4-4) * 2);
    text-overflow: ellipsis !important;
    border-top: 2px solid var(--color-base-100);
    border-image: linear-gradient(to right,
            var(--color-base-00),
            var(--color-base-100),
            var(--color-base-00)) 1;
}

.markdown-reading-view .callout[data-callout="bannerdescriptionc"] .callout-content>p {
    width: 100% !important;
}

.markdown-reading-view .callout[data-callout="bannerdescriptionc"] .callout-content {
    position: absolute;
    left: 0;
    top: 13.55em;
    padding-left: var(--file-margins) !important;
    padding-right: var(--file-margins) !important;
    overflow: hidden;
}



/*Left square Icon*/
.callout[data-callout="bannericonl"] .callout-content {
    top: 5.5em;
    overflow: visible;
    position: absolute;
    left: var(--h1-style);
}

.callout[data-callout="bannericonl"] .callout-content>p {
    display: flex;
    font-size: 5em;
    aspect-ratio: 1;
    position: relative;
    align-items: center;

    justify-content: center;
    border: unset !important;
    width: calc(var(--bannericon-wh) / 5);
    height: calc(var(--bannericon-wh) / 5);
    margin: unset;
    object-fit: inherit;
}

.callout[data-callout="bannericonl"] .callout-content>p>span>img {
    display: flex;
    aspect-ratio: 1;
    box-shadow: var(--shadow-l);
    font-size: var(--font-text-size);
    overflow: hidden;
    object-fit: cover;
    background-color: var(--background-secondary-alt);
    border: var(--bannericon-border-width) solid var(--background-secondary-alt);
    left: var(--h1-style);
    border-radius: var(--bannericon-square-radius) !important;
}

/* Left Circle Icon*/
.callout[data-callout="bannericonlc"] .callout-content {
    top: 5.5em;
    overflow: visible;
    position: absolute;
    left: var(--h1-style);
}

.callout[data-callout="bannericonlc"] .callout-content>p {
    display: flex;
    font-size: 5em;
    aspect-ratio: 1;
    position: relative;
    align-items: center;

    justify-content: center;
    border: unset !important;
    width: calc(var(--bannericon-wh) / 5);
    height: calc(var(--bannericon-wh) / 5);
    margin: unset;
    object-fit: inherit;
}

.callout[data-callout="bannericonlc"] .callout-content>p>span>img {
    display: flex;
    aspect-ratio: 1;
    box-shadow: var(--shadow-l);
    font-size: var(--font-text-size);
    overflow: hidden;
    object-fit: cover;
    background-color: var(--background-secondary-alt);
    border: var(--bannericon-border-width) solid var(--background-secondary-alt);
    border-radius: var(--bannericon-circle-radius) !important;
    left: var(--h1-style);
}

/*Center square Icon*/
.callout[data-callout="bannericonc"] .callout-content {
    top: 5.5em;
    display: flex;
    overflow: visible;
    position: absolute;
    left: calc(50% - 2.5em);
}

.callout[data-callout="bannericonc"] .callout-content>p {
    display: flex;
    font-size: 5em;
    aspect-ratio: 1;
    position: relative;
    align-items: center;

    justify-content: center;
    border: unset !important;
    width: calc(var(--bannericon-wh) / 5);
    height: calc(var(--bannericon-wh) / 5);
    margin: unset;
    object-fit: inherit;
}

.callout[data-callout="bannericonc"] .callout-content>p>span>img {
    display: flex;
    aspect-ratio: 1;
    box-shadow: var(--shadow-l);
    font-size: var(--font-text-size);
    overflow: hidden;
    object-fit: cover;
    background-color: var(--background-secondary-alt);
    border: var(--bannericon-border-width) solid var(--background-secondary-alt);
    left: var(--h1-style);
    border-radius: var(--bannericon-square-radius) !important;
}

/*Center Circle Icon*/
.callout[data-callout="bannericoncc"] .callout-content {
    top: 5.5em;
    overflow: visible;
    position: absolute;
    left: calc(50% - 40px);
}

.callout[data-callout="bannericoncc"] .callout-content>p {
    display: flex;
    font-size: 5em;
    aspect-ratio: 1;
    position: relative;
    align-items: center;

    justify-content: center;
    border: unset !important;
    width: calc(var(--bannericon-wh) / 5);
    height: calc(var(--bannericon-wh) / 5);
    margin: unset;
    object-fit: inherit;
}

.callout[data-callout="bannericoncc"] .callout-content>p>span>img {
    display: flex;
    aspect-ratio: 1;
    box-shadow: var(--shadow-l);
    font-size: var(--font-text-size);
    overflow: hidden;
    object-fit: cover;
    background-color: var(--background-secondary-alt);
    border: var(--bannericon-border-width) solid var(--background-secondary-alt);
    border-radius: var(--bannericon-circle-radius) !important;
    left: var(--h1-style);
}

/*Hide Default CallOut Style*/
.callout[data-callout="banner"] .callout-title,
.callout[data-callout="banner"] .callout-icon,
.callout[data-callout="banner"] .callout-icon::after,
.callout[data-callout="banner"] .callout-fold,
.callout[data-callout="bannerimage"] .callout-title,
.callout[data-callout="bannerimage"] .callout-icon,
.callout[data-callout="bannerimage"] .callout-icon::after,
.callout[data-callout="bannerimage"] .callout-fold,
.callout[data-callout="bannerdescription"] .callout-title,
.callout[data-callout="bannerdescription"] .callout-icon,
.callout[data-callout="bannerdescription"] .callout-icon::after,
.callout[data-callout="bannerdescription"] .callout-fold,
.callout[data-callout="bannerdescriptionc"] .callout-title,
.callout[data-callout="bannerdescriptionc"] .callout-icon,
.callout[data-callout="bannerdescriptionc"] .callout-icon::after,
.callout[data-callout="bannerdescriptionc"] .callout-fold,
.callout[data-callout="bannericonl"] .callout-title,
.callout[data-callout="bannericonl"] .callout-icon,
.callout[data-callout="bannericonl"] .callout-icon::after,
.callout[data-callout="bannericonl"] .callout-fold,
.callout[data-callout="bannericonlc"] .callout-title,
.callout[data-callout="bannericonlc"] .callout-icon,
.callout[data-callout="bannericonlc"] .callout-icon::after,
.callout[data-callout="bannericonlc"] .callout-fold,
.callout[data-callout="bannericonc"] .callout-title,
.callout[data-callout="bannericonc"] .callout-icon,
.callout[data-callout="bannericonc"] .callout-icon::after,
.callout[data-callout="bannericonc"] .callout-fold,
.callout[data-callout="bannericoncc"] .callout-title,
.callout[data-callout="bannericoncc"] .callout-icon,
.callout[data-callout="bannericoncc"] .callout-icon::after,
.callout[data-callout="bannericoncc"] .callout-fold {
    display: none;
}

.callout[data-callout="bannericonl"],
.callout[data-callout="bannericonlc"],
.callout[data-callout="bannericonc"],
.callout[data-callout="bannericoncc"],
.callout[data-callout="banner"],
.callout[data-callout="bannerdescription"],
.callout[data-callout="bannerdescriptionc"],
.callout[data-callout="bannerimage"] {
    width: 100%;
    margin: unset;
    padding: unset;
    border-style: unset;
    border-color: unset;
    border-width: unset;
    border-radius: unset;
    mix-blend-mode: unset;
    background-color: unset;
    overflow: visible !important;
}

.callout[data-callout="bannerimage"] {
    display: flex;
    align-items: center;
    width: auto !important;
    object-fit: cover !important;
}

.callout[data-callout="bannerdescription"],
.callout[data-callout="bannerdescriptionc"] {
    top: 20em;
}

/*=======Plugin Support=======*/
/*Strange New World*/
.snw-reference[data-snw-reallink$="bannerimg"],
.snw-reference[data-snw-reallink*="bannericon"] {
    display: none !important;
}

/*Breadcrumbs*/
.bannerimg .BC-trail,
.bannericon .BC-trail {
    padding: 5px;
    border-radius: 5px;
    margin-top: 1.5em !important;
    border: 1px solid var(--background-modifier-border);
}

.bannerimg .BC-trail .markdown-reading-view>.markdown-preview-view.is-readable-line-width,
.markdown-source-view.is-readable-line-width .cm-sizer {
    padding-top: unset;
}

/*Canvas*/
.canvas-node-content.markdown-embed>.markdown-embed-content>.markdown-preview-view:has([alt*="bannerimg"])::before {
    content: unset !important;
}

.canvas .description .markdown-preview-sizer.markdown-preview-section>.mod-header>.inline-title {
    margin-bottom: unset;
}

.canvas-node-content.markdown-embed>.markdown-embed-content>.markdown-preview-view::before,
.canvas-node-content.markdown-embed>.markdown-embed-content>.markdown-preview-view::after {
    content: none;
    display: block;
}

.canvas .callout[data-callout="bannerdescriptionc"] .callout-content>p {
    margin-left: calc(var(--file-margins));
    margin-right: calc(var(--file-margins));
}
```

# 更多信息

-   主题：[minimal](https://github.com/kepano/obsidian-minimal)
    -   主题指南：[minimal 指南](https://minimal.guide/)
-   启用 CSS 片段
    -   TiddlyWiki_Like
    -   MinerBanner
    -   Miner_Float_Sidebar
    -   一个透明片段
-   启用插件
    -   [[obsidian42-strange-new-worlds]]
        -   用于在双链后方显示引用计数与卡片窗口
    -   [Collapse Node](https://github.com/Quorafind/Obsidian-Collapse-Node)
        -   允许在 Obsidian 白板中折叠卡片

## FAQ

-   Q：在笔记卡片中显示为卡片分列的是什么功能？
    ![Pasted image 20230904235808](https://cdn.pkmer.cn/images/202310120920312.png!pkmer)
    -   A：minimal 主题的列表转卡片。在 cssclasses 中输入 `list-cards` 即可激活，详细设置请看 [minimal 文档/卡片](https://minimal.guide/cards)
