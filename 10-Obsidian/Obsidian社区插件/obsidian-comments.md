---
uid: 20230504001023
title: Obsidian 插件：Comments 为你的笔记增加评论和批注功能
description: 
author: 
type: other
draft: false
editable: false
modified: 20230504102735
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

## 效果&特性

![example_2.png](https://cdn.pkmer.cn/images/example_2.png)

## 使用

### 如何添加批注（add comment）

1. 选择并圈选要添加批注的笔记文本内容。
2. 使用命令 Ctrl/Cmd + P，呼出命令面板，并选择“add comment' command”（添加批注）命令，然后按 Enter 键。
3. 选定的文本将被替换为以下内容：

```HTML
<label class="ob-comment" title="..." style="..."> SELECTED TEXT，你选择的文本 <input type="checkbox"> <span> COMMENT，你要输入批注内容 </span></label>
```

### 添加批注的模式

- 将添加批注绑定到热键（设置 ->热键）可以更快地使用。例如，绑定到快捷键 cmd/ctrl + C。
- 在编辑模式下，可为所选文本添加批注
- 在预览模式下，所选文本将以特定的文本颜色和背景颜色突出显示
- 在预览模式下，单击突出显示的文本将显示包含与其相关的注释的弹出窗口
- 侧面板将列出当前活动笔记的所有批注

### 批注的属性

- 标题（可选）：在批注侧面板上方显示的文本。如果未指定标题，将使用默认的占位符作为标题。可能的用例：
	- 用于指定此批注出现的文本行（如果您启用了编辑器模式行号），这在极大的笔记中很有用，因为当前侧面板链接不会导致页面跳转到它 ;
	- Q/A->问题可以是标题，单击侧栏中的问题将显示突出显示的文本（可以用于从侧面板审查笔记的关键思想）
	- 建议记录笔记批注的原因，以方便日后回忆，比如是灵感，还是对应实例或是不同见解。
- 风格（可选）：如上面的示例所示，由于它是简单的 HTML 语法，因此可以按照自己的喜好定义样式。目前有两种样式，位于 `<label class="ob-comment" style="...">` 中的样式将指定突出显示文本的样式，而 `<input type="checkbox"> <span style="">` 将指定注释弹出窗口的样式（此样式与侧面板使用相同）。
- 注释部分：由于注释使用 `<input type="checkbox"> <span>` 来标识内容，实际的评论可以包括更多的 div/span/HTML 元素来进一步自定义，它将在行内和侧面板中正确呈现。

### 设置

- 支持设置批注的默认文字颜色，当然你可以在插入的 HTML 代码中自己修改；
- 支持设 hi 批注的默认背景颜色，当然你可以在插入的 HTML 代码中自己修改；
- 支持隐藏插件在 Ribbon 区域的图标；
![image.png](https://cdn.pkmer.cn/images/20230504102255.png)

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