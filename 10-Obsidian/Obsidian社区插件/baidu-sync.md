---
uid: 1793625606727000
title: "Obsidian 插件：Baidu Sync Safe"
tags: ["文件管理", "第三方工具集成", "安全与隐私", "备份与恢复", "obsidian插件"]
description: "Sync files with Baidu Netdisk using conflict copies, optional end-to-end encryption, and recoverable desktop file replacement. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Baidu Sync Safe

> [!Note] 插件名片
> - 插件名称：Baidu Sync Safe
> - 插件作者：minlaoge
> - 插件说明：Sync files with Baidu Netdisk using conflict copies, optional end-to-end encryption, and recoverable desktop file replacement. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['文件管理', '第三方工具集成', '安全与隐私', '备份与恢复', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/minlaoge/obsidian-baidu-netdisk-sync)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?baidu-sync)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/minlaoge/obsidian-baidu-netdisk-sync/master/README.md)



## 概述

Baidu Sync Safe 专为希望利用百度网盘作为个人云端知识库存储介质的用户设计，提供高稳定性的双向同步体验。它充分发挥百度网盘 TB 级免费存储空间优势，支持笔记、超大 PDF 及音视频附件的随心备份。依托国内高质量 CDN 节点与官方 OpenAPI，插件在宽带、校园网及移动网络环境下均能保持极速连通，确保多端数据实时一致。

典型场景包括在电脑端整理大量文献后，通过插件快速同步至手机进行离线阅读；或在移动端记录灵感后，自动回传至桌面端进行深度编辑。例如，当你在地铁上用手机修改笔记，回家后电脑端会自动拉取最新内容，若两端存在差异，插件会生成冲突副本供你合并，绝不静默覆盖任何一方的修改。

相比同类插件，其特色在于极致的性能优化与数据安全。采用零 I/O 快速指纹剪枝技术，数千篇笔记的全库核对耗时不足 50 毫秒，大幅降低移动端 CPU 占用与发热。同时支持 AES-256-GCM 端到端可选加密，上传至网盘的均为密文，并可通过一键配对码快速迁移多设备配置，无需重复申请开发者权限。

使用前需注意，该插件依赖百度网盘开放平台，需先在电脑端完成个人开发者认证并创建应用获取密钥。它不适合对隐私有极端要求且无法接受云端存储任何形式数据（即使是密文）的用户，也不适用于非百度网盘生态的同步需求。此外，移动端首次同步大量文件时建议保持亮屏，以避免系统休眠切断网络。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


