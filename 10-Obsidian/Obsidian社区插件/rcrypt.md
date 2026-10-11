---
uid: 1791709369470000
title: 'Obsidian 插件：RCrypt'
tags: ['安全与隐私', '文件管理', '第三方工具集成', 'obsidian插件']
description: 'Client-side file and folder encryption plugin, 100% compatible with Rclone Crypt. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：RCrypt

> [!Note] 插件名片
> - 插件名称：RCrypt
> - 插件作者：emarpiee
> - 插件说明：Client-side file and folder encryption plugin, 100% compatible with Rclone Crypt. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['安全与隐私', '文件管理', '第三方工具集成', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/emarpiee/obsidian-rcrypt)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?rcrypt)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/emarpiee/obsidian-rcrypt/master/README.md)



## 概述

**RCrypt 插件中文总结**

1. **主要功能**
提供纯客户端的文件与文件夹加密功能，完全兼容 Rclone Crypt 标准。支持对笔记、附件或整个文件夹进行加密/解密，无需安装本地 Rclone 二进制文件，且支持多加密配置文件管理。

2. **适用场景**
适用于需要在 Obsidian 中安全存储敏感笔记、附件，或希望将加密后的数据通过 Rclone 同步至云端（如 S3、Dropbox）的用户。特别适合跨平台（Windows, macOS, Linux, Android, iOS）的安全数据管理需求。

3. **核心特色**
- **100% 离线运行**：基于 Web 加密原语，无需网络或外部依赖。
- **Rclone 无缝互通**：加密后的文件可直接被官方 Rclone CLI 解密或挂载。
- **灵活的文件名模式**：支持标准 AES-256-EME、混淆及明文文件名三种模式。
- **多层嵌套加密**：支持对已加密文件进行递归加密，并具备智能检测提示。
- **高安全性**：凭证默认仅存于易失性内存（RAM），不持久化存储。

4. **使用建议**
- 初次使用建议先创建测试文件夹，验证 Rclone 互通性。
- 务必妥善保管加密密码和盐值，一旦丢失数据将无法恢复。
- 若需跨设备同步，请确保所有设备均安装此插件并配置相同的加密档案。
- 注意：该插件未经 Obsidian 官方人工审核，请自行评估安全性。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


