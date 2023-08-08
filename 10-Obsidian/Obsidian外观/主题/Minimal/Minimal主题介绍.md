---
uid: 20230808230612
title: Minimal 主题介绍
tags: [Minimal, theme, config, Obsidian]
description: 
author: wtjl
type: default
draft: false
editable: true
modified: 
---

# Minimal 主题介绍

> [Minimal](https://minimal.guide/Home) 作为当前安装量 Top1 的主题, 也是资历最老的主题之一, 在跟随 Obsidian 几个版本的迭代之后, 仍然保持着较高的水准, 值得推荐给所有 Obsidian 用户使用和学习.

## 特性

- color schemes
- [cards](https://minimal.guide/Block+types/Cards)
- [image grids](https://minimal.guide/Block+types/Image+grids)
- [helper classes](https://minimal.guide/Features/Helper+classes)
- ...

> 可定制程度较高, 并且有不少高级特性. 但并不怎么开箱即用...

## 安装

直接在 `设置 - 外观 - 主题 - 管理` 界面下搜索, 然后下载并使用即可.

## 配置

包括 `Minimal Theme Settings` 和 `Style Settings` 两部分.

> 这两个插件均可从社区插件市场下载.

### Minimal Theme Settings

- Color scheme: 选择预定义的主题外观 (个人倾向于 Notion、Atom)
- Features: 常用特性的开关, 比如
    - Colorful active states
    - Colorful headings
    - Focus mode: 建议在状态栏新建开关按钮
- Layout: 默认即可
- Typography: 字体和行宽等设置, 除字体大小其余默认即可

> 主要是一些 Feature 的开关, 总体上需要调整的点不多.

### [Style Settings](https://minimal.guide/Plugins/Style+Settings)

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

## 使用

## 参考