---
uid: 2023080322164607
title: Obsidian 插件：【Readme】Cryptsidian
tags: ['obsidian插件', 'readme']
description: 使用密码加密你Obsidian Vault中的所有文件。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Cryptsidian

> [!Note] 插件名片
> - 插件名称：Cryptsidian
> - 插件作者：triumphantomato
> - 插件说明：使用密码加密你Obsidian Vault中的所有文件。
> - 插件分类：['obsidian插件', 'readme']
> - 项目地址：[点我访问](https://github.com/triumphantomato/cryptsidian)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?cryptsidian)

## 概述

使用密码加密你Obsidian Vault中的所有文件。



> [!tip] 原文出处
> 
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/triumphantomato/cryptsidian/main/README.md)
> 

---

## Readme(翻译）

下面是 [[cryptsidian]] 插件的自述翻译


## Cryptsidian：Obsidian.md的加密

使用密码加密Obsidian.md Vault中的所有文件。

---

**三个警告**
1. _备份Vault_ - 在运行插件之前进行备份以保存您的数据。
2. _记住您的密码_ - 没有密码无法恢复文件。
3. _文件损坏_ - 在加密文件后不要在Obsidian.md（或其他应用程序）中打开它们。内容可能会损坏且无法恢复。插件会自动关闭所有打开的笔记以避免意外损坏。

---

## 👋🏾 新项目：OpenRelay  

*想要更多的隐私？请查看我的[新项目：OpenRelay](https://openrelay.typedream.app/)，这是一个由社区构建的、以隐私为首要考虑的VPN，可以明确证明没有日志！[技术文档在这里](https://github.com/triumphantomato/openrelay)。*

---

### Cryptsidian安装和使用
您可以通过Obsidian中的Community Plugins选项卡搜索"Cryptsidian"来安装插件。

手动安装：将main.js和manifest.json（从Releases中）复制到此位置的vault中：`VaultFolder/.obsidian/plugins/cryptsidian/`。

Git克隆：将此存储库`git clone`到`VaultFolder/.obsidian/plugins/cryptsidian`中，并运行`npm install`和`npm run dev`。

**使用方法：**打开命令面板（在Mac上为cmd + P），然后输入"cryptsidian"以打开加密和解密模态框。要加密，请选择加密模态框并输入密码。要解密，请选择解密模态框并输入相同的密码。

如果您在加密和解密时使用不同的密码，您的文件将变得损坏。

在Obsidian应用关闭后，文件仍然保持加密（或解密）状态。

---

### 可用性
该插件使使用用户选择的密码对您的保险库进行加密变得非常简单，包括保险库目录中的所有笔记和文件（例如附件）。适用于单设备、多用户的情况，比如家庭电脑或共享计算机实验室。

该插件仅适用于桌面版，并已在OSX和Linux上进行了测试。它应该可以在Windows上运行，但尚未经过测试。

该插件尚未经过独立的安全审计，不应依赖于关键安全应用程序。

Obsidian API的未来更改可能会破坏该插件。不保证向前兼容性。

---

### 技术说明
文件在磁盘上进行原地加密和覆盖。

所使用的加密算法是`aes-256-ctr`。一个合理的改进是改用GCM以利用AEAD。

盐在源代码中是静态的。IV是唯一且随机的（并且在磁盘上的文件之前被预先添加）。PBKDF是使用默认参数的`scrypt`，来自`Node.js crypto` API。

密码需要具有足够的熵，但您可以在`hasEnoughEntropy`函数中更改所需的熵量。

后端函数都在`cryptsidian.mjs`中。前端交互在`main.ts`中。

可以使用`mocha`运行单元测试，先使用`npm install`，然后运行`npm test`。

代码有良好的注释以提高可读性。



