---
uid: 1786577081550001
title: 'Obsidian 插件：Popup Dictionary'
tags: ['文字处理', '学习与教育', '第三方工具集成', 'obsidian插件']
description: '当你选中某个单词或按住 Ctrl 键悬停其上时，会弹出该单词的释义，它借助维基词典提供多种语言的释义。——此插件尚未经过 Obsidian 工作人员的人工审核。'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Popup Dictionary

> [!Note] 插件名片
> - 插件名称：Popup Dictionary
> - 插件作者：Nikitas Tsiris
> - 插件说明：当你选中某个单词或按住 Ctrl 键悬停其上时，会弹出该单词的释义，它借助维基词典提供多种语言的释义。——此插件尚未经过 Obsidian 工作人员的人工审核。
> - 插件分类：['文字处理', '学习与教育', '第三方工具集成', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/ntsiris/obsidian-popup-dictionary)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?popup-dictionary)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/ntsiris/obsidian-popup-dictionary/master/README.md)



## 概述

### Popup Dictionary插件总结
1. **主要功能**：在Obsidian中，当选中单词或按住Ctrl（可配置）悬停在单词上时，以小弹窗形式显示该单词的定义，定义来自Wiktionary。
2. **适用场景**：适用于在Obsidian笔记中遇到陌生单词，需要快速查询释义的场景，支持多种语言。
3. **核心特色**：
    - 支持选中查询和悬停查询，可绑定快捷键或开启自动查询。
    - 利用`Intl.Segmenter`检测单词边界，能处理无空格分隔的文字，如中文、日语等。
    - 可配置语言白名单、示例开关、释义数量、悬停延迟和修饰键等。
    - 弹窗样式适配主题，结果链接回Wiktionary页面。
4. **使用建议**：使用时可根据自身需求配置语言白名单以聚焦特定语言的释义。虽调用的是英文版本Wiktionary API，但能查询多种语言单词，无需更改版本。若想自动查询，可开启自动选中查询功能；若想快速操作，可将查询命令绑定到热键。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


