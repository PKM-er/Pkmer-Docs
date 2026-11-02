---
uid: 1793625615982000
title: "Obsidian 插件：Mathematica Notebook Viewer"
tags: ["学术与科研", "第三方工具集成", "学习与教育", "obsidian插件"]
description: "Read Mathematica notebooks with formatted formulas, Chinese annotations, and a read-only source view. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Mathematica Notebook Viewer

> [!Note] 插件名片
> - 插件名称：Mathematica Notebook Viewer
> - 插件作者：Sylvan Yang
> - 插件说明：Read Mathematica notebooks with formatted formulas, Chinese annotations, and a read-only source view. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['学术与科研', '第三方工具集成', '学习与教育', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/qieyifengzhi/obsidian-mathematica-notebook-viewer)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?mathematica-notebook-viewer)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/qieyifengzhi/obsidian-mathematica-notebook-viewer/master/README.md)



## 概述

Mathematica Notebook Viewer 专为在 Obsidian 中阅读 Wolfram Mathematica 的 `.nb` 文件而设计。它提供只读视图，能够保留单元结构、分组状态及中文教学注释，并利用离线 KaTeX 引擎将常见的数学表达式和代码公式排版为美观的公式。该插件不执行任何 Wolfram 代码，也不修改原始文件，确保在安全隔离的环境中查看笔记内容，同时支持在渲染视图与原始源码之间切换，方便核对细节。

典型场景包括查阅带有中文注释的教学笔记，或回顾包含复杂推导过程的数学文档。例如，当你在 `Reference_code/` 目录下打开一个包含 `Solve` 或 `Reduce` 函数的笔记时，插件会自动将这些代码排版为标准的数学符号，而前置的中文解释则保持为普通文本，清晰区分逻辑与说明。若外部程序更新了笔记文件，视图会自动刷新，无需手动重载，适合需要频繁同步查看最新推导结果的场景。

相比其他仅能显示纯文本的查看器，该插件的核心特色在于对数学公式的离线排版能力以及对中文注释的完整保留。它内置了解析工作线程，即使面对较大的文件也能保持界面流畅，且无需网络连接或安装额外的 Wolfram 环境。此外，插件严格遵循只读原则，所有文本均通过安全方式渲染，杜绝了潜在脚本执行风险，让用户能专注于内容本身而非技术细节。

需要注意的是，该插件仅支持文本形式的 Notebook，不支持二进制文件或动态图形内容，且无法重新计算或验证已有的输出结果。对于超过 12 MiB 的大文件，插件会拒绝读取以保护性能。如果你需要编辑笔记、运行代码或查看复杂的 3D 图形，此插件并不适用，它仅作为辅助阅读工具存在。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


