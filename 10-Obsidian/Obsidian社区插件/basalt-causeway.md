---
uid: 1786577076269000
title: 'Obsidian 插件：Basalt Causeway'
tags: ['第三方工具集成', '移动端优化', '发布工具', 'obsidian插件']
description: '把这个仓库发布到GitHub仓库，这样Basalt就能在手机上读取它了。——Obsidian官方人员尚未对这个插件进行人工审核。'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Basalt Causeway

> [!Note] 插件名片
> - 插件名称：Basalt Causeway
> - 插件作者：kpndevroot
> - 插件说明：把这个仓库发布到GitHub仓库，这样Basalt就能在手机上读取它了。——Obsidian官方人员尚未对这个插件进行人工审核。
> - 插件分类：['第三方工具集成', '移动端优化', '发布工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/kpndevroot/obsidian-basalt-causeway)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?basalt-causeway)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/kpndevroot/obsidian-basalt-causeway/master/README.md)



## 概述

### Basalt Causeway插件总结
1. **主要功能**：将Obsidian库发布到GitHub仓库，使Basalt能在手机上读取，实现Obsidian桌面端与Basalt移动端笔记的双向同步。
2. **适用场景**：适用于需要在桌面和移动端同步Obsidian笔记，且希望借助GitHub进行版本管理的用户。
3. **核心特色**：通过与GitHub的Git Data (Trees) API通信，而非直接使用git；每次同步仅产生一次提交，无论文件数量；使用`requestUrl()`绕过CORS，不依赖Node API，可在Obsidian移动端运行；明确检测并显示冲突，无合并机制。
4. **使用建议**：安装前仔细阅读插件对访问权限的说明，因插件会与GitHub网络交互，以你身份认证读写配置的分支。同时，由于无合并机制，需留意冲突情况，手动处理分支差异。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


