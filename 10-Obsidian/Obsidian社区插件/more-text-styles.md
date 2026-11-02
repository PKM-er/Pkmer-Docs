---
uid: 1793625616953000
title: "Obsidian 插件：More Text Styles"
tags: ["样式与美化", "编辑工具", "移动端优化", "快捷键", "obsidian插件"]
description: "Add underline, bigger/smaller font, center, and same-file heading/block links to the editor. Each feature can be enabled separately and shown in the mobile toolbar; hotkeys are configurable with sensible defaults. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：More Text Styles

> [!Note] 插件名片
> - 插件名称：More Text Styles
> - 插件作者：池心砚
> - 插件说明：Add underline, bigger/smaller font, center, and same-file heading/block links to the editor. Each feature can be enabled separately and shown in the mobile toolbar; hotkeys are configurable with sensible defaults. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['样式与美化', '编辑工具', '移动端优化', '快捷键', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/chi-xin-yan/obsidian_more-text-styles)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?more-text-styles)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/chi-xin-yan/obsidian_more-text-styles/master/README.md)



## 概述

More Text Styles 旨在弥补 Obsidian 原生 Markdown 语法在视觉排版上的不足，提供下划线、字号调整、居中对齐以及文内快速链接等增强功能。该插件的核心逻辑采用“开关式”设计，用户只需选中文字并执行命令即可应用样式，再次执行同一命令则自动移除格式，无需手动删除 HTML 标签或链接代码，极大简化了编辑流程。

在日常写作中，你可以利用下划线功能突出关键术语，弥补 Markdown 缺乏原生下划线语法的缺陷；或者通过放大/缩小字号命令，快速调整引用或备注文字的视觉层级。此外，当需要在长文档中频繁跳转时，选中特定标题或带有 `^ID` 标记的行，执行对应命令即可生成精确的文内跳转链接，实现类似目录的快速导航。

相比其他排版插件，More Text Styles 的灵活性在于其模块化设置。每个功能均可独立启用或禁用，未启用的功能不会占用命令面板或快捷键资源。特别值得一提的是其移动端适配能力，插件能自动在移动端工具栏注入对应按钮，且在 Obsidian 重建工具栏后具备自我修复机制，确保按钮不丢失，这对移动设备用户非常友好。

需要注意的是，下划线、字号调整和居中功能均依赖内联 HTML 标签实现，若你的笔记主要面向纯 Markdown 渲染环境或需要严格遵循标准 Markdown 规范，这些样式可能无法正确显示。此外，该插件侧重于单篇笔记内的样式增强与跳转，若你需要跨笔记的复杂样式管理或全局主题定制，它可能无法满足需求。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


