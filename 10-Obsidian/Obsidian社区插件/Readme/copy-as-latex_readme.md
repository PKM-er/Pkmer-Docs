---
uid: 2023080322163490
title: Obsidian 插件：【Readme】Copy as LaTeX
tags: ['obsidian插件', 'readme']
description: 快速将Markdown复制为Latex，带有引文的插件
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Copy as LaTeX

> [!Note] 插件名片
> - 插件名称：Copy as LaTeX
> - 插件作者：mo-seph
> - 插件说明：快速将Markdown复制为Latex，带有引文的插件
> - 插件分类：['obsidian插件', 'readme']
> - 项目地址：[点我访问](https://github.com/mo-seph/obsidian-copy-as-latex)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?copy-as-latex)

## 概述

快速将Markdown复制为Latex，带有引文的插件



> [!tip] 原文出处
> 
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/mo-seph/obsidian-copy-as-latex/master/README.md)
> 

---

## Readme(翻译）

下面是 [[copy-as-latex]] 插件的自述翻译


# 复制为Latex

设计用于在Obsidian环境中进行大部分写作，包括从一个良好管理的参考文献集合中引用等。比Pandoc更轻量级，不假设你正在写整个文档。目标是：
- 简单
- 快速

## 示例
```markdown

# 主标题
一些文本，其中 _一些_ 是斜体，有一个 $x=7$ 的方程和一个 [[@author2021Paper]] 的引用和一个 [https://link.com](https://link.com)。

另一个标题

### 子子标题

这是一个列表：
- 项目1
- 项目2
- 项目3
	- 子项目3.1
	- 子项目3.2

1. 第一个编号项目
2. 第二个编号项目
```latex
变成：
```latex
\section{主标题}

一些文本，其中\emph{一些}是斜体，有一个$x=7$的方程和一个\cite{author2021Paper}的引用和一个\url{https://link.com}。

\subsection{另一个标题}

\subsubsection{子子标题}

这是一个列表：

\begin{itemize}
	\item 项目1
	\item 项目2
	\item 项目3
	\begin{itemize}
		\item 子项目3.1
		\item 子项目3.2
	\end{itemize}
\end{itemize}

\begin{enumerate}
	\item 第一个编号项目
	\item 第二个编号项目
\end{enumerate}
```

## 特性
这依赖于https://github.com/syntax-tree/mdast-util-from-markdown和https://github.com/syntax-tree/mdast-util-gfm进行解析。这并不完全符合Obsidian的功能集，但大多数关键功能都在其中。
文本特性：
- [X] 列表 - 支持`itemize`和`enumerate`，嵌套目前看起来还可以。
- [X] 标题
- [X] 粗体
- [X] 斜体
- [X] 外部链接
- [X] 自动外部链接（除了Obsidian比GFM解析器更慷慨）
- [ ] 脚注（只有使用内联脚注才有意义，Obsidian支持，但GFM解析器不支持）
- [ ] 高亮（同样，GFM中没有）
- [X] 特殊字符：`& % $ # _ { } ~ ^ \` 

复杂特性：
- [X] 代码块 - 将语言传递到`listings`包的定义中。
- [X] 引用 - 目前查看以`@`开头的内部链接，并转换为`\cite{...}`（或根据设置转换为`\autocite{}`）
- [X] 交叉引用 - 查看以`^`开头的内部链接，并转换为`\ref{...}`
- [X] 将块标识转换为`\label{}`元素
- [~] 参考文献 - 最好有一种从`.bib`文件中提取引用的方法（实验性的）
- [ ] 图片 - 应该可以将图片链接转换为连接到文件名的内容
- [ ] 标题

如何使用
确保您的latex文件包含`soul`和`listings`包，然后就可以开始了。

## 引用
引用很快变得复杂 - 参见此处的讨论：https://github.com/mo-seph/obsidian-copy-as-latex/issues/4。为了在Obsidian和Latex之间找到一种适应方式，扩展引用解析部分解析括号以获取引用周围的信息。例如，`here is a (e.g. [[@example]] p.22)`将给出一个引用，其中`e.g.`是`pre`部分，`p.22`是`post`部分。然后根据这些部分的存在与否，有一系列模板：`bare`表示两者都没有，`pre`、`post`、`surrounded`表示其中之一或两者都有，而`paren`表示当pre和post都存在但都为空时，例如`([[@ref]])`。这意味着可以设置不同的点，例如`\citep`与`\citet`，例如：

```
"bare" : "\\citep{#id}",
"surrounded" : "\\cite[#pre][#post]{#id}}",
"pre" : "\\cite[#pre]{#id}}" ,
"post" : "\\cite[#post]{#id}}",
"paren" : "\\citet{#id}"	
```

这可能会改变，但目前它会获取`pre`和`post` - 链接之前和之后的部分，不包括空格。然后，将其模板化为`\cite`或`\autocite`的正确形式，使用可定义的模板，其中`{{[pre]}}`表示“使用`pre`的值，如果存在，保留方括号；如果不存在，则去掉它们 - 因此，使用`\autocite{{(pre)}}{{[post]}}{{{id}}}`和` (e.g. [[@author2021Paper]] p.22)`，它会生成`\autocite(e.g.)[p.22]{author2021Paper}`。

复制引文
这是一个命令，可以让您复制从参考文献中缺失的引文（例如，我刚刚在我的Overleaf中添加了一些文本，需要更新`.bib`文件）
使用方法：
- 在配置中设置您的主要参考文献文件（源）
- 将当前论文的参考文献复制到剪贴板（目标）
- 从命令面板中运行“复制缺失的引文”。它将查找Markdown文档中的所有引文键，并将源中存在但目标中缺失的引文复制到剪贴板。

# 开发

## 更新日志

### 1.9
- 各种样式的引用模板
- 复制缺失引用命令

### 1.8
- 转义特殊字符

## 许可证

此代码根据MIT许可证发布。



