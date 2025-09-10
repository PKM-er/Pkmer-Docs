---
uid: 20241021025308
title: Obsidian Weekly 2024-10-19：1.7 版本正式来袭！超多插件和主题同步上架！
tags: [Weekly, Obsidian]
description: Obsidian Weekly 2024-10-19：1.7 版本正式来袭！超多插件和主题同步上架！
author: 淡水鱼,PKMer
type: other
draft: false
editable: false
modified: 20241021025358
---

# Obsidian Weekly 2024-10-19：1.7 版本正式来袭！超多插件和主题同步上架

> [!Abstract]
> **统计时间**：2024-10-12 21:00 ~ 2024-10-19 21:00
> **声明**：本栏目灵感来源于 _Eleanor Konik_ 女士于 2021 年 4 月至 2023 年 6 月期间写作发表的一系列 [Obsidian Roundup](https://www.eleanorkonik.com/tag/roundup/) 文章，如有兴趣可关注原作者的个人网站 [Obsidian Iceberg](https://www.eleanorkonik.com/)；内容来源于 Obsidian 官方 Discord 频道和相应项目在 Github 或其独立网站上的信息。描述中可能存在基于个人理解进行的修改，如有错谬欢迎指正。感谢 Obsidian 团队为我们带来如此优秀的软件。

## 官方资讯

### Obsidian v1.7 公共版已发布

#### 桌面版

##### 重点新功能

- **Obsidian 同步**：新增的同步历史视图显示整个库的编辑记录，适用于 [共享库的协作](https://help.obsidian.md/Obsidian+Sync/Collaborate+on+a+shared+vault)。可通过“同步: 显示同步历史”命令激活。
- 现在可以在页面预览中点击以直接编辑，无需打开笔记。

##### 改进

###### 性能

- 视图只在可见时加载，提升启动性能和内存使用效率。此更改可能对部分插件产生影响，开发者可参考我们 [发布的指南](https://docs.obsidian.md/Plugins/Guides/Understanding+deferred+views) 更新插件。
- 在大型库中，重命名文件速度加快。
- **白板**：平移时性能提升，不再有卡片进入或退出视图时的闪烁问题。如果仍遇到问题，建议切换到默认主题。
- 设置中新增“总加载时间”显示页面（关于→高级）。您还可以启用选项，启动时间过长时收到通知并提供调试信息。
- 修复了在链接的 Markdown 视图之间滚动不流畅的问题。

###### 可编辑的页面预览和脚注

- 为脚注增加了右键菜单，可以删除脚注及其引用。
- 现在可以通过点击脚注 ID 的悬浮预览来创建新脚注。
- 编辑时按下 `Esc` 键，页面预览将立即关闭。
- 页面预览在窗口失去焦点或命令面板出现时将保持打开状态。

###### Obsidian URI

- `新` 对 Obsidian URI 的改进：
    - 允许使用 `clipboard` 代替 `content` 以插入剪贴板内容。
    - 允许使用 `prepend` 代替 `append` 将内容添加到文件顶部。
    - `prepend` 和 `append` 都会尝试合并属性。
- **每日笔记**：新增 `daily` Obsidian URI 操作，自动打开或创建每日笔记。

###### 其他改进

- Obsidian 发布协作者现在可以编辑与内容相关的网站选项，包括侧边栏项目的顺序。
- Obsidian 同步：您现在可以筛选活动日志。
- 升级到 Electron v31.6.0。
- 拼写检查在内联标签和提示中（如快速切换器和命令面板）被禁用。
- 新增对 `x.com`（原 `twitter.com`）嵌入的支持。
- Markdown 视图侧边栏现在支持快速切换行号和可读行宽。
- MacOS 上的“Make copy of”菜单项现已更名为“Duplicate”以符合操作系统习惯。
- 嵌入编辑器（如白板文件节点和页面预览）中的笔记属性现在被隐藏。
- 拖动 `.webloc` 或 `.url` 文件到编辑器时，会自动生成一个带文件名的 Markdown 链接。
- 将鼠标悬停在通知上时通知不再自动消失，直到鼠标移开。
- “关闭其他标签页”命令不再关闭固定选项卡。
- 侧边栏中不再提供“关闭此标签页分组”命令。
- “插入链接”和“插入内部链接”命令现在支持多个光标。

##### 错误修复

- 修复了“清除”按钮会与快速切换器等提示内的文本重叠的问题。
- 修复了搜索查询使用 `line:`、`block:` 和 `task:` 时仅返回匹配文件而不是匹配内容的问题。
- 如果属性编辑器隐藏，在内联标题聚焦时按 `ArrowDown` 可以正确聚焦编辑器。
- 修复了重命名文件时，如果链接目标在尖括号中，会导致 Markdown 链接错误的问题。
- 修复了将 PDF 视图移动到弹出窗口时产生错误的问题。
- 修复了“导出为 PDF”时，从右到左文本中外部链接旁边出现视觉伪影的问题。
- 修复了某些命令会导致编辑器自动补全框意外出现的错误。

#### 移动端

包括所有桌面版 v1.7.4 的新功能和修复。

##### 重点新功能

- 增加了新的标签切换器。

##### 改进

###### 性能

- 改进了 iOS、iPadOS 和安卓的应用加载时间。
- iOS：跳过 iCloud 加载的选项现在将出现在启动过程的早期。
- 加载 iCloud 仓库时响应速度更快。
- 侧边栏动画略微加快。

###### 杂项

- 键盘建议现在会在输入电子邮件和密码时显示。
- 安卓设备上的返回按钮现在可关闭设置中的活动页面。
- 按住移动光标时不再激活链接。
- 为“注销”按钮添加了加载状态。

##### 错误修复

- 修复了下拉操作过于容易触发的问题。
- 修复了“关闭所有标签页”有时不能关闭所有标签页的错误。
- 修复了菜单手柄在可滚动菜单中覆盖文本的问题。
- 修复了在初始库选择屏幕登录时，Obsidian Vault 无法加载库的问题。
- 修复了在点击交互元素时活动状态有时会卡住的问题。
- 修复了表格菜单不显示选项的问题。
- 修复了标题较长的对话框标题显示问题，现在标题会截断以适应屏幕。
- 修复了平板设备上的上下文菜单无法滚动的问题。
- 设置按钮现在会在激活时显示。
- 修复了在屏幕上弹出键盘且 Stage Manager 启动时，屏幕空间不足的问题。
- 修复了当菜单出现时，键盘仍然保持可见的错误。
- 修复了使用物理键盘时，在小设备上底部工具栏的间距问题。
- 现在在编辑设置时按“回车”会结束编辑并隐藏键盘。
- 点击视频嵌入不再调出键盘。
- “导出为图片”命令不再出现在命令提示中。
- 修复了选择侧边栏项目后无法恢复主视图焦点的问题。
- 修复了移动标签页切换器与某些插件交互导致的崩溃问题。
- 修复了首次点击移动工具栏有时会关闭键盘的错误。
- 改善了部分 Obsidian 同步界面的外观。
- 修复了在启动画面隐藏时，会额外出现几帧加载条的问题。

###### 安卓

- 更新了触觉反馈以匹配操作系统的轻度、中度和重度交互规范。
- 状态栏和导航栏现在与应用背景颜色匹配。
- 修复了在标签上点击导致侧边栏打开后立即关闭的问题。

###### iOS

- 修复了在 iOS 上关闭键盘时的抖动问题。
- 改进了键盘出现时的屏幕大小调整。
- 修复了视频缩略图在按下播放前为空白的问题。

###### 平板设备

- 修复了社区插件描述过长时的水平滚动问题。
- 社区插件的排序按钮现在与桌面版一致。

### 官方浏览器剪藏插件已更新至 [v0.9.4](https://github.com/obsidianmd/obsidian-clipper/releases/tag/0.9.4)

#### 新功能

- 新增高亮设置，包括导出高亮的功能。
- 新增 `fragment_link` 过滤器，由 [@Quorafind（Boninall）](https://github.com/Quorafind) 提供，用于生成文本片段链接。
- 增加对映射和模板过滤器中字符串字面量的初步支持。
- 新增 `round` 过滤器，用于对数字进行四舍五入。

#### 改进

- 高亮存储已改进，现在包含时间戳，这将使未来添加元数据变得更容易。
- `{{highlights}}` 变量现在返回包含时间戳的对象，可以使用 `map` 过滤器访问单个高亮内容，例如 `{{highlights|map:item => item.text|list}}`。
- 文本高亮现在以换行符分隔。
- 改进了脚注转换功能。
- 优化了 `{{published}}` 变量的时间戳提取。
- 改进了模板的复制到 JSON 功能。
- 修复了 iPadOS 上弹出窗口大小的问题。
- 修复了空的 `{{highlights}}` 变量现在返回空值而不是 `[]`。
- 修复了 `fragment_link` 过滤器的问题。

## 插件新闻

### 社区插件

#### 新增

[Lemons Search](https://obsidian.md/plugins?id=lemons-search) By _Moritz Jung_

> 一个基于快速模糊查找器的快速切换器，具有预览功能。
> 该插件添加了一个新命令 `Lemons Search: Open search` ，打开快速切换器。快速切换器可让您轻松搜索仓库中的所有文件路径，并提供所选搜索结果的快速预览。

![Weekly-2024-10-19-Pasted image 20241021023120|650](https://cdn.pkmer.cn/images/Weekly-2024-10-19-Pasted%20image%2020241021023120.png!pkmer)

[Scrambling Title Animations](https://obsidian.md/plugins?id=scrambling-title-animations) By _HistidineDwarf_

> 通过以多种视觉上吸引人的方式打乱和显示您打开的任何笔记的标题，使其具有动画效果。

![9d99645a-204f-4df7-85ce-f412e55042ba|650](https://cdn.pkmer.cn/images/9d99645a-204f-4df7-85ce-f412e55042ba.gif!pkmer)

[Open Interpreter](https://obsidian.md/plugins?id=open-interpreter) By _Mike Bird_

> 该插件将 Open Interpreter 与 Obsidian 集成，允许您直接在笔记中运行人工智能驱动的代码解释。

[InfraNodus AI Graph View](https://obsidian.md/plugins?id=infranodus-graph-view) By _Nodus Labs_

> 该插件基于 [InfraNodus](https://infranodus.com/) ，将黑曜石金库的内容可视化为知识图，检索主要主题集群、最重要的想法，并识别它们之间的差距。
>
> 内置人工智能可用于从您的黑曜石内容中生成新的想法和研究问题，以弥补已发现的差距。只需要 [InfraNodus](https://infranodus.com/) 帐户，InfraNodus 帐户中包含 OpenAI API GPT-4 使用，因此您不需要自己的 OpenAI 密钥。

![Weekly-2024-10-19-907699e1-fc58-4f8e-bb91-f70106164303|650](https://cdn.pkmer.cn/images/Weekly-2024-10-19-907699e1-fc58-4f8e-bb91-f70106164303.gif!pkmer)

[Typefully](https://obsidian.md/plugins?id=typefully) By _Sébastien Dubois_

> Typefully 集成。轻松发布社交媒体帖子

![Weekly-2024-10-19-demo (6)|650](https://cdn.pkmer.cn/images/Weekly-2024-10-19-demo%20(6).gif!pkmer)

[Quick Notes](https://obsidian.md/plugins?id=quick-notes) By _Sean McOwen_

> 加快一些笔记能力并允许在后台创建笔记/链接

[Crackboard](https://obsidian.md/plugins?id=crackboard) By _Franklin_

> tpot 排行榜生产力跟踪器

[Ffmpeg Converter](https://obsidian.md/plugins?id=ffmpeg-converter) By _MrAnyx_

> 通过将图像、视频和音频转换为更紧凑的格式或降低质量来优化您的仓库空间。
> 大多数用户可以将其库的大小减少 70%。

[Mouse Navigation](https://obsidian.md/plugins?id=mouse-navigation) By _HoBeomJeon_

> 使用鼠标手势滚动和切换页面实现平滑导航。

![Weekly-2024-10-19-65f0f512-5697-4d26-9d16-98678302076a|650](https://cdn.pkmer.cn/images/Weekly-2024-10-19-65f0f512-5697-4d26-9d16-98678302076a.gif!pkmer)

[Modal Opener](https://obsidian.md/plugins?id=modal-opener) By _Muuxi_

> 这是一个使用黑曜石模式窗口打开文件和链接的插件。它可以与其他插件结合使用，轻松读取和编辑各种类型的文件，为您提供便利和阻止各种干扰。

![Weekly-2024-10-19-Pasted image 20241021015752|650](https://cdn.pkmer.cn/images/Weekly-2024-10-19-Pasted%20image%2020241021015752.png!pkmer)

[Link Navigation](https://obsidian.md/plugins?id=link-navigation) By _xRyul_

> 该插件可让您深入浏览 N 级笔记。它显示传入链接 (inlinks) 和传出链接 (outlinks)，包括来自 Canvas 文件的链接。

![Weekly-2024-10-19-03c56ac5-dde8-4736-a167-a3d1d4b6dca8|650](https://cdn.pkmer.cn/images/Weekly-2024-10-19-03c56ac5-dde8-4736-a167-a3d1d4b6dca8.gif!pkmer)

[Find Orphaned Images](https://obsidian.md/plugins?id=find-orphaned-images) By _Josmar Cristello_

> 查找库中未链接到任何注释的图像。要么列出，要么删除它们。

[BookXNote Sync](https://obsidian.md/plugins?id=bookxnote-sync) By _CodeListening_

> 同步 bookxnote 中的读书笔记

[Command Tracker](https://obsidian.md/plugins?id=command-tracker) By _namikaze-40p_

> 跟踪命令的使用次数。

#### 更新

[List Modified v3.1.3](https://github.com/franciskafieh/obsidian-list-modified/releases/tag/3.1.3) By _Francis Kafieh_

> 主要更改是插件现在使用分隔符而不是标题作为放置列表的占位符。这使得插件更加灵活。
>
> 请阅读 [维基](https://github.com/franciskafieh/obsidian-list-modified/wiki) 以了解更改和配置。
>
> - **其他输出格式更改**
> 	- 现在可以在输出格式中使用 frontmatter 属性作为模板/占位符值！
> 	- 现在每个列表（创建/修改/删除）都可以有不同的输出格式
> 	- 删除的输出格式现在可自定义
> 	- 有关更多详细信息，请参阅 [输出格式](https://github.com/franciskafieh/obsidian-list-modified/wiki/Output-Format) 维基。
> 	- 修复：输出中的重复标签问题
> - **小更改**
> 	- 3.1.3 版本特别添加了一些设置描述改进
> 	- 用户界面现在遵循 Obsidian 原则
> 	- 开发测试改进

![Pasted image 20241021001951|650](https://cdn.pkmer.cn/images/Pasted%20image%2020241021001951.png!pkmer)

[Linter v1.27.1](https://github.com/platers/obsidian-linter/releases/tag/1.27.1) By _Victor Tao_

> 最新版本已经发布，用户现在可以开始使用它。一些值得注意的更改包括：现在实时预览更新应与源模式的工作方式相同，这意味着使用实时预览的用户将遇到更少的错误。此外，用户还可以在笔记上次编辑后经过一定时间运行 `YAML Timestamp`。另外，由于 Linter 工作方式的变化，Linter 体积更小，加载速度更快。
>
> 请注意，当启用 `Auto-Correct Common Misspellings` 且在启动时该规则不存在时，Linter 现在会下载默认的自动更正列表。这使得加载时间更快，捆绑包的体积更小，特别是当你不使用该规则时。
>
> Linter 的设置页面稍有改进，现在加载速度更快，响应更灵敏。你将不再看到未启用规则的设置，除了启用规则的选项。这减少了过去关于为什么规则没有运行的困惑，并清理了设置页面，使设置列表更加简洁。此外，不兼容的设置将无法同时启用，尝试同时启用这两个设置会导致另一个设置被关闭。这只适用于 `Paragraph Blank Lines` 和 `Line Break Between Lines with Content`，以及 `Header Increment` 的 `Start at Header Increment at Heading Level 2` 和 `File Name Heading`。如果在启动时发现了其中一个不兼容的规则，则其中一个将被关闭，并且会有通知告诉你哪个规则被关闭了。你可以通过设置页面更改哪个规则被关闭，并启用你想要的规则。
>
> - **功能**
> 	- 对 Linter 设置的样式进行了一些更改，使其更加简洁，并且更符合 Obsidian 其他地方的样式
> 	- 为自动更正常见拼写错误添加了忽略除首字母外出现大写字母的单词的选项
> 	- 添加了从设置页面刷新 Linter 已知的自定义自动更正文件内容的功能
> 	- 添加了在编辑器中更改后 x 秒运行 `YAML Timestamp` 的功能
> 	- 添加了忽略文件系统中修改日期的功能，仅在 Linter 或用户在编辑器中进行更改时更新该值
> 	- 添加了在水平规则周围添加空行的规则
> 	- 为 `Ordered List Style` 添加了选项，允许列表项样式保持不变，并能够从列表开头的数字开始编号（当有其他内容插入有序列表之间时，此功能非常有用）
> 	- 将默认的常见拼写错误列表移动到一个文件中，仅在需要时下载一次，而不是捆绑到 `main.js` 中
> 	- 隐藏依赖其他设置启用的设置，包括禁用规则的额外设置
> 	- 添加逻辑以帮助防止同时启用冲突的规则，因为这会导致意外或不符合希望的行为
> - **修复**
> 	- 修复了 Linter 在自定义自动更正文件上运行自动更正常见拼写错误的问题，这会删除这些自定义文件的配置值
> 	- 修复了粘贴 URL 时工作不一致的问题
> 	- 修复了文件更新时某些场景下实时预览无法正常工作的问题（希望这个问题能彻底解决）
> 	- 不再在初次安装时因访问不存在的设置而失败
> - **更改内容**
> 	- 修复：粘贴 URL 时工作不一致
> 	- 发布准备 & 修复 UT 内存使用
> 	- 添加和更新集成测试
> 	- 修复：实时预览编辑器更新
> 	- 更新文档，一些组件格式化，以及自动更正常见拼写错误功能
> 	- 功能：`Auto-Correct Common Misspellings` 允许用户忽略有多个大写字母的单词
> 	- Chore：为发布工作流添加 Zip 文件用于手动插件安装
> 	- Chore：从弃用的 `MarkdownRender.renderMarkdown` 转换到 `MarkdownRender.render`
> 	- 功能：在编辑器内容更改时更新修改日期 & 杂项样式和 YAML 时间戳更改
> 	- 自动发布 beta 1.27.0-rc-1
> 	- 防止空引用
> 	- 水平规则间距
> 	- 功能：添加额外的有序列表选项
> 	- 将默认的自动更正拼写错误移至单独的文件
> 	- 隐藏不可达设置
> 	- 移除 JS 样式，压缩 CSS，加速设置页面加载，移除对 `innerHTML` 的使用，并移除默认热键
> 	- 添加其他 Markdown 到 HTML 的区域字符串更改
> 	- 处理规则冲突
> 	- 发布准备
> 	- 修复加载问题并更新版本

[Hover Editor v0.11.21](https://github.com/nothingislost/obsidian-hover-editor/releases/tag/0.11.21) By _NothinglsLost_

> **为脚注、副标题和块添加设置**
> - 现在可以配置 Hover Editor 不替换内置预览功能，用于链接到脚注、副标题和/或块。
> - 默认情况下，块和脚注将使用内置预览显示（适用于 Obsidian 1.6 及更高版本），但副标题仍会在 Hover Editor 中显示。（对于较旧的 Obsidian 版本，默认使用 Hover Editor 处理所有内容，因为 1.6 之前的内置预览不支持编辑。）
> - 你可以通过插件的设置页面更改这些默认设置。

[Harper v0.12.0](https://github.com/elijah-potter/harper/releases/tag/v0.12.0) By _Elijah Potter_

> - Windows 目标编译器已更换为 `msvc`
> - 显著改进了设置页面
> - 功能：新增省略号正确使用的分析和建议
> - 修复：针对 `an_a` lint 的连字符断词问题
> - 词典：在默认词典中添加了 TCP、UDP 和 QUIC
> - 迁移到稳定版 rustc
> - 功能：在词典中添加了“naïve”
> - 修复：添加了有关语言支持的简介，并修改了使用方法的统计
> - 功能：合并文件词典中以连字符或下划线分隔的标识符
> - 修复：将 tokio 线程限制为 4（加主线程）
> - Windows GitHub Actions 构建缺少依赖项
> - 支持 VS Code
> - 构建（依赖项）：将 itertools 从 0.12.1 升级到 0.13
> - 构建（依赖项）：将 unicode-width 从 0.1.12 升级到 0.1.13
> - 构建（依赖项）：将 hashbrown 从 0.14.5 升级到 0.15.0
> - 构建（依赖项）：将 futures 从 0.3.30 升级到 0.3.31
> - 构建（依赖项）：将 unicode-width 从 0.1.13 升级到 0.2.0
> - 构建（依赖项）：将 /packages 中的 rollup 从 3.29.4 升级到 4.22.4
> - 构建（依赖项）：将 clap 从 4.5.4 升级到 4.5.18
> - 构建（开发依赖项）：将 /packages 中的 vite 从 4.5.3 提升到 4.5.5
> - 构建（开发依赖项）：将 /packages 中的 rollup 从 4.18.0 升级到 4.22.4

[ZettelFlow v2.6.1](https://github.com/RafaelGB/Obsidian-ZettelFlow/releases/tag/2.6.1) By _RafaelGB_

> - **新功能**
> 	- 新操作：**动态选择器**
> 		- 动态选择器组件允许用户定义其选项基于用户提供的 JavaScript 代码动态生成的选择元素。这意味着选项不再是静态的，可以根据各种因素（如 dataview 查询或其他自定义逻辑）动态变化。
> 		- [更多信息请点击这里](https://rafaelgb.github.io/Obsidian-ZettelFlow/actions/DynamicSelector/)
> 	- **错误修复**
> 	    - 修复了操作菜单的 CSS，使其不再允许选择隐藏的选项。
> 	    - 修补程序：zoneKey 未正确保存。。

### PKMer 出品

> [!INFO]
> **PKMer**（[PKMer.cn](https://pkmer.cn/)、[PKMer.net](https://pkmer.net/)）旨在打造东半球强大的知识管理社区。Personal Knowledge Management (PKM) + "er"，其中 "er" 表示人，专注、喜爱个人知识管理工作、追求效率的人们，都可以划入这个行列，希望社区凝聚更多这样的人。

#### Thino 已更新至 [v2.4.58](https://github.com/Quorafind/Obsidian-Thino/releases/tag/2.4.58)

- 修复：使用多文件 Thino 时无法保存任务类型；

## 外观

[**Flexoki Warm** Theme](https://github.com/ofalvai/flexoki-warm) By _ofalvai_

![Weekly-2024-10-19-Pasted image 20241021011203|650](https://cdn.pkmer.cn/images/Weekly-2024-10-19-Pasted%20image%2020241021011203.png!pkmer)

> Obsidian 优秀 [Flexoki 主题](https://github.com/kepano/flexoki-obsidian) 的略微修改版本。

[**Fancy-a-Story** Theme](https://github.com/ElsaTam/obsidian-fancy-a-story) By _Kapirklaa_

![Pasted image 20241021004946|650](https://cdn.pkmer.cn/images/Pasted%20image%2020241021004946.png!pkmer)

[**OneNice** Theme](https://github.com/Sunhaloo/OneNice) By _S.Sunhaloo - P.Roy_

![Pasted image 20241021004717|650](https://cdn.pkmer.cn/images/Pasted%20image%2020241021004717.png!pkmer)

[**Simply Colorful** Theme](https://github.com/LorenzoPegorari/SimplyColorful) By _Lorenzo Pegorari_

![Pasted image 20241021004341|650](https://cdn.pkmer.cn/images/Pasted%20image%2020241021004341.png!pkmer)

> 此主题创建的原因如下：
> 1. 使笔记中最突出部分更容易识别，加快浏览速度；
> 2. 快速区分笔记的每个部分（不同的标题、内部链接、外部链接等）；
> 3. 通过强烈使用所选的个性化强调色，为用户提供视觉上愉悦的笔记体验。

[**Lagom** Theme](https://github.com/LeslyeCream/Lagom-Obsidian-Theme) By _LeslyeCream_

![Pasted image 20241021003432|650](https://cdn.pkmer.cn/images/Pasted%20image%2020241021003432.png!pkmer)

> 以手机为中心的 Obsidian 主题

[**Transparent** Theme](https://github.com/Oczko24/Obsidian-transparent) By _Oczko24_

![Pasted image 20241021003033|650](https://cdn.pkmer.cn/images/Pasted%20image%2020241021003033.png!pkmer)

> 这个主题的设计是**轻松**、**简单**、**美观**和**简约的**。它提供了一个干净、不显眼的用户界面，通过**移动支持**，让您能够专注于笔记而不会分心。

[**Hackthebox** Theme](https://github.com/golam71/obsidian-hackthebox) By _Golam_

![Pasted image 20241021002742|650](https://cdn.pkmer.cn/images/Pasted%20image%2020241021002742.png!pkmer)

> 受 [Hackthebox Academy](https://academy.hackthebox.com/) 启发的 [Obsidian](https://obsidian.md/) 主题。

[**AMOLED Serenity** Theme](https://github.com/darthdemono/AMOLED-Serenity) By _Darth Demono_

![Pasted image 20241021002457|650](https://cdn.pkmer.cn/images/Pasted%20image%2020241021002457.png!pkmer)

> **AMOLED Serenity**是专为 AMOLED 屏幕设计的平滑、低对比度黑曜石主题。它以深黑色提供视觉上的平静体验，注重眼睛舒适度，非常适合长时间使用。

> [!Warning] 声明
> 本栏目致力于为广大 Obsidian 中文用户汇总全面的官方资讯与插件、外观动态。为了保持信息的全面性，我们的**收录并不等同于推荐**，还请各位用户知悉并理解，根据自身需求进行判断和选择。

