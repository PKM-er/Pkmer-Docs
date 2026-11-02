---
uid: 1793625616976000
title: "Obsidian 插件：Move to Linking File"
tags: ["文件管理", "模板与链接处理", "效率工具", "obsidian插件"]
description: "Moves the active and selected files to the folders of their backlinking files, if exactly one backlink exists. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Move to Linking File

> [!Note] 插件名片
> - 插件名称：Move to Linking File
> - 插件作者：Helge Tobias Kosuch
> - 插件说明：Moves the active and selected files to the folders of their backlinking files, if exactly one backlink exists. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['文件管理', '模板与链接处理', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/silidev/obsididan-move-to-linking-file)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?move-to-linking-file)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/silidev/obsididan-move-to-linking-file/master/README.md)



## 概述

Move to Linking File 旨在解决笔记库中文件位置混乱的问题，其核心功能是将当前激活或选中的笔记自动移动至其反向链接所在文件夹。该插件通过检测笔记的反向链接数量，确保只有在存在唯一反向链接的情况下才执行移动操作，从而避免将文件误移至不相关的目录。这种机制利用了笔记间的引用关系作为组织依据，帮助用户快速将文件归位到逻辑上最相关的分类中，无需手动拖拽或记忆文件夹路径。

典型使用场景包括整理大量未分类的临时笔记。例如，当你有一篇关于“项目A”的草稿，且只有一篇名为“项目A总览”的笔记引用了它，运行该命令后，草稿会自动移动到“项目A总览”所在的文件夹。另一个场景是维护个人知识库，当某篇笔记仅被一篇核心索引笔记引用时，该插件能确保它始终与索引笔记保持同目录，维持库结构的整洁与一致性。

相比其他文件管理插件，该插件的特色在于其严格的“唯一反向链接”判定逻辑。它不依赖复杂的规则配置或标签系统，而是直接利用 Obsidian 原生的链接关系进行判断，降低了使用门槛。此外，它支持批量处理选中的多个文件，提高了整理效率。值得注意的是，该插件本身不提供撤销功能，但明确建议配合“File Undo”插件使用，以便在误操作时能逐个恢复移动的文件，这一组合方案增强了操作的安全性。

使用前需注意，该插件仅适用于反向链接数量恰好为一的情况，若笔记被多篇笔记引用或无引用，则不会执行移动，用户需自行检查链接结构。它不适合用于需要复杂层级分类、基于标签或元数据自动归档的场景，也不适合那些反向链接关系混乱、缺乏明确单一归属的笔记库。对于依赖多对多链接关系的用户，此插件可能无法提供预期的整理效果，建议结合其他更灵活的文件管理工具使用。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


