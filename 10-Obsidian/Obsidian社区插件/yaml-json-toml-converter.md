---
uid: 1793625611877001
title: "Obsidian 插件：Data Format Converter"
tags: ["数据处理", "编辑工具", "效率工具", "obsidian插件"]
description: "Convert selected YAML, JSON, or TOML data with a preview and checks for data loss. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Data Format Converter

> [!Note] 插件名片
> - 插件名称：Data Format Converter
> - 插件作者：theluckystrike
> - 插件说明：Convert selected YAML, JSON, or TOML data with a preview and checks for data loss. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['数据处理', '编辑工具', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/theluckystrike/yaml-json-toml-converter)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?yaml-json-toml-converter)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/theluckystrike/yaml-json-toml-converter/master/README.md)



## 概述

Data Format Converter 专为解决 Obsidian 笔记中数据格式转换的痛点而设计。它允许你选中 YAML、JSON 或 TOML 数据，在预览确认无误后，将其安全地替换为目标格式。该插件的核心价值在于“防丢失”机制：在写入前，它会严格校验数据完整性，确保转换后的数值、结构没有发生意外变更，从而避免手动复制粘贴带来的格式错乱或数据损坏。

典型场景包括整理技术文档或配置示例。例如，当你有一篇包含 YAML 配置代码块的笔记，需要将其转换为 JSON 以便前端使用，或转为 TOML 以适配 Rust 项目时，只需选中代码块内容（不含围栏），运行命令即可快速生成对应格式。另一个场景是数据清洗，比如将 JSON 中的 null 值转换为 TOML 时，插件会提前拦截并提示错误，防止生成非法的 TOML 文件。

相比同类工具，该插件最大的特色是极致的数据安全性。它不仅提供预览，还会在转换后重新解析输出并与输入比对，若发现键值丢失或类型改变（如整数变浮点），会直接阻断替换。此外，它具备严格的错误定位能力，能指出 YAML 重复键或 JSON 语法错误的具体位置。Pro 版本还额外支持本地 JSON Schema 校验，以及将多个代码块批量转换为独立文件，适合需要标准化数据输出的用户。

使用前需注意，该插件仅处理选中的纯数据，不识别 Markdown 围栏，且不支持保留注释、引号风格或键顺序。它不适合处理包含复杂日期对象、循环引用或超大数值（超过 JS 安全整数范围）的数据，这些情况会被直接拒绝。此外，若笔记在预览期间发生任何编辑，替换操作将被锁定，需重新选中。如果你需要自动批量转换整个库的文件，或希望保留原始注释格式，此插件可能无法满足需求。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


