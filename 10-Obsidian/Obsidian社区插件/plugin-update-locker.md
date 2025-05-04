---
uid: 2025042920512320
title: Obsidian 插件：Plugin Update Locker
tags: ['插件管理', '安全与隐私', '自定义命令', 'obsidian插件']
description: 阻止特定插件更新
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Plugin Update Locker

> [!Note] 插件名片
> - 插件名称：Plugin Update Locker
> - 插件作者：Lemon695
> - 插件说明：阻止特定插件更新
> - 插件分类：['插件管理', '安全与隐私', '自定义命令', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/Lemon695/obsidian-plugin-update-locker)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?plugin-update-locker)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/Lemon695/obsidian-plugin-update-locker/master/README.md)

![Plugin Update Locker](https://cdn.pkmer.cn/covers/plugin-update-locker_2_0.png!pkmer)

## 概述

Obsidian插件"Plugin Update Locker"主要用于锁定指定插件的版本更新，通过修改插件manifest.json文件中的版本号来绕过系统更新检测机制，确保插件稳定运行在特定版本，避免因更新导致的兼容性问题或功能变更。用户可在配置页面选择需要锁定的插件，锁定后版本号会变为9999.x.x格式以阻止更新检测，解锁后则恢复原版本号允许正常更新。该插件特别适用于需要长期保持特定插件版本稳定的场景，例如当新版插件移除关键功能或存在兼容性问题时，用户可暂时锁定当前稳定版本，待后续版本完善后再解除锁定。插件开发者因obsidian-smart-connections插件更新导致常用API配置被移除而开发此工具，有效解决了强制更新带来的功能中断问题。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---



