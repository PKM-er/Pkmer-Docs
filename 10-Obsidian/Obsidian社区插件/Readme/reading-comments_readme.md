---
uid: 20231220115812
title: Obsidian 插件：【Readme】Reading comments
tags: ['obsidian插件', 'readme']
description: 插件允许您在Obsidian阅读书籍或文章时创建内联评论。评论可以通过标签进行分层分组。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】Reading comments

> [!Note] 插件名片
> - 插件名称：Reading comments
> - 插件作者：BumbrT
> - 插件说明：插件允许您在 Obsidian 阅读书籍或文章时创建内联评论。评论可以通过标签进行分层分组。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/BumbrT/obsidian-reading-comments)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?reading-comments)

## 概述

插件允许您在 Obsidian 阅读书籍或文章时创建内联评论。评论可以通过标签进行分层分组。

![Reading comments](https://cdn.pkmer.cn/covers/reading-comments.gif)

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/BumbrT/obsidian-reading-comments/master/README.md)

---

## Readme(翻译）

下面是 [[reading-comments]] 插件的自述翻译

# Obsidian 阅读评论

该插件允许在 Obsidian 中阅读 Markdown 笔记时创建内联 HTML 评论。在完成和最终确定评论工作后，可以提取带有指向评论笔记的内部链接的原始笔记（以纯净的 Obsidian Markdown 格式，不包含 HTML 格式），以便与存储库的其余部分集成。

[Readme in English](https://github.com/BumbrT/obsidian-reading-comments/blob/master/README.md)

使用方法

### 插入评论

打开命令面板，输入 `Add reading comment for selection`，然后按下 `Enter` 键。

建议为此命令面板操作分配快捷键。

您可以在 "data-tags" 字段中使用层次化的父/子标签。

### 打开评论面板

打开命令面板，然后输入“Reading Comments Panel”。

### 提取带有评论链接的原始笔记

打开命令面板，然后输入“提取带有评论链接的原始笔记”。

## 特点

- 对评论进行层次化标记：支持父级/子级/等级标签，并在面板中按父级分组
- 在评论中进行搜索
- 通过点击导航到特定的评论
- **提取带有评论链接的原始注释**
- 通过热键删除选定的评论
- 通过热键切换选定的评论为块状/内联
- 鼠标悬停在评论的文本正文上时隐藏评论
- 从设置中选择评论颜色
- 支持暗色和亮色主题

## 展示

如果你喜欢这个插件，随意给我买杯咖啡。

### 创建评论

![创建评论](https://cdn.pkmer.cn/covers/reading-comments_1_0.gif)

### 在面板中搜索评论

![搜索评论](https://cdn.pkmer.cn/covers/reading-comments_1_1.gif)

提取带有评论链接的原始笔记：

![提取原始笔记](https://cdn.pkmer.cn/covers/reading-comments_1_2.gif)

如果你喜欢这个插件，随意给我买杯咖啡。

## 安装

- 从 Obsidian 社区插件商店安装
- 使用 [obsidian BRAT](https://github.com/TfTHacker/obsidian42-brat) 插件，使用此存储库的 GitHub 链接
- 或者从 [发布页面](https://github.com/BumbrT/obsidian-reading-comments/releases) 下载最新的发布文件，并将文件放入您的 vault/.obsidian/plugins 文件夹中。需要启用社区插件。

自制插件修改和拉取请求的实施细节

### 评论逻辑

最重要的逻辑位于 src/comments/ConstantsAndUtils.ts 中

当执行 `为选择添加阅读评论` 时，编辑器选择将被以下代码替换：

```
<div class="ob-html-comment" id="comment-${commentId}" data-tags="[comment,]"><span class="ob-html-comment-body">CommentPlaceholder</span>${htmlEscapedSelection}</div>
```

插件会解析文本中的评论，并按标签在面板中进行层次化组织。

### 显示逻辑

所有的样式和显示逻辑都位于 styles.css 和 src/HtmlCommentsTemplate.vue 文件中。

感谢

实现是基于 [Obsidian Quiet Outline](https://github.com/guopenghui/obsidian-quiet-outline) 插件。

基本思想来自 [Comments](https://github.com/Darakah/obsidian-comments-plugin) 插件。

如果你喜欢这个插件，随意给我买杯咖啡。

## 路线图

- 支持多行注释（通过逐行解析进行多行重构）。
- 整个保险库/文件夹中的注释标签。
- 在树状结构中重命名标签，拖放等标签和注释管理功能。

### 要引入“好用但不必要”的功能，请在此处创建问题，或者更好地通过“给我买杯咖啡”的网站进行捐赠

“很好拥有”的功能：

- 设置中的标签和评论排序算法
- 自定义标签占位符（目前为“评论，”）



