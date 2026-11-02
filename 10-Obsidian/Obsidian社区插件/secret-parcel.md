---
uid: 1793625621042000
title: "Obsidian 插件：Secret Parcel"
tags: ["安全与隐私", "文件管理", "效率工具", "obsidian插件"]
description: "Move selected keychain secrets to another device in one passphrase-encrypted file. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Secret Parcel

> [!Note] 插件名片
> - 插件名称：Secret Parcel
> - 插件作者：theluckystrike
> - 插件说明：Move selected keychain secrets to another device in one passphrase-encrypted file. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['安全与隐私', '文件管理', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/theluckystrike/secret-parcel)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?secret-parcel)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/theluckystrike/secret-parcel/master/README.md)



## 概述

Secret Parcel 旨在解决 Obsidian 密钥链（Keychain）中敏感凭证跨设备迁移的难题。它允许用户将选定的密钥 ID 及其值打包成一个经过密码加密的单一文件，从而在两台设备间安全传输。核心功能包括生成加密包裹、在目标设备解密预览、处理冲突以及写入验证，确保敏感数据在转移过程中保持机密性，且全程无需网络请求，所有操作均在本地完成。

典型场景适用于需要在新设备上快速配置相同凭证的情况。例如，当你更换电脑或手机时，可以将旧设备中存储的 API 密钥或登录令牌通过现有的文件同步工具（如 iCloud 或 Syncthing）传输到新设备。在目标设备上，你只需导入该文件，通过预览界面确认哪些 ID 是新增的，哪些是冲突的，即可一键完成迁移，避免了手动复制粘贴明文密码的风险。

相比其他插件，Secret Parcel 的特色在于其严谨的安全机制与透明的操作反馈。它采用 Web Crypto 标准进行高强度加密，并在写入后自动回读验证，生成详细的成功、跳过或失败报告。此外，它提供导入前的冲突预览，默认不覆盖现有值，用户需手动勾选才允许替换，极大降低了误操作风险。Pro 版本还增加了基于前缀的导出配置和带保留策略的加密备份功能，适合管理大量密钥的用户。

使用前需注意，该插件要求 Obsidian 1.11.4 或更高版本，且必须使用长且唯一的密码，密码需与包裹文件分开保管。它不适合需要自动同步或实时更新的场景，因为每次导出和导入都是手动触发的。此外，Linux 和移动端物理设备未经充分测试，若你的工作流依赖这些平台，建议先在小范围测试。导入后若不再需要，建议删除源包裹文件以消除潜在泄露风险。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


