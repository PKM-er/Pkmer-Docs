---
uid: 1793625622075000
title: "Obsidian 插件：Tahoe Code"
tags: ["编程与脚本", "编辑工具", "效率工具", "obsidian插件"]
description: "An IDE in your code blocks: smart Enter and indentation, closing brackets, suggestions and templates, coloured brackets and sticky headers; on desktop, checking as you type, quick fixes. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Tahoe Code

> [!Note] 插件名片
> - 插件名称：Tahoe Code
> - 插件作者：Krishnan
> - 插件说明：An IDE in your code blocks: smart Enter and indentation, closing brackets, suggestions and templates, coloured brackets and sticky headers; on desktop, checking as you type, quick fixes. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['编程与脚本', '编辑工具', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/krishnanefx/obsidian-tahoe-code)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?tahoe-code)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/krishnanefx/obsidian-tahoe-code/master/README.md)



## 概述

Tahoe Code 将笔记中的代码块升级为具备 IDE 能力的编辑环境，核心在于提供智能输入辅助与实时反馈。它支持智能换行、自动缩进、括号自动闭合以及基于上下文的代码建议，让在 Markdown 中编写代码的体验接近专业编辑器。插件能识别多种编程语言的语法结构，在输入时提供模糊匹配的建议列表，并支持通过 Tab 键快速展开代码模板，显著减少重复性打字工作，使笔记中的代码片段更加规范且易于维护。

典型场景包括在笔记中记录 Python 或 MATLAB 脚本时，输入 `fori` 加 Tab 即可生成完整的循环结构，输入 `xs.for` 会自动补全为 `for item in xs:`。当代码中出现拼写错误时，插件会在你暂停输入时自动下划线标记，并提供“更改为 'total'”等快速修复选项。此外，在长代码块中，当前所在的函数或类定义会作为“粘性标题”固定在顶部，方便随时查看上下文，无需频繁滚动查找定义位置。

相比同类插件，Tahoe Code 的特色在于其深度集成的桌面端检查与 AI 辅助能力。它不仅提供语法高亮和折叠，还能在桌面端调用本地语言服务器进行实时错误检查，并支持通过 ⇧⌥F 调用 clang-format、ruff 等工具格式化代码。更独特的是，它支持通过 ⌘I 调用本地 AI 模型（如 Ollama）进行代码重构或解释，甚至能将数学公式直接转换为 Python 或 MATLAB 函数代码，这种“代码即笔记”的深度整合在 Obsidian 插件中较为少见。

使用前需注意，其高级检查、格式化及 AI 功能仅支持桌面端，且依赖本地安装相应的语言服务器或 Ollama 环境，移动端仅支持基础编辑功能。该插件不适合需要在线协作、云端编译或依赖特定云端 API 的场景。此外，AI 功能需要本地部署模型，对硬件有一定要求，若仅需要简单的代码高亮或运行代码，建议搭配 Tahoe Run 使用，而非单独依赖此插件。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


