---
uid: 20230706131405
title: Obsidian 插件：Typewriter Mode 更完美的打字机模式
tags: [Obsidian, 插件, 打字机模式]
description: Obsidian 插件：Typewriter Mode 更完美的打字机模式
author: Huajin
type: basic
draft: false
editable: false
modified: 20230731110201
---

# Obsidian 插件：Typewriter Mode 更完美的打字机模式

## 概述

当你在用 obsidian 写中长文时，是否会因为写到页面末尾不得不使用鼠标滚动界面而烦恼。如果你希望让你的光标所在行固定在屏幕某处。如果觉得固定不习惯，也可以设置在光标所在行距离屏幕底部还有几行的时候再进入打字机模式，那么 Typewriter Mode 值得一试。

如果大家使用过另一款更加出名的打字机插件 Typewriter Scroll，不难发现使用时 [笔记标题和正文存在空白](https://pkmer.cn/Pkmer-Docs/10-obsidian/obsidian%E5%B8%B8%E8%A7%81%E9%97%AE%E9%A2%98%E6%B1%87%E6%80%BB/obsidian%E5%9F%BA%E7%A1%80%E6%93%8D%E4%BD%9C%E9%97%AE%E9%A2%98/#%E7%AC%94%E8%AE%B0%E6%A0%87%E9%A2%98%E5%92%8C%E6%AD%A3%E6%96%87%E5%AD%98%E5%9C%A8%E7%A9%BA%E7%99%BD)，非常突兀且影响美观。而 Typewriter Mode 则很好的解决了这个问题。

> [!Note] 插件名片
> - 插件名称：Typewriter Mode
> - 插件版本：0.15.0
> - 插件作者：Davis Riedel
> - 插件描述：使光标所在行始终处于屏幕某处，降低用 Obsidian 写中长文时用鼠标滚动调整页面的频繁
> - 插件项目地址：[点我跳转](https://github.com/davisriedel/obsidian-typewriter-mode)

## 效果&特性

- 可以调整光标定位在屏幕的指定百分比上，默认居中；
- 可以让光标移动到距离底部还剩几行的时候固定；
- 类似 stille 的聚焦模式，可以设置聚焦的样式；

![bc7e69be1c97ef4f112fefccfa14bf2.png|865](https://cdn.pkmer.cn/images/bc7e69be1c97ef4f112fefccfa14bf2.png!pkmer)

![54a90e06cf049db42a77bb01522c1c6.png|865](https://cdn.pkmer.cn/images/54a90e06cf049db42a77bb01522c1c6.png!pkmer)

## 安装

- 因为者插件还有没上架 Obsidian 社区插件，所以需要手动安装。
- 手动安装社区插件，需要参考 [[Obsidian社区插件的安装]]

## 使用

### 简单设置

插件本身不需要太多设置即可使用，当然你也可以使用集中不同打字机模式，如下：

- **Typewriter Scrolling**：第一种打字机模式；
- **Keep Lines Above And Below**：第二种打字机模式，只有在光标所在行接近底部或顶部 n 行时才会固定光标所在行；
- **Highlight Current Line**：高光光标所在行；
- **Dim Unfocused Paragraphs**：聚焦模式；

### 不同模式的微调

#### 第一种打字机模式：居中聚焦

![image.png|712](https://cdn.pkmer.cn/images/20230706181620.png!pkmer)

- **Typewriter Scrolling**：第一种打字机模式；
- **Typewriter Offset**：将光标所在行固定在屏幕位置的百分比处，默认是 50，即放在中间；
- **Only Maintain Typewriter Offset When Reached**：就是说当正文不够长的时候，不会强制居中。换句话说这个设置解决了 Typewriter Scroller 插件出现的标题与正文之间出现大片空白的问题，需要手动开启；
- **Do Not Snap Typewriter With Arrow Keys**：进入打字机模式后，直接按上下键跳转有点比较突兀，为了防止误触可以开启这个设置，将上下键换行改为 ctrl + 上下键；

> [!Tip] 提示
> 其他打字机类插件，会出现在居中模式，在笔记最开头时，也在笔记居中部分开始输入，Only Maintain Typewriter Offset When Reached，此选项转为解决此问题而生，但需要手动开启。

#### 第二种打字机模式：仿真模式

> [!Warning] 注意
> 此模式与前一种只能同时选一个

![image.png|750](https://cdn.pkmer.cn/images/20230706182406.png!pkmer)

- **Keep Lines Above And Below**：打开后，只有在光标所在行接近底部或顶部 n 行时才会固定光标所在行；感觉这个跟传统的实体打字机很像。
- **Amount of Lines Above and Below the Current Line**：调整固定光标所在行时距离底部或顶部的距离；

#### 专注于正在输入的内容，类似 Stille、ulysses

![image.png|750](https://cdn.pkmer.cn/images/20230706182430.png!pkmer)

- **Highlight Current Line**：高光光标所在行；
- **Current Line Highlight Color**：调整光标所在行高光时的颜色（默认的 `#333` 是黑色）；
- **Current Line Underline Thickness**：高光样式显示的样式（切换文件生效，在暗主题下更明显）；
- **Highlight Current Line Only In Focused Note**：打开后只在当前笔记中显示高光；
- **Dim Unfocused Paragraphs**：聚焦模式；
	- **Dimmed Paragraphs' Opacity**：调整未聚焦的段落的不透明度；
	- **Pause Dimming Unfocused Paragraphs While Scrolling**：滚动时未聚焦的段落不会变暗；
	- **Pause Dimming Unfocused Paragraphs While Selecting Text**：选择文本将不会进入变暗；
	- **Paragraph Dimming Behavior in Unfocused Editors**：有文件 split 时的聚焦模式，默认为聚焦于每一个打开页面的最后选择的那行；

### 其他

![image.png](https://cdn.pkmer.cn/images/20230706182443.png!pkmer)

- **Only Activate After First Interaction**：在第一次与笔记编辑区域交互后才激活高光和聚焦；
- **Limit Maximum Number of Characters Per Line**：限制每行最大的字符数；
	- **Maximum Number of Characters Per Line**：限制每行最大的字符数量；
- **Show Header in Fullscreen Writing Focus**：全屏聚焦写作时显示标题；
- **Fullscreen Writing Focus Vignette**：在全屏聚焦写作时，向屏幕边缘添加一个小插图；
	- **Fullscreen Writing Focus Vignette Style**：插图的样式；

> [!Tip] 关联推荐
> - [[editing-toolbar]]：添加一个浮动编辑栏，增强 Obsidian 的可视化编辑体验。
> - [[lapel]]：在标题旁边显示标题等级，并提供快捷切换标题等级的能力
> - [[cm-editor-syntax-highlight-obsidian]]：允许在 Obsidian 的代码块中针对编程语言显示预设的高亮配色方案
> - [[obsidian-comments]]：为笔记增加批注或评论。
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