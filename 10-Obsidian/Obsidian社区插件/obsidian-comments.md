---
uid: 20230504001023
title: Obsidian 插件：Comments 为你的笔记增加评论和批注功能
tags: [Obsidian, 插件, 批注, 评论, 编辑器]
description: Obsidian 插件：Comments 为你的笔记增加评论和批注功能
author: OS
type: other
draft: false
editable: false
modified: 20230604172616
---

# Obsidian 插件：Comments 为你的笔记增加评论和批注功能

## 概述

有时候，我们阅读书籍的时候，希望在特定的内容上增加批注或者评论，无论是出于以后回顾的目的，还是出于记录当时思考灵感的方式，这都是一种从纸质书时代开始，原始且有效的简易方法。

Comments 这个插件就为我们提供了这样的功能，可以为笔记上增加批注或评论，以弥补原生应用的不足。

> [!Note] 插件名片
> - 插件名称：Obsidian Comments Plugin
> - 插件作者：darakah
> - 插件说明：为笔记增加批注或评论。
> - 插件项目地址：[点我跳转](https://github.com/Darakah/obsidian-comments-plugin)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsidian-comments)

## 效果&特性

![example_2.png](https://cdn.pkmer.cn/images/example_2.png!pkmer)

## 使用

### 如何添加批注（add comment）

1. 选择并圈选要添加批注的笔记文本内容。
2. 使用命令 Ctrl/Cmd + P，呼出命令面板，并选择“add comment' command”（添加批注）命令，然后按 Enter 键。
3. 选定的文本将被替换为以下内容：

```HTML
<label class="ob-comment" title="..." style="..."> SELECTED TEXT，你选择的文本 <input type="checkbox"> <span> COMMENT，你要输入批注内容 </span></label>
```

### 添加批注的模式

- 将添加批注绑定到快捷键（设置 ->快捷键）可以更快地使用。例如，绑定到快捷键 cmd/ctrl + C。
- 在编辑模式下，可为所选文本添加批注
- 在预览模式下，所选文本将以特定的文本颜色和背景颜色突出显示
- 在预览模式下，单击突出显示的文本将显示包含与其相关的注释的弹出窗口
- 侧面板将列出当前活动笔记的所有批注

### 批注的属性

- 标题（可选）：在批注侧面板上方显示的文本。如果未指定标题，将使用默认的占位符作为标题。可能的用例：
	- 用于指定此批注出现的文本行（如果您启用了编辑器模式行号），这在极大的笔记中很有用，因为当前侧面板链接不会导致页面跳转到它 ;
	- Q/A->问题可以是标题，单击侧栏中的问题将显示突出显示的文本（可以用于从侧面板审查笔记的关键思想）
	- 建议记录笔记批注的原因，以方便日后回忆，比如是灵感，还是对应实例或是不同见解。
- 风格（可选）：
	- 由于使用的 HTML 语法，因此可以按照自己的喜好定义样式，目前有两种样式
	- 位于 `<label class="ob-comment" style="...">` 中的样式将指定突出显示文本的样式
	- `<input type="checkbox"> <span style="">` 将指定注释弹出窗口的样式（此样式与侧面板使用相同）。
- 注释部分：由于注释使用 `<input type="checkbox"> <span>` 来标识内容，实际的评论可以包括更多的 div/span/HTML 元素来进一步自定义，它将在行内和侧面板中正确呈现。

### 设置

- 支持设置批注的默认文字颜色，当然你可以在插入的 HTML 代码中自己修改；
- 支持设 hi 批注的默认背景颜色，当然你可以在插入的 HTML 代码中自己修改；
- 支持隐藏插件在 Ribbon 区域的图标；
![image.png](https://cdn.pkmer.cn/images/20230504102255.png!pkmer)

### 自定义样式

插件中所有的内嵌高亮显示/弹出窗口都是使用 CSS 完成的，因此可以通过修改 obsidian comments 插件文件夹中的 style.css 进行自定义。

要修改高亮显示文本的默认背景色/文本颜色，参考如下代码片段：

```CSS
.ob-comment {
  color: #8f0303;
  background-color: #CCA300;
}
```

修改批注气泡的默认背景颜色 /文本颜色以进行：

```CSS
.ob-comment span {
  background-color: #FFDE5C;
  color: #b30202;
}
```

修改悬停在其上时的高亮颜色：

```CSS
.ob-comment:hover {
  background-color: #FFDE5C;
}
```

> [!Tip] 关联推荐
> - [[editing-toolbar]]：添加一个浮动编辑栏，增强 Obsidian 的可视化编辑体验。
> - [[lapel]]：在标题旁边显示标题等级，并提供快捷切换标题等级的能力
> - [[cm-editor-syntax-highlight-obsidian]]：允许在 Obsidian 的代码块中针对编程语言显示预设的高亮配色方案
> - [[highlightr-plugin]]：将小而美的高亮菜单添加到了 Obsidian 中，通过所见即所得的方式，为笔记内容中文本增加高亮颜色。
> - [[easy-typing-obsidian]]：包含编辑时自动格式化文本和符号编辑增强。自动格式化文本对文档的格式进行规范化，并且美化文档的观感，强优化用户的编辑体验
> - [[obsidian-latex-suite]]：通过片段、文本扩展和编辑器增强功能，使排版 LaTeX 数学与手写一样快
> - [[obsidian-dynamic-highlights]]：根据正则表达式，为笔记内容增加高亮和样式
> - [[multi-column-markdown]]：在 Obsidian 的预览模式下创建包含多列内容的 Markdown 文档
> - [[obsidian-columns]]：支持多种方式来设定分栏目
> - [[remember-cursor-position]]：记住每个文件光标和滚动位置
> - [[cm-typewriter-scroll-obsidian]]：打字机风格的滚动，使视图保持在编辑器的中心
> - [[typewriter-mode]]：使光标所在行始终处于屏幕某处，降低用 Obsidian 写中长文时用鼠标滚动调整页面的频繁
> - [[number-headings-obsidian]]：给笔记中的标题自动编号，以及动态目录
> - [[cmenu-plugin]]：提供一个 mini 工具栏，以获得更流畅的写作/编辑体验✍🏽
> - [[code-block-copy]]：在阅读模式中，为代码块右上角添加一个复制按钮，点击后自动复制代码块内容到剪贴板
> - [[weather-fetcher]]：来获取和插入当前的天气到笔记编辑器的插件
> - [[Obsidian如何制作多栏布局]]