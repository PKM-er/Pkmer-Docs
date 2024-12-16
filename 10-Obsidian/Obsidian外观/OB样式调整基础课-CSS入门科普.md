---
uid: 20241212131713
title: Obsidian 样式：调整基础课 -CSS 入门科普
tags: [Obsidian, CSS, 样式美化]
description: 科普一下 Obsidian 内调整样式的基础知识。
author: Moy
type: other
draft: true
editable: false
modified: 20241214142710
create_date: 2024-12-12T13:17
modified_date: 2024-12-14T00:32
---

# Obsidian 样式：调整基础课 -CSS 入门科普

在各个地方都会经常会看到一些很基础的样式调整提问：

- 怎么修改标题/高亮/行内代码的背景色？
- 怎么限制一篇文章内所有图片的宽度？
- 怎么隐藏特定元素？

今天就科普一下 Obsidian 内调整样式的基础知识。别紧张，并不复杂，跟着做一遍你就能掌握。

> 如果你已经有了 CSS 片段，只想知道怎么让它生效，可以查看 
> [[
> [[Obsidian的CSS代码片段]]

## 如何确定要修改的目标 🎯

> [!Note] 概念
> - 你可以把 Obsidian 理解成为一个浏览器
> - 浏览器的网页内容中，所有东西都被称为这个网页的“元素”

定位了你的目标元素，才能对其进行响应的修改。

### 先定位元素

先按 <kbd>Ctrl+Shfit+I</kbd> 打开开发者工具，在左上角找到一个箭头图标：

![](https://cdn.pkmer.cn/images/202412141252913.webp!pkmer)

比如说我们想要修改标题的背景色，先点击箭头图标（也可以用快捷键 <kbd>Ctrl+Shfit+C</kbd>）然后点击一个标题：

![](https://cdn.pkmer.cn/images/202412141252915.webp!pkmer)

然后就会自动打开「元素」选项卡：

![](https://cdn.pkmer.cn/images/202412141252916.webp!pkmer)

这个界面很复杂，但是我们要关注的地方（目前还）不多。

### 小试牛刀

点击样式左上角的 `element.style` ：

![](https://cdn.pkmer.cn/images/202412141252917.webp!pkmer)

会出现编辑光标：

![](https://cdn.pkmer.cn/images/202412141252918.webp!pkmer)

然后输入 `background-color:`

![](https://cdn.pkmer.cn/images/202412141252919.webp!pkmer)

这里我们为了测试效果，颜色先输入 `red`：

![](https://cdn.pkmer.cn/images/202412141252920.webp!pkmer)

可以看到，刚才选中的对象已经变成红色背景了：

![](https://cdn.pkmer.cn/images/202412141252921.webp!pkmer)

不过这时候要是点一下别的地方，修改会消失，**这很正常**。

因为这里只是临时修改，不会保留，现在我们只是体验一下小小的成功喜悦。

下一步，我们要让修改真正对**标题**生效。

### 确定对象的类

回到元素选项，可以看到：

![](https://cdn.pkmer.cn/images/202412141252922.webp!pkmer)

这样一行被高亮了：

`<span class="cm-header cm-header-2">锁定目标 🎯</span>`

这里面的 `class` 就是我们要关注的重点，它表示这个**标题**的类是：`cm-header cm-header-2`。

类别其实可以当成是“班级”（毕竟英文 class 确实也有班级的含义）。

你如果喊“高二三班的所有同学到这里来，穿上红色衣服！”，他们就知道喊的是自己，并且穿上红色衣服。`class` 提供的就是这么一个*让你能指定对象*的作用。

剧透一下，这里这个标题就有两个类：

- `cm-header` 代表编辑状态的标题，所有的标题都属于这个类
- `cm-header-2` 代表编辑状态的二级标题

这里我们想要修改所有标题的背景色，所以选择喊：

**`cm-header` 的所有同学，过来穿红色衣服！**

> `header` 就是标题没啥问题，如果你好奇 `cm` 是什么意思的话——它是 `CodeMirror` 的缩写。详情见搜索引擎。
> 另外，如果你注意到了，上面写的是 *编辑状态* 的标题，没错，编辑状态和阅读状态下的标题是不同的。对于阅读模式，标题是 `h1` 、`h2` 等等，你可以自行验证。

## 调整样式 🎨

知道了要操作的目标之后，下一步是**真正修改它的样式**。

你需要这样一段代码：

```css
.cm-header {
	background-color: red;
}
```

把这段 CSS 代码应用到你的 OB——如果不知道怎么应用，参考：[[如何在OB内应用CSS修改|如何在OB内应用CSS修改]]。

应用后重复第一步里的流程：随便点击一个标题，查看它的样式：

![](https://cdn.pkmer.cn/images/202412141252924.webp!pkmer)

可以在下方找到刚才写的这个 `background-color: red` 代码。

点击左边的勾勾可以临时禁用效果；

点击右边的 `<style>` 蓝字可以查看**是哪个 CSS 文件添加了这个样式**：

![](https://cdn.pkmer.cn/images/202412141252925.webp!pkmer)

> 所以我会建议你像我一样，在 CSS 文件的最上面写一个 `/* 这是XXX 文件 */` 的注释，方便查找对应的 CSS 文件。

大红色实在不太好看，所以我们点击那个红色的小方块，在弹出的取色器中选择一个喜欢的颜色：

![](https://cdn.pkmer.cn/images/202412141252926.webp!pkmer)

随着我们移动颜色，文件里的效果也会实时更新。

确认完颜色之后，复制那个 `#` 开头的十六进制颜色值，然后替换 CSS 文件中的 `red`。

替换后：

![](https://cdn.pkmer.cn/images/202412141252927.webp!pkmer)

保存 CSS 文件，你新选择的颜色就会生效。

### 常用属性

这里提供几个比较基础的 CSS 属性：

- `color: #66ccff` 对象的颜色，调整文字颜色就可以修改这个属性
- `font-size: 1.2em` 字号大小，`1.0em` 是相对于当前元素的字体大小
- `display: none` 隐藏元素，写了这个就看不到它了 （慎用，免得隐藏了找不回来）
- `opacity: 0.6` 不透明度，0 就是完全透明，和 `display:none` 的区别是哪怕完全透明也会占着位置
- `width/height` 和 `max-width/max-height`：通常给图片使用，指定宽高或者限制最大宽高
- `padding/margin/border` 这些是调整边距用的，详询 Google 或 AI 老师

> [!info] 关于 CSS
> 可以看基础资料：
> [1.5 万字 CSS 基础拾遗（核心知识、常见需求）](https://juejin.cn/post/6941206439624966152)
> [CSS 教程 | 菜鸟教程](https://www.runoob.com/css/css-tutorial.html) 或 [CSS 教程](https://www.w3school.com.cn/css/index.asp)

其实在现在的 AI 时代，你不需要真的把 CSS 知识都学一遍。

大多数时候你就直接问 AI ：**“给我一段用来让文字变大、并且背景色变成好看的蓝色的 CSS 代码”** 就行：

![](https://cdn.pkmer.cn/images/202412141252928.webp!pkmer)

### 用例 🥙

到这里，一开始的几个问题：

- 怎么修改标题/高亮/行内代码的背景色？
- 怎么限制一篇文章内所有图片的宽度？
- 怎么隐藏特定元素？

第一和第三个都已经可以由你自行解决了。

给一点提示，然后你可以自己操作试试看：

高亮 的类是 `cm-highlight`，行内代码的类是 ` cm-inline-code `。

## 进阶

学完这些基础之后，一些挺酷炫的效果，想必你也能知道如何实现了。

例如——「**彩虹标题**」，其实就是给不同级别的标题添加不同的背景色。

类似的「**彩虹文件夹**」，是根据列表中的顺序，循环添加不同的颜色。

「**显示图片注释**」则是稍微复杂一点点，用 `::after` 在指定对象的后面添加一个新元素：

```css
/* 图片常驻显示注释 */
.internal-embed.image-embed::after {
	content: attr(alt);
	font-size: 0.8em;
	display: block;
	text-align: center;
	padding: 0.5em;
}
```

这里用 `attr(alt)` 获取了图片的 alt 文本，然后将它用指定的样式显示了出来。

而且如你所见，可以同时指定两个类（ `.internal-embed.image-embed` ）来明确限制范围：既是 `internal-embed` 内嵌对象，又是一个 `image-embed` 嵌入图片对象。

### 只对特定笔记生效

回到文章开头的最后一个问题——

如果我的某篇文章里图片特别多，我想让这篇文章里的图片都缩小显示，怎么办呢？

首先你可以直接用 [PKMer_Obsidian 样式：限制笔记内的图片宽度（可点击放大）]( https://pkmer.cn/show/20240829210510 ) 给出的代码。

自己想要实现的话，先添加这个代码：

```css
.small-image img {
    max-width: 400px !important;
    max-height: 400px !important;
}
```

这时候笔记里什么都不会发生，因为我们限制了 `.small-image` 元素内的 `img` 图片元素生效。

那这个 `.small-image` 元素在哪里呢？

先新增一个笔记属性：

![](https://cdn.pkmer.cn/images/202412141252929.webp!pkmer)

属性名写 `cssclasses`，然后输入 `small-image` 回车：

![](https://cdn.pkmer.cn/images/202412141252930.webp!pkmer)

这时候，这个笔记里的图片就都会限制大小了。

这是 Obsidian 里一个特殊的内置属性，填写在这里的所有类（它是一个列表，可以写多个值）都会被添加到当前笔记的根节点。

所以我们可以用 `cssclasses` 来限制一些样式的作用范围。

## 结语

- 如果能看到这里，恭喜你，Obsidian 里的样式调整基础你已经掌握得差不多了。
- 剩下的就是多实践啦，CSS 的技巧还有样式非常多，这些都是一蹴而就，需要慢慢在实战中积累
- 我们使用的“Obsidian 主题”，其实本质也就是应用了不同的 CSS 片段。

这个领域深下去可以很深，涉及到网页前端开发的内容（其实 Obsidian 就相当于是在给你显示一个可交互的网页），所以也建议知道怎么弄出自己想要的样式就可以，没必要过于深入（除非确实很感兴趣）。

常言道：**授人以鱼，不如授人以渔**。希望这篇文章能让你获得「渔」。
