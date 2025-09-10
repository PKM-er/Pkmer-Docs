---
uid: 20240825225211
title: "Obsidian Weekly 2024-08-23：繁琐操作再见！"
tags: [Weekly, Obsidian]
description: "Obsidian Weekly 2024-08-23：繁琐操作再见！"
author: 淡水鱼,PKMer
type: other
draft: false
editable: false
modified: 20240825225426
---

# Obsidian Weekly 2024-08-23：繁琐操作再见！

> [!Abstract]
> **统计时间**：2024-08-17 00:00 ~ 2024-08-23 21:00
> **声明**：本栏目灵感来源于 _Eleanor Konik_ 女士于 2021 年 4 月至 2023 年 6 月期间写作发表的一系列 [Obsidian Roundup](https://www.eleanorkonik.com/tag/roundup/) 文章，如有兴趣可关注原作者的个人网站 [Obsidian Iceberg](https://www.eleanorkonik.com/)；内容来源于 Obsidian 官方 Discord 频道和相应项目在 Github 或其独立网站上的信息。描述中可能存在基于个人理解进行的修改，如有错谬欢迎指正。感谢 Obsidian 团队为我们带来如此优秀的软件。

## 插件新闻

### 社区插件

#### 新增

[CSS Inlay Colors](https://obsidian.md/plugins?id=css-inlay-colors) By _Benji Grant_

> 显示 CSS 颜色的内联颜色提示。

![Pasted image 20240825204303|650](https://cdn.pkmer.cn/images/Pasted%20image%2020240825204303.png!pkmer)

[Arcane Obfuscate](https://obsidian.md/plugins?id=arcane-obfuscate) By _Shusako_

> 用神秘的符文效果模糊文本。

![Weekly-2024-08-23-350783621-f32949f8-daa7-4c93-9e83-86ac984be62e|650](https://cdn.pkmer.cn/images/Weekly-2024-08-23-350783621-f32949f8-daa7-4c93-9e83-86ac984be62e.gif!pkmer)

[Current File](https://obsidian.md/plugins?id=current-file) By _Mark Fowler_

> 允许外部程序获取你当前在 Obsidian 桌面应用程序中查看的文件。

[Structured Tree](https://obsidian.md/plugins?id=structured-tree) By _Marius Svarverud_

> 一个用于导航以 '.' 分隔的层次化笔记的文件资源管理器。

![Weekly-2024-08-23-Pasted image 20240824224952|650](https://cdn.pkmer.cn/images/Weekly-2024-08-23-Pasted%20image%2020240824224952.png!pkmer)

[GTP Preview](https://obsidian.md/plugins?id=gtp-preview) By _Barba828_

> 支持 `gtp/gp/gp5/gpx` 等 GuitarPro 文件的渲染。基于 [AlphaTab](https://alphatab.net/)。

![Weekly-2024-08-23-Pasted%20image%2020240824224604.png!pkmer](https://cdn.pkmer.cn/images/Weekly-2024-08-23-Pasted%20image%2020240824224604.png!pkmer)

[Block Link Plus](https://obsidian.md/plugins?id=block-link-plus) By _Jasper_

> 通过可自定义的块 ID 简化多行块引用的创建。

![Weekly-2024-08-23-dd0fadbf-8f0e-4bd7-93da-29e1d4926325|650](https://cdn.pkmer.cn/images/Weekly-2024-08-23-dd0fadbf-8f0e-4bd7-93da-29e1d4926325.gif)

[Daily Statistics](https://obsidian.md/plugins?id=daily-statistics) By _yefengr_

> 统计每日书写的字数，并展示在日历中。

![Weekly-2024-08-23-Pasted image 20240824214636|650](https://cdn.pkmer.cn/images/Weekly-2024-08-23-Pasted%20image%2020240824214636.png!pkmer)

[Auto Correct Capitals Misspellings](https://obsidian.md/plugins?id=auto-correct-capitals) By _Ummel_

> 此插件会自动更正前两个字母大写而其余字母为小写的单词。

[sync-db-os](https://obsidian.md/plugins?id=sync-db-os) By _ketd_

> 用于多个平台之间的同步。
> - **功能特性**
> 	- 本地图片自动上传图床
> 		- 在编辑笔记时，自动将本地图片上传到图床，并更新图片链接。
> 		- 支持将已插入的本地图片链接转换为图床地址。
> 	- 冲突解决
> 		- 当笔记在多个设备上编辑时，支持手动对比冲突，选择正确的版本。
> 	- 大文件上传
> 		- 支持将 PDF 等大文件上传到对象存储，避免占用数据库空间。

#### 更新

[Timeline View v1.3.0](https://github.com/b-camphart/timeline-view/releases/tag/1.3.0) By _b.camphart_

> - **新功能**
> 	- **双击创建笔记**
> 	    - 双时间轴上击任意位置快速创建新笔记。新笔记会根据点击位置自动采用合适的属性值，简化工作流程。
> 	    - ![create-note-example|650](https://cdn.pkmer.cn/images/create-note-example.gif!pkmer)
> 	- **拖放编辑笔记**
> 	    - 通过在时间轴上拖放笔记轻松重新排列。支持多选，可以一次调整多个笔记的属性。
> 		      - 移动单个笔记:
> 			      - ![move-single-note-example|650](https://cdn.pkmer.cn/images/move-single-note-example.gif!pkmer)
> 		      - 移动多个笔记:
> 			      - ![move-multiple-notes-example|650](https://cdn.pkmer.cn/images/move-multiple-notes-example.gif!pkmer)
> 	- **过滤器和分组增强**
> 		- 可以在插件设置中设置默认排序属性、过滤器和分组，方便从一开始就组织笔记。
> 	- **日常使用改进**
> 		- **时间轴右键菜单：** 新增右键菜单选项，提供对常用操作的快捷访问，减少杂乱。
> 		- **背景行：** 改进了视觉效果以实现更好的笔记分离度和清晰度。
> 		- **只读切换：** 在编辑模式和只读模式之间切换，以防止意外更改。
> 		- **帮助按钮：** 新增帮助按钮，通过导航窗口提供应用内帮助。

[Note Toolbar v1.10.5](https://github.com/chrisgurney/obsidian-note-toolbar/releases/tag/1.10.5) By _Chris Gurney_

> - **新功能**
> 	- 添加了编辑器宽度和内容宽度样式，以扩展工具栏的宽度，使其适应编辑器或内容的全宽度。
> 		- 该样式仅在工具栏处于顶部/固定位置时有效。
> 		- 默认样式为内容宽度。

[Quiz Generator v2.0.1](https://github.com/ECuiDev/obsidian-quiz-generator/releases/tag/2.0.1) By _Edward Cui_

> - **新功能**
> 	- 选择所有适用的问题
> 	- 填空题
> 	- 配对题
> 	- 长答案题
> 	- 查看已添加笔记的内容
> 	- 查看已添加文件夹的内容
> 	- 控制添加文件夹时是否包括子文件夹中的笔记
> 	- 自定义 API 主机
> - **增强功能**
> 	- 重新设计了多项选择题，支持最多 26 个选项
> 	- 添加 GPT-4o Mini 和 GPT-4o 模型
> 	- 改进了回答问题时的反馈系统
> 	- 重新设计了简答题，以确保生成的答案确实简短
> 	- 更新保存位置设置以建议文件夹
> 	- 将保存格式设置合并为一个下拉菜单
> 	- 改进了生成设置的用户界面
> 	- 更新了用户界面的间距和颜色，使其在不同主题下更为协调
> 	- 添加了对瑞典语、波斯语和希腊语的支持
> 	- 重新设计了问题解析器，对格式错误更加宽容
> - **漏洞修复**
> 	- 修复了在使用某些主题时文本被切断的错误
> 	- 修复了在 UI 打开时禁用键盘快捷键以及在移动设备上文本被切断的错误
> 	- 修复了包含 LaTeX 的笔记生成无效或缺少 LaTeX 的错误
> 	- 修复了在没有前言时，被三个连字符括起来的笔记文本会被删除的问题
> - **重大变更**
> 	- 更改了对错题的注释和间隔重复格式

[Tasks v7.9.0](https://github.com/obsidian-tasks-group/obsidian-tasks/releases/tag/7.9.0) By _Clare Macrae and llyas Landikov (created by Martin Schenck)_

> - **功能**
>   - 添加 `hide on completion` 和 `show on completion` 选项
>     - 文档参考：[布局](https://publish.obsidian.md/tasks/Queries/Layout)。
>   - 添加对 Border 主题的一键支持
>     - 文档参考：[Border 主题](https://publish.obsidian.md/tasks/Reference/Status+Collections/Border+Theme)。

[Iconic v1.0.11](https://github.com/gfxholo/iconic/releases/tag/1.0.11) By _Holo_

> UI 全新升级！菜单界面得到了改进，使选项卡和功能区图标更易于管理，并增强了拖动项目时显示的“幽灵”工具提示。
> - **新功能：**
> 	- 自定义图标现在会反映在以下菜单中：
> 		- **功能区上下文菜单**
> 		- **功能区设置**
> 		- **选项卡切换器**
> 	- 这些项目在拖动时现在会显示其自定义图标：
> 		- **选项卡**
> 		- **文件**
> 		- **书签**
> - **错误修复：**
> 	- **Markdown 选项卡：** 如果设置了颜色，现在会显示其选项卡图标。

![Weekly-2024-08-23-Pasted%20image%2020240824221049.png!pkmer](https://cdn.pkmer.cn/images/Weekly-2024-08-23-Pasted%20image%2020240824221049.png!pkmer)

> [!Warning] 声明
> 本栏目致力于为广大 Obsidian 中文用户汇总全面的官方资讯与插件、外观动态。为了保持信息的全面性，我们的**收录并不等同于推荐**，还请各位用户知悉并理解，根据自身需求进行判断和选择。

