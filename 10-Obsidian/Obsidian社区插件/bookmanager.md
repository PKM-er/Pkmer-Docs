---
uid: 1791709365685000
title: 'Obsidian 插件：BookManager'
tags: ['第三方工具集成', '文件管理', '效率工具', 'obsidian插件']
description: ''
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：BookManager

> [!Note] 插件名片
> - 插件名称：BookManager
> - 插件作者：crabeater
> - 插件说明：
> - 插件分类：['第三方工具集成', '文件管理', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/crab-taster/obsidian-findmybook-plugin)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?bookmanager)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/crab-taster/obsidian-findmybook-plugin/master/README.md)



## 概述

**1. 主要功能**
该插件实现「书放哪了」小程序与 Obsidian 的双向同步。支持将藏书信息、阅读计划及笔记导入 Vault，生成结构化 Markdown 文件；同时提供本地书架网格视图，支持基于书名、分类、状态等多维度的快速筛选与检索。

**2. 适用场景**
适用于拥有实体藏书且使用「书放哪了」小程序管理的用户。适合希望将分散的图书数据集中到 Obsidian 进行知识管理，或利用 Obsidian 强大的链接与检索功能深化阅读笔记整理的场景。

**3. 核心特色**
- **双向同步**：通过扫码实现数据下载与修改回传，仅同步变更字段，避免覆盖本地编辑。
- **本地化视图**：侧边栏提供可视化书架，所有筛选操作均在本地完成，响应迅速。
- **增量更新**：智能识别文件状态，仅创建或更新有变化的内容，保持数据整洁。
- **安全护栏**：检测到未回传的本地修改时，自动阻止正向同步，防止数据丢失。

**4. 使用建议**
- 首次使用需通过命令面板或侧边栏发起同步，扫码连接小程序。
- 若在 Obsidian 中修改了藏书属性，务必先执行“反向同步”再执行正向同步，以遵循插件的安全护栏机制。
- 注意该插件为闭源专有许可，仅限个人及非商业用途，严禁用于商业场景或二次分发。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


