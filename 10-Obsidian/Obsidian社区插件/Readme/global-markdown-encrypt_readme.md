---
uid: 20231220112631
title: Obsidian 插件：【Readme】Global Markdown Encryption
tags: ['obsidian插件', 'readme']
description: 内存中的AES256-GCM Markdown加密
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】Global Markdown Encryption

> [!Note] 插件名片
> - 插件名称：Global Markdown Encryption
> - 插件作者：shlemiel
> - 插件说明：内存中的 AES256-GCM Markdown 加密
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/shlemiel/globaloe)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?global-markdown-encrypt)

## 概述

内存中的 AES256-GCM Markdown 加密

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/shlemiel/globaloe/master/README.md)

---

## Readme(翻译）

下面是 [[global-markdown-encrypt]] 插件的自述翻译

# global-markdown-encrypt

一个用于在内存中加密 Obsidian Markdown 的插件，基于单一密码。

如何使用

请按照以下步骤操作。

- 将编辑视图设置为默认视图（设置/编辑器/新标签的默认视图 ->编辑视图）
- 打开插件
- 输入您的密码（密码越长，越安全）
- 点击“带锁的笔记”图标
- 使用“aes256”扩展的 Markdown 将无缝加密

## 规范

密码算法选择保守。

- 密钥派生：pbkdf2-sha512，迭代次数为 1000000 次
- 操作模式：aes256-gcm AEAD（认证 + 加密）
- 文件扩展名：aes256

## 支持的模式

由于技术原因，只支持带有编辑视图的 Markdown。

- 请将编辑视图设置为默认视图
- 只有带有 aes256 扩展名的 Markdown 文件才会被加密（不包括：图片等）。
免责声明

当出现意外错误时，可能会导致数据丢失的风险。请定期备份您的重要数据。
