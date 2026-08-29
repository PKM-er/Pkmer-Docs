---
uid: 1786577079120001
title: 'Obsidian 插件：Inline Secret Block'
tags: ['安全与隐私', '自动化与AI', '效率工具', 'obsidian插件']
description: '自动用AES - 256 - GCM算法加密笔记里的代码块形式保密内容。支持多密钥密码短语，能让密码和令牌在仓库同步、备份以及被AI程序读取时都安然无恙。——此插件尚未经过Obsidian官方人员人工审核。'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Inline Secret Block

> [!Note] 插件名片
> - 插件名称：Inline Secret Block
> - 插件作者：Vladimir Artamonov
> - 插件说明：自动用AES - 256 - GCM算法加密笔记里的代码块形式保密内容。支持多密钥密码短语，能让密码和令牌在仓库同步、备份以及被AI程序读取时都安然无恙。——此插件尚未经过Obsidian官方人员人工审核。
> - 插件分类：['安全与隐私', '自动化与AI', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/vnrtmnv/obsidian-inline-secret-block)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?inline-secret-block)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/vnrtmnv/obsidian-inline-secret-block/master/README.md)



## 概述

### 插件名称
Inline Secret Block

### 主要功能
使用AES - 256 - GCM和密码短语对笔记中的敏感信息进行加密，支持多行代码块和单行内联代码跨度加密。

### 适用场景
当笔记库会被同步服务、备份工具或AI代理读取，而你不希望密码、令牌等机密信息以明文形式存在时使用。

### 核心特色
- 自动加密：输入`secret`块后，离开时自动提示输入密码短语并加密成`secret - lock`形式。
- 多密码支持：同一会话可使用多个密码短语，能自由选择加密密钥。
- 阅读体验好：阅读视图中，加密块显示为带操作按钮的卡片，方便查看、编辑和复制内容。

### 使用建议
- 用`secret`语言包裹敏感内容，输入结束后会弹出模态框要求输入密码短语。
- 若不想加密，按取消或Esc键保留明文。
- 修改加密块内容会再次弹出提示框，未改动则不再提示。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


