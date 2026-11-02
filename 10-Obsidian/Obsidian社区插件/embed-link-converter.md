---
uid: 1793625612522000
title: "Obsidian 插件：Embed Link Converter"
tags: ["模板与链接处理", "编辑工具", "图片与PDF", "obsidian插件"]
description: "Convert Obsidian wiki-link embeds to Markdown image syntax and back. Scope the run to a folder for a pilot, or leave it empty for the whole vault. Preview every change before it is written, with automatic timestamped backups. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Embed Link Converter

> [!Note] 插件名片
> - 插件名称：Embed Link Converter
> - 插件作者：rosswang
> - 插件说明：Convert Obsidian wiki-link embeds to Markdown image syntax and back. Scope the run to a folder for a pilot, or leave it empty for the whole vault. Preview every change before it is written, with automatic timestamped backups. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['模板与链接处理', '编辑工具', '图片与PDF', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/yanqingwang/obsidian-embed-link-converter)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?embed-link-converter)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/yanqingwang/obsidian-embed-link-converter/master/README.md)



## 概述

Embed Link Converter 专门解决 Obsidian 中 Wiki 链接嵌入（如 `![[图片.png]]`）与标准 Markdown 图片语法（如 `![alt](path)`）之间的格式转换问题。它支持双向转换，允许用户在两种语法间自由切换，核心功能在于精准重写嵌入语法，同时严格保留原始文件路径不变，确保转换过程的可逆性与安全性。

典型使用场景包括：当你需要将笔记导出为通用 Markdown 格式以便在其他平台（如 GitHub 或博客）展示时，可将 Wiki 嵌入转换为标准图片语法；反之，若从外部导入包含标准图片语法的文档，也可将其转回 Obsidian 原生的 Wiki 嵌入格式。此外，你可以先指定一个子文件夹进行小范围试点，确认无误后再清空设置以对整个库执行转换，灵活控制操作范围。

该插件的特色在于“只改语法，不改路径”的设计原则，避免了因路径解析错误导致的链接永久失效或不可逆问题。它自动处理含空格或括号的文件名，确保符合 CommonMark 标准。此外，插件提供预览弹窗展示具体变更差异，并自动创建带时间戳的备份，支持一键回滚，极大降低了误操作风险。

使用前需注意，若选择转换“笔记嵌入”（非图片），会改变笔记的渲染方式（从内联摘录变为普通链接），因此默认仅处理图片。该插件不适合需要修改文件实际存储路径、或希望自动解析短路径为相对路径的用户。对于包含特殊字符（如 `<` `>`）的路径或带有标题的标准 Markdown 图片，插件会保持原样不转换，以避免数据丢失。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


