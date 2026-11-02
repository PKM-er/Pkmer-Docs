---
uid: 1793625622055000
title: "Obsidian 插件：Tag Properties"
tags: ["界面优化", "导航与状态栏", "效率工具", "obsidian插件"]
description: "Show a custom list property as tags. Browse the property values as clickable tags in a view, with note counts and Bases filters. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Tag Properties

> [!Note] 插件名片
> - 插件名称：Tag Properties
> - 插件作者：theluckystrike
> - 插件说明：Show a custom list property as tags. Browse the property values as clickable tags in a view, with note counts and Bases filters. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['界面优化', '导航与状态栏', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/theluckystrike/tag-properties)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?tag-properties)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/theluckystrike/tag-properties/master/README.md)



## 概述

Tag Properties 将自定义列表属性转化为可点击的标签视图，解决 Obsidian 原生标签功能单一的问题。它允许用户将 `topics` 或 `company` 等列表属性独立于内置 `tags` 属性进行管理，在专用视图中浏览这些值，并显示每个标签对应的笔记数量。通过这种分离机制，你可以保持元数据结构的灵活性，同时获得类似原生标签的直观浏览体验，无需在复杂的属性面板中反复切换。

典型场景包括管理多项目笔记或分类研究资料。例如，你可以创建一个 `projects` 列表属性，填入 `work`、`personal` 等值，在插件视图中点击 `work` 即可快速查看所有相关工作笔记，而不会干扰其他分类。另一个例子是利用层级标签，如 `research/interviews`，通过开启“包含子标签”选项，一次性筛选出所有研究类笔记及其子类别，方便从宏观视角快速定位特定领域的资料。

相比同类插件，其核心特色在于与 Bases 的深度集成。选中任意标签后，插件能生成原生的 Bases 过滤表达式，直接粘贴到 Bases 的高级过滤器中即可使用，且该表达式能正确处理哈希前缀、大小写及子标签逻辑。此外，插件支持“当前笔记”区域，直接展示当前打开笔记中的自定义标签，便于快速跳转至相关素材。Pro 版本还支持多属性合并视图，将自定义标签与核心标签统一展示，提升管理效率。

使用前需注意，免费版仅支持配置一个列表属性，且插件仅读取数据，不提供批量重命名功能，修改值需通过常规属性编辑器完成。它不适合需要频繁批量修改标签名称或依赖单一内置标签系统的全部工作流。若你的笔记库主要依赖内置 `tags` 属性且无需复杂列表管理，此插件可能并非必需。此外，Pro 功能需通过 GitHub Sponsors 订阅，且插件更新时可能会在后台打开“新功能”标签页，可在设置中关闭。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


