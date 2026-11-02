---
uid: 1793625607857000
title: "Obsidian 插件：Bases View Checkpoints"
tags: ["备份与恢复", "界面优化", "效率工具", "obsidian插件"]
description: "Save a Bases view setup and restore it after temporary changes. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Bases View Checkpoints

> [!Note] 插件名片
> - 插件名称：Bases View Checkpoints
> - 插件作者：theluckystrike
> - 插件说明：Save a Bases view setup and restore it after temporary changes. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['备份与恢复', '界面优化', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/theluckystrike/bases-view-checkpoints)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?bases-view-checkpoints)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/theluckystrike/bases-view-checkpoints/master/README.md)



## 概述

Bases View Checkpoints 旨在解决 Obsidian Bases 视图中配置易丢失的痛点。当你调整排序或筛选条件时，原有的视图设置会被覆盖且无法直接撤销。该插件通过保存特定视图及其共享顶层键（如过滤器、公式、属性等）的快照，允许你在临时修改后一键恢复原始状态。它直接操作文件文本，无需保持 Bases 视图处于打开状态，即可实现配置的备份与还原。

典型场景包括临时调整任务列表的排序以查看特定项目，或在测试新筛选逻辑后希望快速回到默认视图。例如，你可以先保存当前“Alpha”视图的检查点，然后随意修改其排序规则或添加临时过滤器；查看完毕后，运行恢复命令，插件会展示变更预览，确认后仅还原该视图及共享键，其他未涉及的视图保持不变。

相比同类工具，该插件的核心特色在于其安全的恢复机制。每次恢复前都会生成预览，明确列出将被修改的视图键和共享键，避免误操作影响其他视图。此外，它提供“撤销上次恢复”功能，若恢复结果不符合预期，只要文件未被其他操作修改，即可一键回滚到恢复前的完整文件状态。Pro 版本还支持保存多个命名检查点及对比当前视图与检查点的差异，进一步提升了管理灵活性。

使用前需注意，免费版每个视图仅支持一个检查点，新保存会覆盖旧数据；若需多版本管理需订阅 Pro。插件对文件结构有严格要求，若 YAML 格式无效、存在同名视图或包含 `.inf`/`.nan` 值，将拒绝保存或恢复。此外，恢复操作不会强制刷新已打开的 Bases 视图，需手动重新打开以查看更新。该插件不适合需要频繁实时同步视图状态或依赖复杂 YAML 锚点结构的用户，且移动端兼容性未经过充分测试。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


