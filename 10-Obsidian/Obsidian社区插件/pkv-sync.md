---
uid: 1786577081456002
title: 'Obsidian 插件：PKV Sync'
tags: ['备份与恢复', '文件管理', '效率工具', '第三方工具集成', 'obsidian插件']
description: '支持自建服务的Obsidian仓库同步，还能进行带版本记录的备份。——此插件尚未经过Obsidian官方人员的人工审核。'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：PKV Sync

> [!Note] 插件名片
> - 插件名称：PKV Sync
> - 插件作者：cyberkurry
> - 插件说明：支持自建服务的Obsidian仓库同步，还能进行带版本记录的备份。——此插件尚未经过Obsidian官方人员的人工审核。
> - 插件分类：['备份与恢复', '文件管理', '效率工具', '第三方工具集成', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/cyberkurry/pkv-sync-plugin)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?pkv-sync)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/cyberkurry/pkv-sync-plugin/master/README.md)



## 概述

### PKV Sync插件总结
1. **主要功能**：通过用户自行托管的服务器实现Obsidian库在多设备间的同步，以Git为数据存储基础，记录每次更改，支持文件历史查看、差异对比、恢复及库级回滚。
2. **适用场景**：适用于需要在多设备间同步Obsidian笔记，且注重数据自主掌控，希望有版本管理功能的用户。
3. **核心特色**：多用户、多库秒级同步；具备完整版本历史；支持并发文本编辑的三方自动合并；可通过Git工具以只读方式克隆库；内置MCP服务器；有管理Web界面、Prometheus指标及备份恢复验证CLI；支持多语言；可一键从Obsidian Sync迁移。
4. **使用建议**：需先自行部署PKV Sync服务器（可参考管理手册），创建首个管理员账户。从Obsidian社区插件目录安装并启用该插件，在插件设置中输入服务器URL和部署密钥，登录后选择或创建库，同步会自动运行，也有手动同步命令。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


