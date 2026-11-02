---
uid: 1793625614405000
title: "Obsidian 插件：JSON Payload Delta"
tags: ["数据处理", "文件管理", "效率工具", "obsidian插件"]
description: "Compare two local JSON files and save added, removed, and changed values in a note. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：JSON Payload Delta

> [!Note] 插件名片
> - 插件名称：JSON Payload Delta
> - 插件作者：theluckystrike
> - 插件说明：Compare two local JSON files and save added, removed, and changed values in a note. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['数据处理', '文件管理', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/theluckystrike/json-payload-delta)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?json-payload-delta)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/theluckystrike/json-payload-delta/master/README.md)



## 概述

JSON Payload Delta 专为解决本地 JSON 文件差异审查而设计，核心功能是对比两个严格 JSON 文件，精准识别新增、删除及修改的字段值。它不依赖网络，直接在库内读取源文件，生成包含 JSON Pointer 路径、变更类型及新旧值的详细报告，并自动创建带有源文件链接的 Markdown 笔记，方便你快速定位数据变动。

典型场景包括审查 API 响应快照或配置文件变更。例如，当你保存了旧版和新版的服务端返回数据，运行对比后，插件会列出所有字段差异，你只需预览即可确认哪些参数被移除或修改，随后一键生成报告笔记，作为后续技术复盘或文档更新的依据，无需手动逐行比对。

相比通用 diff 工具，该插件深度适配 Obsidian 工作流，生成的报告直接嵌入库中，且对 JSON 结构有精细处理：对象键顺序不影响结果，数组按索引对比，缺失字段与 null 值严格区分。Pro 版本还支持保存文件对和忽略特定路径（如时间戳），避免无关字段干扰核心数据审查，提升对比效率。

使用前需注意，插件仅支持严格 JSON 格式，不支持 JSON5 或 YAML，且单文件限制 2 MiB、嵌套深度 64 层、预览最多 1000 条变更。它不执行补丁或修改源文件，报告为静态快照，源文件更新后需重新对比。若需处理非严格 JSON、超大文件或实时同步差异，此插件不适用。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


