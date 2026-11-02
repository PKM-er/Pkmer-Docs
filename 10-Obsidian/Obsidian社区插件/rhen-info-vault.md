---
uid: 1793625620843000
title: "Obsidian 插件：Rhen Vault"
tags: ["安全与隐私", "自动化与AI", "obsidian插件"]
description: "Seals private information from AI agents and harnesses to protect your data from unwanted usage. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Rhen Vault

> [!Note] 插件名片
> - 插件名称：Rhen Vault
> - 插件作者：Mark Schmidt
> - 插件说明：Seals private information from AI agents and harnesses to protect your data from unwanted usage. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['安全与隐私', '自动化与AI', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/markaschmidt/Rhen-Vault)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?rhen-info-vault)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/markaschmidt/Rhen-Vault/master/README.md)



## 概述

Rhen Vault 是一款专为桌面端 Obsidian 设计的隐私保护插件，其核心功能是在笔记写入磁盘前进行加密。它通过拦截本地 AI 工具对锁定笔记的读取请求，确保这些工具只能接触到密文而非原始内容，从而有效防止敏感数据被未经授权的 AI 代理或框架滥用。该插件旨在为存储在本地磁盘上的私密信息提供一道加密屏障，让用户在利用 AI 辅助工作时，无需担心核心数据泄露。

典型的使用场景包括处理包含个人身份、财务数据或商业机密的笔记。例如，当你使用本地运行的 AI 助手整理文档时，Rhen Vault 会自动加密那些被标记为锁定的敏感笔记，AI 工具在尝试读取时只会看到乱码，从而无法提取其中的关键信息。另一个场景是管理包含 API 密钥或密码的配置文件，通过该插件的加密机制，即使文件被意外扫描，内容也保持不可读状态，确保数据安全性。

相比其他仅依赖文件权限或简单隐藏功能的插件，Rhen Vault 的特色在于其针对 AI 交互场景的主动防御机制。它支持在库外读写文件，以处理图像密钥、恢复文件以及可选的 Windows 账户保护功能。这种设计不仅保护了笔记内容，还通过系统级的集成增强了整体安全架构，特别是在 Windows 环境下，提供了更深层的账户保护选项，这是普通笔记加密插件通常不具备的能力。

使用前需注意，该插件需要访问库外文件权限，且 Windows 账户保护功能仅在用户从设置中手动启动并批准系统提示后才会运行，不会自动执行。它不适合那些希望完全离线、不依赖任何系统级权限或不需要针对 AI 工具进行特定防护的用户。如果你的需求仅仅是普通的文件加密，或者你使用的是非桌面端 Obsidian 环境，该插件可能并非最佳选择。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


