---
uid: 20230707224314
title: Pandoc 学术指南
tags: [pandoc, 学术]
description: 利用pandoc进行论文写作
author: 二宝学长
type: other
draft: false
editable: false
modified: 20230707232002
---

# Pandoc 学术指南

在学术写作中，Pandoc 可以帮助你将 Markdown 或其他格式的文档转换为 PDF、HTML、Word 等格式，这对于撰写论文、报告或书籍非常有用。

附官方手册：[https://pandoc.org/MANUAL.pdf](https://pandoc.org/MANUAL.pdf)

PS:Pandoc 真的是我折腾学习了好久的东西，到现在我也没全部掌握

## 安装 pandoc

你可以从 Pandoc 的官方网站下载适合你操作系统的版本。安装过程通常很直接，只需要按照提示进行即可。[下载地址](https://pandoc.org/installing.html)。

## pandoc 基本使用

在命令行中，你可以使用以下的基本语法来转换文档：

```bash
pandoc source.ext -o output.ext
```

在这里，`source.ext` 是你要转换的源文件，`output.ext` 是你想要输出的文件。例如，如果你想要将一个 Markdown 文件转换为 HTML，你可以使用以下的命令：

```bash
pandoc example.md -o example.html
```

### 数学公式

Pandoc 支持 LaTeX 数学公式的解析和渲染。你可以在 Markdown 文件中直接使用 LaTeX 数学公式语法。以下是一些基本的规则：

1. **行内公式**：你可以使用 `$...$` 来插入行内公式。例如，`$E=mc^2$` 会插入一个行内公式 E=mc^2。
2. **显示公式**：你可以使用 `$$...$$` 来插入显示公式。显示公式会单独占据一行，并且会被居中对齐。例如，`$$E=mc^2$$` 会插入一个显示公式 E=mc^2。
3. **公式环境**：你也可以使用 LaTeX 的公式环境，如 `equation`、`align` 等。例如：

```
\begin{equation}  
E=mc^2  
\end{equation}

会插入一个带有编号的公式。
```

当你使用 Pandoc 来转换你的文档时，它会自动解析和渲染你的数学公式。如果你转换为 HTML，Pandoc 会使用 MathJax 来渲染公式；如果你转换为 PDF，Pandoc 会使用 LaTeX 来渲染公式。

### pandoc 中的 markdown

基本和 [[Markdown]] 的基础语法一致

**标题**

你可以使用 `#` 来创建标题，使用的 `#` 的数量决定了标题的级别。例如，`# 标题1` 会创建一个一级标题，`## 标题2` 会创建一个二级标题。

**强调和加粗**

你可以使用 `*` 或 `_` 来强调文本，使用两个 `*` 或 `_` 来加粗文本。例如，`*强调*` 会创建一个强调的文本，`**加粗**` 会创建一个加粗的文本。

**列表**

你可以使用 `*`、`-` 或 `+` 来创建无序列表，使用数字和 `.` 来创建有序列表。例如：

```
- 无序列表项1
- 无序列表项2
1. 有序列表项1
2. 有序列表项2
```

**链接和图片**

你可以使用 `[链接文本](链接地址)` 来创建链接，使用 `![图片描述](图片地址)` 来插入图片。

**代码**

你可以使用反引号 `` ` `` 来插入行内代码，使用三个反引号来插入代码块。例如，`` `代码` `` 会插入一个行内代码。

**表格**

你可以使用 `|` 来创建表格。例如：

```
| 列1 | 列2 |
| ---- | ---- |
| 单元格1 | 单元格2 |
```

会创建一个包含一个头部和一个数据行的表格。

**脚注**

你可以使用 `[^脚注标识]` 来插入脚注，然后在文档的任何地方使用 `[^脚注标识]: 脚注内容` 来定义脚注。例如，`这是一个脚注[^1]` 和 `[^1]: 这是脚注的内容` 会创建一个带有脚注的文本。

### 引用和参考文献

在学术写作中，引用和参考文献是非常重要的部分。Pandoc 提供了一种方便的方式来处理引用和参考文献。

首先，你需要创建一个参考文献数据库。这是一个包含你所有引用的文档的列表。这个数据库可以是一个 BibTeX 文件，也可以是一个 Citation Style Language JSON (CSL JSON) 文件。每个条目都有一个唯一的 ID，你可以在你的文档中使用这个 ID 来引用这个条目。

在你的文档中，你可以使用 `[@citationID]` 来插入一个引用。在这里，`citationID` 是你在参考文献数据库中的条目的 ID。你也可以添加一个前缀、一个后缀或者一个定位符。例如，`[@smith04, p. 33]` 会插入一个引用，指向 Smith 的 2004 年的工作，特别是第 33 页。

你也可以插入多个引用，只需要在 `[]` 中用分号隔开它们。例如，`[@smith04; @johnson05]` 会插入两个引用。

在你的文档的末尾，你可以使用 `---` 来插入一个参考文献列表。Pandoc 会自动从你的参考文献数据库中获取所有你引用的条目，并按照你指定的格式生成一个参考文献列表。

你可以使用 `--csl` 选项和一个 CSL 文件来指定引用和参考文献的格式。例如：

```
pandoc --csl=apa.csl source.md -o output.html
```

在这里，`apa.csl` 是一个 CSL 文件，它指定了 APA 引用格式。你可以从 [Zotero的CSL样式库](https://www.zotero.org/styles) 中下载各种不同的 CSL 文件。

当然网友们纷纷创建了符合自己毕业院校的引用样式，具体可见：[大学学位论文Zotero样式](https://zhuanlan.zhihu.com/p/590867178)

不过需要注意：**参考文献 csl 格式不支持多语言识别，导出之后可能还需要后期调整样式，例如表格和图片大小，等等。**

### 交叉引用

Pandoc 的 Markdown 支持图表的交叉引用，这是通过 Pandoc 的 filter，特别是 pandoc-crossref filter 来实现的。

首先，你需要安装 pandoc-crossref filter，[下载地址](https://github.com/lierdakil/pandoc-crossref/releases/tag/v0.3.16.0b)。安装完成后，你可以在你的文档中使用特殊的语法来创建和引用图表。

以下是基本使用：

**创建图表**：你可以使用以下的语法来创建一个带有标签的图表

```
![这是图表的描述](这是图表的地址){#fig:图表的标签}
```

**引用图表**：你可以使用以下的语法来引用一个图表

```
@fig:图表的标签
```

**转换文档**：当你转换你的文档时，你需要使用 `--filter pandoc-crossref` 选项来启用 pandoc-crossref filter。

```
pandoc --filter pandoc-crossref -o output.html source.md
```

在这里，`source.md` 是你的源文件，`output.html` 是你的输出文件。

### 组合语法

这些命令假设你已经安装了 Pandoc、LaTeX 和 pandoc-citeproc。如果你还没有安装这些工具，你需要先安装它们。我自用安装的 latex 是 [tinytex](https://yihui.org/tinytex/cn/)。

**生成 word**

- `--resource-path=.:images` 选项会让 Pandoc 在当前目录（`.`）和 `images` 目录中查找图片。
- `template.docx` 是你的 Word 模板
- `style.csl` 是你的 CSL 文件
- `references.bib` 是你的参考文献数据库
- `source.md` 是你的源文件，`output.docx` 是你的输出文件
- `--toc` 选项会生成一个目录，`-N` 选项会给所有的章节添加编号
- `--mathjax` 选项会让 Pandoc 使用 MathJax 来渲染数学公式
- `--filter pandoc-crossref` 选项会启用 pandoc-crossref 过滤器，它会处理你的交叉引用。

```
pandoc --resource-path=.:images --reference-doc=template.docx --filter pandoc-citeproc --filter pandoc-crossref --csl=style.csl --bibliography=references.bib --mathjax --toc -N source.md -o output.docx
```

**生成 pdf**

```
pandoc --resource-path=.:images --template=template.tex --filter pandoc-citeproc --filter pandoc-crossref --csl=style.csl --bibliography=references.bib --mathjax --toc -N source.md -o output.pdf
```

在这里，`template.tex` 是你的 LaTeX 模板。其他的选项和上面的命令相同。[latex模板](https://github.com/Wandmalfarbe/pandoc-latex-template)

### 创建 word 文档

Pandoc 可以将 Markdown 转换为 Word 文档，但要使其符合特定的学术期刊模板，可能需要一些额外的步骤。以下是一种可能的方法：

1. **创建参考文档**：首先，你需要创建一个 Word 文档，它包含了你期刊模板的所有样式。这个文档应该包含所有你需要的样式，例如标题、副标题、正文、引用、参考文献等。你不需要在这个文档中包含任何内容，只需要设置好样式即可。
2. **转换文档**：然后，你可以使用 Pandoc 来将你的 Markdown 文档转换为 Word 文档。你需要使用 `--reference-doc` 选项来指定你的参考文档。例如：`pandoc --reference-doc=template.docx source.md -o output.docx`
3. **检查和调整**：最后，你可能需要打开你的输出文件，并手动检查和调整一些细节。虽然 Pandoc 可以自动应用你的样式，但是它可能无法完全符合你的期刊模板的所有要求。你可能需要手动调整一些格式，或者添加一些缺失的元素。

可以用现成网友制作好的 [Word模板]([https://github.com/Achuan-2/mini/blob/main/pandoc/templates.docx](https://github.com/Achuan-2/mini/blob/main/pandoc/templates.docx))，在细节上可以根据你投稿或学校需求进行更改

### 创建 PDF

Pandoc 可以将 Markdown 或其他格式的文档转换为 PDF。以下是一种可能的方法：

1. **安装 LaTeX**：首先，你需要在你的计算机上安装 LaTeX。Pandoc 使用 LaTeX 来生成 PDF，所以你需要先安装 LaTeX。你可以从 LaTeX 项目的官方网站下载 LaTeX。
2. **转换文档**：然后，你可以使用 Pandoc 来将你的文档转换为 PDF。你只需要指定一个带有 `.pdf` 扩展名的输出文件即可。例如：`pandoc source.md -o output.pdf`
3. **使用模板**：如果你想要更多地控制你的 PDF 的样式，你可以使用 LaTeX 模板。你可以在命令行中使用 `--template` 选项来指定一个模板。例如：`pandoc --template=mytemplate.tex source.md -o output.pdf` 在这里，`mytemplate.tex` 是你的模板，`source.md` 是你的源文件，`output.pdf` 是你的输出文件。
4. **使用选项**：Pandoc 有许多选项可以让你定制你的转换过程。例如，你可以使用 `--pdf-engine` 选项来指定用于生成 PDF 的 LaTeX 引擎，或者使用 `--variable` 选项来设置 LaTeX 变量。你可以在 Pandoc 的官方文档中查看所有的选项。

## 在 Obsidian 中的使用

在 obsidian 里下载和安装 pandoc 插件 `obsidian://show-plugin?id=obsidian-pandoc`

然后进入插件设置页面，涉及修改的选项有：

1. pandoc path：在终端输入 which pandoc 即可获得路径，然后复制到这里就行
2. Pdflatex path: 安装后 latex 在终端输入 which pdflatex 即可获得路径，然后复制到这里就行
3. Exta pandoc arguments: 把上面的组合语法复制进去即可，记得把组合语法里的参数地址改为你自己的文件路径。

其他选项不需要改，然后你可以通过快捷键的形式呼出 obsidian 的命令，输入命令 pandoc 即可获得转换成其他文件的指令，当然你也可以把这些命令设置成 button 或者 command ，最后显示 successful 即表示导出成功。

![CleanShot 2023-07-07 at 08.25.31@2x](https://cdn.pkmer.cn/images/fks6bu.png!pkmer)

## 其它

### 傻瓜操作

事实上，Mac 上已经有将 pandoc 可视化的软件 `Docdown`。你可以从这里下载使用它:[Github下载地址](https://github.com/lowercasename/docdown/releases/tag/v0.6.0)。

当然还可以用在线工具协助你转换：[stackedit在线工具](https://stackedit.io/app#)。

国内的同学可以用这个 [Academic Word Doc Exporter在线工具](https://wshuyi-academic-markdown-word-output-streamlit-main-dkji5m.streamlit.app/)。

### 使用 lua 完成特定需求

Lua 是一种轻量级的脚本语言，Pandoc 支持使用 Lua 来编写自定义的过滤器和模板。在学术写作中，你可以使用 Lua 来定制你的文档的转换过程。

1. **Lua 过滤器**：Pandoc 的 Lua 过滤器可以让你修改 Pandoc 的抽象语法树（AST），这是 Pandoc 在转换文档时使用的内部表示。你可以使用 Lua 过滤器来添加、删除或修改文档的元素。例如，你可以创建一个 Lua 过滤器来自动添加图表的标题，或者自动将特定的词语替换为其他词语。你可以在命令行中使用 `--lua-filter` 选项来指定一个 Lua 过滤器，例如：`pandoc --lua-filter=myfilter.lua source.md -o output.html` 在这里，`myfilter.lua` 是你的 Lua 过滤器，`source.md` 是你的源文件，`output.html` 是你的输出文件。
2. **Lua 模板**：Pandoc 的模板系统允许你控制你的输出文件的布局和样式。你可以使用 Lua 来创建自定义的模板。例如，你可以创建一个模板来定制你的文档的页眉、页脚和边距。你可以在命令行中使用 `--template` 选项来指定一个模板，例如：`pandoc --template=mytemplate.lua source.md -o output.html` 在这里，`mytemplate.lua` 是你的模板，`source.md` 是你的源文件，`output.html` 是你的输出文件。

更多的 lua 文件，我自用的是 doi2cite. lua 、wikilinks. lua 、include-files. lua：

- [pandoc/lua-filters: A collection of lua filters for pandoc](https://github.com/pandoc/lua-filters)
- [github.com/pandoc-ext](https://github.com/pandoc-ext)

### 使用 yaml 来管理不同场景

例如我自用的 yaml 文件，你可以简化上面的指令，把一些特殊设置全部放进 yaml 里

```
---  
title: "Thesis Title"  
subtitle: "Another Subtitle"  
titlepage: True  
toc: true  
toc-own-page: True  
author: [Example Author]  
date: "2023-07-07"  
keywords: [Markdown, Example]  
titlepage-text-color: "000000"  
titlepage-rule-color: "FFFFFF"  
titlepage-rule-height: 0  
toc-title: Table of Contents  
caption-justification:   
titlepage-logo: /Users/your_name/Documents/logo.pdf  
abstract:   
acknowledgements:   
text1: Doctor of xxxxx  
text2: School of xxxx  
text3: University of xxxx  
text4: 2023  
---
```

当然这个组合使用，最好配合 R 语言，需要用到 Quarto ，它把生态给大一统了，你甚至不需要有 R 环境也能用，VSCode 上也有专门的 [插件](https://marketplace.visualstudio.com/items?itemName=quarto.quarto)

Quarto 的强大之处在于只需要把 md 改成 qmd 后缀，加上一个 yaml 头，轻轻一点渲染按钮，就可以导出 word、html、ipynb、GFM 规范的 md（还可以设置公式导出为纯文本还是图片），甚至当成简易版的 LaTeXLATEX，LaTeXLATEX 代码与 markdown 语法混用，导出样式精美的 pdf。