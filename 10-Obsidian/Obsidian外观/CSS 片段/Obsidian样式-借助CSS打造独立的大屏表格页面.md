---
uid: 20231121204342
title: Obsidian 样式 - 借助 CSS 打造独立的大屏表格页面
tags: [Obsidian, 美化样式, 表格]
description: Obsidian样式：借助CSS打造独立的大屏表格页面
author: tk
type: other
draft: false
editable: false
modified: 20231121204531
---

# Obsidian 样式 - 借助 CSS 打造独立的大屏表格页面

为了避免笔记每行内容过长影响阅读，大部分人都会保持软件设置中“缩减栏宽”默认的开启状态。如果一个页面中包含的表格内容过多，那么被挤压在中间就会非常难受，所以这里使用自定义 CSS 代码片段打造一个独立的“大屏表格”页面。

添加并开启写在末尾部分的 CSS 代码后，设置页面的 `cssclasses` 属性启用相应的片段。

### 效果展示

![大屏表格.png](https://cdn.pkmer.cn/images/%E5%A4%A7%E5%B1%8F%E8%A1%A8%E6%A0%BC.png!pkmer)

![表格风格.png](https://cdn.pkmer.cn/images/%E8%A1%A8%E6%A0%BC%E9%A3%8E%E6%A0%BC.png!pkmer)

### 示例

```yaml
---
cssclasses: tablepage, tablenowrap, hideproperties, tablegreen
---
```

上方的代码进行的四种修改，后文进行更多说明。可以根据自己的需求选择启用其中一个或多个。

### 大屏页面

`tablepage` 让笔记页面成为专门用于表格的页面，即使设置中勾选了“缩减栏宽”也不留页边距，并且表格占满宽度。

如果有其它需要大屏查看的内容也可以使用这个。

### 溢出内容不换行

`tablenowrap` 可以使单元格内内容过长造成溢出后依然不自动换行，而是表格底部出现一个滚轮。

如果本身单元格内容较短无法占满宽度就没必要加上这段了，使用 `tablenowrap` 时会使 `tablepage` 不再自动占满宽度。

### 隐藏文档属性

`hideproperties` 可以隐藏文档属性，使屏幕中可以直接看到更多表格内容。

### 表格配色

这里还附带了 10 种可选的不同风格表格配色。比较简单，不喜欢的话删除就好。

- `tablegray`：灰色风格
- `tablered`：红色风格
- `tableyellow`：黄色风格
- `tableblue`：蓝色风格
- `tablegreen`：绿色风格
- `tablepurple`：紫色风格
- `tableorange`：橙色风格
- `tablepink`：粉色风格
- `tablebrown`：棕色风格
- `tabledark`：暗色风格

### CSS 代码

```css
/*修改默认表格以及更多可选样式。

- “tablenowrap”：单元格溢出内容不换行
- “tablepage”：专门用于表格的页面
- “hideproperties”：隐藏文档属性
- “tablegray”：灰色风格
- “tablered”：红色风格
- “tableyellow”：黄色风格
- “tableblue”：蓝色风格
- “tablegreen”：绿色风格
- “tablepurple”：紫色风格
- “tableorange”：橙色风格
- “tablepink”：粉色风格
- “tablebrown”：棕色风格
- “tabledark”：暗色风格

*/



/*----------------------------------------------------------------------------------------------------*/

/*溢出内容不换行*/

.tablenowrap.markdown-source-view div.cm-embed-block.cm-table-widget > div > table {width: max-content !important;}/*实时预览模式*/
.markdown-reading-view .tablenowrap.markdown-preview-view.markdown-rendered table {width: max-content !important;}/*阅读模式*/

/*----------------------------------------------------------------------------------------------------*/

/*表格页面*/

body .tablepage {--file-line-width: 100%;} /*不留页边距*/

.tablepage.markdown-preview-view table {width: 100%;} /*预览表格宽度占满*/

/*----------------------------------------------------------------------------------------------------*/

/*隐藏属性*/

.markdown-preview-view.hideproperties .metadata-container {display: none;}

/*----------------------------------------------------------------------------------------------------*/

/*灰色*/

body .tablegray {
--table-header-background: #d9d9d9; /*表头背景颜色*/
--table-header-background-hover: #ACACAC; /*表头悬停背景颜色*/
--table-row-background-hover: #E1E1E1; /*悬停时行背景颜色*/
--table-header-color: #000000; /*表头文本颜色*/
--table-text-color: #2b2b2b; /*文本颜色*/
}

.tablegray tbody {
--table-background: #f7f7f7; /*背景颜色*/
--table-row-alt-background: #f2f2f2; /*交替行背景颜色*/
}

/*----------------------------------------------------------------------------------------------------*/

/*红色*/
body .tablered {
--table-header-background: #f66a64; /*表头背景颜色*/
--table-header-background-hover: #e55a54; /*表头悬停背景颜色*/
--table-row-background-hover: #E1E1E1; /*悬停时行背景颜色*/
--table-header-color: #000000; /*表头文本颜色*/
--table-text-color: #2b2b2b; /*文本颜色*/
}

.tablered tbody {
--table-background:#fafafa; /*背景颜色*/
--table-row-alt-background: #efefef; /*交替行背景颜色*/
}

/*----------------------------------------------------------------------------------------------------*/

/*黄色*/
body .tableyellow {
--table-header-background: #ffe6a3; /*表头背景颜色*/
--table-header-background-hover: #fff2cc; /*表头悬停背景颜色*/
--table-row-background-hover: #fff2cc; /*悬停时行背景颜色*/
--table-header-color: #000000; /*表头文本颜色*/
--table-text-color: #2b2b2b; /*文本颜色*/
}

.tableyellow tbody {
--table-background: #fef5dd; /*背景颜色*/
--table-row-alt-background: #fff5d9; /*交替行背景颜色*/
}

/*----------------------------------------------------------------------------------------------------*/

/*蓝色*/
body .tableblue {
--table-header-background: #9acff8; /*表头背景颜色*/
--table-header-background-hover: #c4e2fa; /*表头悬停背景颜色*/
--table-row-background-hover: #c4e2fa; /*悬停时行背景颜色*/
--table-header-color: #000000; /*表头文本颜色*/
--table-text-color: #2b2b2b; /*文本颜色*/
}

.tableblue tbody {
--table-background: #d3ebff; /*背景颜色*/
--table-row-alt-background: #d0e6f8; /*交替行背景颜色*/
}

/*----------------------------------------------------------------------------------------------------*/

/*绿色*/
body .tablegreen {
--table-header-background: #a8da9f; /*表头背景颜色*/
--table-header-background-hover: #f1ffe8; /*表头悬停背景颜色*/
--table-row-background-hover: #f1ffe8; /*悬停时行背景颜色*/
--table-header-color: #000000; /*表头文本颜色*/
--table-text-color: #2b2b2b; /*文本颜色*/
}

.tablegreen tbody {
--table-background: #ffffff; /*背景颜色*/
--table-row-alt-background: #f4fcee; /*交替行背景颜色*/
}

/*----------------------------------------------------------------------------------------------------*/

/*紫色*/
body .tablepurple {
--table-header-background: #6f2895; /*表头背景颜色*/
--table-header-background-hover: #6f2895; /*表头悬停背景颜色*/
--table-header-color: #ffffff; /*表头文本颜色*/
--table-text-color: #f4f4f4; /*文本颜色*/
--table-row-background-hover: #aa6ccd; /*悬停时行背景颜色*/
}

.tablepurple tbody {
--table-background: #b07fcb; /*背景颜色*/
--table-row-alt-background: #934bbc; /*交替行背景颜色*/
}

/*----------------------------------------------------------------------------------------------------*/

/*橙色*/
body .tableorange {
--table-header-background: #ffaa56; /*表头背景颜色*/
--table-header-background-hover: #f6bb99; /*表头悬停背景颜色*/
--table-row-background-hover: #ebc1a8; /*悬停时行背景颜色*/
--table-header-border-color: #ffaa56; /*表头边框颜色*/
--table-border-color: #ffaa56; /*边框颜色*/
--table-header-color: #000000; /*表头文本颜色*/
--table-text-color: #2b2b2b; /*文本颜色*/
}

.tableorange tbody {
--table-background: #f8cbad; /*背景颜色*/
--table-row-alt-background: #fce4d6; /*交替行背景颜色*/
}

/*----------------------------------------------------------------------------------------------------*/

/*粉色*/
body .tablepink {
--table-header-background: #ffced6; /*表头背景颜色*/
--table-header-background-hover: #FFC0CB; /*表头悬停背景颜色*/
--table-row-background-hover: #ffdde1; /*悬停时行背景颜色*/
--table-header-color: #000000; /*表头文本颜色*/
--table-text-color: #2b2b2b; /*文本颜色*/
}

.tablepink tbody {
--table-background: #fce3e7; /*背景颜色*/
--table-row-alt-background: #fadee3; /*交替行背景颜色*/
}

/*----------------------------------------------------------------------------------------------------*/

/*棕色*/
body .tablebrown {
--table-header-background: #654634; /*表头背景颜色*/
--table-header-background-hover: #7f4e30; /*表头悬停背景颜色*/
--table-header-color: #ffffff; /*表头文本颜色*/
--table-text-color: #ededed; /*文本颜色*/
--table-row-background-hover: #7f4e30; /*悬停时行背景颜色*/
--table-header-border-width: 0; /*表头边框宽度*/
--table-border-width: 0; /*边框宽度*/
}

.tablebrown tbody {
--table-background: #7c543b; /*背景颜色*/
--table-row-alt-background: #79533c; /*交替行背景颜色*/

}

/*----------------------------------------------------------------------------------------------------*/

/*暗色*/
body .tabledark {
--table-header-background: #313131; /*表头背景颜色*/
--table-header-background-hover: #000000; /*表头悬停背景颜色*/
--table-header-color: #ffffff; /*表头文本颜色*/
--table-text-color: #ededed; /*文本颜色*/
--table-row-background-hover: #424242; /*悬停时行背景颜色*/
}

.tabledark tbody {
--table-background: #404040; /*背景颜色*/
--table-row-alt-background: #494949; /*交替行背景颜色*/
}
```