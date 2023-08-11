---
uid: 20230808230612
title: Minimal 主题介绍
tags: [Minimal, 主题, Obsidian]
description: 
author: wtjl
type: default
draft: false
editable: true
modified: 20230811100419
---

# Minimal 主题介绍

> minimal主题作为当前安装量 Top1 的主题, 也是资历最老的主题之一, 在跟随 Obsidian 几个版本的迭代之后, 仍然保持着较高的水准, 值得推荐给所有 Obsidian 用户使用和学习.

![image.png](https://cdn.pkmer.cn/images/202308111007747.png!pkmer)



## 特性

- 自定义配色
- 卡片视图
- 图像网格
- yaml class声明
- ...

> 可定制程度较高, 并且有不少高级特性. 但并不怎么开箱即用...

## 安装

直接在 `设置 - 外观 - 主题 - 管理` 界面下搜索, 然后下载并使用即可.

> 推荐国内安装下载地址 [主题集市 (pkmer.cn)](https://pkmer.cn/products/theme/themeMarket/?minimal)

## 配置

包括 `Minimal Theme Settings` 和 `Style Settings` 两部分.

### Minimal Theme Settings

通过[[obsidian-minimal-settings_readme]] 插件可以对主题样式进行调整，下面是主题的主要设置项：

- Color scheme: 选择预定义的主题外观 (个人倾向于 Notion、Atom)
- Features: 常用特性的开关, 比如
    - Colorful active states
    - Colorful headings
    - Focus mode: 建议在状态栏新建开关按钮
- Layout: 默认即可
- Typography: 字体和行宽等设置, 除字体大小其余默认即可

> 主要是一些 Feature 的开关, 总体上需要调整的点不多.

### Style Settings 

通过 [[obsidian-style-settings]] 插件可以对主题样式进行调整，下面是主题的主要设置项：

- Minimal
    - Accent color
    - Extended colors
    - Blockquotes
    - Callouts
    - Canvas
    - Code blocks
    - Dataview: 默认这边会对较长的列进行截断, 此处可以调整最大列宽
    - Embeds and transclusions: 隐藏嵌入标题, 设置嵌入背景色等
    - Graphs
    - Headings
    - Icons
    - Images
    - Indentation guides
    - Links
    - Line numbers: 高亮当前行
    - Lists and tasks
    - PDFs
    - Progress bars
    - Properties
    - Sidebars
    - Ribbon
    - Tables: 可设置相邻行列颜色交替
    - Tabs
    - Tab stacks
    - Tags: 默认没有颜色
    - Text
    - Titles
    - Translucency
    - Window frame
- Minimal Cards
- Minimal Mobile
- Minimal Advanced Settings

> 主要是 embed、table、tags, 其他没太调整的必要.
> 下面是个人的一段配置

```json
{
  "minimal-style@@active-line-on": true,
  "minimal-style@@checkbox-shape": "checkbox-circle",
  "minimal-style@@embed-hide-title": true,
  "minimal-style@@embed-strict": true,
  "minimal-style@@row-alt": true,
  "minimal-style@@row-hover": true,
  "minimal-advanced@@folding-offset": 2,
  "minimal-style@@trim-cols": false,
  "minimal-style@@max-col-width": "30em",
  "minimal-style@@embed-background@@light": "#F5F5F5",
  "minimal-style@@embed-background@@dark": "#262626",
  "minimal-style@@tag-color@@light": "#2EAADC",
  "minimal-style@@tag-background@@light": "#F0F8FB",
  "minimal-style@@tag-background-hover@@light": "#91C9E0",
  "minimal-style@@tag-color@@dark": "#0077FF",
  "minimal-style@@tag-background-hover@@dark": "#0077FF",
  "minimal-style@@blockquote-border-color@@light": "#2EAADC",
  "minimal-style@@blockquote-border-thickness": 2,
  "minimal-style@@code-normal@@light": "#F23FA5",
  "minimal-style@@code-normal@@dark": "#F2B6C1",
  "minimal-style@@italic-color@@light": "#FABE57",
  "minimal-style@@italic-color@@dark": "#FABE57",
  "minimal-style@@bold-color@@light": "#FF8A78",
  "minimal-style@@bold-color@@dark": "#FF8A78",
  "minimal-style@@bold-weight": 900,
  "minimal-style@@hl2@@dark": "#816F35",
}
```

代码使用方式，进入style setting插件设置 import 导入

![image.png](https://cdn.pkmer.cn/images/202308111015092.png!pkmer)
