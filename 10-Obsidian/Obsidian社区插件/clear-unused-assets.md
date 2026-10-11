---
uid: 1791709366060000
title: 'Obsidian 插件：clear-unused-assets'
tags: ['文件管理', '效率工具', '自动化与AI', 'obsidian插件']
description: 'Detect and delete unused assets that are no more attached. Allow to choose which ones to delete and which ones to keep. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：clear-unused-assets

> [!Note] 插件名片
> - 插件名称：clear-unused-assets
> - 插件作者：QuincyLeo
> - 插件说明：Detect and delete unused assets that are no more attached. Allow to choose which ones to delete and which ones to keep. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['文件管理', '效率工具', '自动化与AI', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/quincy-leo/obsidian-clear-unused-assets)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?clear-unused-assets)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/quincy-leo/obsidian-clear-unused-assets/master/README.md)



## 概述

**1. 主要功能**
该插件用于检测并删除 Obsidian 库中不再被任何笔记引用的孤立附件（如截图、图片）。它通过双重扫描机制（元数据缓存+原始文本）精准识别未使用文件，并在删除前提供确认列表，允许用户手动勾选保留或删除特定文件。

**2. 适用场景**
适用于长期积累大量粘贴截图、剪贴图像或一次性图表的笔记库，特别是当原笔记被删除后，附件仍残留占用空间的情况。适合希望定期清理库体积、保持整洁的用户。

**3. 核心特色**
*   **安全确认机制**：针对前代插件误删且不可逆的痛点，提供逐文件勾选功能，确保用户完全掌控删除范围。
*   **高精度扫描**：结合 Obsidian 缓存与原始文本扫描，能识别 HTML 标签、CSS URL、srcset 等缓存无法捕获的引用，大幅降低误删率。
*   **全库参考**：即使限定删除范围，引用扫描仍覆盖全库，防止因笔记位于其他文件夹而误判为“未使用”。

**4. 使用建议**
建议在定期整理笔记时运行此插件。由于插件设计倾向于“宁可多留，不可误删”，若发现某些文件未被识别为引用，请仔细检查其实际链接格式。仅支持桌面端，需 Obsidian 1.4.0 及以上版本。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


