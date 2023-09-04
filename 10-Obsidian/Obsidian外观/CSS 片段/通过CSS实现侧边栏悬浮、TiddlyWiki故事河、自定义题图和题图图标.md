---
uid: 20230904215512
title: 通过 CSS 实现侧边栏悬浮、TiddlyWiki 故事河、自定义题图和题图图标
tags:
  - Obsidian
  - css
  - 移动端支持
description: 通过 CSS 实现侧边栏悬浮、TiddlyWiki 故事河、自定义题图和题图图标
author: 阿菜
type: other
draft: false
editable: false
modified: 20230905003436
---

# 通过 CSS 实现侧边栏悬浮、TiddlyWiki 故事河、自定义题图和题图图标

## 效果

![[GIF 2023-9-4 23-45-37.gif]]

# 实现方式

分为三个部分

- 悬浮侧边栏
- 仿 TiddlyWiki 故事河布局
- 自定义题图和题图图标

先上 [下载链接](https://github.com/KuiyueRO/Obsidian-Miner)，也可以从下方正文中直接复制。

## 仿 TiddlyWiki 故事河布局

一直以来都想在 Ob 中实现的 [TiddlyWiki](https://tiddlywiki.com/) 故事河布局，另外，这个片段也支持手机和平板，同样具有动态高度。==缺点==是不能更改排序顺序，只能依照打开顺序排序。

> 可以试着配合 Obsidian 的打字机插件，用起来蛮不错的。: )

![[Pasted image 20230905001220.png|400]]

![[Pasted image 20230905001513.png]]

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

有一点小 bug，不过不影响使用。

```CSS
.workspace-split.mod-horizontal.mod-left-split {
    position: fixed;
    display: flex;
    overflow:scroll;
    font-size: var(--font-ui-small);
    min-width: 283px;
    max-width: 283px;
    width: 283px;
    height:85%;
    z-index: var(--layer-popover);
    margin: 0;
    border: solid 2px var(--sidebarcolor);
    border-bottom-right-radius: 10px;
    border-top-right-radius: 10px;
    padding-left: var(--size-4-3);
    padding-top: var(--safe-area-inset-top);
    background-color: var(--background-primary);
    align-self:center;
    transform: translateX(-275px) translateZ(0px);
    transition: transform .5s;
}

.workspace-split.mod-horizontal.mod-left-split:hover{
    position: fixed;
    display: flex;
    overflow: visible;
    font-size: var(--font-ui-small);
    height:85%;
    z-index: var(--layer-popover);
    margin: 0;
    border: solid 2px var(--sidebarcolor);
    border-bottom-right-radius: 10px;
    border-top-right-radius: 10px;
    padding-left: var(--size-4-3);
    padding-top: var(--safe-area-inset-top);
    background-color: var(--background-primary);
    align-self:center;
    transform: translateX(0px) translateZ(0px);
    transition: transform .5s;
}
```

## 题头图和图标

使用方法

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
   ![[Pasted image 20230905003048.png]]
5. 这个片段对以下插件做了优化
	1. Breadcrumbs，使 trail 视图下移，不会显示重叠。
	2. Strange New World，用于题图和题头图标的图片不显示小按钮。

```CSS
body{
  --bannericon-wh: 5em;
  --bannericon-top: 5.5em;
  --bannerimg-height: 10em;
  --bannericon-circle-radius:5em;
}

/*这个css片段用于制作页面横幅*/

/*Page Padding Top*/

.markdown-reading-view .bannerimg{
  padding-top: 11em;
  padding-bottom: 2em;
}

.canvas-node-content.markdown-embed.is-loaded .bannerimg {
  padding-top: 11em;
  padding-bottom: 2em;
}

/*Banner Image*/
span[src$="bannerimg"] img{
  object-fit: cover;
  max-width: 100%;
  max-height: 10em;
  min-height: 10em;
  width: 100%;
  border-radius: 0px;
  position: absolute;
  top: 0;
  left: 0;
  margin-top: 0px;
}

/*Banner Icon*/
span[src$="bannericonl"] img{
  object-fit: cover;
  width: 5em !important;
  height: 5em !important;
  
  position: absolute;
  top: 5.5em;
  left: var(--h1-style);

  border-radius:15px;
  border: solid 0.1em;
  border-color: var(--color-base-00);
  box-shadow: none;
}

span[src$="bannericonlc"] img{
  object-fit: cover;
  width: 5em !important;
  height: 5em !important;
  
  position: absolute;
  top: 5.5em;
  left: initial;

  border-radius:5em;
  border: solid 0.1em;
  border-color: var(--color-base-00);
  box-shadow: none;
}

span[src$="bannericonc"] img{
  object-fit: cover;
  width: 5em !important;
  height: 5em !important;
  
  position: absolute;
  top: 5.5em;
  left: calc(50% - 2.5em);

  border-radius:15px;
  border: solid 0.1em;
  border-color: var(--color-base-00);
  box-shadow: none;
}

span[src$="bannericoncc"] img{
  object-fit: cover;
  width: 5em !important;
  height: 5em !important;
  
  position: absolute;
  top: 5.5em;
  left: calc(50% - 2.5em);

  border-radius:5em;
  border: solid 0.1em;
  border-color: var(--color-base-00);
  box-shadow: none;
  background-color: #fff;
}

/*Banner title align Banner标题定位*/
.banner-title-center .inline-title {
  text-align: center !important;
}

/*
.banner-title-left .inline-title {
  text-align: left !important;
  left: calc(var(--bannericon-wh) * 1.4) !important;
  top: calc(var(--bannericon-top) - var(--title-top));
  position:absolute;
}
*/


/*Plugin Fix*/

/*strange new world, hide image button*/

.snw-reference[data-snw-reallink$="bannerimg"] {
  display: none;
}

.snw-reference[data-snw-reallink*="bannericon"] {
  display: none;
}

/*Breadcrumbs, trail view move down*/
.bannerimg .BC-trail,.bannericon .BC-trail {
  border: 1px solid var(--background-modifier-border);
  border-radius: 5px;
  padding: 5px;
  margin-top: 1.5em !important;
}
```

# 更多信息

- 主题：[minimal](https://github.com/kepano/obsidian-minimal)
	- 主题指南：[minimal指南](https://minimal.guide/)
- 启用 CSS 片段
	- TiddlyWiki_Like
	- MinerBanner
	- Miner_Float_Sidebar
	- 一个透明片段
- 启用插件
	- [Strange New World](https://github.com/TfTHacker/obsidian42-strange-new-worlds)
		- 用于在双链后方显示引用计数与卡片窗口
	- [Collapse Node](https://github.com/Quorafind/Obsidian-Collapse-Node)
		- 允许在 Obsidian 白板中折叠卡片

## FAQ

- Q：在笔记卡片中显示为卡片分列的是什么功能？
  ![[Pasted image 20230904235808.png]]
	- A：minimal 主题的列表转卡片。在 cssclasses 中输入 `list-cards` 即可激活，详细设置请看 [minimal文档/卡片](https://minimal.guide/cards)