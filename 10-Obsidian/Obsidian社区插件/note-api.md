---
uid: 1786577080935005
title: 'Obsidian 插件：Note API'
tags: ['编程与脚本', '第三方工具集成', '效率工具', '文件管理', 'obsidian插件']
description: '开放一个本地主机的HTTP API（有API密钥保护），用于查看、创建、编辑和删除仓库笔记。——此插件尚未经过Obsidian官方人员的人工审核。'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Note API

> [!Note] 插件名片
> - 插件名称：Note API
> - 插件作者：fengshuzi
> - 插件说明：开放一个本地主机的HTTP API（有API密钥保护），用于查看、创建、编辑和删除仓库笔记。——此插件尚未经过Obsidian官方人员的人工审核。
> - 插件分类：['编程与脚本', '第三方工具集成', '效率工具', '文件管理', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/fengshuzi/note-api)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?note-api)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/fengshuzi/note-api/master/README.md)



## 概述

### Note API插件总结
1. **主要功能**：通过受API密钥保护的本地HTTP API，可对Obsidian库中的笔记进行查看、创建、编辑和删除操作，还能解析维基链接、提供二进制资源服务，读取每日笔记配置。
2. **适用场景**：适用于需要从外部工具访问和操作Obsidian笔记库的场景，可与Note Tab等工具配合使用。
3. **核心特色**：仅在本地主机运行，保障安全性；请求需API密钥，首次运行自动生成；支持对笔记进行完整的CRUD操作；维基链接解析与Obsidian应用内一致；可提供库内的二进制资源；能读取每日笔记配置；仅支持桌面端。
4. **使用建议**：使用时注意保管好API密钥，可在设置中复制或重新生成。配置好端口，所有请求都需携带API密钥，GET请求也可通过`?key=`传递。操作时遵循API文档中的请求方法和路径规范。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


