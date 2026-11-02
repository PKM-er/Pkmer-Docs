---
uid: 1793625623006000
title: "Obsidian 插件：TheBrain Import"
tags: ["第三方工具集成", "文件管理", "模板与链接处理", "obsidian插件"]
description: "Convert TheBrain thoughts and links into linked Markdown notes. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：TheBrain Import

> [!Note] 插件名片
> - 插件名称：TheBrain Import
> - 插件作者：theluckystrike
> - 插件说明：Convert TheBrain thoughts and links into linked Markdown notes. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['第三方工具集成', '文件管理', '模板与链接处理', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/theluckystrike/thebrain-import)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?thebrain-import)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/theluckystrike/thebrain-import/master/README.md)



## 概述

TheBrain Import 将 TheBrain 的思维节点与链接转换为 Obsidian 中的 Markdown 笔记。它读取本地导出的 `.brz` 压缩包或 JSON 文件，在本地处理数据，不扫描设备文件夹，也不向网络服务发送任何内容。核心功能包括保留思维属性、建立父子及跳转链接，并生成包含统计信息的导入报告，确保迁移过程透明可控。

典型场景适用于从 TheBrain 迁移知识图谱。例如，你可以将包含项目计划、人物关系和任务列表的思维网络导入 Obsidian，原有的层级结构会转化为带有“Parents”和“Children”标题的互链笔记。若开启 Pro 功能，还能同步导入笔记正文、附件文件，甚至生成一个 Canvas 文件，将思维节点可视化为网格布局，方便在画布中继续整理。

相比其他迁移工具，该插件强调数据隐私与本地化处理，所有操作均在本地完成。其特色在于对重复名称的自动处理（添加后缀）以及对断链的明确提示，避免导入后出现大量无效链接。此外，Pro 版本提供的 Canvas 生成功能能直观展示思维间的关联，虽不还原原始布局，但为后续手动调整提供了良好基础。

使用前需注意，该插件仅支持一次性导入，不会更新或合并之前导入的内容，因此建议先备份源文件。它不适合需要频繁同步 TheBrain 与 Obsidian 数据的用户，因为每次运行都会创建新文件夹。若你的 TheBrain 导出文件包含大量远程附件，插件不会下载这些文件，需手动处理。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


