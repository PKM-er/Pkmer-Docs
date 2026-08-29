---
uid: 1786577083884000
title: 'Obsidian 插件：Yet Another All-In-One'
tags: ['第三方工具集成，备份与恢复，效率工具，自定义命令', 'obsidian插件']
description: '一款集 Git 同步等多种功能于一体的插件——毕竟一个插件哪能满足需求呢。——此插件尚未经过 Obsidian 官方人员的人工审核。'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Yet Another All-In-One

> [!Note] 插件名片
> - 插件名称：Yet Another All-In-One
> - 插件作者：cmdaeo
> - 插件说明：一款集 Git 同步等多种功能于一体的插件——毕竟一个插件哪能满足需求呢。——此插件尚未经过 Obsidian 官方人员的人工审核。
> - 插件分类：['第三方工具集成，备份与恢复，效率工具，自定义命令', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/cmdaeo/obsidian-plugin)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?yet-another-all-in-one)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/cmdaeo/obsidian-plugin/master/README.md)



## 概述

### 《Yet Another All-In-One插件总结》
1. **主要功能**：这是一款集成多种功能的Obsidian插件，核心是实现本地优先、跨平台的Git同步，支持在Windows和Android上运行。此外，还提供详细的审计日志。
2. **适用场景**：适用于需要在不同设备间同步Obsidian笔记的用户，特别是那些注重本地数据安全，不想依赖专有云服务的人群。
3. **核心特色**：采用纯JavaScript的isomorphic - git引擎，不依赖原生二进制文件；在Android上使用Obsidian的`requestUrl`保障安全；支持自动同步，文件变化时自动提交和推送；启动时自动拉取更新；在`_System/SyncLog.md`中记录详细同步历史。
4. **使用建议**：先从GitHub最新版本下载`main.js`、`manifest.json`、`styles.css`，复制到`.obsidian/plugins/yet-another-all-in-one/`目录，在社区插件中启用。设置Git同步时，在插件设置里配置远程URL，通过GitHub OAuth或个人访问令牌连接，首次使用可克隆远程仓库到本地，已有仓库则进行初始化。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


