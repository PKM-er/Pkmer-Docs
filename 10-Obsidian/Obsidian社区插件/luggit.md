---
uid: "1791709368238000"
title: "Obsidian 插件：Lugdiff"
tags: ['文件管理', '第三方工具集成', '备份与恢复', 'obsidian插件']
description: "Review and merge your vault's Git changes from a sidebar panel. - This plugin has not been manually reviewed by Obsidian staff."
author: "AI"
type: "auto"
draft: false
editable: false
modified: "20240101000000"
---

# Obsidian 插件：Lugdiff

> [!Note] 插件名片
> - 插件名称：Lugdiff
> - 插件作者：Hyunyoung Park
> - 插件说明：Review and merge your vault's Git changes from a sidebar panel. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['文件管理', '第三方工具集成', '备份与恢复', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/lugglory/obsidian-lugdiff)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?luggit)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/lugglory/obsidian-lugdiff/master/README.md)



## 概述

**Lugdiff** 是一款专为 Obsidian 设计的 Git 变更审查与合并插件，旨在通过侧边栏面板直观展示代码差异。

**主要功能**：在侧边栏实时显示已暂存、工作区修改及最近提交的文件列表。点击文件即可查看具体的 Diff 差异，支持复制更改或直接打开笔记编辑。

**适用场景**：适用于使用 Git 进行版本控制的 Obsidian 用户，需配合 Obsidian Git 插件使用。要求桌面版 Obsidian 1.7.2+，且 Vault 根目录必须为 Git 仓库。

**核心特色**：
1. **可视化审查**：清晰区分不同状态的变更，最近文件列表可配置搜索深度（默认30次提交）。
2. **智能冲突解决**：针对合并冲突，提供“保留双方内容”的预览功能，自动将 `ours` 和 `theirs` 块合并，并在应用前备份原文件至 `.git/luggit-backups`，确保数据安全。
3. **即时反馈**：设置更改即时生效，操作前自动保存当前打开的文档。

**使用建议**：安装后需启用 Obsidian Git 进行同步。对于 YAML 属性或附件冲突，建议手动审查。若需保留原始状态，可使用“仅备份原文件”功能。该插件不直接处理提交，而是作为审查和预合并工具，辅助用户更高效地管理笔记版本。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---

