---
uid: 20240610115436
title: Obsidian Weekly 2024-06-09：v1.6 公共版终于到来！
tags: [Weekly, Obsidian]
description: Obsidian Weekly 2024-06-09：v1.6 公共版终于到来！
author: 淡水鱼,PKMer
type: other
draft: false
editable: false
modified: 20240610115702
---

# Obsidian Weekly 2024-06-09：v1.6 公共版终于到来


> [!Abstract]
> **统计时间**：2024-06-02 21:00 ~ 2024-06-09 21:00
> **声明**：本栏目灵感来源于 _Eleanor Konik_ 女士于 2021 年 4 月至 2023 年 6 月期间写作发表的一系列 [Obsidian Roundup](https://www.eleanorkonik.com/tag/roundup/) 文章，如有兴趣可关注原作者的个人网站 [Obsidian Iceberg](https://www.eleanorkonik.com/)；内容来源于 Obsidian 官方 Discord 频道和相应项目在 Github 或其独立网站上的信息。描述中可能存在基于个人理解进行的修改，如有错谬欢迎指正。感谢 Obsidian 团队为我们带来如此优秀的软件。

## 视频教程

<iframe src="https://player.bilibili.com/player.html?isOutside=true&aid=1955542291&bvid=BV1Ey41187RK&cid=1581013211&p=1&autoplay=false" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" width="80%" height="500"> </iframe>

 
 

## 官方资讯

### Obsidian v1.6.3 公共版现已在桌面和移动端推出

#### 桌面端

本次更新着重于改进一些长期存在的痛点，特别是全面改进了对**从右到左 (RTL) 语言**的支持。编辑器现在能按行自动检测语言方向，使其在混合语言使用时更加灵活。此外，当应用设置为 RTL 语言时，界面会相应地镜像显示。

此外还改善了**脚注**的编辑和阅读体验。此版本包含大量的错误修复和小改进，以及一些针对工作区加载和编辑的性能增强。

###### 亮点

- RTL UI 和混合方向支持。当应用设置为 RTL 语言时，界面方向现在会镜像显示。
- 新增库配置文件。库名称现在始终显示在主侧边栏中，切换库更方便。
- 可以在设置中隐藏应用功能区，或通过右键单击功能区并选择“隐藏功能区”。
- 字符数和单词数现在会根据当前文本选择进行更新。
- 加快工作区加载速度，优化长 Markdown 文件的解析。

##### 改进点

- `Tab` 现在可在快速切换器和“移动文件”提示中完成当前选定文件的路径段。
- 添加了 `Add alias` 命令。
- 添加了 `Create new folder` 命令。
- 如果在 Obsidian 外部修改设置，快捷键和属性类型现在会自动重新加载。
- 向链接添加展示文本时，增加了自定义说明和结果。
- 提示窗口现包含一个“清除”按钮以清空输入。无输入时按下该按钮可关闭提示。
- 页面预览弹出窗口现在应具有更一致的大小和位置。

###### 脚注

- 添加了输入 `[^` 时自动补全脚注引用的功能（_脚注内容需事先写好_）。
- 改进了编辑器中脚注的解析和渲染。
- 为内联脚注添加了悬停预览支持。
- 悬停在脚注 ID 上会显示相应脚注的弹出窗口。

###### 属性

- 合并属性时，新属性名称在全局属性列表中闪烁。
- 双击属性列表项可进行编辑。
- 如果打开的文件包含无效的前置信息，则属性视图中现会添加一编辑按钮。

###### Obsidian 同步

- 更新了设置同步时的默认选择性同步选项。默认情况下，同步现在包含：
    - 主设置
    - 外观设置
    - 快捷键
    - 核心插件
    - 核心插件设置
    - 视频、图像、PDF 和音频
- 插件文件夹内的任意文件不再由同步跟踪。唯一被跟踪的插件文件夹内文件包括：
    - `data.json`
    - `main.js`
    - `styles.css`
    - `manifest.json`
- 改进了同步连接到远程库时的加载体验。
- 当存储空间用量超过 95% 时，会出现“清理”按钮。
- 添加了打开活动日志的命令。
- 更新了状态栏菜单的布局。
- 点击状态栏图标现在总是显示同步菜单而非打开活动日志。
- 改进了设置中“断开连接”按钮的外观。
- 处理待定更改时，同步速度更快。
- 主窗口最小化或在后台时不再限速。
- 改进了邀请同步协作者的界面。
- 修复了文件未在同步中跟踪时“查看版本历史”无法工作的问题。
- 断开与库的连接不再无限期挂起。
- 对于不存在的库自动断开连接。
- 规范化了“库未找到”的错误消息。
- 删除了冗余的断开连接按钮。
- 修复了在切换远程库时设置重置的问题。

##### 已修复的问题

- 修复了切换离开含有属性的文件时文件内容闪烁的问题。
- 解决了“全部折叠”需要多次点击的问题。
- 修复了 macOS 应用菜单中的 `Redo` 不工作的问题。
- 属性现在继承视图所在模式的页面预览设置。
- 更新了“移动到新窗口”和“在新窗口中打开”的图标。
- 在书签视图中上下文菜单图标保持一致。
- 修复了选择选项卡后工作区布局不总是保存的问题。
- 尝试打开无效 URL 时现在会显示通知，而非静默失败。
- 修复了 vim 模式下拖动光标折叠文本时崩溃的问题。
- 允许在引用块内的行首位置点击。
- 修复了点击 PDF 滚动条旁导致的滚动问题。
- 修复了主窗口最小化时不适应系统主题变化的问题。
- 修复了反向链接视图不总是显示空白状态的问题。
- 修复了切换核心插件不总是立即显示设置“齿轮”图标的问题。
- 修复了单击复选框时展开清单的问题。
- 修复了实时预览中列表折叠指示器延伸到文本中的问题。
- 修复了 callout 图像在悬停预览中被裁剪的问题。
- 改进了禁用时“破坏性”菜单项的外观。
- 不能导航的视图（例如文件资源管理器）若在工作区中固定，则不再显示固定图标。
- 文件名中连续的多个空格不再被合并。
- 修复了当卡片包含带列表的注释时，Canvas 卡片变得模糊的问题。
- 修复了未链接的出链总是显示计数为“0”的问题。
- 修复了 Obsidian Publish 中的“新建”部分显示未折叠文件夹的问题。
- 修复了登录失败时登录屏幕关闭而没有错误提示的问题。
- 修复了启用双因素身份认证的用户无法在应用内登录的问题。

###### 格式设置

- 修复了选择尾随换行符时应用错误格式的问题。
- `切换列表/待办事项` 命令现在可将任务列表转换为待办事项列表。
- 修复了有时无法在编辑器最后一行应用格式切换命令的问题。

###### 设置

- 改进了设置内部登录界面的布局。
- 微调了安装社区主题和插件时显示的通知。
- 使用“适应系统”时，不再显示“仅限浅色主题”开关。
- 改进了命令面板重新排序的拖放功能。
- 修复了弹出窗口中重新排序处理程序不起作用的问题。

###### 搜索

- 输入引号包围的字符串时，搜索建议会被取消。
- 除非光标位于查询末尾或下一个字符为空格，否则不显示搜索建议。
- 单击“清除”按钮不再导致搜索输入失去焦点。

###### 本地化

- 挪威语现在映射到 Bokmål 地区。

###### 表格

- 单击表格右侧边距现在聚焦编辑器。
- 修复了 Shift + 箭头键无响应的问题。
- 确保主编辑器中的单元格更新能正确更新单元格偏移量。
- 修复了表格单元格内数学块的解析问题。
- 修复了双击表格单元格不起作用的问题。
- 修复了在 callout 中渲染表格的问题。

###### 源代码模式

- 修复了在表格中按 `End` 键未移动到行尾的问题。

###### 实时预览

- 修复了右键单击链接时 callout 菜单与 URL 菜单重叠的问题。
- 修复了无法渲染行尾带 `#` 的标题的问题。
- 修复了光标位于折叠区域时待办列表项被展开的问题。
- 允许多行脚注中存在空白空行。

###### 阅读模式

- 阅读模式不再渲染包含空格的脚注引用。
- 修复了阅读模式中内联脚注的渲染问题。

###### PDF

- 针对 PDF.js 漏洞（[CVE-2024-4367](https://github.com/advisories/GHSA-wgrm-67xf-hhpq)）的缓解措施。

##### 开发者

- 我们发布了 [指南](https://docs.obsidian.md/Plugins/User+interface/Right-to-left)，介绍如何使您的主题或插件支持 RTL 界面。

###### 主题

- Windows 上默认的等宽字体从 Cascadia Code 改为 Cascadia Mono。
- 粗体文本现在基于当前文本权重计算，因此标题内的粗体仍显示为粗体。
    - 对于主题设计，我们建议使用 `--bold-modifier` 变量而不是 `--bold-weight`。这使 Obsidian 能够在文本已经是粗体的情况下（例如标题中）使用更重的权重：`## Bold **bolder**`
- 添加了 `--caret-color` CSS 变量，以便更轻松地在桌面和移动端设置插入符颜色。
- 添加了新的 `--link-weight` 变量。
- 用户的界面语言被添加到 `html` 元素上的 `lang` 属性中，这允许使用特定于语言的 CSS 规则。
- 当用户的界面语言为 RTL 时，会在 `body` 元素上添加 `.mod-rtl` 类。

###### 插件

- 修复了 `processFrontmatter` 在所有属性都被移除时不处理文件的问题。
- 改进了对外部配置变更的检测。
- 改进了 `app.emulateMobile` 以方便测试插件是否兼容移动设备。尝试运行 NodeJS 库会显示通知。拖放操作更准确地模拟了移动设备的行为。应用设置了默认的 `safe-area-inset` 属性，以便你的视图能够正确考虑移动设备视口的偏移（如 iPhone 灵动岛）。
- 弹窗应尊重 `safe-area-insets`，无需额外 CSS。
- 向执行远程请求的某些设置按钮添加了加载状态。
- 完全从 API 规范中移除了全局 `app`（之前已被标记为弃用）。

#### 移动端

- 包含截至 [Obsidian 桌面端 v1.6](https://obsidian.md/changelog/2024-06-07-desktop-v1.6.2/) 的所有新功能和错误修复。
- 移动侧边栏的设计进行了微调。为了减少视觉复杂性，我们已将侧边栏标签更改为下拉列表，并移除了“全屏”按钮以进一步简化。
- 通知重新设计，现将在屏幕底部显示。
- 添加了拖动手柄以关闭可关闭的菜单。
- 通过拖动插入符选择表格单元格。
- 添加命令到移动工具栏时现在可以模糊搜索。
- 修复了阅读模式中列表渲染太靠右的问题。

##### Obsidian 同步

- 查看活动日志和文件同步历史记录时的布局改进。

##### 已修复的问题

- 确保初始加载时捕获文件系统 `mkdir` 错误。
- 对 iCloud 加载界面进行了调整。
- “隐藏键盘”按钮现在也会显示在 iPad 的移动工具栏中。

###### 属性

- 修复了打开链接后导航栏保持隐藏的问题。
- 数值属性聚焦时显示数字键盘。
- 软键盘现在在 iOS 上显示“下一步”，在 Android 上显示“回车”。
- 禁用属性名称和标签值的自动大写。

###### 样式

- 启动画面现在保持可见直到应用完全加载。
- 修复在屏幕间切换时库切换器的外观问题。
- 修复了同步活动日志中阴影被剪裁的问题。
- 修复在确认对话框中点击“取消”时动画被跳过的问题。
- 对对话框的动画/阴影进行微调。
- 修复了侧边抽屉标签上的上下文菜单自动关闭的问题。
- 修复视图标题对齐问题（终于居中了）。

###### IOS

- 修复了 iOS 上分享面板并不总是工作的问题。
- 增加了使用 iOS 分享面板时的最大分享项目数至 100。

##### 开发者

新增了一个 `.mobile-tap` 类，当元素被点击时，该类会被应用到这些元素上。如果你想在移动设备上为按钮添加激活状态，可以将 `.tappable` 类添加到元素。当你的元素被触摸时，就会应用 `.mobile-tap` 类。

原文见 [Obsidian 1.6 桌面端（公开版）- Obsidian](https://obsidian.md/changelog/2024-06-07-desktop-v1.6.2/) 和 [Obsidian 1.6 移动端（公开版）- Obsidian](https://obsidian.md/changelog/2024-06-07-mobile-v1.6.2/).

## 插件新闻

### 社区插件

#### 新增

[ClickUp sync](https://obsidian.md/plugins?id=click-up-sync) By _Khokim Mamarasulov_

> 用于连接 ClickUp 工作区笔记的插件。

[Rapid AI](https://obsidian.md/plugins?id=rapid-ai) By _Rapid AI_

> 用于选定文本的人工智能助手，以及使用 Markdown 生成内容。快捷方式和快速操作按钮提供即时 AI 帮助。

![2024-06-09-Pasted image 20240610022217](https://cdn.pkmer.cn/images/2024-06-09-Pasted%20image%2020240610022217.png!pkmer)

[POWER MODE](https://obsidian.md/plugins?id=power-mode) By _Zhou Hua_

> 一个无用的插件，但可能会为写作增加一点仪式感。包括：
> - 屏幕抖动
> - 连击计数器
> - 许多预设的光标爆炸效果

![2024-06-09-powermode](https://cdn.pkmer.cn/images/2024-06-09-powermode.gif!pkmer)

[Folder by tags distributor](https://obsidian.md/plugins?id=folder-by-tags-distributor) By _RevoTale_

> 根据笔记中指定的标签自动将笔记移动到现有文件夹中。

[The Queue](https://obsidian.md/plugins?id=the-queue) By _Kolja Sam Pluemer_

> 创建您再也看不到的笔记是没有意义的！
> The Queue 可一次向您展示一个来自库中的随机笔记。你可以将笔记配置为习惯、闪卡、迭代阅读提示、待办事项等。

![2024-06-09-Pasted image 20240610021019](https://cdn.pkmer.cn/images/2024-06-09-Pasted%20image%2020240610021019.png!pkmer)

[Ayanite](https://obsidian.md/plugins?id=ayanite) By _jemstelos_

> 综合思维环境——先进的 AI 聊天和知识副驾驶（闭源）。

[Link to Verse](https://obsidian.md/plugins?id=link-to-verse) By _Alberto Sesiliano (aygjiay)_

> 从所选的圣经引用创建一个指向配置的圣经网站的 Markdown 链接。

[Pin Enhancer](https://obsidian.md/plugins?id=pin-enhancer) By _Sheeplet1_

> 防止通过中键单击关闭固定的选项卡。

[Memos Sync](https://obsidian.md/plugins?id=memos-sync) By _RyoJerryYu_

> 将 Memos 从 Memos 服务器同步到您的每日笔记。与官方每日笔记插件、日历插件和定期笔记插件完全兼容。

[Graph Banner](https://obsidian.md/plugins?id=graph-banner) By _ras0q_

> 用于显示笔记标题的本地图表视图。

![2024-06-09-Pasted image 20240610010648](https://cdn.pkmer.cn/images/2024-06-09-Pasted%20image%2020240610010648.png!pkmer)

[Noor](https://obsidian.md/plugins?id=noor) By _MKSherbini_

> 旨在帮助穆斯林保持对伊斯兰教、古兰经、圣训和圣训的启蒙。

[Checkbox Time Tracker](https://obsidian.md/plugins?id=checkbox-time-tracker) By _UD_

> 勾选该复选框时插入时间戳。
> 通过启用“正在执行状态”，您还可以插入开始和结束时间。

![2024-06-09-demo_todo_doing_done](https://cdn.pkmer.cn/images/2024-06-09-demo_todo_doing_done.gif!pkmer)

[Statblock Sidekick](https://obsidian.md/plugins?id=statblock-sidekick) By _n21rl_

> 此插件是为您的 D&D 5e（龙与地下城第五版）怪物统计块量身定制的辅助工具。其设计目的是协助您编辑 [Fantasy Statblocks](https://github.com/javalent/fantasy-statblocks) 并实现来自多种资料来源的规则集成。
> 目前，该插件允许您根据 _Tasha's Cauldron of Everything（《塔莎的神奇锅：一切万能》）_ 中的规则创建自定义的 D&D 5e 助手角色：专家、施法者或战士。它提供了一种交互式体验，让您能够选择助手的职业、等级以及特色能力。

#### 更新

[Vault Explorer v1.5.0](https://github.com/decaf-dev/obsidian-vault-explorer/releases/tag/1.5.0) By _DecafDev_

> 添加了悬停链接预览。

[Tasks v7.4.0](https://github.com/obsidian-tasks-group/obsidian-tasks/releases/tag/7.4.0) By _Martin Schenck and Clare Macrae_

> - **功能**
> 	- 为 [任务依赖](https://publish.obsidian.md/tasks/Getting+Started/Task+Dependencies#Option+2+Use+the+Auto-Suggest+feature) 添加 [自动建议](https://publish.obsidian.md/tasks/Editing/Auto-Suggest#Details)
> - **修复**
> 	- 正确对齐编辑任务模态框中的“Before ...”和“After ...”

[Media DB v0.7.0](https://github.com/mProjectsCode/obsidian-media-db-plugin/releases/tag/0.7.0) By _Moritz Jung_

> - 将插件重命名为 `Media DB`
> - 从 OMDb 获取数据时添加 plot 字段
> - 添加对 Moby Games API 的支持
> - 在模板中为数组添加索引运算符
> - 支持禁用默认 front matter 并添加对 Templater 的支持
> - 添加在新标签页中打开新笔记的选项
> - 在游戏中添加了开发者和发行商字段

### 未上架插件

> [!Caution]
> **注意**：下列插件尚未通过代码审查，因而未在 _ 社区插件市场 _ 上架。在安装前，请确保您已充分了解并接受其中涉及的潜在安全风险。

[Context-menu hider](https://github.com/Mara-Li/obsidian-context-menu-hider) By _Mara-Li_

> - 从 [kzhovn/obsidian-customizable-menu](https://github.com/kzhovn/obsidian-customizable-menu) 分叉
> - 这个插件允许用户将任何命令（包括社区插件的命令）隐藏到右键菜单中。

### PKMer 出品

> [!INFO]
> **PKMer**（[PKMer.cn](https://pkmer.cn/)、[PKMer.net](https://pkmer.net/)）旨在打造东半球强大的知识管理社区。Personal Knowledge Management (PKM) + "er"，其中 "er" 表示人，专注、喜爱个人知识管理工作、追求效率的人们，都可以划入这个行列，希望社区凝聚更多这样的人。

#### 更喜欢旧版库切换器？或许你会需要 [Legacy vault switcher](https://github.com/Quorafind/Obsidian-Legacy-Vault-Switcher)

> 一个小插件，专为那些想切换回旧版库切换器（或布局？）的人设计。

![2024-06-09-Pasted image 20240608225010](https://cdn.pkmer.cn/images/2024-06-09-Pasted%20image%2020240608225010.png!pkmer)

#### [Templify](https://obsidian.md/plugins?id=templify) 已上架官方插件市场

![2024-06-09-Pasted image 20240610014437](https://cdn.pkmer.cn/images/2024-06-09-Pasted%20image%2020240610014437.png!pkmer)

- 来自 Bon 佬的又一力作！
- **根据所选模板以不同的布局呈现您的笔记。** 目前已有模板：
	- **康奈尔模板**：康奈尔方法提供了一种压缩和组织笔记的系统化格式。这种记笔记的系统既简单又高效。它是一种将每页分成三个部分的笔记组织格式：左侧的 2.5 英寸列，右侧的 2 英寸列和中间的 6 英寸列。右侧列用于课堂笔记，左侧大列用于根据所记笔记制定问题，底部空间用于总结笔记。
		- ![2024-06-09-Pasted image 20240610015730](https://cdn.pkmer.cn/images/2024-06-09-Pasted%20image%2020240610015730.png!pkmer)
	- **艾森豪威尔模板**：艾森豪威尔矩阵是一种组织任务的方法。它是一个简单的 2x2 矩阵，可帮助您根据任务的紧急性和重要性对任务进行优先排序。
		- ![2024-06-09-Pasted image 20240610015826](https://cdn.pkmer.cn/images/2024-06-09-Pasted%20image%2020240610015826.png!pkmer)
	- **自定义模板**：您可以使用 `Templify` 插件创建自己的模板。
- 您可以通过任何视图的标题菜单复制视图状态并将其粘贴到 Templify 代码块中，实现例如这样的效果：
	- ![2024-06-09-Pasted image 20240610020048](https://cdn.pkmer.cn/images/2024-06-09-Pasted%20image%2020240610020048.png!pkmer)

#### 用 [Tabs](https://obsidian.md/plugins?id=tabs) 在笔记中创建选项卡

灵感来自 [Code Tab](https://github.com/lazyloong/obsidian-code-tab) 插件，但由于它长期未更新且不支持直接编辑内容，_Huajin_ 重构了该插件并添加了许多功能。

在 Markdown 文件中插入一个选项卡组件。

![2024-06-09-Pasted image 20240610023241](https://cdn.pkmer.cn/images/2024-06-09-Pasted%20image%2020240610023241.png!pkmer)

直接编辑标签页内容。（双击内容）

![2024-06-09-Pasted image 20240610023253](https://cdn.pkmer.cn/images/2024-06-09-Pasted%20image%2020240610023253.png!pkmer)

## 外观

[Rainbow Folder Background](https://github.com/r-u-s-h-i-k-e-s-h/Obsidian-CSS-Snippets/blob/Collection/Snippets/File%20explorer%20styling%20-%20Rainbow%20folder%20background.md) and [Rainbow Folder Title](https://github.com/r-u-s-h-i-k-e-s-h/Obsidian-CSS-Snippets/blob/Collection/Snippets/File%20explorer%20styling%20-%20Rainbow%20folder%20titles.md) By _r-u-s-h-i-k-e-s-h_

> 作者对 Rainbow Folder Background 和 Rainbow Folder Titles 代码片段进行了小更新，以确保它们与 Obsidian v1.6.3 兼容。

![2024-06-09-Pasted image 20240610024858](https://cdn.pkmer.cn/images/2024-06-09-Pasted%20image%2020240610024858.png!pkmer)

![2024-06-09-Pasted image 20240610024909](https://cdn.pkmer.cn/images/2024-06-09-Pasted%20image%2020240610024909.png!pkmer)

[Allium Theme](https://github.com/nulglyph/Allium) By _Nullglyph_

![](https://cdn.pkmer.cn/images/2024-06-09-Pasted%20image%2020240610002334.png!pkmer)

> Allium 主题灵感来源于葱属花卉，尤其是深紫色葱花（Allium atropurpureum），它拥有迷人的深浅不一的红色和紫色调。此外，该主题也包含了浅色模式，尽管目前的浅色模式还在初期开发阶段。

[Shimmering Focus Theme](https://github.com/chrisgrieser/shimmering-focus) By _pseudometa_

> 一个包含新公共版本 1.6.2 更改的大型更新以及几十个较小更改的更新已发布。（详情请参见 [更新日志](https://github.com/chrisgrieser/shimmering-focus/blob/main/Changelog.md)）
