---
uid: 1786577083695007
title: 'Obsidian 插件：Wayback Linker'
tags: ['第三方工具集成', '模板与链接处理', '编辑工具', '效率工具', 'obsidian插件']
description: '用互联网档案（Wayback Machine）存档当前活跃笔记里的外部链接，再把这些链接替换成存档快照的网址。——Obsidian官方人员尚未手动审核此插件。'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Wayback Linker

> [!Note] 插件名片
> - 插件名称：Wayback Linker
> - 插件作者：Real-Fruit-Snacks
> - 插件说明：用互联网档案（Wayback Machine）存档当前活跃笔记里的外部链接，再把这些链接替换成存档快照的网址。——Obsidian官方人员尚未手动审核此插件。
> - 插件分类：['第三方工具集成', '模板与链接处理', '编辑工具', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/real-fruit-snacks/wayback-linker)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?wayback-linker)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/real-fruit-snacks/wayback-linker/master/README.md)



## 概述

### Wayback Linker插件总结
1. **主要功能**：将笔记中的外部http(s)链接发送到互联网档案馆的“立即保存页面”服务，待抓取完成后，把原链接替换为`web.archive.org`的存档快照链接。
2. **适用场景**：适用于需要长期保存引用外部链接的笔记场景，避免因原网页更改或消失导致链接失效。可处理当前激活笔记、整个知识库或单个外部链接。
3. **核心特色**：支持三种存档范围；长时间操作时有实时进度窗口，显示每个URL状态并可取消，状态栏还有可点击的计数器；仅在存档成功时替换链接，失败或取消则保留原链接。
4. **使用建议**：若仅需处理当前笔记的外部链接，可点击 ribbon 按钮或使用对应命令；处理整个知识库时，使用相应命令并确认链接、笔记和URL数量；若只想存档单个链接，在编辑器中右键该外部URL操作。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


