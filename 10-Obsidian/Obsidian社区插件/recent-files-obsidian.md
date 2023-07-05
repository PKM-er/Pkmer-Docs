---
uid: 20230329145850
title: Obsidian 插件：Recent Files 添加最近浏览过的文件列表
tags: [Obsidian, 插件, 最近浏览]
description: Obsidian 插件：Recent Files 添加最近浏览过的文件列表
author: OS
type: other
draft: false
editable: false
modified: 20230604174705
---

# Obsidian 插件：Recent Files 添加最近浏览过的文件列表

为 Obsidian 添加一个最近浏览文件的列表，方便你快速查看和回溯最近的文件。

> [!Note] 插件名片
> - 插件名称：Recent Files
> - 插件作者：Tony Grosinger
> - 插件说明：显示最近打开的文件列表
> - 插件项目地址：[点我跳转](https://github.com/tgrosinger/recent-files-obsidian)

## 效果&特性

1. 安装并启用后，会在左侧面板生成一个 时钟样式的图标
2. 点击该图标，可以看到最近浏览过的文档

![Pasted image 20230123000328](https://cdn.pkmer.cn/images/5e43ff4bdd31ad16e66226ac1c05a67b_MD5.png!pkmer)

## 安装

1. 进入 Obsidian 插件中心
2. 搜索 Recent Files
3. 安装
4. 开启插件

## 配置

1. List length：支持管理最大记录的历史文件数量，默认 50，你可以调整的更大/更小，以便适应自己的文档查看习惯。
2. Open note in：选择点击最近浏览列表的文件时，是以何种方式打开。比如标签页、窗口、面板。
3. Omniited pathname patterns：可以过滤你不想看到的内容，比如文件夹、指定后缀名的文件。

## 使用

### 启用

- 点击生成在左侧面板，默认的时钟样式图标即可。
- 当然你也可以通过面板的方式，拖拽到你习惯的布局中

### 日常使用

1. 鼠标左键点击笔记，在当前标签页内打开
2. 按住<kbd>Ctr</kbd>加鼠标左键在全新标签页打开
3. 按住<kbd>Ctr</kbd>在鼠标指向的位置悬停展示对应笔记内容
4. 按住<kbd>Ctr</kbd>拖拽到笔记内部，可以建立内部链接
5. 按住<kbd>Ctr</kbd>拖拽到笔记文件管理器中，可以快速移动笔记位置。

>[!Tip] 提示
> 1. 最近文件列表，只有在该插件启用后，浏览过的文档才会被记录
> 2. 该插件不支持记录，白板（canvas）功能生成的文件


>[!Tip] 关联推荐
> - [[quick-explorer]]：在应用标题栏和笔记标题栏增加面包屑导航功能，提供了笔记和目录快速切换的能力
> - [[novel-word-count]]：在 Obsidian 的文件资源管理器窗格中显示每个文件、文件夹和保险库的字数，以及更多其他信息。
> - [[obsidian-collapse-all-plugin]]：单击对应图标或者使用命令，展开或关闭文件管理器中的文件夹
> - [[pane-relief]]：每个窗格的历史记录、用于窗格移动和导航的快捷键等
> - [[obsidian-gallery]]：让你的笔记变成画廊
> - [[obsidian-tagfolder]]：通过笔记中的标签，重新组织所有的笔记
> - [[chronology]]：按照月历模式导航，轻松了解编辑修改锅的笔记内容。
> - [[hidden-folder-obsidian]]：在文件管理器中快速隐藏文件夹
> - [[obsidian-show-file-path]]：显示正在编辑的文件所在的路径
> - [[hidden-folder-obsidian]]：快速隐藏文件夹