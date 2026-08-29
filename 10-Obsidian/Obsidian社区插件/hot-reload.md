---
uid: 1786577078710000
title: 'Obsidian 插件：Hot Reload'
tags: ['自动化与AI', '编程与脚本', '效率工具', 'obsidian插件']
description: '开发中的插件文件有变动时自动重新加载——此插件尚未经过Obsidian官方人员手动审核。'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Hot Reload

> [!Note] 插件名片
> - 插件名称：Hot Reload
> - 插件作者：pjeby
> - 插件说明：开发中的插件文件有变动时自动重新加载——此插件尚未经过Obsidian官方人员手动审核。
> - 插件分类：['自动化与AI', '编程与脚本', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/pjeby/hot-reload)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?hot-reload)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/pjeby/hot-reload/master/README.md)



## 概述

### 主要功能
自动监测正在开发的Obsidian插件的`main.js`、`styles.css`和`manifest.json`文件变化，在文件改动停止约0.75秒后，自动禁用并重新启用该插件。同时能监测`.git`或`.hotreload`的增减并更新监控列表。

### 适用场景
适用于Obsidian插件开发者，可避免频繁手动重启Obsidian或在插件设置中禁用、重新启用插件。

### 核心特色
无需手动配置热重载列表，将插件置于版本控制下或创建`.hotreload`文件即可自动加入监控。`.hotreload`文件不会随插件发布到市场，不影响其他用户。能自动启用未在设置中启用的插件，方便开发调试。

### 使用建议
开发者在开发插件时安装此插件，将插件项目置于版本控制或添加`.hotreload`文件。若插件加载出错，再次保存文件，热重载功能会尝试重新启用插件。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


