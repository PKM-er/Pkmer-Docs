---
uid: 1786577083477004
title: 'Obsidian 插件：Unabyss'
tags: ['第三方工具集成', '效率工具', '备份与恢复', 'obsidian插件']
description: '在你的Obsidian仓库和Unabyss之间同步笔记和导出内容。——这款插件尚未经过Obsidian官方人员的人工审核。'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Unabyss

> [!Note] 插件名片
> - 插件名称：Unabyss
> - 插件作者：Unabyss
> - 插件说明：在你的Obsidian仓库和Unabyss之间同步笔记和导出内容。——这款插件尚未经过Obsidian官方人员的人工审核。
> - 插件分类：['第三方工具集成', '效率工具', '备份与恢复', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/unabyss/obsidian-plugin)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?unabyss)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/unabyss/obsidian-plugin/master/README.md)



## 概述

### Unabyss插件总结
1. **主要功能**：实现Obsidian库与Unabyss记忆之间的双向OAuth同步。可将笔记以增量、感知变化的方式推送到Unabyss，也能将Unabyss生成的导出文件拉回到库内指定文件夹。
2. **适用场景**：适用于需要在Obsidian和Unabyss之间同步笔记和导出文件的用户，方便在不同平台间管理和使用笔记。
3. **核心特色**：采用OAuth 2.0 + PKCE连接，基于清单的增量协议，仅上传服务器没有的文件内容；可配置导出文件删除时的本地处理方式；支持按方向启用或禁用同步，有实时进度指示；提供强制全量同步按钮；本地有哈希和修改时间缓存，避免重复哈希。
4. **使用建议**：推荐通过Obsidian社区插件安装，操作简单。若想体验beta版本，可使用BRAT侧载。注意单笔记大小上限为1 MiB，空笔记或仅含空白字符的笔记会被跳过。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


