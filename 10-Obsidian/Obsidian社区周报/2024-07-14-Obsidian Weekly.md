---
uid: 20240715000019
title: Obsidian Weekly 2024-07-14：链接、索引与数学
tags: [Weekly, Obsidian]
description: Obsidian Weekly 2024-07-14：链接、索引与数学
author: 淡水鱼,PKMer
type: other
draft: false
editable: false
modified: 20240715201444
---

# Obsidian Weekly 2024-07-14：链接、索引与数学

> [!Abstract]
> **统计时间**：2024-07-07 18:00 ~ 2024-07-14 18:00
> **声明**：本栏目灵感来源于 _Eleanor Konik_ 女士于 2021 年 4 月至 2023 年 6 月期间写作发表的一系列 [Obsidian Roundup](https://www.eleanorkonik.com/tag/roundup/) 文章，如有兴趣可关注原作者的个人网站 [Obsidian Iceberg](https://www.eleanorkonik.com/)；内容来源于 Obsidian 官方 Discord 频道和相应项目在 Github 或其独立网站上的信息。描述中可能存在基于个人理解进行的修改，如有错谬欢迎指正。感谢 Obsidian 团队为我们带来如此优秀的软件。

## 插件新闻

### 社区插件

#### 新增

[Remotely Save](https://github.com/remotely-save/remotely-save/releases/tag/0.5.14) By _fyears_

> 允许同步 bookmarks.json。

[Import Attachments+](https://github.com/alberti42/obsidian-import-attachments-plus/releases/tag/1.2.6) By _Andrea Alberti_

> 更正了 Windows 计算机中的一个错误，其中导入的文档在其路径中使用反斜杠，而 Obsidian 需要正斜杠。该路径现在由 Obsidian 函数 `normalizePath` 规范化，以确保所有设备之间的兼容性。

[Nextcloud Link Fixer](https://obsidian.md/plugins?id=nextcloud-link-fixer) By _KaelLarkin_

> 在 Nextcloud Text 中打开 Markdown 文件会破坏 Obsidian 使用的 Wiki 链接。
> 即 `[[my link]]` 变成 `\[\[my link\]\]`，虽然渲染效果还可以。
>
> 此插件可以在打开文件时自动修复这些链接（默认关闭，可以在设置中启用）。
> 还有一个命令 `fix-wiki-links`。

[Browser Interface](https://obsidian.md/plugins?id=browser-interface) By _Jason Lieb_

> 与 Chrome 扩展配对以管理 Obsidian 中的标签页。该插件显示从 Chrome 扩展保存的标签页，并创建按钮以重新打开和删除标签页。

![Pasted image 20240714180650|650](https://cdn.pkmer.cn/images/Pasted%20image%2020240714180650.png!pkmer)

[LanguageTool](https://obsidian.md/plugins?id=languagetool) By _Lars Wrenger, Clemens Ertle_

> LanguageTool 拼写和语法检查器的非正式集成。

![Pasted image 20240714180556|650](https://cdn.pkmer.cn/images/Pasted%20image%2020240714180556.png!pkmer)

[Better Markdown Links](https://obsidian.md/plugins?id=better-markdown-links) By _mnaoumov_

> 添加对尖括号链接的支持并正确管理相关链接。

[Account Viewer](https://obsidian.md/plugins?id=account-viewer) By _Muaz Yediyüzkırkiki_

> 从标有 `accounting` 别名的 Markdown 代码块自动生成记帐表。

[PopKit](https://obsidian.md/plugins?id=popkit) By _Zhou Hua_

> 选择文本即可访问快捷工具。

![usage|650](https://cdn.pkmer.cn/images/usage.gif!pkmer)

[Iron Vault](https://obsidian.md/plugins?id=iron-vault) By _Iron Vault Dev Team_

> 适用于 Ironsworn/Starforged 系列桌面 RPG 的游戏插件/VTT。

![Pasted image 20240714175905|650](https://cdn.pkmer.cn/images/Pasted%20image%2020240714175905.png!pkmer)

[mpv links](https://obsidian.md/plugins?id=mpv-links) By _patsh90_

> 添加带有时间戳的 mpv 链接。

[NyanBar](https://obsidian.md/plugins?id=nyanbar) By _xhyabunny_

> Nyan Cat 进度条生成器！

[Plot Vectors and Graphs](https://obsidian.md/plugins?id=plot-vectors-graphs) By _Nicole Tan YiTong_

> 该插件集成了 [FunctionPlot](https://mauriciopoppe.github.io/function-plot/)，可使用 LaTeX 在 Obsidian 中绘制多个图形或向量，以便在数学和物理概念中更好地可视化。

![Pasted image 20240714172800|650](https://cdn.pkmer.cn/images/Pasted%20image%2020240714172800.png!pkmer)

[Index Notes](https://obsidian.md/plugins?id=index-notes) By _Alejandro Daniel Noel_

> 索引笔记插件是一个强大的工具，适用于希望根据标签在笔记中自动生成索引块的 Obsidian 用户。当标签添加或更改时，这些索引会自动更新，提供一个嵌套的链接列表，链接到遵循标签层次结构的笔记。额外的好处是，由于这些链接实际写入文件，图形视图可以反映知识库的组织情况。

![d2ed7b5a-2f25-4ce7-8b37-4b1f6f91249b|650](https://cdn.pkmer.cn/images/d2ed7b5a-2f25-4ce7-8b37-4b1f6f91249b.gif!pkmer)

[Code Link](https://obsidian.md/plugins?id=code-link) By _observerw_

> 通过创建带有符号的链接，您可以在笔记中仅引用您感兴趣的代码部分，并避免对其他内容的干扰。

![Pasted image 20240714170819|650](https://cdn.pkmer.cn/images/Pasted%20image%2020240714170819.png!pkmer)

[Latex Render](https://obsidian.md/plugins?id=latex-render) By _jvsteiner_

> 将笔记中的小 latax 片段渲染为 SVG 和 PNG 文件。

[DocBase (Unofficial)](https://obsidian.md/plugins?id=docbase-unofficial) By _yurikuvanov_

> 从 DocBase 中提取和推送笔记。

[Notes Refresher](https://obsidian.md/plugins?id=notes-refresher) By _Connor Park_

> 这个 Obsidian 插件使用 OpenAI 的 GPT-4 模型从指定文件夹中总结您的 Markdown 笔记。它非常适合快速查看您的笔记并获得简明扼要的摘要。

[Iconic](https://obsidian.md/plugins?id=iconic) By _Holo_

> 直接从 UI 自定义应用图标，包括标签、文件、书签、属性和功能区命令。
> - 这个插件与 [Iconize](https://github.com/FlorianWoelki/obsidian-iconize) 有何不同？
>   - 两个插件都可以为文件、文件夹和书签添加图标。_Iconic_ 还可以：
>     - 为插件标签、属性、功能区和其他一些 UI 按钮设置图标
>     - 通过直接点击图标来编辑图标
>     - 在同一个对话框中更改图标和颜色
>     - 动态调整颜色以匹配你的主题
>   - _Iconize_ 在装饰文件方面更强大。它可以：
>     - 下载并导入图标包
>     - 使用 Twitter 风格的表情符号
>     - 直接在笔记中输入图标
>     - 在链接旁边显示图标
>     - 在笔记标题旁边显示图标
>     - 遵循 `icon` 和 `iconColor` 属性
>     - 根据文件名规则自动设置图标
>     - 自定义图标大小和边距
> - 我可以同时使用这两个插件吗？
>   可以，只是可能会出现一些视觉 bug！目前它们在标签图标和书签面板的控制权上有些冲突。

![Pasted image 20240714164613|650](https://cdn.pkmer.cn/images/Pasted%20image%2020240714164613.png!pkmer)

[Yanki](https://github.com/kitschpatrol/yanki-obsidian) By _Eric Mika_

> 将库中某文件夹的闪卡同步到 Anki。纯 Markdown 语法。

![4a1b8477-b8e0-4557-9fac-ae44a4b0ccd9|650](https://cdn.pkmer.cn/images/4a1b8477-b8e0-4557-9fac-ae44a4b0ccd9.gif!pkmer)

[Hash Pasted Image](https://obsidian.md/plugins?id=hash-pasted-image) By _Minh Vương_

> 通过哈希算法 SHA-512 自动重命名添加到库的粘贴图像。

#### 更新

[External Links v1.0.11](https://github.com/jivimberg/external-links/releases/tag/1.0.11) By _Juan Vimberg_

> 在 URL 旁边添加链接文本。

[Excalidraw v2.2.9](https://github.com/zsviczian/obsidian-excalidraw-plugin/releases/tag/2.2.9) By _Zsolt Viczian_

> - **新增**
> 	- 改进了“打开选定 Excalidraw 图像背面的笔记”操作。现在它可以与分组元素一起使用，并且当元素接近画布顶部时，会将弹出窗口保持在可见屏幕区域内。注意：由于 Obsidian 的一个 bug，如果你启用了 Obsidian Sync，不建议在 1.6.0 - 1.6.6 版本中使用此功能，因为在关闭弹出窗口时，Obsidian 可能会冻结。它在 1.6.0 之前的版本和 1.6.7 以后的版本中正常工作。
> - **修复**
> 	- 从本地文件夹（Obsidian 之外）拖放导致重复图像。
> 	- 插入链接操作不起作用。
> 	- 插入 Obsidian 命令操作不起作用。
> 	- 编辑文本时，文本元素的元素链接被删除。
> 	- 当绘图背面的章节标题中有空格时，点击链接会打开绘图页面而不是 Markdown 页面。
> 	- obsidian:// 链接未按预期工作。
> 	- 复制和移动带有文本的矩形时，文本会意外移动。这个问题现在应该已经解决（至少不太可能发生）。

[Note Definitions v0.22.0](https://github.com/dominiclet/obsidian-note-definitions/releases/tag/0.22.0) By _Dominic Let_

> 允许在 def-context 中添加文件夹。

[Timeline View v1.2.0](https://github.com/b-camphart/timeline-view/releases/tag/1.2.0) By _b.camphart_

> - **改进**
> 	- 滚动条可以让你看到时间轴中的位置（水平和垂直）
> 	- 键盘滚动支持：方向键、Page Up、Page Down、Home 和 End
> 	- 使用 Tab 键在项目之间导航（Shift+Tab 向后导航）
> 	- 将时间轴与其他标签页链接，以保持对当前打开笔记的关注
> - **修复问题**
> 	- 现在尊重时间轴“舞台”区域的上下填充
> 	- 悬停工具提示现在与 Obsidian 中其他地方使用的工具提示一致

[Tasks v7.6.1](https://github.com/obsidian-tasks-group/obsidian-tasks/releases/tag/7.6.1) By _Martin Schenck and Clare Macrae_

> **已修复**：任务搜索现在可与选项卡插件一起使用！

![Pasted image 20240714174318|650](https://cdn.pkmer.cn/images/Pasted%20image%2020240714174318.png!pkmer)

[Shiki Highlighter v0.4.0](https://github.com/mProjectsCode/obsidian-shiki-plugin/releases/tag/0.4.0) By _Moritz Jung_

> - 添加了内联代码块高亮功能，通过 `{lang} code` 实现，例如 `{jsx} <button role="button" />`
> - 粗体、斜体和下划线高亮现在在实时预览中工作

[Linter v1.25.0](https://github.com/platers/obsidian-linter/releases/tag/1.25.0) By _Victor Tao_

> - **新特性**
> 	- 用户现在可以使用正则表达式根据文件路径匹配忽略文件
> 	- 用户现在可以指定 YAML 时间戳值为 UTC
> - **文档**
> 	- 更新了一些规则的措辞，以帮助澄清某些规则的工作方式
> - **Bug 修复**
> 	- 修复了在设置保留创建日期时，当时区在格式中且计算机当前时区与创建日期所在时区不同时，`YAML Timestamp` 会覆盖创建日期的问题
> 	- 修复了 `Blockquote Style` 从列表项代码和数学块中删除空格的问题
> 	- 修复了在别名键为空且启用保留现有格式时，`YAML Title Alias` 不尊重多行格式的问题
> 	- 修复了在实时预览中执行 linting 时尝试逐个更新 frontmatter 导致文件中的 markdown 混乱的情况
> 	- 修复了 `No Bare URLs` 不允许 URL 路径中包含 `~` 的问题
> 	- 修复了图像链接受 `Quote Style` 影响的问题
> 	- 修复了包含连字符的脚注未被计为脚注的问题
> 	- 修复了一些导致错误匹配的标签正则表达式问题，这可能会导致 frontmatter 出现问题
> 	有关修复和更改的更多信息，请查看 [发布说明](https://github.com/platers/obsidian-linter/releases/tag/1.25.0) 和 [项目板的已发布专栏](https://github.com/users/platers/projects/1)。

[Journals v1.4.0](https://github.com/srg-kostyrko/obsidian-journal/releases/tag/1.4.0) By _werewolf_

> - **新功能**
> 	- 模板变量中的日期操作
> - **Bug 修复**
> 	- 修复了 frontmatter 中出现意外数据时插件崩溃的问题
> 	- 修复了内部索引的问题，该问题可能导致笔记删除时出现异常行为
> 	- 对日历视图进行视觉改进（未来会随着面板扩展）

### PKMer 出品

> [!INFO]
> **PKMer**（[PKMer.cn](https://pkmer.cn/)、[PKMer.net](https://pkmer.net/)）旨在打造东半球强大的知识管理社区。Personal Knowledge Management (PKM) + "er"，其中 "er" 表示人，专注、喜爱个人知识管理工作、追求效率的人们，都可以划入这个行列，希望社区凝聚更多这样的人。

#### [Thino v2.4.48](https://github.com/Quorafind/Obsidian-Thino/releases/tag/2.4.48) 已发布

- **改进**
	- 不显示单个文件的标签，也不显示归档的 Thino 的标签；
	- 文本搜索时会模糊匹配，而不是完全匹配；
	- 改进超过 20000 个 Thino 时的打开速度以及性能；
	- 改进搜索栏搜索时的性能；

#### [Tabs v1.1.1](https://github.com/xhuajin/obsidian-tabs/releases/tag/1.1.1) 已发布

- 优化了解析标签内容的逻辑。
- 标签可以嵌套使用。
- 添加了一个命令来创建标签或将选定文本转换为标签。
- 一些新的设置。
- 在编辑时，如果文本中有代码块，反引号的数量可以自动修改。

## 外观

[Seamless View Theme](https://github.com/GustavoSZ124/Obsidian-Theme-Seamless-View) By _Gustavo Salgado_

![Pasted image 20240714175753|650](https://cdn.pkmer.cn/images/Pasted%20image%2020240714175753.png!pkmer)

> Seamless View 是一个极简主义主题，旨在减少实时预览模式和阅读模式之间的差异。这在画布中编辑元素时提供了无缝体验，确保卡片大小的一致性。

[DarkEmber Theme](https://github.com/miz-i/Obsidian-theme-DarkEmber) By _miz_

![Pasted image 20240714174805|650](https://cdn.pkmer.cn/images/Pasted%20image%2020240714174805.png!pkmer)

[Nier Theme](https://github.com/exloseur3d/nier-theme/tree/main) By _exloseur3d__

![Pasted image 20240714174447|650](https://cdn.pkmer.cn/images/Pasted%20image%2020240714174447.png!pkmer)

> 灵感来自视频游戏“尼尔：机械纪元”的用户界面。

[Dark Clarity Theme](https://github.com/chenbihao/obsidian-theme-dark-clarity) By _chenbihao_

![Pasted image 20240714173949|650](https://cdn.pkmer.cn/images/Pasted%20image%2020240714173949.png!pkmer)

> 主要以 **高辨识度**、且 h1~h6 标题 **有主题色** 为主。

[Vanilla Palettes Theme](https://github.com/GnRlLeclerc/Vanilla-Theme-Palettes) By _GnRlLeclerc_

![Pasted image 20240714122414|650](https://cdn.pkmer.cn/images/Pasted%20image%2020240714122414.png!pkmer)

> 一个简单的 Obsidian 主题调色板切换器，适用于喜欢更换主题的用户。它包含许多流行主题，而不改变原生界面。

[Agate Theme](https://github.com/solm0/Agate) By _solmi_

![Pasted image 20240714122218|650](https://cdn.pkmer.cn/images/Pasted%20image%2020240714122218.png!pkmer)

> 这是一个 minimal 主题，利用透明层的重叠效果营造出各种氛围。

[Gummy-Revived Theme](https://github.com/WinnerWind/gummy-revived) By _WinnerWind_

![Pasted image 20240714122135|650](https://cdn.pkmer.cn/images/Pasted%20image%2020240714122135.png!pkmer)

> 这是复兴 Gummy 主题的尝试，该主题专注于简洁的设计语言，庆祝极简主义。
> Gummy 没有任何样式设置（至少现在还没有！），但 UI 元素会响应您当前应用的主题色。美丽的渐变一定会让您感兴趣和着迷。
