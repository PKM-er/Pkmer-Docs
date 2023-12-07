---
uid: 2023120719311889
title: Obsidian 插件：【Readme】Inline Encrypter
tags: ['obsidian插件', 'readme']
description: 在您的笔记中加密秘密信息。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】Inline Encrypter

> [!Note] 插件名片
> - 插件名称：Inline Encrypter
> - 插件作者：Alexander Cheryomukhin
> - 插件说明：在您的笔记中加密秘密信息。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/solargate/obsidian-inline-encrypter)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?inline-encrypter)

## 概述

在您的笔记中加密秘密信息。

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/solargate/obsidian-inline-encrypter/master/README.md)
>

---

## Readme(翻译）

下面是 [[inline-encrypter]] 插件的自述翻译

# Obsidian 内联加密插件

## 概述

在 [Obsidian.md](https://obsidian.md/) 笔记中加密您的秘密信息。

这是一个简单的插件，可以在 Obsidian 笔记中直接内联加密文本。它受到了 [Obsidian Encrypt Plugin](https://github.com/meld-cp/obsidian-encrypt) 的启发。

> ⚠️ 警告：请自行承担使用风险。您的密码永远不会存储在任何地方。如果您忘记密码，将无法解密您的笔记。请勿将文件访问权限提供给第三方，以避免可能的数据解密。

您可以加密笔记中的所有文本，以及其中的部分内容，例如列表、表格等。加密的值直接保存在笔记中作为代码块，并在阅读模式下显示为按钮。

编辑模式：

![编辑模式](https://cdn.pkmer.cn/covers/inline-encrypter_2_0.png!pkmer)

阅读模式：

![阅读模式](https://cdn.pkmer.cn/covers/inline-encrypter_2_1.png!pkmer)

还支持实时预览模式。

使用方法

### 加密

1. 在编辑模式下选择要加密的文本。
2. 从命令面板中运行**加密所选文本**。

![Commands](https://cdn.pkmer.cn/covers/inline-encrypter_2_2.png!pkmer)

1. 输入加密密码。
2. 您还可以运行**将所选文本加密为代码块**命令，将其加密为常见的代码块。

### 解密

1. 要在笔记文本中查看解密后的值而不解密它，只需在阅读模式下单击按钮。

![按钮](https://cdn.pkmer.cn/covers/inline-encrypter_2_3.png!pkmer)

1. 输入解密密码。
2. 要解密笔记文本中的秘密，请在编辑模式下选择整个代码块。

![在内联代码块中选择秘密](https://cdn.pkmer.cn/covers/inline-encrypter_2_4.png!pkmer)

![在常规代码块中选择秘密](https://cdn.pkmer.cn/covers/inline-encrypter_2_5.png!pkmer)

1. 从命令面板中运行**解密所选文本**。
2. 输入解密密码。
技术说明

加密算法为 `aes-256-gcm`。盐和初始向量（IV）是唯一且随机的。
