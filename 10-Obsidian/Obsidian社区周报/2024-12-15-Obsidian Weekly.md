---
uid: 20241218221458
title: Obsidian Weekly 2024-12-15：自定义文件夹及图标外观 & 自动化转格式和插入模板
tags: [Weekly, Obsidian]
description: Obsidian Weekly 2024-12-15：自定义文件夹及图标外观 & 自动化转格式和插入模板
author: 淡水鱼,PKMer
type: other
draft: false
editable: false
modified: 20241218222532
---

# Obsidian Weekly 2024-12-15：自定义文件夹及图标外观 & 自动化转格式和插入模板

> [!Abstract]
> **统计时间**：2024-12-08 21:00 ~ 2024-12-15 21:00
> **声明**：本栏目灵感来源于 _Eleanor Konik_ 女士于 2021 年 4 月至 2023 年 6 月期间写作发表的一系列 [Obsidian Roundup](https://www.eleanorkonik.com/tag/roundup/) 文章，如有兴趣可关注原作者的个人网站 [Obsidian Iceberg](https://www.eleanorkonik.com/)；内容来源于 Obsidian 官方 Discord 频道和相应项目在 Github 或其独立网站上的信息。描述中可能存在基于个人理解进行的修改，如有错谬欢迎指正。感谢 Obsidian 团队为我们带来如此优秀的软件。

## 官方资讯

### 官方浏览器剪藏插件 Obsidian Web Clipper 已更新至 [v0.10.5](https://github.com/obsidianmd/obsidian-clipper/releases/tag/0.10.5)

#### 新功能

- 新增 `duration` 过滤器，用于转换时长格式。[详情请参阅文档](https://help.obsidian.md/web-clipper/filters#%60duration%60)
- 添加了土耳其语和印地语翻译。

#### 改进

- 修复了 `replace` 过滤器中 `\n` 的问题，现在可同时作为搜索值和替换值正常工作。
- 修复了 Anthropic 模型未总是正确使用身份验证的问题。
- 修复了当前模型被禁用时扩展窗口的问题。
- 修复了 Twitter 提取器中的重复图片问题。
- 添加了 YouTube 提取器。

## 插件新闻

### 社区插件

#### 新增

[Unit Converter](https://obsidian.md/plugins?id=unit-converter) By _Ruslan Zabarov_

> 直接在 Markdown 文件中转换单位。

[FastForwardLink](https://obsidian.md/plugins?id=fast-forward-link) By _Idan Liberman_

> 将多个链接设置为打开一个目标笔记，从而有效地创建同义链接。使用自定义链接缩写以更快输入、建立术语之间的概念连接、更快速地在笔记间导航，并保持您的库井然有序。

![Weekly-2024-12-15-plugin_demo|650](https://cdn.pkmer.cn/images/Weekly-2024-12-15-plugin_demo.gif)

[Template by Note Name](https://obsidian.md/plugins?id=template-by-note-name) By _Jacob Learned_

> 根据笔记的名称在创建或重命名时自动应用模板。用户可以为符合其命名约定的笔记，使用其指定模板文件夹（包括子文件夹）中的任何模板。

![Weekly-2024-12-15-Pasted image 20241218214207|650](https://cdn.pkmer.cn/images/Weekly-2024-12-15-Pasted%20image%2020241218214207.png!pkmer)

[Color Folders and Files](https://obsidian.md/plugins?id=color-folders-files) By _Mithadon_

> 通过易用的带有颜色选择器和样式选项的右键菜单，自定义 Obsidian 中文件夹和文件的外观。

![Weekly-2024-12-15-Pasted image 20241218213806|650](https://cdn.pkmer.cn/images/Weekly-2024-12-15-Pasted%20image%2020241218213806.png!pkmer)

[ExMemo Assistant](https://obsidian.md/plugins?id=exmemo-assistant) By _ExMemo AI_

> 用大语言模型管理文件并生成元数据，例如标签和摘要。

[Focus Time](https://obsidian.md/plugins?id=focus-time) By _AstraDev_

> 自动跟踪您专注于笔记的时间，并允许您查看每个笔记的总专注时长数据。

![Weekly-2024-12-15-Pasted image 20241218212439|650](https://cdn.pkmer.cn/images/Weekly-2024-12-15-Pasted%20image%2020241218212439.png!pkmer)

[Link Formatter](https://obsidian.md/plugins?id=link-formatter) By _Dilantha Nanayakkara_

> 将链接块格式化为干净的 markdown 列表。

![Weekly-2024-12-15-link-formatter|650](https://cdn.pkmer.cn/images/Weekly-2024-12-15-link-formatter.gif!pkmer)

[WikiDocs](https://obsidian.md/plugins?id=wikidocs) By _pahkey_

> 获取、编辑和上传 WikiDocs 书籍。

![Weekly-2024-12-15-Pasted image 20241218211933|650](https://cdn.pkmer.cn/images/Weekly-2024-12-15-Pasted%20image%2020241218211933.png!pkmer)

[Header navigation](https://obsidian.md/plugins?id=header-navigation) By _readwithai_

> 在标题之间快速跳转并切换折叠。

![Weekly-2024-12-15-7cb418db-cac3-4a82-b9bb-d4df5b75d980|650](https://cdn.pkmer.cn/images/Weekly-2024-12-15-7cb418db-cac3-4a82-b9bb-d4df5b75d980.gif!pkmer)

[Fetch Prayer Times](https://obsidian.md/plugins?id=fetch-prayer-times) By _Ecys_

> 使用 Aladhan API 获取当前祈祷时间并将其保存到笔记中。

[ExMemo Tools](https://obsidian.md/plugins?id=exmemo-tools) By _Yan.Xie_

> 使用大型语言模型进行智能文档管理与优化，包括文件重定位、文本增强、标签生成和摘要生成。

[Sync Cnblog](https://obsidian.md/plugins?id=sync-cnblog) By _zhanglei_

> 将笔记同步到博客园。

[CalloutX](https://obsidian.md/plugins?id=calloutx) By _br4in_

>查看、管理和自定义库中的 callout 图标。

[Cypher](https://obsidian.md/plugins?id=cypher) By _Atharva Wankhede_

> 通过一个简单的切换按钮将文本隐藏为基于图标的密码，非常适合为笔记增添一层神秘感，或仅仅是让其在视觉上更具吸引力。
> _编者按：目测仅支持英文。_

[Insert New Line](https://obsidian.md/plugins?id=insert-new-line) By _Freddy Ouellette_

> 在当前行上方或下方插入新行。

[KaTeX to MathJax](https://obsidian.md/plugins?id=convert-katex-to-mathJax) By _Darko Pejakovic_

> 可将 KaTeX 表示法转换为 MathJax，确保无缝使用从 OpenAI 的 ChatGPT 等来源复制的数学表达式。

[Gay Toolbar](https://obsidian.md/plugins?id=gay-toolbar) By _Chas Kane_

> 色彩缤纷、可定制的工具栏，专为移动设备设计。

![Weekly-2024-12-15-Pasted image 20241218010118|650](https://cdn.pkmer.cn/images/Weekly-2024-12-15-Pasted%20image%2020241218010118.png!pkmer)

#### 更新

[Protected Note v2.0.0](https://github.com/mmiksaa/obsidian-protected-note/releases/tag/2.0.0) By _Mikail Gadzhikhanov_

> - **现在您可以选择要保护的特定文件夹。**
> - 错误修复。
> - 优化改进。

[Vertical Tabs v0.12.1](https://github.com/oxdc/obsidian-vertical-tabs/releases/tag/0.12.1) By _oxdc_

> _Vertical Tabs_ 迄今为止最重大的更新！本次更新带来了突破性的新功能：**高级标签页导航**。
>
> 多年来，用户一直希望在 Obsidian 中获得更好的标签页导航体验。偏好因人而异——有些用户喜欢在新标签页中打开笔记，有些用户更倾向于 IDE 风格的工作流，而另一些用户希望完全避免重复标签页的出现。管理多个标签页组常常令人困惑，虽然一些插件提供了部分解决方案，但它们往往存在不足——仅在特定场景或与特定插件一起使用。
>
> _Vertical Tabs_ 提供五种强大的预设策略，适配不同的工作流需求。您还可以根据自己的喜好创建自定义策略。
>
> 1. **Obsidian+**：优化 Obsidian 的默认行为，提供更智能、更直观的标签页控制算法。非常适合喜欢浏览器式体验的用户，功能熟悉且易用。
> 2. **IDE 模式**：灵感来源于 Xcode、VSCode 和 JetBrains 等工具，此模式支持自动标签页去重、临时标签页和智能导航，提供专业级的 IDE 使用体验。
> 3. **探索模式**：专为深入探索设计，此模式通过防止标签页混乱保持工作区整洁，让您可以安心探索库而无需担心打开数百个标签页。
> 4. **笔记本模式**：如同 Luhmann 的纸质 Zettelkasten 系统，避免在多个标签页中重复打开同一笔记，智能算法确保一致的用户体验。
> 5. **优先新标签模式**：如果您总是希望在新标签页中打开笔记，此策略提供优雅的通用解决方案，可与任何插件无缝协作。
>
> 无论您是开发者、研究者，还是思想的探索者，_Vertical Tabs_ 都能满足您的需求。让智能导航在 Obsidian 中实现更多可能性！

![Weekly-2024-12-15-Pasted image 20241218200225|650](https://cdn.pkmer.cn/images/Weekly-2024-12-15-Pasted%20image%2020241218200225.png!pkmer)

[Multi Properties v1.2.0](https://github.com/technohiker/obsidian-multi-properties/releases/tag/1.2.0) By _fez-github_

> - **新功能**
>     - 现在可以在打开“添加属性”表单时预加载一组属性模板。通过使用属性模板文件，您可以为多个实例预先准备好一组属性，方便多次添加。这是通过在新的 `Default Props File` 设置中指定模板路径实现的。
> - **修复**
>     - 未输入值的属性将在笔记文件中保留为空值，而不是以前的空字符串 ("")。
>     - `name` 属性字段不再随屏幕尺寸缩小。现在，当表单内容溢出时，表单将正确滚动。解决了移动设备上无法选择 `name` 字段的问题。
>     - 修复了尝试从文件夹中删除属性时，某些子文件夹中的属性未被正确获取的问题。
>     - “移除属性”列表中的属性现在按字母顺序排列。

[Rich Foot v1.10.0](https://github.com/jparkerweb/rich-foot/releases/tag/1.10.3) By _Justin Parker_

> - **1.10.3**
> 	- **修复**
> 		- 改进了父选择器匹配，以便在视图或其父元素中存在指定选择器时正确检测并排除 Rich Foot
> - **1.10.2**
> 	- **修复**
> 		- 设置中缺少 `Excluded Folders`（排除文件夹）部分
> - **1.10.1**
> 	- **修复**
> 		- 在画布/看板卡片的编辑器底部出现的额外填充
> - **v1.10.0**
> 	- **新增**
> 		- 通过 `frontmatter` 字段添加排除规则
> 		- 使用指定 DOM 父选择器进行自定义排除，以实现高级控制

[Backlink Cache v2.2.2](https://github.com/mnaoumov/obsidian-backlink-cache/releases/tag/2.2.2) By _mnaoumov_

> 添加了对白板反向链接的支持。

[Excalidraw v2.6.8](https://github.com/zsviczian/obsidian-excalidraw-plugin/releases/tag/2.6.8) By _Zsolt Viczian_

> - **新功能**
> 	- **操作体验优化**：
> 		- 在元素链接编辑器中添加了 **Obsidian 链接搜索按钮**。
> 		- `插入任意文件` 功能现在支持搜索文件别名。
> 		- 文件搜索弹窗进行了外观改进（显示路径、显示文件类型图标）。
> 		- 文本元素的光标颜色与文本颜色匹配。
> 		- 脚本商店新增脚本：[图像遮挡](https://github.com/zsviczian/obsidian-excalidraw-plugin/blob/master/ea-scripts/Image%20Occlusion.md)（作者：[TrillStones](https://github.com/TrillStones)）。
> - **修复**
> 	- 修复了 **Excalidraw 图标每次重新打开 Obsidian 时在侧边菜单中反复出现** 的问题。
> 	- 修复了笔模式中启用 **单指平移** 时，Excalidraw **仍然允许使用鼠标操作** 的问题。
> 	- 修复了在 **分屏模式下编辑绘图**（绘图在一侧，Markdown 视图在另一侧）时，编辑 Markdown 文件可能导致绘图重新缩放并跳转到选区以外的问题。
> 	- 解决了与 Hover-Editor 的兼容性问题。
> 	- `ExcalidrawAutomate.create()` 现在会正确包含模板中位于 Excalidraw 数据上方和 YAML Frontmatter 下方的 Markdown 文本。这也 **修复了解构选定元素脚本的同一问题**。

### 未上架插件

> [!Caution]
> **注意**：下列插件尚未通过代码审查，因而未在 _ 社区插件市场 _ 上架。在安装前，请确保您已充分了解并接受其中涉及的潜在安全风险。

[Clipper Catalog](https://github.com/soundslikeinfo/obsidian-clipper-catalog) By _grrstine_

> 提供强大的目录视图界面，用于管理所有剪藏的网页文章和内容。轻松在您的库中组织、搜索和管理网页剪藏。对于拥有大量网页剪藏（无论是否使用 Obsidian 官方剪藏插件）且分散在多个文件夹中的用户，这将非常有用。

![Weekly-2024-12-15-Pasted image 20241218132832|650](https://cdn.pkmer.cn/images/Weekly-2024-12-15-Pasted%20image%2020241218132832.png!pkmer)

[Theme Controller](https://github.com/Binaris00/Theme-Controller) By _Binaris00_

> 设置主题的显示时间和方式。
> - 功能
>     - **颜色切换器：** 使用状态栏图标在浅色模式和深色模式之间切换。
>     - **路径特定主题：** 根据活动笔记的路径自动应用特定的主题和颜色。
>     - **标签特定主题：** 为活动笔记中的任意标签设置独特的主题和颜色。
>     - **默认主题：** 定义在未保存任何特定路径或标签配置时使用的默认主题和颜色（默认禁用）。

[Notes Explorer](https://github.com/tu2-atmanand/obsidian-notes-explorer/releases/tag/2.3.1) By _tu2_

> 将所有笔记显示为卡片，便于更直观地浏览和修改笔记。通过使用各种过滤器，在资源管理器视图中探索您的库。
> **注意**：最初作为  [Cards View 插件](https://github.com/jillro/obsidian-cards-view-plugin) 的简单分支立项，现在已发展成为一个功能丰富的独立插件，具有许多新功能。

![Weekly-2024-12-15-Pasted image 20241216183206|650](https://cdn.pkmer.cn/images/Weekly-2024-12-15-Pasted%20image%2020241216183206.png!pkmer)

## 外观

[Fancy-a-Story v2.0.0](https://github.com/ElsaTam/obsidian-fancy-a-story/releases) By _Kapirklaa_

![Weekly-2024-12-15-app-background-image|650](https://cdn.pkmer.cn/images/Weekly-2024-12-15-app-background-image.webp!pkmer)

> - **新功能**
> 	 - 为移动端新增一个 [浮动按钮](https://elsatam.github.io/obsidian-fancy-a-story/docs/stylesettings/stylesettings.html#floating-button-to-switch-note-modes)，用于切换阅读/编辑模式
> 	 - 可以设置一个 [应用的背景图片](https://elsatam.github.io/obsidian-fancy-a-story/docs/stylesettings/stylesettings.html#app-background-image)
> 	 - 可以为笔记设置 [背景图片](https://elsatam.github.io/obsidian-fancy-a-story/docs/stylesettings/stylesettings.html#notes-background-image)
> 	 - 横幅现在可以通过 [全局选项](https://elsatam.github.io/obsidian-fancy-a-story/docs/stylesettings/stylesettings.html#banner-style-in-edit-mode) 隐藏，而不再需要为每个笔记单独设置 cssclass
> - **更改**
> 	 - 块引用不再用于 [标题说明](https://elsatam.github.io/obsidian-fancy-a-story/docs/callouts/caption.html)、[工具提示](https://elsatam.github.io/obsidian-fancy-a-story/docs/callouts/tooltip.html) 和 [引用](https://elsatam.github.io/obsidian-fancy-a-story/docs/callouts/cite.html)，现在需要使用 callouts
> 	 - [漫画 callout](https://elsatam.github.io/obsidian-fancy-a-story/docs/callouts/comic.html) 现在需要在图片前加上第三个大于号 `>`
> 	 - [FAS 信息框](https://elsatam.github.io/obsidian-fancy-a-story/docs/callouts/fas-infobox.html) callout 现在需要选项 `h1-title` 才能正确使用一级标题
> 	 - [嵌入的 `faded` 选项](https://elsatam.github.io/obsidian-fancy-a-story/docs/embeds/faded%20and%20inline.html) 不再支持内联模式。如需内联效果，需要下载独立代码片段
> 	 - [family-tree](https://elsatam.github.io/obsidian-fancy-a-story/docs/cssclasses/family-tree.html)、[tree-view](https://elsatam.github.io/obsidian-fancy-a-story/docs/cssclasses/tree-view.html) 和 [list-reversed](https://elsatam.github.io/obsidian-fancy-a-story/docs/cssclasses/list-reversed.html) 现在使用 cssclass 而不是标签。笔记中的所有列表都会受到 cssclass 的影响。对于 family-tree，`#wed` 标签需要放置在其他位置（见文档）
> - **修复**
> 	 - 减少移动端的某些 UI 元素
> 	 - 时间线 callouts 现在使用嵌套 callouts 的颜色作为分段和标记点的颜色
> 	 - 减少主题中的 `:has()` 使用次数，以提升性能
> 	 - 文件资源管理器中的项目符号标识现在可以在没有 Highlight Active Folder Section 插件的情况下完全移除
> 	 - 粗体字重现在设为 600，更好地兼容简体中文
> 	 - 横幅标题现在能够正确居中

> [!Warning] 声明
> 本栏目致力于为广大 Obsidian 中文用户汇总全面的官方资讯与插件、外观动态。为了保持信息的全面性，我们的**收录并不等同于推荐**，还请各位用户知悉并理解，根据自身需求进行判断和选择。

