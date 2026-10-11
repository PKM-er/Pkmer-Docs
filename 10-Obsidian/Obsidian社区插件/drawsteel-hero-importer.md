---
uid: 1791709366624000
title: 'Obsidian 插件：Draw Steel Hero Importer'
tags: ['数据处理', '第三方工具集成', '图片与PDF', 'obsidian插件']
description: 'Imports a ForgeSteel .ds-hero export or a filled MCDM character-sheet PDF into a Draw Steel Elements formatted Note. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Draw Steel Hero Importer

> [!Note] 插件名片
> - 插件名称：Draw Steel Hero Importer
> - 插件作者：Zach Hall
> - 插件说明：Imports a ForgeSteel .ds-hero export or a filled MCDM character-sheet PDF into a Draw Steel Elements formatted Note. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['数据处理', '第三方工具集成', '图片与PDF', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/zachhall/drawsteel-hero-importer)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?drawsteel-hero-importer)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/zachhall/drawsteel-hero-importer/master/README.md)



## 概述

**1. 主要功能**
该插件用于将《Draw Steel》（DS）英雄数据导入 Obsidian。它支持读取 ForgeSteel 导出的 `.ds-hero` 文件或已填写的 MCDM 官方角色卡 PDF，并将其转换为使用 Draw Steel Elements 代码块格式化的单一笔记。

**2. 适用场景**
适用于使用 Obsidian 管理《Draw Steel》战役角色的玩家。特别适合需要频繁更新角色状态、从在线工具（ForgeSteel）同步数据，或希望将纸质/电子填表数据数字化归档的用户。

**3. 核心特色**
*   **双格式支持**：兼容 `.ds-hero` 文件与 PDF 角色卡。
*   **智能解析**：自动计算能力值（如 Power Roll）和伤害数值，确保数据准确。
*   **数据补全**：导入 PDF 时，可从本地“DS Compendium”文件夹自动查找并补充 Kit 描述、种族特征等缺失信息。
*   **生态兼容**：生成的笔记需配合 Draw Steel Elements 插件在“阅读视图”下渲染，并可选支持 Power Roll Detector 实现点击掷骰。

**4. 使用建议**
*   **前置条件**：必须安装并启用 Draw Steel Elements 插件，且 Obsidian 版本需 ≥ 1.13.0。
*   **查看模式**：生成的笔记仅在“阅读视图”（Reading view）下正确显示，不支持实时预览（Live Preview）。
*   **PDF 准备**：若使用 PDF 导入，请确保使用 MCDM 官方标准角色卡，并遵循最佳实践填写，同时建议在库中建立“DS Compendium”文件夹以辅助数据补全。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


