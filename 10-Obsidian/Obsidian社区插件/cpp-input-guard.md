---
uid: 1793625611387000
title: "Obsidian 插件：Cpp-Input-Guard"
tags: ["编辑工具", "编程与脚本", "文字处理", "obsidian插件"]
description: "Stops angle brackets, square brackets, asterisks, underscores, double equals and preprocessor directives from breaking your Markdown C++ notes. Escapes them as you type or paste, and repairs existing notes. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Cpp-Input-Guard

> [!Note] 插件名片
> - 插件名称：Cpp-Input-Guard
> - 插件作者：yaki-blake
> - 插件说明：Stops angle brackets, square brackets, asterisks, underscores, double equals and preprocessor directives from breaking your Markdown C++ notes. Escapes them as you type or paste, and repairs existing notes. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['编辑工具', '编程与脚本', '文字处理', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/yaki-blake/Cpp-Input-Guard)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?cpp-input-guard)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/yaki-blake/Cpp-Input-Guard/master/README.md)



## 概述

Cpp-Input-Guard 专为解决 C++ 笔记中 Markdown 语法冲突而设计。它通过自动转义尖括号、方括号、星号、下划线、双等号及预处理指令等触发字符，防止代码片段被误识别为 HTML 标签、链接、高亮或强调格式。插件在输入或粘贴时即时生效，同时提供修复功能，可一键处理已存在的旧笔记，确保代码内容在渲染时保持原样，不再出现内容吞没、格式错乱或标签误收集等问题。

典型场景包括记录 STL 容器用法或编写预处理宏定义。例如，当你输入 `greater<int>` 时，插件会自动将其转义，避免后续内容被当作未闭合的 HTML 元素而消失；输入 `#include <iostream>` 时，指令词会被保护，不再被误判为笔记标签。此外，对于 `arr[5]` 这类数组下标，插件能精准区分普通方括号与 Wiki 链接，确保代码逻辑清晰可见，而正常的双链和脚注语法则完全不受影响。

相比同类插件，Cpp-Input-Guard 具备极高的智能识别能力。它严格区分代码块与正文，围栏代码块和行内代码内的内容一律不处理，且能智能保留行首列表符号、词边界内的下划线变量名以及 `===` 高亮语法。其修复操作是幂等的，不会重复添加转义符，并在每次修复前自动生成带时间戳的备份文件，支持随时回滚，极大降低了误操作风险。

使用前需注意，该插件仅作用于编辑模式，旧笔记需手动执行修复命令。转义会改写源码，虽不影响渲染结果，但会降低原始文本的可读性。若需编写原生 HTML 标签，需先关闭保护开关。此外，YAML 前置元数据中的行内标签写法会被转义导致损坏，建议改用块状写法。整库修复会扫描所有 Markdown 文件，包括库内的备份目录，请谨慎操作。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


