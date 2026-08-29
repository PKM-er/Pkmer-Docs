---
uid: 1786577082796000
title: 'Obsidian 插件：Stardust Importer'
tags: ['第三方工具集成', '模板与链接处理', '数据处理', '多媒体', 'obsidian插件']
description: '通过Templater把已观看的电影（来自Trakt）和完整专辑收听记录（来自Last.fm）导入到参考笔记里。——Obsidian官方人员尚未对这个插件进行人工审核。'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Stardust Importer

> [!Note] 插件名片
> - 插件名称：Stardust Importer
> - 插件作者：Sonophage
> - 插件说明：通过Templater把已观看的电影（来自Trakt）和完整专辑收听记录（来自Last.fm）导入到参考笔记里。——Obsidian官方人员尚未对这个插件进行人工审核。
> - 插件分类：['第三方工具集成', '模板与链接处理', '数据处理', '多媒体', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/sonophage/stardust-importer)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?stardust-importer)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/sonophage/stardust-importer/master/README.md)



## 概述

### Stardust Importer插件总结
1. **主要功能**：通过Templater将Trakt上观看的电影和Last.fm上完整收听的专辑信息导入Obsidian笔记库，分别创建“Movies - <title>”和“Albums - <title>”笔记。
2. **适用场景**：适合喜欢记录观影和听专辑经历，希望在Obsidian中整理相关信息的用户。
3. **核心特色**：借助现有模板生成笔记，避免重复创建笔记结构；电影重看仅更新时间和标记，专辑重听设置特定标记；专辑使用会话检测器识别完整收听。
4. **使用建议**：先执行`npm install && npm run build`，将插件软链接到`.obsidian/plugins/stardust-importer`并启用；在设置中添加Trakt客户端ID/密钥、连接Trakt，添加Last.fm API密钥和用户名；可选择对Trakt数据进行回填。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


