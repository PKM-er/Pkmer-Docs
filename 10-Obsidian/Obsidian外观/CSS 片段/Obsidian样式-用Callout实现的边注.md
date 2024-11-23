---
uid: 20240120143852
title: Obsidian 样式 - 用 Callout 实现的边注（注释）
tags: [obsidian, css, callout, 边注, 注释]
description: 在 obsidian 中优雅的实现边注
author: Huajin,alan777
type: other
draft: false
editable: false
modified: 20241123162443
---

# Obsidian 样式 - 用 Callout 实现的边注（注释）

使用 obsidian 自带的 callout 语法，不污染笔记，且用法非常简单。

![image.png](https://cdn.pkmer.cn/images/20240120155800.png!pkmer)

<center>主题：Obsidian Nord</center>

> [!tip] 另外
> 内容修改自 discord 两位大佬分享的 css，使得实时模式可以显示，并适配多种主题。[参考一](https://discord.com/channels/686053708261228577/702656734631821413/1155147566615367680), [参考二](https://discord.com/channels/686053708261228577/702656734631821413/1073456247849881610).

## 使用方法

添加好 css 后，在正文中直接用边注的 callout 即可（如何添加 css 可以看这篇：[[Obsidian的CSS代码片段]]）

如果想要左边的边注，可以这样写

```
> [!NOTE|aside-l] 左侧注释
> 注释内容
```

如果想要右边的边注，可以这样写

```
> [!NOTE|aside-r] 右侧注释
> 注释内容
```

如果想要边注可折叠，可以用 callout 的折叠语法

```
> [!NOTE|aside-l]+ 默认展开的注释
> 注释内容
```

```
> [!NOTE|aside-r]- 默认折叠的注释
> 注释内容
```

边注基于 callout 实现，因此可以像 callout 一样使用不同的样式

```
> [!ERROR|aside-l] ERROR 样式
> 还可以用别的callout，例如important, cite 等
```

## Style Settings

本 css 可以配合 style settings 插件使用，可以调整注释的样式

![image.png](https://cdn.pkmer.cn/images/20240128015408.png!pkmer)

例如：开启背景 and 边注标题置于顶部 and 去除 folder icon

![image.png](https://cdn.pkmer.cn/images/20240128015300.png!pkmer)

## 部分主题截图展示

默认主题：

![image.png](https://cdn.pkmer.cn/images/20240128015757.png!pkmer)

Anuppuccin：

![image.png](https://cdn.pkmer.cn/images/20240128015938.png!pkmer)

blue-topaz:

![image.png](https://cdn.pkmer.cn/images/20240128020040.png!pkmer)

minimal:

![image.png](https://cdn.pkmer.cn/images/20240128020251.png!pkmer)

## 注意

- 渲染的是 callout，没有添加新语法，方便迁移以及修改。
- 边注的标题在侧边时不宜过长
- 边注需要显示在侧面，如果屏幕过小，可能无法全部显示。例如手机屏幕、页面分页
- 暂未导出 PDF 的样式（doing）
- 边注的位置目前只能固定在侧边，还未支持上下调整，后续可能会增加该功能（doing）

## CSS 源码

如果样式遇到问题，试着更新下代码。文章中的代码不一定是最新的，可以在 [xhuajin/obsidian-sidenote-callout(github.com)](https://github.com/xhuajin/obsidian-sidenote-callout) 查看更新最新代码。

如果代码使用遇到问题，请检查：

- css 是否放置到正确的文件夹，是否在库中启用
- 你在笔记中写的 callout 是否正确
- 如果没有显示，是不是屏幕可显示的范围过小

遇到 BUG：可以在上方链接中给我提 issue，或者在 pkmer 的 q 群问问。

希望增加功能：在上方链接中给我提 issue

> 更新日志
> 2024-01-22：可以直接修改边注与正文之间的距离、边注标题位于顶部时，可以自行选择标题的位置（居左、居中和居右）

```css
/*
author: Huajin
reference: 
  https://discord.com/channels/686053708261228577/702656734631821413/1155147566615367680
  https://discord.com/channels/686053708261228577/702656734631821413/1073456247849881610
*/

/* @settings

name: SideNote Callout
id: sidenote-callout
settings:
  -
    id: top-sidenote-callout-title
    title: Sidenote Callout Title to Top
    title.zh: 边注标题置于顶部
    type: class-toggle
    default: false
  -
    id: top-left-sidenote-callout-title-position
    title: Top Left Sidenote Callout Title Position
    title.zh: 标注在顶部时，左边注的标题位置
    type: class-select
    default: l-center-callout-title
    options:
      -
        label: left
        value: l-left-callout-title
      -
        label: center
        value: l-center-callout-title
      -
        label: right
        value: l-right-callout-title
  -
    id: top-right-sidenote-callout-title-position
    title: Top Right Sidenote Callout Title Position
    title.zh: 标注在顶部时，右边注的标题位置
    type: class-select
    default: r-center-callout-title
    options:
      -
        label: left
        value: r-left-callout-title
      -
        label: center
        value: r-center-callout-title
      -
        label: right
        value: r-right-callout-title
  -
    id: sidenote-backgound
    title: Callout Background
    title.zh: Callout背景
    description: enable background color
    description.zh: 开启背景色
    type: class-toggle
    default: false
  -
    id: aside-width
    title: sidenote width
    title.zh: 边注宽度
    description: The width of the sidenote
    description.zh: 边注的宽度
    type: variable-number-slider
    default: 200
    min: 150
    max: 300
    step: 10
    format: px
  -
    id: aside-offset
    title: sidenote offset
    title.zh: 边注与正文的间距
    description: The offset between the sidenote and the text(default is 16px)
    description.zh: 边注与正文的间距(默认为16px)
    type: variable-number-slider
    default: 16
    min: 0
    max: 50
    step: 1
    format: px
  -
    id: hide-sidenote-callout-fold-icon
    title: Hide Fold Icon
    title.zh: 隐藏折叠图标
    type: class-toggle
    default: false
*/

body {
  --aside-width: 200px;
  --aside-offset: var(--size-4-4);
  --line-width: var(--file-line-width, --line-width);
}

.markdown-source-view.mod-cm6 .cm-content > .cm-callout:has(.callout[data-callout-metadata*="aside"])[contenteditable=false]  {
  contain: none !important;
  overflow: visible;
}

.markdown-source-view.mod-cm6 .cm-content > .cm-callout:has(.callout[data-callout-metadata*="aside"])[contenteditable=false]>.markdown-rendered {
  overflow: visible;
}

.cm-callout:has(.callout[data-callout-metadata*="aside"])[contenteditable=false]>.edit-block-button {
  display: none;
}

:is(.markdown-source-view .cm-callout, div:not([class])):has(> .callout[data-callout-metadata*="aside"]) {
  position: relative;
  overflow: visible;
}

.callout[data-callout-metadata*="aside"] {
  /* --aside-offset: var(--size-4-4); */
  position: absolute;
}

.callout[data-callout-metadata*="aside-l"] {
  left: calc(-1 * (var(--aside-width) + var(--aside-offset)));
  right: calc(100% + var(--aside-offset));
}

.callout[data-callout-metadata*="aside-r"] {
  left: calc(var(--file-line-width) + var(--aside-offset));
  right: calc(-1 * var(--aside-width));
}

/* .markdown-reading-view .callout[data-callout-metadata*="aside-l"] {
  left: calc(50vw - var(--file-line-width)/2 - var(--aside-width) - 2 * var(--aside-offset));
  right: calc(50vw + var(--file-line-width)/2);
}

.markdown-reading-view .callout[data-callout-metadata*="aside-r"] {
  left: calc(var(--file-line-width) + 2 * var(--aside-width));
  right: calc(50vw - var(--file-line-width)/2 - var(--aside-width) - 2 *var(--aside-offset));
}   */

@media (hover: hover) {
  .markdown-source-view.mod-cm6 .cm-embed-block:has(> div > [data-callout-metadata*="aside"]):hover {
    overflow: visible;
  }
  .markdown-source-view.mod-cm6 .cm-embed-block:not(.cm-table-widget):hover {
    box-shadow: unset;
  }
}

/* ------------ */

.callout[data-callout-metadata*="aside"] {
  --block-spacing: 0.75rem;
  --speaker-block-width: 20%;
  margin: 0px;
  padding: 0px;
  display: grid;
  background-color: var(--background-primary) !important;
  border: none;
}

.sidenote-backgound .callout[data-callout-metadata*="aside"] {
  background-color: rgba(var(--callout-color), 0.1) !important;
  padding-bottom: 10px;
}
.callout[data-callout-metadata*="aside"] {
  grid-template-columns: var(--speaker-block-width) calc(100% - var(--speaker-block-width));
}

.top-sidenote-callout-title .callout[data-callout-metadata*="aside"] {
  grid-template-columns: unset;
}

.callout[data-callout-metadata*="aside"] .callout-title {
  height: calc(100% - var(--block-spacing));
  text-align: right;
  word-wrap: break-word;
  border-right: 3px solid;
  border-bottom: unset;
  flex: 1 0 auto;
  color: rgb(var(--callout-color)) !important;
  background-color: unset !important;
  /* padding-right: var(--block-spacing); */
  padding: 0;
}
.callout[data-callout-metadata*="aside"] .callout-title {
  display: inline-block;
}

body:not(.top-sidenote-callout-title) .setting-item[data-id="top-left-sidenote-callout-title-position"],
body:not(.top-sidenote-callout-title) .setting-item[data-id="top-right-sidenote-callout-title-position"] {
  display: none;
}

.top-sidenote-callout-title .callout[data-callout-metadata*="aside"] .callout-title {
  display: flex;
  flex-direction: row-reverse;
}

.callout[data-callout-metadata*="aside"] .callout-title-inner {
  font-weight: var(--bold-weight) !important;
  color: rgb(var(--callout-color)) !important;
  width: 1ch;
  margin: 0 auto;
  text-align: left;
}

.top-sidenote-callout-title .callout[data-callout-metadata*="aside"] .callout-title-inner {
  margin: 0 auto;
  width: unset;
}

.callout[data-callout-metadata*="aside"] .callout-title-inner {
  margin: 0 auto;
}

.l-left-callout-title .callout[data-callout-metadata*="aside-l"] .callout-title-inner {
  margin-left: var(--block-spacing);
}

.l-right-callout-title .callout[data-callout-metadata*="aside-l"] .callout-title-inner {
  margin: 0 var(--block-spacing);
}

.r-left-callout-title .callout[data-callout-metadata*="aside-r"] .callout-title-inner {
  margin-left: var(--block-spacing);
}

.r-right-callout-title .callout[data-callout-metadata*="aside-r"] .callout-title-inner {
  margin: 0 var(--block-spacing);
}

.callout[data-callout-metadata*="aside"]>* {
  margin-top: var(--block-spacing);
}

.callout[data-callout-metadata*="aside"]>.callout-title>.callout-icon {
  display: none;
}

.hide-sidenote-callout-fold-icon .callout[data-callout-metadata*="aside"] .callout-fold {
  display: none;
}

.callout[data-callout-metadata*="aside"]>.callout-title>.callout-fold,
.callout[data-callout-metadata*="aside"]>.callout-title>.callout-fold.is-collapsed {
  padding: 0;
  justify-content: center;
}

.callout[data-callout-metadata*="aside"]>.callout-content {
  padding: 0px var(--block-spacing);
  border-top: unset;
  max-height: 200px;
  overflow-y: auto;
}

.callout[data-callout-metadata*="aside"]>.callout-content>p:first-child {
  margin-top: 0px;
}

.callout[data-callout-metadata*="aside"]>.callout-content>p:last-child {
  margin-bottom: 0px;
}

.callout[data-callout-metadata*="aside"]>.callout-content::-webkit-scrollbar-thumb {
  width: 11px;
  height: 11px;
  background-color: transparent !important;
}

.callout[data-callout-metadata*="aside"]>.callout-content:hover::-webkit-scrollbar-thumb {
  background-color: var(--scrollbar-thumb-bg) !important;
}

/* ------- */

@media print {
  .callout[data-callout-metadata*="aside-l"] {
    left: 0;
    right: calc(100% - var(--aside-width));
  }
  .callout[data-callout-metadata*="aside-r"] {
    left: calc(100% - var(--aside-width));
    right: 0;
  }
  div:not(.callout-content)>p {
    width: calc(100% - 2 * var(--aside-width));
    margin: 0 auto;
  }
}
```

## alan777 修改版本

基于 Huajin 上面创作的版本，alan777 对片段进行了基于自己使用需求的修改，具体如下：

主要实现了**单篇笔记双侧边注、单侧边注的自由选择**。

- 使用 obsidian 自带的 callout 语法，不污染笔记，方便迁移及修改
- 可以通过 `CSSClasses` 定义笔记是双侧边注，还是单侧边注（右侧或左侧）
- 编辑模式、阅读模式效果一致
- 边注框可随显示窗口大小的调整自适应
- 当边注内容较多时，可用滚动查看（边注框高度可调，见代码注释）

### 使用效果展示

#### 双侧边注

![双侧效果](https://cdn.pkmer.cn/images/6ccd1fa06b47aef1a1b8c56ed03d333d434e4647.png!pkmer)

#### 单侧边注（右侧）

![右侧效果](https://cdn.pkmer.cn/images/220b065cbd5c47e230d0a0e970736e3c6027305e.png!pkmer)

#### 单侧边注（左侧）

![左侧效果](https://cdn.pkmer.cn/images/2c0c940d739d1a13b5b02f59693396f7d8bbfb8f.png!pkmer)

### 使用方法

#### 添加边注

添加好 css 后，在 `properties` 中添加 `CSSClasses` 赋值 `sidenote` 、 `sidenote-r` 、 `sidenote-r` ，然后在正文中直接用边注的 callout 即可。

* `CSSClasses` 值说明
	* `sidenote` 同时添加双侧边注
	* `sidenote-r` 只添加右侧边注
	* `sidenote-r` 只添加左侧边注
* 添加右侧边注，这样写

```
> [!NOTE|aside-r] 右侧注释
> 注释内容
> 如果想要边注可折叠，可以用 callout 的折叠语法
```

* 添加左侧边注，这样写

```
> [!NOTE|aside-l] 右侧注释
> 注释内容
> 如果想要边注可折叠，可以用 callout 的折叠语法
```

* 可尝试不同 callout 类型

```
> [!ERROR|aside-r] 注释
> 其它如important, tip等callout样式
```

#### 布局调整

* `--file-margins: 1% 20% 1% 20%; ` 的值可以根据需要调整
* 当 `--file-margins` 的值调整时， `aside-l` 和 `aside-r` 的宽度 `width` 也需要调整（编辑、预览模式单独调整），可调整其中的百分数，使边注框宽度合适，否则边注内容容易被覆盖。

#### 适配主题

* 目前只测试了 Minimal，其它主题未知

#### 注意事项

* 使用 contextual typography 插件且开启 blue topaz 主题中的首行缩进和两端对齐会有冲突（原作者备注，本 CSS 未测试）
	* 解决办法：把 css 中 @media 上方那两段被注释的 css 去掉注释即可（把两段开头的 \/* 和结尾的 \*/ 去掉）

- 边注的标题在侧边时不宜过长
- 导出 PDF 时的样式有问题，关闭本 css 再导出即可（本人非程序员，如有高手可以搞定 PDF 导出样式，烦请告之，感谢！）

### CSS 源码

```css
/* ----------------------------------------------------------Sidenote边注功能------------------------------------------------------------*/
/*author: Huajin
reference: 
  https://discord.com/channels/686053708261228577/702656734631821413/1155147566615367680
  https://discord.com/channels/686053708261228577/702656734631821413/1073456247849881610
*/

/* @settings

name: SideNote Callout
id: sidenote-callout
settings:
  -
    id: top-sidenote-callout-title
    title: Sidenote Callout Title to Top
    title.zh: 边注标题置于顶部
    type: class-toggle
    default: false
  -
    id: top-left-sidenote-callout-title-position
    title: Top Left Sidenote Callout Title Position
    title.zh: 标注在顶部时，左边注的标题位置
    type: class-select
    default: l-center-callout-title
    options:
      -
        label: left
        value: l-left-callout-title
      -
        label: center
        value: l-center-callout-title
      -
        label: right
        value: l-right-callout-title
  -
    id: top-right-sidenote-callout-title-position
    title: Top Right Sidenote Callout Title Position
    title.zh: 标注在顶部时，右边注的标题位置
    type: class-select
    default: r-center-callout-title
    options:
      -
        label: left
        value: r-left-callout-title
      -
        label: center
        value: r-center-callout-title
      -
        label: right
        value: r-right-callout-title
  -
    id: sidenote-backgound
    title: Callout Background
    title.zh: Callout背景
    description: enable background color
    description.zh: 开启背景色
    type: class-toggle
    default: false
  -
    id: aside-width
    title: sidenote width
    title.zh: 边注宽度
    description: The width of the sidenote
    description.zh: 边注的宽度
    type: variable-number-slider
    default: 200
    min: 150
    max: 300
    step: 10
    format: px
  -
    id: aside-offset
    title: sidenote offset
    title.zh: 边注与正文的间距
    description: The offset between the sidenote and the text(default is 16px)
    description.zh: 边注与正文的间距(默认为16px)
    type: variable-number-slider
    default: 16
    min: 0
    max: 50
    step: 1
    format: px
  -
    id: hide-sidenote-callout-fold-icon
    title: Hide Fold Icon
    title.zh: 隐藏折叠图标
    type: class-toggle
    default: false
*/


body {
  --aside-width: 200px;
  --aside-offset: var(--size-4-4);
  --line-width: var(--file-line-width, --line-width);
}

/* == sidenote CSSClasses 配置 ==
这些设置适用于所有properties的CSSClasses带有 "sidenote-r"、"sidenote-l" 和 "sidenote" 类名的笔记
*/

/* 编辑模式 - sidenote */
.sidenote {
  --file-margins: 1% 20% 1% 20%; /* 编辑模式的边距设置 */
}

/* 阅读模式 - sidenote */
.markdown-reading-view .sidenote {
  margin: 1%!important; /* 其他笔记的默认阅读模式边距设置 */
  padding-right: 20% !important;
  padding-left: 20% !important;
}

/* 编辑模式 - sidenote-r */
.sidenote-r {
  --file-margins: 1% 25% 1% 1%; /* 左1%，右30%，上/下1% */
}

/* 阅读模式 - sidenote-r */
.markdown-reading-view .sidenote-r {
  margin: 1% !important; /* 保持内容的外边距一致 */
  padding-right: 20% !important; /* 为右侧边注预留20%的空间 */
}

/* 编辑模式 - sidenote-l */
.sidenote-l {
  --file-margins: 1% 1% 1% 25%; /* 左30%，右1%，上/下1% */
}

/* 阅读模式 - sidenote-l */
.markdown-reading-view .sidenote-l {
  margin: 1% !important; /* 保持内容的外边距一致 */
  padding-left: 20% !important; /* 为左侧边注预留20%的空间 */
}


/* 通过 cssclasses 属性控制布局 */
.sidenote {
  --show-left-aside: initial;
  --show-right-aside: initial;
}

.sidenote-l {
  --show-left-aside: initial;
  --show-right-aside: none;
}

.sidenote-r {
  --show-left-aside: none;
  --show-right-aside: initial;
}

/* 控制左侧边注可见性 */
.callout[data-callout-metadata*="aside-l"] {
  display: var(--show-left-aside);
}

/* 控制右侧边注可见性 */
.callout[data-callout-metadata*="aside-r"] {
  display: var(--show-right-aside);
}

/* -------------- */

.markdown-source-view.mod-cm6 .cm-content > .cm-callout:has(.callout[data-callout-metadata*="aside"])[contenteditable=false]  {
  contain: none !important;
  overflow: visible;
}

.markdown-source-view.mod-cm6 .cm-content > .cm-callout:has(.callout[data-callout-metadata*="aside"])[contenteditable=false]>.markdown-rendered {
  overflow: visible;
}

.cm-callout:has(.callout[data-callout-metadata*="aside"])[contenteditable=false]>.edit-block-button {
  display: none;
}

:is(.markdown-source-view .cm-callout, div:not([class])):has(> .callout[data-callout-metadata*="aside"]) {
  position: relative;
  overflow: visible;
}

.callout[data-callout-metadata*="aside"] {
  position: absolute;
}

.callout[data-callout-metadata*="aside-l"] {
  position: absolute; /* 绝对定位 */
  right: calc(100% + 0.5 * var(--aside-offset)); /* 将右边距设置为动态调整*/
  left: auto; /* 取消左侧边距约束 */
  width: calc(33% - 0.4 * var(--aside-offset)); /* 使用变量控制宽度 */
  max-width: 300px; /* 设定最大宽度，确保在小屏幕上不超出边界 */
  overflow: visible; /* 允许内容溢出 */
}

.callout[data-callout-metadata*="aside-r"] {
  position: absolute; /* 绝对定位 */
  left: calc(100% + 0.2 * var(--aside-offset));/* 将左边框设置为根据屏幕尺寸动态调整，并增加调整与左侧正文间距的变量 */
  right: auto;/* 取消右侧边距约束 */
  width: calc(30% + 0.8 * var(--aside-offset)); /* 根据屏幕尺寸动态调整宽度 */
  max-width: 300px; /* 设定最大宽度，确保在小屏幕上不超出边界 */
  overflow: visible;
}

.markdown-reading-view .callout[data-callout-metadata*="aside-l"] {
  position: absolute; /* 绝对定位 */
  right: calc(80% + 0.2 * var(--aside-offset)); /* 将右边框设置为根据屏幕尺寸动态调整，并增加调整与右侧正文间距的变量*/
  left: auto; /* 取消左侧边距约束 */
  width: calc(20% - 0.5 * var(--aside-offset)); /* 使用变量控制宽度 */
  max-width: 350px; /* 设定最大宽度，确保在小屏幕上不超出边界 */
  overflow: visible; /* 允许内容溢出 */
}

.markdown-reading-view .callout[data-callout-metadata*="aside-r"] {
  position: absolute; /* 绝对定位 */
  left: calc(80% + 0.1 * var(--aside-offset));/* 将左边距设置为根据屏幕尺寸动态调整，并增加调整与左侧正文间距的变量*/
  right: auto;/* 取消右侧边距约束 */
  width: calc(20% - 0.6 * var(--aside-offset)); /* 使用变量控制宽度 */
  max-width: 350px; /* 设定最大宽度，确保在小屏幕上不超出边界 */
  overflow: visible;
}  

@media (hover: hover) {
  .markdown-source-view.mod-cm6 .cm-embed-block:has(> div > [data-callout-metadata*="aside"]):hover {
    overflow: visible;
  }
  .markdown-source-view.mod-cm6 .cm-embed-block:not(.cm-table-widget):hover {
    box-shadow: unset;
  }
}

/* ------------ */

.callout[data-callout-metadata*="aside"] {
  --block-spacing: 0.5rem;
  --speaker-block-width: 20%;
  margin: 0px;
  padding: 0px;
  display: grid;
  background-color: var(--background-primary) !important;
  border: none;
  font-size: 13px;/* 修改为所需的字体大小 */
}

.sidenote-backgound .callout[data-callout-metadata*="aside"] {
  background-color: rgba(var(--callout-color), 0.1) !important;
  padding-bottom: 10px;
}
.callout[data-callout-metadata*="aside"] {
  grid-template-columns: var(--speaker-block-width) calc(100% - var(--speaker-block-width));
}

.top-sidenote-callout-title .callout[data-callout-metadata*="aside"] {
  grid-template-columns: unset;
}

.callout[data-callout-metadata*="aside"] .callout-title {
  height: calc(100% - var(--block-spacing));
  text-align: right;
  word-wrap: break-word;
  border-right: 3px solid;
  border-bottom: unset;
  flex: 1 0 auto;
  color: rgb(var(--callout-color)) !important;
  background-color: unset !important;
  /* padding-right: var(--block-spacing); */
  padding: 0;
}
.callout[data-callout-metadata*="aside"] .callout-title {
  display: inline-block;
}

body:not(.top-sidenote-callout-title) .setting-item[data-id="top-left-sidenote-callout-title-position"],
body:not(.top-sidenote-callout-title) .setting-item[data-id="top-right-sidenote-callout-title-position"] {
  display: none;
}

.top-sidenote-callout-title .callout[data-callout-metadata*="aside"] .callout-title {
  display: flex;
  flex-direction: row-reverse;
}

.callout[data-callout-metadata*="aside"] .callout-title-inner {
  font-weight: var(--bold-weight) !important;
  color: rgb(var(--callout-color)) !important;
  width: 1ch;
  margin: 0 auto;
  text-align: left;
}

.top-sidenote-callout-title .callout[data-callout-metadata*="aside"] .callout-title-inner {
  margin: 0 auto;
  width: unset;
}

.callout[data-callout-metadata*="aside"] .callout-title-inner {
  margin: 0 auto;
}

.l-left-callout-title .callout[data-callout-metadata*="aside-l"] .callout-title-inner {
  margin-left: var(--block-spacing);
}

.l-right-callout-title .callout[data-callout-metadata*="aside-l"] .callout-title-inner {
  margin: 0 var(--block-spacing);
}

.r-left-callout-title .callout[data-callout-metadata*="aside-r"] .callout-title-inner {
  margin-left: var(--block-spacing);
}

.r-right-callout-title .callout[data-callout-metadata*="aside-r"] .callout-title-inner {
  margin: 0 var(--block-spacing);
}

.callout[data-callout-metadata*="aside"]>* {
  margin-top: var(--block-spacing);
}

.callout[data-callout-metadata*="aside"]>.callout-title>.callout-icon {
  display: none;
}

.hide-sidenote-callout-fold-icon .callout[data-callout-metadata*="aside"] .callout-fold {
  display: none;
}

.callout[data-callout-metadata*="aside"]>.callout-title>.callout-fold,
.callout[data-callout-metadata*="aside"]>.callout-title>.callout-fold.is-collapsed {
  padding: 0;
  justify-content: center;
}


/* 调整左侧sidenote内容的上下边距、高度控制 */
.callout[data-callout-metadata*="aside-l"] .callout-content {
  padding: 0px var(--block-spacing);
  margin-bottom: -3px;
  border-top: unset;
  max-height: 200px;
  overflow-y: auto;
} 


/* 调整右侧sidenote内容的上下边距、高度控制 */
.callout[data-callout-metadata*="aside-r"] .callout-content {
  padding: 0px var(--block-spacing);
  margin-bottom: -3px;
  border-top: unset;
  max-height: 200px;
  overflow-y: auto;
}


.callout[data-callout-metadata*="aside"]>.callout-content>p:first-child {
  margin-top: 0px;
}

.callout[data-callout-metadata*="aside"]>.callout-content>p:last-child {
  margin-bottom: 0px;
}

.callout[data-callout-metadata*="aside"]>.callout-content::-webkit-scrollbar-thumb {
  width: 11px;
  height: 11px;
  background-color: transparent !important;
}

.callout[data-callout-metadata*="aside"]>.callout-content:hover::-webkit-scrollbar-thumb {
  background-color: var(--scrollbar-thumb-bg) !important;
}

/* ------- */

@media print {
  .callout[data-callout-metadata*="aside-l"] {
    left: 0;
    right: calc(100% - var(--aside-width));
  }
  .callout[data-callout-metadata*="aside-r"] {
    left: calc(100% - var(--aside-width));
    right: 0;
  }
  div:not(.callout-content)>p {
    width: calc(100% - 2 * var(--aside-width));
    margin: 0 auto;
  }
}
```
