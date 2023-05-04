---
uid: 20230328202827
title: Markdown 基础
description: 
author: 
type: basic
draft: false
editable: true
modified: 20230504142212
---

# Markdown 基础

> [!warning]
> 本文只包含 Markdown 基础语法，并不包含笔记软件特定语法，这样区分以便读者选择通用语法使用，以便后续迁移笔记软件。

## 什么是 Markdown?

1. **Markdown**  是一款轻量级标记语言，不同于 HTML **(Hypertext Markup Language)**，**Markdown**  的语法非常简单，且容易上手，因为它不涉及编程知识
2. **Markdown**  以  **纯文本格式**  编写文档，依赖键盘而非鼠标，专注于 **写作本身**，感受 **书写** 的魅力
3. **Markdown**  的通过添加一些简单的  **标识符**，让文本具有 **恰到好处** 的格式
4. **Markdown**  核心特征就是  **删繁剪芜**， **简扼** + **精炼**

## 标题

要创建标题，请在单词或短语前面添加井号 (`#`) 。`#`  的数量代表了标题的级别。

```
# 这是一级标题
## 这是二级标题
### 这是三级标题
#### 这是四级标题
##### 这是五级标题
###### 这是六级标题
```

还可以在文本下方添加任意数量的 == 号来标识一级标题，或者 -- 号来标识二级标题。

## 段落

要创建段落，请使用空白行将一行或多行文本进行分隔。 不要用空格（spaces）或制表符（ tabs）缩进段落。

```
I really like using Markdown.
I think I'll use it to format all of my documents from now on.
```

> [!Tip] 首行缩进
> 首行缩进两个字符有个历史原因，由于以前打印纸张很贵，首行缩进两个字符可以清晰的分段。而现在通过空一行的方式，是一种更优雅的分段方式。而 Markdown 就采取的这种方式。参考 [为什么网上的文章越来越少采用首行缩进了？](https://www.zhihu.com/question/539160773)

段落换行：几乎每个 Markdown 应用程序都支持两个或多个空格进行换行，称为  `结尾空格（trailing whitespace)`  的方式，但这是有争议的，因为很难在编辑器中直接看到空格，并且很多人在每个句子后面都会有意或无意地添加两个空格。由于这个原因，你可能要使用除结尾空格以外的其它方式来换行。幸运的是，几乎每个 Markdown 应用程序都支持另一种换行方式：HTML 的  `<br>`  标签。

为了兼容性，请在行尾添加“结尾空格”或 HTML 的  `<br>`  标签来实现换行。最佳实践是，**段落内不换行**。

还有两种其他方式我并不推荐使用。CommonMark 和其它几种轻量级标记语言支持在行尾添加反斜杠 (`\`) 的方式实现换行，但是并非所有 Markdown 应用程序都支持此种方式，因此从兼容性的角度来看，不推荐使用。并且至少有两种轻量级标记语言支持无须在行尾添加任何内容，只须键入回车键（`return`）即可实现换行。

## 文字样式

### 加粗

要加粗文本，请在单词或短语的前后各添加两个星号 `**`（asterisks）或下划线 `__`（underscores）。

如需加粗一个单词或短语的中间部分用以表示强调的话，请在要加粗部分的两侧各添加两个星号（asterisks）。

```
I just love **bold text**.
I just love __bold text__.
Love **is** bold
```

快捷键通常为：Ctrl + B

### 斜体

要用斜体显示文本，请在单词或短语前后添加一个星号 `*`（asterisk）或下划线 `_`（underscore）。要斜体突出单词的中间部分，请在字母前后各添加一个星号，中间不要带空格。

```
Italicized text is the *cat's meow*.
Italicized text is the _cat's meow_.
A *cat* meow
```

快捷键通常为：Ctrl + I

## 引用

### 创建块引用

要创建块引用，请在段落前添加一个  `>`  符号。

```
> Dorothy followed her through many of the beautiful rooms in her castle.
```

**>** + 文本内容 （**不需要空格**)

渲染效果如下：

> Dorothy followed her through many of the beautiful rooms in her castle.

### 多个段落的块引用

块引用可以包含多个段落。为段落之间的空白行添加一个  `>`  符号。

```
> Dorothy followed her through many of the beautiful rooms in her castle.
>
> The Witch bade her clean the pots and kettles and sweep the floor and keep the fire fed with wood.
```

- **说明：**
- **同个引用段落** 内的换行直接敲击  **Enter**  即可
- 若需添加  **第二个独立引用段落** ，连续敲击  **两下\*\***Enter\*\*  即可

渲染效果如下：

> Dorothy followed her through many of the beautiful rooms in her castle.
>
> The Witch bade her clean the pots and kettles and sweep the floor and keep the fire fed with wood.

### 嵌套块引用

块引用可以嵌套。在要嵌套的段落前添加一个  `>>`  符号。

```
> Dorothy followed her through many of the beautiful rooms in her castle.
>
>> The Witch bade her clean the pots and kettles and sweep the floor and keep the fire fed with wood.
```

渲染效果如下：

> Dorothy followed her through many of the beautiful rooms in her castle.
>
> > The Witch bade her clean the pots and kettles and sweep the floor and keep the fire fed with wood.

## 列表

列表可嵌套其它元素，包括代码块，图片等

### 有序列表

要创建有序列表，请在每个列表项前添加数字并紧跟一个英文句点。数字不必按数学顺序排列，但是列表应当以数字 1 起始。

Markdown 语法

```
1. First item
2. Second item
3. Third item
4. Fourth item
```

```
1. First item
1. Second item
1. Third item
1. Fourth ite
```

```
1. First item
8. Second item
3. Third item
5. Fourth item
```

```
1. First item
2. Second item
3. Third item
    1. Indented item
    2. Indented item
4. Fourth item
```

### 无序列表

要创建无序列表，请在每个列表项前面添加破折号 (-)、星号 (\*) 或加号 (+) 。缩进一个或多个列表项可创建嵌套列表。

Markdown 语法

```
- First item
- Second item
- Third item
- Fourth item
```

```
* First item
* Second item
* Third item
* Fourth item
```

```
+ First item
+ Second item
+ Third item
+ Fourth item
```

```
- First item
- Second item
- Third item
    - Indented item
    - Indented item
- Fourth item
```

## 代码及代码块

要将单词或短语表示为代码，请将其包裹在反引号 (`` ` ) 中。

Markdown 语法

如果你要表示为代码的单词或短语中包含一个或多个反引号，则可以通过将单词或短语包裹在双反引号 (` `` `) 中。

`` Use `code` in your Markdown file. ``

也可以使用代码块，用三个反引号起来的内容即为代码块。

```
    <html>
      <head>
      我是一段 HTML 示例
      </head>
      <body>
	      <div>我包含一些内容</div>
      </body>
    </html>
```

## 分割线和删除线

要创建分隔线，请在单独一行上使用三个或多个星号 (`***`)、破折号 (`---`) 或下划线 (`___`) ，并且不能包含其他内容。

```

***

---

_________________
```

以上三个分隔线的渲染效果看起来都一样，如下：

---

您可以通过在单词中心放置一条水平线来删除单词。结果看起来~~像这样~~。此功能使您可以指示某些单词是一个错误，要从文档中删除。若要删除单词，请在单词前后使用两个波浪号 `~~`。

```
~~世界是平坦的。~~ 我们现在知道世界是圆的。
```

呈现的输出如下所示：

~~世界是平坦的。~~  我们现在知道世界是圆的。

## 链接

### 链接书写

链接文本放在中括号内，链接地址放在后面的括号中，链接 title 可选。

超链接 Markdown 语法代码：`[超链接显示名](超链接地址 "超链接title")`

对应的 HTML 代码：`<a href="超链接地址" title="超链接title">超链接显示名</a>`

```
这是一个链接 [Markdown语法](https://markdown.com.cn)。
```

渲染效果如下：

这是一个链接  [Markdown 语法](https://markdown.com.cn/)。

### 链接的 title

给链接增加 Title

链接 title 是当鼠标悬停在链接上时会出现的文字，这个 title 是可选的，它放在圆括号中链接地址后面，跟链接地址之间以空格分隔。

```
这是一个链接 [Markdown语法](https://markdown.com.cn "最好的markdown教程")。
```

渲染效果如下：

这是一个链接  [我给同一个链接增加了 标题 Markdown 语法](https://markdown.com.cn/ "最好的markdown教程")。

### 网址和 Email 地址

使用尖括号可以很方便地把 URL 或者 email 地址变成可点击的链接。

```
<https://markdown.com.cn>
<fake@example.com>
```

渲染效果如下：

[https://markdown.com.cn](https://markdown.com.cn/)

[fake@example.com](mailto:fake@example.com)

### 带格式的链接

强调 链接, 在链接语法前后增加星号。 要将链接表示为代码，请在方括号中添加反引号。

```
I love supporting the **[EFF](https://eff.org)**.
This is the *[Markdown Guide](https://www.markdownguide.org)*.
See the section on [`code`](#code).
```

渲染效果如下：

I love supporting the **[EFF](https://eff.org/)**.

This is the *[Markdown Guide](https://www.markdownguide.org/)*.

See the section on [`code`](https://markdown.com.cn/basic-syntax/links.html#code).

### 引用类型链接

引用样式链接是一种特殊的链接，它使 URL 在 Markdown 中更易于显示和阅读。参考样式链接分为两部分：与文本保持内联的部分以及存储在文件中其他位置的部分，以使文本易于阅读。

尽管不是必需的，可以在第一组和第二组括号之间包含一个空格。第二组括号中的标签不区分大小写，可以包含字母，数字，空格或标点符号。

以下示例格式对于链接的第一部分效果相同：

- `[hobbit-hole][1]`
- `[hobbit-hole] [1]`

可以将链接的第二部分放在 Markdown 文档中的任何位置。有些人将它们放在出现的段落之后，有些人则将它们放在文档的末尾（例如尾注或脚注）。

## 图片

### 添加图片

要添加图片，请使用感叹号 ( `!` ), 然后在方括号增加替代文本，图片链接放在圆括号里，括号里的链接后可以增加一个可选的图片标题文本。

插入图片 Markdown 语法代码：`![图片alt](图片链接 "图片title")`。

对应的 HTML 代码：`<img src="图片链接" alt="图片alt" title="图片title">`

```
![这是图片](/assets/img/philly-magic-garden.jpg "Magic Gardens")
```

渲染效果如下：

![图片示例](https://cdn.pkmer.cn/images/49f8d5f75e3369aad7fbf1f99e39c35a_MD5.png)

### 链接图片

给图片增加链接，请将图像的 Markdown 括在方括号中，然后将链接添加在圆括号中。

```
[![沙漠中的岩石图片](/assets/img/shiprock.jpg "Shiprock")](https://markdown.com.cn)
```

渲染效果如下：

![Pasted image 20230121213911](https://cdn.pkmer.cn/images/76db8488e36ad5d1449f9a28f4ef3c22_MD5.png)

### iframe 方式嵌入图片

“iframe”是一种将网页嵌入另一个网页的方法。因为 Markdown 本身兼容 HTML，这是一种简单的语言，可以构建我们每天看到的网页。

示例:

```html
<iframe src="https://www.bilibili.com/video/BV1QY4y147VR"></iframe>
```

基本语法:

```html
<iframe src="INSERT YOUR URL HERE"></iframe>
```

不同网站设置上会有出入，比如网站的开发者或者管理者不允许你嵌入它们。例如，您不能通过使用 YouTube 视频的正常 URL 嵌入它，但可以使用它的嵌入 URL，即  `https://www.youtube.com/embed/VIDEO_ID`.

If you want to embed a website, try searching for "{website} embed iframe".

For example, you can embed Twitter tweets like so as suggested by search results:

```html
<iframe
    border="0"
    frameborder="0"
    height="250"
    width="550"
    src="https://twitframe.com/show?url=https%3A%2F%2Ftwitter.com%2Fjack%2Fstatus%2F20"
>
</iframe>
```

## 任务列表

任务列表使您可以创建带有复选框的项目列表。在支持任务列表的 Markdown 应用程序中，复选框将显示在内容旁边。要创建任务列表，请在任务列表项之前添加破折号 `-` 和方括号 `[ ]`，并在 `[ ]` 前面加上空格。要选择一个复选框，请在方括号 `[x]` 之间添加 x 。

语法格式：

```
- [x] Write the press release
- [ ] Update the website
- [ ] Contact the media
```

展示效果如下：

- [x] Write the press release
- [ ] Update the website
- [ ] Contact the media

- **创建任务：**
    - **-** + **空格** +**`[ ]`** +**空格** + 任务列表内容 ( 中括号 `[ ]`  里面必须有个空格)
    - 或者更简单点，对着某个行文字，按下“Ctrl + L”
- **完成任务** - 在渲染界面，直接鼠标左键点击 mm - 在源代码界面，在中括号内输入  **英文字母 x** - 部分编辑器，在 中括号内 输入 **任意字符** 都可以打  **`√`** ( 例如  **Obsidian** )
- **任务列表也是可以缩进 + 退格的，操作跟 无序列表、有序列表一样**

## 表格

### 创建表格

要添加表，请使用三个或多个连字符（`---`）创建每列的标题，并使用管道（`|`）分隔每列。您可以选择在表的任一端添加管道。

```
| 行/列 | 列名2 | 列明3 |
| ----- | ----- | ----- |
| 行名1 |       |       |
| 行名2 |       |       |
| 行名3 |       |       |
```

呈现的输出如下所示：

| 行/列  | 列名 2 | 列明 3 |
| ------ | ------ | ------ |
| 行名 1 |        |        |
| 行名 2 |        |        |
| 行名 3 |        |        |

单元格宽度可以变化，如下所示。呈现的输出将看起来相同。

```
| Syntax | Description |
| --- | ----------- |
| Header | Title |
| Paragraph | Text |
```

### 表格内容对齐

您可以通过在标题行中的连字符的左侧，右侧或两侧添加冒号（`:`），将列中的文本对齐到左侧，右侧或中心。

```
| Syntax      | Description | Test Text     |
| :---        |    :----:   |          ---: |
| Header      | Title       | Here's this   |
| Paragraph   | Text        | And more      |
```

呈现的输出如下所示：

| Syntax    | Description |   Test Text |
| :-------- | :---------: | ----------: |
| Header    |    Title    | Here's this |
| Paragraph |    Text     |    And more |

### 格式化表格文字

您可以在表格中设置文本格式。例如，您可以添加链接，代码（仅反引号（`` ` ``）中的单词或短语，而不是代码块）和强调。

您不能添加标题，块引用，列表，水平规则，图像或 HTML 标签。

您可以使用表格的 HTML 字符代码（`&#124;`）在表中显示竖线（`|`）字符。

## 脚注

脚注使您可以添加注释和参考，而不会使文档正文混乱。当您创建脚注时，带有脚注的上标数字会出现在您添加脚注参考的位置。读者可以单击链接以跳至页面底部的脚注内容。

要创建脚注参考，请在方括号（`[^1]`）内添加插入符号和标识符。标识符可以是数字或单词，但不能包含空格或制表符。标识符仅将脚注参考与脚注本身相关联 - 在输出中，脚注按顺序编号。

在括号内使用另一个插入符号和数字添加脚注，并用冒号和文本（`[^1]: My footnote.`）。您不必在文档末尾添加脚注。您可以将它们放在除列表，块引号和表之类的其他元素之外的任何位置。

简记：

- **`[^脚注代号]`** ( 脚注代号会直接显示在渲染界面 )
- 脚注代号可以随便命名，不过推荐使用  **数字序号**
- **`[^脚注代号]`** + **:** + **空格** + 脚注内容

```
Here's a simple footnote,[^1] and here's a longer one.[^bignote]

[^1]: This is the first footnote.

[^bignote]: Here's one with multiple paragraphs and code.

    Indent paragraphs to include them in the footnote.

    `{ my code }`

    Add as many paragraphs as you like.
```

呈现的输出如下所示：

Here's a simple footnote,[^1] and here's a longer one.[^2]

## 实体字符

在 Markdown 中，字符  `<`、`>`、`"`、`'`  和反引号是特殊字符。它们是 Markdown 语法自身的一部分，那么你如何将这些字符包含进你的文本中呢? 一种方法是转义，即加斜杠 `\<`，另一种办法是使用实体字符即字符引用。

我们必须使用字符引用 —— 表示字符的特殊编码，它们可以在那些情况下使用。每个字符引用以符号&开始，以分号 (;) 结束。

**常用实体字符**

| 原义字符       | 等价字符引用 |
| -------------- | ------------ |
| <              | `&lt;`       |
| >              | `&gt;`       |
| "              | `&quot;`     |
| '              | `&apos;`     |
| &              | `&amp;`      |
| 版权符号&copy; | `&copy;`     |
| 商标&trade;    | `&trade;`    |
| 空格           | `&nbsp;`     |
| 中文全角空格   | `&amp`       |

[^1]: This is the first footnote.

[^2]: Here's one with multiple paragraphs and code.