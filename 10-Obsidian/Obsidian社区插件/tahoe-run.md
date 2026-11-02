---
uid: 1793625622078000
title: "Obsidian 插件：Tahoe Run"
tags: ["编程与脚本", "效率工具", "移动端优化", "obsidian插件"]
description: "Run code blocks in place with live output: a Python notebook with a debugger and variables view, MATLAB, C/C++, Swift and more on desktop, and Python on iPhone and iPad (beta). - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Tahoe Run

> [!Note] 插件名片
> - 插件名称：Tahoe Run
> - 插件作者：Krishnan
> - 插件说明：Run code blocks in place with live output: a Python notebook with a debugger and variables view, MATLAB, C/C++, Swift and more on desktop, and Python on iPhone and iPad (beta). - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['编程与脚本', '效率工具', '移动端优化', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/krishnanefx/obsidian-tahoe-run)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?tahoe-run)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/krishnanefx/obsidian-tahoe-run/master/README.md)



## 概述

Tahoe Run 将 Obsidian 笔记转化为交互式代码笔记本，支持在笔记中直接运行 Python、MATLAB、C/C++ 等二十多种语言。其核心在于提供实时输出环境，代码执行结果、图表及动画会直接显示在代码块下方。对于 Python 用户，它提供类似 Jupyter 的持久化内核，变量和导入状态在笔记内共享，并内置了完整的调试器与变量视图，让代码调试过程直观可见。

典型场景包括数据可视化与算法调试。例如，在撰写技术文档时，你可以直接运行 Matplotlib 代码，生成的图表会嵌入笔记中，甚至将动态动画保存为循环 GIF。若代码报错，插件能自动识别缺失的依赖库（如 OpenCV），并提供一键安装选项，安装完成后立即重新运行代码块，无需手动切换终端。此外，你还可以将笔记导出为标准的 Jupyter 笔记本或脚本，方便与其他工具协作。

相比普通代码高亮插件，Tahoe Run 的最大特色是“真实调试”能力。你可以点击行号设置断点，逐步执行代码并观察变量变化，体验接近专业 IDE。它还能利用本地 AI 模型解释报错原因并建议修复方案。此外，它支持在 iPhone 和 iPad 上通过 Pyodide 离线运行 Python 代码，虽然处于测试阶段，但为移动端笔记提供了独特的代码执行能力，且支持将 MATLAB 会话与笔记绑定，实现跨块变量共享。

使用前需注意，该插件会在你的电脑上以当前用户权限运行代码，请务必只运行可信代码。Python 内核和 MATLAB 会话在空闲 30 分钟后自动停止，但在此期间会占用内存。目前主要开发测试于 macOS，Windows 和 Linux 支持尚未充分验证。此外，移动端 Python 功能为 Beta 版，不支持调试器和 pip 安装，且运行中的代码无法中途停止。如果你只需要静态代码展示或简单的脚本执行，此插件可能过于复杂。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


