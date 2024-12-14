---
uid: 20241213233727
title: 如何在 OB 内应用 CSS 修改
tags: [Obsidian]
description: 
author: 
type: other
draft: false
editable: false
modified: 20241214172520
aliases: []
create_date: 2024-12-13T23:37
modified_date: 2024-12-14T00:33
done: true
finished_date: 2024-12-13
output: [PKMer, OB中文论坛]
---

# 如何在 OB 内应用 CSS 修改

> 如果你看到群友或者资料里写“用 CSS 改”，或者下载到了一个 CSS 文件，不知道如何使用——这篇文章能教你学会它！

## CSS 文件

CSS 片段其实就是这样一段的代码：

````
```css
/* 隐藏标题栏文本 */
.titlebar-text {
  display: none;
}

```
````

想要在 OB 内应用 CSS，你需要做的是：

1. 创建一个文本文档，命名为 `xxx.css` （后缀名用 `css` 而不是 `txt`）
2. 用记事本或者任意编辑器打开，将 css 代码粘贴进去，保存

（有现成的 css 文件可以直接前往下一步）

## 启用 CSS

在 OB 设置中找到 **外观**，往下翻到 **CSS 代码片段** 并点击最右边的**文件夹按钮**：

![](https://cdn.pkmer.cn/images/202412141725823.webp!pkmer)

将 CSS 文件放入打开的文件夹，然后回到 OB 点击文件夹边上的**刷新按钮**。

对应 CSS 片段会出现在下方，打开开关即可生效。

![](https://cdn.pkmer.cn/images/202412141725824.webp!pkmer)

> 顺便，上一章里的那个 **隐藏标题栏文本** 其实就是个可用的小片段，可以用它做个测试！成功的话你的标题栏中文本会隐藏起来~

## 修改 CSS 代码

用文本编辑器修改对应的 CSS 文件之后，保存，OB 内会实时更新效果。

在你调试一些样式的时候，**实时更新**的特性会很有帮助。

另外，推荐使用像是 [VSCode](https://code.visualstudio.com/) 这样的代码编辑器，除了会提供语法高亮、自动补全外，还有像是颜色代码高亮、取色器之类的便利工具：

![](https://cdn.pkmer.cn/images/202412141725825.webp!pkmer)

如果想要尝试自己修改一些 OB 内的样式（例如标题颜色），可以查看：[[OB样式调整基础课-CSS入门科普]]。
