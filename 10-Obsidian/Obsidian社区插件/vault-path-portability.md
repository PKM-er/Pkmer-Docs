---
uid: 1793625624122000
title: "Obsidian 插件：Vault Path Portability"
tags: ["文件管理", "效率工具", "数据处理", "obsidian插件"]
description: "Find vault paths that can fail when moved between devices. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Vault Path Portability

> [!Note] 插件名片
> - 插件名称：Vault Path Portability
> - 插件作者：theluckystrike
> - 插件说明：Find vault paths that can fail when moved between devices. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['文件管理', '效率工具', '数据处理', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/theluckystrike/vault-path-portability)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?vault-path-portability)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/theluckystrike/vault-path-portability/master/README.md)



## 概述

Vault Path Portability 旨在解决 Obsidian 库在 Windows、macOS、Linux 及移动端之间迁移时，因文件系统规则差异导致的路径失效问题。它通过扫描库内所有笔记、附件及文件夹，识别出在目标系统上可能引发冲突或错误的文件名。核心功能包括检测大小写折叠冲突（如 `Note.md` 与 `note.md`）、Windows 保留设备名（如 CON、NUL）、非法字符、尾随空格或点号，以及超过 255 字节的路径长度风险。扫描结果会按违规规则分组展示，帮助用户在移动数据前发现潜在隐患。

典型使用场景包括跨平台同步前的预检。例如，当你计划将主要在 macOS 上使用的库同步到 Windows 电脑时，插件能提前发现那些在 macOS 上合法但在 Windows 上被视为保留名的文件，避免同步失败或文件丢失。另一个场景是整理库结构时，若你重命名了包含特殊字符的文件夹，插件可快速定位所有受影响的路径，确保内部链接和文件访问在迁移后依然正常。

相比 Safe Filename Linter 等自动替换非法字符的插件，Vault Path Portability 提供的是只读报告，不会自动修改文件，适合需要人工审核迁移风险的场景。其特色在于能识别大小写折叠冲突和 Windows 特定保留名，并支持将完整报告复制为 Markdown 格式，方便粘贴到笔记中作为迁移检查清单。Pro 版本还增加了自动扫描、状态栏计数及导出报告到笔记的功能，但基础扫描和手动重命名建议预览在免费层即可使用。

使用前请注意，该插件不检测 NFC/NFD 规范化冲突，因为 Obsidian 索引已对此进行标准化，此类问题需单独检查源文件系统。此外，它不适合需要全自动批量重命名的需求，因为应用重命名建议是 Pro 功能且需逐个确认。扫描仅反映当前库状态，不保证同步服务商或归档文件的完整性，建议在移动库前备份，并在重命名后再次扫描以确认无误。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


