---
uid: 20260204211027
title: Obsidian Weekly 2026-02-01：天气和时钟集成
tags: [Weekly, Obsidian]
description: Obsidian Weekly 2026-02-01：天气和时钟集成
author: 淡水鱼,PKMer
type: other
draft: false
editable: false
modified: 20260204211100
---

# Obsidian Weekly 2026-02-01：天气和时钟集成

> [!Abstract]
> **统计时间**：2026-01-25 21:00 ~ 2026-02-01 21:00
> **声明**：本栏目灵感来源于 _Eleanor Konik_ 女士于 2021 年 4 月至 2023 年 6 月期间写作发表的一系列 [Obsidian Roundup](https://www.eleanorkonik.com/tag/roundup/) 文章，如有兴趣可关注原作者的个人网站 [Obsidian Iceberg](https://www.eleanorkonik.com/)；内容来源于 Obsidian 官方 Discord 频道和相应项目在 Github 或其独立网站上的信息。描述中可能存在基于个人理解进行的修改，如有错谬欢迎指正。感谢 Obsidian 团队为我们带来如此优秀的软件。

## 插件新闻

### 社区插件



#### 新增

[Simple Steam Auth](https://obsidian.md/plugins?id=simple-steam-auth) By _dreamscached_

> 直接在您的库中生成 Steam Guard 验证码。

![Weekly-2026-02-01-demo2|650](https://cdn.pkmer.cn/images/Weekly-2026-02-01-demo2.gif!pkmer)

[Status Bar Clock](https://obsidian.md/plugins?id=status-bar-clock) By _Marty Ballard_

> 状态栏时钟，非常适用于全屏模式。

![Weekly-2026-02-01-Pasted image 20260203220534|650](https://cdn.pkmer.cn/images/Weekly-2026-02-01-Pasted%20image%2020260203220534.png!pkmer)

[Weather Widget](https://obsidian.md/plugins?id=weather-widget) By _mr-asa_

> 天气小部件 ，可在笔记、白板和单独的标签页中显示。

![Weekly-2026-02-01-Pasted image 20260203220055|650](https://cdn.pkmer.cn/images/Weekly-2026-02-01-Pasted%20image%2020260203220055.png!pkmer)

#### 更新

[QuickAdd v2.10.0](https://github.com/chhoumann/quickadd/releases/tag/2.10.0) By _Christian B.B.Houmann_

> - ✨ 新功能
>     - AI 与安全
>         - **用于存储 API 密钥的钥匙串存储** — AI 服务商密钥现在安全地存储在 Obsidian 的钥匙串存储中，而非明文设置。现有密钥将自动迁移。需要 Obsidian 1.11.4+。
>     - 捕捉改进
>         - **行内插入后模式** — 新的捕捉模式，支持将内容插入到行内，并可选替换至行末。
>         - **按标记的多行 VALUE 输入** — 使用 `{{VALUE:name|type:multiline}}` 为特定标记获取多行输入提示。
>         - **选区作为值的控制** — 新增选项用于控制如何处理捕捉的选区。
>         - **插入后的空行模式** — 在标题后插入内容时，能更好地控制空白行。
>     - 提示词与输入
>         - **原生日期选择器** — 新的日期选择器 UI，提供时区稳定的选择，与 `{{VDATE:…}}` 语法一同使用。
>         - **短日期别名** — 可配置别名，例如 `tm` → `tomorrow`，用于自然语言日期。
>         - **取消时保留草稿** — 输入提示框现在会在你按 ESC/取消时记住你的草稿内容。
>         - **改进的提示词标签** — 通过新的 `|label:` 选项语法，为 VALUE/MACRO 提示词提供更好的标签。
>     - 宏与模板
>         - **宏选区助手** — 新增 `quickAddApi.getSelection()` 以在宏中访问编辑器选区。
>         - **增强的文件夹选择器** — 可直接从模板文件夹选择器中创建新文件夹，并添加了当前文件夹快捷方式。
>     - 文档
>         - **版本化文档** — 文档现在通过 Docusaurus 支持版本化，提供了稳定的 v2.9.4 版本快照。
> - 🐛 错误修复
>     - **Templater 2.18.0 兼容性** — 修复了与 Templater 的 `parse_template` API 变更的兼容性问题。
>     - **Android 建议器筛选** — 加强了查询规范化处理，防止应用崩溃。
>     - **旧版本选择项迁移** — 补充了缺失的默认文件打开设置，防止运行时错误。
>     - **包体积** — 通过使用 js-tiktoken/lite，将包体积减小到低于 Obsidian 同步限制。
>     - **Unicode 文件建议** — 对非 ASCII 文件名进行了正确的 NFC 规范化处理。
>     - **不区分大小写的路径** — 修复了因大小写不匹配导致的模板覆盖问题。
>     - **前导斜杠规范化** — 修复了在捕捉/模板设置中路径以 `/` 开头的问题。
>     - **建议器显示稳定性** — 防止因显示项非字符串导致的崩溃。
>     - **宏重命名预填充** — 输入框现在会预填充当前名称。
>     - **更新公告** — 默认仅显示主要版本更新。
> - ⚠️ 重大变更
>     - **最低 Obsidian 版本要求提升至 1.11.4** — 此为使用钥匙串存储 API 所必需。

[Excalidraw v2.20.2](https://github.com/zsviczian/obsidian-excalidraw-plugin/releases/tag/2.20.2) By _Zsolt Viczian_

> - **v2.20.0**
> 	- **脚本**
> 		- 已将 Shade Master 脚本迁移至使用新的 Excalidraw 侧边栏面板 API（与 MindMap Builder 相同）。
> 	- **新功能**
> 		- 来自 Excalidraw.com 的深色主题（包括在深色模式下正确渲染表情符号 😍）。
> 		- 新增图像右键菜单选项（右键单击图像）以控制该图像在深色模式下是否反色。
> 			- 默认行为：基于 SVG 的图像（包括 LaTeX、Mermaid 和嵌套的 Excalidraw 图像）在深色模式下反色；位图图像（PNG/JPG）则不会。
> 		- 来自 Excalidraw.com 的新功能：用于 Mermaid 文本转图表的聊天式界面（需要在 Excalidraw 插件设置中配置 OpenAI API 密钥）。
> 			- **重大变更**：不再支持 Mermaid 图表的旧版“强制 SVG”选项。如果图表可以渲染为 Excalidraw 元素，则优先渲染；否则将使用 SVG。
> 		- 已将 Shade Master 脚本迁移至使用新的侧边栏面板（与 MindMap Builder 相同）。
> 	- **问题修复**
> 		- 修复了在手机全屏模式下，屏幕顶部有大片区域未被利用的问题。同时修复了 Obsidian 移动端导航栏可能覆盖 Excalidraw 工具栏的问题。
> 		- 修复了即使元素被设置为透明，右上角的链接指示器仍然可见的问题。
> 		- 修复了导入具有混合页面尺寸的 PDF 时可能产生页面扭曲的问题。
> 		- 修复了将 PDF 作为图像导入时，某些 PDF 无法加载的问题（特别是使用 JPEG2000 压缩图像的文档）。同时改进了对某些颜色配置文件的处理，以及文本渲染时字形缺失/不正确的情况。
> 		- 修复了一个长期存在的导出问题：当使用与当前视图不同的主题导出时（例如，在深色模式下查看但在浅色模式下导出），包含位图图像的嵌套 Excalidraw 图像可能会导出反色的图像。
> - **v2.20.1**
> 	- **问题修复**
> 		- 修复了“实验性文件类型显示”功能，该功能可在杂项设置中找到。（根据 Discord 报告修复）
> 		- 修复了 iOS 设备上深色模式的图像反色问题。
> 		- 修复了平板设备上 UI 模式切换不可靠的问题。
> 	- **MindMap Builder 的新功能/修复**
> 		- **连接器本体**：新增支持为连接线添加标签。现在在停靠和浮动模式下均可使用辅助输入字段（可通过 Shift+Tab 访问）。标签在使用行内 Dataview 语法（例如，`link ontology:: node content`）进行复制/粘贴操作时会保留。
> 		- **连接器样式**：引入了分支粗细和缩放策略的配置设置，允许在**分层**（宽度随深度递减）或**均匀**连接器宽度之间进行选择。
> 		- **智能恢复**：如果当前未选择任何节点，聚焦和缩放操作现在会以最近活动的节点为目标。这将自动聚焦到输入字段，使你可以快速从上次中断的地方继续构建导图。
> 		- **径向填充扫描**：为径向布局新增了“填充扫描角度”选项。启用后，即使节点数量很少，节点也会在配置的整个弧线范围内均匀分布。（仅在增长策略设置为“径向”时可见）。
> 		- **径向导航**：更新了径向导图中一级节点的导航逻辑，使其遵循视觉上的垂直对齐而非旋转顺序。上/下方向键现在在圆形的两侧都能一致地按视觉上的上/下方向移动选择，与左右布局的行为保持一致。
> 		- **修复内容**：
> 		    - 即使在浮动模式下，激活 MindMap Builder 时侧边栏面板也会打开。需要同时更新 Excalidraw 插件和 MindMap Builder 脚本。
> 		    - **节点重新排序**：彻底改进了通过 CMD/CTRL+ 方向键移动节点的逻辑，解决了移动位置不可预测的问题；节点现在能一致地移动到预期位置。
> 		    - **iOS 导航**：解决了在 iOS 上使用 Tab 键在浮动输入窗口的组件之间循环切换焦点不可靠的问题。
> 		    - **边界图层**：修复了在粘贴导图时，子分支边界被置于文本元素之上的问题；现在它们能正确地渲染在文本图层下方。
> 		    - **布局稳定性**：修复了在大型场景中将多个元素粘贴到现有节点上时，视图端口会意外偏移的问题。
> - **v2.20.2**
> 	- **来自 Excalidraw.com 的新功能**
> 		- 箭头焦点指示器。
> 	- **问题修复**
> 		- “实验性文件类型显示”功能现在在 Obsidian 移动端也可工作。（根据 Discord 报告修复）
> 		- 文本转 Mermaid 功能现在在本地存储聊天历史（即不同设备间不同步）。
> 		- 裁剪编辑器中的图像定位。
> 	- **MindMap Builder**
> 		- 实现了更好的撤销支持（仅对最后一次 MindMap Builder 操作有效）。此外，当 MindMap 输入窗口获得焦点时，CMD/CTRL+Z 和 CTRL+Y、CMD+SHIFT+Z 现在可以正常工作。
> 		- **修复**：创建节点时的双字符输入问题（IME 组合错误）。
> 		- **修复**：当思维导图损坏或无效时，采用更稳健的错误处理机制。
> 		- 更新了 Excalidraw Writing Machine 脚本以支持从 MindMap 生成文档。Writing Machine 将遵循分支顺序。需要更新 Writing Machine 脚本。
> 	- **ExcalidrawAutomate 中的新功能**
> 		- `addElementsToView()` 函数扩展了 `captureUpdate` 参数（默认值："IMMEDIATELY"）。当设置为 false 时，元素的添加将不会被记录在视图的历史记录中。

[CSV Lite v1.6.1](https://github.com/LIUBINfighter/csv-lite/releases/tag/1.6.1) By _Jay Bridge_

> - 移动端支持与样式调整。
> - 部分错误修复。
> - 功能/URL：在单元格中添加可点击的 URL 链接。

## PKM 相关知识推荐

> [!INFO]
> 欢迎收藏 [PKMer 导航页](https://pkmer.cn/link/)，一键直通 PKMer 各社交平台账号，与热爱分享与知识管理的同好们交流，第一时间获取行业新鲜资讯！

### [Obsidian+QwenCode：打造你的本地 AI 知识库+NotebookLM]( https://pkmer.cn/show/8086 )

利用插件「Agent Client」，在 Obsidian 中接入 Claude Code、Codex、Qwen Code 等 AI Agent 代理，直接在侧边栏进行对话，把本地 Obsidian 知识库与 AI 无缝结合在一起，无需另开窗口，直接在应用内即可用 AI 辅助梳理笔记，查漏补缺，规划未来。

![](https://img.joeytoday.com/2026/exp05-reference-books.gif)

> [!Warning] 声明
> 本栏目致力于为广大 Obsidian 中文用户汇总全面的官方资讯与插件、外观动态。为了保持信息的全面性，我们的**收录并不等同于推荐**，还请各位用户知悉并理解，根据自身需求进行判断和选择。
