---
uid: 1793625609296000
title: "Obsidian 插件：ChatGPT DIL Local"
tags: ["图表与可视化", "自动化与AI", "数据处理", "obsidian插件"]
description: "Import ChatGPT Markdown exports and render supported interactive diagrams, charts, controls and equations offline. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：ChatGPT DIL Local

> [!Note] 插件名片
> - 插件名称：ChatGPT DIL Local
> - 插件作者：xueh0635-design
> - 插件说明：Import ChatGPT Markdown exports and render supported interactive diagrams, charts, controls and equations offline. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['图表与可视化', '自动化与AI', '数据处理', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/xueh0635-design/chatgpt-dil-local)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?chatgpt-dil-local)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/xueh0635-design/chatgpt-dil-local/master/README.md)



## 概述

ChatGPT DIL Local 旨在解决 ChatGPT 导出的 Markdown 文件中交互式图表无法在 Obsidian 中正常显示的问题。该插件能够识别文件中的原始 DIL 标签，并离线渲染支持的交互式图表、控件及公式。它通过生成一个伴生笔记来展示可交互内容，同时保留原始文件不变，让用户无需联网即可在本地查看和操作这些动态元素，实现了从静态文本到可交互内容的本地化转换。

典型使用场景包括将 ChatGPT 生成的数学函数图像或数据可视化图表导入笔记库。例如，当你导出包含正弦函数曲线或柱状图的对话时，插件会自动创建一个新的 `.md` 文件，你可以在阅读视图中直接拖动滑块调整参数，或缩放查看曲线细节。另一个例子是处理包含绝对值距离可视化的学习组件，插件能将其转换为可拖动的数轴，方便直观理解数学概念，而无需回到网页端操作。

相比其他仅支持静态图片的插件，其核心特色在于完全离线运行且具备沙箱隔离机制。插件将脚本限制在独立的 iframe 中执行，阻断网络请求，确保安全性与隐私。此外，它支持对公式进行本地解析，并保留了交互状态，即使关闭 Obsidian 后重新打开，之前的操作状态也能被恢复。这种设计不仅避免了对外部服务的依赖，还通过视口加载机制优化了长文档的性能，防止大量沙箱同时启动导致卡顿。

使用前需注意，该插件仅支持桌面版 Obsidian，且要求导出文件中必须包含原始的 DIL 源代码，截图或 PDF 无法还原交互性。附件图片需手动放入仓库并保持相对路径正确，插件不会自动下载缺失文件。它不适合需要完全像素级还原 ChatGPT 官方渲染效果的用户，因为作为社区兼容实现，其图表样式和布局可能与原版存在差异。此外，若你主要使用移动端 Obsidian，或依赖插件自动扫描整个仓库进行批量转换，此插件并不适用。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


