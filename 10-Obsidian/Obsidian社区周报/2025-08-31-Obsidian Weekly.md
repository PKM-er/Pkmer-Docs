---
uid: 20250902015628
title: Obsidian Weekly 2025-08-31：Obsidian v1.9.12 公共版现已发布！AI OCR 助力手写笔记电子化
tags: [Weekly, Obsidian]
description: Obsidian Weekly 2025-08-31：Obsidian v1.9.12 公共版现已发布！AI OCR 助力手写笔记电子化
author: 淡水鱼,PKMer
type: other
draft: false
editable: false
modified: 20250902015805
---

# Obsidian Weekly 2025-08-31：Obsidian v1.9.12 公共版现已发布！AI OCR 助力手写笔记电子化

> [!Abstract]
> **统计时间**：2025-08-24 21:00 ~ 2025-08-31 21:00
> **声明**：本栏目灵感来源于 _Eleanor Konik_ 女士于 2021 年 4 月至 2023 年 6 月期间写作发表的一系列 [Obsidian Roundup](https://www.eleanorkonik.com/tag/roundup/) 文章，如有兴趣可关注原作者的个人网站 [Obsidian Iceberg](https://www.eleanorkonik.com/)；内容来源于 Obsidian 官方 Discord 频道和相应项目在 Github 或其独立网站上的信息。描述中可能存在基于个人理解进行的修改，如有错谬欢迎指正。感谢 Obsidian 团队为我们带来如此优秀的软件。

## 官方资讯

### Obsidian v1.9.12 公共版现已发布

#### 桌面版

##### 亮点功能

本次更新推出全新的 Obsidian Sync 迁移助手。此工具支持对远程同步库执行迁移操作（如加密升级），未来还将支持区域切换功能。[了解更多](https://help.obsidian.md/sync/migrate)

为维护最高安全标准，Obsidian 会定期升级同步加密方案。若检测到可用加密升级，您将在**设置 → 同步**中看到 " 升级库加密 " 选项。

##### 改进

- 新增已知问题插件检测机制（针对与 Obsidian 1.9 版本存在兼容性问题的插件）：
    - Commander v0.5.3 曾导致移动端工具栏占据整个屏幕（最新版已修复，请及时更新插件）
    - Image Toolkit 插件会影响 Obsidian 菜单显示（待插件更新后可重新启用）
- 大幅提升搜索视图性能

##### 问题修复

- 数据库：修复重命名当前视图后界面未刷新问题
- 数据库：修复 `file.tags.contains()` 无法匹配父级标签问题（例如搜索 "a" 时应匹配 `a/b`）
- 属性：修复本地属性视图右键菜单立即隐藏问题

##### 开发者更新

- 安装程序升级至 Electron v37.3.1（需下载 [最新安装包](https://obsidian.md/)）

#### 移动版

- 包含桌面版 v1.9.12 所有新功能与问题修复

## 插件新闻

### 社区插件



#### 新增

[AI Image OCR](https://obsidian.md/plugins?id=ai-image-ocr) By _Rootiest_

> 使用 AI 视觉模型从图像中提取文本

![Weekly-2025-08-31-Pasted image 20250901170823|650](https://cdn.pkmer.cn/images/Weekly-2025-08-31-Pasted%20image%2020250901170823.png!pkmer)

#### 更新

[Open Tab Settings v1.4.0](https://github.com/jesse-r-s-hines/obsidian-open-tab-settings/releases/tag/1.4.0) By _jesse-r-s-hines_

> - 新增在启动时打开新标签页的选项

[Markdown Timeline v0.0.6](https://github.com/recklyss/markdown-timeline/releases/tag/0.0.6) By _Jiaheng Zhang_

> - 样式：移动端响应式重构
> - 重构：新增 JS 文档注释

[Excalidraw v2.15.1](https://github.com/zsviczian/obsidian-excalidraw-plugin/releases/tag/2.15.1) By _Zsolt Viczian_

> - **修复**
> 	- PDF 功能改进
> 	    - 修复嵌入式 PDF 无法滚动的问题
> 	    - 解决嵌入式 PDF 页面模糊（像素化）问题
> 	    - 嵌入式 PDF 现准确遵循 `excalidraw-embeddable-theme` 文档属性
> 	        - auto: 跟随 Excalidraw 主题（不受 Obsidian 主题影响）
> 	        - default: 跟随 Obsidian 主题（不受 Excalidraw 主题影响）
> 	        - dark: 始终以深色模式显示 PDF
> 	        - light: 始终以浅色模式显示 PDF
> 	    - 新增嵌入菜单按钮：
> 	        - 快照：将当前活动页面截图插入场景
> 	        - 书签：将嵌入链接更新至当前页面
> 	- 修复粘贴超大图像时触发错误导致场景丢弃的问题
> 	- 场景加载时不再自动播放本地 URI 视频
> 	- 修复便签元素创建链接时的错误
> 	- 区域链接嵌入现可隐藏区域内对象内容
> 	- 修复 Obsidian Mobile 1.9.10 中嵌入元素导致黑/白屏（无活动视图）问题（需重新选择 Excalidraw 页面恢复）
> 	- 恢复移动设备嵌入式网页滚动功能
> - **新增**
> 	- " 插入任意文件 " 功能现支持音频文件
> 	- " 缩放与平移 " 设置新增选项：右键平移画布（Miro 风格）- 右键拖动平移，按 'm' 键唤出上下文菜单（文本编辑时禁用）
> 	- 主工具栏 " 插入图像 " 现显示下拉选项：从系统插入/从库插入/插入卡片/插入 LaTeX
> - **弃用**
> 	- 因使用率过低，从命令面板和 Obsidian 工具菜单移除 " 切换 RAW 模式 "。仍可通过在笔记 YAML frontmatter 中添加 `excalidraw-plugin: raw` 启用
> - **ExcalidrawAutomate 新增功能**

## 外观

[**Nota Limonada Light** Theme](https://github.com/mdelobelle/obsidian_supercharged_links) By _CrisHood_

![Weekly-2025-08-31-Pasted image 20250901175358|650](https://cdn.pkmer.cn/images/Weekly-2025-08-31-Pasted%20image%2020250901175358.png!pkmer)

> 带有 CrisHood DS 的简单亮色主题。

[**Everforest Spruce** Theme](https://github.com/vupdivup/obsidian-everforest-spruce) By _vupdivup_

![Weekly-2025-08-31-Pasted image 20250901123018|650](https://cdn.pkmer.cn/images/Weekly-2025-08-31-Pasted%20image%2020250901123018.png!pkmer)

> 基于 [Sainnhe Park](https://github.com/sainnhe) 所创 [Everforest](https://github.com/sainnhe/everforest) 主题的 Obsidian 移植版本，针对现有衍生版本推出的精简替代方案。通过极简风格与色彩强调实现视觉美学与操作效率的融合。

## PKM 相关知识推荐

> [!INFO]
> 欢迎收藏 [PKMer 导航页](https://pkmer.cn/link/)，一键直通 PKMer 各社交平台账号，与热爱分享与知识管理的同好们交流，第一时间获取行业新鲜资讯！

#### [十万个Bases用例之：动态显示文件夹内笔记](https://www.xiaohongshu.com/discovery/item/68b1ba2b000000001b03477e?source=webshare&xhsshare=pc_web&xsec_token=AB0dqkDb3XPlca6dJ7ZQSdLjqCS6D8B_YDyhqT6uXgGhs=&xsec_source=pc_share)

> 动态显示当前聚焦的笔记的文件夹中的其他笔记文件。

![250819_Bases基础用例：显示同文件夹内的笔记-img-250819_103658.webp](https://cdn.pkmer.cn/original/1X/2c6e2c384d285c2f3d5e82777958a5c4a71cf60b.webp)

### [对OB新手的核心启示](https://mp.weixin.qq.com/s/tZIRviAiuFn5PE1zaP5mUw)

> 用了 2 年半 Obsidian 并且想要分享一些非常核心的“原则”。 来自 Moy 佬的经验，你可以不遵守，但他个人认为它们非常有用，并且有助于快速熟悉和上手这个软件。
