---
uid: 20230803212340
title: Obsidian 插件：【Readme】Excalidraw
tags: ['图表生成', '界面相关', '编辑工具', 'obsidian插件', 'readme']
description: 可以让你在 Obsidian 中 使用 Excalidraw 绘图 
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Excalidraw

> [!Note] 插件名片
> - 插件名称：Excalidraw
> - 插件作者：Zsolt Viczian
> - 插件说明：可以让你在 Obsidian 中 使用 Excalidraw 绘图 
> - 插件分类：['图表生成', '界面相关', '编辑工具', 'obsidian插件', 'readme']
> - 项目地址：[点我访问](https://github.com/zsviczian/obsidian-excalidraw-plugin)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsidian-excalidraw-plugin)

## 概述

可以让你在 Obsidian 中 使用 Excalidraw 绘图 

![Excalidraw](https://cdn.pkmer.cn/covers/obsidian-excalidraw-plugin.PNG!pkmer)

> [!tip] 原文出处
> 
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/zsviczian/obsidian-excalidraw-plugin/master/README.md)
> 

---

## Readme(翻译）

下面是 [[obsidian-excalidraw-plugin]] 插件的自述翻译



# Excalidraw

Obsidian-Excalidraw插件将[Excalidraw](https://excalidraw.com/)，一个功能丰富的草图工具，集成到Obsidian中。您可以在您的vault中存储和编辑Excalidraw文件，您可以将绘图嵌入到您的文档中，您还可以链接到Excalidraw中的文档和其他绘图。有关Excalidraw功能的展示，请阅读我的博客文章[这里](https://www.zsolt.blog/2021/03/showcasing-excalidraw.html)和/或观看下面的视频。

## 视频演示



<details><summary>10部分（稍有过时）视频演示</summary>
<br>
<br>
<br>
<br>
<a href="https://youtu.be/MaJ5jJwBRWs" target="_blank"><img src="https://user-images.githubusercontent.com/14358394/125160341-a546b180-e17c-11eb-9de8-d87

## 特点

- 该插件将Excalidraw与Obsidian无缝集成，包括命令面板操作、文件浏览器功能、选项菜单命令和功能区按钮。
- 在功能区按钮或文件浏览器上按下<kbd>CTRL/CMD+单击</kbd>，可以在新窗格中创建/打开绘图。

### 设置

设置将允许您根据需要自定义Excalidraw。该插件带有大量的设置选项。我尝试为这些设置添加有意义的解释，请耐心查找设置，因为大多数请求都已经存在相应的设置。

插件设置分为以下几个部分：
- **基本设置**：例如默认使用的文件夹
- **保存**：压缩和自动保存计时器
- **文件名**：配置自动生成的Excalidraw文件名
- **显示**：影响Excalidraw处理方式的设置（例如：左手模式、主题设置、鼠标滚轮和捏合缩放设置、适应缩放设置）
- **链接和嵌入**：影响Excalidraw画布上链接和嵌入项行为的设置
- **Markdown嵌入设置**：这些设置控制从您的Vault嵌入到Excalidraw绘图中的Markdown文档的行为
- **嵌入和导出**：控制将Excalidraw图像嵌入到Markdown文档中时的显示方式的设置
- **自动导出设置**：您可以配置Excalidraw在每次保存时创建绘图的PNG或SVG副本
- **兼容性功能**：如果您在Obsidian之外（例如在LogSeq、Visual Studio、Web上等）编辑Excalidraw绘图，请检查这些设置。
- **实验性功能**：这些高级功能是以“巧妙”的方式实现的。功能包括定义第四种字体，在Obsidian文件浏览器中添加自定义图标以区分Exalidraw文件，OCR设置等。
- **已安装脚本的设置**：您从脚本库安装的一些脚本带有设置。脚本设置在第一次运行脚本时安装。因此，要访问脚本的设置，请安装脚本，首次运行脚本，然后在插件设置中查找设置选项。

#### 模板

- 用于新绘图的模板。该模板将恢复笔画属性。
    这意味着您可以在模板中设置默认的笔画颜色、笔画宽度、透明度、字体系列、字体大小、填充样式、笔画样式等。
    这也适用于ExcalidrawAutomate。
    - 通过模板，您可以自定义Excalidraw使用的颜色调色板。
        - 切换到Markdown视图。
        - 滚动到文件底部，找到`"AppState": {`。
        - 在AppState部分的末尾找到`"customColorPalette": {`。
        - 您可以通过添加以下3个变量中的任意一个或全部来指定Excalidraw使用的3个调色板：
            - `"canvasBackground":[], "elementBackground":[], "elementStroke": []`。
        - 在每个变量的数组中，添加逗号分隔的有效HTML颜色列表（例如，对于红色，使用`#FF0000`）。
        - 有关更多帮助，请参见上面的视频。

#### 导出

- 如果对可移植性很重要：
    - 自动导出SVG和/或PNG文件，包括保持同步功能，这样您就可以将SVG/PNG嵌入到文档中，而不是嵌入excalidraw文件。
    - 您可以通过添加`excalidraw-autoexport`前置元数据键来覆盖单个文件的导出设置。此键的有效值为`none`、`both`、`png`和`svg`。

- 指定嵌入绘图的默认宽度。
- 兼容性功能，自动导出并保持同步markdown excalidraw文件和传统的`.excalidraw`文件。
- 实验性功能，向文件资源管理器添加自定义标签以标记绘图文件。
- 启用/禁用自动保存。

### 将您的绘图嵌入到Markdown文档中
- 您可以使用以下格式选项自定义嵌入图像的大小和位置：
    - `![[image.excalidraw|100]]`,
    - `![[image.excalidraw|100x100]]`,
    - `![[image.excalidraw|100|left]]`,
    - `![[image.excalidraw|right-wrap]]`.
    - `![[<filename.excalidraw>|<width>x<height>|<alignment>]]`.
    - 您可以通过CSS添加自定义对齐方式。
    - 出现在`<alignment>`中的任何文本都将添加到呈现的SVG元素样式和包装器DIV元素中。
    - 有关更多信息，请参见[styles.css](https://github.com/zsviczian/obsidian-excalidraw-plugin/blob/master/styles.css)。
- Excalidraw绘图在Obsidian Publish中不显示。如果您想在发布的文档中使用Excalidraw，您可以在插件设置中配置，在创建新文件时自动在文档中插入绘图的PNG或SVG版本。请参见“要插入到文档中的文件类型”。
    - 在“导出设置”下，您还可以配置自动导出图像的暗色和亮色版本，以便您的发布站点支持暗色和亮色模式。

### 超链接和拖放支持
![](https://github.com/zsviczian/obsidian-excalidraw-plugin/blob/master/images/excalidraw-modifiers.png)

#### 超链接
- 支持超链接，例如：
    - `https://zsolt.blog`,
    - `[Obsidian](https://obsidian.md)`, 和
    - 内部链接，例如在绘图文本中的 `[[My file in vault|Alias]]`。
- 如果你启用了 Obsidian 设置中的 Files & Links/Automatically Update Internal Links，当文件被移动或重命名时，链接将会更新。
- 绘图中的链接将会显示在文档的反向链接中。
- 支持引用插入
    - `![[myfile#^blockref]]` 将会在绘图中转换为引用的块的文本。
    - `![[myfile#section]]` 也可以使用，这将会引用该部分。
    - 你还可以通过在转入后的文本后面加上花括号中的最大字符数来指定引用文本的换行，例如 `![[myfile#^blockref]]{40}` 将会在40个字符处换行。
- 为了方便起见，你还可以使用命令面板在绘图中插入链接。
- <kbd>CTRL/CMD + 悬停</kbd> 可以弹出 Obsidian 的快速预览链接。（在 Mac 上是 <kbd>CTRL+CMD+悬停</kbd>）。
- 使用块引用，你还可以在其他文档中引用和插入出现在绘图中的文本。

#### 拖放支持
- 您可以从Obsidian文件浏览器中拖动文件，并将它们变成Excalidraw中的文件链接。有关各种修饰键组合，请参见上表。
- 注意：将图像锚定到其大小的100%是一个非常特定的行为，我主要是为自己构建的一个非常专业的功能
    - （甚至比Excalidraw Obsidian中的其他功能更多 - 也主要是为了自己😉）。
    - 每次打开Excalidraw绘图时，这将重置您嵌入的图像为100%大小，
        或者如果您使用此功能插入了一个嵌入的Excalidraw绘图到您的画布上，
        每次更新嵌入的绘图，它都会被缩放回100%大小。
    - 这意味着即使您在绘图上调整图像的大小，下次打开时它也会重置为100%，
        文件或修改原始嵌入对象。当您将绘图分解为单独的Excalidraw文件时，此功能非常有用，
        但当组合到单个画布上时，您希望各个部分保持其实际大小。我使用此功能来
        从原子绘图构建“一页书”摘要。
- 您可以从Markdown视图中拖放文本到Excalidraw。
- 您可以从浏览器中拖放网址，并将它们变成链接。
- 您可以拖放YouTube链接和缩略图，并在Excalidraw中将它们变成带有缩略图的YouTube链接。

### LaTeX
使用命令面板操作"插入LaTeX公式"来插入LaTeX公式。
您可以在Markdown视图中编辑公式，或者通过<kbd>CTRL/CMD + 单击</kbd>公式进行编辑。

### 图片支持
- 在iOS和Android上，您可以通过在Excalidraw中按下添加图片按钮来从相机中添加图片。
- 您可以将图片复制/粘贴到您的绘图中。图片将保存在您的保险库中。
- 您可以按照上述说明拖放图片。
- 网络上的图片的URL链接：您可以从网页上将图片拖放到Excalidraw中。如果您在将图片拖放到Excalidraw时按住CTRL键，图片将不会保存到您的保险库中。Excalidraw将从URL加载图片。请注意，如果您没有互联网访问权限，或者这些图片从互联网上被删除，它们也将从您的绘图中消失。
- 如果您将图片URL粘贴到Excalidraw中（只需单击URL上的复制，然后在Excalidraw画布上单击粘贴），图片将被插入并带有指向网络上图片的链接。同样，图片不会保存到您的保险库中，只有链接。
- 如果您拖放一个YouTube视频链接，它将被转换为带有指向视频的缩略图链接的元素。

### 引用图像的部分块
有关详细信息，请参见此[视频](https://youtu.be/yZQoJg2RCKI)
- 当在指向Excalidraw文件的链接中引用画布上的元素时，
    - 使用elementId或部分标题（即包含`# <Section title>`的文本元素）
        - 例如`[[file#^elementID]]`，
    - 您可以添加`group=`前缀，
        - 例如`[[file#^group=elementID]]`或
    - `area=`前缀，
        - 例如`[[file#area=Section heading]]`。
    - 如果找到`group=`前缀，Excalidraw将选择与elementID（块引用）或部分标题引用的元素相同组中的元素组。
    - 如果找到`area=`前缀，Excalidraw将在引用元素周围插入图像的剪切。
    - 请注意，在将Excalidraw嵌入为PNG到您的Markdown文档时，不支持`area=`选择器。
    - 引用文本元素的elementID而没有`group=`或`area=`前缀将将元素作为纯文本插入。引用非文本元素（例如矩形，椭圆等）而没有`group=`或`area=`前缀将导致Obsidian错误，因为这些elementId在Excalidraw markdown文件中不存在作为块引用。

### Markdown
- 从1.2.0版本开始，绘图文件存储在Markdown文件中
    - 您可以为绘图添加标签
    - 您可以在绘图的YAML前置元数据中添加元数据
    - 在前置元数据和`# Text Elements`标题之间添加的任何内容都将被Excalidraw忽略，即您可以在此处添加任何内容，它将作为文档的一部分保留。
    - Excalidraw文档现在以图形视图显示。
    - 以下前置元数据键将自定义绘图的显示方式-覆盖常规设置：
        - `excalidraw-link-prefix: "📍"` 内部链接的预览前缀
        - `excalidraw-url-prefix: "🌐"` 外部链接的预览前缀
        - `excalidraw-link-brackets: true|false` 是否在预览中显示链接周围的括号
        - `excalidraw-default-mode: view|zen` 默认情况下以查看模式或禅模式打开此文档。默认查看模式非常适合演示幻灯片。
    - 前置元数据标签可自定义文件级别的图像导出[519](https://github.com/zsviczian/obsidian-excalidraw-plugin/issues/519)。如果存在这些键，则它们将覆盖默认的excalidraw嵌入和导出设置。
        - `excalidraw-export-transparent: true`： true == 透明 / false == 带背景。
        - `excalidraw-export-dark`: true == 暗模式 / false == 亮模式。
        - `excalidraw-export-padding`: 指定图像的导出填充
        - `excalidraw-export-pngscale`: 这仅影响导出为PNG。指定图像的导出比例。典型范围在0.5和5之间，但您也可以尝试其他值。

### 将完整的Markdown文件嵌入到您的绘图中
- 从Obsidian文件浏览器中拖动所需的文件，并在将文件放置在画布上时按住<kbd>SHIFT</kbd>键。
- 使用命令面板操作：`从vault插入markdown文件`
- 使用自定义的woff、woff2或TTF字体来显示文档，您可以在Excalidraw设置中设置要使用的默认字体。
- 您可以为渲染Markdown文档的快照图像设置自定义CSS。
  仅支持操作系统标准字体作为字体系列（
    [Win10](https://docs.microsoft.com/en-us/typography/fonts/windows_10_font_list),
    [Mac & iOS](https://developer.apple.com/fonts/system-fonts/)
  ），此外，您可以使用上述设置来设置一个额外的自定义字体。
    - （观看此[视频](https://youtu.be/K6qZkTz8GHs)以进行演示，并查看此
    - [示例CSS](https://github.com/zsviczian/obsidian-excalidraw-plugin/discussions/281)）。
    - 为了帮助样式化，您可以观察由Excalidraw创建的Markdown文档的SVG快照。
        - 打开Obsidian开发者控制台（<kbd>CTRL+Shift+i</kbd>/<kbd>CMD+OPT+i</kbd>）并
        - 执行以下命令：`ExcalidrawAutomate.mostRecentMarkdownSVG`
- 您可以通过将以下前置元数据键添加到您的Markdown文档中来控制嵌入的Markdown文件的外观：
    - `excalidraw-font: Virgil|Cascadia|font_file_name.extension`
    - `excalidraw-font-color: css-color-name|#HEXcolor|any-other-html-standard-format`，
        - 您可以在[这里](https://www.w3schools.com/colors/colors_names.asp)找到CSS颜色名称。
    - `excalidraw-border-color: css-color-name|#HEXcolor|any-other-html-standard-format`
    - `excalidraw-css: "css-filename|css snippet"`
- 切换到Markdown视图或使用<kbd>WIN+CTRL</kbd>/<kbd>CMD+CTRL</kbd>点击图像以编辑嵌入的属性：
    - `[[filename#^blockref|WIDTHxMAXHEIGHT]]`

### 自定义字体、自定义笔、OCR支持、SVG导入
- 在插件设置中，您可以添加自定义的第四种字体。更多详细信息请参见此[视频](https://youtu.be/eKFmrSQhFA4)
- 该插件包括使用Taskbone OCR的OCR支持。更多详细信息请参见此[视频](https://youtu.be/7gu4ETx7zro)
- 您可以将SVG文件转换为Excalidraw绘图（有一些限制）。更多详细信息请参见此[视频](https://youtu.be/vlC1-iBvIfo)
- 您可以定义自定义的自由绘制笔。请参阅[此处](https://github.com/zsviczian/obsidian-excalidraw-plugin/blob/master/ea-scripts/Alternative%20Pens.md)的文档和[视频](https://youtu.be/uZz5MgzWXiM)。

### 脚本引擎
- 从1.5.0版本开始，您可以使用脚本引擎轻松执行ExcalidrawAutomate宏，并为它们分配命令面板快捷方式。您可以在[这里](https://github.com/zsviczian/obsidian-excalidraw-plugin/tree/master/ea-scripts)找到一个入门视频和一个不断增长的可安装脚本库。
- 您可以通过将脚本和相应的SVG图标文件移动到文件夹中，在Excalidraw的Obsidian工具面板上将脚本组织成组。请参见演示[视频](https://youtu.be/wTtaXmRJ7wg?t=16)。

### 其他
- 左手模式
- 包括完整的
    - [QuickAdd](https://github.com/chhoumann/quickadd),
    - [Templater](https://silentvoid13.github.io/Templater/) 和
    - [Dataview](https://blacksmithgu.github.io/obsidian-dataview/docs/api/intro/) 支持通过 ExcalidrawAutomate。
    - 查看[详细帮助和示例](https://zsviczian.github.io/obsidian-excalidraw-plugin/)。
    - 我还有一个[YouTube ExcalidrawAutomate 播放列表](https://www.youtube.com/playlist?list=PL6mqgtMZ4NP1IR4nXxSlMA4PA5E-qpyHZ)，有很多示例。
- 需要 OBSIDIAN SYNC 订阅：完整的绘图文件历史记录和设备间同步
- 多语言支持：如果您想通过翻译插件来帮助，请与我联系。

---

反馈、问题、想法、问题

加入关于Excalidraw插件的讨论，访问[forum.obsidian.md](https://forum.obsidian.md/t/excalidraw-full-featured-sketching-plugin-in-obsidian)

请前往[GitHub](https://github.com/zsviczian/obsidian-excalidraw-plugin/issues)报告错误或请求改进。

---

如果您喜欢Excalidraw，请通过在[https://ko-fi/zsolt](https://ko-fi.com/zsolt)上给我买杯咖啡来支持我的工作和热情。

请还帮忙通过在Twitter、Reddit或其他您经常使用的社交媒体平台上分享Obsidian Excalidraw插件的信息来传播。

您可以在Twitter上找到我[@zsviczian](https://twitter.com/zsviczian)，以及在我的博客[zsolt.blog](https://zsolt.blog)上。

[<img style="float:left" src="https://user-images.githubusercontent.com/14358394/115450238-f39e8100-a21b-11eb-89d0-fa4b82cdbce8.png" width="200">](https://ko-fi.com/zsolt)

---

## Excalidraw的朋友们
如果你喜欢Excalidraw，请考虑尝试一下[ExcaliBrain](https://github.com/zsviczian/excalibrain)（也可通过Obsidian Community Plugins获得）。





