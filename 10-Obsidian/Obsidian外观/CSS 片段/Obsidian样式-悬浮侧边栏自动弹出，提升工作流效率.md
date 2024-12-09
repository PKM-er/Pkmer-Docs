---
uid: 20240413004724
title: Obsidian 样式 - 悬浮侧边栏自动弹出，提升工作流效率
tags: [侧边栏, CSS自定义]
description: 悬浮侧边栏自动弹出，提升工作流效率
author: 熊猫别熬夜
type: other
draft: false
editable: false
modified: 20240429001159
---

# Obsidian 样式 - 悬浮侧边栏自动弹出，提升工作流效率

## 简介

介绍一个 “悬浮侧边栏自动弹出” 的 CSS，它通过添加悬浮侧边栏和自动弹出功能。

自动悬浮两侧菜单栏的效果：

![2024-04-04_Obsidian样式-悬浮侧边栏自动弹出，提升工作流效率_IMG-1|900](https://cdn.pkmer.cn/images/202404130048634.gif!pkmer)

> [!tip] 可以根据命令菜单栏设置左右侧悬浮状态
> ![2024-04-04_Obsidian样式-悬浮侧边栏自动弹出，提升工作流效率_IMG-2](https://cdn.pkmer.cn/images/202404130048636.gif!pkmer)
> ![2024-04-04_Obsidian样式-悬浮侧边栏自动弹出，提升工作流效率_IMG-3](https://cdn.pkmer.cn/images/202404130048637.png!pkmer)

### 功能特点

1. **悬浮侧边栏**：该 CSS 添加了一个悬浮侧边栏，使用户可以随时访问常用的工具和功能，无需切换页面或使用键盘快捷键。
2. **自动弹出**：当用户进入 Obsidian 编辑器或切换到特定工作区时，悬浮侧边栏会自动弹出，节省了手动打开的步骤，提高了工作效率。
3. **可调整的透明度**：用户可以根据自己的喜好，调整悬浮侧边栏的透明度，以适应不同的背景和阅读环境。
4. **简洁的界面设计**：悬浮侧边栏采用简洁的设计风格，使用户集中注意力于内容创作，减少干扰。

## Style Setting 设置

![2024-04-04_Obsidian样式-悬浮侧边栏自动弹出，提升工作流效率_IMG-4](https://cdn.pkmer.cn/images/202404130048638.png!pkmer)

- 左侧菜单栏的样式规则定义了菜单栏的位置、宽度、高度、透明度等属性。当悬浮开关处于激活状态时，菜单栏会悬浮在左侧并显示出来。
- 右侧菜单栏的样式规则定义了菜单栏的位置、宽度、高度、透明度等属性。当悬浮开关处于激活状态时，菜单栏会悬浮在右侧并显示出来。
- 样式中还包含了一些元素的添加规则，如在左侧菜单栏和右侧菜单栏上添加了一个带有特定样式的元素。

## CSS 源码

```css
/* @settings
name: 【界面-Tab】自动悬浮两侧菜单栏
id: 【界面-Tab】自动悬浮两侧菜单栏
settings:
-
	id: 左侧菜单栏设置
	title: 左侧菜单栏设置
	type: heading
	level: 2
	collapsed: true
-
	id: left-tab-float-choice
	title: 左侧菜单栏悬浮开关
	type: class-toggle
	addCommand: true
	default: true
-
	id: tab-right-length
	title: 调整左侧菜单距离
	type: variable-text
	default: 44px
-
	id: left-tab-opacity
	title: 左侧菜单栏的不透明度
	type: variable-number-slider
	default: 1
	format: 
	min: 0.2
	max: 1
	step: 0.01
-
	id: 右侧菜单栏设置
	title: 右侧菜单栏设置
	type: heading
	level: 2
	collapsed: true
-
	id: right-tab-float-choice
	title: 右侧菜单栏悬浮开关
	type: class-toggle
	addCommand: true
	default: true
-
	id: right-tab-opacity
	title: 右侧菜单栏的不透明度
	type: variable-number-slider
	default: 1
	format: 
	min: 0.2
	max: 1
	step: 0.01
-
	id: 悬浮菜单栏设置
	title: 悬浮菜单栏设置
	type: heading
	level: 2
	collapsed: true
-
	id: tab-top-height
	title: 菜单栏距离顶部高度
	type: variable-text
	default: 80px
-
	id: tab-bottom-height
	title: 菜单栏距离顶部底部
	type: variable-text
	default: 25px

*/

body {
	--tab-top-height: 80px;
	--tab-right-length: 44px;
	--left-tab-opacity: 1;
	--right-tab-opacity: 1;
	--tab-bottom-height: 25px;
	--tab-hight: calc(100% - var(--tab-top-height) - var(--tab-bottom-height));
}
/* 悬浮设置参考：[Obsidian 样式 - 实现 TiddlyWiki 故事河]( https://pkmer.cn/show/20230904215512 )
 */
/* !左侧菜单栏 */
.left-tab-float-choice .workspace-split.mod-horizontal.mod-left-split {
	position: fixed;
	display: flex;
	width: 280px;
	top: var(--tab-top-height);
	height: var(--tab-hight);
	margin: 0;
	transform: translateX(calc(-100% + var(--tab-right-length))) translateZ(0px);
	transition: transform .6s;
	transition-delay: 0.8s;
	opacity: var(--left-tab-opacity);
	z-index: 2;
}

.left-tab-float-choice .workspace-split.mod-left-split>.workspace-leaf-resize-handle {
	border-right-style: unset;
	border-right-width: unset;
}

.left-tab-float-choice .workspace-split.mod-horizontal.mod-left-split:hover,
.left-tab-float-choice .workspace-split.mod-horizontal.mod-left-split:focus-within,
body.is-grabbing:is(.left-tab-float-choice) .workspace-split.mod-horizontal.mod-left-split {
	overflow: visible;
	transform: translateX(var(--tab-right-length)) translateZ(0px);
	transition: transform .6s;
}

/* 添加元素 */
.left-tab-float-choice .workspace-split.mod-horizontal.mod-left-split::before {
	content: "";
	text-align: end !important;
	background-color: var(--divider-color);
	position: absolute;
	display: flex;
	width: 12px;
	height: calc(var(--tab-hight) / 2);
	top: calc((var(--tab-hight) / 4 + var(--tab-top-height)));
	right: -12px;
	border-top-right-radius: var(--input-radius);
	border-bottom-right-radius: var(--input-radius);
	box-shadow: var(--shadow-s);
	opacity: 0.9;
}

/* !右侧侧边栏 */
.right-tab-float-choice .workspace-split.mod-horizontal.mod-right-split {
	position: fixed;
	display: flex;
	top: var(--tab-top-height);
	right: 1px;
	height: var(--tab-hight);
	margin: 0;
	opacity: var(--right-tab-opacity);
	transform: translateX(100%) translateZ(0px);
	transition: transform .6s;
	transition-delay: 0.8s;
	opacity: var(--right-tab-opacity);
	z-index: 2;
}

.right-tab-float-choice .workspace-split.mod-right-split>.workspace-leaf-resize-handle {
	border-right-style: unset;
	border-right-width: unset;
}

/* 拖拽悬浮展开设置参考：[Obsidian 样式 - 隐藏右侧标签页标题]( https://pkmer.cn/show/20240323141728 )
 */
.right-tab-float-choice .workspace-split.mod-horizontal.mod-right-split:hover,
.right-tab-float-choice .workspace-split.mod-horizontal.mod-right-split:focus-within,
body.is-grabbing:is(.right-tab-float-choice) .workspace-split.mod-horizontal.mod-right-split {
	overflow: visible;
	transform: translateX(0px) translateZ(0px) !important;
	transition: transform .6s;
}

/* 添加元素 */
.right-tab-float-choice .workspace-split.mod-horizontal.mod-right-split::before {
	content: "";
	text-align: end !important;
	background-color: var(--divider-color);
	position: absolute;
	display: flex;
	width: 12px;
	height: calc(var(--tab-hight) / 2);
	top: calc((var(--tab-hight) / 4 + var(--tab-top-height)));
	left: -12px;
	border-top-left-radius: var(--input-radius);
	border-bottom-left-radius: var(--input-radius);
	box-shadow: var(--shadow-s);
	opacity: 0.9;
}


/* ! 直接隐藏掉关闭和最小化按钮 */

/* 不显示最大最小化后，使那块区域可以双击及拖动 */
.mod-windows .titlebar-button,
.is-hidden-frameless:not(.is-fullscreen) .workspace-tabs.mod-top-right-space .workspace-tab-header-container:after {
	display: none;
}

/* 折叠触发按钮调整 */
.sidebar-toggle-button {
	display: block;
	position: absolute;
	right: 10px !important;
	z-index: 10;
}

/* 下拉菜单调整 */
.workspace-tab-header-tab-list {
	display: block;
	position: absolute;
	right: 50px !important;
	z-index: 10;
}

.mod-left-split .workspace-tab-header-tab-list,
.mod-right-split .workspace-tab-header-tab-list{
	display: none;
}
```

## Reference

- [[Obsidian样式-实现TiddlyWiki故事河]]
- [[Obsidian样式-隐藏右侧标签页标题]]
