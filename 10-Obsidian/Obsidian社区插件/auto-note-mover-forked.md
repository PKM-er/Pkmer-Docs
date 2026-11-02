---
uid: 1793625606557000
title: "Obsidian 插件：Auto Note Mover (Forked)"
tags: ["文件管理", "自动化与AI", "效率工具", "obsidian插件"]
description: "Moves notes to folders by matching their tag or title against your rules, automatically on create, edit, or rename, or manually. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Auto Note Mover (Forked)

> [!Note] 插件名片
> - 插件名称：Auto Note Mover (Forked)
> - 插件作者：Rafael Ordaz
> - 插件说明：Moves notes to folders by matching their tag or title against your rules, automatically on create, edit, or rename, or manually. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['文件管理', '自动化与AI', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/rordaz/obsidian-auto-note-mover)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?auto-note-mover-forked)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/rordaz/obsidian-auto-note-mover/master/README.md)



## 概述

Auto Note Mover (Forked) 旨在解决笔记库中文件散落各处、难以归档的痛点。它通过预设规则，根据笔记的标签或标题自动将其移动到指定文件夹。无论是新建、编辑还是重命名笔记，插件都会实时检测并执行移动操作，也支持手动触发。这一机制让你无需再纠结笔记该放在哪里，只需专注于内容创作，系统会自动完成分类整理，保持库结构的整洁有序。

典型场景包括按主题归档和日常记录管理。例如，你可以设置规则：凡带有 `#food` 标签的笔记自动移入“饮食”文件夹，方便后续回顾食谱；或者利用标题正则匹配，将每日日记自动归入“Daily Notes”目录。这样，即使你从其他笔记链接快速创建新条目，它们也会瞬间出现在正确的分类下，避免了手动拖拽文件的繁琐步骤。

作为原版的更新分支，该插件修复了设置窗口弹出时建议列表显示异常的问题，并适配了当前 Obsidian 版本。它支持自动与手动两种触发模式，规则按顺序匹配，首个命中即生效。此外，插件允许在笔记 Frontmatter 中添加特定标记来禁用自动移动，提供了灵活的例外处理机制，适合对自动化流程有精细控制需求的用户。

使用前请注意，该插件目前仅支持桌面端，移动端未经验证。若你正在使用原版 Auto Note Mover，务必先禁用原版再启用此分支，否则两个插件同时监听会导致笔记被重复移动或错位。另外，附件文件不会随笔记移动，且若笔记库由 Dropbox 等实时同步软件监控，同步锁可能导致移动失败。如果你需要移动附件或依赖移动端同步，此插件可能不适合你。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


