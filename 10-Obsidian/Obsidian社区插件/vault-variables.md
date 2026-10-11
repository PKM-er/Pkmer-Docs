---
uid: 1791709370895000
title: 'Obsidian 插件：Vault Variables'
tags: ['模板与链接处理', '编辑工具', '文字处理', 'obsidian插件']
description: 'Define variables once and use them as {{name}} anywhere in your notes. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Vault Variables

> [!Note] 插件名片
> - 插件名称：Vault Variables
> - 插件作者：nicostav
> - 插件说明：Define variables once and use them as {{name}} anywhere in your notes. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['模板与链接处理', '编辑工具', '文字处理', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/nicostav/vault-variables)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?vault-variables)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/nicostav/vault-variables/master/README.md)



## 概述

**1. 主要功能**
Vault Variables 允许用户定义全局变量，并在笔记中以 `{{name}}` 格式引用。只需在设置中修改一次变量值，所有引用该变量的笔记内容会自动同步更新，无需手动批量替换。

**2. 适用场景**
适用于管理包含重复信息（如服务器 IP、主机名、用户名、API 密钥等）的技术文档、配置说明或运维手册。特别适合那些分散在多个笔记片段中、需要保持一致性的基础设施配置记录。

**3. 核心特色**
*   **实时同步**：仅在阅读视图（Reading View）中替换，编辑时显示原始变量名，确保文件不被意外修改。
*   **智能提示**：输入 `{{` 时弹出自动补全列表，方便快速插入。
*   **错误高亮**：未定义的变量会被高亮显示，便于发现拼写错误或遗漏配置。
*   **代码块友好**：代码块的复制按钮会复制替换后的实际值，而非变量名。

**4. 使用建议**
建议在设置中集中管理常用变量。由于替换仅在阅读视图生效，编辑时请留意变量名拼写。利用高亮功能定期检查未定义变量，确保配置信息的完整性和准确性。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


