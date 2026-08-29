---
uid: 20260830003310
title: Obsidian Weekly 2026-08-16：7 月~8 月上半月汇总
tags: [Weekly, Obsidian]
description: Obsidian Weekly 2026-07-05：编辑与同步新选择 & 手写压感支持
author: 淡水鱼,熊猫别熬夜,PKMer
type: other
draft: false
editable: false
modified: 20260830003352
---

# Obsidian Weekly 2026-08-16：7 月~8 月上半月汇总

> [!Abstract]
> **统计时间**：2026-07-05 21:00 ~ 2026-08-16 21:00
> **声明**：本栏目灵感来源于 _Eleanor Konik_ 女士于 2021 年 4 月至 2023 年 6 月期间写作发表的一系列 [Obsidian Roundup](https://www.eleanorkonik.com/tag/roundup/) 文章，如有兴趣可关注原作者的个人网站 [Obsidian Iceberg](https://www.eleanorkonik.com/)；内容来源于 Obsidian 官方 Discord 频道和相应项目在 Github 或其独立网站上的信息。描述中可能存在基于个人理解进行的修改，如有错谬欢迎指正。感谢 Obsidian 团队为我们带来如此优秀的软件。

## 官方资讯

### Obsidian v1.13.7 公开版现已发布

#### V1.13.7 桌面端

##### 已修复

- macOS：修复了文件名含特殊字符时有时不会出现在库中的问题。
- 编辑器：修复了列表项或标注中行内公式无法正确渲染的问题。
- 实时预览：修复了当主窗口最小化时，弹出窗口中的图片无法调整大小或全屏打开的问题。
- 设置：修复了 CSS 代码片段菜单显示重复条目的问题。

##### 开发者

- 改善了设置控件在禁用状态下的外观。

#### V1.13.7 移动端

- 包含截至 Obsidian 桌面端 v1.13.7 的所有新增功能与漏洞修复。

#### V1.13.6 桌面端

##### 改进

- 应用退出时现在会等待配置文件保存完毕，避免文件损坏。
- 改善了 " 撤销关闭标签页 " 行为。标签页现在会在正确的标签组中重新打开；如果当前活动标签页是 " 新标签页 " 页面，将不再被复用。
- 移除了批准 URI 操作的对话框，因为它给非技术用户带来了更多困扰。1.13 版本已引入一些新的防护措施，例如 Mermaid 图表默认关闭。

##### 设置

- 按 Escape 键现在可关闭设置窗口。
- Tab 和 Shift-Tab 现在将焦点移动到下一个可聚焦元素，而不是锁定在当前行，便于导航到链接。
- Obsidian 全屏时，设置窗口现在在应用窗口上方打开，而不是创建额外的全屏窗口。
- 设置窗口标题栏现在随当前缩放级别缩放。
- 设置中的滑块现在使用强调色。
- 启动统计窗口现在显示关于启动速度的更详细信息。
- 修复了 Linux 上字体选择页面崩溃的问题（需要最新安装包）。

##### 已修复

- 修复了属性编辑器中链接建议的若干问题。例如，在链接中输入 # 会导致链接被覆盖。
- 修复了使用 URI 打开特定库时窗口未获得焦点的问题。
- 修复了主题和插件的 README 文件中显示的内部链接问题。
- 修复了从嵌入的数据库（例如 ![[file.base]]）中拖出链接时，链接指向数据库文件而非所拖拽文件的问题。
- 设置：修复了问题修复后验证错误不消失的问题。
- 设置：修复了在页面仍在动画时快速在页面间导航导致设置崩溃的问题。
- 设置：修复了社区插件设置页右键菜单显示重复结果的问题。
- 设置：修复了在设置页面按返回按钮不总是聚焦到打开该页面的设置项的问题。
- 实时预览：当图片已从库中删除时，" 删除图片 " 右键菜单项不再出现。
- 实时预览：修复了包含 URL 哈希后缀（#）的图片无法全屏打开的问题。
- 实时预览：修复了在 Markdown 表格中重新排序行或列导致的内存泄漏。
- 实时预览：恢复了嵌入的 YouTube 和 Twitter 链接的旧行为；它们不再有选中状态或悬浮编辑按钮。

##### 最新安装包兼容性

- 修复了重新加载窗口后缩放级别被重置的问题。
- 修复了网络驱动器上的库无法使用的问题。
- 修复了使用 Web 查看器插件时开发者工具无法正确打开的问题。

##### 开发者

- 安装包已更新为使用 Electron v43.3.0。如需升级，请访问 [https://obsidian.md/download](https://obsidian.md/download) 重新安装 Obsidian。
- API：新增 SettingDefinitionBase #disabled 。

#### V1.13.6 移动端

- 包含截至 Obsidian 桌面端 v1.13.6 的所有新增功能与漏洞修复。

##### 新增

- 在标签页切换器中新增滑动关闭标签页功能。

##### 改进

- 从标签页切换器关闭标签页后，标签页现在会动画移动到新位置。
- 移动端工具栏设置页面现在在每个命令旁显示图标。
- 复选框现在随字体大小按比例缩放。
- 横屏模式下设置的小幅改进。

##### 已修复

- 修复了 " 打开本地图谱 " 及类似命令在手机上的新标签组中打开标签页的问题（手机不支持标签组）。
- iOS：修复了双击文本或拖动光标后编辑器有时选中整个段落的问题。

#### V1.13.5 桌面端

##### 改进

- 应用退出时现在会等待配置文件保存完毕，避免文件损坏。
- 改善了 " 撤销关闭标签页 " 行为。标签页现在会在正确的标签组中重新打开；如果当前活动标签页是 " 新标签页 " 页面，将不再被复用。

##### 设置

- 按 Escape 键现在可关闭设置窗口。
- Tab 和 Shift-Tab 现在将焦点移动到下一个可聚焦元素，而不是锁定在当前行，便于导航到链接。
- Obsidian 全屏时，设置窗口现在在应用窗口上方打开，而不是创建额外的全屏窗口。
- 设置窗口标题栏现在随当前缩放级别缩放。
- 启动统计窗口现在显示关于启动速度的更详细信息。

##### 已修复

- 修复了属性编辑器中链接建议的若干问题。例如，在链接中输入 # 会导致链接被覆盖。
- 修复了使用 URI 打开特定库时窗口未获得焦点的问题。
- 修复了主题和插件的 README 文件中显示的内部链接问题。
- 设置：修复了问题修复后验证错误不消失的问题。
- 设置：修复了在页面仍在动画时快速在页面间导航导致设置崩溃的问题。
- 设置：修复了社区插件设置页右键菜单显示重复结果的问题。
- 实时预览：当图片已从库中删除时，" 删除图片 " 右键菜单项不再出现。
- 修复了从嵌入的数据库（例如 ![[file.base]]）中拖出链接时，链接指向数据库文件而非所拖拽文件的问题。

##### 最新安装包兼容性

- 修复了重新加载窗口后缩放级别被重置的问题。
- 修复了网络驱动器上的库无法使用的问题。
- 修复了使用 Web 查看器插件时开发者工具无法正确打开的问题。

##### 开发者

- API：新增 SettingDefinitionBase #disabled 。

#### V1.13.5 移动端

- 包含截至 Obsidian 桌面端 v1.13.5 的所有新增功能与漏洞修复。

##### 新增

- 在标签页切换器中新增滑动关闭标签页功能。

##### 改进

- 从标签页切换器关闭标签页后，标签页现在会动画移动到新位置。
- 移动端工具栏设置页面现在在每个命令旁显示图标。
- 复选框现在随字体大小按比例缩放。
- 横屏模式下设置的小幅改进。

##### 已修复

- 修复了 " 打开本地图谱 " 及类似命令在手机上的新标签组中打开标签页的问题（手机不支持标签组）。

#### V1.13.4 桌面端

##### 设置

- 设置已全面改版，新增键盘导航、搜索以及面向插件开发者的新 API。
- 设置现在在新窗口中打开。你可以在 设置 → 界面 → 在新窗口中打开设置 中关闭此功能。
- 新增搜索功能。你现在可以按名称或描述搜索设置。目前支持核心设置和核心插件。社区插件可访问 [https://docs.obsidian.md/plugins/guides/migrate-declarative-settings](https://docs.obsidian.md/plugins/guides/migrate-declarative-settings) 以出现在搜索结果中。
- 新增键盘导航。使用方向键在项目间移动，按 Enter 打开设置标签页，按 Ctrl/Cmd-F 重新聚焦搜索。也支持 Vim 键位。
- 部分设置已移入新的 " 界面 " 设置页面。多个设置页面已重新设计以改善导航。
- 新增退出受限模式而不重新启用插件的功能。便于调试你的库。
- 已弃用 Settings Search 插件，因其与新搜索功能重叠。感谢 javalent 开发了这款出色的插件！它已被加入 [https://obsidian.md/help/credits#Plugin+inspirations](https://obsidian.md/help/credits#Plugin+inspirations) 。

##### 图片

- 图片现在更易于调整大小，并可全屏查看。点击图片或缩放按钮打开。你可以在当前文件中嵌入的所有图片间导航，并可点击拖拽在图片内平移。
- 实时预览：处理图片时的全新编辑器体验。图片现在可通过键盘选中，且不会自动展开显示文件名。选中图片后，退格和删除键将移除嵌入的图片，Ctrl/Cmd-C 和 Ctrl/Cmd-X 将复制或剪切图片。
- 实时预览：选中图片时新增键盘交互。按 + 或 - 调整选中图片的大小，按 0 重置图片大小。按 Enter 编辑图片，或按 Tab 手动编辑图片大小。
- Vim：新增 :image Ex 命令以与选中图片交互。使用 :image grow 和 :image shrink 调整图片大小，:image reset 重置图片大小。还支持计数，例如 :5image grow 将图片放大 5 次。

##### 改进

###### 安全

- Obsidian URI 现在会在执行操作前弹出确认对话框。选择 " 不再询问 " 可将该操作加入允许列表。在设置中管理允许列表。
- 在尝试加载源指向网络驱动器的 HTML 资源前新增警告。
- 选择通过 Obsidian 同步插件时新增警告对话框。

###### 编辑器

- 阅读模式现在支持带图片尺寸且无替代文本的外部图片（例如 ![200](https://www.path.to/image.png)）。
- 笔记合成器：从文件中提取章节时，该章节中的链接现在将被重写为相对于新位置。

###### 文件浏览器

- 按 Escape 取消文件重命名时保持文件浏览器聚焦。
- 按 Escape 清除当前选区。
- 重命名文件或文件夹时 " 自动显示 " 不再激活。
- 新增支持从数据库拖出链接到文件浏览器，以将文件移动到新位置。
- 拖拽行为的小幅改进。

###### 属性

- 改善了全局属性视图中的键盘导航；退格键现在删除选中的属性。
- 改善了属性类型菜单，更清晰地表明属性类型是自动设置还是手动选择。

###### Obsidian 同步

- 移除了状态栏图标的旋转动画，因为它在应用空闲时影响电池续航。
- 同步侧边栏视图中的文件现在在右键菜单中显示所有文件相关项。
- 同步侧边栏视图中的文件现在可拖拽到其他视图或编辑器中。
- 向同步侧边栏视图添加了搜索菜单项。
- 同步侧边栏视图现在支持键盘多选（Shift+ 方向键）或鼠标多选（Alt+ 点击）。
- 同步侧边栏视图现在支持用 Delete 或 Backspace 键删除文件。

###### macOS

- 更新了按钮和输入样式，以更好地匹配 macOS 26 默认风格。

###### 白板

- 渲染性能小幅提升。

###### 其他

- 向书签视图添加了搜索。
- 新增一次性横幅，确认你希望在库中渲染 Mermaid 代码块。
- 桌面端将文件夹拖入应用现在会导入整个文件夹并保留目录结构。
- Ctrl-N 和 Ctrl-P 在建议中导航到下一项/上一项，现在在所有平台上可用。
- 更新了打开安装了插件的未识别库时出现的对话框。措辞已改进以强调使用不受信任插件的风险。
- 用 Escape 键关闭快速切换或命令面板现在正确恢复之前的选区。
- 按 Escape 键现在隐藏侧边栏视图中的搜索输入框。
- 文件恢复：向文件历史记录添加了键盘导航。使用方向键在列表中导航。
- 唯一笔记创建器插件在找不到模板时现在链接到自身设置。

##### 已修复

- 修复了罕见竞态条件：文件可能卡住且在应用重启前无法保存。
- 修复了工作区加载时视图抛出错误导致应用加载失败的问题。
- 修复了在旧于 Obsidian 1.6 的任何安装包上应用静默崩溃的问题。我们还添加了错误消息，以防此类情况再次发生。
- 修复了点击弹出窗口中的外部链接导致弹出窗口关闭的问题。
- 修复了桌面端功能区按钮不响应触摸事件的问题。
- 禁用 CSS 代码片段现在正确地从所有弹出窗口中移除样式。
- 修复了命令面板输入框中显示的占位符文本问题。
- 修复了侧边栏标签页溢出时水平滚动不流畅的问题。
- 修复了超大代码块上不显示 " 复制 " 按钮的问题。
- 修复了 Markdown 表格中图片无法调整大小的问题。
- 修复了提供 paneType 选项时，唯一 URI 操作未在正确标签页中打开新笔记的问题。
- 修复了嵌入的网页内容（webview）内的导航问题。
- 阅读模式不再将 %%%% 解释为未终止的注释。注释始终由恰好两个 % 字符包裹。
- 实时预览：修复了 Ctrl/Cmd-A 在嵌入的输入框（例如嵌入的数据库表格中的单元格）中不工作的问题。
- 实时预览：修复了 Markdown 列表中的嵌入未显示正确缩进的问题。
- 实时预览：插件后处理器变更时代码块现在能正确重新渲染。
- 实时预览：修复了当行内格式中包含公式或图片时无法正确展开的问题。例如，**some $math$ text** 在光标移入粗体格式时无法正确展开。
- 实时预览：修复了编辑 Markdown 嵌入并滚动时图片消失的问题。
- 文件浏览器：修复了将文件移动到新文件夹后，文件临时以错误缩进级别渲染的罕见问题。
- 属性：修复了全局属性视图不总是保存排序顺序的问题。
- 属性：修复了当属性名包含大写字母时 " 删除属性 " 菜单项不可靠工作的问题。
- 属性：修复了 " 在光标处打开链接 " 快捷键在列表属性项上不工作的问题。
- 属性：修复了在列表属性中渲染 时出错的问题。
- 书签：修复了通过键盘删除书签后焦点未移动到下一项的问题。
- 书签：修复了书签视图中键盘导航有时因缺失书签文件而卡住的问题。
- 书签：修复了 Windows 上在书签视图中中键点击激活自动滚动的问题。
- 数据库：修复了禁用并重新启用数据库核心插件时出现错误消息的问题。
- 数据库：修复了数字属性的自动列宽问题。
- 数据库：修复了弹出窗口中数据库的公式编辑器无法使用的问题。
- 数据库：修复了排序筛选器显示错误背景色的问题。
- 数据库：文件链接不再将图片尺寸显示为图片显示名称。
- 同步：修复了点击状态栏图标不总是打开菜单的问题。
- Vim：当 Vim 光标与编辑器中的控件重叠时，不再出现白色 " 幽灵 " 字符。

###### macOS

- 修复了某些元素不应显示滚动条却显示的问题，例如侧边栏中的标签页标题。

##### 开发者

- 安装包已更新为使用 Electron v43.1.1。如需升级，请访问 [https://obsidian.md/download](https://obsidian.md/download) 重新安装 Obsidian。
- 新增了 [https://docs.obsidian.md/Plugins/User+interface/Settings](https://docs.obsidian.md/Plugins/User+interface/Settings) 文档和新设置 API 的 [https://docs.obsidian.md/plugins/guides/migrate-declarative-settings](https://docs.obsidian.md/plugins/guides/migrate-declarative-settings) 迁移指南。
- 新增 ConfirmationModal 组件。
- 将 CodeMirror 升级到最新版本。
- 基础颜色已迁移到 OKLCH 色彩空间。
- --callout-color 变量现在需要合法的 CSS 颜色。这是一项破坏性变更：

```


/* 此前标注颜色需要 RGB 三元组。 */


--callout-color: 255,0,0;



/* 现在任意合法 CSS 颜色均可 */


--callout-color: #ff0000;


--callout-color: rgb(255,0,0);


```

##### 命令行

- 修复了 flatpak 安装的 Obsidian CLI 问题。

##### 第三方库

- 将 Moment.js 升级到 2.30.1。
- 将 Mermaid 升级到 11.13.0。

#### V1.13.4 移动端

- 包含截至 Obsidian 桌面端 v1.13.4 的所有新增功能与漏洞修复。

##### iOS 分享面板

- 全新的 iOS 分享面板让你无需打开 Obsidian 即可保存来自 Safari、YouTube 和其他应用的内容。你可以自定义多个位置，以定义所使用的库、文件夹和模板。[https://obsidian.md/help/ios](https://obsidian.md/help/ios)

##### 新增

- 标签页切换器：拖拽标签页以重新排序。
- 平板：长按调整分屏和固定侧边栏的大小。
- 数据库：在表格视图中新增调整列宽的菜单项。
- 向下滑动关闭放大的图片。

##### 已修复

- 设置页面现在有足够的内边距，在屏幕键盘显示时可完全滚动到视图中。
- 修复了双击图片缩放的问题。
- 修复了打开侧边栏时搜索视图中的输入框有时自动聚焦的问题。
- 修复了关闭另一个标签页后标签页不重新计算宽度的问题。
- 实时预览：修复了 iOS 键盘 Enter 键在 Markdown 列表中不按预期工作的问题。
- 实时预览：修复了 iOS 上创建新列和新行的按钮不工作的问题。
- 文件恢复：修复了移动端在文件历史中不同文件间导航的问题。
- iOS：修复了非英文设备上 " 删除文件 " 不更新应用界面的问题。
- iOS：修复了更改设置值后设置页面滚动回顶部的问题。
- iOS：修复了通过分享面板分享截图时应用崩溃的问题。
- iOS：修复了在大文档中快速滚动时滚动突然停止的问题。
- iOS：修复了阅读模式下在含大嵌入的文档中快速滚动时滚动突然停止的问题。
- iOS：修复了开启或关闭插件后滚动位置丢失的问题。
- iOS：修复了使用妙控板切换标签页导致滚动位置重置的问题。
- iOS：修复了在段落末尾三击无法选中段落的问题。
- Android：修复了长文档中 " 全选 " 无法选中全部内容的问题。

##### 开发者

- 我们将最低 iOS 版本从 iOS 14.5 提升到 iOS 15。这不会影响任何受支持的设备。

#### V1.13.3 桌面端

##### 改进

- 实时预览：当图片是行中唯一文本时，编辑器行高不再保留以匹配图片高度。
- 实时预览：为图片嵌入新增选中状态。
- 为图片嵌入新增 " 缩放 " 按钮。
- 图片查看器现在支持点击并拖拽在图片内平移。
- 文件恢复：向文件历史记录添加了键盘导航。使用方向键在列表中导航。
- 唯一笔记创建器插件在找不到模板时现在链接到自身设置。

##### 已修复

- 修复了 Markdown 表格中图片无法调整大小的问题。
- 修复了提供 paneType 选项时，唯一 URI 操作未在正确标签页中打开新笔记的问题。

#### V1.13.3 移动端

- 包含截至 Obsidian 桌面端 v1.13.3 的所有新增功能与漏洞修复。

##### 改进

- 新增 " 向下滑动 " 手势以关闭图片查看器中的图片。

##### 已修复

- 点击图片不再显示键盘。
- 修复了双击图片缩放的问题。
- 实时预览：修复了 iOS 上创建新列和新行的按钮不工作的问题。
- 实时预览：修复了 iOS 键盘 Enter 键在 Markdown 列表中不按预期工作的回归问题。
- 文件恢复：修复了移动端在文件历史中不同文件间导航的问题。
- iOS：修复了阅读模式下在含大嵌入的文档中快速滚动时滚动突然停止的问题。
- 修复了关闭另一个标签页后标签页不重新计算宽度的问题。

#### V1.13.2 桌面端

##### 新增

- 全新图片查看器，用于全屏查看图片。在阅读模式下点击图片打开。或在实时预览中选中图片后，点击或按空格键在图片查看器中打开。使用方向键在当前文件中嵌入的所有图片间导航。
- 实时预览：选中图片时新增键盘交互。按 + 或 - 调整选中图片的大小，按 0 重置图片大小。按 Enter 编辑图片，或按 Tab 手动编辑图片大小。
- Vim：新增 :image Ex 命令以与选中图片交互。使用 :image grow 和 :image shrink 调整图片大小，:image reset 重置图片大小。还支持计数，例如 :5image grow 将图片放大 5 次。

##### 改进

- 实时预览：点击选中图片外的区域现在取消选中。
- 阅读模式现在支持带图片尺寸且无替代文本的外部图片（例如 ![200](https://www.path.to/image.png)）。
- 文件浏览器：新增支持从数据库拖出链接到文件浏览器，以将文件移动到新位置。

###### 同步

- 向同步视图添加了文件级右键菜单项。
- 同步视图现在支持键盘多选（Shift+ 方向键）或鼠标多选（Alt+ 点击）。
- 同步视图现在支持用 Delete 或 Backspace 键删除文件。

##### 已修复

- 编辑器：修复了当光标在粗体文本内时 " 切换粗体 " 无法移除粗体（**）标记的回归问题。
- 实时预览：修复了当行内格式中包含公式或图片时无法正确展开的问题。例如，**e $e$ e** 在光标移入粗体格式时无法正确展开。
- 阅读模式不再将 %%%% 解释为未终止的注释。注释始终由恰好两个 % 字符包裹。
- 修复了超大代码块上不显示 " 复制 " 按钮的问题。
- 属性：修复了在列表属性中渲染 时出错的问题。
- 书签：修复了书签视图中键盘导航有时因缺失书签文件而卡住的问题。
- 书签：修复了 Windows 上在书签视图中中键点击激活自动滚动的问题。
- 数据库：修复了弹出窗口中数据库的公式编辑器无法使用的问题。
- 数据库：修复了排序筛选器显示错误背景色的问题。
- 数据库：文件链接不再将图片尺寸显示为图片显示名称。
- 同步：修复了点击状态栏图标不总是打开菜单的问题。
- 设置：修复了页面预览设置无法保存的问题。
- 设置：修复了固定的命令不显示社区插件命令的问题。
- 设置：修复了设置中 " 操作 " 按钮的轻微内存泄漏。
- Vim：当 Vim 光标与编辑器中的控件重叠时，不再出现白色 " 幽灵 " 字符。

##### 开发者

- 修复了 SettingGroup 在 SettingTab 外部使用时的渲染方式。

#### V1.13.2 移动端

- 包含截至 Obsidian 桌面端 v1.13.2 的所有新增功能与漏洞修复。

##### 改进

- iOS：在分享面板模板中新增 url 变量，用于将分享的链接插入到笔记中。

##### 已修复

- 设置：更新了设置中开关的大小。
- 设置：修复了有验证错误的设置的显示问题。
- iOS：修复了在大文档中快速滚动时滚动突然停止的问题。
- Android：修复了长文档中 " 全选 " 无法选中全部内容的问题。

## 插件新闻

### 社区插件



#### 新增

> [!Tip]
> 由于 AI 审核的引入，近期上架插件数量出现爆炸式增长，编者目前精力有限，故仅能选择性收录并简单介绍，详情可前往新版插件页面 [Obsidian Community](https://community.obsidian.md/) 获取。

##### AI 与 LLM

[DSH](https://obsidian.md/plugins?id=dsh) By _tudo9710_

> 在库中嵌入 DSH（DeepSeek 工具）作为唯一 AI 代理：聊天面板、会话历史、按会话切换模型/推理力度/权限、实时思考过程和模型发现。

[Vault Assistant](https://obsidian.md/plugins?id=vault-assistant) By _bigpaulie_

> 使用兼容 OpenAI 的模型与你的库对话。本地 RAG，以及受审批门控的笔记创建和更新。

[Vault Talk](https://obsidian.md/plugins?id=vault-talk) By _prgrmmrjns_

> 语音或文字与库对话。支持 Mistral、Ollama 或 LM Studio。

![Vault Talk](https://raw.githubusercontent.com/prgrmmrjns/vault-talk/master/screenshot.png)

[DSH Bridge](https://obsidian.md/plugins?id=dsh-bridge) By _wozoulesky_

> 将本地 DeepSeek Harness (DSH) 代理嵌入 Obsidian，在库中聊天、编辑和管理笔记。

![DSH Bridge](https://raw.githubusercontent.com/wozoulesky/dsh-obsidian/master/docs/screenshots/01-chat-panel.png)

[DeepSeek Harness](https://obsidian.md/plugins?id=dsh-harness) By _hjxcloud-tech_

> 内嵌 DeepSeek Harness Web GUI，一键安装、自动启动、静默后台运行，即开即用。

[Harness Like](https://obsidian.md/plugins?id=harness-like) By _frank6com_

> 受 DeepSeek Harness 启发的 Obsidian 实现：在 Obsidian 中运行 Cordis 插件系统和代理；用户插件可扩展命令、工具和面板。界面中英文。

![Harness Like](https://raw.githubusercontent.com/frank6com/obsidian-harness-like/master/docs/public/screenshots/zh/CreateAGame.gif)

[Chat Lab AI](https://obsidian.md/plugins?id=chat-lab) By _space-cadet_

> 支持多设备中继、代理工具和协作对话的 AI 聊天。

![Chat Lab AI](https://raw.githubusercontent.com/space-cadet/obsidian-ai/master/docs/demo.gif)

[Ogent](https://obsidian.md/plugins?id=agent-ogent) By _akali-yyds_

> 运行具有流式输出、安全文件工具和可配置 OpenAI 兼容提供方的库感知 AI 代理。

[DSH Math Notes Assistant](https://obsidian.md/plugins?id=dsh-math-assistant) By _maple110011_

> 右侧边栏中数学聚焦的实验性 DeepSeek Harness 记忆代理：自动 dsh 服务管理、分层长期记忆、笔记工作流和主动想法备忘提醒。

[AI LLM Search](https://obsidian.md/plugins?id=ai-llm-search) By _darkrabbits_

> 使用你自己的模型 API 与选区、笔记、整个库和网络聊天。

[Knowledge Brain](https://obsidian.md/plugins?id=knowledge-brain) By _stef4678_

> 将 Markdown 笔记转换为具有流式 AI 聊天的连接知识图谱。支持 DeepSeek、OpenAI、Gemini、Claude — AI 建议的链接、标签、状态和后续问题。

[VaultForge](https://obsidian.md/plugins?id=vaultforge) By _walsplitter_

> 将 Claude 带入你的库：本地 MCP 服务器、AI 聊天助手和 Claude Skills 管理。

[Hephaestus](https://obsidian.md/plugins?id=hephaestus) By _davidkendig_

> 在库中与本地模型（Ollama 或 LM Studio）聊天，支持附件、网络搜索和笔记集成。

[Elton AI](https://obsidian.md/plugins?id=elton-ai) By _swayinfo_

> 与库对话：通过语音或文字提问，搜索笔记、根据你自己的模板写入并归档新笔记，并同样通过 Telegram 机器人回答。

[Koda](https://obsidian.md/plugins?id=koda-agent) By _johannes-kaindl_

> 代理式库伴侣：与搜索和阅读你笔记的助手聊天，仅在批准后写入，并通过透明的记忆笔记学习。

[Windy](https://obsidian.md/plugins?id=windy) By _windzu_

> 跟随你活动 Obsidian 页面的页面原生代理。

[UNagent](https://obsidian.md/plugins?id=unagent) By _uncore-gh_

> 移动优先的 AI 助手：在手机/平板上轻量，在桌面通过 hermes ACP 提供重型任务能力。

[TreeTalk](https://obsidian.md/plugins?id=treetalk) By _safasffa111_

> 询问库更便宜。原生 Markdown 树状对话，刻意知识捕获。

[RecallFlow AI](https://obsidian.md/plugins?id=recallflow-ai) By _poopchen_

> 生成 AI 闪卡并使用 FSRS 间隔重复调度器复习。

[FleurPilot](https://obsidian.md/plugins?id=fleurpilot) By _gibsonchan-5_

> AI 写作伴侣——聊天、行内编辑和写作辅助。

[Lark Knowledge AI](https://obsidian.md/plugins?id=lark-knowledge-ai) By _7heozzz_

> 用自然语言向 AI 询问有关库的问题。对笔记和 PDF 进行语义搜索，答案带可点击引用，完全在你自己的机器上运行。

[Assist Plus](https://obsidian.md/plugins?id=assist-plus) By _jabaho9523_

> 在库中与 Claude (Anthropic) 聊天——使用你自己的 API 密钥，严格控制其可见和可更改的内容。

[RecallFlow AI](https://obsidian.md/plugins?id=recallflow-ai) By _poopchen_

> 生成 AI 闪卡并使用 FSRS 间隔重复调度器复习。

[LLM Hub](https://obsidian.md/plugins?id=llm-hub) By _takeshy_

> 具备聊天、工作流自动化和语义搜索 (RAG) 的 AI 助手。支持 Gemini、OpenAI、Anthropic、OpenRouter、Grok、本地 LLM 和 CLI 后端。

[Baizer](https://obsidian.md/plugins?id=baizer) By _yinfi_

> 与库聊天、获得行内 AI 补全，并将笔记编译为可搜索知识库。

[Sidet](https://obsidian.md/plugins?id=sidet) By _jiaoyingxing_

> 流畅、自然、移动友好且易于持续使用的 Obsidian AI 聊天插件。

[Curtis AI Chat](https://obsidian.md/plugins?id=curtis-ai-chat) By _jordannewell_

> 支持 30+ 提供方（Anthropic、OpenAI、Gemini、Ollama 等）的多语言 AI 聊天，图像附件、长期记忆、斜杠命令和行内选区操作。

![Curtis AI Chat](https://raw.githubusercontent.com/JordanNewell/curtis-ai-chat/master/assets/hero.png)

[Codian](https://obsidian.md/plugins?id=codianz) By _bcs_

> 多提供方 AI 代理工作区：将本地编码代理与你的库、会话、技能和工具连接，同时保留提供方原生会话和权限。

![Codian](https://raw.githubusercontent.com/bcs1037/codian/master/assets/Preview.png)

[Claudian Plus](https://obsidian.md/plugins?id=claudian-plus) By _wuyifan-code_

> Codex 优先的增强版 Claudian 分支，用于 Obsidian 中的本地优先知识工作。

[WeSight](https://obsidian.md/plugins?id=wesight) By _freestylefly_

> 在库内将 Claude Code、Codex 和 OpenCode 作为本地 AI 协作者运行。

[Chatobby](https://obsidian.md/plugins?id=chatobby) By _titaniceclair_

> 本地代理，支持聊天和工具使用、MCP 及插件。自带 API 密钥，Chatobby 支持多种 LLM 提供方。

[Kimi Assistant](https://obsidian.md/plugins?id=kimidian) By _liu-zhiyu-enicom_

> 将 Kimi Code CLI 作为 AI 协作者嵌入库侧边栏。通过 ACP 与 Kimi 聊天，读取、搜索和编辑笔记。

[OpenYOLO](https://obsidian.md/plugins?id=openyolo) By _kamijoucen_

> 轻量而强大的 ACP 聊天客户端，继承 opencode 的模型、工具和会话。

[Oh My Claudian](https://obsidian.md/plugins?id=oh-my-claudian) By _lee259_

> 将 Claude Code、Codex、Cursor、Grok、OpenCode、Oh My Pi 和 Pi 引入 Obsidian 库——一个 Claudian 分支。

[Command Center](https://obsidian.md/plugins?id=command-center) By _scrunchds_

> 部署高级 Orchestrator-Worker 多代理框架，自动化库索引、模板生成和交互式侧边栏聊天功能。

[Agent MCP](https://obsidian.md/plugins?id=agent-mcp) By _rospaans_

> 在 Obsidian 内运行编码代理（Claude Code、Codex、Ollama）。附带内置终端，并通过 MCP 暴露活动选区和打开的编辑器。

[Agent Dashboard](https://obsidian.md/plugins?id=agentic-vault-dashboard) By _ripple-asuna_

> 在一个仪表板中跟踪 AI 代理工作流、库活动、任务、项目和研究源。

[Xboard](https://obsidian.md/plugins?id=agent-dashboard) By _wruibin803-jpg_

> 笔记、任务、外部信息和 AI 工作流的本地优先工作区。

[Knowledge Graph AI](https://obsidian.md/plugins?id=knowledge-graph-ai) By _xinxiangmu_

> 通过 AI 驱动的实体抽取和关系映射将文本转换为结构化知识图谱。

[AI Linzi](https://obsidian.md/plugins?id=ai-linzi) By _alinawang321_

> 把 AI 霖子接入 Obsidian 数字大脑，支持侧边栏对话、库搜索、内容创作、文章配图、公众号排版与发布。

[Inoh](https://obsidian.md/plugins?id=inoh) By _taisukemino_

> 在写作时高亮 Inoh 词汇卡片中的单词，并在不离开笔记的情况下添加新词。

[Wetstone](https://obsidian.md/plugins?id=wetstone) By _sirhobby_

> 使用你提供的 LLM 密钥，自适应间隔重复测验自己的笔记。

[Grill](https://obsidian.md/plugins?id=grill) By _theadamdanielsson_

> 用自己的笔记测验自己。自带密钥或本地运行。

[VaultQuiz](https://obsidian.md/plugins?id=vaultquiz) By _filhoricardo_

> 从自己的笔记生成每日选择题测验并建立学习连续记录。自带 LLM 密钥（MiniMax、OpenRouter 或任何 OpenAI 兼容 API）。采样的笔记文本会发送到你配置的提供方。

[Smart Question Tutor](https://obsidian.md/plugins?id=smart-quiz-tutor) By _xxinjie21_

> 读取本地 md 知识库，调用 Ollama/OpenAI 兼容 API 自动生成试题，支持导出 MD、Word、PDF，AI 识别试卷、错题本、间隔复习。

[Confidant](https://obsidian.md/plugins?id=confidant) By _dawnofthedebayan_

> 使用 OpenRouter 或任何本地 OpenAI 兼容服务器，以周、双周、月和年节奏生成日记反思摘要，具有三层记忆系统。

[Nightly Journal](https://obsidian.md/plugins?id=nightly-journal) By _damofer_

> 本地 AI 在每天结束时采访你并为你写日记：日记、人物和项目、可确认的写作计划，以及可提问的长期记忆。100% 本地。

[Second Brain Builder](https://obsidian.md/plugins?id=second-brain-builder) By _algometrix_

> 将库发展成链接知识图谱：选择任意单词或短语，使用 Claude Code、Gemini、Codex 或本地 Ollama 模型生成详细的维基链接说明笔记。

[Atoms](https://obsidian.md/plugins?id=atoms) By _taihartman_

> 通过 Anthropic API 将过去的日记捕获分类为链接的原子笔记。

[AI Alias](https://obsidian.md/plugins?id=ai-alias) By _wendao10_

> 永远不让 AI 看到你的真实姓名。在发送前掩盖为代码，回复时恢复——完全本地。

[Transmute](https://obsidian.md/plugins?id=transmute) By _johannes-kaindl_

> 按意图搜索和替换——本地 LLM 编写正则表达式，你在运行前审查每个匹配项。

[AI Refiner](https://obsidian.md/plugins?id=ai-refiner) By _surdeddd_

> 使用 CLI 或 API 提供方通过浮动提示润色所选文本。

[Inline AI](https://obsidian.md/plugins?id=nitinvishway-inline-ai) By _nitinvishway_

> 在任何笔记中输入 /ai <提示>，按回车，本地 Ollama 模型即行内书写。

[AI Translate](https://obsidian.md/plugins?id=ai-translate) By _dxshelley_

> 在不离开 Obsidian 笔记的情况下翻译、查询、听取和保留单词。

[Kuaifanyi](https://obsidian.md/plugins?id=kuaifanyi) By _wjzixi_

> 选中即译：短词词典模式 + 长句流式翻译，AI 解释并行渲染，豆包神经语音朗读（支持声音克隆），兼容 DeepSeek 等 OpenAI 格式 API。

![Kuaifanyi](https://raw.githubusercontent.com/wjzixi/kuaifanyi/master/assets/demo.gif)

[User Prompt Optimizer](https://obsidian.md/plugins?id=user-prompt-optimizer) By _chuanqq_

> 选择提示并用 LLM 优化。两种模式：模板驱动的结构化优化，和免模板轻量润色（消歧/去重/用占位符标记缺失信息）。

[Controlled Tagger](https://obsidian.md/plugins?id=controlled-tagger) By _yuriyagn_

> 使用 OpenAI 兼容模型建议、审查和管理受控标签。

[LLM Auto Title](https://obsidian.md/plugins?id=llm-auto-title) By _darren-zheng_

> 通过本地 LLM 生成笔记标题（默认 LMStudio；任何 OpenAI 兼容服务器）。快捷键为当前笔记命名；批量重命名时间戳笔记。界面自动本地化（英文/中文）。

[LLM Content Block](https://obsidian.md/plugins?id=llm-content-block) By _darren-zheng_

> 将 LLM 文本归档为可滚动、格式安全的卡片。

[LLM Token Count](https://obsidian.md/plugins?id=llm-token-count) By _hardes11_

> 状态栏中精确的 LLM token 计数——GLM-5.2/GPT/Qwen/DeepSeek 精确，Claude/Gemini 近似。

[AI API Key Checker](https://obsidian.md/plugins?id=api-key-checker) By _kigrok_

> 验证 20+ AI 提供方的 API 密钥并检查速率限制。

[AI Co-Editor](https://obsidian.md/plugins?id=live-coedit) By _kebl3541_

> 与 AI 协作者实时共同编辑笔记：它提出修改，你以修订模式审查并批准、拒绝或逐项选择。包括聊天、评论、逐词归属和快照。

[Terminus](https://obsidian.md/plugins?id=terminus) By _notenerd_

> 真正的终端，具有 shell 集成和初学者友好的命令帮助，以及 Claude Code 文件编辑的审查工作流：词级差异、撤销、反向链接破坏警告等。

[Vault Loom](https://obsidian.md/plugins?id=vault-loom) By _yangzuo0621_

> 将库编织成有用的 AI 上下文，用于聊天、检索和确认的笔记操作。

[Vault MCP Connector](https://obsidian.md/plugins?id=vault-mcp-connector) By _tristanedu, vault-mcp_

> 通过显式访问控制将批准的库上下文和直接本地文件工具连接到 MCP 客户端。

[Vault Crews](https://obsidian.md/plugins?id=vault-crews) By _johannes-kaindl_

> 通过 LM Studio 在库上运行自主本地 LLM 代理团队（crews）。

[Local AI for your vault](https://obsidian.md/plugins?id=qvac-local-ai) By _thomasblc_

> 与库完全本地聊天。通过本地 QVAC 伴侣进行语义搜索和带引用的答案。无任何内容离开你的机器。

[Local Image Generator](https://obsidian.md/plugins?id=local-image-generator) By _johannes-kaindl_

> 直接在库中生成图像——GPU 上内置 SD-Turbo，或你本地的 Draw Things / A1111 服务器。私有、设备内、无云。

[Silica Bridge](https://obsidian.md/plugins?id=silica-bridge) By _kiycoh_

> 面板告诉你库对你打开的笔记已知的信息：哪些笔记关于同一主题、哪些重复、哪些链接指向空等。无需 LLM。

[Uru](https://obsidian.md/plugins?id=uru) By _r2k_

> 按意义查找笔记并询问你写的内容。完全本地 AI，无任何内容离开你的机器。

[Hyoka](https://obsidian.md/plugins?id=hyoka) By _abhijeeth-v-n_

> Hyoka——Obsidian 的代理系统。MCP 风格工具循环，最适合本地代理的多配置文件代理。

[Bridge Control](https://obsidian.md/plugins?id=bridge-control) By _studentepercaso_

> 通过可视化文件夹选择器为外部 AI 桥选择安全的本地读写访问。

[ReallyGood Research](https://obsidian.md/plugins?id=reallygood-research) By _reallygood83_

> 运行 NotebookLM/Tavily 式深度研究，并将 Markdown 和 HTML 发布到库中。

[Microlite](https://obsidian.md/plugins?id=microlite) By _jaanaltosaar_

> 将一周所有笔记的编辑转化为一份 LLM 就绪的审查；像整个库的“修订模式”，可粘贴到 Claude 或 ChatGPT。

[Granola API Sync](https://obsidian.md/plugins?id=granola-api-sync) By _arshiaecho_

> 使用官方 Granola API 将会议笔记和完整转录同步到库中。只需粘贴 API 密钥，无需抓取凭据。

[Octo Agent](https://obsidian.md/plugins?id=octo-agent) By _open-octo_

> 将 Octo Agent 编码助手嵌入库中。库成为其工作目录，赋予文件读写、搜索、bash 命令和多步骤工作流能力。

[Wayfinder Maps](https://obsidian.md/plugins?id=wayfinder-maps) By _ocuclaw_

> Wayfinder Maps 将 GitHub 仓库的 issues 转化为下一步工作的实时图景。每个标记为 wayfinder:map 的 issue 渲染为头部卡片，其工单以依赖分层树排列。

[Image AI](https://obsidian.md/plugins?id=image-ai) By _jiang_

> 从图片提取图像风格，并为电商工作流提炼视觉规则。

[AI Article](https://obsidian.md/plugins?id=ai-article) By _jiang_

> 从笔记提取文章风格并为你的工作区生成文章。

[AI Knowledge Manager](https://obsidian.md/plugins?id=ai-book-manager) By _cyk111_

> AI 驱动的图书库管理器，具有自动标记、知识图谱和多种工具技能生成。

[ContextOS](https://obsidian.md/plugins?id=contextos) By _tinkerdragon_

> AI 辅助的摄取、聊天、lint 和 git 支持的 wiki，从 15+ 原始格式（Markdown、PDF、Office 文档、图像等）中复合知识。

[Workbuddian](https://obsidian.md/plugins?id=workbuddian) By _jiang198012_

> 与本地 WorkBuddy/CodeBuddy CLI 作为 AI 代理聊天：流式回复、思考/工具调用卡片、@笔记引用、文件附件、模型/权限工具栏、斜杠命令、带差异的行内编辑、导出和搜索。

[Eventide Quill](https://obsidian.md/plugins?id=eventide-quill) By _eventidemiles_

> 反馈优先、面向小说家的写作助手。

[Writing Assistant Chat](https://obsidian.md/plugins?id=writing-assistant-chat) By _resolve-public_

> AI 写作助手。连接本地或云提供方。具有库级 RAG 检索、知识图谱、代理工具使用。

[coo](https://obsidian.md/plugins?id=coo) By _jwy600_

> 用 AI 讨论、翻译和重写笔记——基于你正在编辑的段落。答案变为可折叠标注，后续问题形成链。

[Vault Autopilot](https://obsidian.md/plugins?id=vault-autopilot) By _echore_

> 通过本地端口接收 Visual Clipper Chrome 扩展的屏幕截图和视频帧，并将结构化笔记写入库。

[Vault Change Feed](https://obsidian.md/plugins?id=vault-change-feed) By _kains2866_

> 将库变更记录为带每读取器游标的机器可读源，使 AI 助手可以增量地赶上你更改的内容。

[Agent Review](https://obsidian.md/plugins?id=agent-review) By _jiaoxiu20040903-crypto_

> 结构化高亮、注释、空间笔记、视觉关系和人机代理协作。

[Canvas Branch Chat](https://obsidian.md/plugins?id=canvas-branch-chat) By _p4nt1um_

> 白板上的 Flowith 式分支 AI 对话。分叉、探索和映射你的思考。

[Graph Chat](https://obsidian.md/plugins?id=graph-chat) By _mhmzdev_

> 扩展图谱视图，笔记在由本地 Claude Code CLI 驱动的 AI 聊天框中打开。分支对话，拖动链接笔记，每个聊天都是真正的 Markdown 笔记。

[Second-Brain Tarot](https://obsidian.md/plugins?id=second-brain-tarot) By _neon-weaver_

> 从真实完整牌组抽出的塔罗牌阅读，并根据你自己库的内容全新解读——不是查找表，不是通用塔罗文案。

##### 任务与项目管理

[Task Card](https://obsidian.md/plugins?id=task-card) By _terryli710_

> 将带标签的 Markdown 任务转换为交互式卡片，包含截止日期、项目、标签和重复，然后以列表或艾森豪威尔矩阵查询。

[TaskNotes Views](https://obsidian.md/plugins?id=tasknotes-views) By _thisisthedave_

> 为 TaskNotes 项目笔记添加项目进度视图。

[Tasks Bridge](https://obsidian.md/plugins?id=tasks-bridge) By _haiqiang-zhang_

> Tasks Bridge 是连接 Obsidian 与外部任务管理服务的集成层，目前支持 Todoist，后续规划更多后端。

[Task Time Tracker](https://obsidian.md/plugins?id=task-time-tracker) By _mythanar_

> 追踪花在复选框任务上的时间（兼容 Tasks 插件），本地存储，支持手动 CSV 导出以兼容外部平台导入器。

[Task Radar](https://obsidian.md/plugins?id=task-radar) By _aura88-tech_

> 任务雷达：圆点距离中心由截止日期驱动。可从雷达上推迟、完成和重新排序任务。

[Tasks custom date](https://obsidian.md/plugins?id=tasks-custom-date) By _ssjy1919_

> 自动写入创建、完成和取消时间戳，支持自定义状态转换和格式模板。

[Tasks Plus](https://obsidian.md/plugins?id=tasks-plus) By _jabaho9523_

> 基于纯 Markdown 的平静 GTD。六个固定视图——收件箱、今日、即将到来、随时、某天、日志——带自然语言日期的快速捕获。任务保持笔记中普通复选框。

[Tasks Eye](https://obsidian.md/plugins?id=ggajos-tasks-eye) By _ggajos_

> 通过读取 Tasks 复选框并将每个活动笔记的下一个可操作、有日期的任务浮出，将笔记组织成任务板。

[Task Tree](https://obsidian.md/plugins?id=task-tree) By _aldorithm392_

> 同时以树和看板形式查看 Markdown 任务。将项目拆分为嵌套子任务；父级进度从子级汇总。纯 Markdown，代理就绪。

[Taskgregator](https://obsidian.md/plugins?id=taskgregator) By _philpalmieri_

> 将原生 Markdown 任务聚合到一个快速仪表板，按项目、人员和领域上下文组织。没有单独数据库、特殊文件或需采纳的规则。

[TaskLoops](https://obsidian.md/plugins?id=taskloops) By _sahandps_

> 从整个库收集带标签的任务行到侧边栏收件箱，用 GTD 方法排序，并标记停滞的项目。

[Task Companion](https://obsidian.md/plugins?id=task-companion) By _879076256_

> 本地优先的任务执行、专注会话、回顾和可复用经验。

[Task Syncer](https://obsidian.md/plugins?id=task-syncer) By _ysonc_

> 与 Microsoft To Do 和 TickTick 同步任务。

[Task Manager](https://obsidian.md/plugins?id=task-manager) By _itnq18_

> 从 Obsidian 侧边栏管理任务并创建可配置的每日工作报告。

[TaskTodo](https://obsidian.md/plugins?id=tasktodo) By _sunnyyylin_

> TaskLite Core 的计划与今日仪表板。

[TaskLite](https://obsidian.md/plugins?id=taskslite) By _sunnyyylin_

> 轻量树感知任务管理器，带 Tasks 兼容的 emoji 元数据。

[Task Manage](https://obsidian.md/plugins?id=task-manage) By _heart-freely_

> 三级任务管理（文件/标题/列表），19 种视图（看板/矩阵/日历/甘特/任务树/统计），批量编辑任务标记，支持多种任务管理方式。

[TaskNotes Agenda Wrapper](https://obsidian.md/plugins?id=tasknotes-agenda-wrapper) By _toyotathief_

> TaskNotes 的简洁“今日议程”窗口——统计、按日期分组的列表和快速任务输入，可用于侧边栏或嵌入笔记。

[TaskNotes for Jira](https://obsidian.md/plugins?id=tasknotes-jira) By _thisisthedave_

> 将 TaskNotes 与 Jira 集成。

[Tasks Backlink Shortener](https://obsidian.md/plugins?id=tasks-backlink-shortener) By _vishae_

> 将 Tasks 插件在每个任务下显示的反向链接缩短为仅笔记基础名，而非完整路径、标题和 .md 扩展。

[Smart Done Mover](https://obsidian.md/plugins?id=smart-done-mover) By _wxjett_

> 将已完成任务移动到可定制的“完成”区域，支持嵌套任务过滤、自动模式和 Tasks 插件支持。

[Checkbox Progress](https://obsidian.md/plugins?id=checkbox-progress) By _wallacewyslas_

> 在视图标题（移动端 + 桌面）和状态栏显示复选框进度条，带重置按钮清除所有复选框。

[Checkbox Status](https://obsidian.md/plugins?id=checkbox-status) By _emklasson_

> 在状态栏和/或独立视图中显示勾选和总复选框计数。使用命令循环切换自定义复选框状态集。

[Checkbox Context Menu](https://obsidian.md/plugins?id=checkbox-context-menu) By _carbongo_

> 右键上下文菜单切换复选框状态。

[Multistate Checkboxes](https://obsidian.md/plugins?id=multistate-checkboxes) By _evgene-kopylov_

> 主题无关的扩展复选框状态，带自定义 SVG 图标。

[Sort Checked Tasks](https://obsidian.md/plugins?id=sort-checked-tasks) By _akamsheh_

> 将已勾选的清单项移至其任务组底部。

[Clear Checklist](https://obsidian.md/plugins?id=clear-checklist) By _strayvlad_

> 一键重置重复清单。在清单下方添加按钮，取消勾选所有已完成项，让每日清单焕然一新。

[Unfinished Todo Highlighter](https://obsidian.md/plugins?id=unfinished-todo-highlighter) By _7jo-yamato_

> 高亮有未完成任务的文件，并提供同步的库级任务摘要。

[Todo Economy](https://obsidian.md/plugins?id=todo-economy) By _solidens_

> Тудушник, где выполненные задачи приносят баллы, а баллы тратятся на награды. Цены не выдуманы: система решает их из твоего реального месячного прихода. Интерфейс — ASCII.

[Todo Calendar](https://obsidian.md/plugins?id=todo-calendar) By _itzqingyu_

> 你的 to-do-calendar.md（或任何保存待办任务的 Markdown 文件）的可视日历。

[Todoist-Plug](https://obsidian.md/plugins?id=todoist-plug) By _albibenni_

> 强大的 Todoist 集成，用于管理任务。

[Todoist Pomodoro Heatmap](https://obsidian.md/plugins?id=todoist-pomodoro-heatmap) By _keptan_

> 使用番茄钟和漂亮的贡献热力图跟踪 Todoist 任务。

[Todoist Task Notes](https://obsidian.md/plugins?id=todoist-task-notes) By _natysh1011_

> 为每个 Todoist 任务创建一个层级 Obsidian 笔记，双向同步。

[Microsoft To Do](https://obsidian.md/plugins?id=microsoft-todo) By _jimmieldavisjr_

> 浏览 Microsoft To Do 列表，创建、编辑、完成和重新打开任务，并将笔记或选中文本发送到 To Do——无需离开库。

[MS To Do Sync](https://obsidian.md/plugins?id=ms-todo-sync) By _zhuzhige123_

> 将带标签的 Obsidian 任务同步到专用 Microsoft To Do 列表：笔记、子任务、提醒和 Obsidian 深度链接。

[Nextcloud Tasks](https://obsidian.md/plugins?id=nextcloud-tasks) By _junskix1_

> 通过 CalDAV 在笔记中读取、创建、编辑和完成 Nextcloud Tasks。任务保留在服务器上：无 Markdown 镜像、笔记中无复选框，无不同步风险。

[Dida Dashboard](https://obsidian.md/plugins?id=dida-dashboard) By _wdlin233_

> 在 Obsidian 内显示 Dida365/TickTick 任务，无需同步为 Markdown。

[Things3 Pages](https://obsidian.md/plugins?id=things-pages) By _nejm_

> 将 Things3 收件箱、项目和领域镜像为可编辑的 Markdown 笔记。

[Trello-Sync](https://obsidian.md/plugins?id=trellosync) By _kfirgum_

> Trello 和 Obsidian 之间的实时同步。

[Trello Kanban Sync](https://obsidian.md/plugins?id=trello-kanban-sync) By _lewisstarkov_

> 按间隔将 Trello 看板镜像到原生 Kanban 插件看板，可选双向同步。

[Kanban Plus++](https://obsidian.md/plugins?id=kanban-plus-xzhi) By _xzhi_

> EN: Enhanced Kanban fork with automatic complete-list movement, source tracking, unarchive support, card time records, time sorting, custom list colors and more. | 中文: Kanban 增强版，支持完成列自动流转、来源追踪、取消归档、卡片时间记录、时间排序与自定义列背景色等功能。

[Kanban Complete Mover](https://obsidian.md/plugins?id=kanban-complete-mover) By _valleytheknight_

> 当看板卡片复选框被勾选时，立即将其移动到完成列，可选完成日期戳。

[ArtinOrs Advanced Kanban](https://obsidian.md/plugins?id=artinors-kanban) By _artinor_

> ArtinŌr 高级看板，强大的看板。

[Fancy Kanban](https://obsidian.md/plugins?id=fancy-kanban) By _robertoallende_

> 终于住在你笔记里的看板。

[Property Kanban](https://obsidian.md/plugins?id=property-kanban) By _maitake4211_

> 由笔记 frontmatter 属性驱动的看板。创建、移动和删除卡片与笔记属性同步，支持泳道、快速操作和父子链接。

[Hans Kanban](https://obsidian.md/plugins?id=hans-kanban) By _hansai-art_

> 数据库的看板和砖石卡片视图：按属性整卡着色、卡上状态切换、可调列宽、泳道和极简模式。界面英文和繁体中文。

[NextDeck](https://obsidian.md/plugins?id=nextdeck) By _onlymykazari_

> Markdown 支持的看板，与 Nextcloud Deck 双向同步。

[Kan Sync](https://obsidian.md/plugins?id=kan-sync) By _x-o-r-r-o_

> 将 Obsidian 清单与 Kan.bn 看板同步。查看看板，将笔记清单推送为卡片，将看板状态拉回笔记。

[FlowBoard PM](https://obsidian.md/plugins?id=flowboard-pm) By _cong-xu_

> 轻量项目管理看板，Linear 风格列、卡片、标签、拖放和本地看板文件。

[Product Backlog](https://obsidian.md/plugins?id=product-backlog-view) By _luis85_

> 将数据库结果显示为可排序的 Epic、Feature、PBI 和 Task 产品待办树，支持拖放排序，灵感来自 Azure DevOps Boards。

[PM Compass](https://obsidian.md/plugins?id=pm-compass) By _laurent-ferier_

> 在 obsidian-pm 项目笔记和日记清单之上添加任务仪表板、收件箱、每周回顾和依赖图。

[Project Manager with Time Tracking](https://obsidian.md/plugins?id=project-manager-with-time-tracking) By _milad-s5_

> 将项目和任务规划为 Markdown 笔记，追踪时间，并在仪表板中回顾。支持公历或 Jalali（波斯）日历。

![Project Manager with Time Tracking](https://raw.githubusercontent.com/milad-s5/obsidian-project-manager-with-time-tracking/master/images/overview.png)

[Gantt this](https://obsidian.md/plugins?id=gantt-this) By _altarok_

> 自定义 TTRPG 日历的交互式甘特图，支持数据库视图。直接从笔记 frontmatter 追踪战役事件、时代和时间戳。

[Gantt Tracker](https://obsidian.md/plugins?id=gantt-tracker) By _surranov_

> 真实项目追踪甘特图：计划与实际条形、自动高亮延迟、提前完成和暂停、假期和休息日列、每日评论、粘性表头。用简单 YAML 代码块配置。

[Smart Gantt](https://obsidian.md/plugins?id=smart-gantt) By _nhannht_

> 从任务生成甘特图。

[Folder Timeline](https://obsidian.md/plugins?id=folder-timeline) By _rudecrab_

> 将任意文件夹变成时间轴/甘特图。

[Time Blocks](https://obsidian.md/plugins?id=time-blocks) By _jonmccon_

> 每周时间块白板，带 Tasks 插件待办、拖放调度和 Google 日历集成。

[Time Visualization](https://obsidian.md/plugins?id=time-visualization) By _kornilovivan_

> 任务日历，可在日、周、月视图间平滑缩放。

[Time Recorder](https://obsidian.md/plugins?id=time-recorder) By _louie-vibecoding_

> 两键打卡时间追踪。每日摘要和时间线回填，全部存储为 Markdown。

[Interval Timer](https://obsidian.md/plugins?id=interval-timer) By _tamiroh_

> 使用番茄工作法等运行专注和休息周期，并在 Markdown 任务行上记录完成间隔。

[Custom Timer](https://obsidian.md/plugins?id=custom-timer) By _catalyys_

> 从计时器代码块运行间隔计时器，带组、工作和暂停时长，用于锻炼或其他。

[Scrying Mirror of Productivity](https://obsidian.md/plugins?id=scrying-mirror) By _lyra-4leafclover_

> 一体化专注庇护所：番茄流计时、无限嵌套子任务的指令矩阵、多时间尺度遥测和液体写作库同步。

[Mission Control](https://obsidian.md/plugins?id=mission-control) By _andrewkfb_

> 源自单个文件夹的主标签页任务和项目仪表板，带 Omnisearch 集成。

[Noesis Flow](https://obsidian.md/plugins?id=noesis-flow) By _k2ak3n_

> 私有、Markdown 原生的任务中心，用于收件箱捕获和规划。

[DayDeck](https://obsidian.md/plugins?id=daydeck) By _shivrajrath_

> 组织你的思维：强大的认知仪表板，将策略与无摩擦执行分离。

[Worktable](https://obsidian.md/plugins?id=worktable) By _daoyoung_

> 专注、任务、学习、回顾和新闻的原生仪表板。

[HomePulse](https://obsidian.md/plugins?id=homepulse) By _jukkau_

> 基于组件的个人主页仪表板，带网格布局、拖动编辑和工作流小部件。

[O-Dashboard](https://obsidian.md/plugins?id=o-dashboard) By _renhao-wan_

> 你的个人指挥中心——备忘录、待办和项目尽在一个惊艳的玻璃拟态仪表板。

[Prism Dashboard](https://obsidian.md/plugins?id=prism-dashboard) By _stef4678_

> 上下文自适应仪表板，按一天中的时间、活动项目和实时优先级重新配置。

![Prism Dashboard](https://raw.githubusercontent.com/stef4678/prism-dashboard/master/assets/morning.png)

[Aurora Dashboard](https://obsidian.md/plugins?id=cool-dashboard) By _stef4678_

> 精致交互式仪表板和控制中心，带可拖动小部件、日历和活动追踪。

![Aurora Dashboard](https://github.com/user-attachments/assets/617a5e93-efc4-46b2-8db9-5ee6d9289d7f)

[Dashboard](https://obsidian.md/plugins?id=aurora-dashboard) By _tianxiangyu0717-hub_

> 交互式主页仪表板，含待办、3D 知识图谱、插件快捷方式、库健康和写作活动。

[Card Dashboard](https://obsidian.md/plugins?id=card-dashboard) By _sourit2001_

> 此库的可视卡片仪表板。

[CleanView](https://obsidian.md/plugins?id=cleanview) By _sjef200_

> 快速、完全本地的仪表板：任务列表、表格、关键数字、倒计时和手绘 SVG 图表。无网络、无 JavaScript 评估、无依赖。

[Progress Dock](https://obsidian.md/plugins?id=progress-dock) By _ririririse_

> 在可停靠仪表板中追踪数字目标、截止日期、倒计时和分支学习路线图。

[Dayframe](https://obsidian.md/plugins?id=dayframe) By _ganesshkumar_

> 像相框一样，但用于你的日记。

[Daily Work Log](https://obsidian.md/plugins?id=daily-work-log) By _seongchan_

> 通过最少的元数据从日记直接可视化每日时间追踪和待办列表。

[Logbook](https://obsidian.md/plugins?id=logbook) By _p1tt1_

> 使用 org-mode LOGBOOK 风格时钟条目在任务上追踪时间，存储为 Dataview 可查询的行内字段。

[TimeMeter](https://obsidian.md/plugins?id=timemeter) By _nauppece_

> 自动追踪最前方应用并记录到 Markdown 的时间追踪器（macOS 追踪；移动端查看/手动记录）。

[Clinical Workspace](https://obsidian.md/plugins?id=clinical-workspace) By _drbinsaad_

> 移动优先的本地临床工作流，用于患者、护理事件、任务和手术日志条目。

[Casefile](https://obsidian.md/plugins?id=casefile) By _m0farhan_

> Jira 风格的案件和 SOC 事件追踪：问题键、史诗、看板泳道、SLA 计时器、IOC 处理、报告和班次交接。

[Team Manager](https://obsidian.md/plugins?id=team-manager) By _andyguy-dot_

> 管理团队：人员卡片与节奏健康度、带议程缓冲的 1:1、带日志的项目、绩效观察和通用快速捕获。

[Meeting Tools](https://obsidian.md/plugins?id=meeting-tools) By _extzzy_

> 原生会议笔记、快速日志和可编辑任务仪表板，无外部服务。

[Calendar Panel](https://obsidian.md/plugins?id=calendar-panel) By _lizijing98_

> 日记与周记的日历面板插件 / Calendar panel view for daily and weekly note.

[Calendar Note View](https://obsidian.md/plugins?id=calendar-note-view) By _sakurastral_

> 通过日历界面查看基于日期的笔记和属性。

[Period Calendar](https://obsidian.md/plugins?id=period-calendar) By _lordneoz_

> 日、周、月、季和年笔记的日历。每个周期可点击，正确处理 ISO 周，读取你现有的 Periodic Notes 设置。

[Calendar of Notes](https://obsidian.md/plugins?id=calendar-of-notes) By _goodjinc_

> 在快速紧凑的日历中按日期浏览和打开笔记。

[Calendar Ledger](https://obsidian.md/plugins?id=calendar-ledger) By _millioncheung_

> 在一个 Markdown 文件中管理日期、记录、范围、标签和统计。

[Simple Calendar](https://obsidian.md/plugins?id=simple-calendar) By _bookmarklover_

> 可轻度装饰的极简日历。

[Calendar Heatmap Tracker](https://obsidian.md/plugins?id=calendar-heatmap-tracker) By _mxncrou_

> 在笔记中直接渲染行内 GitHub 风格日历热力图追踪器，带快速输入字段记录今日值。数据存储在本地 JSON 文件。

[Birthday Reminder](https://obsidian.md/plugins?id=birthday-reminder) By _lifein_

> 显示联系人生日提醒，支持公历/农历转换、星座和生肖，日历视图。

[PrayerChime](https://obsidian.md/plugins?id=prayer-chime) By _mjavadh_

> 伊朗城市的离线伊斯兰祈祷时间。

![PrayerChime](https://raw.githubusercontent.com/mjavadh/PrayerChime/master/screenshot/desktop.png)

[Ogenda](https://obsidian.md/plugins?id=ogenda) By _jiang198012_

> 双向日历同步（CalDAV/iCloud）带议程视图。

[Calendar Importer](https://obsidian.md/plugins?id=calendar-importer) By _efficient-x_

> 将外部日历事件导入任务笔记，无需重新输入。

[Google Calendar Agenda](https://obsidian.md/plugins?id=google-calendar-agenda) By _lukewowo_

> 从代码块查询 Google 日历并将即将发生的事件渲染为议程、列表或表格。

[Power Desk](https://obsidian.md/plugins?id=powerdesk) By _powerplugins-dev_

> 将 Microsoft 365、Google、CalDAV 和 ICS 日历引入 Obsidian，支持月、周、日和议程视图，带邮件分拣收件箱和每事件一笔记。

[AgendaPane](https://obsidian.md/plugins?id=daytask) By _peanutup_

> 在侧边栏日历中规划一次性和重复任务，无需创建 Markdown 笔记。

[Coupon Scheduler](https://obsidian.md/plugins?id=coupon-scheduler) By _vrytfmcat_

> 在日历中安排优惠券、杂货、购物提醒和重复活动。

![Coupon Scheduler](https://raw.githubusercontent.com/vrytfmcat/coupon-scheduler/master/icon.png)

[Expiry Manager](https://obsidian.md/plugins?id=expiry-manager) By _sahilium_

> 追踪任何到期、续订或需定期关注的事物。管理订阅、文档、许可证等。

[DDL Radar](https://obsidian.md/plugins?id=ddl-radar) By _yzyhhhstudy_

> CS 会议截止日期倒计时：侧边栏面板、笔记内截止日期板、frontmatter 链接的倒计时横幅和状态栏徽章。

##### 笔记编辑与格式化

[Feel the Notion](https://obsidian.md/plugins?id=feel-the-notion) By _michael-5653_

> 实时预览中的 Notion 式块编辑：拖动整个块、选择整个块、块感知的 Cmd+A 和 Backspace，以及斜杠插入菜单。

[Better Paste](https://obsidian.md/plugins?id=better-paste) By _johansan_

> 移除链接中的追踪参数，获取页面标题，并清理从 AI 聊天、终端和 PDF 文档粘贴的文本。

[Quick Editing](https://obsidian.md/plugins?id=quick-editing) By _hanser0521_

> 快速 Markdown 转换、智能粘贴、文本清理、内部链接、间距和空行编辑。

[Markdown Autofix](https://obsidian.md/plugins?id=markdown-autofix) By _swift_

> 实时检测活动笔记中的 Markdown 语法错误，并自动修复可安全修复的错误。

[Smart List Input](https://obsidian.md/plugins?id=smart-list-input) By _hygyh_

> 智能 Markdown 列表输入：中文标点（1、1。等）自动转标准序号，支持有序/无序/待办列表快速切换，子项类型与所在层级保持一致。

[Quick Expand Selection](https://obsidian.md/plugins?id=quick-expand-selection) By _mushan-bit_

> 使用 Markdown 感知、可配置的边界扩展和收缩文本选区。

[Text Alchemy](https://obsidian.md/plugins?id=text-alchemy) By _nameiskyro_

> 清理、间距、排序、链接和列出所选文本或整个笔记。

[Fold by Bullet](https://obsidian.md/plugins?id=fold-by-bullet) By _psephopaiktes_

> 根据列表项使用的项目符号字符默认折叠列表项。写 - 开始折叠，+ 保持展开。

[Bullet Depth Markers](https://obsidian.md/plugins?id=bullet-depth-markers) By _michael-5653_

> 在文件和屏幕上保持无序列表标记（-、*、+）与嵌套深度同步。

[Heading Level Changer](https://obsidian.md/plugins?id=heading-level-changer) By _birchove_

> 通过热键或编辑器上下文菜单提升或降低所选行的 Markdown 标题级别（h1-h6）。正文、图片、表格、标签和代码块不受影响。

[Heading Handler](https://obsidian.md/plugins?id=heading-handler) By _goopii_

> 尊重文档层级和缩进的智能标题命令。

[MM Clean Headers](https://obsidian.md/plugins?id=mm-clean-headers) By _lemathmath_

> 简化编辑各级标题，并自动化一致的格式。 #cleaner #headings #capitalize #lowercase #uppercase

[MM Clean Links](https://obsidian.md/plugins?id=mm-clean-links) By _lemathmath_

> 在实时预览模式下简化编辑各类链接，并自动化外部链接标题的一致格式。 #cleaner #links #capitalize #lowercase #uppercase

[Markdown Fixer](https://obsidian.md/plugins?id=markdown-fixer) By _muhammedhunaid_

> 在粘贴或按需时修复不可见 Unicode 字符、框线表格、空格管道表格、空格代码块和尾随空白。

[AindentPaper](https://obsidian.md/plugins?id=aindentpaper) By _louvlwu_

> 针对文本段落首行缩进的插件，支持启用段落首行缩进（含 <br> 自动拆分）和段落拆分器（独立开关），并提供纸质纹理背景效果。

[Pretty Paragraphs](https://obsidian.md/plugins?id=pretty-paragraphs) By _meljadyn_

> 以小说风格缩进段落：首行缩进并移除段落间距。

[Ligature](https://obsidian.md/plugins?id=ligature) By _pmgwork_

> 将输入字符序列替换为 Unicode 符号，同时保留受保护的 Markdown 上下文。

[Paste ASCII Table](https://obsidian.md/plugins?id=paste-ascii-table) By _arkounay_

> 粘贴时将终端输出中的框线和 ASCII 表格转换为真正的 Markdown 表格，重新连接终端换行的单元格。

[Code Fence Completer](https://obsidian.md/plugins?id=code-fence-completer) By _swhl_

> 可靠地建议语言标识符并补全 Markdown 代码块围栏。

[Clang-Format Code Blocks](https://obsidian.md/plugins?id=clang-format-code-blocks) By _oemer-kara_

> 使用 clang-format 格式化笔记中的围栏代码块。

[Copy Indented Code Blocks](https://obsidian.md/plugins?id=copy-indented-code-blocks) By _gvivster_

> 从缩进代码块复制时移除前导缩进。

[Details Markdown](https://obsidian.md/plugins?id=details-markdown) By _nickolay-kondratyev_

> 在阅读视图的原生 HTML details 块内渲染 Markdown（标题、列表、表格、链接、嵌入）。

[Markdown Columns](https://obsidian.md/plugins?id=markdown-columns) By _peterczegledy_

> 使用简单语法创建响应式 Markdown 列。

[MD Formatter](https://obsidian.md/plugins?id=md-formatter) By _funnycodezj_

> 一键 Markdown 格式化，带可定制规则。

[Symbol Stripper](https://obsidian.md/plugins?id=symbol-stripper) By _tasete_

> 选中文本，一键剔除指定字符或正则匹配 / Select text and strip specified characters or regex matches with one click

[Writing Regex Replacer](https://obsidian.md/plugins?id=writing-regex-replacer) By _jakoblien_

> 在你书写时使用可配置的正则表达式替换文本。

[Replace Memory](https://obsidian.md/plugins?id=replace-memory) By _zoe_

> 记住常用替换规则，并按所选顺序一键全部应用。

[Tabsdown](https://obsidian.md/plugins?id=tabsdown) By _grafanakibana_

> 为可渲染 Markdown 的内容创建无障碍、主题原生的选项卡块。

[Tabbed Blocks](https://obsidian.md/plugins?id=tabbed-blocks) By _quincysx_

> 将围栏代码块转换为可切换选项卡，带延迟渲染和语法辅助。

[Particle Spoilers](https://obsidian.md/plugins?id=particle-spoilers) By _llxzxzxll_

> 在粒子动画下隐藏 ||双竖线|| 之间的文本。

[Discord Syntax](https://obsidian.md/plugins?id=md-discord-syntax) By _edems-dev_

> Discord 风格 ||spoiler|| 和 "-# subtext" Markdown 格式扩展

[Colors](https://obsidian.md/plugins?id=colors) By _baheyshalash_

> 使用十六进制标记为文本着色，在实时预览、阅读模式和 PDF 导出中渲染一致。菜单将调色板名称映射到十六进制颜色；笔记仅存储十六进制值。

[Custom Badges](https://obsidian.md/plugins?id=custom-badges) By _sulemon_

> 为笔记添加行内徽章/标注，用户可定义徽章类型、图标和颜色。

[Callout Customizer](https://obsidian.md/plugins?id=callout-customizer) By _sevryng_

> 右键任何标注以更改其 Lucide 图标、颜色、标题和折叠状态。设置内联存储在笔记中。

[Callout Metadata](https://obsidian.md/plugins?id=callout-metadata) By _dudethatserin_

> 在标注上添加和读取元数据令牌。适用于现有标注，无需更改语法。

[ezHighlighter](https://obsidian.md/plugins?id=ez-highlighter) By _ezydark_

> 使用主题感知颜色的文本和背景高亮原型。

[Lemon Comments](https://obsidian.md/plugins?id=lemon-comments) By _blackflag0623_

> 在阅读视图中为所选文本添加 Markdown 注释。

[Margin Notes](https://obsidian.md/plugins?id=margin-notes) By _writing-editor_

> 添加字面书边笔记，支持每文件选择性激活，外加可选 AI 笔记代理为你建议和放置。

[Side-Notes](https://obsidian.md/plugins?id=side-notes) By _friedfishsticks_

> 在 Obsidian 中创建 Tufte 风格边注，带递增编号。

[FloatMark](https://obsidian.md/plugins?id=float-mark) By _wanghuan9_

> 飞书式选中浮动快捷操作、正文标注、侧边评论与可选 Lark 同步的 Obsidian 插件。

[GlanceVeil](https://obsidian.md/plugins?id=glanceveil) By _mickadlr_

> 用熟悉的替代文字掩盖笔记文本，而不更改 Markdown 源。

[Redacted](https://obsidian.md/plugins?id=redacted) By _jsandburg_

> 使用方块字符或自定义字符永久涂黑所选文本。

[Featherlight](https://obsidian.md/plugins?id=featherlight) By _jsandburg_

> 对笔记执行字符限制，带实时状态栏计数器显示已用和剩余字符。

[Typing Interface Hider](https://obsidian.md/plugins?id=typing-interface-hider) By _sergeybychkovvvpgroup-beep_

> 输入时隐藏 Obsidian 界面，然后可选在空闲延迟或鼠标移动后恢复。

[Slashosaurus](https://obsidian.md/plugins?id=slashosaurus) By _polygonhunter_

> 斜杠菜单，所见即所得——输入 / 并从实时彩色预览中选择块、标题和标注，而非记忆语法。

[XU Quick CodeBlock](https://obsidian.md/plugins?id=quick-codeblock) By _xcloud-ai_

> 快速插入代码块，自动光标定位。支持自定义语言、选区包裹、带冲突检测的热键配置。

[LaTeX Assistant](https://obsidian.md/plugins?id=latex-assistant) By _erimanga_

> VSCode+LaTeX Workshop 式编辑体验：片段、自动补全、智能换行、括号配对等。

[Mathify Notes](https://obsidian.md/plugins?id=mathify-notes) By _katananananna_

> 自动转换 1/2 ➔ ½（分数），H2O ➔ H₂O（化学），sqrt(x) ➔ √x（根号）等

[Title Case Converter](https://obsidian.md/plugins?id=title-case-converter) By _maxsrodenkirchen_

> 使用引用风格规则将所选文本转换为合适的标题大小写（AMA，计划更多风格）。

[Tidy Titles](https://obsidian.md/plugins?id=tidy-titles) By _hoxi_

> 从笔记标题生成 slug 文件名

[Header Filename](https://obsidian.md/plugins?id=header-filename) By _rbrauner_

> 根据第一个 H1 标题自动重命名文件，支持短横线命名和波兰语变音符号。

[Frontmatter Cleaner](https://obsidian.md/plugins?id=frontmatter-cleaner) By _sharfaroz_

> 在触摸友好的模态框中查看当前文件的 frontmatter 属性，并删除/移动所选属性。

[YAML Properties](https://obsidian.md/plugins?id=yaml-properties) By _robert-fleming_

> 以可读、语法高亮的 YAML frontmatter 编辑属性，不需要时折叠。

[Property Panels](https://obsidian.md/plugins?id=property-panels) By _sakurastral_

> 在笔记内可配置面板中显示和编辑 frontmatter 属性。

[Property Order](https://obsidian.md/plugins?id=property-order) By _zyx_

> 在 Obsidian 中重新排序属性值并自定义属性键建议顺序。

![Property Order](https://raw.githubusercontent.com/ZHYX91/obsidian-property-order/main/docs/assets/property-order-cross-property-drag.gif)

[Foldable Frontmatter Groups](https://obsidian.md/plugins?id=foldable-frontmatter-groups) By _cwagner223355_

> 为原生属性面板添加可折叠组标题、规范键排序、文件夹范围模板和清理工具。

[Native Property Operator](https://obsidian.md/plugins?id=native-property-operator) By _jqml_

> 跨 Markdown 笔记安全预览和应用原生 frontmatter 属性操作。

[Frontmatter Timestamps](https://obsidian.md/plugins?id=frontmatter-timestamps) By _jqml_

> 保持创建和更新 frontmatter 时间戳与 Markdown 文件事件同步。

[Status Date Tracker](https://obsidian.md/plugins?id=status-date-tracker) By _whiletruegeek_

> 当追踪属性值变化时添加日期。

[YAML Creator](https://obsidian.md/plugins?id=yaml-creator) By _nameiskyro_

> 从聚焦弹窗创建、组织并复用 YAML 属性。

[Schema Refactor](https://obsidian.md/plugins?id=schema-refactor) By _mmortise_

> 跨 Markdown frontmatter 和数据库引用安全重命名属性。

[Property from backlink](https://obsidian.md/plugins?id=property-from-backlink) By _jackydangelo_

> 为所有链接到当前笔记的笔记添加 frontmatter 属性。

[Metadata Links](https://obsidian.md/plugins?id=metadata-links) By _ansango_

> 添加元数据块

[Multi Definitions](https://obsidian.md/plugins?id=multi-definitions) By _decai335335-debug_

> 为术语保存多个解释，并在笔记中通过悬停或点按预览。

[Inline Note](https://obsidian.md/plugins?id=inline-note) By _yaye-work_

> 在当前位置创建并编辑链接笔记，无需离开当前笔记。

[Note Zoom](https://obsidian.md/plugins?id=note-zoom) By _fusionc0rn_

> 使用 Ctrl+ 滚轮缩放笔记内容，每标签页记忆，侧边栏不受影响。

![Note Zoom](https://yumiblog-1330999844.cos.ap-guangzhou.myqcloud.com/piccip/zoom-demo22.gif)

[Note Types](https://obsidian.md/plugins?id=filtered-file-commands) By _jsmorabito_

> 使用创建命令、过滤文件选择器、悬停预览、样式化维基链接和侧边栏小部件定义笔记类型。

[Skeletal](https://obsidian.md/plugins?id=skeletal) By _monapdx_

> 适用于各种内容的 Markdown 结构。

[Fileclass](https://obsidian.md/plugins?id=fileclass) By _mdelobelle_

> 为笔记提供类型化、带校验的属性与引导输入——定义可复用的笔记类型，如 frontmatter 的架构。Metadata Menu 的继任者，由数据库驱动。

[Oxill Forms](https://obsidian.md/plugins?id=oxill-forms) By _oxill_

> 一次性构建表单，然后在模态框中填写以创建笔记、编辑笔记属性或插入文本。支持六种语言。

[BaseForm](https://obsidian.md/plugins?id=base-form) By _tylercarrol_

> 为数据库创建可编辑表单视图。

[MarkBase](https://obsidian.md/plugins?id=mark-base) By _tylercarrol_

> 创建自由形式的 Markdown 数据库视图。

[Basify](https://obsidian.md/plugins?id=basify) By _leolaurindo_

> 将列表、表格和任务列表转换为 Obsidian 数据库。每项一个笔记。

[Property Organizer](https://obsidian.md/plugins?id=property-organizer) By _vkostyanetsky_

> 保持 frontmatter 属性自定义顺序。

[Tree Editor Linked Properties](https://obsidian.md/plugins?id=tree-editor-linked-properties) By _siraht_

> 直接在 Markdown 列表行旁编辑可配置的链接笔记属性。

[Multi-Version Notes](https://obsidian.md/plugins?id=version) By _mizhidaili_

> 创建和切换笔记的多个可编辑版本。

[Section Variants](https://obsidian.md/plugins?id=section-variants) By _gabrielbacha_

> 在一个笔记内切换、比较和管理 Markdown 部分的并行版本。

![Section Variants](https://raw.githubusercontent.com/gabrielbacha/Obsidian-Section-Variants/master/Screenshot1.png)

[Hoist](https://obsidian.md/plugins?id=outline-hoist) By _michael-welch_

> 使用占位符模板在父行显示嵌套列表项的值。

[Unified Outliner](https://obsidian.md/plugins?id=unified-outliner) By _kazdonkai_

> 移动、重新组织并本地编辑标题部分和列表子树。

[Copy Outline](https://obsidian.md/plugins?id=copy-outline) By _yoav6_

> 添加按钮将当前笔记大纲复制到剪贴板。

[Beyond TOC](https://obsidian.md/plugins?id=beyond-toc) By _schemen_

> 用紧贴文本并随阅读位置跟踪的浮动目录导航长笔记。

[Wave TOC](https://obsidian.md/plugins?id=wave-toc) By _hanser0521_

> Obsidian 的流畅轨道式浮动目录。

[TOC Reader](https://obsidian.md/plugins?id=toc-reader) By _muzi-xiaoren_

> 在阅读视图和实时预览中将 Typora 风格 [TOC] 渲染为可点击嵌套目录。

[TOC Block](https://obsidian.md/plugins?id=toc-block) By _grmartin_

> 在笔记中任何位置输入 Typora 风格 [TOC] 标签——或你自己的正则模式，甚至是代码围栏标记——渲染由标题构建的实时目录。可选择显示为链接或在实时预览中隐藏。通过命令面板或右键菜单插入，标题变化时保持同步，在阅读视图中为真实链接。

[Subtle TOC Plus](https://obsidian.md/plugins?id=subtle-toc-plus) By _xzhi_

> Subtle TOC 增强版，支持搜索、标签过滤、层级徽标、颜色/透明度自定义与面板固定等功能。

[Extended Headings](https://obsidian.md/plugins?id=extended-headings) By _obsidiest_

> 将 Obsidian 标题系统扩展到 H12，具有一致的编辑、样式、折叠、大纲、链接、导航和标题级别标记。

![Extended Headings](https://raw.githubusercontent.com/obsidiest/obsidian-extended-headings/master/docs/images/extended-heading-levels-live-preview.png)

[Indent to Headings](https://obsidian.md/plugins?id=indent-to-headings) By _musel25_

> 将普通缩进大纲转换为 Markdown 标题。

[Trailmark](https://obsidian.md/plugins?id=trailmark) By _quangnd159_

> 使用紧凑流畅的章节导轨和丰富预览导航长笔记。

[Kami Reader Companion](https://obsidian.md/plugins?id=kami-reader-companion) By _kkenny0_

> 连续的 Kami 风格 Obsidian 外壳，带阅读台、精确大纲同步和自适应宽内容。

[Horizontal Scroll View](https://obsidian.md/plugins?id=horizontal-scroll-view) By _user-dk_

> 将笔记按 H1/H2/H3 标题拆分为可调整大小的并排列。每列垂直滚动；整体水平滚动。

[Scroll Control](https://obsidian.md/plugins?id=scroll-control) By _soringherghisan_

> 使用 Ctrl+ 上/下逐行滚动，就像在 VSCode 和其他代码编辑器中一样。

[Smart Autocorrect](https://obsidian.md/plugins?id=smart-autocorrect) By _zangeti_

> 库内手机式自动更正和下一个词预测。

[macOS Autocorrect](https://obsidian.md/plugins?id=mac-autocorrect) By _ninsuhnrey_

> 由原生 macOS 拼写检查器（NSSpellChecker）驱动的输入自动更正，Electron 拼写检查器作为备选。

[Image Title](https://obsidian.md/plugins?id=image-title) By _reticenceji_

> 在阅读视图中将图片 alt 文本渲染为可见标题。

[Inline Link Suggestions](https://obsidian.md/plugins?id=inline-link-suggestions) By _laughedelic_

> 在编辑器中为现有笔记（包括别名）的纯文本提及加下划线。点击提及将其转为维基链接。

[Linkr](https://obsidian.md/plugins?id=linkr) By _nameiskyro_

> 快速、通用的维基链接工作流，用于文件、标题、块和嵌入。

[LinkDex](https://obsidian.md/plugins?id=linkdex) By _kbonn_

> LinkDex——自动将相关术语包裹为维基风格链接。

[Virtual Autolink](https://obsidian.md/plugins?id=virtual-autolink) By _avinashkanaujiya_

> 自动为笔记中与库中其他笔记标题或别名匹配的文本创建虚拟链接。创建词汇表式功能，显示未链接提及并转换为真实链接。

[GFM Heading Links](https://obsidian.md/plugins?id=gfm-heading-links) By _lucasgaldinos_

> 在运行时解析 GFM 风格 kebab-case 标题链接（例如 #my -heading）——无需导出技巧，在实时预览和阅读视图均有效。

[Alias Linker](https://obsidian.md/plugins?id=alias-linker) By _johannrichard_

> 解析裸别名链接的实验性 Obsidian 插件。

[Mark e Link](https://obsidian.md/plugins?id=mark-and-link) By _wgg2bhccq2-afk_

> 视觉高亮所选文本并转换为可点击内部链接。

[Drag Bi-Link](https://obsidian.md/plugins?id=drag-biolink) By _lingxifox_

> 使用 Option 或 Alt 和可配置选择键，在分屏间拖动以链接现有文本。

[Find in Note](https://obsidian.md/plugins?id=find-in-note) By _mikagosz_

> 搜索当前笔记并原位高亮每个匹配项，不影响表格、标注或其他块的渲染。

[TraceTime](https://obsidian.md/plugins?id=tracetime) By _quincysx_

> 显示笔记每个块最后编辑的时间。

[File name length limit](https://obsidian.md/plugins?id=file-name-length-limit) By _dmitrievdmitriya_

> 保持文件名在 Windows、Linux、Android 和 iOS 间兼容。

[ValidTitle](https://obsidian.md/plugins?id=validtitle) By _sajee05_

> 通过安全清理维基链接中的非法字符，自动防止“文件名不能包含……”错误。

[Thai Bracket Remap](https://obsidian.md/plugins?id=thai-bracket-remap) By _khunpoom_

> แปลงตัวอักษร ฃ ให้กลายเป็น [ และ ฅ ให้กลายเป็น ] ทันทีที่พิมพ์ในตัวแก้ไข

[Layout Switcher (UA-EN)](https://obsidian.md/plugins?id=layout-switcher-uk-en) By _kosperun_

> 在英语和乌克兰语键盘布局间转换所选文本，适合忘记切换布局时使用。

[Content RTL](https://obsidian.md/plugins?id=content-rtl) By _sirwanafifi_

> 对 Markdown 内容应用从右到左方向，同时保持属性和界面元素不变。

[LaTeX Delimiter Renderer](https://obsidian.md/plugins?id=latex-delimiter-renderer) By _burgerandreas_

> 渲染 \(…\) 和 \[…\] 数学而不更改笔记源。

[Latest MathJax](https://obsidian.md/plugins?id=latest-mathjax) By _danlingdan_

> 使用捆绑的最新 MathJax 4 引擎渲染数学，无需替换 Obsidian 内置 MathJax。

[Latex Suite Extension](https://obsidian.md/plugins?id=latex-suite-extension) By _sharbelmarshi_

> Latex suite 扩展

[MathMacro](https://obsidian.md/plugins?id=obsmat) By _minomaster_

> 模拟 WordMat 体验的插件。像在 WordMat 中一样舒适地书写数学/物理/化学符号，而非花更多时间写 LaTeX。

[LaTeX Input](https://obsidian.md/plugins?id=latex-input) By _sun8854_

> Obsidian 的 LaTeX 公式输入插件。从调色板点击符号自动生成源、实时预览并插入当前笔记；还支持**屏幕选区 OCR** 和**剪贴板**

[Text2Math](https://obsidian.md/plugins?id=text-to-math) By _arronhc_

> 将自然语言转换为 LaTeX 数学公式。

[Auto Equation Numbering](https://obsidian.md/plugins?id=auto-equation-numbering) By _wolframscs_

> 按文档手动切换和更新显示方程编号，并对重复方程复用第一个编号。

[LMath](https://obsidian.md/plugins?id=lmath) By _lubriedev_

> 在交互式块中绘制函数、系统、导数和积分，探索单位圆，并排版向量符号。

[Symbat](https://obsidian.md/plugins?id=symbat) By _iamrecursion_

> 将 Numbat 科学计算器集成到笔记中，具备全面工具。

[S-Calc](https://obsidian.md/plugins?id=s-calc) By _abdulkader-safi_

> 实时计算器代码块：书写表达式并查看每行结果，支持单位、货币、百分比和日期。

[nPort RF Analysis](https://obsidian.md/plugins?id=np-rf-analysis) By _jerrywiltz_

> 从 Markdown 分析射频和微波网络，并渲染 SVG 图表、表格和 Smith 圆图。

[Codex Style Markdown](https://obsidian.md/plugins?id=codex-style-markdown) By _geekyfox_

> Codex 风格 Markdown 阅读与实时预览，带主题、代码和表格复制工具、Mermaid 缩放和响应式排版。

##### 文件与附件

[Unloved Files](https://obsidian.md/plugins?id=unloved-files) By _nameiskyro_

> 查找未链接的文件和空文件夹，了解它们聚集在哪里，并将它们重新连接到你的库中。

[VaultSweep](https://obsidian.md/plugins?id=vault-sweep) By _cosmicseafox_

> 清理和维护库：查找重复文件、未使用的附件、空和孤立笔记以及大文件。

[Safe Attachment Trash](https://obsidian.md/plugins?id=safe-attachment-trash) By _mrjahanbin90_

> 自动查找未使用的附件，在受管理的双语回收站中审查，恢复到原始位置或永久删除。

[Strip Images](https://obsidian.md/plugins?id=strip-images) By _dwsun_

> 右键笔记移除所有图片嵌入；删除仅被该笔记引用的图片文件（移至 .trash）。

[Gallery Excluder](https://obsidian.md/plugins?id=gallery-excluder) By _calmtea_

> 使用 .nomedia 文件防止 Android 相册应用索引 Obsidian 库内存储的图片。

[LanTai](https://obsidian.md/plugins?id=lantai) By _windily-cloud_

> 上传、本地化和管理图片，内置对象存储配置。

[Unchanged Attachments to OSS](https://obsidian.md/plugins?id=unchanged-attachments-to-oss) By _xudaren_

> 自动上传图片、音频、视频和 PDF 到阿里云 OSS。存储为永久 oss:// 引用，动态签名 URL 渲染。

[Image to COS](https://obsidian.md/plugins?id=image-to-cos) By _mrelvin_

> 将 Markdown 中的本地图片上传到云存储（COS、OSS、七牛、SM.MS、GitHub）并自动替换链接。

[Pastepic](https://obsidian.md/plugins?id=obsipastepic) By _zengyincen_

> 粘贴图片，上传到 GitHub 或你的图床，并插入可定制的 CDN 链接。

![Pastepic](https://raw.githubusercontent.com/zengyincen/Obsidian-PastePic/master/assets/banner.svg)

[S3 Image Sync Pro](https://obsidian.md/plugins?id=s-three-image-sync-pro) By _hailanbb_

> 将图片上传到 S3/R2，支持笔记路径匹配、WebP WASM 压缩和自动删除同步。

![S3 Image Sync Pro](https://img.example.com/Projects/Tutorial/screenshot-a1b2c3....webp)

[Image Attachment Upload](https://obsidian.md/plugins?id=image-attachment-upload) By _rocketbang_

> 选择图片，上传到 Cloudflare R2，并插入为行内或设置为笔记的图片属性。

[Local Image Resizer](https://obsidian.md/plugins?id=local-image-resizer) By _jstools_

> 本地调整、转换和压缩图片，同时保留原始文件。

[ImageMagick](https://obsidian.md/plugins?id=image-magick) By _abdulkader-safi_

> 由 Safi-Image 驱动，调整库中图片的大小、裁剪、旋转、压缩和格式转换。

[Bulk Image to File Importer](https://obsidian.md/plugins?id=bulk-image-to-file-importer) By _johnmcanearney_

> 批量将图片添加到单个文件或为每张图片创建新文件。

[Easy File Replace](https://obsidian.md/plugins?id=easyfilereplace) By _srpernax_

> 轻松替换附件内容而不破坏链接的 Obsidian 插件。

[Copy File to Clipboard](https://obsidian.md/plugins?id=copy-file-to-clipboard) By _ezxabi_

> 右键文件资源管理器中的任意文件将其复制到剪贴板。可配置：文本文件作为文本或原始文件，图片作为 PNG 或原始文件。

[File Undo](https://obsidian.md/plugins?id=file-undo) By _2607044640_

> 撤销最近的文件删除和移动（重命名）。

[File Describer](https://obsidian.md/plugins?id=file-describer) By _alexandrovdi_

> 为放入监视文件夹的文件自动创建描述笔记。通过 Obsidian 搜索按描述查找文件。

[Random Note from Folder](https://obsidian.md/plugins?id=random-note-from-folder) By _nobodyrightnow_

> 选择一个文件夹，从中随机打开一篇笔记。

[Random Note Picker](https://obsidian.md/plugins?id=random-note-picker) By _taisukemino_

> 从库、特定时间段或自定义目录中打开随机笔记。

[Auto Remove](https://obsidian.md/plugins?id=auto-remove) By _bahinkor_

> 使用生存时间自动过期笔记和文件，预览后移至回收站或移动。

[Auto Navigator Pages](https://obsidian.md/plugins?id=auto-navigator-pages) By _ccccarlos0504_

> 自动生成并维护文件夹导航页和 Home.md，支持缺失导航页创建、导航页置顶、下划线开头文件和目录沉底排序、_node 新笔记归集、排除规则、工作区快照恢复和孤立导航页清理。

[Folder Info](https://obsidian.md/plugins?id=folder-info) By _stagars-m_

> 在原生的文件资源管理器中显示文件夹旁分开的文件和文件夹计数。

[Full File Extensions](https://obsidian.md/plugins?id=full-file-extensions) By _stagars-m_

> 在原生文件资源管理器中显示完整文件名，包括扩展名。

[Folder Column Navigator](https://obsidian.md/plugins?id=folder-column-navigator) By _leoray1990_

> Obsidian 的 Finder 风格多列文件夹和文件导航器。

[FolderView](https://obsidian.md/plugins?id=folder-view) By _hanchan78_

> 在笔记内渲染可搜索、可折叠的文件夹树。

[Explorer Order Editor](https://obsidian.md/plugins?id=explorer-order-editor) By _vcarus_

> 在文件资源管理器本身或对话框中拖动文件夹和笔记成手动顺序。以纯文本存储在你的库内。

[Drag and Drop Sort](https://obsidian.md/plugins?id=drag-drop-sort) By _singularitopian_

> 拖放以在文件资源管理器中重新排序文件和文件夹，带上下文菜单和命令面板控制。

[Explorer Sort](https://obsidian.md/plugins?id=explorer-sort) By _strayvlad_

> 在每个文件夹中使用自定义顺序手动排列文件资源管理器中的文件和文件夹。

[File Explorer Filter](https://obsidian.md/plugins?id=file-explorer-filter) By _singularitopian_

> 按顶级文件夹过滤文件资源管理器，并可选择隐藏匹配可配置文本的文件和文件夹。

[My Spaces](https://obsidian.md/plugins?id=my-spaces) By _hyeucong_

> 创建干净、极简的空间来控制侧边栏中显示哪些文件和文件夹。管理文件树不应困难或笨拙。

[Column Explorer](https://obsidian.md/plugins?id=column-explorer) By _n23eos_

> Obsidian 的 Finder 风格文件资源管理器，带 Miller 列、拖放、多选、上下文菜单和完整文件管理。

[Drawer Explorer](https://obsidian.md/plugins?id=drawer-explorer) By _fjx-dylanz_

> 弹出式抽屉文件树，带模态 vim 风格导航：hjkl 移动，a/r/d 文件操作，i 过滤，Esc 返回普通模式。

[OpenLoops Hidden Files](https://obsidian.md/plugins?id=openloops-hidden-files) By _tonymio_

> 在原生文件资源管理器树中显示选定的点文件夹（如 .claude 或 .github）。仅桌面，按文件夹选择加入。

[Unhidden](https://obsidian.md/plugins?id=unhidden) By _notenerd_

> 在文件资源管理器、搜索和数据库中显示隐藏的点文件夹（如 .claude 或 .github），带实时更新、文件类型过滤和排除项。

[Nested Vaults](https://obsidian.md/plugins?id=nested-vaults) By _real-fruit-snacks_

> 将库范围限定到特定文件夹，有效地将其视为嵌套子库。

[Bookmark Folder Expand](https://obsidian.md/plugins?id=expandable-folder-bookmarks) By _samuel-ysz_

> 直接在书签面板中展开已收藏的文件夹。

[Expanded Bookmarks](https://obsidian.md/plugins?id=expanded-bookmarks) By _bookmarklover_

> 核心书签的扩展版本——移动、排序、搜索过滤等。

[Pinup](https://obsidian.md/plugins?id=pinup) By _pilafdob_

> 在文件资源管理器中固定文件和文件夹，或将它们提升到紧凑的图钉架。

[Folder Backlinks](https://obsidian.md/plugins?id=folder-backlinks) By _strayvlad_

> 从笔记链接到文件夹，并查看哪些笔记引用了每个文件夹，就像文件的反向链接一样。

[Linked Attachments](https://obsidian.md/plugins?id=linked-attachments) By _ckelsoe_

> 将大型冷文件卸载到你自己的 S3 兼容存储桶或本地文件夹，在库中保留可解析的指针笔记。

[External Attachments](https://obsidian.md/plugins?id=external-attachments) By _dyllonwright_

> 从库外部文件夹解析附件嵌入——将重文件卸载到外部驱动器或额外云存储，同时维基链接继续渲染。

[Media Sidecar Tools](https://obsidian.md/plugins?id=media-sidecar-tools) By _turingexmachina_

> 使用 Ctrl+Click 为媒体创建边车笔记，并可在文件导航中隐藏原始媒体。

[Reference Linker](https://obsidian.md/plugins?id=reference-linker) By _max-fluff_

> 将笔记深度链接到库外的 PDF、Office 文件和图片。自动补全文档或 PDF 部分并跳转到精确页面。悬停预览页面，可嵌入行内。

[Attachment Type Icons](https://obsidian.md/plugins?id=attachment-type-icons) By _goodjinc_

> 为链接附件显示可配置的文件类型图标，无需更改 Markdown。

[Attachment Audit](https://obsidian.md/plugins?id=attachment-audit) By _saiken_

> 审计附件中的真正孤立项、重复项、超大文件、不良名称和错位文件，然后安全清理。

[Vault Canary](https://obsidian.md/plugins?id=vault-canary) By _nyonyataro_

> 当库意外丢失文件、Markdown 笔记或存储空间时发出警告。

[Vault Storage Map](https://obsidian.md/plugins?id=vault-storage-map) By _dimar4713_

> 使用交互式矩形树图可视化库磁盘使用情况，多语言界面、缓存扫描、比较、导出和诊断建议。

[Vault Mirror](https://obsidian.md/plugins?id=vault-mirror) By _ttsstchou_

> 安全地将当前 macOS 库单向镜像到本地文件夹（如 iCloud Drive）。

[MetaBar](https://obsidian.md/plugins?id=metabar) By _eferm_

> 在编辑器上方显示文件创建和修改日期。

[Open Folder Button](https://obsidian.md/plugins?id=open-folder-button) By _altokun-number-one_

> 在 Windows 资源管理器中打开 Obsidian 文件资源管理器中的文件夹。

[Drive Opener](https://obsidian.md/plugins?id=drive-opener) By _yushen110_

> 将经典 Windows 文件资源管理器直接嵌入 Obsidian。

[Open PowerShell Here](https://obsidian.md/plugins?id=open-powershell-here) By _ethanffu_

> 在库根目录或任意文件夹打开 PowerShell 7+（仅 Windows）。

[URL File Preview](https://obsidian.md/plugins?id=url-file-preview) By _turingexmachina_

> 预览和编辑 Windows .url 快捷方式文件——行内编辑 URL，在默认应用或网页查看器中打开，并转换为 Markdown 笔记。

[Marco Polo](https://obsidian.md/plugins?id=marco-polo) By _crufi_

> 在反引号内输入本地路径；Marco Polo 验证、自动补全并生成可点击链接以在文件管理器中打开或显示。

[Click Unsupported Twice](https://obsidian.md/plugins?id=click-unsupported-twice) By _ozthealem_

> 不支持的单击选中，双击在默认应用中打开。

[Loupe](https://obsidian.md/plugins?id=loupe) By _casperkwok_

> 在文件资源管理器中查看和预览 Obsidian 通常隐藏的文件——Office（Word/Excel/PowerPoint）、HTML、CSV/TSV、JSON 以及 50+ 代码和配置格式。

[Omni Viewer](https://obsidian.md/plugins?id=omni-viewer) By _battlecook_

> 在 Obsidian 内查看音频、图片、视频、压缩包、CSV、DBC、ARXML、A2L、ASC、BLF、MF4、Avro、ROS bag、PCAP、PCAPNG、STEP、DB3、ReqIF、Excel、Word、PowerPoint、Parquet、Shapefile、HDF5、MAT、jsonl、yaml、toml、Markdown、Mermaid、PlantUML、hwp、PSD 和 PDF 文件。

[Local Office Preview](https://obsidian.md/plugins?id=local-office-preview) By _tndgyq_

> PPT/PPTX、XLS/XLSX、DOC/DOCX、TXT 和 LOG 文件的只读本地预览。

[Office Viewer](https://obsidian.md/plugins?id=office-viewer) By _jerry4pan_

> 在 Obsidian 内查看本地 PPTX 和 DOCX 文件。

[HTML Shelf](https://obsidian.md/plugins?id=html-shelf) By _prof18_

> 在移动和桌面上浏览和阅读库中的 HTML 文件，无需文件资源管理器。

[HTML Prototype Viewer](https://obsidian.md/plugins?id=html-prototype-viewer) By _gloumi_

> 在隔离 iframe 中预览本地 HTML 文件，带设备宽度和实时重载，并可嵌入笔记。

[ZJ HTML Studio](https://obsidian.md/plugins?id=zj-html-studio) By _zhaoji_

> 预览、搜索、检查和嵌入本地 HTML 文件，带作用域资源、实时重载、缩放和全屏。

[Code Viewer](https://obsidian.md/plugins?id=code-viewer) By _tracingorigins_

> 使用原生语法高亮查看和编辑代码文件。

[TOML Editor](https://obsidian.md/plugins?id=toml-editor) By _jasoncrawford_

> 打开和编辑 TOML 文件，带语法高亮和解析诊断。

[Code Runner](https://obsidian.md/plugins?id=code-runner) By _chujiu-dev_

> 在 Obsidian 中交互式运行代码块，支持 stdin 输入，可在桌面、iOS 和 Android 上使用。支持 Python、C、C++、Java、Go、JavaScript、TypeScript、Rust、Kotlin 等。

[Yuhanbo Python Runner](https://obsidian.md/plugins?id=yuhanbo-python-runner) By _yuhanbo758_

> 使用本地解释器运行 Python 代码块并在笔记内查看输出。

[HTML Live Editor](https://obsidian.md/plugins?id=html-live-editor) By _elijahchan2019_

> 在实时预览模式下直接点击编辑 HTML 块中的文本。

[Code Playground](https://obsidian.md/plugins?id=code-playground) By _touss59_

> 笔记内实时可编辑代码游乐场，即时预览：HTML/CSS、React、Vue、Svelte、Angular、Solid、Next.js、TypeScript、JavaScript 等。

[HTML Blocks](https://obsidian.md/plugins?id=html-blocks) By _jwczju_

> 在笔记中直接渲染实时 HTML、CSS 和 JavaScript，每个 html-block 代码围栏隔离在自己的 Shadow DOM 中。

[ANSI Viewer](https://obsidian.md/plugins?id=ansi-viewer) By _adamjacobson_

> 在代码块中渲染 ANSI 格式的终端输出。

![ANSI Viewer](https://raw.githubusercontent.com/adamjacobson/obsidian-ansi-viewer/master/media/full-demo.gif)

[Cisco Syntax](https://obsidian.md/plugins?id=cisco-syntax) By _blakebratcher_

> 在阅读模式和实时预览中为围栏代码块提供 Cisco IOS、IOS-XE、IOS-XR 和 NX-OS 配置的语法高亮。

[ESQL Syntax](https://obsidian.md/plugins?id=esql-syntax) By _clivoa_

> 在围栏代码块中为 Elasticsearch ES|QL 提供语法高亮。

[TOON Syntax Highlight](https://obsidian.md/plugins?id=toon-syntax) By _sebasalas_

> 在围栏代码块中为 TOON（Token-Oriented Object Notation）提供语法高亮。

[Code Graph](https://obsidian.md/plugins?id=code-graph) By _mrjw717_

> 可视化代码文件的连接——导入、调用、继承、实现、注释链接、ADR 和测试——作为笔记旁的交互式图。

##### 同步与备份

[P2P Vault Sync](https://obsidian.md/plugins?id=obsync-ptop) By _krishna04_

> 免费、本地优先的库 P2P 同步。无云、无账号。

[Sync Sentry](https://obsidian.md/plugins?id=sync-sentry) By _jimmy-web169_

> 保持多设备库健康：带撤销的文件操作历史、一键插件修复/更新/配置，以及工作区布局快照。

[Notes WiFi Sync](https://obsidian.md/plugins?id=notes-wifi-sync) By _emrity4_

> 通过 WiFi 在 Obsidian 库之间双向同步选定文件夹（或整个库）。

[MeshSync](https://obsidian.md/plugins?id=mesh-sync) By _cimu233_

> 无服务器局域网同步，自动发现、加密传输和亚秒级更新。

[GitSync Portal](https://obsidian.md/plugins?id=gitsync-portal) By _kaleido1_

> 通过 GitHub 在移动端和桌面端同步库，带多语言仪表板、搜索、收藏、历史和测验。

![GitSync Portal](https://raw.githubusercontent.com/kaleido1/GitSync-Portal/master/assets/screenshots/dashboard-desktop.png)

[AgentWiki Sync](https://obsidian.md/plugins?id=agentwiki-sync) By _neomei_

> 将映射的库文件夹与 AgentWiki 空间同步。

[Covault](https://obsidian.md/plugins?id=covault) By _leweii_

> 团队知识库客户端——通过静默同步的共享文件夹共享、消费和演化公司知识。LLM 代理处理所有 Git 管道，你无需操心。

[GitLab Gitless Sync](https://obsidian.md/plugins?id=gitlab-gitless-sync) By _terekhinao_

> 无需 Git 即可将库与 GitLab 仓库同步。

[Vault Base](https://obsidian.md/plugins?id=vault-base) By _zeven_

> 双向 WebDAV 库同步，带冲突处理、加密和自动同步。

[LiteSync](https://obsidian.md/plugins?id=litesync) By _kjoner_

> 使用自托管 LiteSync 服务器同步库。端到端加密、版本历史和自动三路合并。

[R2DO Sync](https://obsidian.md/plugins?id=cloudflare-rdo-sync) By _pc418_

> 在你自己的 Cloudflare 账户上双向同步库。端到端加密，像版本控制一样构建：每次同步是一次提交，合并保留双方，历史可恢复。

[OmniDrive](https://obsidian.md/plugins?id=omnidrive) By _chubby_

> 使用隐私优先的 BYOK 架构将库与 Google Drive 同步。

[My Desk Sync](https://obsidian.md/plugins?id=my-desk-sync) By _betheone314_

> 在 My Desk 和你的库之间同步知识笔记——无需 GitHub 仓库或访问令牌。需要带 Library 订阅的 My Desk 账户；插件本身免费。

[Zima Topic Sync](https://obsidian.md/plugins?id=zima-topic-sync) By _atopos31_

> 将当前 Obsidian 库同步到选定的 Zima Topic。

[MEGA Sync](https://obsidian.md/plugins?id=mega-sync) By _ledokter_

> 在你的 Obsidian 库和 MEGA.nz 云之间双向同步，灵感来自 Remotely Save。

[Power Connect](https://obsidian.md/plugins?id=powerconnect) By _powerplugins-dev_

> 将库同步到你自己的 Dropbox、OneDrive 或 Google Drive，并与他人共享文件夹或笔记，可选端到端加密。

[jemzsync](https://obsidian.md/plugins?id=jemzsync) By _jamalbalya_

> 检测设备生态系统，检查库位于 iCloud 或 Google Drive 可同步文件夹中，跨设备比较库，并解决同步冲突。

[CouchDB Sync](https://obsidian.md/plugins?id=couchdb-sync) By _chrisurf_

> 与自托管 CouchDB 服务器简单可靠的实时库同步。AES-256-GCM 端到端加密：笔记内容和元数据（文件路径、大小、时间戳）。

[Vaultbridge](https://obsidian.md/plugins?id=vaultbridge) By _donnervs_

> 到自有 CouchDB 的端到端加密库同步，带冲突差异视图、单字符串设置和移动支持。

[Koofr Sync](https://obsidian.md/plugins?id=koofr-sync) By _bartekmp_

> 将库与 Koofr 云存储同步。

![Koofr Sync](https://raw.githubusercontent.com/bartekmp/koofr-obsidian-sync/master/assets/obsidian-koofr-sync.png)

[Google Sync](https://obsidian.md/plugins?id=google-cloud-sync) By _sertacyildiz_

> 全面、安全优先的库同步到你自己拥有的 Google 后端——Google Drive 或 Google Cloud Storage。自带 Google 账户；无第三方服务器。

[Seafile Sync Improved](https://obsidian.md/plugins?id=seafile-improved) By _tionis_

> 使用 Seafile 跨设备同步笔记。

[Basalt Causeway](https://obsidian.md/plugins?id=basalt-causeway) By _kpndevroot_

> 将库发布到 GitHub 仓库，使 Basalt 可以在移动端读取。

[BackDrop](https://obsidian.md/plugins?id=backdrop-sync) By _backstagepass_

> 将 BackDrop wiki 和时间线文章与库同步。

[Native Git Bridge](https://obsidian.md/plugins?id=native-git-bridge) By _maxkalem_

> WIP。仅 Android。通过 Termux 中的真实 Git 二进制文件在库上运行 Git，带稀疏检出安全。无后台服务、无服务器、无开放端口。

[GitFacil](https://obsidian.md/plugins?id=git-facil) By _alecwce_

> 一键提交和推送库：分步设置向导、带复选框的状态面板、拉取按钮和自动备份。面向非开发者的简单 Git。（界面为西班牙语）

[Gitee Sync Plus](https://obsidian.md/plugins?id=gitee-sync-plus) By _hellokunzai_

> 将库同步到 Gitee 或 GitHub 仓库。

[Gitee Sync](https://obsidian.md/plugins?id=gitee-sync) By _ericquan8_

> 将库同步到 Gitee 或 GitHub 仓库。

[Git Ribbon Sync](https://obsidian.md/plugins?id=git-ribbon-sync) By _deltaplanoo_

> 同步库变更：从功能区图标和命令快速拉取、推送和查看 Git 历史。

[Git History](https://obsidian.md/plugins?id=git-history) By _chrisurf_

> 使用直观 UI 管理 Git 仓库：交互式提交图、源代码管理面板和差异查看器。

[Docs Sync](https://obsidian.md/plugins?id=docs-sync) By _luhaifeng666_

> 通过私有 GitHub 仓库安全同步笔记和附件。

[YNote Sync](https://obsidian.md/plugins?id=ynote-sync) By _obsidian-devops, obsidian-devops2_

> 安全地将 Markdown 和受支持的原生工作区文件与有道笔记同步。

[Zettlab Sync](https://obsidian.md/plugins?id=zettlab-sync) By _wyc7758775_

> 通过 WebDAV 将你的 Markdown 库与 Zettlab Memo 同步。

[EasySync](https://obsidian.md/plugins?id=easy-sync) By _jiaoyingxing_

> Obsidian 的双向 OneDrive 同步，带冲突保护、移动支持，以及可选的设置/插件同步。

[SuperSync](https://obsidian.md/plugins?id=supersync) By _rahuletto_

> 在桌面和移动端使用 GitHub API 将 Obsidian 库与私有 GitHub 仓库同步。

[Private Sync](https://obsidian.md/plugins?id=private-sync) By _haniewicz_

> 将 Obsidian 库与私有服务器同步。

[Self-Hosted Vault Sync](https://obsidian.md/plugins?id=self-hosted-vault-sync) By _peoneer_

> 通过自托管服务器快速可靠地同步库。

[Central Vault Sync](https://obsidian.md/plugins?id=central-vault-sync) By _picassio_

> 与自托管权威库服务器进行修订安全同步。

[Pumice](https://obsidian.md/plugins?id=pumice) By _search5_

> 通过你自己的自托管服务器同步、版本化、发布和共享库。

[Joplin Server Sync](https://obsidian.md/plugins?id=joplin-server-sync) By _rosswang_

> 将 Obsidian 库与 Joplin Server 同步——双向、附件、标签、链接。

[Postgres Sync](https://obsidian.md/plugins?id=postgres-sync) By _lanjak_

> 将库同步到自托管 Postgres 数据库（通过 PostgREST）而非 Sync 或 CouchDB——每个笔记都被嵌入，也可用于代理工具的语义搜索。

[Qdrant Sync](https://obsidian.md/plugins?id=qdrant-sync) By _lanjak_

> 将库同步到自托管 Qdrant 集合而非 Obsidian Sync/CouchDB——每个笔记都被嵌入，也可用于代理工具的语义搜索。

[Twine](https://obsidian.md/plugins?id=twine) By _twine_

> 将库同步到你自己的 S3 兼容对象存储（如 Cloudflare R2 或 Backblaze B2），端到端加密，无需服务器。

[Cloud WebDAV Sync](https://obsidian.md/plugins?id=cloud-webdav-sync) By _seventeen-tan_

> 实验性 WebDAV 同步插件，具有内容寻址存储、提交快照、能力检查、受保护更新、同步历史、诊断和本地/远程冲突解决。

[Webdav PQC Sync](https://obsidian.md/plugins?id=obsync-webdav-gpg) By _normanify_

> 使用后量子加密加密库数据，并同步/恢复到 WebDAV。同时加密文件内容和文件名。

[Shared Vault](https://obsidian.md/plugins?id=shared-vault) By _fangface-hub_

> 共享库的无服务器、无冲突协作层。

[Sync Deck](https://obsidian.md/plugins?id=sync-deck) By _ismailivanov_

> 跨设备实时库同步和实时团队在线状态。

[Synqra](https://obsidian.md/plugins?id=synqra) By _maksvyte_

> 通过自托管中继服务器为 Obsidian 提供实时多用户实时协作、笔记同步和 Excalidraw 绘图。

[Note Colab](https://obsidian.md/plugins?id=notecolab) By _felixleopold_

> 在 Obsidian 或浏览器中共享加密笔记并实时协作。

[DoMD](https://obsidian.md/plugins?id=domd) By _do-md_

> 笔记的实时、免账户点对点协作：一起编辑或共享只读实时视图，以 span 粒度同步。

[Vault Rooms](https://obsidian.md/plugins?id=vault-rooms) By _dndark12_

> 在局域网中与可信人员实时共享库文件夹——邀请链接、按文件夹访问控制和实时同步。无云，无需单独服务器。

[Local Version History](https://obsidian.md/plugins?id=local-version-history) By _bartlab_

> 笔记的磁盘版本历史：高亮更改行、捕获时间线，并差异或恢复任何早期版本，完全本地。

[MyHistory](https://obsidian.md/plugins?id=myhistory) By _henriquemanduca_

> 为笔记启用本地私有历史。

[Draftline](https://obsidian.md/plugins?id=draftline) By _noahzender_

> 创建手动 Markdown 版本快照，并用行内差异进行比较。

[Config Sync](https://obsidian.md/plugins?id=config-sync) By _xooooooooox_

> 跨设备和库选择性按需分发库配置（片段、热键、插件设置）。

[Hermes R2 Vault](https://obsidian.md/plugins?id=hermes-rvault) By _ivana331100_

> 在本地加密 Obsidian 笔记，并发布到 Cloudflare R2 供 Hermes 使用。

[Notion Vault Sync](https://obsidian.md/plugins?id=notion-vault-sync) By _kaventro_

> 将库与 Notion 同步——保留文件夹层级、Markdown 格式、内部链接、元数据和附件。

[Akbun Notion Sync](https://obsidian.md/plugins?id=akbun-notion-sync) By _choisungwook_

> 将库的 Markdown 笔记同步到 Notion 页面。

[Apple Notes Sync](https://obsidian.md/plugins?id=icloud-notes) By _coddingtonbear_

> 通过 icloud-md CLI 将库文件夹与 Apple Notes 同步。

[Mubu Sync](https://obsidian.md/plugins?id=mubu-sync) By _bopan3_

> 单向将 Mubu 文档同步到 Obsidian 库。

[Flomo Sync Me](https://obsidian.md/plugins?id=flomo-sync-me) By _fanthus_

> 将 Flomo 备忘录同步到 Obsidian，按年份文件夹、月度合并和增量更新。

[OpenWhispr Sync](https://obsidian.md/plugins?id=openwhispr-sync) By _samkay_

> 使用 OpenWhispr CLI 将 OpenWhispr 笔记和带说话人标签的转录同步到 Obsidian 库。

[Boox Sync](https://obsidian.md/plugins?id=boox-sync) By _sky150_

> 通过 BooxDrop 将 Onyx Boox 设备的手写笔记同步到 Obsidian。

[Looki Sync](https://obsidian.md/plugins?id=looki-sync) By _kidd911-cmd_

> 将 Looki 的日常数据与即时提示同步进 Obsidian，合并为按日期的「每日记忆」笔记。可配置目标文件夹，并选择是否同步图片/视频。

[Claude Code Sync](https://obsidian.md/plugins?id=claude-code-sync) By _mattbirchler_

> 将 Claude Code 会话镜像为库中的 Markdown 笔记。

[Carbon Voice Sync](https://obsidian.md/plugins?id=carbon-voice-sync) By _travisbogard, phononx_

> 将 Carbon Voice 对话和语音备忘录同步为库中的 Markdown 笔记。

[ReadingRate](https://obsidian.md/plugins?id=readingrate) By _simonsbookclub_

> 将 ReadingRate 阅读数据——书籍、引言、日记条目、见解和领域掌握度——同步到 Obsidian 库。

[Moltn Sync](https://obsidian.md/plugins?id=moltn-sync) By _zeniadev, affluency-dev_

> 从你的 Moltn 安装中拉取完成的笔记到这个库，并可选择将选定的笔记作为上下文共享回去。文件归你所有。

[Alissa Sync](https://obsidian.md/plugins?id=alissa-sync) By _rhdzmota, fahera-mx_

> 将 Alissa 库镜像到你的笔记中：项目、任务、上下文、交付物和实体作为维基链接 Markdown，一键刷新。

[Linkwise](https://obsidian.md/plugins?id=linkwise) By _dheeraj, linkwiseapp_

> 将 Linkwise 的收藏和亮点同步到你的库。

[Rootr Sync](https://obsidian.md/plugins?id=rootr-sync) By _gwmage_

> 库的团队协作：将选定文件夹（或带标签笔记）共享到 Rootr 云工作区，使队友和 Claude 或 ChatGPT 可以读写。单向同步——你的库保留在本地。

[Pensio Journaling Sync](https://obsidian.md/plugins?id=pensio-sync) By _gabrielrubens_

> 将日记同步到 Pensio 以获得 AI 驱动的日记洞察：情绪和心情追踪、关系映射和每周反思。

##### 可视化与图谱

[Terrain Graph](https://obsidian.md/plugins?id=terrain-graph) By _gjckckfc_

> 把关系图谱渲染成 3D 山峰等高线图：链接越多的文档海拔越高，联系紧密的文档聚成一座山，最高连接数的文档是主峰。

[Local Graph Depth](https://obsidian.md/plugins?id=local-graph-depth) By _cs31415_

> 以可配置的默认深度打开局部图谱视图。

[Weak Link Auditor](https://obsidian.md/plugins?id=weak-link-auditor) By _stef4678_

> 闪亮的仪表板，浮出仅由一个链接连接的笔记和未链接提及，促使你加强图谱。

[Link Structure](https://obsidian.md/plugins?id=link-structure) By _fertion_

> 为数据库添加结构视图，基于“up”属性以层级树显示条目。

[Vicinity Graph](https://obsidian.md/plugins?id=vicinity-graph) By _nickolay-kondratyev_

> 活动笔记附近笔记的更丰富局部图谱——内置局部图谱的按文件夹分组替代方案。

[Graph Files Highlight Sync](https://obsidian.md/plugins?id=graph-files-highlight-sync) By _jakdab_

> 在文件资源管理器中悬停笔记时高亮图谱视图中的笔记——或悬停文件夹时高亮该文件夹中的每个笔记。

![Graph Files Highlight Sync](https://raw.githubusercontent.com/jakdab/obsidian-graph-files-highlight-sync/master/media/demo.gif)

[Amoeba](https://obsidian.md/plugins?id=amoeba) By _gregorymanni_

> 为图谱视图添加一个活体生物。“阿米巴”在全局图谱中移动时抓住你的笔记，创造独特的动态视觉。它还能扫描库中的损坏链接。

[md2hd](https://obsidian.md/plugins?id=md-hd) By _evan-steinhilb_

> 将笔记或文件夹作为 md2hd 地图打开。Frontmatter 变为节点，维基链接变为边。

[Clew](https://obsidian.md/plugins?id=clew) By _christian-luger-at_

> Clew 是 Obsidian 库的知识探索器——不只是另一种绘制图谱的方式。

[Vault Orrery](https://obsidian.md/plugins?id=vault-orrery) By _elliott-json-park_

> 将库作为星系飞行——3D 图谱，带飞船、表面模式和形成时间线。完全离线运行。

[Vault Garden](https://obsidian.md/plugins?id=vault-garden) By _enoai_

> 库的可视花园——每篇笔记是一株植物，其健康状况反映你最近编辑的频率和链接程度。

[Knowledge Heatmap](https://obsidian.md/plugins?id=knowledge-heatmap) By _alex3l3t33_

> 在本地可视仪表板中审查笔记健康度、陈旧度、连接和维护优先级。

[Edit History Heatmap](https://obsidian.md/plugins?id=edit-history-heatmap) By _keptan_

> 类似 GitHub 贡献图但用于 Obsidian 编辑，对安装插件前的编辑也有效。

![Edit History Heatmap](https://raw.githubusercontent.com/keptan/obsidian-activity-heatmap/master/images/edit-history-heatmap.png)

[Visit History](https://obsidian.md/plugins?id=visit-history) By _nickolay-kondratyev_

> 记录笔记和白板的访问历史，并以矩形树图热力图可视化库活动。

[myBrain](https://obsidian.md/plugins?id=mybrain) By _carlb01_

> 高性能语义网络图，以结构化的父母、子女、朋友和兄弟姐妹象限显示笔记。

[Smart Cluster Graph](https://obsidian.md/plugins?id=smart-cluster-graph) By _comedianhhh_

> 基于文件夹的聚类图谱探索器，具有最强跨社区桥接、避免线交叉和紧密凸包。

[Beautiful Graph](https://obsidian.md/plugins?id=beautiful-graph) By _the-scarlet-fox_

> 电影级 GPU 渲染知识图谱，支持分组、文件夹透镜、搜索、聚焦和实时控制。

![Beautiful Graph](https://raw.githubusercontent.com/dawsonbodenhamer/beautiful-graph/master/docs/images/beautiful_graph_overview.png)

[Spherical Graph](https://obsidian.md/plugins?id=spherical-graph) By _pavel-mik_

> 将库作为活的地球仪探索：文件夹成为大陆，笔记成为城市，链接成为道路，标签作为卫星环绕，路径查找器揭示思想之间的路径。

[Spherical Knowledge Graph](https://obsidian.md/plugins?id=spherical-knowledge-graph) By _ironmind15_

> 将任何 Obsidian 库变成自动更新的 3D 知识球体，带学习路径、图谱健康检查、缺失概念和语义链接。

[Galaxy Graph 3D](https://obsidian.md/plugins?id=galaxy-graph-view) By _deck6_

> 将库作为沉浸式半透明 3D 星系探索。

[Vault Galaxy](https://obsidian.md/plugins?id=vault-galaxy) By _sjhealthadvising-prog_

> 将库视为活的星系：链接最多的笔记成为太阳，枢纽环绕它们，每篇笔记环绕它链接的内容——带可抓取、链接耦合的弹簧物理。

[Constellations](https://obsidian.md/plugins?id=constellations) By _nikshukrem_

> 3D 星图替代图谱视图：笔记是星星，共享标签形成星座，顶级文件夹形成宇宙。

[Tree](https://obsidian.md/plugins?id=tree-graph-view) By _studiogamma_

> 将笔记可视化为树状图谱森林（树状图）。

[Knowledge Atlas](https://obsidian.md/plugins?id=knowledge-atlas) By _eason38467_

> 将库中每篇 Markdown 笔记作为交互式、可搜索的知识地图探索。

[Relational Graph](https://obsidian.md/plugins?id=relational-graph) By _tristanvangarsse_

> 使用共享上下文、直接链接、新近度、过滤器和项目焦点可视化笔记之间的关系。

[Inline Graph](https://obsidian.md/plugins?id=inline-graph) By _svm0n_

> 从 gr 代码块渲染行内力导向节点图。

[Graph Color Propagation](https://obsidian.md/plugins?id=graph-color-propagation) By _tacitustus_

> 根据连接将图谱节点颜色传播到未着色节点。

[Graph Spawn](https://obsidian.md/plugins?id=graph-spawn) By _tjqscott_

> 将图谱的每个未连接集群播种在自己的起始位置，使组件不会重叠生成并保持纠缠。

[Graph Search Sync](https://obsidian.md/plugins?id=graph-search-sync) By _aldaw_

> 将全局搜索查询实时应用到图谱视图过滤器，并在图谱中高亮悬停的搜索结果。

[Social Network Analysis](https://obsidian.md/plugins?id=social-network-analysis) By _fiddlestix27_

> 对图谱视图执行全面的社交网络分析，包括各种中心性度量、方向性分析和图谱布局定制。

[Liefwork](https://obsidian.md/plugins?id=liefwork) By _liefwork_

> 揭示库的真实形状，并为你的 AI 代理培育“记忆珊瑚”

![Liefwork](https://raw.githubusercontent.com/phoelectrix/liefwork-obsidian/master/assets/readme/coral-open-mega-project.gif)

[Vault Aquarium](https://obsidian.md/plugins?id=vault-aquarium) By _ogyanuntiusxiii_

> 将库的颜色分组构成显示为一条斗鱼的形象。

[Footprint Map](https://obsidian.md/plugins?id=footprint-map) By _evanwong89_

> 将本地照片足迹渲染为交互式时间排序地图。

[Places](https://obsidian.md/plugins?id=places) By _bobstanton_

> 创建带标记、轨迹、叠加层、图像对齐、热力图、VaultQuery 数据、CSV 和 GPX 导入、自定义样式、图表、搜索、方向和提供方扩展的交互式地图。

[Places - Nominatim](https://obsidian.md/plugins?id=places-nominatim) By _bobstanton_

> Places 的搜索提供方，使用 Nominatim 和 OpenStreetMap，免费地理编码和 POI 搜索。

[Places - Radar](https://obsidian.md/plugins?id=places-radar) By _bobstanton_

> Places 的地图提供方，使用 Radar，带矢量地图、POI 搜索和方向。

[Places - Valhalla](https://obsidian.md/plugins?id=places-valhalla) By _bobstanton_

> Places 的 Valhalla 提供方，带海拔、方向、等时线、轨迹匹配和轨迹吸附。

[Places - Thunderforest](https://obsidian.md/plugins?id=places-thunderforest) By _bobstanton_

> Places 的地图提供方，使用 Thunderforest，带栅格和矢量地图，以及户外、骑行、交通和地图集样式。

[Places - OpenRouteService](https://obsidian.md/plugins?id=places-openrouteservice) By _bobstanton_

> Places 的路由提供方，使用 openrouteservice，带 POI 搜索、海拔替换、方向、等时线和轨迹吸附。

[Places - Stadia Maps](https://obsidian.md/plugins?id=places-stadia) By _bobstanton_

> Places 的地图提供方，使用 Stadia Maps，带矢量地图、POI 搜索、海拔替换、方向、等时线、轨迹吸附和轨迹匹配。

[Places - Protomaps](https://obsidian.md/plugins?id=places-protomaps) By _bobstanton_

> Places 的地图提供方，使用 Protomaps，带矢量地图和 POI 发现。

[Places - Photon](https://obsidian.md/plugins?id=places-photon) By _bobstanton_

> Places 的搜索提供方，使用 Photon，基于 OpenStreetMap 数据进行 POI 搜索。

[Places - Leaflet](https://obsidian.md/plugins?id=places-leaflet) By _bobstanton_

> Places 的地图提供方，使用 Leaflet，带栅格地图、自定义瓦片图层、标记、轨迹和叠加层。

[Places - GraphHopper](https://obsidian.md/plugins?id=places-graphhopper) By _bobstanton_

> Places 的路由提供方，使用 GraphHopper，带轨迹吸附和路线详情、轨迹匹配、方向、等时线、POI 搜索和海拔。

[Places - Mapbox](https://obsidian.md/plugins?id=places-mapbox) By _bobstanton_

> Places 的地图提供方，使用 Mapbox，带矢量地图、POI 搜索、海拔替换、方向、等时线和轨迹吸附。

[Places - MapTiler](https://obsidian.md/plugins?id=places-maptiler) By _bobstanton_

> Places 的地图提供方，使用 MapTiler，带矢量地图、POI 搜索和海拔替换。

[Places - Geoapify](https://obsidian.md/plugins?id=places-geoapify) By _bobstanton_

> Places 的地图提供方，使用 Geoapify，带矢量地图、POI 搜索、海拔替换、方向、等时线和轨迹吸附。

[Places - FreeRoute](https://obsidian.md/plugins?id=places-freeroute) By _bobstanton_

> Places 的路由提供方，使用 FreeRoute，带方向、等时线和轨迹吸附。

[Places - Environment](https://obsidian.md/plugins?id=places-environment) By _bobstanton_

> Places 的环境提供方，带 NOAA 潮汐、太阳事件、Open-Meteo 天气。通过 VaultQuery 提供方输出到图表、表格、模板和地图。

[Places - OpenFreeMap](https://obsidian.md/plugins?id=places-openfreemap) By _bobstanton_

> Places 的地图提供方，使用 OpenFreeMap，带免费矢量地图和 POI 发现。

[Advanced Maps](https://obsidian.md/plugins?id=advanced-maps) By _jin1c-3_

> 将 Obsidian 原生地图变成照片图集和路线查看器：映射整个地理标记相册、GPX/GeoJSON/KML/TCX 轨迹，以及链接笔记的周边视图。

[GPX Preview](https://obsidian.md/plugins?id=gpx-preview) By _tschoffelen_

> 渲染嵌入 GPX 文件的 Apple 风格地图预览，带锻炼统计和离线缓存。

[Person Network](https://obsidian.md/plugins?id=person-network) By _oxill_

> 将库中的人物可视化为交互式关系图，带角色、过滤、潜在联系人和数据库支持。

[CFR Mermaid Size](https://obsidian.md/plugins?id=cfr-mermaid-size) By _cferrugem_

> 拖动任意 Mermaid 图表调整大小，右键对齐。桌面和移动端保持独立尺寸，全部存储在块内部，因此可跨设备保留。

[Mermaid Flow Zoom](https://obsidian.md/plugins?id=mermaid-flow-zoom) By _change-wyc_

> 缩放、平移、调整大小和全屏渲染的 Mermaid 图表。

[Mermaid Integrator](https://obsidian.md/plugins?id=mermaid-integrator) By _fangface-hub_

> 辅助编辑 Mermaid 代码块的 Obsidian 插件。

[Mermaid GUI Editor](https://obsidian.md/plugins?id=mermaid-gui-editor) By _noriyuki-lim_

> 在笔记中使用 GUI 编辑器编辑 Mermaid 图表——流程图、看板、象限图、xy 图、甘特图等。保存回纯 Mermaid 文本。

[Mermaid Lens](https://obsidian.md/plugins?id=mermaid-lens) By _aitsuki_

> 应用一个全局 Mermaid 配置，并在可拖动、可缩放的查看器中打开图表。

![Mermaid Lens](https://github.com/user-attachments/assets/8c4a4d00-4f26-43dc-ad41-5b1870aae718)

[Auto Beautiful Mermaid](https://obsidian.md/plugins?id=auto-beautiful-mermaid) By _rxdxxxx_

> 智能路由 Mermaid 图表：其支持的 6 种类型使用 beautiful-mermaid，其余使用 Obsidian 内置引擎。

##### 写作与发布

[Versovoice](https://obsidian.md/plugins?id=versovoice) By _wasg99_

> 将库中已有的工作转化为 LinkedIn 帖子。敏感文件在本机过滤，绝不外泄。

[Notes to Kindle](https://obsidian.md/plugins?id=notes-to-kindle) By _franchixco_

> 本地将笔记转换为 EPUB，并使用非官方桌面集成发送到 Amazon Kindle。

[WeChat Format](https://obsidian.md/plugins?id=wechat-format) By _achang_

> 将 Markdown 笔记排版为微信公众号文章风格。支持多种主题、标题样式、代码块装饰和实时预览。复制并直接粘贴到微信编辑器即可发布。

[Quotable](https://obsidian.md/plugins?id=quotable) By _nathancashion_

> 将所选文本转换为可分享的图片，带封面艺术、纵横比和源自来源的颜色。

[ZettelCasting](https://obsidian.md/plugins?id=zettelcasting) By _daynedaniell_

> 通过 ZettelCasting 服务将库中的笔记发布并定时到已连接的社交平台。链接和嵌入的笔记会被拉入，使帖子独立成立。

[Publora](https://obsidian.md/plugins?id=publora) By _publora_

> 将当前笔记发布或定时到 LinkedIn、X、Instagram、Threads、TikTok、YouTube、Facebook、Bluesky、Mastodon 和 Telegram。

[WindPost](https://obsidian.md/plugins?id=windpost) By _windzu_

> 将当前笔记发布到博客或微信公众号草稿箱。

[Blogizi](https://obsidian.md/plugins?id=blogizi) By _rudolfsrijkuris_

> 将 Obsidian 笔记发布到 Blogizi 博客——frontmatter 模板、草稿和按 slug 更新。

[Hexo Send](https://obsidian.md/plugins?id=hexo-send) By _fountainchan_

> 为 Hexo 准备 Obsidian 笔记，创建本地提交，仅在确认后推送。

[Wiki.js Maintainer](https://obsidian.md/plugins?id=wikijs-maintainer) By _johannes-kaindl_

> 通过 GraphQL 将库中文件夹的笔记发布并同步到 Wiki.js 2.x 实例，每次推送前进行漂移检测。

[Markdown Relay](https://obsidian.md/plugins?id=markdown-relay) By _luffysolution-svg_

> 将 Markdown 笔记单向发布到飞书/Lark、Notion 和 ima。

[Confluence Page Publisher](https://obsidian.md/plugins?id=confluence-page-publisher) By _gibranbadrul_

> 使用 frontmatter 绑定和自定义 Markdown 转换将笔记发布到 Confluence 页面。

[WP Publisher](https://obsidian.md/plugins?id=wp-publisher) By _irisable_

> 使用 Gutenberg 块、媒体复用、预览以及受保护的拉取和合并工作流，将笔记发布并显式同步到 WordPress。

[Publish on GitHub](https://obsidian.md/plugins?id=publish-git) By _fleker_

> 将标记了标签（例如 #public ）的选定笔记发布到托管 Jekyll 的 Git 仓库。

[Publish to Git Repo](https://obsidian.md/plugins?id=publish-to-git-repo) By _satlxq_

> 将库笔记**连同图片**发布到 GitHub 仓库。增量、原子、可安全重复运行。

[GitHub Pages share](https://obsidian.md/plugins?id=github-pages-share) By _wzmf399443_

> 将笔记发布到 GitHub Pages 站点并复制可分享链接。

[Commonplace Notes](https://obsidian.md/plugins?id=commonplace-notes) By _zachmueller_

> 用滑动窗格发布笔记并链接到其他笔记。

[NoteRelay](https://obsidian.md/plugins?id=noterelay) By _x-supermeng_

> 将 Obsidian 笔记排版后复制到公众号、小红书和 X。

![NoteRelay](https://raw.githubusercontent.com/x-supermeng/noterelay/master/assets/wechat-sponsor-qr.png)

[Jacky-mdflow](https://obsidian.md/plugins?id=mdflow-publisher) By _jackywxsz_

> 将 Markdown 笔记转换为可发布的微信公众号、X 文章和小红书排版。

[markdown to card](https://obsidian.md/plugins?id=markdown-to-card) By _hazel_

> 一键将 Obsidian 笔记渲染为高质感多平台图文卡片，适配小红书、抖音图文、Bilibili 图文等平台，同时支持 AI 文案转写，一键内容即可发布。

[MDToSM](https://obsidian.md/plugins?id=ob-article-to-sm) By _lpp188408_

> 将笔记排版并发布到微信公众号草稿箱，支持贴图导出。

[WeChatPB](https://obsidian.md/plugins?id=wechat-multi-publisher) By _kianzzz_

> 将 Markdown 笔记发布到多个微信公众号。

[Share Page](https://obsidian.md/plugins?id=htmlto-link) By _licc168_

> 立即将笔记分享为精美网页并复制公开链接。

[Slidev](https://obsidian.md/plugins?id=slidev) By _nirtamir2_

> 使用 Slidev 在 Obsidian 中创建基于 Markdown 的演示文稿。

[SlideDope](https://obsidian.md/plugins?id=slidedope) By _russquan_

> 将幻灯片制作为单文件 HTML 演示文稿：类 PPTX 编辑，拖放排序，带格式工具栏的行内文本，图片粘贴/拖动/调整大小，内置播放器，全屏和 PDF 导出。

[Paperish Presentation](https://obsidian.md/plugins?id=paperish-presentation) By _bcardiff_

> 将当前笔记呈现为极简、排版驱动的幻灯片，按标题拆分，保留所有渲染内容。

[Manuscript Export](https://obsidian.md/plugins?id=manuscript-export) By _dr3pi_

> 将书稿导出为干净、专业结构的 EPUB，包括 Longform 项目的一键导出。

[Manuscript Compiler](https://obsidian.md/plugins?id=manuscript-compiler) By _anthonyfitzpatrick_

> 将结构化的 Obsidian 书稿编译为可发布的 DOCX、ODT、EPUB、HTML、Markdown 和 XML 文件。

[Shunn Export](https://obsidian.md/plugins?id=shunn-export) By _easonblackwood_

> 将 Obsidian 笔记导出为格式正确的 Shunn 手稿 DOCX 文件，可直接用于短篇小说投稿。

[Rollup to PDF](https://obsidian.md/plugins?id=rollup-to-pdf) By _svm0n_

> 通过 Pandoc 将维基链接笔记树编译为单个格式化 PDF，带标题相对嵌套和行内或附录式页面展开。

[Beautiful PDF](https://obsidian.md/plugins?id=beautiful-pdf) By _creative781_

> 将 Markdown 笔记导出为样式化 PDF，带元素级样式配置、页面设置和 PDF 预览。

[Single Page PDF Export](https://obsidian.md/plugins?id=single-page-pdf) By _ilinuxio_

> 将 Obsidian 笔记导出为无分页的单页 PDF。高度根据内容自动计算。

[Dark PDF Export](https://obsidian.md/plugins?id=dark-pdf-export) By _zazencodes_

> 使用原生 PDF 导出器将笔记导出为干净的暗色模式 PDF。

[Paperize](https://obsidian.md/plugins?id=paperize) By _johannes-kaindl_

> 将活动笔记导出为干净、可选中文本的矢量 PDF——无信头。适用于桌面、iPhone 和 iPad。

[Academic Export](https://obsidian.md/plugins?id=academic-export) By _christinate_

> 按组织定义的文档样式和多种文件类型导出笔记。

[Pandoc GUI](https://obsidian.md/plugins?id=pandoc-gui) By _pan4ratte_

> 通过 Pandoc 在桌面和移动端使用现代 GUI 导出和导入笔记。为 Word、PDF、LaTeX、HTML、EPUB 等创建模板，并从商店安装数十个 lua 过滤器。

[Pandoc Export Buttons](https://obsidian.md/plugins?id=pandoc-export-buttons) By _kebl3541_

> 一键按钮将当前笔记导出为 Word、PDF、HTML、EPUB、LaTeX 以及 Pandoc 支持的任何其他格式。

[Ultimate LaTeX Converter](https://obsidian.md/plugins?id=ultimate-latex-converter) By _mariosgkmeng_

> 将笔记转换为 LaTeX，并可选择使用捆绑的 Python 转换脚本编译为 PDF。

[Document Export](https://obsidian.md/plugins?id=juanperez-document-export) By _perezsjuan_

> 将库导出为 PDF、DOCX 或 LaTeX 书籍格式。

[Cimu Print](https://obsidian.md/plugins?id=cimu-print) By _cimu233_

> 在 Obsidian 中直接进行打印预览和打印。

[export-readview-pdf](https://obsidian.md/plugins?id=export-readview-pdf) By _quincy-leo_

> 使用 Chromium 原生打印引擎将活动阅读视图的实时渲染 DOM 导出为 PDF。

[Copy Contents](https://obsidian.md/plugins?id=copy-contents) By _accsimplify_

> 以 Markdown、纯文本或 JSON 格式复制或导出文件和文件夹内容。

[Quick Export](https://obsidian.md/plugins?id=quick-export) By _mikagosz_

> 右键笔记或文本选区，将副本保存到库外为 .md 或 .txt。

[Inkbound](https://obsidian.md/plugins?id=inkbound) By _kidpeterpan_

> 将笔记、书籍文件夹或链接笔记导出为 EPUB 供电子墨水阅读器使用，可选无线传送到 Onyx Boox。

[EPUB Exporter](https://obsidian.md/plugins?id=epub-exporter) By _johannes-kaindl_

> 将笔记——或带嵌入章节的书籍笔记——导出为 EPUB。

[Composition Mode](https://obsidian.md/plugins?id=composition-mode) By _kvarnelis_

> 无干扰写作模式，带纸张容器、书页尺寸、点大小类型控制、缩放和可调背景。

[Flow Writer](https://obsidian.md/plugins?id=flow-writer) By _dctanugi_

> 促进心流与专注的无干扰写作模式。已写内容渐暗，只有正在输入的字保持亮起，已完成的词不可编辑。

[Word-Smith](https://obsidian.md/plugins?id=word-smith) By _sadsnake1_

> 终极无干扰写作套件。

[Ultrafocus](https://obsidian.md/plugins?id=ultrafocus) By _eliascotto_

> 将 Obsidian 变为专注写作终极平台的插件。

[Novelists Assistant](https://obsidian.md/plugins?id=novelists-assistant) By _alfred-clark_

> 用各种写作工具增强小说写作体验，保持复杂故事线井然有序。

[Snowflake Method](https://obsidian.md/plugins?id=snowflake-method) By _zzpolariszz_

> 用双语十步雪花法工作区规划小说，由便携式 Markdown 笔记支持。

[storyForge](https://obsidian.md/plugins?id=storyforge) By _volcanicmole_

> 极简小说写作工作区：系列/书籍排序、字数历史和限定范围的资料集，基于你已拥有的纯 Markdown。

[Tell-A-Tale](https://obsidian.md/plugins?id=tell-a-tale) By _brunojalessousa_

> 用于编写游戏传说、对话、叙事和场景指示的叙事工具包。

[Loreweaver](https://obsidian.md/plugins?id=loreweaver) By _noah_

> 小说家的角色关系图、伏笔追踪器和世界观构建模板。

[relation-weaver](https://obsidian.md/plugins?id=relation-weaver) By _guilier_

> 管理人物关系、阵营、时间线，支持热力图、亲密度演化、生命周期可视化、写作仪表盘。

[Feuillets](https://obsidian.md/plugins?id=feuillets) By _sargon01_

> Obsidian 的本地写作与编辑工作室，从单篇文章或散文到合集、非虚构项目或小说。

[Watermelon Workbench](https://obsidian.md/plugins?id=watermelon-workbench) By _pan75291386-hue_

> Obsidian 的舒适小说写作工作台，带章节导航、本地名称生成、时光机备份和实时写作统计。

[Gamified Writing Suite](https://obsidian.md/plugins?id=gamified-writing) By _poet-coded_

> 用等级进度（1-300）、作物/怪物养殖、每日连续、写作统计和能量/周期追踪来游戏化写作。

[Word Count Calendar](https://obsidian.md/plugins?id=word-count-calendar) By _xiwei945_

> 统计每日写作字数与笔记专注时长，提供日历、实时速度和专注排行。

[Count Words and Time](https://obsidian.md/plugins?id=count-words-and-time) By _perry661_

> 追踪写作会话数、写作时间、空闲时间、平均速度和专注率。

[Typing Stats](https://obsidian.md/plugins?id=typing-stats) By _ryhardy_

> 更高效地培养良好打字习惯。在记笔记时汇总高级打字统计。

[TypeLog](https://obsidian.md/plugins?id=typelog) By _czk200518-hash_

> 追踪 Obsidian 中的输入活动：净输入与总输入、有效编辑时间、打字速度、日历热力图和每日目标。

[StatusWords](https://obsidian.md/plugins?id=status-words) By _zimabx_

> 状态栏中可自定义的字数和字符统计。

[Reading Time Status](https://obsidian.md/plugins?id=reading-time-status) By _loispsq_

> 在状态栏显示当前笔记的字数和预计阅读时间（CJK 感知）。

[Carnet du Poete](https://obsidian.md/plugins?id=carnet-du-poete) By _alucard_

> 法语诗歌的音节计数器（省略 e 的规则 + 可能变音检测）和押韵词典。

[Ancient Poetry Printer](https://obsidian.md/plugins?id=ancient-poetry-printer) By _fenmirs_

> 基于赫蹏 ( <https://sivan.github.io/heti/> ) 为古文诗词提供表单化编辑和专业排版渲染。

[PaperCraft](https://obsidian.md/plugins?id=papercraft) By _gibsonchan-5_

> Obsidian 的可定制稿纸插件——为笔记赋予传统稿纸的温暖与美感。

[Prose Toolkit](https://obsidian.md/plugins?id=prose-toolkit) By _gabrielbacha_

> 在不离开笔记的情况下导航、格式化和提取句子与高亮。

[Prose Lens](https://obsidian.md/plugins?id=prose-lens) By _saiken_

> 编辑器中的实时可读性和风格标记：被动语态、副词、模糊词、长句和 Flesch 阅读等级。完全离线运行。

[Readability Compass](https://obsidian.md/plugins?id=readability-compass) By _maxonamission_

> 你的读者跟得上吗？选择一个可读性目标（≈ CEFR B1/B2/C1）；写作时状态栏显示是否达标，适用于任何语言。面板按部分显示原因，点击跳转。

##### 阅读与 PDF

[Supernote Annotations](https://obsidian.md/plugins?id=supernote-annotations) By _junskix1_

> 将 Supernote .note 文件转换为 PDF，并将 .mark 注释图层盖印到原始 PDF 的副本上。可选将识别的手写内容索引为可搜索的 Markdown。

[Local Book Reader](https://obsidian.md/plugins?id=local-book-reader) By _sunnyd0697_

> 在 Obsidian 中阅读本地电子书，支持进度、书签、摘录与研究笔记。

[Ebook Library](https://obsidian.md/plugins?id=ebook-library) By _swekizer_

> 库中书籍、漫画、杂志和文档的优美中央图书馆——浏览封面、标签与整理，并追踪阅读进度。

[Foxycape PDF](https://obsidian.md/plugins?id=foxycape-pdf) By _jansxue_

> 在 Obsidian 中嵌入 Foxycape PDF 阅读器，带注释同步。

[Paperless Storage](https://obsidian.md/plugins?id=paperless-storage) By _johannes-kaindl_

> 直接将 paperless-ngx 实例中的文档嵌入笔记。

[Paper Manager](https://obsidian.md/plugins?id=paper-manager) By _yuhang-dong_

> 在库中管理、阅读、注释和综合学术论文。

[Study Time Statistics](https://obsidian.md/plugins?id=study-time-statistics) By _tanzy226_

> 笔记和 PDF 的私有本地优先学习分析：会话、连续记录、热力图、趋势和排名。

[Tome Reader](https://obsidian.md/plugins?id=tome-reader) By _katrinasenpai_

> 以精美主题阅读 EPUB 书籍，将引言和词汇捕获到笔记中，自动构建目录，并可选择插入自己的 AI 密钥进行翻译和回顾。

[Weave EPUB AI Reader](https://obsidian.md/plugins?id=weave-epub-ai-reader) By _zhuzhige123, harrysuen626_

> 阅读带高亮、深度链接和内置 DeepSeek 助手的 EPUB 书籍。

[EPUB Reader Plus](https://obsidian.md/plugins?id=epub-reader-plus) By _ikarikr_

> 精致的 Obsidian EPUB 阅读器，带分页导航和主题感知阅读。

[FB2 Reader](https://obsidian.md/plugins?id=fiction-book-reader) By _kvasonaft_

> 直接在 Obsidian 中阅读 FictionBook (.fb2) 文件。

[Book Reader](https://obsidian.md/plugins?id=book-reader) By _ununnamed_

> 轻松阅读书籍：滚动位置记忆、剩余阅读时间和书籍进度条。

[ZIM Reader](https://obsidian.md/plugins?id=zim-reader) By _mrrepac_

> 在 Obsidian 内阅读离线 ZIM 存档（Kiwix、Wikipedia）：按标题搜索并阅读文章，链接和图片正常工作，直接来自本地 .zim 文件。

[Reader Margins](https://obsidian.md/plugins?id=reader-margins) By _lan-zk_

> 在 Obsidian 内置 PDF 阅读器上进行页边注释。

[PDF Highlight Notes](https://obsidian.md/plugins?id=pdf-highlight-notes) By _kebl3541_

> 将 PDF 导入库中，并将文本选区保存为带深度链接的高亮笔记，可重新打开 PDF 并跳转到高亮段落。

[PDF Resize](https://obsidian.md/plugins?id=pdf-resize) By _puhhh_

> 使用维基链接尺寸调整嵌入的 PDF 文件大小。

[PDF Toggle Dark Mode](https://obsidian.md/plugins?id=pdf-toggle-dark-mode) By _vivekgalatage_

> 切换 PDF 查看器和缩略图的暗色/亮色外观。

[PDF++ Exporter](https://obsidian.md/plugins?id=pdfplus-exporter) By _jldiaz_

> 将 PDF++ 注释导出到 PDF 文件。

[Reading Progress and Bookmarks](https://obsidian.md/plugins?id=reading-progress-bookmarks) By _ironunicorn66_

> 追踪 Markdown 和 PDF 文件的阅读进度与书签。

[Freedraw PDF](https://obsidian.md/plugins?id=freedraw-pdf) By _vividasasana_

> Obsidian 的自由手绘 PDF 注释工作区，带库支持的边车保存。

[Study PDF](https://obsidian.md/plugins?id=study-pdf) By _gris_

> 在 PDF 中高亮和记笔记，存储在文件本身中，然后作为间隔重复闪卡学习。

![Study PDF](https://raw.githubusercontent.com/gris/study-pdf/master/screenshots/click-popup.png)

[Classy PDF Extractor](https://obsidian.md/plugins?id=classy-pdf-extractor) By _pan4ratte_

> 从库内外 PDF 导入所有类型的注释，带灵活设置和模板。

[Reflow](https://obsidian.md/plugins?id=reflow) By _ampdat_

> 将 PDF 转换为干净、可读的 Markdown，并导出为 EPUB 供电子阅读器使用，完全在设备上完成。图表、表格和数学得以保留。无 API 密钥、无上传、无页数限制。

[Handwriting Natively](https://obsidian.md/plugins?id=native-pdf-handwriting) By _marsluay_

> 使用触控笔或鼠标在 PDF 上本地手写。

[OPPO Pad Markdown Annotation](https://obsidian.md/plugins?id=oppopad-pdf-annotation) By _decai335335-debug_

> 触控笔优先的 PDF 注释，带手掌防误触、触摸导航、压感墨迹和导出工具。

[Ink-Annotation](https://obsidian.md/plugins?id=ink-annotation) By _jepicaju862-lab_

> Markdown/PDF 手写注释，带钢笔、荧光笔、橡皮擦、颜色、宽度、撤销、重做、保存和退出工具，以及 PDF 文本选择注释（高亮、下划线、删除线和笔记）。

[Siden](https://obsidian.md/plugins?id=siden) By _giuseqpe_

> 用高亮、页边笔记和回顾侧边栏注释 Markdown 和 PDF 文本。

[Kindle Bridge](https://obsidian.md/plugins?id=kindle-bridge) By _x5gtrn_

> 将 Kindle 高亮和笔记从 Amazon 同步为库中每本书的 Markdown 笔记。

[PaperFolio for Kobo](https://obsidian.md/plugins?id=paperfolio-kobo) By _fire-university_

> 将 Kobo 高亮导入 Obsidian：每本书一个干净笔记，按真实阅读顺序排序并按章节分组，保护你自己的笔记。从连接的 Kobo 电子阅读器或 Kobo 桌面应用读取。

[Supernote Digests](https://obsidian.md/plugins?id=supernote-digests) By _tboules_

> 导入 Supernote 摘要备份，并将高亮摘要转换为 Obsidian 库中的笔记，组织为原子或按文档的笔记。

[Supernote Cloud Sync](https://obsidian.md/plugins?id=supernote-cloud-sync) By _raaneem_

> 镜像 Supernote Cloud 文件，可选将文件发回，并导出笔记本页面。

[Booxidian](https://obsidian.md/plugins?id=onyx-boox-sync) By _webline_

> 监视 Onyx Boox 注释导出文件夹，并将高亮和笔记导入库中。仅桌面。

[Boox Sync](https://obsidian.md/plugins?id=boox-sync) By _sky150_

> 通过 BooxDrop 将 Onyx Boox 设备的手写笔记同步到 Obsidian。

[reMarkable Bridge](https://obsidian.md/plugins?id=remarkable-bridge) By _kebl3541_

> 将笔记作为打字文本发送到 reMarkable，使用 Type Folio 在那里编辑，并将编辑拉回。使用官方桌面应用的本地存储；无需 Connect 订阅。非官方；与 reMarkable AS 无关。

[reMarkable Round-Trip](https://obsidian.md/plugins?id=remarkable-round-trip) By _maxonamission_

> 在最适合写作的地方写作，在 reMarkable 上审阅，并将你的批注带回原笔记。作为可实际编辑和精炼的 Markdown。

[Tagged Sync for reMarkable](https://obsidian.md/plugins?id=remarkable-tagged-sync) By _thomas-hochbichler_

> 将带标签的 reMarkable 笔记本和 PDF 同步为可搜索的 Markdown，按标签路由到文件夹。手写内容在你自己的机器上转录，高亮被引用。单向；不会写回。

[Zotero Highlights Sync](https://obsidian.md/plugins?id=zotero-highlights-sync) By _jesterspot1-svg_

> 创建链接的书籍笔记并同步 Zotero PDF 注释。

[Recto Zotero Translation](https://obsidian.md/plugins?id=recto) By _jensen-zheng-cmd_

> 将 Zotero PDF 论文转换为 Markdown，生成 AI 摘要和中文翻译，并构建可搜索的本地论文库，支持双语阅读。

[Book Highlights Importer](https://obsidian.md/plugins?id=book-highlights-importer) By _zhenya-yadlovskij_

> 将书籍高亮和笔记导入受管理的 Markdown 部分。

[Book Metasearch](https://obsidian.md/plugins?id=book-metasearch) By _bongho_

> 跨 Aladin、Kakao、Google Books 和 Open Library 的书籍笔记制作器。anpigon/obsidian-book-search-plugin 的继任者（Naver 于 2026-08-01 终止）。

[Digital Archive](https://obsidian.md/plugins?id=digital-archive) By _hyoyoonnam_

> 通过 Aladin 开放 API 搜索书籍，生成带封面图片和元数据的笔记，并在卡片画廊视图中浏览图书馆。

[Tome](https://obsidian.md/plugins?id=tome) By _tsukki-is-dead_

> 跨 Google Books、Open Library 和 OpenAlex 搜索书籍，自动回退，本地缓存封面，生成可定制笔记模板，并追踪阅读状态/评分/进度。

[Dogear](https://obsidian.md/plugins?id=dogear) By _masoudmim_

> 追踪阅读：搜索书籍，按页码、百分比或收听时间记录进度，并在一个地方为每本书保留笔记。

[Digital Dogear](https://obsidian.md/plugins?id=digital-dogear) By _dyllonwright_

> 用笔记中的一行“dogear”条目追踪书籍、节目、播客、漫画等——范围、自动滚动和顺序中断警告。

[Calibre Bridge](https://obsidian.md/plugins?id=calibre-bridge) By _p24l_

> 从 Calibre（内容服务器）导入书籍为 Markdown 笔记。

[Incremental Reading Toolkit](https://obsidian.md/plugins?id=incremental-reading-toolkit) By _kja140_

> 将长文阅读处理为计划主题、摘录和间隔重复闪卡。

[Bible Search](https://obsidian.md/plugins?id=bible-search) By _ruan-code_

> 在一流的 Obsidian 视图中进行全文圣经搜索和阅读。设置向导下载公共领域译本（KJV、BSB、WEB）并构建搜索页面——无需额外工具。

[Bible Search and Reader](https://obsidian.md/plugins?id=bible-search-reader) By _viacai_

> 本地圣经 Markdown 文档搜索和阅读插件，支持主题/大纲/经文搜索，带聚焦/并行/混合投影模式。

[Bible Journal](https://obsidian.md/plugins?id=bible-journal) By _skylernorgaard_

> 圣经日志和笔记的界面。

[conVERsum](https://obsidian.md/plugins?id=conversum) By _erykjj_

> 将散落的圣经引用转化为统一索引。自动发现、索引并链接所有笔记中的经文。

[Indice Nights](https://obsidian.md/plugins?id=bible-reference-index) By _thenights20_

> 创建圣经引用和相关笔记的轻量索引。

[JMdict Popup Dictionary (Japanese-English)](https://obsidian.md/plugins?id=jmdict-popup-dictionary) By _hata-suriiken_

> 由 JMdict 驱动的离线弹出式日英词典。选择单词即可查看读法和含义。支持桌面和移动端。

[Kakao Book Search](https://obsidian.md/plugins?id=kakao-book-search) By _chachagogogo_

> 카카오 책 검색 API 로 책을 검색하고, 표지/저자/역자/출판사 정보를 담은 노트를 자동으로 생성합니다.

[AnimeList](https://obsidian.md/plugins?id=animelist) By _cwh555_

> 由 Markdown 支持的本地优先动漫、漫画和小说库，带元数据搜索、封面、评分、模板、过滤器和完成时间线。

[MediaLog](https://obsidian.md/plugins?id=medialog) By _drsigmali_

> 在统一的 Obsidian 卡片墙中追踪电影、电视剧、游戏和书籍。

[MediaVault](https://obsidian.md/plugins?id=mediavault) By _ruveydayilmaz_

> 在库中追踪电影、电视剧、评论、重看和基于心情的舒适媒体。

[Reel](https://obsidian.md/plugins?id=reel) By _virus7976_

> 使用 TMDB 元数据记录电影和剧集。海报库、评论、剧集评分、内容过滤、接下来和统计——全部由 frontmatter 计算。为移动端打造。

[TNR - Track n Review](https://obsidian.md/plugins?id=tnrapp-tnr) By _lumelab-ai_

> Busca filmes/séries no TMDB e insere cards com embed (com ou sem elenco) na posição do cursor.

[Letterboxd Recent Films](https://obsidian.md/plugins?id=letterboxd-recent-films) By _jasperdevs_

> 将 Letterboxd 用户最近的日记海报显示为笔记中可点击的拼贴图片。

##### 媒体与音视频

[Audio Interface](https://obsidian.md/plugins?id=audio-interface) By _johannes-kaindl_

> 使用系统语音朗读笔记，并可导出为 WAV，附带本地可下载的德语语音。无云、无账号。

[ZeroCloud Clip](https://obsidian.md/plugins?id=srt-subtitle-toolkit) By _lamvanbien65-crypto_

> 零云剪藏：B 站视频下载、CC/AI 字幕抓取、whisper 转录与标准字幕剪藏一体化，全本地处理、不调用任何云 LLM。一键把 B 站视频变成结构化字幕笔记。

[Excalicap](https://obsidian.md/plugins?id=excalicap) By _guchang_

> 在 Obsidian 中创作并录制 Excalidraw 白板视频。

[Dictation](https://obsidian.md/plugins?id=dictation) By _rantoncuadrado_

> 在桌面和移动端录制语音，使用你选择的提供方转录，并安全地插入到捕获的光标处。

[Voice Notes](https://obsidian.md/plugins?id=voice-notes) By _jhm531_

> 朗读当前笔记，或用大模型概括后朗读。

[Local Voiceover - Private TTS](https://obsidian.md/plugins?id=local-voiceover) By _giacolees_

> 使用本地 Inflect Micro v2 合成朗读所选文本。

[Voice2Text](https://obsidian.md/plugins?id=voice-text-input) By _chenxuan520_

> 使用流式火山引擎 ASR 或小米 MiMo ASR 听写笔记。

[Offline Whisper Transcription](https://obsidian.md/plugins?id=offline-whisper) By _manthey_

> 使用 Whisper 离线语音转文字。

[Media Transcript](https://obsidian.md/plugins?id=media-transcript) By _semsevens_

> 播放带同步可点击转录的视频/音频。点击任意行跳转；播放行自动高亮。

[Media Fetcher](https://obsidian.md/plugins?id=media-fetcher) By _nonstopdevelopment_

> 使用本地 yt-dlp 安装将授权的音频和视频下载为库附件。

[Stream Embed](https://obsidian.md/plugins?id=stream-embed) By _devsdocs_

> 自动将粘贴的 Spotify 和 YouTube 链接转换为嵌入播放器。

[Video Learning Notes](https://obsidian.md/plugins?id=video-learning-notes) By _luzcmax_

> 在聚焦弹出播放器中打开带时间戳链接的本地视频。

[YouTube Panel](https://obsidian.md/plugins?id=youtube-panel) By _msh_

> 在右侧边栏中观看 YouTube 视频，同时记笔记。

[Audio Timestamp Player](https://obsidian.md/plugins?id=audio-timestamp-player) By _itnq18_

> 从可点击的转录时间戳播放视频和音频嵌入。

[Live Scribe](https://obsidian.md/plugins?id=live-scribe) By _korthomasjeong_

> 侧边栏实时会议转录，由 ElevenLabs Scribe 驱动。缓冲转录内容，并将选定部分插入笔记。

[Voice Scribe](https://obsidian.md/plugins?id=voice-scribe) By _mrrepac_

> 录制语音笔记，并使用 Whisper 在设备上转录。无云、无 API 密钥。

[Yuhanbo Voice Assistant](https://obsidian.md/plugins?id=yuhanbo-voice-assistant) By _yuhanbo758_

> 在笔记中使用语音识别、语音合成、唤醒词和可选的 AI 提供方。

[Hans TW TTS](https://obsidian.md/plugins?id=tw-read-aloud) By _hansai-art_

> 繁体中文优先的笔记 TTS，支持离线系统、Edge CLI 或 Azure 语音，句子高亮、文件夹播放、光标起始、发音规则，以及 Callout/Highlightr 支持。

[Speak Out](https://obsidian.md/plugins?id=speakout) By _landyking_

> 为 Markdown 源中标记的内容添加阅读视图文本转语音控制。

[Nuance - Excalidraw Pen Sound](https://obsidian.md/plugins?id=nuance-excalidraw-pen-sound) By _theanh97_

> 为 Excalidraw 白板上的数字手写提供令人满意的纸张书写声音。

[Stereo](https://obsidian.md/plugins?id=stereo) By _romanmurray_

> 从 Navidrome 或 Subsonic 兼容服务器流式播放音乐，带侧边栏播放器、媒体库浏览器和队列。

[Navidrome Player](https://obsidian.md/plugins?id=navidrome-player) By _bencurrie42_

> 在侧边栏停靠一个音乐播放器，以全质量流式播放 Navidrome（Subsonic）媒体库，无需离开库。

[Drum Notation Renderer](https://obsidian.md/plugins?id=drum-notation-renderer) By _ganzosupremo_

> 将现代鼓节奏编写为位置或网格，并渲染响应式 SVG 记谱。

[Drum Notation](https://obsidian.md/plugins?id=drum-notation) By _vkamolov_

> 创建、聆听、编辑和组织用于练习、课程、歌曲和演出的鼓记谱，带播放、循环和速度工具。

[Leadsheet](https://obsidian.md/plugins?id=leadsheet) By _chrisamber_

> 渲染 ChordPro 主旋律谱，带移调、变调夹和弦图、曲目单和自动滚动。

[Stage Binder](https://obsidian.md/plugins?id=stage-binder) By _leftcoast-apps_

> 构建 ChordPro 图表，组织曲目单和流程表，即时移调，并在平板或桌面上演出。

[StoryScore](https://obsidian.md/plugins?id=storyscore) By _srpernax_

> 将原声带变成世界观构建工具。管理 OST，追踪主题动机，并将音乐传说编织入库。

[NetEase + Discogs Sync](https://obsidian.md/plugins?id=netease-sync) By _miaoche2-cell_

> 将网易云音乐和 Discogs 收藏同步为带元数据、歌词和曲目列表的笔记，按 ID 去重。

[Sync Last.fm](https://obsidian.md/plugins?id=sync-lastfm) By _jaival-11_

> 从 Last.fm 无缝获取播放记录、艺术家、专辑和封面艺术，自动创建带属性的笔记，可直接用于数据库。

[Fretboard Renderer](https://obsidian.md/plugins?id=fretboard-renderer) By _hiroshi-watanabe_

> 从围栏代码块中的轻量 YAML 渲染吉他指板图。

[Scuttlebutt](https://obsidian.md/plugins?id=scuttlebutt) By _qkm2000_

> 在侧边栏录制或导入会议音频，使用本地 Whisper/vLLM 服务器转录，然后自动总结为整洁的带标签笔记。完全本地且私有。

[AI Voice Polish](https://obsidian.md/plugins?id=ai-voice-polish) By _pangtouyu717_

> 语音录制 → AI 润色 → 插入笔记，一站式语音写作工作流。

[Wispr Flow Sync](https://obsidian.md/plugins?id=wispr-flow-sync) By _madforstrength_

> 将 Wispr Flow 会议笔记和转录同步到库中。仅读取本地文件，从不连接网络。

[Telegram Sync Amvera R](https://obsidian.md/plugins?id=telegram-sync-amvera-r) By _vicstu_

> 将 Telegram 机器人消息同步到 Obsidian，带音频转录和 AI 后处理。

##### 数据与表格与数据库

[Bases Plus](https://obsidian.md/plugins?id=bases-plus) By _kim109238_

> 为数据库添加时间线、日历和图谱视图，以及增强表格视图中的分页、分组控制、手动排序和可配置打开目标。

[Bases Visuals](https://obsidian.md/plugins?id=bases-pill-colors) By _gabrielbacha_

> 为数据库表格添加 Notion 风格药丸颜色和条件格式。

[TableCSV](https://obsidian.md/plugins?id=table-csv) By _k-tech-studio_

> 以表格形式打开 CSV 文件。支持文本过滤查看、编辑单元格，以及通过系统剪贴板复制或粘贴。

[Csv to table](https://obsidian.md/plugins?id=csv-to-table) By _jackydangelo_

> 将选中的 CSV 文本转换为 Markdown 表格。

[Markdown Spreadsheets](https://obsidian.md/plugins?id=markdown-spreadsheets) By _ondreu_

> 在专用标签页中以电子表格网格编辑任何 Markdown 表格。

[HTML Table Toolbar](https://obsidian.md/plugins?id=html-table-toolbar) By _charette-ai-group_

> 用于 HTML 表格的 Word 风格工具栏：行与列、合并与拆分单元格、标题行、对齐、逐行逐列边框和单元格底纹——这些是管道表格无法做到的。HTML 字体工具栏的姊妹插件。

[HTML Table Math](https://obsidian.md/plugins?id=html-table-math) By _timeofmei_

> 在原始 HTML 表格单元格内渲染 LaTeX 数学。

[Fancy Charts](https://obsidian.md/plugins?id=fancy-charts) By _robertoallende_

> 任意笔记内的交互式图表。数据以纯 Markdown 表格形式存在于每个块内——即使没有插件也可读且对 AI 友好。

[Timeline for Bases](https://obsidian.md/plugins?id=timeline-bases) By _purplelawnchairs_

> 将数据库中的带日期笔记沿可缩放、可平移的时间轴绘制为点和范围。

[Bases Navigator](https://obsidian.md/plugins?id=bases-navigator) By _yueyinfeng_

> 使用方向键在 Obsidian 数据库视图中的文件间导航。

[Extended Base](https://obsidian.md/plugins?id=extended-base) By _lucytheboss_

> 扩展数据库视图，支持列换行、顶部对齐单元格和透明背景。

[Power Tables](https://obsidian.md/plugins?id=powertables) By _powerplugins-dev_

> 就地着色、计算和排序 Markdown 表格：单元格填充和文本颜色、实时重新计算的公式以及列排序，全部存储为纯 Markdown。

[Power Bases](https://obsidian.md/plugins?id=powerbases) By _powerplugins-dev_

> 为数据库添加看板、日历、时间线、图表、画廊和表格视图，带行内编辑、颜色、汇总、字段类型、公式和 CSV 导入。

[Duowei Table](https://obsidian.md/plugins?id=duowei-table) By _jepicaju862-lab_

> .duowei 文件中的本地结构化数据，具有表格、看板和画廊视图，以及数据库兼容布局。

[FieldForge](https://obsidian.md/plugins?id=fieldforge) By _stef4678_

> 库的可视属性浏览器。选择 frontmatter 字段并铸造成数据透视表和图表——无需 Dataview 查询。

![FieldForge](https://raw.githubusercontent.com/stef4678/fieldforge/master/assets/screenshot-1.png)

[Basify](https://obsidian.md/plugins?id=basify) By _leolaurindo_

> 将列表、表格和任务列表转换为 Obsidian 数据库。每项一篇笔记。

[Property Board](https://obsidian.md/plugins?id=property-board) By _nalevex_

> 创建带属性驱动的看板视图的 .board 文件。

[Table Fields](https://obsidian.md/plugins?id=table-fields) By _rosetta-zidian-guo_

> 为表格列赋予类型——复选框、选择、日期、货币、百分比——在实时预览和阅读视图中带行内控件。在磁盘上保持纯管道表格。

[GridSense](https://obsidian.md/plugins?id=gridsense) By _grub-basket_

> 基于笔记 frontmatter 的 Excel 级可编辑网格：多单元格选择、向下/向右填充、选区查找替换、键盘优先编辑、标题内容列。

[mq](https://obsidian.md/plugins?id=mq) By _harehare_

> 直接在 Obsidian 中运行 mq（类似 jq 的 Markdown 查询语言）查询：实时查询块、笔记/库转换和编辑器支持。

[XU Table Layout Helper](https://obsidian.md/plugins?id=table-layout-helper) By _xcloud-ai_

> 自定义表格布局、列宽、文本换行、对齐、溢出和粘性表头。替代手写 CSS 片段。

[Bases Timeline](https://obsidian.md/plugins?id=bases-timeline) By _mmattia09_

> 数据库的 Notion 风格时间线视图：在可拖动条上规划项目笔记，带状态、优先级和日期。

[DataDeck](https://obsidian.md/plugins?id=datadeck) By _svm0n_

> 将 CSV 文件作为卡片、看板、表格、图表、习惯仪表板、任务板、专注阅读器或交互式旅行地图查看和编辑。带最佳拟合线、公式和按拆分着色的图表。笔记列渲染为 Markdown。

[Sticky Table Headers](https://obsidian.md/plugins?id=sticky-table-headers) By _jwczju_

> 在滚动长表格时保持表头可见，支持多个表格和水平滚动。

[Simple Table Formulas](https://obsidian.md/plugins?id=simple-table-formulas) By _maxcohn_

> 为 Markdown 表格添加电子表格式公式。将公式写入单元格，运行命令将其烘焙为计算值，公式保留在注释中以便后续编辑。

[Postgres DB](https://obsidian.md/plugins?id=pg) By _arghyahub_

> 允许在 Obsidian 内使用 PostgreSQL 数据库并管理查询。

[Airtable Tabula](https://obsidian.md/plugins?id=airtable-tabula) By _mehulg_

> 本地 Airtable 风格表格，带选择、过滤、查询、CSV/Excel 导入和可选的 Airtable 同步。

[TSDB](https://obsidian.md/plugins?id=tsdb) By _dtkav_

> 用于存储插件指标的本地时间序列数据库。使用 PromQL 将实时图表嵌入笔记。

[JSON Table Viewer](https://obsidian.md/plugins?id=json-table-viewer) By _usero2_

> 将 JSON 渲染为美观表格，支持嵌套数组作为嵌套表格。

[Fileclass](https://obsidian.md/plugins?id=fileclass) By _mdelobelle_

> 为笔记提供类型化、带校验的属性与引导输入——定义可复用的笔记类型，如 frontmatter 的架构。Metadata Menu 的继任者，由数据库驱动。

[Property Values Browser](https://obsidian.md/plugins?id=property-values-browser) By _soulbits-vibe_

> 浏览 frontmatter 属性和值，带计数、搜索快捷键和删除操作。

[nPort RF Analysis](https://obsidian.md/plugins?id=np-rf-analysis) By _jerrywiltz_

> 从 Markdown 分析射频和微波网络，并渲染 SVG 图表、表格和 Smith 圆图。

##### 集成与外部服务

[Wechatian](https://obsidian.md/plugins?id=wechatian) By _laruence_

> 微信消息桥：在微信和你的库之间收发消息、附件和文章。

[WeChat Diary](https://obsidian.md/plugins?id=wechat-diary) By _artemislin_

> 通过与微信机器人聊天捕获日记和快速笔记。消息作为每日 Markdown 文件落入库中。

[WeChat Link Sync](https://obsidian.md/plugins?id=wechat-link-sync) By _codezelee_

> 使用「同步链接」微信小程序收集文章链接，并保存为本地 Markdown 笔记。

[Weixin Sync](https://obsidian.md/plugins?id=weixin-sync) By _chenyk0317_

> 微信文章一键暂存，Obsidian 自动同步至本地知识库。

[WeChat Collector](https://obsidian.md/plugins?id=wechat-collector) By _lizhen0628_

> 将微信公众号文章同步为库中的 Markdown，按日期归档。

[Bi Ji Tong Bu](https://obsidian.md/plugins?id=wechat-note-helper) By _bijitongbu_

> 笔记同步，转发一下就能从微信里把文章、视频、附件、聊天记录、收藏都同步到自己的笔记本。

[LUMI Sync](https://obsidian.md/plugins?id=lumi-sync) By _lufei150426_

> LUMI 是跨平台知识资产统一入库工具，将微信、飞书、网页等渠道的文章、聊天、音视频和文本等数字资产，经 AI 整理后自动沉淀到库。

[WeTongbu](https://obsidian.md/plugins?id=wetongbu) By _ygx2378_

> 将微信文章、飞书文档和文章型网页同步到 Obsidian。

[Telegram Sidebar](https://obsidian.md/plugins?id=telegram-sidebar) By _reallygood83_

> 在 Obsidian 侧边栏嵌入 Telegram Web。无需离开库即可与机器人和联系人聊天。

[Vault Telegram Bridge](https://obsidian.md/plugins?id=vault-telegram-bridge) By _n23eos_

> 从 Telegram 机器人捕获消息到库中。无需服务器。

[Instagram DM Inbox](https://obsidian.md/plugins?id=instagram-dm-inbox) By _jkmoona_

> 将 Instagram Business 私信镜像为库中的笔记和白板线程图。

[VK Inbox](https://obsidian.md/plugins?id=vk-inbox) By _jesterspot1-svg_

> 将 VK 消息和语音笔记导入所选笔记。

[MAX Sync](https://obsidian.md/plugins?id=max-sync) By _vicstu_

> 将 MAX messenger 的消息同步到 Obsidian 库。

[Harang Nextcloud](https://obsidian.md/plugins?id=harang-nextcloud) By _search5_

> 粘贴 Nextcloud 内部链接以渲染带大小、上传日期和一键在浏览器中打开文件的富文件块。

[Harang Calendar](https://obsidian.md/plugins?id=harang-calendar) By _search5_

> 直接在笔记中查看 CalDAV 日历事件。

[Harang Contacts](https://obsidian.md/plugins?id=harang-contacts) By _search5_

> 在笔记中直接引用 CardDAV 通讯录中的联系人。

[Harang Immich](https://obsidian.md/plugins?id=harang-immich) By _search5_

> 从 Immich 加载和保存笔记图片。

[Immich Journal](https://obsidian.md/plugins?id=immich-journal) By _fcandi_

> 从自托管 Immich 服务器插入每日笔记日期的照片，调整大小、加说明并链接回 Immich。

[Drive Attachments](https://obsidian.md/plugins?id=drive-attachments) By _kim-dongryeong_

> 搜索 Google Drive 并插入持久的 Drive 链接笔记，上传拖放文件到 Drive 而非库——带内容哈希去重。

[Browser Bookmark](https://obsidian.md/plugins?id=browser-bookmark) By _notenerd_

> 独立的书签侧边栏，在 Obsidian 内置 Web 查看器中打开保存的链接，无需离开应用即可浏览。

![Browser Bookmark](https://raw.githubusercontent.com/notenerdofficial/browser-bookmark/master/screenshots/demo.gif)

[Browser Sync](https://obsidian.md/plugins?id=browser-history-sync) By _git-akihakune_

> 将本地浏览器历史导入为有组织的 Markdown 笔记。

[Browser Note](https://obsidian.md/plugins?id=browser-note) By _fengshuzi_

> 暴露受 API 密钥保护的本地 HTTP API 以查看、创建、编辑和删除库笔记，带内置浏览器界面。

[Note API](https://obsidian.md/plugins?id=note-api) By _fengshuzi_

> 暴露受 API 密钥保护的本地 HTTP API 以查看、创建、编辑和删除库笔记。

[Web Embed](https://obsidian.md/plugins?id=web-embed) By _notenerd_

> 将任何网站作为交互式浏览器视图嵌入笔记。

[Hoverlay](https://obsidian.md/plugins?id=hoverlay) By _zspatter_

> 在浮动窗口中悬停预览链接：实时页面、阅读器视图或元数据卡片，带嵌入式媒体播放器。

[Linkwarden](https://obsidian.md/plugins?id=linkwarden) By _heiss_

> 搜索并链接 Linkwarden 书签，归档 URL，在笔记旁显示其高亮，并将高亮插入为引用。

[Wayback Linker](https://obsidian.md/plugins?id=wayback-linker) By _real-fruit-snacks_

> 使用 Wayback Machine 归档活动笔记中的外部链接，并替换为快照 URL。

[Better Link Display](https://obsidian.md/plugins?id=better-link-display) By _lucas_

> 将裸 URL 链接转换为显示网站图标和标题的富书签。

![Better Link Display](https://raw.githubusercontent.com/tcyeee/obsidian-better-link-display/master/public/0.gif)

[Link Title Plus](https://obsidian.md/plugins?id=link-title-plus) By _abnerzhao_

> 将粘贴的 URL 转换为带标题和图标的链接。

[Link Cards](https://obsidian.md/plugins?id=link-cards) By _mainamirh_

> 获取 URL 元数据并在笔记中显示为富嵌入卡片。

[Letterboxd Recent Films](https://obsidian.md/plugins?id=letterboxd-recent-films) By _jasperdevs_

> 将 Letterboxd 用户最近的日记海报显示为笔记中可点击的拼贴图片。

[Fragrantica Search](https://obsidian.md/plugins?id=fragrantica-search) By _pug0r_

> 在 Fragrantica 网站上搜索香水。

[Kakao Book Search](https://obsidian.md/plugins?id=kakao-book-search) By _chachagogogo_

> 카카오 책 검색 API 로 책을 검색하고, 표지/저자/역자/출판사 정보를 담은 노트를 자동으로 생성합니다.

[Book Metasearch](https://obsidian.md/plugins?id=book-metasearch) By _bongho_

> 跨 Aladin、Kakao、Google Books 和 Open Library 的书籍笔记制作器。anpigon/obsidian-book-search-plugin 的继任者（Naver 于 2026-08-01 终止）。

[Tome](https://obsidian.md/plugins?id=tome) By _tsukki-is-dead_

> 跨 Google Books、Open Library 和 OpenAlex 搜索书籍，自动回退，本地缓存封面，生成可定制笔记模板，并追踪阅读状态/评分/进度。

[Kimi Assistant](https://obsidian.md/plugins?id=kimidian) By _liu-zhiyu-enicom_

> 将 Kimi Code CLI 作为 AI 协作者嵌入库侧边栏。通过 ACP 与 Kimi 聊天，读取、搜索和编辑笔记。

[Workbuddian](https://obsidian.md/plugins?id=workbuddian) By _jiang198012_

> 与本地 WorkBuddy/CodeBuddy CLI 作为 AI 代理聊天：流式回复、思考/工具调用卡片、@笔记引用、文件附件、模型/权限工具栏、斜杠命令、带差异的行内编辑、导出和搜索。

[Qoderian](https://obsidian.md/plugins?id=qoderian) By _qoder_

> 将 Qoder CLI 作为 AI 协作者嵌入库中。库成为其工作目录，赋予文件读写、搜索、bash 命令和多步骤工作流能力。

[OpenCode WSL](https://obsidian.md/plugins?id=opencode-wsl) By _emmet24_

> 通过 WSL 桥将 OpenCode Web UI 嵌入 Obsidian 侧边栏。

[Skill and Harness Manager](https://obsidian.md/plugins?id=skill-harness-manager) By _joeutke-dev_

> 仅 macOS - 使用功能区按钮和上下文右键菜单启动库中存储的技能。注册工具和代理，分配给技能并连接到其活动会话。

[Agent MCP](https://obsidian.md/plugins?id=agent-mcp) By _rospaans_

> 在 Obsidian 内运行编码代理（Claude Code、Codex、Ollama）。附带内置终端，并通过 MCP 暴露活动选区和打开的编辑器。

[Web Card](https://obsidian.md/plugins?id=web-card) By _xuxiaominger_

> 将网页高亮粘贴为精美的信息卡片。

[Skim Highlights](https://obsidian.md/plugins?id=skim-highlights) By _xuxiaominger_

> Skim 高亮自动复制到剪贴板，粘贴到 Obsidian 任意笔记，点击链接跳回 PDF 原文。

[Save2Vault](https://obsidian.md/plugins?id=save-to-vault) By _s2o_

> 将 X 上的帖子和线程保存到 Obsidian 作为干净的 Markdown 笔记。在任何帖子下提及 @save2obsidian。

[RedNote](https://obsidian.md/plugins?id=rednote) By _ch-yyk_

> 将 RedNote/小红书与 Obsidian 连接。

[Zhihu Reader](https://obsidian.md/plugins?id=zhihu-reader) By _iamzay_

> 在 Obsidian 内阅读知乎问答。

[Tetromino](https://obsidian.md/plugins?id=tetromino) By _frostmute_

> 将 Are.na 块和附件单向导入库中作为 Markdown 笔记。

[Easy Web Clipper](https://obsidian.md/plugins?id=easy-web-clipper) By _gibsonchan-5_

> 一键将网页剪辑为干净的 Markdown 笔记。自动提取主要内容，移除广告和导航。

[Ishibashi Web Clipper V2](https://obsidian.md/plugins?id=ishibashi-web-clipper-next) By _ishibashi-c_

> 将用户共享的网页链接保存为本地 Markdown 笔记，不获取页面内容或元数据。

[ReelLeaf](https://obsidian.md/plugins?id=reelleaf) By _huggzer_

> 将公开网页、图片和视频转换为 Markdown 笔记，安全同步到库。

[Stashwise](https://obsidian.md/plugins?id=stashwise) By _stashwise_

> Stashwise 读取你从手机保存的视频、帖子和文章，并写入摘要和要点。这些笔记落入库中，可供搜索、链接和构建。

[Omni Collector](https://obsidian.md/plugins?id=omni-collector) By _simonemuller6127-png_

> 全平台收藏同步与本地知识管理（B 站 / YouTube / 小红书 / MakerWorld / 小黑盒），支持 AI 整理建议与 ContentGroup 关联识别。

[Clipboard Monitor](https://obsidian.md/plugins?id=clipboard-monitor) By _awaragi_

> 监视系统剪贴板，并在 Obsidian 未聚焦时也将新内容插入固定笔记的光标处。

[Clipboard Saver](https://obsidian.md/plugins?id=clipboard-saver) By _zhongwenfu00-alt_

> 将系统剪贴板内容（含时间戳）保存到当前笔记：桌面端在复制时自动追加，移动端通过命令手动保存。

[OmniDrawio Viewer](https://obsidian.md/plugins?id=omni-drawio-viewer) By _pavelpeng7_

> Obsidian 的离线多页 Drawio 图表查看。

[draw.io Blocks](https://obsidian.md/plugins?id=drawio-blocks) By _deyixtan_

> 使用托管 diagrams.net 编辑器或可选离线编辑器，直接在 Markdown 代码块内编辑和渲染 draw.io 图表。

[Codecks Bridge](https://obsidian.md/plugins?id=codecks-bridge) By _milad-s5_

> 浏览 Codecks 卡片并将其导入项目管理器作为项目和任务。对 Codecks 只读。

![Codecks Bridge](https://raw.githubusercontent.com/milad-s5/obsidian-codecks-bridge/master/images/deck-grid.png)

[CloudBeaver](https://obsidian.md/plugins?id=cloudbeaver) By _dbeaver_

> 从控制台标签或笔记中的代码块对 CloudBeaver 服务器运行 SQL。

[MQTT Sync](https://obsidian.md/plugins?id=mqtt-sync) By _vuecwiz_

> 接收 MQTT 消息并路由到确定、可恢复的 Markdown 笔记。

[Ntfy Sync](https://obsidian.md/plugins?id=ntfy-sync) By _vuecwiz_

> 在 Obsidian 中接收 ntfy 消息，并通过可配置规则、模板、附件、持久恢复和可选处理结果路由到 Markdown 笔记。

[GLink](https://obsidian.md/plugins?id=glink) By _nedkelly_

> 在 Windows 上使用本地链接注册表在嵌入视图中打开 Google Drive 占位符文件。

[Termux Terminal](https://obsidian.md/plugins?id=termux-terminal) By _glaysia_

> Android 上 Obsidian 内真正的交互式 Termux 终端。

[SSH Terminal](https://obsidian.md/plugins?id=ssh-terminal) By _justinzzc_

> 嵌入 Markdown 文档的交互式 SSH 终端。

[Embedded Terminal](https://obsidian.md/plugins?id=embedded-terminal) By _no4var2ye_

> Obsidian 内类似 VS Code 的终端。

[BioUnix](https://obsidian.md/plugins?id=biounix) By _yukaiquan_

> 运行生物信息学命令，与代理聊天，并浏览 BioUnix 的技能和记忆。

##### 界面与主题

[Star Icons](https://obsidian.md/plugins?id=star-icons) By _stef4678_

> Obsidian 的图标集合管理器。浏览 71,000+ 捆绑图标，构建集合和标签，并通过直观的规则引擎和实时预览将图标应用到文件、文件夹和标签页。

[side Thing](https://obsidian.md/plugins?id=side-thing) By _k0ccc_

> 为笔记中选中的文本添加边注（侧边栏）评论。

[Quick Access Dashboard](https://obsidian.md/plugins?id=quick-access-dashboard) By _harrisonaedwards_

> 在一个侧边栏中显示已选、最近和最常打开的文件和文件夹。

[Main Pane](https://obsidian.md/plugins?id=main-pane) By _arasan95_

> 指定一个窗格为“主窗格”，并将文件打开（链接、切换器、资源管理器、搜索、反向链接、图谱、新笔记等）路由到该窗格。

[Touchpad zoom](https://obsidian.md/plugins?id=tocuhpad-zoom) By _ruarai_

> 添加浏览器式触控板缩放。

[Micropatches](https://obsidian.md/plugins?id=micropatches) By _flowing-abyss_

> 针对 Obsidian 的小型定向修复和体验优化。

![Micropatches](https://raw.githubusercontent.com/flowing-abyss/obsidian-micropatches/master/assets/banner.png)

[Alternative Explorer](https://obsidian.md/plugins?id=alternative-explorer) By _sk-obsidian_

> 以 Apple Notes 风格侧边栏浏览文件夹和笔记，可在文件夹和笔记列表之间切换。

![Alternative Explorer](https://raw.githubusercontent.com/sunwookwak-polisci/Alternative-Explorer/master/assets/alternative-explorer-demo.png)

[Miller Columns (Horizontal Tree)](https://obsidian.md/plugins?id=miller-columns) By _marc-hg_

> 将嵌套 Markdown 列表转换为交互式水平列视图，用于专注的任务管理。

[Pinned Tabs](https://obsidian.md/plugins?id=compact-pinned-tabs) By _nameiskyro_

> Chrome 风格紧凑固定标签页，带自定义图标、平滑移动和防误关闭保护。

[Control Center](https://obsidian.md/plugins?id=plugins-control) By _ssjy1919_

> 管理已安装插件的启用状态、延迟启动和设备类型控制。

[Scroll Wheel Zoom](https://obsidian.md/plugins?id=scroll-wheel-zoom) By _jwczju_

> 使用 Ctrl/Cmd+Shift+ 滚轮缩放整个应用，包括比内置限制更宽的缩小范围。

[Full Width Toggle](https://obsidian.md/plugins?id=full-width-toggle) By _do0ori_

> 从状态栏中的 Notion 风格开关按笔记切换全宽。

[Tab Title Customization](https://obsidian.md/plugins?id=tab-title) By _bridger-herman_

> 提供标签页标题的自定义选项，包括截断、添加文件扩展名和路径。

[Tab Tint](https://obsidian.md/plugins?id=tab-tint) By _cypherpoet_

> 为标签页标题着色自定义颜色，一眼区分打开的笔记。

[Tab Title from H1 File Title](https://obsidian.md/plugins?id=tab-title-from-file-title) By _herbertjones_

> 将笔记的第一个 H1 标题显示为其标签页标题。

[Ribbon Hider](https://obsidian.md/plugins?id=ribbon-hider) By _lucytheboss_

> 通过右键单击隐藏功能区按钮，并在设置中管理。

[Ribbon and Status Bar Organizer](https://obsidian.md/plugins?id=ribbon-organizer) By _xooooooooox_

> 将功能区按钮分组，并从可配置的功能区菜单启动命令。

![Ribbon and Status Bar Organizer](https://raw.githubusercontent.com/xooooooooox/obsidian-ribbon-organizer/master/docs/assets/ribbon-tab.png)

[Editor Mode Button](https://obsidian.md/plugins?id=editor-mode-button) By _kubaxius_

> 添加按钮切换全局编辑器模式。

[Dim Lights](https://obsidian.md/plugins?id=dim-lights) By _strombraaten_

> 调暗所有非活动窗格，使你专注于当前工作的窗格。

[Hover Highlight](https://obsidian.md/plugins?id=hover-highlight) By _raito1chi_

> 为白板添加柔和的光标光晕效果，产生跟随鼠标的微妙径向光。

[Cursor-Smith](https://obsidian.md/plugins?id=cursor-smith) By _sadsnake1_

> 用最先进的光标引擎锻造你的光标！

[Cursor Torch](https://obsidian.md/plugins?id=cursor-torch) By _astraaaa02_

> 将文本光标变成闪烁的火炬：温暖的光芒照亮光标周围的文本，其余笔记渐暗。

[Torch Cursor](https://obsidian.md/plugins?id=torch-cursor) By _acxtrilla_

> 使应用变暗，并在文本光标周围点亮温暖的火炬光晕。

[Terminal Workbench Cursor](https://obsidian.md/plugins?id=terminal-workbench-cursor) By _real-fruit-snacks_

> Terminal Workbench 系列的光标引擎：滑动光标、火炬聚光灯，以及在你输入时从文本上剥离 Terminal Workbench Pet 幽灵的幽灵轨迹。

[Terminal Workbench Pet](https://obsidian.md/plugins?id=terminal-workbench-pet) By _real-fruit-snacks_

> 一个漂浮的小幽灵在你的库中漂移，跟随光标，轻触时变色。匹配 Terminal Workbench 主题调色板。

[Character Companion](https://obsidian.md/plugins?id=character-companion) By _devilsurvivor2_

> 为你自己的角色提供可定制的舞台，在侧边栏中生活并沿底部边缘行走，带点击动画、气泡和可选的反应评论流。

[Bold Folder Name](https://obsidian.md/plugins?id=bold-folder-name) By _stagars-m_

> 将原生文件资源管理器中的文件夹名称加粗，可选将样式限制为顶级文件夹。

[Color Note](https://obsidian.md/plugins?id=color-note) By _mikagosz_

> 从右键菜单使用自定义状态为文件资源管理器中的笔记和文件夹标题着色。

[Color Marker](https://obsidian.md/plugins?id=color-marker) By _ruisloan_

> 从右键菜单用颜色标签标记文件夹和笔记——12 种日历风格颜色，可随时添加或移除。

[Icon Palette](https://obsidian.md/plugins?id=icon-palette) By _ckelsoe_

> 为文件、文件夹、标签页、标签、属性和书签设置自定义图标和颜色，带规则簿自动应用。

[Icon picker](https://obsidian.md/plugins?id=icon-picker) By _rocketbang_

> 预览并选择 Lucide 图标用于图标 frontmatter 属性，如数据库地图视图所用。

[AutoIcons](https://obsidian.md/plugins?id=autoicons) By _anuzdhk_

> 根据 frontmatter、自定义规则和文件类型自动为文件和文件夹添加图标（material icons、uicons 等）。

[GlyphIt](https://obsidian.md/plugins?id=glyphit) By _jmarasch_

> 为文件、文件夹、标签页、标题和行内文本添加图标。图标包保持压缩，大图标包加载迅速。

[Property Icons](https://obsidian.md/plugins?id=property-icons) By _runnerback_

> 根据笔记属性（frontmatter）规则在资源管理器中文件名前显示徽章图标。

[Style Manager](https://obsidian.md/plugins?id=style-manager) By _emarpiee_

> 提供管理主题、CSS 片段和样式设置的高级控件。将它们转换为可调节控件，可保存、导出或作为预设切换配置。

[Style Controller](https://obsidian.md/plugins?id=style-controller) By _jqml_

> 通过原生设置界面管理可复用的 Obsidian 样式配置文件、路径覆盖和视觉设置。

[Style Context](https://obsidian.md/plugins?id=style-context) By _moyf_

> CSS 片段助手。将本地图片注册为 CSS 变量，快速设置库背景，在 body 上暴露当前主题以进行主题特定样式，并按文件夹自动添加 cssclasses。

[Theme School](https://obsidian.md/plugins?id=theme-school) By _michellegdyason_

> 可视化学习主题开发，然后毕业到独立 CSS。

[Border Theme Compacted](https://obsidian.md/plugins?id=border-theme-compacted) By _vuecwiz_

> 使用对齐的标签页和用于功能区操作的状态栏菜单压缩 Border 主题。

[Opal Companion](https://obsidian.md/plugins?id=opal-companion) By _cyriusweng_

> Opal 主题伴侣：为每笔记页面状态、强调色重着色、布局、标注、彩色高亮、任务状态和图片布局提供可视化选择器——应用前可预览。

[Journal Mode](https://obsidian.md/plugins?id=journal-mode) By _ktgoldwolf_

> 用动画、颜色和和纸胶带风格分隔线为笔记添加样式，用于富有表现力的数字日志。

[BioRead](https://obsidian.md/plugins?id=bioread) By _5ha99y0_

> ADHD 无障碍插件，在预览/阅读模式下动态应用仿生阅读格式。

[SideBrace](https://obsidian.md/plugins?id=sidebrace) By _realhenrylo_

> 使用熟悉标注语法（> [!brace] ）将几行相关文本用大括号和边注分组。

![SideBrace](https://raw.githubusercontent.com/realhenrylo/obsidian-sidebrace/master/docs/images/demo-light.png)

[Discord-style Custom Emojis](https://obsidian.md/plugins?id=custom-emojis) By _akskokki_

> 输入 : 短代码: 即可在任何地方渲染你自己的自定义表情图片，就像在 Discord/Slack 中聊天一样。底层笔记保持纯文本。

[Chinese Emoji Picker](https://obsidian.md/plugins?id=cn-emoji) By _bighead2425_

> 通过中文关键词搜索和插入表情的 Obsidian 插件。输入：：后跟中文词（如：：梯子、：：开心），光标下方弹出选择面板。

[Federated Emoji](https://obsidian.md/plugins?id=federated-emoji) By _ringeringeraja33_

> 渲染并插入来自 Mastodon 和兼容联邦实例的自定义表情。

[Discord Emoji Picker](https://obsidian.md/plugins?id=discord-emoji-picker) By _kurothecoder_

> Discord 风格表情和贴纸选择器，从库中文件夹读取图片，完全离线。

![Discord Emoji Picker](https://raw.githubusercontent.com/kurothecoder/DiscordEmojiPicker/master/docs/screenshots/picker-demo.gif)

[Big Characters](https://obsidian.md/plugins?id=big-characters) By _artem_

> 为中文文本添加样式，可选拼音注释。

[Lure](https://obsidian.md/plugins?id=lure) By _vault51_

> 在每个笔记标题中显示库路径的可点击、可编辑面包屑，类似 Dolphin 文件管理器地址栏。

[Working tabs](https://obsidian.md/plugins?id=working-tabs) By _notenerd_

> 将打开的标签页分组为命名、可切换的空间，完成工作后可收起。

[Group Tabs](https://obsidian.md/plugins?id=group-tabs) By _stagars-m_

> 将相关文件分组到一个原生标签页中，重新打开最近的分组，并将 Markdown 成员导出为一个文件。

[New Tab Here](https://obsidian.md/plugins?id=new-tab-here) By _ashrudral_

> 通过命令面板或配置的热键在活动标签页旁边打开新标签页，而非标签条末尾。

[New Tab Pins](https://obsidian.md/plugins?id=new-tab-pins) By _ptspzy_

> 将每个空白标签页变成固定笔记、即时搜索和最近文件的平静启动器。

[Move Tab](https://obsidian.md/plugins?id=move-tab) By _jasonfirkus_

> 添加左右移动活动标签页的命令。跨标签组工作。

[Close and Switch to Recent Tab](https://obsidian.md/plugins?id=close-and-switch-to-recent-tab) By _xzhi_

> 关闭当前标签页后自动切换到最近所在的标签页。

[Faster Stacked Tabs](https://obsidian.md/plugins?id=faster-stacked-tabs) By _benhancock_

> 在保留滑动动画的同时加快堆叠标签页切换。

[Pins Save](https://obsidian.md/plugins?id=pins-save) By _satosprod_

> 记住你固定的 Markdown 笔记，并在下次 Obsidian 启动时重新打开为固定标签页。

[Simple Homepage](https://obsidian.md/plugins?id=simple-homepage) By _dajhiro_

> 将一篇笔记设为主页，行为类似网页浏览器。

[Home Launcher](https://obsidian.md/plugins?id=home-launcher) By _soulbits-vibe_

> 用自定义主页和起始页替换新标签页：搜索名称和笔记内容，添加自己的启动器按钮，查看最近文件和书签。

[Homepage Studio](https://obsidian.md/plugins?id=homepage-studio) By _ashenashes_

> 用于日志、任务、计划、文件组和写作活动的模块化桌面主页。

[Cosmos Homepage](https://obsidian.md/plugins?id=cosmos-homepage) By _borrasindira97-star_

> 将库变成交互式星空主页，用于笔记、任务、活动、专注和主题。

[Dashboard Hub](https://obsidian.md/plugins?id=dashboard-hub) By _takeshy_

> 共享仪表板、时间线、日历、看板、备忘录、数据库和秘密。

![Dashboard Hub](https://raw.githubusercontent.com/takeshy/obsidian-dashboard-hub/master/docs/images/dashboard-overview.png)

[Sircatx Toolkit](https://obsidian.md/plugins?id=sircatx-toolkit) By _sircatx_

> 提供阅读模式锁定、行内代码复制等可独立配置的 Obsidian 增强功能。

[Glimpse](https://obsidian.md/plugins?id=glimpse) By _dyse-sofqi_

> 动态高亮、正则查询、捕获组、自定义 CSS、高亮索引、提词器、光标链接选区、滚动同步、迷你地图。

[Rainbow Header Coloring](https://obsidian.md/plugins?id=rainbow-header-coloring) By _albertoos_

> 使用可定制调色板为 Markdown 标题（H1-H6）着色。支持色图循环和每级用户定义颜色。

[Headers Hue](https://obsidian.md/plugins?id=op-headers-hue) By _markcrobbins2112_

> 为 H1-H6 的 Markdown 标题着色，添加定向渐变边框，处理悬停变亮，并在折叠状态更新时播放自定义色相变化。

[File Tree Selector Hue Rotate](https://obsidian.md/plugins?id=op-file-tree-selector-hue-rotate) By _markcrobbins2112_

> 使用直接的顺序边框颜色帧，在悬停或活动项周围注入动画色相旋转边框覆盖框。

[Readable Date Links](https://obsidian.md/plugins?id=readable-date-links) By _laughedelic_

> 以可读格式显示日期，不更改内容。

[Daily Note Icon](https://obsidian.md/plugins?id=daily-note-icon) By _benhancock_

> 将今天的日记标签页图标替换为实心黄色星标。

[Local Fonts](https://obsidian.md/plugins?id=local-fonts) By _flowing-abyss_

> 从库中文件夹加载字体，并应用到文本、界面、标题、代码和表情符号。

[formatForge](https://obsidian.md/plugins?id=formatforge) By _volcanicmole_

> 简单的 Obsidian 插件，添加简单的颜色选择器和内置字体。

[HTML Font Toolbar](https://obsidian.md/plugins?id=html-font-toolbar) By _charette-ai-group_

> 浮动工具栏，用干净的行内 HTML 为选中文本设置样式：颜色、高亮、字号、字体、粗体/斜体/下划线/删除线，以及表格感知对齐。重复格式化合并为单个 span 而非嵌套。

![HTML Font Toolbar](https://raw.githubusercontent.com/charette-ai-group/html-font-toolbar/master/docs/toolbarOn.png)

[AA Code Block](https://obsidian.md/plugins?id=aa-codeblock) By _azulika_

> 以 MS PGothic 12pt 渲染 aa 代码块，使日文 ASCII 艺术保持原始形状。

[Palette Vault](https://obsidian.md/plugins?id=palette-vault) By _jstools_

> 生成调色板，行内预览十六进制代码，渲染调色板块，并从笔记中的图片提取颜色。

[CSS Resource Variables](https://obsidian.md/plugins?id=css-resource-variables) By _valleytheknight_

> 将本地库文件（图片、字体等）映射到 CSS 自定义属性，使任何主题或片段都可以使用 var() 引用你自己的本地文件。

[GATE Study Styles](https://obsidian.md/plugins?id=gate-study-styles) By _anandrajbaghel_

> GATE 学习笔记的自定义样式，带可切换的标注、格式和嵌入设置。

[Smooth Window Resize](https://obsidian.md/plugins?id=smooth-window-resize) By _binaricat_

> 在调整桌面窗口大小时保持长笔记响应灵敏。

[Fullscreen Image](https://obsidian.md/plugins?id=fullscreen-image) By _robert-fleming_

> 点击任意图片全屏展开，支持捏合、滚轮和按钮缩放，以及拖动平移。

[Quick Tray](https://obsidian.md/plugins?id=quick-tray) By _goodjinc_

> 让 Obsidian 在 Windows 托盘中运行，并提供快速笔记/搜索操作。

[Mini Tray](https://obsidian.md/plugins?id=mini-tray) By _wangdamon6-hub_

> 关闭 Obsidian 到系统托盘。约 5 KB，零配置。

[View Mode Lock](https://obsidian.md/plugins?id=view-mode-lock) By _goodjinc_

> 使用灵活规则将 Markdown 笔记锁定为阅读、实时预览或源码模式。

[Journal View](https://obsidian.md/plugins?id=journal-view) By _ruverse-org_

> 将日记变成连续、可编辑的日志——滚动穿越时间，跳转到任意日期，无需离开视图即可书写。

[Read in Edge](https://obsidian.md/plugins?id=read-in-edge) By _ooheroism_

> 使用 Microsoft Edge 浏览器打开当前活动的 Markdown 文件。

[Tag Visibility](https://obsidian.md/plugins?id=tag-visibility) By _prisant-labs_

> 控制哪些标签在 Obsidian 界面中可见：隐藏、标记或始终显示任意标签。仅显示、文件安全、完全可逆。

[TokenBar](https://obsidian.md/plugins?id=tokenbar) By _sn1p4am_

> 在状态栏显示活动笔记的本地 token 计数。

[Token Usage](https://obsidian.md/plugins?id=token-usage) By _beolatn_

> Obsidian 内实时 Claude Code token 追踪——侧边栏 5 个时间范围、缓存写入/读取拆分、7 天模型图表、HTML 仪表板和内置词汇表。无需 API 密钥。

[Activity Map](https://obsidian.md/plugins?id=activity-map) By _ffy6511_

> 追踪可信的文件活动并按文件夹探索。

![Activity Map](https://raw.githubusercontent.com/ffy6511/obsidian-activity-map/master/docs/assets/activity-map-hero.png)

[Folder Info](https://obsidian.md/plugins?id=folder-info) By _stagars-m_

> 在原生文件资源管理器中显示文件夹旁分开的文件和文件夹计数。

[Full File Extensions](https://obsidian.md/plugins?id=full-file-extensions) By _stagars-m_

> 在原生文件资源管理器中显示完整文件名，包括扩展名。

[Bookmark Folder Expand](https://obsidian.md/plugins?id=expandable-folder-bookmarks) By _samuel-ysz_

> 直接在书签面板中展开已收藏的文件夹。

[Expanded Bookmarks](https://obsidian.md/plugins?id=expanded-bookmarks) By _bookmarklover_

> 核心书签的扩展版本——移动、排序、搜索过滤等。

[Open in Marked](https://obsidian.md/plugins?id=open-in-marked) By _ttscoff_

> 在 Marked 3 中打开当前笔记或库。

[Desktop Sticky Notes](https://obsidian.md/plugins?id=desktop-sticky-notes) By _y-usuzumi_

> 始终置顶的 Obsidian 窗口中可调整大小、文件支持的便利贴。

[Simple Sticky Notes](https://obsidian.md/plugins?id=simple-sticky-notes) By _rephila_

> 打开浮动便利贴弹窗，支持固定、颜色和工作区恢复。

[Floating Sticky Notes](https://obsidian.md/plugins?id=floating-sticky-notes) By _kasairo_

> 在库中创建和管理浮动便利贴。

[Just Note](https://obsidian.md/plugins?id=just-note) By _rajalokan_

> 在专注、独立的弹出窗口中打开 Obsidian 笔记。

[Remember Settings Window](https://obsidian.md/plugins?id=remember-settings-window) By _xzhi_

> 记住并恢复【在独立窗口中打开设置】窗口的尺寸和位置。

[WorkSpace Plus Group](https://obsidian.md/plugins?id=workspace-plus-group) By _cnwenzhihong_

> 快速切换和管理工作区。

[Canvas Text Scaler](https://obsidian.md/plugins?id=canvas-text-scaler) By _valleytheknight_

> 调整白板卡片大小时，将其内部文本缩放至卡片自身大小，而非仅随缩放变化。

[Canvas Positioning Toolkit](https://obsidian.md/plugins?id=canvas-positioning-toolkit) By _valleytheknight_

> 自动布局和排列白板卡片到网格，使用热键拾取放置而非拖动，或通过文本搜索在集群中查找卡片。

[Canvas Project Autofit](https://obsidian.md/plugins?id=canvas-project-autofit) By _brianpenghe_

> 打开白板时缩放到填满视口宽度，顶部对齐。适合卡片众多的项目板。

[Canvas Toolkit](https://obsidian.md/plugins?id=canvas-toolkit) By _freemax_

> 使用可编辑标签、便利贴、板式分组和快速外观控制自定义 Obsidian 白板。

[Vintage Sticky Canvas](https://obsidian.md/plugins?id=vintage-sticky-canvas) By _xiaowuwu0620_

> 使用复古纸面、手写边缘标签和透明撕纸渲染来装饰白板。

[Cognitive Canvas](https://obsidian.md/plugins?id=cognitive-canvas) By _xiaowuwu0620_

> 将白板文件导向分阶段、逐步的交互式 HTML，用于演示和屏幕录制。

[Canvas to PDF](https://obsidian.md/plugins?id=canvas-to-pdf) By _2d3dtreasures_

> 将 Obsidian 白板导出为干净、可搜索的矢量 PDF 和 HTML 文档，直接在你的计算机上完成。

[Canvas to Tasks](https://obsidian.md/plugins?id=canvas-to-tasks) By _heixizhu_

> 将白板文本节点中的任务与 Tasks 插件同步。

[Canvas Smart Paste](https://obsidian.md/plugins?id=canvas-smart-paste) By _zhao414_

> 智能地将剪贴板内容粘贴到白板作为节点——单节点、标题树、列表树或带自动检测的段落。

[Canvas Card Linker](https://obsidian.md/plugins?id=canvas-card-linker) By _hadimozaffari75-source_

> 自动将白板文本卡片转换为以其首行命名的笔记，并将带标签的箭头连接镜像为源笔记中的维基链接。

[Canvas Image LOD](https://obsidian.md/plugins?id=canvas-image-lod) By _seadhe_

> 根据缩放级别将大白板图片替换为缩小代理，消除图片密集板上的缩放卡顿。原件永不修改。

[Cammvas](https://obsidian.md/plugins?id=cammvas) By _cuatrecasespro_

> 为白板带来专用思维导图工作流：分支拖放、可折叠树、熟悉的热键、自动布局和大纲。

[Mind Map Visual](https://obsidian.md/plugins?id=mindmap-plugin-hbd-dang) By _duybaodg_

> 以头脑风暴为重点的思维导图插件，带自动组织布局和键盘快捷键。

[Mind map editor](https://obsidian.md/plugins?id=mindmap-editor) By _vulture039_

> 将大纲编辑为思维导图，同步到 Markdown。

[Mindmap Mode](https://obsidian.md/plugins?id=mindmap-mode) By _phantom-nw_

> 在同一标签页中将任何笔记切换为可编辑的径向思维导图。每次编辑直接写回原始笔记，永不创建新文件。

[Stratify Mindmap](https://obsidian.md/plugins?id=stratify-mindmap) By _ninglg, lywooye_

> 将 Markdown 笔记转换为深层、可编辑的思维导图，支持拖放和键盘导航。

[Mindmap Xmind](https://obsidian.md/plugins?id=mindmap-xmind) By _hellokunzai_

> 在 Obsidian 中查看与交互编辑 XMind 思维导图（.xmind 格式）。

[Xmind Pal](https://obsidian.md/plugins?id=xmind-pal) By _moziar_

> 在笔记中嵌入并预览 .xmind 思维导图文件。

[Blockspace Workspace](https://obsidian.md/plugins?id=blockspace-workspace) By _jepicaju862-lab_

> 本地优先、类 Notion 的结构化块工作区，带独立 Obsidian 视图。

[Visual Notes](https://obsidian.md/plugins?id=visual-notes) By _dandersondev_

> 基于 Obsidian 白板格式的可视工作区：可嵌套自由形式板、图标磁贴网格、看板、便利贴、清单、列、画笔绘图、标签、反应等。

[Maguilanote](https://obsidian.md/plugins?id=maguilanote) By _is-cout_

> Obsidian 内类似 Milanote 的可视工作区板：无限白板、笔记、图片、链接、列、待办列表、箭头等。

[Floor notes](https://obsidian.md/plugins?id=floor-notes) By _ashenashes_

> 将专用 Markdown 文件呈现为线程记录流。

[Feuillets](https://obsidian.md/plugins?id=feuillets) By _sargon01_

> Obsidian 的本地写作和编辑工作室，从单篇文章或散文到合集、非虚构项目或小说。

[Manushelf](https://obsidian.md/plugins?id=manushelf) By _ivan94_

> 在响应式、触感 3D 书架上浏览 Markdown 手稿。

[Album Gallery](https://obsidian.md/plugins?id=album-gallery) By _ezakamak_

> 创建受 Photos 启发的画廊，管理照片、动画 GIF 和视频。

[Simple Gallery](https://obsidian.md/plugins?id=simple-gallery) By _robert-fleming_

> 将简单的、受 YAML 启发的图片嵌入列表转换为响应式照片网格。

[Poster Wall](https://obsidian.md/plugins?id=poster-wall) By _zheng-shugan_

> 将带标签的 Markdown 笔记作为本地优先海报墙浏览。

[Gallery Navigator](https://obsidian.md/plugins?id=gallery-navigator) By _groundfic_

> 可视库导航器：文件夹/标签树与封面图片卡片墙、全文搜索（包括 PDF）、图片快速查看和链接预览卡片。

[Photo-tagging](https://obsidian.md/plugins?id=photo-tagging) By _thebesttvarynka_

> 为照片中的人物打标签并渲染交互式画廊的插件。

[Desk Photos](https://obsidian.md/plugins?id=desk-photos) By _tapeau_

> 在编辑器中添加粘性和浮动照片，固定到屏幕或笔记的某部分。用相框、胶带、图钉、文字自定义，甚至可以播放声音！

[Web Embed](https://obsidian.md/plugins?id=web-embed) By _notenerd_

> 将任何网站作为交互式浏览器视图嵌入笔记。

[HTML-Preview](https://obsidian.md/plugins?id=html-preview) By _mounib16_

> 在笔记内将 HTML 代码块渲染为实时、沙盒化的网页。

##### 开发者工具

[Hot Reload](https://obsidian.md/plugins?id=hot-reload) By _pjeby_

> 当开发中的插件文件更改时自动重新加载。

[GitHub Updater](https://obsidian.md/plugins?id=github-updater) By _real-fruit-snacks_

> 直接从 GitHub 下载并安装非官方插件。

[Starter Packs](https://obsidian.md/plugins?id=starter-packs) By _grub-basket_

> 创建和分享精选的社区插件合集。以链接或代码分享合集；接收者可预览合集并几次点击即可安装全部。

[Better Store](https://obsidian.md/plugins?id=better-store) By _real-fruit-snacks_

> 精致的社区插件浏览器：过滤、丰富详情、趋势和已安装插件管理。

[Ferusnet Security Audit](https://obsidian.md/plugins?id=ferus-plugin-auditor) By _ferusnet_

> 对已安装的社区插件进行静态分析安全审计。标记危险 API，对照 GitHub 验证发布哈希，并对插件风险评分。完全本地——无数据离开库。

[PakCLI Suite](https://obsidian.md/plugins?id=pakcli-suite) By _pakcli_

> 一体化套件：符号链接管理器、资源路由器、树图、SQLSeal 和 Tablite CSV 编辑器，以及 Leaflet 数据库。

[Code Runner](https://obsidian.md/plugins?id=code-runner) By _chujiu-dev_

> 在 Obsidian 中交互式运行代码块，支持 stdin 输入，可在桌面、iOS 和 Android 上使用。支持 Python、C、C++、Java、Go、JavaScript、TypeScript、Rust、Kotlin 等。

[Code Viewer](https://obsidian.md/plugins?id=code-viewer) By _tracingorigins_

> 使用原生语法高亮查看和编辑代码文件。

[Code Playground](https://obsidian.md/plugins?id=code-playground) By _touss59_

> 笔记内实时可编辑代码游乐场，即时预览：HTML/CSS、React、Vue、Svelte、Angular、Solid、Next.js、TypeScript、JavaScript 等。

[Code Linker](https://obsidian.md/plugins?id=code-linker) By _max-fluff_

> 将笔记深度链接到源代码。自动补全符号并跳转到 IDE（VS Code、JetBrains）或 GitHub/GitLab 永久链接中的精确行。嵌入实时代码片段。

[Code Graph](https://obsidian.md/plugins?id=code-graph) By _mrjw717_

> 可视化代码文件的连接——导入、调用、继承、实现、注释链接、ADR 和测试——作为笔记旁的交互式图。

[code-snippet-manager](https://obsidian.md/plugins?id=code-snippet-manager) By _jingmengzhiyue_

> 在 Markdown 中收集、组织、格式化、搜索和解释代码片段。

[Code Fence Completer](https://obsidian.md/plugins?id=code-fence-completer) By _swhl_

> 可靠地建议语言标识符并补全 Markdown 代码块围栏。

[Clang-Format Code Blocks](https://obsidian.md/plugins?id=clang-format-code-blocks) By _oemer-kara_

> 使用 clang-format 格式化笔记中的围栏代码块。

[Copy Indented Code Blocks](https://obsidian.md/plugins?id=copy-indented-code-blocks) By _gvivster_

> 从缩进代码块复制时移除前导缩进。

[OpenCode WSL](https://obsidian.md/plugins?id=opencode-wsl) By _emmet24_

> 通过 WSL 桥将 OpenCode Web UI 嵌入 Obsidian 侧边栏。

[Skill and Harness Manager](https://obsidian.md/plugins?id=skill-harness-manager) By _joeutke-dev_

> 仅 macOS - 使用功能区按钮和上下文右键菜单启动库中存储的技能。注册工具和代理，分配给技能并连接到其活动会话。

[MADR Author](https://obsidian.md/plugins?id=madr) By _vanerp_

> 直接在库中编写 Markdown 架构决策记录。

[Decision Ledger](https://obsidian.md/plugins?id=decision-ledger) By _din-es_

> 将决策绑定到其治理的代码，并查看代码何时漂移。

[GATE Manager](https://obsidian.md/plugins?id=gate-manager) By _anandrajbaghel_

> 社区管理的 GATE Obsidian 库安装器和更新器。

[Open in Marked](https://obsidian.md/plugins?id=open-in-marked) By _ttscoff_

> 在 Marked 3 中打开当前笔记或库。

[Just Another Hotkey Addon](https://obsidian.md/plugins?id=just-another-hotkey-addon) By _chern-kp_

> 文本编辑的新有用热键和若干额外功能。

[Key Sequence](https://obsidian.md/plugins?id=key-sequence) By _wantchane_

> 为任意命令分配多键序列。

[Vim Commands](https://obsidian.md/plugins?id=vim-commands) By _mateuszkowalczyk_

> 将任意 Obsidian 命令映射到 Vim 风格多键序列，在任何地方都可用，不仅限于编辑器。

[Vim Reading Navigation](https://obsidian.md/plugins?id=vim-reading-nav) By _xlongfeng, ds-argus_

> 无需鼠标即可阅读和导航笔记。在阅读模式下使用键盘滚动、跳转、选择链接和预览链接笔记。

[Vimium Navigation](https://obsidian.md/plugins?id=vimium-navigation) By _giuseqpe_

> 使用 Vimium 风格键盘控制导航笔记、链接、侧边栏和标签页。

[Kakoune](https://obsidian.md/plugins?id=kakoune) By _yukai_

> Obsidian 的 Kakoune 模态编辑键绑定。

[NeuroVim](https://obsidian.md/plugins?id=neurovim) By _johannes-kaindl_

> 通过玩赛博朋克间谍惊悚片学习 Vim。任务是你在真实 Obsidian 笔记中修复的 Vim 练习。

[Embedded Terminal](https://obsidian.md/plugins?id=embedded-terminal) By _no4var2ye_

> Obsidian 内类似 VS Code 的终端。

[Termux Terminal](https://obsidian.md/plugins?id=termux-terminal) By _glaysia_

> Android 上 Obsidian 内真正的交互式 Termux 终端。

[SSH Terminal](https://obsidian.md/plugins?id=ssh-terminal) By _justinzzc_

> 嵌入 Markdown 文档的交互式 SSH 终端。

[Terminus](https://obsidian.md/plugins?id=terminus) By _notenerd_

> 真正的终端，具有 shell 集成和初学者友好的命令帮助，以及 Claude Code 文件编辑的审查工作流：词级差异、撤销、反向链接破坏警告等。

[Local REST API - Periodic Notes](https://obsidian.md/plugins?id=local-rest-api-periodic-notes) By _coddingtonbear_

> 为本地 REST API 添加日记、周记、月记、季记和年记的周期笔记端点，带解析当前笔记路径的 MCP 工具。

[Note API](https://obsidian.md/plugins?id=note-api) By _fengshuzi_

> 暴露受 API 密钥保护的本地 HTTP API 以查看、创建、编辑和删除库笔记。

[Config Sync](https://obsidian.md/plugins?id=config-sync) By _xooooooooox_

> 跨设备和库选择性按需分发库配置（片段、热键、插件设置）。

[Explorer Sort](https://obsidian.md/plugins?id=explorer-sort) By _strayvlad_

> 在每个文件夹中使用自定义顺序手动排列文件资源管理器中的文件和文件夹。

[Full File Extensions](https://obsidian.md/plugins?id=full-file-extensions) By _stagars-m_

> 在原生文件资源管理器中显示完整文件名，包括扩展名。

##### 语言与学习

[Kotoba Vault](https://obsidian.md/plugins?id=kotoba-vault) By _saegusa1996_

> 从读音属性将日语词汇笔记组织到五十音文件夹中。

[Kotoba Insert](https://obsidian.md/plugins?id=kotoba-insert) By _fabsamson_

> 本地查询日语单词并插入可配置的词汇笔记。

[Lingua Study](https://obsidian.md/plugins?id=lingua-study) By _obsidianrelay_

> 使用带时间戳的 YouTube 转录、播放控制和按需 AI 翻译学习语言。

[Mynary Dictionary](https://obsidian.md/plugins?id=mynary) By _zhyfei314_

> 使用维基词典查询单词并创建个性化词汇笔记。

[Contextual Vocabulary](https://obsidian.md/plugins?id=contextual-vocabulary) By _0utsights_

> 用 AI 定义选中的单词，就地链接，并维护可导航的词典笔记。

[LexiBridge](https://obsidian.md/plugins?id=lexibridge) By _ongiei_

> 本地优先词典工具包，带离线定义、在线增强和单词本同步。

[English Reading Companion](https://obsidian.md/plugins?id=english-reading-companion) By _haohao1101_

> 分析高亮的英文文本并生成结构化、可更新的学习笔记。

[Anki Embed](https://obsidian.md/plugins?id=anki-embed) By _devsdocs_

> 通过 AnkiConnect 在 Obsidian 笔记内嵌入交互式 Anki 闪卡牌组。

[Anki Forge](https://obsidian.md/plugins?id=anki-forge) By _keptan_

> 可靠地直接在笔记中创建 Anki 卡片。

[Anki Flashcard Sync](https://obsidian.md/plugins?id=anki-cloze-sync) By _joeyyu123_

> 将填空、问答、代码练习和图片遮挡闪卡从 Obsidian 同步到 Anki。

[Anki Card Link](https://obsidian.md/plugins?id=anki-card-link) By _wangruobing-dev_

> 使用笔记 ID、卡片 ID、文本或自定义查询，在桌面和移动端从 Obsidian 打开 Anki 搜索。

[Better Flashcards](https://obsidian.md/plugins?id=better-flashcards) By _mihirpatel1112_

> 使用标签、行内分隔符和填空语法将 Obsidian 闪卡同步到 Anki。原始 Flashcards 插件的修复分支。

[Ankify Plus](https://obsidian.md/plugins?id=ankify-plus) By _ruizg_

> 使用 DeepSeek API 将 Obsidian 笔记转换为 Anki 卡片，支持多种模型、识图、Cloze 填空、批量标签等扩展功能。

[Remember](https://obsidian.md/plugins?id=remember) By _volfpe_

> 创建和复习闪卡，支持间隔重复、FSRS 调度、问答、可逆和填空卡片、牌组、多设备同步，以及类似 Anki 的学习工作流。

[CSV Flashcards](https://obsidian.md/plugins?id=csv-flashcards) By _axelreaeklund_

> 使用标准 CSV 文件的简单易用闪卡测验器和编辑器。原生兼容 NotebookLM 导出，跳过复杂的间隔重复，提供轻松的学习体验。

[Retrieva](https://obsidian.md/plugins?id=retrieva) By _daichi-629_

> Markdown 原生的间隔重复，带 FSRS。

[Quizcraft](https://obsidian.md/plugins?id=quizcraft) By _quannh-netalik_

> 从 YAML 代码块进行交互式单选、多选、匹配和排序测验。

[Quizzable](https://obsidian.md/plugins?id=quizzable) By _monapdx_

> 在 Markdown 笔记内定义、渲染和进行测验。独立，带 Meta Bind 和 JS Engine 的可选公共 API。

[QuizPort](https://obsidian.md/plugins?id=quizport) By _kelleyblackmore_

> 使用 QuizPort JSON 格式在笔记内运行交互式测验，带解释、提示和评分。

[Omniscient](https://obsidian.md/plugins?id=omniscient) By _fortnitemaster32_

> 将大型习题集转化为测验与回忆学习会话。

[Study Familiar](https://obsidian.md/plugins?id=study-familiar) By _vahtian_

> 住在库中的小猫头鹰：追踪需要学习的内容，一键为概念评分，为努力而非分数欢呼。

[Sprint Familiar](https://obsidian.md/plugins?id=sprint-familiar) By _vahtian_

> 研究冲刺计时器，结束时记录论证中的变化：所写主张、所链来源、所标假设、所提问题、排除路径。

[A-Level Study Coach](https://obsidian.md/plugins?id=alevel-study-coach) By _virbird_

> A-Level 学习辅助教练：按需答疑、失分记录、弱点发现与复习提醒。数据全部保存在库内。

[Gongkao Sprint](https://obsidian.md/plugins?id=gongkao-sprint) By _joyellez_

> 公务员考试学习仪表板，用于练习集、错题卡和间隔复习。

[Academic RSS Reader](https://obsidian.md/plugins?id=academic-rss-reader) By _apocly_

> 在 Obsidian 中订阅、阅读和整理学术 RSS 文献。

[Paper Link](https://obsidian.md/plugins?id=paper-link) By _jiangnan0522_

> 将粘贴的论文 URL（arXiv、OpenReview、ACL Anthology 等）替换为 [标题 (会议 年份)](url) 链接。

##### 角色扮演与游戏

[Cairn Companion](https://obsidian.md/plugins?id=cairn-companion) By _naxhh_

> Cairn 2e 桌面角色扮演游戏的战役管理工具。快速链接 cairn 物品、法术、怪物等。获取随机建议并保持玩家角色速查表最新。

[Lancer Companion](https://obsidian.md/plugins?id=lancer-companion) By _shaktoth_

> 终极 Lancer RPG 套件：遭遇追踪器、PC/NPC 导入器、骰子掷器和时钟。

[TTRPG Tools - Controls](https://obsidian.md/plugins?id=ttrpg-tools-controls) By _jareika_

> TTRPG Tools 插件套件的可配置控制中心。

[RoleCall Sync](https://obsidian.md/plugins?id=rolecall-sync) By _rolecall-games_

> 将你的 Published/ 笔记同步到 Role Call 游戏。主持人笔记保持私密。

[Chartdown](https://obsidian.md/plugins?id=chartdown) By _nossimonov_

> 在笔记中将 Chartdown 地图块（战斗地图、六角图、区域地图）渲染为 SVG。

[Spell Picker](https://obsidian.md/plugins?id=spell-picker) By _szynszyl320_

> 允许用户从所有基础 D&D 法术中选择。

[Strong Start](https://obsidian.md/plugins?id=strong-start) By _leethobbit_

> 使用 Sly Flourish 的八个懒惰 RPG 准备步骤创建、管理和运行 TTRPG 战役。

[Azer](https://obsidian.md/plugins?id=azer) By _znorgaard_

> D&D 会话工具包：创建类型化战役笔记（NPC、会话、冒险日志、地点、PC），带维基链接交叉引用，掷骰子表，并用 AI 生成表格和会话摘要。

[TCG Binder](https://obsidian.md/plugins?id=tcg-binder) By _bgarciamoura_

> 追踪宝可梦卡牌收藏、构建卡组并在库中浏览卡片。

![TCG Binder](https://raw.githubusercontent.com/bgarciamoura/obsidian-tcg-binder/master/docs/assets/dashboard.png)

[Chess](https://obsidian.md/plugins?id=chess) By _mrrepac_

> 在工作区窗格中与内置机器人下棋，难度可调 1-10。

[Spin The Wheel](https://obsidian.md/plugins?id=spin-the-wheel) By _avettorel71_

> 带声音的交互式旋转轮盘，从选项列表中随机选择。

[Chorefast](https://obsidian.md/plugins?id=chorefast) By _webinspectinc_

> 掷骰子，完成家务！基于 Simone Giertz 的作品。

[Kuro Gamification](https://obsidian.md/plugins?id=kuro-gamification) By _johannes-kaindl_

> 神经多样性友好的游戏化：经验值、等级、带冻结令牌的连续记录、确定性战利品和传说。任何可能升级的内容默认关闭。

[Focus Safari](https://obsidian.md/plugins?id=focus-safari) By _seekseep_

> 当你专注笔记时，动物聚集在侧边栏。专注越久，出现越多。付费激活码解锁稀有动物。

[Second-Brain Tarot](https://obsidian.md/plugins?id=second-brain-tarot) By _neon-weaver_

> 从真实完整牌组抽出的塔罗牌阅读，并根据你自己库的内容全新解读——不是查找表，不是通用塔罗文案。

[Ridiculous Coding](https://obsidian.md/plugins?id=ridiculous-coding) By _chengou-zheng_

> 光点、轰鸣、烟花、经验值和等级——让你的编辑体验变得荒谬有趣！

##### 财务

[Easy Bookkeeping](https://obsidian.md/plugins?id=easy-bookkeeping) By _beimohai_

> 简易记账和支出追踪工具。

[Family Bank](https://obsidian.md/plugins?id=family-bank) By _kumoonet_

> 管理孩子的月度/年度定期存款。自动利息结算、扣款和资产图表。

[Finance Tracker](https://obsidian.md/plugins?id=finance-tracker) By _arangutambo_

> 将支出作为标签记录在日记中，然后转化为有节奏感知的预算、假期和储蓄仪表板。通过 Apple 快捷指令或快速添加模态框捕获。

[Vault Finance](https://obsidian.md/plugins?id=vault-finance) By _a-k-6_

> 在本地追踪账户、信用卡、交易和多币种周/月摘要。

[Ledgr](https://obsidian.md/plugins?id=ledgr) By _jcig789_

> Obsidian 的多币种个人财务。追踪支出、预算、净资产和贷款——全部在你的库中。无账户、无订阅。

[Envelopes](https://obsidian.md/plugins?id=envelopes) By _lumargh_

> 库中的个人财务和信封预算。导入银行 CSV，按类别记录支出和账单，追踪现金、收入以及每月资金去向。

[Asset Track](https://obsidian.md/plugins?id=asset-track) By _apocly_

> 本地优先的个人财务系统，将月度账单导出转化为统一、私密且可对账的财务记录——无需每日记账。

[Investment Tracker](https://obsidian.md/plugins?id=investment-tracker) By _joelam2023_

> 私有、本地优先的投资组合追踪器，库中记录加密。追踪投资现金流、收益和标普 500 基准，无账户或遥测。

[Open Manage](https://obsidian.md/plugins?id=personal-funds) By _milin-jad_

> 本地优先的个人资金追踪器，用于收入、支出、信用卡还款、借贷、仪表板笔记和白板摘要。

[Monthly Expense Tracker](https://obsidian.md/plugins?id=monthly-expense-tracker) By _rvzenteno_

> 追踪每月经常性支出，带付款状态、提醒和报告。适合管理账单、订阅和定期付款。

[Trader Journal](https://obsidian.md/plugins?id=trader-journal) By _hailp-vn38_

> 记录回测和实盘交易，带计划、统计、图片和经济日历。

[Auto Ledger](https://obsidian.md/plugins?id=auto-ledger) By _s945134636-spec_

> 将本地 Markdown 交易日志汇总为离线财务仪表板。

[Budget Vault](https://obsidian.md/plugins?id=budget-app) By _ruan-code_

> 个人预算仪表板——读写库中预算文件夹的 Markdown 文件。仪表板、交易、预算、储蓄、账户、欠款、服务、税务和 CSV 导入。

##### 健康与健身

[Health Vitals](https://obsidian.md/plugins?id=health-vitals) By _johannes-kaindl_

> 导入 Apple Health 导出数据，并在图表和表格中探索你的健康数据。

[Withings Sync](https://obsidian.md/plugins?id=withings-sync) By _iyiguncevik_

> 将 Withings 体重秤测量数据同步到核心日记 frontmatter（仅桌面）。

[Atomic Tracker](https://obsidian.md/plugins?id=atomic-tracker) By _justinw0ng_

> 使用热力图、提示、计时器和每日仪表板追踪锻炼和爱好。

[D.O.M.S](https://obsidian.md/plugins?id=doms) By _sirhobby_

> 有主见的、移动优先的锻炼追踪器、记录器和参考。选择一个套路，一键记录一次会话，并将数据保存为纯 Markdown。

[Yoga Workout Importer](https://obsidian.md/plugins?id=yoga-workout-importer) By _sveekey_

> 从复制的文本和用户个人资料中汇编本地锻炼笔记。

[Training Volume Log](https://obsidian.md/plugins?id=workout-tracker-simple) By _tanjiahui_

> 按肌群记录锻炼，每个肌群自定义动作，并在每个锻炼笔记内提供下拉选择器。

[Workout Block](https://obsidian.md/plugins?id=workout-block) By _wanguliux_

> 灵活的锻炼追踪器：自定义锻炼类型、记录字段、派生统计、肌肉热力图和训练计划。

[Gym Tracker](https://obsidian.md/plugins?id=gym-tracker) By _real-fruit-snacks_

> 在移动端和桌面追踪健身房锻炼、训练量、连续记录和历史。

[Pix Vault Habits](https://obsidian.md/plugins?id=pix-vault-habits) By _andreygladkov_

> 带 GitHub 风格贡献可视化的 Obsidian 习惯追踪器。

[Habit Check-in](https://obsidian.md/plugins?id=habit-checkin) By _notstudytoday_

> 从右侧边栏一键签到习惯，追踪连续记录和年度热力图，并将习惯热力图嵌入笔记。

[Habit Tracker Dashboard](https://obsidian.md/plugins?id=habit-tracker-dashboard) By _fardm_

> 从笔记属性追踪习惯，带有精美仪表板、热力图、图表和连续记录。

[Square](https://obsidian.md/plugins?id=square) By _jiaoyingxing_

> Obsidian 的轻量习惯追踪器，带内置模板、项目笔记和概览图表。

[Period Calendar](https://obsidian.md/plugins?id=period-calendar) By _lordneoz_

> 用于日记、周记、月记、季记和年记的日历。每个周期可点击，正确处理 ISO 周，并读取现有的 Periodic Notes 设置。

[Clinical Workspace](https://obsidian.md/plugins?id=clinical-workspace) By _drbinsaad_

> 移动优先的本地临床工作流，用于患者、护理事件、任务和手术日志条目。

[Anatomed 3D Anatomy](https://obsidian.md/plugins?id=anatomed) By _pitfa19_

> 在笔记中嵌入交互式、区域隔离的 3D 解剖。在 anatomed 代码块中写入一个区域，即可获得可旋转、经过验证的 3D 模型和可切换的图例。

[Kcal Calc](https://obsidian.md/plugins?id=kcal-calc) By _13green13_

> 使用 USDA FoodData Central 的千卡值注释配料行。

[Weekly Meal Shopper](https://obsidian.md/plugins?id=weekly-meal-shopper) By _arangutambo_

> 标准化食谱笔记，解析配料量，并从膳食计划白板生成每周购物清单。

[Hemi-Sync Helper](https://obsidian.md/plugins?id=hemi-sync-helper) By _dyllonwright_

> 将 Hemi-Sync 和 Gateway Experience 冥想会话记录到你的日记中——波次和轨道选择器、自动填充的专注水平，以及可嵌入的一键按钮。

[Dream Analyzer](https://obsidian.md/plugins?id=dream-analyzer) By _poltavtcev_

> AI 驱动的梦境分析、实体提取、向量相似性连接和清醒梦仪表板，用于 Obsidian。

[Mood Calendar](https://obsidian.md/plugins?id=mood-calendar) By _xzhi_

> 以日历视图展示你的日记，并在下方显示心情 emoji。

![Mood Calendar](https://raw.githubusercontent.com/github-xzhi/obsidian-mood-calendar/master/assets/README/2026-07-20_23-22-33.png)

[Mood Journal](https://obsidian.md/plugins?id=mood-journal) By _nyonyataro_

> 快速记录心情、活动和笔记到日记。

[Emotional Time Capsule](https://obsidian.md/plugins?id=emotional-time-capsule) By _ibrh96-prog_

> 写下你此刻的感受。在时间改变其意义后重新审视。

##### 其他

[CubicJ Brewing](https://obsidian.md/plugins?id=cubicj-brewing) By _cubicj_

> 带 Acaia Pearl S BLE 集成的冲泡助手。

![CubicJ Brewing](https://raw.githubusercontent.com/cubicj/CubicJ-Brewing/master/assets/Brewing.gif)

[Bonsai Almanac](https://obsidian.md/plugins?id=bonsai-almanac) By _dotknewt_

> 从库中 Markdown 编写的物种笔记追踪盆景护理窗口（换盆、施肥、修剪、造型等）。

[Wine Tracker](https://obsidian.md/plugins?id=wine-tracker) By _arangutambo_

> 按笔记、年份、批次和适饮窗口追踪酒窖，带仪表板、月度和侧边栏视图。

[nanalStamp](https://obsidian.md/plugins?id=nanalstamp) By _hskwak82_

> 为每篇笔记盖上防篡改、内容私密的时间戳，锚定到比特币——存在证明、完整版本历史和研究笔记的本地 Git 备份。

[BookOrbit Sync](https://obsidian.md/plugins?id=bookorbit-sync) By _ble4k_

> 将 BookOrbit 的阅读高亮同步到 Obsidian。

[Getlava](https://obsidian.md/plugins?id=getlava) By _itipo_

> Getlava 将你已捕获的想法带入对话——使库成为更好思考的活跃素材。

[promChip](https://obsidian.md/plugins?id=promchip) By _dlsdgj_

> 浮动芯片管理 AI 提示，支持固定到桌面。

[Finkey](https://obsidian.md/plugins?id=finkey) By _mrmupfel_

> 生成交互式桑基图。

[Kings CalcLaTeX](https://obsidian.md/plugins?id=kings-calclatex) By _kingsleyfong_

> Obsidian 的浏览器原生工程数学和高保真绘图。

[kumihimo](https://obsidian.md/plugins?id=kumihimo) By _love-rox_

> 在代码块中以文本编写 AV 信号流图并查看绘制结果，旁边带有线缆、无线、设备和部件清单。

[DROS Doctrinal Copilot](https://obsidian.md/plugins?id=dros-doctrinal-copilot) By _dros_

> DROS 伴侣插件，用于双轨推理和教义卡片锚定。

[Kotonoha Console](https://obsidian.md/plugins?id=kotonoha-console) By _tomyuk_

> 用于 Obsidian 中 Kotonoha 语义谱系的提案、RDE 审计和人工批准。

[Banshan Skill Hub](https://obsidian.md/plugins?id=banshan-skillhub) By _drbanshan_

> 从 Obsidian 库导入、组织和安装 AI 代理技能。

[Ostracon OB](https://obsidian.md/plugins?id=ostracon-ob) By _temsys-shen_

> 连接 Obsidian 与 MarginNote 以导入卡片、发送笔记并导出库文档为 PDF。

[Crochet Weaver](https://obsidian.md/plugins?id=crochet-weaver) By _evanlyu_

> 从 Obsidian 代码块中的文本图案渲染钩针编织图表和进度工具。

[Fretboard Renderer](https://obsidian.md/plugins?id=fretboard-renderer) By _hiroshi-watanabe_

> 从围栏代码块中的轻量 YAML 渲染吉他指板图。

[Drum Notation Renderer](https://obsidian.md/plugins?id=drum-notation-renderer) By _ganzosupremo_

> 将现代鼓节奏编写为位置或网格，并渲染响应式 SVG 记谱。

[NetEase + Discogs Sync](https://obsidian.md/plugins?id=netease-sync) By _miaoche2-cell_

> 将网易云音乐和 Discogs 收藏同步为带元数据、歌词和曲目列表的笔记，按 ID 去重。

[Schematex](https://obsidian.md/plugins?id=schematex) By _maartenpeels_

> 在笔记中渲染 Schematex 图表，支持平移、缩放、全屏视图和图片导出。

[GATE Simulator](https://obsidian.md/plugins?id=gate-simulator) By _anandrajbaghel_

> 从 GATE 历年真题生成自定义模拟测试（核心、一般能力、分科、随机），带交互式答案输入。

[GATE Calculator](https://obsidian.md/plugins?id=gate-calculator) By _anandrajbaghel_

> 科学计算器。

[Interview Review Assistant](https://obsidian.md/plugins?id=interview-review) By _wenwenshenqihailuo_

> 录音转文字 + AI 深度分析，一键生成面试复盘报告。一个阿里云百炼 API Key 全搞定。

### PKMer 出品

> [!INFO]
> **PKMer**（[PKMer.cn](https://pkmer.cn/)、[PKMer.net](https://pkmer.net/)）旨在打造东半球强大的知识管理社区。Personal Knowledge Management (PKM) + "er"，其中 "er" 表示人，专注、喜爱个人知识管理工作、追求效率的人们，都可以划入这个行列，希望社区凝聚更多这样的人。

#### Thino 已更新至 v3.0.30

- **3.0.30** (2026-08-22)：发布页无详细变更说明（仅自动生成的版本标题）。
- **3.0.29** (2026-08-13)：发布页无详细变更说明。
- **3.0.28** (2026-08-08)：发布页无详细变更说明。
- **3.0.27** (2026-08-07)：发布页无详细变更说明。
- **3.0.26** (2026-08-07)：
    - CI：修复 attestation subjects 逐行列出（2d9bdcc）。
- **3.0.25** (2026-08-06)：
    - CI：下载 release 资源时给 `gh` 补充仓库上下文（6b870c6）。
- **3.0.24** (2026-08-06)：
    - CI：为已发布的资源添加 attestation 证明（50df6c9）。
- **3.0.23** (2026-08-06)：
    - 文档：README 新增许可证与闭源披露说明（772ad2b）；
    - 工程：添加专有许可证并修正 manifest 描述标点（e973e30）；minAppVersion 提升至 1.12.2（3b03167）。
- **3.0.22** (2026-08-06)：发布页无详细变更说明。
- **3.0.21** (2026-08-05)：
    - 重构：处理插件评审反馈——类型安全清理（显式 `any` / 非必要断言）、debug 门控的 console 日志、vault 作用域 localStorage 及旧 key 迁移、移动端安全的 Node.js 导入、符合 Obsidian API 规范（`createEl`、`setCssStyles`、`instanceof TFile` 检查、无默认快捷键、onunload 中不 detach leaf）。
- **3.0.20** (2026-08-05)：
    - 变更：生产构建产物改为输出到仓库根目录 `dist/`，便于 Obsidian 自动构建验证定位 `main.js`；对用户无功能性变更。
- **3.0.19** (2026-08-05)：
    - 变更：提供可复现发布构建（Node 22 + pnpm 10 冻结 lockfile），每次发布在源码仓库打同名 tag，`main.js` / `styles.css` 可逐字节复现；无功能性变更。
- **3.0.18** (2026-08-05)：
    - 修复：解决插件审核扫描标记的全部错误——移除动态 `<style>` 元素注入（分享图片导出改为序列化阶段内联 CSS，Shadow DOM 样式改用 constructable stylesheet）、移除 `document.write` 沙箱、清理未限定规则的 `eslint-disable`；修复数百条审核警告（计时器统一用 `window.setTimeout` / `setInterval` 兼容弹窗、未处理 Promise 显式 void、删除文件遵循 " 已删除文件 " 偏好 `FileManager.trashFile`、命令名不再重复插件名）；
    - 变更：暂时移除本地（Transformers.js）向量嵌入引擎（依赖运行时下载执行脚本，不符合审核要求），语义检索改为经 API 嵌入服务商提供，原设置自动迁移。
- **3.0.17** (2026-08-05)：
    - 工程：minAppVersion 提升至 1.11.4。
- **3.0.16** (2026-07-10)：
    - 修复：兼容新版 PKMer OAuth 的 Thino 设备注册流程；OAuth 登录后向 PKMer 上报当前设备，并在启用 Pro 功能前确认设备可用；优化设备数量超限、未购买产品、scope 不足等 OAuth 错误提示。

#### Simple mind map 已更新至 v0.2.7

- **0.2.7** (2026-08-26)：
    - 修复：节点链接的文件名修改后节点显示未同步更新的问题；
    - 新增：
        - 移动端顶部工具栏增加进入节点文本编辑的按钮；
        - 节点富文本悬浮工具栏根据窗口大小动态适配，优化小屏显示不全问题；
        - 点击专业版功能时的未激活提醒支持跳转到相关链接；
    - 专业版：节点支持插入 " 标注 "。
- **0.2.6** (2026-08-16)：
    - 修复：
        - 移动端 iOS 点击登录无反应（iOS 增加二次跳转确认）；
        - 移动端 iOS 右键菜单进入的填空模式显示异常（去除下划线显示）；
        - 安装 Excalidraw 插件后 Ctrl+S 快捷键不生效、不显示【进入演示模式】和【保存并更新图像】命令；
    - 新增：
        - 设置 - 顶部快捷跳转根据设置窗口宽度动态适配；
        - 【保存并更新预览图像】命令默认快捷键调整为 Ctrl+Shift+M；
    - 专业版：节点右键菜单新增【编号节点文本】。
- **0.2.5** (2026-08-10)：
    - 修复：
        - 尝试修复 iOS 点击登录无反应；
        - 尝试修复 iOS 右键菜单填空模式显示异常；
        - 进入指定节点编辑后未触发保存即退出导致编辑内容丢失；
        - 移动端进入禅模式后无法退出；
        - 移动端节点富文本悬浮工具栏显示不完全；
        - 预览 Markdown 为思维导图时仓库图片加载失败；
        - 侧边栏基础样式配置导入导出部分属性不生效；
        - 从文件列表拖拽图片到节点图片弹窗点击确定无反应；可拖拽非图片文件到弹窗的问题；
    - 新增：
        - 将 Markdown 预览/转换为思维导图支持解析 `![[]]` 格式图片；
        - 支持从指定模板创建（单个模板文件或模板文件夹）；
        - 侧边栏基础样式支持一键恢复默认配置；设置支持一键恢复默认；
        - 禅模式、填空模式左上角新增退出按钮；
    - 专业版：支持导入导出 OPML 格式。
- **0.2.4** (2026-08-01)：
    - 修复：
        - 解析带转义 `%` 的数学公式 markdown 丢失转义导致渲染失败；
        - 导入 md 未勾选转换数学公式时 ob 内链不被转换；
        - 尝试修复 iOS 点击登录无反应；
        - Obsidian 1.13 更新后设置顶部快速跳转失效；
    - 新增：
        - 转换 md 为思维导图、导入 md 时识别并保留文本换行；
        - AI 生成支持解析保留换行、支持渲染数学公式；
        - 登录端口被占用时自动尝试下一个端口；
        - 思维导图搜索支持区分大小写、全字匹配、正则表达式选项；
        - 大纲编辑模式支持搜索；插入新节点时自动滚动到新节点；
        - 大纲编辑 Ctrl+v、Ctrl+enter、Ctrl+f 等快捷键支持 mac 的 command 键；
    - 专业版：支持进入指定节点。
- **0.2.3** (2026-07-18)：
    - 修复：
        - 尝试修复 iOS 点击登录无反应；
        - 一个标签页开启填空模式影响其他标签页；
        - 节点图片保存到源文件 `#linkdata` 区块时不是 `![[]]` 格式；
        - 新标签页预览 md 为思维导图时搜索显示替换按钮；
        - 激活根节点未禁用顶部工具栏外框按钮；
        - AI 返回 thinking 思考内容导致解析失败；
        - AI 流式生成偶现非合法 json 导致生成失败；
        - 节点文本插入 `[[xxx|xxx]]` 内链点击报错；
    - 新增：
        - 预览 md 为思维导图解析出多个根节点时，额外添加以当前文件名为文本的根节点；
        - 节点右键菜单新增【在该节点下搜索】；
        - 修改语言选项后重载设置页；目录相关设置增加 " 仅对后续新文件生效 " 提示；
        - AI 填写 api 和 key 后自动获取可用模型列表；不支持跨域请求的 AI 接口自动转为非流式；
        - md 转换、导入时自动转换 `[[]]` 链接；从文件列表/本地拖拽文件到节点以 `[[]]` 链接格式添加；
        - 顶部工具栏【超链接】弹窗仅支持添加超链接；思维导图中图片/文件改名或移动后同步更新引用；
        - 【预览为思维导图】命令有预览时关闭、无预览时显示；
    - （发布页另附英文 Fixes 列表，内容与上述一致）。
- **0.2.2** (2026-07-05)：
    - 修复：
        - 未激活节点时选择导入为当前激活节点下级，loading 不关闭；
        - 演示模式填空模式不实时生效（需重开窗口）；
        - 节点普通超链接回显时协议显示不正确；
        - Modal Opener 插件模态框中快捷键不响应；
        - 部分用户打开为 Markdown 文档操作失败；
        - AI 配置完成后点击【测试】提示配置未完成；
        - 自由节点树节点文本中链接未保存到源文件 `#linkdata` / `#textdata` 区块；
    - 新增：
        - 顶部文件名输入框点击默认选中 `.smm` 之前部分；未激活节点时 F2 重命名当前导图；
        - 节点普通超链接适配非 http/https 自定义协议；节点文本输入 `[[` 支持按 `[[` 后文字过滤文件列表；
        - 增加【预览为思维导图】命令；思维导图/Markdown 互转支持新建文件方式；
        - 设置中增加切换数学公式渲染模式；适配 `[[]]` 插入 `xxx://` 自定义协议链接；
    - （发布页另附英文 Fixes 列表，内容与上述一致）。

#### Editing Toolbar 已更新至 v4.1.1

- **4.1.1** (2026-08-13)：
    - 修复：拖动命令出现重复的问题。
- **4.1.0** (2026-08-13)：
    - 适配最新 Obsidian 1.13.4 及以上版本；
    - 新增：增加 DeepSeek 示例、支持 Gemini、支持单独关闭 AI 右键菜单（ #347 #345 ）；
    - 修复：Obsidian 1.13 设置页兼容性，支持官方设置搜索和拖动排序（ #350 #352 ）。
- **4.0.11** (2026-07-14)：
    - 修复： #330 ；
    - 新增：AI 自定义模型提示和日文翻译；
    - 新增：AI 自定义模型检测与 URL 校验——从 OpenAI 兼容自定义接口探测并列出可用模型（`listCustomOpenAIModels()`、AIUrlHelper 校验与警告、设置面板下拉选择）、API key 在全部自定义模型格式中改为可选、模型列表缓存以优化体验。
- **4.0.10** (2026-07-09)：
    - 修复：生成内容包含标签的问题（ #333 ）；
    - 修复：workspace window-open 事件清理。
- **4.0.9** (2026-07-05)：
    - 修复：背景色不生效（ #329 ）；
    - 新增：支持自定义 frontmatter 提示词（ #333 ）。

#### ZotLit 已更新至 v2.1.1

- **2.1.1** (2026-08-26)：
    - 修复：Live Updates 运行一次后 Pandoc 渲染失效的问题（此前只能关闭 Live Updates 并重启 Obsidian 恢复），现在无需重启即可保持正常。
- **2.1.0** (2026-08-24)：
    - v2.1 引文工作流的首个稳定版：References Sidebar、文内引文渲染、Citation Popover、Cited By Sidebar、Zotero 10 支持、多库 scope（自 beta.3 以来的变更，完整介绍见发布帖）；
    - 新增：Pandoc 引擎加载提速约 3 倍（中位数 291ms→97ms），并清除每次加载的 JS 内存峰值；损坏的引擎二进制可自动检测、清除并重新提示安装；彩色高亮语法（Settings›Note import 可选设置，支持六种高亮色，不支持的保持 HTML，注解回链均保留）；
    - 修复：数据库只读回退的重复提醒；多 Zotero 实例运行时 Pandoc 导出连错 HTTP 端口。
- **2.1.0-beta.3** (2026-08-20)：
    - 新增：Zotero 10 支持（Companion 自动保持数据库最新，Zotero 侧栏新增 Database Status 面板）；库范围 Library scope（All libraries / Selected libraries 两种模式，替代原 Default library 设置）；歧义引用键处理（同一键匹配多个条目时询问选择，不再自作主张）；
    - 新增：每条笔记独立引文样式与语言（`zotlit-csl` / Pandoc `lang` 属性）；引文 locale 设置（Settings›ZotLit›Citations，如 `en-US` / `zh-CN`）；
    - 修复：Zotero 数据目录与系统临时目录在不同磁盘时数据库刷新慢/失败；注解视图拖拽插入原始高亮文本而非渲染模板的问题。
- **2.1.0-beta.2** (2026-08-16)：
    - 新增：Citation Popover（悬停引文弹出完整参考文献条目及打开文献笔记/Zotero/附件按钮；Hover action 三种模式：Citation Popover / Page preview / Off，各编辑模式可配 Require modifier key）；复制参考文献（References Sidebar 一键复制富文本 + 纯文本，兼容 Word/Google Docs）；note-class 引文样式编号 Entry Serials（如 Chicago full-note）；Open citations as links 设置扩展至 wikilink 引文（默认关闭）；
    - 新增：面向 AI agent 的 CLI 命令 `zotlit:cited-by` / `zotlit:references` / `zotlit:citations-guide`（配套 `zotlit-citations` skill）；
    - 修复：Zotero 数据库几秒一刷的自循环（APFS 文件系统回显）、Mod+Enter 快速切换器未开新窗格、Shift+Enter 未插入次引文、行内脚注 `^[...]` 渲染与解析、References Sidebar 引擎横幅遮挡、同名文件引文冲突等。
- **2.1.0-beta.1** (2026-08-13)：
    - 新增：Cited By Sidebar——显示哪些笔记引用了当前文献笔记，按源文件分组、显示摘录卡片，支持搜索过滤/更多上下文/六种排序/折叠（与 Backlinks 面板一致）；
    - 新增：文件名模板支持 `authors` 与 `authorsShort` 变量。
- **2.1.0-beta.0** (2026-08-10)：
    - 新增：References Sidebar（参考文献侧栏，列出当前笔记引文并支持打开笔记/Zotero/PDF）；文内引文渲染（Live Preview 与 Reading view，wikilink 引文可选，默认关闭）；ZotLit: Export note with citations（将笔记导出为带参考文献的 DOCX/HTML，无需外部 Pandoc）；
    - 新增：引文键导航与样式（未解析键视觉区分）、引文键改为从 Zotero 原生键解析（原 frontmatter 属性设置退休并自动迁移）、CSL 样式选择（从 Zotero 已装样式中选取）、原生 Pandoc CLI 工作流（`zotlit-cite.lua` + `zotlit.yaml` + `zotlit:resolve` 命令）、主题 hooks（CSS 类）。
- **2.0.1** (2026-08-05)：
    - 维护版：代码对齐 Obsidian 官方开发者指南，无行为、设置或命令变更。
- **2.0.0** (2026-08-05)：
    - v2 首个公开稳定版（Companion 2.0.0 同步发布）；
    - 前置要求：需要 Obsidian 1.13.4+（含安装器版本）；许可证改为 AGPL-3.0-or-later（原 MIT）；
    - Breaking：Citation Key Links 改为可选、默认关闭（beta/迁移用户保持启用）；
    - 新增：库/合集批量操作——右键 Zotero 库或合集可批量创建/更新文献笔记、导入笔记（对应 `update-all`、`import-all-notes` 命令与协议链接）；设置操作直达相关子页；" 接收 Zotero 更新 " 开关在未装 Companion 时显示引导链接。
- **2.0.0-beta.4** (2026-08-01)：
    - Breaking：需 Obsidian 1.13.4+ 与新版 Electron 安装器；引文模板 `item.extra` 改用与笔记模板一致的 ItemExtra 结构（原始文本请用 `item.extra.raw`）；
    - 新增：Template Workbench（面向 agent 的 CLI，可检查模板状态、不落盘渲染、管理 frontmatter 字段）；托管 frontmatter 支持拖拽排序；新模板过滤器 `arr_prefix` / `arr_suffix` / `arr_replace` / `obsidian_tag`；复制 Zotero keys（上下文菜单与文献笔记命令）；附件仅从受批准文件夹复制（Settings›ZotLit›Attachments›Approved folders）；
    - 修复：Annotation View / Template Data Explorer / Citation Suggester 条目摘要不一致；语言包与已装 ZotLit 版本匹配。
- **2.0.0-beta.3** (2026-07-28)：
    - 新增：简体中文语言包（可在设置中安装）；附件新增 `backlink` 字段（`zotero://open/...` 深链，配合已有主条目回链）；
    - 修复：Obsidian <1.13.0 无内置确认 API 时确认对话框显示异常。
- **2.0.0-beta.2** (2026-07-25)：
    - Breaking：引文输出归一化——插入的渲染引文折叠为单行并在尾部加空格；Shift+Enter 在行内 Citation Suggester 选择次引文格式；
    - 新增：`@` 触发引文（opt-in 设置，代替默认 `[@`）；富注解卡片（渲染内联格式与 Markdown 评论，与笔记模板一致）；Zotero 上下文菜单文案改为 "Literature Note" 及 Title Case；
    - 修复：`zt.parentItem.authorsShort` / `authors` / `backlink` / `weblink` 模板字段为空；仅元数据更新时错误创建完整笔记。
- **2.0.0-beta.1** (2026-07-24)：
    - Breaking：Zotero profile/数据目录路径改为每设备独立（多设备同步不再互相覆盖；旧自定义路径需每台设备重设一次，不自动迁移）；
    - 新增：`zt.weblink` 模板字段（Zotero 网页库 URL）；
    - 修复：独立窗口（非标签页）Zotero reader 不被跟踪；后台/遮挡窗口时批量导入与索引变慢。
- **2.0.0-beta.0** (2026-07-22)：
    - 新增：Welcome view（首次安装/升级引导，含 Zotero 连接状态时间线、笔记文件夹选择、首次搜索）；注解视图搜索与筛选（按文本/评论/标签/页码、颜色与标签过滤，卡片默认折叠）；Zotero 内笔记状态列（Companion 显示哪些条目已有文献笔记）；v2 文档站上线；
    - 修复：Obsidian 1.13.3 安装器启动崩溃。
- **2.0.0-alpha.6** (2026-07-13)：发布页与官方 changelog 均无详细更新说明。
- **2.0.0-alpha.5** (2026-07-09)：发布页与官方 changelog 均无详细更新说明。
- **2.0.0-alpha.4** (2026-07-07)：发布页与官方 changelog 均无详细更新说明。
- **2.0.0-alpha.3** (2026-07-06)：
    - 新增：Zotero 笔记可导入为 Obsidian 独立 Markdown 文件；文献笔记支持仅元数据更新模式。

> [!Warning] 声明
> 本栏目致力于为广大 Obsidian 中文用户汇总全面的官方资讯与插件、外观动态。为了保持信息的全面性，我们的**收录并不等同于推荐**，还请各位用户知悉并理解，根据自身需求进行判断和选择。