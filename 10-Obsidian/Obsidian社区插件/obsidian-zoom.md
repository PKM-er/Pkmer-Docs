---
uid: 20230504172203
title: Obsidian 插件：Zoom 通过快捷键，快速聚焦到大纲
tags:
  - Obsidian
  - 插件
  - 效率
  - 大纲
description: obsidian-zoom 通过快捷键，快速聚焦到大纲。并在笔记顶部生成标题的面包屑导航，该面包屑可以交互来定位大纲内容。
author: cuman, 熊猫别熬夜
type: other
draft: false
editable: false
modified: 20231128020518
---

# Obsidian 插件：Zoom 通过快捷键，快速聚焦到大纲

> [!Note] 插件名片
> - 插件名称：Zoom
> - 插件作者：Viacheslav Slinko
> - 插件说明：通过快捷键，快速聚焦到大纲。并在笔记顶部生成标题的面包屑导航，该面包屑可以交互来定位大纲内容。
> - 插件分类：[' 界面相关 ', 'obsidian 插件 ']
> - 插件项目地址：[点我访问](https://github.com/vslinko/obsidian-zoom)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsidian-zoom)

## 概述

通过这个插件可以把其他标题和列表内容隐藏,专注当前标题或者列表层级的内容,让写作更专注。

![demo.gif](https://cdn.pkmer.cn/images/202305041724055.gif!pkmer)

## 使用方法

隐藏除列表/标题及其内容之外的所有内容。

 | 命令         |           默认快捷键 (Windows/Linux)           |                默认快捷键 (MacOS)                |
 | ------------ |:--------------------------------------------:|:----------------------------------------------:|
 | Zoom in (扩展当前标题或列表)       |         <kbd>Ctrl</kbd> <kbd>.</kbd>         |              <kbd>Command</kbd><kbd>.</kbd>   |
 | Zoom out the entire document (整个文档还原) | <kbd>Ctrl</kbd><kbd>Shift</kbd> <kbd>.</kbd> | <kbd>Command</kbd><kbd>Shift</kbd><kbd>.</kbd> |

### 单击列表符号进入 Zoom

> 单击指定列表前面的 `- ` 鼠标变为手掌🤚🏻模式后单击进入 Zoom 模式

| Setting 设置 | Default value 默认值 |
| --- | :-: |
| Zooming in when clicking on the bullet (单击项目符号时放大) | `true` |

## 功能延伸

配合 [[obsidian-outliner]] 插件 可以实现类似大纲笔记的编辑效果。

配合标题切换插件可以快速切换文档：
- [[obsidian-another-quick-switcher_readme|obsidian-another-quick-switcher]]
	- 提供便捷的文档标题预览和切换功能浮动面板
- [[oin-gotoheading|go to heading]]
	- 可以快速切换标题以及有another-quick-switcher文档标题功能，还有基于文件夹笔记和标题切换功能
- [[quick-snippets-and-navigation_readme|quick-snippets-and-navigation]]
	- 键盘导航上/下标题 - 可配置的默认代码块和回调 - 通过键盘快捷键复制代码块
