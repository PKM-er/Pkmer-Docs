---
uid: 20250502002636
title: Obsidian Weekly 2025-04-27：Obsidian 更新至 v1.8.10 & 智能复制、自定义快捷引用与类 Notion 查询
tags: [Weekly, Obsidian]
description: Obsidian Weekly 2025-04-27：Obsidian 更新至 v1.8.10 & 智能复制、自定义快捷引用与类 Notion 查询
author: 淡水鱼,PKMer
type: other
draft: false
editable: false
modified: 20250502002700
---

# Obsidian Weekly 2025-04-27：Obsidian 更新至 v1.8.10 & 智能复制、自定义快捷引用与类 Notion 查询

> [!Abstract]
> **统计时间**：2025-04-20 21:00 ~ 2025-04-27 21:00
> **声明**：本栏目灵感来源于 _Eleanor Konik_ 女士于 2021 年 4 月至 2023 年 6 月期间写作发表的一系列 [Obsidian Roundup](https://www.eleanorkonik.com/tag/roundup/) 文章，如有兴趣可关注原作者的个人网站 [Obsidian Iceberg](https://www.eleanorkonik.com/)；内容来源于 Obsidian 官方 Discord 频道和相应项目在 Github 或其独立网站上的信息。描述中可能存在基于个人理解进行的修改，如有错谬欢迎指正。感谢 Obsidian 团队为我们带来如此优秀的软件。

## 官方资讯

### Obsidian v1.8.10 公共版现已发布

#### 桌面端

##### 已修复问题

- 修复有序列表排序错误的问题（例如列表项含前导空格或被相邻引用块包裹的情况）。
- 仅桌面端：修复调整窗口大小时的卡顿问题。

#### 移动端

包含截至 [Obsidian Desktop v1.8.10](https://obsidian.md/changelog/2025-04-22-desktop-v1.8.10/) 的所有新功能与问题修复。

##### 功能优化

- Android 端现可在不授予「所有文件」权限的情况下使用，但仅限将库存储在应用存储中。
- 设置页顶部可能出现反馈请求横幅（仅高频使用的用户可见，关闭后不再提示）
- 优化新手指引流程，明确「同步」为可选功能并简化创建库入口

##### 已修复问题

- 新手指引流程现包含共享同步库
- 修复应用关闭时 `obsidian://` 协议链接失效问题
- 键盘关闭后立即显示导航栏
- Android 端关闭键盘后保持编辑器焦点（修复语音输入等功能）

## 插件新闻

### 社区插件

#### 新增

[Open Tab Settings](https://obsidian.md/plugins?id=open-tab-settings) By _jesse-r-s-hines_

> 新增设置项：默认在新标签页打开并防止重复标签页。

[Easy Copy](https://obsidian.md/plugins?id=easy-copy) By _Moy_

> 基于光标位置自动识别并复制各类内容（含行内代码、加粗文本、高亮文本、斜体文本、块 ID 及标题链接），亦可快速生成指向标题或内容块的优雅链接。

![9ac01be9-cb38-4d09-8bfd-b67567be5fce|650](https://cdn.pkmer.cn/images/9ac01be9-cb38-4d09-8bfd-b67567be5fce.gif!pkmer)

[ProgressTracker](https://obsidian.md/plugins?id=progress-tracker) By _Van Nam_

> 使用侧边栏中的可视进度条跟踪任务完成情况，自动更新列看板

![Pasted image 20250501183758|650](https://cdn.pkmer.cn/images/Pasted%20image%2020250501183758.png!pkmer)

[Mention Things](https://obsidian.md/plugins?id=mention-things) By _Philipp Stracker_

> 新增通过自定义符号提及其他笔记的功能。最常用于使用 `@` - 提及人名：

![Pasted image 20250501180253|650](https://cdn.pkmer.cn/images/Pasted%20image%2020250501180253.png!pkmer)

[Cubox](https://obsidian.md/plugins?id=cubox-sync) By _delphi-2015_

> 同步您的 Cubox 文章和笔记。

[Interactive Ratings](https://obsidian.md/plugins?id=interactive-ratings) By _peritus_

> 在笔记中添加可点击更新的交互式评分符号。

![screencast|650](https://cdn.pkmer.cn/images/screencast.gif!pkmer)

[Come Down](https://obsidian.md/plugins?id=come-down) By _mntno_

> 下载笔记中嵌入的外部图片，方便您重新打开笔记时重复使用。下载（缓存）后，即使您处于离线状态或在其他设备上打开已同步的 Vault 副本，图片仍会加载。

[Word Frequency](https://obsidian.md/plugins?id=word-frequency) By _Mike Rodarte_

> 统计当前笔记中的单词数量，并在侧边栏显示词频统计。

[Auto Bullet](https://obsidian.md/plugins?id=auto-bullet) By _takitsuba_

> 当在 Obsidian 中行首输入空格或 Tab 时，自动插入项目符号（"- "）。

[Minimal Quiz](https://obsidian.md/plugins?id=minimal-quiz) By _Lutu-gl_

> 针对当前笔记快速创建基于 Markdown 的测验。简单、直观且功能全面——类似于 Anki 或 Quizlet 中的抽认卡！

![Pasted image 20250501125718|650](https://cdn.pkmer.cn/images/Pasted%20image%2020250501125718.png!pkmer)

[QueryDash](https://obsidian.md/plugins?id=querydash) By _lwx_

> 参考 Dataview，添加搜索、排序、分页功能，类似 Notion。

![Pasted image 20250501004202|650](https://cdn.pkmer.cn/images/Pasted%20image%2020250501004202.png!pkmer)

[Digital Sticky Notes](https://obsidian.md/plugins?id=digital-sticky-notes) By _dgggg_

> 一个将实体便利贴电子化的轻量插件，帮助您快速保存、整理和查找临时笔记。

![Weekly-2025-04-27-Pasted image 20250501003927|650](https://cdn.pkmer.cn/images/Weekly-2025-04-27-Pasted%20image%2020250501003927.png!pkmer)

[Folder Navigator](https://obsidian.md/plugins?id=folder-navigator) By _wenlzhang_

> 使用模糊搜索快速导航到库中的文件夹。

[Crosslink Advanced](https://obsidian.md/plugins?id=crosslink-advanced) By _d7sd6u_

> 使用文件夹和符号链接系统 (ftags) 标记文件。

[Hide Index Files](https://obsidian.md/plugins?id=hide-index-files) By _d7sd6u_

> 在文件资源管理器中隐藏文件夹笔记。与 [folder-notes](https://github.com/LostPaul/obsidian-folder-notes) 配合使用，可获得完整体验。

![Weekly-2025-04-27-Pasted image 20250501002443|650](https://cdn.pkmer.cn/images/Weekly-2025-04-27-Pasted%20image%2020250501002443.png!pkmer)

[Large Language Models](https://obsidian.md/plugins?id=large-language-models) By _eharris128, r-mahoney, & jsmorabito_

> 支持通过远程服务商（OpenAI、Claude、Gemini）和本地 LLMs（经由 GPT4ALL）访问语言模型。可在侧边栏、主窗口和新添加的浮动操作按钮弹出窗口中与模型交互。

![Pasted image 20250426230839|650](https://cdn.pkmer.cn/images/Pasted%20image%2020250426230839.png!pkmer)

[On This Day I](https://obsidian.md/plugins?id=on-this-day-i) By _Ben Stuart_

> 通过「每日笔记」功能汇总历史日历日期。

![3fc06481-e118-4993-816a-2ad85a5115d8|650](https://cdn.pkmer.cn/images/3fc06481-e118-4993-816a-2ad85a5115d8.gif!pkmer)

[Codeless Heatmap Calendar](https://obsidian.md/plugins?id=codeless-heatmap-calendar) By _Behnam Aghajani_

> 基于 Toggl 等多源数据的全功能活动可视化工具。

![Pasted image 20250425215034|650](https://cdn.pkmer.cn/images/Pasted%20image%2020250425215034.png!pkmer)

#### 更新

[Lineage v0.8.4](https://github.com/ycnmhd/obsidian-lineage/releases/tag/0.8.4) By _ycnmhd_

> - **问题修复**
> 	- (links) 块链接与标题链接功能异常
> 	- (view) 非活动文件视图在相同文件活动视图保存时触发 `document-reload`
> 	- (ribbon) 切换固定视图时生成空白新窗口
> 	- (dnd) 编辑时拖放外部文本导致重复插入
> 	- (minimap) `single-char` 元素破坏 `double-tag` 元素
> 	- (minimap) `tag` 后空格未重置元素类型
> 	- (minimap) 缩略图初始化时自动滚动到底部
> 	- (minimap) 文档高度变化后画布高度未更新
> 	- (hotkeys) `create-card-after-parent` 将卡片置入组末尾
> 	- (hotkeys) 粘贴分支的根卡片反向选中影响即时移动操作
> 	- (zoom) `vim-cursor` 解决方案影响侧边栏卡片
> 	- (zoom) `fit-branch` 测量包含侧边栏卡片
> 	- (html-elements-format) 用 `<span></span>` 替换 `<span/>` 以修复 Obsidian 链接解析问题
> 	- (html-elements-format) 链接预览中渲染 `span` 元素
> - **功能优化**
> 	- (search) 新增复制/剪切搜索结果功能
> 	- (card context-menu) 新增 `sort subsections` 操作
> 	- (view context-menu) 新增 `eject document` 操作
> 	- (settings) 新增 `default link behavior` 设置项
> 	- (settings) 新增 `headings font size` 设置项
> 	- (hotkeys) 新增 `select all sections` 快捷键
> 	- (hotkeys) 支持删除/剪切所有卡片
> 	- (rules) 新增 `global rules`
> 	- (rules) 支持规则复制功能
> 	- (rules) 新增 `self-or-*` 目标类型
> - **功能调整**
> 	- (toolbar) 将 `history` 按钮移至左上角，`zoom` 按钮移至右下角
> 	- (lang) 使用 `section` 替代 `card` 术语
> 	- (settings) 采用垂直标签页布局替代平铺列表
> 	- (hotkeys) 将 `undo` / `redo` 快捷键调整为 `mod+z` / `mod+shift+z`
> 	- (cards) 移除 `has-children` 指示器
> 	- (card context-menu) 将 `export column` 操作替换为 `export selection`

[Linter v1.29.0 ](https://github.com/platers/obsidian-linter/releases/tag/1.29.0) By _Victor Tao_

> 本次发布主要将数月来处于测试阶段的核心逻辑推向正式版。YAML Sort 中增强 YAML 兼容性的修复已合并，部分功能仍使用正则表达式提取 YAML 值，但后续将逐步迁移至新 YAML 包。此外修复了本地正常但 GitHub 异常的 Mermaid 图表文档问题。
>
> - **主要变更**
>     - **功能改进**
>         - 将 YAML 解析引擎从 `js-yaml` 替换为 `yaml` 包
>         - 新增通过右键菜单和命令忽略指定文件/文件夹的功能
>     - **问题修复**
>         - 修正表格识别逻辑，避免误判纯虚线行
>         - 修复尾部空格导致列表项/复选框异常问题
>         - 修复存在子列表时列表忽略功能过度过滤问题
>         - 修复 YAML 时间戳未正确处理 UTC 格式问题
>         - 更新 Linter 工作原理的 Mermaid 图表文档
>         - 尝试移除列表编号以修复图表渲染问题

[Last Position v0.2.6](https://github.com/Saktawdi/obsidian-last-position/releases/tag/0.2.6) By _saktawdi_

> 修复了可能导致 Obsidian 启动慢的问题。

[Copilot v2.8.9](https://github.com/logancyang/obsidian-copilot/releases/tag/2.8.9) By _Logan Yang_

> 支持 GPT 4.1 系列模型、o4-mini 及新增 xAI 供应商！另一重大更新是画布支持！可通过直接引用 `[[]]` 或聊天上下文菜单的 `+` 按钮将画布加入对话语境！Copilot 甚至能解析画布组结构！
>
> - **功能改进**
>     - 实现白板适配器
>     - 支持 GPT 4.1 系列、o4-mini 及 grok 3
>     - 调整插入/复制按钮布局并增加间距
>     - 新增开关以禁用自定义提示模板
>     - 支持 Ollama API 密钥认证
>     - 重构：优化部分用户体验
>     - 增强自定义命令功能（v3）
>     - 向 broca 调用传递项目状态
>     - 添加更新通知系统
>     - 更新 broca 请求协议
> - **问题修复**
>     - 修复 Azure OpenAI 聊天模型 baseURL 构建逻辑
>     - 修复移动端回车键未换行问题
>     - 修复笔记内图像处理逻辑

### 未上架插件

> [!Caution]
> **注意**：下列插件尚未通过代码审查，因而未在 _ 社区插件市场 _ 上架。在安装前，请确保您已充分了解并接受其中涉及的潜在安全风险。

[Simple Table Math](https://github.com/eatcodeplay/obsidian-simple-table-math) By _eatcodeplay_

> 在 Markdown 表格中执行数学运算。在编辑时动态计算并于表格内实时显示结果。支持通过键盘快捷键或右键菜单将结果复制至剪贴板。

> [!Warning] 声明
> 本栏目致力于为广大 Obsidian 中文用户汇总全面的官方资讯与插件、外观动态。为了保持信息的全面性，我们的**收录并不等同于推荐**，还请各位用户知悉并理解，根据自身需求进行判断和选择。

