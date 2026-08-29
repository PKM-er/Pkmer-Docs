---
uid: 1786577080209002
title: 'Obsidian 插件：Mermaid Integrator'
tags: ['编辑工具', '第三方工具集成', '图表与可视化', '编程与脚本', 'obsidian插件']
description: '用于辅助编辑Mermaid代码块的Obsidian插件 —— 此插件尚未经过Obsidian官方人员的人工审核。'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Mermaid Integrator

> [!Note] 插件名片
> - 插件名称：Mermaid Integrator
> - 插件作者：fangface-hub
> - 插件说明：用于辅助编辑Mermaid代码块的Obsidian插件 —— 此插件尚未经过Obsidian官方人员的人工审核。
> - 插件分类：['编辑工具', '第三方工具集成', '图表与可视化', '编程与脚本', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/fangface-hub/obsidian_mermaid_integrator)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?mermaid-integrator)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/fangface-hub/obsidian_mermaid_integrator/master/README.md)



## 概述

### Mermaid Integrator插件总结
1. **主要功能**：辅助用户快速编辑Mermaid代码块，包括将当前选中内容包裹在`mermaid`代码块中、插入Mermaid流程图模板、配置默认流向（`TD`或`LR`），还能解析`%% @meta`并应用样式到渲染图。
2. **适用场景**：适用于在Obsidian中使用Mermaid绘制流程图、图表等场景，帮助用户更高效地编辑和美化Mermaid代码。
3. **核心特色**：支持通过`%% @meta`嵌入样式元数据，可对渲染图的对齐方式、宽度、边距、背景色等进行设置，且部分元数据以HTML `data-*`属性呈现。
4. **使用建议**：使用时，先了解`%% @meta`的语法规则，将元数据写在Mermaid DSL行之前。若需开发，可通过`npm install`安装依赖，`npm run build`构建，`npm run dev`开启监听模式。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


