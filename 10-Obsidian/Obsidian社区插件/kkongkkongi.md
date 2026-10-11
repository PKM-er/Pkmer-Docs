---
uid: 1791709367933000
title: 'Obsidian 插件：Kkongkkongi'
tags: ['安全与隐私', '文件管理', '编辑工具', 'obsidian插件']
description: 'Encrypt a note with AES-256-GCM and unlock it inline. A little character hugs a padlock while the note is locked. English and Korean. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Kkongkkongi

> [!Note] 插件名片
> - 插件名称：Kkongkkongi
> - 插件作者：minsu choi
> - 插件说明：Encrypt a note with AES-256-GCM and unlock it inline. A little character hugs a padlock while the note is locked. English and Korean. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['安全与隐私', '文件管理', '编辑工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/applan/obsidian-kkongkkongi)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?kkongkkongi)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/applan/obsidian-kkongkkongi/master/README.md)



## 概述

**1. 主要功能**
Kkongkkongi 是一款笔记加密插件，使用 AES-256-GCM 算法对笔记内容进行真实加密。它直接加密写入磁盘的文件内容，而非仅隐藏界面，确保即使通过其他文本编辑器打开，看到的也是密文。

**2. 适用场景**
适用于需要保护敏感隐私、日记或机密文档的用户。特别适合那些担心普通“锁屏”插件无法防止文件被直接读取的场景，确保数据在静态存储时的安全性。

**3. 核心特色**
*   **真加密**：明文永不落盘，解密内容仅存在于内存中，具备防篡改检测。
*   **内联解锁**：无需弹窗，输入密码后内容直接在笔记内展开渲染。
*   **自动重锁**：切换笔记、窗口失焦或超时后自动重新加密。
*   **趣味交互**：可爱的角色拥抱锁头，密码错误时会抖动，支持中英文及明暗主题适配。

**4. 使用建议**
*   通过命令面板（Ctrl/Cmd + P）执行“Lock this note”进行加密，需输入两次密码。
*   若需彻底解密，使用“Remove lock permanently”命令。
*   建议设置自动重锁超时时间，以增强日常使用的安全性。
*   注意：该插件未经 Obsidian 官方人工审核，请自行评估信任度。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


