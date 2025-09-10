---
uid: 20250211183030
title: Obsidian Weekly 2025-02-09：开工大吉！1.8 版本仍在高速迭代中
tags: [Weekly, Obsidian]
description: Obsidian Weekly 2025-02-09：开工大吉！1.8 版本仍在高速迭代中！
author: 淡水鱼,PKMer
type: other
draft: false
editable: false
modified: 20250211183410
---

# Obsidian Weekly 2025-02-09：开工大吉！1.8 版本仍在高速迭代中

> [!Abstract]
> **统计时间**：2025-01-19 21:00 ~ 2025-02-09 21:00
> **声明**：本栏目灵感来源于 _Eleanor Konik_ 女士于 2021 年 4 月至 2023 年 6 月期间写作发表的一系列 [Obsidian Roundup](https://www.eleanorkonik.com/tag/roundup/) 文章，如有兴趣可关注原作者的个人网站 [Obsidian Iceberg](https://www.eleanorkonik.com/)；内容来源于 Obsidian 官方 Discord 频道和相应项目在 Github 或其独立网站上的信息。描述中可能存在基于个人理解进行的修改，如有错谬欢迎指正。感谢 Obsidian 团队为我们带来如此优秀的软件。

## 官方资讯

### Obsidian v1.8.5 内测版现已发布

#### 桌面端

##### 错误修复

- 修复了相邻编号列表被视为同一列表并应用错误编号的问题。
- 修复了在列表中按 Shift+Enter 时未添加正确缩进的问题。
- 修复了 Mermaid 图中设置自定义字体时缺失 CSS 变量 `--font-mermaid` 的问题。
- Web Viewer：在“编辑器设置”中关闭“始终聚焦新标签页”后，点击 Web 历史视图中的结果将在后台打开。
- Web Viewer：修复了“清除 Web Viewer 数据”未能完全删除存储的会话数据的问题。
- Web Viewer：修复了内置广告拦截器未能正确捕获网页请求的问题。
- 书签：除非将 Web Viewer 配置为在内部打开外部链接，否则点击书签 URL 默认会在外部浏览器中打开。
- 修复了 Mermaid 的回归问题，即当窗口缩放级别不为 100% 时部分文本被截断的问题。
- 修复了使用 Graph 视图后按 Command/Ctrl 键时页面预览意外出现的问题。
- 第三方库：升级 Mermaid 至 11.4.1。

#### 移动端

包含所有 Obsidian 桌面端 v1.8.5 的新功能和修复。

- Android：引导流程现在增加了使用现有文件夹作为库的选项。

### 附：Obsidian v1.8.4 公共版更新日志

#### 桌面端

##### 错误修复

- 修复了在块引用内按 `Enter` 时无法将块引用延续到下一行的问题。
- 修复了白板预览图像有时无法显示的问题。
- 修复了某些插件在打开文件时无法聚焦正确标签页的问题。

#### 移动端

包含所有 Obsidian 桌面端 v1.8.4 的新功能和修复。

- iOS：修复了安装后导致应用显示黑屏的罕见问题。

### 附：Obsidian v1.8 公共更新日志

#### 桌面端

##### 重点亮点

- **Web Viewer**：全新的核心插件，可在 Obsidian 内打开外部链接。这使得无需离开应用即可阅读链接内容，并改善了网络研究的多任务处理。该插件默认关闭，必须在设置中手动启用。
- **同步**：新增视图选项“隐藏我的更改”，可在共享的 Obsidian 同步库中隐藏您自己的文件更改。
- **文件资源管理器**：现新增自动显示当前活动文件的选项。
- 新增“Download attachments for current file”命令，可下载所有外部嵌入的图片，并将外部链接替换为内部嵌入。
- 新增“Insert footnote”命令。脚注自动补全现在在无匹配项时提供创建新脚注的后备方案。
- 标签视图现新增搜索筛选功能。
- 大纲视图现新增“Auto-scroll to current section（自动滚动到当前部分）”选项。

##### 改进

- 修改编号列表时，编号现在会自动更新。
- 最近使用的命令现在会显示在命令面板顶部。
- 编辑建议在输入变化时会自动滚动至顶部。
- 中键点击标签页前进/后退导航按钮现在会在新标签页中打开文件。
- 在编辑器上下文菜单的“文本格式”子菜单中新增了“注释”选项。
- 改进了对含无效属性的文件的处理：
    - 阅读模式现在在文件顶部显示错误信息。
    - “添加笔记属性”命令现在显示错误信息，而不是删除无效属性。
- 白板分组现可设置为空标签，编辑时这些标签依然可见。
- 白板卡片在被主动编辑时，即使缩小视图也会保持挂载状态。
- 同步版本历史在查看白板文件时会渲染预览图像。
- “搜索当前文件”工具栏现在会显示结果总数。
- 改进了快速切换器中书签 URL 的渲染效果。
- 搜索时，按下 `↓` 键会使光标从搜索栏移开，更易于使用箭头键浏览结果。
- “插入模板”命令现在按文件路径对模板排序，并显示文件夹名称。
- 在文件资源管理器中右键点击任意位置现在会显示上下文菜单。
- 文件资源管理器现在包含一个菜单选项，可用选定项创建新文件夹。
- 现在可通过上下文菜单或 `Command/Ctrl + C` 复制列表属性中的单个值。
- 在本地属性视图中右键点击任意位置现在会显示属性菜单。
- 在文件资源管理器中，将文件拖动至折叠文件夹时，文件夹会自动展开。
- 属性菜单现新增排序选项。
- `<img>`、`<video>`、`<audio>` 和 `<source>` 标签的相对 `src` 路径现在可在实时预览和阅读模式中渲染。
- 如果标签页太小，标签关闭按钮现在会隐藏。
- 在同步历史中，点击活动项现在会展开其内容。
- 引用上下文菜单现新增移除引用格式的选项。
- “在文档中显示反向链接”首选项现在对工作区中的每个标签页单独保存。
- “显示功能区”设置现在保存在 `appearance.json` 中，而非 `app.json`。
- 笔记和附件的标签页标题现支持鼠标悬停时显示页面预览。
- Obsidian Publish 现新增命令“在实时站点中打开”，用于打开笔记的当前在线版本。
- 改进了连接到远程同步库时的屏幕显示。
- 为提高设置中可见性，Sync 插件现在默认启用，并新增了命令“Sync: 设置同步”。
- 文件资源管理器在将文件移动到折叠文件夹后现在会自动取消选中该文件。

##### 错误修复

- 实时预览现在能正确渲染引用式链接。
- “Tab 缩进大小”设置现在控制标签/缩进的视觉宽度。
- 修复了重命名标题和块 ID 时显示的修改文件数量错误问题。
- Graph 视图现在不再将 Canvas 文件视为附件。
- 修复了搜索排序偏好有时未能保存的问题。
- 布局和配置更改现在在退出 Obsidian 前都会保存。
- 修复了一个罕见问题：当光标位于文件开头且模板内容以水平线开始时，“插入模板”命令失败。
- 修复了在属性名称为空时右键点击属性图标会隐藏整行的问题。
- 修复了当光标与嵌入起始标记 `![[` 重叠时 `Alt-Enter` 无效的问题。
- 修复了移除非活动主题后应用切换回默认主题的问题。
- 白板在选中多个文件卡片时现显示额外的上下文菜单选项。
- 修复了嵌入内容内代码块和引用块缺失边距的问题。
- 修复了当侧边栏视图激活时“重命名文件”命令失效的问题。
- 媒体选择提示现在在无匹配结果时不允许创建文件。
- 在文本属性输入框中按下 `Shift-Enter` 现会正确使用当前输入文本。
- 修复了当文件名以希腊字符结尾时链接解析的问题。
- 脚注 ID 现不区分大小写。
- 修复了在 PDF 中选择文本时出现闪烁的问题。
- 嵌入的标题现能正确渲染 Markdown 格式（例如：`## *Hello*, World`）。
- 提高了代码颜色的对比度，并为代码块边框添加了 CSS 变量。
- 单击引用中的“复制”按钮时，不再切换至源模式。
- 当由于网络连接差导致无法加载远程库时，新增“重试”按钮。
- 修复了默认字体下部分日文字符渲染不正确的问题。
- 修复了弹出窗口中的 `rem` 单位与主窗口不匹配的问题。
- 修复了内联脚注有时未被元数据缓存处理的问题。
- 修正了可编辑行中任务复选框的 CSS 特异性，以避免与源模式下渲染的复选框冲突（例如引用块）。
- 属性值输入框现在会遵循拼写检查设置。
- 修复了使用“在所有文件中搜索”命令后搜索排序顺序有时会丢失的问题。
- 修复了从嵌入中触发“重命名标题”和“重命名块 ID”命令无效的问题。
- 修复了“排除文件”屏幕未能正确保存的问题。
- 更新了“Tab 缩进大小”的描述，使其更符合实际行为。
- 修复了从页面预览中编辑嵌入标题（例如：`[[file#heading]]`）时导致标题文本被修改的问题。
- 修复了嵌入标题中 MathJax 无法渲染的问题。
- 修复了从笔记导航到附件时命令无法正确工作的错误。例如，在 PDF 视图中 `Command/Ctrl + F` 有时无效。
- 修复了 PDF 视图中“复制链接到选区”有时将选区应用于错误文本节点的问题。
- 在多行列表项中按 `Enter` 现在会正确延续列表。
- 修复了“切换注释”命令有时将光标置于错误位置的问题。
- 修复了在某些情况下关闭弹出窗口会阻止保存工作区等事件触发的问题。
- 修复了打开包含折叠标题的笔记时，如果标题包含代码块，折叠状态未能正确恢复的问题。
- 修复了在将 “force” 选项设置为 `0` 时 Graph 视图产生的错误。
- 修复了 Graph 视图中页面预览不稳定的问题：
    - 悬停在节点上现在能稳定打开页面预览。
    - 悬停后按下修饰键也会打开页面预览。
    - 快速连续悬停多个节点时，页面预览会正确更新。
- 在侧边栏点击链接（不按修饰键）现在会正确聚焦标签页。
- 修复了在 Canvas 中双击节点标签时，节点切换到编辑模式的问题。

##### 第三方库

- 升级 Electron 至 33.3.2。
- 升级 Prism.js 至 1.29.0。
- 升级 Turndown 至 7.2.0。
- 升级 Mermaid 至 11.3.0。
- 升级 CodeMirror 至最新版本。

#### 移动端

##### 改进

- 文件资源管理器上下文菜单现在显示：
    - 文件夹的文件及子文件夹数量
    - 文件的创建时间和修改时间
- 我们不再等待 iCloud 完成同步您的配置文件。如果配置文件已被卸载，将会重新下载，并在文件同步后提示您重新加载应用。
- 新增命令以打开标签切换器，该命令可绑定到下拉操作上。

##### 错误修复

- 活动文件将始终在标签切换器中高亮显示。
- 修复了关闭侧边栏视图时活动文件有时未能重置的问题。
- 在 iOS 上，点击状态栏现在会始终滚动至活动文件顶部；如果侧边栏处于活动状态，则滚动至侧边栏顶部。
- 在标签切换器中长按标签时，不再拖动标签预览图像。
- 修复了 Android 键盘自动更正时插入多余文本的问题。
- iOS：修复了一个罕见问题，即创建文件夹后，Obsidian 直到重启应用才检测到该文件夹。

## 插件新闻

### 社区插件

#### 新增

[Goal Tracker](https://obsidian.md/plugins?id=goal-tracker) By _Goal Tracker_

> 一个简单且灵活的目标准追踪插件，允许你使用每日、每周或每月的视图来追踪你的目标。

![Weekly-2025-02-09-Pasted image 20250210233036|650](https://cdn.pkmer.cn/images/Weekly-2025-02-09-Pasted%20image%2020250210233036.png!pkmer)

[Current File Tags](https://obsidian.md/plugins?id=current-file-tags) By _Trung Tran_

> 显示当前活动的 Markdown 文件的标签及其关联文件。

![Weekly-2025-02-09-Pasted image 20250210231659|650](https://cdn.pkmer.cn/images/Weekly-2025-02-09-Pasted%20image%2020250210231659.png!pkmer)

[Missing Link File Creator](https://obsidian.md/plugins?id=missing-link-file-creator) By _Lemon695_

> 创建缺失的链接以及相应的文件。

[Paperless](https://obsidian.md/plugins?id=paperless) By _Talal Abou Haiba_

> 将自己托管的 paperless-ngx 实例中的 PDF 插入到 Obsidian 笔记中。

[Cooksync](https://obsidian.md/plugins?id=cooksync) By _Cooksync_

> 自动导入 CookSync 数据。

![Weekly-2025-02-09-Pasted image 20250210221919|650](https://cdn.pkmer.cn/images/Weekly-2025-02-09-Pasted%20image%2020250210221919.png!pkmer)

[Recent Notes](https://obsidian.md/plugins?id=recent-notes) By _Kamil Rudnicki_

> 一个插件，可以在干净、有序的时间线视图中显示你最近编辑的笔记，类似于 Apple Notes。非常适合跟踪你的最新工作并快速访问最近修改的笔记。

![Weekly-2025-02-09-Pasted image 20250210220718|650](https://cdn.pkmer.cn/images/Weekly-2025-02-09-Pasted%20image%2020250210220718.png!pkmer)

[Mahgen Renderer](https://obsidian.md/plugins?id=mahgen-renderer)

> 使用 Mahgen 将麻将图片以内联或块的方式显示。

![Weekly-2025-02-09-Pasted image 20250210215422|650](https://cdn.pkmer.cn/images/Weekly-2025-02-09-Pasted%20image%2020250210215422.png!pkmer)

[Backgroundset](https://obsidian.md/plugins?id=backgroundset) By _daonali_

> 允许您设置背景图像集（文件夹）。

[Friend Tracker](https://obsidian.md/plugins?id=friend-tracker) By _Dan Au_

> 跟踪朋友，生日和互动。

[Anchor Link Display Text](https://obsidian.md/plugins?id=anchor-display-text) By _Robert C Arsenault_

> 此插件会自动将锚链接（即链接到另一篇笔记标题的链接）的显示文本设置为目标标题的名称，而不是直接显示链接文本的原样。

[Sentinel](https://obsidian.md/plugins?id=sentinel) By _Giorgos Sarigiannidis_

> 在文档可见性发生变化时更新属性或运行命令。例如，你可以添加一个 `views` 属性，每次打开笔记时自动递增；一个 `modified` 属性，在你修改笔记后退出时捕获当前的日期和时间；在打开或退出笔记时运行一个 Linter，等等。

[Boardgame Search](https://obsidian.md/plugins?id=boardgame-search) By _Marlon May_

> 在 Obsidian 中直接跟踪和管理您的桌游收藏。

![Weekly-2025-02-09-Pasted image 20250210212403|650](https://cdn.pkmer.cn/images/Weekly-2025-02-09-Pasted%20image%2020250210212403.png!pkmer)

[Keep the Rhythm](https://obsidian.md/plugins?id=keep-the-rhythm) By _Ezben_

> 用热力图可视化每日字数。

![Weekly-2025-02-09-Pasted image 20250210212234|650](https://cdn.pkmer.cn/images/Weekly-2025-02-09-Pasted%20image%2020250210212234.png!pkmer)

[Easy Test](https://obsidian.md/plugins?id=easy-test) By _Forrest_

> 这个 Obsidian 插件旨在使学习变得更加高效和互动。通过聚焦于笔记中的粗体文本，该插件允许用户将内容的关键部分转换为动态测验格式，从而帮助用户直接在笔记中测试理解程度并巩固所学知识。

[Clipper Catalog](https://obsidian.md/plugins?id=clipper-catalog) By _Greg K._

> 提供强大的目录视图功能，为您剪藏的所有网页文章和内容提供统一管理界面。

[Frontmatter Markdown Links](https://obsidian.md/plugins?id=frontmatter-markdown-links) By _mnaoumov_

> 为文件属性中的 Markdown 链接添加支持。

[pycalc](https://obsidian.md/plugins?id=pycalc) By _pycalc_

> 直接在编辑器中按下回车键即可执行 Python 代码。

![Weekly-2025-02-09-obsidian|650](https://cdn.pkmer.cn/images/Weekly-2025-02-09-obsidian.gif)

[Note Annotations](https://obsidian.md/plugins?id=note-annotations) By _Jan Beck_

> 为您的笔记添加多色高亮标注与批注功能。

![383754037-0e10b330-9e22-40d6-afe4-98f7cf7756ac|650](https://cdn.pkmer.cn/images/383754037-0e10b330-9e22-40d6-afe4-98f7cf7756ac.gif!pkmer)

#### 更新

[Lineage v0.8.1](https://github.com/ycnmhd/obsidian-lineage/releases/tag/0.8.1) By _ycnmhd_

> - **改进**
>     - （工具栏）增加了隐藏工具栏按钮的功能
> - **问题修复**
>     - （侧边栏）无法滚动卡片列表
>     - （侧边栏）无法复制活动侧边栏卡片
>     - （小地图）当文档过大时，小地图显示为空
>     - （对齐分支）修复了其他滚动问题
>     - （设置）修复了模态窗口高度未受限于视图高度的问题
>     - （快捷键）修复了大纲模式下搜索返回空分组的问题
> - **变更**
>     - `shift + double click` 现用于居中活动分支，取代单纯 `double click` 的操作

[Chronos Timeline v1.1.9](https://github.com/clairefro/obsidian-plugin-chronos/releases/tag/1.1.9) By _Claire Froelich_

> - **新增功能**
>     - 增加了对中文（简体和繁体）的支持
> - **问题修复**
>     - 修复了未应用本地化的问题

## 外观

[**Sunbather** Theme](https://github.com/babidisrc/obsidian-sunbather) By _babidisrc_

![Weekly-2025-02-09-Pasted image 20250210233147|650](https://cdn.pkmer.cn/images/Weekly-2025-02-09-Pasted%20image%2020250210233147.png!pkmer)

> 基于 vim-sunbather 主题的极简粉色调主题。

[**Sei** Theme](https://github.com/iwa/Sei) By _iwa_

![Weekly-2025-02-09-Pasted image 20250210214236|650](https://cdn.pkmer.cn/images/Weekly-2025-02-09-Pasted%20image%2020250210214236.png!pkmer)

> Obsidian 的个人主题，设计理念以清晰和简洁为主。

[**OLED.Black** Theme](https://github.com/Inc44/OLED.Black) By _Inc44_

![Weekly-2025-02-09-Pasted image 20250210214111|650](https://cdn.pkmer.cn/images/Weekly-2025-02-09-Pasted%20image%2020250210214111.png!pkmer)

> 一款针对 OLED 显示屏优化的极简纯黑主题，提供最大程度的电池效率和简洁的外观。

[**Zen** Theme](https://github.com/laughmaker/Zen) By _laughmaker_

![Weekly-2025-02-09-Pasted image 20250210213950|650](https://cdn.pkmer.cn/images/Weekly-2025-02-09-Pasted%20image%2020250210213950.png!pkmer)

> Zen 是一个专注于写作而生的现代化主题。去除了影响写作和阅读的冗余元素，大量的运用了高斯模糊效果，具有现代化的简约风格。同时针对中文用户做了专门的优化。

> [!Warning] 声明
> 本栏目致力于为广大 Obsidian 中文用户汇总全面的官方资讯与插件、外观动态。为了保持信息的全面性，我们的**收录并不等同于推荐**，还请各位用户知悉并理解，根据自身需求进行判断和选择。

