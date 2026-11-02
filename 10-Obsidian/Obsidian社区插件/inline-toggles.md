---
uid: 1793625614262000
title: "Obsidian 插件：Inline Toggles"
tags: ["编辑工具", "文字处理", "效率工具", "obsidian插件"]
description: "Create reliable inline toggles that save their state directly in Markdown. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Inline Toggles

> [!Note] 插件名片
> - 插件名称：Inline Toggles
> - 插件作者：n1ktra
> - 插件说明：Create reliable inline toggles that save their state directly in Markdown. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['编辑工具', '文字处理', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/n1ktra/obsidian-inline-toggles)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?inline-toggles)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/n1ktra/obsidian-inline-toggles/master/README.md)



## 概述

Inline Toggles 将 Notion 风格的折叠区块引入 Obsidian，核心在于让 Markdown 文件直接保存折叠状态。它通过在文本中嵌入特定标记（如 `%%⏷%%`），使笔记在桌面端和移动端同步时，视图状态保持一致。你无需依赖复杂的插件逻辑或外部数据库，仅凭纯文本标记即可实现内容的展开与收起，确保笔记在任何设备上打开时，看到的结构都与你上次编辑时完全相同。

想象你在整理一份长篇技术文档，其中包含多个代码示例或详细步骤。使用 Inline Toggles，你可以将冗长的代码块折叠起来，只保留标题行，从而保持页面整洁。当需要查看细节时，点击图标即可瞬间展开。另一个场景是管理个人待办事项，你可以将已完成的任务折叠隐藏，只关注当前待办项，这种交互方式比传统的引用块更流畅，且不会因编辑内容而强制切换视图模式。

与 Obsidian 原生的 Callout 相比，Inline Toggles 最大的优势在于“无语法负担”和“状态持久化”。你不需要在每一行前添加 `>` 符号，只需正常书写或缩进即可。此外，它支持高度自定义，你可以修改占位符符号，并通过 CSS 属性自由调整背景色、边框和文字颜色，甚至应用任意有效的 CSS 样式。这种灵活性允许你打造符合个人审美的笔记界面，同时避免了布局跳动，实现了“所见即所得”的编辑体验。

使用前请注意，该插件提供了“迁移整个库”和“移除所有折叠”的功能，这些操作会批量修改文件，务必在执行前备份你的 Vault。它不适合那些需要复杂嵌套逻辑或依赖外部数据库存储状态的场景，因为它的状态完全依赖于文件内的文本标记。如果你追求极致的纯文本兼容性，或者不需要跨设备同步视图状态，可能不需要此插件。但对于希望获得类似 Notion 体验、且重视笔记状态一致性的用户来说，这是一个轻量且可靠的解决方案。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


