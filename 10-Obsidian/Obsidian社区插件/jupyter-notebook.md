---
uid: 1793625614419000
title: "Obsidian 插件：Jupyter Notebook"
tags: ["编程与脚本", "第三方工具集成", "学术与科研", "obsidian插件"]
description: "Edit and run native Jupyter notebooks with local Python environments, dependency checks, Markdown previews, and saved outputs. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Jupyter Notebook

> [!Note] 插件名片
> - 插件名称：Jupyter Notebook
> - 插件作者：kains
> - 插件说明：Edit and run native Jupyter notebooks with local Python environments, dependency checks, Markdown previews, and saved outputs. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['编程与脚本', '第三方工具集成', '学术与科研', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/kains2866/obsidian-jupyter-notebook)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?jupyter-notebook)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/kains2866/obsidian-jupyter-notebook/master/README.md)



## 概述

Jupyter Notebook 插件让 Obsidian 用户能够直接在笔记库中创建、编辑并运行标准的 `.ipynb` 文件。它打破了传统笔记与代码执行的界限，允许你在同一个文档中混合编写 Markdown 文本、Python 代码并查看保存的运行结果。通过集成本地 Python 环境，该插件支持完整的依赖管理、交互式输入以及丰富的输出展示，使数据分析、实验记录等任务无需切换至外部 IDE 或浏览器即可完成，真正实现了“在笔记中运行 Python”。

典型场景包括在撰写技术博客或研究笔记时，直接嵌入可复现的代码片段及其输出图表，确保文档与代码同步更新；或者在整理数据时，利用插件的依赖检查功能快速安装缺失的库，并在执行后通过 Dataview 查询保存的元数据。例如，你可以创建一个包含数据清洗代码和结论分析的笔记本，运行后直接复制表格数据到 Markdown 中，或保存生成的图像作为附件，所有操作均在 Obsidian 界面内流畅完成。

相比其他仅支持查看或简单执行的插件，其核心特色在于深度融入 Obsidian 的知识管理体系。笔记本中的 Markdown 单元格和 YAML 属性支持双向链接、标签搜索及图谱连接，意味着你的代码笔记不再是孤岛，而是知识网络的一部分。此外，它采用标准的 nbformat 4 格式，不生成伴随的 Markdown 文件，确保 `.ipynb` 文件可直接在 Jupyter 或 VS Code 中打开，保持了跨平台兼容性。

需要注意的是，该插件目前仅支持桌面端（macOS、Windows、Linux），移动端无法使用。由于依赖本地 Python 环境，不同电脑需分别配置环境，且不支持连接远程 Jupyter 服务器。如果你主要依赖云端计算资源，或需要在手机上频繁编辑运行代码，此插件可能不适合。此外，安装前请确保未同时启用其他 `.ipynb` 查看插件，以避免冲突。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


