---
uid: 1786577080825001
title: 'Obsidian 插件：MYBOX Sync'
tags: ['第三方工具集成', '文件管理', '自动化与AI', '效率工具', 'obsidian插件']
description: '通过MYBOX开放API，能自动把映射文件夹同步到NAVER MYBOX（上传、重命名、移动、删除），还支持手动拉取。 - 此插件尚未经过Obsidian官方人员的人工审核。'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：MYBOX Sync

> [!Note] 插件名片
> - 插件名称：MYBOX Sync
> - 插件作者：Hyeoncheol Choi
> - 插件说明：通过MYBOX开放API，能自动把映射文件夹同步到NAVER MYBOX（上传、重命名、移动、删除），还支持手动拉取。 - 此插件尚未经过Obsidian官方人员的人工审核。
> - 插件分类：['第三方工具集成', '文件管理', '自动化与AI', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/choihc/mybox-sync)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?mybox-sync)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/choihc/mybox-sync/master/README.md)



## 概述

### MYBOX Sync插件总结
1. **主要功能**：将Obsidian保险库中的映射文件夹与NAVER MYBOX云存储同步。自动推送映射文件夹内文件的创建、编辑、重命名、移动和删除操作，可手动拉取远程更改。
2. **适用场景**：适用于需要将Obsidian笔记同步到NAVER MYBOX云存储的用户，方便数据备份和多设备访问。
3. **核心特色**：基于MYBOX Open API，采用“事件触发 + 批量”模式；仅单向自动推送（本地→远程）加手动拉取，单文件夹映射，删除文件入回收站；无遥测数据、无广告，诊断日志本地存储；仅访问映射文件夹内文件，不接触保险库外文件。
4. **使用建议**：使用前需有启用MYBOX的NAVER账户和个人访问令牌（PAT），否则无法同步；PAT以明文存储，注意安全；可按需在插件设置中关闭诊断日志。后续版本计划支持双向同步、定时轮询等功能。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


