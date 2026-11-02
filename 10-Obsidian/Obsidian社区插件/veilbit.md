---
uid: 1793625624234001
title: "Obsidian 插件：Veilbit"
tags: ["安全与隐私", "编辑工具", "效率工具", "obsidian插件"]
description: "Mask secrets in your notes and reveal them on click. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Veilbit

> [!Note] 插件名片
> - 插件名称：Veilbit
> - 插件作者：qunetol57
> - 插件说明：Mask secrets in your notes and reveal them on click. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['安全与隐私', '编辑工具', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/qunetol57/veilbit)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?veilbit)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/qunetol57/veilbit/master/README.md)



## 概述

Veilbit 旨在解决笔记中敏感信息明文暴露的问题，核心功能是将选中的文本转换为可配置的掩码字符。在实时预览和阅读视图中，这些秘密值会被替换为统一的遮蔽符号，从而在视觉上隐藏具体内容。当你需要查看或复制这些信息时，只需点击掩码即可弹出对话框，支持直接编辑数值或一键复制到剪贴板，操作完成后更改会自动保存回笔记中。

典型的使用场景包括管理个人 API 密钥、数据库连接字符串或临时生成的访问令牌。例如，你可以在技术文档中记录服务器配置，将密码部分隐藏为黑点，既保持了文档的整洁，又避免了敏感数据直接裸露在屏幕中央。另一个场景是整理包含多组测试账号的清单，通过掩码区分不同条目，需要调试时点击对应位置快速获取凭据，无需在复杂的文本中反复查找。

相比同类插件，Veilbit 的特色在于其轻量级的交互设计和灵活的掩码配置。它允许用户自定义掩码符号（默认为实心圆点）以及掩码长度，可以选择固定长度或根据原文字符数动态调整，以适应不同的视觉偏好。此外，它提供了右键菜单和命令面板两种触发方式，并支持在弹窗中直接修改秘密值，无需回到编辑模式，提升了处理敏感信息的效率。

使用前必须明确，Veilbit 仅对文本进行 Base64 编码，而非加密，这意味着任何能访问该笔记文件的人都可以轻松解码出原始秘密。因此，它不适合用于存储高安全级别的密码或作为独立的密码管理器。如果你需要与他人共享笔记、使用云同步服务，或笔记可能泄露给第三方，请勿使用此插件处理敏感数据，因为它无法提供真正的安全防护。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


