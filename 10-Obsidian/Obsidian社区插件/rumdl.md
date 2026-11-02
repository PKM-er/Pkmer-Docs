---
uid: 1793625620910000
title: "Obsidian 插件：rumdl"
tags: ["编辑工具", "文字处理", "效率工具", "obsidian插件"]
description: "Lint markdown files with rumdl - a fast markdown linter. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：rumdl

> [!Note] 插件名片
> - 插件名称：rumdl
> - 插件作者：rvben
> - 插件说明：Lint markdown files with rumdl - a fast markdown linter. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['编辑工具', '文字处理', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/rvben/obsidian-rumdl)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?rumdl)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/rvben/obsidian-rumdl/master/README.md)



## 概述

rumdl 是一款基于 Rust 编译为 WebAssembly 的快速 Markdown 语法检查工具，旨在解决笔记格式混乱的问题。它提供实时诊断功能，在你输入时立即显示行内问题，并支持通过悬停提示一键修复错误。此外，插件具备保存时自动格式化功能，能自动修正所有检测到的问题，确保笔记风格统一。状态栏会实时显示问题数量，点击即可查看详细列表，让你随时掌握文档的规范程度。

想象一下，当你撰写长篇技术文档时，标题层级跳跃或列表缩进不一致往往难以察觉。rumdl 会在你打字时即时标记这些错误，你只需鼠标悬停在下划线文本上，点击“修复”即可自动调整格式。另一个场景是团队协作，通过配置 `.rumdl.toml` 文件，你可以设定统一的行宽和样式偏好，确保所有成员提交的笔记都符合团队规范，无需手动反复检查。

与同类插件相比，rumdl 的核心优势在于其对 Obsidian 特有语法的深度适配。它自动识别标签、Callouts、高亮、注释、Dataview 字段及 Templater 代码等，避免将这些合法语法误报为错误。这种“Obsidian 风味”支持使得检查过程更加精准，减少了误报干扰。同时，它支持通过 `extends` 继承基础配置，方便在多库间共享规则，且默认禁用了针对笔记场景不合理的规则（如首行标题检查），体验更加人性化。

使用前请注意，该插件目前处于社区审核阶段，建议通过 BRAT 插件安装以获取自动更新。它不适合需要严格遵循标准 Markdown 规范且不使用 Obsidian 特有功能的用户，若需标准模式需在配置文件中手动指定 `flavor = "standard"`。此外，移动端无法读取 Vault 外部的配置文件，此时插件会回退到内部设置。如果你主要使用纯文本编辑器或不需要实时语法检查，此插件可能并非必需。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


