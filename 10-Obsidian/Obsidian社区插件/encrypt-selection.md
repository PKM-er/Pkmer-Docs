---
uid: 1786577077575000
title: 'Obsidian 插件：Encrypt Selection'
tags: ['编辑工具', '文字处理', '安全与隐私', '数据处理', 'obsidian插件']
description: '用AES - 256 - GCM对选中的文本进行就地加密和解密。无需外部工具、二进制文件或密钥文件。——此插件尚未经过Obsidian官方人员的人工审核。'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Encrypt Selection

> [!Note] 插件名片
> - 插件名称：Encrypt Selection
> - 插件作者：Shockwave3301
> - 插件说明：用AES - 256 - GCM对选中的文本进行就地加密和解密。无需外部工具、二进制文件或密钥文件。——此插件尚未经过Obsidian官方人员的人工审核。
> - 插件分类：['编辑工具', '文字处理', '安全与隐私', '数据处理', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/shockwave3301/encrypt-selection)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?encrypt-selection)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/shockwave3301/encrypt-selection/master/README.md)



## 概述

### 插件名称：Encrypt Selection
1. **主要功能**：利用AES - 256 - GCM算法对选中的文本进行原地加密和解密，无需外部工具、二进制文件或密钥文件。可将选中的文本替换为不透明令牌，查看时通过“peek”命令在模态框中解密，不改变文件内容。
2. **适用场景**：适用于对笔记中的部分内容，如密码、恢复代码、日记段落等进行加密，不影响笔记其他部分的搜索、链接和编辑。
3. **核心特色**：与多数对整个笔记或整个库加密的工具不同，该插件针对选中内容加密；使用浏览器的Web Crypto API，无外部依赖，支持桌面和移动设备。
4. **使用建议**：安装可通过Obsidian社区插件搜索安装，或手动下载相关文件到指定目录并启用。快速使用时，先选中内容，通过命令面板执行“Encrypt”命令加密，输入并确认密码；查看时将光标置于令牌内，执行“Decrypt (peek, read - only)”命令。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


