---
uid: 20240526223250
title: Obsidian Weekly 2024-05-26：新版本尝鲜前瞻！笔记软件（?）万能终端（√）
tags: [Weekly, Obsidian]
description: Obsidian Weekly 2024-05-26：新版本尝鲜前瞻！笔记软件（?）万能终端（√）
author: 淡水鱼,PKMer
type: other
draft: false
editable: false
modified: 20240527120856
---

# Obsidian Weekly 2024-05-26：新版本尝鲜前瞻！笔记软件（?）万能终端（√）

> [!Abstract]
> **统计时间**：2024-05-19 21:00 ~ 2024-05-26 21:00
> **声明**：本栏目灵感来源于 _Eleanor Konik_ 女士于 2021 年 4 月至 2023 年 6 月期间写作发表的一系列 [Obsidian Roundup](https://www.eleanorkonik.com/tag/roundup/) 文章，如有兴趣可关注原作者的个人网站 [Obsidian Iceberg](https://www.eleanorkonik.com/)；内容来源于 Obsidian 官方 Discord 频道和相应项目在 Github 或其独立网站上的信息。描述中可能存在基于个人理解进行的修改，如有错谬欢迎指正。感谢 Obsidian 团队为我们带来如此优秀的软件。

## 视频教程

<iframe src="https://player.bilibili.com/player.html?isOutside=true&aid=1305213601&bvid=BV1eM4m1r7MK&cid=1564625232&p=1&autoplay=false" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" width="80%" height="500"> </iframe>

## 官方资讯

#### v1.6.1 桌面及移动版尝鲜前瞻

#### 桌面端

##### 改进

- 添加使用 `[^` 进行脚注引用的自动补全。
- 切换到具有属性的文件时消除闪烁。
- 如果打开的文件具有无效的前置数据，则在属性视图中添加编辑按钮。
- 对内联脚注提供悬停预览支持。
- 提示现在有一个“清除”按钮来清除输入。

###### MacOS

- 应用程序菜单现在具有“替换”菜单，用于切换系统级文本替换偏好设置。

##### 问题修复

- 我们已经取消了对 Markdown 文件解析的 2 MB 限制。
- 如果当前编辑器行是 RTL，则内联文本建议现在会出现在光标左侧。
- 修复了呼出窗口中渲染表格的问题。
- 修复了重新排列处理程序在弹出窗口中无效的问题。
- 修复了有时在编辑器的最后一行上切换格式的命令不起作用的问题。
- 修复了包含具有列表的 callout 的卡片出现模糊的问题。
- 选项卡标题颜色的小修复。
- 修复了 " 外部链接 " 未链接提及始终显示计数为 "0" 的问题。
- 如果选择具有尾随换行符的内容，则应用了不正确的格式修复。
- 文件资源管理器的布局微调。
- 修复了 Obsidian Publish 中的 " 新 " 部分显示未展开的文件夹的问题。

###### 阅读模式

- 阅读模式不再呈现包含空格的脚注引用。
- 页面预览现在在阅读模式下悬停时显示脚注预览。
- 修复了阅读模式中内联脚注的呈现问题。

###### 源代码模式

- 修复了在表格中按 `End` 键时，光标未移到行尾的问题。

###### 实时预览

- 修复了右键单击链接时 callout 菜单与 URL 菜单重叠的问题。
- 修复了渲染行末带有 `#` 的标题时失败的问题。
- 修复了如果光标位于折叠区域内，则复选框项会展开的问题。
- 允许多行脚注中的空行。

###### PDF

- 对 PDF. Js 漏洞进行了缓解 ([CVE-2024-4367](https://github.com/advisories/GHSA-wgrm-67xf-hhpq))。

##### 开发者

已经取消了对 `.suggestion-popover` 的 CSS 更改，这应该修复了插件创建的建议出现未样式化的问题。

#### 移动端

##### 改进

- 包括截至 [Obsidian 桌面 v1.6.1](https://obsidian.md/changelog/2024-05-22-desktop-v1.6.1/) 的所有新功能和 Bug 修复。
- 移动侧边栏在设计上略有更新。为了降低一些视觉复杂性，我们已将侧边栏选项卡更改为下拉列表。我们还删除了“全屏”按钮以进一步简化操作。
- 通过拖动插入符来选择表格单元格。
- 现在，在将命令添加到移动工具栏时，可以模糊搜索命令。
- 修复了阅读模式下列表渲染过于靠右的问题。

##### Obsidian 同步

- 查看活动日志和文件同步历史记录时的布局改进。

##### 不再有问题

- 确保在初始加载时捕获文件系统 `mkdir` 错误。
- 对 iCloud 加载屏幕进行了微调。
- " 隐藏键盘 " 按钮现在也会出现在 iPad 的移动工具栏中。

###### 属性

- 修复了导航栏在打开链接后保持隐藏状态的问题。
- 在数字属性聚焦时显示键盘。
- 软键盘现在将在 iOS 上显示“下一步”，在 Android 上显示“enter”。
- 对属性名称和标签值禁用了自动大写。

###### 样式

- 现在，在应用完全加载之前，初始屏幕将保持可见。
- 修复了在屏幕之间转换时库切换器的外观。
- 修复了 Sync 活动日志中剪裁的框阴影问题。
- 修复了在模态中按“取消”时跳过动画的问题。
- 对对话框的动画/阴影微调。
- 修复了查看标题的对齐问题（终于居中了）。

###### iOS

- 修复了共享表在 iOS 上并不总是有效的问题。
- 使用 iOS 共享表可以“共享”的最大项目数增加到 100 个。

##### 开发人员

- 有一个新 `.mobile-tap` 类在点击元素时会应用于元素。如果您想在移动设备上为按钮添加活动状态，可以将 `.tappable` 类添加到元素中。当您的元素被触摸时，`.mobile-tap` 类将被应用。

原文见 [Obsidian 1.6.1 桌面版（尝鲜版）- Obsidian](https://obsidian.md/changelog/2024-05-22-desktop-v1.6.1/) 和 [Obsidian 1.6.1 移动版（尝鲜版）- Obsidian](https://obsidian.md/changelog/2024-05-22-mobile-v1.6.1/) 。

## 插件新闻

### 社区插件

#### 新增

[Stashpad Docs](https://obsidian.md/plugins?id=stashpad-docs) By _Stashpad_

> 这是一个用于在 Obsidian 中与 [Stashpad Docs](https://stashpad.com/) 进行交互的插件。如果您在 Obsidian 中写了笔记，现在想通过 Stashpad Docs 与他人共享，这会非常有用。

[heti](https://obsidian.md/plugins?id=heti) By _Moeyua_

> 专为中文内容展示设计的排版样式增强。它基于通行的中文排版规范而来，可以带来更好的阅读体验。
> - **主要特性**
> 	- 贴合网格的排版；
> 	- 全标签样式美化；
> 	- 预置古文、诗词样式；
> 	- 预置多种排版样式（行间注、多栏、竖排等）；
> 	- 多种预设字体族（仅限桌面端）；
> 	- 简/繁体中文支持；
> 	- 自适应黑暗模式；
> 	- ~~中西文混排美化，不再手敲空格（基于 JavaScript 脚本）；~~
> 	- ~~全角标点挤压（基于 JavaScript 脚本）；~~
> 	- 兼容 _normalize.css_、_CSS Reset_ 等常见样式重置；
> 	- 移动端支持；
> 	- ……
> 总之，用上就会变好看。

![Pasted image 20240526210428](https://cdn.pkmer.cn/images/Pasted%20image%2020240526210428.png!pkmer)

[Interactivity: Calculations and Scripts](https://obsidian.md/plugins?id=interactivity) By _ichichikin_

> 这个插件允许您在笔记中直接运行 shell 命令和脚本，将它们的输出与您的书面内容一起提供，使您的笔记过程更加动态和交互。
> 默认情况下，它支持运行 JavaScript，但您也可以将其配置为运行任何其他 shell 命令和 Python、Perl、Node. Js 等工具。

[Solo RPG Toolkit](https://obsidian.md/plugins?id=solo-rpg-toolkit) By _Alex Kurowski_

> 玩 TTRPG 游戏的有用工具，适合使用 GM 模拟器进行单人游戏。

[Update Time](https://obsidian.md/plugins?id=update-time) By _Sébastien Dubois_

> 这个 Obsidian 插件会更新笔记中的前置数据，以包含创建和最后更新时间/日期。一旦安装并启用该插件，它将自动添加/更新元数据中的属性。

[Toggle RTL mode](https://obsidian.md/plugins?id=toggle-rtl-mode) By _Yoni Asulin_

> 一个简单的插件，用于切换 RTL（从右到左）模式。
> 使用此插件切换 RTL 模式等同于从 `设置 --> 编辑器 --> 从右到左 (RTL)` 进行切换。
> 此切换将全局应用于库中的所有文件，无需单独切换每个文件。

[Github Copilot](https://obsidian.md/plugins?id=github-copilot) By _Vasseur Pierre-Adrien_

> 直接在编辑器中实现 Github Copilot 的建议。

![example](https://cdn.pkmer.cn/images/example.gif!pkmer)

[Légifrance Intégration](https://obsidian.md/plugins?id=legifrance-integration) By _hurj_

> 该模块将 Legifrance API 集成到 Obsidian. Md 工作环境中。

[Voicenotes Sync](https://obsidian.md/plugins?id=voicenotes-sync) By _Andrew Lombardi_

> 用于将 Voicenotes. Com 数据同步到笔记中的插件。

#### 更新

[Tasks v7.3.0](https://github.com/obsidian-tasks-group/obsidian-tasks/releases/tag/7.3.0) By _Martin Schenck and Clare Macrae_

> 在 [延迟](https://publish.obsidian.md/tasks/Editing/Postponing) 上下文菜单中添加“删除日期”选项。

[View Count v2.0.2](https://github.com/trey-wallis/obsidian-view-count/releases/tag/2.0.2) By _Trey Wallis_

> - **功能**
> 	- 将属性存储和文件存储合并为 `ViewCountCache`。
> 	- 添加 `Total times opened` 和 `Unique days opened` 查看类型。
> 	- 更新 `view-count.json` 文件的格式，以支持唯一打开天数计数和总打开次数计数。
> 	- 将 `view-count.json` 文件作为真实来源。
> 	- 如果启用了“保存视图计数到正文前置数据”的设置，则将视图计数同步到相关笔记的属性中。
> - **修复**
> 	- 使用 `file-open` 事件而不是 `active-leaf-change` 事件来确定计数。
> 	- 始终保持视图计数状态栏项可见，即使打开了其他视图。
> 	- 解决项目视图点击未增加视图计数的问题。

[Canvas2Document v1.2.0](https://github.com/slnsys/obsidian-canvas2document/releases/tag/1.2.0) By _sInsys_

> - 层次阅读：将画布的层次关系和顺序作为目录树进行导航
> - 画布阅读的灵活性：识别具有多个树/图结构的多个区域
> - 导航标题上的更好元数据：导航标题中的节点和文件数据
> - 在结果文档中将文件名作为标题

[Excalidraw v2.2.2](https://github.com/zsviczian/obsidian-excalidraw-plugin/releases/tag/2.2.2) By _Zsolt Viczian_

> - **重大变更**
> 	- _使用 2.2.0 保存的文件不向后兼容早期的插件版本！_
> 	- 此版本具有改进的 Markdown 文件结构，包括自动折叠 `# Excalidraw Data` 部分。
> 	- 该版本还包括来自 excalidraw .com 的 [包装文本元素](https://x.com/excalidraw/status/1790742796728426661)
> - **修复**
> 	- ExcaliBrain 在 2.2.0 中停止工作

### PKMer 出品

> [!INFO]
> **PKMer**（[PKMer.cn](https://pkmer.cn/)、[PKMer.net](https://pkmer.net/)）旨在打造东半球强大的知识管理社区。Personal Knowledge Management (PKM) + "er"，其中 "er" 表示人，专注、喜爱个人知识管理工作、追求效率的人们，都可以划入这个行列，希望社区凝聚更多这样的人。

#### [Media Extended v3.2.4](https://github.com/PKM-er/media-extended/releases/tag/3.2.4) 已发布

- **修复**
	- YouTube 自动全屏在新布局下失效的问题已修复。
	- 更新 YouTube 广告跳过逻辑。
- **重构**
	- 改进 YouTube 广告跳过逻辑。
- **性能优化（Web 视图）**
	- 禁用 AV1 解码以提高网站性能。

### [Thino Web ](https://thino.pkmer.cn/) 已开启内测

购买 Thino Pro 的用户已经可以抢先登录体验了。

![image.png](https://cdn.pkmer.cn/images/202405262358883.png!pkmer)

相关文档 [Thino Web | PKMer.net](https://thino.pkmer.net/thino/03_thino-web/thino-web/)



## 外观

[Fusion Theme v0.4 (beta)](https://github.com/zamsyt/obsidian-fusion/wiki/Fusion-v0.4-beta) By _zamsyt_

![Pasted image 20240526213220](https://cdn.pkmer.cn/images/Pasted%20image%2020240526213220.png!pkmer)

![Pasted image 20240526213225](https://cdn.pkmer.cn/images/Pasted%20image%2020240526213225.png!pkmer)

[Folder prefix](https://github.com/zamsyt/obsidian-snippets/wiki/Folder-prefix) By _zams_

> 为文件夹名称添加隐藏前缀，可用于手动重新排列文件夹的顺序。
> - **有效前缀的例子**
> 	- `A`, `z`, `9`, `_`, `π`
> 	- `A.`
> 	- `(2)`
> 	- `*A*`
> 	- `))A()(()(`
> 	- `**_********`
> 	- `🏆️`, `(🤖)` (⚠️ An emoji works as a prefix, however, editing the folder name seems to be very glitchy with them)
> - _不支持带有多个“字母”的前缀。_
> - 可以使用 [Style Settings](https://github.com/mgmeyers/obsidian-style-settings) 来配置显示前缀的时间。

![8e567add-21e8-4792-8c8b-acf359bfab84|400](https://cdn.pkmer.cn/images/8e567add-21e8-4792-8c8b-acf359bfab84.gif!pkmer)

[Neon Synthwave Theme](https://github.com/grjsmith/Neon-Synthwave) By _Grant Smith_

![Pasted image 20240526201005](https://cdn.pkmer.cn/images/Pasted%20image%2020240526201005.png!pkmer)

> 灵感来自 [Robb Owen 的 SynthWave '84 VSCode 主题](https://marketplace.visualstudio.com/items?itemName=RobbOwen.synthwave-vscode) 和 [deathau 的 80s Neon Obsidian 主题](https://github.com/deathau/80s-Neon-for-Obsidian.md) 的 Obsidian 主题。

[Space Theme](https://github.com/bhappen/obsidian-space) By _BHappen_

![Pasted image 20240526200805](https://cdn.pkmer.cn/images/Pasted%20image%2020240526200805.png!pkmer)

> 这是一个沉浸式的以太空为主题的 Obsidian 主题，旨在将您的笔记体验带到星际。这个主题将空间的神秘和美丽与时尚、现代的界面相结合，让您的黑曜石工作空间真正超凡脱俗。

> [!Warning] 声明
> 本栏目致力于为广大 Obsidian 中文用户汇总全面的官方资讯与插件、外观动态。为了保持信息的全面性，我们的**收录并不等同于推荐**，还请各位用户知悉并理解，根据自身需求进行判断和选择。

