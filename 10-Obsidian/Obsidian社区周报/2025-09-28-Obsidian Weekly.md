---
uid: 20250929233856
title: Obsidian Weekly 2025-09-28：Obsidian v1.9.14 内测版已发布
tags: [Weekly, Obsidian]
description: Obsidian Weekly 2025-09-28：Obsidian v1.9.14 内测版已发布
author: 淡水鱼,PKMer
type: other
draft: false
editable: false
modified: 20250929233943
---

# Obsidian Weekly 2025-09-28：Obsidian v1.9.14 内测版已发布

> [!Abstract]
> **统计时间**：2025-09-21 21:00 ~ 2025-09-28 21:00
> **声明**：本栏目灵感来源于 _Eleanor Konik_ 女士于 2021 年 4 月至 2023 年 6 月期间写作发表的一系列 [Obsidian Roundup](https://www.eleanorkonik.com/tag/roundup/) 文章，如有兴趣可关注原作者的个人网站 [Obsidian Iceberg](https://www.eleanorkonik.com/)；内容来源于 Obsidian 官方 Discord 频道和相应项目在 Github 或其独立网站上的信息。描述中可能存在基于个人理解进行的修改，如有错谬欢迎指正。感谢 Obsidian 团队为我们带来如此优秀的软件。

## 官方资讯

### Obsidian v1.9.14 内测版已发布

#### 桌面版

##### 问题修复

- 桌面端：修复弹出窗口在应用退出后无法重新打开的问题
- 数据库：`file.hasTag('#tag')` 不再区分大小写，`file.hasTag('test')` 与 `file.hasTag('TEST')` 现在返回相同结果
- 数据库：`contains` 函数现已正确处理 [嵌套标签](https://help.obsidian.md/tags#Nested+tags)。例如 `tags.contains("A")` 现在可同时返回包含 `#A` 和 `#A/B` 的结果
- 数据库：在白板中嵌入 Base 文件时，使用 `this` 的公式现可正常运作
- 数据库：当 Base 未在侧边栏打开且未被嵌入时，使用 `this` 的公式现会正确解析为 null

#### 移动版

- 包含截至 Obsidian 桌面版 v1.9.14 的所有新功能与问题修复

##### 开发者更新

- 模态框默认不再固定于屏幕底部

## 插件新闻

### 社区插件

#### 更新

[BRAT v1.3.0](https://github.com/TfTHacker/obsidian42-brat/releases/tag/1.3.0) By _TfTHacker_

> - **新增功能**
> 	- 设置中增加 " 清除令牌 " 按钮
> 	- 允许用户强制安装不兼容的插件
> - **错误修复**
> 	- 为桌面端专用功能添加额外确认步骤
> 	- 修复选择 " 最新版本 " 的弹窗行为
> 	- 强制在所有情况下将插件添加到列表
> 	- 不再直接更新弹窗内的插件列表，统一改用 addBetaPluginToList 方法
> 	- 优化现有仓库未找到发布版本时的提示信息
> 	- 同步更新已安装插件的设置项

## 外观

[**Spy Terminal** Theme](https://github.com/IchiroFukuda/spy-terminal-theme) by _IchiroFukuda_

![Weekly-2025-09-28-Pasted image 20250929223957|650](https://cdn.pkmer.cn/images/Weekly-2025-09-28-Pasted%20image%2020250929223957.png!pkmer)

> 一款适用于 Obsidian 及其他 Markdown 编辑器的谍战电影风格终端主题。

[**Future** Theme](https://github.com/Bluemoondragon07/obsidian-future) by _Ha'ani Whitlock_

![Weekly-2025-09-28-Pasted image 20250929223517|650](https://cdn.pkmer.cn/images/Weekly-2025-09-28-Pasted%20image%2020250929223517.png!pkmer)

> 一款简约的未来主义主题，设计灵感源自 **Anytype** 笔记软件。

[**Poimandres Extended** Theme](https://github.com/bastiangx/poimandres.obsidian) by _bastiangx_

![Weekly-2025-09-28-Pasted image 20250929223419|650](https://cdn.pkmer.cn/images/Weekly-2025-09-28-Pasted%20image%2020250929223419.png!pkmer)

> Poimandres 是一款极简无边框深色主题，主要设计灵感源于 [blueberry](https://github.com/peymanslh/vscode-blueberry-dark-theme)。该主题着力于语义化表达而非色彩堆砌：错误、空值、抛出及删除操作均以红色标出，类型定义色调偏暗以突出代码主体，new 关键字采用绿色标注等。

[**Tyrone Neon** Theme](https://github.com/tyronejosee/tyrone-neon) by _tyronejosee_

![Weekly-2025-09-28-Pasted image 20250929223207|650](https://cdn.pkmer.cn/images/Weekly-2025-09-28-Pasted%20image%2020250929223207.png!pkmer)

> 一款具有现代感的 Obsidian 主题，融合充满活力的霓虹美学，提供简洁界面与可自定义强调色，适配您的个性化风格。

[**Vermilion** Theme](https://github.com/vigor-13/vermilion-theme) by _vigor-13_

![Weekly-2025-09-28-Pasted image 20250929223020|650](https://cdn.pkmer.cn/images/Weekly-2025-09-28-Pasted%20image%2020250929223020.png!pkmer)

> 一款深色 Obsidian 主题。

[**Arzaba** Theme](https://github.com/DarioArzaba/Obsidian-Theme-Arzaba) by _Dario Arzaba_

![Weekly-2025-09-28-Pasted image 20250929211021|650](https://cdn.pkmer.cn/images/Weekly-2025-09-28-Pasted%20image%2020250929211021.png!pkmer)

> 充满活力、色彩缤纷，不会分散注意力，提供简约、更清晰、更时尚的体验，专为长时间专注记笔记而设计。

## PKM 相关知识推荐

> [!INFO]
> 欢迎收藏 [PKMer 导航页](https://pkmer.cn/link/)，一键直通 PKMer 各社交平台账号，与热爱分享与知识管理的同好们交流，第一时间获取行业新鲜资讯！

### [为什么要自己管理时间属性（创建时间&修改时间）](https://mp.weixin.qq.com/s/GDVW1ABw4KjOmxotXLyCzw)

为什么要自己管理时间数据？这个时间数据能用来做什么？如何轻松实现时间数据管理？

如果您对这三个问题有所疑问，或许能在本文中找到答案。

### [Obsidian的CEO是怎么做笔记的？](https://mp.weixin.qq.com/s/hjSeECYErd0DR8GFpV3ZSA)

Ob 的现任 CEO Kepano 在自己的 How I use Obsidian 一文中，阐述了自己如何使用 Obsidian 的方法论，并分享了自己的模板库，值得每一位知识管理爱好者参考。

> [!Warning] 声明
> 本栏目致力于为广大 Obsidian 中文用户汇总全面的官方资讯与插件、外观动态。为了保持信息的全面性，我们的**收录并不等同于推荐**，还请各位用户知悉并理解，根据自身需求进行判断和选择。
