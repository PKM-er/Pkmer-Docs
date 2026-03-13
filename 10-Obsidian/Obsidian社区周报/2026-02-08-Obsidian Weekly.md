---
uid: 20260210004406
title: Obsidian Weekly 2026-02-08：Obsidian 正式更新至 v1.11.7！移动端体验丝滑加倍！
tags: [Weekly, Obsidian]
description: Obsidian Weekly 2026-02-08：Obsidian 正式更新至 v1.11.7！移动端体验丝滑加倍！
author: 淡水鱼,PKMer
type: other
draft: false
editable: false
modified: 20260210004437
---

# Obsidian Weekly 2026-02-08：Obsidian 正式更新至 v1.11.7！移动端体验丝滑加倍

> [!Abstract]
> **统计时间**：2026-02-01 21:00 ~ 2026-02-08 21:00
> **声明**：本栏目灵感来源于 _Eleanor Konik_ 女士于 2021 年 4 月至 2023 年 6 月期间写作发表的一系列 [Obsidian Roundup](https://www.eleanorkonik.com/tag/roundup/) 文章，如有兴趣可关注原作者的个人网站 [Obsidian Iceberg](https://www.eleanorkonik.com/)；内容来源于 Obsidian 官方 Discord 频道和相应项目在 Github 或其独立网站上的信息。描述中可能存在基于个人理解进行的修改，如有错谬欢迎指正。感谢 Obsidian 团队为我们带来如此优秀的软件。

## 官方资讯

### Obsidian v1.11.7 公共版现已发布

#### 桌面端

##### 已改进

* 帮助窗口和库选择器窗口已更新，与应用设置中的新设计保持一致。
* **数据库**：表格单元格右键菜单现在显示“复制”和“粘贴”菜单项。
* **设置**：侧边栏不再在社区插件旁显示图标。
* 新增 `choose-vault` [URI 操作](https://help.obsidian.md/Extending+Obsidian/Obsidian+URI)，用于打开库切换器。

##### 已修复

* 恢复了在链接文本中包含文件夹时插入链接的默认显示文本（例如，`[[a/b/file]]` 将自动插入为 `[[a/b/file|file]]`）。
* **数据库**：修复了右键单击表格选区会使单元格获得焦点（并隐藏选区），而不是显示选区菜单的问题。
* 修复了点击嵌入内容附近时，笔记有时会从阅读模式切换到编辑模式的问题。

#### 移动端

##### 已改进

* 新的**外观**设置（默认启用）：
  * **全屏**：阅读时自动隐藏界面元素。
  * **浮动导航**：导航按钮浮动在内容上方，而不是固定定位。
  * **滑动侧边栏**：可选择让侧边栏滑到内容侧面，而不是浮动在上方。
* 启用全屏模式后，在笔记中滚动时现在会隐藏手机的状态栏。
* 新的应用快捷操作（长按应用图标出现的菜单）：
  * **“管理库…”**：关闭当前库并跳转到库选择屏幕。
  * **“今天”**：打开当天的每日笔记。仅在启用每日笔记插件时可用。
  * **“新建笔记”**：在活动库中创建一个新笔记。
* 库切换器新增“在受限模式下打开库”选项。此选项将打开库但不激活任何插件。如果您的库因插件问题无法打开，可使用此选项进行调试。
* 改进了钥匙串设置的布局。
* **钥匙串**：禁用了“密钥 ID”输入框的自动首字母大写功能。

##### 已修复

* **Android**：修复了在没有 Google Play 服务的设备上无法打开应用的问题。
* 修复了标签页切换器未更新以反映当前活动标签页的问题。
* 修复了在某些旧设备上标题栏按钮和工具栏位置不正确的问题。
* 修复了在库中重命名文件后，右侧边栏中的文件名会显示错误文本的问题。
* 修复了应用首次加载时，最右侧导航栏图标会短暂闪烁的问题。
* **iOS**：修复了文件管理器和大纲视图中第一次点击或长按无效的问题。
* **iOS**：修复了触摸位置与链接重叠时滚动被中断的问题。
* **iOS**：修复了调试屏幕（“显示调试信息”）上文字显示非常模糊的问题。
* **iOS**：修复了从“新建笔记”小组件选择库时出现的错误。
* **iPad**：修复了 `Command + ,` 无法打开应用内设置的问题。
* **iPad**：修复了使用“浮动键盘”选项时移动端工具栏不显示的问题。
* **iPad**：修复了文件管理器右键菜单显示过高并与状态栏重叠的问题。

###### 数据库

* 修复了列表属性值被过早截断的问题。
* 修复了编辑时数据库视图底部出现多余空间的问题。
* 修复了在数据库工具栏内编辑项目时出现额外空间的问题。

## 插件新闻

### 社区插件



#### 新增

[Nova](https://obsidian.md/plugins?id=nova) By _Shawn Duggan_

> AI 写作助手，支持文本就地编辑。选中任意文本，应用转换指令，即可通过实时流式输出观看其内容变化。无需聊天窗口，无需复制粘贴。

[GLSL Viewer](https://obsidian.md/plugins?id=glsl-viewer) By _iY0Yi_

> 在 Obsidian 上预览 GLSL 着色器。

![Weekly-2006-02-08-Pasted image 20260209234947|650](https://cdn.pkmer.cn/images/Weekly-2006-02-08-Pasted%20image%2020260209234947.png!pkmer)

[Memories](https://obsidian.md/plugins?id=memories) By _DIMFLIX_

> 将你的媒体文件转化为精美的交互式画廊，并直接在笔记内部呈现。支持全屏模式、幻灯片播放和高级导航功能，可查看图片、视频和音频文件。

![Weekly-2006-02-08-Pasted image 20260209234735|650](https://cdn.pkmer.cn/images/Weekly-2006-02-08-Pasted%20image%2020260209234735.png!pkmer)

![Weekly-2006-02-08-Pasted image 20260209234842|650](https://cdn.pkmer.cn/images/Weekly-2006-02-08-Pasted%20image%2020260209234842.png!pkmer)

[Handlebars Dynamic Templating](https://obsidian.md/plugins?id=handlebars-dynamic) By _Hide_D_

> Handlebars 动态模板。可定义模板文件，并通过 hb 代码块动态调用。同时支持模板递归。

[Dictionary Lexicon](https://obsidian.md/plugins?id=lexicon-dictionary) By _Alvin_

> 一款功能强大的 Obsidian 词典插件，提供 Lexicon 词典定义、词汇管理和间隔重复抽认卡，帮助您提高词汇量。

![Weekly-2006-02-08-Pasted image 20260209234419|650](https://cdn.pkmer.cn/images/Weekly-2006-02-08-Pasted%20image%2020260209234419.png!pkmer)

[Inline Local Graph](https://obsidian.md/plugins?id=inline-local-graph) By _TKOxff_

> 在笔记内容底部直接显示当前笔记的自定义 `local graph` 。充分利用笔记底部的未使用空间！

![Weekly-2006-02-08-Pasted image 20260209234419|650](https://cdn.pkmer.cn/images/Weekly-2006-02-08-Pasted%20image%2020260209234419.png!pkmer)

#### 更新

[CSV Lite v1.7.0](https://github.com/LIUBINfighter/csv-lite/releases/tag/1.7.0) By _Jay Bridge_

> 功能：添加创建新 CSV 文件的功能并增强 fi 的用户界面

## 外观

[**Minimal-Edge** Theme](https://github.com/elhariss/Obsidian-Minimal-Edge) By _elhariss_

![Weekly-2006-02-08-Pasted image 20260209231502|650](https://cdn.pkmer.cn/images/Weekly-2006-02-08-Pasted%20image%2020260209231502.png!pkmer)

> 简洁时尚的 Obsidian 主题，专为欣赏简洁线条和专注工作空间的用户而设计。

[**Pale** Theme](https://github.com/elhariss/obsidian-Pale) By _elhariss_

![Weekly-2006-02-08-Pasted image 20260209231113|650](https://cdn.pkmer.cn/images/Weekly-2006-02-08-Pasted%20image%2020260209231113.png!pkmer)

> 此主题采用简洁优雅的布局，旨在为您打造舒适美观的工作空间。

> [!Warning] 声明
> 本栏目致力于为广大 Obsidian 中文用户汇总全面的官方资讯与插件、外观动态。为了保持信息的全面性，我们的**收录并不等同于推荐**，还请各位用户知悉并理解，根据自身需求进行判断和选择。
