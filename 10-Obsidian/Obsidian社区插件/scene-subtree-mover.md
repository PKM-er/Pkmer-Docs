---
uid: 1793625620967000
title: "Obsidian 插件：Scene Subtree Mover"
tags: ["文件管理", "编辑工具", "效率工具", "obsidian插件"]
description: "Move a chapter and its child scenes together in a manuscript index. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Scene Subtree Mover

> [!Note] 插件名片
> - 插件名称：Scene Subtree Mover
> - 插件作者：theluckystrike
> - 插件说明：Move a chapter and its child scenes together in a manuscript index. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['文件管理', '编辑工具', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/theluckystrike/scene-subtree-mover)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?scene-subtree-mover)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/theluckystrike/scene-subtree-mover/master/README.md)



## 概述

Scene Subtree Mover 专为使用 Longform 格式管理长篇手稿的用户设计，核心功能是解决章节移动时子场景丢失或错位的问题。它不再将章节名称视为孤立条目，而是将章节及其嵌套的子场景数组作为一个整体单元进行移动。插件通过读取索引文件中的 `longform.scenes` 数组，确保在调整结构时，所有后代场景都能跟随父级章节同步迁移，从而维护手稿层级结构的完整性。

典型场景包括调整长篇故事的章节顺序或重构大纲。例如，当你需要将“第三章”及其下属的五个场景整体移至“第一章”之后时，只需在弹窗中选择目标父级和最终位置，插件会即时预览移动后的完整顺序。另一个场景是将某个嵌套场景提升为顶级章节，插件允许你选择“Manuscript root”作为目标，该场景及其所有子项将自动脱离原父级并保留内部结构，无需手动逐个剪切粘贴。

相比其他仅处理文件移动或简单列表排序的工具，该插件的最大特色在于其严谨的“预览-备份-应用”工作流。它提供并排对比视图，让你在执行前确认新旧顺序的差异。此外，Pro 版本支持在单次预览中组合多个移动操作，并允许保存和恢复特定的命名顺序，方便在多种剧情走向间切换。所有写入操作前都会生成完整的源文件备份，并执行冲突检查，确保数据安全性。

使用前需注意，该插件仅修改索引文件中的 YAML 数组结构，不会重命名场景笔记或移动文件夹，正文内容保持不变。它不适合需要频繁编辑正文文本或管理非 Longform 格式笔记的用户。若索引文件包含超过 10,000 个条目或 64 层嵌套，插件将拒绝读取。此外，YAML 序列化可能会改变注释、空格或引号格式，建议保留生成的 `.bak` 备份文件直至确认同步无误。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


