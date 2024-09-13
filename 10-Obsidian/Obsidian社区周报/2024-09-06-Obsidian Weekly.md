---
uid: 20240909004930
title: Obsidian Weekly 2024-09-06：叮咚！您的第二大脑智商已升级！
tags: [Weekly, Obsidian]
description: Obsidian Weekly 2024-09-06：叮咚！您的第二大脑智商已升级！
author: 淡水鱼,PKMer
type: other
draft: false
editable: false
modified: 20240909005016
---

# Obsidian Weekly 2024-09-06：叮咚！您的第二大脑智商已升级！

> [!Abstract]
> **统计时间**：2024-08-30 21:00 ~ 2024-09-06 23:00
> **声明**：本栏目灵感来源于 _Eleanor Konik_ 女士于 2021 年 4 月至 2023 年 6 月期间写作发表的一系列 [Obsidian Roundup](https://www.eleanorkonik.com/tag/roundup/) 文章，如有兴趣可关注原作者的个人网站 [Obsidian Iceberg](https://www.eleanorkonik.com/)；内容来源于 Obsidian 官方 Discord 频道和相应项目在 Github 或其独立网站上的信息。描述中可能存在基于个人理解进行的修改，如有错谬欢迎指正。感谢 Obsidian 团队为我们带来如此优秀的软件。

## 社区插件

#### 新增

[Backtick text selector](https://obsidian.md/plugins?id=backtick-text-selector) By _Ram Rachum_

> 这是一个简单的插件，允许你通过按 `Alt` + ``` 快速选择在反引号 ``` 内的文本，按 ` Alt ` + ` Shift ` + ``` 选择上一个反引号中的文本。

[Import GitHub Readme](https://obsidian.md/plugins?id=import-github-readme) By _Chasebank87_

> 允许您将 GitHub README 文件导入到您的保管库中。

[ImgBB Uploader](https://obsidian.md/plugins?id=imgbb-uploader) By _Jordan Handy_

> 将剪贴板中的图像上传至 ImgBB。

[Live Variables](https://obsidian.md/plugins?id=live-variables) By _Hamza Ben Yazid_

> 在笔记属性中定义变量并在整个内容中重复使用它们。

![imgBB|650](https://cdn.pkmer.cn/images/imgBB.gif!pkmer)

[AnySocket Sync](https://obsidian.md/plugins?id=anysocket-sync) By _Andrei Vaduva_

> 使用 AnySocket 为您的 Vault 自托管同步。

![Pasted image 20240908220710|650](https://cdn.pkmer.cn/images/Pasted%20image%2020240908220710.png!pkmer)

#### 更新

[Slides Extended v2.1.2](https://github.com/ebullient/obsidian-slides-extended/releases/tag/2.1.2) By _Erin Schnabel (original:MSzturc)_

> - **修复**
> 	- 使用 Markdown 或 Wiki 链接嵌入幻灯片。
> 	- 导出到浏览器时使用 localhost。
> - **提交**
> 	- 运行 LaTeX 处理时跳过代码块。
> 	- 整洁简单的实用函数 `isUrl`, `isImage`, `isIcon`。
> 	- 清理 `source/vaultDir` 比较。
> 	- 整洁的控制台链接。
> 	- 文档内容 + 图片。

[Pane Relief v0.5.5](https://github.com/pjeby/pane-relief/releases/tag/0.5.5) By _PJ Eby_

> - **杂项修复**
> 	 - 改进了在新版 Obsidian 中的取消最大化/滑动行为
> 	 - 恢复了适用于 Obsidian 1.6+ 的视图标题窗格编号（Obsidian 1.6+ 移除了应用 HTML 中的视图标题图标）

[Iconic v1.0.13](https://github.com/gfxholo/iconic/releases/tag/1.0.13) By _Holo_

> - **新功能**
> 	- 文件夹的自定义性大大提高！
> 		  - 文件夹图标默认显示在文件夹箭头之后
> 		  - 通过启用 `Minimal folder icons` 可以切换回原始行为
> 		  - 新增了 `Show all folder icons` 设置
> 		  - 展开带有默认图标📂的文件夹时，这些文件夹会在视觉上打开
> 	- 图标选择器
> 		- 图标搜索结果稍大一些
> 		- 图标和表情符号的名称现在以大写字母开头
> 		- 选中的颜色现在用对勾✔标记
> 		- 平板设备上，`Remove` 和 `Emojis` 按钮现在位于同一行
> 	- 其他改进：
> 		- 新增 `Colorless drag` 设置，适用于图标颜色与拖动阴影颜色混合不佳的主题
> 		- 菜单本地化为英语 (GB)
> - **Bug 修复**
> 	- 各种主题中的“黑色图标”颜色问题几乎都已修复
> 	- `Colorless` 设置再次正常工作——在 `1.0.10` 颜色更新后忘记测试
> 	- **RTL 语言中的文件夹图标**：现在正确反转
> 	- **外部 CSS 中的无效颜色**：不再破坏图标选择器
> 	- **（仅限桌面版）：** 图标选择器中的 `Remove` 按钮回来了，之前在 `1.0.12` 中意外消失

[Linter v1.26.0](https://github.com/platers/obsidian-linter/releases/tag/1.26.0) By _Victor Tao_

> - **功能**
> 	- 新增了使用 Obsidian 注释进行范围忽略的功能
> 	- 新增了指定包含自定义自动更正值的文件功能（参考 [此处](https://platers.github.io/obsidian-linter/settings/content-rules/#how-to-use-custom-misspellings) 了解如何使用）
> - **修复**
> 	- 修复了某些 Linter 版本指定了错误的 Obsidian 最低版本，导致在清理文件时出现错误的问题
> 	- 修复了 Live Preview 更新前言时的边缘情况，避免破坏前言
> 	- 修复了正则表达式中使用错误的 CJK Unicode 偶尔导致问题的问题
> 	- 修复了 `YAML Title` 规则中，由于规则执行顺序，标题首字母大写在首次运行时无效的问题
> 	- 修复了将标签移至 Frontmatter 时，无法在标签中使用表情符号的问题
> 	- 修复了将 `'` 和 `-` 视为单词的问题，这会影响标题首字母大写规则
> 	- 修复了使用正则表达式格式化标签时，可能影响其他键和值的问题，尤其是当它们包含 `#` 时
> - **文档**
> 	- 更新了 `Heading Blank Lines` 的措辞，以更清楚地表明根据规则设置，在标题之前和/或之后将只有一行
> - **变更**
> 	- 修复：固定最低应用程序版本以防止在旧版 Obsidian 上使用错误的版本
> 	- 修复：Live Preview YAML 更新偶尔破坏 Frontmatter 的问题
> 	- 修复 CJK 符号和标点符号 Unicode 问题
> 	- 支持 Obsidian 风格的注释，用于内联 Linter 切换
> 	- 修复：capitalize-headings、yaml-title、yaml-title-alias 需要两次清理才能解决
> 	- 添加自定义自动更正选项
> 	- 预发布 PR
> 	- 修复：加载问题，原因是数组未设置默认值
> 	- 自动发布 beta 1.26.0-rc-2
> 	- 修复：标签正则表达式不允许使用表情符号
> 	- 清理：从插件构建中移除示例，并修复自定义替换项的加载错误
> 	- 更新 braces 从 3.0.2 到 3.0.3
> 	- 更新 katex 从 0.16.9 到 0.16.11
> 	- 自动发布 beta 1.26.0-rc-3
> 	- 修复 ITs 无法正常运行的问题，并修复 `'` 和 `-` 被视为单词和字母的问题
> 	- 更新 `Heading Blank Lines` 的措辞，使其更加清晰
> 	- 修复：`Format Tags in YAML` 只应匹配 `tag` 或 `tags` YAML 值

[Reading Time v1.1.2](https://github.com/avr/obsidian-reading-time/releases/tag/1.1.2) By _avr_

> - **变更**
> 	- 升级了 TypeScript、eslint、esbuild 和其他依赖项版本
> 	- 在拉取请求时自动进行构建/代码检查
> 	- 自动构建资源和草稿发布
> - **修复**
> 	- 插件在移动设备上不再崩溃
> 	- 文件更改时阅读时间更新更加可靠

### PKMer 出品

> [!INFO]
> **PKMer**（[PKMer.cn](https://pkmer.cn/)、[PKMer.net](https://pkmer.net/)）旨在打造东半球强大的知识管理社区。Personal Knowledge Management (PKM) + "er"，其中 "er" 表示人，专注、喜爱个人知识管理工作、追求效率的人们，都可以划入这个行列，希望社区凝聚更多这样的人。

#### [Canvas MindMap v1.0.2](https://github.com/Quorafind/Obsidian-Canvas-MindMap/releases/tag/1.0.2) 支持大量新功能

- **闪亮的新功能**
	- **自动布局**
	    - 支持 `从右到左` 和 `从左到右` 思维导图方向；
	    - 支持 `从上到下` 和 `从下到上` 思维导图方向；
	    - 支持在文本更改时自动调整节点大小；
	    - 支持将节点移出思维导图；
	    - 支持在节点更改时触发自动布局；
	    - 支持在删除节点时触发自动布局；
	- **所有功能的设置**
	    - 更改快捷键以编辑节点/创建下一个兄弟节点/创建上一个兄弟节点；
	    - 设置节点的宽度、高度和节点之间的间隙；
	    - 设置默认思维导图方向；
	    - 设置忽略文件的正则表达式；
	- **更好的节点导航**
	- **节点上下文菜单**
	    - 创建兄弟节点；
	    - 创建子节点；
	    - 选择节点的树结构；
	- **命令**（如果当前文件在画布中编辑，所有命令将被忽略）
	    - 创建子节点；
	    - 创建兄弟节点；
	    - 创建浮动节点；
	    - 打开更新日志；
	    - 进入/退出编辑模式；
	- **快捷键**（所有快捷键都可以更改当前的思维导图方向）
	    - `Mod + Shift + ArrowLeft` 在当前节点左侧创建新子节点；
	    - `Mod + Shift + ArrowRight` 在当前节点右侧创建新子节点；
	    - `Mod + Shift + ArrowUp` 在当前节点上方创建新子节点；
	    - `Mod + Shift + ArrowDown` 在当前节点下方创建新子节点；
- **错误修复**
    - 创建新节点时无法进入编辑模式；
    - 当节点是其父节点的唯一子节点/思维导图中唯一的节点时，无法删除节点。

## 外观

[Minimal theme css snippets](https://github.com/replete/obsidian-minimal-theme-css-snippets) By _replete_

![Pasted image 20240909003151|650](https://cdn.pkmer.cn/images/Pasted%20image%2020240909003151.png!pkmer)

> 在 Minimal 主题调整代码片段库中新增了一些超紧凑的代码片段。如下所示：
> - 紧凑标签页
> - 紧凑文件资源管理器
> - 紧凑侧边栏
> - 更紧凑的标签页标题
> - 自定义分隔符
> - 隐藏功能区
> - 标签页标题显示路径和标题
> - 超紧凑
> - 超紧凑侧边栏
> - Excalidraw 紧凑版

[Snippet: Hover Callouts](https://github.com/Scaryharry4/Obsidian-Snippet-Callout-Appear-On-Hover) By _Harry_

> 悬停提示功能：提示框（callouts）如果没有设置为通过切换按钮打开或关闭，将在默认情况下被折叠，鼠标悬停在上方时展开。
> - **重要事项**
> 	- 如果提示框内容超过 41 行（默认文本大小）或高度超过 1000px，则需要调整代码片段以避免内容被截断。
> 	- 该代码片段尚未在非默认的提示框主题上测试。
> 	- 目前该功能不适用于嵌套提示框。

[**OISTNB** Theme](https://github.com/omsandippatil/OISTNB) By _omsandeeppatil_

![OISTNB|650](https://cdn.pkmer.cn/images/OISTNB.png!pkmer)

[**Adrenaline** Theme](https://github.com/Spekulucius/obsidian-adrenaline) By _Spekulucius_

![Pasted image 20240908223546|650](https://cdn.pkmer.cn/images/Pasted%20image%2020240908223546.png!pkmer)

[**Colored Candy** Theme](https://github.com/Erallie/colored-candy) By _Erika Gozar_

![Pasted image 20240908223207|650](https://cdn.pkmer.cn/images/Pasted%20image%2020240908223207.png!pkmer)

> 这是一个为 Obsidian 设计的可爱小主题，它会根据你选择的强调色来改变界面的颜色。

[**Lumines** Theme](https://github.com/Avesend/obsidian-lumines) By _Avesend_

![Pasted image 20240908223132|650](https://cdn.pkmer.cn/images/Pasted%20image%2020240908223132.png!pkmer)

## 其他新闻

[Obsidian Plugin Generator](https://github.com/MikeBirdTech/ai-toolkit/tree/master/obsidian_plugin_generator) By _Mike Bird_

> 一个智能工具，用于根据用户描述和答案生成自定义 Obsidian 插件。
