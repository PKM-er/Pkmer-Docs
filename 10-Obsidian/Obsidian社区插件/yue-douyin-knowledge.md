---
uid: 1791709371223000
title: 'Obsidian 插件：Yue Douyin Knowledge'
tags: ['第三方工具集成', '数据处理', '文件管理', 'obsidian插件']
description: 'Import Douyin captions, searches, and related content into a local Markdown knowledge base. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Yue Douyin Knowledge

> [!Note] 插件名片
> - 插件名称：Yue Douyin Knowledge
> - 插件作者：孤月
> - 插件说明：Import Douyin captions, searches, and related content into a local Markdown knowledge base. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['第三方工具集成', '数据处理', '文件管理', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/yuegu7800/yue-douyin-knowledge)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?yue-douyin-knowledge)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/yuegu7800/yue-douyin-knowledge/master/README.md)



## 概述

**1. 主要功能**
该插件可将抖音分享链接、关键词搜索结果及关联推荐内容导入至本地 Obsidian Markdown 知识库。支持批量导入（最多10条），通过稳定的 `douyin_id` 自动去重，并优先使用可见字幕 OCR，辅以本地 Whisper 语音识别作为后备方案。

**2. 适用场景**
适用于 Windows 10/11 用户，需配合独立安装的“Yue Douyin Knowledge”伴侣服务及 FFmpeg 使用。适合希望将抖音视频内容转化为结构化笔记、建立个人知识管理体系的用户。

**3. 核心特色**
*   **隐私安全**：无遥测数据，笔记仅写入当前库；视频/音频为临时文件，提取知识后由服务自动删除。
*   **独立实现**：不继承旧插件代码，基于产品规范独立开发。
*   **结构化诊断**：提供处理阶段、错误码及请求 ID，便于排查问题。
*   **灵活配置**：支持保存轮播图至库中，默认连接本地服务地址。

**4. 使用建议**
确保已安装 Obsidian 1.4.0+ 及伴侣服务。首次使用需在伴侣服务中完成抖音登录。建议定期清理临时文件以节省空间，并检查 FFmpeg 依赖是否正常安装，以确保 OCR 和语音识别功能稳定运行。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


