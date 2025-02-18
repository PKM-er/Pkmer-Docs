---
uid: 20250218181232
title: Obsidian Weekly 2025-02-16：Obsidian v1.8.6/7 前瞻；快捷键新选择，锁定插件版本及定制右键菜单
tags: [Weekly, Obsidian]
description: Obsidian Weekly 2025-02-09：开工大吉！1.8 版本仍在高速迭代中！
author: 淡水鱼,PKMer
type: other
draft: false
editable: false
modified: 20250218181237
---

# Obsidian Weekly 2025-02-16：Obsidian v1.8.6/7 前瞻；快捷键新选择，锁定插件版本及定制右键菜单

> [!Abstract]
> **统计时间**：2025-02-09 21:00 ~ 2025-02-16 21:00
> **声明**：本栏目灵感来源于 _Eleanor Konik_ 女士于 2021 年 4 月至 2023 年 6 月期间写作发表的一系列 [Obsidian Roundup](https://www.eleanorkonik.com/tag/roundup/) 文章，如有兴趣可关注原作者的个人网站 [Obsidian Iceberg](https://www.eleanorkonik.com/)；内容来源于 Obsidian 官方 Discord 频道和相应项目在 Github 或其独立网站上的信息。描述中可能存在基于个人理解进行的修改，如有错谬欢迎指正。感谢 Obsidian 团队为我们带来如此优秀的软件。

## 官方资讯

### Obsidian 桌面端 v1.8.6 、移动端 v1.8.7 内测版现已发布

#### 桌面端

##### 改进

- 改进了“插入分隔线”命令，在非空行上使用时表现更加直观。
- 应用加载时现会显示标题栏，支持在 Windows 和 Linux 上拖动、最小化、最大化和关闭窗口。
- 优化了树状视图的渲染性能。

##### 修复问题

- 修复了将文件拖拽至属性字段时旧值重新出现的问题。
- 网页查看器：修复了“保存到库”失败但未显示错误的 bug。
- 修复了右键点击历史导航按钮时无意中触发导航的问题。
- 修复了从弹出窗口打开页面预览时立即隐藏的 bug。
- 设置：修复了附件文件夹字段未显示所选文件夹名称的问题。
- 修复了关闭带有弹出窗口的库后，重新启动 Obsidian 时无法重新打开库的问题。
- 大纲：修复了启用“自动显示当前章节”后，快速点击不同标题时滚动位置异常的问题。
- 修复了 `Option-Shift-M` 快捷键无法使用的问题。
- 修复了阅读模式下打开文件时标题未能正确折叠的问题。
- 修复了折叠 API 的变更导致部分插件功能异常的问题。
- 修复了在新分屏或新窗口中打开文件时编辑器未获得焦点的问题。

#### 移动端

包含了直至 [Obsidian 桌面端 v1.8.6](https://obsidian.md/changelog/2025-02-12-desktop-v1.8.6/) 所有新功能和 bug 修复。

##### 修复问题

- 修复了 iOS 处于锁定模式时文件恢复和同步崩溃的问题。
- “切换左侧边栏”和“切换右侧边栏”命令现已在手机上可用。
- 修复了平板设备上侧边栏固定功能不可用的回归问题。
- 修复了长按时全局搜索和反向链接未显示菜单的 bug。

## 插件新闻

### 社区插件



#### 新增

[Media Companion](https://obsidian.md/plugins?id=media-companion) By _Nick de Bruin_

> 创建一个可搜索的图库，并为图片、视频等附件生成 sidecar 文件。sidecar 文件允许你为媒体文件添加笔记和标签。

![Weekly-2025-02-16-Pasted image 20250218165403|650](https://cdn.pkmer.cn/images/Weekly-2025-02-16-Pasted%20image%2020250218165403.png!pkmer)

[Spacekeys](https://obsidian.md/plugins?id=spacekeys) By _Jared Lumpe_

> 基于简单按键序列执行命令，灵感来源于 [Spacemacs](https://www.spacemacs.org/) Emacs 发行版。这种方式让你无需分配和记忆数十个复杂快捷键，就能通过键盘快速访问 Obsidian 的大部分功能。
>
> 其工作原理是：先激活一个用户可自定义的“领导键”（例如 Ctrl + M），然后输入特定命令的按键序列，例如 `i l` 表示 **i**nsert → **l**ink。
>
> 这种方式相比传统快捷键具有以下优势：
>
> - 更易记忆：按键基于简单助记符进行分配。
> - 更易学习：激活领导键后，会显示包含所有可用命令的菜单。相似命令归类在相同前缀键下，如 f 代表 **F**ile，w 代表 **W**indow/**W**orkspace，以子菜单形式直观展示。
> - 能分配大量命令而不显混乱（Obsidian 大部分内置命令默认未分配标准快捷键，但大部分已包含在 Spacekey 的默认键映射中）。
>
> 此外，该键映射支持自定义，可包含任何可分配传统快捷键的命令，包括其他插件定义的命令。

![Weekly-2025-02-16-03492a81-8fe5-4ac2-bd48-0741e0403c9c|650](https://cdn.pkmer.cn/images/Weekly-2025-02-16-03492a81-8fe5-4ac2-bd48-0741e0403c9c.gif!pkmer)

[Tag Tactician](https://obsidian.md/plugins?id=tag-tactician) By _Scott Tomaszewski_

> 一次性批量编辑多个笔记的属性标签。你可以在多个文件中添加或删除标签，预览拟定的更改，并有选择性地对单个笔记应用更新——所有操作均在 Obsidian 内完成。

![Weekly-2025-02-16-Pasted image 20250218163246|650](https://cdn.pkmer.cn/images/Weekly-2025-02-16-Pasted%20image%2020250218163246.png!pkmer)

[InlineAI](https://obsidian.md/plugins?id=inlineai) By _FBarrca_

> 在编辑器中直接提供 AI 驱动的建议、上下文编辑和高级文本转换功能。

![Weekly-2025-02-16-InlineAI|650](https://cdn.pkmer.cn/images/Weekly-2025-02-16-InlineAI.gif!pkmer)

[WhatsApp export note](https://obsidian.md/plugins?id=whatsapp-export-note) By _JoaoEmanuell_

> 通过将 Markdown 转换为 WhatsApp 支持的格式，轻松将 Obsidian 笔记导出至 WhatsApp。

[Plugin REPL](https://obsidian.md/plugins?id=plugin-repl) By _readwithai_

> 该插件为 Obsidian 添加了类似 Emacs 的 REPL（读 - 求值 - 输出循环）功能。它允许你直接在文档中执行 JavaScript，并能与 Obsidian 的插件 API 进行交互，使 Obsidian 可以执行操作（例如移动光标、插入文本、打开文件等）。你还可以用 JavaScript 定义新的命令。
> 这在开发插件或进行“轻量级”脚本编写时非常有用，无需自己开发完整的插件。
> 此外，插件还提供了一系列便捷函数，部分灵感来源于 Emacs，以加速直观功能的开发。

![Weekly-2025-02-16-3e04307e-e6c6-4507-963f-0d1c3acf0dc0|650](https://cdn.pkmer.cn/images/Weekly-2025-02-16-3e04307e-e6c6-4507-963f-0d1c3acf0dc0.gif!pkmer)

[NetClip](https://obsidian.md/plugins?id=net-clip) By _Elhary_

> 剪辑、保存、搜索和浏览网页。

![Weekly-2025-02-16-Pasted image 20250217221253|650](https://cdn.pkmer.cn/images/Weekly-2025-02-16-Pasted%20image%2020250217221253.png!pkmer)

![Weekly-2025-02-16-Pasted image 20250217221310|650](https://cdn.pkmer.cn/images/Weekly-2025-02-16-Pasted%20image%2020250217221310.png!pkmer)

[Context Command Hider](https://obsidian.md/plugins?id=context-command-hider) By _Mara-Li_

> 隐藏右键菜单中的任何命令，包括社区插件的命令。

[WhatsApp backup importer](https://obsidian.md/plugins?id=whatsapp-backup) By _Luigi Cerone_

> 将导出的 WhatsApp 聊天记录档案（.zip 格式）导入你的库。该插件会提取并处理所有聊天消息和附件（例如图片和视频），并将它们整齐地放置在你选择的文件夹中，同时附带指向附件的链接。

[Hephaistos Importer](https://obsidian.md/plugins?id=hephaistos-importer) By _Skallaturi_

> 从 Starfinder RPG 角色网站 Hephaistos 导入主要属性。

[Clone Vault](https://obsidian.md/plugins?id=clone-vault) By _Sebastian Baroni_

> 通过复制当前库的 **设置**、**文件夹结构**，并选择性地复制部分文件夹（例如模板文件夹），来创建一个新的 Obsidian 库。

[Image Preview on Icon Hover](https://obsidian.md/plugins?id=image-preview-on-icon-hover) By _rama1997_

> 在各种 UI 图标上悬停时，添加自定义图像预览。

![Weekly-2025-02-16-1c0ca9bd-5429-4195-afb0-09a0c86b0c1e|650](https://cdn.pkmer.cn/images/Weekly-2025-02-16-1c0ca9bd-5429-4195-afb0-09a0c86b0c1e.gif!pkmer)

[Dataview Autocompletion](https://obsidian.md/plugins?id=dataview-autocompletion) By _Daniel Bauer_

> 增强了广受欢迎的 [Dataview 插件](https://github.com/blacksmithgu/obsidian-dataview) 功能，在编辑器中为元数据字段提供自动补全建议，便于重用现有字段，有效减少输入错误。

![Dataview Autocompletion|650](https://cdn.pkmer.cn/images/Dataview%20Autocompletion.gif)

[Kikijiki Habit Tracker](https://obsidian.md/plugins?id=kikijiki-habit-tracker) By _KIKIJIKI_

> 一个简单的习惯追踪器。

![Pasted image 20250217154613|650](https://cdn.pkmer.cn/images/Pasted%20image%2020250217154613.png!pkmer)

[Plugin Update Locker](https://obsidian.md/plugins?id=plugin-update-locker) By _Lemon695_

> 防止 Obsidian 中的指定插件更新，从而确保这些插件在特定版本下稳定运行，避免因更新引起的兼容性问题或功能变动。

[AI Revisionist](https://obsidian.md/plugins?id=revisionist) By _Synaptic Labs_

> 在 Obsidian 内无缝提供 AI 驱动的文本修订功能。选中文本、调整指令，即刻获得精致、专业的修改建议。

[BibDesk Integration](https://obsidian.md/plugins?id=bibdesk-integration) By _Andrea Alberti_

> 此插件将 MacOS Bibdesk 应用程序与 Obsidian 中的 [PDF++](https://obsidian.md/plugins?id=pdf-plus) 插件集成在一起，使您能够直接从黑曜石管理和打开与 Bibdesk 条目相关联的 PDF。它支持外部 BibTeX 文件，并利用 BibDesk 的 `bdsk-file-<NUMBER>` 字段充当 MacOS 书签，即使文件被重命名或移动，也能实现无缝访问。

#### 更新

[Vertical Tabs v0.15.0](https://github.com/oxdc/obsidian-vertical-tabs/releases/tag/0.15.0) By _oxdc_

> - **更新内容：分组视图与链接文件夹**
>     - 全新推出的 **分组视图** 让您能以全新的方式高效管理和浏览标签页，提供三种模式：
>         - **连续视图：** 无缝滚动多个标签页，就像阅读一篇长文档中的各个部分。
>         - **列式视图：** 标签页并排排列，支持横向滚动，便于对比查看。
>         - **任务控制视图：** 快速预览分组内所有标签页，迅速定位所需笔记 _（双击或按 ESC 键退出）_。
>     - 通过 **链接文件夹** 功能，你可以立即将一个文件夹作为标签组打开——可选择递归方式或非递归方式。这在与 **连续视图** 搭配使用时尤其实用，例如，将 **每日笔记** 文件夹作为分组打开，在连续滚动中编辑多篇笔记。你还可以自定义一次加载的笔记数量及其加载顺序，以适应你的工作流程。
> - **改进**
>     - **更智能的标签去重：** 现在，垂直标签会估算标签创建时间，大幅提升去重准确性。
>     - **更佳的内部链接导航：** 点击内部链接后，导航会在标签去重后直接跳转到特定部分或标题。
>     - **更精确的去重范围：** 去重现在仅限于笔记、画布、PDF、图片和视频，从而避免与其他插件发生冲突。
>     - **自定义禅模式：** 新增选项，让用户决定在开启“禅模式”时是否自动启用“仅显示活动标签”。
>     - **悬浮编辑器兼容性：** 为确保全面兼容，悬浮编辑器的标签现已隐藏。
>     - **智能作曲器兼容性：** 垂直标签现已与智能作曲器完美兼容。
> - **Bug 修复**
>     - 修复了在使用“IDE 模式”时开发者控制台出现的“缺失字段”错误。
>     - 防止了置顶标签被去重的问题。
>     - 解决了切换“禅模式”时会覆盖“仅显示活动标签”设置的问题。
>     - 修复了重启 Obsidian 后“列式视图标签宽度”设置未被保留的 bug。

![Pasted image 20250217152909|650](https://cdn.pkmer.cn/images/Pasted%20image%2020250217152909.png!pkmer)

[Canvas2Document v1.3.0](https://github.com/slnsys/obsidian-canvas2document/releases/tag/1.3.0) By _sInsys_

> - **改进**
>     - 支持读取 MD 文档中嵌入的 YAML 前置数据（可通过设置切换）
>     - 支持读取白板中的边缘标签（可通过设置切换）
>     - 为 Obsidian 侧边栏添加了操作按钮
>     - 支持转换嵌入的在线链接，与其他媒体类型一样
> - **修复/测试**
>     - 在 Linux 和 MacOS 上进行了验证测试
>     - 优化了嵌入媒体（图片、PDF、在线链接）的显示尺寸
>     - 添加了设置页面

## 外观

[**Minimal Red** Theme](https://github.com/AfonsoMiranda02/MinimalRed-Obsidian-Theme) By _AfonsoMiranda02_

![Weekly-2025-02-16-Pasted image 20250217215556|650](https://cdn.pkmer.cn/images/Weekly-2025-02-16-Pasted%20image%2020250217215556.png!pkmer)

> 与 PC，平板电脑和移动设备兼容。

## PKM 相关知识推荐

[《大语言模型》作者：赵鑫，李军毅，周昆，唐天一，文继荣](https://github.com/LLMBook-zh/LLMBook-zh.github.io)

> 一本系统全面的入门级技术书籍，适用于具有深度学习基础的高年级本科生以及低年级研究生，有助于深入了解大语言模型技术的现状和未来趋势。

![Weekly-2025-02-16-Pasted image 20250218172949|650](https://cdn.pkmer.cn/images/Weekly-2025-02-16-Pasted%20image%2020250218172949.png!pkmer)
