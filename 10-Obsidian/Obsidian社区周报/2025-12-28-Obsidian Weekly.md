---
uid: 20251231164535
title: Obsidian Weekly 2025-12-28：Obsidian v1.11.2 内测版前瞻&记住光标位置及 Zotero 联动新方案
tags: [Weekly, Obsidian]
description: Obsidian Weekly 2025-12-28：Obsidian v1.11.2 内测版前瞻&记住光标位置及 Zotero 联动新方案
author: 淡水鱼,PKMer
type: other
draft: false
editable: false
modified: 20251231164712
---

# Obsidian Weekly 2025-12-28：Obsidian v1.11.2 内测版前瞻&记住光标位置及 Zotero 联动新方案

> [!Abstract]
> **统计时间**：2025-12-21 21:00 ~ 2025-12-28 21:00
> **声明**：本栏目灵感来源于 _Eleanor Konik_ 女士于 2021 年 4 月至 2023 年 6 月期间写作发表的一系列 [Obsidian Roundup](https://www.eleanorkonik.com/tag/roundup/) 文章，如有兴趣可关注原作者的个人网站 [Obsidian Iceberg](https://www.eleanorkonik.com/)；内容来源于 Obsidian 官方 Discord 频道和相应项目在 Github 或其独立网站上的信息。描述中可能存在基于个人理解进行的修改，如有错谬欢迎指正。感谢 Obsidian 团队为我们带来如此优秀的软件。

## 官方资讯

### Obsidian v1.11.2 内测版已发布！

#### 桌面版

##### 改进

- **URI**：`new`、`open` 和 `daily` URI 操作现在支持新的 `paneType` 参数。

| 参数                | 说明              |
| ----------------- | --------------- |
| `paneType=tab`    | 在新标签页中打开        |
| `paneType=split`  | 在新标签组中打开        |
| `paneType=window` | 在弹出窗口中打开（仅限桌面版） |

##### 问题修复

- 修复了“移动文件”选择器中未将库根目录 (`/`) 显示为有效目标的问题。
- 修复了“未找到插件更新”提示永不消失的错误。
- 修复了侧边栏标签按钮的轻微视觉回归问题。
- **图谱视图**：附件不再显示完整文件路径。
- **数据库**：修复了配置分组时列表视图虚拟化的问题；修复了滚动时分组不显示的问题。
- **每日笔记**：修复了当日历笔记格式包含文件夹路径时，“打开下一个每日笔记”和“打开上一个每日笔记”命令无效的问题。
- 修复了阅读模式下加粗链接的显示问题（例如 `**[[链接]]**`）。

#### 移动版

##### 改进

- 当导航栏隐藏时，从视图顶部向下滑动会触发下拉操作；点击视图顶部可使导航栏重新出现。
- **iOS**：“查看笔记”小组件现可渲染带有复选框的清单。
- 平板设备的侧边栏布局已更新。标签菜单和视图操作现显示在顶部，更接近桌面端体验。

##### 问题修复

- 修复将“默认打开的文件”设置为 Markdown 文件时失效的问题。
- 修复侧边栏中自定义视图底部渐隐效果的问题。
- 侧边栏标签切换器不再导致其下方内容发生位移。
- 同步：修复“防止休眠”设置在重启应用后无法保存的问题。
- iOS：修复向上滚动时滚动会突然停止的问题。
- iOS：修复小组件和应用快捷方式有时会报错“找不到日期格式化脚本”的问题。
- Android：双击切换到编辑模式不再干扰双击选中文本。

## 插件新闻

### 社区插件
 
#### 新增

[Tag Timer](https://obsidian.md/plugins?id=tag-timer) By _quantavil_

> 给标签添加计时器，并分析你在每个任务上花费的时间。

[TsumugiMark](https://obsidian.md/plugins?id=tsumugi-mark) By _mofukuru_

> 将标准 Markdown 编辑器切换为垂直显示，适用于撰写日文小说、剧本等文本。

[Last Edit Location](https://obsidian.md/plugins?id=last-edit-location) By _Kyoungdeuk_

> 打开笔记时将光标定位到最后一次编辑的位置，在多笔记环境下也能良好工作。

[TIPA Support](https://obsidian.md/plugins?id=tipa-support) By _Deniz Akdemir_

> 新增对 TIPA 音标注记的支持。
>> TIPA (TEX IPA) 是一套用于在 LATEX 中处理 IPA（国际音标）符号的系统。

[Deep Sit](https://obsidian.md/plugins?id=deep-sit) By _Ahmed Bassiouni_

> 一款专注于学习与研究的工具，通过集成 Zotero，实现对一手文献的引用与评阅。
> **注意：使用本插件时，必须确保 Zotero 已安装 Better BibTeX 插件且正在运行。**

![Weekly-2025-12-28-Pasted image 20251230233636|650](https://cdn.pkmer.cn/images/Weekly-2025-12-28-Pasted%20image%2020251230233636.png!pkmer)

![Weekly-2025-12-28-Pasted image 20251230233751|650](https://cdn.pkmer.cn/images/Weekly-2025-12-28-Pasted%20image%2020251230233751.png!pkmer)

[Transcription Audio](https://obsidian.md/plugins?id=transcription-audio) By _cha-yh_

> 将您的音频转换为 Obsidian 内的结构化 Markdown 笔记。本插件检测当前笔记中链接的音频文件，将其发送至 Gemini 进行转录和摘要，并将结果插回笔记。

[OCR Extractor](https://obsidian.md/plugins?id=ocr-extractor) By _Johnathan Ritzi_

> 从文档、图片等中提取文本，并以 Markdown 格式保存在你的笔记中。
> **该插件需要付费的 Mistral AI 账号。**

[Reading progress desktop](https://obsidian.md/plugins?id=reading-progress-desktop) By _qian-shen_

> 在状态栏生成三个组件：**全屏按钮**、**进度条**、**视图类型标志**
> 目前支持的视图类型有：markdown、pdf、search、thino、bases，当浏览其他视图的时候进度条颜色会变成灰色，即不生效状态。
> 可以调整进度条的长度、进度条动画、以及关闭其余的两个组件。
> **此插件只适用于桌面端，请勿将其使用在移动端**。

![Weekly-2025-12-28-Pasted image 20251230231238|650](https://cdn.pkmer.cn/images/Weekly-2025-12-28-Pasted%20image%2020251230231238.png!pkmer)

[AI Companion](https://obsidian.md/plugins?id=ai-companion) By _Kowshik_

> 在笔记中可通过 `/ai` 命令访问 AI 助手，支持 OpenAI 集成。

#### 更新

[Chronos Timeline v3.0.0](https://github.com/clairefro/obsidian-plugin-chronos/releases/tag/3.0.0) By _Claire Froelich_

> 现可选择 Gemini 来生成 AI 时间线（有免费额度）
> - 支持从多种 AI 提供商中选择（当前：OpenAI、Gemini）
> - 支持 OpenAI 的 gpt-5 系列模型（但不推荐——`gpt-4o-mini` 依然便宜、快速且有效）

[BRAT v1.4.0](https://github.com/TfTHacker/obsidian42-brat/releases/tag/1.4.0) By _TfTHacker_

> - **小型功能更新**
> 	- 插件和主题列表现在可通过搜索框进行筛选
> - **更新内容**
> 	- 功能：为插件和主题列表添加筛选功能
> 	- 修复：修正设置页中的拼写错误

### PKMer 出品

> [!INFO] 
> **PKMer**（[PKMer.cn](https://pkmer.cn/)、[PKMer.net](https://pkmer.net/)）旨在打造东半球强大的知识管理社区。Personal Knowledge Management (PKM) + "er"，其中 "er" 表示人，专注、喜爱个人知识管理工作、追求效率的人们，都可以划入这个行列，希望社区凝聚更多这样的人。

#### Thino 更新至 [v2.8.14](https://github.com/Quorafind/Obsidian-Thino/releases/tag/2.8.14)

- Thino 时间解析问题 - 现在只识别列表项标识符后紧跟的第一个时间作为起始值，内容中的时间戳不会影响解析
- 文件属性标签过滤问题（MULTI 模式） - 文件 frontmatter 中的标签应该可以正确显示在侧边栏的标签过滤列表中
- Gallery 图片格式支持 - 修复了 wepg → webp 拼写错误，改进了正则表达式以支持中文文件名，修复了 Markdown 图片的分组索引
- 修复 Thino 无法滚动的问题

## PKM 相关知识推荐

> [!INFO] 
> 欢迎收藏 [PKMer 导航页](https://pkmer.cn/link/)，一键直通 PKMer 各社交平台账号，与热爱分享与知识管理的同好们交流，第一时间获取行业新鲜资讯！

### [用 QuickAdd 实现跳转到指定标题]( https://pkmer.cn/show/20251227172849 )

### [用 QuickAdd 实现正则替换]( https://pkmer.cn/show/20251224170436 )

两篇活用 QuickAdd 插件快捷实现高级功能的教程，均提供成品代码，操作极简，欢迎有相关需求的用户套用参考。


> [!Warning] 声明
> 本栏目致力于为广大 Obsidian 中文用户汇总全面的官方资讯与插件、外观动态。为了保持信息的全面性，我们的**收录并不等同于推荐**，还请各位用户知悉并理解，根据自身需求进行判断和选择。
