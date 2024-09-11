---
uid: 20240810232137
title: Obsidian Weekly 2024-08-09：v1.7.0 前瞻速递
tags: [Weekly, Obsidian]
description: Obsidian Weekly 2024-08-09：v1.7.0 前瞻速递！
author: 淡水鱼,PKMer
type: other
draft: false
editable: false
modified: 20240810232449
---

# Obsidian Weekly 2024-08-09：v1.7.0 前瞻速递

> [!Abstract]
> **统计时间**：2024-08-02 21:00 ~ 2024-08-09 21:00
> **声明**：本栏目灵感来源于 _Eleanor Konik_ 女士于 2021 年 4 月至 2023 年 6 月期间写作发表的一系列 [Obsidian Roundup](https://www.eleanorkonik.com/tag/roundup/) 文章，如有兴趣可关注原作者的个人网站 [Obsidian Iceberg](https://www.eleanorkonik.com/)；内容来源于 Obsidian 官方 Discord 频道和相应项目在 Github 或其独立网站上的信息。描述中可能存在基于个人理解进行的修改，如有错谬欢迎指正。感谢 Obsidian 团队为我们带来如此优秀的软件。

## 官方资讯

### v1.7.0 内测版已推出

#### 桌面版

##### 新功能

- Obsidian Sync 新增了一个显示同步文件集合的视图。你可以通过 "Sync: Show Sync history" 命令来激活它。
- 现在，您可以在页面预览中点击以进行就地编辑。

##### 改进

- 现在您可以通过点击脚注 ID 的悬停预览来创建新的脚注。
- 拼写检查现在在快速切换器和命令面板等提示中被禁用。
- 除了 `twitter.com` 之外，还添加了对 `x.com` 嵌入的支持。
- 在 Markdown 视图的侧栏中右键点击现在可以快速切换行号或可读行宽。
- macOS 上的 "Make copy of" 菜单项已重命名为 "Duplicate" 以符合操作系统的惯例。
- Obsidian Publish 协作者现在可以编辑与内容相关的网站选项，包括侧栏项目的顺序。
- " 关闭其他所有标签页 " 命令不再关闭固定的标签页。
- Frontmatter 现在在嵌入式编辑器中隐藏，如 Canvas 文件节点和页面预览。

##### 修复

- 修复了链接的 Markdown 视图之间滚动不流畅的问题。
- 修复了在快速切换器等提示中 "clear" 会与文本重叠的问题。
- 修复了使用 `line:`、`block:` 和 `task:` 的搜索查询仅返回匹配文件而不是匹配内容的问题。
- 现在，如果隐藏了属性编辑器，则在内联标题聚焦时按 `ArrowDown` 可以正确聚焦编辑器。
- 修复了重命名文件时，如果链接目标在尖括号内，会破坏 Markdown 链接的问题。
- 修复了将 PDF 视图移到弹出窗口时引发错误的问题。
- 修复了 " 导出为 PDF" 在从右向左的文本中创建外部链接旁边的视觉伪影的问题。
- 修复了某些命令会导致编辑器自动补全意外出现的问题。
- 修复了 Obsidian Sync 在同步到 "Sync core plugins" 被禁用的设备时可能会自行停用的问题。
- 修复了 PDF 视图在搜索栏中显示错误图标的问题。
- 修复了某些链接未显示内联 YouTube 预览的问题。
- 上下文菜单现在在从右到左的模式下正确显示。
- 修复了脚注中的链接在出链视图中显示两次的问题。
- 修复了 Canvas 文件如果包含带有自定义属性类型的文件节点时可能会损坏的问题。
- 长文件名末尾在重命名时不再显示省略号。
- 修复了重命名时点击文件名会取消重命名的问题。
- 编辑器上下文菜单在选择位于链接或标签内时不再显示 " 格式化 " 选项。
- 修复了对长 Markdown 文件使用 " 全部折叠 " 命令时错误地折叠代码块内行的问题。
- 修复了链接自动补全有时生成无效的 Markdown 链接而没有 `.md` 文件扩展名的问题。
- 修复了在屏幕顶部角落出现通知时的无响应区域。
- 修复了当弹出窗口在屏幕上重新定位时，弹出窗口滚动位置重置的问题。
- 修复了格式化命令并不总是应用于表格单元格选择的问题。
- 修复了在标签视图中点击标签有时会弹出搜索建议框的问题。
- 修复了 SVG 文件在页面预览中不总是显示的问题。
- 修复了如果服务器认为您已注销，" 注销 " 无法工作的问题。
- 修复了 PDF 视图的 " 复制链接到选择内容 " 在 " 使用 wiki 链接 " 关闭时不包含显示文本的问题。
- " 插入 Markdown 链接 " 和 " 插入内部链接 " 命令现在支持多个光标。
- 修复了在裸链接后面的 ">" 字符被错误解析为引用块的问题。
- 修复了大纲视图中过滤后项目并不总是可见的问题。
- 修复了当前大纲视图过滤器清除后搜索高亮未被清除的问题。

#### 移动版

- 包括 Obsidian Desktop v1.7.0 之前的所有新功能和错误修复。

##### 新功能

- 添加了一个新的移动标签切换器。

##### 改进

- 电子邮件和密码输入现在会显示键盘建议。
- Android 后退按钮现在可关闭设置中的活动页面。
- 按住移动光标不再激活链接。
- 侧栏动画现在稍微更快了。

##### 修复

- 修复了下拉操作过于容易激活的问题。
- 修复了 " 关闭所有选项卡 " 并不总是关闭所有选项卡的问题。
- 修复了菜单手柄在菜单可滚动时会覆盖文本的问题。
- 修复了如果你从初始笔记库选择屏幕登录，Obsidian Vault 无法加载笔记库的问题。
- 修复了点击交互元素时有时会卡住的问题。
- 修复了表格菜单未显示其选项的问题。
- 修复了带有长标题的对话框标题的显示问题。标题现在会被截断以适应屏幕。
- 修复了平板电脑上上下文菜单不可滚动的问题。
- 在 " 注销 " 按钮上添加了加载状态。
- 设置按钮现在会在它们处于活动状态时显示。
- 修复了当键盘在屏幕上且台前调度处于活动状态时屏幕没有足够空间的问题。
- 修复了出现菜单时键盘仍然可见的问题。
- 修复了在小设备上使用物理键盘时底部工具栏的间距问题。
- 在编辑设置时按 "Return" 现在会结束编辑并隐藏键盘。
- 点击视频嵌入不再弹出键盘。
- " 导出为图像 " 命令不再出现在命令提示中。
- 修复了选择侧边栏项目不会将焦点恢复到主视图的问题。

###### Android

- 更新了轻、中、重交互的触感反馈以匹配操作系统的惯例。
- 状态栏和导航栏现在与应用背景颜色匹配。

###### iOS

- 改进了键盘出现时的屏幕调整。
- 修复了在按下播放之前视频缩略图为空白的问题。

###### 平板电脑

- 修复了带有长描述的社区插件中的水平滚动问题。
- 社区插件排序按钮现在与桌面版匹配。

## 插件新闻

### 社区插件

#### 更新

[Quick Explorer v0.2.9](https://github.com/pjeby/quick-explorer/releases/tag/0.2.9) By _PJ Eby_

> 修复了 1.7 版本中的菜单更改问题

[Vertical Tabs v0.5.3](https://github.com/oxdc/obsidian-vertical-tabs/releases/tag/0.5.3) By _oxdc_

> - 在侧边栏中导航标签页
> - 像整理文件一样对标签页进行分组、排序、拖放、固定/取消固定
> - 通过最大化活动标签并隐藏其他标签，使用户界面更简洁、更易于导航
> - 现在可在标签页上使用上下文菜单
> - 自定义排序始终与原生标签同步！
> - 分组名称现在可以自定义
> - 隐藏/取消隐藏分组**无需关闭/重新打开标签**
> - **一键**最大化并聚焦当前笔记
> - 修复了可能导致 Obsidian 移动端崩溃的重要问题

[Tasks v7.7.0](https://github.com/obsidian-tasks-group/obsidian-tasks/releases/tag/7.7.0) By _Clare Macrae 和 llyas Landikov_

> - **更新内容**
>   - 通过 Obsidian 属性（也称为 Frontmatter 或 YAML）进行过滤、排序和分组
>     - 有关详细信息和更多示例，请参阅 [Obsidian 属性](https://publish.obsidian.md/tasks/Getting+Started/Obsidian+Properties) 文档页面。

### PKMer 出品

> [!INFO]
> **PKMer**（[PKMer.cn](https://pkmer.cn/)、[PKMer.net](https://pkmer.net/)）旨在打造东半球强大的知识管理社区。Personal Knowledge Management (PKM) + "er"，其中 "er" 表示人，专注、喜爱个人知识管理工作、追求效率的人们，都可以划入这个行列，希望社区凝聚更多这样的人。

#### [Outliner.MD v0.1.8](https://github.com/Quorafind/Outliner.MD/releases/tag/0.1.8) 已发布

- 支持拖放块
- 更好的分区设计

#### Thino 更新至 v2.4.51

- Pro 功能：支持时间范围过滤（例如 `本周`，`本月`，`本年`，`上周`，`上月`，`上年`）；

## 外观

[**Underwater** Theme](https://github.com/Seniblue/Underwater) By _Seniblue_

![uw|650](https://cdn.pkmer.cn/images/uw.png!pkmer)

> 此主题与 **[Style Settings](https://github.com/mgmeyers/obsidian-style-settings) 插件** 搭配使用效果最佳，该插件允许你选择 **配色方案**、自定义所有 **颜色** 以及选择替代的 **样式**。

[**Shade Sanctuary** Theme](https://github.com/Elevict/Shade-Sanctuary) By _Elevict_

![Pasted image 20240809224148|650](https://cdn.pkmer.cn/images/Pasted%20image%2020240809224148.png!pkmer)

> Shade Sanctuary 是为 Obsidian MD 设计的主题，旨在为书写和处理数学内容创造一个愉悦的环境。它结合了时尚现代的外观与 _Computer Modern_ 字体的清晰度。

[Primary v2.8.0](https://github.com/primary-theme/obsidian/releases/tag/v.2.8.0) By _Cecilia May_

> - **新功能**
>   - 替代复选框/复选框图标
>     - 在 Style Settings 中包含样式选项
>   - 彩色文件夹
>     - 提供不同的样式方式，并在 Style Settings 中为最多 12 个循环文件夹提供完整的样式访问
>     - 可选择使用文件夹图标作为折叠指示器，而不是默认的尖头
>     - 可选择为文件夹之间的缩进指南着色
>   - 复选框样式选项在 Style Settings 中提供
>     - 可选择移除已选项目的删除线
>     - 可选择更改复选框的圆度
> - **更改**
> 	- 略微调整了列表符号和缩进的对齐方式，以与替代复选框一致
> 	- 更改了选中文件、文件夹或书签时的颜色，以便在使用彩色文件夹时区分它们
> - **修复**
> 	- 修复了 Document Sea 的关闭按钮错误
