---
uid: 20240331010206
title: Obsidian 样式 - 表格优化
tags: [css, 表格]
description: 优化Obsidian的表格
author: 余月鱼鸽
type: other
draft: false
editable: false
modified: 20240331011026
---

# Obsidian 样式 - 表格优化

## 1.css 来源

群友 @上善若水 写的表格样式优化 css ，目前能支持的功能包括：

1. 使用 css 控制全库表格样式，同时支持在文章中使用：cssclass 控制特定文件的表格样式
2. 支持在：style setting 中根据自己的需要调整效果

## 2.css 的使用方法

一、安装 css ：没接触过 css 的朋友可以看下这篇文章：[Obsidian 的 CSS 代码片段]( https://pkmer.cn/show/20230329145845 )，这里就不展开 css 具体的使用方法。css 片段生效后，表格的默认样式为：

![](https://cdn.pkmer.cn/images/202403310103015.png!pkmer)

二、在 style setting 插件中，找到：【 Table 美化 】的设置选项，样式如下：

![](https://cdn.pkmer.cn/images/202403310103512.png!pkmer)

以下为 style setting 各项参数的详细说明：

 本 css 共支持 5 种样式：

 - 常规底色模式
 - 标题底色模式
 - 行列标题底色模式
 - 行列标题间隔层模式
 - 全透明底色模式

具体的效果对比如下：

 ![](https://cdn.pkmer.cn/images/202403310111404.png!pkmer)



 值得注意的是，**在 style setting 中设置的模式为全库表格的默认格式，若指定文件需要特殊设置效果时，在文章的 yaml 区域的 cssclass 中输入对应表格样式的名称即可进行设置**，如



 ![](https://cdn.pkmer.cn/images/202403310103728.png!pkmer)

表格全宽选择：共包含 3 种选择：

- 非全款模式
- 全宽模式
- 自定义居中模式


具体的效果对比如下：

![](https://cdn.pkmer.cn/images/202403310103258.png!pkmer)

值得注意的是，**自定义居中模式**中甚至了 8 个档位的表格宽度，支持表格宽度的自定义，指定文件需要特殊设置效果时，在文章的 yaml 区域的 cssclass 中输入对应表格样式的名称即可进行设置，以下为本 css 所支持的 yaml 配置

![](https://cdn.pkmer.cn/images/202403310103132.png!pkmer)

表格宽度是否超出显示界面：本 css 共支持 3 种样式：

- 超出模式
- 不超出模式（非均匀分布）
- 不超出模式（均匀分布）

具体效果对比可看截图：

![](https://cdn.pkmer.cn/images/202403310103097.png!pkmer)

## 3.css 片段代码

```css

 /* 片段来自：pkmer知识管理交流群，@上善若水*/

 /* @settings
name: Table美化
id: Mo-Table
settings:
  -
    id: tbMH-yangshi
    title: 表格样式选择
    type: class-select
    allowEmpty: false
    default: tbMH-yuan
    options:
      -
        label: 直角模式
        value: tbMH-zhi
      -
        label: 圆角模式
        value: tbMH-yuan
  -
    id: tbMH-qkms
    title: 表格全宽选择
    type: class-select
    allowEmpty: false
    default: tbMH-qk
    options:
      -
        label: 非全宽模式
        value: tbMH-fqk
      -
        label: 全宽模式
        value: tbMH-qk
      -
        label: 自定义居中模式
        value: tbMH-zdykd-jz
  -
    id: tbMH-ds
    title: 表格底色样式选择
    description: 可通过在yaml区 cssclasses：模式名字 来设置页面的表格模式。
    type: class-select
    allowEmpty: false
    default: tbMH-ds-cg
    options:
      -
        label: 常规底色模式
        value: tbMH-ds-cg
      -
        label: 标题底色模式
        value: tbMH-ds-bt
      -
        label: 行列标题底色模式
        value: tbMH-ds-hlbt
      -
        label: 行列标题间隔层模式
        value: tbMH-ds-hlbt-jg
      -
        label: 全透明底色模式
        value: tbMH-ds-tm
  -
    id: tbMH-kd
    title: 表格宽度是否超出显示界面选择
    description: 可通过在yaml区 “cssclasses：模式名字” 来设置页面的均匀模式。支持在全宽均匀分布模式下控制表格大小，可通过 “cssclasses：表格宽度-第一档位” 来自定义，最高八档。支持通过 “cssclasses：均匀模式&非均匀模式” 来改变是否均匀模式。
    type: class-select
    allowEmpty: false
    default: tbMH-kd-ncc-jy
    options:
      -
        label: 超出模式
        value: tbMH-kd-cc
      -
        label: 不超出模式（非均匀分布）
        value: tbMH-kd-ncc
      -
        label: 不超出模式（全宽均匀分布）
        value: tbMH-kd-ncc-jy
  -
    id: tbMH-zdykd-jz
    title: 表格自定义宽度
    description: 可通过拖拽自定义表格默认宽度。（仅自定义模式生效）
    type: variable-number-slider
    default: 100
    min: 50
    max: 800
    format: px
  -
    id: tbMH-tt
    title: 表格行列标题头颜色调整
    type: variable-themed-color
    default-light: '#'
    default-dark: '#'
    format: 'rgb-values'
  -
    id: tbMH-th
    title: 表格列标题颜色调整
    type: variable-themed-color
    default-light: '#'
    default-dark: '#'
    format: 'rgb-values'
  -
    id: tbMH-th-l
    title: 表格行标题颜色调整
    type: variable-themed-color
    default-light: '#'
    default-dark: '#'
    format: 'rgb-values'
  -
    id: tbMH-td
    title: 表格间隔层颜色调整
    type: variable-themed-color
    default-light: '#'
    default-dark: '#'
    format: 'rgb-values'
  -
    id: tbMH-th-djDS
    title: 框选多单元格时行列底色调整
    type: variable-themed-color
    default-light: '#'
    default-dark: '#'
    format: 'rgb-values'
  -
    id: tbMH-kj-color
    title: 表格框架颜色调整
    type: variable-themed-color
    default-light: '#'
    default-dark: '#'
    format: 'rgb-values'
  -
    id: table-thickness
    title: 表格框架粗度调整
    type: variable-number
    default: 2
    format: px
  -
    id: tbMH-yuan-jd
    title: 表格框架圆角角度调整
    type: variable-number
    default: 6
    format: px
  -
*/

/*表格边框颜色*/
body.theme-light {
  --table-border-color: rgb(var(--tbMH-kj-color, 81, 81, 81));
  --table-add-button-border-color:rgb(var(--tbMH-kj-color, 81, 81, 81));
}

body.theme-dark {
  --table-border-color: rgb(var(--tbMH-kj-color, 108, 88, 88));
  --table-add-button-border-color:rgb(var(--tbMH-kj-color, 108, 88, 88));
}

/*表格边框粗细*/
.theme-dark, .theme-light {
  --table-border-width: var(--table-thickness, 2px);
}

/*表格按钮动画*/
.markdown-source-view.mod-cm6 .cm-table-widget .table-row-btn, .markdown-source-view.mod-cm6 .cm-table-widget .table-col-btn {
  transition-duration:400ms
}

/*表格底色*/
body.theme-light.tbMH-ds-cg :is(.markdown-preview-view,.markdown-source-view.mod-cm6 .cm-table-widget) th {
    background-color: rgb(var(--tbMH-th, 145, 163, 143))
}
body.theme-light.tbMH-ds-cg :is(.markdown-preview-view,.markdown-source-view.mod-cm6 .cm-table-widget) tr:nth-child(2n) td {
    background-color:rgb(var(--tbMH-td, 145, 163, 143))
}

body.theme-dark.tbMH-ds-cg :is(.markdown-preview-view,.markdown-source-view.mod-cm6 .cm-table-widget) th {
    background-color:rgb(var(--tbMH-th, 32, 23, 23))
}
body.theme-dark.tbMH-ds-cg :is(.markdown-preview-view,.markdown-source-view.mod-cm6 .cm-table-widget) tr:nth-child(2n) td {
    background-color:rgb(var(--tbMH-td, 32, 23, 23))
}

/*全宽表格*/
body.tbMH-qk :is(.markdown-source-view.mod-cm6 .cm-table-widget .table-wrapper, .markdown-rendered table)  {
  --table-white-space: break-all;
  width: 100%;
}

/*自定义居中模式*/
body.tbMH-zdykd-jz :is(.markdown-source-view.mod-cm6 .cm-table-widget .table-wrapper, .markdown-rendered table):not(.dataview)  {
  --table-white-space: break-all;
  width: var(--tbMH-zdykd-jz);
  margin-left: calc(50% - var(--tbMH-zdykd-jz) / 2);
  margin-right: calc(50% - var(--tbMH-zdykd-jz) / 2);
}



/*圆角样式*/
body.tbMH-yuan {
  --table-radius: var(--tbMH-yuan-jd,6px);
}


body.tbMH-yuan .markdown-rendered table {
  border-collapse: initial;
  border-spacing: 0;
}

body.tbMH-yuan :is(.markdown-source-view.mod-cm6 .cm-table-widget .table-wrapper, .markdown-rendered table) th:first-child:not(:has(:is(.table-row-drag-handle, .table-col-drag-handle):hover)) {
  border-top-left-radius: var(--table-radius);
}
body.tbMH-yuan :is(.markdown-source-view.mod-cm6 .cm-table-widget .table-wrapper, .markdown-rendered table) th:last-child:not(:has(.table-col-drag-handle:hover)) {
  border-top-right-radius: var(--table-radius);
}
body.tbMH-yuan :is(.markdown-source-view.mod-cm6 .cm-table-widget .table-wrapper, .markdown-rendered table):has(.table-col-btn:hover) th:last-child {
  border-top-right-radius: 0;
}
body.tbMH-yuan :is(.markdown-source-view.mod-cm6 .cm-table-widget .table-wrapper, .markdown-rendered table) tr:last-child td:first-child {
  border-bottom-left-radius: var(--table-radius);
}
body.tbMH-yuan :is(.markdown-source-view.mod-cm6 .cm-table-widget .table-wrapper, .markdown-rendered table):has(.table-row-btn:hover) tr:last-child td:first-child {
  border-bottom-left-radius: 0;
}
body.tbMH-yuan :is(.markdown-source-view.mod-cm6 .cm-table-widget .table-wrapper, .markdown-rendered table) tr:last-child td:last-child {
  border-bottom-right-radius: var(--table-radius);
}
body.tbMH-yuan :is(.markdown-source-view.mod-cm6 .cm-table-widget .table-wrapper, .markdown-rendered table):has(:is(.table-col-btn, .table-row-btn):hover) tr:last-child td:last-child {
  border-bottom-right-radius: 0;
}

body.tbMH-yuan :is(.markdown-source-view.mod-cm6 .cm-table-widget .table-wrapper, .markdown-rendered table) .table-col-btn {
  border-top-right-radius: var(--table-radius);
  border-bottom-right-radius: var(--table-radius);
}
body.tbMH-yuan :is(.markdown-source-view.mod-cm6 .cm-table-widget .table-wrapper, .markdown-rendered table) .table-row-btn {
  border-bottom-left-radius: var(--table-radius);
  border-bottom-right-radius: var(--table-radius);
}

body.tbMH-yuan :is(.markdown-source-view.mod-cm6 .cm-table-widget .table-wrapper, .markdown-rendered table) :is(th, td):not(:first-child) {
  border-left: 0;
}
body.tbMH-yuan :is(.markdown-source-view.mod-cm6 .cm-table-widget .table-wrapper, .markdown-rendered table) tbody td {
  border-top: 0;
}

/*点击连框颜色*/
body.theme-light .markdown-source-view.mod-cm6 .cm-table-widget th.is-selected::after,body.theme-light .markdown-source-view.mod-cm6 .cm-table-widget td.is-selected::after {
  background-color:rgba(var(--tbMH-th-djDS,204, 178, 31, 0.279))
}

body.theme-dark .markdown-source-view.mod-cm6 .cm-table-widget th.is-selected::after,body.theme-dark .markdown-source-view.mod-cm6 .cm-table-widget td.is-selected::after {
  background-color:rgba(var(--tbMH-th-djDS,149, 31, 204, 0.203))
}

/*不超过模式（非均匀模式）*/
body.tbMH-kd-ncc :is(.markdown-source-view.mod-cm6 .cm-table-widget .table-wrapper .cm-active, .markdown-rendered table) {
  word-break: break-all;
}
/*不超过模式（均匀模式）*/
body.tbMH-kd-ncc-jy :is(.markdown-source-view.mod-cm6 .cm-table-widget .table-wrapper .cm-active, .markdown-rendered table) {
  word-break: break-all;
  table-layout: fixed; 
}

/*标题底色模式*/
body.theme-light.tbMH-ds-bt :is(.markdown-preview-view,.markdown-source-view.mod-cm6 .cm-table-widget) th {
  background-color: rgb(var(--tbMH-th, 145, 163, 143))
}
body.theme-dark.tbMH-ds-bt :is(.markdown-preview-view,.markdown-source-view.mod-cm6 .cm-table-widget) th {
  background-color:rgb(var(--tbMH-th, 32, 23, 23))
}
body.tbMH-ds-bt tr:nth-child(2n) td {
  background-color:transparent;
}

/*透明底色模式*/
body.tbMH-ds-tm :is(.markdown-preview-view,.markdown-source-view.mod-cm6 .cm-table-widget) th {
  background-color:transparent;
}
body.tbMH-ds-tm tr:nth-child(2n) td {
  background-color:transparent;
}

/*行列标题底色模式*/
body.theme-dark.tbMH-ds-hlbt :is(.markdown-preview-view,.markdown-source-view.mod-cm6 .cm-table-widget) th:first-child {
  background-color:rgb(var(--tbMH-tt, 32, 23, 23))
}
body.theme-light.tbMH-ds-hlbt :is(.markdown-preview-view,.markdown-source-view.mod-cm6 .cm-table-widget) th {
  background-color: rgb(var(--tbMH-th, 145, 163, 143))
}
body.theme-dark.tbMH-ds-hlbt :is(.markdown-preview-view,.markdown-source-view.mod-cm6 .cm-table-widget) th {
  background-color:rgb(var(--tbMH-th, 32, 23, 23))
}
body.theme-light.tbMH-ds-hlbt :is(.markdown-preview-view,.markdown-source-view.mod-cm6 .cm-table-widget) td:first-child {
  background-color:rgb(var(--tbMH-th-l, 145, 163, 143))
}
body.theme-dark.tbMH-ds-hlbt :is(.markdown-preview-view,.markdown-source-view.mod-cm6 .cm-table-widget) td:first-child {
  background-color:rgb(var(--tbMH-th-l, 32, 23, 23))
}
body.tbMH-ds-hlbt .markdown-rendered td:first-child {
  font-size: var(--table-header-size);
  font-weight: var(--table-header-weight);
  color: var(--table-header-color);
  font-family: var(--table-header-font);
  line-height: var(--line-height-tight);
}

/*行列标题&间隔层底色模式*/
body.theme-light.tbMH-ds-hlbt-jg :is(.markdown-preview-view,.markdown-source-view.mod-cm6 .cm-table-widget) th:first-child {
  background-color:rgb(var(--tbMH-tt, 145, 163, 143))
}
body.theme-dark.tbMH-ds-hlbt-jg :is(.markdown-preview-view,.markdown-source-view.mod-cm6 .cm-table-widget) th:first-child {
  background-color:rgb(var(--tbMH-tt, 32, 23, 23))
}

body.theme-light.tbMH-ds-hlbt-jg :is(.markdown-preview-view,.markdown-source-view.mod-cm6 .cm-table-widget) th {
  background-color: rgb(var(--tbMH-th, 145, 163, 143))
}
body.theme-dark.tbMH-ds-hlbt-jg :is(.markdown-preview-view,.markdown-source-view.mod-cm6 .cm-table-widget) th {
  background-color:rgb(var(--tbMH-th, 32, 23, 23))
}

body.theme-light.tbMH-ds-hlbt-jg :is(.markdown-preview-view,.markdown-source-view.mod-cm6 .cm-table-widget) td:first-child {
  background-color:rgb(var(--tbMH-th-l, 145, 163, 143))
}
body.theme-dark.tbMH-ds-hlbt-jg :is(.markdown-preview-view,.markdown-source-view.mod-cm6 .cm-table-widget) td:first-child {
  background-color:rgb(var(--tbMH-th-l, 32, 23, 23))
}

body.theme-light.tbMH-ds-hlbt-jg :is(.markdown-preview-view,.markdown-source-view.mod-cm6 .cm-table-widget) tr:nth-child(2n) td:not(:first-child) {
  background-color:rgb(var(--tbMH-td, 145, 163, 143))
}
body.theme-dark.tbMH-ds-hlbt-jg :is(.markdown-preview-view,.markdown-source-view.mod-cm6 .cm-table-widget) tr:nth-child(2n) td:not(:first-child) {
  background-color:rgb(var(--tbMH-td, 32, 23, 23))
}

body.tbMH-ds-hlbt-jg .markdown-rendered td:first-child {
  font-size: var(--table-header-size);
  font-weight: var(--table-header-weight);
  color: var(--table-header-color);
  font-family: var(--table-header-font);
  line-height: var(--line-height-tight);
}

/*class的页面选择器*/

  /*常规底色模式 .常规底色模式*/
  body.theme-light .常规底色模式 th:first-child {
    background-color:rgb(var(--tbMH-th, 145, 163, 143))!important
  }
  body.theme-dark .常规底色模式 th:first-child {
    background-color:rgb(var(--tbMH-th, 32, 23, 23))!important
  }
  body.theme-light.常规底色模式 th {
    background-color: rgb(var(--tbMH-th, 145, 163, 143))!important
  }
  body.theme-light.常规底色模式 tr:nth-child(2n) td {
    background-color:rgb(var(--tbMH-td, 145, 163, 143))!important
  }
  body.theme-dark .常规底色模式 th {
    background-color:rgb(var(--tbMH-th, 32, 23, 23))!important
  }
  body.theme-dark .常规底色模式 tr:nth-child(2n) td {
    background-color:rgb(var(--tbMH-td, 32, 23, 23))!important
  }
  .常规底色模式 tr:nth-child(2n-1) td {
    background-color:transparent !important;
  }
  .常规底色模式 td:first-child {
    font-weight: var(--anp-font-preview-wt, normal)!important;
  }

  /*标题底色模式 .标题底色模式*/
  body.theme-light .标题底色模式 th:first-child {
    background-color:rgb(var(--tbMH-th, 145, 163, 143))!important
  }
  body.theme-dark .标题底色模式 th:first-child {
    background-color:rgb(var(--tbMH-th, 32, 23, 23))!important
  }
  body.theme-light .标题底色模式 th {
    background-color: rgb(var(--tbMH-th, 145, 163, 143))!important
  }
  body.theme-dark .标题底色模式 th {
    background-color:rgb(var(--tbMH-th, 32, 23, 23))!important
  }
  .标题底色模式 tr:nth-child(2n-1) td {
    background-color:transparent !important;
  }
  .标题底色模式 tr:nth-child(2n) td {
    background-color:transparent !important;
  }
  .标题底色模式 td:first-child {
    font-weight: var(--anp-font-preview-wt, normal)!important;
  }

  /*行列标题底色模式 .行列标题底色模式*/
  body.theme-light .行列标题底色模式 th:first-child {
    background-color:rgb(var(--tbMH-tt, 145, 163, 143))!important
  }
  body.theme-dark .行列标题底色模式 th:first-child {
    background-color:rgb(var(--tbMH-tt, 32, 23, 23))!important
  }
  body.theme-light .行列标题底色模式 th {
    background-color: rgb(var(--tbMH-th, 145, 163, 143))!important
  }
  body.theme-dark .行列标题底色模式 th {
    background-color:rgb(var(--tbMH-th, 32, 23, 23))!important
  }
  body.theme-light .行列标题底色模式 td:first-child {
    background-color:rgb(var(--tbMH-th-l, 145, 163, 143))!important
  }
  body.theme-dark .行列标题底色模式 td:first-child {
    background-color:rgb(var(--tbMH-th-l, 32, 23, 23))!important
  }
  .行列标题底色模式 td:first-child {
    font-size: var(--table-header-size)!important;
    font-weight: var(--table-header-weight)!important;
    color: var(--table-header-color)!important;
    font-family: var(--table-header-font)!important;
    line-height: var(--line-height-tight)!important;
  }
  body.theme-light .行列标题底色模式 tr:nth-child(2n) td:not(:first-child) {
    background-color:transparent !important
  }
  body.theme-dark .行列标题底色模式 tr:nth-child(2n) td:not(:first-child) {
    background-color:transparent !important
  }


  /*行列标题间隔层模式 .行列标题间隔层模式*/
  body.theme-dark .行列标题间隔层模式 th:first-child {
    background-color:rgb(var(--tbMH-tt, 32, 23, 23))!important
  }
  
  body.theme-light .行列标题间隔层模式 th {
    background-color: rgb(var(--tbMH-th, 145, 163, 143))!important
  }
  body.theme-dark .行列标题间隔层模式 th {
    background-color:rgb(var(--tbMH-th, 32, 23, 23))!important
  }
  
  body.theme-light .行列标题间隔层模式 td:first-child {
    background-color:rgb(var(--tbMH-th-l, 145, 163, 143))!important
  }
  body.theme-dark .行列标题间隔层模式 td:first-child {
    background-color:rgb(var(--tbMH-th-l, 32, 23, 23))!important
  }
  
  body.theme-light .行列标题间隔层模式 tr:nth-child(2n) td:not(:first-child) {
    background-color:rgb(var(--tbMH-td, 145, 163, 143))!important
  }
  body.theme-dark .行列标题间隔层模式 tr:nth-child(2n) td:not(:first-child) {
    background-color:rgb(var(--tbMH-td, 32, 23, 23))!important
  }
  .行列标题间隔层模式 td:first-child {
    font-size: var(--table-header-size)!important;
    font-weight: var(--table-header-weight)!important;
    color: var(--table-header-color)!important;
    font-family: var(--table-header-font)!important;
    line-height: var(--line-height-tight)!important;
  }

  /*全透明底色模式 .全透明底色模式*/
  .全透明底色模式 th {
    background-color:transparent !important;
  }
  .全透明底色模式 tr:nth-child(2n) td {
    background-color:transparent !important;
  }
  .全透明底色模式 td:first-child {
    background-color:transparent !important;
  }
  .全透明底色模式 td:first-child {
    font-weight: var(--anp-font-preview-wt, normal)!important;
  }

  /*非均匀模式下均匀模式 .均匀模式*/
  body.tbMH-kd-ncc .均匀模式 :is(.markdown-source-view.mod-cm6 .cm-table-widget .table-wrapper .cm-active, .markdown-rendered table) {
    table-layout: fixed!important; 
  }
  /*均匀模式下非均匀模式 .非均匀模式*/
  body.tbMH-kd-ncc-jy .非均匀模式 :is(.markdown-source-view.mod-cm6 .cm-table-widget .table-wrapper .cm-active, .markdown-rendered table) {
    table-layout: auto!important; 
  }

  /*自定义表格宽度-第一档位*/
  .表格宽度-第一档位 :is(.markdown-source-view.mod-cm6 .cm-table-widget .table-wrapper, .markdown-rendered table):not(.dataview)  {
  table-layout: fixed!important; 
  width:200px !important;
  margin-left: calc(50% - 200px / 2)!important;
  margin-right: calc(50% - 200px / 2)!important;
  }
  .表格宽度-第一档位  :is(.markdown-source-view.mod-cm6 .cm-table-widget .table-wrapper .cm-active, .markdown-rendered table):not(.dataview) {
    word-break: break-all!important;
  }
  /*自定义表格宽度-第二档位*/
  .表格宽度-第二档位 :is(.markdown-source-view.mod-cm6 .cm-table-widget .table-wrapper, .markdown-rendered table):not(.dataview)  {
    table-layout: fixed!important; 
    width: 300px !important;
    margin-left: calc(50% - 300px / 2)!important;
    margin-right: calc(50% - 300px / 2)!important;
    }
    .表格宽度-第二档位  :is(.markdown-source-view.mod-cm6 .cm-table-widget .table-wrapper .cm-active, .markdown-rendered table):not(.dataview) {
      word-break: break-all!important;
    }
  /*自定义表格宽度-第三档位*/
  .表格宽度-第三档位 :is(.markdown-source-view.mod-cm6 .cm-table-widget .table-wrapper, .markdown-rendered table):not(.dataview)  {
    table-layout: fixed!important; 
    width: 400px !important;
    margin-left: calc(50% - 400px / 2)!important;
    margin-right: calc(50% - 400px / 2)!important;
    }
    .表格宽度-第三档位  :is(.markdown-source-view.mod-cm6 .cm-table-widget .table-wrapper .cm-active, .markdown-rendered table):not(.dataview) {
      word-break: break-all!important;
    }
  /*自定义表格宽度-第四档位*/
  .表格宽度-第四档位 :is(.markdown-source-view.mod-cm6 .cm-table-widget .table-wrapper, .markdown-rendered table):not(.dataview)  {
    table-layout: fixed!important; 
    width: 500px !important;
    margin-left: calc(50% - 500px / 2)!important;
    margin-right: calc(50% - 500px / 2)!important;
    }
    .表格宽度-第四档位  :is(.markdown-source-view.mod-cm6 .cm-table-widget .table-wrapper .cm-active, .markdown-rendered table):not(.dataview) {
      word-break: break-all!important;
    }
  /*自定义表格宽度-第五档位*/
  .表格宽度-第五档位 :is(.markdown-source-view.mod-cm6 .cm-table-widget .table-wrapper, .markdown-rendered table):not(.dataview)  {
    table-layout: fixed!important; 
    width: 600px !important;
    margin-left: calc(50% - 600px / 2)!important;
    margin-right: calc(50% - 600px / 2)!important;
    }
    .表格宽度-第五档位  :is(.markdown-source-view.mod-cm6 .cm-table-widget .table-wrapper .cm-active, .markdown-rendered table):not(.dataview) {
      word-break: break-all!important;
    }
  /*自定义表格宽度-第六档位*/
  .表格宽度-第六档位 :is(.markdown-source-view.mod-cm6 .cm-table-widget .table-wrapper, .markdown-rendered table):not(.dataview)  {
    table-layout: fixed!important; 
    width: 700px !important;
    margin-left: calc(50% - 700px / 2)!important;
    margin-right: calc(50% - 700px / 2)!important;
    }
    .表格宽度-第六档位  :is(.markdown-source-view.mod-cm6 .cm-table-widget .table-wrapper .cm-active, .markdown-rendered table):not(.dataview) {
      word-break: break-all!important;
    }
  /*自定义表格宽度-第七档位*/
  .表格宽度-第七档位 :is(.markdown-source-view.mod-cm6 .cm-table-widget .table-wrapper, .markdown-rendered table):not(.dataview)  {
    table-layout: fixed!important; 
    width: 800px !important;
    margin-left: calc(50% - 800px / 2)!important;
    margin-right: calc(50% - 800px / 2)!important;
    }
    .表格宽度-第七档位  :is(.markdown-source-view.mod-cm6 .cm-table-widget .table-wrapper .cm-active, .markdown-rendered table):not(.dataview) {
      word-break: break-all!important;
    }
  /*自定义表格宽度-第八档位*/
  .表格宽度-第八档位 :is(.markdown-source-view.mod-cm6 .cm-table-widget .table-wrapper, .markdown-rendered table):not(.dataview)  {
    table-layout: fixed!important; 
    width: 900px !important;
    margin-left: calc(50% - 900px / 2)!important;
    margin-right: calc(50% - 900px / 2)!important;
    }
    .表格宽度-第八档位  :is(.markdown-source-view.mod-cm6 .cm-table-widget .table-wrapper .cm-active, .markdown-rendered table):not(.dataview) {
      word-break: break-all!important;
    }



```