---
uid: 1786577079673004
title: 'Obsidian 插件：Lockblock'
tags: ['安全与隐私', '编辑工具', '效率工具', 'obsidian插件']
description: '把Obsidian笔记里的敏感内容加密，等你想查看的时候再解密。——Obsidian官方人员尚未对该插件进行人工审核。'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Lockblock

> [!Note] 插件名片
> - 插件名称：Lockblock
> - 插件作者：Joshua Walls
> - 插件说明：把Obsidian笔记里的敏感内容加密，等你想查看的时候再解密。——Obsidian官方人员尚未对该插件进行人工审核。
> - 插件分类：['安全与隐私', '编辑工具', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/joshua-walls/lockblock)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?lockblock)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/joshua-walls/lockblock/master/README.md)



## 概述

### Lockblock插件总结
1. **主要功能**：对Obsidian笔记中特定的`lockblock`代码块进行加密，使用随机的保险库密钥，将包装后的密钥材料存储在Obsidian的`secretStorage`中，可在解锁时按需显示或复制明文，在锁定保险库时保护密封块不被误编辑。
2. **适用场景**：适用于需要在Obsidian笔记中保护敏感信息，如密码、隐私内容等场景。
3. **核心特色**：采用随机保险库密钥加密，仅用解锁密码解锁保险库密钥；同步插件设置时可同步密钥材料；在阅读视图将加密块显示为锁定卡片，显示明文不改变笔记文件。
4. **使用建议**：在对重要笔记使用该插件前先备份保险库，以防加密、插件、同步或编辑错误导致敏感内容难以恢复。首次使用需运行“Lockblock: Setup”，将敏感内容写在`lockblock`代码块中，解锁保险库后可按需对明文块进行密封操作。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


