---
uid: 1791709366505000
title: 'Obsidian 插件：Dev Lab'
tags: ['编程与脚本', '界面优化', '效率工具', 'obsidian插件']
description: 'Pre-flight review against the official linter and the community review rules, an inventory of commands and settings, and UI captures under every installed theme. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Dev Lab

> [!Note] 插件名片
> - 插件名称：Dev Lab
> - 插件作者：Real-Fruit-Snacks
> - 插件说明：Pre-flight review against the official linter and the community review rules, an inventory of commands and settings, and UI captures under every installed theme. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['编程与脚本', '界面优化', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/real-fruit-snacks/obsidian-plugin-lab)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?plugin-lab)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/real-fruit-snacks/obsidian-plugin-lab/master/README.md)



## 概述

**Dev Lab** 是一款专为 Obsidian 插件开发者设计的“预检”工具，旨在帮助开发者在发布前确保插件能一次性通过官方 Linter 和社区审核。

**主要功能**：
1. **双重审查**：独立展示“社区审核”（目录上架门槛，如敏感词、混淆代码）和“官方 Linter”（基于 eslint-plugin-obsidianmd 的 35 项静态检查）结果。
2. **资产清单**：自动列出插件的命令、设置项及 UI 界面。
3. **全主题截图**：在所有已安装主题（含深浅模式）下自动捕获插件 UI 截图。

**适用场景**：
适用于 Obsidian 插件作者在提交至社区目录或进行版本更新前的最终质量检查，特别是针对 Manifest 描述、代码规范及 UI 兼容性进行自查。

**核心特色**：
- **精准定位**：每个问题均附带规则 ID、具体文件及行号，并链接至官方文档。
- **分离判定**：刻意区分“阻断上架”的社区规则与“最佳实践”的 Linter 规则，避免混淆。
- **可视化验证**：提供多主题下的 UI 截图，确保视觉一致性。

**使用建议**：
建议在每次发布前运行 Dev Lab，重点修复社区审核中的阻断项（如 Manifest 措辞），并参考 Linter 建议优化代码规范。对于无法静态检测的 TypeScript 类型错误，需配合 IDE 进行额外检查。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


