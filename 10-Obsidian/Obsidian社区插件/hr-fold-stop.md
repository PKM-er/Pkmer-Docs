---
uid: 1793625613061000
title: "Obsidian 插件：Fold Stop"
tags: ["编辑工具", "界面优化", "效率工具", "obsidian插件"]
description: "Stop heading folds at a horizontal rule, so the next section stays visible. Fold headings in Live Preview and Source mode. A marker line can end folds at one heading level and deeper. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Fold Stop

> [!Note] 插件名片
> - 插件名称：Fold Stop
> - 插件作者：theluckystrike
> - 插件说明：Stop heading folds at a horizontal rule, so the next section stays visible. Fold headings in Live Preview and Source mode. A marker line can end folds at one heading level and deeper. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['编辑工具', '界面优化', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/theluckystrike/hr-fold-stop)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?hr-fold-stop)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/theluckystrike/hr-fold-stop/master/README.md)



## 概述

Fold Stop 旨在解决 Obsidian 中折叠标题时，后续内容被一并隐藏导致上下文丢失的问题。它利用编辑器内置的折叠控件，让标题折叠在遇到水平分割线时自动停止，从而确保分割线后的下一节内容始终可见。该功能同时支持实时预览和源码模式，且仅改变视图显示，不会修改笔记的实际文本内容。

典型场景如撰写项目计划时，在“计划”标题下编写详细步骤，随后用 `---` 分隔出“执行”部分。折叠“计划”标题时，详细步骤隐藏，但“执行”部分依然清晰可见，方便快速切换关注点。此外，若使用 `%% fold-stop %%` 标记，即使没有分割线，也能在指定位置停止折叠，保持后续关键信息可见。

相比普通折叠，Fold Stop 能智能识别笔记结构，忽略代码块、YAML 前置元数据及列表内的伪分割线，避免误判。它支持子标题随父标题折叠，直到遇到分割线或同级标题。Pro 版本还允许通过文件夹规则或笔记属性精细控制哪些区域启用此功能，并提供面板显示当前生效的规则来源，便于管理复杂库。

使用前需注意，该插件仅改变视图，不修改笔记文本，适合需要频繁折叠长文档且希望保留后续上下文的场景。若你的笔记结构复杂，包含大量代码块或特殊格式，建议先测试其识别准确性。不适合需要完全隐藏后续所有内容，或依赖特定插件进行自动化折叠操作的用户。此外，Pro 功能的文件夹规则区分大小写，配置时需仔细核对路径。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


