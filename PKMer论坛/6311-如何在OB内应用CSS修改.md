---
uid: 6953
title: 如何在OB内应用CSS修改
tags: [obsidian, css]
description: 如何在OB内应用CSS修改
author: Moy
type: other
draft: false
editable: false
modified: 20251126232704
forum_url: https://forum.pkmer.net/t/6311
---

# 如何在OB内应用CSS修改

> [!INFO] 本文档由 PKMer 论坛导入  
> - 作者: Moy
> - 原始链接: [如何在OB内应用CSS修改](https://forum.pkmer.net/t/6311)

---

# 如何在OB内应用CSS修改

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
![241213_如何在OB内应用CSS修改-img-241213_233756.webp](https://cdn.pkmer.cn/original/1X/901df5ad113c73f8a89143b77d2b00346f37a935.webp)

将 CSS 文件放入打开的文件夹，然后回到 OB 点击文件夹边上的**刷新按钮**。

对应 CSS 片段会出现在下方，打开开关即可生效。
![241213_如何在OB内应用CSS修改-img-241213_233856.webp](https://cdn.pkmer.cn/original/1X/08477b43415542b50d7b09f217635c7882e7c84a.webp)

> 顺便，上一章里的那个 **隐藏标题栏文本** 其实就是个可用的小片段，可以用它做个测试！成功的话你的标题栏中文本会隐藏起来~

## 修改 CSS 代码
用文本编辑器修改对应的 CSS 文件之后，保存，OB 内会实时更新效果。
在你调试一些样式的时候，**实时更新**的特性会很有帮助。

另外，推荐使用像是 [VSCode](https://code.visualstudio.com/) 这样的代码编辑器，除了会提供语法高亮、自动补全外，还有像是颜色代码高亮、取色器之类的便利工具：
![241213_如何在OB内应用CSS修改-img-241213_234401.webp](https://cdn.pkmer.cn/original/1X/70dc546cfb4dd5b0581799f7878c5f7e833b30d4.webp)

如果想要尝试自己修改一些 OB 内的样式（例如标题颜色），可以查看：[[241212_OB样式调整基础课：CSS入门科普|OB样式调整基础课：CSS入门科普]]。
