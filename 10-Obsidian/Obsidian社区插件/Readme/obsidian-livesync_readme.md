---
uid: 2023080322263451
title: Obsidian 插件：Self-hosted LiveSync
tags: ['obsidian插件', 'readme']
description: 社区实施自托管的Livesync。立即将您的保险库更改反映到其他设备上。请确保禁用其他同步解决方案，以避免内容损坏或重复。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Self-hosted LiveSync

> [!Note] 插件名片
> - 插件名称：Self-hosted LiveSync
> - 插件作者：vorotamoroz
> - 插件说明：社区实施自托管的 Livesync。立即将您的保险库更改反映到其他设备上。请确保禁用其他同步解决方案，以避免内容损坏或重复。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/vrtmrz/obsidian-livesync)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsidian-livesync)

## 概述

社区实施自托管的 Livesync。立即将您的保险库更改反映到其他设备上。请确保禁用其他同步解决方案，以避免内容损坏或重复。

![Self-hosted LiveSync](https://cdn.pkmer.cn/covers/obsidian-livesync_new.gif!pkmer)

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/vrtmrz/obsidian-livesync/main/README.md)
>

---

## Readme(翻译）

下面是 [[obsidian-livesync]] 插件的自述翻译

自托管的 LiveSync 是一个由社区实现的同步插件。

自托管或购买的 CouchDB 充当中间服务器。适用于每个与 Obsidian 兼容的平台。

注意：它与官方的 "Obsidian Sync" 不兼容。

在安装或升级 LiveSync 之前，请备份您的保险库。

## 特点

- 包含可视化冲突解决器。
- 设备之间的双向同步几乎实时。
- 您可以使用 CouchDB 或其兼容产品，如 IBM Cloudant。
- 支持端到端加密。
- 插件同步（测试版）。
- 从 [obsidian-livesync-webclip](https://chrome.google.com/webstore/detail/obsidian-livesync-webclip/jfpaflmpckblieefkegjncjoceapakdf) 接收 WebClip（端到端加密不适用）。

对于需要出于安全原因将笔记完全自托管的研究人员、工程师和开发人员非常有用。或者对于任何希望知道自己的笔记完全私密的人来说，这也是一个很好的选择。

## 重要通知

- 不要同时启用此插件和其他同步解决方案（包括 iCloud 和 Obsidian Sync）。在启用此插件之前，请确保禁用所有其他同步方法，以避免内容损坏或重复。如果您想要将数据同步到两个或更多的服务，请逐个进行，并且不要同时启用两种同步方法。
    这也包括不要将您的保险库放在云同步文件夹中（例如 iCloud 文件夹或 Dropbox 文件夹）。
- 这是一个同步插件，而不是备份解决方案。不要依赖此插件进行备份。
- 如果设备的存储空间不足，可能会导致数据库损坏。
- 隐藏文件或任何其他不可见文件将不会保存在数据库中，因此不会被同步。（**并且可能会被删除**）

如何使用

### 准备好你的数据库

首先，准备好你的数据库。推荐使用 IBM Cloudant 进行测试。或者你可以使用自己的 CouchDB 服务器。更多信息请参考以下链接：

1. [设置IBM Cloudant](docs/setup_cloudant.md)
2. [设置你自己的CouchDB服务器](docs/setup_own_server.md)

注意：我们需要更多关于替代托管方法的信息！目前正在讨论 [使用fly.io](https://github.com/vrtmrz/obsidian-livesync/discussions/85)。

### 配置插件

请参阅 [快速设置指南](doccs/../docs/quick_setup.md)

某些东西看起来损坏了...

请再次打开配置链接并回答以下问题：

- 如果您的本地数据库看起来损坏（换句话说，当您的 Obsidian 变得奇怪时，即使是独立运行的。）
	- 回答“否”以保留本地数据库？
- 如果您的远程数据库看起来损坏（换句话说，在复制过程中发生了什么）
	- 回答“否”以保留远程数据库？

如果您对两者都回答了“否”，则您的数据库将通过设备上的内容重新构建。远程数据库将锁定其他设备。您必须再次同步所有设备。（这时，几乎所有文件都应该具有时间戳同步。因此，您可以使用现有的保险库）。

## 测试服务器

设置一个 Cloudant 或本地 CouchDB 实例有点复杂，所以我设置了一个 [Tasting服务器用于自托管实时同步](https://olstaste.vrtmrz.net/)。免费试用！

注意：请仔细阅读“限制”。请勿发送您的私人保险库。

## 状态栏中的信息

同步状态显示在状态栏中。

- 状态
    - ⏹️ 已停止
    - 💤 启用了实时同步。等待更改。
    - ⚡️ 同步正在进行中。
    - ⚠ 发生了错误。
- ↑ 已上传的块和元数据
- ↓ 已下载的块和元数据
- ⏳ 待处理的进程数量
- 🧩 等待其块的文件数量。
如果您已删除或重命名文件，请等待⏳图标消失。

提示

- 如果一个文件夹在复制后变为空，它将被默认删除。但是您可以切换此行为。请查看 [设置](docs/settings.md)。
- 在移动设备上，LiveSync 模式会消耗更多的电池电量。建议使用定期同步和一些自动同步。
- 移动版 Obsidian 无法连接到非安全（HTTP）或本地签名的服务器，即使根证书已安装在设备上。
- 没有像 'exclude_folders' 这样的配置。
- 在同步过程中，文件是通过它们的修改时间进行比较的，较旧的文件将被较新的文件覆盖。然后插件会检查冲突，如果需要合并，将打开一个对话框。
- 很少情况下，数据库中的文件可能会损坏。当文件看起来损坏时，插件将不会写入本地存储。如果您的设备上有文件的本地版本，可以通过编辑本地文件并进行同步来修复损坏。但是，如果文件在任何设备上都不存在，则无法恢复。在这种情况下，您可以从设置对话框中删除这些项目。
- 要停止启动序列（例如修复数据库问题），您可以在存储库的根目录下放置一个 `redflag.md` 文件。
- 问：数据库正在增长，我该如何缩小它？
  答：每个文档都保存了它们过去的 100 个修订版本，以便检测和解决冲突。假设某个设备离线一段时间后再次上线。该设备必须将其笔记与远程保存的笔记进行比较。如果存在一个历史修订版本，其中笔记曾经是相同的，那么可以安全地更新它（类似于 git 的快进）。即使在修订历史中没有这个版本，我们只需要检查两个设备共同拥有的修订版本之后的差异。这就像 git 的冲突解决方法。因此，如果您想解决问题的根源，我们必须将数据库重新变成一个扩大的 git 存储库。
- 更多技术信息请参见 [技术信息](docs/tech_info.md)
- 如果您想在没有 Obsidian 的情况下同步文件，可以使用 [filesystem-livesync](https://github.com/vrtmrz/filesystem-livesync)。
- WebClipper 也可以在 Chrome Web Store 上使用：[obsidian-livesync-webclip](https://chrome.google.com/webstore/detail/obsidian-livesync-webclip/jfpaflmpckblieefkegjncjoceapakdf)

存储库在这里：[obsidian-livesync-webclip](https://github.com/vrtmrz/obsidian-livesync-webclip)。（文档正在进行中）

## 许可证

源代码根据 MIT 许可证进行许可。
