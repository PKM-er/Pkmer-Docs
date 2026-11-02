---
uid: 1793625615127001
title: "Obsidian 插件：Loose JSON"
tags: ["数据处理", "编辑工具", "编程与脚本", "obsidian插件"]
description: "Format loose JSON, copy JavaScript values, decode stringified fields, repair JSON, and extract log data offline. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Loose JSON

> [!Note] 插件名片
> - 插件名称：Loose JSON
> - 插件作者：cynthia-ding
> - 插件说明：Format loose JSON, copy JavaScript values, decode stringified fields, repair JSON, and extract log data offline. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['数据处理', '编辑工具', '编程与脚本', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/cynthia2023xy/obsidian-loose-json)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?loose-json)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/cynthia2023xy/obsidian-loose-json/master/README.md)



## 概述

Loose JSON 是一款专为在 Obsidian 中阅读接口数据和日志的开发者设计的离线宽松 JSON 格式化工具。它核心解决非标准 JSON 难以直接排版的问题，支持格式化 JSON 及类 JSON 片段，同时保留外围日志文字。该插件允许直接处理从日志、控制台或配置平台复制的内容，即使其中夹杂时间戳、入参标签，或使用单引号、无引号键名、注释、尾逗号等常见非标准写法，也能对可识别的数据片段进行排版，无需先整理成标准 JSON。

典型使用场景包括快速查看日志中压成一行的 JSON 入参，或批量整理笔记中多个接口返回。例如，当面对一大段包含时间戳和线程名的日志时，插件能自动识别其中的 JSON 对象并展开，同时保留原有的时间、IP 地址和日志说明文字；或者当需要查看 CMS 返回的嵌套转义字符串时，可以将字符串化 JSON 字段直接转为对象或数组，极大提升阅读效率。

相比同类插件，Loose JSON 的特色在于其“宽松”处理能力和离线安全性。它只调整排版，保留原有数据和语法，不会自动将非标准 JSON 改为严格 JSON，也不会补写缺失值。此外，它提供独立的“修复为严格 JSON”命令供用户按需使用，并支持将 JSON 复制为 JavaScript 对象字面量。整个处理过程在后台进行，不发送网络请求，不收集遥测，不读取剪贴板，确保数据隐私安全。

使用前需注意，宽松格式化不会自动修复损坏的 JSON，若需输出标准 JSON，必须使用独立的修复命令并检查预览。该插件不适合需要自动补全缺失字段或完全自动化清洗脏数据的场景。对于包含复杂嵌套转义的字符串化 JSON，可能需要多次运行命令才能完全展开。建议用户在处理复杂笔记时保留默认的预览功能，以确认修改内容，避免误操作。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


