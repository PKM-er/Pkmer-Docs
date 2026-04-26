---
uid: 20230329145815
title: Obsidian 插件：Editing Toolbar 必装的可视化编辑工具
tags: [Obsidian, 插件, 编辑器, 美化, 可视化, 效率]
description: Obsidian 插件：Editing Toolbar 必装的可视化编辑工具，增强可视化编辑体验。提供类似于 Word，在线办公软件 的浮动工具栏等交互方式。
author: OS
type: other
draft: false
editable: false
modified: 20231222161645
---

# Obsidian 插件：Editing Toolbar 必装的可视化编辑工具

Editing Toolbar 是 Cumany 二次开发的可视化编辑工具栏，旨在增强 Obsidian 的可视化编辑体验。提供类似于 Word，在线办公软件 的浮动工具栏等交互方式。

> [!Note] 插件名片
> - 插件名称：Editing Toolbar
> - 插件作者：Cumany
> - 插件说明：旨在增强 Obsidian 的可视化编辑体验。提供类似于 Word，在线办公软件 的浮动工具栏等交互方式。
> - 插件项目地址：[点我跳转](https://github.com/cumany/obsidian-editing-toolbar)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?editing-toolbar)

> [!tip] 3.x
> EditingToolbar 自从==3.x 版本==后，代码重构，功能全面升级。请参考[[Editing Toolbar插件进阶使用指南]]


> [!tip]4.x
> EditingToolbar 自从==4.x 版本==后，增加AI辅助功能，实现智能编辑。请参考[[editing-toolbar-4.0-ai-texttools-guide|Editing Toolbar 4.0 开启智能编辑]]

## 效果&特性

![editing-toolbar-demo](https://cdn.pkmer.cn/images/8dcebbf3dbf5d43541cacc63301ae1a8_MD5.gif!pkmer)

> [!重要提示]
> Editing Toolbar 可以自定义添加命令，只要是 命令面板里能看到的都可以加。也可以自由调整顺序，非常方便。

## 安装

1. 进入 Obsidian 社区插件
2. 搜索 Editing Toolbar
3. 安装
4. 开启插件

## 使用

1. 增加新的工具栏样式 tiny

    [![|400](https://cdn.pkmer.cn/images/6c7222e15b6962cc554077c737db26c4_MD5.png!pkmer)](https://camo.githubusercontent.com/14426cec336e3720265a061a0b85122c79193abc019d1c3a9d90739bc01307aa/68747470733a2f2f676870726f78792e636f6d2f68747470733a2f2f7261772e67697468756275736572636f6e74656e742e636f6d2f63756d616e792f63756d616e792f6d61696e2f2f7069632f3230323230393037313133313731352e706e67)

2. 增加工具栏位置选项，top，following

    - top 样式类似 word 的指定工具栏效果
    - following 样式，则是跟随光标点击位置

    [![|400](https://cdn.pkmer.cn/images/ee396b67b8834eb107c53c27100bd31d_MD5.png!pkmer)](https://camo.githubusercontent.com/4501d6ada41d95e84ed486ecd1779e71714b750f1491d1a68fbfc86fb848bb87/68747470733a2f2f676870726f78792e636f6d2f68747470733a2f2f7261772e67697468756275736572636f6e74656e742e636f6d2f63756d616e792f63756d616e792f6d61696e2f2f7069632f3230323230393037313133333735332e706e67)

3. 支持 多窗口，多 tab 适应 obsidian 0.14+
4. 增加格式刷功能 内置字体颜色和背景颜色两种格式刷（鼠标中键或者右键可取消格式刷状态）
5. 增加一些内置命令
    - change-font-color 字体颜色调色板和格式刷
    - change-background-color 背景颜色调色板和格式刷
    - indent-list 列表增加缩进
    - undent-list 列表减少缩进
    - editor-undo：撤销
    - editor-redo：重做
    - hrline
        - 会插入一个 `---` 分割线
    - justify 两端对齐 插入一个 html 代码，让文字两端对齐 `<p align="justify">.....</p>`
    - left 插入一个 html 代码，让文字左对齐 `<p align="left">.....</p>`
    - right
        - 插入一个 html 代码，让文字右对齐 `<p align="right">.....</p>`
    - center 居中对齐 插入一个 html 代码，让文字居中 `<center>.....</center>`
    - fullscreen-focus 默认绑定快捷键 `Ctrl+shift+F11`。 将使笔记页面全屏显示，让你更专注于写作本身。要退出全屏，请按 ESC 或再次执行全屏命令。
    - workplace-fullscreen-focus 默认绑定快捷键 `Ctrl+F11`。 与全屏聚焦模式不同，这个模式只是隐藏了左右侧边栏的面板，它只是工作区全屏。
    - head 1-6 级标题设置 默认绑定快捷键 `Ctrl+1,ctrl+2,...Ctrl+6`。
      ![Pasted image 20230210173533](https://cdn.pkmer.cn/images/0d9a9a1c49d9d2b61ea4e17c400766e3_MD5.png!pkmer)

### 进阶使用

1. 支持自定义命令图标
   ![支持自定义命令图标](https://cdn.pkmer.cn/images/02dbf5b6ba9ecf5b170766f390f3f0a5_MD5.gif!pkmer)

2. 支持修改命令名称

![支持修改命令名称](https://cdn.pkmer.cn/images/48b368f52a8494689040e851a77bad09_MD5.gif!pkmer)

1. 支持添加子菜单

![支持添加子菜单](https://cdn.pkmer.cn/images/ee9a0674177f5467ccaa9888fe3227e4_MD5.gif!pkmer)

1. 支持菜单拖动排序
2. 增加格式刷功能 内置字体颜色和背景颜色两种格式刷（鼠标中键或者右键可取消格式刷状态）
   ![增加格式刷功能 内置字体颜色和背景颜色两](https://cdn.pkmer.cn/images/043688f59a5fa25d87f3d6bfa1c60de9_MD5.gif!pkmer)

   1. 工具栏图标宽度自适应缩小
       ![](https://ghproxy.com/https://raw.githubusercontent.com/cumany/cumany/main/pic/202209072157728.gif)

## 视频教程

<iframe src="https://player.bilibili.com/player.html?aid=325049827&bvid=BV1ew41147Jp&cid=1375910040&p=1&autopaly=false" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" width="80%" height="500"> </iframe>

### 与其他插件一起使用

1. [[obsidian-emoji-toolbar]] 快速插入表情符号
   ![](https://ghproxy.com/https://raw.githubusercontent.com/cumany/cumany/main/pic/202209092001600.gif)

2. [Obsidian-Table-Generator](https://github.com/Quorafind/Obsidian-Table-Generator/) 和 [ob-table-enhance](https://github.com/Stardusten/ob-table-enhancer) 快速插入和编辑表格
   ![](https://ghproxy.com/https://raw.githubusercontent.com/cumany/cumany/main/pic/202209092008571.gif)

> [!Tip] 关联推荐
> - [[lapel]]：在标题旁边显示标题等级，并提供快捷切换标题等级的能力
> - [[cm-editor-syntax-highlight-obsidian]]：允许在 Obsidian 的代码块中针对编程语言显示预设的高亮配色方案
> - [[obsidian-comments]]：为笔记增加批注或评论。
> - [[highlightr-plugin]]：将小而美的高亮菜单添加到了 Obsidian 中，通过所见即所得的方式，为笔记内容中文本增加高亮颜色。
> - [[easy-typing-obsidian]]：包含编辑时自动格式化文本和符号编辑增强。自动格式化文本对文档的格式进行规范化，并且美化文档的观感，强优化用户的编辑体验
> - [[obsidian-latex-suite]]：通过片段、文本扩展和编辑器增强功能，使排版 LaTeX 数学与手写一样快
> - [[obsidian-dynamic-highlights]]：根据正则表达式，为笔记内容增加高亮和样式
> - [[multi-column-markdown]]：在 Obsidian 的预览模式下创建包含多列内容的 Markdown 文档
> - [[obsidian-columns]]：支持多种方式来设定分栏目
> - [[remember-cursor-position]]：记住每个文件光标和滚动位置
> - [[cm-typewriter-scroll-obsidian]]：打字机风格的滚动，使视图保持在编辑器的中心
> - [[typewriter-mode]]：使光标所在行始终处于屏幕某处，降低用 Obsidian 写中长文时用鼠标滚动调整页面的频繁
> - [[number-headings-obsidian]]：给笔记中的标题自动编号，以及动态目录
> - [[cmenu-plugin]]：提供一个 mini 工具栏，以获得更流畅的写作/编辑体验✍🏽
> - [[code-block-copy]]：在阅读模式中，为代码块右上角添加一个复制按钮，点击后自动复制代码块内容到剪贴板
> - [[weather-fetcher]]：来获取和插入当前的天气到笔记编辑器的插件
> - [[Obsidian如何制作多栏布局]]