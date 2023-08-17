---
uid: 20230521003527
title: Obsidian 基础操作
tags: [Obsidian, 主题, 常见问题, 示例库, Bluetopaz, CSS]
description: Obsidian 基础操作常见问题汇总
author: PKMer
type: other
draft: false
editable: false
modified: 20230801180721
---

# Obsidian 基础操作

## 安装

### 安装包获取途径

### 如何自定 Obsidian 的安装位置

Windows：Windows 的安装包是没办法自定义安装位置的。

但是有些目前尚算有效的方法：官方或者其他途径下载的 `.exe` 安装包，你可以修改后缀名为 `.zip`，将里面内容放入你期望的路径。比如：`D:\Program Files\Obsidian`

Linux：Linux 的安装包是一个点击即可运行的可执行文件，可以随意移动。

## 启动

### 无法启动显示，显示“DiscardVirtualMemory“

- 现象
![image.png|442](https://cdn.pkmer.cn/images/20230525173840.png!pkmer)

- 原因
	- 你的操作系统版本过低，且使用了较高版本的安装包或更新。
	- 如果你不想放弃你的操作系统，那么回退到更早的 Obsidian 是个方法。
	- 强力建议，升级系统，一方面是整体安全问题，另外就是使用旧版本 Obsidian 无法体验新功能。

### 重启 Obsidian 的方法

1、直接关闭 Obsidian 的所有窗口

2、快捷键：Ctrl/Cmd + P，在 OB 的命令窗口中，输入“重新加载 Obsidian”

有些 Obsidian 设置或插件，需要重启后才能生效，可以用到以上方法。

## Obsidian 的基本信息获取

### 如何开启开发者模式/控制台

- Win：Ctrl + Shitf + i
- Mac：cmd+ option + i

### 如何知道自己已经开启了多少插件

- 点击 Obsidian 图标，找到 Help 菜单，点击 `调试信息`，里面的信息就是你正在开启的插件内容

## 笔记组织问题

### 什么候使用文件夹，什么时候使用标签，什么时候使用链接，什么时候使用 MOC？

- 链接
	- 「链接」是一种最强的联系，是最纯粹而清晰的连接两个笔记的方法。这是构建一个有效的动态卡片盒笔记的核心方法。
	- 尽管如此，单纯的「链接」并不足以支撑起笔记系统。它无法让你从不同层级审视笔记系统。只用「链接」构建的笔记系统就像一个个通过街道相连的街区，但有些时候你会想要拉远画面看看整个地图。
- 文件夹
	- 请用「文件夹」来组织项目
	- 如果你的目的是管理项目文件，「文件夹」是很棒的、甚至是最佳的方法。通常，项目都是被刻意隔开的封闭单元。
	- 但等到项目结题，你需要额外花费精力将项目文件中的精华部分整合进你的主笔记库。
	- 这意味着，「文件夹」只是临时的 inbox 或者说孵化器。
	- 「文件夹」的另一种使用方法是存放可明确界定的笔记，图片、人、名言、语料的源文件。它们被链接进主笔记库，所以你不需要访问这些文件夹，将它们用文件夹存放可以让笔记系统更整洁。
	- 对于私密信息例如理财、医疗和私人日记，使用「文件夹」将它们与其他笔记隔开是一个很好的选择。
- 标签
	- 请用「标签」来辅助检索。「标签」是一种弱联系，但不要低估它的作用。将特定笔记筛选出来的方法有很多（本文的所有方法其实都算），但「标签」更灵活：一个笔记可以有数个标签。但有一个问题：作为筛选器，「标签」打多了反而不美。
	- 假定你喜欢使用一个名为“永久笔记”的标签，每当你阅读或者观看什么并形成笔记，你就打上这个标签。当仅 50 个笔记有这个标签，很好；但若 500 个笔记有这个标签，那这个标签就失去了意义。
	- 一个解决办法是使用多个标签来检索。你可以同时检索 `#永久标签 #改善`，这样会缩小结果范围。
	- 但随之产生另一个问题：你需要记住你用过的所有标签。当你忘了“#改善”这个标签，你会不知不觉开始使用相似的“#改进”。你也许可以记住“#改善”这个个例，但长此以往你将无法精准地为笔记打标签，你的笔记系统将不可避免地混乱。顺便说一句，“星标笔记”、“收藏的笔记”也是标签的一种。
- 邻近
	- 一个常被忽略的连接笔记的方法，但我们其实常会使用它，例如桌面图标的摆放就隐含「邻近」逻辑关系。「邻近」关系可能弱且不具备信息量（打个比方，飞机上和陌生人邻座），也可能强且富有信息量（飞机上和家人邻座）。这取决于你如何组织「邻近」关系。
	- 在 MOC 中应用「邻近」关系是对「邻近」关系的最好运用。同一个 MOC 中的笔记本身就具有较强联系，若再通过手动排序加强邻近关系，联系就会更加紧密。
- MOC
	- 一个 MOC 也是一个笔记，是一种特殊的笔记。它有效运用了邻近关系，它具备标签的作用，它也可以被看作一种非严格封闭的文件夹。
		- 它像标签：以链接的形式，它将相关联的笔记分组。笔记本体存放在其他位置。
		- 它像文件夹：它实现了笔记的强制分组
		- 它运用了邻近关系：它可以将笔记刻意放置在紧密相关的笔记旁边
	- 如此一来，MOC 不会限制你访问笔记，它帮助你整理笔记，同时保持了笔记系统的灵活性。
	- 使用 MOC 的体验就像坐在一间满是工作台的仓库，每个工作台上都摆满了严密组织的索引卡片。

### 科学的笔记体系有哪些要注意的点

- 回答 1：
	- 科学的结构，便于查找。（索引、标签）
	- 便于记录和归档。
- 回答 2：
	- 编码体系中最好有两套编码: 一套是针对背景知识的编码，一套是针对自身前景知识的编码。特殊的如日记直接用时间戳来编码。
	- 标签的对象要是笔记的属性才行，比如语言，用途，信息等级金字塔，心智管理，所属学科等
- 回答 3：
	- 建立笔记之间的联系，思考笔记之间的联系，建立双向链接是这个过程的结果。
- 回答 4：
	- 如果针对知识产出的分类，是可以建议进行功能分类的，根据系统的功能性进行分类的方法，一般情况下可以根据系统应用的地点，时间，资源等三个要素进行功能定位，其中对于资源的分类其实与系统分类是一致的

## 基本操作

### 不使用键盘，点击文件名在新面板打开

- Windows 鼠标中键
- Mac 触控板 ：
	- 安装 BetterAndBetter ，打开 OB；
	- 打开 BetterAndBetter 偏好设置>触控板选项
		- 检测和设置
			- 勾选“大于一指时禁止左键点击”,建议取消勾选所有绘图相关功能。
			- 手势设置
				- 1.点击中栏下方 + 号 > 运行中的程序… 添加 ob
				- 2.选中新添加的 ob
				- 3.点击右栏下方 + 号
				- 4.新条目的手势选择“三指轻点”
				- 5.执行动作选择“cmd+ 点击”

### 如何收起文件列表/左侧侧边栏/左侧面板

方法 1：点击 [[文件列表]] 左侧的 ![Pasted image 20230108001155](https://cdn.pkmer.cn/images/47b1c4f1c71a973bbbd3831bdffe2581_MD5.png!pkmer)

方法 2：Ctrl + P，输入”折叠/收起左侧边栏”

### Obsidian 的文件管理器、文件列表不见了

方案 1：可能时因为使用折叠左侧面板，导致收起，可以点击左侧的 ![Pasted image 20230108001155](https://cdn.pkmer.cn/images/47b1c4f1c71a973bbbd3831bdffe2581_MD5.png!pkmer)，重新打开左侧面板。

方案 2：可能是无疑种关闭了文件列表。在 Obsidian 设置 - 核心插件 - 文件列表重新开关下，可以解决。

### Obsidian 多个仓库间可以公用一套配置

- 多个仓库之间，大部分内容一样，但个别配置不同

推荐：把【.obsidian】文件夹粘贴过去。

>[!优劣势]
>优势：这样操作最方便，就是日常的文件操作。
>优势：每个库可以保持大部分配置相同，但是个性化部分又有不同
>劣势：新增插件或者删减插件时候会比较麻烦

- 希望所有仓库之间，高度统一

设置 -> 关于 -> 切换配置文件夹 中

设置对应的文件夹。

![Pasted image 20230128113423](https://cdn.pkmer.cn/images/4f8264f25e0f7ed4fdd4db023aaf6065_MD5.png!pkmer)

### Ribbon 区域图标调整方法

方法 1：设置 > 外观> Ribbon menu > 点击 Manage 按钮。1.0.0 之后支持

方法 2：鼠标左键点击后进行拖拽操作排序

### Obsidian 最小到托盘的方法

Obsidian 能否像其他软件一样，常驻在系统托盘

使用插件，请参考：[[obsidian-tray]]

## 显示&输入

### Obsidian 为什么不能重命名文件名

- 问题：我想重命名文件名为“LC-MS/MS”，但弹出错误
	- Windows 系统对文件名有限制，文件名不能包含下列任何字符 \ / ：* ？ “

### Obsidian 中如何在正文内显示文件标题

- Ob 默认在笔记页内标题栏、标签页上都会显示对应的文件标题
- 方法：
	- 使用标题语法
		1. 在正文的第一行使用 # （1 级标题语法）来书写正文（文件）标题
		- 这种方法比较符合常规的文档书写规范
		- 后续导出或者流转时候，脱离 Obsidian 环境，也可以保证全文的可读性
	- 使用业内标题
		- 在 Obsidian 设置 -> 外观 -> 显示业内标题（Show inline title）
		- 打开对应开关即可

### Obsidian 如何开启或关闭大纲/有序列表的缩进线

- 在 Obsidian 设置，编辑器 - 显示缩进参考线，点击开启或关闭即可

### Obsidian 关闭文件管理器的缩进线

- 主体法：在主体市场寻找这样效果的主体
- CSS 法：将下面内容，保存到 .css 后缀的文件，放到对应目录。[[Obsidian的CSS代码片段]]

```css
.nav-folder.mod-root .nav-folder > .nav-folder-children {
	border-left:unset !important;
}
.tree-item-children {
	border-left:unset !important;
}
```

### 加粗后无法正常显示

![Pasted image 20230126220150](https://cdn.pkmer.cn/images/ca97a709a5e05e19b3d1d86ddd65620a_MD5.png!pkmer)

1. 这是不正确的缩进导致，`我是需要加粗的正文` 前面缩进了，被识别成了代码。正文内容顶格处理，不要增加缩进，之后就正常了。或者在标题和正文之间增加空行后再删除空行都可以解决这个问题。
2. 使用的主题或者 snippets 存在 Bug，比如 Lime_ 百草霜主题中错误的将 font-weight 设置了较低的值。通过切换不同主题确认该问题。解决办法就是在 Github 上反馈给主题开发者。

### 表格字符无法正常显示

在表格中使用 `|` 时会导致表格无法正常显示，需要对字符进行转义，即在字符前加 `\` 符号，此处需要将 `|` 输入为 `\|`。

### 笔记标题和正文存在空白

![Pasted image 20230130153632|600](https://cdn.pkmer.cn/images/f1635fd3ff84de5d3cda715502d9862b_MD5.png!pkmer)

1. 可能是因为安装了 Typewrite scroll 插件。此插件因为会让编辑行始终居中，所以会导致该显示问题。
	1. 解决办法就是在 Github 上反馈给插件开发者。
	2. 可以换用其他插件，其他类打字机插件有开发者注意到了这个问题，如 [[typewriter-mode]]
2. 可能是 banners 插件导致的，解决办法就是在 Github 上反馈给插件开发者。
3. 主题原因，解决办法就是在 Github 上反馈给主题开发者。

### 粘贴的代码缩进不正常

正常的复制是带格式的粘贴，对于代码需要纯文本粘贴，即将代码放入 OB 中，需要使用快捷键

- Win： `ctrl+shift+v`
- Mac：⌘ + ⇧ + V

### 正文颜色不正常了

图片只是示例，可能你的主题不同，正文变化成别的样式也正常。尤其是可能定义了标题下紧跟的内容进行了，特殊样式处理。

![Pasted image 20230128144635](https://cdn.pkmer.cn/images/5f6b1ae281d26fbdc5d0ad723a2b4630_MD5.png!pkmer)

这是 Markdown 的语法，不像 Word 有手动第一行缩进排版，它本身是一种写作即排版，缩进在 Markdown 里代表层级，多用于列表，普通文本不使用缩进。

在 Markdown 里面， 行首缩紧四个空格 或 Tab 表示代码快。所以你的正文变成了特殊样式。

### Obsidian 怎么修改字体？

回答：将如下代码加入片段，启用即可，可自定义想要的字体。（任何主题都适用）

```css
/* 字体设置 */
body {
  font-family:"times new roman"," 宋体 "!important;
}
```

上述代码是全局修改字体，还可以修改不同位置字体，比如各级标题，正文等，欢迎其它朋友补充。

### Obsidian 文件列表的提示功能可以关闭吗

- 现象
![image.png](https://cdn.pkmer.cn/images/20230522202809.png!pkmer)
- 可以使用 [[obsidian-hider]] 插件
	- 关闭 tooltips 即可

### Obsidian 如何在编辑中显示行号

- 期望&需求
	- 想要在笔记中显示行号，便于笔记编辑和查看。
- 方法
	- Obsidian 设置 -> 编辑器
	- 在【显示】栏目 -> 显示行号
	- 打开对应选项，即可实现

### Obsidian 如何实现大纲层级线条或是缩进线

- 古早版本的 Ob 需要应用特殊主题才能显示。
- 现在的版本基本已经集成了这个功能。
	- 中文译名【缩进线】
	- 你可以在 设置 -> 编辑器 -> 显示缩进参考线中打开。

### Obsidian 中的标题可以显示当前标题等级吗

- 期望&需求

Obsidian 的笔记中，标题可以显示当前标题等级。

- 或许是因为你当前使用的主题各级标题字号不够明显；
- 或许是因为你的标题没有自动编号（如何自动编号参考这里 [[Obsidian基础操作问题#Obsidian 中实现标题自动编号，像 Word 一样]]）；
- 插件法
	- 使用 [[Obsidian 插件：Lapel 为你显示标题等级]]
- 主题法
	- 一些主题默认支持显示标题等级，或是提供了对应的设置选项。如 [[Blue Topaz]] 等。
- CSS 样式法
	- 当然你可能有你偏爱的主题，不想因此更欢主题。那么可以选择使用独立的 CSS 片段。

如何使用独立 CSS 片段，可以参考 [[02、Obsidian 的 Snippets]]

```css
/*使用H1-H6 代替#号来显示标题等级*/

/*适配Live preview模式*/

body.clutter-free-headings div:not(.cm-active).cm-line span:not(.cm-formatting-header):not(.cm-hashtag):not(.cm-inline-code):not(.cm-highlight).cm-header::before {

    font-size: 0.6rem;

    width: auto;

    margin-right: 1px;

    border-radius: var(--radius-s);

    border:1px solid var(--text-muted);

    padding-left: 2px;

    padding-right: 2px;

    color: var(--text-muted);

    overflow: visible;

    font-family: var(--font-default);

    font-weight: normal !important;

}

body.clutter-free-headings div.mod-cm6.is-live-preview div:not(.cm-active).cm-line .cm-header ~ span.cm-header::before,

body.clutter-free-headings div.mod-cm6.is-live-preview div:not(.cm-active).cm-line .cm-header.cm-hmd-internal-link::before {

    display: none;

}

  

body.clutter-free-headings div:not(.cm-active).cm-line span:not(.cm-formatting-header).cm-header-1::before {

    content: 'H1';

    margin-top: calc(var(--h1-size) - 0.1em);

    border:1px solid var(--border-color);

}

  

body.clutter-free-headings div:not(.cm-active).cm-line span:not(.cm-formatting-header).cm-header-2::before {

    content: 'H2';

    margin-top: calc(var(--h2-size) - 0.2em);

}

  

body.clutter-free-headings div:not(.cm-active).cm-line span:not(.cm-formatting-header).cm-header-3::before {

    content: 'H3';

    margin-top: calc(var(--h3-size) - 0.2em);

}

body.clutter-free-headings div:not(.cm-active).cm-line span:not(.cm-formatting-header).cm-header-4::before {

    content: 'H4';

    margin-top: calc(var(--h4-size) - 0.3em);

}

  

body.clutter-free-headings div:not(.cm-active).cm-line span:not(.cm-formatting-header).cm-header-5::before {

    content: 'H5';

    margin-top: calc(var(--h5-size) - 0.4em);

}

  

body.clutter-free-headings div:not(.cm-active).cm-line span:not(.cm-formatting-header).cm-header-6::before {

    content: 'H6';

    margin-top: calc(var(--h6-size) - 0.4em);

}

  

/*适配source mode 模式*/

body.clutter-free-headings div.mod-cm6:not(.is-live-preview) div:not(.cm-active).cm-line span:not(.cm-formatting-header).cm-header ~ span.cm-header::before {

    display: none;

}

body.clutter-free-headings div.mod-cm6:not(.is-live-preview) div:not(.cm-active).cm-line span.cm-formatting-header {

    display:none;

}
```

## 输出&导出

### 怎么把 md 文档导出为图片

- 有什么插件可以把一个 md 文档导出为图片吗？理想的情况是能设置图片清晰度。
- 回答 1：如果笔记短直接截图
- 回答 2：笔记过长，先导出 PDF，再把 PDF 保存成图片
- 回答 3：[[obsidian-export-image]] 插件实现

## 搜索

### 如何查找和替换文本

- 通过快捷键 `ctrl+H`（快捷键可自定义，默认为 `ctrl+H`）调用查找 + 替换功能
- 通过编辑框选项，选择替换功能

>[!warning] 快捷键 `ctrl+F` 或者点击编辑框选项的 `查找` 只能调用查找窗口，不会显示替换窗口，反之则可以则可以同时调用查找和替换两个窗口

### 如何搜索带有 HTML 的内容

- 遇到如下格式的内容，搜索“我是样式的段落文字”，是无法搜索的，因为有图中 html 标记影响搜索关键字匹配
![image.png](https://cdn.pkmer.cn/images/20230531192904.png!pkmer)

- 解法：可以在笔记内切成阅读模式，这样 html 标记就不会影响搜索结果了

## 编辑

### Obsidian 为什么我的标题不生效

- 现象
	- 明明按照 # 号后面空格增加 内容的方式，但是就是不变成标题。
- 解决

```markdown
注意区别 
 # 我是标题，但没变成该有的样子
和 
# 我是标题，这是我本来的样子
```

- 前者：在井号前增加了空格
- 后者：顶格输入井号，增加空格后输入标题内容。

### Obsidian 为什么标签变成了标题

注意区别

`#我是标签`

和

`# 我是标题`

- 标签：前者#号与内容之间无空格
- 标题：后者#号与内容之间有空格

### Obsidian 中如何撤销和重做

- 针对编辑内容，菜单方法
	- 直接使用 Ctrl/Cmd + Z
- 针对编辑内容，插件方法
	- [[editing-toolbar]]
	- [[cmenu-plugin]]
- 针对标签页，快捷键方法
	- 打开最近关闭的标签： Ctrl + Shift + T

### 如何让有序列表自动编号

在输入起始数字 `1.` 后，输入空格，再输入后面的内容

之后再回车就会自动编号了

### 为什么我的 Obsidian 显示加粗文字不正常

- 已经加粗了文字，但是在阅读或者实时阅览 模式下，显示仍然不加错。
- 原因：
	- 可能原因 1：你使用的主题或者 snippets 存在 Bug
		- Lime_ 百草霜主题老版中，将 font-weight 设置了较低的值。到主题文件，注释掉对应的语句，即可解决问题，位置如下：

```css

strong {

    font-weight: 350 !important;

    color: var(--inline-code);

}

```

### Obsidian 如何批量、快速管理标签 Tag

参看：[[tag-wrangler]] 插件

### 编辑时怎样使打字界面始终居于页面中央

使用插件可达成此效果，请参考：[[cm-typewriter-scroll-obsidian]]

### Obsidian 能否记忆我每篇笔记编辑或者阅读到的位置

有时候我们进行笔记编辑，或者阅读笔记时候，希望下次可以继续当前这个位置，下次打开时候能自动跳转到对应位置，继续阅读或者编辑工作。而不是默认每次都从头开始。

插件法：可以使用 [[remember-cursor-position]]

### 代码域（代码块）如何复制

- 实时阅览下复制代码域（代码块）中的内容

```css
.class A {
	color:red;
}
```

直接点击 代码块（代码域）右上角的对应的语言类型标号，点击即可复制。

鼠标指向时候会有提示”复制“，点击后系统会通知【已复制到剪贴板】

 - 阅读模式下复制代码域（代码块）中的内容

鼠标移动到 代码块（代码域）右上角，会浮现”复制“按钮，点击即可复制。 点击后系统会通知【已复制到剪贴板】

### Obsidian 复制代码到代码块，缩进消失

- 从网页，或者其他编辑器中，复制代码到 Obsidian 的代码域中，缩进都消失了
- 问题现象：
![image.png|400](https://cdn.pkmer.cn/images/20230522203333.png!pkmer)
- 解决：
	- 其他编辑器或者环境，将代码放入 OB 中，需要使用快捷键
		- Win： `ctrl+shift+v`
		- Mac：⌘ + ⇧ + V

### 在代码段里输入 `

```Text
``` ` ``` 
```a ` b ```
``` hello ` world ```
```

总结：

可以用三个 <kbd>```</kbd> ，如<kbd>`</kbd>在首位，要留个空格。

### 快速跳回笔记开头或结尾位置

- Windows 可以按 `Ctrl+Home` 跳到开头或 `Ctrl+End` 跳到结尾处
- MacOS 没有 Home 与 End，要如何快速变更输入位置？

方法一：MacOS 通常设定 `Fn` 组合键以提供 `Home`、`End` 功能（例如 `Fn+←`` 或 `Fn+→``），这样就要按三个按键才能移动位置（`Fn+Cmd+←`` 或 `Fn+Cmd+→``)。

方法二：使用插件，参考 [[obsidian-scroll-to-top-plugin]]

### 如何删除附件文件夹中多余的图片？

可以使用插件：[[find-unlinked-files]] 或者 [[nl-fast-image-cleaner]]，目前推荐后一个。

### Obsidian 表格比较乱如何格式化

虽然 Markdown 表达表格非常容易，但看起来比较凌乱，体验感不好。手工排版容易出错，而且出错后又很难查错，因此需要工具帮助我们，最基本的需求是在书写的时候能够自动的格式化表格，就如下面的视频所看到的一样。

- 自动格式化表格输入
使用插件实现，请参看：[[table-editor-obsidian]]

- 可视化编辑表格
使用插件实现，请参看：[[ob-table-enhancer]]

### Obsidian 中实现标题自动编号，像 Word 一样

- 期望&需求

Obsidian 中实现标题自动编号，像 Word 一样，而不是我一个个手工输入。而是自动根据文档变化标题的层级和序号。

- 插件法

参考：[[number-headings-obsidian]]

### Obsidian 如何实现记住上次文档编辑或阅读的位置

撰写长文时，我们经常需要不停地来回翻阅几个文件，或是打开一个没有处理完的文档继续工作。Remember cursor position 能自动定位到之前读到一半或是写完停留的地方。

- 通过插件实现

参看：[[remember-cursor-position]]

## 文件操作

### 启动时如何开启指定的笔记

希望在启动 Obsidian 后能自动开启特定的笔记。

- 如果是希望回到之前关闭 Obsidian 的状态
结束 Obsidian 时的已开启笔记，重新启动后会保持对应开启状态。

- 自动开启每日笔记
设置→核心插件→每日笔记→勾选【开启时打开每日笔记】

- 每次都打开同一个：指定特殊的笔记
参看：[[Obsidian 插件：Homepage（像浏览器一样设置起始页）]]

- 像浏览器一样设置起始页
参看：[[Obsidian 插件：Homepage（像浏览器一样设置起始页）]]

### Obsidian 如何批量移动多个文件

- 可以按 Shift 多选，按 Alt 单独选择。
- 然后可以右键，选择 【将 x 个文件移动到...】。
- 在弹出的对话框中选择目标文件夹。

### Obsidian 有没有快速删除图片的方法

- 快速删除没有使用的图片，参考 [[oz-clear-unused-images]]
- 快速删除没有链接的文件，参考 [[find-unlinked-files]]

## 关系图谱

### 关系图谱（局部关系图）如何打开

#### 关系图谱打开

关系图谱是官方核心插件功能，默认就是打开的

#### 局部关系图如何显示在本地或者软件界面上

在本地 OB 中可以打开局部图谱功能。

![关系图谱（局部关系图）](https://cdn.pkmer.cn/images/8430ad43e991eb3d0525cee62154b448_MD5.png!pkmer)

#### 局部关系图如何展示自己发布的网页上

如果你是使用官方发布服务的话，发布服务有一个网页组件，在站点设置里面开启即可。

### 为什么 Obsidian 的关系图谱不显示连接线

关系图谱，能显示笔记节点，也会显示笔记之间的箭头关系，但是连接线不显示。

![Pasted image 20230128095104](https://cdn.pkmer.cn/images/97b460b94cf888230c7ac3d10d34cf18_MD5.png!pkmer)

这种情况不是频发的，属于偶发现象。

1. 可能是你安装的某个主题（测试主题，或者是小众主题），导致样式问题
2. 可能是你安装的插件导致的异常（可以关闭所有插件挨个测试，是谁引起的）
	- 把所有插件都关闭
	- 打开一个插件，看一下图谱是否正常
	- 重复上一步操作直到找到有问题的插件，或插件全部打开但图谱依旧正常。
3. 可以参考 [这里](https://forum.obsidian.md/t/graph-view-lines-disapeared/6201/9)
	- 简要说：在设置 中 关闭 硬件加速。

## 移动端

### Obsidian 在手机上如何插入手机中的图片

- 通过底部工具栏的曲别针按钮
![image.png|352](https://cdn.pkmer.cn/images/20230607230920.png!pkmer)

### Obsidian 手机端的笔记库无法打开

- 目前手机端文件的文件名不能出现「#」、「%」等字符，有这些就会导致手机端的库打不开。

## 购买和捐赠

### Obsidian 购买和捐赠一览表

![image.png](https://cdn.pkmer.cn/images/20230608202447.png!pkmer)

- 上图由管理员 Bon 绘制，更及时、准确的付费信息请见官网（ <https://obsidian.md/pricing> ）。
- 没有捐赠不影响 Obsidian 的个人正常使用。
- 需要捐赠的群友请到官网进行购买。