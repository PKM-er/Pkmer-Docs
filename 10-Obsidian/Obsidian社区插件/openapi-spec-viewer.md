---
uid: 1793625614978001
title: "Obsidian 插件：Local API Reference"
tags: ["数据处理", "效率工具", "编程与脚本", "obsidian插件"]
description: "Read local OpenAPI files as endpoint lists with parameter and response details. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Local API Reference

> [!Note] 插件名片
> - 插件名称：Local API Reference
> - 插件作者：theluckystrike
> - 插件说明：Read local OpenAPI files as endpoint lists with parameter and response details. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['数据处理', '效率工具', '编程与脚本', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/theluckystrike/openapi-spec-viewer)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?openapi-spec-viewer)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/theluckystrike/openapi-spec-viewer/master/README.md)



## 概述

Local API Reference 允许你在 Obsidian 中直接读取本地存储的 OpenAPI 3.0 或 3.1 规范文件，将其转化为结构化的端点列表。它提供只读视图，展示每个接口的参数、请求内容类型、响应代码及浅层 Schema 属性。该插件完全离线运行，无需 API 密钥、服务器连接或外部账号，即可在笔记旁查阅服务文档，适合将 API 规范与相关说明笔记放在一起管理。

典型场景包括：当你将 `pets.yaml` 放入库中时，可通过命令面板打开文件，按标签分组浏览端点，点击具体接口查看其参数详情和响应结构；若需深入查看数据模型，可点击 Schema 按钮展开一层属性，支持内部 JSON Pointer 引用跳转。此外，Pro 版本支持将端点详情导出为 Markdown 笔记，方便在库中建立独立的接口文档。

相比其他在线查看器或通用代码插件，它的特色在于完全本地化且轻量，文件限制在 5 MiB 以内，确保加载迅速。它不执行任何网络请求，也不支持 Swagger 2.0 或远程 URL 导入，专注于解析本地静态文件。Pro 功能还包含书签和标签过滤器，可保存常用端点视图，但核心阅读功能免费可用，无需支付即可满足大多数查阅需求。

使用前需注意，该插件不支持编辑规范文件，若源文件被重命名或移动，需重新从文件选择器打开，已保存的书签不会自动跟随路径变更。它也不是完整的 OpenAPI 验证器，不检查回调、Webhooks 或安全定义等高级特性。如果你需要发送测试请求、导入远程 API 文档，或处理超过 5 MiB 的大型规范文件，此插件并不适合。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


