---
uid: 1786577082435000
title: 'Obsidian 插件：Seafile Sync Improved'
tags: ['第三方工具集成', '效率工具', '备份与恢复', '文件管理', 'obsidian插件']
description: '用Seafile在不同设备间同步笔记。——此插件尚未经过Obsidian官方人员的人工审核。'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Seafile Sync Improved

> [!Note] 插件名片
> - 插件名称：Seafile Sync Improved
> - 插件作者：tionis
> - 插件说明：用Seafile在不同设备间同步笔记。——此插件尚未经过Obsidian官方人员的人工审核。
> - 插件分类：['第三方工具集成', '效率工具', '备份与恢复', '文件管理', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/tionis/obsidian-seafile-improved)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?seafile-improved)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/tionis/obsidian-seafile-improved/master/README.md)



## 概述

### Seafile Sync Improved插件总结
1. **主要功能**：借助Seafile这一开源、可自建的文件同步共享方案，实现Obsidian笔记在多设备间的同步。
2. **适用场景**：适用于需要在不同设备上同步Obsidian笔记，且希望使用Seafile进行数据管理的用户。
3. **核心特色**：
    - 支持通过Seafile通知服务器实现实时同步，自动回退到定期同步，且在界面显示连接状态。
    - 提供手动API令牌认证方式。
    - 采用标准Seafile忽略规则，通过`seafile - ignore.txt`文件设置。
    - 有Obsidian感知同步策略，可分别控制多方面设置，还能对插件单独覆盖设置。
    - 自动冲突合并更安全，以最后同步版本为共同祖先。
    - 同步更安全，包含上传对象验证等。
4. **使用建议**：若需实时同步可确保Seafile通知服务器正常；对于不适合密码或浏览器SSO登录的场景，可使用手动API令牌认证；可根据需求编辑`seafile - ignore.txt`和各插件同步设置。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


