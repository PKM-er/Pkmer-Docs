---
uid: 1786577076961003
title: 'Obsidian 插件：Code File Embed'
tags: ['编程与脚本', '编辑工具', '效率工具', 'obsidian插件']
description: '通过代码文件围栏块，将仓库文件的内容以语法高亮代码块的形式嵌入。——此插件尚未经过Obsidian官方人员的人工审核。'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Code File Embed

> [!Note] 插件名片
> - 插件名称：Code File Embed
> - 插件作者：Willian Saez
> - 插件说明：通过代码文件围栏块，将仓库文件的内容以语法高亮代码块的形式嵌入。——此插件尚未经过Obsidian官方人员的人工审核。
> - 插件分类：['编程与脚本', '编辑工具', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/williansaez/code-ref-vault)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?codefile)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/williansaez/code-ref-vault/master/README.md)



## 概述

### 插件名称
Code File Embed

### 主要功能
通过 `codefile` 代码块，将 Obsidian 库文件内容嵌入为带语法高亮的代码块，无需手动复制粘贴代码。

### 适用场景
适用于在笔记中引用代码文件内容的场景，如编写技术文档、记录代码示例等。

### 核心特色
1. 语法高亮：根据文件扩展名实现语法高亮，复用 Obsidian 渲染器，包含主题和复制按钮。
2. 实时更新：目标文件保存或重命名时，代码块自动重新渲染。
3. 可选的可点击标题：可显示文件路径。
4. 可配置：在设置中可配置文件扩展名与语言的映射关系及最大文件大小。

### 使用建议
使用时，使用 `codefile` 代码块指定文件路径，语言会根据文件扩展名自动推断。支持指定行范围，路径解析方式与 Obsidian 链接相同。开发时可参考文档中的命令，将生成的文件复制到指定目录即可在库中试用。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


