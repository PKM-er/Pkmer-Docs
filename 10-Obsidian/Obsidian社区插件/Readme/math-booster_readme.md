---
uid: 2023102611080580
title: Obsidian 插件：【Readme】Math Booster
tags: ['obsidian插件', 'readme']
description: 将您的Obsidian转化为功能强大的LaTeX。动态编号的定理环境和方程，实时建议定理/方程，显示定理/方程的反向链接，并在引用和引用中实时渲染方程。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】Math Booster

> [!Note] 插件名片
> - 插件名称：Math Booster
> - 插件作者：Ryota Ushio
> - 插件说明：将您的 Obsidian 转化为功能强大的 LaTeX。动态编号的定理环境和方程，实时建议定理/方程，显示定理/方程的反向链接，并在引用和引用中实时渲染方程。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/RyotaUshio/obsidian-math-booster)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?math-booster)

## 概述

将您的 Obsidian 转化为功能强大的 LaTeX。动态编号的定理环境和方程，实时建议定理/方程，显示定理/方程的反向链接，并在引用和引用中实时渲染方程。

![Math Booster](https://cdn.pkmer.cn/covers/math-booster.png!pkmer)

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/RyotaUshio/obsidian-math-booster/master/README.md)
>

---

## Readme(翻译）

下面是 [[math-booster]] 插件的自述翻译

# Obsidian 的数学增强插件

使用 Math Booster 将您的 Obsidian 转变为***强化版 LaTeX***。

![屏幕截图](docs/fig/screenshot.png)

**Math Booster**是一个 [Obsidian.md](https://obsidian.md/) 插件，通过几个强大的功能增强您的数学笔记体验，包括：

- [定理环境](https://ryotaushio.github.io/obsidian-math-booster//math-callouts)
- [方程编号](https://ryotaushio.github.io/obsidian-math-booster//equation-number)
- [证明环境](https://ryotaushio.github.io/obsidian-math-booster//proofs) *(实验性的)*
- [定理/方程的实时建议](https://ryotaushio.github.io/obsidian-math-booster//suggest)
- [显示定理/方程的反向链接](https://ryotaushio.github.io/obsidian-math-booster//backlinks)
- [在callouts和引用块中实时渲染方程](https://ryotaushio.github.io/obsidian-math-booster//math-preview)

定理和方程可以进行**动态/自动编号**，如果需要，您也可以进行静态/手动编号。

由于与 [MathLinks](https://github.com/zhaoshenzhai/obsidian-mathlinks) 的集成，定理/方程的链接会以其标题或编号的方式显示，类似于 LaTeX 中的 `cleveref` 包。 (无需手动输入别名!)

您还可以使用 CSS 代码片段自定义定理 callouts 的外观。请参阅 [样式库](#styles-gallery) 以获取示例。

有关详细信息，请参阅 [文档](https://ryotaushio.github.io/obsidian-math-booster/)。

还请查看 [No More Flickering Inline Math](https://github.com/RyotaUshio/obsidian-inline-math) 插件，它可以让您更舒适地处理内联数学公式。

(屏幕截图中的定理引用自 [Tao, Terence, ed. An introduction to measure theory. Vol. 126. American Mathematical Soc., 2011.](https://terrytao.files.wordpress.com/2012/12/gsm-126-tao5-measure-book.pdf))

<https://ryotaushio.github.io/obsidian-math-booster/>

依赖项

需要安装并启用以下社区插件。

- [MathLinks](https://github.com/zhaoshenzhai/obsidian-mathlinks) 版本 >= 0.4.5
- [Dataview](https://github.com/blacksmithgu/obsidian-dataview) 版本 >= 0.5.56

此外，您需要安装 [CMU Serif](https://www.cufonfonts.com/font/cmu-serif) 字体，以充分享受下面列出的一些预设样式。此外，使用日本语言环境渲染证明时，需要安装 [Noto Sans JP](https://fonts.google.com/noto/specimen/Noto+Sans+JP) 字体。

## 安装

尽管这个插件仍在 Obsidian 团队的审核中，但您可以使用 BRAT 进行安装。

1. 安装 [BRAT](obsidian://show-plugin?id=obsidian42-brat) 社区插件并启用它。
2. 转到**选项**。在**Beta 插件列表**部分，点击**添加 Beta 插件**按钮。
3. 在弹出的提示中复制并粘贴 `https://github.com/RyotaUshio/obsidian-math-booster`，然后点击**添加插件**。
4. （可选）在页面顶部打开**启动时自动更新插件**。
5. 转到**社区插件 > 已安装插件**。您将在列表中找到 "Math Booster"。点击切换按钮以启用它。

## 贡献

**我需要你的帮助！**

- 如果你发现有什么问题没有正常工作，请随时创建一个新的问题。也欢迎提问。
- 如果你有任何改进 Math Booster 和我们的体验的想法，请发送一个拉取请求！
  - **即使你不会编程，你的帮助仍然需要用于改进文档和 README。** 例如，这个插件的活跃更新已经使文档中的一些图片过时了...
  - 当然，程序员的贡献是非常受欢迎的。（对于我来说，我对 TypeScript/JavaScript/HTML/CSS 还很陌生。对我来说，制作这个插件是开始学习它们的唯一目的。所以你的帮助是真正需要的。）

## 路线图

- 从 LaTeX 导入：导入 ArXiv 论文、用 LaTeX 编写的研究/文献笔记等。
- 导出为 LaTeX：在 Obsidian 中编写研究笔记，然后将其导出为 LaTeX 格式。
- 更加用户友好的本地设置界面。
样式库

### 简洁

![简洁亮色](docs/fig/plain.png)

![简洁暗色](docs/fig/plain-dark.png)

[查看CSS片段](https://github.com/RyotaUshio/obsidian-math-booster/blob/master/styles/plain.css)

### 带边框

![带边框](docs/fig/framed.png)

![带边框（深色）](docs/fig/framed-dark.png)

[查看 CSS 代码片段](https://github.com/RyotaUshio/obsidian-math-booster/blob/master/styles/framed.css)

### MathWiki 风格

这个漂亮的风格来自于 [MathWiki](https://github.com/zhaoshenzhai/MathWiki)。非常感谢 [MathWiki](https://github.com/zhaoshenzhai) 的所有者 [翟兆申](https://github.com/zhaoshenzhai)，以及 [MathLinks](https://github.com/zhaoshenzhai/obsidian-mathlinks) 插件，他们乐意将其包含在本文档中。

![MathWiki风格](docs/fig/mathwiki.png)

[查看CSS代码片段](https://github.com/RyotaUshio/obsidian-math-booster/blob/master/styles/mathwiki.css)

### 生动

![生动亮](docs/fig/vivid-light.png)

![生动暗](docs/fig/vivid-dark.png)

[查看CSS片段](https://github.com/RyotaUshio/obsidian-math-booster/blob/master/styles/vivid.css)
