---
uid: 20250818214904
title: Obsidian Weekly 2025-08-10：Obsidian v1.9.10 内测版已发布！
tags: [Weekly, Obsidian]
description: Obsidian Weekly 2025-08-10：Obsidian v1.9.10 内测版已发布！
author: 淡水鱼,PKMer
type: other
draft: false
editable: false
modified: 20250818214955
---

# Obsidian Weekly 2025-08-10：Obsidian v1.9.10 内测版已发布

> [!Abstract]
> **统计时间**：2025-08-03 21:00 ~ 2025-08-17 21:00
> **声明**：本栏目灵感来源于 _Eleanor Konik_ 女士于 2021 年 4 月至 2023 年 6 月期间写作发表的一系列 [Obsidian Roundup](https://www.eleanorkonik.com/tag/roundup/) 文章，如有兴趣可关注原作者的个人网站 [Obsidian Iceberg](https://www.eleanorkonik.com/)；内容来源于 Obsidian 官方 Discord 频道和相应项目在 Github 或其独立网站上的信息。描述中可能存在基于个人理解进行的修改，如有错谬欢迎指正。感谢 Obsidian 团队为我们带来如此优秀的软件。

## 官方资讯

### Obsidian v1.9.10 内测版已发布

#### v1.9.7 桌面版

##### 改进

- Bases：自动补全功能现支持公式属性
- Bases：新增 `file.backlinks` 属性
- Bases：优化大型图片渲染性能
- Bases：卡片视图现可显示图片（要求 " 图片属性 " 为包含图片路径的文本属性，路径支持库根目录相对路径或 `file:///` 绝对路径）_（仅限桌面端）_
- Bases：新增 `file()` 和 `Link.asFile()` 函数，支持通过文件引用访问属性
- Bases：Base 代码块现支持 YAML 语法高亮
- Bases：优化公式错误显示方式
- Bases：工具栏项目重组，简化视图菜单与属性菜单
- 优化包含大量下划线（`__`）的 Markdown 文件解析性能
- 点击属性搜索结果现聚焦整行（而非仅属性名）
- 同步：新增 " 冲突解决 " 设置（支持合并 [默认] 或创建冲突文件两种同步冲突处理方式）

##### 问题修复

- 修复新建公式时额外生成 " 未命名 " 公式问题
- Bases：修复卡片视图中使用图标显示的链接点击失效问题
- 修复标注块内无法交互 Bases 问题
- Bases：修复两个日期时间值的比较异常
- Bases：支持调整 Base 最后一列宽度
- Bases：修复卡片属性偶将空值渲染为 "â€" 乱码问题
- 修复 Mermaid 链接页面预览失效问题
- 修复编辑模式下属性折叠状态保存异常问题
- 修复 RTL 语言标题在页面预览中的显示问题
- Bases：空日期在前端元数据中现序列化为 `null`（与文本属性行为一致）
- 修复包含 `:` 的文本在属性中被错误渲染为链接问题
- 修复页面预览中点击列表属性删除项 (x 按钮) 时预览窗口意外关闭问题
- 修复 " 下载当前文件附件 " 命令错误替换含前端元数据文件链接问题
- 全局搜索结果达 100,000 条后自动停止扫描
- 同步：修复与 Obsidian 1.8.10 设备同步时 Bases 被错误删除问题
- 白板：修复编辑嵌入式 Base 文件时意外新建白板节点问题

#### v1.9.7 移动版

包含桌面版 v1.9.7 所有新功能与问题修复

##### 改进

- 优化 Bases 工具栏菜单显示效果

##### 问题修复

- Android：修复点击复选框导致滚动位置丢失问题
- Android：修复编辑器缺失滚动条问题

#### v1.9.8 桌面版

##### 改进

- Bases：新增 `File#hasProperty()` 函数（检查文件是否包含某属性：`file.hasProperty("属性")`，筛选菜单中移除 "exists" 运算符）
- Bases：筛选菜单隐藏 "Tags" 和 "File tags" 选项（改用 "file has tag" 筛选）
- Bases：新增 `String#reverse` 和 `String#repeat` 函数
- Bases：支持列表拼接运算符 `+`（如 `list1 + list2`）
- Bases：功能区新增 " 新建 Base" 选项
- 文件管理器：激活状态下按住 `Command/Ctrl` 键时方向键导航可打开光标悬停文件
- 文件管理器：右键菜单新增 " 新建 Base" 和 " 新建白板 " 选项
- 链接上下文菜单新增 " 移动文件至…" 选项
- 链接上下文菜单新增 " 复制路径 " 和 " 复制相对路径 "

##### 问题修复

- 修复属性菜单选择 " 编辑属性…" 后立即关闭问题
- 搜索：文本搜索现支持 `.base` 文件名检索
- 页面预览：优化悬停检测逻辑，减少意外触发
- Bases：修复排序选择下拉菜单标签显示错误
- Bases：修复多行表格内文本属性换行异常
- Bases：修复标注块内卡片视图显示问题
- Bases：修复 " 复制到剪贴板 " 生成无效链接问题
- Bases：文件标签现正确渲染并去重
- 白板：修复同尺寸同位置白板节点移动时隐藏问题

#### v1.9.8 移动版

包含桌面版 v1.9.8 所有新功能与问题修复

##### 改进

- 白板：节点上下文菜单新增 " 复制 " 选项
- 下拉通知即可关闭

##### 问题修复

- " 查找…" 搜索框自动聚焦键盘（回车键关闭键盘）
- 侧边栏标签页上下文菜单移除 " 向下拆分 "/" 向右拆分 " 选项
- 修复关闭所有标签页后侧边栏显示异常

#### v1.9.9 桌面版

##### 改进

- 新增 " 切换可读行宽 " 命令

##### 问题修复

- Bases：筛选菜单日期属性比较现启用日期输入框，日期时间属性启用日期时间输入框
- Bases：修复修改嵌入式 Base 时视图重复问题
- Bases：卡片视图 " 图片属性 " 现支持解析相对路径（`./路径/文件.png`）
- Bases：无效算术运算（如 `"文本" * 2`）现正确报错

#### v1.9.9 移动版

包含桌面版 v1.9.9 所有新功能与问题修复

#### v1.9.10 桌面版

##### 问题修复

- 修复 Base 视图复制时意外生成两个新视图的问题
- 修复部分插件交互式编辑器工具提示失效的问题
- 从可能的元数据类型列表中移除 " 属性 " 类型

#### v1.9.10 移动版

- 包含桌面版 v1.9.10 所有新功能与问题修复
- 修复了平板设备上文件恢复对话框无法导航的问题

## 插件新闻

### 社区插件

#### 新增

[packUp4AI](https://obsidian.md/plugins?id=packup4ai) By _Jeffry_

> 基于链接/反向链接收集相关笔记，为外部 AI 聊天机器人提供聚焦的上下文。以可视化方式探索笔记关系，并导出该集合。

![Weekly-2025-08-10-Pasted image 20250817214946|650](https://cdn.pkmer.cn/images/Weekly-2025-08-10-Pasted%20image%2020250817214946.png!pkmer)

[Linked Note Exporter](https://obsidian.md/plugins?id=linked-note-exporter) By _the-c0d3r_

> 导出笔记及其所有附件与关联笔记。

![Weekly-2025-08-10-Pasted image 20250817180524|650](https://cdn.pkmer.cn/images/Weekly-2025-08-10-Pasted%20image%2020250817180524.png!pkmer)

[umbPublisher](https://obsidian.md/plugins?id=umbpublisher) By _Owain Williams_

> 将您的 Obsidian 笔记作为内容项推送至 [Umbraco 15+](https://umbraco.com/)

[Sortable Tables](https://obsidian.md/plugins?id=sortable-tables) By _filippov112_

> 为预览模式下的 Markdown 表格添加可排序列

[Bibtex Entry View](https://obsidian.md/plugins?id=bibtex-entry-view) By _Kyoungdeuk_

> 从给定的 bib 文件加载给定 bibkey 的 bibtex 条目，并在 bibkey 的代码块中显示该条目。

![Weekly-2025-08-10-Pasted image 20250817173503|650](https://cdn.pkmer.cn/images/Weekly-2025-08-10-Pasted%20image%2020250817173503.png!pkmer)

[Clipboard Manager](https://obsidian.md/plugins?id=clipboard-manager) By _Ayush Raj_

> 剪贴板管理器，可存储剪贴板历史记录并提供实时更新的搜索功能

[LLM Shortcut](https://obsidian.md/plugins?id=llm-shortcut) By _Viktor Chernodub_

> 提供基于 LLM 能力的命令快捷创建方式
> 该插件允许您创建一个提示词目录，并自动映射为 Obsidian 的“命令”（树状结构会变成一个易于访问的列表）。插件会将当前打开的文档作为上下文，传递给您选择的 LLM 服务提供商以执行所选提示。

![Weekly-2025-08-10-Pasted image 20250817155852|650](https://cdn.pkmer.cn/images/Weekly-2025-08-10-Pasted%20image%2020250817155852.png!pkmer)

[Mini-RAG](https://obsidian.md/plugins?id=mini-rag) By _John Wheatley_

> 利用本地运行的大语言模型或 AI，为笔记实现检索增强生成（RAG）。

[Scrolls To Nav Top](https://obsidian.md/plugins?id=scroll-to-nav-top) By _mario_

> 将文件资源管理器滚动到顶部位置。

[Custom Slides](https://obsidian.md/plugins?id=custom-slides) By _David V. Kimball_

> 自定义幻灯片核心插件的导航、样式和行为。

![Weekly-2025-08-10-460440099-7298ce1a-e354-4976-a4c5-61faa5d80f4e|650](https://cdn.pkmer.cn/images/Weekly-2025-08-10-460440099-7298ce1a-e354-4976-a4c5-61faa5d80f4e.gif!pkmer)

[Private AI](https://obsidian.md/plugins?id=private-ai) By _GB_

> 通过本地托管 AI 轻松与笔记对话，采用隐私设计确保笔记数据永不离开设备，仅限本地处理。

#### 更新

[Weread v0.13.0](https://github.com/zhaohongxuan/obsidian-weread-plugin/releases/tag/0.13.0) By _hank zhao_

> - 新增功能，移除微信图书里的书名里的括号以及括号内的内容，并支持白名单不移除括号
> - bugfix，画线颜色是数字导致 replaceAll 失败

[Quiet Outline v0.4.2](https://github.com/guopenghui/obsidian-quiet-outline/releases/tag/0.4.2) By _the_tree_

> - 去除了 pending 状态的节点背景色
> - 修复了新创建了 canvas 文本节点不会显示在面板的问题
> - 功能：优化了搜索逻辑，现在可以跨越 markdown/html 语法来搜索内容
> - 修复了从核心大纲/反向链接面板切换回来时，面板变为空的问题

![Pasted image 20250818171019|650](https://cdn.pkmer.cn/images/Pasted%20image%2020250818171019.png!pkmer)

[Heading Decorator v2.2.0](https://github.com/dragonish/obsidian-heading-decorator/releases/tag/2.2.0) By _dragonish_

> 新增对自定义前置分隔符的支持

[Excalidraw v2.15.0](https://github.com/zsviczian/obsidian-excalidraw-plugin/releases/tag/2.15.0) By _Zsolt Viczian_

> - 引入**标记框**。这些特殊框体可用于标记幻灯片、PDF 打印的页面区域、图像参考等
>     要创建标记框，请先创建普通框体，然后在元素属性面板中切换标记框选项
>     - 标记框不会包含在图像/PDF 等导出内容中
>     - 标记框内不包含任何元素
>     - 可通过画布上下文菜单显示/隐藏标记框
> - 更新 " 可打印布局向导 " 脚本
>     - 现支持标记框
>     - 单份 PDF 文档支持多页面尺寸和方向
>     - 打印内容可包含非标记框（如 PDF 图像嵌入框）
> - 专业技巧：标记框还可用于…
>     - 配合幻灯片插件使用
>     - 创建图像区域参考（导出图像时不渲染框体，通过框名引用区域）
> - 图像区域参考性能优化

[Easy Copy v1.3.2](https://github.com/Moyf/easy-copy/releases/tag/1.3.2) By _Moy_

> - 在 markdown 链接中移除了块链接的 `^` 避免识别错误
> - 查找块链接时额外拓展 2 行，以便检测中间空一行的块链接

[Discrete v0.2.0](https://github.com/shkarlsson/obsidian-discrete/releases/tag/0.2.0) By _shkarlsson_

> - 插件自动应用新规则，无需手动开关筛选器
> - 新增功能区按钮实现快速开关
> - 重构菜单布局

[BRAT v1.2.0](https://github.com/TfTHacker/obsidian42-brat/releases/tag/1.2.0) By _TfTHacker_

> - **功能**
> 	- 新增默认使用 " 最新 " 插件版本的设置项
> - **问题修复**
> 	- 修复资源下载错误
> 	- 增强发布资源下载逻辑的健壮性
> 	- 支持带尾部斜杠的 GitHub 网址
> - **性能优化**
> 	- 为 GitHub API 请求添加用户代理字符串

### PKMer 出品

> [!INFO]
> **PKMer**（[PKMer.cn](https://pkmer.cn/)、[PKMer.net](https://pkmer.net/)）旨在打造东半球强大的知识管理社区。Personal Knowledge Management (PKM) + "er"，其中 "er" 表示人，专注、喜爱个人知识管理工作、追求效率的人们，都可以划入这个行列，希望社区凝聚更多这样的人。

#### Thino 已更新至 [v2.7.18](https://github.com/Quorafind/Obsidian-Thino/releases/tag/2.7.18)

> - 修复：查询过滤器中的或逻辑问题

## 外观

[**Osaka Jade** Theme](https://github.com/sspaeti/obsidian_osaka_jade) By _sspaeti_

![Weekly-2025-08-10-Pasted image 20250817190136|650](https://cdn.pkmer.cn/images/Weekly-2025-08-10-Pasted%20image%2020250817190136.png!pkmer)

![Weekly-2025-08-10-Pasted image 20250817191130|650](https://cdn.pkmer.cn/images/Weekly-2025-08-10-Pasted%20image%2020250817191130.png!pkmer)

[**Powered by Lancer - Retouched** Theme](https://github.com/Cloopy/Powered-by-Lancer---Retouched) By _Cloopy_

![Weekly-2025-08-10-Pasted image 20250817181307|650](https://cdn.pkmer.cn/images/Weekly-2025-08-10-Pasted%20image%2020250817181307.png!pkmer)

> 一个深受 Lancer TTRPG 美学以及 Santi Younger 的 Wasp 主题影响的主题。该主题是 Dion McMillan 的 “Powered by Lancer” 主题的修改版，经过调整以符合作者对深色主题的偏好，在保持整体风格以及 Lancer TTRPG 中常见配色的同时，使颜色更加柔和、赏心悦目。

[**Matrix** Theme](https://github.com/dubefab/Matrix) By _fabdub_

![Weekly-2025-08-10-Pasted image 20250816194834|650](https://cdn.pkmer.cn/images/Weekly-2025-08-10-Pasted%20image%2020250816194834.png!pkmer)

> 霓虹绿赛博朋克矩阵风 Obsidian 主题，适配实时预览，标题常亮动画光效，并为链接、引用块、代码、表格等元素提供统一视觉风格。

[**Noctis** Theme](https://github.com/konnta0/obsidian-noctis-theme) By _konnta0_

![Weekly-2025-08-10-Pasted image 20250816194703|650](https://cdn.pkmer.cn/images/Weekly-2025-08-10-Pasted%20image%2020250816194703.png!pkmer)

> 一款精美的深色 Obsidian 主题，灵感源自夜空，移植自热门的 [Noctis VS Code 主题](https://github.com/liviuschera/noctis)。

[**Azure** Theme](https://github.com/annagracedev/obsidian-azure) By _Anna Grace_

![Weekly-2025-08-10-Pasted image 20250815112906|650](https://cdn.pkmer.cn/images/Weekly-2025-08-10-Pasted%20image%2020250815112906.png!pkmer)

> 专为长时间写作而设计的简洁主题。

[**Baseline** Theme](https://github.com/aaaaalexis/obsidian-baseline) By _Alexis C_

![Weekly-2025-08-10-Pasted image 20250814225524|650](https://cdn.pkmer.cn/images/Weekly-2025-08-10-Pasted%20image%2020250814225524.png!pkmer)

> Baseline 为您的 Obsidian 知识库体验树立新标杆——流畅直观的熟悉界面、轻松简约的设计美学，提供无限自定义空间。
