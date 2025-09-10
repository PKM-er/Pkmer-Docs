---
uid: 20240916192526
title: Obsidian Weekly 2024-09-14：文件列表卡片视图与每日自动汇总
tags: [Weekly, Obsidian]
description: Obsidian Weekly 2024-09-14：文件列表卡片视图与每日自动汇总
author: 淡水鱼,PKMer
type: other
draft: false
editable: false
modified: 20240916200751
---

# Obsidian Weekly 2024-09-14：文件列表卡片视图与每日自动汇总

> [!Abstract]
> **统计时间**：2024-09-06 23:00 ~ 2024-09-14 21:00
> **声明**：本栏目灵感来源于 _Eleanor Konik_ 女士于 2021 年 4 月至 2023 年 6 月期间写作发表的一系列 [Obsidian Roundup](https://www.eleanorkonik.com/tag/roundup/) 文章，如有兴趣可关注原作者的个人网站 [Obsidian Iceberg](https://www.eleanorkonik.com/)；内容来源于 Obsidian 官方 Discord 频道和相应项目在 Github 或其独立网站上的信息。描述中可能存在基于个人理解进行的修改，如有错谬欢迎指正。感谢 Obsidian 团队为我们带来如此优秀的软件。

## 插件新闻

### 社区插件

#### 新增

[Draw Steel Elements](https://obsidian.md/plugins?id=draw-steel-elements) By _Scott Tomaszewski (Xentis)_

> 支持 MCDM 的 Draw Steel TTRPG 的组件。

![Weekly-2024-09-14-Pasted image 20240916183436|650](https://cdn.pkmer.cn/images/Weekly-2024-09-14-Pasted%20image%2020240916183436.png!pkmer)

[Pug Templates](https://obsidian.md/plugins?id=pug-templates) By _Nicholas Wilcox_

> 此插件可让您在 Obsidian 库中渲染 [Pug](https://pugjs.org/api/getting-started.html) 模板。

[simple-sketch](https://obsidian.md/plugins?id=simple-sketch) By _Yoh_

> 在专用视图中创建极简风格的草图，使用铅笔绘制，生成形状，添加文本，将其保存到保险库或下载为图像。

![Weekly-2024-09-14-6c94a690-b471-4d9c-a045-57537e0c1392|650](https://cdn.pkmer.cn/images/Weekly-2024-09-14-6c94a690-b471-4d9c-a045-57537e0c1392.gif)

[Tailwind Snippet](https://obsidian.md/plugins?id=tailwind-snippet) By _Nicholas Wilcox_

> 此插件使用 [TailwindCSS](https://tailwindcss.com/) 作为 [PostCSS](https://postcss.org/) 插件，在您的 Obsidian 保险库中生成 CSS 片段。

[Vault to blog](https://obsidian.md/plugins?id=vault-to-blog) By _barkstone2_

> 将库发布到 GitHub Pages 博客。

[Quick Cards](https://obsidian.md/plugins?id=quick-cards) By _Camus Qiu_

> 该插件旨在以卡片格式展示文件列表中的文件。以下是其主要功能：
> - 卡片视图功能
> 	- 当前目录中的文件将呈现为方便的卡片，每个卡片包含笔记标题、创建日期以及笔记的简要摘要。
> - 打开笔记
> 	- 点击任意卡片即可打开关联的笔记。
> - 创建新笔记
> 	- 可以通过点击卡片视图底部的**加号按钮**来创建新笔记。
> - 自动目录切换
> 	- 当你在编辑区域打开各种文件时，插件会自动切换到相关目录以显示对应的卡片。

[Daily Note Collector](https://obsidian.md/plugins?id=daily-note-collector) By _Adar Butel_

> 自动为所有新创建的文件添加指向您的每日笔记的链接。

#### 更新

[Vault Explorer v1.46.0](https://github.com/decaf-dev/obsidian-vault-explorer/releases/tag/1.46.0) By _DecafDev_

> - **功能**
> 	- 移除网格卡封面图标占位符
> 	- 在视图打开时移除 Obsidian 状态栏
> 	- 当视图打开时，将分页指示器移动到状态栏中
> 	- 移除收藏夹筛选器
> 	- 移除时间戳筛选器
> 	- 将搜索筛选器和排序按钮移动到右侧
> 	- 增加自定义筛选组的大小
> 	- 将自定义筛选按钮重命名为 `Configure`
> 	- 使搜索筛选器可切换
> 	- 为 `url`、`image` 和 `image-fit` 属性添加默认值
> 	- 为排序筛选器添加创建日期
> 	- 使文件夹输入成为可搜索的下拉列表
> 	- 使 Vault Explorer 视图叶子可固定
> 	- 为 `SearchSelect` 添加清除按钮
> 	- 将删除选项添加到上下文菜单
> 	- 添加确认删除设置
> 	- 使 Feed 视图成为非高级功能
> 	- 简化表格列，只显示 `名称` 和 `标签`
> - **修复**
> 	- 当显示 " 昨天 " 时，移除时间上的前导零
> 	- 第一次打开资源管理器视图时，不要替换现有叶
> 	- 移除 `IconButton` 上多余的右边距
> 	- 迁移到新的默认属性
> 	- 处理 `SearchableSelection` 组件下拉菜单的文本溢出
> 	- 如果图片加载失败，隐藏损坏的图片图标
> 	- 在升级时清除社交媒体缓存
> 	- 修复部分社交媒体图片 URL 未被缓存的问题
> 	- 为 `SearchSelect` 添加 `上` 和 `下` 箭头支持
> 	- 在选择 `SearchSelect` 选项时保存值
> 	- 为 `配置` 按钮添加键盘焦点指示器
> 	- 当聚焦且按下任意键时，打开 `SearchSelect` 下拉菜单
> 	- 按下 Tab 键时关闭 `SearchSelect` 下拉菜单
> 	- 使 `SearchSelect` 下拉菜单出现在焦点下方
> 	- 允许 `SearchSelect` 下拉菜单在容器上方渲染
> 	- 当点击选项时，阻止 `SearchSelect` 输入框失去焦点
> 	- 当选择了一个值时，使 `SearchSelect` 清除按钮始终可见
> 	- 在下拉菜单关闭时，将 `SearchSelect` 输入框重置为选定的值
> 	- 解决列表 " 显示标签 " 设置不起作用的问题
> 	- 当 " 显示标签 " 被禁用时，使 `ListItem` 在全宽度上渲染标题
> - **重构**
> 	- 将封面图片的适应方式重命名为 `Cover` 和 `Contain`
> 	- 在 IndexDB 缓存中将 `socialMediaImageUrl` 重命名为 `smiUrl`
> 	- 重命名为 `SearchSelect`
> 	- 移除 `viewOrder` 数组，并为每个视图添加 `order` 属性
> - **杂项**
> 	- 向图片缓存添加调试语句
> - **测试**
> 	- 向社交媒体缓存添加更多日志

[Quiz Generator v2.1.0](https://github.com/ECuiDev/obsidian-quiz-generator/releases/tag/2.1.0) By _Edward Cui_

> 本次更新主要增加了对多个新的 LLM 提供商的支持，改善了学生对谷歌和 Cohere 提供的免费模型的访问，并为注重隐私的用户提供使用 Ollama 本地 LLM 的选项。**新增内容：**
> - **扩展模型支持**：现在可以使用以下模型生成问题：
>     - **谷歌**：免费使用，拥有最大的上下文窗口，非常适合处理大量笔记。
>     - **Anthropic**：针对周到且具上下文意识的回答进行了优化。
>     - **Perplexity**：微调的 LLaMA 模型，用于生成强大的问题。
>     - **Mistral**：轻量级模型，提供快速高效的生成。
>     - **Cohere**：免费且擅长生成连贯且具上下文准确性的问题。
>     - **Ollama**：本地 LLM，用于增强隐私和离线处理。
> - **更好的评分**：使用嵌入模型评估你对简答和长答问题的回答，提供更准确且有见地的反馈。
> - **改进的笔记集成**：在保存测验时，现在可以将用于测验生成的笔记链接包含为前置内容，使追溯学习材料更容易。

[Graph Banner v1.3.2](https://github.com/ras0q/obsidian-graph-banner/releases/tag/1.4.1) By _ras0q_

> - 在此版本中，图形横幅打开得更加顺畅！
> - 图形横幅插件不再会短暂打开新窗口
> - 提高图表打开速度，不再打开新窗口
> - 重构/CSS
> - 更新大量依赖项
> - 添加一个设置：移除图形叶的时间

[Iconic v1.0.14](https://github.com/gfxholo/iconic/releases/tag/1.0.14) By _Holo_

> - **错误修复**
> 	- **标签页：** 文件标签页的上下文菜单中不应再有重复项
> 	- **属性：** 含有大写字母的属性不再会破坏图标选择器
> - **视觉修复**
> 	- **图标选择器：** 当你使用鼠标或键盘滚动颜色时，颜色工具提示现在会实时更改
> 	- **图标选择器（手机）：** `Remove` 和 `Emojis` 按钮现在位于底部的同一行，并在顶部添加了一个 `Cancel` 按钮，以匹配编辑书签对话框
> 	- **图标选择器（平板）：** `Emojis` 按钮现在固定在右侧（或在 RTL 语言中固定在左侧）

[Tasks v7.10.0](https://github.com/obsidian-tasks-group/obsidian-tasks/releases/tag/7.10.0) By _Clare Macrae and Ilyas Landikov (created by Martin Schenck)_

> - **特性**
> 	- 在阅读模式和任务查询结果中添加日期上下文菜单
> 		- 在阅读模式和任务查询结果中的任何日期值上右键单击，可以进行一些常见的编辑，类似于“推迟”菜单，但您可以控制哪个字段被编辑。
> 		- 注意：为了允许随后的错误修复发布，此功能尚未记录。
> - **修复**
> 	- 在工作区准备好时加载缓存
> 		- 这显著加快了任务的启动时间，尤其在移动设备上。

### PKMer 出品

> [!INFO]
> **PKMer**（[PKMer.cn](https://pkmer.cn/)、[PKMer.net](https://pkmer.net/)）旨在打造东半球强大的知识管理社区。Personal Knowledge Management (PKM) + "er"，其中 "er" 表示人，专注、喜爱个人知识管理工作、追求效率的人们，都可以划入这个行列，希望社区凝聚更多这样的人。

#### [Thino](https://github.com/Quorafind/Obsidian-Thino) 已更新至 v2.4.55

- **修复**
	- 从网络同步时 Thino 的类型不会改变

## 外观

[**Black** Theme](https://github.com/b3h3m0th/black-obsidian-theme) By _Simon Ostini (behem0th)_

![Weekly-2024-09-14-Pasted image 20240916171612|650](https://cdn.pkmer.cn/images/Weekly-2024-09-14-Pasted%20image%2020240916171612.png!pkmer)

> 一个简单的黑色主题。

> [!Warning] 声明
> 本栏目致力于为广大 Obsidian 中文用户汇总全面的官方资讯与插件、外观动态。为了保持信息的全面性，我们的**收录并不等同于推荐**，还请各位用户知悉并理解，根据自身需求进行判断和选择。

