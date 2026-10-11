---
uid: 1791709369820000
title: 'Obsidian 插件：Sealbox'
tags: ['安全与隐私', '文件管理', '移动端优化', 'obsidian插件']
description: 'Encrypt notes and attachments with a single password, and keep logins in a built-in secrets manager. Works on desktop and mobile. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Sealbox

> [!Note] 插件名片
> - 插件名称：Sealbox
> - 插件作者：scar
> - 插件说明：Encrypt notes and attachments with a single password, and keep logins in a built-in secrets manager. Works on desktop and mobile. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['安全与隐私', '文件管理', '移动端优化', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/scar333/obsidian-sealbox)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?sealbox)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/scar333/obsidian-sealbox/master/README.md)



## 概述

**1. 主要功能**
Sealbox 允许用户通过单一密码加密笔记及附件，并内置一个基于加密文件的密钥管理器（Secrets Manager）用于存储登录信息。支持桌面端和 Android 移动端，提供恢复密钥以防密码遗忘。

**2. 适用场景**
适用于需要保护静态数据安全的场景，如防止笔记本电脑/手机被盗、Git 仓库泄露或 Syncthing 同步文件夹被未授权访问。适合对隐私敏感的个人笔记或敏感数据管理。

**3. 核心特色**
- **零明文落盘**：文件在磁盘上始终以加密形式存在，编辑时仅在内存中解密，保存时立即重新加密，杜绝了同步工具捕获明文的风险。
- **高性能解密**：密码仅拉伸一次，打开笔记速度极快。
- **全格式支持**：Markdown 和文本可原地编辑，图片/PDF 可直接渲染，其他文件解密至内存。
- **完整密钥管理**：支持分组、标签、自定义字段及网站/银行卡/服务器模板。

**4. 使用建议**
- **早期版本警示**：虽经过测试但未经独立审计，建议先用于可承受损失的数据，并务必提前创建恢复密钥。
- **明确威胁模型**：仅保护静态数据，无法防御已运行的恶意软件（如键盘记录器）或读取内存的攻击。
- **元数据可见**：文件名、大小、时间戳和文件夹结构仍可见，仅内容被加密。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


