---
uid: 1793625615741000
title: "Obsidian 插件：Marginalius"
tags: ["界面优化", "样式与美化", "效率工具", "obsidian插件"]
description: "Show adaptive marginalia. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Marginalius

> [!Note] 插件名片
> - 插件名称：Marginalius
> - 插件作者：wlo2
> - 插件说明：Show adaptive marginalia. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['界面优化', '样式与美化', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/wlo2/Marginalius)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?marginalius)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/wlo2/Marginalius/master/README.md)



## 概述

Marginalius 专为解决 Obsidian 中侧边笔记排版僵硬的问题而设计，核心功能是提供自适应的 Tufte 或 Cornell 风格边注。你只需在正文中插入简单的标记，插件便会根据当前编辑窗口的宽度自动决定布局：在宽屏下，笔记优雅地停留在页面侧边空白处，呈现为无边框的柔和文字；当空间不足时，它们会自动变形为嵌入正文的小型“液态玻璃”盒子，确保阅读体验始终流畅且美观。

典型的使用场景包括撰写技术文档或学术笔记时，需要为关键概念添加补充说明。例如，在解释复杂代码逻辑时，你可以用 `%%> 注释内容 %%` 在左侧边栏添加背景知识，或在右侧用 `%%< 提示 %%` 放置相关参考链接。这种布局让主文本保持清晰，而辅助信息则像印刷品中的脚注一样自然存在，无需手动调整位置或担心格式错乱。

相比其他静态侧边栏插件，Marginalius 的最大特色在于其“智能变形”能力。它复用 Obsidian 原生的注释语法 `%% ... %%`，这意味着如果你禁用插件，笔记会自动退化为普通注释，不会留下任何破坏性的标记。此外，它支持系统级的无障碍设置，当开启“减少透明度”或“增加对比度”时，玻璃盒子会自动变为实心样式，兼顾了美观与可读性。

使用前需注意，该插件主要服务于视觉排版优化，不适合需要频繁编辑长段侧边笔记的场景，因为选中渲染后的笔记会切换回源码模式。另外，虽然它支持 Markdown 语法，但在 Live Preview 模式下，Callout 内部的笔记始终显示为盒子而非边注。如果你追求极致的极简主义，或者不需要这种动态布局效果，可能无需安装此插件。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


