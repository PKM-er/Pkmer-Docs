---
uid: 1786577075892000
title: 'Obsidian 插件：AGE Crypto'
tags: ['安全与隐私', '数据处理', '第三方工具集成', 'obsidian插件']
description: '用age加密/解密笔记。——此插件尚未经过Obsidian官方人员的人工审核。'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：AGE Crypto

> [!Note] 插件名片
> - 插件名称：AGE Crypto
> - 插件作者：Toru4ka
> - 插件说明：用age加密/解密笔记。——此插件尚未经过Obsidian官方人员的人工审核。
> - 插件分类：['安全与隐私', '数据处理', '第三方工具集成', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/toru4ka/obsidian-age-crypto)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?age-crypto)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/toru4ka/obsidian-age-crypto/master/README.md)



## 概述

### AGE Crypto插件总结
1. **主要功能**：使用age文件加密格式对Obsidian笔记内容进行加密和解密，可加密/解密整个笔记或选中文本；能为每个设备生成本地age身份密钥；支持加密给多个接收者；可将当前设备接收者添加到共享接收者列表；加密内容以ASCII装甲文本块存储。
2. **适用场景**：适用于iOS、Android、macOS、Windows、Linux等平台的Obsidian用户，需对笔记内容进行加密保护的场景。
3. **核心特色**：采用TypeScript实现age，无需调用外部`age`/`age-keygen`二进制文件，可在桌面和移动设备上运行；各设备可使用不同私钥，提高安全性。
4. **使用建议**：手动安装时先构建插件，再复制文件到保险库，最后在Obsidian中启用。配置时可粘贴现有身份密钥或点击生成，添加以`age1...`开头的公钥接收者。为避免私钥通用，可在各设备生成本地身份密钥并分享接收者信息。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


