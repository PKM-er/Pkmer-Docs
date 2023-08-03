---
uid: 2023080322232634
title: Obsidian 插件：Obsidian jTab
tags: ['编辑器', '美化', '音乐相关', 'obsidian插件', 'readme']
description: 使用 jTab 代码块将吉他和和弦图，以图片的形式添加到集中。jTab
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Obsidian jTab

> [!Note] 插件名片
> - 插件名称：Obsidian jTab
> - 插件作者：davfive
> - 插件说明：使用 jTab 代码块将吉他和和弦图，以图片的形式添加到集中。jTab
> - 插件分类：[' 编辑器 ', ' 美化 ', ' 音乐相关 ', 'obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/davfive/obsidian-jtab)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsidian-jtab)

## 概述

使用 jTab 代码块将吉他和和弦图，以图片的形式添加到集中。jTab

![Obsidian jTab](https://cdn.pkmer.cn/covers/obsidian-jtab.PNG!pkmer)

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/davfive/obsidian-jtab/main/README.md)
>

---

## Readme(翻译）

下面是 [[obsidian-jtab]] 插件的自述翻译

### Obsidian jTab 指南

Obsidian jTab 可以在你的笔记中直接显示吉他和弦和吉他谱。

它使用 [jTab](https://jtab.tardate.com/) 库来渲染吉他和弦/吉他谱。

#### jTab 代码块

* ```` ```jtab````
  jTab 行将被渲染。jTab 会自动检测是否存在和弦、吉他指法或两者都有。

* ```` ```jtab-examples````
  输入一个空的代码块以查看所有的 [jTab示例](https://jtab.tardate.com/examples.htm)

* ```` ```jtab-chords````
  输入一个空的代码块以查看所有可用的和弦（仅名称）。从列表中复制/粘贴任何内容到一个普通的 jtab 代码块中以查看和弦图表。

#### Obsidian jTab 的特定增强功能

1. _支持每个代码块中的多个 jTab 行_
   代码块中的每个 jTab 行将被单独渲染。空行将被忽略。

2. _支持代码块中的 Markdown_
   以 \`#&lt;space&gt;\` (\`# \`) 开头的行将在渲染的代码块内作为 Markdown 渲染。

3. _完全可自定义的颜色设置_
   可选择普通模式（黑底白字）、主题模式（跟随您的主题颜色）或自定义背景、行、文本、和弦点以及弦点文本的颜色。在设置中试用一下。

4. _快速访问 jtab-examples_
   将任何 jtab 代码块的语言更改为 jtab-examples（仍然包含您的 jTab），它将渲染示例并在您再次编辑时保留您的 jTab。

5. _快速访问 jtab-chords 和弦列表_
   将任何 jtab 代码块的语言更改为 jtab-chords（仍然包含您的 jTab），它将渲染可用的命名和弦列表，并在您再次编辑时保留您的 jTab。

#### jTab 颜色方案

jTab 的颜色现在可以完全自定义，并且在设置中提供了实时预览。经典模式适用于传统的黑底白字外观，主题模式将跟随您的主题颜色。您可以从这两种模式中选择一种，并更改其中一种颜色，或者自定义混合它们以获得自己喜欢的效果。

#### 学习 jTab

[jTab 主页](https://jtab.tardate.com/) 有一个 [符号指南](https://jtab.tardate.com/index.htm#notation) 和大量的 [示例](https://jtab.tardate.com/examples.htm)。

你可以通过简单地添加以下内容，将 jTab 网站上的所有示例直接放入你的笔记中：

~~~~
```jtab-examples
```
~~~~

#### jTab 渲染注意事项

* _它是否“响应式”？_
  jTab 库本身不是响应式的（即根据移动设备和浏览器宽度自动调整大小），因此在移动设备上的效果可能会有所不同。

* _渲染过宽？_
  jTab 渲染的宽度取决于您设置的 jTab 的长度。您可以将长的 jTab 分成多行来显示。

* _关于 jTab 网站上提到的 chordonly 和 tabonly 类有什么作用？_
  jTab 库在渲染 jTab 时会自动检测是否存在和弦和/或标签。在示例页面上提到的 chordonly 和 tabonly 类不会影响渲染的图像。它们是用于在渲染图像的包含 div/父元素无法正确自动调整图像高度时的旧辅助类。在现代浏览器中，这些类不再需要。

#### 渲染的 jTab 示例

__只有和弦的 jTab__

~~~~
```jtab
E / / / A7 / B7 /
```
~~~~

![codeblock jtab chords](https://raw.githubusercontent.com/davfive/obsidian-jtab/main/docs/images/codeblock-jtab-chords-only.jpg)

__只有指法的 jTab__ (哈哈)

~~~~
```jtab
$4.7 $3.5 $2.5 $1.5 $1.7.$4.6 $2.5 $3.5 $1.7 | $1.8.$4.5 $2.5 $3.5 $1.8 $1.2.$4.4 $2.3 $3.2 $1.2 | $1.0.$4.3 $2.1 $3.2 $2.1 . $1.0 $2.1 $3.2 | $2.0.$3.0.$5.2 $2.1.$3.2.$5.0 $2.1.$3.2.$5.0 . $3.2.$5.0
```
~~~~

![codeblock jtab tabs](https://raw.githubusercontent.com/davfive/obsidian-jtab/main/docs/images/codeblock-jtab-tab-only.jpg)

__带有和弦和指法的 jTab__

~~~~
```jtab
Bm $3 4 4h5p3h4 5 $2 3 5 7 7h8p7 5/7 ||
```
~~~~

![codeblock jtab](https://raw.githubusercontent.com/davfive/obsidian-jtab/main/docs/images/codeblock-jtab-chords-and-tabs.jpg)

__jTab 示例代码块__

~~~~
```jtab-examples
```
~~~~

![codeblock jtab-examples](https://raw.githubusercontent.com/davfive/obsidian-jtab/main/docs/images/codeblock-jtab-examples.jpg)

#### 归属

_社区支持_

* 感谢 @RobColes 提出的 #5（自定义颜色）建议并成为测试人员。

被 Obsidian jTab 使用

* [jTab](https://jtab.tardate.com/)
  * 许可证 LGPL v2.1（在其 [js文件](https://github.com/tardate/jtab/blob/master/javascripts/jtab.js) 中，而不是在普通的 GitHub 许可证文件中）

  根据 LGPL 规则，未修改使用 jTab，除非我不修改 jTab 源代码，只是

  * 禁用 jtab.renderimplicit() 在初始化时运行。（它在页面中搜索 jtab 元素并自动渲染它们）
  * 使用 ES6 封装库以便与 node/ts 一起使用

被 jTab 库使用

* [Raphael](https://github.com/DmitryBaranovskiy/raphael)
  * [MIT 许可证](https://github.com/DmitryBaranovskiy/raphael/blob/master/license.txt)
* [jQuery](https://jquery.com/) - jTab 所需 - 在我的代码中未使用
  * [MIT 许可证](https://github.com/jquery/jquery/blob/main/LICENSE.txt)
