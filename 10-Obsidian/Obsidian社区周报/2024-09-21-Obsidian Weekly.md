---
uid: 20240923003205
title: Obsidian Weekly 2024-09-21：v1.7.2 前瞻速递（注意：谨慎更新！）
tags: [Weekly, Obsidian]
description: Obsidian Weekly 2024-09-21：v1.7.2 前瞻速递（注意：谨慎更新！）
author: 淡水鱼,PKMer
type: other
draft: false
editable: false
modified: 20240923003758
---

# Obsidian Weekly 2024-09-21：v1.7.2 前瞻速递（注意：谨慎更新！）

> [!Abstract]
> **统计时间**：2024-09-14 02:00 ~ 2024-09-21 21:00
> **声明**：本栏目灵感来源于 _Eleanor Konik_ 女士于 2021 年 4 月至 2023 年 6 月期间写作发表的一系列 [Obsidian Roundup](https://www.eleanorkonik.com/tag/roundup/) 文章，如有兴趣可关注原作者的个人网站 [Obsidian Iceberg](https://www.eleanorkonik.com/)；内容来源于 Obsidian 官方 Discord 频道和相应项目在 Github 或其独立网站上的信息。描述中可能存在基于个人理解进行的修改，如有错谬欢迎指正。感谢 Obsidian 团队为我们带来如此优秀的软件。

## 官方资讯

### Obsidian v1.7.2 内测版现已推出

#### 桌面端

##### 改进

- 视图现在仅在可见时加载，提升启动性能并减少内存使用。这可能会导致部分插件出现问题，但我们已经为插件开发者发布了 [指南](https://docs.obsidian.md/Plugins/Guides/Understanding+deferred+views)。
- 对 Obsidian URI 的改进 `new` ：
    - 允许使用 `clipboard` 代替 `content` 插入剪贴板内容。
    - 允许使用 `prepend` 代替 `append` 将内容添加到文件顶部。
    - `prepend` 和 `append` 都会尝试合并属性。
- 每日笔记：新增 `daily` Obsidian URI 操作，可自动打开或创建每日笔记。
- 在大型库中重命名文件的速度加快。
- Obsidian Sync：现在可以筛选活动日志。
- 启动调试屏幕现在显示启动时加载和延迟的视图数量。
- 对状态栏填充进行了一些微调。

##### 修复

- 修复了创建脚注后悬停预览没有消失的问题。
- 修复了 Obsidian 有时在退出前未等待文件系统操作完成的错误。
- 画布：改进了平移时的性能。当卡片进入和退出视口时，不应再出现闪烁问题。如果仍然看到相关问题，请尝试切换到默认主题。
- 启动调试屏幕现在在剪贴板结果中包含插件版本。
- 实时预览现在仅转义特殊字符（非字母和数字）。
- 修复了实时预览中列表项开头的转义字符消失的错误。
- 修复了文件无法移动到具有相同名称但大小写不同的文件夹中的问题。
- 修复了带有自定义显示文本的链接在表格下方会导致 Markdown 解析器混淆的问题。
- Vim：已添加来自我们 vim 库（`codemirror-vim`）的最新错误修复，包括修复换行上的箭头导航。

#### 移动端

- 包含到 Obsidian 桌面版 v1.7.2 的所有新功能和错误修复。

##### 修复

- 修复了在隐藏启动画面时短暂出现额外加载条的问题。

#### 已知插件问题/不兼容性

> **注意**：此版本可能会导致一些插件出现故障。以下是截至目前已知的插件不兼容列表。

**Iconize** 无法加载。
File Property Enhancer 无法加载。作者已知情。
**Vimrc** 插件发生了重大更改，ex 命令现在需要以 `<CR>` 结尾。
**Switcher Plus** 无法加载，原因是 API 更改。
**Breadcrumbs v3** 导致 Obsidian 打开时卡死。
**Text Generator** 在尝试读取文件 30 次时会导致 Obsidian 卡死。30 次失败后，出现错误，Obsidian 正常加载。
**Obsidian Github Copilot** 导致 Obsidian 打开时卡死。
**自定义文件资源管理器排序** ~~可能已损坏~~。（已更新，确保更新到 2.1.14）

### 官方浏览器剪藏插件已更新至 [v0.6.0](https://github.com/obsidianmd/obsidian-clipper/releases/tag/0.6.0)

**警告：** 此次更新对追加和每日笔记模板进行了重大改动，且不支持自动迁移。您需要手动更新所有涉及追加内容的模板中的笔记标题字段。此外，此更新要求追加和每日笔记模板在 Obsidian 1.7.2 版本上运行，目前该版本可在 [早期访问](https://help.obsidian.md/Obsidian/Early+access+versions) 中获取。

#### 新功能

- 新增两种模板行为选项：`追加到现有笔记顶部` 和 `追加到每日笔记顶部`，可以将内容添加到笔记的顶部而不是底部。
- 每日笔记模板不再需要指定笔记标题和路径，因为从 1.7.2 版本起，Obsidian 能自动检测每日笔记的位置。
- 属性现在可以用于所有模板行为，且会自动与现有笔记的属性合并（如果有的话）。
- 新增 `link` 过滤器，用于创建 Markdown 链接。
- 剪藏代码块时，如果定义了编程语言，将自动添加对应语言。

#### 改进

- 如果在页面部分加载时打开扩展，当内容加载完成后，它将自动刷新。
- 支持将 MathJax 转换为 Obsidian 的数学公式块。
- 改进了 `replace` 过滤器，特别是在处理特殊字符（如 `:`）时。
- 为匹配 Obsidian 格式，YAML 前置数据中的 `date` 和 `datetime` 值不再使用引号。
- 优化了代码块的转义和缩进。

## 插件新闻

### 社区插件

#### 新增

[Immich](https://obsidian.md/plugins?id=immich) By _Talal Abou Haiba_

> 该插件允许用户轻松地将自托管的 Immich 实例中的图像插入到 Obsidian 笔记中。

[Morgen Tasks](https://obsidian.md/plugins?id=morgen-tasks) By _Morgen AG_

> 使用 Morgen 在任何日历中计划、安排时间并跟踪您库中的任务。

[Print](https://obsidian.md/plugins?id=print) By _Marijn Bent_

> 一个添加打印操作的简单插件。

![Weekly-2024-09-21-0dfd0215-ec97-431a-b4e8-42fa73bc0dd2|650](https://cdn.pkmer.cn/images/Weekly-2024-09-21-0dfd0215-ec97-431a-b4e8-42fa73bc0dd2.gif!pkmer)

[Edit mode switch](https://obsidian.md/plugins?id=shortcut-edit-mode) By _Mara-Li_

> 在文件标题中添加一个按钮，在编辑模式下，可以在源代码和实时预览之间切换。

[Journaling](https://obsidian.md/plugins?id=journaling) By _Ordeeper_

> 以类似于日志的格式查看每日笔记，类似于 Logseq。它通过将每日笔记合并到连续的日记视图中来增强笔记组织并促进更好的反思。

![Weekly-2024-09-21-Pasted image 20240922235957|650](https://cdn.pkmer.cn/images/Weekly-2024-09-21-Pasted%20image%2020240922235957.png!pkmer)

[Onto Tracker](https://obsidian.md/plugins?id=onto-tracker) By _Jacob Hart_

> 根据本体管理项目。
> 创建一个 Obsidian 资料库，用于跟踪计算机上文件夹的内容。文件根据用户定义的规则按照给定的本体进行分类。这些内容随后可以被解析以执行诸如上传到 CMS 等任务（相关的 Python 脚本可以参考 [此处](https://github.com/jdchart/onto-tracker-parse)）。

[Mesh AI](https://obsidian.md/plugins?id=mesh-ai) By _Chasebank87_

> 允许您将 AI 提示存储为模板，并与大多数提供商无缝集成。

[Auto Periodic Notes](https://obsidian.md/plugins?id=auto-periodic-notes) By _Jamie Hurst_

> 在后台自动创建新的定期笔记，并允许将它们固定在打开的选项卡中；支持日报、周报、月报、季报、年报。需要 [周期性注释](https://github.com/liamcain/obsidian-periodic-notes) 插件。

[Nexus AI Chat Importer](https://obsidian.md/plugins?id=nexus-ai-chat-importer) By _Superkikim_

> 从 ChatGPT 导出文件导入对话。

[Diarian](https://obsidian.md/plugins?id=diarian) By _Erika Gozar_

> 一体化日记工具包。此插件将 [Diarium](https://diariumapp.com/) 日记应用程序的功能添加到我们都知道和喜爱的笔记应用程序中。

[Tokenz](https://obsidian.md/plugins?id=tokenz) By _Ferenc Moricz_

> 在文档中插入任意类型的短代码。您可以添加表情符号（例如：:)、;)、…）或 Emoji 表情（例如：:smile:、:wink:、…）。未来会添加更多代码映射，用户也可以自行创建。

![Weekly-2024-09-21-359675359-6e20d9ea-bb23-4082-ba0b-686987a4d989|650](https://cdn.pkmer.cn/images/Weekly-2024-09-21-359675359-6e20d9ea-bb23-4082-ba0b-686987a4d989.gif!pkmer)

[Canvas LMS Task Importer](https://obsidian.md/plugins?id=canvas-task-importer) By _jordaeday_

> 从 Canvas LMS 导入作业。

[Highlight active folder section](https://obsidian.md/plugins?id=highlight-active-folder-section) By _Lukas Collier_

> 在文件资源管理器中突出显示活动文件夹部分和标题。

![Weekly-2024-09-21-Pasted image 20240922234254|650](https://cdn.pkmer.cn/images/Weekly-2024-09-21-Pasted%20image%2020240922234254.png!pkmer)

#### 更新

[Vertical Tabs v0.6.9](https://github.com/oxdc/obsidian-vertical-tabs/releases/tag/0.6.10) By _oxdc_

> - 当打开隐藏组中的标签时，将自动显示该组。
> - 组名称在点击离开时会自动保存。
> - 排序策略现在会在重启后保持不变。
> - 启用自动排序时，将禁用手动排序。
> - 添加了自动排序的指示器。
> - 所有已知的错误均已修复！
> - **重要：更新后需要重启 Obsidian。**

[File Share Update v1.1.0](https://github.com/muckmuck96/obsidian-file-share/releases/tag/1.1.0)

> - **文件队列：** 无缝发送多个文件给朋友，无需等待接受或拒绝。
> - **嵌入链接扫描：** 自动扫描传出文件中的嵌入链接并将其包含在文件队列中，确保它们与您的文件一起发送。

[Note Splitter v1.2.1](https://github.com/decaf-dev/obsidian-note-splitter/releases/tag/1.2.1) By _DecafDev_

> - **修复**
> 	- 清理 Windows 操作系统的文件名
> 	- 使 `truncateFileName` 能正确处理以链接结尾的文件名
> **文档**
> 	- 在文档中添加被移除的字符说明

[Vault Explorer v1.46.0](https://github.com/decaf-dev/obsidian-vault-explorer/releases/tag/1.46.0) By _DecafDev_

> - **功能**
> 	- 在右键菜单中添加删除选项
> 	- 添加确认删除设置
> 	- 将订阅视图设为非高级功能
> 	- 简化表格列，仅保留 `Name` 和 `Tags`
> - **修复**
> 	- 修复列表中 `Show tags` 设置不起作用的问题
> 	- 在禁用 `Show tags` 时，让 `ListItem` 以全宽度渲染标题
> - **重构**
> 	- 移除 `viewOrder` 数组，改为为每个视图添加一个 `order` 属性

### PKMer 出品

> [!INFO]
> **PKMer**（[PKMer.cn](https://pkmer.cn/)、[PKMer.net](https://pkmer.net/)）旨在打造东半球强大的知识管理社区。Personal Knowledge Management (PKM) + "er"，其中 "er" 表示人，专注、喜爱个人知识管理工作、追求效率的人们，都可以划入这个行列，希望社区凝聚更多这样的人。

#### [File Property Enhancer](https://github.com/Quorafind/Obsidian-File-Property-Enhancer/releases/tag/1.1.2) 已修复 Obsidian 1.7.2 的加载问题

使用此插件，您可以向文件属性添加图标，还可以自定义文件属性的显示。请注意，该插件仍处于开发的早期阶段，可能存在一些错误。

## 外观

[**Minimal Edge** Theme](https://github.com/Elhary/Obsidian-Minimal-Edge) By _Elhary_

![Weekly-2024-09-21-Pasted image 20240922233611|650](https://cdn.pkmer.cn/images/Weekly-2024-09-21-Pasted%20image%2020240922233611.png!pkmer)

> 时尚简约的黑曜石主题，专为那些欣赏简洁线条和专注工作空间的人士而设计。

[**Rose Red** Theme](https://github.com/tu2-atmanand/RoseRed-ObsidianTheme) By _Atmanand Gauns_

![Weekly-2024-09-21-Pasted image 20240922233506|650](https://cdn.pkmer.cn/images/Weekly-2024-09-21-Pasted%20image%2020240922233506.png!pkmer)

> Obsidian 的红色渐变深色主题，兼容 Obsidian V1.4.13 及以上版本。

> [!Warning] 声明
> 本栏目致力于为广大 Obsidian 中文用户汇总全面的官方资讯与插件、外观动态。为了保持信息的全面性，我们的**收录并不等同于推荐**，还请各位用户知悉并理解，根据自身需求进行判断和选择。

