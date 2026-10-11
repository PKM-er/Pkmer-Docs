---
uid: 1791709368798000
title: 'Obsidian 插件：Netron Viewer'
tags: ['图表与可视化', '第三方工具集成', '数据分析', 'obsidian插件']
description: 'Render ONNX / TFLite / Core ML / PyTorch / Keras model architecture graphs inline in notes using a bundled copy of Netron, served over a local loopback HTTP server. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Netron Viewer

> [!Note] 插件名片
> - 插件名称：Netron Viewer
> - 插件作者：Nicolas Widynski
> - 插件说明：Render ONNX / TFLite / Core ML / PyTorch / Keras model architecture graphs inline in notes using a bundled copy of Netron, served over a local loopback HTTP server. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['图表与可视化', '第三方工具集成', '数据分析', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/nicolaswidynski/netron-viewer)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?netron-viewer)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/nicolaswidynski/netron-viewer/master/README.md)



## 概述

**插件名称：Netron Viewer**

1. **主要功能**
该插件允许用户在 Obsidian 笔记中直接内联渲染多种深度学习模型架构图。它利用内置的 Netron 引擎，支持 ONNX、TFLite、Core ML、PyTorch 及 Keras 等主流模型格式，通过本地回环 HTTP 服务器实现可视化展示。

2. **适用场景**
适用于机器学习研究者、数据科学家或 AI 爱好者，需要在文档中直观展示、对比或记录神经网络结构时。特别适合在技术笔记、实验日志或项目文档中嵌入模型架构图，无需切换至外部浏览器或工具。

3. **核心特色**
*   **完全本地化**：服务器仅绑定至 `127.0.0.1`，数据不出本机，确保隐私安全。
*   **多格式支持**：兼容五大主流深度学习框架的模型文件。
*   **无缝集成**：通过简单的代码块语法（```netron）即可在 Markdown 中嵌入图表，支持自定义高度。
*   **轻量高效**：无需安装额外的重型软件，插件自带 Netron 资源。

4. **使用建议**
*   将模型文件（如 `.onnx`, `.tflite`）与笔记文件放在同一 Vault 目录或相对路径可访问的位置。
*   在笔记中使用 ```netron 代码块引用文件名即可渲染。
*   若图表显示过小，可在代码块第二行添加 `height=数值` 参数调整高度。
*   注意：该插件未经过 Obsidian 官方人工审核，建议在使用前确认来源可信，并仅用于本地模型分析。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


