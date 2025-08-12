---
uid: 2025081220015024
title: 'Obsidian 插件：Object Oriented Thinking'
tags: ['编程与脚本', '学习与教育', '效率工具', '编辑工具', 'obsidian插件']
description: '给笔记添加类似继承的功能。'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Object Oriented Thinking

> [!Note] 插件名片
> - 插件名称：Object Oriented Thinking
> - 插件作者：Tiago Jacinto
> - 插件说明：给笔记添加类似继承的功能。
> - 插件分类：['编程与脚本', '学习与教育', '效率工具', '编辑工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/TiagoJacinto/obsidian-object-oriented-thinking)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?object-oriented-thinking)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/TiagoJacinto/obsidian-object-oriented-thinking/master/README.md)



## 概述

### 主要功能
为Obsidian笔记添加类似继承的行为，可在笔记的前置元数据中设置继承关系，并通过实用方法查询笔记的继承关系。

### 适用场景
适用于需要对笔记进行分类管理、构建层级关系的场景，比如构建知识体系、项目任务管理等，方便快速查找具有特定继承关系的笔记。

### 核心特色
- 提供简洁的方式为笔记设置继承关系，只需在前置元数据中添加链接。
- 提供实用方法查询笔记是否为某个父笔记的后代，便于筛选和展示相关笔记。

### 使用建议
- 若要设置继承关系，在笔记前置元数据中添加 `extends` 属性并指向父笔记链接。
- 可使用 `oot.getObjectFileByLink` 和 `oot.getObjectFileByPath` 方法查询笔记继承关系。
- 若有自定义需求，可定义自己的函数或使用如 CustomJS 等 JavaScript 加载器插件。手动安装时，将 `main.js`、`styles.css`、`manifest.json` 复制到指定目录。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


