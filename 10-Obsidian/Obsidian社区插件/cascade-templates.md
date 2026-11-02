---
uid: 1793625609148000
title: "Obsidian 插件：Cascade Templates"
tags: ["模板与链接处理", "文件管理", "效率工具", "obsidian插件"]
description: "A modular cascading templating system based on folder-level !Template.md files. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Cascade Templates

> [!Note] 插件名片
> - 插件名称：Cascade Templates
> - 插件作者：Matteo Palazzolo
> - 插件说明：A modular cascading templating system based on folder-level !Template.md files. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['模板与链接处理', '文件管理', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/matteopalazzolo/obsidian-cascade-templates)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?cascade-templates)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/matteopalazzolo/obsidian-cascade-templates/master/README.md)



## 概述

Cascade Templates 旨在解决 Obsidian 中结构化数据模板难以统一管理的痛点。它通过文件夹级别的 `!Template.md` 文件实现模块化级联模板系统，允许子文件夹继承父级模板的属性，并在此基础上添加特定字段。这种机制确保了不同分类下的笔记在共享属性上保持一致，同时允许各自拥有独特的扩展字段，无需手动同步多个独立模板。

典型场景如追踪媒体消费或管理 TTRPG 战役数据。例如，在“物品”和“法术”文件夹中，两者都继承自“对象”父模板，共享“伤害”、“稀有度”等通用属性，但“物品”可额外定义“材质”，“法术”则定义“法术学派”。新建笔记时，插件会自动应用所属文件夹的模板属性，确保新文件从一开始就符合规范，极大减少了手动填写重复字段的麻烦。

相比传统 Templater 插件，Cascade Templates 的核心特色在于其递归继承机制和状态可视化。它支持无限层级的嵌套继承，且无需为每个新文件夹单独配置设置。此外，属性栏中的状态图标能实时显示笔记与模板的匹配情况（如缺失或多余属性），并提供一键导航至参考模板的功能。配合“重构”按钮，用户可以分步将现有笔记对齐到最新模板，操作安全且可控。

使用前需注意，该插件不会自动修改已有笔记内容，所有对齐操作均需用户手动触发。它主要依赖 YAML 前置属性，若你的笔记结构复杂且依赖大量正文脚本自动化，可能需要结合 Templater 使用。此外，插件不提供独立的脚本 API，自动填充仅限于新笔记的继承应用。如果你需要完全动态生成的复杂逻辑，或希望插件自动重写旧笔记，此插件可能无法满足需求。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


