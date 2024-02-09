---
uid: 20230911002522
title: Obsidian 中如何对笔记进行注释？解决方案初探
tags: []
description: Obsidian中如何对笔记进行注释？解决方案初探
author: Chenghuang
type: awesome
draft: false
editable: false
modified: 20230911105821
---

# Obsidian 中如何对笔记进行注释？解决方案初探

注释，也称标注、批注，又分脚注、边注、尾注和行间注等诸多类型，本文旨在分享笔者目前搜集到的一些在 Obsidian 中实现抛砖引玉。

可通过 [Tufte Style Sidenotes in Obsidian | by TfTHacker | Medium](https://medium.com/obsidian-observer/tufte-style-sidenotes-in-obsidian-89b0a785bc54) 这篇文章了解 Obsidian 中几种基本的注释类型，不过我不同意文中将边注和脚注本身属性完全等同的说法: “A sidenote is a footnote. However, instead of the footnote appearing at the “foot” or end of a document, it is presented on the side, in the document’s margin.” 实际上在笔者看来，边注在中文语境中更接近读者在阅读书籍时的批注，用以记录即时感想，而脚注则往往是供作者表明引文来源和提供长段拓展说明之用。

## 1. 边注

  可参考 [Sidenotes In Web Design · Gwern.net](https://gwern.net/sidenote) 了解边注是如何在网络世界实现的，文中列举了多种方法，需要一定的 html/css/JavaScript 知识才能看懂。

  由于 md 目前对类 word 批注的支持依然羸弱，以下几种方法按笔者个人推荐程度排序：

### 1.1. Commentator 插件

目前看来前景最光明的解决方案，此插件意在实现类 word 修订模式效果，但目前功能尚不完善，全英文使用存在门槛。插件尚未上架官方市场，下载地址见 [GitHub - Fevol/obsidian-criticmarkup: Obsidian plugin for annotating notes with suggestions and comments using CriticMarkup](https://github.com/Fevol/obsidian-criticmarkup) 详见 [GitHub - CriticMarkup/CriticMarkup-toolkit: Various tools to use CriticMarkup in your daily workflow](https://github.com/CriticMarkup/CriticMarkup-toolkit)

### 1.2. Tufte css

从 [tufte css github主页](https://github.com/edwardtufte/tufte-css) 下载 `tufte.css` ，因其中包含多项自定义样式且本为网页设计编写，建议删除不需要的部分，否则会使得 Obsidian 的界面极为狭窄，详见 [Tufte CSS效果兼说明页](https://edwardtufte.github.io/tufte-css/)

> [!example] 带数字上标的边注写法（sidenote）
> - 因笔者几乎不懂 html，不知在有多处注释的情况下怎么写，能让上标编号自动编号
> - `这是被注释文字<label for="sn-demo" class="margin-toggle sidenote-number"> </label> <input type="checkbox" id="sn-demo" class="margin-toggle"/><span class="sidenote">这是注释内容</span>`

> [!example] 不带数字上标的边注写法（marginal note）
> `这是被注释文字<label for="mn-demo" class="margin-toggle"></label> <input type="checkbox" id="mn-demo" class="margin-toggle"/> <span class="marginnote">这是注释内容 </span>`

### 1.3. ob 自带 [[callout]] 语法

callout 代码块位于正文位置，容易破坏阅读的连贯性。

>[!example]
>~~~
>>[!callout框标题] 
>>注释内容 
>~~~ 

### 1.4. ob 自带脚注语法及三个插件

用 `footnote shortcut（添加脚注的快捷键）`、`linter（在阅读视图中对脚注进行重新编号，曾用tiny footnotes）`、`better footnote（在阅读视图中，鼠标可以通过悬停于正文的上标编号上显示脚注内容）` 等插件来实现脚注在正文中的浮动预览效果（pop-in）。

### 1.5. Sanstum 主题自带语法

使用 Sanstum 主题的特殊语法，但因作者不通 html 语言，在此不做示例，有意者可参看 [Sanctum主题的帮助文档](https://github.com/jdanielmourao/obsidian-sanctum/blob/main/documentation/Theme_Guide.md)。

### 1.6. comment 插件

高亮过于醒目，批注内容需要点击后才会显示，易破坏阅读连贯性。

>[!example]
`<label class="ob-comment" title="" style=""> comment这是被注释文字 <input type="checkbox"> <span style=""> comment这是注释内容 </span></label>`

### 1.7. reading comments 插件

批注内容位于原文字左侧，与 word 使用习惯不符。

>[!example]
`<span class="ob-html-comment" id="comment-31f53394-483d-479e-8e6d-3210f3f36c85" data-tags="[comment,]"><span class="ob-html-comment-body">reading comments这是被注释文字</span>reading comments这是注释内容</span>`

### 1.8. 康奈尔笔记库 css

需前往 [Cornell Notes Learning Vault - TfT Hacker](https://tfthacker.com/cornell-notes) 购买示例库后方可使用，笔者并未亲自试用。

### 1.9. Obsidian 自带 comment 语法

缺点是批注仅会在编辑模式下显示，如果要删除批注，一定要一次性选中所有% 再按退格键，否则很容易打乱整个排版。

参考 [[better-comment-toggle]] 可以自定义批注框的字体/背景颜色、字体大小以及斜体。

>[!example]
> `%%批注内容%%`

## 2. 脚注

Obsidian 自带脚注语法，详见 [格式化笔记 - Obsidian 中文帮助 - Obsidian Publish](https://publish.obsidian.md/help-zh/%E4%BD%BF%E7%94%A8%E6%8C%87%E5%8D%97/%E6%A0%BC%E5%BC%8F%E5%8C%96%E7%AC%94%E8%AE%B0#%E8%84%9A%E6%B3%A8)。由于 Obsidian 的每个笔记文件均默认不分页，故脚注和尾注在此不分。

### 2.1. footnote shortcut

参看：[[obsidian-footnotes]]，通过快捷键（Alt+Ctrl+F）添加脚注，但无法自动调整编号顺序。

### 2.2. tidy footnotes

参看：[[obsidian-tidy-footnotes]] ，通过命令（tidy footnotes）为脚注重新编号以符合其在文章中的顺序，已知可由 linter 取代。

### 2.3. better footnote

参看 ：[[better-fn]]，在阅读视图中，鼠标悬停于正文的上标编号上时，可以自动显示脚注内容。