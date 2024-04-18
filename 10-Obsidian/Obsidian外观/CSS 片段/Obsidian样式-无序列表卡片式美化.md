---
uid: 20240331011456
title: Obsidian 样式 - 无序列表卡片式美化
tags: [css, 无序列表]
description: Obsidian无序列表卡片式美化
author: 余月鱼鸽
type: other
draft: false
editable: false
modified: 20240419000017
---

# Obsidian 样式 - 无序列表卡片式美化

## 1.css 来源

群友 @上善若水 写的无序列表美化 css，本 css 具有以下特点 ：

1. **支持多种样式：** 本 css 主要针对 obsidian 的无序列表优化，主要有 3 种效果可以选择：**无序 - 单卡片视图** 、**无序 - 表格化阅览** 、 **无序 - 卡片化阅览**，具体效果图如下：![样式效果对比图](https://cdn.pkmer.cn/images/202403310117760.png!pkmer)
2. **可定制性强：** 支持使用 style setting 中根据自己的需要调整效果，同时支持在文章中使用：cssclass 控制特定文件的样式

## 2.基础参数说明

### 2.1. 视图模式选择：常态化模式

常态化模式：顾名思义，默认全库使用。常态化模式下共有 4 种模式。

**普通模式：** 这个模式下默认是 4 列具体效果以及使用到的测试文本如下：

![常态化普通模式](https://cdn.pkmer.cn/images/202403310117050.png!pkmer)

```text

- **常态化模式-普通模式** 
   - 普通模式1
     - 普通模式11
     - 普通模式12
     - 普通模式13
   - 普通模式2
     - 普通模式21
     - 普通模式22
   - 普通模式3
     - 普通模式31
        - 普通模式311
     - 普通模式32
   - 普通模式4
        - 普通模式41



```

**WP 模式：** 一般配合 waypoint 插件 以及 folder notes 插件联动使用。具体会【3.应用实例】中详细说明，这里先不进行展开

**移动端模式 - 单列、移动端模式 - 双列：** 可以为移动端设计的模式，仅显示为 1 列或者 2 列，可以根据需要可以根据需要选择。

### 2.2. 视图模式选择：cssclass 模式

**cssclass 模式**：灵活性较高的一种方式，只有在文件中添加对应的 cssclass 类别才会触发相应的效果。本 css 支持的 cssclass 类共包括以下几种：![cssclass样式汇总](https://cdn.pkmer.cn/images/202403310117253.png!pkmer) 上述表格也是用这个 css 制作的，具体源码模式为：

```text

- **无序列表美化 css所支持的 cssclasses 样式** 
    - **无序-单卡片视图：** 将无序列表卡片化（不嵌套）
    - **无序-表格化阅览：** 将无序列表表格化（不嵌套）
    - **无序-卡片化阅览：** 将无序列表卡片化（嵌套）
        - **无序-一列：** 无序列表二级开始变为1列
        - **无序-二列：** 无序列表二级开始变为2列
        - **无序-三列：** 无序列表二级开始变为3列
        - **无序-四列：** 无序列表二级开始变为4列
        - **无序-透明底色：** 将卡片化的无序列表背景全部设为透明
        - **无序-透明底色-1：** 将卡片化的无序列表1级背景全部设为透明
        - **无序-透明底色-2：** 将卡片化的无序列表2级背景全部设为透明
        - **无序-透明底色-3：** 将卡片化的无序列表3级背景全部设为透明
        - **无序-透明底色-4：** 将卡片化的无序列表4级背景全部设为透明


```

### 2.3. 一些配色效果参考

![调色参数](https://cdn.pkmer.cn/images/202403310117011.png!pkmer)

## 3.应用实例

### 3.1 和 waypoint、folder notes 插件配合管理文库的文件夹

这个用法是 @上善若水 设计这个 css 的初衷，大致的思路是：

1. 使用 folder notes 插件：[Obsidian 插件：Folder notes]( https://pkmer.cn/show/2023080322184310 ) 生成一个与文件名同名的 md 文件；
2. 使用 waypoint 插件：[Obsidian 插件：Waypoint]( https://pkmer.cn/show/2023080322292523 ) 快速实现，将文件夹中的所有文件链接到步骤 1 中所生成的文件；![waypoint用法截图](https://cdn.pkmer.cn/images/202403310117618.png!pkmer)
3. 使用本 css 的**WP 模式**对步骤 2 中生产的无序列表进行美化

### 3.2 四象限

![四象限](https://cdn.pkmer.cn/images/202403310117090.png!pkmer)

```text 

- 日程提要
     - 紧急不重要
        - 3级1
        - 3级2
        - 3级3
        - 3级4
     - 紧急且重要
        - 3级1
        - 3级2
        - 3级3
        - 3级4 
	 - 不紧急不重要
        - 3级1
        - 3级2
        - 3级3
        - 3级4 
	 - 不紧急但重要
        - 3级1
        - 3级2
        - 3级3
        - 3级4



```

### 3.3 图库（from 熊猫）

![用无序列表制作图库|800](https://cdn.pkmer.cn/images/202403310117345.gif!pkmer)

## 5.css 片段

```css
/* @settings
from: 上善若水
name:【无序List】卡片化阅览
id: wxlbMH
settings:
  -
    id: wxlbMH-STMS
    title: 视图模式选择
    type: class-select
    allowEmpty: false
    default: wxlbMH-STMS-cssclasses
    options:
      -
        label: cssclasses模式
        value: wxlbMH-STMS-cssclasses
      -
        label: 常态化模式
        value: wxlbMH-STMS-CTH
  -
    id: wxlbMH-list-CTH
    title: 【常态化模式设置】
    type: heading
    level: 1
    collapsed: true
  -
    id: wxlbMH-STMS-CTH
    title: 视图模式选择
    type: class-select
    allowEmpty: false
    default: wxlbMH-STMS-CTH-PT
    options:
      -
        label: 普通模式
        value: wxlbMH-STMS-CTH-PT
      -
        label: WP模式
        value: wxlbMH-STMS-CTH-WP
      -
        label: 移动端模式-单列
        value: wxlbMH-STMS-CTH-YD-1
      -
        label: 移动端模式-双列
        value: wxlbMH-STMS-CTH-YD-2
  - 
    id: wxlbMH-list-1-ZT-size-CTH
    title: 【字体】一级大小调整
    type: variable-number
    default: 14
    format: px
  -
    id: wxlbMH-list-2-ZT-size-CTH
    title: 【字体】二级大小调整
    type: variable-number
    default: 14
    format: px
  - 
    id: wxlbMH-list-3-ZT-size-CTH
    title: 【字体】三级大小调整
    type: variable-number
    default: 14
    format: px
  -
    id: wxlbMH-list-4-ZT-size-CTH
    title: 【字体】四级大小调整
    type: variable-number
    default: 14
    format: px
  -
    id: wxlbMH-list-1
    title: 【列表设置】一级
    type: heading
    level: 1
    collapsed: true
  - 
    id: wxlbMH-list-1-BK-color
    title: 【边框】颜色调整
    type: variable-themed-color
    default-light: '#'
    default-dark: '#'
    format: 'rgb-values'
  -
    id: wxlbMH-list-1-BJ-color
    title: 【背景】颜色调整
    type: variable-themed-color
    default-light: '#'
    default-dark: '#'
    format: 'rgb-values'
  -
    id: wxlbMH-list-1-ZT-color
    title: 【字体】颜色调整
    type: variable-themed-color
    default-light: '#'
    default-dark: '#'
    format: 'rgb-values'
  -
    id: wxlbMH-list-1-ZT-size
    title: 【字体】大小调整
    type: variable-number
    default: 18
    format: px
  -
    id: wxlbMH-list-2
    title: 【列表设置】二级
    type: heading
    level: 1
    collapsed: true
  - 
    id: wxlbMH-list-2-BK-color
    title: 【边框】颜色调整
    type: variable-themed-color
    default-light: '#'
    default-dark: '#'
    format: 'rgb-values'
  -
    id: wxlbMH-list-2-BJ-color
    title: 【背景】颜色调整
    type: variable-themed-color
    default-light: '#'
    default-dark: '#'
    format: 'rgb-values'
  -
    id: wxlbMH-list-2-ZT-color
    title: 【字体】颜色调整
    type: variable-themed-color
    default-light: '#'
    default-dark: '#'
    format: 'rgb-values'
  -
    id: wxlbMH-list-2-ZT-size
    title: 【字体】大小调整
    type: variable-number
    default: 15
    format: px
  -
    id: wxlbMH-list-3
    title: 【列表设置】三级
    type: heading
    level: 1
    collapsed: true
  - 
    id: wxlbMH-list-3-BK-color
    title: 【边框】颜色调整
    type: variable-themed-color
    default-light: '#'
    default-dark: '#'
    format: 'rgb-values'
  -
    id: wxlbMH-list-3-BJ-color
    title: 【背景】颜色调整
    type: variable-themed-color
    default-light: '#'
    default-dark: '#'
    format: 'rgb-values'
  -
    id: wxlbMH-list-3-ZT-color
    title: 【字体】颜色调整
    type: variable-themed-color
    default-light: '#'
    default-dark: '#'
    format: 'rgb-values'
  -
    id: wxlbMH-list-3-CM-color
    title: 【触摸】颜色调整
    type: variable-themed-color
    default-light: '#'
    default-dark: '#'
    format: 'rgb-values'
  -
    id: wxlbMH-list-3-ZT-size
    title: 【字体】大小调整
    type: variable-number
    default: 14
    format: px
  -
    id: wxlbMH-list-4
    title: 【列表设置】四级
    type: heading
    level: 1
    collapsed: true
  - 
    id: wxlbMH-list-4-BK-color
    title: 【边框】颜色调整
    type: variable-themed-color
    default-light: '#'
    default-dark: '#'
    format: 'rgb-values'
  -
    id: wxlbMH-list-4-BJ-color
    title: 【背景】颜色调整
    type: variable-themed-color
    default-light: '#'
    default-dark: '#'
    format: 'rgb-values'
  -
    id: wxlbMH-list-4-ZT-color
    title: 【字体】颜色调整
    type: variable-themed-color
    default-light: '#'
    default-dark: '#'
    format: 'rgb-values'
  -
    id: wxlbMH-list-4-CM-color
    title: 【触摸】颜色调整
    type: variable-themed-color
    default-light: '#'
    default-dark: '#'
    format: 'rgb-values'
  -
    id: wxlbMH-list-4-ZT-size
    title: 【字体】大小调整
    type: variable-number
    default: 14
    format: px
  -
    id: wxlbMH-list-cards
    title: 无序-单卡片视图
    type: heading
    level: 1
    collapsed: true
  - 
		id: cards-min-width
		title: 卡片最小宽度
		type: variable-text
		default: 180px
	-
		id: cards-max-width
		title: 卡片最大宽度
		description: 默认填充可用宽度，接受有效的CSS单位
		type: variable-text
		default: 1fr
	-
		id: cards-mobile-width
		title: 移动设备上卡片最小宽度
		type: variable-text
		default: 120px
	-
		id: cards-padding
		title: 卡片内边距
		type: variable-text
		default: 1.2em
	-
		id: cards-image-height
		title: 卡片最大图片高度
		type: variable-text
		default: 400px
	-
		id: cards-border-width
		title: 卡片边框宽度
		type: variable-text
		default: 1px
	- 
*/

/*一级列表-排版处理*/
.无序-卡片化阅览:is(.markdown-preview-view) ul {
  text-align: center;
  padding: 0rem;
}
/*一级列表-排版与底色处理*/
.无序-卡片化阅览:is(.markdown-preview-view) ul {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 0.5rem;
}

/*二级列表-排版*/
.无序-卡片化阅览:is(.markdown-preview-view) ul ul {
  display: flex;
  flex-direction: row;
  padding: 0rem;
  flex-wrap: wrap;
  margin: 0.1em 0.5em 0em 0.5em;
  justify-content: center;
  align-items: flex-start;
  align-content: center;
}
.无序-卡片化阅览:is(.markdown-preview-view) ul ul ul {
  display: flex;
  flex-direction: row;
  padding: 0rem;
  flex-wrap: wrap;
  margin: 0.2em 0em 0.1em 0.3em;
  justify-content: center;
  align-items: flex-start;
  align-content: center;
}
/*四级列表-排版*/
.无序-卡片化阅览:is(.markdown-preview-view) ul ul ul ul {
  flex-direction: row;
  margin: 0.2em 0em 0.1em 0.3em;
}

.无序-卡片化阅览:is(.markdown-preview-view) .markdown-rendered .internal-link {
  text-decoration-line: none;
}


/*一级列表-排版与底色处理*/
.无序-卡片化阅览:is(.markdown-preview-view) ul li:not(.task-list-item) {
  justify-content: center;
  align-items: center;
  text-align: center;
  border-radius: 10pt;
  margin: 0em 0em 1.5em 0em;
}

/*cssclasses模式-列表排版*/
.无序-卡片化阅览:is(.markdown-preview-view) ul>li:not(.task-list-item) {
  flex: 1 1 100%;
}
.无序-卡片化阅览:is(.markdown-preview-view) ul ul ul>li:not(.task-list-item) {
  flex: 1 1 20%;
}
.无序-卡片化阅览:is(.markdown-preview-view) ul ul ul ul>li:not(.task-list-item) {
  flex: 1 1 100%;
}

/*二级列表-内容排版处理*/
.无序-卡片化阅览:is(.markdown-preview-view) ul ul>li:not(.task-list-item) {
  margin: 0.2em 0.5em 0.5em 0.5em;
  list-style: none;
  word-wrap: break-word;
  word-break: break-word;
  justify-content: center;
  align-items: center;
}

/*三级列表-排版处理*/
.无序-卡片化阅览:is(.markdown-preview-view) ul ul ul>li:not(.task-list-item) {
  margin: 0.2em 0.5em 0.5em 0.2em;
  list-style: none;
  word-wrap: break-word;
  word-break: break-word;
  justify-content: center;
  align-items: center;
}

/*三级列表-排版处理*/
.无序-卡片化阅览:is(.markdown-preview-view) ul ul ul ul>li:not(.task-list-item) {
  margin: 0.2em 0.5em 0.5em 0.2em;
  list-style: none;
  word-wrap: break-word;
  word-break: break-word;
  justify-content: center;
  align-items: center;
}
/*处理折叠*/
.无序-卡片化阅览:is(.markdown-preview-view) .is-collapsed ul {
  display: none;
}
/*列表-模式选择-列数选择*/
.无序-卡片化阅览:is(.markdown-preview-view).无序-四列 ul>li:not(.task-list-item) {
  flex: 1 1 20% !important;
}
.无序-卡片化阅览:is(.markdown-preview-view).无序-四列 ul ul ul>li:not(.task-list-item) {
  flex: 1 1 100% !important;
}
.无序-卡片化阅览:is(.markdown-preview-view).无序-三列 ul>li:not(.task-list-item) {
  flex: 1 1 30% !important;
}
.无序-卡片化阅览:is(.markdown-preview-view).无序-三列 ul ul ul>li:not(.task-list-item) {
  flex: 1 1 100% !important;
}
.无序-卡片化阅览:is(.markdown-preview-view).无序-二列 ul>li:not(.task-list-item) {
  flex: 1 1 40% !important;
}
.无序-卡片化阅览:is(.markdown-preview-view).无序-二列 ul ul ul>li:not(.task-list-item) {
  flex: 1 1 100% !important;
}
.无序-卡片化阅览:is(.markdown-preview-view).无序-一列 ul>li:not(.task-list-item) {
  flex: 1 1 100% !important;
}
.无序-卡片化阅览:is(.markdown-preview-view).无序-一列 ul ul ul>li:not(.task-list-item) {
  flex: 1 1 20% !important;
}
.无序-卡片化阅览:is(.markdown-preview-view).无序-一列 ul ul ul ul>li:not(.task-list-item) {
  flex: 1 1 100% !important;
}
/*列表-边框与背景底色处理*/

  /*一级列表*/
  body.theme-light .无序-卡片化阅览:is(.markdown-preview-view) ul>li:not(.task-list-item) {
    background-color: rgba(var(--wxlbMH-list-1-BJ-color,210, 210, 200,1));
    box-shadow: rgba(var(--wxlbMH-list-1-BK-color,15, 15, 15, 0.3)) 0px 0px 4px 1px, rgba(15, 15, 15, 0.2) 0px 0px 0px 2px;
  }
  body.theme-dark .无序-卡片化阅览:is(.markdown-preview-view) ul>li:not(.task-list-item) {
    background-color: rgba(var(--wxlbMH-list-1-BJ-color,46, 61, 95,1));
    box-shadow: rgba(var(--wxlbMH-list-1-BK-color,15, 15, 15, 1)) 0px 0px 0px 3px;
  }
  /*二级列表*/
  body.theme-light .无序-卡片化阅览:is(.markdown-preview-view) ul ul>li:not(.task-list-item) {
    background-color: rgba(var(--wxlbMH-list-2-BJ-color,239, 240, 242,1));
    box-shadow: rgba(var(--wxlbMH-list-2-BK-color,15, 15, 15, 0.4)) 0px 0px 2px 1px, rgba(15, 15, 15, 0.4) 0px 0px 0px 2px;
    border-radius: 2pt;
  }
  body.theme-dark .无序-卡片化阅览:is(.markdown-preview-view) ul ul>li:not(.task-list-item) {
    background-color: rgba(var(--wxlbMH-list-2-BJ-color,26, 39, 69, 1));
    box-shadow: rgba(var(--wxlbMH-list-2-BK-color,15, 15, 15, 1)) 0px 0px 0px 2px;
    border-radius: 2pt;
  }
  /*三级列表*/
  body.theme-light .无序-卡片化阅览:is(.markdown-preview-view) ul ul ul>li:not(.task-list-item) {
    background-color: rgba(var(--wxlbMH-list-3-BJ-color,231, 234, 247,1));
    box-shadow: rgba(var(--wxlbMH-list-3-BK-color,15, 15, 15, 0.5)) 0px 0px 0px 2px;
  }
  body.theme-dark .无序-卡片化阅览:is(.markdown-preview-view) ul ul ul>li:not(.task-list-item) {
    background-color: rgba(var(--wxlbMH-list-3-BJ-color,59, 83, 248,0.5));
    box-shadow: rgba(var(--wxlbMH-list-3-BK-color,15, 15, 15, 1)) 0px 0px 4px 1px, rgba(15, 15, 15, 1) 0px 0px 0px 1px;
  }
  /*四级列表*/
  body.theme-light .无序-卡片化阅览:is(.markdown-preview-view) ul ul ul ul>li:not(.task-list-item) {
    background-color: rgba(var(--wxlbMH-list-4-BJ-color,201, 204, 217,1));
    box-shadow: rgba(var(--wxlbMH-list-3-BK-color,15, 15, 15, 0.8)) 0px 0px 2px 1px;
  }
  body.theme-dark .无序-卡片化阅览:is(.markdown-preview-view) ul ul ul ul>li:not(.task-list-item) {
    background-color: rgba(var(--wxlbMH-list-4-BJ-color,33, 33, 33,0.5));
    box-shadow: rgba(var(--wxlbMH-list-4-BK-color,15, 15, 15, 1)) 0px 0px 4px 1px, rgba(15, 15, 15, 1) 0px 0px 0px 1px;
  }

/*处理顶部导航多出来的点*/
.无序-卡片化阅览:is(.markdown-preview-view) .list-bullet{
  display: none !important;
}

/*处理顶部导航多出来的线*/
.无序-卡片化阅览:is(.markdown-preview-view).markdown-rendered.show-indentation-guide li > ul::before,.无序-卡片化阅览:is(.markdown-preview-view).markdown-rendered.show-indentation-guide li > ol::before {
  content: unset;
}

/*触摸颜色*/
  /*
  body.theme-light .无序-卡片化阅览:is(.markdown-preview-view) ul li:hover {
    background: rgba(var(--wxlbMH-list-2-CM-color,204, 178, 31, 0.279));
    transition-duration:300ms;
  }
  */
  /*
  body.theme-light .无序-卡片化阅览:is(.markdown-preview-view) ul ul li:hover {
    background: rgba(var(--wxlbMH-list-2-CM-color,204, 178, 31, 0.279));
    transition-duration:200ms;
  }
  */
  body.theme-light .无序-卡片化阅览:is(.markdown-preview-view) ul ul ul li:hover {
    background: rgba(var(--wxlbMH-list-3-CM-color,100, 178, 100, 0.279));
    transition-duration:200ms;
  }
  body.theme-light .无序-卡片化阅览:is(.markdown-preview-view) ul ul ul ul li:hover {
    background: rgba(var(--wxlbMH-list-4-CM-color,100, 178, 100, 0.5));
    transition-duration:200ms;
  }
  /*
  body.theme-dark .无序-卡片化阅览:is(.markdown-preview-view) ul li:hover {
    background: rgba(var(--wxlbMH-list-2-CM-color,0, 82, 72, 1));
    transition-duration:300ms;
  }
  */
  /*
  body.theme-dark .无序-卡片化阅览:is(.markdown-preview-view) ul ul li:hover {
    background: rgba(var(--wxlbMH-list-2-CM-color,88, 7, 7,1));
    transition-duration:200ms;
  }
  */
  body.theme-dark .无序-卡片化阅览:is(.markdown-preview-view) ul ul ul li:hover {
    background: rgba(var(--wxlbMH-list-3-CM-color,59, 83, 248,1));
    transition-duration:200ms;
  }
  body.theme-dark .无序-卡片化阅览:is(.markdown-preview-view) ul ul ul ul li:hover {
    background: rgba(var(--wxlbMH-list-4-CM-color,33, 33, 33,0.9));
    transition-duration:200ms;
  }
  
/*处理折叠箭头距离*/
  .markdown-rendered .list-collapse-indicator {
    margin-inline-start: -1em;
    padding-inline-end: 2em;
  }

/*字体颜色与大小*/
  /*一级列表*/
  body.theme-light .无序-卡片化阅览:is(.markdown-preview-view) ul li:not(.task-list-item) {
    font-size:var(--wxlbMH-list-1-ZT-size,18px)!important;
    color: rgba(var(--wxlbMH-list-1-ZT-color,28,28,28,1));
  }
  body.theme-dark .无序-卡片化阅览:is(.markdown-preview-view) ul li:not(.task-list-item) {
    font-size:var(--wxlbMH-list-1-ZT-size,18px)!important;
    color: rgba(var(--wxlbMH-list-1-ZT-color,146,198,253,1));
  }
    /*二级列表*/
  body.theme-light .无序-卡片化阅览:is(.markdown-preview-view) ul ul>li:not(.task-list-item) {
    font-size:var(--wxlbMH-list-2-ZT-size,15px)!important;
    color: rgba(var(--wxlbMH-list-2-ZT-color,28,28,28,1));
  }
  body.theme-dark .无序-卡片化阅览:is(.markdown-preview-view) ul ul>li:not(.task-list-item) {
    font-size:var(--wxlbMH-list-2-ZT-size,15px)!important;
    color: rgba(var(--wxlbMH-list-2-ZT-color,198,208,245,1));
  }
  /*三级列表*/
  body.theme-light .无序-卡片化阅览:is(.markdown-preview-view) ul ul ul>li:not(.task-list-item) {
    font-size:var(--wxlbMH-list-3-ZT-size,14px)!important;
    color: rgba(var(--wxlbMH-list-3-ZT-color,28,28,28,1));
  }
  body.theme-dark .无序-卡片化阅览:is(.markdown-preview-view) ul ul ul>li:not(.task-list-item) {
    font-size:var(--wxlbMH-list-3-ZT-size,14px)!important;
    color: rgba(var(--wxlbMH-list-3-ZT-color,198,208,245,1));
  }
  /*四级列表*/
  body.theme-light .无序-卡片化阅览:is(.markdown-preview-view) ul ul ul ul>li:not(.task-list-item) {
    font-size:var(--wxlbMH-list-4-ZT-size,14px)!important;
    color: rgba(var(--wxlbMH-list-4-ZT-color,28,28,28,1));
  }
  body.theme-dark .无序-卡片化阅览:is(.markdown-preview-view) ul ul ul ul>li:not(.task-list-item) {
    font-size:var(--wxlbMH-list-4-ZT-size,14px)!important;
    color: rgba(var(--wxlbMH-list-4-ZT-color,198,208,245,1));
  }
/*底色模式选择*/

.无序-卡片化阅览:is(.markdown-preview-view).无序-透明底色 ul li:not(.task-list-item) {
  background-color: transparent !important;
}
.无序-卡片化阅览:is(.markdown-preview-view).无序-透明底色-1 ul li:not(.task-list-item) {
  --wxlbMH-list-1-BJ-color: transparent !important;
}
.无序-卡片化阅览:is(.markdown-preview-view).无序-透明底色-2 ul ul li:not(.task-list-item) {
  --wxlbMH-list-2-BJ-color: transparent !important;
}
.无序-卡片化阅览:is(.markdown-preview-view).无序-透明底色-3 ul ul ul li:not(.task-list-item) {
  --wxlbMH-list-3-BJ-color: transparent !important;
}
.无序-卡片化阅览:is(.markdown-preview-view).无序-透明底色-4 ul ul ul ul li:not(.task-list-item) {
  --wxlbMH-list-4-BJ-color: transparent !important;
}



/*常态化模式*/
/*一级列表-排版处理*/
body.wxlbMH-STMS-CTH .markdown-preview-view ul {
  text-align: center;
  padding: 0rem;
}
/*一级列表-排版与底色处理*/
body.wxlbMH-STMS-CTH .markdown-preview-view ul {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 0.5rem;
}

/*二级列表-排版*/
body.wxlbMH-STMS-CTH .markdown-preview-view ul ul {
  display: flex;
  flex-direction: row;
  padding: 0rem;
  flex-wrap: wrap;
  margin: 0.1em 0.5em 0em 0.5em;
  justify-content: center;
  align-items: flex-start;
  align-content: center;
}
body.wxlbMH-STMS-CTH .markdown-preview-view ul ul ul {
  display: flex;
  flex-direction: row;
  padding: 0rem;
  flex-wrap: wrap;
  margin: 0.2em 0em 0.1em 0.3em;
  justify-content: center;
  align-items: flex-start;
  align-content: center;
}
/*四级列表-排版*/
body.wxlbMH-STMS-CTH .markdown-preview-view ul ul ul ul {
  flex-direction: row;
  margin: 0.2em 0em 0.1em 0.3em;
}

body.wxlbMH-STMS-CTH .markdown-rendered .internal-link {
  text-decoration-line: none;
}

/*一级列表-排版与底色处理*/
body.wxlbMH-STMS-CTH .markdown-preview-view ul li:not(.task-list-item) {
  justify-content: center;
  align-items: center;
  text-align: center;
  border-radius: 10pt;
  margin: 0em 0em 1.5em 0em;
}

/*二级列表-内容排版处理*/
body.wxlbMH-STMS-CTH .markdown-preview-view ul ul>li:not(.task-list-item) {
  margin: 0.2em 0.5em 0.5em 0.5em;
  list-style: none;
  word-wrap: break-word;
  word-break: break-word;
  justify-content: center;
  align-items: center;
}

/*三级列表-排版处理*/
body.wxlbMH-STMS-CTH .markdown-preview-view ul ul ul>li:not(.task-list-item) {
  margin: 0.2em 0.5em 0.5em 0.2em;
  list-style: none;
  word-wrap: break-word;
  word-break: break-word;
  justify-content: center;
  align-items: center;
}

/*三级列表-排版处理*/
body.wxlbMH-STMS-CTH .markdown-preview-view ul ul ul ul>li:not(.task-list-item) {
  margin: 0.2em 0.5em 0.5em 0.2em;
  list-style: none;
  word-wrap: break-word;
  word-break: break-word;
  justify-content: center;
  align-items: center;
}

/*列表-边框与背景底色处理*/

/*一级列表*/
body.theme-light.wxlbMH-STMS-CTH .markdown-preview-view ul>li:not(.task-list-item) {
  background-color: rgba(var(--wxlbMH-list-1-BJ-color,210, 210, 200,1));
  box-shadow: rgba(var(--wxlbMH-list-1-BK-color,15, 15, 15, 0.3)) 0px 0px 4px 1px, rgba(15, 15, 15, 0.2) 0px 0px 0px 2px;
}
body.theme-dark.wxlbMH-STMS-CTH .markdown-preview-view ul>li:not(.task-list-item) {
  background-color: rgba(var(--wxlbMH-list-1-BJ-color,46, 61, 95,1));
  box-shadow: rgba(var(--wxlbMH-list-1-BK-color,15, 15, 15, 1)) 0px 0px 0px 3px;
}
/*二级列表*/
body.theme-light.wxlbMH-STMS-CTH .markdown-preview-view ul ul>li:not(.task-list-item) {
  background-color: rgba(var(--wxlbMH-list-2-BJ-color,239, 240, 242,1));
  box-shadow: rgba(var(--wxlbMH-list-2-BK-color,15, 15, 15, 0.4)) 0px 0px 2px 1px, rgba(15, 15, 15, 0.4) 0px 0px 0px 2px;
  border-radius: 2pt;
}
body.theme-dark.wxlbMH-STMS-CTH .markdown-preview-view ul ul>li:not(.task-list-item) {
  background-color: rgba(var(--wxlbMH-list-2-BJ-color,26, 39, 69, 1));
  box-shadow: rgba(var(--wxlbMH-list-2-BK-color,15, 15, 15, 1)) 0px 0px 0px 2px;
  border-radius: 2pt;
}
/*三级列表*/
body.theme-light.wxlbMH-STMS-CTH .markdown-preview-view ul ul ul>li:not(.task-list-item) {
  background-color: rgba(var(--wxlbMH-list-3-BJ-color,231, 234, 247,1));
  box-shadow: rgba(var(--wxlbMH-list-3-BK-color,15, 15, 15, 0.5)) 0px 0px 0px 2px;
}
body.theme-dark.wxlbMH-STMS-CTH .markdown-preview-view ul ul ul>li:not(.task-list-item) {
  background-color: rgba(var(--wxlbMH-list-3-BJ-color,59, 83, 248,0.5));
  box-shadow: rgba(var(--wxlbMH-list-3-BK-color,15, 15, 15, 1)) 0px 0px 4px 1px, rgba(15, 15, 15, 1) 0px 0px 0px 1px;
}
/*四级列表*/
body.theme-light.wxlbMH-STMS-CTH .markdown-preview-view ul ul ul ul>li:not(.task-list-item) {
  background-color: rgba(var(--wxlbMH-list-4-BJ-color,201, 204, 217,1));
  box-shadow: rgba(var(--wxlbMH-list-3-BK-color,15, 15, 15, 0.8)) 0px 0px 2px 1px;
}
body.theme-dark.wxlbMH-STMS-CTH .markdown-preview-view ul ul ul ul>li:not(.task-list-item) {
  background-color: rgba(var(--wxlbMH-list-4-BJ-color,33, 33, 33,0.5));
  box-shadow: rgba(var(--wxlbMH-list-4-BK-color,15, 15, 15, 1)) 0px 0px 4px 1px, rgba(15, 15, 15, 1) 0px 0px 0px 1px;
}

/*处理顶部导航多出来的点*/
body.wxlbMH-STMS-CTH  .markdown-preview-view .list-bullet{
  display: none !important;
}

/*处理折叠*/
body.wxlbMH-STMS-CTH .markdown-preview-view .is-collapsed ul {
  display: none;
}

/*处理顶部导航多出来的线*/
body.wxlbMH-STMS-CTH .markdown-rendered.show-indentation-guide li > ul::before,body.wxlbMH-STMS-CTH .markdown-rendered.show-indentation-guide li > ol::before {
  content: unset;
}
/*触摸颜色*/
body.theme-light.wxlbMH-STMS-CTH .markdown-preview-view ul ul ul li:hover {
  background: rgba(var(--wxlbMH-list-3-CM-color,100, 178, 100, 0.279));
  transition-duration:200ms;
} 
body.theme-light.wxlbMH-STMS-CTH .markdown-preview-view ul ul ul ul li:hover {
  background: rgba(var(--wxlbMH-list-3-CM-color,100, 178, 100, 0.5));
  transition-duration:200ms;
}
body.theme-dark.wxlbMH-STMS-CTH .markdown-preview-view ul ul ul li:hover {
  background: rgba(var(--wxlbMH-list-3-CM-color,59, 83, 248,1));
  transition-duration:200ms;
}
body.theme-dark.wxlbMH-STMS-CTH .markdown-preview-view ul ul ul ul li:hover {
  background: rgba(var(--wxlbMH-list-3-CM-color,33, 33, 33,0.9));
  transition-duration:200ms;
}

/*处理折叠箭头距离*/
body.wxlbMH-STMS-CTH .markdown-rendered .list-collapse-indicator {
  margin-inline-start: -1em;
  padding-inline-end: 2em;
}
/*字体颜色与大小*/
/*一级列表*/
body.theme-light.wxlbMH-STMS-CTH .markdown-preview-view ul li:not(.task-list-item) {
  font-size:var(--wxlbMH-list-1-ZT-size-CTH,14px);
  color: rgba(var(--wxlbMH-list-1-ZT-color,28,28,28,1));
}
body.theme-dark.wxlbMH-STMS-CTH .markdown-preview-view ul li:not(.task-list-item) {
  font-size:var(--wxlbMH-list-1-ZT-size-CTH,14px);
  color: rgba(var(--wxlbMH-list-1-ZT-color,146,198,253,1));
}
/*二级列表*/
body.theme-light.wxlbMH-STMS-CTH .markdown-preview-view ul ul>li:not(.task-list-item) {
  font-size:var(--wxlbMH-list-2-ZT-size-CTH,14px);
  color: rgba(var(--wxlbMH-list-2-ZT-color,28,28,28,1));
}
body.theme-dark.wxlbMH-STMS-CTH .markdown-preview-view ul ul>li:not(.task-list-item) {
  font-size:var(--wxlbMH-list-2-ZT-size-CTH,14px);
  color: rgba(var(--wxlbMH-list-2-ZT-color,198,208,245,1));
}
/*三级列表*/
body.theme-light.wxlbMH-STMS-CTH .markdown-preview-view ul ul ul>li:not(.task-list-item) {
  font-size:var(--wxlbMH-list-3-ZT-size-CTH,14px);
  color: rgba(var(--wxlbMH-list-3-ZT-color,28,28,28,1));
}
body.theme-dark.wxlbMH-STMS-CTH .markdown-preview-view ul ul ul>li:not(.task-list-item) {
  font-size:var(--wxlbMH-list-3-ZT-size-CTH,14px);
  color: rgba(var(--wxlbMH-list-3-ZT-color,198,208,245,1));
}
/*四级列表*/
body.theme-light.wxlbMH-STMS-CTH .markdown-preview-view ul ul ul ul>li:not(.task-list-item) {
  font-size:var(--wxlbMH-list-4-ZT-size-CTH,14px);
  color: rgba(var(--wxlbMH-list-4-ZT-color,28,28,28,1));
}
body.theme-dark.wxlbMH-STMS-CTH .markdown-preview-view ul ul ul ul>li:not(.task-list-item) {
  font-size:var(--wxlbMH-list-4-ZT-size-CTH,14px);
  color: rgba(var(--wxlbMH-list-4-ZT-color,198,208,245,1));
}

/*普通模式*/
body.wxlbMH-STMS-CTH.wxlbMH-STMS-CTH-PT ul>li:not(.task-list-item) {
  flex: 1 1 20%;
}
body.wxlbMH-STMS-CTH.wxlbMH-STMS-CTH-PT ul ul ul>li:not(.task-list-item) {
  flex: 1 1 100%;
}
/*WP模式*/
body.wxlbMH-STMS-CTH.wxlbMH-STMS-CTH-WP ul>li:not(.task-list-item) {
  flex: 1 1 100%;
}
body.wxlbMH-STMS-CTH.wxlbMH-STMS-CTH-WP ul ul ul>li:not(.task-list-item) {
  flex: 1 1 20%;
}
body.wxlbMH-STMS-CTH.wxlbMH-STMS-CTH-WP ul ul ul ul>li:not(.task-list-item) {
  flex: 1 1 100%;
}
/*移动端模式-单列*/
body.wxlbMH-STMS-CTH.wxlbMH-STMS-CTH-YD-1 ul>li:not(.task-list-item) {
  flex: 1 1 100%;
}
body.wxlbMH-STMS-CTH.wxlbMH-STMS-CTH-YD-1 ul ul ul>li:not(.task-list-item) {
  flex: 1 1 100%;
}
body.wxlbMH-STMS-CTH.wxlbMH-STMS-CTH-YD-1 ul ul ul ul>li:not(.task-list-item) {
  flex: 1 1 100%;
}
/*移动端模式-双列*/
body.wxlbMH-STMS-CTH.wxlbMH-STMS-CTH-YD-2 ul>li:not(.task-list-item) {
  flex: 1 1 40%;
}
body.wxlbMH-STMS-CTH.wxlbMH-STMS-CTH-YD-2 ul ul ul>li:not(.task-list-item) {
  flex: 1 1 100%;
}
body.wxlbMH-STMS-CTH.wxlbMH-STMS-CTH-YD-2 ul ul ul ul>li:not(.task-list-item) {
  flex: 1 1 100%;
}


/*无序-.无序-单卡片视图*/
body {
  --cards-min-width: 180px;
  --cards-max-width: 1fr;
  --cards-mobile-width: 120px;
  --cards-image-height: 400px;
  --cards-padding: 1.2em;
  --cards-image-fit: contain;
  --cards-background: transparent;
  --cards-border-width: 1px;
  --cards-aspect-ratio: auto;
  --cards-columns: repeat(
    auto-fit,
    minmax(var(--cards-min-width), var(--cards-max-width))
  );
}

/*消除点*/
.无序-单卡片视图.markdown-preview-view .list-bullet,
.无序-单卡片视图.markdown-preview-view .list-collapse-indicator,
.无序-单卡片视图.markdown-preview-view.markdown-rendered.show-indentation-guide
  li
  > ul::before {
  display: none !important;
}

/*第一列.无序-单卡片视图*/
.无序-单卡片视图.markdown-preview-view div > ul {
  display: grid!important;
  gap: 0.75rem!important;
  grid-template-columns: var(--cards-columns)!important;
  padding: 0!important;
  line-height: var(--line-height-tight)!important;
}

/*单卡片边框*/
.无序-单卡片视图.markdown-preview-view div > ul > li {
  padding: calc(var(--cards-padding) / 2)!important;
  border-radius: var(--radius-s)!important;
  overflow: hidden!important;
}
body.theme-light .无序-单卡片视图.markdown-preview-view div > ul > li {
  background-color: rgba(var(--wxlbMH-list-1-BJ-color,210, 210, 200,1))!important;
  box-shadow: rgba(var(--wxlbMH-list-1-BK-color,15, 15, 15, 0.3)) 0px 0px 4px 1px, rgba(15, 15, 15, 0.2) 0px 0px 0px 2px!important;
}
body.theme-dark .无序-单卡片视图.markdown-preview-view div > ul > li {
  background-color: rgba(var(--wxlbMH-list-1-BJ-color,46, 61, 95,1))!important;
  box-shadow: rgba(var(--wxlbMH-list-1-BK-color,15, 15, 15, 1)) 0px 0px 0px 3px!important;
}


.无序-单卡片视图.markdown-preview-view div > ul .image-embed {
  padding: 0!important;
  display: block!important;
  background-color: var(--background-secondary)!important;
  border-radius: var(--image-radius)!important;
}

.无序-单卡片视图.markdown-preview-view div > ul .image-embed img {
  aspect-ratio: var(--cards-aspect-ratio)!important;
  object-fit: var(--cards-image-fit)!important;
  max-height: var(--cards-image-height)!important;
  background-color: var(--background-secondary)!important;
  vertical-align: bottom!important;
}
.无序-单卡片视图.markdown-preview-view div > ul > li > a {
  --link-decoration: none!important;
  --link-external-decoration: none!important;
  font-weight: var(--bold-weight)!important;
}
.无序-单卡片视图.markdown-preview-view div ul > li:hover {
  border-color: var(--background-modifier-border-hover)!important;
}

/*排版*/
.无序-单卡片视图.markdown-preview-view div ul ul {
  display: block!important;
  width: 100%!important;
  color: var(--text-muted)!important;
  font-size: var(--font-smallest);
  margin: calc(var(--cards-padding) / -4) 0!important;
  padding: calc(var(--cards-padding) / 2) 0!important;
}

.无序-单卡片视图.markdown-preview-view div ul ul ul {
  padding-bottom: calc(var(--cards-padding) / 4)!important;
}
.无序-单卡片视图.markdown-preview-view div ul ul > li {
  display: block!important;
}

/*消除常态化对单卡片的影响*/

/*无序表格化模式*/
/*一级列表-排版处理*/
.无序-表格化阅览:is(.markdown-preview-view) div>ul {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 1em 0em 1em 0em;
  align-items: flex-start;
  padding-top: 0px;
  padding-right: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
}
/*二级列表-排版*/
.无序-表格化阅览:is(.markdown-preview-view) div>ul ul {
  display: flex;
  margin: -3px -12px -3px 0px;
  flex-direction: column;
  align-items: stretch;
  padding-top: 0px;
  padding-right: 0px;
  padding-bottom: 0px;
  padding-left: 10px;
}
.无序-表格化阅览:is(.markdown-preview-view) div>ul ul ul {
  display: flex;
  margin: -3px -12px -3px 0px;
  flex-direction: column;
  align-items: stretch;
  padding-top: 0px;
  padding-right: 0px;
  padding-bottom: 0px;
  padding-left: 10px;
}
.无序-表格化阅览:is(.markdown-preview-view) div>ul ul ul ul {
  display: flex;
  margin: -3px -12px -3px 0px;
  flex-direction: column;
  align-items: stretch;
  padding-top: 0px;
  padding-right: 0px;
  padding-bottom: 0px;
  padding-left: 10px;
}

/*一级列表-排版与底色处理*/
.无序-表格化阅览:is(.markdown-preview-view) div>ul>li:not(.task-list-item) {
display: flex;
flex-direction:row;
justify-content: flex-start;
align-items: center;
text-align: center;
border-radius: 0pt;
margin: 10px 0px 10px 0px;
flex-wrap: nowrap;
padding-top: 2px;
padding-right: 10px;
padding-bottom: 2px;
padding-left: 10px;
}

/*二级列表-内容排版处理*/
.无序-表格化阅览:is(.markdown-preview-view) div>ul ul>li:not(.task-list-item) {
  display: flex;
  margin: -1px 0px -1px 0px;
  list-style: none;
  word-wrap: break-word;
  word-break: break-word;
  border-radius: 0pt;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: flex-start;
  padding-top: 2px;
  padding-right: 10px;
  padding-bottom: 2px;
  padding-left: 10px;
}

/*三级列表-排版处理*/
.无序-表格化阅览:is(.markdown-preview-view) div>ul ul ul>li:not(.task-list-item) {
  display: flex;
  justify-content: flex-start;
  margin: -1px 0px -1px 0px;
  list-style: none;
  word-wrap: break-word;
  word-break: break-word;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  padding-top: 2px;
  padding-right: 10px;
  padding-bottom: 2px;
  padding-left: 10px;
}

/*四级列表-排版处理*/
.无序-表格化阅览:is(.markdown-preview-view) div>ul ul ul ul>li:not(.task-list-item) {
  display: flex;
  margin: -1px 0px -1px 0px;
  list-style: none;
  word-wrap: break-word;
  word-break: break-word;
  justify-content: flex-start;
  align-items: center;
  flex-direction: row;
  flex-wrap: nowrap;
  padding-top: 2px;
  padding-right:10px;
  padding-bottom: 2px;
  padding-left: 10px;
}

/*列表-边框与背景底色处理*/

/*一级列表*/
body.theme-light .无序-表格化阅览:is(.markdown-preview-view) div>ul>li:not(.task-list-item) {
background-color: rgba(var(--wxlbMH-list-1-BJ-color,210, 210, 200,1));
box-shadow: rgba(var(--wxlbMH-list-1-BK-color,15, 15, 15, 0.3)) 0px 0px 4px 1px, rgba(15, 15, 15, 0.2) 0px 0px 0px 2px;
}
body.theme-dark .无序-表格化阅览:is(.markdown-preview-view) div>ul>li:not(.task-list-item) {
background-color: rgba(var(--wxlbMH-list-1-BJ-color,46, 61, 95,1));
box-shadow: rgba(var(--wxlbMH-list-1-BK-color,15, 15, 15, 1)) 0px 0px 0px 3px;
}
/*二级列表*/
body.theme-light .无序-表格化阅览:is(.markdown-preview-view) div>ul ul>li:not(.task-list-item) {
background-color: rgba(var(--wxlbMH-list-2-BJ-color,239, 240, 242,1));
border: 2px solid rgba(var(--wxlbMH-list-2-BK-color,15, 15, 15, 0.3));
border-radius: 0pt;
box-shadow: unset;
}
body.theme-dark .无序-表格化阅览:is(.markdown-preview-view) div>ul ul>li:not(.task-list-item) {
background-color: rgba(var(--wxlbMH-list-2-BJ-color,26, 39, 69, 1));
border: 2px solid rgba(var(--wxlbMH-list-2-BK-color,15, 15, 15, 1));
border-radius: 0pt;
box-shadow: unset;
}
/*三级列表*/
body.theme-light .无序-表格化阅览:is(.markdown-preview-view) div>ul ul ul>li:not(.task-list-item) {
background-color: rgba(var(--wxlbMH-list-3-BJ-color,231, 234, 247,1));
border: 2px solid rgba(var(--wxlbMH-list-3-BK-color,15, 15, 15, 0.3));
border-radius: 0pt;
box-shadow: unset;
}
body.theme-dark .无序-表格化阅览:is(.markdown-preview-view) div>ul ul ul>li:not(.task-list-item) {
background-color: rgba(var(--wxlbMH-list-3-BJ-color,59, 83, 248,0.5));
border: 2px solid rgba(var(--wxlbMH-list-3-BK-color,15, 15, 15, 1));
border-radius: 0pt;
box-shadow: unset;
}
/*四级列表*/
body.theme-light .无序-表格化阅览:is(.markdown-preview-view) div>ul ul ul ul>li:not(.task-list-item) {
background-color: rgba(var(--wxlbMH-list-4-BJ-color,201, 204, 217,1));
border: 2px solid rgba(var(--wxlbMH-list-4-BK-color,15, 15, 15, 0.3));
border-radius: 0pt;
box-shadow: unset;
}
body.theme-dark .无序-表格化阅览:is(.markdown-preview-view) div>ul ul ul ul>li:not(.task-list-item) {
background-color: rgba(var(--wxlbMH-list-4-BJ-color,33, 33, 33,0.5));
border: 2px solid rgba(var(--wxlbMH-list-4-BK-color,15, 15, 15, 1));
border-radius: 0pt;
box-shadow: unset;
}

/*处理顶部导航多出来的点*/
.无序-表格化阅览:is(.markdown-preview-view) .list-bullet{
display: none;
}

/*处理顶部导航多出来的线*/
.无序-表格化阅览:is(.markdown-preview-view).markdown-rendered.show-indentation-guide li > ul::before,.无序-表格化阅览:is(.markdown-preview-view).markdown-rendered.show-indentation-guide li > ol::before {
content: unset;
}
/*触摸颜色*/
/*
body.theme-light .无序-表格化阅览:is(.markdown-preview-view) ul ul ul li:hover {
background: rgba(var(--wxlbMH-list-3-CM-color,100, 178, 100, 0.279));
transition-duration:200ms;
} 
body.theme-light .无序-表格化阅览:is(.markdown-preview-view) ul ul ul ul li:hover {
background: rgba(var(--wxlbMH-list-3-CM-color,100, 178, 100, 0.5));
transition-duration:200ms;
}
body.theme-dark .无序-表格化阅览:is(.markdown-preview-view) ul ul ul li:hover {
background: rgba(var(--wxlbMH-list-3-CM-color,59, 83, 248,1));
transition-duration:200ms;
}
body.theme-dark .无序-表格化阅览:is(.markdown-preview-view) ul ul ul ul li:hover {
background: rgba(var(--wxlbMH-list-3-CM-color,33, 33, 33,0.9));
transition-duration:200ms;
}
*/
/*处理折叠箭头距离*/
.无序-表格化阅览:is(.markdown-preview-view).markdown-rendered .list-collapse-indicator {
margin-inline-start: -2em;
padding-inline-end: 2em;
}
/*字体颜色与大小*/
/*一级列表*/
body.theme-light .无序-表格化阅览:is(.markdown-preview-view) ul li:not(.task-list-item) {
font-size:var(--wxlbMH-list-1-ZT-size-CTH,14px);
color: rgba(var(--wxlbMH-list-1-ZT-color,28,28,28,1));
}
body.theme-dark .无序-表格化阅览:is(.markdown-preview-view) ul li:not(.task-list-item) {
font-size:var(--wxlbMH-list-1-ZT-size-CTH,14px);
color: rgba(var(--wxlbMH-list-1-ZT-color,146,198,253,1));
}
/*二级列表*/
body.theme-light .无序-表格化阅览:is(.markdown-preview-view) ul ul>li:not(.task-list-item) {
font-size:var(--wxlbMH-list-2-ZT-size-CTH,14px);
color: rgba(var(--wxlbMH-list-2-ZT-color,28,28,28,1));
}
body.theme-dark .无序-表格化阅览:is(.markdown-preview-view) ul ul>li:not(.task-list-item) {
font-size:var(--wxlbMH-list-2-ZT-size-CTH,14px);
color: rgba(var(--wxlbMH-list-2-ZT-color,198,208,245,1));
}
/*三级列表*/
body.theme-light .无序-表格化阅览:is(.markdown-preview-view) ul ul ul>li:not(.task-list-item) {
font-size:var(--wxlbMH-list-3-ZT-size-CTH,14px);
color: rgba(var(--wxlbMH-list-3-ZT-color,28,28,28,1));
}
body.theme-dark .无序-表格化阅览:is(.markdown-preview-view) ul ul ul>li:not(.task-list-item) {
font-size:var(--wxlbMH-list-3-ZT-size-CTH,14px);
color: rgba(var(--wxlbMH-list-3-ZT-color,198,208,245,1));
}
/*四级列表*/
body.theme-light .无序-表格化阅览:is(.markdown-preview-view) ul ul ul ul>li:not(.task-list-item) {
font-size:var(--wxlbMH-list-4-ZT-size-CTH,14px);
color: rgba(var(--wxlbMH-list-4-ZT-color,28,28,28,1));
}
body.theme-dark .无序-表格化阅览:is(.markdown-preview-view) ul ul ul ul>li:not(.task-list-item) {
font-size:var(--wxlbMH-list-4-ZT-size-CTH,14px);
color: rgba(var(--wxlbMH-list-4-ZT-color,198,208,245,1));
}

```