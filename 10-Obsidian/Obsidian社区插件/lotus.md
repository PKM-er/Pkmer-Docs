---
uid: 1786577079735000
title: 'Obsidian 插件：Lotus'
tags: ['编程与脚本', '编辑工具', '效率工具', 'obsidian插件']
description: '在Obsidian里运行普通的围栏式Markdown代码块，同时保留原生的语法高亮显示。——此插件尚未经过Obsidian官方人员的人工审核。'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Lotus

> [!Note] 插件名片
> - 插件名称：Lotus
> - 插件作者：James Karlsson & Thomas Goldman
> - 插件说明：在Obsidian里运行普通的围栏式Markdown代码块，同时保留原生的语法高亮显示。——此插件尚未经过Obsidian官方人员的人工审核。
> - 插件分类：['编程与脚本', '编辑工具', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/tzadikimbiu/lotus)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?lotus)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/tzadikimbiu/lotus/master/README.md)



## 概述

### 主要功能
Lotus 是一款用于 Obsidian 的插件，可执行普通的 Markdown 代码块，并在代码块下方渲染临时输出，同时保留原生语法高亮。

### 适用场景
适用于研究和探索性笔记，能让代码、证明、求解器查询及运行时输出在文档中保持可读性。

### 核心特色
- 不将源代码块重写为特定格式。
- 为普通代码块添加执行控件，根据围栏信息字符串解析支持的语言别名来识别可执行代码块。
- 为每个代码块生成唯一 ID，用于输出替换和工具栏状态管理，重新运行代码块会更新现有输出面板。

### 使用建议
- 可通过社区插件目录或手动下载文件的方式安装。
- 该插件默认在本地执行代码块且无沙箱或隔离机制，运行不可信笔记中的代码块可能执行恶意命令。运行前会显示同意模态框，为保障安全，可设置“执行组”，在 Docker/Podman 容器或远程 SSH 等环境中运行代码。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


