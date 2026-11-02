---
uid: 1793625611454000
title: "Obsidian 插件：Cumulus"
tags: ["文件管理", "第三方工具集成", "备份与恢复", "obsidian插件"]
description: "Sync your vault with pCloud on Android, iOS and desktop. Sign in, pick a folder, and you're done. Free and open source. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Cumulus

> [!Note] 插件名片
> - 插件名称：Cumulus
> - 插件作者：qsn
> - 插件说明：Sync your vault with pCloud on Android, iOS and desktop. Sign in, pick a folder, and you're done. Free and open source. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['文件管理', '第三方工具集成', '备份与恢复', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/q-sn/cumulus-sync)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?cumulus-sync)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/q-sn/cumulus-sync/master/README.md)



## 概述

Cumulus 是一款免费开源的 Obsidian 插件，旨在解决移动端无法直接访问 pCloud 中笔记库的痛点。它通过在手机或平板上维护一份本地副本，并与 pCloud 文件夹进行双向同步，让 Obsidian 在 Android 和 iOS 设备上也能流畅使用存储在 pCloud 中的笔记。你只需登录 pCloud 并选择对应的文件夹，插件便会自动完成后续同步，无需复杂配置。

典型场景是你在电脑上通过 pCloud Drive 管理笔记，但希望在手机上随时查阅或编辑。例如，你在通勤路上用手机修改了某篇笔记，打开 Obsidian 时插件会自动将更改上传至 pCloud；反之，你在电脑上更新的内容，下次打开手机 Obsidian 时也会自动下载。这种无缝衔接让笔记在电脑和手机间保持一致，且笔记仍保持为普通 Markdown 文件，兼容其他编辑器。

相比官方 Obsidian Sync，Cumulus 利用你已有的 pCloud 存储，无需额外付费，且支持 EU 和 US 账户。其特色在于智能冲突处理：若同一笔记在两端被修改，两个版本都会保留而非覆盖；若一端编辑另一端删除，编辑版本优先。此外，它利用 pCloud 的变更流技术，仅传输修改过的文件，即使面对大型笔记库也能保持快速同步，且文件传输经过优化以适配移动端内存限制。

使用前需注意，同步仅在 Obsidian 应用打开时运行，关闭应用后不会在后台同步。移动端有文件大小限制，超过 20MB 的文件会被跳过。目前不支持同步 `.obsidian` 配置文件夹，也不支持 pCloud Crypto 加密文件夹。如果你不依赖 pCloud 存储，或需要端到端加密功能，此插件可能不适合你。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


