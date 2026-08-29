---
uid: 1786577083427004
title: 'Obsidian 插件：Trust Vault'
tags: ['安全与隐私', '第三方工具集成', '效率工具', '文件管理', 'obsidian插件']
description: '用 tvault-core 命令行工具把你的笔记锁进一个加密容器，还能再解锁它们。——Obsidian 官方人员尚未对这个插件进行人工审核。'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Trust Vault

> [!Note] 插件名片
> - 插件名称：Trust Vault
> - 插件作者：NameLess
> - 插件说明：用 tvault-core 命令行工具把你的笔记锁进一个加密容器，还能再解锁它们。——Obsidian 官方人员尚未对这个插件进行人工审核。
> - 插件分类：['安全与隐私', '第三方工具集成', '效率工具', '文件管理', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/namelesscorp/tvault-obsidian-plugin)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?tvault)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/namelesscorp/tvault-obsidian-plugin/master/README.md)



## 概述

### Trust Vault插件总结
1. **主要功能**：这是一款仅适用于桌面端的Obsidian插件，借助`tvault-core` CLI，可将Obsidian库转变为可锁定的保险箱。能对笔记进行加密存储，锁定时将笔记加密到容器并移除明文，解锁时从容器恢复笔记。
2. **适用场景**：适用于需要对笔记进行加密保护，防止他人未经授权访问的场景，如存储敏感信息、隐私内容等。
3. **核心特色**：提供直观的侧边栏面板，显示当前状态和主要操作；支持生成Shamir共享令牌；展示容器详细信息，如创建时间、大小、安全评分等；可通过绘制收集熵来增强容器密钥随机性；`.obsidian`目录不会被加密或移除。
4. **使用建议**：可通过丝带图标或命令打开侧边栏面板操作。锁定前确保备份重要数据；若使用`none`类型令牌，牢记容器密码；生成的Shamir共享令牌可保存到文件或单独复制，妥善保管。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


