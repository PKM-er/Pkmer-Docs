---
uid: 1786577075718001
title: 'Obsidian 插件：Acorny Sync'
tags: ['第三方工具集成', '数据处理', '效率工具', '学习与教育', 'obsidian插件']
description: '把Acorny里标记的重点内容同步到你的仓库里，保存成Markdown笔记。——Obsidian官方人员尚未对这个插件进行人工审核。'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Acorny Sync

> [!Note] 插件名片
> - 插件名称：Acorny Sync
> - 插件作者：Acorny
> - 插件说明：把Acorny里标记的重点内容同步到你的仓库里，保存成Markdown笔记。——Obsidian官方人员尚未对这个插件进行人工审核。
> - 插件分类：['第三方工具集成', '数据处理', '效率工具', '学习与教育', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/acornyio/acorny-obsidian)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?acorny-sync)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/acornyio/acorny-obsidian/master/README.md)



## 概述

### Acorny Sync插件总结
1. **主要功能**：将Acorny中的高亮内容同步到Obsidian库中，以Markdown笔记形式呈现，每个来源生成一个笔记，且采用追加方式，不会覆盖手动编辑内容。
2. **适用场景**：适用于使用Acorny记录高亮内容，希望将其整合到Obsidian进行统一管理和编辑的用户。
3. **核心特色**：
    - 仅追加内容，幂等操作，保留手动编辑内容，每次同步仅添加新高亮。
    - 以`acorny-source-id`确定来源身份，重命名笔记或来源标题不会创建重复笔记。
    - 支持手动、启动时和按间隔自动同步，同一时间仅运行一次同步。
4. **使用建议**：
    - 先在Acorny创建只读导出令牌。
    - 安装并启用插件，在设置中填入令牌、指定笔记保存文件夹，可按需设置自动同步。
    - 注意不要公开同步或共享插件数据文件夹，因其中包含令牌。最后可通过命令或图标手动触发首次同步。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


