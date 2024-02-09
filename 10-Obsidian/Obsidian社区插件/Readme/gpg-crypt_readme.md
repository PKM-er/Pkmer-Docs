---
uid: 2023102611075690
title: Obsidian 插件：【Readme】gpgCrypt
tags: ['obsidian插件', 'readme']
description: 无缝地使用GPG加密您的笔记。支持智能卡以增强安全性！将您的信息安全地保存并仅供您访问。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】gpgCrypt

> [!Note] 插件名片
> - 插件名称：gpgCrypt
> - 插件作者：Tjado Mäcke
> - 插件说明：无缝地使用 GPG 加密您的笔记。支持智能卡以增强安全性！将您的信息安全地保存并仅供您访问。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/tejado/obsidian-gpgCrypt)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?gpg-crypt)

## 概述

无缝地使用 GPG 加密您的笔记。支持智能卡以增强安全性！将您的信息安全地保存并仅供您访问。

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/tejado/obsidian-gpgCrypt/main/README.md)
>

---

## Readme(翻译）

下面是 [[gpg-crypt]] 插件的自述翻译

# Obsidian 的 gpgCrypt

gpgCrypt 是一个 Obsidian 插件，可以使用 GnuPG 轻松无缝地加密您的笔记。所有 Obsidian 的功能都可以像往常一样使用，而不会减少 Markdown 的体验。

它集成了 OpenPGP.js 或您本地的 GnuPG 安装。对于那些寻求更高级安全措施的人来说，与本地的 GnuPG 安装集成可以使用 OpenPGP 智能卡（例如 YubiKey 或 Nitrokey）。

[gpgCrypt](https://github.com/tejado/obsidian-gpgCrypt) 由 [github.com/tejado](https://github.com/tejado) 开发。

**注意：** Obsidian 插件仍处于测试阶段！请自行承担使用的风险！

**警告：**由于 Obsidian 的缓存机制、核心转储或其他原因，加密的笔记可能以未加密的形式存储在磁盘上。

### 特点

- 使用密钥对进行非对称加密
- 最大程度上无缝兼容
- 支持 OpenPGP 智能卡（例如 YubiKey、Nitrokey 等）通过 gpg CLI 包装器
- 可配置记住密码的持续时间
- 配置加密笔记在文件恢复核心插件中的处理方式
- 启用/禁用压缩
- 与 Obsidian Sync 进行了测试
- 状态栏集成

## 安装

手动安装或使用 Obsidian 插件 [Beta Reviewers Auto-update Tester](https://github.com/TfTHacker/obsidian42-brat)。

一旦插件在 Obsidian 插件网站上发布，将在此处进行说明。

## 使用方法

首先，需要一个密钥对。第一次加载 gpgCrypt 时，会自动弹出密钥对生成的对话框。如果您希望使用 gpg CLI 或调整其他设置，请在 Obsidian 设置中导航到 "gpgCrypt"。

要加密或解密笔记，请右键单击所需的笔记，并从文件上下文菜单中选择 " 使用密钥对加密 " 或 " 永久解密 "。

### 在 Obsidian 之外进行加密和解密

以下命令可用于在 Obsidian 之外加密/解密文件：

```cmd
gpg --encrypt --armor --output - --recipient RECIPIENT_EMAIL_OR_KEY_ID path/to/vault/note.md
```

```cmd
gpg --decrypt --output - path/to/vault/note.md
```

## 限制

- 目前仅支持 Markdown (.md) 文件，因为 Obsidian 以不同的方式处理其他文件类型（如 PDF 或图像）。
- 仅限桌面端，尚未在移动客户端上进行测试。
- 对于 OpenPGP.js，密钥对需要位于 Obsidian Vault 内。
- 不支持签名。
- 不支持对称加密。

## 手动安装插件

- 克隆此存储库。
- 确保您的 NodeJS 至少为 v16 (`node --version`)。
- 运行 `npm i` 或 `yarn` 安装依赖。
- 运行 `npm run dev` 以启动编译并进入监视模式。
- 将 `main.js` 和 `manifest.json` 复制到您的 vault `VaultFolder/.obsidian/plugins/gpgCrypt/` 目录下。
- 或者，运行 `npm run dev VaultFolder/.obsidian/plugins/gpgCrypt/` 以直接将编译后的文件复制到您的 vault 并进入监视模式。

## 鸣谢

- [mnaoumov](https://github.com/mnaoumov) 给了我关于 Obsidian API 的决定性提示。
- [meld-cp](https://github.com/meld-cp) 的 [Meld Encrypt](https://github.com/meld-cp/obsidian-encrypt) 插件在某种程度上给了我灵感。



