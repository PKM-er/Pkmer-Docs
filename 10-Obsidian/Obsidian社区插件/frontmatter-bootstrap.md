---
uid: 1786577077937003
title: 'Obsidian 插件：Frontmatter Bootstrap'
tags: ['模板与链接处理', '自动化与AI', '效率工具', '编辑工具', 'obsidian插件']
description: '新建笔记时自动插入稳定的YAML前置元数据模板。——此插件尚未经过Obsidian官方人员的人工审核。'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Frontmatter Bootstrap

> [!Note] 插件名片
> - 插件名称：Frontmatter Bootstrap
> - 插件作者：Joe
> - 插件说明：新建笔记时自动插入稳定的YAML前置元数据模板。——此插件尚未经过Obsidian官方人员的人工审核。
> - 插件分类：['模板与链接处理', '自动化与AI', '效率工具', '编辑工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/gmcheck/frontmatter-bootstrap)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?frontmatter-bootstrap)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/gmcheck/frontmatter-bootstrap/master/README.md)



## 概述

### Frontmatter Bootstrap插件总结
1. **主要功能**
    - 新建空Markdown笔记时自动插入YAML元数据模板。
    - 可选开启保存时自动更新`updated`日期。
    - 执行只读的元数据健康检查并生成报告笔记。
2. **适用场景**
适用于使用Obsidian Properties、Dataview、Bases及标准YAML元数据的用户，在桌面端和移动端均可使用。
3. **核心特色**
    - 仅在文件为空、无现有元数据且扩展名为`.md`时插入模板，不会覆盖已设置的元数据键。
    - 自动更新`updated`日期时，不修改`created`和笔记正文，更新有500ms防抖。
    - 元数据健康检查可按当前笔记、当前文件夹（递归）、整个库进行，仅检查有核心字段的笔记。
4. **使用建议**
可在设置中覆盖默认模板（支持`{{date}}`），若不需要自动更新`updated`日期，可在设置中关闭。通过命令面板执行元数据健康检查。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


