---
uid: 1786577083191000
title: 'Obsidian 插件：Tidemark'
tags: ['编辑工具', '文字处理', '模板与链接处理', '效率工具', 'obsidian插件']
description: '按需用 YAML 前置元数据的值替换 {{变量}} —— 此插件尚未经过 Obsidian 官方人员的人工审核。'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Tidemark

> [!Note] 插件名片
> - 插件名称：Tidemark
> - 插件作者：Real-Fruit-Snacks
> - 插件说明：按需用 YAML 前置元数据的值替换 {{变量}} —— 此插件尚未经过 Obsidian 官方人员的人工审核。
> - 插件分类：['编辑工具', '文字处理', '模板与链接处理', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/real-fruit-snacks/Tidemark)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?tidemark)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/real-fruit-snacks/Tidemark/master/README.md)



## 概述

### Tidemark插件总结
1. **主要功能**：这是一款用于Obsidian的变量替换插件，可将笔记中`{{variables}}`形式的变量，替换为YAML前置元数据中的对应值，支持嵌套和数组变量，还能设置内联默认值。
2. **适用场景**：适用于在Obsidian笔记中多次引用相同信息的场景，通过定义一次YAML前置元数据，可在笔记正文各处引用。
3. **核心特色**：
    - 颜色编码：编辑时实时显示变量状态，解析成功为薄荷绿，使用默认值为琥珀色，缺失为红色。
    - 支持复杂变量：解析嵌套点符号和数组，并能通过配置分隔符连接数组。
    - 安全可靠：仅通过Obsidian自身API读取和写入前置元数据，保证YAML有效性。
4. **使用建议**：先在笔记的YAML前置元数据中定义好变量值，然后在正文用`{{variable}}`引用，需要替换时使用相应命令，同时可根据颜色快速查看变量状态。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


