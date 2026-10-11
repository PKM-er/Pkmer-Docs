---
uid: 1791709367500000
title: 'Obsidian 插件：Highlight Migrator'
tags: ['样式与美化', '编辑工具', '备份与恢复', '数据处理', 'obsidian插件']
description: 'Scan legacy HTML highlights, map each colour to a native highlight colour, back up affected notes, then convert them — with full revert. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Highlight Migrator

> [!Note] 插件名片
> - 插件名称：Highlight Migrator
> - 插件作者：Grub Basket
> - 插件说明：Scan legacy HTML highlights, map each colour to a native highlight colour, back up affected notes, then convert them — with full revert. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['样式与美化', '编辑工具', '备份与恢复', '数据处理', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/grub-basket/Highlight-Migrator)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?highlight-migrator)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/grub-basket/Highlight-Migrator/master/README.md)



## 概述

**1. 主要功能**
Highlight Migrator 是一款用于迁移旧版 HTML 高亮标记（如 Highlightr 插件生成的 `<mark>` 标签）至 Obsidian 原生彩色高亮语法（`==🔴text==`）的工具。它支持全库扫描、颜色映射、自动备份及一键回滚。

**2. 适用场景**
适用于从使用 Highlightr 等旧插件的笔记库迁移至 Obsidian 原生高亮功能的用户，特别是拥有大量历史 HTML 高亮标记且希望统一视觉风格、提升笔记兼容性的场景。

**3. 核心特色**
*   **智能映射**：自动识别十六进制及类名颜色，通过 CIELAB 感知距离算法将旧颜色匹配至最接近的原生颜色，并支持手动调整。
*   **安全机制**：转换前自动创建带时间戳的备份文件夹及清单文件，防止覆盖；提供“撤销上次迁移”功能，可完全恢复原状。
*   **可视化审查**：提供全页审查表格，展示颜色样本、出现次数及转换后的实时预览，确保转换计划透明可控。
*   **容错处理**：自动跳过跨行或包含冲突语法的高亮，避免笔记损坏。

**4. 使用建议**
建议先执行“扫描”查看颜色分布，仔细核对映射表中的颜色对应关系。确认无误后，务必检查备份文件夹生成情况，再进行转换。若发现错误，可随时使用“撤销”命令恢复，无需手动还原文件。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


