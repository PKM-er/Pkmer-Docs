---
uid: 20230723231037
title: 在 Obsidian 中为图片添加注释
tags: [Obsidian, 插件, 图片注释]
description: 在 Obsidian 中为图片添加注释，多种方法让你为笔记中的图片增加注释信息
author: Huajin
type: other
draft: false
editable: false
modified: 20230723234819
---

# 在 Obsidian 中为图片添加注释

## Markdown 插入图片语法

![在obsidian中为图片添加注释示例图1.png|577](https://cdn.pkmer.cn/images/%E5%9C%A8obsidian%E4%B8%AD%E4%B8%BA%E5%9B%BE%E7%89%87%E6%B7%BB%E5%8A%A0%E6%B3%A8%E9%87%8A%E7%A4%BA%E4%BE%8B%E5%9B%BE1.png!pkmer)

在 obsidian 中我们可以用下面两种格式插入图片（`!` 代表让图片可见）

```md
![图片信息](图片链接 "注释")
![[图片名字.png|大小 "注释"]]
```

还可以通过 HTML 标签来调整图片的大小和位置。

```html
<img src="图片链接" alt="图片描述">
```

> [!NOTE]- 图片链接
> - 对于 `![[]]` 格式，图片链接只可以是本地图片，直接填写 Vault 中本地图片的名称即可；
> - 对于 `![]()` 格式，`src` 后的图片链接可以是在线图片链接，也可以是本地图片的路径；
>
> 如果要使用本地图片的路径，在 Markdown 中可以使用相对路径或绝对路径
> 1. 使用相对路径：如果你的 Markdown 文件和图片位于同一文件夹中，可以直接使用图片的文件名作为路径。例如：`![图片描述](image.jpg)`
> 2. 使用相对路径的文件夹结构：如果图片位于 Markdown 文件的上级文件夹中的 `images` 文件夹中，可以使用 `../` 来返回上级文件夹，并进入 `images` 文件夹。例如：`![图片描述](../images/image.jpg)`
> 3. 使用绝对路径：如果你知道图片在电脑上的完整路径，可以直接使用该路径。例如：`![图片描述](C:\Users\Username\Documents\image.jpg)`
>
> 需要注意的是，使用本地图片路径时，确保图片文件存在并且路径正确。

> [!NOTE]- 调整图片的大小
> 要调整图片的大小，可以使用 `<img>` 标签，并设置宽度和高度的属性。例如：
>
> ```html
> <img src="图片链接" alt="图片描述" width="300" height="200">
> ```
>
> 其中，`src` 属性是图片的链接，`alt` 属性是图片的描述，`width` 和 `height` 属性分别是图片的宽度和高度。你可以根据需要修改宽度和高度的数值。只填 `width` 或者 `height` 的值可以让图片按比例缩放

> [!NOTE]- 调整图片的位置
> 要调整图片的位置，可以使用 CSS 样式。例如，要使图片居中显示，可以使用以下代码：
>
> ```html
> <img src="图片链接" alt="图片描述" width="300" align="center"> 
> ```
>
> 在上述代码中，`align` 属性设置为 "center" 可以使段落中的内容居中对齐。除了居中对齐，你还可以使用其他 CSS 样式来调整图片的位置，如左对齐（`align="left"`）和右对齐（`align="right"`）等。

## 为图片添加注释

这里提供两种方法，第一种需要用到 HTML 的语法，在阅读模式和编辑模式都生效。第二种语法更简单，但是只在阅读模式生效，编辑模式不显示（插件与最新版 ob 不兼容。有很多人提了 ISSUE，作者提供了一个 0.0.15 alpha 版本，但是并没有成功解决这个问题，且正在努力更新该插件，在下一版本实现兼容）

### 方法一：利用 html 语法

```html
<figure>
	<img src="这里是你的图片链接" height="500">
	<center><figcaption>这里写你的注释</figcaption></center>
</figure>
```

其中，`<figure>` 是指明此处是一个图片，第二行就是用 html 呈现的图片的语法格式，`<figcaption>` 是一个 HTML 标签，用于为 `<figure>` 元素（表示独立的、完整的内容块，如图像、图表、照片等）提供标题或说明文字，常与 `<figure>` 标签一起使用。如果你的图片居中，别忘了用 `<center>` 标签让你的注释居中。

`````示例代码
```html
<figure>
	<img src="https://cdn.pkmer.cn/images/202306171440283.gif" height="300">
	<center><figcaption>图源自 PKMER</figcaption></center>
</figure>
```
`````

把这段 html 复值到你的 md 文件中，就可以看到最开头的图片的效果了。（不用放在代码框中）

### 方法二：利用插件 Image Caption

> [!Note] 插件名片
>
> - 插件名称：Image Caption
> - 插件版本：0.14.2
> - 插件作者：Brian Carlsen
> - 插件描述：把图片描述以注释的形式展示在图片下方
> - 插件项目地址：[点我跳转](https://github.com/bicarlsen)

#### 概述

使用插件得到的结果和直接用 html 的结果是一样的，但是插件目前在最新版 ob 的编辑模式中并不显示（支持旧版），只在预览模式中显示。因此建议使用前一种方法。据作者所说，该插件的下一版会解决这个问题，届时自然这个插件更优，因为他的语法比起前者实在简单许多。

#### 效果&特性

![在obsidian中为图片添加注释示例2.png|505](https://cdn.pkmer.cn/images/%E5%9C%A8obsidian%E4%B8%AD%E4%B8%BA%E5%9B%BE%E7%89%87%E6%B7%BB%E5%8A%A0%E6%B3%A8%E9%87%8A%E7%A4%BA%E4%BE%8B2.png!pkmer)

#### 语法

`````示例代码
```md
![[图片链接|注释内容|图片大小]]
![注释内容|图片大小](图片链接)
```
`````

也就是说，他会把插入图片中的提示信息作为注释内容，直接添加到图片下方。

```md
!["图片源自 PKMER"|650](https://pkmer.cn/img/illustrations/home.png)
```

#### 设置

- **Lable**：给注释加上前缀；
- **CSS**：可以给注释添加 CSS，记得加上 `text-align: center;`，这样注释才会居中；
- **Dlimeter**：分隔符设置，用于确定你的注释，分隔符包含的部分就是显示的注释；
	- 例如我们在设置中填上 `"`，他就会把引号包括的内容视作注释 `!["注释"..](link)`，注释中就不会显示出引号。
	- 由于识别的逻辑是只识别第一个和最后一个字符，因此在注释中间如果有分隔符，无需转义；
- **Caption as HTML**：允许注释以 HTML 渲染；
