---
uid: 20241225102130
title: Obsidian 插件：Self-hosted LiveSync 自托管同步服务插件
tags: ['数据处理', '编辑工具', '备份与恢复', 'obsidian插件']
description: 社区实施自托管的Livesync。立即将您的保险库更改反映到其他设备上。请确保禁用其他同步解决方案，以避免内容损坏或重复。
author: 愿风
type: other
draft: false
editable: false
modified: 20250322102706
---

# Obsidian 插件：Self-hosted LiveSync 自托管同步服务插件

## 概述

Obsidian 插件 Self-hosted LiveSync 是一个由社区实现的同步插件，能够将你的 Vault 更改立即反映到其他设备上。主要功能包括可视化冲突解决器、设备之间几乎实时的双向同步、支持端到端加密等。适用于需要出于安全考虑保持笔记完全自托管的研究人员、工程师和开发人员，或者任何希望确保笔记完全私密的用户。使用前请务必备份 Vault，并注意不要同时启用其他同步解决方案，以避免内容损坏或重复。此外，该插件并非备份解决方案，不建议依赖于此进行备份。如果设备存储空间不足，可能会导致数据库损坏。对于隐藏文件或其他不可见文件，不会保存在数据库中，也不会被同步。

本文仅介绍该插件特性、优缺点，具体使用请参考官方文档。

> [!Note] 插件名片
> - 插件名称：Self-hosted LiveSync
> - 插件作者：vorotamoroz
> - 插件说明：社区实施自托管的 Livesync。立即将您的保险库更改反映到其他设备上。请确保禁用其他同步解决方案，以避免内容损坏或重复。
> - 插件分类：[' 数据处理 ', ' 编辑工具 ', ' 备份与恢复 ', 'obsidian 插件 ']
> - 项目地址：[点我访问](https://github.com/vrtmrz/obsidian-livesync)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsidian-livesync)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/vrtmrz/obsidian-livesync/main/README.md)

## 特点对比

> [!note] 注意
> 该插件需要使用自托管或购买的 CouchDB 作为中间服务器，并可在任何兼容 Obsidian 的平台上使用。

|   对比   | remotely save |             Self-hosted LiveSync             |
| :----: | :-----------: | :------------------------------------------: |
|  同步方式  |   设定时间，定期同步   |      <font color="#00b0f0">即时同步</font>       |
| 笔记差异处理 |  只能最新文件覆盖全端   | <font color="#00b0f0">笔记对比差异，自主选择</font><br> |
|  可靠性   |     容易丢文件     |                    文件较安全                     |
|  上手难度  |      简单       |                   加钱 or 难                    |
|   成本   |   较多同类免费方案    |                    暂无免费方案                    |

## 使用

Self-hosted LiveSync 插件是通过 couchdb 数据库实现 obsidian 同步的一个插件。

![11111.png](https://cdn.pkmer.cn/images/11111.png!pkmer)

当前，非官方的同步方案两大方案：

一个 remotely save；

一个是 Self-hosted LiveSync。

本文主要通过双方对比，讲解一下 Self-hosted LiveSync 特点，我为什么要采用它。

## 如何使用

1. 购买现有的 couchdb 服务，搜索腾讯云、华为云等，服务商提供现成方案。
2. 自己搭建 couchdb 服务器，详情参考官方文档。

## 具体讲解

### 即时同步

电脑、手机同时打开，可以实时更新 输入内容。实现效果可以参考腾讯文档、金山文档。

这样可以同时记录，而不产生冲突。

![137355323-f57a8b09-abf2-4501-836c-8cb7d2ff24a3.gif](https://cdn.pkmer.cn/images/137355323-f57a8b09-abf2-4501-836c-8cb7d2ff24a3.gif)

### 处理笔记差异

remotely save 的同步只能根据笔记创建或修改的时间点，进行的最新文档的 各使用端的覆盖。

当两端，如 PC 与手机 长期独立 记同一条笔记时，会产生冲突，只能保存 PC 或手机 其中最新一版的笔记，导致笔记内容丢失。

在这一点上，Self-hosted LiveSync，可以处理到相同笔记、每一行、每一个字母的差异 （remotely 只能全文档覆盖）。

处理差异经过自己审核，更安心（也可以默认最新、默认采用手机 或电脑的内容）。

![PixPin_2025-03-06_19-46-29.png](https://cdn.pkmer.cn/images/PixPin_2025-03-06_19-46-29.png!pkmer)

### 上手难度

上手难度

你需要有一定的电脑基础知识，或熟悉 Nas。

- 针对于 自建服务器/Nas，略微有难度。
	- 搭建难度
	- 网络访问难度

### 成本

对比 remotely，可以完全依赖现有网上的免费资源（onedrive、无限云）。

目前 LiveSync 没有较稳定的免费方案。

成本具体可能包括：

1. 自有服务器 Nas
	1. Nas 硬件成本
	2. 电费成本
	3. 网络成本
		1. 公网 IP 可能的宽带成本
		2. 或外网穿透的服务成本
2. 域名成本：需要可访问 nas 的域名，下面再细说。

### 加密

这既是优点又是缺点，必须支持 https 加密。

这点我问过插件作者，当前 obsidian 官方的不支持，所以导致不能使用自签名证书进行同步。

![PixPin_2025-03-06_19-17-42.png](https://cdn.pkmer.cn/images/PixPin_2025-03-06_19-17-42.png!pkmer)

不支持自签 SSL 证书，所以：

1. 综合国内网络管理 -- 普通人网站备案成本较高，不能开放 80、443 端口。
2. 所以申请 SSL 证书最简单的办法基本上是要依赖从腾讯云、阿里云 购买域名，以及配套提供的 DNS 解析服务。
3. 基本告别使用第三方免费二级域名的诸多方案。

造成

1. 域名成本
2. 申请服务器 ssl 加密证书的 人工/时间 成本

不过，本地网络，例如 192.168，这样的 ip 同步可以使用 http 同步的。

## 结语

1. Self-hosted LiveSync 有一定经济成本，但对于有 Nas 的小伙伴不是问题。
2.  上手有难度，但是优势是 remotely save 不能比拟的。
