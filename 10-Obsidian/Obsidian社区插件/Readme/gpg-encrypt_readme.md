---
uid: 20240227160841
title: Obsidian 插件：【Readme】GPG Encrypt
tags: ['obsidian插件', 'readme']
description: GPG 使用快捷键加密内联文本
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】GPG Encrypt

> [!Note] 插件名片
> - 插件名称：GPG Encrypt
> - 插件作者：Luis Jaramillo
> - 插件说明：GPG 使用快捷键加密内联文本
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/lajg-dev/obsidian-plugin-gpg-inline-encrypt)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?gpg-encrypt)

## 概述

GPG 使用快捷键加密内联文本

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/lajg-dev/Obsidian-Plugin-GPG-Inline-Encrypt/main/README.md)

---

## Readme(翻译）

下面是 [[gpg-encrypt]] 插件的自述翻译

【机翻】

# GPG 加密

这个项目是由 [https://www.lajg.dev](https://www.lajg.dev) 开发的，它是一个 [Obsidian](https://obsidian.md) 插件，旨在使用 GPG 操作系统的原生工具执行加密，您可以使用在线加密或完整文档加密。

## 资助网址

如果您发现这个插件有帮助，请考虑在 [https://www.lajg.dev/donate/](https://www.lajg.dev/donate/) 支持它。

## 配置

第一件事是按照图片中所示激活插件（步骤 1），然后进入设置（步骤 2）：

![激活插件](https://cdn.pkmer.cn/covers/gpg-encrypt_2_0.png!pkmer)

现在在设置中，您将找到以下元素进行配置：

1. 可执行文件所在的路径（gpg、gpg2、gpg.exe 或 gpg2.exe），您必须输入完整路径，根据您的操作系统可能是 Windows（例如 `C:\Program Files (x86)\GnuPG\bin\gpg.exe`）或者是 MacOS（例如 `/usr/local/bin/gpg`）。这将进行实时验证，确保可执行文件存在并运行 GPG 的一个版本。
2. 选择了一个 GPG 可执行文件后，将列出在您的操作系统中找到的 GPG 密钥列表（仅供参考）。
3. 用于始终信任存储在操作系统中的 GPG 密钥的标志，无论其每个密钥的信任级别如何。
4. 标志，用于在加密文本时是否要签名。
5. 如果将第 4 点标记为 true，则将激活第 5 点，其中包含您操作系统中密钥的下拉列表，您必须选择一个具有其相应私钥的密钥，这意味着每次加密文本时，该文本也将使用该私钥进行签名。

![配置插件](https://cdn.pkmer.cn/covers/gpg-encrypt_2_1.png!pkmer)

## 加密一些文本

步骤 1 - 在您的笔记中，选择要加密的文本（用于内联加密），然后打开命令面板

步骤 2 - 在命令面板中，查找“GPG 加密”选项，您将有选择内联加密（在步骤 1 中选择的文本块）或加密整个文档的选项。

步骤 3A - 会弹出一个窗口，显示您操作系统中可用的 GPG 密钥列表，请选择一个或多个接收者密钥，以便稍后解密此文本（至少必须选择一个）

![加密文本](https://cdn.pkmer.cn/covers/gpg-encrypt_2_2.png!pkmer)

步骤 3B - 如果您选择签名和加密，与步骤 3A 的唯一区别是现在按钮会告诉您它将进行签名和加密，并且这可能会提示您输入签署文本的密码。

![加密和签名的密码](https://cdn.pkmer.cn/covers/gpg-encrypt_2_3.png!pkmer)

## 解密一些文本

步骤 1 - 第一步是从一个带有加密秘密的便签中，点击（类似按钮）上面写着秘密的图片

步骤 2 - 这将打开一个模态框，其中包含用 GPG 加密的消息，如果您想复制加密的消息，可以使用“复制加密文本”按钮，您也可以使用“解密”按钮解密消息

![解密 1/3](https://cdn.pkmer.cn/covers/gpg-encrypt_2_4.png!pkmer)

步骤 3 - 点击“解密”按钮，解密过程将开始，这可能会提示您输入密码短语

![解密 2/3](https://cdn.pkmer.cn/covers/gpg-encrypt_2_5.png!pkmer)

步骤 4 - 一旦解密过程完成，您将看到一个带有有关过程的技术信息的绿色消息，但您还将看到一个包含解密文本的文本区域，您可以使用“复制纯文本”按钮复制它，或者直接使用“将纯文本恢复到文档”按钮将解密文本恢复到便签中

![解密 3/3](https://cdn.pkmer.cn/covers/gpg-encrypt_2_6.png!pkmer)
