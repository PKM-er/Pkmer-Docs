---
uid: 1793625621050000
title: "Obsidian 插件：Secure Inline (age)"
tags: ["安全与隐私", "编辑工具", "效率工具", "obsidian插件"]
description: "Inline age-encrypted secrets in notes. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Secure Inline (age)

> [!Note] 插件名片
> - 插件名称：Secure Inline (age)
> - 插件作者：Frizky
> - 插件说明：Inline age-encrypted secrets in notes. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['安全与隐私', '编辑工具', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/frizkey/obsidian-secure-inline)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?secure-inline)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/frizkey/obsidian-secure-inline/master/README.md)



## 概述

Secure Inline (age) 允许直接在笔记中加密敏感文本，利用 age 加密标准将密码、API 密钥等机密信息转化为不可读的密文。它支持将短文本转换为紧凑的内联令牌，或将长文本封装为代码块，确保即使笔记文件泄露，核心数据依然安全。

想象你在笔记中记录服务器配置，只需选中 API 密钥并执行加密命令，它便立即变为 `sec:v1:` 令牌；或者在 `secure-properties` 块中填写数据库密码，插件会自动加密值而保留键名可读。在阅读模式下，点击这些密文即可临时显示明文，方便复制使用，无需离开笔记界面。

相比其他加密插件，它深度兼容 age 命令行工具，支持桌面原生密钥与移动端设备身份管理，甚至能加密附件文件生成 `.age` 侧车文件。其 `secure-properties` 功能特别实用，能在保持 YAML 或 dotenv 格式结构的同时，仅加密标量值，极大提升了配置类笔记的可维护性。

使用前务必备份 age 密钥文件，因为丢失密钥意味着数据永久无法恢复。建议在副本上测试后再加密重要数据。该插件不适合需要多人实时协作编辑明文场景，且若你依赖非 age 标准的加密体系或希望完全离线无密钥管理，它可能不是最佳选择。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


