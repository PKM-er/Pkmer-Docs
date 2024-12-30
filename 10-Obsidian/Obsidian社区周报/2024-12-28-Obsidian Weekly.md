---
uid: 20241230165352
title: Obsidian Weekly 2024-12-29：更严谨，更简约，更开放，更自由
tags: [Weekly, Obsidian]
description: Obsidian Weekly 2024-12-29：更严谨，更简约，更开放，更自由
author: 淡水鱼,PKMer
type: other
draft: false
editable: false
modified: 20241230165439
---

# Obsidian Weekly 2024-12-29：更严谨，更简约，更开放，更自由

> [!Abstract]
> **统计时间**：2024-12-22 21:00 ~ 2024-12-29 21:00
> **声明**：本栏目灵感来源于 _Eleanor Konik_ 女士于 2021 年 4 月至 2023 年 6 月期间写作发表的一系列 [Obsidian Roundup](https://www.eleanorkonik.com/tag/roundup/) 文章，如有兴趣可关注原作者的个人网站 [Obsidian Iceberg](https://www.eleanorkonik.com/)；内容来源于 Obsidian 官方 Discord 频道和相应项目在 Github 或其独立网站上的信息。描述中可能存在基于个人理解进行的修改，如有错谬欢迎指正。感谢 Obsidian 团队为我们带来如此优秀的软件。

## 插件新闻

### 社区插件

#### 更新

[PDF++ v0.40.19](https://github.com/RyotaUshio/obsidian-pdf-plus/releases/tag/0.40.19) By _Ryota Ushio_

> - **新增**
>     - 添加了一个新的 [Style Settings](https://github.com/mgmeyers/obsidian-style-settings) 选项（**Style Settings > PDF++ > Hover popovers > Backlink popovers > Backlink popover width/height (px)**），允许用户自定义鼠标悬停在反向链接高亮或矩形区域上方时悬停弹窗的宽度和高度。
> - **修复**
>     - 修复了当矩形选区配置为嵌入为图像且 PDF 查看器位于弹出窗口中时，所选矩形区域内字符在嵌入图像中渲染不正确的问题。

[Block Link Plus](https://github.com/Jasper-1024/block-link-plus/releases/tag/1.1.0) By _Jasper_

> - **新增**
>     - 支持 Obsidian URI 链接。
>     - 可自定义的块链接别名类型：
>         - 块内容的前 x 个字符。
>         - 最近的标题名称。
> - **优化**
>     - 改进命令和菜单文本，使其更加清晰易懂。
> - **修复**
>     - 修复命令面板与右键菜单功能之间的一致性问题。

[Chronos Timeline v1.1.2](https://github.com/clairefro/obsidian-plugin-chronos/releases/tag/1.1.2) By _Claire Froelich_

> 新增 `DEFAULTVIEW` 标志，用于设置初始时间线范围

![Weekly-2024-12-29-Pasted image 20241230151201|650](https://cdn.pkmer.cn/images/Weekly-2024-12-29-Pasted%20image%2020241230151201.png!pkmer)

[Callout Toggles v1.2.0](https://github.com/alythobani/obsidian-callout-toggles/releases/tag/1.2.0) By _Aly Thobani_

> - **功能：自动选择 / 自动光标设置**
>     - 现在可以在插入、包装或移除标注（callout）后进一步自定义自动选择的内容和光标的位置。
>     - 可选项包括：选择标题、选择完整标注、选择标注标题、将光标置于末尾等。

[Custom Attachment Location v5.0.0](https://github.com/RainCat1998/obsidian-custom-attachment-location/releases/tag/5.0.0) By _RainCat1998_

> - 新增自定义令牌（tokens）。
> - 新增 Frontmatter 格式化程序。
> - 应用令牌后验证路径。
> - 支持 `fileCreationDate` 和 `fileModificationDate` 标记。
> - 处理 `../` 路径。
> - 添加随机数（randoms）和 UUID 功能。
> - 添加 `originalCopiedFileExtension` 标记。
> - 禁止在提示（prompt）中使用令牌。
> - 支持根路径（root path）。
> - 支持路径的首尾斜杠（/）。
> - 支持 `.` 和 `..`

[Vertical Tabs v0.13.0](https://github.com/oxdc/obsidian-vertical-tabs/releases/tag/0.13.0) By _oxdc_

> - **新增功能：**
>     - **Web View 插件支持**：全面兼容 Obsidian 1.8 中引入的新 Web View 核心插件。
>     - **移动端标签页编辑**：批量关闭标签页、移动标签页或打开新文件，无需频繁切换。（完成后记得关闭标签页编辑模式！）
>     - **重新设计的标签历史浏览器**：在 iPad 上享受更流畅的标签页历史浏览体验。
> - **改进：**
>     - **增强安全性**。
>     - **性能提升**：垂直标签页运行速度更快，更高效。
>     - **更智能的临时标签页**：采用先进算法提升处理能力和可用性。
>     - **显示活动标签页**：现在会自动滚动至活动标签页。
>     - **更直观的工具栏**：重新设计，提供更流畅、用户友好的体验。
>     - **新标签按钮现已在移动设备上可用**。
>     - **移动端标签页缩放菜单**：iOS 和 iPad 上可用缩放功能。
> - **修复问题：**
>     - 修复了 Obsidian 1.8 中横向标签页大小的问题。
>     - 修复了在 Web 浏览器中导航时标签页标题未正确更新的问题。
>     - 解决了移动端侧边栏抽屉意外折叠的问题。
>     - 修复了无法打开本地图表视图的问题。
>     - 修正了插件更新跟踪器界面在标签页去重后无法保持聚焦的错误。

[Excalidraw v2.7.4](https://github.com/zsviczian/obsidian-excalidraw-plugin/releases/tag/2.7.4) By _Zsolt Viczian_

> - **v2.7.3**
>     - **新增**
>         - **Shade Master 脚本**：可修改所选 Excalidraw 元素、SVG 图像以及嵌套 Excalidraw 图稿的颜色亮度、色相、饱和度和透明度。选择单个图像时，可对颜色进行单独映射。原始图像保持不变，映射表将添加到 `## Embedded Files` 下，适用于 SVG 和嵌套图稿。这有助于在保持图稿链接的同时应用不同的配色主题。
>         - 新增命令面板命令：“复制选定的图像，并分配一个不同的图像 ID”。此功能可复制选定图像并分配一个新的图像 ID，从而对同一图像添加多个颜色映射。在场景中，该图像将被视为不同的图像，但仍从库中的同一文件加载。
>     - **用户体验改进**
>         - 新增设置项，位于 `嵌入到 Markdown 文档中的绘图` > `图像缓存和渲染优化`。用户现在可以设置图像渲染的并行工作线程数量。增加线程数量可以加快渲染速度，但可能会在处理大型图稿时暂时降低系统响应速度。
>         - 将与笔相关的设置移动到 `界面 & 行为` 下的子标题 `手写笔` 中。
>         - 优化加载和更新嵌入图像时的性能，并修复少量错误。
>         - `## Embedded Files` 下的颜色映射现在可以包括 "stroke" 和 "fill" 颜色键。如果设置，这些键将更改相关文件的 SVG 根元素的填充和描边属性。
>     - **修复**
>         - 修改图像链接以切换图像大小锚定时，视图中的图像未立即更新，直到用户手动保存或重新打开图稿。此问题是 2.7.1 中引入的减少视图保存频率的副作用。
> - **v2.7.4**
>     - **修复**
>         - 修复了 2.7.3 的回归问题，其中图像文件 ID 在某些情况下被覆盖。
>         - 修复打开深色图稿时的白色闪烁问题。

[Todoist Context Bridge v0.10.0](https://github.com/wenlzhang/obsidian-todoist-context-bridge/releases/tag/0.10.0) By _wenlzhang_

> - **功能**
>     - 新增 Tasks 插件支持：包括截止日期和优先级。
>     - 现已同时支持 Dataview 和 Tasks 格式。
> - **其他**
>     - 微调设置选项页。
>     - 改进文档说明。

[Linter v1.28.0](https://github.com/platers/obsidian-linter/releases/tag/1.28.0) By _Victor Tao_

> - **功能**
>     - 功能：`Line Break at Document End` 不再在空白笔记末尾添加空行。
>     - 功能：增加启用/禁用自定义命令和自定义替换的功能。
> - **修复**
>     - 修复：`Add Blank Line After YAML` 仅在 YAML 已存在时工作的问题。
>     - 修复：`YAML Timestamp` 防跳机制未在首字符变化时启动的问题。
>     - 修复：`Remove Multiple Spaces` 当嵌套/缩进列表项出现在嵌套块引用/Callout 中时删除后续空格。
>     - 修复：`YAML Key Sort` 未考虑键值中尾随空格的问题。
>     - 修复：文件夹忽略功能影响到类似路径的问题。
>     - 修复：粘贴覆盖在文件预览编辑器中不粘贴，以及 `YAML Timestamp` 通过用户编辑更新时的竞争条件问题。
>     - 修复：控制台中针对不支持的区域显示大量语言环境警告的问题。
>     - 修复：`Paragraph Blank Lines` 和 `Consecutive Blank Lines` 规则之间的边缘情况。
> - **文档**
>     - 更新：优化 `YAML Timestamp` 设置的描述，帮助用户更清晰地理解用法。
> - **维护**
>     - 更新：发布说明生成。
>     - 更新：调整拉取请求（PRs）的变更日志分类。
> - **其他更改**
>     - 修复：README 模板文件链接错误。
>     - 更新：改进 zh-cn 翻译。
>     - 新增：添加 ru-RU 翻译。
>     - 重构：优化 `src/lang/locale/ru.ts` 中 ru-RU 翻译的结构和一致性。
>     - 发布前准备工作。

[Pixel Banner v2.16.3](https://github.com/jparkerweb/pixel-banner/releases/tag/2.16.3) By _Justin Parker_

> - **v2.16.0**
>     - **新增**
>         - 隐藏嵌入式笔记横幅的设置。
>     - **修复**
>         - 修复了嵌入式笔记横幅的“内容开始”位置未被遵守的问题。
> - **v2.16.1**
>     - **修复**
>         - 修复了通过 `frontmatter` 定义时“横幅随机切换”功能无法正常工作的问题。
> - **v2.16.2**
>     - **修复**
>         - 修复了在没有横幅的嵌入式笔记中，“内容开始”内边距被错误应用的问题。
> - **v2.16.3**
>     - **新增**
>         - 新增对横幅渲染链接的支持（例如 `![[banner.jpg]]`）。

### 未上架插件

> [!Caution]
> **注意**：下列插件尚未通过代码审查，因而未在 _ 社区插件市场 _ 上架。在安装前，请确保您已充分了解并接受其中涉及的潜在安全风险。

[Keep the Rhythm](https://github.com/benjaminezequiel/keep-the-rhythm/) By _Benjaminezequiel_

> 帮助您通过追踪每日字数并以优雅的热力图呈现，保持一致的写作习惯。
> 适配 Obsidian Sync 官方同步——通过为每个设备维护独立文件，确保在设备切换时统计数据不会被覆盖，从而能够始终精准地跟踪您的写作进度。

![Pasted image 20241229163829|650](https://cdn.pkmer.cn/images/Pasted%20image%2020241229163829.png!pkmer)

[External Rename Handler](https://github.com/mnaoumov/obsidian-external-rename-handler) By _mnaoumov_

> 处理在 Obsidian 之外进行的重命名。
> 默认情况下，Obsidian 不会处理在 Obsidian 外部进行的重命名。它将它们视为一对 `create` / `delete` 事件。该插件通过将 Obsidian 外部进行的重命名视为单个 `rename` 事件来处理它们。
> _为了使此功能发挥作用，Obsidian 必须在外部重命名期间运行。_

[Mkdocs Embed](https://github.com/Enveloppe/mkdocs-embed-file) By _Mara-Li_

> 一种将文件嵌入到文档中的方法。支持维基链接和普通链接。

![Mkdocs Embed|650](https://cdn.pkmer.cn/images/Mkdocs%20Embed.gif)

[Mkdocs Obsidian Link](https://github.com/mara-Li/mkdocs-obsidian-links) By _Mara-Li_

> mkdocs 插件，可以更轻松地在页面之间进行链接。

## 外观

[**Emerald Echo** Theme](https://github.com/MalcolmMielle/Emerald-Echo) By _Malcolm Mielle_

![Pasted image 20241229175810|650](https://cdn.pkmer.cn/images/Pasted%20image%2020241229175810.png!pkmer)

> 一个为 Obsidian 设计的绿色主题，灵感来源于 [Green Nightmare](https://github.com/prradox/green-nightmare) 以及开发者自制的 VSCode 绿色主题 OneDarkPro Retro。

[**Cupertino** Theme](https://github.com/aaaaalexis/obsidian-cupertino) By _Alexis C_

![Pasted image 20241229175519|650](https://cdn.pkmer.cn/images/Pasted%20image%2020241229175519.png!pkmer)

![Pasted image 20241229175710|650](https://cdn.pkmer.cn/images/Pasted%20image%2020241229175710.png!pkmer)

> - **原生且简约**——在您的所有设备上呈现干净、原生的外观和感觉，以便您可以专注于您的内容。
> - **针对移动设备进行了优化**- 重新设计了模式、菜单、编辑器、搜索等，并具有舒适的间距以提高可用性。

[**Sakurajima** Theme](https://github.com/Daiki48/sakurajima.obsidian) By _Daiki Nakashima_

![Pasted image 20241229175352|650](https://cdn.pkmer.cn/images/Pasted%20image%2020241229175352.png!pkmer)

[**Simple Color** Theme](https://github.com/raspberri05/simple-color) By _Naya Singhania_

![Pasted image 20241229164625|650](https://cdn.pkmer.cn/images/Pasted%20image%2020241229164625.png!pkmer)
