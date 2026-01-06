---
uid: 20260107002205
title: Obsidian Weekly 2026-01-04：Obsidian v1.11.3 内测版前瞻&自动添加模板和时间戳
tags: [Weekly, Obsidian]
description: Obsidian Weekly 2026-01-04：Obsidian v1.11.3 内测版前瞻&自动添加模板和时间戳
author: 淡水鱼,PKMer
type: other
draft: false
editable: false
modified: 20260107002252
---

# Obsidian Weekly 2026-01-04：Obsidian v1.11.3 内测版前瞻&自动添加模板和时间戳

> [!Abstract]
> **统计时间**：2025-12-28 21:00 ~ 2026-01-04 21:00
> **声明**：本栏目灵感来源于 _Eleanor Konik_ 女士于 2021 年 4 月至 2023 年 6 月期间写作发表的一系列 [Obsidian Roundup](https://www.eleanorkonik.com/tag/roundup/) 文章，如有兴趣可关注原作者的个人网站 [Obsidian Iceberg](https://www.eleanorkonik.com/)；内容来源于 Obsidian 官方 Discord 频道和相应项目在 Github 或其独立网站上的信息。描述中可能存在基于个人理解进行的修改，如有错谬欢迎指正。感谢 Obsidian 团队为我们带来如此优秀的软件。

## 官方资讯

### Obsidian v1.11.3 内测版已发布

#### 桌面端

##### 改进

- 新增“从系统根目录复制当前文件路径”命令。

##### 已修复的问题

- 使用“导出为 PDF”功能时，基础样式现在可以被完整导出。
- 修复了当文件名包含空格时，属性中的内部 Markdown 链接无法正确工作的问题。

#### 移动端

##### 已修复的问题

- 修复了侧边栏选项卡切换器的布局问题，并提升了与自定义主题的兼容性。
- 修复了右侧边栏中活动文件名被截断显示的问题。
- 当导航栏隐藏时，下拉操作现在更容易被触发。
- **Android**：修复了双击切换至编辑模式的功能。

## 插件新闻

### 社区插件



#### 新增

[Default Template](https://obsidian.md/plugins?id=default-template) By _raeperd_

> 通过用户可配置的模板选项，自动将模板应用于新笔记。

[Open in Terminal](https://obsidian.md/plugins?id=open-in-terminal) By _ChenFeng_

> 在新的终端窗口中打开您的库，或直接从终端启动 Claude Code、Codex CLI 或 Gemini CLI。

[Asciinema Player](https://obsidian.md/plugins?id=asciinema-player) By _Dinu Gherman_

> 将本地和远程的 Asciinema asciicast 文件嵌入 Markdown 笔记中。

![Weekly-2026-01-04-matrix|650](https://cdn.pkmer.cn/images/Weekly-2026-01-04-matrix.gif!pkmer)

[Remember Scrollposition](https://obsidian.md/plugins?id=remember-scrollposition) By _s-blu_

> 记住你在笔记中的滚动位置，并在打开笔记时将你返回到上次的位置。

[Timelog](https://obsidian.md/plugins?id=time-log) By _Eddie Blundell_

> 专为实验室式笔记设计，在有日期的标题下自动添加当前时间戳。

#### 更新

[Chronos Timeline v3.1.0](https://github.com/clairefro/obsidian-plugin-chronos/releases/tag/3.1.0) By _Claire Froelich_

> - **新功能**
> 	- **这些“新功能”公告** - 可在设置中更新你的偏好
> 	- **从文件夹生成组合时间线** (`Cmd/Ctrl` + `P` > `Generate timeline from folder`)
> 	- **行内 Chronos 项** 使用轻量级行内标签收集事件：`chronos [日期] 事件名称`。 [查看文档](https://github.com/clairefro/obsidian-plugin-chronos?tab=readme-ov-file#generate-timeline-from-folder)

![Weekly-2026-01-04-b4d76285-322c-4b31-9a3c-79f98336238b|650](https://cdn.pkmer.cn/images/Weekly-2026-01-04-b4d76285-322c-4b31-9a3c-79f98336238b.gif!pkmer)

[OCR Extractor v1.1.0](https://github.com/jritzi/ocr-extractor/releases/tag/1.1.0) By _Johnathan Ritzi_

> - 新增移动端支持
> - 移除提取文本中的尾部空格
> - 对插入标注前后空白行的处理更加稳健
> - 单一笔记提取改用模态框，而非状态栏
> - 跨平台使用一致的换行符
> - 提取取消时显示通知
> - 细微错误修复与依赖项升级

[Excalidraw v2.19.0](https://github.com/zsviczian/obsidian-excalidraw-plugin/releases/tag/2.19.0) By _Zsolt Viczian_

> - **新增功能**
>     - 🚀🎉🍾 在文本元素编辑和元素链接编辑中新增了 **行内链接自动补全** 功能。像在普通 Markdown 文档中一样，直接输入 "[[“即可触发。
>         - ‼️ 移除了桌面版元素链接编辑器中的“添加链接”按钮。
>         - ‼️ 移除了桌面版上下文菜单中的“添加链接”选项。
>         - ‼️ 在“链接、嵌入与待办事项”设置项下新增 **同步文本元素链接与文本内容** 设置。
>             - 默认行为为 **关闭**，因为单独管理元素链接感觉更自然。
>             - 当启用（**开启**）时，Excalidraw 将匹配 2.19.0 版本之前的行为：文本内容中的第一个链接总是会被复制到元素链接字段。SVG/PNG 导出仅在元素链接字段包含单个链接时保留链接（不保留文本内容内部的链接）。如果你依赖文本体内的链接，并希望元素链接始终与第一个链接同步，请开启此选项。如果你单独管理元素链接（例如用于标签、行内链接本体或包含多个链接的元数据，如类似数据视图风格笔记“（提醒我:: [[链接]]) #noteToSelf ”的情形），请关闭此选项。
>     - LaTeX 公式现保存至 `element.customData.latex` 中。这对于各种自动化使用场景很有帮助。
>     - 在自定义笔刷设置中实现了颜色选择器，可从当前视图的调色板中取色。
>     - 更新了 **涂鸦助手** 脚本，使用新的颜色选择器来选择文本颜色。
>     - 更新了 **遮罩大师** 脚本，使用新的颜色选择器来选择阴影颜色。
>     - **思维导图构建器**
>         - 使用新的侧边栏面板，在不同绘图间保持持久性，并随 Obsidian 自动启动。
>         - 现在可配置热键。
>         - 支持就地编辑节点文本。
>         - 可自定义分支的调色板。
>         - 改进了自动布局算法，能更好地处理较大的子树。
>         - 包含行内链接建议器。
>         - 支持图像与可嵌入节点。
> - **问题修复**
>     - Excalidraw 脚本使用的浮动模态框在 Obsidian 弹出窗口中无法正常工作的问题已修复。
>     - 在粘贴事件处理中，如果 `imageElement.customData.latex` 存在，即使图片是从 Excalidraw. Com 或另一个 Obsidian 仓库复制的，也会将粘贴的图片视为 LaTeX 公式进行处理。
> - **ExcalidrawAutomate 中的新增功能与修复**
>     - `ea.toClipboard()` 现在将包含来自 `ea.imagesDict` 的图片的 DataURL。
>     - 为 ExcalidrawAutomate 实现了 Excalidraw 侧边栏面板 API。脚本现在可以在 Excalidraw 侧边栏中创建自定义的 Obsidian 标签页。
>         - 新的命令面板操作：" 打开 Excalidraw 侧边栏 " 将切换侧边栏的可见性。
>         - 充分利用新侧边栏 API 的演示脚本是 [思维导图构建器](https://github.com/zsviczian/obsidian-excalidraw-plugin/blob/master/ea-scripts/Mindmap%20Builder.md)。
>         - [用于LLM训练的ExcalidrawAutomate完整库文档](https://raw.githubusercontent.com/zsviczian/obsidian-excalidraw-plugin/refs/heads/master/docs/AITrainingData/ExcalidrawAutomate%20full%20library%20for%20LLM%20training.md) 包含了使用侧边栏所需的所有训练信息。
>     - 新增了调色板弹出助手 `showColorPicker()`（也用于笔刷设置和思维导图构建器），可从当前视图的画布/元素调色板中取色。
>     - 新增了行内链接建议器助手 `attachInlineLinkSuggester()`，它返回一个 KeyBlocker 接口，以便宿主脚本在建议器激活时可以抑制其自身的按键处理程序。
>
> ExcalidrawAutomate 中的新函数。另请参阅 [SidepanelTab](https://github.com/zsviczian/obsidian-excalidraw-plugin/blob/master/src/types/sidepanelTabTypes.ts) 类型定义。

[Cards view v1.10.0](https://github.com/jillro/obsidian-cards-view-plugin/releases/tag/1.10.0) By _Maud Royer_

> **新功能**：
> - 新增显示/隐藏删除按钮的设置
> 修复了搜索性能问题（部分问题仍需在后续版本中解决）。

### PKMer 出品

> [!INFO]
> **PKMer**（[PKMer.cn](https://pkmer.cn/)、[PKMer.net](https://pkmer.net/)）旨在打造东半球强大的知识管理社区。Personal Knowledge Management (PKM) + "er"，其中 "er" 表示人，专注、喜爱个人知识管理工作、追求效率的人们，都可以划入这个行列，希望社区凝聚更多这样的人。

#### Editing Toolbar 已更新至 [v3.2.1](https://github.com/PKM-er/obsidian-editing-toolbar/releases/tag/3.2.1)

这是一个重大更新版本，全面改进了工具栏的启用、配置和预览方式，并优化了设置界面的文本和翻译。
**从旧版本升级到 v3.2.0 后，请完全重启 Obsidian**

##### ✨ 新功能

###### 🎯 多工具栏同时运行

- 独立工具栏切换：顶部、跟随和固定工具栏现在可以在 " 设置 → 常规 " 中独立切换
- 可以单独运行一个工具栏，或同时运行任意两个，甚至三个全部启用

###### ⚙️ 激活与外观分离

- 工具栏的激活状态仅由 " 设置 → 常规 " 中的切换开关控制
- 原有的 " 编辑工具栏位置 " 控制已重构为 " 工具栏设置 " 部分，仅控制所选工具栏的外观和行为（位置、布局等），而不控制工具栏类型

###### 🎨 独立命令集

- " 命令 " 选项卡现在支持三种工具栏类型
- 每个工具栏都有自己的命令配置，顶部、跟随和固定工具栏可以拥有不同的按钮集，互不覆盖

###### 👁️ 更新的预览面板

- 预览面板专注于显示所选工具栏的外观（位置、方向、布局）
- 固定工具栏预览已标准化

###### 🔧 正则命令增强

- 支持对当前行应用正则表达式操作，无需选中整行即可快速处理 (感谢 [@felix](https://github.com/felix))

##### 🐛 Bug 修复

- 修复工具栏可能意外镜像或复制彼此命令配置的问题
- 修复外观和主题设置可能跨工具栏模式泄漏的问题，现在正确限定在所选工具栏范围内
- 修复子菜单被遮挡的显示问题
- 修复早期工具栏更改引入的一些小布局故障
- 修复部分翻译错误

##### ⚡ 性能优化

- 增加工具栏缓存机制，显著提升响应速度和用户体验

##### 🔧 改进

###### 设置布局和措辞

- 将设置重新组织为更清晰的 " 常规 " 与 " 外观 " 分组
- 在整个 UI 中统一三种工具栏类型的命名
- 清理标签和描述，使英文措辞更清晰，标点更一致

###### 视觉优化

- 清理所有工具栏变体的 CSS，实现更一致的间距、对齐和悬停状态
- 进行小幅调整，使工具栏在不同宽度和缩放级别下保持可读性和整洁
- 更新 " 玻璃 " 主题以提高可读性

###### UI 优化

- 语义化标签：高亮背景色改用 ==标签，替代 标签
- 命令名称优化：更新工具栏、命令面板和工具提示的命令名称，提升易用性 (感谢 @NicolaiSkodtHolmgaard)
- 更改正则命令相关选项的位置，优化设置界面布局
- 取消中键关闭功能，改为支持右键关闭格式刷

###### 🌍 国际化

- 大规模翻译改进：全面更新多语言翻译文件
    - en (默认英语)
    - en-gb (新增英式英语变体)
    - zh-cn (简体中文)
- 新的 en-gb 语言环境使用英式拼写和标点符号
- 所有当前设置文本现已完全翻译，并与新的配置流程保持一致
- 修复设置界面、模态框和命令的翻译问题
- 更新 CHANGELOG 文档

##### 📦 兼容性

- 导入/导出行为在此版本中保持不变
- 现有配置文件保持兼容

## 外观

[**Brutalist** Theme](https://github.com/DuckTapeKiller/Brutalist) By _DuckTapeKiller_

![Weekly-2026-01-04-Pasted image 20260106214251|650](https://cdn.pkmer.cn/images/Weekly-2026-01-04-Pasted%20image%2020260106214251.png!pkmer)

> 一款专为重度阅读者和写作者设计的主题。
> 其鲜明、几何化的美学强调功能与原始形式，而非装饰。界面采用严格的棱角与方正结构，摒弃圆角，以呈现精准而富有意蕴的外观。色彩方案使用低对比度的灰色调与克制的点缀色，旨在长时间使用时保持专注并减轻视觉疲劳。正如其名，此美学灵感源于粗野主义建筑：真实、实用主义且大胆。

[**Quietus** Theme](https://github.com/yuanzhixiang/obsidian-theme-quietus) By _Max Arden_

![Weekly-2026-01-04-Pasted image 20260106214146|650](https://cdn.pkmer.cn/images/Weekly-2026-01-04-Pasted%20image%2020260106214146.png!pkmer)

> 一款极简而优雅的 Obsidian 主题，专注于清晰的排版与流畅的交互。

[**NichNeumor** Theme](https://github.com/Nichtigott/NichNeumor) By _Nichtigott_

![Weekly-2026-01-04-Pasted image 20260106180153|650](https://cdn.pkmer.cn/images/Weekly-2026-01-04-Pasted%20image%2020260106180153.png!pkmer)

## PKM 相关知识推荐

> [!INFO]
> 欢迎收藏 [PKMer 导航页](https://pkmer.cn/link/)，一键直通 PKMer 各社交平台账号，与热爱分享与知识管理的同好们交流，第一时间获取行业新鲜资讯！

### [快速编辑的魔法——OB内的文本指令](https://forum.pkmer.net/t/topic/7117)

你是否也有快捷键太多记不住的烦恼？快来看看这篇帖子，或许能打开新世界的大门！

#### [Obsidian 样式 - 简单更改 Excalidraw 工具栏布局](https://forum.pkmer.net/t/topic/741)

1. 调整 Library 面板的位置，以免遮挡侧边的工具栏。
2. 增大 Excalidraw 画板上的图标大小，方便查看或触控屏操作。
3. 图形选择工具栏设置了 2 种不同的摆放，**布局一是为了方便 Library 的停靠**，**布局二是方便触控屏或者平板使用时切换图形选择工具**。
4. 根据需要，可以进一步调整图标大小和布局。

> _务必滑到底，新楼有更新！_

![Weekly-2026-01-04-Pasted image 20260107000533|650](https://cdn.pkmer.cn/images/Weekly-2026-01-04-Pasted%20image%2020260107000533.png!pkmer)

> [!Warning] 声明
> 本栏目致力于为广大 Obsidian 中文用户汇总全面的官方资讯与插件、外观动态。为了保持信息的全面性，我们的**收录并不等同于推荐**，还请各位用户知悉并理解，根据自身需求进行判断和选择。
