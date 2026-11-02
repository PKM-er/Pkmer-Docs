---
uid: 1793625612083000
title: "Obsidian 插件：Dewey Navigator"
tags: ["导航与状态栏", "文件管理", "效率工具", "obsidian插件"]
description: "Organize notes into a navigable sidebar hierarchy and live outlines using YAML Dewey Decimal properties (dwno). - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Dewey Navigator

> [!Note] 插件名片
> - 插件名称：Dewey Navigator
> - 插件作者：sk
> - 插件说明：Organize notes into a navigable sidebar hierarchy and live outlines using YAML Dewey Decimal properties (dwno). - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['导航与状态栏', '文件管理', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/skc-coder/dewey-navigator)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?dewey-navigator)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/skc-coder/dewey-navigator/master/README.md)



## 概述

Dewey Navigator 通过解析笔记 YAML 头部的 `dwno` 属性，将零散的 Markdown 文件转化为具有严格层级结构的导航体系。它利用点分十进制数字（如 `00.01.03`）定义笔记在知识树中的位置，自动生成侧边栏层级、章节索引及实时大纲。这种机制让笔记不再依赖文件夹结构，而是通过逻辑编号实现全局有序，核心在于将线性阅读体验与树状知识管理相结合，帮助用户在复杂知识库中快速定位当前内容及其上下文关系。

想象你正在整理一套计算机科学教程，可以将“数据库”设为 `00.01.03`，其下的“关系模型”设为 `00.01.03.01`。当你打开某篇关于“规范化”的笔记时，侧边栏会立即显示该笔记在章节中的位置，并提供“上一篇”和“下一篇”按钮，让你能按编号顺序流畅阅读。同时，侧边栏的大纲部分会高亮你当前正在阅读的标题，即使笔记很长，也能清晰知晓自己在哪一节，无需手动滚动查找。

相比其他仅基于文件夹或标签的导航插件，Dewey Navigator 的特色在于其无限深度的层级支持和灵活的视图定制。它允许用户通过指定前缀和深度创建自定义侧边栏区块，并支持隐藏特定编号（如 `99`）的笔记，保持界面整洁。此外，它具备“书籍预设”功能，能自动聚合同一章节或主题下的所有笔记，生成类似书籍目录的索引，这对于构建系统化课程或长篇文档尤为实用，且配置可通过 JSON 文件备份，便于迁移。

使用前需注意，该插件强依赖 `dwno` 属性，若笔记缺少此字段，虽仍显示大纲，但无法参与层级导航和前后跳转，因此需确保所有参与管理的笔记都规范填写了该属性。它不适合那些偏好自由流动、无固定结构或仅依赖双向链接进行知识关联的用户。如果你的笔记体系高度依赖文件夹物理结构，或不需要严格的线性阅读顺序，此插件可能显得过于刚性。此外，它主要服务于结构化内容，对于碎片化、非线性的灵感记录支持有限。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


