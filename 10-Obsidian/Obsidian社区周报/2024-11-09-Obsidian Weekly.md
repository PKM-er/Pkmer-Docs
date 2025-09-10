---
uid: 20241111133116
title: Obsidian Weekly 2024-11-09：Obsidian 更新至 v1.7.5；模块化功能上新
tags: [Weekly, Obsidian]
description: Obsidian Weekly 2024-11-09：Obsidian 更新至 v1.7.5；模块化功能上新
author: 淡水鱼,PKMer
type: other
draft: false
editable: false
modified: 20241111133152
---

# Obsidian Weekly 2024-11-09：Obsidian 更新至 v1.7.5；模块化功能上新

> [!Abstract]
> **统计时间**：2024-11-02 21:00 ~ 2024-11-09 21:00
> **声明**：本栏目灵感来源于 _Eleanor Konik_ 女士于 2021 年 4 月至 2023 年 6 月期间写作发表的一系列 [Obsidian Roundup](https://www.eleanorkonik.com/tag/roundup/) 文章，如有兴趣可关注原作者的个人网站 [Obsidian Iceberg](https://www.eleanorkonik.com/)；内容来源于 Obsidian 官方 Discord 频道和相应项目在 Github 或其独立网站上的信息。描述中可能存在基于个人理解进行的修改，如有错谬欢迎指正。感谢 Obsidian 团队为我们带来如此优秀的软件。

## 官方资讯

### Obsidian v1.7.5 已发布

#### 桌面版

##### 修复的问题

- 更新了“添加内部链接”命令，现在光标会定位在链接文本末尾，并弹出链接建议窗口。
- 修复了同步侧边栏时间戳未反映本地更改的问题。
- 提升了屏幕上有大量节点时 Canvas 的渲染性能。
- 修复了附件文件夹在设置中显示不正确的问题。
- 修复了“添加标签”命令未弹出标签建议的回归问题。
- 修正了 Sandbox 笔记库在缺少“开始”文件时无法加载的错误。
- 文件资源管理器：“在文件导航中显示”现在会等待视图加载完成。
- 修复了树状组件（如大纲视图）在 Android 上刷新缓慢的问题。
- 修正了在 Obsidian 与其他应用间切换时导航栏和工具栏同时激活的问题。
- 修复了安装旧版主题时“安装主题”通知不消失的问题。
- 修正了中键点击无法关闭标签页的问题。
- 修复了在打开新图视图时，图视图选项偶尔被覆盖的问题。

##### 开发者更新

- 安装程序已更新至 Electron v32（需要下载 [最新安装程序](https://obsidian.md/)）。
- 修正了 vim 的 `langmap` 无法正确加载的问题。
- 为开发者新增了调试模式。可在开发者工具中运行 `app.debugMode(true);` 启用。启用后，加载的插件将保留内嵌源映射，方便调试。
- 修复了 MarkdownCodeBlockProcessor 在阅读模式中添加额外换行符的问题。

#### 移动端

包括截止到桌面版 [v1.7.5](https://obsidian.md/changelog/2024-11-04-desktop-v1.7.5/) 的所有新功能和错误修复。

## 插件新闻

### 社区插件

#### 新增

[Blue Star](https://obsidian.md/plugins?id=blue-star) By _Wang Guoshi_

> 简化从笔记创建 Anki 抽认卡的过程。

[Peekaboo](https://obsidian.md/plugins?id=peekaboo) By _Wang Guoshi_

> 通过设置密码来隐藏文件来保护您的隐私。

[MOC Link Helper](https://obsidian.md/plugins?id=moc-link-helper) By _Bogdan Codreanu_

> 这是一个帮助将**子笔记**链接到**MOC**笔记的插件。通常通过双向链接完成此任务：
> - **MOC**笔记在其内容中包含了**子笔记**。
> - **子笔记**具有一个**up**属性，表明其来源于特定的**MOC**。

![Weekly-2024-11-09-Weekly-2024-11-09-Pasted image 20241111023649|650](https://cdn.pkmer.cn/images/Weekly-2024-11-09-Weekly-2024-11-09-Pasted%20image%2020241111023649.png!pkmer)

[Arweave Uploader](https://obsidian.md/plugins?id=arweave-uploader) By _makesimple_

> 将您的笔记转换为 HTML 并上传到 Arweave。

[Nav Weight](https://obsidian.md/plugins?id=nav-weight) By _shu307_

> 一个简单插件，根据 Markdown frontmatter（也称为 metadata 元数据）对 Obsidian 中的文件进行排序。

[Cursor Bridge](https://obsidian.md/plugins?id=cursor-bridge) By _Adam Cloud_

> 使用人工智能驱动的代码编辑器 Cursor 无缝连接您的笔记。

[PromptCrafter](https://obsidian.md/plugins?id=prompt-crafter) By _Fabrice Hong_

> 创建可重复使用的模块化提示。

![Weekly-2024-11-09-Weekly-2024-11-09-Pasted image 20241111014227|650](https://cdn.pkmer.cn/images/Weekly-2024-11-09-Weekly-2024-11-09-Pasted%20image%2020241111014227.png!pkmer)

[Transfer LaTeX from GPT](https://obsidian.md/plugins?id=transfer-latex-from-gpt) By _Xixia_

> 将 OpenAI GPT 生成的 LaTeX 公式转换为 MathJax 格式。

[ExMemo Client](https://obsidian.md/plugins?id=exmemo-client) By _Yan. Xie_

> ExMemo 服务的客户端，用于搜索、同步和组织服务器中的数据。

[Open with Natural Language Dates](https://obsidian.md/plugins?id=open-with-nldates) By _Charlie Chao_

> 使用自然语言打开每日笔记。需要 [Natural Language Dates](https://github.com/argenos/nldates-obsidian/tree/master) 插件才能工作。

![Weekly-2024-11-09-Open with Natural Language Dates|650](https://cdn.pkmer.cn/images/Weekly-2024-11-09-Open%20with%20Natural%20Language%20Dates.gif!pkmer)

[Jisage -Japanese Indentation-](https://obsidian.md/plugins?id=jisage-japanese-indentation) By _Telehakke_

> 正确显示“Jisage”（在行首缩进全角空格）文本。

![Weekly-2024-11-09-Weekly-2024-11-09-Pasted image 20241111011827|650](https://cdn.pkmer.cn/images/Weekly-2024-11-09-Weekly-2024-11-09-Pasted%20image%2020241111011827.png!pkmer)

[Simple Code Formatter](https://obsidian.md/plugins?id=simple-code-formatter) By _SY_

> 格式化光标所在的代码块。

![Weekly-2024-11-09-recording|650](https://cdn.pkmer.cn/images/Weekly-2024-11-09-recording.gif!pkmer)

[Vault Review](https://obsidian.md/plugins?id=vault-review) By _Alexander_

> 该插件允许您创建仓库的快照并随机地一一查看其中的文件。

[Session Notes](https://obsidian.md/plugins?id=session-notes) By _tabibyte_

> 创建临时的一次性会话笔记。

[Smart Composer](https://obsidian.md/plugins?id=smart-composer) By _Heesu Suh_

> 带有笔记上下文的人工智能聊天、智能写作帮助以及对您的仓库的一键编辑。

![Weekly-2024-11-09-Weekly-2024-11-09-986d9480-fe76-4698-8d41-6a0a3aca7c83|650](https://cdn.pkmer.cn/images/Weekly-2024-11-09-Weekly-2024-11-09-986d9480-fe76-4698-8d41-6a0a3aca7c83.gif!pkmer)

[PDF2Image](https://obsidian.md/plugins?id=pdf2img)

> 将 PDF 页面转换为图像并将其直接插入到您的 Obsidian 笔记中，非常适合捕获讲座幻灯片等关键视觉效果。 （可选）在图像之间添加分隔线，以便有组织且可读的注释。

![Weekly-2024-11-09-Weekly-2024-11-09-demo|650](https://cdn.pkmer.cn/images/Weekly-2024-11-09-Weekly-2024-11-09-demo.gif!pkmer)

[BookNav](https://obsidian.md/plugins?id=booknav) By _jemberton_

> 类书籍页面导航。此插件可在笔记中创建可点击的内部或外部链接（通常位于底部），引导读者按设定路径浏览。无需依赖任何其他插件。如果在其他应用中查看该笔记，将显示为代码块。

![Weekly-2024-11-09-Weekly-2024-11-09-Pasted image 20241111005832|650](https://cdn.pkmer.cn/images/Weekly-2024-11-09-Weekly-2024-11-09-Pasted%20image%2020241111005832.png!pkmer)

[Vault Full Statistics](https://obsidian.md/plugins?id=vault-full-statistics) By _Mikhail Savin_

> [Vault Statistics](https://github.com/bkyle/obsidian-vault-statistics-plugin) 插件的修改版。
> 状态栏项目包含仓库完整统计信息，例如注释、文件、附件、链接、标签和仓库质量的数量。

[Fold Properties](https://obsidian.md/plugins?id=fold-properties) By _James Alexandre_

> 在文件右键菜单中添加“折叠/展开属性”按钮。

[复制图文 (Copy Image Text)](https://obsidian.md/plugins?id=copy-image-text) By _msgk_

> 复制笔记内容（包括文本和图片）到剪贴板。

#### 更新

[Another Quick Switcher v12.1.0](https://github.com/tadashi-aikawa/obsidian-another-quick-switcher/releases/tag/12.1.0) By _tadashi-aikawa_

> - 功能
>     - **主功能：** 添加“关闭已打开”热键命令
>     - **主功能：** 自动别名转换
> - Bug 修复
>     - **移动：** 当目标文件夹包含同名文件时，移动文件命令无法正常工作

[Pane Relief v0.5.6](https://github.com/pjeby/pane-relief/releases/tag/0.5.6) By _PJ Eby_

> **修复 1.7.5 无法通过热键打开搜索 + 焦点锁定的问题**
> - 较早版本的 Obsidian 会直接从搜索命令聚焦搜索框，这使得在 Pane Relief 的焦点锁定功能启用时可以使用热键进行搜索。较新版本则在聚焦时受到焦点锁定的影响，因此此次更新增加了一个解决方法，以模拟旧版的行为。
> - 注意：除去从弹出窗口移除焦点的问题，Obsidian 已修复了大多数焦点锁定旨在解决的 UI 问题，因此可以尝试关闭焦点锁定，看看是否仍然需要该功能。（另一个主要的使用场景是防止“自动显示活动文件”插件不断聚焦文件浏览器窗格。）

[Quick Explorer v0.2.11](https://github.com/pjeby/quick-explorer/releases/tag/0.2.11) By _PJ Eby_

> 添加 vim 风格的导航热键 (mod-hjkl)

[List Modified v3.2.0](https://github.com/franciskafieh/obsidian-list-modified/releases/tag/3.2.0) By _Francis Kafieh_

> - 添加了调试设置，可以手动重置所有跟踪的文件并强制刷新更改。
> - 修复了插件总是将昨天视为最后一条笔记的 bug。
> - 修复了新笔记逻辑不会删除旧修改的 bug。
> - 在 [输出格式](https://github.com/franciskafieh/obsidian-list-modified/wiki/Output-Format) 中添加了 URI 支持。

[Tasks v7.13.0](https://github.com/obsidian-tasks-group/obsidian-tasks/releases/tag/7.13.0) By _Clare Macrae and llyas Landikov (created by Martin Schenck)_

> 将日期选择器添加到编辑任务模式中

[Personal OS v1.1.0](https://github.com/GengAd/obsidian-personal-os/releases/tag/1.1.0) By _A.Buot _

> - **信息**
>     - 在设置中添加了一个新 Vault 模板的链接！该模板包含仪表板、插件以及如何使用 Personal OS 方法的教程！
>     - 在设置中添加了一个 Discord 社区链接，如果需要帮助或想讨论 Personal OS Vault，可以加入该社区！
>     - 在设置中添加了插件的 GitHub 链接，如果发现任何 bug 或有功能请求，可通过该链接提交！
> - **新功能**
>     - 在插件中添加了进度条，不再需要使用外部服务。
>     - 添加了“Engage 当前文件”功能，以便将 Engage 逻辑应用于当前文件“处理”的所有文件。
>     - 添加了“随机日期”功能，用于在常规的休眠分类之间生成一个随机日期。
>     - 完成任务后会显示反馈经验值通知，可在插件配置中禁用此功能。
>     - 更新插件时会显示更新日志弹窗，也可在插件配置中禁用此功能。
> - **更改**
>     - 更改了“开始工作”和“开始处理”命令名称为 Engage + Process。
>     - 改进了自动切换工作区功能，保存了之前的工作区。
>     - 改进了在移动端自动切换工作区，选择工作区的“移动版”。
> - **错误修复**
>     - 修复了 Engage 功能，以便与所有任务优先级正常工作。
>     - 修复了到期日期的随机休眠功能。
>     - 修复了自动失败当前文件的功能，以包括当前日期。不影响进行中所有工作的失败状态。
>     - 修复了在仍有后续文件时显示“完成文件”的问题。

[Vertical Tabs v0.11.0](https://github.com/oxdc/obsidian-vertical-tabs/releases/tag/0.11.0) By _oxdc_

> - **引入“标签页历史”**：可以浏览、添加书签和清除每个标签页的历史记录，或将历史记录作为一组标签页组单独打开。每个标签页都会记住滚动位置和光标位置！
> - **新增“新建标签”按钮**：将鼠标悬停在组末尾，轻松添加新标签页到任何组。
> - **引入：标签页缩放功能**
> 	- 对**单个标签**应用缩放级别，不会影响其他标签或其他界面部分。
> 	- **支持图片！** 而不仅仅是文本。
> 	- **支持链接标签页！** 类似于 VSCode 的小地图。
> 	- **更重要的是：**_Vertical Tabs_ 会记住你的缩放设置！**缩放历史记录**会被保存！
> - 修复了样式不一致的问题，使外观更统一。
> - 解决了拖放行为的问题。
> - 修复了折叠和隐藏唯一组时出现空白屏幕的问题。
> - 改善了移动端体验，现在可以在不误开其他标签的情况下滚动。
> - 更新了 Zen 模式，便于定制化——现在可以启用 Zen 模式，同时保持所有水平标签可见。
> - _已知限制：标签历史记录由 Obsidian 管理，重启后将被清除。_

> [!Warning] 声明
> 本栏目致力于为广大 Obsidian 中文用户汇总全面的官方资讯与插件、外观动态。为了保持信息的全面性，我们的**收录并不等同于推荐**，还请各位用户知悉并理解，根据自身需求进行判断和选择。

