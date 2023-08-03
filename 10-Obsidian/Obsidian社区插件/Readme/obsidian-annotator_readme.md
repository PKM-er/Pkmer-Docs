---
uid: 20230803211931
title: Obsidian 插件：【Readme】Annotator
tags: ['PDF', '第三方工具集成', 'obsidian插件', 'readme']
description: Obsidian中阅读和注释PDF和EPUB的插件。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Annotator

> [!Note] 插件名片
> - 插件名称：Annotator
> - 插件作者：Elias Sundqvist
> - 插件说明：Obsidian中阅读和注释PDF和EPUB的插件。
> - 插件分类：['PDF', '第三方工具集成', 'obsidian插件', 'readme']
> - 项目地址：[点我访问](https://github.com/elias-sundqvist/obsidian-annotator)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsidian-annotator)

## 概述

Obsidian中阅读和注释PDF和EPUB的插件。

![Annotator](https://cdn.pkmer.cn/covers/obsidian-annotator_new.gif!pkmer)

> [!tip] 原文出处
> 
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/elias-sundqvist/obsidian-annotator/master/README.md)
> 

---

## Readme(翻译）

下面是 [[obsidian-annotator]] 插件的自述翻译



[![GitHub发布（最新SemVer）](https://img.shields.io/github/v/release/elias-sundqvist/obsidian-annotator?style=for-the-badge&sort=semver)](https://github.com/elias-sundqvist/obsidian-annotator/releases/latest)
![GitHub所有发布](https://img.shields.io/github/downloads/elias-sundqvist/obsidian-annotator/total?style=for-the-badge)
# Obsidian注释工具

这是Obsidian（https://obsidian.md）的一个插件。它允许您打开和注释PDF和EPUB文件。

该插件基于https://web.hypothes.is/，但修改为将注释存储在本地的markdown文件中，而不是在互联网上。

## 演示
![annotator demo](https://user-images.githubusercontent.com/9102856/131702952-1aa76baa-a279-474c-978d-cec95a683485.gif)

**警告！** 在上面的gif中，我使用了**Dataview**语法来指定注释目标。
如果您没有安装dataview插件，您必须在**frontmatter**中编写注释目标，如下所示：
```md
---
annotation-target: https://arxiv.org/pdf/2104.13478.pdf
---
```

## 已知问题

1. 插件在 iOS 16.3 或更高版本上无法工作。请关注[#289](https://github.com/elias-sundqvist/obsidian-annotator/issues/289)问题的最新状态。
2. 阅读器无法显示在不同平台上更改的批注。

## 入门指南

在Obsidian笔记的frontmatter中添加属性`annotation-target`，其值对应EPUB/PDF文件的位置。
位置可以是vault中的文件（例如`Pdfs/mypdf.pdf`），也可以是在线文件（例如`https://arxiv.org/pdf/2104.13478.pdf`）。

然后，在打开的笔记窗格中，选择“更多选项”（右上角的三个点），应该会出现一个新选项“annotate”。

插件会自动尝试根据文件路径确定文件是`epub`还是`pdf`，但如果这种方法不起作用，
您还可以添加属性`annotation-target-type`并手动指定是`epub`还是`pdf`。

如果您已经安装了[dataview](https://github.com/blacksmithgu/obsidian-dataview)，那么您还可以使用dataview属性指定注释目标。在这种情况下，可以使用Obsidian样式链接而不是纯文本路径。

> 警告！不要重命名原始的pdf或epub文件！在这种情况下，插件将失去注释与文件之间的连接。

### 注释



注释是自解释的。选择文本以开始注释。



将来，添加彩色高亮和图像/区域高亮将是很好的功能。然而，这些功能首先必须添加到hypothes.is中。

请参阅以下相关问题：https://github.com/hypothesis/product-backlog/issues/198，https://github.com/hypothesis/product-backlog/issues/669

### Markdown中的注释



要返回到常规的Obsidian Markdown编辑模式，可以选择`更多选项`→`以MD格式打开`。

每个注释都有一个关联的引用块和一个块引用。在修改这些块时要小心。

对PREFIX、HIGHLIGHT和POSTFIX进行小的编辑通常是可以的。但如果编辑过于重大，假设可能无法再识别相应的文本。



COMMENT区域可以自由编辑。（但要确保它仍然是引用块的一部分。）



TAGS区域应该由逗号分隔的Obsidian标签列表组成。（例如`#tag1, #tag2, #tag3`）

### 暗黑模式

该插件内置了暗黑模式支持。在进行注释时，可以选择 `更多选项` → `切换暗黑模式` 来切换暗黑模式。
您还可以在插件的设置选项卡中调整暗黑模式的行为。

### 链接到注释

点击一个对注释块引用的黑曜石链接时，将会打开相应的文件并滚动到相关的高亮部分。
如果文件已经在一个窗格中打开，则链接将导致现有窗格滚动。

## 贡献

访问[CONTRIBUTING.md](./CONTRIBUTING.md)获取有关从源代码构建或贡献改进的信息。要报告错误、提问或建议改进此插件，您可以创建一个[问题](https://github.com/elias-sundqvist/obsidian-annotator/issues)。

## 更新日志

### 0.2.10 (2023-01-09)

* 修复了 iOS 上插件无法启动的错误 #284

### 0.2.9 (2023-01-05)
* 点击Markdown中的注释链接会立即跳转到PDF中的注释（感谢@HardwayLinka）
* 修复因换行导致的拖放链接到高亮的错误（参见问题＃267，感谢@HardwayLinka）

### 0.2.8 (2022-11-27)
* 修复了“注释”按钮不显示的问题（请参见问题＃253）
* 修复了点击注释链接后滚动条卡住的问题（请参见PR＃259，感谢@HardwayLinka的贡献）
* 部分修复了注释链接不起作用的问题（请参见PR＃231，感谢@XSAM的贡献）

### 0.2.7（2022年10月31日）
* 修复了注释中LaTeX公式无法渲染的问题（请参见问题＃228）
* 删除了“登录/注册”按钮（请参见问题＃241）
* 现在可以使用CSS代码片段来样式化hypothesis侧边栏

### 0.2.6 (2022-08-19)

* 修复了0.2.5版本引入的错误#208，由于插件的原因，无法打开内部链接



* 内部更改

  * 使用dataview包与dataview插件进行通信

### 0.2.5（2022-08-14）
* 将“注释”、“切换暗模式”、“以Markdown格式打开”按钮移到选项菜单顶部
* 视频注释
  * 修复[视频未找到错误](https://github.com/elias-sundqvist/obsidian-annotator/issues/198)
  * 暂时禁用移动设备上的视频注释

* 内部更改
  * CodeMirror更新至v6
  * obsidian-api更新至0.15.9
  * 使用严格类型设置安装了betterer，以使插件在未来更稳定可靠

### 0.2.4（2022年7月23日）
* 修复[插件在iPad上无法启动的问题](https://github.com/elias-sundqvist/obsidian-annotator/issues/176)

### 0.2.2（2022-05-14）*小改进*

* hypothes.is 更新至 v1.1055.0

### 0.2.1 (2022-03-06) **[BRAT](https://github.com/TfTHacker/obsidian42-brat)发布** *基本的网络和视频注释*

* `annotation-target-type`现在可以取值`web`和`video`。

  * 使用`web`，注释目标理论上可以是任何网站。有些网站效果更好。链接导航不起作用。

  * 使用`video`，仅支持YouTube链接。为了使用此功能，必须在插件设置中提供指向annotator.tv资源的zip文件链接。它不能与插件捆绑在一起，因为那很可能会侵犯版权。

    * 您可以向某人索取链接，或者通过在annotate.tv上创建帐户，登录，转到https://annotate.tv/videos/620d5a42b9ab630009bf3e31#，并使用[Save All Resources](https://chrome.google.com/webstore/detail/save-all-resources/abpdnfjocnmdomablahdcfnoggeeiedb?hl=en) Chrome扩展程序下载网站，将其上传到Google Drive，并[生成直接链接](https://sites.google.com/site/gdocs2direct/)。

  * 其他改进：

    * 进行了一些幕后更改，以便将来更容易升级hypothes.is版本。

### 0.2.0 (2022-01-26) **[BRAT](https://github.com/TfTHacker/obsidian42-brat)发布** *改进的Markdown渲染，epub阅读器* 

* 现在，假设边栏中的Markdown应该完全支持常规的Obsidian语法（包括链接、嵌入、自定义代码块等）。

* 几个Epub改进，感谢@aladmit！

  * 添加了字体大小缩放的新选项（请参见PR＃127）

  * 添加了新的“epub阅读器模式”设置。现在支持无限滚动！（请参见PR＃114）

  * 减少页面填充，以便使用最大可用空间。（请参见PR＃126）

### 0.1.9（2022年1月17日）*小修复*

* 再次删除Sentry日志记录（请参见问题＃97）

### 0.1.8 (2022-01-16) *小修复，添加了默认注释模式设置* 
* 修复了启动时窗格加载的问题
* 修复了一些 EPUB 高亮显示的问题
* 添加了选择默认注释模式的设置，感谢 @aladmit 提供的 PR！（请参见 PR #113）

### 0.1.7 (2022-01-14) **[BRAT](https://github.com/TfTHacker/obsidian42-brat)发布** *支持中文文件名* 
* 修复了中文文件名的问题，详见问题＃53

### 0.1.6 (2022-01-12) **[BRAT](https://github.com/TfTHacker/obsidian42-brat)发布** *修复实时预览拖放问题 + 支持中文字符* 
* 现在实时预览中的拖放应该可以正常工作（参见问题＃103）
* 升级pdf.js到较新版本。
  * 改进字符支持（现在应该支持日文和中文字符）（参见问题＃53）
* 删除了Sentry日志记录（参见问题＃97）

### 0.1.5（2021年12月19日）*快速修复*

* 显然，之前的更新破坏了一些人的旧注释（参见问题＃95）。这个版本希望修复这个问题。

### 0.1.4（2021年12月18日）*修复iPad与Windows/Android兼容性问题。*

* 参见问题＃70，感谢@jonasmerlin的修复！

### 0.1.3 (2021-09-12) *桌面版基本CORS支持*

* 添加了一个基本的CORS问题解决方法。这应该使更多的链接可以查看。（参见问题＃15）

  * 请注意，这个解决方法只适用于Obsidian的桌面版。

### 0.1.2 (2021-09-11) *快速修复*

* 修复了一个严重的错误，导致无法保存任何注释。（参见问题＃61）

### 0.1.1 (2021-09-10) *拖放修复，在新窗格中打开链接，多行注释修复*

* 改进了拖放功能。现在在插件卸载时会卸载拖放处理程序。希望解决了与其他拖放功能干扰的问题。（参见问题＃50）

* 现在使用数组格式的注释目标应该可以正常工作。这提高了与MetaEdit的兼容性。（参见问题＃51）

* 按住<kbd>ctrl</kbd>并点击链接（或使用鼠标滚轮点击）现在会在新窗格中打开注释。（参见问题＃54）

* 解决了多行注释的问题。（参见问题＃47）

* 添加了一个新命令（`切换注释/Markdown模式`）。可以在Obsidian中将其绑定到热键上，以便更高效地在两种模式之间切换。（参见问题＃39）

* 其他事项

  * 还添加了一个基本的注释加载单元测试。随着问题的出现，将添加更多的测试。这将确保插件随着时间的推移变得越来越稳定。

### 0.1.0 (2021-09-03) *添加了注释高亮拖放功能*

* 现在，通过按住<kbd>shift</kbd>键，您可以将epub/pdf中的高亮拖放到单独的Obsidian笔记中，并插入一个指向该高亮的链接。

  ![highlight drag and drop](https://user-images.githubusercontent.com/9102856/132098957-e6850c9f-77a0-4fd5-91ac-e7095cfbea9d.gif)

### 0.0.9（2021-09-03）*修复注释ID错误的问题*

* 请参见＃37

### 0.0.8 (2021-09-03) *添加了前缀/后缀设置开关，修复了滚动问题，进一步减小了插件的大小。*

* 现在插件可以在社区插件列表中找到！

* 现在可以在设置中禁用注释标记的前缀和后缀部分。（参见＃30）

* 单击PDF注释链接现在会立即跳转到注释位置，不再出现滚动问题。（参见＃21）

* 添加了可能修复＃28中提到的内存泄漏问题的解决方案。

* 添加了core-js。希望这意味着插件可以在较旧版本的node上运行（参见＃34）

* 禁用了全局WebSocket覆盖。应该解决Obsidian Sync的问题（参见＃36）

* 进一步减小了插件的大小

  * React现在以“生产”模式构建。

  * 所有嵌入资源现在使用最高的zip压缩比率。

### 0.0.7 (2021-09-01) *添加了自定义默认路径设置，修复了页面注释问题，稍微减小了JSON的大小等等。*

* 添加了一个名为`Custom Default Path`的新设置。详见[此处的评论](https://github.com/elias-sundqvist/obsidian-annotator/issues/19#issuecomment-909549603)获取更多信息。

* 如果注释JSON中的顶级值是“不足为奇”的，将会省略它们。详见#24。

* 修复了页面注释导致注释加载失败的问题。

* 为了减少隐私混淆，将“Post to...”按钮始终显示为“Post to Only Me”。

* 进一步减小了插件的大小

  * 从base64编码切换到完整的Unicode编码

  * 在生成zip文件之前进行资源的最小化

  * 在最终的Rollup输出中进行最小化

* 小的修复

  * 移除了有关WebSocket用户ID不匹配的警告

  * 添加了对#13的可能修复。

### 0.0.6 (2021-08-30) *支持`file:`协议，修复了各种URL问题，提升了隐私保护，进行了一些小修复*

* 修复了不再向hypothes.is服务器发送初始http请求的问题。

* 移除了Hypothes.is性能跟踪器。

* 不再从websocket api收到错误消息。

* 存储的注释不再引用示例pdf的URL，因为这会让一些用户感到困惑。（参见问题#7）

* 添加了对`file:`协议链接的初始支持。（尚未经过大量测试。）

* 移除了占位符状态栏文本（参见问题#17）

### 0.0.5 (2021-08-26) *修复了EPUB的错误，进行了轻微的文件重组*

* 为EPUB阅读器所需的文件被`.gitignore`忽略了，在之前的版本中无法正常工作。（参见问题#6）

* 代码文件已移动到`src`目录中，使仓库看起来不那么凌乱。

### 0.0.4 (2021-08-26) *支持中文文件名*

* 增加对中文文件名的支持。（参见问题＃4）

### 0.0.3 (2021-08-26) *插件大小减小*

* 删除了一些不必要的文件以减小插件大小。

### 0.0.2 (2021-08-26) *小修复*

* 移除了日志记录，

* 简化了链接处理

* 查看器高度现在为100%而不是固定为1000px。

### 0.0.1 (2021-08-25) *首次发布*

* 实现了插件的基本功能

## 许可证

> 注意：`resources` 文件夹下的文件是从网络上抓取的。每个网站都附有其许可证文件。

[Obsidian Annotator](https://github.com/elias-sundqvist/obsidian-annotator) 使用 GNU AGPLv3 许可证。更多信息请参阅 [LICENSE](https://github.com/elias-sundqvist/obsidian-annotator/blob/master/LICENSE.TXT)。

## 支持

如果您想支持我和我的工作，您可以在[Github上赞助我](https://github.com/sponsors/elias-sundqvist)（首选方法），或者在[**Paypal**](https://www.paypal.com/donate/?hosted_button_id=C5MBC9YBWTYEC)上捐赠一些金额。



