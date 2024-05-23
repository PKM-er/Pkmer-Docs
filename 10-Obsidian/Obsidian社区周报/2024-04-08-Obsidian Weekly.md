---
uid: 20240409004305
title: Obsidian Weekly 2024-04-08：更灵活，同时更稳定
tags: [Weekly, Obsidian]
description: Obsidian Weekly 2024-04-08：更灵活，同时更稳定
author: 淡水鱼,PKMer
type: other
draft: false
editable: false
modified: 20240429000748
---

# Obsidian Weekly 2024-04-08：更灵活，同时更稳定

> [!Abstract]
> **统计时间**：2024-04-01 00: 00 ~ 2024-04-08 00:00
> **声明**：本栏目灵感来源于 _Eleanor Konik_ 女士于 2021 年 4 月至 2023 年 6 月期间写作发表的一系列 [Obsidian Roundup](https://www.eleanorkonik.com/tag/roundup/) 文章，如有兴趣可关注原作者的个人网站 [Obsidian Iceberg](https://www.eleanorkonik.com/)；内容来源于 Obsidian 官方 Discord 频道和相应项目在 Github 或其独立网站上的信息。描述中可能存在基于个人理解进行的修改，如有错谬欢迎指正。感谢 Obsidian 团队为我们带来如此优秀的软件。

## 插件新闻

### 社区插件

#### 新增

[Unofficial Supernote by Ratta Integration](https://obsidian.md/plugins?id=supernote) By _philips_

> 查看 Supernote 笔记，从笔记生成 Markdown 并捕获屏幕镜像。

[Mehrmaid](https://obsidian.md/plugins?id=mehrmaid) By _huterguier_

> 允许在 MermaidJS 图表中使用 Obsidian-Markdown。

![2024-04-08-Pasted image 20240409002659](https://cdn.pkmer.cn/images/2024-04-08-Pasted%20image%2020240409002659.png!pkmer)

[Note Toolbar]( https://obsidian.md/plugins?id=note-toolbar )By _Chris Gurney_

> 该插件提供了一种灵活的方式来在笔记顶部创建工具栏。使用此插件，您还可以在笔记的任何位置添加 Note Toolbar Callouts。
> - **功能**
> 	- 创建包含指向命令、文件和 URI/URL 的项目的工具栏
> 	- 设计与 Obsidian 的用户界面紧密配合，插入到属性部分的下方
> 	- 使用 Obsidian 的内置图标、标签或二者混合使用
> 	- 变量可让您将笔记的标题或属性插入到 URI 中
> 	- 根据文件夹或用户定义的属性，在相应笔记上显示工具栏
> 	- 仅在移动设备、桌面设备或两者上显示项目
> 	- 笔记工具栏插页可让您在笔记的任何位置创建和放置工具栏
> 	- 为每个项目设置可选的工具提示
> 	- 通过添加边框、在滚动时将工具栏固定在笔记顶部以及对齐项目（左对齐、右对齐、居中、等距）来样式化工具栏
> 	- 在移动设备上更改或覆盖这些样式
> 	- 通过笔记工具栏提供的键盘控制：聚焦 _ 命令 _
> - **了解更多**: [文档（附带示例）](https://github.com/chrisgurney/obsidian-note-toolbar/wiki)

![2024-04-08-980d810a-6372-4061-9697-4355f10252ab](https://cdn.pkmer.cn/images/2024-04-08-980d810a-6372-4061-9697-4355f10252ab.gif!pkmer)

[Autoplay & Loop](https://obsidian.md/plugins?id=autoplay-and-loop) By _Zerkshop & Wapply_

> 自动播放笔记内外的视频。

[Shiki Highlighter](https://obsidian.md/plugins?id=shiki-highlighter) By _Moritz Jung_

> - 该插件旨在在编辑器和阅读模式下提供一致的代码块突出显示。为了实现这一点，该插件将 [shiki](https://shiki.style/) 和 [Expressive Code](https://expressive-code.com/) 集成到 Obsidian 的阅读和编辑模式中。两者都基于与流行的代码编辑器 VS Code 相同的突出显示技术。
> - 最重要的是。该插件在读取模式下对代码块添加了一些增强功能，可以在每个代码块的基础上启用，例如：
> 	- 行号
> 	- 代码包装设置
> 	- 代码块标题
> 	- 突出显示特定行
> - 下面是使用和不使用 Shiki Highlighter 插件的突出显示效果的比较。
> 	- ![2024-04-08-Pasted image 20240408224542](https://cdn.pkmer.cn/images/2024-04-08-Pasted%20image%2020240408224542.png!pkmer)
> 	- ![2024-04-08-Pasted image 20240408224523](https://cdn.pkmer.cn/images/2024-04-08-Pasted%20image%2020240408224523.png!pkmer)
> - 了解有关插件的更多信息 [GitHub 存储库](https://github.com/mProjectsCode/obsidian-shiki-plugin)。

#### 更新

[View Count v1.1.2](https://github.com/trey-wallis/obsidian-view-count/releases/tag/1.1.2) By _Trey Wallis_

> - **修复**
> 	- 更新活动面板变更时的视图计数
> 	- 确保 Obsidian 启动时为活动面板增加视图计数
> 	- 当打开不支持的视图时，从状态栏中移除视图计数指示器

[Meta Bind v1.0.3](https://github.com/mProjectsCode/obsidian-meta-bind-plugin/releases/tag/1.0.3-canary.20240408T084048) By _Moritz Jung_

> - **新特性**
> 	- 添加了新的输入字段 `imageListSuggester`，这是 `imageSuggester` 输入字段的列表变体
> 	- 添加了新的输入字段 `dateTime`，一个组合日期和时间的输入字段，使用原生 Obsidian 日期时间输入
> 	- 添加了新的输入字段参数 `multiLine`，为 `list` 输入字段添加多行支持
> 	- 添加了新的输入字段参数 `allowOther`，允许非建议值添加到 `suggester`、`listSuggester` 和 `inlineListSuggester` 输入字段
> 	- 添加了新的视图字段 `image`，用于在笔记中显示图像，其功能类似于链接视图字段
> 	- 添加了新的视图字段参数 `class`，为所有视图字段添加自定义类，类似于 `class` 输入字段参数
> 	- 添加了新的按钮操作 `createNote`，用于创建新笔记
> 	- 添加了新的按钮操作 `replaceInNote`，用于替换按钮所在笔记中的行
> 	- 添加了新的按钮操作 `regexpReplaceInNote`，在按钮所在笔记中执行正则表达式替换
> 	- 添加了新的按钮操作 `insertIntoNote`，在笔记中指定行插入文本
> 	- 添加了新的按钮操作 `replaceSelf`，用于将按钮替换为字符串或模板
> 	- 添加了新的按钮操作 `inlineJS`，运行 JavaScript 片段
> 	- 添加了将图标添加到按钮的选项
> 	- 添加了一个命令，可以轻松将命令 ID 复制到剪贴板
> 	- 添加了对所有列表类型输入字段的重新排序支持
> 	- 在某些列表类型输入字段中添加了编辑支持
> - **变更**
> 	- **重大变更**：完全重写了插件的 JavaScript API
> 	- 对以下输入字段进行了重新样式设计：`list`、`listSuggester`、`inlineList`、`inlineListSuggester`、`imageSuggester`、`imageListSuggester`、`select` 和 `multiSelect`，使其更符合 Obsidian 的设计风格
> 	- 更改了日期和时间输入字段，以使用原生的 Obsidian 日期和时间输入
> 	- 添加了 `open` 按钮操作以在新标签页中打开链接的功能
> 	- 在 JS 按钮操作中添加了按钮配置和参数作为可用变量
> 	- 在常见问题解答中添加了视图字段示例
> 	- 对插件代码进行了重大重构，以便更轻松地开发发布版本的插件
> - **错误修复**
> 	- 修复了常见问题解答无法打开的问题
> 	- 修复了在使用同步服务时设置恢复的问题
> 	- 修复了插件有时会错误地抱怨按钮 ID 重复的问题
> 	- 修复了按钮生成器和按钮模板设置的一些问题
> 	- 修复了按钮模板保存不正确的问题
> 	- 修复了列表类型输入将 `null` 解释为 `[null]` 的问题，现在将 `null` 视为空列表

[Smart Second Brain](https://obsidian.md/plugins?id=smart-second-brain) By _Leo310, nicobrauchtgit_

> 通过 S2B，您可以与笔记进行交互并查询您的知识。所有这一切都是完全本地和离线的。利用我们的人工智能助手将您的黑曜石金库变成智能的第二大脑。
> - **特征**
> 	- **与您的笔记聊天并获取笔记的链接**，其中的知识来自 _示例查询：“请总结我的人工智能大学课程的笔记”_
> 	- **选择任何首选的大型语言模型 (LLM)** 并快速舒适地在 LLM 之间切换以适应不同的任务 _使用本地 LLM 或 OpenAI 的 ChatGPT_
> 这是您信任 AI 处理您的敏感数据并在您的 Obsidian 笔记上利用其功能的机会，而无需使用 OpenAI 的 ChatGPT 等第三方服务。

[Persistent Key Value Store v1.1.0](https://github.com/iamrecursion/obsidian-pkvs/releases/tag/1.1.1) By _Ara Adkins_

> 修复了标准配置无法在移动设备上加载插件的问题。

[Journals v1.3.0](https://github.com/srg-kostyrko/obsidian-journal/releases/tag/1.3.0) By _Sergii Kostyrko_

> - 在日历视图的日记列表中新增按钮，可以添加已有的笔记（这些笔记可能是通过 Daily Notes 或 Periodic Notes 等其他插件创建的）到基于日历的日记中
> - 更好地与 Templater 插件的模板集成（更多细节请查看插件描述中的 `Templater caveeats` 部分）
> - 日历视图会自动聚焦到活动笔记周围
> - 间隔日记现在可以通过开始和结束日期来限制
> - 创建日记时会检查其 ID 的唯一性，以避免配置覆盖

### 未上架插件

> [!Caution]
> **注意**：下列插件尚未通过代码审查，因而未在 _ 社区插件市场 _ 上架。在安装前，请确保您已充分了解并接受其中涉及的潜在安全风险。

[Soundboard](https://github.com/AlyceOsbourne/obsidian-soundboard) By _AlyceOsbourne_

> SoundboardPlugin 为您的 Obsidian 笔记添加了交互式音板，使您可以直接从 Markdown 文件播放音频剪辑。该插件非常适合语言学习者、音乐家、播客、TTRPG 爱好者以及任何想要将音频直接嵌入笔记中以供快速参考的人。

[AI for Templater](https://github.com/TfTHacker/obsidian-ai-templater) By _TfTHacker_

> 该插件扩展了 Templater 以与大型语言模型交互。它主要设计用于与 OpenAI LLMs 配合使用，就像 ChatGPT 使用的那样，但也与任何支持 OpenAI API 的 LLM 兼容。

[Obsidianised](https://github.com/Fevol/obsidian-obsidianised) By _Fevol_

> 一个专为 Obsidian 设计的插件，旨在使您的笔记和整个工作流程更加抗误触、防意外删除和其他用户错误。

### PKMer 出品

> [!INFO]
> **PKMer**（[PKMer.cn](https://pkmer.cn/)、[PKMer.net](https://pkmer.net/)）旨在打造东半球强大的知识管理社区。Personal Knowledge Management (PKM) + "er"，其中 "er" 表示人，专注、喜爱个人知识管理工作、追求效率的人们，都可以划入这个行列，希望社区凝聚更多这样的人。

#### Thino v2.4.15 已发布

- **Features**
	- [PRO/BASIC] 支持将编辑器插入到当前的 markdown 视图
		- ![f0ebe95b-7539-470d-b6b3-301a543922db|700](https://cdn.pkmer.cn/images/f0ebe95b-7539-470d-b6b3-301a543922db.gif!pkmer)
	- [PRO/BASIC] 强化 Thino 嵌入组件；你可以按不同类型排序 Thino 组件，比如列表/日历/热力图/状态/编辑器/每日
	- [PRO/BASIC] Thino 嵌入中的列表组件应该将固定的 Thino 放在顶部
	- [PRO/BASIC] 支持按回车键解锁 Thino
	- [PRO] 支持 `thino.canvas` 中的 Thino 画布菜单；你需要打开 Thino 然后切换到 `thino.canvas` 来使用它
		- ![thino-canvas-menu](https://cdn.pkmer.cn/images/thino-canvas-menu.gif!pkmer)
		- 注意：这个功能基于 `CANVAS` 源类型，你需要在设置中启用它
	- 支持通过代码块直接打开 Thino
			- ![91ed29cf-f1aa-46bf-bc93-280f0ba75422](https://cdn.pkmer.cn/images/91ed29cf-f1aa-46bf-bc93-280f0ba75422.gif!pkmer)
	- 双击代码块中的 Thino 将跳转 Thino 的页面
	- 支持每日笔记的无重复 thino 源
	- 在编辑 thino 时可以直接切换任务或列表
	- 支持 HH:mm: ss 作为时间前缀
	- 支持 thino 的源悬停显示
	- 新的分享布局图片
	- 在手机上直接支持下载图片
	- 全局支持用户图标
	- [PRO] 支持在手机上分享到 Thino 时追加/前置文本
	- 在移动设备上支持浮动编辑器
	- 在时刻视图中为 thino 支持日期显示
	- 为 Thino 支持不同的插入目标，如列表或任务
	- **更好的入门体验**
- **修复**
	- 无法双击 Thino 中的复选框来切换它，它会触发编辑 Thino 事件
	- 点击 TASK-TODO Thino 中的复选框不应该切换它的状态
	- 无法通过上下文菜单正确取消固定 Thino
	- 标签列表导致 Thino 崩溃
	- 无法正确显示 Thino 列表
	- 修复：[PRO] 无法解析内容中带有 `---` 以下的部分
	- 与时刻视图相关的标签或图片问题
	- 标签计数问题和字数计数问题
	- 生成图片问题
	- 拼写错误问题
	- 无法正确更新 thino webid
	- 由父子列表引起的死循环
- **样式**
	- 将 Thino 模态框高度减小到 90vh

完整更新信息请查看：[更新日志](https://github.com/Quorafind/Obsidian-Thino/blob/main/CHANGELOG.md)

## 外观

[Soothe Theme](https://github.com/AwesomeDog/obsidian-soothe) By _AwesomeDog_

![2024-04-08-Pasted image 20240408231619|900](https://cdn.pkmer.cn/images/2024-04-08-Pasted%20image%2020240408231619.png!pkmer)

> 用舒缓的色彩渲染 Obsidian，保留 Obsidian 所提供的一切。
> 该主题的设计旨在使 Obsidian 的外观更加柔和，同时保留其原生感。
> 支持桌面、移动和平板电脑上的暗色和亮色主题。

[Aura Theme v2.3.0](https://github.com/ashwinjadhav818/obsidian-aura) By _ashwinjadhav818_

> - 新增
> 	- Tokyonight 配色方案
> - 修复
> 	- 原始主题中带有彩色文件夹时的侧边栏高亮颜色
> 	- 原始布局中的高亮颜色
