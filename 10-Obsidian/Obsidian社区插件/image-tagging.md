---
uid: 1791709367743000
title: 'Obsidian 插件：Image Tagging'
tags: ['图片与PDF', '文件管理', '数据处理', 'obsidian插件']
description: ''
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Image Tagging

> [!Note] 插件名片
> - 插件名称：Image Tagging
> - 插件作者：豌豆射手
> - 插件说明：
> - 插件分类：['图片与PDF', '文件管理', '数据处理', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/superbaseballman/obsidian-image-tagging-plugin)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?image-tagging)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/superbaseballman/obsidian-image-tagging-plugin/master/README.md)



## 概述

**主要功能**
该插件为 Obsidian 提供强大的媒体附件标签管理系统。它允许用户为图片添加自定义标签、标题和描述，支持可视化图库浏览、侧边栏信息面板编辑，以及通过标签或关键词快速搜索。此外，它还具备批量扫描库内图片、从当前页面提取图片等功能，实现了对媒体文件的高效分类与检索。

**适用场景**
适用于拥有大量图片、视频等媒体附件的笔记库，特别是需要频繁引用、分类或管理视觉素材的用户。无论是个人知识管理、摄影作品集整理，还是项目文档中的多媒体资源归档，都能显著提升管理效率。

**核心特色**
1. **稳定存储**：采用 SQLite 数据库存储，避免频繁 JSON 读写，性能更优。
2. **内容指纹**：使用文件 MD5 作为唯一标识，重命名文件不丢失标签，内容变更时智能继承元数据。
3. **跨平台兼容**：基于纯 TypeScript 和 sql.js，完美支持桌面端及 Android/iOS 移动端，无原生模块依赖。
4. **高性能启动**：异步加载设置与数据库，优化启动速度，减少界面卡顿。

**使用建议**
建议首次启用后执行“扫描库中的所有图片”以建立索引。可利用“扫描指定文件夹”功能聚焦特定目录，节省资源。注意定期备份 `.obsidian/image-tags.db` 文件以防数据丢失。若从旧版 JSON 升级，插件会自动迁移数据，请确保迁移成功后再清理旧文件。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


