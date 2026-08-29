---
uid: 1786577077953002
title: 'Obsidian 插件：Full Vault Mirror Sync'
tags: ['文件管理', '第三方工具集成', '备份与恢复', '效率工具', 'obsidian插件']
description: '用Windows的robocopy工具把源文件夹复制到目标文件夹。——Obsidian官方人员尚未对这个插件进行人工审核。'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Full Vault Mirror Sync

> [!Note] 插件名片
> - 插件名称：Full Vault Mirror Sync
> - 插件作者：Lester Lai
> - 插件说明：用Windows的robocopy工具把源文件夹复制到目标文件夹。——Obsidian官方人员尚未对这个插件进行人工审核。
> - 插件分类：['文件管理', '第三方工具集成', '备份与恢复', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/lesteraiagent/obsidian-full-vault-mirror-sync)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?full-vault-mirror-sync)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/lesteraiagent/obsidian-full-vault-mirror-sync/master/README.md)



## 概述

### 插件名称
Full Vault Mirror Sync

### 主要功能
借助 Windows 的 `robocopy` 工具，实现从源文件夹到目标文件夹的单向镜像同步。

### 适用场景
适用于在同一 Windows 机器上，让一个文件夹与另一个文件夹保持一致，如将当前 Obsidian 库镜像到本地文件夹、同步工作文件夹到其他 Windows 路径、维护与源文件夹布局和文件元数据一致的副本。

### 核心特色
- 仅适用于 Windows 系统的 Obsidian 桌面插件。
- 源路径默认是当前库根目录，可手动编辑。
- 支持自定义目标文件夹。
- 有手动同步按钮，还可选择基于定时器的自动同步。
- 自动同步开启时，Obsidian 加载后不久可进行启动同步。
- 同步前有安全验证，同步后有元数据验证。
- 验证失败可自动重试，最多 3 次。
- 提供英文和繁体中文双语警告和文档。

### 使用建议
该插件不是备份工具和版本化备份系统，使用 `robocopy /MIR` 同步会强制目标文件夹与源文件夹匹配，可能删除目标文件夹中的额外文件。使用前请谨慎评估，避免数据丢失。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


