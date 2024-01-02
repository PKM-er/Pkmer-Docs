---
uid: 20230703182628
title: Obsidian 样式：美化高亮样式
tags: [Obsidian, 样式, CSS, 高亮：美化高亮样式]
description: Obsidian 样式：美化高亮样式
author: OS
type: other
draft: false
editable: false
modified: 20231206113811
---

# Obsidian 样式：美化高亮样式

## 引言

所谓高亮指 Markdown 语法中被 `==` 包裹起来的内容，也就是两个等号包裹的内容会被渲染为高亮格式。

高亮可以帮我们在日常笔记中，快速标记重点。如果你在构建自己的笔记系统，那么我强力建议将斜体，粗体，高亮，进行区分，规划不同的笔记动作与其对应。

- 加粗：我一般会用在概念，定义
- 斜体：我一般会用在具体人，事件，决议
- 高亮：重点内容

不过高亮在默认主题下，高亮样式可能有点单调，如果你希望微调高亮样式，那么参考下面的内容

## 使用

- 你可以寻找对应的社区主题
- 你可以使用一些插件来修改高亮，比如 [[obsidian-dynamic-highlights]]
- 又或是下面的样式片段，如何使用样式片段，可以参考 [[Obsidian的CSS代码片段]]
	- 这里我没有特别强化具体颜色样式，因为它们都带有 color 字样，你可以随时参考其他颜色，来让他更加个性化

![image.png](https://cdn.pkmer.cn/images/202312061126730.png!pkmer)

启用下面的片段，修改亮色默认下背景颜色为红色 ，黑暗模式为蓝色就是下面效果，当然代码中的颜色数值可以自己调节。

![image.png](https://cdn.pkmer.cn/images/202312061127056.png!pkmer)

![image.png](https://cdn.pkmer.cn/images/202312061128068.png!pkmer)

```CSS
/*实时编辑*/
.theme-light .markdown-source-view div.cm-line span.cm-highlight {
	background-color:red;
    color: white;
	border-radius: 5px;
	padding:2px;
}
.theme-dark .markdown-source-view div.cm-line span.cm-highlight {
	background-color:#3464ff;
    color:white;
	padding:2px;
	border-radius: 5px;
}

/*阅读模式*/
.theme-light div p mark {
	background-color:red;
    color: white;
	border-radius: 5px;
	padding:2px;
}
.theme-dark div p mark {
	background-color:#3464ff;
    color: white;
	border-radius: 5px;
	padding:2px;
}
```

## 更多的高亮样式

感谢 Blue Topaz qq 群友@Lemonadio 贡献

这个高亮样式的颜色使用默认颜色，样式上进行改变

效果如下：

![6K{I`YR06`KJAI~N8ZM6XFK.jpg](https://cdn.pkmer.cn/images/202312061134327.jpg!pkmer)

![image.png](https://cdn.pkmer.cn/images/202312061134347.png!pkmer)

代码:

```css
/*荧光笔高亮 by: Lemonadio*/
/*写着写着就能用了,就不改代码了.*/
.cm-s-obsidian span.cm-formatting-highlight, .cm-s-obsidian span.cm-highlight,
:is(.markdown-preview-view,.markdown-rendered) mark {
  display: inline;
  box-sizing: border-box;
  background-color: inherit;
  background-image: linear-gradient(rgba(255,208,0,0.5),rgba(255,208,0,0.5));
  background-repeat: no-repeat;
  background-size: 100% 50%;
  background-position: 100% 53%;
  border-radius: 1em;
  padding: 0 0.2em;
}

```