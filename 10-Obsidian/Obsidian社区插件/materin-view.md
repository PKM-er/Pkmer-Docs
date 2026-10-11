---
uid: 1791709368509000
title: 'Obsidian 插件：Materin View'
tags: ['第三方工具集成', '编程与脚本', '效率工具', 'obsidian插件']
description: 'Read OpenAPI/Swagger specs and render a knife4j-style documentation view with request debugging. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Materin View

> [!Note] 插件名片
> - 插件名称：Materin View
> - 插件作者：leapord
> - 插件说明：Read OpenAPI/Swagger specs and render a knife4j-style documentation view with request debugging. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['第三方工具集成', '编程与脚本', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/leapord/Materin-view)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?materin-view)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/leapord/Materin-view/master/README.md)



## 概述

**Materin View** 是一款 Obsidian 插件，用于读取 OpenAPI/Swagger 规范并渲染为类似 knife4j 的文档视图，支持浏览与在线调试。

**适用场景**：适合需要管理 API 文档的开发者，尤其是希望将 API 规范与笔记整合在同一工作区，并直接在笔记环境中进行接口测试的用户。

**核心特色**：
1. **多源支持**：可加载本地 Vault 中的 `.json`/`.yaml` 文件、远程 URL，甚至提取笔记代码块中的规范。
2. **智能识别**：支持全库扫描自动检测 OpenAPI 文件，或通过右键菜单快速打开。
3. **完整文档渲染**：提供标签树、方法徽章、参数表及 Schema 解析（支持 `$ref` 引用）。
4. **内置调试器**：无需离开 Obsidian 即可发送真实请求，支持自定义 Base URL、请求头、Body 及 `{{变量}}` 替换，方便查看响应状态与内容。

**使用建议**：
1. 从 GitHub Releases 下载插件文件放入 `.obsidian/plugins/materin-view/` 并启用。
2. 通过侧边栏地球图标或命令面板“打开 OpenAPI 视图”进入。
3. 点击“+ 添加文档”导入规范文件，或直接在文件资源管理器中右键选择“用 Materin View 打开”。
4. 在左侧选择接口，切换“文档”或“调试”标签页进行查看或测试。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


